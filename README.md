# Implementación de un Sistema Web de Gestión Escolar mediante KeystoneJS

El siguiente trabajo se realizo una simple práctica de desarrollo de parte de un sistema llamado *Sistema Gestor del Instituto Fátima* (SGIF). Este sistema sirve para administrar diferentes funcionalidades de gestión escolar, tales como: inscripción a mesas de exámen, consultas de información de alumnos, inscripción de alumnos, etc.

## Descripción de la Herramienta

[KeystoneJS](https://www.keystonejs.com/) es un Sistema Gestor de Contenidos (CMS). Estos gestores permiten crear un sitio web, gestionarlo, administrarlo y mantenerlo en un entorno integrado. Este, en particular, es un CMS Headless de codigo abierto y contiene una APIGraphQL para node. La API GraphQL de Keystone tiene como objetivo una creación rápida de prototipo, ser consistente, obvia, predecible, compatible con posibles casos de uso futuros y la personalización de las consultas. Por otro lado un CMS Headless contiene una API y un sistema de backend donde el contenido se almacena y se entrega. Desde el punto de vista técnico, en lugar de crear relaciones entre el codigo y el contenido, estos CMS utilizan llamadas a API para representar contenido en la pagina web.

## Estructura del Proyecto

El desarrollo realizado se encuentra en 3 carpetas diferentes: 

* *models*: en esta carpeta se incluyen los distintos modelos de datos del sistema, en este desarrollo se incluye **Preceptor**, **Alumno** y una carpeta llamada Alumno con los modelos utilizados para ciertos datos del Alumno (**Calificacion**, **Observacion**, **Presentismo**, **Sacramento** y **Sancion**).
* *routes/views*: aqui se encuentran los controladores que permiten consultar a los modelos para recuperar información y la envían hacia la interfáz gráfica.
* *templates/views*: esta carpeta incluye las definiciones de la interfáz desarrolladas en html sobre la herramienta *Handlebars*. Solo existen definiciones para el menu principal y la opción de consultar alumno.

## Inclusión de API

Para incorporar funcionalidad al sistema, se incluyo una API del sitio [RapidApi](https://rapidapi.com/marketplace). Este sitio contiene una amplia biblioteca con distintas APIs que ofrecen diferentes funcionalidades. Entre las observadas, se decidió utiliza una llamada [Holy Bible API](https://rapidapi.com/ajith/api/holy-bible) que provee diferentes versículos de la Biblia seleccionados según nombre de libro, número de capítulo y de versículo. Fue seleccionado ya que el tema se relaciona con la naturaleza de la institución y la API es sencilla de comprender y de adaptar al sistema.
