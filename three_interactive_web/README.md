# three_interactive_web

## Learned

1. z축은 앞뒤, y축은 위,아래, x축은 왼쪽/오른쪽으로 가는 것이다.
2. Orthographic projection에서 zoom을 조작하려면 z축이 아닌 zoom 프로퍼티를 조정해야한다
3. window.devicePixelRatio를 사용하면 사용자의 기기가 레티나 디스플레이를 사용하는지 감지할 수 있다

```javascript
// 대체로 고해상도 디스플레이의 경우 픽셀밀도가 2배까지만 되면 잘 보이기 때문에 2가 넘어가도 픽셀밀도 2로 설정
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
```

4. camera.updateProjectionMatrix();를 호출해야 변경된 것들에 대해 화면이 갱신된다.

```javascript
function setSize() {
    // 카메라
    camera.aspect = window.innerWidth / window.innerHeight;
    // updateProjectionMatrix 카메라 투영에 관련된 값에 변화가 있을 경우 실행해야 함
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}
```

5. canvas의 배경색을 css 또는 Three.js에서 설정할 수 있다. 단 WebGLRenderer를 생성할때 alpha:true로 설정해야한다. 또한 배경색에 alpha값을 주려면 아래 방식으로만 할 수 있다.

```javascript
renderer.setClearColor('#00ff00');
renderer.setClearAlpha(0.5);
```

6. MeshBasicMaterial은 빛에 영향받지 않는다. MeshStandardMaterial은 빛에 영향을 받는다.
7. 기본적으로 Mesh, Light 등등 scene.add 메소드를 통해서 추가한다
8. 애니메이션을 주기 위해서는 Three.js에서 제공하는 방식 또는 window.requestAnimationFrame 둘 중 하나를 사용하면 된다(단 WebVR 프로젝트에서는 Three.js에서 제공하는 메소드를 사용해야한다) -> `이게 없을때는 setInterval 메소드로 애니메이션을 처리했지만 모바일 기기에서 최적화 이슈로 인해 애니메이션 처리에 거의 사용되지 않는다`
9. requestAnimationFrame에서 리턴된 애니메이션 id를 통해서 애니메이션을 중지할 수 있다. 해당 아이디를 cancelAnimationFrame(id)를 호출하면 된다.
10. 디바이간 애니메이션 차이를 없애기 위해서는 기본적으로 elapsedTime기반으로 애니메이션을 처리해야한다.(또는 time 변화값인 delta를 이용, 단 두개 같이 사용하면 예상치 못한 에러가 발생할 수 있다 -> 자바스크립트 Date.now()를 이용해서 이전 시간을 계산하면 delta를 사용하지 않아도 이전 시간을 가져올 수 있다)
```javascript
function draw() {
    const time = clock.getElapsedTime();
    mesh.rotation.y = 2 * time;
    mesh.position.y += 0.01;
    if (mesh.position.y > 3) {
        mesh.position.y = 0;
    }
    renderer.render(scene, camera);
    // 둘 중 하나 선택
    // window.requestAnimationFrame(draw);
    // renderer.setAnimationLoop(draw);
}
```

11. scene.fog를 통해서 안개효과를 줄 수 있다.

```javascript
scene.fog = new THREE.Fog('blue', 3, 7);
```