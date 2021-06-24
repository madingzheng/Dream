let src = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2855132929,773758645&fm=26&gp=0.jpg'

function onLoadImage(url) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img')
    image.src = url
    image.onload = () => {
      resolve('加载成功')
    }
    image.onerror = () => {
      reject('加载失败')
    }
  }) 
}

const res = onLoadImage(src)
res.then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
})