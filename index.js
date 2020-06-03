// importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//generamos una constante para introducir el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use (express.static(__dirname + '/public'));

//vamos a decirle a express la ruta que utilizara
app.use('/', pintoresRouter);

app.get('/Pablo_Picasso',(req,res)=>{
    res.render('picasso',{
       nombre: "Pablo Picasso",
       info1: "Pablo Ruiz Picasso (Málaga, 25 de octubre de 1881-Mougins, 8 de abril de 1973) fue un pintor y escultor español, creador, junto con Georges Braque, del cubismo.",
       info2: "Es considerado desde la génesis del siglo XX como uno de los mayores pintores que participaron en muchos movimientos artísticos que se propagaron por el mundo y ejercieron una gran influencia en otros grandes artistas de su tiempo. Sus trabajos están presentes en museos y colecciones de toda Europa y del mundo. Además, abordó otros géneros como el dibujo, el grabado, la ilustración de libros, la escultura, la cerámica y el diseño de escenografía y vestuario para montajes teatrales. También tiene una breve obra literaria.",
       info3: "En lo político, Picasso se declaraba pacifista y comunista. Fue miembro del Partido Comunista de España y del Partido Comunista Francés hasta su muerte, acaecida el 8 de abril de 1973 a los noventa y un años de edad, en su casa llamada «Notre-Dame-de-Vie»     de la localidad francesa de Mougins. Está enterrado en el parque del castillo de Vauvenargues (Bouches-du-Rhone).",
       imgDirec: "images/pablo_picasso.jpg",
       img1: "images/picasso/632051.502805573.1.575-431x380.jpg",
       img2: "images/picasso/nina-frente-espejo-picasso.jpg",
       img3: "images/picasso/picasso-leccion.jpg",
       img4: "images/picasso/retrato-dora-maar-picasso.jpg",
       img5: "images/picasso/YQlE59AZDwv3TUxihk1unMFs4XwHU.jpg.png"
    });
 });
 
 app.get('/Van_Gogh',(req,res)=>{
    res.render('van',{
       nombre: "Van Gogh",
       info1: "Vincent Willem van Gogh (30 de marzo de 1853-Auvers-sur-Oise, 29 de julio de 1890) fue un pintor neerlandés, uno de los principales exponentes del postimpresionismo.",
       info2: "Pintó unos 900 cuadros (entre ellos 43 autorretratos y 148 acuarelas) y realizó más de 1600 dibujos. Una figura central en su vida fue su hermano menor Theo, marchante de arte en París, quien le prestó apoyo financiero de manera continua y desinteresada. La gran amistad entre ellos está documentada en las numerosas cartas que se intercambiaron desde agosto de 1872. De las 800 cartas que se conservan del pintor, unas 650 fueron para Theo; las otras son correspondencia con amigos y familiares.",
       info3: "Van Gogh fue esencialmente autodidacta. Desde joven tuvo inclinación hacia el dibujo. Su primer trabajo fue en una galería de arte. Más tarde se convirtió en pastor protestante y en 1879, a la edad de 26 años, se marchó como misionero a una región minera de Bélgica, donde comenzó a dibujar a la gente de la comunidad local. En 1885 pintó su primera gran obra, Los comedores de patatas. En ese momento su paleta se componía principalmente de tonos sombríos y terrosos. La luz y la preferencia por los colores vivos por la que es conocido surgió posteriormente, cuando se trasladó al sur de Francia, consiguiendo su plenitud durante su estancia en Arlés en 1888.",
       imgDirec: "images/vanGogh.jpg",
       img1: "images/vanGogh/cafe-terrace-van-gogh_1.jpg",
       img2: "images/vanGogh/f0fb3e72adb4c9ab6355d8be6f261b68.jpg",
       img3: "images/vanGogh/noche-estrellada-van-gogh.jpg",
       img4: "images/vanGogh/Vincent-van-Gogh-56a036f93df78cafdaa0839c.jpg",
       img5: "images/vanGogh/vincent-van-gogh-the-mulberry-tree-c-1889.jpg"
    });
 });
 
 app.get('/Diego_Rivera',(req,res)=>{
    res.render('rivera',{
       nombre: "Diego Rivera",
       info1: "Diego Rivera (Guanajuato, México, 8 de diciembre de 1886-Ciudad de México, íd., 24 de noviembre de 1957)​ fue un destacado muralista mexicano de ideología comunista, famoso por plasmar obras de alto contenido político y social en edificios públicos. La obra de Diego y de su esposa, la pintora Frida Kahlo, se influyeron mutuamente. Fue creador de diversos murales en distintos puntos del ahora llamado Centro Histórico de la Ciudad de México, así como en la Escuela Nacional de Agricultura de Chapingo, y en otras ciudades mexicanas (Cuernavaca y Acapulco), norteamericanas y sudamericanas (Buenos Aires, San Francisco, Detroit y Nueva York).",
       info2: "Su padre fue Diego Rivera Acosta y su madre María del Pilar Barrientos.5​ Nació el 8 de diciembre de 1886 en la ciudad de Guanajuato. Al año y medio de haber nacido; murió su hermano gemelo Carlos María, mientras Diego, que padecía raquitismo y tenía una constitución muy débil, se mantuvo con vida.​ Diego fue registrado bajo el nombre de Diego María Rivera, y fue bautizado como Diego Martín de la Concepción Juan Nepomuceno Estanislao de Rivera y Barrientos Acosta y Rodríguez. En contra de los deseos de su padre, que prefería que ingresarse en el Colegio Militar, a partir de 1896 comenzó a tomar clases nocturnas en la Academia de San Carlos de la capital mexicana, donde conoció al célebre paisajista José María Velasco. En 1905, recibió una pensión del Secretario de Educación, Justo Sierra, y en 1907, otra del entonces gobernador de Veracruz, Teodoro A. Dehesa Méndez, que le permitieron viajar a España a hacer estudios de obras como las de Goya, El Greco y Brueghel7​ e ingresar en el taller de Eduardo Chicharro, uno de los retratistas más sobresalientes en Madrid.",
       info3: "",
       imgDirec: "images/diegoRivera.jpg",
       img1: "images/diego/3c0aad8c7ec95669ed86ceed2381563f.jpg",
       img2: "images/diego/diego-rivera-cke.jpg",
       img3: "images/diego/Diego-Rivera-el-arquitecto.jpg",
       img4: "images/diego/e5cc938d0f6e7d332bed8d3d7e953ecd.jpg",
       img5: "images/diego/Sin título.png"
    });
 });
 
 app.get('/Leonardo_da_Vinci',(req,res)=>{
    res.render('leonardo',{
       nombre: "Leonardo da Vinci",
       info1: "Leonardo da Vinci(Vinci, 15 de abril de 14522​-Amboise, 2 de mayo de 1519) fue un polímata florentino del Renacimiento italiano. Fue a la vez pintor, anatomista, arquitecto, paleontólogo,​ artista, botánico, científico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista. Murió acompañado de Francesco Melzi,​ a quien legó sus proyectos, diseños y pinturas. Tras pasar su infancia en su ciudad natal, Leonardo estudió con el pintor florentino Andrea de Verrocchio. Sus primeros trabajos de importancia fueron creados en Milán al servicio del duque Ludovico Sforza. Trabajó a continuación en Roma, Bolonia y Venecia, y pasó sus últimos años en Francia, por invitación del rey Francisco I.",
       info2: "Frecuentemente descrito como un arquetipo y símbolo del hombre del Renacimiento, genio universal, además de filósofo humanista cuya curiosidad infinita solo puede ser equiparable a su capacidad inventiva, Leonardo da Vinci es considerado uno de los más grandes pintores de todos los tiempos y, probablemente, la persona con el mayor número de talentos en múltiples disciplinas que jamás ha existido. Como ingeniero e inventor, Leonardo desarrolló ideas muy adelantadas a su tiempo, tales como el helicóptero, el carro de combate, el submarino y el automóvil. Muy pocos de sus proyectos llegaron a construirse (entre ellos la máquina para medir el límite elástico de un cable), puesto que la mayoría no eran realizables durante esa época.​ Como científico, Leonardo da Vinci hizo progresar mucho el conocimiento en las áreas de anatomía, la ingeniería civil, la óptica y la hidrodinámica.",
       info3: "",
       imgDirec: "images/leonardo.jpg",
       img1: "images/daVinci/índice.jfif",
       img2: "images/daVinci/mona-lisa-0.jpg",
       img3: "images/daVinci/portrait-leonardo-da-vinci-renacimiento-renaissance-pintor-495.jpg",
       img4: "images/daVinci/vinci16.jpg",
       img5: "images/daVinci/virgen-huso-leonardo.jpg"
    });
 });
 
 app.get('/Diego_Velazquez',(req,res)=>{
    res.render('leonardo',{
       nombre: "Diego Velázquez",
       info1: "Diego Rodríguez de Silva y Velázquez (Sevilla, bautizado el 6 de junio de 1599-Madrid, 6 de agosto de 1660), conocido como Diego Velázquez, fue un pintor barroco español considerado uno de los máximos exponentes de la pintura española y maestro de la pintura universal.",
       info2: "Pasó sus primeros años en Sevilla, donde desarrolló un estilo naturalista de iluminación tenebrista, por influencia de Caravaggio y sus seguidores. A los 24 años se trasladó a Madrid, donde fue nombrado pintor del rey Felipe IV y cuatro años después fue ascendido a pintor de cámara, el cargo más importante entre los pintores de la corte. A esta labor dedicó el resto de su vida. Su trabajo consistía en pintar retratos del rey y de su familia, así como otros cuadros destinados a decorar las mansiones reales. Su presencia en la corte le permitió estudiar la colección real de pintura que, junto con las enseñanzas de su primer viaje a Italia, donde conoció tanto la pintura antigua como la que se hacía en su tiempo, fueron influencias determinantes para evolucionar a un estilo de gran luminosidad, con pinceladas rápidas y sueltas. En su madurez, a partir de 1631, pintó de esta forma grandes obras como La rendición de Breda. En su última década su estilo se hizo más esquemático y abocetado, alcanzando un dominio extraordinario de la luz. Este período se inauguró con el Retrato del papa Inocencio X, pintado en su segundo viaje a Italia, y a él pertenecen sus dos últimas obras maestras: Las meninas y Las hilanderas.",
       info3: "",
       imgDirec: "images/velazquez.jpg",
       img1: "images/velazques/91b403c29970124bacb8ca452ebd69fa.jpg",
       img2: "images/velazques/diego_velazquez-8.jpg",
       img3: "images/velazques/Pope-Innocent-X-Diego-Velazquez.jpg",
       img4: "images/velazques/velazquez.png",
       img5: "images/velazques/Velezquez.jpg"
    });
 });

// la conexion a mongo
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Toledios:1234567890@delgadoedgar-cbtis122-e-awvje.mongodb.net/Examen?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida');
    }) .catch(err=> console.log(err));
    
    //Arrancar el server
    app.listen(PUERTO, ()=>{
        console.log('Escuchando el puerto...');
    });