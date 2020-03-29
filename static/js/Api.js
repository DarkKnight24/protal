var urlHead = "http://huaknight.icu:8084";

var urlFoot = "/api";

var url = urlHead.toString() + urlFoot.toString();

class baseAjax{
    constructor(async,type,url,dataType,data,contentType,processData,method){
        
        this.async = async==null?true:async;
        this.type = type==null||type==""?"get":type;
        this.url = url;
        this.dataType = "json";
        this.data = data;
        this.contentType = contentType;
        this.processData = processData;
        this.method = method;
    }
}
    


function ajax(baseAjax, func,errorFuc){
    $.ajax({
        async: baseAjax.async,
        method: baseAjax.method,
        type: baseAjax.type,
        url: baseAjax.url,
        dataType: baseAjax.datatype,
        contentType: baseAjax.contentType,
        data: baseAjax.data,
        error: function (data) {
            //请求失败时被调用的函数 
            errorFuc();
        },
        success: function (obj) {
            if(func!=null)
                func(obj.data);
        }
    });
}