let url = "https://picsum.photos/v2/list?limit=5"

fetch(url)
        .then(res => {
            return res.json()
        })

        .then(imgs=>{
            console.log(imgs);
            imgs.forEach(img => {
                let i = document.createElement('img');
                let new_url = img.download_url

                console.log(new_url.replace(img.width, '400'));
                new_url = new_url.replace(img.width, '400');
                console.log(new_url);

                console.log(new_url.replace(img.height, '300'));
                new_url = new_url.replace(img.height, '300');
                console.log(new_url);

                i.alt = img.author;
                i.src = new_url;
                document.querySelector('body').appendChild(i);
            })
        })

    