$(document).ready(function(){
    $("#create_button").click(function(){
        //var panel = new Panel();
        // window.trace(panel.nombre);
        
        /*var panel1 = new Panel();
        var panel2 = new Panel();

        panel1.propInstancia = "nuevo valor de instancia";
        window.trace(panel1.propInstancia + " : " + Panel.propEstatica);
        window.trace(panel2.propInstancia + " : " + Panel.propEstatica);
        Panel.propEstatica = "nuevo valor estatico";
        window.trace(panel1.propInstancia + " : " + Panel.propEstatica);
        window.trace(panel2.propInstancia + " : " + Panel.propEstatica);*/

        /*var panel1 = new Panel();
        var panel2 = new Panel({txt: "Este es el nuevo panel", rotulo: "Mi panel"});
        console.debug(panel1);
        console.debug(panel2);*/

        /*var panel1 = new Panel();
        var panel2 = new Panel({txt: "Este es el nuevo panel", rotulo: "Mi panel"});
        window.trace(JSON.stringify(panel1.toJSON()));        
        window.trace(JSON.stringify(panel2.toJSON()));    */    

        /*var panel = new Panel({txt: "Este es el nuevo panel", rotulo: "Mi panel"});
        // window.trace(JSON.stringify(panel1.toJSON()));*/

                
        /*var panel = new Panel({txt: "Este es el nuevo panel", rotulo: "Mi panel"});
        window.trace(panel.get('rotulo'));
        window.trace(panel.toString());*/

        /*var panel = new Panel({txt: "Este es el nuevo panel", rotulo: "Mi panel"});
        window.trace(panel.get('rotulo'));
        window.trace(panel.toString());
        window.trace(panel.set('rotulo','new Rotulo'));*/

        
    });
});

//función que escribe un mensaje en la consola
function trace(msg){
    $("#consola").append(msg+"<br>");
    console.log(msg);
}







