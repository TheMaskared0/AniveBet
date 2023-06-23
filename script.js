const generateimage = () => {
    var age = window.document.getElementById('age').value;
    var name = window.document.getElementById('name').value;
    var image = window.document.getElementById('image-input').files[0];
    
    if (age && name && image) {
        var backgroundimg = new Image();
        backgroundimg.src = 'https://lh4.googleusercontent.com/Zxk6Mp1rN5LkXJ7zwep1ypKDU3u12UbIUQ499DNAjH6ioFeEduO69OznwNbTNsLTFNYj5MuUfp0vorUbMHLp5K8=w1280';
        
        backgroundimg.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = backgroundimg.width;
            canvas.height = backgroundimg.height;
            
            var ctx = canvas.getContext('2d');
            ctx.drawImage(backgroundimg, 0, 0);
            
            ctx.font = '30px Arial';
            ctx.fillText(name, 150, 550);
            
            var result = canvas.toDataURL('image/png');
            var imagePreview = document.getElementById('image-preview');
            imagePreview.src = result;
        };
    }   
}

function teste() {
    generateimage();
}
