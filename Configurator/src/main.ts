import {
    createEngine,
    createSceneContext,
    createArcRotateCamera,
    attachControl,
    createHemisphericLight,
    createPbrMaterial,
    addToScene,
    registerScene,
    startEngine,
    createBox,
} from "@babylonjs/lite";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = await createEngine(canvas);

const scene = createSceneContext(engine);
const camera = createArcRotateCamera(-Math.PI / 2, Math.PI / 2.5, 4, { x: 0, y: 0, z: 0 })
scene.camera = camera;
attachControl(camera, canvas, scene);

addToScene(scene, createHemisphericLight([0, 1, 0], 1.0));

const box = createBox(engine, {size: 1});
box.material = createPbrMaterial({ baseColorFactor: [0.9, 0.1, 0.1, 1], metallicFactor: 0.1, roughnessFactor: 0.4 })
addToScene(scene, box);

await registerScene(scene);
await startEngine(engine);

console.log("Canvas ready:", canvas);
