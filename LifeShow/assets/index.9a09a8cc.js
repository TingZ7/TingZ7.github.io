import{s as f,r as i,j as e,a as n,g as S,S as C,L as y}from"./index.bd5e03c0.js";const I=f.div`
.idea-detail-header{
    padding-top: 0.1rem;
    display:flex;
    justify-content: space-between;
    .idea-detail-header-left,.idea-detail-header-right{
        display:flex;
        align-items: center;  
        .fa-angle-left{
            font-size: 1.5rem;
            margin: 0 1rem;
        }
        .userimg{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            margin-right: 0.6rem;
            margin-top: 0.35rem;
        }
        .username{
            font-size:0.5rem;
            font-weight: 700;
        }
    }
    .idea-detail-header-right{
        .concern{
            color:red;
            font-weight:600;
            border: 1px solid red;
            text-align: center;
            width: 50px;
            height: 22px;
            border-radius:12px;
        }    
        .icon-zhuanfa{
            margin:0.5rem;
            font-size: 17px;
        }
        .fa-ellipsis-v{ 
            font-size: 1rem;
            margin: 0 1rem;
        }
    }   
}
.swiper-img{
    width: 100%;
}
.content{
    font-size: 0.7rem;
    margin: 1.5rem 0;
    padding: 0 1rem;
}

 
`,B=f.div`
.footer{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top:0.1rem;
    display: flex;
    border-top: 1px solid grey;
    padding: 0.1rem 0;  
    .icon-iconfront-{
        margin-right: 0.2rem;
    }
    .comment{      
        background-color: #f6f6f6;
        margin-top:0.3rem;
        margin-bottom:0.3rem ;
        font-size: 0.7rem;
        flex:1;
        padding-left: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius:1rem; 
        margin-right: -0.5rem;
    }
    .font-items{
        display: flex;
    .font-item{
        margin-top: 0.5rem;
        padding: 0 0.75rem;
        display: flex;
        i{
            font-size: 1.2rem;
            height: 1rem;
            line-height: 1rem;
        }
        .active-red{
            color:red;
        }
        .font-number{
            margin-top: 0.1rem;
            margin-left:0.1rem;
            font-size: 0.1rem;
        }
    }   
    }
}
`;function k({idea:d}){const[r,s]=i.exports.useState(0),[o,c]=i.exports.useState(!1),[m,a]=i.exports.useState(0),[t,u]=i.exports.useState(!1),[G,N]=i.exports.useState(0);i.exports.useState(!1);const[h,x]=i.exports.useState(0);i.exports.useState(!1),i.exports.useEffect(()=>{if(d[0]){let l=d[0],{guzhangnumber:b,shoucangnumber:v,sharenumber:w,commentnumber:z}=l;s(b),a(v),N(w),x(z)}},[d]);const g=()=>{console.log(o),o||(s(r+1),c(!0)),o&&(s(r-1),c(!1))},p=()=>{console.log(t),t||(a(m+1),u(!0)),t&&(a(m-1),u(!1))};return e(B,{children:n("div",{className:"footer",children:[n("div",{className:"comment",children:[e("i",{className:"iconfont icon-iconfront-"}),"\u8BF4\u70B9\u4EC0\u4E48..."]}),n("div",{className:"font-items",children:[n("div",{className:"font-item",children:[o?e("i",{className:"iconfont icon-dianzan active-red",onClick:g}):e("i",{className:"iconfont icon-dianzan",onClick:g}),e("div",{className:"font-number",children:r||"\u70B9\u8D5E"})]}),n("div",{className:"font-item",children:[t?e("i",{className:"iconfont icon-shoucang active-red",onClick:p}):e("i",{className:"iconfont icon-shoucang",onClick:p}),e("div",{className:"font-number",children:m||"\u6536\u85CF"})]}),n("div",{className:"font-item",children:[e("i",{className:"iconfont icon-pinglun"}),e("div",{className:"font-number",children:h||"\u8BC4\u8BBA"})]})]})]})})}const D=f.div`
    border-top: 1px solid DarkGray;
`;function E(){return e(D,{children:"\u5171643\u6761\u8BC4\u8BBA"})}function F(){const r=new URLSearchParams(location.search).get("id"),[s,o]=i.exports.useState([]),[c,m]=i.exports.useState([]);return i.exports.useEffect(()=>{(async()=>{let{data:a}=await S();a=a.filter(u=>u.id==r),o(a);const{imgs:t}=a[0];m(t)})()},[]),i.exports.useEffect(()=>{let a;a||(a=new C(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}}))},[c]),n(I,{children:[s.map(a=>n("div",{children:[n("div",{className:"idea-detail-header",children:[n("span",{className:"idea-detail-header-left",children:[e(y,{to:{pathname:"/home/idea"},children:e("i",{className:"fa fa-angle-left"})}),e("img",{src:a.userimg,alt:"userimg",className:"userimg"}),e("span",{className:"username",children:a.username})]}),n("span",{className:"idea-detail-header-right",children:[e("p",{className:"concern",children:"\u5173\u6CE8"}),e("i",{className:"iconfont icon-zhuanfa"})]})]}),n("div",{className:"swiper-container img-swiper",children:[e("div",{className:"swiper-wrapper",children:c.map(t=>e("div",{className:"swiper-slide",children:e("img",{src:t.img,width:"100%"})},t.imgId))}),e("div",{className:"swiper-pagination"})]}),e("p",{className:"content",children:a.content})]},a.id)),e(E,{}),e(k,{idea:s})]})}export{F as default};
