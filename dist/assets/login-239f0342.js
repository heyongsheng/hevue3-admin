import{d as B,u as I,b as D,r as v,e as u,f as N,c as F,g as a,h as o,i as P,j as p,w as l,k as U,l as q,m as E,n as H,E as T,p as j,q as z,s as A,t as L,v as $,o as w,x as G,y as J,z as K,A as M,B as h,C as O,D as Q,a as W}from"./index-5f3dae94.js";const X=n=>(A("data-v-23221572"),n=n(),L(),n),Y={class:"login-wrap"},Z=H('<div class="back-wrap" data-v-23221572><div class="bg-item left one" data-v-23221572></div><div class="bg-item right two" data-v-23221572></div><div class="bg-item left three" data-v-23221572></div><div class="bg-item right four" data-v-23221572></div></div>',1),ee={class:"loogin-container"},se=X(()=>p("div",{class:"login-title"},"登录",-1)),ae={class:"other-wrap"},te=B({__name:"login",setup(n){const i=I(),x=D(i),t=v({staff_account:"admin",password:"123456"}),k=v({staff_account:[{required:!0,message:"请输入员工账号",trigger:"blur"},{min:3,max:11,message:"长度在 3 到 11 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}]}),_=u(),y=N(),V=$(),d=u(!1),b=r=>{r==null||r.validate(e=>{e&&(d.value=!0,y.loginHandle(t).then(()=>{V.push("/")}).finally(()=>{d.value=!1}))})},c=u(!1),C=()=>{c.value=!0};return(r,e)=>{const S=T,f=O,m=Q,R=j,g=z;return w(),F("div",Y,[a(S,{modelValue:o(i),"onUpdate:modelValue":e[0]||(e[0]=s=>P(i)?i.value=s:null),class:"theme-btn",style:{"margin-left":"24px"},"inline-prompt":"","active-icon":o(G),"inactive-icon":o(J),onChange:o(x)},null,8,["modelValue","active-icon","inactive-icon","onChange"]),Z,p("div",ee,[se,a(R,{model:t,class:"form-wrap",ref_key:"ruleFormRef",ref:_,rules:k,autocomplete:"off"},{default:l(()=>[a(m,{prop:"staff_account"},{default:l(()=>[a(f,{class:"login-input",modelValue:t.staff_account,"onUpdate:modelValue":e[1]||(e[1]=s=>t.staff_account=s),placeholder:"请输入账号或手机号","prefix-icon":o(K)},null,8,["modelValue","prefix-icon"])]),_:1}),a(m,{prop:"password"},{default:l(()=>[a(f,{class:"login-input",modelValue:t.password,"onUpdate:modelValue":e[2]||(e[2]=s=>t.password=s),placeholder:"请输入密码","show-password":"","prefix-icon":o(M)},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1},8,["model","rules"]),p("div",ae,[a(g,{type:"primary",link:"",onClick:C},{default:l(()=>[h("忘记密码？")]),_:1})]),a(g,{class:"login-btn",type:"primary",loading:d.value,onClick:e[3]||(e[3]=s=>b(_.value))},{default:l(()=>[h("登录")]),_:1},8,["loading"])]),c.value?(w(),U(q,{key:0,class:"reset-password","onUpdate:showResetPassword":e[4]||(e[4]=s=>c.value=s)})):E("",!0)])}}});const le=W(te,[["__scopeId","data-v-23221572"]]);export{le as default};
