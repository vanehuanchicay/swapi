
//let btn = document.getElementsByClassName('.one') ;

fetch('https://swapi.co/api/people/')
  .then(function(response) {
    return response.json();
  })
  .then((data)=>{
		let birth = data.results[0].birth_year;
		let name = data.results[2].name;
		let gender = data.results[0].gender;
		console.log(data)
	
	$('.modal-body').append('<p> Nombre ' + name + '</p>' + '<p> Nacimiento ' + birth +'</p>' +
		'<p> Genero ' + gender +'</p>');
	 
});