
if(document.getElementById('pagefooter') != null){
    const url ='/admin/api/2022-07/blogs.json'
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById('showBlogs')
    })
}