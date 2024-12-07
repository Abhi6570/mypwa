(function(){"use strict";var e={7141:function(e,t,o){var n=o(5130),a=o(6768);const r={id:"app"};function i(e,t,o,n,i,l){const c=(0,a.g2)("InvoiceManager");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.bF)(c)])}const l={class:"search-bar",style:{"max-width":"90%",background:"white",padding:"20px","justify-content":"center","border-radius":"8px","box-shadow":"0 4px 10px rgba(0, 0, 0, 0.1)"}},c={key:0},s={class:"form-field"},d=["onUpdate:modelValue"],u={class:"form-field"},p=["onUpdate:modelValue"],f={class:"form-field"},m=["onUpdate:modelValue"],h={class:"form-field"},b=["onUpdate:modelValue"],v={class:"form-field"},y=["onUpdate:modelValue"],k={class:"form-field",style:{display:"flex","justify-content":"space-between"}},g=["onUpdate:modelValue"],L=["onUpdate:modelValue"],w={class:"form-field"},x=["onUpdate:modelValue"],q={style:{"text-align":"center","margin-top":"20px","max-width":"90%","background-color":"white",padding:"20px","justify-content":"center","border-radius":"8px","box-shadow":"0 4px 10px rgba(0, 0, 0, 0.1)"}};function _(e,t,o,r,i,_){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("header",l,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>_.onSearch&&_.onSearch(...e)),class:"search-btn"},"🔍"),(0,a.bo)((0,a.Lk)("input",{type:"text",placeholder:"Search... ","onUpdate:modelValue":t[1]||(t[1]=e=>i.searchQuery=e)},null,512),[[n.Jo,i.searchQuery]]),(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>_.onRefresh&&_.onRefresh(...e))},"⟳")]),i.formData.items.length>0?((0,a.uX)(),(0,a.CE)("div",c,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.formData.items,((e,o)=>((0,a.uX)(),(0,a.CE)("div",{key:o,class:"item-form"},[(0,a.Lk)("div",s,[t[5]||(t[5]=(0,a.Lk)("label",{for:"item-code"},"Item Code:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"item-code","onUpdate:modelValue":t=>e.name=t},null,8,d),[[n.Jo,e.name]])]),(0,a.Lk)("div",u,[t[6]||(t[6]=(0,a.Lk)("label",{for:"item-name"},"Item Name:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"item-name","onUpdate:modelValue":t=>e.item_name=t},null,8,p),[[n.Jo,e.item_name]])]),(0,a.Lk)("div",f,[t[7]||(t[7]=(0,a.Lk)("label",{for:"description"},"Description:",-1)),(0,a.bo)((0,a.Lk)("textarea",{id:"description","onUpdate:modelValue":t=>e.description=t},null,8,m),[[n.Jo,e.description]])]),(0,a.Lk)("div",h,[t[8]||(t[8]=(0,a.Lk)("label",{for:"brand"},"Brand:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"brand","onUpdate:modelValue":t=>e.brand=t},null,8,b),[[n.Jo,e.brand]])]),(0,a.Lk)("div",v,[t[9]||(t[9]=(0,a.Lk)("label",{for:"mrp"},"MRP:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",id:"mrp","onUpdate:modelValue":t=>e.rate=t},null,8,y),[[n.Jo,e.rate]])]),(0,a.Lk)("div",k,[(0,a.Lk)("div",null,[t[10]||(t[10]=(0,a.Lk)("label",{for:"received-qty"},"Received QTY:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number",id:"received-qty","onUpdate:modelValue":t=>e.received_qty=t},null,8,g),[[n.Jo,e.received_qty]])]),(0,a.Lk)("div",null,[t[11]||(t[11]=(0,a.Lk)("label",{for:"accepted-qty"},"Accepted QTY:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number",id:"accepted-qty","onUpdate:modelValue":t=>e.qty=t},null,8,L),[[n.Jo,e.qty]])])]),(0,a.Lk)("div",w,[t[12]||(t[12]=(0,a.Lk)("label",{for:"qc-pass"},"QC Pass:",-1)),(0,a.bo)((0,a.Lk)("input",{type:"checkbox",id:"qc-pass","onUpdate:modelValue":t=>e.qc_pass=t},null,8,x),[[n.lH,e.qc_pass]])])])))),128))])):(0,a.Q3)("",!0),(0,a.Lk)("div",q,[(0,a.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>_.onSaveData&&_.onSaveData(...e)),class:"action-btn",style:{height:"35px",width:"150px","background-color":"green"}}," Save Data "),t[13]||(t[13]=(0,a.Lk)("br",null,null,-1)),(0,a.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>_.onPrintBarcode&&_.onPrintBarcode(...e)),class:"action-btn",style:{height:"35px",width:"100%","background-color":"green"}}," Print Barcode ")])])}var D=o(5859),U={data(){return{searchQuery:"",formData:{name:"",items:[{name:"",item_name:"",description:"",brand:"",rate:"",received_qty:"",qty:"",qc_pass:!1}]}}},methods:{async onSearch(){try{if(this.searchQuery.trim()){const e=await D.A.get(`https://yash.tranqwality.com/api/resource/Purchase Invoice/${this.searchQuery}`,{headers:{Authorization:"token b73c5b96959aa53:1d8250a9d955d9b"}}),t=e.data.data;this.formData.name=t.name||"",this.formData.items=t.items||[]}else console.log("Please enter a valid ID to search.")}catch(e){console.error("Error fetching data from Frappe:",e)}},async onSaveData(){try{if(!this.formData.name)return void console.error("No Purchase Invoice to update.");const e=await D.A.put(`https://yash.tranqwality.com/api/resource/Purchase Invoice/${this.formData.name}`,{items:this.formData.items},{headers:{Authorization:"token b73c5b96959aa53:1d8250a9d955d9b"}});console.log("Data saved successfully:",e.data),alert("Data has been saved successfully.")}catch(e){console.error("Error saving data to Frappe:",e),alert("Failed to save data. Please try again.")}},onPrintBarcode(){alert("Print Barcode functionality is not yet implemented.")},onRefresh(){this.formData={name:"",items:[{name:"",item_name:"",description:"",brand:"",rate:"",received_qty:"",qty:"",qc_pass:!1}]},this.searchQuery=""}}},V=o(1241);const P=(0,V.A)(U,[["render",_],["__scopeId","data-v-cfe4724a"]]);var C=P,S={name:"App",components:{InvoiceManager:C}};const O=(0,V.A)(S,[["render",i]]);var j=O,A=o(4458);(0,A.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,n.Ef)(j).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var l=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(c)var d=c(o)}for(t&&t(n);s<i.length;s++)r=i[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self["webpackChunkmypwa"]=self["webpackChunkmypwa"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7141)}));n=o.O(n)})();
//# sourceMappingURL=app.5a1bc086.js.map