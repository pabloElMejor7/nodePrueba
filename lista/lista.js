var container = document.querySelector(".container");

async function HandleGet() {
        const response = await axios.get("http://localhost:3000/api/");
        const  data = response.data;
        data.forEach(element => {
            const datos = `
                <p> #  ${element.id} </p>
                <p> nombre:  ${element.nombre} </p>
                <p> apellido: ${element.apellido} </p>
                <p> edad:  ${element.edad} </p>
            
            `;

            container.innerHTML = datos;
            
        });
 
}

HandleGet();

