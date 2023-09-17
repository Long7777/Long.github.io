import{c as h,r,w as O,l as Q,h as d,Z as D,_ as q,U as S,M as b,V as R,a0 as n,f as _,O as E,R as H,S as k,a3 as L}from"./index.40ee3341.js";import{Q as M}from"./QSpinner.faf9e1a0.js";import{c as P,h as U}from"./render.37b9be08.js";const W={ratio:[String,Number]};function Z(e,a){return h(()=>{const s=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const G=16/9;var x=P({name:"QImg",props:{...W,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:G},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:s}){const o=r(e.initialRatio),f=Z(e,o);let i=null,u=!1;const l=[r(null),r(p())],c=r(0),g=r(!1),m=r(!1),z=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),T=h(()=>({width:e.width,height:e.height})),B=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),N=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));O(()=>I(),$);function I(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function p(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function $(t){i!==null&&(clearTimeout(i),i=null),m.value=!1,t===null?(g.value=!1,l[c.value^1].value=p()):g.value=!0,l[c.value].value=t}function A({target:t}){u!==!0&&(i!==null&&(clearTimeout(i),i=null),o.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,v){u===!0||v===1e3||(t.complete===!0?j(t):i=setTimeout(()=>{i=null,w(t,v+1)},50))}function j(t){u!==!0&&(c.value=c.value^1,l[c.value].value=null,g.value=!1,m.value=!1,s("load",t.currentSrc||t.src))}function V(t){i!==null&&(clearTimeout(i),i=null),g.value=!1,m.value=!0,l[c.value].value=null,l[c.value^1].value=p(),s("error",t)}function C(t){const v=l[t].value,y={key:"img_"+t,class:B.value,style:N.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return c.value===t?(y.class+=" q-img__image--waiting",Object.assign(y,{onLoad:A,onError:V})):y.class+=" q-img__image--loaded",d("div",{class:"q-img__container absolute-full",key:"img"+t},d("img",y))}function F(){return g.value!==!0?d("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},U(a[m.value===!0?"error":"default"])):d("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[d(M,{color:e.spinnerColor,size:e.spinnerSize})])}return $(I()),Q(()=>{u=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const t=[];return f.value!==null&&t.push(d("div",{key:"filler",style:f.value})),m.value!==!0&&(l[0].value!==null&&t.push(C(0)),l[1].value!==null&&t.push(C(1))),t.push(d(D,{name:"q-transition--fade"},F)),d("div",{class:z.value,style:T.value,role:"img","aria-label":e.alt},t)}}}),J="/assets/vis_of_my_interests.78678bfa.png",K="/assets/author_pic.9ab43ad8.jpg";const X={name:"AuthorInfo",setup(){return{author_pic:K}}},Y=n("h3",null,"Author Intro",-1),ee={class:"intro"},te={class:"intro_text"},ne=n("h2",{class:"intro_title"},"\u7B80 \u4ECB",-1);function ie(e,a,s,o,f,i){const u=S("InfoFilled"),l=S("el-icon");return b(),R("div",null,[Y,n("div",ee,[_(x,{class:"author_pic",src:o.author_pic,lazy:""},null,8,["src"]),n("div",te,[ne,_(l,null,{default:E(()=>[_(u)]),_:1}),H("\u4E00\u4E2A\u666E\u901A\u7684\u70DF\u9152\u751F\uFF0C\u767D\u5929\u7814\u7A76\u751F\uFF0C\u665A\u4E0A\u7814\u7A76\u6B7B ")])])])}var le=q(X,[["render",ie]]);const ae=n("h3",{class:"cm_title",style:{}},"Research Results",-1),oe=n("br",null,null,-1),re={class:"res_result"},se={class:"res_title"},ue=n("br",null,null,-1),ce={class:"res_intro"},de=n("br",null,null,-1),_e=["href"],ge={mounted(){console.log("RR\u5DF2\u7ECF\u6302\u8F7D")},setup(){return{props}}},me=Object.assign(ge,{__name:"ResearchResults",props:["pic_url","title","intro","url"],setup(e){return(a,s)=>(b(),R("div",null,[ae,oe,n("div",re,[_(x,{class:"pic",src:e.pic_url,lazy:""},null,8,["src"]),n("div",null,[n("text",se,k(e.title),1),ue,n("text",ce,k(e.intro),1),de,n("a",{href:e.url},"Link Here",8,_e)])])]))}});let he=r("Deep latent representation enhancement method for social recommendation"),fe=r("https://godoorsun.org/assets/homepage_images/muse.jpg"),ve=r("Social recommendation can efectively improve recommendation performance by leveraging social relationships to alleviate the sparsity of user-item interaction data. Because these connections in social recommendation can be easily represented as graph-structured data, social recommendation based on graph neural networks has received signifcant attention."),ye=r("https://link.springer.com/article/10.1007/s10844-023-00802-3");const Se={name:"AboutIndex",components:{AuthorInfo:le,ResearchResultsVue:me},mounted(){console.log("Index\u5DF2\u7ECF\u88AB\u6302\u8F7D")},setup(){const e=L();function a(){e.push({path:"/test"})}return{goTest:a,vmi:J,title:he,pic_url:fe,intro:ve,url:ye}}},pe=n("div",null,[n("h1",null,"Welcome to my page")],-1),be={class:"interest-pic"},Re=n("div",null,[n("h3",{class:"cm_title"},"Recent Reading")],-1);function xe(e,a,s,o,f,i){const u=S("ResearchResultsVue"),l=S("AuthorInfo");return b(),R("div",null,[pe,n("div",be,[_(x,{id:"vmi",src:o.vmi,lazy:""},null,8,["src"])]),n("div",null,[_(u,{title:o.title,pic_url:o.pic_url,intro:o.intro,url:o.url},null,8,["title","pic_url","intro","url"])]),Re,_(l)])}var Ce=q(Se,[["render",xe]]);export{Ce as default};