let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );


let spotLight = new THREE.SpotLight( 0xffffff ); spotLight.position.set( 10, 200, -200 ); scene.add( spotLight ); var spotLightHelper = new THREE.SpotLightHelper( spotLight ); scene.add( spotLightHelper );




// //BOX GEOMETRY
const width = 400;
const height = 80;
const depth = 20;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

const width5 = 450;
const height5 = 10;
const depth5 = 650;
const geometryRoof = new THREE.BoxBufferGeometry(width5, height5, depth5);

const width2w = 400;
const height2w = 250;
const depth2w = 20;
const geometry2wall = new THREE.BoxBufferGeometry(width2w, height2w, depth2w);

const widthh = 600;
const heightt = 100;
const depthh = 20;
const geometryWal = new THREE.BoxBufferGeometry(widthh, heightt, depthh);

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

const width233 = 200;
const height233 = 200;
const depth233 = 20;
const geometryWin = new THREE.BoxBufferGeometry(width233, height233, depth233);

//WINDOW
const widthRw = 20;
const heightRw = 130;
const depthRw = 20;
const geometryRwind = new THREE.BoxBufferGeometry(widthRw, heightRw, depthRw);

const widthRw1 = 2;
const heightRw1 = 130;
const depthRw1 = 20;
const geometryRwind1 = new THREE.BoxBufferGeometry(widthRw1, heightRw1, depthRw1);

const widthRw2 = 170;
const heightRw2 = 2;
const depthRw2 = 20;
const geometryRwind2 = new THREE.BoxBufferGeometry(widthRw2, heightRw2, depthRw2);

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
let wind_1 = new THREE.TextureLoader().load( 'assets/textures/op.png' );
let wind_2 = new THREE.TextureLoader().load( 'assets/textures/slide.png' );

let door1 = new THREE.MeshLambertMaterial( { map: door_1 } );
let floorMain = new THREE.MeshLambertMaterial( { map: textureFloor } );
let wall2 = new THREE.MeshPhongMaterial( { map: wall_2 } );
let bed1 = new THREE.MeshLambertMaterial( { map: bed } );
let cabinet1 = new THREE.MeshPhongMaterial( { map: cabinet_1 } );
let dresser1 = new THREE.MeshPhongMaterial( { map: dresser_1 } );
let foam1 = new THREE.MeshBasicMaterial( { map: foam_1 } );
let stand1 = new THREE.MeshBasicMaterial( { map: bed } );
let wind1 = new THREE.MeshBasicMaterial( { map: wind_1 } );
let wind2 = new THREE.MeshBasicMaterial( { map: wind_2 } );
let wall1 = new THREE.MeshPhongMaterial( { map: wall_2 } );
let Rwind1 = new THREE.MeshPhongMaterial( { map: bed } );

let wallOut = new THREE.MeshPhongMaterial( { map: wall_2 } );
//LAND 
let doorMain1 = new THREE.Mesh( geometryDoor, door1);
let plane = new THREE.PlaneBufferGeometry(1000, 1600, 2, 2);
let floor = new THREE.Mesh( plane, floorMain);
let wallMain1 = new THREE.Mesh(geometry, wall2);
let wallMain2 = new THREE.Mesh(geometry2wall, wall2);
let wallMain3 = new THREE.Mesh(geometry2wall, wall2);
let bedMain1 = new THREE.Mesh(geometry11, bed1);
let cabinetMain1 = new THREE.Mesh(geometryDre, cabinet1);
let dresserMain1 = new THREE.Mesh(geometryDre1, dresser1);
let foamMain1 = new THREE.Mesh(geometryFoam, foam1);
let roof1 = new THREE.Mesh(geometryRoof, wall2);


let standMain1 = new THREE.Mesh(geometryStand, bed1);
let standMain2 = new THREE.Mesh(geometryStand, bed1);
let standMain3 = new THREE.Mesh(geometryStand, bed1);
let standMain4 = new THREE.Mesh(geometryStand, bed1);

