async function listaVideos() {
 
    const conexao = await fetch(" http://localhost:3000/videos");

    const conexaoConvertida = await conexao.json();

   // console.log(conexao)
    
   }
   export const conectApi ={
   listaVideos
   }