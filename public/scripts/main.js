$(function(){
	$.ajax({
		url:"http://www.omdbapi.com/?t=Game%20of%20Thrones"
	}).done(function(data){
		console.log(data);
		let html = `
	<img class="article-image" src="/img/portfolio1.png" border="0" alt="
		`;
		document.querySelector('#Kappa').innerHTML = h1;

	});
})