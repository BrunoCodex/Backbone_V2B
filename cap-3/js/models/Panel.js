/*var Panel = Backbone.Model.extend(
	{
		nombre : "Mi Panel"
	}
);*/

/*var Panel = Backbone.Model.extend(
	{
		//nombre : "Mi Panel"
		propInstancia : "instancia generica"
	},
	{
		//estaticas
		propEstatica : "valor estatico"
	}
)*/

/*var Panel = Backbone.Model.extend(
	{
		defaults : {
			txt : "Aun no se ha definido texto",
			rotulo : "Sin nombre"
		}
	}
);*/

/*var Panel = Backbone.Model.extend(
	{
		defaults : {
			txt : "Aun no se ha definido texto",
			rotulo : "Sin nombre"
		}
	}
);*/

/*var Panel = Backbone.Model.extend(
	{
		prefijo : "Texto de Panel",
		defaults : {
			txt : "Aun no se ha definido texto",
			rotulo : "Sin nombre"
		},
		initialize: function(attr){
			window.trace("El txt es: "+attr.txt);
		}
	}
);*/

/*var Panel = Backbone.Model.extend(
	{
		prefijo : "Texto de Panel --",
		defaults : {
			txt : "Aun no se ha definido texto",
			rotulo : "Sin nombre"
		},
		initialize: function(attr){
			// window.trace("El txt es: "+attr.txt);
			this.set("txt", this.prefijo + attr.txt);
		},
		toString : function(){
			// return "El texto es: "+ txt;
			// return "El texto es: "+ this.attributes.txt;
			return "El texto es: "+ this.get('txt');
		}
	}
);*/

/*var Panel = Backbone.Model.extend(
	{
		prefijo : "Texto de Panel --",
		defaults : {
			txt : "Aun no se ha definido texto",
			rotulo : "Sin nombre"
		},
		initialize: function(attr){
			// window.trace("El txt es: "+attr.txt);
			this.on("change", this.onChangeAll, this);//Verifiar cambios en todas las propiedades

			this.on("change:rotulo", this.onChangeRotulo, this);

			this.set("txt", this.prefijo + attr.txt);
		},
		toString : function(){
			// return "El texto es: "+ txt;
			// return "El texto es: "+ this.attributes.txt;
			return "El texto es: "+ this.get('txt');
		},
		onChangeAll: function(model, options){
			window.trace("Se han cambiado propiedades del Modelo Panel");
		},
		onChangeRotulo: function(model, options){
			trace("Se ha cambiado el rotulo por: "+this.get("rotulo"));
		}
	}
);*/

var Panel = Backbone.Model.extend(
	{
		prefijo : "Texto de Panel --",
		defaults : {
			txt : "Aun no se ha definido texto",
			rotulo : "Sin nombre"
		},
		initialize: function(attr){
			// window.trace("El txt es: "+attr.txt);
			this.on("change", this.onChangeAll, this);//Verifiar cambios en todas las propiedades

			this.on("change:rotulo", this.onChangeRotulo, this);

			

			this.set("txt", this.prefijo + attr.txt);
		},
		toString : function(){
			// return "El texto es: "+ txt;
			// return "El texto es: "+ this.attributes.txt;
			return "El texto es: "+ this.get('txt');
		},
		onChangeAll: function(model, options){
			window.trace("Se han cambiado propiedades del Modelo Panel");
		},
		onChangeRotulo: function(model, options){
			trace("Se ha cambiado el rotulo por: "+this.get("rotulo"));
		},
		validate: function(attrs, options){
			if(attrs.isActive != undefined && !_.idBoolean(attrs.isActive)){
				return "El valor de activacion no es correcto";
			}
		}
	}
);