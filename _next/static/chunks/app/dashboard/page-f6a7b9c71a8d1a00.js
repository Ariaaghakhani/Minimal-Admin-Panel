(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{926:function(e,l,i){Promise.resolve().then(i.bind(i,1707))},1707:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return dashboard_page}});var s=i(7437),r=i(6055),t=i(5577),n=i(3226),o=i(9135),c=i(5843),x=i(2265),a=i(9370);let useDotButton=(e,l)=>{let[i,s]=(0,x.useState)(0),[r,t]=(0,x.useState)([]),n=(0,x.useCallback)(i=>{e&&(e.scrollTo(i),l&&l(e))},[e,l]),o=(0,x.useCallback)(e=>{t(e.scrollSnapList())},[]),c=(0,x.useCallback)(e=>{s(e.selectedScrollSnap())},[]);return(0,x.useEffect)(()=>{e&&(o(e),c(e),e.on("reInit",o),e.on("reInit",c),e.on("select",c))},[e,o,c]),{selectedIndex:i,scrollSnaps:r,onDotButtonClick:n}},DotButton=e=>{let{children:l,...i}=e;return(0,s.jsx)("button",{type:"button",...i,children:l})},usePrevNextButtons=(e,l)=>{let[i,s]=(0,x.useState)(!0),[r,t]=(0,x.useState)(!0),n=(0,x.useCallback)(()=>{e&&(e.scrollPrev(),l&&l(e))},[e,l]),o=(0,x.useCallback)(()=>{e&&(e.scrollNext(),l&&l(e))},[e,l]),c=(0,x.useCallback)(e=>{s(!e.canScrollPrev()),t(!e.canScrollNext())},[]);return(0,x.useEffect)(()=>{e&&(c(e),e.on("reInit",c),e.on("select",c))},[e,c]),{prevBtnDisabled:i,nextBtnDisabled:r,onPrevButtonClick:n,onNextButtonClick:o}},PrevButton=e=>{let{children:l,...i}=e;return(0,s.jsxs)("button",{className:"embla__button embla__button--prev",type:"button",...i,children:[(0,s.jsx)("svg",{className:"embla__button__svg",viewBox:"0 0 532 532",children:(0,s.jsx)("path",{fill:"currentColor",d:"M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"})}),l]})},NextButton=e=>{let{children:l,...i}=e;return(0,s.jsxs)("button",{className:"embla__button embla__button--next",type:"button",...i,children:[(0,s.jsx)("svg",{className:"embla__button__svg",viewBox:"0 0 532 532",children:(0,s.jsx)("path",{fill:"currentColor",d:"M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"})}),l]})};var d=i(6136);let h=[{src:"/_next/static/media/cover-1.7e4f826a.jpg",height:720,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJALv//EAB0QAAICAQUAAAAAAAAAAAAAAAEEAgMABhITIzL/2gAIAQEAAT8A09QAyu1PsnWoOPcPOf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwDIN//EABsRAAEEAwAAAAAAAAAAAAAAAAIAAQMhIlGy/9oACAEDAQE/AJMSrQ8sv//Z",blurWidth:8,blurHeight:5},{src:"/_next/static/media/cover-2.f4fb3a7d.jpg",height:720,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAABAb/2gAMAwEAAhADEAAAALASr//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAwQFABESUv/aAAgBAQABPwCyqoDQOCMceWgVdes//8QAGhEAAAcAAAAAAAAAAAAAAAAAAAECAxETIv/aAAgBAgEBPwC12T2of//EABsRAAIBBQAAAAAAAAAAAAAAAAEDAAIEEhMh/9oACAEDAQE/ALFS9FIwHAJ//9k=",blurWidth:8,blurHeight:5},{src:"/_next/static/media/cover-3.1607034b.jpg",height:720,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAjgj/AP/EABwQAAICAgMAAAAAAAAAAAAAAAIDBBEAEgEFIv/aAAgBAQABPwDu573x0nK0cRyHVY1rwvzn/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAEiFh/9oACAECAQE/AKqmKoA5P//EABgRAQEBAQEAAAAAAAAAAAAAAAECAwCB/9oACAEDAQE/AMarTKG1UGfB7//Z",blurWidth:8,blurHeight:5}];var ImageByIndex=e=>h[e%h.length],A=i(6691),g=i.n(A),js_EmblaCarousel=e=>{let{slides:l,options:i}=e,[r,t]=(0,a.Z)(i,[(0,d.Z)()]),n=(0,x.useCallback)(e=>{let{autoplay:l}=e.plugins();l&&!1!==l.options.stopOnInteraction&&l.reset()},[]),{selectedIndex:o,scrollSnaps:c,onDotButtonClick:h}=useDotButton(t,n),{prevBtnDisabled:A,nextBtnDisabled:p,onPrevButtonClick:j,onNextButtonClick:f}=usePrevNextButtons(t,n);return(0,s.jsxs)("div",{className:"embla",children:[(0,s.jsx)("div",{className:"embla__viewport",ref:r,children:(0,s.jsx)("div",{className:"embla__container",children:l.map(e=>(0,s.jsx)("div",{className:"embla__slide relative",children:(0,s.jsx)(g(),{className:"embla__slide__img",src:ImageByIndex(e),alt:"Your alt text"})},e))})}),(0,s.jsxs)("div",{className:"embla__buttons",children:[(0,s.jsx)(PrevButton,{onClick:j,disabled:A}),(0,s.jsx)(NextButton,{onClick:f,disabled:p})]}),(0,s.jsx)("div",{className:"embla__dots",children:c.map((e,l)=>(0,s.jsx)(DotButton,{onClick:()=>h(l),className:"embla__dot".concat(l===o?" embla__dot--selected":"")},l))})]})};i(3219),i(6938),i(3670);let p={align:"start",dragFree:!1,loop:!0,dragThreshold:5},j=Array.from([,,,].keys());var Index=function(){return(0,s.jsx)("div",{className:"sandbox relative",children:(0,s.jsx)("section",{className:"sandbox__carousel",children:(0,s.jsx)(js_EmblaCarousel,{slides:j,options:p})})})},f=i(3649);function BasicBars(e){let{_color:l,_data:i}=e;return(0,s.jsx)(f.v,{xAxis:[{scaleType:"band",data:["A","B","C","D","E","F","G","H","I","J"]}],series:[{data:i||[5,18,12,51,68,11,39,37,27,20],color:l}],width:150,height:160,bottomAxis:null,leftAxis:null,axisHighlight:{x:"none"},tooltip:{trigger:"item"}})}var m=i(6857),b=i(9279),u=i(666),w=i(5795),Z=i(6988),y=i(8489),C=i(9050),v=i(3286),I=i(4309),z=i(8864),k=i(8212),S=i(4986),B=i(6428),E=i(4742),D=i(2467),W=i(7754);function createData(e,l,i,s,r,t){return{invId:e,category:l,price:i,status:s,color:r,bg:t}}let Q=[createData("INV-1990","Android","$83.74","Paid","rgb(17, 141, 87);","rgba(34, 197, 94, 0.16);"),createData("INV-1991","Mac","$97.14","Out Of Date","rgb(183,29,24)","rgba(255,86,48,0.16)"),createData("INV-1992","Windows","$68.71","Progress","rgb(183, 110, 0);","rgba(255, 171, 0, 0.16);"),createData("INV-1993","Android","$85.21","Paid","rgb(17, 141, 87);","rgba(34, 197, 94, 0.16);"),createData("INV-1994","Mac","$52.17","Paid","rgb(17, 141, 87);","rgba(34, 197, 94, 0.16);")];function BasicTable(){let[e,l]=x.useState(null),i=!!e,handleClick=e=>{l(e.currentTarget)},handleClose=()=>{l(null)};return(0,s.jsx)(t.Z,{sx:{minWidth:"fit-content"},children:(0,s.jsx)(w.Z,{component:r.Z,children:(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(y.Z,{sx:{bgcolor:"rgb(244,246,248)",color:"rgb(99,115,129)"},children:[(0,s.jsx)(u.Z,{sx:{fontWeight:700,color:"rgb(99,115,129)"},children:"Invoice ID"}),(0,s.jsx)(u.Z,{sx:{fontWeight:700,color:"rgb(99,115,129)"},align:"left",children:"Category"}),(0,s.jsx)(u.Z,{sx:{fontWeight:700,color:"rgb(99,115,129)"},align:"left",children:"Price"}),(0,s.jsx)(u.Z,{sx:{fontWeight:700,color:"rgb(99,115,129)",width:"fit-content"},align:"left",children:"Status"}),(0,s.jsx)(u.Z,{sx:{fontWeight:700,color:"rgb(99,115,129)",width:"fit-content"},align:"right"})]})}),(0,s.jsx)(b.Z,{children:Q.map(l=>(0,s.jsxs)(y.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,s.jsx)(u.Z,{sx:{border:"none"},component:"th",scope:"row",children:l.invId}),(0,s.jsx)(u.Z,{sx:{border:"none"},align:"left",children:l.category}),(0,s.jsx)(u.Z,{sx:{border:"none"},align:"left",children:l.price}),(0,s.jsx)(u.Z,{sx:{border:"none",width:"fit-content"},align:"left",children:(0,s.jsx)(t.Z,{sx:{display:"flex",borderRadius:"0.5rem",color:"".concat(l.color),bgcolor:"".concat(l.bg),padding:"5px",fontSize:"12px",fontWeight:700,width:"fit-content"},children:l.status})}),(0,s.jsxs)(u.Z,{sx:{border:"none"},align:"right",children:[(0,s.jsx)(C.Z,{id:"basic-button","aria-controls":i?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:handleClick,children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",opacity:.5,width:"20px",height:"20px",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"2",fill:"rgb(99,115,129);"}),(0,s.jsx)("circle",{cx:"12",cy:"5",r:"2",fill:"rgb(99,115,129);"}),(0,s.jsx)("circle",{cx:"12",cy:"19",r:"2",fill:"rgb(99,115,129);"})]})}),(0,s.jsxs)(v.Z,{id:"basic-menu",anchorEl:e,open:i,onClose:handleClose,MenuListProps:{"aria-labelledby":"basic-button"},className:"shadow-none",children:[(0,s.jsxs)(I.Z,{onClick:handleClose,children:[(0,s.jsx)(z.Z,{children:(0,s.jsx)(B.Z,{fontSize:"small",sx:{color:"black"}})}),(0,s.jsx)(k.Z,{sx:{fontSize:"14px"},disableTypography:!0,children:"Download"})]}),(0,s.jsxs)(I.Z,{onClick:handleClose,children:[(0,s.jsx)(z.Z,{sx:{fontSize:"14px"},disableTypography:!0,children:(0,s.jsx)(E.Z,{fontSize:"small",sx:{color:"black"}})}),(0,s.jsx)(k.Z,{sx:{fontSize:"14px"},disableTypography:!0,children:"Print"})]}),(0,s.jsxs)(I.Z,{onClick:handleClose,children:[(0,s.jsx)(z.Z,{sx:{fontSize:"14px"},disableTypography:!0,children:(0,s.jsx)(D.Z,{fontSize:"small",sx:{color:"black"}})}),(0,s.jsx)(k.Z,{sx:{fontSize:"14px"},disableTypography:!0,children:"Share"})]}),(0,s.jsx)(S.Z,{light:!0}),(0,s.jsxs)(I.Z,{onClick:handleClose,children:[(0,s.jsx)(z.Z,{sx:{fontSize:"14px"},disableTypography:!0,children:(0,s.jsx)(W.Z,{color:"error",fontSize:"small"})}),(0,s.jsx)(k.Z,{sx:{color:"error",fontSize:"14px"},disableTypography:!0,children:"Delete"})]})]})]}),(0,s.jsx)(S.Z,{light:!0})]},l.invId))})]})})})}var _=i(5266),M=i(9299),P=i(2927),R={src:"/_next/static/media/top-chrome.89332d4d.svg",height:25,width:24,blurWidth:0,blurHeight:0},J={src:"/_next/static/media/top-drive.9f54f927.svg",height:25,width:24,blurWidth:0,blurHeight:0},N={src:"/_next/static/media/top-drop.2ee0889f.svg",height:25,width:24,blurWidth:0,blurHeight:0},V={src:"/_next/static/media/top-ever.6310dfe6.svg",height:25,width:24,blurWidth:0,blurHeight:0},T={src:"/_next/static/media/top-git.4acf595c.svg",height:25,width:24,blurWidth:0,blurHeight:0},topApps=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(_.Z,{sx:{padding:"0 0.5rem",minWidth:"250px",overflowX:"scroll"},children:[(0,s.jsxs)(M.ZP,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(t.Z,{sx:{bgcolor:"rgb(244,246,248)",borderRadius:"0.5rem",mr:1,display:"flex",justifyContent:"center",alignItems:"center"},width:40,height:40,children:(0,s.jsx)(g(),{src:R,alt:"Chrome",width:24,height:24})}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",width:"150px"},children:[(0,s.jsx)(n.Z,{width:100,sx:{fontWeight:"700",fontSize:"14px"},children:"Chrome"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"14px",height:"14px",viewBox:"0 0 24 24",children:(0,s.jsxs)("g",{fill:"none",children:[(0,s.jsx)("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),(0,s.jsx)("path",{fill:"currentColor",d:"m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"})]})}),(0,s.jsx)(n.Z,{sx:{fontSize:"12px",margin:"0 0.5rem"},children:"Mac"}),(0,s.jsx)(t.Z,{sx:{fontSize:"12px",fontWeight:700,color:"rgb(17,141,87)",bgcolor:"rgba(34,197,94,0.16)",padding:"5px",borderRadius:"0.5rem"},children:"Free"})]})]}),(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(P.Z,{readOnly:!0,defaultValue:4,precision:.5,size:"small"}),(0,s.jsx)(n.Z,{align:"right",fontSize:"12px",color:"rgb(99,115,129)",children:"9.91k reviews"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(t.Z,{sx:{bgcolor:"rgb(244,246,248)",borderRadius:"0.5rem",mr:1,display:"flex",justifyContent:"center",alignItems:"center"},width:40,height:40,children:(0,s.jsx)(g(),{src:J,alt:"Drive",width:24,height:24})}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",width:"150px"},children:[(0,s.jsx)(n.Z,{width:100,sx:{fontWeight:"700",fontSize:"14px"},children:"Drive"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"14px",height:"14px",viewBox:"0 0 24 24",children:(0,s.jsxs)("g",{fill:"none",children:[(0,s.jsx)("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),(0,s.jsx)("path",{fill:"currentColor",d:"m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"})]})}),(0,s.jsx)(n.Z,{sx:{fontSize:"12px",margin:"0 0.5rem"},children:"Mac"}),(0,s.jsx)(t.Z,{sx:{fontSize:"12px",fontWeight:700,color:"rgb(17,141,87)",bgcolor:"rgba(34,197,94,0.16)",padding:"5px",borderRadius:"0.5rem"},children:"Free"})]})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"end"},children:[(0,s.jsx)(P.Z,{readOnly:!0,defaultValue:3.5,precision:.5,size:"small"}),(0,s.jsx)(n.Z,{align:"right",fontSize:"12px",color:"rgb(99, 115, 129)",children:"1.95k reviews"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(t.Z,{sx:{bgcolor:"rgb(244,246,248)",borderRadius:"0.5rem",mr:1,display:"flex",justifyContent:"center",alignItems:"center"},width:40,height:40,children:(0,s.jsx)(g(),{src:N,alt:"Dropbox",width:24,height:24})}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",width:"150px"},children:[(0,s.jsx)(n.Z,{width:100,sx:{fontWeight:"700",fontSize:"14px"},children:"Dropbox"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"14px",height:"14px",viewBox:"0 0 24 24",children:(0,s.jsxs)("g",{fill:"none",children:[(0,s.jsx)("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),(0,s.jsx)("path",{fill:"currentColor",d:"M21 13v7.434a1.5 1.5 0 0 1-1.553 1.499l-.133-.011L12 21.008V13zm-11 0v7.758l-5.248-.656A2 2 0 0 1 3 18.117V13zm9.314-10.922a1.5 1.5 0 0 1 1.68 1.355l.006.133V11h-9V2.992zM10 3.242V11H3V5.883a2 2 0 0 1 1.752-1.985z"})]})}),(0,s.jsx)(n.Z,{sx:{fontSize:"12px",margin:"0 0.5rem"},children:"Windows"}),(0,s.jsx)(t.Z,{sx:{fontSize:"12px",fontWeight:700,color:"rgb(183,29,24)",bgcolor:"rgba(255,86,48,0.16)",padding:"5px",borderRadius:"0.5rem"},children:"$68.71"})]})]}),(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(P.Z,{readOnly:!0,defaultValue:4.5,precision:.5,size:"small"}),(0,s.jsx)(n.Z,{align:"right",fontSize:"12px",color:"rgb(99, 115, 129)",children:"9.12k reviews"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(t.Z,{sx:{bgcolor:"rgb(244,246,248)",borderRadius:"0.5rem",mr:1,display:"flex",justifyContent:"center",alignItems:"center"},width:40,height:40,children:(0,s.jsx)(g(),{src:V,alt:"Evernote",width:24,height:24})}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",width:"150px"},children:[(0,s.jsx)(n.Z,{width:100,sx:{fontWeight:"700",fontSize:"14px"},children:"Evernote"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"14px",height:"14px",viewBox:"0 0 24 24",children:(0,s.jsxs)("g",{fill:"none",children:[(0,s.jsx)("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),(0,s.jsx)("path",{fill:"currentColor",d:"m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.453 13.453 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"})]})}),(0,s.jsx)(n.Z,{sx:{fontSize:"12px",margin:"0 0.5rem"},children:"Mac"}),(0,s.jsx)(t.Z,{sx:{fontSize:"12px",fontWeight:700,color:"rgb(17,141,87)",bgcolor:"rgba(34,197,94,0.16)",padding:"5px",borderRadius:"0.5rem"},children:"Free"})]})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"end"},children:[(0,s.jsx)(P.Z,{readOnly:!0,defaultValue:3.5,precision:.5,size:"small"}),(0,s.jsx)(n.Z,{align:"right",fontSize:"12px",color:"rgb(99, 115, 129)",children:"6.98k reviews"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)(t.Z,{sx:{bgcolor:"rgb(244,246,248)",borderRadius:"0.5rem",mr:1,display:"flex",justifyContent:"center",alignItems:"center"},width:40,height:40,children:(0,s.jsx)(g(),{src:T,alt:"Github",width:24,height:24})}),(0,s.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",width:"150px"},children:[(0,s.jsx)(n.Z,{width:100,sx:{fontWeight:"700",fontSize:"14px"},children:"Github"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"14px",height:"14px",viewBox:"0 0 24 24",children:(0,s.jsxs)("g",{fill:"none",children:[(0,s.jsx)("path",{d:"M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),(0,s.jsx)("path",{fill:"currentColor",d:"M21 13v7.434a1.5 1.5 0 0 1-1.553 1.499l-.133-.011L12 21.008V13zm-11 0v7.758l-5.248-.656A2 2 0 0 1 3 18.117V13zm9.314-10.922a1.5 1.5 0 0 1 1.68 1.355l.006.133V11h-9V2.992zM10 3.242V11H3V5.883a2 2 0 0 1 1.752-1.985z"})]})}),(0,s.jsx)(n.Z,{sx:{fontSize:"12px",margin:"0 0.5rem"},children:"Windows"}),(0,s.jsx)(t.Z,{sx:{fontSize:"12px",fontWeight:700,color:"rgb(183,29,24)",bgcolor:"rgba(255,86,48,0.16)",padding:"5px",borderRadius:"0.5rem"},children:"$52.17"})]})]}),(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(P.Z,{readOnly:!0,defaultValue:.5,precision:.5,size:"small"}),(0,s.jsx)(n.Z,{align:"right",fontSize:"12px",color:"rgb(99, 115, 129)",children:"8.49k reviews"})]})]})]})})},O=i(9830);function Country(){return(0,s.jsxs)(_.Z,{sx:{padding:"0rem 0.5rem",pb:"1rem",minWidth:"500px",height:"fit-content"},children:[(0,s.jsxs)(M.ZP,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5,minWidth:"100px"},children:[(0,s.jsx)(t.Z,{sx:{borderRadius:"0.125rem",overflow:"hidden",mr:1},children:(0,s.jsx)(O.JO,{icon:"flagpack:de",width:24})}),(0,s.jsx)(n.Z,{fontWeight:700,fontSize:14,color:"#000",children:"Germany"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"basil:android-solid",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"9.91k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"ri:windows-fill",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"1.95k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:2},children:[(0,s.jsx)(O.JO,{icon:"mdi:apple",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"1.95k"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5,minWidth:"100px"},children:[(0,s.jsx)(t.Z,{sx:{borderRadius:"0.125rem",overflow:"hidden",mr:1},children:(0,s.jsx)(O.JO,{icon:"flagpack:gb-ukm",width:24})}),(0,s.jsx)(n.Z,{fontWeight:700,fontSize:14,color:"#000",children:"England"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"basil:android-solid",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"1.95k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"ri:windows-fill",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"9.12k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:2},children:[(0,s.jsx)(O.JO,{icon:"mdi:apple",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"9.12k"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5,minWidth:"100px"},children:[(0,s.jsx)(t.Z,{sx:{borderRadius:"0.125rem",overflow:"hidden",mr:1},children:(0,s.jsx)(O.JO,{icon:"flagpack:fr",width:24})}),(0,s.jsx)(n.Z,{fontWeight:700,fontSize:14,color:"#000",children:"France"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"basil:android-solid",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"9.12k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"ri:windows-fill",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"6.98k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:2},children:[(0,s.jsx)(O.JO,{icon:"mdi:apple",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"6.98k"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5,minWidth:"100px"},children:[(0,s.jsx)(t.Z,{sx:{borderRadius:"0.125rem",overflow:"hidden",mr:1},children:(0,s.jsx)(O.JO,{icon:"flagpack:kr",width:24})}),(0,s.jsx)(n.Z,{fontWeight:700,fontSize:14,color:"#000",children:"Korea"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"basil:android-solid",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"6.98k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"ri:windows-fill",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"8.49k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:2},children:[(0,s.jsx)(O.JO,{icon:"mdi:apple",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"8.49k"})]})]}),(0,s.jsxs)(M.ZP,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5,minWidth:"100px"},children:[(0,s.jsx)(t.Z,{sx:{borderRadius:"0.125rem",overflow:"hidden",mr:1},children:(0,s.jsx)(O.JO,{icon:"flagpack:us",width:24})}),(0,s.jsx)(n.Z,{fontWeight:700,fontSize:14,color:"#000",children:"USA"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"basil:android-solid",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"8.49k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:5},children:[(0,s.jsx)(O.JO,{icon:"ri:windows-fill",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"2.03k"})]}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mr:2},children:[(0,s.jsx)(O.JO,{icon:"mdi:apple",color:"rgb(145, 158, 171)"}),(0,s.jsx)(n.Z,{fontSize:14,sx:{ml:1},color:"#000",children:"2.03k"})]})]})]})}var G={src:"/_next/static/media/app.d24dfa41.png",height:360,width:480,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAuElEQVR42mNAAowwRvCGiXA2A/epBtGkyzOijjy4mPTm8zuXpx9fGjEssGFlWJLHxAACpnuaXIPPTf3z6tuH/yDw7OPb/zeePghmAIK1F/ezMfitqtJgmFdwYuul4/9/fv/9/8fPX/9ffHybwcDAwNRxcAk/g932CmmGzqSS+rXz9rz/8mnW2y8f+i89veXJkMUgkrtjEg8Dw7xMNp11xYoMMzVVGBgYpBgYGMQYHBgEk7f2ACUZGAB6WE/HwE09uAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},F={src:"/_next/static/media/character.264f542e.png",height:375,width:161,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAc0lEQVR4nAFoAJf/Afqum6T/5u0PBi0kTQHxkYO08ObtJRdJRCcB5LaN0hLs6Qb/EjV7AaOTj9n+8evpXjQxbgE5npqcx97hJ8AsJT0BUqGcrfTl5/xB29hfAUSal7Tt7u7jz8XJdQGto5x0CgYH7ffl5ao5wDjjPSa3zgAAAABJRU5ErkJggg==",blurWidth:3,blurHeight:8},U=i(5175),L=i(3948);function CardLG(){let e=(0,U.Z)({palette:{primary:{main:"rgb(0,167,111)"}}});return(0,s.jsxs)(t.Z,{sx:{display:"flex",background:"linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",padding:"30px",alignItems:"center",gap:4},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"start",flexWrap:"wrap",flexDirection:"column"},children:[(0,s.jsxs)(n.Z,{sx:{color:"rgb(0, 75, 80)",fontSize:"24px",fontWeight:"700"},align:"left",children:["Welcome back \uD83D\uDC4B",(0,s.jsx)("br",{}),"Jaydon Frankie"]}),(0,s.jsx)(n.Z,{sx:{color:"rgb(0, 75, 80)",fontSize:"14px",fontWeight:"100",margin:"1.25rem 0",width:"90%"},align:"left",children:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."}),(0,s.jsx)(L.Z,{theme:e,children:(0,s.jsx)(C.Z,{sx:{width:"fit-content",fontWeight:"700",fontSize:"12px",textTransform:"none",borderRadius:"0.5rem",boxShadow:"none"},variant:"contained",className:"bg-[rgb(0,167,111)]",children:"Go Now"})})]}),(0,s.jsxs)(t.Z,{sx:{position:"relative"},children:[(0,s.jsx)(g(),{src:G,sx:{width:"90%"},alt:""}),(0,s.jsx)(g(),{src:F,className:"absolute top-4 w-[26%] right-4",alt:""})]})]})}function cardSM_CardLG(){let e=(0,U.Z)({palette:{primary:{main:"rgb(0,167,111)"}}});return(0,s.jsxs)(t.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",background:"linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",padding:"30px",alignItems:"center",gap:4},children:[(0,s.jsxs)(t.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",width:"100%"},children:[(0,s.jsxs)(n.Z,{sx:{color:"rgb(0, 75, 80)",fontSize:"20px",fontWeight:"700"},align:"center",children:["Welcome back \uD83D\uDC4B",(0,s.jsx)("br",{}),"Jaydon Frankie"]}),(0,s.jsx)(t.Z,{children:(0,s.jsx)(n.Z,{sx:{color:"rgb(0, 75, 80)",fontSize:"14px",fontWeight:"100",margin:"1.25rem auto",width:"90%"},align:"center",children:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."})}),(0,s.jsx)(t.Z,{children:(0,s.jsx)(L.Z,{theme:e,children:(0,s.jsx)(C.Z,{sx:{width:"fit-content",fontWeight:"700",fontSize:"12px",textTransform:"none",borderRadius:"0.5rem",boxShadow:"none"},variant:"contained",className:"bg-[rgb(0,167,111)]",children:"Go Now"})})})]}),(0,s.jsxs)(t.Z,{sx:{position:"relative"},children:[(0,s.jsx)(g(),{src:G,sx:{width:"90%"},alt:""}),(0,s.jsx)(g(),{src:F,className:"absolute top-4 w-[26%] right-4",alt:""})]})]})}function Card(){let e=(0,c.ZP)("div")(e=>{let{theme:l}=e;return{[l.breakpoints.down("md")]:{display:"none"}}}),l=(0,c.ZP)("div")(e=>{let{theme:l}=e;return{[l.breakpoints.up("md")]:{display:"none"}}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e,{children:(0,s.jsx)(CardLG,{})}),(0,s.jsx)(l,{children:(0,s.jsx)(cardSM_CardLG,{})})]})}var dashboard_page=function(){let e=(0,c.ZP)(r.Z)(e=>{let{theme:l}=e;return{backgroundColor:"dark"===l.palette.mode?"#1A2027":"#fff",...l.typography.body2,textAlign:"center",color:l.palette.text.secondary,borderRadius:"1rem",height:"100%",overflow:"hidden",boxShadow:"5px 5px 10px 0.1px #a0a0a08c"}});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"pt-[100px] bg-white px-4 md:px-12 w-full h-full overflow-x-hidden",children:(0,s.jsx)(t.Z,{sx:{width:"100%",display:"grid"},children:(0,s.jsxs)(o.Z,{container:!0,spacing:3,mb:12,children:[(0,s.jsx)(o.Z,{item:!0,xs:12,md:8,children:(0,s.jsx)(e,{sx:{boxShadow:"2px_2px_10px_10px_rgba(black,1)"},children:(0,s.jsx)(Card,{})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{sx:{background:"black"},children:(0,s.jsx)(Index,{})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{children:(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsxs)(t.Z,{sx:{width:"80%",display:"flex",flexDirection:"column",padding:"1.5rem",justifyContent:"start"},children:[(0,s.jsx)(n.Z,{sx:{textAlign:"left",fontSize:"14px",fontWeight:"600",color:"black",mb:2},children:"Total Active Users"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"24px",height:"24px",viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{fill:"rgb(0,167,111)",d:"M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z",opacity:".5"}),(0,s.jsx)("path",{fill:"rgb(0,167,111)",fillRule:"evenodd",d:"M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057",clipRule:"evenodd"})]}),(0,s.jsx)(n.Z,{sx:{ml:1,fontWeight:600},children:"+2.6%"})]}),(0,s.jsx)(n.Z,{sx:{textAlign:"left",fontSize:"32px",fontWeight:"700",color:"black"},children:"18,765"})]}),(0,s.jsx)(t.Z,{sx:{width:"50%"},children:(0,s.jsx)(BasicBars,{_color:"#13D8AA"})})]})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{children:(0,s.jsxs)(t.Z,{sx:{display:"flex"},children:[(0,s.jsx)(t.Z,{sx:{width:"80%"},children:(0,s.jsxs)(t.Z,{sx:{width:"80%",display:"flex",flexDirection:"column",padding:"1.5rem",justifyContent:"start"},children:[(0,s.jsx)(n.Z,{sx:{textAlign:"left",fontSize:"14px",fontWeight:"600",color:"black",mb:2},children:"Total Installed"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"24px",height:"24px",viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{fill:"rgb(0,167,111)",d:"M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z",opacity:".5"}),(0,s.jsx)("path",{fill:"rgb(0,167,111)",fillRule:"evenodd",d:"M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057",clipRule:"evenodd"})]}),(0,s.jsx)(n.Z,{sx:{ml:1,fontWeight:600},children:"+0.2%"})]}),(0,s.jsx)(n.Z,{sx:{textAlign:"left",fontSize:"32px",fontWeight:"700",color:"black"},children:"4,876"})]})}),(0,s.jsx)(t.Z,{sx:{width:"50%"},children:(0,s.jsx)(BasicBars,{_color:"#69D2E7",_data:[20,41,63,33,28,35,50,46,11,26]})})]})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{children:(0,s.jsxs)(t.Z,{sx:{display:"flex"},children:[(0,s.jsx)(t.Z,{sx:{width:"80%"},children:(0,s.jsxs)(t.Z,{sx:{width:"80%",display:"flex",flexDirection:"column",padding:"1.5rem",justifyContent:"start"},children:[(0,s.jsx)(n.Z,{sx:{textAlign:"left",fontSize:"14px",fontWeight:"600",color:"black",mb:2},children:"Total Downloads"}),(0,s.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"24px",height:"24px",viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{fill:"rgb(255,86,48)",d:"M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z",opacity:".5"}),(0,s.jsx)("path",{fill:"rgb(255,86,48)",fillRule:"evenodd",d:"M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058",clipRule:"evenodd"})]}),(0,s.jsx)(n.Z,{sx:{ml:1,fontWeight:600},children:"-0.1%"})]}),(0,s.jsx)(n.Z,{sx:{textAlign:"left",fontSize:"32px",fontWeight:"700",color:"black"},children:"678"})]})}),(0,s.jsx)(t.Z,{sx:{width:"50%"},children:(0,s.jsx)(BasicBars,{_color:"#F9CE1D",_data:[8,9,31,8,16,37,8,33,46,31]})})]})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{sx:{pb:8},children:(0,s.jsx)(n.Z,{sx:{padding:"1.5rem",fontSize:"18px",fontWeight:700,color:"black",textAlign:"left"},children:"Current Download"})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:8,children:(0,s.jsx)(e,{sx:{pb:8},children:(0,s.jsx)(n.Z,{sx:{padding:"1.5rem",fontSize:"18px",fontWeight:700,color:"black",textAlign:"left"},children:"Area Installed"})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:12,lg:8,children:(0,s.jsxs)(e,{children:[(0,s.jsx)(n.Z,{sx:{padding:"1.5rem",fontSize:"18px",fontWeight:700,color:"black",textAlign:"left"},children:"New Invoice"}),(0,s.jsx)(t.Z,{sx:{overflowX:"scroll"},children:(0,s.jsx)(BasicTable,{})})]})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:6,lg:4,children:(0,s.jsxs)(e,{sx:{pb:"1.5rem"},children:[(0,s.jsx)(n.Z,{sx:{padding:"1.5rem ",fontSize:"18px",fontWeight:700,color:"black",textAlign:"left"},children:"Top Related Applications"}),(0,s.jsx)(topApps,{})]})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:6,lg:4,children:(0,s.jsxs)(e,{children:[(0,s.jsx)(n.Z,{sx:{padding:"1.5rem ",fontSize:"18px",fontWeight:700,color:"black",textAlign:"left",width:"fit-content"},children:"Top Installed Countries"}),(0,s.jsx)(t.Z,{sx:{overflowX:"scroll"},children:(0,s.jsx)(Country,{})})]})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{children:(0,s.jsx)(n.Z,{sx:{padding:"1.5rem ",fontSize:"18px",fontWeight:700,color:"black",textAlign:"left"},children:"Top Authors"})})}),(0,s.jsx)(o.Z,{item:!0,xs:12,md:4,children:(0,s.jsx)(e,{children:"Box"})})]})})})})}},3219:function(){},3670:function(){},6938:function(){}},function(e){e.O(0,[716,924,971,472,744],function(){return e(e.s=926)}),_N_E=e.O()}]);