let wallMain4 = new THREE.Mesh(geometryWallOut, wallOut);
let window1 = new THREE.Mesh(geometryWin, wind2);
let window2 = new THREE.Mesh(geometryWin, wind1);
let wallBack = new THREE.Mesh(geometryWal, wall1);
let RealWind = new THREE.Mesh(geometryRwind, Rwind1);
let RealWind2 = new THREE.Mesh(geometryRwind, Rwind1);
let RealWind3 = new THREE.Mesh(geometryRwind, Rwind1);
let RealWindS = new THREE.Mesh(geometryRwind1, Rwind1);
let RealWindS2 = new THREE.Mesh(geometryRwind1, Rwind1);
let RealWindS3 = new THREE.Mesh(geometryRwind2, Rwind1);
let RealWindS4 = new THREE.Mesh(geometryRwind2, Rwind1);
let RealWindS5 = new THREE.Mesh(geometryRwind2, Rwind1);
RealWind.castShadow = true; //default is false
RealWind.receiveShadow = false; //default

var ambientLight = new THREE.AmbientLight( 0x404040, 2 );
scene.add(ambientLight);

var light = new THREE.PointLight(0xffffff, 1.0, 600);
scene.add (light);

scene.add(RealWind);
scene.add(RealWind2);
scene.add(RealWind3);
scene.add(RealWindS);
scene.add(RealWindS2);
scene.add(RealWindS3);
scene.add(RealWindS4);
scene.add(RealWindS5);
scene.add(roof1);

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
scene.add(standMain3);
scene.add(standMain4);

scene.add(doorMain1);
scene.add(window1);
scene.add(window2);
scene.add(wallBack);

// scene.add(wallMain4);

scene.background=(mainBackground);

// camera.position.set( 500, 100, 500 );
camera.position.z = 400;
camera.position.x = 500;
camera.position.y = 200;
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function animate() {
   requestAnimationFrame( animate );

   controls = new THREE.OrbitControls (camera, renderer.domElement);

   //sun
   


   //real window
   RealWind.position.x = 0;
   RealWind.position.y = 115;

   RealWind2.position.x = 95;
   RealWind2.position.y = 115;

   RealWind3.position.x = -95;
   RealWind3.position.y = 115;

   RealWindS.position.x = 50;
   RealWindS.position.y = 115;

   RealWindS2.position.x = -50;
   RealWindS2.position.y = 115;

   RealWindS3.position.x = 0;
   RealWindS3.position.y = 115;
   RealWindS3.rotation.x = 800;

   RealWindS4.position.x = 0;
   RealWindS4.position.y = 170;
   RealWindS4.rotation.x = 800;

   RealWindS5.position.x = 0;
   RealWindS5.position.y = 60;
   RealWindS5.rotation.x = 800;

   //roof
   roof1.position.x = 0;
   roof1.position.y = 260;
   roof1.position.z = 170;
   roof1.rotation.y = 80;
   //Door
   doorMain1.position.x=200;
   doorMain1.position.y=70;
   doorMain1.position.z=350;
  
  
   //FLOOR
   floor.rotation.x = 300;
   floor.position.y = -30;


   //wall
   wallMain1.position.x=0;
   wallMain1.position.y=220;

   wallMain2.position.x=-330;
   wallMain2.position.y=75;
   wallMain2.position.z=180;
   wallMain2.rotation.y=80;

   wallMain3.position.x=290;
   wallMain3.position.y=75;
   wallMain3.position.z=180;
   wallMain3.rotation.y=80;

   wallBack.position.x=0;
   wallBack.position.y=0;

 

   //window
   window1.position.x = 200;
   window1.position.y = 150;
   window1.position.z = 1;

   window2.position.x = -200;
   window2.position.y = 150;
   window2.position.z = 1;


   //bed
   bedMain1.position.x=0;
   bedMain1.position.y=1;
   bedMain1.position.z=120;
   bedMain1.rotation.x=300;

   //foam bed
   foamMain1.position.x=0;
   foamMain1.position.y=20;
   foamMain1.position.z=120;
   foamMain1.rotation.x=300;

   //bed stand
   standMain1.position.x=130;
   standMain1.position.y=-15;
   standMain1.position.z=190;

   standMain2.position.x=-130;
   standMain2.position.y=-15;
   standMain2.position.z=190;

   standMain3.position.x=-130;
   standMain3.position.y=-20;
   standMain3.position.z=30;

   standMain4.position.x=130;
   standMain4.position.y=-20;
   standMain4.position.z=30;

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