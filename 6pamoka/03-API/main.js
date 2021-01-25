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

    console.log(user)
});