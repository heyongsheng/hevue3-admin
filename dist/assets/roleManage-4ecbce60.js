import{d as P,F as $,e as l,P as G,r as A,ah as I,G as Q,o as n,c as j,j as q,g as t,w as e,B as r,H as u,k as i,h as M,m as D,ai as z,Q as S,C as U,D as J,q as K,p as O}from"./index-5f3dae94.js";import{E as W,a as X,v as Y}from"./table-column-c7840fe8.js";import"./checkbox-e441c6b3.js";import"./tag-03924c0e.js";import{E as Z}from"./popconfirm-d5deff59.js";import{g as ee}from"./menu-99ace3bd.js";import{_ as te}from"./roleModal.vue_vue_type_script_setup_true_lang-adc36104.js";import{u as oe}from"./global-964a611f.js";import"./overlay-e3278dbe.js";import"./tree-c449bbfd.js";const ae={class:"role-manage"},le={class:"search-wrap"},ve=P({__name:"roleManage",setup(ne){const f=oe();$(()=>{d(),L()});const v=l(),L=()=>{ee().then(o=>{v.value=G({list:o.data})})},y=l(),g=o=>{y.value.showModal(o)},k=l([]),R=l(0),m=l(!1),c=A({role_name:"",page_num:1,page_size:10}),h=()=>{c.page_num=1,d()},C=l(),V=()=>{C.value.resetFields(),h()},d=()=>{m.value||(m.value=!0,I().then(o=>{m.value=!1,k.value=o.data.list,R.value=o.data.total}))},B=o=>{z().then(()=>{S.success({title:"成功",message:"删除成功"}),d()})};return(o,_)=>{const F=U,b=J,s=K,T=O,E=W,w=Z,x=X,p=Q("permission"),H=Y;return n(),j("div",ae,[q("div",le,[t(T,{inline:!0,model:c,class:"demo-form-inline",ref_key:"searchForm",ref:C},{default:e(()=>[t(b,{label:"角色名称",prop:"role_name"},{default:e(()=>[t(F,{modelValue:c.role_name,"onUpdate:modelValue":_[0]||(_[0]=a=>c.role_name=a)},null,8,["modelValue"])]),_:1}),t(b,null,{default:e(()=>[t(s,{type:"info",onClick:V},{default:e(()=>[r("重置")]),_:1}),t(s,{type:"primary",onClick:h},{default:e(()=>[r("查询")]),_:1})]),_:1})]),_:1},8,["model"])]),u((n(),i(s,{type:"primary",onClick:_[1]||(_[1]=a=>g())},{default:e(()=>[r("添加角色")]),_:1})),[[p,"sys:role:add"]]),u((n(),i(x,{data:k.value,border:!0,"row-key":"_id",style:{"margin-top":"20px"}},{default:e(()=>[t(E,{prop:"role_name",label:"角色名称"}),t(E,{label:"操作",width:"180"},{default:e(({row:a})=>[a.role_code!==M(f).superAdminRole?u((n(),i(s,{key:0,type:"primary",link:"",onClick:N=>g(a)},{default:e(()=>[r("编辑")]),_:2},1032,["onClick"])),[[p,"sys:role:edit"]]):D("",!0),a.role_code!==M(f).superAdminRole?(n(),i(w,{key:1,title:"确定删除吗?",onConfirm:N=>B(a._id)},{reference:e(()=>[u((n(),i(s,{link:"",type:"primary"},{default:e(()=>[r("删除")]),_:1})),[[p,"sys:role:delete"]])]),_:2},1032,["onConfirm"])):D("",!0)]),_:1})]),_:1},8,["data"])),[[H,m.value]]),t(te,{ref_key:"roleModalRef",ref:y,onReloadList:d,menuData:v.value},null,8,["menuData"])])}}});export{ve as default};