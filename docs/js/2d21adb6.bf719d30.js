(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21adb6"],{bcfe:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"HHh LpR fFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),t.$q.screen.width>500?a("q-toolbar-title",[t._v("\n        QMarkdown\n        "),t.$q.screen.width<1077?a("q-tooltip",[t._v("\n          QMarkdown\n        ")]):t._e()],1):t._e(),a("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),a("q-drawer",{attrs:{bordered:"","content-style":"background-color: #f8f8ff"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-expansion-item",{attrs:{"expand-separator":"","default-opened":"",group:"somegroup",icon:"fas fa-cogs",label:"Playground",caption:"Markdown Types"}},[a("markdown-types")],1),a("q-expansion-item",{attrs:{"expand-separator":"",group:"somegroup",icon:"fas fa-link",label:"Essential Links"}},[a("q-list",[a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"http://quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("Docs")]),a("q-item-label",{attrs:{caption:""}},[t._v("quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.com/quasarframework/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"code"}})],1),a("q-item-section",[a("q-item-label",[t._v("Github")]),a("q-item-label",{attrs:{caption:""}},[t._v("github.com/quasarframework")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"http://chat.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"chat"}})],1),a("q-item-section",[a("q-item-label",[t._v("Discord Chat Channel")]),a("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"record_voice_over"}})],1),a("q-item-section",[a("q-item-label",[t._v("Forum")]),a("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.com/quasarframework"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"rss_feed"}})],1),a("q-item-section",[a("q-item-label",[t._v("Twitter")]),a("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1),a("q-separator"),a("q-item",{attrs:{clickable:"",to:"/docs"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"calendar_today"}})],1),a("q-item-section",[a("q-item-label",[t._v("QMarkdown docs")]),a("q-item-label",{attrs:{caption:""}},[t._v("Documentation")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/demo"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"calendar_today"}})],1),a("q-item-section",[a("q-item-label",[t._v("QMarkdown demo")]),a("q-item-label",{attrs:{caption:""}},[t._v("Interactively play with properties")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"calendar_today"}})],1),a("q-item-section",[a("q-item-label",[t._v("QMarkdown examples")]),a("q-item-label",{attrs:{caption:""}},[t._v("Examples of how to do it")])],1)],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=a("0967"),n=a("2b0e"),r=function(t,e){var a=window.open;if(!0===o["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==n["a"].prototype.$q.electron)return n["a"].prototype.$q.electron.shell.openExternal(t);var s=a(t,"_blank");if(s)return s.focus(),s;e&&e()},l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-list",{attrs:{dense:""}},[a("q-item-label",{attrs:{header:""}},[t._v("Supported Markdown")]),a("q-item",{attrs:{to:"/demo/abbreviations",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Abbreviations\n    ")])],1),a("q-item",{attrs:{to:"/demo/blockquotes",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Blockquotes\n    ")])],1),a("q-item",{attrs:{to:"/demo/code",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Code\n    ")])],1),a("q-item",{attrs:{to:"/demo/containers",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Containers\n    ")])],1),a("q-item",{attrs:{to:"/demo/deflists",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Definition Lists\n    ")])],1),a("q-item",{attrs:{to:"/demo/emojies",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Emojies\n    ")])],1),a("q-item",{attrs:{to:"/demo/emphasis",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Emphasis\n    ")])],1),a("q-item",{attrs:{to:"/demo/footnotes",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Footnotes\n    ")])],1),a("q-item",{attrs:{to:"/demo/heading",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Heading\n    ")])],1),a("q-item",{attrs:{to:"/demo/rules",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Horizontal Rules\n    ")])],1),a("q-item",{attrs:{to:"/demo/images",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Images\n    ")])],1),a("q-item",{attrs:{to:"/demo/insert",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Insert\n    ")])],1),a("q-item",{attrs:{to:"/demo/links",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Links\n    ")])],1),a("q-item",{attrs:{to:"/demo/lists",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Lists\n    ")])],1),a("q-item",{attrs:{to:"/demo/mark",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Mark\n    ")])],1),a("q-item",{attrs:{to:"/demo/subsuper",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Subscript/Superscript\n    ")])],1),a("q-item",{attrs:{to:"/demo/tables",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Tables\n    ")])],1),a("q-item",{attrs:{to:"/demo/tasklists",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Task Lists\n    ")])],1),a("q-item",{attrs:{to:"/demo/titles",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Titles\n    ")])],1),a("q-item",{attrs:{to:"/demo/typographic",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Typographic\n    ")])],1),a("q-item",{attrs:{to:"/demo/editor",exact:""}},[a("q-item-section",{staticClass:"ellipsis"},[t._v("\n      Editor\n    ")])],1)],1)},c=[],m={name:"Menu",data:function(){return{}}},q=m,p=a("2877"),d=Object(p["a"])(q,l,c,!1,null,null,null),v=d.exports,u={name:"MarkdownLayout",components:{MarkdownTypes:v},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:r}},_=u,b=Object(p["a"])(_,s,i,!1,null,null,null);e["default"]=b.exports}}]);