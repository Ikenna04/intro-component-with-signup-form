const firstName = document.getElementById('first-name'),
	lastName = document.getElementById('last-name'),
	mail = document.getElementById('mail'),
	password = document.getElementById('password'),
	login = document.querySelector('.login-section'),
	complete = document.querySelector('.complete'),
	span = document.getElementById('span'),
	btn = document.querySelectorAll('.btn');

let textPattern, mailPattern, hasFirstName, hasLastName, hasMail, hasPassword;

const submit = () => {
	textPattern = /[a-z]/gi;
	mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	firstName.value.match(textPattern)
		? ((firstName.parentElement.nextElementSibling.innerHTML = ' '),
		  (firstName.nextElementSibling.style.display = 'none'),
		  (firstName.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasFirstName = true))
		: complete.classList.contains('show')
		? ((firstName.parentElement.nextElementSibling.innerHTML = ' '),
		  (firstName.nextElementSibling.style.display = 'none'),
		  (firstName.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasFirstName = true))
		: !firstName.value
		? ((firstName.parentElement.nextElementSibling.innerHTML = `Can't be blank`),
		  (firstName.nextElementSibling.style.display = 'block'),
		  (firstName.parentElement.style.border = '2px solid var(--red)'),
		  (hasFirstName = false))
		: !firstName.value.match(mailPattern)
		? ((firstName.parentElement.nextElementSibling.innerHTML = `You such that's your name`),
		  (firstName.nextElementSibling.style.display = 'block'),
		  (firstName.parentElement.style.border = '2px solid var(--red)'),
		  (hasFirstName = false))
		: ((firstName.parentElement.nextElementSibling.innerHTML = 'Error'),
		  (firstName.nextElementSibling.style.display = 'block'),
		  (firstName.parentElement.style.border = '2px solid var(--red)'),
		  (hasFirstName = false));

	lastName.value.match(textPattern)
		? ((lastName.parentElement.nextElementSibling.innerHTML = ' '),
		  (lastName.nextElementSibling.style.display = 'none'),
		  (lastName.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasLastName = true))
		: complete.classList.contains('show')
		? ((lastName.parentElement.nextElementSibling.innerHTML = ' '),
		  (lastName.nextElementSibling.style.display = 'none'),
		  (lastName.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasLastName = true))
		: !lastName.value
		? ((lastName.parentElement.nextElementSibling.innerHTML = `Can't be blank`),
		  (lastName.nextElementSibling.style.display = 'block'),
		  (lastName.parentElement.style.border = '2px solid var(--red)'),
		  (hasLastName = false))
		: !lastName.value.match(mailPattern)
		? ((lastName.parentElement.nextElementSibling.innerHTML = `You such that's your name`),
		  (lastName.nextElementSibling.style.display = 'block'),
		  (lastName.parentElement.style.border = '2px solid var(--red)'),
		  (hasLastName = false))
		: ((lastName.parentElement.nextElementSibling.innerHTML = 'Error'),
		  (lastName.nextElementSibling.style.display = 'block'),
		  (lastName.parentElement.style.border = '2px solid var(--red)'),
		  (hasLastName = false));

	mail.value.match(mailPattern)
		? ((mail.parentElement.nextElementSibling.innerHTML = ' '),
		  (mail.nextElementSibling.style.display = 'none'),
		  (mail.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasMail = true))
		: complete.classList.contains('show')
		? ((mail.parentElement.nextElementSibling.innerHTML = ' '),
		  (mail.nextElementSibling.style.display = 'none'),
		  (mail.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasMail = true))
		: !mail.value
		? ((mail.parentElement.nextElementSibling.innerHTML = `Can't be blank`),
		  (mail.nextElementSibling.style.display = 'block'),
		  (mail.parentElement.style.border = '2px solid var(--red)'),
		  (hasMail = false))
		: !mail.value.match(mailPattern)
		? ((mail.parentElement.nextElementSibling.innerHTML =
				'Looks like this is not an email'),
		  (mail.nextElementSibling.style.display = 'block'),
		  (mail.parentElement.style.border = '2px solid var(--red)'),
		  (hasMail = false))
		: ((mail.parentElement.nextElementSibling.innerHTML = 'Error'),
		  (mail.nextElementSibling.style.display = 'block'),
		  (mail.parentElement.style.border = '2px solid var(--red)'),
		  (hasMail = false));

	password.value.length >= 8
		? ((password.parentElement.nextElementSibling.innerHTML = ' '),
		  (password.nextElementSibling.style.display = 'none'),
		  (password.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasPassword = true))
		: complete.classList.contains('show')
		? ((password.parentElement.nextElementSibling.innerHTML = ' '),
		  (password.nextElementSibling.style.display = 'none'),
		  (password.parentElement.style.border = '2px solid var(--grayish-blue)'),
		  (hasPassword = true))
		: !password.value
		? ((password.parentElement.nextElementSibling.innerHTML = `Can't be blank`),
		  (password.nextElementSibling.style.display = 'block'),
		  (password.parentElement.style.border = '2px solid var(--red)'),
		  (hasPassword = false))
		: password.value.length < 8
		? ((password.parentElement.nextElementSibling.innerHTML = `Your password must be more than eight digits long`),
		  (password.nextElementSibling.style.display = 'block'),
		  (password.parentElement.style.border = '2px solid var(--red)'),
		  (hasPassword = false))
		: ((password.parentElement.nextElementSibling.innerHTML = 'Error'),
		  (password.nextElementSibling.style.display = 'block'),
		  (password.parentElement.style.border = '2px solid var(--red)'),
		  (hasPassword = false));

	hasFirstName && hasLastName && hasMail && hasPassword
		? (login.classList.toggle('hide'), complete.classList.toggle('show'))
		: '';

	firstName.value = '';
	lastName.value = '';
	mail.value = '';
	password.value = '';
};

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', submit);
}
