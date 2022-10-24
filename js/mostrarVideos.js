const lista = document.querySelector("[data-lista]").dataset.lista

    constroiCard(){
        const video = document.createElement("li")
        video.className ="videos__item";


        video.innerHTML = '<iframe width="100%" height="72%" src="https://www.youtube.com/embed/-mKfKiQAPjM"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <h3>O QUE ESPERAR DA PROGRAMAÇÃO EM 2022?</h3>
        <p>127.259 visualizações  23 de nov. de 2021 </p>
    </div>'
    }