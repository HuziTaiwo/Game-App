const addGame = document.querySelector('.games');
// const gamesImages = document.querySelectorAll('.games img');
const gameDetails = document.querySelector('.game-details-container');
const preview = document.querySelector('.main-image');
const screenshotPreviews = document.querySelectorAll('.screenshot img');


const updateGames = (data) => {
	const games = data.games;


	games.map(game => {
		addGame.innerHTML += `
			<div class="game">
				<div class="game-header">
					<h3>${game.name}</h3>
					<h4>${game.released}</h4>
				</div>
				<div class="game-body">
					<img src="${game.background_image}" alt="${game.slug}">
				</div>
			</div>
		`;
	});


	setTimeout(() => {
	const gamesImages = document.querySelectorAll('.games img');
	
	// games.forEach(datas => {
	// 	const prevs = [
	// 		datas.short_screenshots
	// 	];
	// 	prevs.map(prev => {
	// 		console.log(prev[0].image)
	// 	})
	// });

	gamesImages.forEach(image => {
		image.addEventListener('click', ()=> {
			gameDetails.classList.add('open');
			preview.src = image.src;

			//game screenshots
			screenshotPreviews.forEach(screenshotPreview => {
				games.forEach(datas => {
					const prevs = [
						datas.short_screenshots
					];
					prevs.map(prev => {
						console.log(prev[0])
						screenshotPreview.src = prev[0];
					})
				});
			});
		});
	});

	gameDetails.addEventListener('click', (e) => {
		if (e.target.classList.contains('game-details-container')) {
			gameDetails.classList.remove('open');
		}
	});
}, 3000)

};



const getGames = async (data) => {

	const games = await funGames();

	return {
		games: games.results,
	}

}



getGames()
	.then(data => updateGames(data))
	.catch(err => console.log(err));