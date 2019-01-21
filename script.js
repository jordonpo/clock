const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (secondsDegrees === 90) {
		allHands.forEach (hand => hand.style.transition = 'none')
	} else {
		allHands.forEach (hand => hand.style.transition = '')
	}


	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);