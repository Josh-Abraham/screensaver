(this.webpackJsonpscreensaver=this.webpackJsonpscreensaver||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(6),o=n(0),s=n.n(o),c=n(8),i=n.n(c),r=(n(70),n(71),n(61)),d=n(19),u=n(20),l=n(16),p=n(24),h=n(22),b=n(146),j=n(141),m=n(147),g=n(143),f=n(140),O=(n(72),n(137)),v=Object(O.a)({palette:{type:"dark",primary:{main:"#ffffff"},secondary:{main:"#b9f6ca"}}}),y=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(u.a)(n,[{key:"createMenuItems",value:function(){return this.props.dropdownOptions.map((function(e){return Object(a.jsx)(b.a,{id:e,value:e,children:"".concat(e)},e)}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.props.handleChange(t)}},{key:"render",value:function(){var e=this.createMenuItems();return Object(a.jsx)("div",{className:"dropdownWrapper",children:Object(a.jsx)(f.a,{theme:v,children:Object(a.jsxs)(j.a,{className:"dropdownSelect",children:[Object(a.jsx)(m.a,{id:"Dropdown_".concat(this.props.dropdownName),color:"primary",style:{fontSize:"16px"},children:this.props.dropdownName}),Object(a.jsx)(g.a,{id:"Dropdown_Select_".concat(this.props.dropdownName),value:this.props.currentSelection,onChange:this.handleChange,children:e})]})})})}}]),n}(o.Component);y.defaultProps={dropdownOptions:[],dropdownName:""};var S=y,w=n(142),x=n(148),k=n(144),C=(n(78),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props.soundSelections),Object(a.jsx)("div",{className:"outerMultiWrap",children:Object(a.jsx)(f.a,{theme:v,children:Object(a.jsxs)(j.a,{className:"multiSelectWrapper",children:[Object(a.jsx)(m.a,{id:"demo-mutiple-checkbox-label",style:{fontSize:"16px"},children:"Background Sounds"}),Object(a.jsx)(g.a,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:[],onChange:this.props.handleChange,input:Object(a.jsx)(w.a,{}),renderValue:function(e){return e.join(", ")},children:this.props.sounds.map((function(t){return Object(a.jsxs)(b.a,{value:t,children:[Object(a.jsx)(k.a,{checked:e.props.soundSelections.indexOf(t)>-1}),Object(a.jsx)(x.a,{primary:t})]},t)}))})]})})})}}]),n}(o.Component)),F=(n(79),n.p+"static/media/Close Waterfall.6c23fa93.mp3"),N=n.p+"static/media/Distant Waterfall.0fd6e9ec.mp3",W=n.p+"static/media/Fire.f4c6f4c6.mp3",D=n.p+"static/media/Rain.b5c3b1ed.mp3",B=n.p+"static/media/Stream.64c0fd5e.mp3",P=n.p+"static/media/Summer Night.ae7ba899.mp3",R=n.p+"static/media/Waves.264674d5.mp3",L=n(47),A=n.n(L),M=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.playing?A.a.status.PLAYING:A.a.status.PAUSED;return Object(a.jsx)(A.a,{url:this.props.soundFile,playStatus:e,onLoading:this.handleSongLoading,onPlaying:this.handleSongPlaying,onFinishedPlaying:this.handleSongFinishedPlaying,loop:!0,autoLoad:!0})}}]),n}(o.Component),T=n(60),G=n.n(T),I={"Autumn Forest":"https://youtu.be/TOHYkccYfUk?t=23","Beach Bonfire":"https://youtu.be/Y1y9GAjuSt8?t=24","Christmas Fireplace":"https://www.youtube.com/watch?v=x7M4oU2HdFE","Kiss Goodnight":"https://www.youtube.com/watch?v=QqGjuloQGgo",Rainforest:"https://www.youtube.com/watch?v=8myYyMg1fFE","Tropical Beach":"https://www.youtube.com/watch?v=DGIXT7ce3vQ","Winter Fireplace":"https://www.youtube.com/watch?v=oakA7RLvmWs"},U=["Autumn Forest","Beach Bonfire","Christmas Fireplace","Kiss Goodnight","Rainforest","Tropical Beach","Winter Fireplace"],Y=["Close Waterfall","Distant Waterfall","Fire","Rain","Stream","Summer Night","Waves"],E={"Close Waterfall":F,"Distant Waterfall":N,Fire:W,Rain:D,Stream:B,"Summer Night":P,Waves:R},H=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={background:"",backgroundURL:"",play:!0,selectedSounds:[]},e.play=e.play.bind(Object(l.a)(e)),e.pause=e.pause.bind(Object(l.a)(e)),e.handleBackgroundDropdown=e.handleBackgroundDropdown.bind(Object(l.a)(e)),e.handleSoundChange=e.handleSoundChange.bind(Object(l.a)(e)),e.getSoundComponents=e.getSoundComponents.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"getDropDown",value:function(){return Object(a.jsx)(S,{id:"dropdownAddRecipe",dropdownOptions:U,dropdownName:"Select Background",handleChange:this.handleBackgroundDropdown,currentSelection:this.state.background})}},{key:"handleBackgroundDropdown",value:function(e){this.setState({background:e,backgroundURL:I[e]})}},{key:"getMultiSelect",value:function(){return Object(a.jsx)(C,{id:"dropdownAddRecipe",sounds:Y,dropdownName:"Select Background",soundSelections:this.state.selectedSounds,handleChange:this.handleSoundChange})}},{key:"handleSoundChange",value:function(e){var t=e.target.value[0],n=this.state.selectedSounds.indexOf(t),a=Object(r.a)(this.state.selectedSounds);n>-1?a.splice(n,1):a.push(t),this.setState({selectedSounds:a})}},{key:"pause",value:function(){this.setState({play:!1})}},{key:"play",value:function(){this.setState({play:!0})}},{key:"getSoundComponents",value:function(){var e=this;return this.state.selectedSounds.map((function(t){return Object(a.jsx)(M,{soundFile:E[t],playing:e.state.play})}))}},{key:"render",value:function(){var e=this.getDropDown(),t=this.getMultiSelect(),n=this.getSoundComponents();return Object(a.jsxs)("div",{className:"outerWrapper",children:[Object(a.jsxs)("div",{className:"videoWrapper",children:[Object(a.jsx)(G.a,{url:this.state.backgroundURL,width:"1620px",height:"1200px",controls:!1,muted:!0,playing:!0,onPause:this.pause,onPlay:this.play}),n]}),Object(a.jsxs)("div",{className:"playerOptions",children:[Object(a.jsx)("div",{className:"playerTitle",children:"Hygge Time"}),e,t]})]})}}]),n}(o.Component);var Q=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(H,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,149)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),_()}},[[99,1,2]]]);
//# sourceMappingURL=main.3fb3dfdf.chunk.js.map