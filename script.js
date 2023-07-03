

window.addEventListener("load", (event) => {
    
    const mimicState = {
        pokemon : 'pikachu',
        ress: {}
    }
    
    const inputstate = () => {
        const input = document.querySelector('input');
        input.addEventListener('keypress', (Event) => {
            if(Event.key === 'Enter'){
                mimicState.pokemon = Event.target.value;
                fetchData()
            }
        })
    }

    const domMali = (ress) => {
        console.log(ress)
        const img = document.querySelector('img');
        const name = document.querySelector('#name');
        img.src = ress.sprites.front_default;
        name.innerText = ress.name;
        let err = false;
        errorMali(err);
    }

    const errorMali = (err) => { 
        const error = document.querySelector('.error');
        err ? error.classList.add('active') : error.classList.remove('active');
       
    }

    const fetchData = async () => {
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${mimicState.pokemon.toLowerCase()}`)
            const result = await res.json();
            mimicState.ress = result;
            domMali(mimicState.ress);
        } catch(e) {
            console.log('error', e);
            let err = true;
            errorMali(err)
        }
    }
 
    fetchData() 
    inputstate() 
});

