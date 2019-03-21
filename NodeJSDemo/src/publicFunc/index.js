import $ from "jQuery";

const publicFunc = {}

publicFunc.setCookie = (cname,cvalue,exdays)=>{
    let d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};


publicFunc.getCookie = (cname)=>{
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++){
        let c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
};


publicFunc.checkCookie = (cookie)=>{
    var username=publicFunc.getCookie(cookie);
    if (username!=""){
        return true
    }
    else{
        return false
    }
};

publicFunc.removeCookie = (cname)=>{
    publicFunc.setCookie(cname,"",-1)
}

publicFunc.modal = ({title:title,content:content,type:type})=>{
    $("#app").append(`
        <div class="publicFuncModalBox">
            <dl>
                <dt>${title}</dt>
                <dd>${content}</dd>
            </dl>
        </div>
    `)

    type = type? type: "primary";

    let backgroundColor = "primary";

    switch (type){
        case "success":
            backgroundColor = "#099145";
            break;
        case "error":
            backgroundColor = "#e5695d";
            break;
        case "warning":
            backgroundColor = "#f1b350";
            break;
        case "info":
            backgroundColor = "#6dbdc6";
            break;
        case "primary":
            backgroundColor = "#1076be";
            break;
        default:
            // console.log("publicFunc.modal => backgroundColor err");
            break;
    }

    let getHeight = parseInt($(".publicFuncModalBox dt").css("height")) + parseInt($(".publicFuncModalBox dd").css("height")) + 2
    $(".publicFuncModalBox dt").css({"backgroundColor": `${backgroundColor}`, "color": "#fff"})
    $(".publicFuncModalBox dd").css({"backgroundColor": "#fff"})
    let modalCssOption = {
        "position":"fixed",
        "top":"50px",
        "height":0,
        "overfloat":"hidden",
        "border":`1px solid ${backgroundColor}`,
        "width": "100vw",
        "boxSizing": "border-box"
    }
    $(".publicFuncModalBox").css(modalCssOption).stop().animate({"height": getHeight+"px"});
    setTimeout(()=>{
        $(".publicFuncModalBox").animate({"height":0},function(){
            $(".publicFuncModalBox").remove()
        });
    }, 2000)
}

export default publicFunc
