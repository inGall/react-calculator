(window["webpackJsonpreact-calculator"]=window["webpackJsonpreact-calculator"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(14),i=a.n(c),r=(a(23),a(3)),o=a(4),u=a(7),s=a(5),h=a(10),m=a(6),d=(a(24),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this;return l.a.createElement("div",{className:"button ".concat((e=this.props.children,isNaN(e)&&"."!==e&&"="!==e?"operator":null)),onClick:function(){return t.props.handleClick(t.props.children)}},this.props.children)}}]),t}(n.Component)),p=(a(25),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"clear-button",onClick:function(){return e.props.handleClick()}},this.props.children)}}]),t}(n.Component)),v=(a(26),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"value"},this.props.value)}}]),t}(n.Component)),w=a(31),k=(a(27),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={value:""},e.writeToValue=e.writeToValue.bind(Object(h.a)(e)),e.clearValue=e.clearValue.bind(Object(h.a)(e)),e.computeValue=e.computeValue.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"writeToValue",value:function(e){this.setState({value:this.state.value+e})}},{key:"computeValue",value:function(){if(""!==this.state.value)try{this.setState({value:w.a(this.state.value)})}catch(e){alert("Not valid operation")}}},{key:"clearValue",value:function(){this.setState({value:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"calc-wrapper"},l.a.createElement(v,{value:this.state.value}),l.a.createElement("div",{className:"row"},l.a.createElement(d,{handleClick:this.writeToValue},"8"),l.a.createElement(d,{handleClick:this.writeToValue},"7"),l.a.createElement(d,{handleClick:this.writeToValue},"9"),l.a.createElement(d,{handleClick:this.writeToValue},"/")),l.a.createElement("div",{className:"row"},l.a.createElement(d,{handleClick:this.writeToValue},"5"),l.a.createElement(d,{handleClick:this.writeToValue},"4"),l.a.createElement(d,{handleClick:this.writeToValue},"6"),l.a.createElement(d,{handleClick:this.writeToValue},"*")),l.a.createElement("div",{className:"row"},l.a.createElement(d,{handleClick:this.writeToValue},"1"),l.a.createElement(d,{handleClick:this.writeToValue},"2"),l.a.createElement(d,{handleClick:this.writeToValue},"3"),l.a.createElement(d,{handleClick:this.writeToValue},"+")),l.a.createElement("div",{className:"row"},l.a.createElement(d,{handleClick:this.writeToValue},"."),l.a.createElement(d,{handleClick:this.writeToValue},"0"),l.a.createElement(d,{handleClick:this.computeValue},"="),l.a.createElement(d,{handleClick:this.writeToValue},"-")),l.a.createElement("div",{className:"row"},l.a.createElement(p,{handleClick:this.clearValue},"Clear"))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.eb5ec8ea.chunk.js.map