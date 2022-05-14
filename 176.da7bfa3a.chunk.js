"use strict";(self.webpackChunk_app_client=self.webpackChunk_app_client||[]).push([[176],{176:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(294),o=n(977),r=n(477),i={camera:{position:[0,0,5]},scene:{position:[0,0,1],rotation:[r.MathUtils.degToRad(-50),0,0]},platform:{size:[2,20]}},s=n(489),l=n(769);function c(e){let{size:t}=e;const{gl:n}=(0,s.w)(),o=(0,l.m)("./assets/platform/texture.png",(e=>{const a=e;a.anisotropy=n.capabilities.getMaxAnisotropy(),a.minFilter=r.NearestFilter,a.magFilter=r.NearestFilter,a.wrapT=r.RepeatWrapping,a.wrapS=r.RepeatWrapping,a.repeat.set(4*t[0],4*t[1])}));return a.createElement("group",null,a.createElement("mesh",null,a.createElement("planeBufferGeometry",{args:t}),a.createElement("meshStandardMaterial",{map:o})))}var m=n(433),p=n(581),u=!1;function f(e){let{position:t}=e;return a.createElement(a.Fragment,null,a.createElement(m.c,{makeDefault:!0,position:t}),u&&a.createElement(p.z,{makeDefault:!0}))}const g=(0,n(671).Z)((()=>({speed:.01})));function E(e){let{position:t,rotation:n,children:o}=e;const r=a.useRef(null),l=g((e=>e.speed));return(0,s.x)((()=>{const e=r.current;if(null===e)return;const t=-.25*i.platform.size[1];e.position.y-=l,e.position.y<=t&&(e.position.y=0)})),a.createElement("group",{rotation:n},a.createElement("group",{position:t},a.createElement("group",{ref:r},o)))}var d=n(882);function _(e){let{id:t,position:n}=e;const o=(0,d.L)("./assets/zombies/".concat(t,".glb")),i=a.useRef(),l=a.useRef(null);return a.useEffect((()=>{l.current=new r.AnimationMixer(i.current);const e=l.current.clipAction(o.animations[0]);e.repetitions=r.LoopRepeat,e.play()}),[o.animations]),(0,s.x)((()=>{l.current.update(.03)})),a.createElement("group",{position:n},a.createElement("group",{rotation:[r.MathUtils.degToRad(90),0,0]},a.createElement("group",{scale:.3},a.createElement("group",{ref:i},a.createElement("primitive",{object:o.nodes.mixamorigHips}),a.createElement("skinnedMesh",{name:"Beta_Joints",geometry:o.nodes.Beta_Joints.geometry,material:o.materials.Beta_Joints_MAT,skeleton:o.nodes.Beta_Joints.skeleton}),a.createElement("skinnedMesh",{name:"Beta_Surface",geometry:o.nodes.Beta_Surface.geometry,material:o.materials["asdf1:Beta_HighLimbsGeoSG2"],skeleton:o.nodes.Beta_Surface.skeleton})))))}function k(e){let{position:t}=e;const n=(0,d.L)("./assets/player/model.glb"),o=a.useRef(),i=a.useRef(null);return a.useEffect((()=>{i.current=new r.AnimationMixer(o.current);const e=i.current.clipAction(n.animations[0]);e.repetitions=r.LoopRepeat,e.play()}),[n.animations]),(0,s.x)((()=>{i.current.update(.015)})),a.createElement("group",{position:t},a.createElement("group",{rotation:[r.MathUtils.degToRad(90),r.MathUtils.degToRad(180),0]},a.createElement("group",{scale:.3},a.createElement("group",{ref:o},a.createElement("primitive",{object:n.nodes.mixamorigHips}),a.createElement("skinnedMesh",{name:"Beta_Joints",geometry:n.nodes.Beta_Joints.geometry,material:n.materials.Beta_Joints_MAT,skeleton:n.nodes.Beta_Joints.skeleton}),a.createElement("skinnedMesh",{name:"Beta_Surface",geometry:n.nodes.Beta_Surface.geometry,material:n.materials["asdf1:Beta_HighLimbsGeoSG2"],skeleton:n.nodes.Beta_Surface.skeleton})))))}function h(){return a.createElement(o.Xz,{flat:!0,linear:!0,dpr:1},a.createElement(a.Suspense,{fallback:a.createElement(a.Fragment,null)},a.createElement(E,{position:i.scene.position,rotation:i.scene.rotation},a.createElement(_,{id:1,position:[.75,0,0]}),a.createElement(c,{size:i.platform.size})),a.createElement("group",{position:i.scene.position,rotation:i.scene.rotation},a.createElement(k,{position:[0,-1.5,.35]})),a.createElement(f,{position:i.camera.position}),a.createElement("ambientLight",null),a.createElement("pointLight",{position:[0,5,5]})))}function y(){return a.createElement("main",null,a.createElement(h,null))}}}]);
//# sourceMappingURL=176.da7bfa3a.chunk.js.map