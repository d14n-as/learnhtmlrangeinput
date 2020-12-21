(function(){
    let head,
        r,g,b;

    function checkSupportRangeInput(){
        let x = document.createElement('input');
        x.setAttribute('type','range');

        return x.type === 'range'
    }
    
    if (checkSupportRangeInput) {
        head = document.querySelector('h1');

        r = document.querySelector('#r');
        g = document.querySelector('#g');
        b = document.querySelector('#b');

        document.body.addEventListener('change', function(){
            head.style.color = 'rgb(' + [r.value, g.value, b.value].join(',') + ')'
        },false)

    }
})();