function validar(){
		
    
	let usuario =document.getElementById("usuario").value
	let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value
		
    
    
    if(usuario =="" && email =="" && tel==""){
		alert('preencha os campos')
	}else{
		alert('Acesso Permitido')
    
		}
}