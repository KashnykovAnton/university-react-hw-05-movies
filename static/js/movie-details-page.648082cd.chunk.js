"use strict";(self.webpackChunkuniversity_react_hw_05_movies=self.webpackChunkuniversity_react_hw_05_movies||[]).push([[664],{991:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(43),n=a(216),c=a(475),o=a(420),i=a(657),r=a(575),l=a(236);const d="MovieDetailsPage_MovieDetailsContainer__mHrnw",h="MovieDetailsPage_button__9m-Hc",u="MovieDetailsPage_card__YDtVH",g="MovieDetailsPage_title__cKBtH",v="MovieDetailsPage_genresList__shC7b",p="MovieDetailsPage_link__WJDEq";var _=a(579);const m=()=>{const e=(0,n.Zp)(),t=(0,n.zy)(),a=(0,s.useRef)(t),{movieId:m}=(0,n.g)(),[x,j]=(0,s.useState)([]),[w,f]=(0,s.useState)(!1);(0,s.useEffect)((()=>{(async()=>{try{f(!0);const e=await(0,o.Lu)({movieId:m});if(!e)return;j(e)}catch(e){(0,i.gJ)("Something went wrong: ".concat(e.message))}finally{f(!1)}})()}),[m]);return(0,_.jsxs)("div",{className:d,children:[w&&(0,_.jsx)(l.A,{}),0!==x.length&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{className:h,type:"button",onClick:()=>{var t;e(null!==(t=a.current.state)&&void 0!==t?t:"/")},children:"Go back"}),(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)("img",{src:(0,r.C)(x.poster_path,"poster"),alt:x.title,width:"240px"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{className:g,children:x.title}),(0,_.jsx)("h4",{children:"Vote average / Vote count"}),(0,_.jsxs)("p",{children:[x.vote_average," / ",x.vote_count]}),(0,_.jsx)("h4",{children:"Release date"}),(0,_.jsx)("p",{children:x.release_date||x.first_air_date}),(0,_.jsx)("h4",{children:"Overview"}),(0,_.jsx)("p",{children:x.overview}),(0,_.jsx)("h4",{children:"Genres"}),(0,_.jsx)("ul",{className:v,children:x.genres.map((e=>{let{id:t,name:a}=e;return(0,_.jsx)("li",{children:a},t)}))})]})]}),(0,_.jsx)("hr",{}),(0,_.jsx)(c.N_,{to:"cast",children:(0,_.jsx)("p",{className:p,children:"Cast"})}),(0,_.jsx)(c.N_,{to:"reviews",children:(0,_.jsx)("p",{className:p,children:"Reviews"})}),(0,_.jsx)("hr",{}),(0,_.jsx)(n.sv,{})]})]})}},420:(e,t,a)=>{a.d(t,{Jr:()=>c,Lu:()=>i,as:()=>l,lZ:()=>r,mb:()=>o});var s=a(154);const n="api_key=a2d8ca768997315cf3e5e389a09b25a7";async function c(){const{data:e}=await(0,s.A)("trending/movie/day?".concat(n));return e}async function o(e,t){const{data:a}=await(0,s.A)("search/movie?query=".concat(e,"&page=").concat(t,"&").concat(n,"&language=en-US&include_adult=false"));return a}async function i(e){let{movieId:t}=e;const{data:a}=await(0,s.A)("movie/".concat(t,"?").concat(n,"&language=en-US"));return a}async function r(e){let{movieId:t}=e;const{data:a}=await(0,s.A)("movie/".concat(t,"/credits?").concat(n,"&language=en-US"));return a}async function l(e){let{movieId:t}=e;const{data:a}=await(0,s.A)("movie/".concat(t,"/reviews?").concat(n,"&language=en-US&page=1"));return a}s.A.defaults.baseURL="https://api.themoviedb.org/3/"},657:(e,t,a)=>{a.d(t,{gJ:()=>o,gU:()=>c,um:()=>n});var s=a(401);const n=e=>s.oR.info(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"}),c=e=>s.oR.warning(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"}),o=e=>s.oR.error(e,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored"})},575:(e,t,a)=>{a.d(t,{C:()=>n});const s="https://image.tmdb.org/t/p/w500",n=(e,t)=>{switch(t){case"poster":return e?"".concat(s).concat(e):"https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png";case"photo":return e?"".concat(s).concat(e):"https://t4.ftcdn.net/jpg/01/86/29/31/240_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg";default:return}}}}]);
//# sourceMappingURL=movie-details-page.648082cd.chunk.js.map