angular.module(__APP_NAME__).service('operadorasApi', function($http,config) {
    this.url = `${config.baseUrl}/operadoras`;

    this.getOperadoras = function() {
        return $http.get(url);
    };
})