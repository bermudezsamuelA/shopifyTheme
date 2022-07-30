
    console.log("aqui")

if(document.getElementById('pagefooter') != null){
    console.log("aqui")
    const url ='/admin/api/2022-07/blogs.json'
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data',data)
        document.getElementById('showBlogs')
    })
}