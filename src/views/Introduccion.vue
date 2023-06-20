<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.fondo-intro.mb-5.p-4
      .row.align-items-center.justify-content-evenly
        .col-md-7.mb-4.mb-md-0(data-aos="fade-right")
          p.mb-0 El modelo de atención integral en salud enmarca la forma en que interactúan la población y el prestador de servicios, dentro del marco de cumplimiento del derecho a la salud, con base en el territorio y la población, articulando redes de atención integradas e integrales tanto institucionales como comunitarias. En este componente formativo se hace énfasis en la participación de la población en el proceso de generación de la salud como parte de una respuesta intercultural que pueda gestionar los recursos necesarios para garantizar la satisfacción de las necesidades en salud de forma equitativa y eficiente en procura de la calidad de vida de las personas.
        .col-md-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/intro/img.png' alt='')


    p.mb-4(data-aos="fade") Observe el contenido del siguiente video introductorio a las temáticas que serán abordadas en el contexto de la valoración integral en salud.
    
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/T5OP-5Il5T0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Valoración integral en salud



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
