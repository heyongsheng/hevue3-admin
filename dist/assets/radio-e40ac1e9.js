import{b_ as xl,S as Se,bC as Rl,aa as H,aA as De,aQ as vl,W as Ll,b$ as gl,e as z,ac as ye,X as h,bB as hl,bS as _l,d as A,Y as X,o as C,c as $,j as I,H as se,c0 as Al,h as r,i as Fl,$ as g,a0 as G,B as ql,I as U,aC as q,a3 as oe,a7 as M,ao as Z,c1 as en,bT as Kl,bV as ln,F as Ae,au as yl,r as Ce,a6 as Fe,a9 as K,aT as Wl,a5 as Sl,bG as qe,aK as nn,k as P,w as E,g as ne,c2 as Tl,an as ml,m as R,bI as bl,a8 as Cl,bU as Re,b8 as N,bF as on,O as Ol,bA as Nl,am as wl,c3 as tn,aD as $l,ab as ae,c4 as he,br as an,c5 as pl,at as Vl,aG as sn,c6 as rn,C as un,bs as dn,a2 as cn,c7 as pn,V as fn,ak as Ml,c8 as vn,bt as mn,c9 as bn,ca as gn,aB as le,G as hn,af as Pe,ag as fl,aP as W,cb as yn,cc as Sn,ap as Bl}from"./index-5f3dae94.js";import{i as zl,s as Cn}from"./overlay-e3278dbe.js";import{d as Pl,C as On}from"./tag-03924c0e.js";const wn=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),In=e=>xl[e||"default"],En=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Hl=Se({size:Rl,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),kn=Se({...Hl,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),Gl={[H]:e=>De(e)||vl(e)||Ll(e),[gl]:e=>De(e)||vl(e)||Ll(e)},jl=Symbol("radioGroupKey"),Ql=(e,l)=>{const i=z(),c=ye(jl,void 0),p=h(()=>!!c),f=h({get(){return p.value?c.modelValue:e.modelValue},set(v){p.value?c.changeEvent(v):l&&l(H,v),i.value.checked=e.modelValue===e.label}}),a=hl(h(()=>c==null?void 0:c.size)),m=_l(h(()=>c==null?void 0:c.disabled)),s=z(!1),S=h(()=>m.value||p.value&&f.value!==e.label?-1:0);return{radioRef:i,isGroup:p,radioGroup:c,focus:s,size:a,disabled:m,tabIndex:S,modelValue:f}},Ln=["value","name","disabled"],Tn=A({name:"ElRadio"}),$n=A({...Tn,props:kn,emits:Gl,setup(e,{emit:l}){const i=e,c=X("radio"),{radioRef:p,radioGroup:f,focus:a,size:m,disabled:s,modelValue:S}=Ql(i,l);function v(){M(()=>l("change",S.value))}return(u,y)=>{var w;return C(),$("label",{class:g([r(c).b(),r(c).is("disabled",r(s)),r(c).is("focus",r(a)),r(c).is("bordered",u.border),r(c).is("checked",r(S)===u.label),r(c).m(r(m))])},[I("span",{class:g([r(c).e("input"),r(c).is("disabled",r(s)),r(c).is("checked",r(S)===u.label)])},[se(I("input",{ref_key:"radioRef",ref:p,"onUpdate:modelValue":y[0]||(y[0]=T=>Fl(S)?S.value=T:null),class:g(r(c).e("original")),value:u.label,name:u.name||((w=r(f))==null?void 0:w.name),disabled:r(s),type:"radio",onFocus:y[1]||(y[1]=T=>a.value=!0),onBlur:y[2]||(y[2]=T=>a.value=!1),onChange:v},null,42,Ln),[[Al,r(S)]]),I("span",{class:g(r(c).e("inner"))},null,2)],2),I("span",{class:g(r(c).e("label")),onKeydown:y[3]||(y[3]=q(()=>{},["stop"]))},[G(u.$slots,"default",{},()=>[ql(U(u.label),1)])],34)],2)}}});var Vn=oe($n,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const Mn=Se({...Hl,name:{type:String,default:""}}),Bn=["value","name","disabled"],zn=A({name:"ElRadioButton"}),Pn=A({...zn,props:Mn,setup(e){const l=e,i=X("radio"),{radioRef:c,focus:p,size:f,disabled:a,modelValue:m,radioGroup:s}=Ql(l),S=h(()=>({backgroundColor:(s==null?void 0:s.fill)||"",borderColor:(s==null?void 0:s.fill)||"",boxShadow:s!=null&&s.fill?`-1px 0 0 0 ${s.fill}`:"",color:(s==null?void 0:s.textColor)||""}));return(v,u)=>{var y;return C(),$("label",{class:g([r(i).b("button"),r(i).is("active",r(m)===v.label),r(i).is("disabled",r(a)),r(i).is("focus",r(p)),r(i).bm("button",r(f))])},[se(I("input",{ref_key:"radioRef",ref:c,"onUpdate:modelValue":u[0]||(u[0]=w=>Fl(m)?m.value=w:null),class:g(r(i).be("button","original-radio")),value:v.label,type:"radio",name:v.name||((y=r(s))==null?void 0:y.name),disabled:r(a),onFocus:u[1]||(u[1]=w=>p.value=!0),onBlur:u[2]||(u[2]=w=>p.value=!1)},null,42,Bn),[[Al,r(m)]]),I("span",{class:g(r(i).be("button","inner")),style:Z(r(m)===v.label?r(S):{}),onKeydown:u[3]||(u[3]=q(()=>{},["stop"]))},[G(v.$slots,"default",{},()=>[ql(U(v.label),1)])],38)],2)}}});var Ul=oe(Pn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Dn=Se({id:{type:String,default:void 0},size:Rl,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Rn=Gl,An=["id","aria-label","aria-labelledby"],Fn=A({name:"ElRadioGroup"}),qn=A({...Fn,props:Dn,emits:Rn,setup(e,{emit:l}){const i=e,c=X("radio"),p=en(),f=z(),{formItem:a}=Kl(),{inputId:m,isLabeledByFormItem:s}=ln(i,{formItemContext:a}),S=u=>{l(H,u),M(()=>l("change",u))};Ae(()=>{const u=f.value.querySelectorAll("[type=radio]"),y=u[0];!Array.from(u).some(w=>w.checked)&&y&&(y.tabIndex=0)});const v=h(()=>i.name||p.value);return yl(jl,Ce({...Fe(i),changeEvent:S,name:v})),K(()=>i.modelValue,()=>{i.validateEvent&&(a==null||a.validate("change").catch(u=>Wl()))}),(u,y)=>(C(),$("div",{id:r(m),ref_key:"radioGroupRef",ref:f,class:g(r(c).b("group")),role:"radiogroup","aria-label":r(s)?void 0:u.label||"radio-group","aria-labelledby":r(s)?r(a).labelId:void 0},[G(u.$slots,"default")],10,An))}});var Xl=oe(qn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const po=Sl(Vn,{RadioButton:Ul,RadioGroup:Xl}),fo=qe(Xl);qe(Ul);const Yl=Se({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:nn,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Kn={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Wn=A({name:"ElTag"}),Nn=A({...Wn,props:Yl,emits:Kn,setup(e,{emit:l}){const i=e,c=hl(),p=X("tag"),f=h(()=>{const{type:s,hit:S,effect:v,closable:u,round:y}=i;return[p.b(),p.is("closable",u),p.m(s),p.m(c.value),p.m(v),p.is("hit",S),p.is("round",y)]}),a=s=>{l("close",s)},m=s=>{l("click",s)};return(s,S)=>s.disableTransitions?(C(),$("span",{key:0,class:g(r(f)),style:Z({backgroundColor:s.color}),onClick:m},[I("span",{class:g(r(p).e("content"))},[G(s.$slots,"default")],2),s.closable?(C(),P(r(ml),{key:0,class:g(r(p).e("close")),onClick:q(a,["stop"])},{default:E(()=>[ne(r(Tl))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)):(C(),P(bl,{key:1,name:`${r(p).namespace.value}-zoom-in-center`,appear:""},{default:E(()=>[I("span",{class:g(r(f)),style:Z({backgroundColor:s.color}),onClick:m},[I("span",{class:g(r(p).e("content"))},[G(s.$slots,"default")],2),s.closable?(C(),P(r(ml),{key:0,class:g(r(p).e("close")),onClick:q(a,["stop"])},{default:E(()=>[ne(r(Tl))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)]),_:3},8,["name"]))}});var Hn=oe(Nn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Gn=Sl(Hn),Jl=Symbol("ElSelectGroup"),Ke=Symbol("ElSelect");function jn(e,l){const i=ye(Ke),c=ye(Jl,{disabled:!1}),p=h(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),f=h(()=>i.props.multiple?u(i.props.modelValue,e.value):y(e.value,i.props.modelValue)),a=h(()=>{if(i.props.multiple){const t=i.props.modelValue||[];return!f.value&&t.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),m=h(()=>e.label||(p.value?"":e.value)),s=h(()=>e.value||e.label||""),S=h(()=>e.disabled||l.groupDisabled||a.value),v=Cl(),u=(t=[],O)=>{if(p.value){const k=i.props.valueKey;return t&&t.some(j=>Re(N(j,k))===N(O,k))}else return t&&t.includes(O)},y=(t,O)=>{if(p.value){const{valueKey:k}=i.props;return N(t,k)===N(O,k)}else return t===O},w=()=>{!e.disabled&&!c.disabled&&(i.hoverIndex=i.optionsArray.indexOf(v.proxy))};K(()=>m.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),K(()=>e.value,(t,O)=>{const{remote:k,valueKey:j}=i.props;if(Object.is(t,O)||(i.onOptionDestroy(O,v.proxy),i.onOptionCreate(v.proxy)),!e.created&&!k){if(j&&typeof t=="object"&&typeof O=="object"&&t[j]===O[j])return;i.setSelected()}}),K(()=>c.disabled,()=>{l.groupDisabled=c.disabled},{immediate:!0});const{queryChange:T}=Re(i);return K(T,t=>{const{query:O}=r(t),k=new RegExp(wn(O),"i");l.visible=k.test(m.value)||e.created,l.visible||i.filteredOptionsCount--},{immediate:!0}),{select:i,currentLabel:m,currentValue:s,itemSelected:f,isDisabled:S,hoverItem:w}}const Qn=A({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=X("select"),i=Ce({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:c,itemSelected:p,isDisabled:f,select:a,hoverItem:m}=jn(e,i),{visible:s,hover:S}=Fe(i),v=Cl().proxy;a.onOptionCreate(v),on(()=>{const y=v.value,{selected:w}=a,t=(a.props.multiple?w:[w]).some(O=>O.value===v.value);M(()=>{a.cachedOptions.get(y)===v&&!t&&a.cachedOptions.delete(y)}),a.onOptionDestroy(y,v)});function u(){e.disabled!==!0&&i.groupDisabled!==!0&&a.handleOptionSelect(v,!0)}return{ns:l,currentLabel:c,itemSelected:p,isDisabled:f,select:a,hoverItem:m,visible:s,hover:S,selectOptionClick:u,states:i}}});function Un(e,l,i,c,p,f){return se((C(),$("li",{class:g([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...a)=>e.hoverItem&&e.hoverItem(...a)),onClick:l[1]||(l[1]=q((...a)=>e.selectOptionClick&&e.selectOptionClick(...a),["stop"]))},[G(e.$slots,"default",{},()=>[I("span",null,U(e.currentLabel),1)])],34)),[[Ol,e.visible]])}var Il=oe(Qn,[["render",Un],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Xn=A({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ye(Ke),l=X("select"),i=h(()=>e.props.popperClass),c=h(()=>e.props.multiple),p=h(()=>e.props.fitInputWidth),f=z("");function a(){var m;f.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return Ae(()=>{a(),Nl(e.selectWrapper,a)}),{ns:l,minWidth:f,popperClass:i,isMultiple:c,isFitInputWidth:p}}});function Yn(e,l,i,c,p,f){return C(),$("div",{class:g([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:Z({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[G(e.$slots,"default")],6)}var Jn=oe(Xn,[["render",Yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function Zn(e){const{t:l}=wl();return Ce({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const xn=(e,l,i)=>{const{t:c}=wl(),p=X("select");tn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},h(()=>e.suffixTransition===!1));const f=z(null),a=z(null),m=z(null),s=z(null),S=z(null),v=z(null),u=z(null),y=z(-1),w=$l({query:""}),T=$l(""),t=z([]);let O=0;const{form:k,formItem:j}=Kl(),Oe=h(()=>!e.filterable||e.multiple||!l.visible),x=h(()=>e.disabled||(k==null?void 0:k.disabled)),We=h(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!x.value&&l.inputHovering&&n}),we=h(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ne=h(()=>p.is("reverse",we.value&&l.visible&&e.suffixTransition)),Ie=h(()=>e.remote?300:0),pe=h(()=>e.loading?e.loadingText||c("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||c("el.select.noMatch"):l.options.size===0?e.noDataText||c("el.select.noData"):null),B=h(()=>{const n=Array.from(l.options.values()),o=[];return t.value.forEach(d=>{const b=n.findIndex(L=>L.currentLabel===d);b>-1&&o.push(n[b])}),o.length?o:n}),He=h(()=>Array.from(l.cachedOptions.values())),Ge=h(()=>{const n=B.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),re=hl(),je=h(()=>["small"].includes(re.value)?"small":"default"),Qe=h({get(){return l.visible&&pe.value!==!1},set(n){l.visible=n}});K([()=>x.value,()=>re.value,()=>k==null?void 0:k.size],()=>{M(()=>{Q()})}),K(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),K(()=>e.modelValue,(n,o)=>{e.multiple&&(Q(),n&&n.length>0||a.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",_(l.query))),fe(),e.filterable&&!e.multiple&&(l.inputLength=20),!zl(n,o)&&e.validateEvent&&(j==null||j.validate("change").catch(d=>Wl()))},{flush:"post",deep:!0}),K(()=>l.visible,n=>{var o,d,b,L,V;n?((d=(o=s.value)==null?void 0:o.updatePopper)==null||d.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(L=(b=m.value)==null?void 0:b.focus)==null||L.call(b),e.multiple?(V=a.value)==null||V.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),_(l.query),!e.multiple&&!e.remote&&(w.value.query="",he(w),he(T)))):(e.filterable&&(ae(e.filterMethod)&&e.filterMethod(""),ae(e.remoteMethod)&&e.remoteMethod("")),a.value&&a.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ue(),M(()=>{a.value&&a.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),K(()=>l.options.entries(),()=>{var n,o,d;if(!an)return;(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&Q();const b=((d=v.value)==null?void 0:d.querySelectorAll("input"))||[];Array.from(b).includes(document.activeElement)||fe(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ke()},{flush:"post"}),K(()=>l.hoverIndex,n=>{vl(n)&&n>-1?y.value=B.value[n]||{}:y.value={},B.value.forEach(o=>{o.hover=y.value===o})});const Q=()=>{M(()=>{var n,o;if(!f.value)return;const d=f.value.$el.querySelector("input");O=O||(d.clientHeight>0?d.clientHeight+2:0);const b=S.value,L=In(re.value||(k==null?void 0:k.size)),V=L===O||O<=0?L:O;!(d.offsetParent===null)&&(d.style.height=`${(l.selected.length===0?V:Math.max(b?b.clientHeight+(b.clientHeight>V?6:0):0,V))-2}px`),l.tagInMultiLine=Number.parseFloat(d.style.height)>=V,l.visible&&pe.value!==!1&&((o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n))})},_=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(ae(e.filterMethod)||ae(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,M(()=>{var o,d;l.visible&&((d=(o=s.value)==null?void 0:o.updatePopper)==null||d.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&M(()=>{const o=a.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Ee(),Q()}),e.remote&&ae(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):ae(e.filterMethod)?(e.filterMethod(n),he(T)):(l.filteredOptionsCount=l.optionsCount,w.value.query=n,he(w),he(T)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await M(),ke())}},Ee=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=a.value.value?"":l.cachedPlaceHolder)},ke=()=>{const n=B.value.filter(b=>b.visible&&!b.disabled&&!b.states.groupDisabled),o=n.find(b=>b.created),d=n[0];l.hoverIndex=$e(B.value,o||d)},fe=()=>{var n;if(e.multiple)l.selectedLabel="";else{const d=Le(e.modelValue);(n=d.props)!=null&&n.created?(l.createdLabel=d.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=d.currentLabel,l.selected=d,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(d=>{o.push(Le(d))}),l.selected=o,M(()=>{Q()})},Le=n=>{let o;const d=pl(n).toLowerCase()==="object",b=pl(n).toLowerCase()==="null",L=pl(n).toLowerCase()==="undefined";for(let J=l.cachedOptions.size-1;J>=0;J--){const F=He.value[J];if(d?N(F.value,e.valueKey)===N(n,e.valueKey):F.value===n){o={value:n,currentLabel:F.currentLabel,isDisabled:F.isDisabled};break}}if(o)return o;const V=d?n.label:!b&&!L?n:"",Y={value:n,currentLabel:V};return e.multiple&&(Y.hitState=!1),Y},Ue=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>B.value.findIndex(d=>N(d,n)===N(o,n)))):l.hoverIndex=-1:l.hoverIndex=B.value.findIndex(o=>ce(o)===ce(l.selected))},300)},Xe=()=>{var n,o;Ye(),(o=(n=s.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&Q()},Ye=()=>{var n;l.inputWidth=(n=f.value)==null?void 0:n.$el.offsetWidth},Je=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,_(l.query))},Ze=Pl(()=>{Je()},Ie.value),xe=Pl(n=>{_(n.target.value)},Ie.value),te=n=>{zl(e.modelValue,n)||i.emit(gl,n)},ue=n=>{if(n.target.value.length<=0&&!be()){const o=e.modelValue.slice();o.pop(),i.emit(H,o),te(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},_e=(n,o)=>{const d=l.selected.indexOf(o);if(d>-1&&!x.value){const b=e.modelValue.slice();b.splice(d,1),i.emit(H,b),te(b),i.emit("remove-tag",o.value)}n.stopPropagation()},Te=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!De(o))for(const d of l.selected)d.isDisabled&&o.push(d.value);i.emit(H,o),te(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},ve=(n,o)=>{var d;if(e.multiple){const b=(e.modelValue||[]).slice(),L=$e(b,n.value);L>-1?b.splice(L,1):(e.multipleLimit<=0||b.length<e.multipleLimit)&&b.push(n.value),i.emit(H,b),te(b),n.created&&(l.query="",_(""),l.inputLength=20),e.filterable&&((d=a.value)==null||d.focus())}else i.emit(H,n.value),te(n.value),l.visible=!1;l.isSilentBlur=o,me(),!l.visible&&M(()=>{de(n)})},$e=(n=[],o)=>{if(!Vl(o))return n.indexOf(o);const d=e.valueKey;let b=-1;return n.some((L,V)=>Re(N(L,d))===N(o,d)?(b=V,!0):!1),b},me=()=>{l.softFocus=!0;const n=a.value||f.value;n&&(n==null||n.focus())},de=n=>{var o,d,b,L,V;const Y=Array.isArray(n)?n[0]:n;let J=null;if(Y!=null&&Y.value){const F=B.value.filter(cl=>cl.value===Y.value);F.length>0&&(J=F[0].$el)}if(s.value&&J){const F=(L=(b=(d=(o=s.value)==null?void 0:o.popperRef)==null?void 0:d.contentRef)==null?void 0:b.querySelector)==null?void 0:L.call(b,`.${p.be("dropdown","wrap")}`);F&&Cn(F,J)}(V=u.value)==null||V.handleScroll()},el=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},ll=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},nl=n=>{n.code!==sn.backspace&&be(!1),l.inputLength=a.value.value.length*15+20,Q()},be=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},ol=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,M(()=>_(o));else{const d=o[o.length-1]||"";l.isOnComposition=!rn(d)}},tl=()=>{M(()=>de(l.selected))},il=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},ee=()=>{var n,o,d;l.visible=!1,(n=f.value)==null||n.blur(),(d=(o=m.value)==null?void 0:o.blur)==null||d.call(o)},Ve=n=>{M(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},al=n=>{Te(n)},Me=()=>{l.visible=!1},sl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Be=n=>{var o;n&&!l.mouseEnter||x.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!s.value||!s.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=a.value||f.value)==null||o.focus()))},rl=()=>{l.visible?B.value[l.hoverIndex]&&ve(B.value[l.hoverIndex],void 0):Be()},ce=n=>Vl(n.value)?N(n.value,e.valueKey):n.value,ul=h(()=>B.value.filter(n=>n.visible).every(n=>n.disabled)),dl=h(()=>l.selected.slice(0,e.maxCollapseTags)),ge=h(()=>l.selected.slice(e.maxCollapseTags)),ze=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ul.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=B.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&ze(n),M(()=>de(y.value))}};return{optionList:t,optionsArray:B,selectSize:re,handleResize:Xe,debouncedOnInputChange:Ze,debouncedQueryChange:xe,deletePrevTag:ue,deleteTag:_e,deleteSelected:Te,handleOptionSelect:ve,scrollToOption:de,readonly:Oe,resetInputHeight:Q,showClose:We,iconComponent:we,iconReverse:Ne,showNewOption:Ge,collapseTagSize:je,setSelected:fe,managePlaceholder:Ee,selectDisabled:x,emptyText:pe,toggleLastOptionHitState:be,resetInputState:nl,handleComposition:ol,onOptionCreate:el,onOptionDestroy:ll,handleMenuEnter:tl,handleFocus:il,blur:ee,handleBlur:Ve,handleClearClick:al,handleClose:Me,handleKeydownEscape:sl,toggleMenu:Be,selectOption:rl,getValueKey:ce,navigateOptions:ze,dropMenuVisible:Qe,queryChange:w,groupQueryChange:T,showTagList:dl,collapseTagList:ge,reference:f,input:a,iOSInput:m,tooltipRef:s,tags:S,selectWrapper:v,scrollbar:u,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var _n=A({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:i}){let c=[];function p(f,a){if(f.length!==a.length)return!1;for(const[m]of f.entries())if(f[m]!=a[m])return!1;return!0}return()=>{var f,a;const m=(f=l.default)==null?void 0:f.call(l),s=[];function S(v){Array.isArray(v)&&v.forEach(u=>{var y,w,T,t;const O=(y=(u==null?void 0:u.type)||{})==null?void 0:y.name;O==="ElOptionGroup"?S(!De(u.children)&&!Array.isArray(u.children)&&ae((w=u.children)==null?void 0:w.default)?(T=u.children)==null?void 0:T.default():u.children):O==="ElOption"?s.push((t=u.props)==null?void 0:t.label):Array.isArray(u.children)&&S(u.children)})}return m.length&&S((a=m[0])==null?void 0:a.children),p(s,c)||(c=s,i("update-options",s)),m}}});const Dl="ElSelect",eo=A({name:Dl,componentName:Dl,components:{ElInput:un,ElSelectMenu:Jn,ElOption:Il,ElOptions:_n,ElTag:Gn,ElScrollbar:dn,ElTooltip:cn,ElIcon:ml},directives:{ClickOutside:On},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:pn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:fn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Ml,default:vn},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:Ml,default:mn},tagType:{...Yl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:bn,default:"bottom-start"}},emits:[H,gl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=X("select"),c=X("input"),{t:p}=wl(),f=Zn(e),{optionList:a,optionsArray:m,selectSize:s,readonly:S,handleResize:v,collapseTagSize:u,debouncedOnInputChange:y,debouncedQueryChange:w,deletePrevTag:T,deleteTag:t,deleteSelected:O,handleOptionSelect:k,scrollToOption:j,setSelected:Oe,resetInputHeight:x,managePlaceholder:We,showClose:we,selectDisabled:Ne,iconComponent:Ie,iconReverse:pe,showNewOption:B,emptyText:He,toggleLastOptionHitState:Ge,resetInputState:re,handleComposition:je,onOptionCreate:Qe,onOptionDestroy:Q,handleMenuEnter:_,handleFocus:Ee,blur:ke,handleBlur:fe,handleClearClick:Le,handleClose:Ue,handleKeydownEscape:Xe,toggleMenu:Ye,selectOption:Je,getValueKey:Ze,navigateOptions:xe,dropMenuVisible:te,reference:ue,input:_e,iOSInput:Te,tooltipRef:ve,tags:$e,selectWrapper:me,scrollbar:de,queryChange:el,groupQueryChange:ll,handleMouseEnter:nl,handleMouseLeave:be,showTagList:ol,collapseTagList:tl}=xn(e,f,l),{focus:il}=En(ue),{inputWidth:ee,selected:Ve,inputLength:al,filteredOptionsCount:Me,visible:sl,softFocus:Be,selectedLabel:rl,hoverIndex:ce,query:ul,inputHovering:dl,currentPlaceholder:ge,menuVisibleOnFocus:ze,isOnComposition:El,isSilentBlur:kl,options:n,cachedOptions:o,optionsCount:d,prefixWidth:b,tagInMultiLine:L}=Fe(f),V=h(()=>{const D=[i.b()],ie=r(s);return ie&&D.push(i.m(ie)),e.disabled&&D.push(i.m("disabled")),D}),Y=h(()=>({maxWidth:`${r(ee)-32}px`,width:"100%"})),J=h(()=>({maxWidth:`${r(ee)>123?r(ee)-123:r(ee)-75}px`}));yl(Ke,Ce({props:e,options:n,optionsArray:m,cachedOptions:o,optionsCount:d,filteredOptionsCount:Me,hoverIndex:ce,handleOptionSelect:k,onOptionCreate:Qe,onOptionDestroy:Q,selectWrapper:me,selected:Ve,setSelected:Oe,queryChange:el,groupQueryChange:ll})),Ae(()=>{f.cachedPlaceHolder=ge.value=e.placeholder||(()=>p("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ge.value=""),Nl(me,v),e.remote&&e.multiple&&x(),M(()=>{const D=ue.value&&ue.value.$el;if(D&&(ee.value=D.getBoundingClientRect().width,l.slots.prefix)){const ie=D.querySelector(`.${c.e("prefix")}`);b.value=Math.max(ie.getBoundingClientRect().width+5,30)}}),Oe()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(H,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(H,"");const F=h(()=>{var D,ie;return(ie=(D=ve.value)==null?void 0:D.popperRef)==null?void 0:ie.contentRef});return{isIOS:gn,onOptionsRendered:D=>{a.value=D},tagInMultiLine:L,prefixWidth:b,selectSize:s,readonly:S,handleResize:v,collapseTagSize:u,debouncedOnInputChange:y,debouncedQueryChange:w,deletePrevTag:T,deleteTag:t,deleteSelected:O,handleOptionSelect:k,scrollToOption:j,inputWidth:ee,selected:Ve,inputLength:al,filteredOptionsCount:Me,visible:sl,softFocus:Be,selectedLabel:rl,hoverIndex:ce,query:ul,inputHovering:dl,currentPlaceholder:ge,menuVisibleOnFocus:ze,isOnComposition:El,isSilentBlur:kl,options:n,resetInputHeight:x,managePlaceholder:We,showClose:we,selectDisabled:Ne,iconComponent:Ie,iconReverse:pe,showNewOption:B,emptyText:He,toggleLastOptionHitState:Ge,resetInputState:re,handleComposition:je,handleMenuEnter:_,handleFocus:Ee,blur:ke,handleBlur:fe,handleClearClick:Le,handleClose:Ue,handleKeydownEscape:Xe,toggleMenu:Ye,selectOption:Je,getValueKey:Ze,navigateOptions:xe,dropMenuVisible:te,focus:il,reference:ue,input:_e,iOSInput:Te,tooltipRef:ve,popperPaneRef:F,tags:$e,selectWrapper:me,scrollbar:de,wrapperKls:V,selectTagsStyle:Y,nsSelect:i,tagTextStyle:J,handleMouseEnter:nl,handleMouseLeave:be,showTagList:ol,collapseTagList:tl}}}),lo=["disabled","autocomplete"],no=["disabled"],oo={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function to(e,l,i,c,p,f){const a=le("el-tag"),m=le("el-tooltip"),s=le("el-icon"),S=le("el-input"),v=le("el-option"),u=le("el-options"),y=le("el-scrollbar"),w=le("el-select-menu"),T=hn("click-outside");return se((C(),$("div",{ref:"selectWrapper",class:g(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[22]||(l[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[23]||(l[23]=q((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[ne(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:E(()=>[I("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=t=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=t=>e.inputHovering=!1)},[e.multiple?(C(),$("div",{key:0,ref:"tags",class:g([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:Z(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(C(),P(bl,{key:0,onAfterLeave:e.resetInputHeight},{default:E(()=>[I("span",{class:g([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(C(!0),$(Pe,null,fl(e.showTagList,t=>(C(),P(a,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,t)},{default:E(()=>[I("span",{class:g(e.nsSelect.e("tags-text")),style:Z(e.tagTextStyle)},U(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(C(),P(a,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:E(()=>[e.collapseTagsTooltip?(C(),P(m,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:E(()=>[I("span",{class:g(e.nsSelect.e("tags-text"))},"+ "+U(e.selected.length-e.maxCollapseTags),3)]),content:E(()=>[I("div",{class:g(e.nsSelect.e("collapse-tags"))},[(C(!0),$(Pe,null,fl(e.collapseTagList,t=>(C(),$("div",{key:e.getValueKey(t),class:g(e.nsSelect.e("collapse-tag"))},[ne(a,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:O=>e.deleteTag(O,t)},{default:E(()=>[I("span",{class:g(e.nsSelect.e("tags-text")),style:Z({maxWidth:e.inputWidth-75+"px"})},U(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(C(),$("span",{key:1,class:g(e.nsSelect.e("tags-text"))},"+ "+U(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):R("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):R("v-if",!0),e.collapseTags?R("v-if",!0):(C(),P(bl,{key:1,onAfterLeave:e.resetInputHeight},{default:E(()=>[I("span",{class:g([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(C(!0),$(Pe,null,fl(e.selected,t=>(C(),P(a,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,t)},{default:E(()=>[I("span",{class:g(e.nsSelect.e("tags-text")),style:Z({maxWidth:e.inputWidth-75+"px"})},U(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),e.filterable?se((C(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:g([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:Z({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=W(q(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=W(q(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=W((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=W(q((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=W((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=W(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,lo)),[[yn,e.query]]):R("v-if",!0)],6)):R("v-if",!0),R(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(C(),$("input",{key:1,ref:"iOSInput",class:g([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,no)):R("v-if",!0),ne(S,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:g([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=W(q(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=W(q(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),W(q(e.selectOption,["stop","prevent"]),["enter"]),W(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=W(t=>e.visible=!1,["tab"]))]},Sn({suffix:E(()=>[e.iconComponent&&!e.showClose?(C(),P(s,{key:0,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:E(()=>[(C(),P(Bl(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),e.showClose&&e.clearIcon?(C(),P(s,{key:1,class:g([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:E(()=>[(C(),P(Bl(e.clearIcon)))]),_:1},8,["class","onClick"])):R("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:E(()=>[I("div",oo,[G(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:E(()=>[ne(w,null,{default:E(()=>[se(ne(y,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:g([e.nsSelect.is("empty",!e.allowCreate&&!!e.query&&e.filteredOptionsCount===0)])},{default:E(()=>[e.showNewOption?(C(),P(v,{key:0,value:e.query,created:!0},null,8,["value"])):R("v-if",!0),ne(u,{onUpdateOptions:e.onOptionsRendered},{default:E(()=>[G(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[Ol,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(C(),$(Pe,{key:0},[e.$slots.empty?G(e.$slots,"empty",{key:0}):(C(),$("p",{key:1,class:g(e.nsSelect.be("dropdown","empty"))},U(e.emptyText),3))],64)):R("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[T,e.handleClose,e.popperPaneRef]])}var io=oe(eo,[["render",to],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const ao=A({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=X("select"),i=z(!0),c=Cl(),p=z([]);yl(Jl,Ce({...Fe(e)}));const f=ye(Ke);Ae(()=>{p.value=a(c.subTree)});const a=s=>{const S=[];return Array.isArray(s.children)&&s.children.forEach(v=>{var u;v.type&&v.type.name==="ElOption"&&v.component&&v.component.proxy?S.push(v.component.proxy):(u=v.children)!=null&&u.length&&S.push(...a(v))}),S},{groupQueryChange:m}=Re(f);return K(m,()=>{i.value=p.value.some(s=>s.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function so(e,l,i,c,p,f){return se((C(),$("ul",{class:g(e.ns.be("group","wrap"))},[I("li",{class:g(e.ns.be("group","title"))},U(e.label),3),I("li",null,[I("ul",{class:g(e.ns.b("group"))},[G(e.$slots,"default")],2)])],2)),[[Ol,e.visible]])}var Zl=oe(ao,[["render",so],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const vo=Sl(io,{Option:Il,OptionGroup:Zl}),mo=qe(Il);qe(Zl);export{vo as E,mo as a,po as b,fo as c,Gn as d,Ke as s};
