<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instrumentos para la valoración integral en salud


    .row.fondo-t1.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") La Organización Mundial de la Salud (OMS) diseñó un instrumento para evaluar la calidad de vida en personas sanas y enfermas que, a diferencia de otros, considera la percepción del sujeto en sus dimensiones física, psicológica, social y ambiental de manera integral.

          .col-md-1.mb-4(data-aos="fade")
            img(src='@/assets/curso/temas/t1/deco1.png' alt='' style="width: 85px;")
          .col-md-11.mb-4(data-aos="fade")
            p.mb-0 Los instrumentos de valoración integral en salud ayudan a realizar intervenciones poblacionales de carácter estructural, que requieren de la acción intersectorial para su desarrollo. De estas intervenciones es correcto afirmar que:

          .row.fondo-detras-azul.mb-4(data-aos="fade-down")
            .col-md-3.mb-4
              .tarjeta.tarjeta-slide.arriba.bg-white.box-shadow(@mouseover="indicadorTarjetaSlide = false")
                .indicador--hover(v-if="indicadorTarjetaSlide")
                .tarjeta-slide__contenedor
                  .tarjeta-slide__contenido.p-4.p-xl-5.text-center
                    h5.t-blue Liderazgo de la nación 
                    p.mb-0 Se realizan bajo el liderazgo de la Nación y de las Entidades Territoriales y su alcance puede ser nacional, departamental o municipal (de acuerdo con sus competencias).
                  .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarjeta1.png')})`}")
            .col-md-3.mb-4
              .tarjeta.tarjeta-slide.arriba.bg-white.box-shadow
                .tarjeta-slide__contenedor
                  .tarjeta-slide__contenido.p-4.p-xl-5.text-center
                    h5.t-blue Visión pública 
                    p.mb-0 Deben estar incluidas en los Planes de Desarrollo Territorial, Planes de Ordenamiento Territorial, los Planes Sectoriales y el Plan Territorial de Salud, utilizando las herramientas y metodologías disponibles.
                  .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarjeta2.png')})`}")
            .col-md-3.mb-4
              .tarjeta.tarjeta-slide.arriba.bg-white.box-shadow
                .tarjeta-slide__contenedor
                  .tarjeta-slide__contenido.p-4.p-xl-5.text-center
                    h5.t-blue Impacto 
                    p.mb-0 Afectan las condiciones, modos y los estilos de vida de una sociedad y dan cuenta de la acción sobre los determinantes sociales y ambientales de la salud.
                  .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarjeta3.png')})`}")
            .col-md-3.mb-4
              .tarjeta.tarjeta-slide.arriba.bg-white.box-shadow
                .tarjeta-slide__contenedor
                  .tarjeta-slide__contenido.p-4.text-center
                    h5.t-blue Promoción social y cultural  
                    p.mb-0 Están dirigidas a la población en su conjunto para la modificación de los contextos, los entornos y las condiciones sociales, económicas, culturales o ambientales a fin de que se conviertan en potenciadores de la salud, el bienestar y el desarrollo humano, favoreciendo elecciones saludables a los ciudadanos.
                  .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarjeta4.png')})`}")

          .col-md-7.mb-4(data-aos="fade-right")
            p De conformidad con lo anterior, corresponde al sector salud gestionar que las políticas, planes, programas y proyectos de los diferentes sectores se orienten a la garantía de los derechos a la vida y la salud, de acuerdo con las prioridades territoriales en salud y de forma pertinente con las características poblacionales y territoriales del momento histórico.
            p Las líneas de acción que orientan las intervenciones poblacionales se especifican para tener conocimiento en cómo intervenir en la atención de la familia como sujeto de derechos.
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img.png' alt='')

    Separador 

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Marco normativo y técnico

    .row 
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img2.png' alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        p Para implementar las Rutas Integrales de Atención en Salud, las Instituciones Prestadoras de Servicios de Salud y otras entidades que tengan a su cargo ejecución de acciones en salud, adicional a las responsabilidades previstas en el artículo 9º de la Resolución 3202 de 2016 deberán ejecutar una serie de acciones establecidas dentro del marco normativo y técnico correspondiente.
        .row.align-items-center
          .col-auto.mb-4(data-aos="fade")
            img(src='@/assets/curso/temas/t1/deco2.png' alt='' style="width: 85px;")
          .col-10.mb-4(data-aos="fade")
            p.mb-0 La Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud (RPMS) contempla tres tipos de intervenciones.
    
    .bg-2.tarjeta.pt-4
      .row.justify-content-evenly(data-aos="fade-down")
        .col-md-11
          p Vea, a continuación, sus principales características y algunas consideraciones para su abordaje familiar y comunitario:
        .col-md-7
          .tarjeta.bg-white.p-4.p-md-5.mb-4
            SlyderA(tipo="b")
              .row
                h5.t-blue Intervenciones poblacionales 
                p Dirigidas a toda la población. 
                p Se deben considerar los efectos poblacionales en términos de incidencia intergeneracional o transformaciones sociales y familiares, en el marco de la superación de las inequidades y la afectación de los determinantes sociales de la salud con el fin de lograr su promoción y mantenimiento. Incluye como uno de sus pilares estratégicos, la salud familiar y comunitaria
              .row
                h5.t-blue Intervenciones del Plan de Salud Pública de Intervenciones Colectivas – PIC 
                p Dirigidas a las familias o comunidades que comparten situaciones particulares, se concretan a través del PIC de cada entidad territorial.
                p Énfasis en el entorno hogar considerando las condiciones particulares y orientando la realización de las actividades, procedimientos e intervenciones de manera integrada y pertinente para el abordaje de las familias.
              .row
                h5.t-blue Intervenciones individuales 
                p Dirigidas a las personas en los diferentes momentos del curso de vida y a la familia. 
                p A partir del reconocimiento de la dinámica y estructura familiar en las intervenciones de valoración integral de cada uno los integrantes de la familia según el momento de curso de vida y en las intervenciones a la familia, como sujeto de atención en salud colectivo.
        .col-md-4
          img(src='@/assets/curso/temas/t1/img3.png' alt='')


    Separador 

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Instrumentos de tamizaje

    .row.fondo2-t1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-8.mb-4(data-aos="fade-right")
            p Se definen como el conjunto de intervenciones en salud dirigidas a las personas en sus diferentes momentos de curso de vida y a la familia como sujeto de atención, que tienen como finalidad la valoración integral, la detección temprana, la protección específica y la educación para la salud de forma individual, grupal o familiar, con el fin de potenciar o fortalecer las capacidades para el cuidado de la salud de las personas, minimizar el riesgo de enfermar o derivar oportunamente a rutas de grupo de riesgo o a los servicios de salud requeridos para el manejo de su condición de salud.
            p Este procedimiento está dirigido a todas las niñas y niños de 6 a 11 años, 11 meses y 29 días que habitan en el territorio nacional.
          .col-md-4.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img4.png' alt='')

          .col-md-12
            h4.t-blue(data-aos="fade") Alcances u objetivos
          
          .row(data-aos="fade-down")
            .col-md-3
              .tarjeta.fondo-tarj1.p-4.h-100
                img.mb-4(src='@/assets/curso/temas/t1/tarj-ico1.svg' alt='' style="width: 80px;")
                p Valorar y hacer seguimiento de la salud y desarrollo integral (físico, cognitivo, social) de los niños y las niñas.
            .col-md-3
              .tarjeta.fondo-tarj1.p-4.h-100
                img.mb-4(src='@/assets/curso/temas/t1/tarj-ico2.svg' alt='' style="width: 80px;") 
                p Identificar tempranamente la exposición o presencia de factores de riesgo con el fin de prevenirlos o derivarlos para su manejo oportuno.
            .col-md-3
              .tarjeta.fondo-tarj1.p-4.h-100
                img.mb-4(src='@/assets/curso/temas/t1/tarj-ico3.svg' alt='' style="width: 80px;")
                p Detectar de forma temprana alteraciones que afecten negativamente la salud y el proceso de crecimiento y desarrollo, con el fin de referirlas para su manejo oportuno.
            .col-md-3
              .tarjeta.fondo-tarj1.p-4.h-100
                img.mb-4(src='@/assets/curso/temas/t1/tarj-ico4.svg' alt='' style="width: 80px;") 
                p Potenciar capacidades, habilidades y prácticas para promover el cuidado de la salud y fortalecer el desarrollo de los niños mediante la información en salud con padres y/o cuidadores y niños (as).




    Separador 

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Instrumentos asociados a la valoración integral en salud de aplicación obligatoria

    .row.mb-4
      .col-md-2.mb-4(data-aos="fade")
        img(src='@/assets/curso/temas/t1/img5.svg' alt='')
      .col-md-10.mb-4(data-aos="fade")
        p.mb-0 La atención en salud a las familias, garantiza su reconocimiento como sujeto colectivo de derechos y fin en sí misma, a partir de la valoración integral a la familia, que se realiza a través de la aplicación de herramientas de evaluación familiar que permiten reconocer las capacidades y el grado de funcionamiento familiar que permita identificar los riesgos para la salud de la familia y sus integrantes y las condiciones de desarrollo y funcionalidad de las relaciones familiares, que pueden generar una derivación a atenciones adicionales dirigidas a la familia que contribuyan a su promoción y fortalecimiento.

    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Escala Abreviada de Desarrollo 3 (EAD-3)

    .row 
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img6.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p La Escala Abreviada de Desarrollo 3 (EAD-3) es un instrumento de valoración integral diseñado para que los profesionales de medicina general y enfermería, y especialistas pediátricos (pediatras, neurólogos pediatras, fisiatras infantiles, etc.) y en medicina familiar realicen el tamizaje del desarrollo infantil en la primera infancia en los entornos clínicas del país y contribuyan a detectar oportunamente a niños que tengan riesgo o sospecha de un problema del desarrollo.
        .row.align-items-center
          .col-auto.mb-4
            img(src='@/assets/curso/temas/t1/deco3.png' alt='' style="width: 85px;")
          .col-10.mb-4
            p.mb-0 En la aplicación de la Escala Abreviada de Desarrollo 3 (EAD-3) es importante atender las siguientes recomendaciones:

    .row.mb-4 
      .col-md-8.mb-4(data-aos="fade-right")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Leer el Manual Técnico") Debe hacerse lectura completa y atenta del Manual Técnico de la EAD-3
          p(numero="2" titulo="Entrenamiento con expertos") Entrenarse en la aplicación de la EAD-3 con profesionales expertos (Secretarías de salud)
          p(numero="3" titulo="Kit en óptimas condiciones") Contar con el kit de materiales completo, en buen estado y limpio
          p(numero="4" titulo="Ambiente adecuado") Garantizar que se cumplan las condiciones materiales, de espacio, tiempo, estado de salud y emocional del niño y sus acompañantes, para la adecuada evaluación, sin afectación en la aplicación y los resultados.
          p(numero="5" titulo="Factores de riesgo") Establecer si el niño tiene algún factor de riesgo para el desarrollo infantil, haciendo énfasis en la prematuridad y sus complicaciones.
          p(numero="6" titulo="Edad") Establecer la edad precisa de la niña o el niño para poderlo ubicar en el rango de edad correspondiente.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img7.png' alt='')

    .row.mb-4 
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img8.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        LineaTiempoD.color-primario
          p(numero="7" titulo="Aplicación") Iniciar la aplicación por cualquier dimensión, de acuerdo con las circunstancias propias de cada evaluación y de cada niño.
          p(numero="8" titulo="Puntaje Directo") En cada dimensión, establecer claramente el punto de inicio y el punto de cierre para poder obtener el Puntaje Directo respectivo.
          p(numero="9" titulo="Puntaje Típico") El Puntaje Directo de cada dimensión debe convertirse en Puntaje Típico con la Tabla de Conversión de la dimensión correspondiente.
          p(numero="10" titulo="Clasificación por dimensión") En la Hoja de Registro de Puntuación, ubicar el rango de edad, y en cada una de las filas por cada dimensión (MG: motricidad gruesa, MF: motricidad fino adaptativa, AL: audición y lenguaje y PS: conducta personal social), cruzar el Puntaje Típico obtenido para identificar clasificación de color por cada dimensión.
          p(numero="11" titulo="Derivación a consulta pediatría") En caso de que un niño reporte cualquier dimensión en color amarillo o rojo, debe ser derivado a consulta por pediatría para valoración a profundidad, considerar nueva aplicación de la EAD3, e iniciar el proceso de diagnóstico y tratamiento del problema de desarrollo infantil.
        
    p.mb-4(data-aos="fade") Revise el siguiente video a manera de guía para la interpretación de los resultados de la aplicación de la Escala Abreviada de Desarrollo 3 (EAD-3):
    
    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KHwngPtM2-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Interpretación de resultados Escala Abreviada de Desarrollo 3 (EAD-3)


    .row.justify-content-center.mb-5
      .col-md-7
        .border-r5.bg-7.p-4
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0.col-5
              img(src='@/assets/curso/temas/t1/img9.svg' alt='')
            .col-md-9
              p Para mayor información, revise el manual técnico de la EAD-3:
              .row 
                .col-md-9
                  a.anexo.mb-4.mb-lg-0(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Escala-abreviada-de-desarrollo-3.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Enlace web.] Escala abreviada de desarrollo 3 EAD

    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Instrumento valoración auditiva y comunicativa (VALE)
    
    .row.fondo3-t1.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") El instrumento de valoración de la audición y la comunicación está orientado a detectar tempranamente posibles alteraciones en la audición y la comunicación de niños entre los 0 y 12 años, tomando como referente las señales que marcan el desarrollo del lenguaje, la audición y la comunicación.

          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/img10.png' alt='')
          .col-md-8.mb-4(data-aos="fade-left")
            p Tiene como punto de inicio dos listas de verificación del riesgo:
            ul.lista-ul--color.color-primario.ps-md-4.fa-ul
              li
                i.fas.fa-capsules
                span
                  b.t-blue Riesgos Generales: 
                  | condiciones perinatales y postnatales. 
              li.mb-1
                i.fas.fa-capsules
                span
                  b.t-blue Condiciones Estructurales: 
                  | presencia e integridad de estructuras anatómicas.  
            p Una tercera parte, corresponde a la valoración de los siguientes ítems a través de una serie de preguntas para los padres, que se deben validar con las respuestas en el niño:
            ul.lista-ul--color.color-primario.ps-md-4.fa-ul
              li.mb-1
                i.fas.fa-capsules
                span
                  b.t-blue Comprensión (C): 
                  | recepción de estímulos auditivos y su representación mental.  
              li.mb-1
                i.fas.fa-capsules
                span
                  b.t-blue Expresión (E): 
                  | planificación y exteriorización del pensamiento.
              li.mb-1
                i.fas.fa-capsules
                span
                  b.t-blue Interacción Comunicativa (I): 
                  | oportunidades sociales en micro y macro contextos comunicativos.  
              li
                i.fas.fa-capsules
                span
                  b.t-blue Aspectos Vestibulares (V): 
                  | procesos y habilidades para el mantenimiento de la posición del cuerpo desde aspectos del vestíbulo.  

          p.text-center.mb-4(data-aos="fade") Para la aplicación del instrumento de valoración auditiva y comunicativa (VALE) se recomienda atender los siguientes pasos:

    .row.justify-content-center(data-aos="fade-down")
      .col-md-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.align-items-center
            .col-md-2.mb-4.mb-md-0
              img.mx-auto(src='@/assets/curso/temas/t1/paso1.svg', alt='' style="width: 85px;")
            .col-md-9
              p Explicar a los padres o cuidadores el procedimiento que se realizará con el fin de obtener información precisa sobre los niños.
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p Registrar los datos de identificación del niño.
            .col-md-2
              img.mx-auto(src='@/assets/curso/temas/t1/paso2.svg', alt='' style="width: 85px;") 
          .row.align-items-center
            .col-md-2.mb-4.mb-md-0
              img.mx-auto(src='@/assets/curso/temas/t1/paso3.svg', alt='' style="width: 85px;")
            .col-md-9
              p Preguntar a los padres por los factores de riesgo según la lista de chequeo y verificar las condiciones estructurales.
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p Ubicar el rango de edad del niño o niña y seleccionar los ítems de valoración. Si el niño tiene edad corregida 1, iniciar desde este rango la aplicación.
            .col-md-2
              img.mx-auto(src='@/assets/curso/temas/t1/paso4.svg', alt='' style="width: 85px;") 
          .row.align-items-center
            .col-md-2.mb-4.mb-md-0
              img.mx-auto(src='@/assets/curso/temas/t1/paso5.svg', alt='' style="width: 85px;")
            .col-md-9
              p Formular a los padres o cuidadores las preguntas correspondientes al rango de edad del niño
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p Calificar cada ítem SI o NO, de acuerdo a la respuesta del adulto.
            .col-md-2
              img.mx-auto(src='@/assets/curso/temas/t1/paso6.svg', alt='' style="width: 85px;") 
          .row.align-items-center
            .col-md-2.mb-4.mb-md-0
              img.mx-auto(src='@/assets/curso/temas/t1/paso7.svg', alt='' style="width: 85px;")
            .col-md-9
              p Si el niño tiene 3 años o más, se aplican los ítems correspondientes a la categoría Vestibular (V) ubicados al final.
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p La evaluación se da por terminada con valoración de SI en los ítems de todo el rango de edad, y se considera adecuada para la edad. Si se marca No en al menos una pregunta, se aplican las preguntas del rango de edad anterior repitiendo la acción hasta encontrar respuesta positiva.
            .col-md-2
              img.mx-auto(src='@/assets/curso/temas/t1/paso8.svg', alt='' style="width: 85px;") 
          .row.align-items-center
            .col-md-2.mb-4.mb-md-0
              img.mx-auto(src='@/assets/curso/temas/t1/paso9.svg', alt='' style="width: 85px;")
            .col-md-9
              p La prueba se puede completar con materiales que permitan verificar la presencia de las conductas a valorar, teniendo en cuenta el contexto cultural y social del niño. Para esto se usan los Ítems de “Observación directa”.
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p Sumar las respuestas negativas de los ítems de Comprensión (C), Expresión (E), Interacción Comunicativa (I) y Vestibulares (V).
            .col-md-2
              img.mx-auto(src='@/assets/curso/temas/t1/paso10.svg', alt='' style="width: 85px;") 

    p.mb-4(data-aos="fade") El análisis de datos es esencial para la clasificación de riesgo y toma de decisiones en cuanto a la remisión, por lo que es importante considerar, entre otros elementos los relacionados a continuación:

    ol.lista-ol--cuadro.color-acento-contenido.redondo.mb-4.fa-ul
      li 
        .lista-ol--cuadro__vineta
          span.fw-bold a
        | Interpretar los resultados de acuerdo con el siguiente criterio:

    .row.justify-content-center.mb-5
      .col-md-9(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1] Interpretación de resultados
        .tabla-a.color-acento-contenido
          table
            thead
              tr.bg-3
                th Pasa
                th.colum-60 Falla
            tbody.bg-white
              tr
                td.text-center Si la sumatoria es 0 (cero) - negativa en todos los criterios de calificación y en los Ítems de valoración
                td
                  ul.lista-ul--color.color-primario.ps-md-4.fa-ul
                    li
                      i.fas.fa-chevron-right
                      | Si tiene alguna condición prenatal o perinatal con calificación positiva SI 
                    li
                      i.fas.fa-chevron-right
                      | Si tiene alguna condición estructural con calificación positiva SI 
                    li
                      i.fas.fa-chevron-right
                      | Si tiene una calificación mayor a 1 en la valoración de los ítems

    .row.mb-5
      .col-md-8.mb-4(data-aos="fade-right")
        ol.lista-ol--cuadro.color-acento-contenido.redondo.mb-4.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold b
            | Realizar el registro de los resultados en la historia clínica y reportar en los RIPS si fue remitido al tamizaje auditivo con tecnología dura o no.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold c
            | En caso de Falla, realizar la remisión a un profesional en fonoaudiología o especialista en audiología, con el fin de hacer una evaluación completa de los procesos de audición, lenguaje, habla y comunicación, y hacer seguimiento al resultado para determinar la conducta a seguir.
          li 
            .lista-ol--cuadro__vineta
              span.fw-bold d
            | En caso de pasar, continuar con las valoraciones periódicas según la ruta de Promoción y Mantenimiento en la Salud.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img11.png' alt='')

    
    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Instrumento de identificación de riesgo de diabetes Finnish Risk Score (FINDRISC)

    .row 
      .col-md-1.mb-4(data-aos="fade")
        img(src='@/assets/curso/temas/t1/deco4.png' alt='' style="width: 85px;")
      .col-md-11.mb-4(data-aos="fade")
        p.mb-0 El Finnish Diabetes Risk Score (FINDRISC) es probablemente, una de las herramientas más eficaces para prevenir la diabetes. Se trata de un instrumento sencillo, útil y válido para detectar riesgo de desarrollar diabetes tipo 2 e identificar personas con diabetes no conocidas.

    p.mb-4(data-aos="fade") A continuación, algunos puntos de buena práctica clínica en la aplicación del FINDRISC:  

    .row.mb-5
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Aplicación")
            ul.lista-ul--color.color-secundario.fa-ul
              li
                i.fas.fa-chevron-right
                | El FINDRISC debe ser aplicado por personal familiarizado con la herramienta.
          .row(titulo="Pertinencia")
            ul.lista-ul--color.color-secundario.fa-ul
              li
                i.fas.fa-chevron-right
                | Se debe hacer una prueba diagnóstica de DMT2 a todas las personas que tengan un puntaje ≥ 12 en el FINDRISC. La prueba diagnóstica más apropiada es la medición de la glucemia plasmática en ayunas.
          .row(titulo="Categorías")
            ul.lista-ul--color.color-secundario.fa-ul
              li
                i.fas.fa-chevron-right
                | En las personas con un puntaje ≥ 12 en el FINDRISC que no cumplan criterios diagnósticos de DMT2, se recomienda establecer la presencia de categorías con riesgo aumentado de diabetes (prediabetes)*, para incluirlas en programas de prevención de DMT2. 
              li
                i.fas.fa-chevron-right
                | Categorías con riesgo aumentado de diabetes:
              ul.lista-ul--color.color-secundario.fa-ul.ps-md-5.ps-3
                li
                  i.fas.fa-chevron-right
                  span #[b Glucemia de ayuno alterada:] Glucemia plasmática en ayuno entre 100 y 125 mg/dL.   
                li
                  i.fas.fa-chevron-right
                  span #[b Intolerancia a la glucosa:] Glucemia a las dos horas entre 140 y 199 mg/dL en una prueba de tolerancia oral a la glucosa (PTOG).
          .row(titulo="Pedagogía")
            ul.lista-ul--color.color-secundario.fa-ul
              li
                i.fas.fa-chevron-right
                | En todos los casos debe hacerse educación sobre estilos de vida saludable, con énfasis en el control de los factores de riesgo para DM que fueron identificados con la escala.
          .row(titulo="Continuidad")
            ul.lista-ul--color.color-secundario.fa-ul
              li
                i.fas.fa-chevron-right
                | A las personas con puntaje < 12 en el FINDRISC se les debe instruir sobre la importancia de estilos de vida saludable y de hacerse de nuevo tamización transcurridos tres años.
        
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Test de Findrisk		
                  p.mb-0 Para ampliar la información le invitamos a consultar la herramienta en línea llamada Test de Findrisk que permite evaluar el riesgo de que una persona pueda desarrollar Diabetes Tipo 2 en los próximos 10 años.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.tuotromedico.com/autotest/autotest_findrisk.htm')" target="_blank")
                    span Enlace web
                    i.fas.fa-link 
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img12.png' alt='')


    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Tablas de estratificación de riesgo cardiovascular de la OMS

    .row.align-items-center
      .col-md-4.mb-4(data-aos="fade-right")
        p Las tablas de predicción del riesgo de la OMS/ISH indican el riesgo de padecer un episodio cardiovascular grave, mortal o no (infarto de miocardio o ataque apoplético), en un periodo de 10 años según la edad, el sexo, la presión arterial, el consumo de tabaco, el colesterol total en sangre y la presencia o ausencia de diabetes mellitus en 14 subregiones epidemiológicas de la OMS.
      .col-md-8.mb-4(data-aos="fade-left")
        .row 
          .col-md-5.pe-md-0
            img(src='@/assets/curso/temas/t1/img14.png' alt='')
          .col-md-7.ps-md-0
            .bg-2.h-100.p-4.border-r5
              img.mb-3(src='@/assets/curso/temas/t1/deco5.png' alt='' style="width: 80px;")
              p.mb-0 Existen dos modelos de tablas. Uno de ellos (14 tablas) es válido para los contextos en los que se puede determinar el colesterol en sangre, mientras que el otro (14 tablas) se ha concebido para los contextos en que eso no es posible. Cada tabla debe usarse sólo en los países de la subregión epidemiológica de la OMS correspondiente.

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img15.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p.mb-4 Las tablas presentan estimaciones aproximadas del riesgo de enfermedad cardiovascular en personas sin cardiopatía coronaria, ataque apoplético u otra enfermedad aterosclerótica establecidas. Son una valiosa ayuda para identificar a las personas de alto riesgo cardiovascular y motivar a los pacientes para que modifiquen su modo de vida y, si es necesario, sigan el tratamiento oportuno con medicamentos antihipertensivos, hipolipemiantes y aspirina.
        .row.align-items-center
          .col-auto.mb-4(data-aos="fade")
            img(src='@/assets/curso/temas/t1/deco6.png' alt='' style="width: 85px;")
          .col-10.mb-4(data-aos="fade")
            h5.mb-0.t-blue ¿En qué casos se puede prescindir de la estratificación mediante tablas de riesgo cardiovascular para la toma de decisiones terapéuticas?
        p Algunos individuos tienen un elevado riesgo cardiovascular porque sufren una enfermedad cardiovascular establecida o presentan niveles muy altos de algún factor de riesgo. En estos casos no es necesario estratificar el riesgo mediante tablas para adoptar decisiones terapéuticas, pues esas personas pertenecen a la categoría de alto riesgo. Todas ellas requieren intervenciones de cambio intensivo de su modo de vida y un tratamiento farmacológico adecuado.
        p A estas personas se les clasifica así:
        ul.lista-ul--color.color-primario.ps-md-3.fa-ul
          li.mb-3
            i.fas.fa-chevron-right
            | Con enfermedad cardiovascular establecida
          li.mb-3
            i.fas.fa-chevron-right
            | Sin enfermedad cardiovascular establecida, pero con un colesterol total ≥ 8 mmol/l (320 mg/dl), un colesterol LDL ≥ 6 mmol/l (240 mg/dl) o una relación CT/C-HDL > 8
          li.mb-3
            i.fas.fa-chevron-right
            | Sin enfermedad cardiovascular establecida, pero con cifras de tensión arterial permanentemente elevadas (> 160–170/100–105 mmHg)
          li.mb-3
            i.fas.fa-chevron-right
            | Con diabetes tipo 1 o tipo 2, con nefropatía manifiesta u otra enfermedad renal importante
          li
            i.fas.fa-chevron-right
            | Con insuficiencia renal o deterioro de la función renal.

    .row.fondo-blue.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            p.mb-4(data-aos="fade") Conozca las instrucciones para la utilización de las tablas de predicción del riesgo de la OMS/ISH:
          
          .tarjeta.bg-white.box-shadow(data-aos="fade-down")
            .row
              .col-md-8
                .p-4
                  ol.lista-ol--cuadro.color-acento-contenido.redondo.fa-ul
                    li 
                      .lista-ol--cuadro__vineta
                        span.fw-bold 1
                      | Recopilar la siguiente información: 
                  ul.lista-ul--color.color-primario.ps-md-4.ps-3.fa-ul.mb-3
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Presencia o ausencia de diabetes
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Sexo 
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Fumador o no fumador 
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Edad 
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Presión arterial sistólica
                    li.mb-0
                      i.fas.fa-chevron-right
                      | Colesterol total en sangre (si se mide en mg/dl, dividir por 38 para pasar a mmol/l)
                  ol.lista-ol--cuadro.color-acento-contenido.redondo.mb-4.fa-ul    
                    li.mb-3 
                      .lista-ol--cuadro__vineta
                        span.fw-bold 2
                      | Elegir la tabla adecuada según la presencia o ausencia de diabetes 1.
                    li.mb-3 
                      .lista-ol--cuadro__vineta
                        span.fw-bold 3
                      | Elegir el cuadro del sexo en cuestión.
                    li.mb-3
                      .lista-ol--cuadro__vineta
                        span.fw-bold 4
                      | Elegir el recuadro fumador o no fumador.
                    li.mb-3 
                      .lista-ol--cuadro__vineta
                        span.fw-bold 5
                      | Elegir el recuadro del grupo de edad (elegir 50 si la edad está comprendida entre 50 y 59 años, 60 para edades entre 60 y 69 años, etc.)
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span.fw-bold 6
                      | En el recuadro finalmente elegido, localizar la celda más cercana al cruce de los niveles de presión arterial sistólica (mmHg)3 y de colesterol total en sangre (mmol/l)1. El color de la celda indica el riesgo cardiovascular a 10 años.
              .col-md-4.p-md-0
                img(src='@/assets/curso/temas/t1/img16.png' alt='')

    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Consideraciones prácticas

    p.mb-4(data-aos="fade") Téngase en cuenta que el riesgo de enfermedad cardiovascular puede ser mayor que el indicado en las tablas en los siguientes casos:

    .tarjeta.bg-6.mb-5(data-aos="fade-down")
      .row
        .col-md-3
          img(src='@/assets/curso/temas/t1/img17.png' alt='')
        .col-md-9
          .p-4
            ol.lista-ol--cuadro.color-acento-contenido.redondo.fa-ul.mb-0
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 1
                | Personas ya sometidas a tratamiento antihipertensivo.
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 2
                | Menopausia prematura.
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 3
                | Personas que se aproximan a la siguiente categoría de edad o a la siguiente categoría de presión arterial sistólica.
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 4
                | Obesidad (en particular obesidad central).
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 5
                span #[b Sedentarismo:] antecedentes familiares de cardiopatía coronaria o ataque apoplético prematuros en familiar de primer grado (hombre < 55 años, mujer < 65 años). Concentración elevada de triglicéridos (> 2,0 mmol/l o 180 mg/dl). Concentración baja de colesterol HDL (< 1 mmol/l o 40 mg/dl en los hombres, < 1,3 mmol/l o 50 mg/dl en las mujeres).
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 6
                | Concentraciones elevadas de proteína C-reactiva, fibrinógeno, homocisteína, apolipoproteína B ó Lp(a), hiperglucemia en ayunas o intolerancia a la glucosa.
              li.mb-3 
                .lista-ol--cuadro__vineta
                  span.fw-bold 7
                | Micro albuminuria (aumenta el riesgo a 5 años de los diabéticos en un 5% aproximadamente).
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.fw-bold 8
                | Frecuencia cardiaca aumentada.

    .row.justify-content-center.mb-5
      .col-md-8
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Calculadora de riesgo cardiovascular				
                  p.mb-0 Para más detalle lo invitamos a consultar el siguiente enlace web dentro del cual podrá descubrir el riesgo de padecer una enfermedad del corazón y como modificarlo.		
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.paho.org/es/hearts-americas/calculadora-riesgo-cardiovascular')" target="_blank")
                    span Enlace web
                    i.fas.fa-link 

    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Tablas de estratificación de riesgo cardiovascular Framinghan

    .row.align-items-center.mb-5
      .col-md-7.mb-4(data-aos="fade-right")
        p Utilizan un método de puntuación con base a las siguientes variables:
        ul.lista-ul--color.color-primario.ps-md-4.fa-ul
          li.mb-1
            i.fas.fa-chevron-right
            | Edad (35-74 años)
          li.mb-1
            i.fas.fa-chevron-right
            | Sexo
          li.mb-1
            i.fas.fa-chevron-right
            | Colesterol HDL
          li.mb-1
            i.fas.fa-chevron-right
            | Colesterol total
          li.mb-1
            i.fas.fa-chevron-right
            | Presión arterial sistólica
          li.mb-1
            i.fas.fa-chevron-right
            | Tabaquismo (sí/no)
          li.mb-1
            i.fas.fa-chevron-right
            | Diabetes (sí/no)
          li
            i.fas.fa-chevron-right
            | Hipertrofia ventricular izquierda (HVI) (sí/no)
        p Con ello es posible calcular el riesgo coronario a los 10 años que incluye: angina estable, infarto de miocardio (IAM) y muerte coronaria
        p Para ver la aplicación de las tablas en contexto, explore el contenido del siguiente documento:
        .row 
          .col-md-9
            a.anexo.mb-4.mb-lg-0(href="http://www.revcorsalud.sld.cu/index.php/cors/article/view/220/640" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] Riesgo cardiovascular global
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img18.png' alt='')     

    
    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Índice de Barthel (Actividades Básicas de la Vida Diaria - ABVD)

    .row.align-items-center
      .col-md-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img19.svg' alt='')
      .col-md-10.mb-4(data-aos="fade-left")
        p La evaluación de la discapacidad está adquiriendo una relevancia cada vez mayor. El índice de Barthel es un instrumento ampliamente utilizado para este propósito y mide la capacidad de la persona para la realización de diez actividades básicas de la vida diaria, obteniendo una estimación cuantitativa del grado de dependencia del sujeto.
        p Para ver el test, remítase al instrumento dispuesto a continuación:
        .row 
          .col-md-8
            a.anexo.mb-4(:href="obtenerLink('/downloads/Indice_de_Barthel.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Índice de Barthel (Actividades Básicas de la Vida Diaria – ABD)


    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Escala de Lawton Brody (Actividades Instrumentales de la Vida Diaria - AIVD)

    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        p La escala de Lawton Brody fue desarrollada con el objeto de determinar la capacidad de la persona adulta mayor para realizar las actividades instrumentales de la vida diaria que le permiten vivir de manera independiente en su comunidad. Las actividades instrumentales de la vida diaria son actividades de mayor complejidad con relación a las actividades básicas de la vida diaria, y su realización permite que una persona pueda ser independiente dentro de una comunidad.
        .row.align-items-center
          .col-auto.mb-4(data-aos="fade")
            img(src='@/assets/curso/temas/t1/deco7.png' alt='' style="width: 85px;")
          .col-10.mb-4(data-aos="fade")
            p.mb-0 Las actividades instrumentales de la vida diaria incluyen tareas domésticas, de movilidad, de administración del hogar y de la propiedad: tomar el autobús; preparar la comida y realizar compras, entre otras.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img20.png' alt='') 

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img21.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        .bg-6.mb-4
          .row.p-3.align-items-center
            .col-md-2.col-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t1/ico.svg' alt='')
            .col-md-10
              p.mb-0 Para obtener resultados concretos, es recomendable diligenciar todos los ítems del instrumento y asignar la puntuación correspondiente a cada una de las actividades. El resultado total de la valoración se obtiene sumando el puntaje de todos los ítems, donde el menor valores cero (0), que corresponde a una persona con dependencia total y el máximo es ocho (8), que significa que la persona es totalmente independiente.
        p De acuerdo con los puntajes obtenidos, los resultados pueden estratificarse de la siguiente manera:
        .row.justify-content-center
          .col-md-7
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2] Estratificación de resultados
            .tabla-b.color-acento-contenido
              table
                thead.text-center
                  tr.bg-3
                    th Puntuación
                    th.colum-60 Nivel de dependencia
                tbody.bg-white.text-center
                  tr
                    td 0-1
                    td Total
                  tr
                    td 2-3      
                    td Severa
                  tr
                    td 4-5    
                    td Moderada
                  tr
                    td 6-7 
                    td Ligera
                  tr
                    td 8
                    td Independiente


    p.mb-4(data-aos="fade") Al aplicar la Escala de Lawton Brody, es importante atender las siguientes recomendaciones:

    .row.fondo4-t1.align-items-center.py-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row(data-aos="fade-down")
            .col-md-4
              img(src='@/assets/curso/temas/t1/img32.png' alt='')
            .col-md-8  
              SlyderF.numeros.mb-5(columnas="col-lg-6 col-xl-6")
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t1/1.svg' alt='')
                  .tarjeta.bg-white.box-shadow
                    .p-4.text-center
                      p Considerar los ítems abordados en el instrumento: capacidad para utilizar el teléfono, hacer compras, preparación de la comida, cuidado de la casa, lavado de la ropa, uso de medios de transporte, responsabilidad respecto a la medicación y administración de su economía
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t1/2.svg' alt='')
                  .tarjeta.bg-white.box-shadow
                    .p-4.text-center
                      p  Asignar un valor numérico correspondiente a cada ítem: 
                      p.mb-0 1 = independiente 
                      p 0 = dependiente.
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t1/3.svg' alt='')
                  .tarjeta.bg-white.box-shadow
                    .p-4.text-center
                      p Obtener la información indagando directamente con la persona o preguntando al cuidador principal. Para la aplicación total del instrumento se requiere aproximadamente de cinco (5) a diez (10) minutos.
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t1/4.svg' alt='')
                  .tarjeta.bg-white.box-shadow
                    .p-4.text-center
                      p Para asignar una puntuación correcta a cada ítem es importante diferenciar que la persona pueda realizar cada actividad.
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t1/5.svg' alt='')
                  .tarjeta.bg-white.box-shadow
                    .p-4.text-center
                      p Dado que la escala valora en gran parte actividades relacionadas con quehaceres domésticos, las mujeres tendrán más facilidad para realizarlas porque culturalmente han tenido que dedicarse a estas ocupaciones. En ese sentido, hay que tener precaución con la puntuación que se le asigna a los hombres.
                .tarjeta-avatar
                  img(src='@/assets/curso/temas/t1/6.svg' alt='')
                  .tarjeta.bg-white.box-shadow
                    .p-4.text-center
                      p Revisar la disponibilidad de electrodomésticos y demás elementos que puedan influir en una puntuación más alta o baja; por ejemplo, la complejidad de manejo de un aparato.

    .row.justify-content-center.mb-5
      .col-md-9(data-aos="fade-down")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Escala de Lawton y Brody				
                  p.mb-0 Para más detalle lo invitamos a consultar el siguiente recurso descargable el cual le permitirá evaluar las actividades instrumentales de la vida diaria con el fin de determinar la capacidad de una persona adulta mayor.		
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.inclusion.gob.ec/wp-content/uploads/2019/01/3b-ESCALA-DE-LAWTON-Y-BRODY.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Test de fragilidad de Linda Fried

    .row.mb-3
      .col-md-4.mb-4(data-aos="fade-right")
        p La fragilidad es un síndrome geriátrico con unas manifestaciones clínicas identificables que resulta de la acumulación a través del tiempo de déficits relacionados con la edad y que predice situaciones adversas en salud, es decir pobre respuesta a eventos que generan estrés.
      .col-md-8.mb-4(data-aos="fade-left")
        .row 
          .col-md-4
            img(src='@/assets/curso/temas/t1/img22.png' alt='')
          .col-md-8
            p Este síndrome se mide a través de cinco criterios, cada uno de los cuales confiere un valor pronóstico y la sumatoria de ellos incrementa el riesgo de mortalidad hasta el 38% y de discapacidad física de 52% a 7.5 años.
            .bg-2.p-4.border-r5
              img.mb-3(src='@/assets/curso/temas/t1/deco5.png' alt='' style="width: 80px;")
              p.mb-0 El test de fragilidad de Linda Fried, cuyo objetivo es detectar tempranamente a las personas adultas mayores con pre-fragilidad y fragilidad. requiere de la medición de los cinco componentes del fenotipo.

    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img23.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p Detalle en qué consisten y algunas recomendaciones para su aplicación:
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Pérdida de peso")
            p Se Indaga por la pérdida no intencional de peso en los últimos tres meses (o más de 5 kg en el último año) o un índice de masa corporal menor a 21 kg/m2. 
            p Es importante hacer énfasis, es que no debe ser intencional (sin dieta o debido a ejercicio).
          .row(titulo="Baja actividad física")
            p Se pregunta la escala de Reuben, que básicamente se responde con SÍ o No a los siguientes cuestionamientos: 
            p.mb-0 ¿Hace usted ejercicio frecuente de manera vigorosa? 
            p.mb-0 ¿Camina largas distancias de manera frecuente? 
            p ¿Camina cortas distancias de manera frecuente?
          .row(titulo="Autorreporte de cansancio físico (fatiga o agotamiento)")
            p Se indaga con la pregunta ¿siente usted que vive cansado/a todo el tiempo?, con respuesta de SI o NO.
          .row(titulo="Disminución de la fuerza de agarre")
            p Evalúa la fuerza muscular prensil de la mano y el antebrazo, factor predictivo relacionado con la salud y la mortalidad en personas mayores que se verifica, con base en la fuerza de la presión palmar, medida con dinamómetro hidráulico manual. 
            p Se deben considerar dos medidas dejando un lapso de 30 segundos entre cada toma y se registra el mejor intento (puntaje) de cada mano. El punto de corte en este ítem para predecir discapacidad y fragilidad, es de 15 Kg/f.
          .row(titulo="Velocidad de la marcha")
            p Los trastornos de la marcha son una manifestación temprana de patología latente, de cambios sutiles de la sustancia blanca, disfunción vestibular, cambios visuales o cambios óculo motores. La planificación de la marcha incrementa el riesgo de caídas, depresión, deterioro cognoscitivo, institucionalización y muerte, es un marcador pronóstico de fragilidad.

    h5.t-blue(data-aos="fade") Interpretación de resultados:

    p A cada ítem del instrumento se le debe asignar un puntaje. Si la respuesta es 
      b.t-blue SÍ
      | , se cuenta como 1, si la respuesta es 
      b.t-blue NO
      | , será 0. Finalizada la aplicación del instrumento se totalizan las respuestas:

    ul.lista-ul--color.color-primario.ps-md-4.fa-ul.mb-4
      li.mb-1
        i.fas.fa-chevron-right
        span Si, en la suma total de las respuestas, todos los criterios puntúan cero (0), es decir, todas las respuestas fueron NO, se categoriza como: 
          b.t-blue Robusto.
      li.mb-1
        i.fas.fa-chevron-right
        span Si, en la suma total de las respuestas, si se tienen 1 o 2 ítems con SI, se categoriza como: 
          b.t-blue Pre Frágil.
      li
        i.fas.fa-chevron-right
        span Si se tienen 3 o más ítems con SI, se categoriza como: 
          b.t-blue Frágil.

    .row.fondo5-t1.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            .subt.mb-4(data-aos="fade")  
              h4.mb-0 Mini Mental State Examination (MMSE)

          .col-md-8(data-aos="fade-right")
            p El 
              em Mini Mental State Examination (MMSE) de Folstein
              | , que traducido al español es Examen Mental Abreviado, es una prueba diseñada con el objetivo de valorar el estado cognitivo de las personas adultas mayores.
            p El instrumento contiene 11 ítems que evalúan la función cognitiva en la orientación (temporo espacial) la memoria, la atención, el cálculo, la evocación o recuerdo, el lenguaje y la capacidad de trazar dos polígonos cruzados.
            .row.align-items-center
              .col-auto.mb-4(data-aos="fade")
                img(src='@/assets/curso/temas/t1/deco8.png' alt='' style="width: 85px;")
              .col-10.mb-4(data-aos="fade")
                p.mb-0 Esta evaluación se usa regularmente para valorar el estado cognoscitivo de una persona o detectar una posible demencia. Su aplicación requiere alrededor de siete minutos en personas con demencia y cinco minutos en personas con cognición conservada o normal.
            .tarjeta.bg-1.p-4
              p.mb-0 Las puntuaciones suelen variar entre 1 y 30 puntos, siendo el punto de corte convencional 24, donde puntuaciones menores indican mayor deterioro cognitivo.    
          .col-md-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img24.png' alt='')

    .row.mb-4
      .col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img25.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")        
        h5.t-blue(data-aos="fade") Interpretación de resultados:
        p Para la puntuación final de la aplicación del Mini Mental State Examination (MMSE), es necesario atender las siguientes recomendaciones:
        ul.lista-ul--color.color-primario.ps-md-4.fa-ul.mb-4
          li.mb-1
            i.fas.fa-chevron-right
            | Sumar 2 puntos si tiene alteración visual evidente.
          li.mb-1
            i.fas.fa-chevron-right
            | Sumar 1 punto si es mayor de 65.
          li
            i.fas.fa-chevron-right
            | Sumar 2 puntos si es mayor de 75 años.
        p Los puntos de corte que indican deterioro cognoscitivo, teniendo en cuenta los años de escolaridad de la persona son los siguientes:    
        ul.lista-ul--color.color-primario.ps-md-4.fa-ul.mb-4
          li
            i.fas.fa-chevron-right
            | Persona con 0 – 5 años de escolaridad y puntuación de inferior o igual a 21: Sospecha de deterioro cognoscitivo, remitir a psiquiatría o neurología.
          li
            i.fas.fa-chevron-right
            | Persona con 6-12 años de escolaridad y puntuación inferior o igual a 24: Sospecha de deterioro cognoscitivo, remitir a psiquiatría o neurología
          li
            i.fas.fa-chevron-right
            | Persona con más de 12 años de escolaridad y puntuación inferior o igual a 26: Sospecha de deterioro cognoscitivo, remitir a psiquiatría o neurología.

    .subt.mb-4(data-aos="fade")  
      h4.mb-0 Apgar Familiar

    .row.align-items-center.mb-3
      .col-md-8.mb-4(data-aos="fade-right")
        p Apgar Familiar es una herramienta construida alrededor de cinco preguntas cerradas en un cuestionario auto administrado que permite evaluar la función familiar percibida por el individuo que responde el cuestionario permitiendo sospechar disfunción, pero no diagnosticándola. La aplicación del APGAR permite identificar el grado de satisfacción familiar y de las situaciones de conflicto o riesgo familiar en términos del grado de disfuncionalidad familiar.
        .row.align-items-center
          .col-auto.mb-4(data-aos="fade")
            img(src='@/assets/curso/temas/t1/deco9.png' alt='' style="width: 85px;")
          .col-10.mb-4(data-aos="fade")
            p.mb-0 El APGAR familiar es un instrumento que muestra cómo perciben los miembros de la familia el nivel de funcionamiento de la unidad familiar de forma global, incluyendo a los niños ya que es aplicable a la población infantil. El APGAR familiar es útil para evidenciar la forma en que una persona percibe el funcionamiento de su familia en un momento determinado.
        .bg-2.p-4
          p.mb-0 El registro de esta percepción es particularmente importante en contextos como la práctica ambulatoria, donde no es común que los pacientes o usuarios manifiesten directamente sus problemas familiares, y por el contrario es difícil encontrar profesionales de salud especializados en abordar tales temas cuando se detectan en la conversación durante la consulta. Este instrumento también sirve para favorecer una relación médico paciente en toda su extensión.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img26.png' alt='')

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img27.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p El instrumento lo componen los siguientes 5 elementos a través de los cuales se evalúa la funcionalidad de la familia, y cuyas iniciales configuran el acróstico que da nombre a la herramienta:
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Adaptación")
            p Capacidad de utilizar recursos intra y extrafamiliares para resolver problemas en situaciones de estrés familiar o periodos de crisis.
          .row(titulo="Participación")
            p Implicación de los miembros familiares en la toma de decisiones y en las responsabilidades relacionadas con el mantenimiento familiar.
          .row(titulo="Gradiente de recursos")
            p Desarrollo de la maduración física, emocional y auto realización que alcanzan los componentes de una familia gracias a su apoyo y asesoramiento mutuo.
          .row(titulo="Afectividad")
            p Relación de cariño, amor que existe entre los miembros de la familia.
          .row(titulo="Recursos o capacidad resolutiva")
            p Compromiso de dedicar tiempo a atender las necesidades físicas y emocionales de otros miembros de la familia, generalmente implica compartir unos ingresos y espacios.

    .row.fondo6-t1.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-8
            p.text-center Vea, a continuación, las instrucciones para la aplicación del Apgar Familiar:
            SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg-white.box-shadow.p-4
                .row.justify-content-center.mb-3
                  .col-3
                    img(src='@/assets/curso/temas/t1/1.svg' alt='')
                p.text-center Entregar el cuestionario a cada paciente para que responda a las preguntas planteadas en forma personal, excepto aquellos que no sepan leer, caso en el cual el entrevistador aplicará el test.
              .tarjeta.bg-white.box-shadow.p-4
                .row.justify-content-center.mb-3
                  .col-3
                    img(src='@/assets/curso/temas/t1/2.svg' alt='')
                p.text-center Marcar solo una X en cada pregunta.  
              .tarjeta.bg-white.box-shadow.p-4
                .row.justify-content-center.mb-3
                  .col-3
                    img(src='@/assets/curso/temas/t1/3.svg' alt='')
                p.mb-1 Asignar puntaje a cada respuesta: 
                p.mb-0 0: Nunca 
                p.mb-0 1: Casi nunca 
                p.mb-0 2: Algunas veces 
                p.mb-0 3. Casi siempre 
                p 4: Siempre.
              .tarjeta.bg-white.box-shadow.p-4
                .row.justify-content-center.mb-3
                  .col-3
                    img(src='@/assets/curso/temas/t1/4.svg' alt='')
                p.mb-1 Interpretar el puntaje: 
                p.mb-0 Normal: 17-20 puntos 
                p.mb-0 Disfunción leve: 16-13 puntos. 
                p.mb-0 Disfunción moderada: 12-10 puntos 
                p Disfunción severa: menor o igual a 9.    
          .col-md-4
            img(src="@/assets/curso/temas/t1/img28.png")

    p.mb-4(data-aos="fade") Para afinar el diagnóstico de disfunción familiar (partiendo de la familia como sujeto de atención) se deben valorar mínimo tres miembros de la familia.

    .row.justify-content-center
      .col-md-9(data-aos="fade-down")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/t1/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Escala de Evaluación Familiar				
                  p.mb-0 Para más detalle lo invitamos a consultar el siguiente recurso descargable el cual le permitirá identificar el grado de satisfacción familiar y de las situaciones de conflicto o riesgo familiar en términos del grado de disfuncionalidad familiar.		
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('http://inger.gob.mx/pluginfile.php/1682/mod_resource/content/19/Repositorio_Cursos/Archivos/Cuidamhe/MODULO_I/UNIDAD_3/APGAR.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



    Separador 

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4 Instrumentos sugeridos o complementarios

    p.mb-4(data-aos="fade") Son procedimientos que abordan las siguientes intervenciones o atenciones contempladas en la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud (RPMS) para momentos de curso de vida:

    .row.fondo7-t1.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-10.mb-4(data-aos="fade-down") 
            .tarjeta.bg-2.p-4
              .row.align-items-center
                .col-md-5.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t1/img29.png' alt='')
                .col-md-7
                  ul.lista-ul--color.color-secundario.fa-ul
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar el crecimiento y desarrollo (físico, motriz, cognitivo y socioemocional)
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar el estado nutricional y antropométrico.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar las prácticas alimentarias.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar las estructuras dentomaxilofaciales y su funcionalidad.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar la salud auditiva y comunicativa.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar la salud visual.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar la salud sexual.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar la salud mental.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar la dinámica familiar como apoyo al desarrollo integral.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Valorar el contexto social y las redes de apoyo social y comunitario.
                    li.mb-2
                      i.fas.fa-chevron-right
                      | Verificar el esquema de vacunación.
                    li
                      i.fas.fa-chevron-right
                      | Información en salud a las niñas o niños, a sus familias o cuidadores.
          
          p.mb-4(data-aos="fade") La valoración integral de la salud debe ser realizada de forma complementaria entre los profesionales de medicina general o familiar y de enfermería, cumpliendo con el esquema de intervenciones/atenciones en salud individuales definido en el lineamiento técnico y operativo de la RPMS.

          .row.mb-4(data-aos="fade-down")
            .col-md-4.d-flex.align-items-center
              p Algunos aspectos que, sobre los instrumentos sugeridos o complementarios, se deben tener en cuenta son:
            .col-md-4
              .tarjeta.fondo-tarj3.p-4.h-100
                img.mb-4(src='@/assets/curso/temas/t1/tarj2-ico1.svg' alt='' style="width: 80px;")
                h5 Capacidades del personal a cargo  
                p Los profesionales encargados de la valoración integral deben contar con capacidades técnicas e individuales para la realización del examen físico, evaluación del desarrollo, evaluación antropométrica y nutricional, valoración de la salud auditiva, visual, bucal, mental, sexual, de la dinámica familiar y de las redes de apoyo.
            .col-md-4
              .tarjeta.fondo-tarj3.p-4.h-100
                img.mb-4(src='@/assets/curso/temas/t1/tarj2-ico2.svg' alt='' style="width: 80px;")
                h5 Procedimientos y órdenes de medicación 
                p El profesional de enfermería podrá realizar los procedimientos y ordenar los medicamentos, insumos, dispositivos y otros procedimientos de acuerdo con lo definido en esta intervención/atención.
    
    .row.mb-4
      .col-md-1.mb-4(data-aos="fade")
        img(src='@/assets/curso/temas/t1/deco3.png' alt='' style="width: 85px;")
      .col-md-11.mb-4(data-aos="fade")
        p.mb-0 Conozca la descripción de cada uno de los instrumentos sugeridos o complementarios en las intervenciones o atenciones contempladas en la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud (RPMS) para momentos de curso de vida:

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Test de dibujo de la figura humana de Goodenough Harris")
            p De encontrarse preocupaciones sobre el rendimiento escolar, aprendizaje o vida social del niño, aplicar el test de la figura humana orientado a la identificación de déficit cognitivo. 
            ul.lista-ul--color.color-secundario.ps-md-4.fa-ul
              li
                i.fas.fa-capsules
                | Si el niño tiene un resultado del test sugestivo de déficit cognitivo, antecedente de aparición tardía del lenguaje y/o antecedente familiar de problemas de aprendizaje, debe derivarse a valoración integral por pediatría para ampliación diagnóstica.
              li
                i.fas.fa-capsules
                | Si el niño tiene problemas de rendimiento escolar o de comportamiento, debe ser derivado a atención resolutiva por pediatría para estudio y manejo.
          .row(titulo="Valoración de los derechos sexuales y reproductivos")
            p Evaluar la evolución de los estadios de Tanner y realizar exploración de la región ano-genital para descartar signos de violencia sexual o prácticas nocivas para la vida y la salud. 
            p En niños y niñas intersexuales realizar valoración integral y remisión para asesoría. Realizar atención teniendo en cuenta las particularidades por sexo, género y orientación sexual. 
            p De identificarse un factor de riesgo, alteración o anormalidad. Se debe derivar al niño o niña a una atención resolutiva por pediatría para diagnóstico y tratamiento.
          .row(titulo="Cuestionario de síntomas para niños (RQC)")
            p Valorar la presencia de riesgos psicosociales para violencias y de ser así, derivar a la ruta integral de atención para la población en riesgo y víctima de violencias en el conflicto armado, violencias de género y violencias interpersonales.
          .row(titulo="(SRQ) o Valoración de la identidad en salud mental")
            p Ante lesiones por consumo de SPA, derivar a la ruta integral de atención en salud para población con riesgo o trastornos mentales y del comportamiento manifiestos debido a uso de sustancias psicoactivas y adicciones. 
            p Ante riesgo de problema o trastorno mental aplicar el instrumento de tamizaje Reporting Questionnaire for Children (RQC) 
            p Ante bajo rendimiento escolar, problemas de aprendizaje o de comportamiento, en el hábito de comer, duelo o pérdida significativa, convulsiones o ausencias, detección de problemas de salud mental en el RQC o alteraciones neurológicas, derivar a la ruta integral de atención en salud para población con riesgo o presencia de problemas y trastornos mentales y epilepsia o a la atención resolutiva por el profesional en medicina especializada o profesional en psicología o trabajo social, según sea el caso.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img30.png' alt='')

    .row.align-items-center
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img31.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA.mb-4(tipo="b" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Prueba ASSIST")
            p Para consumo de alcohol, tabaco y otras drogas, dirigida población con sospecha de patrones de consumo problemático. Ante el consumo de SPA se debe aplicar el instrumento Substance Involvement Screening Test (ASSIST) y en el de alcohol el instrumento Alcohol Use Disorders Identification Test (AUDIT) En caso de presentar alteraciones en alguno de éstos se debe derivar a la Ruta Integral de Atención en Salud para la población con riesgo o presencia de trastornos asociados al uso de sustancias psicoactivas y adicciones.
          .row(titulo="Prueba Valoración de la salud auditiva y comunicativa")
            p Incluye la evaluación del estado del oído y su integridad a través de la inspección visual, la otoscopia, y de las funciones de la articulación, voz, habla y desempeño comunicativo.
            p Se recomienda aplicar la lista de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación. Durante la consulta se debe aplicar el cuestionario VALE.
          .row(titulo="Preguntas Whooley")
            p Frente a alguno de los siguientes riesgos: trastornos mentales familiares, consumo problemático de SPA de hijos, pareja o familiar allegado, bajo rendimiento o fracaso laboral o académico, problemas en el hábito de comer, duelo o pérdida significativa y disfuncionalidad familiar, se debe aplicar las preguntas Whooley, para tamización de depresión y cuestionario GAD-2, para tamización de los trastornos de ansiedad. 
            p Ante resultado positivo en las pruebas, derivar a la Ruta Integral de Atención en Salud para población con factores de riesgo o presencia de problemas, trastornos mentales y epilepsia.
          .row(titulo="Escala de Zarit")
            p En el caso de que la persona asuma el rol como cuidador se debe realizar la evaluación de sobrecarga del cuidador con la escala Zarit. Si se identifica sobrecarga debe ser derivado a la Ruta Integral de Atención en Salud para población con factores de riesgo o presencia de problemas, trastornos mentales y epilepsia.

        p Para más detalle y profundización diríjase al documento:     
        .row 
          .col-md-8
            a.anexo.mb-4(:href="('https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/instrumentos-aplicacion-sugerida-rpms.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Instrumentos sugeridos en la valoración integral para detección temprana de alteraciones
    
      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
