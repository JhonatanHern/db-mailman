module.exports = function (date) {
	return `
		<!DOCTYPE html>
		<html>
		<head>
			<title>Message</title>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style>
				*{
					box-sizing: border-box;
					font-family: 'Century Gothic';
				}
				body{
					margin: 0;
					padding: 1em;
				}
				img{
					width: 100%;
				}
				h1{
					font-size: 1.8em;
					color: #373737;
				}
				h1 span{
					color: #1D71B8;
					text-decoration: underline rgb(247,147,29); 
				}
				p{
					font-size: 1.3em;
				}
				a{
					display: block;
					color: #1D71B8;
					font-size: 1.1em;
					margin-bottom: .5em;
				}
			</style>
		</head>
		<body>
			<h1><span>SEROFCA</span> le notifica!</h1>
			<p>
				Desde SEROFCA, le notificamos que la visita a su 
				clínica está planificada para el: ${date.getDate()}-${date.getUTCMonth()+1}-${date.getFullYear()}
			</p>
			<p>
				Contáctanos en:
				<a href="https://serofca.com">serofca.com</a>
				Para información sobre nuestros cursos:
				<a href="https://curso.serofca.com">curso.serofca.com</a>
				También puedes contactarnos por correo:<br>
				serofca@gmail.com
			</p>
			<script>
				setTimeout(function(){location.reload()},1000)
			</script>
			<!--img src="https://curso.serofca.com/images/lsvg.svg"-->
		</body>
		</html>
	`
}