import{r as E,R as p,i as h,j as n,s as H,c as re,b as c,k as le,l as U,n as G,o as oe,h as q,d as J,q as se,g as Q,t as ie,v as ce,w as _,x as de,y as ue,z as pe,A as he,D as fe,u as ve,C as me,E as S,F as ge,B as w,G as be,H as ye,J as we}from"./index-d6e076f8.js";import{r as ke}from"./logs-0504b3e6.js";import{S as k}from"./Select-050b7b4d.js";import{R as Ce}from"./rotate-cw-c0e30cc8.js";function P(){return P=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},P.apply(this,arguments)}function Oe(e,o){if(e==null)return{};var l=_e(e,o),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function _e(e,o){if(e==null)return{};var l={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(o.indexOf(t)>=0)&&(l[t]=e[t]);return l}var L=E.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=e.size,r=t===void 0?24:t,d=Oe(e,["color","size"]);return p.createElement("svg",P({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),p.createElement("polyline",{points:"8 17 12 21 16 17"}),p.createElement("line",{x1:"12",y1:"12",x2:"12",y2:"21"}),p.createElement("path",{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}))});L.propTypes={color:h.string,size:h.oneOfType([h.string,h.number])};L.displayName="DownloadCloud";const Se=L;function j(){return j=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},j.apply(this,arguments)}function Ne(e,o){if(e==null)return{};var l=xe(e,o),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function xe(e,o){if(e==null)return{};var l={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(o.indexOf(t)>=0)&&(l[t]=e[t]);return l}var $=E.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=e.size,r=t===void 0?24:t,d=Ne(e,["color","size"]);return p.createElement("svg",j({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),p.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),p.createElement("polyline",{points:"16 17 21 12 16 7"}),p.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))});$.propTypes={color:h.string,size:h.oneOfType([h.string,h.number])};$.displayName="LogOut";const Pe=$;function I(){return I=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},I.apply(this,arguments)}function je(e,o){if(e==null)return{};var l=Ie(e,o),a,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function Ie(e,o){if(e==null)return{};var l={},a=Object.keys(e),t,r;for(r=0;r<a.length;r++)t=a[r],!(o.indexOf(t)>=0)&&(l[t]=e[t]);return l}var z=E.forwardRef(function(e,o){var l=e.color,a=l===void 0?"currentColor":l,t=e.size,r=t===void 0?24:t,d=je(e,["color","size"]);return p.createElement("svg",I({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),p.createElement("polyline",{points:"3 6 5 6 21 6"}),p.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),p.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),p.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))});z.propTypes={color:h.string,size:h.oneOfType([h.string,h.number])};z.displayName="Trash2";const Ee=z,{useState:Le,useRef:$e,useEffect:ze,useCallback:Te}=p;function N(e){return n("input",{className:H.input,...e})}function Re({value:e,...o}){const[l,a]=Le(e),t=$e(e);ze(()=>{t.current!==e&&a(e),t.current=e},[e]);const r=Te(d=>a(d.target.value),[a]);return n("input",{className:H.input,value:l,onChange:r,...o})}const De="_root_1vck5_4",Fe="_section_1vck5_5",Me="_wrapSwitch_1vck5_30",We="_sep_1vck5_36",Ve="_label_1vck5_49",i={root:De,section:Fe,wrapSwitch:Me,sep:We,label:Ve},Ae="_fieldset_olb4q_1",Be="_input_olb4q_10",Ue="_cnt_olb4q_10",x={fieldset:Ae,input:Be,cnt:Ue};function Ge({OptionComponent:e,optionPropsList:o,selectedIndex:l,onChange:a}){const t=re("visually-hidden",x.input),r=d=>{a(d.target.value)};return n("fieldset",{className:x.fieldset,children:o.map((d,b)=>c("label",{children:[n("input",{type:"radio",checked:l===b,name:"selection",value:b,"aria-labelledby":"traffic chart type "+b,onChange:r,className:t}),n("div",{className:x.cnt,children:n(e,{...d})})]},b))})}const{useMemo:He}=q,qe={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},K=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],Je=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Qe=K;function Ke({id:e}){const o=le.read(),l=He(()=>({labels:Qe,datasets:[{...U,...G[e].up,data:K},{...U,...G[e].down,data:Je}]}),[e]),a="chart-"+e;return oe(o.Chart,a,l,null,qe),n("div",{style:{width:80,padding:5},children:n("canvas",{id:a})})}const{useEffect:X,useState:Xe,useCallback:m,useRef:Ye}=q,Ze=[{id:0},{id:1},{id:2},{id:3}],et=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],tt=[{key:"port",label:"Http Port"},{key:"socks-port",label:"Socks5 Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"},{key:"mitm-port",label:"MITM Port"}],nt=[["zh","中文"],["en","English"]],at=[["direct","Direct"],["rule","Rule"],["script","Script"],["global","Global"]],rt=[["gvisor","gVisor"],["system","System"],["lwip","LWIP"]],lt=e=>({configs:se(e),apiConfig:Q(e)}),ot=e=>({selectedChartStyleIndex:ye(e),latencyTestUrl:we(e),apiConfig:Q(e)}),st=J(ot)(ct),ft=J(lt)(it);function it({dispatch:e,configs:o,apiConfig:l}){return X(()=>{e(ie(l))},[e,l]),n(st,{configs:o})}function ct({dispatch:e,configs:o,selectedChartStyleIndex:l,latencyTestUrl:a,apiConfig:t}){var M,W,V,A;const[r,d]=Xe(o),b=Ye(o);X(()=>{b.current!==o&&d(o),b.current=o},[o]);const Y=m(()=>{e(ce("apiConfig"))},[e]),C=m((s,u)=>{d({...r,[s]:u})},[r]),T=m((s,u)=>{const v={...r.tun,[s]:u};d({...r,tun:{...v}})},[r]),g=m(({name:s,value:u})=>{switch(s){case"mode":case"log-level":case"allow-lan":case"sniffing":C(s,u),e(_(t,{[s]:u})),s==="log-level"&&ke({...t,logLevel:u});break;case"mitm-port":case"redir-port":case"socks-port":case"mixed-port":case"port":if(u!==""){const v=parseInt(u,10);if(v<0||v>65535)return}C(s,u);break;case"enable":case"stack":T(s,u),e(_(t,{tun:{[s]:u}}));break;default:return}},[t,e,C,T]),Z=m(s=>g(s.target),[g]),{selectChartStyleIndex:ee,updateAppConfig:R}=de(),y=m(s=>{const u=s.target,{name:v,value:B}=u;switch(v){case"port":case"socks-port":case"mixed-port":case"redir-port":case"mitm-port":{const O=parseInt(B,10);if(O<0||O>65535)return;e(_(t,{[v]:O}));break}case"latencyTestUrl":{R(v,B);break}case"device name":case"interface name":break;default:throw new Error(`unknown input name ${v}`)}},[t,e,R]),te=m(()=>{e(ue(t))},[t,e]),ne=m(()=>{e(pe(t))},[t,e]),ae=m(()=>{e(he(t))},[t,e]),{data:D}=fe(["/version",t],()=>be("/version",t)),{t:f,i18n:F}=ve();return c("div",{children:[n(me,{title:f("Config")}),c("div",{className:i.root,children:[tt.map(s=>r[s.key]!==void 0?c("div",{children:[n("div",{className:i.label,children:s.label}),n(N,{name:s.key,value:r[s.key],onChange:Z,onBlur:y})]},s.key):null),c("div",{children:[n("div",{className:i.label,children:"Mode"}),n(k,{options:at,selected:r.mode.toLowerCase(),onChange:s=>g({name:"mode",value:s.target.value})})]}),c("div",{children:[n("div",{className:i.label,children:"Log Level"}),n(k,{options:et,selected:r["log-level"].toLowerCase(),onChange:s=>g({name:"log-level",value:s.target.value})})]}),c("div",{children:[n("div",{className:i.label,children:f("allow_lan")}),n("div",{className:i.wrapSwitch,children:n(S,{name:"allow-lan",checked:r["allow-lan"],onChange:s=>g({name:"allow-lan",value:s})})})]}),D.meta&&c("div",{children:[n("div",{className:i.label,children:f("tls_sniffing")}),n("div",{className:i.wrapSwitch,children:n(S,{name:"sniffing",checked:r.sniffing,onChange:s=>g({name:"sniffing",value:s})})})]})]}),n("div",{className:i.sep,children:n("div",{})}),D.meta&&c(ge,{children:[c("div",{className:i.section,children:[c("div",{children:[n("div",{className:i.label,children:f("enable_tun_device")}),n("div",{className:i.wrapSwitch,children:n(S,{checked:(M=r.tun)==null?void 0:M.enable,onChange:s=>g({name:"enable",value:s})})})]}),c("div",{children:[n("div",{className:i.label,children:"TUN IP Stack"}),n(k,{options:rt,selected:(V=(W=r.tun)==null?void 0:W.stack)==null?void 0:V.toLowerCase(),onChange:s=>g({name:"stack",value:s.target.value})})]}),c("div",{children:[n("div",{className:i.label,children:"Device Name"}),n(N,{name:"device name",value:(A=r.tun)==null?void 0:A.device,onChange:y})]}),c("div",{children:[n("div",{className:i.label,children:"Interface Name"}),n(N,{name:"interface name",value:r["interface-name"],onChange:y})]})]}),n("div",{className:i.sep,children:n("div",{})}),c("div",{className:i.section,children:[c("div",{children:[n("div",{className:i.label,children:"Reload"}),n(w,{start:n(Ce,{size:16}),label:f("reload_config_file"),onClick:te})]}),c("div",{children:[n("div",{className:i.label,children:"GEO Databases"}),n(w,{start:n(Se,{size:16}),label:f("update_geo_databases_file"),onClick:ne})]}),c("div",{children:[n("div",{className:i.label,children:"FakeIP"}),n(w,{start:n(Ee,{size:16}),label:f("flush_fake_ip_pool"),onClick:ae})]})]}),n("div",{className:i.sep,children:n("div",{})})]}),c("div",{className:i.section,children:[c("div",{children:[n("div",{className:i.label,children:f("latency_test_url")}),n(Re,{name:"latencyTestUrl",type:"text",value:a,onBlur:y})]}),c("div",{children:[n("div",{className:i.label,children:f("lang")}),n("div",{children:n(k,{options:nt,selected:F.language,onChange:s=>F.changeLanguage(s.target.value)})})]}),c("div",{children:[n("div",{className:i.label,children:f("chart_style")}),n(Ge,{OptionComponent:Ke,optionPropsList:Ze,selectedIndex:l,onChange:ee})]}),c("div",{children:[n("div",{className:i.label,children:"Action"}),n(w,{start:n(Pe,{size:16}),label:"Switch backend",onClick:Y})]})]})]})}export{ft as default};