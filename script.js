let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((Contest) => {
    console.log(Contest)
    ihtml = ""
    for (item in Contest) {
        console.log(Contest[item])
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
            <img src="https://th.bing.com/th/id/OIP.hI7u4AmAPWI1RnZ-KPMfhgHaE6?w=231&h=180&c=7&r=0&o=5&pid=1.7" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 class="card-title">${Contest[item].name}</h5>
                    <p class="card-text">Status is ${Contest[item].status} and site is  ${Contest[item].site} </p>
                    <p class="card-text">In 24 Hours?${Contest[item].in_24_hours} </p>
                    <p>Start at ${Contest[item].start_time} </p>
                    <p>Start at ${Contest[item].end_time} </p>
                </div>
                <div class="mt-3">
                    <a href="${Contest[item].url}" class="btn btn-primary">Visit Contest</a>
                </div>
            </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml
})