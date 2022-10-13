let dataBlog = []

function addBlog(event) {
    event.preventDefault()

    let projectName = document.getElementById("input-projectName").value
    let startDate= document.getElementById("input-startDate").value
    let endDate = document.getElementById("input-endDate").value
    let description = document.getElementById("input-description").value
    let next = document.getElementById("next").checked
    let node = document.getElementById("node").checked
    let react = document.getElementById("react").checked
    let script = document.getElementById("script").checked
    let image = document.getElementById("image").files[0]
    

    // buat url gambar nantinya tampil
    image = URL.createObjectURL(image)
    console.log(projectName)
    console.log(image);

    let blog = {
        projectName,
        startDate,
        endDate,
        description,
        next,
        node,
        react,
        script,
        image,
        postAt: new Date(),
        author: ""
    }

    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
        <h1>MY PROJECT</h1>
            <div class="blog-image">
                <img src="${dataBlog[index].image}">
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Delete</button>
                    <button class="btn-post">Edit</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">
                        ${dataBlog[index].projectName}
                    </a>
                </h1>
                <div class="detail-blog-content">
                    12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsy
                </div>
                <p>
                    ${dataBlog[index].description}
                </p>
            </div>
            
        </div>
        `
    }
}