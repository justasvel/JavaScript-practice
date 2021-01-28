const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/');

    if (response.status === 200) {
        const data = await response.json();

        return data;
    } else {
        throw new Error('Unable to get the user');
    }
}

getRandomUser().then(randUser => {
    let user = randUser.results[0];

    let cellphone = document.querySelector('#cell');
    let name = document.querySelector('#name');
    let image = document.querySelector('#image');
    let gender = document.querySelector('#gender');
    let date = document.querySelector('#date');



    cellphone.innerHTML = user.cell;
    name.innerHTML = user.name.first + ' ' + user.name.last;
    image.src = user.picture.medium;
    gender.innerHTML = user.gender;
    date.innerHTML = user.dob.date;
    console.log(user)
});