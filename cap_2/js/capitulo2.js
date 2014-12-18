$(document).ready(function(){
	ejemplo2_1();
	ejemplo2_2();
	ejemplo2_3();
	ejemplo2_4();
	ejemplo2_5();
	// ejemplo2_4();
});

function ejemplo2_1(){
	var objeto = {};

	_.extend(objeto, Backbone.Events);

	objeto.on("alert", function(msg, el){
		alert(msg);
		el.append("<div class='tested'>ok</div>");
	});

	$("#ejemplo1").click(function(){
		objeto.trigger("alert","pasando parametros de evento", $(this));
	});
}

function ejemplo2_2(){
	var objeto = {};

	_.extend(objeto, Backbone.Events);

	objeto.on("alert", function(msg, el){
		alert(msg);
		el.append("<div class='tested'>ok</div>");
		objeto.off("alert");
	});

	$("#ejemplo2").click(function(){
		objeto.trigger("alert","Pasando Parametros on y off: ", $(this));
	});
}

function ejemplo2_3(){

	var objeto1 = {};
	var objeto2 = {};

	_.extend(objeto1, Backbone.Events);
	_.extend(objeto2, Backbone.Events);

	$("#ejemplo3").click(function(){
		objeto1.trigger("alert", "Lanzando el evento del objeto1");
		//objeto1.stopListening("alert");
	});

	objeto2.listenTo(objeto1, "alert", function(msg){
		alert("Recibiendo desde objeto2" + msg);
		this.stopListening();
	});
	//Puedes trabajar con las caracteirsticas del objeto desde el objeto 2


	/*var objeto1 = {};

	_.extend(objeto1, Backbone.Events);

	objeto1.on("alert", function(msg, el){
		alert(msg);
	});

	$("#ejemplo3").click(function(){
		objeto1.trigger("alert", "Lanzando el evento del objeto1");
		objeto2.trigger("alert", "Lanzando el evento del objeto2");
	});

	var objeto2 = {};

	_.extend(objeto2, Backbone.Events);

	objeto2.on("alert", function(msg, el){
		alert(msg);
	});*/
}

function ejemplo2_4(){
	var objeto = {};

	_.extend(objeto, Backbone.Events);

	objeto.once('alert',function(msg){
		alert("Recibido solo una vez :" + msg)
	});

	$("#ejemplo4").click(function(){
		objeto.trigger("alert", "Pasando datos del evento");
	});
}

function ejemplo2_5(){
	var objeto = {};

	_.extend(objeto, Backbone.Events);

	objeto.on('all', function(eventName, msg){
		alert(eventName + " : "+ msg);
	});

	objeto.on('alert:obj1', function(msg){
		alert("Mensaje del objeto 1: " + msg);
	});


	$("#ejemplo5a").click(function(){
		objeto.trigger("alert:obj1", "Pasando datos de evento desde el primer enlace");
	});

	$("#ejemplo5b").click(function(){
		objeto.trigger("alert:obj2", "Pasando datos de evento desde el segundo enlace");
	});
}