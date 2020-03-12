var urlHead = "http://localhost:8084";

var urlFoot = "/api";

var url = urlHead.toString() + urlFoot.toString();

class baseAjax{
    constructor(async,type,url,dataType,data,contentType,processData){
        
        this.async = async==null?true:async;
        this.type = type==null||type==""?"get":type;
        this.url = url;
        this.dataType = dataType;
        this.data = data;
        this.contentType = contentType;
        this.processData = processData;
    }
}
    


function ajax(baseAjax, func){
    $.ajax({
        async: baseAjax.async,
        type: baseAjax.type,
        url: baseAjax.url,
        dataType: baseAjax.datatype,
        contentType: baseAjax.contentType,
        data: baseAjax.data,
        error: function (data) {
            //请求失败时被调用的函数 
            console.log(baseAjax);
            alert("传输失败:" + data);
        },
        success: function (data) {
            if(func!=null)
                func(data);
        }
    });
}