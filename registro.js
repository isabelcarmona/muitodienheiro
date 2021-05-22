<script> 

	function establecerMoeda(){

		if(document.querySelector('.valor').value === 'USD') 
			{
	 		let num = document.getElementById('campo').innerHTML;
	 		let cambio = 5.28;
	
	 		document.getElementById('campo2').innerHTML = "";
	 		document.getElementById('campo2').innerHTML = num * cambio;

			}
			else
			{
	 		let num = document.getElementById('campo').innerHTML;
	 		let cambio = 6.22;

	 		document.getElementById('campo2').innerHTML = "";
	 		document.getElementById('campo2').innerHTML = "ingrese una moeda";
			} 


</script>
