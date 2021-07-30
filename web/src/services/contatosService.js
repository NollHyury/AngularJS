angular.module(__APP_NAME__).factory('contatosApi',function($http,config){
    var url = `${config.baseUrl}/contatos`;
    
    var _getContatos = function(){
        return $http.get(url);
    };

    var _saveContato = function(contato){
        return $http.post(url, contato);
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato,
    };
});