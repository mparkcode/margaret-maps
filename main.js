var xhr =newXMLHttpRequest();
var data;
xhr .open("GET","https:")
xhr .send();
xhr .onreadystatechange=function(){
    if(this.readyState==4 &&this.status ==200){
        data=this.responseText;
    }
};
    
