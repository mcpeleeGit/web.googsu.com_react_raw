(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports={row:"Counter_row__szUMg",value:"Counter_value__WY6qU",button:"Counter_button__l0dSd",textbox:"Counter_textbox__1S_0T",asyncButton:"Counter_asyncButton__2_R4j Counter_button__l0dSd"}},50:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);a(51);var n=a(1),l=a.n(n),r=a(15),o=a.n(r),c=a(71),i=a(26),s=a.n(i),m=a(31),u=a(7),d=a(8),h=a(11),p=a(10),g=a(12),E=a(72),b=a(13),f=a(21),v=a(70),w=a(16),y=(a(57),new(function(){function e(){Object(u.a)(this,e),this.getDataKey=function(e){return localStorage.getItem(e)},this.setUserLogin=function(e){localStorage.setItem("isLogin",e)}}return Object(d.a)(e,[{key:"isLogin",value:function(){return"true"===localStorage.getItem("isLogin")}}]),e}())),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(f.a)(a)),a.state={collapsed:!0},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"bindClick",value:function(e){"LogOut"===e&&(y.setUserLogin("false"),console.log(y.isLogin()),window.location="/")}},{key:"render",value:function(){var e=this;return l.a.createElement("header",null,l.a.createElement(b.e,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},l.a.createElement(b.b,null,l.a.createElement(b.f,{tag:v.a,to:"/"},l.a.createElement("img",{src:"/img/icon/googsu.png",className:"logo",alt:"logo"}),"Googsu WebApplication1"),l.a.createElement(b.g,{onClick:this.toggleNavbar,className:"mr-2"}),l.a.createElement(b.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},l.a.createElement("ul",{className:"navbar-nav flex-grow"},l.a.createElement(b.c,null,l.a.createElement(b.d,{tag:v.a,className:"text-dark",to:"/"},l.a.createElement("img",{src:"/img/icon/home.png",className:"logo-menu",alt:"Home"}),"Home")),l.a.createElement(b.c,null,l.a.createElement(b.d,{tag:v.a,className:"text-dark",to:"/counter"},l.a.createElement("img",{src:"/img/icon/counter.png",className:"logo-menu",alt:"Counter"}),"Counter")),l.a.createElement(b.c,null,l.a.createElement(b.d,{tag:v.a,className:"text-dark",to:"/fetch-data"},l.a.createElement("img",{src:"/img/icon/fetchdata.png",className:"logo-menu",alt:"Fetch data"}),"Fetch data")),l.a.createElement(w.a,{title:"\u25a4ReBoPAW",id:"nav-dropdown"},l.a.createElement(w.a.Item,{eventKey:"4.1"},"What is ReBoPAW?"),l.a.createElement(w.a.Item,{eventKey:"4.2"},"Achitecture"),l.a.createElement(w.a.Item,{eventKey:"4.3"},"Tutorial"),l.a.createElement(w.a.Divider,null),l.a.createElement(w.a.Item,{eventKey:"4.4",href:"https://github.com/mcpeleeGit/onlyPHP",target:"_blank"},"DownLoad")),!y.isLogin()&&l.a.createElement(function(){return l.a.createElement(b.c,null,l.a.createElement(b.d,{tag:v.a,className:"text-dark",to:"/login"},l.a.createElement("img",{src:"/img/icon/login.png",className:"logo-menu",alt:"Login"}),"Login"))},null),y.isLogin()&&l.a.createElement(function(){return l.a.createElement(w.a,{title:"Account",id:"my-dropdown"},l.a.createElement(w.a.Item,{eventKey:"4.1"},"What is ReBoPAW?"),l.a.createElement(w.a.Item,{eventKey:"4.2"},"Achitecture"),l.a.createElement(w.a.Item,{eventKey:"4.3"},"Tutorial"),l.a.createElement(w.a.Divider,null),l.a.createElement(w.a.Item,{eventKey:"4.4",onClick:e.bindClick.bind(e,"LogOut")},"LogOut"))},null))))))}}]),t}(n.Component);C.displayName=C.name;var N=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(b.b,null,this.props.children))}}]),t}(n.Component);N.displayName=N.name;var j=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Hello, world!"),l.a.createElement("p",null,"Welcome to my new single-page application, built with:"),l.a.createElement("img",{src:"/img/home.jpg",alt:"home",className:"w-100 p-3"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.php.net/"},"PHP")," Custom RESTful API"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.github.io/react/"},"React")," for client-side code"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://getbootstrap.com/"},"Bootstrap")," for layout and styling")),l.a.createElement("p",null,"I will add the application with emphasis on the following contents:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Client-side navigation"),". For example, click ",l.a.createElement("em",null,"Counter")," then ",l.a.createElement("em",null,"Back")," to return here."),l.a.createElement("li",null,l.a.createElement("strong",null,"PHP RESTful API"),". The PHP development environment based on Linux can be deployed at the lowest cost. The goal of the ",l.a.createElement("code",null,"PHP RESTful API")," is to make it possible to replace it with another system at any time with standard interfaces and access controls."),l.a.createElement("li",null,l.a.createElement("strong",null,"Efficient production builds"),". In production mode, development-time features are disabled, and your ",l.a.createElement("code",null,"dotnet publish")," configuration produces minified, efficiently bundled JavaScript files.")),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"ClientApp")," subdirectory is a standard React application based on the ",l.a.createElement("code",null,"create-react-app")," template. If you open a command prompt in that directory, you can run ",l.a.createElement("code",null,"npm")," commands such as ",l.a.createElement("code",null,"npm test")," or ",l.a.createElement("code",null,"npm install"),"."))}}]),t}(n.Component);j.displayName=j.name;var k=a(45),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={forecasts:[],loading:!0},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?l.a.createElement("div",null,l.a.createElement(k.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))):t.renderForecastsTable(this.state.forecasts);return l.a.createElement("div",null,l.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),l.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(m.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/customer/weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({forecasts:a,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return l.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Temp. (C)"),l.a.createElement("th",null,"Temp. (F)"),l.a.createElement("th",null,"Summary"))),l.a.createElement("tbody",null,e.map(function(e){return l.a.createElement("tr",{key:e.date},l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.temperatureC),l.a.createElement("td",null,e.temperatureF),l.a.createElement("td",null,e.summary))})))}}]),t}(n.Component);O.displayName=O.name;var L=a(24),x=a(19),T=a(5),S=a(39),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={currentCount:0},a.incrementCounter=a.incrementCounter.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Counter"),l.a.createElement(L.a,{key:"1",variant:"primary"},"This is a primary alert with"," ",l.a.createElement(L.a.Link,{href:"#"},"an example link"),". Give it a click if you like."),l.a.createElement(x.a,{variant:"primary"},"Primary")," ",l.a.createElement(x.a,{variant:"secondary"},"Secondary")," ",l.a.createElement(x.a,{variant:"success"},"Success")," ",l.a.createElement(x.a,{variant:"warning"},"Warning")," ",l.a.createElement(x.a,{variant:"danger"},"Danger")," ",l.a.createElement(x.a,{variant:"info"},"Info")," ",l.a.createElement(x.a,{variant:"light"},"Light")," ",l.a.createElement(x.a,{variant:"dark"},"Dark")," ",l.a.createElement(x.a,{variant:"link"},"Link"),l.a.createElement("hr",null),l.a.createElement(S.a,null,l.a.createElement(T.a,null,l.a.createElement(T.a.Img,{variant:"top",src:"/img/char11.jpg"}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,"Card title"),l.a.createElement(T.a.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),l.a.createElement(T.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),l.a.createElement(T.a,null,l.a.createElement(T.a.Img,{variant:"top",src:"/img/char12.jpg"}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,"Card title"),l.a.createElement(T.a.Text,null,"This card has supporting text below as a natural lead-in to additional content."," ")),l.a.createElement(T.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),l.a.createElement(T.a,null,l.a.createElement(T.a.Img,{variant:"top",src:"/img/char13.jpg"}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,"Card title"),l.a.createElement(T.a.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),l.a.createElement(T.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))),l.a.createElement(S.a,null,l.a.createElement(T.a,null,l.a.createElement(T.a.Img,{variant:"top",src:"/img/char21.jpg"}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,"Card title"),l.a.createElement(T.a.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),l.a.createElement(T.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),l.a.createElement(T.a,null,l.a.createElement(T.a.Img,{variant:"top",src:"/img/char22.jpg"}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,"Card title"),l.a.createElement(T.a.Text,null,"This card has supporting text below as a natural lead-in to additional content."," ")),l.a.createElement(T.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))),l.a.createElement(T.a,null,l.a.createElement(T.a.Img,{variant:"top",src:"/img/char23.jpg"}),l.a.createElement(T.a.Body,null,l.a.createElement(T.a.Title,null,"Card title"),l.a.createElement(T.a.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),l.a.createElement(T.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))),l.a.createElement("p",null,"This is a simple example of a React component."),l.a.createElement("p",{"aria-live":"polite"},"Current count: ",l.a.createElement("strong",null,this.state.currentCount)),l.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),t}(n.Component);P.displayName=P.name;var I=a(33),A=(a(61),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){var t={email:a.state.email,password:a.state.password};fetch("api/customer/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){a.setState({data:e,isLoading:!1}),console.log(e),"success"===e.result?(y.setUserLogin("true"),console.log(y.isLogin()),a.props.history.push("/")):alert(e.message)}).catch(function(e){return a.setState({error:e,isLoading:!1})}),e.preventDefault()},a.state={email:"",password:"",data:[],isLoading:!0},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"bindClick",value:function(e){alert(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Login"),l.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"SNS Account sign in"),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/naver.PNG",alt:"Log in with NAVER"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/instagram.png",alt:"Log in with Instagram",onClick:this.bindClick.bind(this,"instagram")}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/facebook.png",alt:"Log in with FaceBook"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/youtube.png",alt:"Log in with YouTube"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/twitter.png",alt:"Log in with Twitter"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/kakao.png",alt:"Log in with Kakao"}),l.a.createElement("img",{className:"mb-8 sns-icon",src:"/img/snsicon/google.png",alt:"Log in with Google"}),l.a.createElement("hr",null),l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Googsu Account sign in"),l.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:"required",autoFocus:"autoFocus",name:"email",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:"required",name:"password",onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in"),l.a.createElement(L.a,{key:"1",variant:"light"},"Forgot password?",l.a.createElement(L.a.Link,{href:"/member/PasswordReset"}," Password Reset"),".",l.a.createElement("br",null),"New to Googsu?",l.a.createElement(L.a.Link,{href:"/signup"}," Sign Up"),".")))}}]),t}(n.Component)),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){var t={email:a.state.email,password:a.state.password,passwordConfirm:a.state.passwordConfirm};t.password===t.passwordConfirm?(fetch("api/customer/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){a.setState({data:e,isLoading:!1}),console.log(e),"success"===e.result?a.props.history.push("/"):alert(e.message)}).catch(function(e){return a.setState({error:e,isLoading:!1})}),e.preventDefault()):alert("Your password and confirmation password do not match.")},a.state={email:"",password:"",passwordConfirm:"",data:[],isLoading:!0},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"SignUp"),l.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},l.a.createElement("img",{src:"/img/icon/googsu.png",alt:"Googsu.com SignUp"}),l.a.createElement("hr",null),l.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:"required",autoFocus:"autoFocus",name:"email",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:"required",name:"password",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"inputPasswordConfirm",className:"sr-only"},"Password Confirm"),l.a.createElement("input",{type:"password",id:"inputPasswordConfirm",className:"form-control",placeholder:"Password Confirm",required:"required",name:"passwordConfirm",onChange:this.handleChange}),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign up")))}}]),t}(n.Component);F.displayName=F.name;var _=a(48),B=a(29),W=a(34),D=Object(W.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),R=D.actions,q=R.increment,U=R.decrement,K=R.incrementByAmount,G=function(e){return function(t){setTimeout(function(){t(K(e))},1e3)}},H=function(e){return e.counter.value},J=D.reducer,z=a(22),M=a.n(z);function Y(){var e=Object(B.c)(H),t=Object(B.b)(),a=Object(n.useState)("2"),r=Object(_.a)(a,2),o=r[0],c=r[1];return l.a.createElement("div",null,l.a.createElement("div",{className:M.a.row},l.a.createElement("button",{className:M.a.button,"aria-label":"Increment value",onClick:function(){return t(q())}},"+"),l.a.createElement("span",{className:M.a.value},e),l.a.createElement("button",{className:M.a.button,"aria-label":"Decrement value",onClick:function(){return t(U())}},"-")),l.a.createElement("div",{className:M.a.row},l.a.createElement("input",{className:M.a.textbox,"aria-label":"Set increment amount",value:o,onChange:function(e){return c(e.target.value)}}),l.a.createElement("button",{className:M.a.button,onClick:function(){return t(K(Number(o)||0))}},"Add Amount"),l.a.createElement("button",{className:M.a.asyncButton,onClick:function(){return t(G(Number(o)||0))}},"Add Async")))}a(64);var V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).initializeUserInfo=Object(m.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("test");case 1:case"end":return e.stop()}},e)})),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.initializeUserInfo()}},{key:"render",value:function(){var e=y.isLogin()?O:A;return l.a.createElement(N,null,l.a.createElement(E.a,{exact:!0,path:"/",component:j}),l.a.createElement(E.a,{path:"/counter",component:P}),l.a.createElement(E.a,{path:"/fetch-data",component:e}),l.a.createElement(E.a,{path:"/login",component:A}),l.a.createElement(E.a,{path:"/signup",component:F}),l.a.createElement(Y,null))}}]),t}(n.Component);V.displayName=V.name;var $=Object(W.a)({reducer:{counter:J}}),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=document.getElementsByTagName("base")[0].getAttribute("href"),ee=document.getElementById("root");o.a.render(l.a.createElement(B.a,{store:$},l.a.createElement(c.a,{basename:Z},l.a.createElement(V,null))),ee),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):X(e)})}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.68b27757.chunk.js.map