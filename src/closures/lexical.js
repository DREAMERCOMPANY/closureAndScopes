const myGlobal = 0;

function myFunction(){
    const inner = 1;
    console.log(myGlobal)

    function parent(){
        const exe = 2
        console.log(inner, myGlobal)

        function child(){
            const chi = 3;
            console.log(chi , exe , inner , myGlobal)

        }
        return child()
    }

    return parent()

}

myFunction()