// author：陈烁斌 Giant Chan 2014-02-25
// ----****头部js开始****----
// 收藏网址
function addToFavorite(){
	alert("对不起，您的浏览器不支持此操作！\n请您使用菜单栏或Ctrl+D收藏本站。");
}

//处理placeholder在IE中的兼容
var funPlaceholder = function(element) {
    var placeholder = '';
    if (element && !("placeholder" in document.createElement("input")) && (placeholder = element.getAttribute("placeholder"))) {
        element.onfocus = function() {
            if (this.value === placeholder) {
                this.value = "";
            }
            this.style.color = '#b2b2b2';
        };
        element.onblur = function() {
            if (this.value === "") {
                this.value = placeholder;
                this.style.color = '#b2b2b2';    
            }
        };
        
        //样式初始化
        if (element.value === "") {
            element.value = placeholder;
            element.style.color = '#b2b2b2';    
        }
    }
};

//解决getElementByClassName在IE下失效的函数 
 function getElementsByClassName(classname){  
                    var d=document;  
                    var e=d.getElementsByTagName('*');  
                    var c=new RegExp('\\b'+classname+'\\b');  
                    var r=[];  
                      
                    for(var i=0,l=e.length;i<l;i++){  
                        var cn=e[i].className;  
                        if(c.test(cn)){  
                            r.push(e[i]);  
                        }  
                    }  
                    return r;  
     }  
    if(typeof document.getElementsByClassName !='function'){  
         document.getElementsByClassName=getElementsByClassName;  
    }  
// ----****头部js结束****----
