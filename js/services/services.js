const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json' 
        },
        body: data
    });

    return res.json();
};


async function getResource (url) {
    let res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
}

// axios.get('http://localhost:3000/menu')
//     .then(data => {
//         data.data.forEach(({img, altimg, title, descr, price}) => {
//             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//         });
//     });

export {postData};
export {getResource};