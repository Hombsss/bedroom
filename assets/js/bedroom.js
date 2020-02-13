let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );


// //BOX GEOMETRY
const width = 600;
const height = 400;
const depth = 20;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

const width11 = 300;
const height11 = 200;
const depth11 = 20;
const geometry11 = new THREE.BoxBufferGeometry(width11, height11, depth11);

const width111 = 120;
const height111 = 200;
const depth111 = 50;
const geometryDre = new THREE.BoxBufferGeometry(width111, height111, depth111);

const width1111 = 150;
const height1111 = 80;
const depth1111 = 50;
const geometryDre1 = new THREE.BoxBufferGeometry(width1111, height1111, depth1111);

const width1112 = 280;
const height1112 = 200;
const depth1112 = 15;
const geometryFoam = new THREE.BoxBufferGeometry(width1112, height1112, depth1112);

const width11122 = 120;
const height11122 = 200;
const depth11122 = 20;
const geometryDoor = new THREE.BoxBufferGeometry(width11122, height11122, depth11122);

const width23 = 400;
const height23 = 400;
const depth23 = 20;
const geometryWallOut = new THREE.BoxBufferGeometry(width23, height23, depth23);

//cylinder
const radiusTop = 10;
const radiusBottom = 10;
const height2 = 20;
const radialSegments = 50;
const geometryStand = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height2, radialSegments);


//texture used
let texture = new THREE.TextureLoader().load( 'assets/textures/wallmain.png' );
let textureFloor = new THREE.TextureLoader().load( 'assets/textures/floor.png' );
let textureWall = new THREE.TextureLoader().load( 'assets/textures/wallmain.png' );
let textureDoor = new THREE.TextureLoader().load( 'assets/textures/door.png' );
let textureRoof = new THREE.TextureLoader().load( 'assets/textures/cone.png' );
let textureTo = new THREE.TextureLoader().load( 'assets/textures/sea.png' );
let textureJr = new THREE.TextureLoader().load( 'assets/textures/sh.png' );
let mainBackground = new THREE.TextureLoader().load('assets/textures/backgroundone.png')
let roofTwo = new THREE.TextureLoader().load( 'assets/textures/mine.png' );
let grass1 = new THREE.TextureLoader().load( 'assets/textures/grass1.png' );
let bed = new THREE.TextureLoader().load( 'assets/textures/bridge.png' );
let wall_2 = new THREE.TextureLoader().load( 'assets/textures/roomWall.png' );
let cabinet_1 = new THREE.TextureLoader().load( 'assets/textures/cabinet.png' );
let dresser_1 = new THREE.TextureLoader().load( 'assets/textures/dresser.png' );
let foam_1 = new THREE.TextureLoader().load( 'assets/textures/foam.png' );
let door_1 = new THREE.TextureLoader().load( 'assets/textures/door1.png' );



let door1 = new THREE.MeshLambertMaterial( { map: door_1 } );
let floorMain = new THREE.MeshLambertMaterial( { map: textureFloor } );
let wall2 = new THREE.MeshPhongMaterial( { map: wall_2 } );
let bed1 = new THREE.MeshLambertMaterial( { map: bed } );
let cabinet1 = new THREE.MeshPhongMaterial( { map: cabinet_1 } );
let dresser1 = new THREE.MeshPhongMaterial( { map: dresser_1 } );
let foam1 = new THREE.MeshBasicMaterial( { map: foam_1 } );
let stand1 = new THREE.MeshBasicMaterial( { map: bed } );

let wallOut = new THREE.MeshPhongMaterial( { map: wall_2 } );
//LAND 
let doorMain1 = new THREE.Mesh( geometryDoor, door1);
let plane = new THREE.PlaneBufferGeometry(1000, 1600, 2, 2);
let floor = new THREE.Mesh( plane, floorMain);
let wallMain1 = new THREE.Mesh(geometry, wall2);
let wallMain2 = new THREE.Mesh(geometry, wall2);
let wallMain3 = new THREE.Mesh(geometry, wall2);
let bedMain1 = new THREE.Mesh(geometry11, bed1);
let cabinetMain1 = new THREE.Mesh(geometryDre, cabinet1);
let dresserMain1 = new THREE.Mesh(geometryDre1, dresser1);
let foamMain1 = new THREE.Mesh(geometryFoam, foam1);
let standMain1 = new THREE.Mesh(geometryStand, bed1);
let standMain2 = new THREE.Mesh(geometryStand, bed1);
let wallMain4 = new THREE.Mesh(geometryWallOut, wallOut);

var ambientLight = new THREE.AmbientLight( 0x404040, 2 );
scene.add(ambientLight);

var light = new THREE.PointLight(0xffffff, 1.0, 600);
scene.add (light);


scene.add( floor );
scene.add(wallMain1);
scene.add(wallMain2);
scene.add(wallMain3);
scene.add(bedMain1);
scene.add(cabinetMain1);
scene.add(dresserMain1);
scene.add(foamMain1);
scene.add(standMain1);
scene.add(standMain2);
scene.add(doorMain1);
// scene.add(wallMain4);

scene.background=(mainBackground);

camera.position.set( 500, 100, 500 );
// camera.position.x = 100;
// camera.position.y = 0;
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function animate() {
   requestAnimationFrame( animate );

   controls = new THREE.OrbitControls (camera, renderer.domElement);



   
   //Door
   doorMain1.position.x=130;
   doorMain1.position.y=70;
   doorMain1.position.z=350;
  
  
   //FLOOR
   floor.rotation.x = 300;
   floor.position.y = -30;


   //wall
   wallMain1.position.x=0;
   wallMain1.position.y=150;

   wallMain2.position.x=-300;
   wallMain2.position.y=150;
   wallMain2.rotation.y=80;

   wallMain3.position.x=300;
   wallMain3.position.y=150;
   wallMain3.rotation.y=80;

   // wallMain4.position.x=-120;
   // wallMain4.position.y=150;
   // wallMain4.position.z=300;

   //bed
   bedMain1.position.x=0;
   bedMain1.position.y=1;
   bedMain1.position.z=90;
   bedMain1.rotation.x=300;

   //foam bed
   foamMain1.position.x=0;
   foamMain1.position.y=20;
   foamMain1.position.z=90;
   foamMain1.rotation.x=300;

   //bed stand
   standMain1.position.x=130;
   standMain1.position.y=-15;
   standMain1.position.z=180;

   standMain2.position.x=-130;
   standMain2.position.y=-15;
   standMain2.position.z=180;

   //cabinet
   cabinetMain1.position.x=230;
   cabinetMain1.position.y=70;
   cabinetMain1.position.z=200;
   cabinetMain1.rotation.y=300;

   //dresser
   dresserMain1.position.x=-280;
   dresserMain1.position.y=0;
   dresserMain1.position.z=200;
   dresserMain1.rotation.y=300;

   




   controls.update();

   renderer.render( scene, camera );
}
animate();