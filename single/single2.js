var CreateDiv = (function(){

  var instance;

  var CreateDiv = function(html){
    if(instance){
      return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };

  CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHtml = this.html;
    document.body.appendChild(div);
  }

  return CreateDiv;

})();

var a = new CreateDiv('sven1');
var b = new CreateDiv('sven2');

console.log(a === b);


var CreateDiv = function(html){
  this.html = html;
  this.init();
}

CreateDiv.prototype.init = function(){
  var div = document.createElement('div');
  div.innerHtml = html;
  document.body.appendChild(div);
}

var ProxySingletonCreateDiv = (function(){
  var instance;
  return function(html){
    if(!instance){
      instance = new CreateDiv(html);
    }
    return instance;
  }
})();

var a = new ProxySingletonCreateDiv('sven1');
var b = new ProxySingletonCreateDiv('sven2');

var MyApp = {};

MyApp.namespace = function(name){
  var parts = name.split('.');
  var current = MyApp;
  for(var i in parts){
    if(!current[parts[i]]){
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
};

MyApp.namespace('event');
MyApp.namespace('dom.style');

var user = (function(){
  var _name = 'ddd',
      _age = 'ccc';

  return {
    getUserInfo: function(){
      return _name + '-' + _age;
    }
  }
})();






var getSingle = function(fn) {
  var result;
  return function(){
    return result || (result = fn.apply(this, arguments));
  }
}