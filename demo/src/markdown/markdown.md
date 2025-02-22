QMarkdown
===

QMarkdown is a [Quasar App Extension](https://v1.quasar.dev/app-extensions/introduction). It provides the ability for your web app to display markdown.

# Features
- Abbreviations
- Blockquotes
- Code and Code Highlighting
- Containers
- Definition Lists
- Emojies
- Emphasis
- Footnotes
- Headings
- Images
- Inserts
- Links
- Lists
- Marks
- Rules
- Subscript/Superscript
- Tables
- Tasklists
- Titles
- Typography

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qmarkdown
```

# Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove @quasar/qmarkdown
```

# Describe
You can use `quasar describe QMarkdown`

# Demo Project (source)
Can be found [here](https://github.com/quasarframework/app-extension-qmarkdown/tree/master/demo).

# Demo
Can be found [here](https://quasarframework.github.io/app-extension-qmarkdown/demo).

# Working with markdown
There are two way to pass your markdown content to QMarkdown: Vue slot or property.

QMarkdown also comes with a Webpack loader that allows you to import your markdown directly into your code.

Also, you have the ability to get the TOC (Table of Contents), if one is generated, and display that as well.

## Using a Vue slot
You can simply use a Vue slot to display markdown.

In your HTML:
```html
<q-markdown>
Put your markdown here

Classic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:

Shortcuts (emoticons): :-) :-( 8-) ;)
</q-markdown>
```
However, this can be a bit inconvenient because linters, if you are using one, may cause you to get weird errors as a result of unexpected language constructs that it's unfamiliar with.

The recommended way, would be to import the markdown to be used so that it doesn't interfere with your linter.

## Importing Markdown
QMarkdown comes with a Webpack loader for importing markdown files directly into your code.

In your JavaScript:
```js
import markdown from '../markdown/calendar.md'

export default {
  name: 'MyPageOrComponent',

  data () {
    return {
      markdown: markdown
    }
  },
...
```
And, in your HTML:
```html
<q-markdown :src="markdown" />
```
# Setting up Table of Contents
You enable a TOC by setting `:toc="true"`. The data in the TOC is based on HTML Headings (H1-H6). You can change the number of headings that you are interested in by using the `toc-start` and `toc-end` properties.

To get the data for the TOC, you must use the `@data` event.

HTML
```html
<q-markdown :src="markdown" toc @data="onToc" />
```

JavaScript:
```js
methods: {
  onToc (toc) {
    this.toc = toc
  }
}
```

The TOC data looks like this:
```
[
  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: []},
  {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}
]
```

If you desire a hierarchical tree of data instead, do the following:

HTML
```html
<q-markdown ref="markdown" :src="markdown" toc @data="onToc" />
```

JavaScript:
```js
methods: {
  onToc (toc) {
    this.toc = this.$refs.markdown.makeTree(toc)
  }
}
```

The TOC data will be transformed to the following:
```
[
  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: [
    {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}
  ]}
  
]
```

# API

## Vue Properties
| Vue&nbsp;Property | Type	| Description |
|---|---|---|
| src | String | Pass the markdown as a string instead of a slot |
| no-html | Boolean | Disable HTML tags in source |
| no-link | Boolean | Disable conversion of links |
| no-linkify | Boolean | Disable auto-convert URL-like text to links |
| no-typographer | Boolean | Disable language-neutral replacement + quotes beautification |
| no-breaks | Boolean | Disable conversion of '\\n' into <br> |
| no-highlight | Boolean | Disable code highlighter |
| no-emoji | Boolean | Disable emojie conversion |
| no-subscript | Boolean | Disable subscript conversion |
| no-superscript | Boolean | Disable superscript conversion |
| no-footnote | Boolean | Disable footnote conversion |
| no-deflist | Boolean | Disable definition list conversion |
| no-abbreviation | Boolean | Disable abbreviation conversion |
| no-insert | Boolean | Disable insert conversion |
| no-mark | Boolean | Disable mark conversion |
| no-image | Boolean | Disable image conversion |
| no-tasklist | Boolean | Disable tasklist conversion |
| no-container | Boolean | Disable container conversion |
| toc | Boolean | Generate a TOC; received with `data` event |
| toc-start | Number | [1-5] The number defines the starting header (ex: 1 == h1, 2 == h2, etc) |
| toc-end | Number | [2-6] The number defines the ending header (ex: 3 == h3, 4 == h4, etc). This number must be greater than the `toc-start` property or it will be ignored |
| task-lists-enable | Boolean | set to true to enable task lists checkboxes (not read-only) |
| task-lists-label | Boolean | to wrap the rendered list items in a <label> element for UX purposes |
| task-lists-enable-after | Boolean | to add the label after the checkbox |
| content-class | [String, Object, Array] | Class definitions to be attributed to the markdown |
| content-style | [String, Object, Array] | Style definitions to be attributed to the markdown |

## Vue Events
| Vue Event | Description |
|---|---|
| data | If the `toc` proerty is set to `true`, this event will occur containing any TOC data, if there is any. This is an array of flat data |

Given markdown that looks like this:
```
## h2 Heading

### h3 Heading
```

The TOC data looks like this:
```
[
  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: []},
  {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}
]
```

## Vue Methods
| Vue Method | Description |
|---|---|
| makeTree | Pass into this function the results from the @data to have the data array transformed into a hieracrhial tree. |

The TOC data will be transformed to the following:
```
[
  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: [
    {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}
  ]}
  
]
```

## Vue Slots
| Vue Slot | Description |
|---|---|
| default | The default slot - this slot overrides anything that may be passed in via the `src` property. |

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown/demo/dist/spa/#/images).