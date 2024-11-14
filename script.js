let urls = location.pathname.split('/')

let imgurl = urls[urls.length - 1].replace(',', '/')

let imgEle = document.getElementById("dimg")

imgEle.src = "data:image/png,base64," + imgurl;