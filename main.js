import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { licenseService } from './licensing/license-service.js';
import { authService } from './firebase/auth-service.js';
import { clinicSyncService } from './firebase/clinic-sync-service.js';
import { LibraryAssetResolver } from './firebase/library-resolver.js';
import { getStoredFirebaseConfig, setStoredFirebaseConfig } from './firebase/firebase-config.js';


/* ==========================================================================
   1. GREETINGS DATASET
   Sequential Multilingual Welcome Experience
   ========================================================================== */
const GREETINGS = [
  {
    text: "Hola",
    language: "Español",
    subtext: "Bienvenido",
    fontClass: ""
  },
  {
    text: "Hello",
    language: "Inglés",
    subtext: "Welcome",
    fontClass: ""
  },
  {
    text: "Bonjour",
    language: "Francés",
    subtext: "Salut (de forma informal)",
    fontClass: ""
  },
  {
    text: "您好",
    language: "Chino mandarín",
    subtext: "Nín hǎo (o 你好 - Nǐ hǎo de forma informal)",
    fontClass: "font-chinese"
  },
  {
    text: "Guten Tag",
    language: "Alemán",
    subtext: "Hallo (de forma informal)",
    fontClass: ""
  },
  {
    text: "Salve",
    language: "Italiano",
    subtext: "Ciao (de forma informal)",
    fontClass: ""
  },
  {
    text: "Olá",
    language: "Portugués",
    subtext: "Oi (de forma informal)",
    fontClass: ""
  },
  {
    text: "Здравствуйте",
    language: "Ruso",
    subtext: "Zdravstvuyte (o Привет - Privet de forma informal)",
    fontClass: ""
  },
  {
    text: "こんにちは",
    language: "Japonés",
    subtext: "Konnichiwa",
    fontClass: "font-japanese"
  },
  {
    text: "안녕하세요",
    language: "Coreano",
    subtext: "Annyeonghaseyo (o 안녕 - Annyeong de forma informal)",
    fontClass: "font-korean"
  },
  {
    text: "مرحبا",
    language: "Árabe",
    subtext: "Marhaban",
    fontClass: "font-arabic"
  },
  {
    text: "नमस्ते",
    language: "Hindi",
    subtext: "Namaste",
    fontClass: "font-devanagari"
  }
];

/* ==========================================================================
   2. KINETIC TYPOGRAPHY ENGINE (Blur & Disappearance)
   ========================================================================== */
class KineticTypographyController {
  constructor() {
    this.headlineEl = document.getElementById('greeting-headline');
    this.subtextEl = document.getElementById('greeting-subtext');
    this.langTagEl = document.getElementById('lang-tag');
    this.counterEl = document.getElementById('cycle-counter');
    this.trackEl = document.getElementById('pagination-track');

    this.currentIndex = 0;
    this.isTransitioning = false;
    this.timerId = null;
    this.displayDuration = 2900; // Time greeting remains in sharp focus
    this.staggerInMs = 32;       // Stagger delay between characters entering
    this.staggerOutMs = 24;      // Stagger delay between characters exiting

    this.initPagination();
    this.renderCurrentGreeting(true);
    this.startCycle();
  }

  initPagination() {
    if (!this.trackEl) return;
    this.trackEl.innerHTML = '';
    GREETINGS.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot-indicator ${idx === 0 ? 'active' : ''}`;
      dot.dataset.index = idx.toString();
      this.trackEl.appendChild(dot);
    });
  }

  updatePagination(index) {
    if (!this.trackEl) return;
    const dots = this.trackEl.querySelectorAll('.dot-indicator');
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (this.counterEl) {
      const formatted = (index + 1).toString().padStart(2, '0');
      const total = GREETINGS.length.toString().padStart(2, '0');
      this.counterEl.textContent = `${formatted} / ${total}`;
    }
  }

  renderCurrentGreeting(isInitial = false) {
    const item = GREETINGS[this.currentIndex];
    this.updatePagination(this.currentIndex);

    // Update typography classes (scripts for CJK, Arabic, etc.)
    this.headlineEl.className = `greeting-headline ${item.fontClass}`;

    // Split into characters and construct DOM
    this.headlineEl.innerHTML = '';
    const chars = Array.from(item.text);

    chars.forEach((char) => {
      const span = document.createElement('span');
      span.className = 'letter enter';
      if (char === ' ') {
        span.classList.add('space');
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = char;
      }
      this.headlineEl.appendChild(span);
    });

    // Subtext & Lang tag initial enter state
    this.subtextEl.className = 'greeting-subtext sub-enter';
    this.subtextEl.textContent = item.subtext;

    this.langTagEl.style.filter = 'blur(10px)';
    this.langTagEl.style.opacity = '0';
    this.langTagEl.style.transform = 'translateY(6px)';
    this.langTagEl.textContent = item.language;

    // Trigger enter animation on next repaint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const letterEls = this.headlineEl.querySelectorAll('.letter');
        letterEls.forEach((el, i) => {
          el.style.transitionDelay = `${i * this.staggerInMs}ms`;
          el.classList.remove('enter');
          el.classList.add('visible');
        });

        this.subtextEl.style.transitionDelay = `${chars.length * 15}ms`;
        this.subtextEl.classList.remove('sub-enter');
        this.subtextEl.classList.add('sub-visible');

        this.langTagEl.style.transitionDelay = '80ms';
        this.langTagEl.style.filter = 'blur(0px)';
        this.langTagEl.style.opacity = '1';
        this.langTagEl.style.transform = 'translateY(0px)';
      });
    });
  }

  transitionToNext() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const letterEls = this.headlineEl.querySelectorAll('.letter');
    const totalLetters = letterEls.length;

    // Staggered exit animation: blur & disappearance
    letterEls.forEach((el, i) => {
      el.style.transitionDelay = `${i * this.staggerOutMs}ms`;
      el.classList.remove('visible');
      el.classList.add('exit');
    });

    // Exit subtext and language tag
    this.subtextEl.style.transitionDelay = '0ms';
    this.subtextEl.classList.remove('sub-visible');
    this.subtextEl.classList.add('sub-exit');

    this.langTagEl.style.transitionDelay = '0ms';
    this.langTagEl.style.filter = 'blur(10px)';
    this.langTagEl.style.opacity = '0';
    this.langTagEl.style.transform = 'translateY(-6px)';

    // Wait until exit transitions conclude
    const exitDuration = (totalLetters * this.staggerOutMs) + 480;

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % GREETINGS.length;
      this.renderCurrentGreeting();
      this.isTransitioning = false;
    }, exitDuration);
  }

  startCycle() {
    this.timerId = setInterval(() => {
      this.transitionToNext();
    }, this.displayDuration + 900);
  }

  pauseCycle() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  resumeCycle() {
    if (!this.timerId) {
      this.startCycle();
    }
  }
}

/* ==========================================================================
   3. THREE.JS 3D SCENE CONTROLLER (psychology_v3.glb)
   - Cinematic entrance animation
   - Subtle idle continuous rotation & floating
   - Responsive framing for Desktop, Tablet, and Mobile
   - Interactive reactive mouse & touch tilt parallax
   ========================================================================== */
class ThreeDViewer {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.canvas = document.getElementById('three-canvas');

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.modelGroup = new THREE.Group();
    this.clock = new THREE.Clock();

    // Mouse / Touch coordinates for subtle tilt parallax
    this.mouse = { x: 0, y: 0 };
    this.targetTilt = { x: 0, y: 0 };

    // Entrance animation state
    this.entranceState = {
      isAnimating: false,
      startTime: 0,
      duration: 2200, // 2.2 seconds entrance
      targetScale: 1.0,
      startScale: 0.001
    };

    // Performance & GPU optimization: Intelligent render pausing
    this.isRunning = true;
    this.animationFrameId = null;

    this.initScene();
    this.setupLighting();
    this.setupShadowPlane();
    this.loadPsychologyModel();
    this.bindEvents();
    this.handleResize(); // Initial responsive layout
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff); // Pure White Environment

    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(0, 0.2, 5.0);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true, // Alpha true for seamless blending on tablets/mobile
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene.add(this.modelGroup);
  }

  setupLighting() {
    // 1. Soft Ambient Illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(ambientLight);

    // 2. Main Key Light: Casts crisp highlights on pure white
    const keyLight = new THREE.DirectionalLight(0xfffaf0, 2.8);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    // 3. Cool Fill Light: Softly sculpts curves and crevices
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.6);
    fillLight.position.set(-4, 2, 2);
    this.scene.add(fillLight);

    // 4. Rim / Silhouette Backlight: Separates the white sculpture from pure white background
    const rimLight = new THREE.DirectionalLight(0xffffff, 3.2);
    rimLight.position.set(0, 4, -4);
    this.scene.add(rimLight);

    // 5. Under-glow bounce
    const bounceLight = new THREE.PointLight(0xf1f5f9, 1.2, 8);
    bounceLight.position.set(0, -2, 1);
    this.scene.add(bounceLight);
  }

  setupShadowPlane() {
    // Radial soft contact shadow canvas
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');

    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.22)');
    grad.addColorStop(0.35, 'rgba(15, 23, 42, 0.12)');
    grad.addColorStop(0.7, 'rgba(15, 23, 42, 0.03)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false
    });

    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = -1.6;
    this.scene.add(this.shadowMesh);
  }

  loadPsychologyModel() {
    const loader = new GLTFLoader();

    // High-end sculptural material: pristine pearl ceramic finish
    const luxuryMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.06,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      sheen: 0.2,
      sheenColor: 0x94a3b8,
      side: THREE.DoubleSide
    });

    const onModelSuccess = (gltfScene) => {
      // Compute bounding box and center the mesh perfectly
      const box = new THREE.Box3().setFromObject(gltfScene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Center geometry at origin
      gltfScene.position.sub(center);

      // Apply material and shadow properties
      gltfScene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = luxuryMaterial;
        }
      });

      // Fit to camera view gracefully
      const maxDim = Math.max(size.x, size.y, size.z);
      const desiredDimension = 2.4;
      this.baseScale = desiredDimension / maxDim;

      // Add to animated model group
      this.modelGroup.add(gltfScene);

      // Configure entrance animation
      this.triggerEntranceAnimation();
    };

    // Load 3D model with support for custom base path (GitHub Pages / Desktop)
    const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : './';
    const primaryGlbPath = `${baseUrl.replace(/\/+$/, '')}/psychology_v3.glb`;

    loader.load(
      primaryGlbPath,
      (gltf) => onModelSuccess(gltf.scene),
      undefined,
      (err) => {
        console.warn(`Initial path ${primaryGlbPath} failed, trying fallback ./psychology_v3.glb`, err);
        loader.load(
          './psychology_v3.glb',
          (gltf) => onModelSuccess(gltf.scene),
          undefined,
          (err2) => {
            console.error('GLB model failed to load. Constructing procedural Greek Psi fallback.', err2);
            this.createProceduralPsi(luxuryMaterial);
          }
        );
      }
    );
  }

  createProceduralPsi(material) {
    const psiGroup = new THREE.Group();

    // Central vertical shaft
    const stemGeo = new THREE.CylinderGeometry(0.09, 0.09, 2.5, 32);
    const stem = new THREE.Mesh(stemGeo, material);
    stem.castShadow = true;
    psiGroup.add(stem);

    // Curved fork (Torus section)
    const forkGeo = new THREE.TorusGeometry(0.85, 0.08, 24, 64, Math.PI);
    const fork = new THREE.Mesh(forkGeo, material);
    fork.rotation.z = Math.PI;
    fork.position.y = 0.2;
    fork.castShadow = true;
    psiGroup.add(fork);

    // Horizontal cross bar
    const barGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 24);
    const bar = new THREE.Mesh(barGeo, material);
    bar.rotation.z = Math.PI / 2;
    bar.position.y = -0.3;
    bar.castShadow = true;
    psiGroup.add(bar);

    this.baseScale = 1.0;
    this.modelGroup.add(psiGroup);
    this.triggerEntranceAnimation();
  }

  triggerEntranceAnimation() {
    this.entranceState.isAnimating = true;
    this.entranceState.startTime = performance.now();
    this.entranceState.targetScale = this.baseScale || 1.0;

    // Initial entrance state (scaled small, rotated, positioned downwards)
    this.modelGroup.scale.setScalar(this.entranceState.startScale);
    this.modelGroup.position.set(0, -1.0, -1.5);
    this.modelGroup.rotation.set(0.3, -Math.PI * 1.8, 0);
  }

  bindEvents() {
    // Resize Observer on container
    const resizeObserver = new ResizeObserver(() => {
      this.handleResize();
    });
    resizeObserver.observe(this.container);
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.handleResize(), 150);
    });

    // Mouse parallax tilt
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      this.mouse.x = x;
      this.mouse.y = y;
    });

    // Touch parallax tilt for tablets and mobile devices
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = -(touch.clientY / window.innerHeight) * 2 + 1;
        this.mouse.x = x;
        this.mouse.y = y;
      }
    }, { passive: true });

    // Gyroscope tilt support on mobile if supported
    if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null) {
          // gamma: left-to-right (-90 to 90), beta: front-to-back (-180 to 180)
          this.mouse.x = Math.max(Math.min(e.gamma / 35, 1), -1);
          this.mouse.y = Math.max(Math.min((e.beta - 45) / 35, 1), -1);
        }
      }, { passive: true });
    }

    // Auto-pause GPU rendering when browser tab or window is in background
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else {
        const appEl = document.getElementById('app');
        if (!appEl || !appEl.classList.contains('workspace-mode-active')) {
          this.resume();
        }
      }
    });
  }

  pause() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  resume() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.getDelta(); // Reset clock delta to prevent jump
    this.animate();
  }

  handleResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;

    // Check if Welcome mode is active to center the 3D model
    const appEl = document.getElementById('app');
    const isWelcomeMode = appEl && appEl.classList.contains('welcome-mode-active');

    if (isWelcomeMode) {
      // In Welcome View: center 3D model right in the middle behind the text
      const zDistance = this.camera.aspect < 1.0 ? 6.2 : 5.1;
      this.camera.position.set(0, 0.15, zDistance);
    } else if (width <= 1024) {
      if (this.camera.aspect < 1.0) {
        // Portrait mobile/tablet: adjust distance based on aspect ratio
        const zDistance = 5.2 / Math.max(this.camera.aspect, 0.48);
        this.camera.position.set(0, 0.25, Math.min(zDistance, 8.2));
      } else {
        // Landscape tablet
        this.camera.position.set(0, 0.15, 5.4);
      }
    } else {
      // Desktop: normal right-side framing
      this.camera.position.set(0, 0.2, 5.0);
    }

    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    if (!this.isRunning) return;
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const elapsedTime = this.clock.getElapsedTime();

    // 1. Entrance Animation Interpolation (cubic ease-out)
    if (this.entranceState.isAnimating) {
      const now = performance.now();
      const progress = Math.min((now - this.entranceState.startTime) / this.entranceState.duration, 1.0);
      
      // Cubic Ease-Out: 1 - (1 - t)^3
      const ease = 1 - Math.pow(1 - progress, 3);

      const currentScale = THREE.MathUtils.lerp(this.entranceState.startScale, this.entranceState.targetScale, ease);
      this.modelGroup.scale.setScalar(currentScale);

      const currentY = THREE.MathUtils.lerp(-1.0, 0, ease);
      const currentZ = THREE.MathUtils.lerp(-1.5, 0, ease);
      this.modelGroup.position.set(0, currentY, currentZ);

      const currentRotY = THREE.MathUtils.lerp(-Math.PI * 1.8, 0, ease);
      const currentRotX = THREE.MathUtils.lerp(0.3, 0, ease);
      this.modelGroup.rotation.y = currentRotY;
      this.modelGroup.rotation.x = currentRotX;

      if (progress >= 1.0) {
        this.entranceState.isAnimating = false;
      }
    } else {
      // 2. Idle Animation: "levemente girando" & subtle floating
      this.modelGroup.rotation.y += 0.005; // Gentle steady continuous rotation

      // Subtle vertical bobbing (sinusoidal float)
      const floatY = Math.sin(elapsedTime * 1.3) * 0.08;
      this.modelGroup.position.y = floatY;

      // Dynamic reactive mouse/touch parallax
      this.targetTilt.x = this.mouse.y * 0.15;
      this.targetTilt.y = this.mouse.x * 0.18;

      this.modelGroup.rotation.x = THREE.MathUtils.lerp(this.modelGroup.rotation.x, this.targetTilt.x, 0.05);
      this.modelGroup.rotation.z = THREE.MathUtils.lerp(this.modelGroup.rotation.z, -this.targetTilt.y * 0.5, 0.05);

      // Contact shadow subtle scaling with floating height
      if (this.shadowMesh) {
        const shadowScale = 1.0 - (floatY * 0.6);
        this.shadowMesh.scale.set(shadowScale, shadowScale, shadowScale);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

/* ==========================================================================
   4. LIQUID GLASS MODAL & TAB CONTROLLER
   - Interactive morphing from rounded glass square into expanded tab
   - Top-right 'x' close button to return to home/start screen
   - Keyboard (Escape) & backdrop click dismissal
   ========================================================================== */
class LiquidGlassModalController {
  constructor() {
    this.dock = document.getElementById('liquid-glass-dock');
    this.trigger = document.getElementById('liquid-glass-trigger');
    this.closeBtn = document.getElementById('liquid-glass-close');
    this.backdrop = document.getElementById('glass-backdrop');
    this.scrollArea = document.querySelector('.glass-tab-scroll');

    this.isOpen = false;
    this.bindEvents();
  }

  bindEvents() {
    if (this.trigger) {
      this.trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        this.open();
      });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close();
      });
    }

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        this.close();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;

    this.dock.classList.add('is-expanded');
    this.dock.setAttribute('aria-expanded', 'true');

    if (this.backdrop) {
      this.backdrop.classList.add('active');
    }

    // Scroll to top of content when opened
    if (this.scrollArea) {
      this.scrollArea.scrollTop = 0;
    }
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;

    this.dock.classList.remove('is-expanded');
    this.dock.setAttribute('aria-expanded', 'false');

    if (this.backdrop) {
      this.backdrop.classList.remove('active');
    }

    // Return focus gracefully
    if (this.trigger) {
      this.trigger.focus();
    }
  }
}

/* ==========================================================================
   5. KINETIC TITLE ANIMATION UTILITY
   ========================================================================== */
function triggerKineticTitleAnimation(titleEl) {
  if (!titleEl) return;
  const originalText = titleEl.getAttribute('data-original-title') || titleEl.textContent.trim();
  titleEl.setAttribute('data-original-title', originalText);
  titleEl.innerHTML = '';

  const chars = Array.from(originalText);
  chars.forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'letter enter';
    span.style.display = 'inline-block';
    if (char === ' ') {
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }
    titleEl.appendChild(span);
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const letters = titleEl.querySelectorAll('.letter');
      letters.forEach((letter, i) => {
        letter.style.transitionDelay = `${i * 35}ms`;
        letter.classList.remove('enter');
        letter.classList.add('visible');
      });
    });
  });
}

/* ==========================================================================
   6. LIBRARY CONTROLLER (Catálogo Clínico, Búsqueda y Fichas Diagnósticas)
   ========================================================================== */
const LIBRARY_CATALOG = [
  {
    id: 'capponi-psicopatologia',
    title: 'Psicopatología y Semiología Psiquiátrica',
    category: 'books',
    categoryLabel: 'Libro Fundamental',
    isBook: true,
    code: 'LIB-CAPPONI-01',
    icon: '📚',
    author: 'Ricardo Capponi M.',
    badge: 'Obra Fundamental • 231 Páginas',
    coverImage: '/libros/PORTADA_PSICOPATOLOGIA Y SEMIOLOGIA PSIQUIATRICA.png',
    pdfUrl: '/libros/PSICOPATOLOGIA Y SEMIOLOGIA PSIQUIATRICA.pdf',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA'],
    academicAffiliation: 'Profesor instructor Depto. Psiquiatría Facultad de Medicina División Ciencias, Medicina Sur, Universidad de Chile • Profesor Auxiliar Cátedra Psicopatología, Escuela de Psicología Universidad Católica de Chile.',
    summary: 'Texto clásico y de referencia fundamental para la formación psiquiátrica y psicológica en evaluación clínica, fenomenología descriptiva (categorial y dimensional), semiología del vivenciar y psicopatología del Yo.',
    topics: [
      'Normalidad - Anormalidad, Salud – Enfermedad',
      'Fenomenología Descriptiva Categorial y Dimensional',
      'Clasificación del Vivenciar Psicológico y Psicopatológico',
      'Elementos del Vivenciar: Sensación, Percepción y Representación',
      'Psicopatología del Pensamiento',
      'Psicopatología de la Afectividad',
      'Psicopatología de la Psicomotricidad (Conación)',
      'Instrumentos del Vivenciar: Conciencia',
      'Instrumentos del Vivenciar: Inteligencia',
      'Instrumentos del Vivenciar: Atención y Memoria',
      'Instrumentos del Vivenciar: Orientación',
      'Psicología del Yo & Psicopatologías del Yo',
      'Dimensión Realidad - Irrealidad',
      'Dimensión Actividad - Pasividad',
      'Dimensión Adhesión - Evitación',
      'Dimensión Dependencia - Independencia',
      'Funcionalidad Yoica en los Trastornos de la Personalidad',
      'Diagnóstico Psicopatológico, Sindromático y Nosológico',
      'Síndromes Categoriales y Disfunciones Yoicas',
      'Aportes del Diagnóstico Fenomenológico para la Práctica Terapéutica'
    ],
    categories: [
      'Psicopatología Clínica',
      'Semiología Psiquiátrica',
      'Fenomenología Descriptiva Categorial y Dimensional',
      'Psicología del Vivenciar y del Yo',
      'Trastornos de la Personalidad',
      'Diagnóstico Sindromático y Nosológico',
      'Aportes Terapéuticos'
    ],
    prologue: {
      author: 'Dra. Ivette Claudet T.',
      date: 'Santiago, Septiembre, 1987',
      paragraphs: [
        'Los textos que contribuyen a la información psiquiátrica constituyen hoy un caudal inabarcable. Es tarea difícil para el estudiante de la especialidad extraer aquellas lecturas que tengan realmente un carácter iniciador fundamental. Aquel que, escoge, y acepta como desafío al paciente perturbado mental, necesita no sólo informarse acerca del reconocimiento de los hechos psíquicos anormales y del lenguaje convencional con que se les denomina, sino además, entrenarse en desarrollar una mentalidad psiquiátrica abierta, exploradora, audaz y creativa, que le permita integrar a la información recibida una profunda y permanente elaboración personal, tanto de la realidad clínica que aborda como de sí mismo.',
        'El cauce que contenga la amenaza de desborde, sea intelectual, afectivo, omnipotente o personalista, por mencionar sólo algunos será siempre la viva conciencia de que todo acto médico es fundamentalmente un acto de ética, y muy en especial en la disciplina psiquiátrica.',
        'Fruto de largas horas de tranquila discusión, suscitada por pacientes y compartida en la docencia común, las páginas que siguen recopilan los conceptos, descripciones y denominaciones que hemos considerado esenciales para la iniciación psiquiátrica. Nuestra primera intención fue configurar con ellas un cuadernillo auxiliar para la docencia psiquiátrica, que facilitara la adquisición de habilidades de destrezas en el reconocimiento, descripción y denominación de los hechos psíquicos insólitos que ofrece tanto el paciente que se propone a la acción médica especializada como el que se niega a ella, pero de algún modo es denunciado. La seriedad investigadora y el enorme esfuerzo de integración informativa del Dr. Ricardo Capponi hicieron posible que impensadamente tomara la forma de un texto.',
        'La realidad clínica, en psiquiatría, adopta fisonomías versátiles según la dirección de los interrogantes con los que se la cuestiona. Esta peculiaridad de lo psíquico, que probablemente sea extensiva a otros modos de realidad, es agente de confusión para aquél que se inicia en la especialidad, y que proviene de un largo entrenamiento en el modelo médico tradicional, bajo una epistemología que en lo fundamental es de causalidad lineal. Trasladarse al modelo psiquiátrico del enfermar y padecer, con su multicausalidad circular, de determinancia bio-psico-social es un salto epistemológico mal tolerado, y muchas veces se hace abismal.',
        'Tal vez la mejor manera de realizar este cambio epistemológico ineludible, es iniciarse en la intención ricamente sostenida del esfuerzo del observador y descriptivo, esencialmente fenomenológico, evitando cautelosamente en tal primer tiempo formativo todo cuestionamiento explicativo de la realidad clínica psiquiátrica. No siempre es fácil resistir el encantamiento de lo explicativo, que significa tanto reducir la angustia ante lo conocido, como liberar la fantasía encadenada. Sin embargo, este trabajo deja muy en claro que evitar lo explicativo, no inferir nada a través de lo evidente, es una etapa rigurosa en la formación psiquiátrica, y que una vez adquirida la habilidad y destreza en la observación y descripción rigurosa, sería mutilador para el pensar psiquiátrico detenerse en tal trama. Así lo plantea el capítulo que se refiere a la perspectiva categorial y a la perspectiva dimensional donde se dejan abiertos los límites de transición hacia la integración con el pensar hipotético e interpretativo.',
        'Estamos ciertos de la solvencia con que los aspectos anteriormente destacados, entre otros muchos, han sido tratados en este trabajo de síntesis y creación realizado por el Dr. Capponi. El estudio está, además, enriquecido por la formación filosófica del autor, adquirida en la disciplina académica. Es pues, producto no sólo de la visión clínica que hemos compartido, sino también de las formas de pensar.'
      ]
    },
    indexTree: [
      {
        part: 'I- INTRODUCCIÓN',
        page: 4,
        items: [
          { title: '1. Definición de objetivos del texto', page: 4 },
          { title: '2. Fundamentos de los conceptos normalidad - anormalidad, salud – enfermedad', page: 7 },
          { title: '3. La fenomenología descriptiva categorial y la fenomenología descriptiva dimensional', page: 27 },
          { title: '4. Clasificación del vivenciar psicológico y psicopatológico', page: 40 }
        ]
      },
      {
        part: 'II- PSICOLOGÍA, PSICOPATOLOGÍA Y SEMIOLOGÍA PSIQUIÁTRICA',
        page: 42,
        items: [
          {
            title: '1. Psicopatología de los elementos del vivenciar',
            page: 43,
            subs: [
              { title: '1.1. Sensación, percepción y representación', page: 48 },
              { title: '1.2. Psicopatología del pensamiento', page: 64 },
              { title: '1.3. Psicopatología de la afectividad', page: 90 },
              { title: '1.4. Psicopatología de la psicomotricidad o conación', page: 100 }
            ]
          },
          {
            title: '2. Psicopatología de los instrumentos del vivenciar',
            subs: [
              { title: '2.1. Psicopatología de la conciencia', page: 116 },
              { title: '2.2. Psicopatología de la inteligencia', page: 137 },
              { title: '2.3. Psicopatología de la atención', page: 145 },
              { title: '2.4. Psicopatología de la memoria', page: 148 },
              { title: '2.5. Psicopatología de la orientación', page: 153 }
            ]
          },
          {
            title: '3. Psicopatología de las cualidades fundamentales de las vivencias o psicopatologías del Yo',
            subs: [
              { title: '3.a. El Yo: Psicología del Yo', page: 154 },
              { title: '3.1. Dimensión realidad-irrealidad', page: 167 },
              { title: '3.2. Dimensión actividad-pasividad', page: 175 },
              { title: '3.3. Dimensión adhesión-evitación', page: 176 },
              { title: '3.4. Dimensión dependencia-independencia', page: 177 }
            ]
          }
        ]
      },
      {
        part: 'III- ANÁLISIS DE LA FUNCIONALIDAD YOICA EN LOS TRASTORNOS DE LA PERSONALIDAD',
        page: 181,
        items: [
          { title: 'Análisis de la funcionalidad yoica en los trastornos de la personalidad', page: 181 }
        ]
      },
      {
        part: 'IV- DIAGNÓSTICO PSICOPATOLÓGICO, SINDROMÁTICO Y NOSOLÓGICO',
        page: 198,
        items: [
          { title: '1. Conceptos', page: 198 },
          { title: '2. Síndromes categoriales', page: 201 },
          { title: '3. Disfunciones yoicas', page: 216 }
        ]
      },
      {
        part: 'V- APORTES DEL DIAGNÓSTICO FENOMENOLÓGICO PARA LA PRÁCTICA TERAPÉUTICA',
        page: 218,
        items: [
          { title: 'A. Planteamiento del Problema', page: 218 },
          { title: 'B. El diagnóstico categorial y sus implicancias terapéuticas', page: 220 },
          { title: 'C. El diagnóstico dimensional y sus implicancias terapéuticas', page: 221 }
        ]
      }
    ],
    chapters: [
      { title: 'Portada (Pág. 1)', page: 1 },
      { title: 'Prólogo - Dra. Ivette Claudet T. (Pág. 2)', page: 2 },
      { title: 'Índice General (Pág. 3)', page: 3 },
      { title: 'I. Introducción: Definición de Objetivos (Pág. 4)', page: 4 },
      { title: 'Fundamentos Normalidad - Anormalidad (Pág. 7)', page: 7 },
      { title: 'Fenomenología Categorial y Dimensional (Pág. 27)', page: 27 },
      { title: 'Clasificación del Vivenciar Psicológico (Pág. 40)', page: 40 },
      { title: 'II. Psicología, Psicopatología y Semiología (Pág. 42)', page: 42 },
      { title: 'Sensación, Percepción y Representación (Pág. 48)', page: 48 },
      { title: 'Psicopatología del Pensamiento (Pág. 64)', page: 64 },
      { title: 'Psicopatología de la Afectividad (Pág. 90)', page: 90 },
      { title: 'Psicopatología de la Psicomotricidad (Pág. 100)', page: 100 },
      { title: 'Instrumentos: Conciencia (Pág. 116)', page: 116 },
      { title: 'Inteligencia (Pág. 137)', page: 137 },
      { title: 'Atención y Memoria (Pág. 145)', page: 145 },
      { title: 'Orientación (Pág. 153)', page: 153 },
      { title: 'Cualidades Fundamentales del Yo (Pág. 154)', page: 154 },
      { title: 'Dimensión Realidad-Irrealidad (Pág. 167)', page: 167 },
      { title: 'Dimensión Actividad-Pasividad (Pág. 175)', page: 175 },
      { title: 'Dimensión Adhesión-Evitación (Pág. 176)', page: 176 },
      { title: 'Dimensión Dependencia-Independencia (Pág. 177)', page: 177 },
      { title: 'III. Trastornos de la Personalidad (Pág. 181)', page: 181 },
      { title: 'IV. Diagnóstico Psicopatológico y Nosológico (Pág. 198)', page: 198 },
      { title: 'Síndromes Categoriales (Pág. 201)', page: 201 },
      { title: 'Disfunciones Yoicas (Pág. 216)', page: 216 },
      { title: 'V. Aportes para la Práctica Terapéutica (Pág. 218)', page: 218 }
    ],
    details: {
      edition: 'Edición Académica Universitaria (Santiago, Chile)',
      pages: '231 páginas completas',
      scope: 'Texto formativo e iniciador esencial para la especialidad psiquiátrica y evaluación clínica.',
      clinicalGuidance: 'Permite asentar las bases del método fenomenológico riguroso, suspendiendo explicaciones hipotéticas tempranas para entrenar el ojo clínico descriptivo.'
    }
  },
  {
    id: 'belloch-psicopatologia-vol1',
    title: 'Manual de Psicopatología (Volumen I)',
    category: 'books',
    categoryLabel: 'Manual de Referencia',
    isBook: true,
    code: 'LIB-BELLOCH-01',
    icon: '📚',
    author: 'Amparo Belloch, Bonifacio Sandín y Francisco Ramos',
    badge: 'Manual de Referencia • 476 Páginas',
    coverImage: '/libros/PORTADA_MANUAL DE PSICOPATOLOGÍA BELLOCH VOL 1.png',
    pdfUrl: '/libros/MANUAL DE PSICOPATOLOGÍA BELLOCH VOL 1.pdf',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'PSICOLOGÍA CLÍNICA', 'PROCESOS PSICOLÓGICOS', 'ADICCIONES'],
    academicAffiliation: 'Amparo Belloch (Universidad de Valencia) • Bonifacio Sandín (UNED) • Francisco Ramos (Universidad de Salamanca) • McGraw-Hill / Interamericana de España',
    summary: 'Obra cumbre y manual de referencia esencial en lengua española para el estudio riguroso de la psicopatología. Aúna descripciones clínicas y semiológicas con la investigación experimental, modelos cognitivos y aportes neurobiológicos y sociales.',
    topics: [
      'Historia de la psicopatología y evolución conceptual',
      'Conceptos y modelos en psicopatología',
      'Métodos de investigación en psicopatología',
      'Clasificación y diagnóstico en psicopatología (sistemas nosológicos)',
      'Psicopatología de la atención',
      'Psicopatología de la percepción y la imaginación',
      'Psicopatología de la memoria',
      'Trastornos formales del pensamiento',
      'Psicopatología de los delirios',
      'Psicopatología del lenguaje y afasias',
      'Los trastornos del sueño',
      'Trastornos sexuales',
      'Alcoholismo (farmacología y dependencia)',
      'Drogodependencias y adicciones',
      'Trastornos alimentarios (Anorexia y Bulimia)',
      'Trastornos de control de impulsos: el juego patológico',
      'Trastornos psicomotores'
    ],
    categories: [
      'Psicopatología General y Modelos Teóricos',
      'Procesos Psicológicos y Cognitivos',
      'Trastornos Biológicos, Sueño y Sexualidad',
      'Adicciones, Dependencias y Control de Impulsos',
      'Trastornos de la Conducta Alimentaria y Psicomotricidad',
      'Evaluación y Diagnóstico Clínico'
    ],
    prologue: {
      author: 'Amparo Belloch, Bonifacio Sandín y Francisco Ramos',
      date: 'Prefacio a la edición original • Valencia, Madrid, Salamanca',
      paragraphs: [
        'Durante la última década, estamos asistiendo a un enorme desarrollo en lo que podríamos englobar bajo el término genérico de «ciencias de la salud». Se están realizando importantes avances en áreas como las neurociencias, la psicopatología experimental, la medicina conductual y la psicofisiología, que involucran tanto a los aspectos estrictamente teóricos o conceptuales como a los metodológicos. Asimismo, se está produciendo un importante y necesario acercamiento, cada vez más visible, entre las ciencias biológicas, las psicológicas y las sociales en todo lo que concierne a la salud y la enfermedad humanas. La psicopatología es, probablemente, una de las áreas de conocimiento científico donde más se han hecho notar estos cambios y avances.',
        'Nuestros métodos de investigación son más potentes y eficaces, lo que nos permite disponer de más y mejores datos para comprender la naturaleza de las diversas alteraciones psicopatológicas; se están formulando nuevas teorías, capaces de proporcionar mejores respuestas a los viejos problemas que tiene planteados nuestra disciplina, a la vez que se han reformulado y adaptado muchas de las que ya existían; y como consecuencia de todo ello, los psicólogos clínicos poseen hoy más y mejores herramientas para tratar con las alteraciones mentales y comportamentales, que constituyen su campo de trabajo cotidiano.',
        'Conscientes de todos estos aspectos, nos planteamos hace ya dos años elaborar un manual que reflejara de un modo comprensivo los avances a que antes aludíamos. Un manual que pudiera aunar las descripciones clínicas con los datos más relevantes que nos proporcionan las investigaciones actuales y con las teorías, hipótesis y modelos explicativos que los sustentan. En definitiva, un manual que pudiera ser de utilidad tanto para los estudiantes universitarios que inician su formación en psicopatología y psicología clínica, como para los investigadores y profesionales de la salud en general, y de la salud mental en particular.',
        'El manual cuenta con un amplio número de destacados colaboradores, todos ellos expertos investigadores o profesionales del campo de la psicopatología y psicología clínica. Todos los capítulos mantienen una estructura básica común, incluyendo un resumen sobre aspectos fundamentales tratados en el capítulo, una relación de términos clave definidos, y un conjunto de lecturas recomendadas para ampliar o profundizar en los tópicos abordados por el capítulo en cuestión. Agradecemos profundamente a los colaboradores el esfuerzo que han tenido que realizar y su cooperación para mantener esta estructura general.',
        'Con objeto de ofrecer al lector un cierto orden en la presentación de los diversos capítulos, hemos dividido la obra en seis partes (tres partes en cada volumen). La Parte I (Marco general) incluye los aspectos básicos y conceptuales de la psicopatología, necesarios para tratar cualquier problema psicopatológico particular. De este modo, se abordan los capítulos sobre evolución histórica de la psicopatología, conceptualización y modelos sobre la misma, estrategias generales de investigación, y problemática de la clasificación y diagnóstico de los trastornos psicopatológicos.',
        'La Parte II (Psicopatología y procesos psicológicos) trata de las anomalías que se producen en los procesos de conocimiento (las antiguamente denominadas «funciones»). En todos los capítulos se ha intentado ir más allá de la mera descripción semiológica tradicional, en la medida en que se ofrecen explicaciones de tales anomalías, sustentadas en los datos proporcionados por las investigaciones actuales que, a su vez, se basan en los modos, estrategias y modelos característicos de la psicología experimental «normal».',
        'La Parte III (Trastornos asociados a necesidades biológicas y adicciones) aborda el estudio de un grupo heterogéneo de alteraciones comportamentales relacionadas, primariamente, con necesidades o impulsos de naturaleza biológica. Ahora bien, es evidente que, aunque necesaria, la perspectiva biológica dista mucho de ser suficiente para comprender la génesis y el mantenimiento de tales trastornos. El componente social de los mismos es imprescindible para abordarlos de un modo cabal, especialmente en el caso de algunos de esta sección, que tienen en común además el carácter adictivo y de control del propio comportamiento por parte del individuo que los presenta.'
      ]
    },
    indexTree: [
      {
        part: 'PARTE I. MARCO GENERAL',
        page: 16,
        items: [
          {
            title: '1. Historia de la psicopatología (Esteban Coto, Yolanda Gómez-Fontanil y Amparo Belloch)',
            page: 16
          },
          {
            title: '2. Conceptos y modelos en psicopatología (Amparo Belloch, Bonifacio Sandín y Francisco Ramos)',
            page: 46
          },
          {
            title: '3. Métodos de investigación en psicopatología (Paloma Chorot, Carmen Pérez-Llantada y Bonifacio Sandín)',
            page: 82
          },
          {
            title: '4. Clasificación y diagnóstico en psicopatología (Serafín Lemos)',
            page: 106
          }
        ]
      },
      {
        part: 'PARTE II. PSICOPATOLOGÍA Y PROCESOS PSICOLÓGICOS',
        page: 134,
        items: [
          {
            title: '5. Psicopatología de la atención (Rosa M.ª Baños y Amparo Belloch)',
            page: 134
          },
          {
            title: '6. Psicopatología de la percepción y la imaginación (Amparo Belloch, Rosa M.ª Baños y Conxa Perpiñá)',
            page: 150
          },
          {
            title: '7. Psicopatología de la memoria (Margarita Diges y Conxa Perpiñá)',
            page: 182
          },
          {
            title: '8. Psicopatología del pensamiento (I): los trastornos formales del pensamiento (Yolanda Gómez-Fontanil y Esteban Coto)',
            page: 218
          },
          {
            title: '9. Psicopatología del pensamiento (II): los delirios (Rosa M.ª Baños y Amparo Belloch)',
            page: 238
          },
          {
            title: '10. Psicopatología del lenguaje (Francisco Ramos y Dionisio Manga)',
            page: 264
          }
        ]
      },
      {
        part: 'PARTE III. TRASTORNOS ASOCIADOS A NECESIDADES BIOLÓGICAS Y ADICCIONES',
        page: 306,
        items: [
          {
            title: '11. Los trastornos del sueño (Gualberto Buela-Casal y Juan Carlos Sierra)',
            page: 306
          },
          {
            title: '12. Trastornos sexuales (María Crespo, Francisco J. Labrador y M.ª Luisa de la Puente)',
            page: 322
          },
          {
            title: '13. Alcoholismo (Carlos M. G. Aragón y Marta Miquel)',
            page: 368
          },
          {
            title: '14. Drogodependencias (Elisardo Becoña)',
            page: 388
          },
          {
            title: '15. Trastornos alimentarios (Conxa Perpiñá)',
            page: 416
          },
          {
            title: '16. Trastornos de control de impulsos: el juego patológico (Cristina Robert y Cristina Botella)',
            page: 436
          },
          {
            title: '17. Trastornos psicomotores (Alfonso Blanco y Mercedes Borda)',
            page: 462
          }
        ]
      }
    ],
    chapters: [
      { title: 'Portada (Pág. 1)', page: 1 },
      { title: 'Contenido General (Pág. 6)', page: 6 },
      { title: 'Relación de Colaboradores (Pág. 8)', page: 8 },
      { title: 'Prefacio a la Edición Original (Pág. 10)', page: 10 },
      { title: 'Prefacio a la Edición Revisada (Pág. 12)', page: 12 },
      { title: 'Parte I - Cap. 1: Historia de la Psicopatología (Pág. 16)', page: 16 },
      { title: 'Parte I - Cap. 2: Conceptos y Modelos en Psicopatología (Pág. 46)', page: 46 },
      { title: 'Parte I - Cap. 3: Métodos de Investigación en Psicopatología (Pág. 82)', page: 82 },
      { title: 'Parte I - Cap. 4: Clasificación y Diagnóstico en Psicopatología (Pág. 106)', page: 106 },
      { title: 'Parte II - Cap. 5: Psicopatología de la Atención (Pág. 134)', page: 134 },
      { title: 'Parte II - Cap. 6: Percepción y la Imaginación (Pág. 150)', page: 150 },
      { title: 'Parte II - Cap. 7: Psicopatología de la Memoria (Pág. 182)', page: 182 },
      { title: 'Parte II - Cap. 8: Pensamiento (I): Trastornos Formales (Pág. 218)', page: 218 },
      { title: 'Parte II - Cap. 9: Pensamiento (II): Los Delirios (Pág. 238)', page: 238 },
      { title: 'Parte II - Cap. 10: Psicopatología del Lenguaje (Pág. 264)', page: 264 },
      { title: 'Parte III - Cap. 11: Los Trastornos del Sueño (Pág. 306)', page: 306 },
      { title: 'Parte III - Cap. 12: Trastornos Sexuales (Pág. 322)', page: 322 },
      { title: 'Parte III - Cap. 13: Alcoholismo (Pág. 368)', page: 368 },
      { title: 'Parte III - Cap. 14: Drogodependencias (Pág. 388)', page: 388 },
      { title: 'Parte III - Cap. 15: Trastornos Alimentarios (Pág. 416)', page: 416 },
      { title: 'Parte III - Cap. 16: Control de Impulsos: Juego Patológico (Pág. 436)', page: 436 },
      { title: 'Parte III - Cap. 17: Trastornos Psicomotores (Pág. 462)', page: 462 }
    ],
    details: {
      edition: 'Edición Revisada • McGraw-Hill / Interamericana de España',
      pages: '476 páginas completas (Volumen I)',
      scope: 'Obra de referencia internacional indispensable para psicólogos clínicos, psiquiatras e investigadores.',
      clinicalGuidance: 'Proporciona una fundamentación científica rigurosa y explicativa para la semiología clínica, uniendo el síntoma descriptivo con los procesos cognitivos y experimentales subyacentes.'
    }
  },
  {
    id: 'apir-psicopatologia',
    title: 'Manual de Psicopatología APIR',
    category: 'books',
    categoryLabel: 'Manual Especializado PIR',
    isBook: true,
    code: 'LIB-APIR-01',
    icon: '📚',
    author: 'Beatriz Torres Pardo, María Ángeles Barrantes Ortega y Kazuhiro Tajima Pozo',
    badge: 'Manual Especializado • 73 Páginas',
    coverImage: '/libros/PORTADA_MANUAL DE PSICOPATOLOGÍA APIR.png',
    pdfUrl: '/libros/MANUAL DE PSICOPATOLOGÍA APIR.pdf',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'PROCESOS PSICOLÓGICOS', 'EVALUACIÓN CLÍNICA', 'PSICOLOGÍA CLÍNICA'],
    academicAffiliation: 'Academia APIR (Preparación PIR) • Dirección Pedagógica y Docente • Editorial Médica Marbán',
    summary: 'Manual de síntesis clínica y pedagógica de alto rendimiento para el estudio exhaustivo de la psicopatología. Abarca criterios de normalidad, modelos teóricos, sistemas clasificatorios (DSM/CIE) y la semiología detallada de la conciencia, atención, percepción, memoria, pensamiento, lenguaje, afectividad y psicomotricidad.',
    topics: [
      'Modelos en Psicopatología (Biológico, Conductual, Cognitivo)',
      'Criterios de Normalidad y Anormalidad Psicológica',
      'Sistemas Clasificatorios: Modelos Categoriales, Dimensionales e Híbridos',
      'Clasificaciones Psicopatológicas Internacionales (DSM-5 y CIE-10/CIE-11)',
      'Psicopatología de la Conciencia: Trastornos Cuantitativos y Cualitativos',
      'Psicopatología de la Atención y la Orientación (Espacial, Temporal, Autopsíquica)',
      'Psicopatología de la Sensopercepción: Distorsiones y Engaños (Alucinaciones y Pseudopercepciones)',
      'Psicopatología de la Memoria: Amnesias, Síndrome Amnésico, Demencias, Paramnesias y Parapraxias',
      'Psicopatología del Pensamiento: Trastornos del Curso (Formales) y del Contenido (Delirios)',
      'Psicopatología del Lenguaje: Afasias, Disfasias, Dislalias, Disfemia y Alteraciones en Trastornos Mentales',
      'Psicopatología de la Afectividad: Eutimia, Disforia, Tristeza Patológica, Aplanamiento y Labilidad',
      'Trastornos Psicomotores y de la Mímica: Estupor, Agitación, Catatonía, Tics, Temblores y Apraxias',
      'Bibliografía y Referencias Especializadas'
    ],
    categories: [
      'Modelos y Criterios en Psicopatología',
      'Sistemas Clasificatorios (DSM / CIE)',
      'Semiología de la Conciencia y la Atención',
      'Sensopercepción y Pensamiento',
      'Lenguaje y Afectividad',
      'Psicomotricidad Clínica'
    ],
    indexTree: [
      {
        part: 'TEMA 1. MODELOS EN PSICOPATOLOGÍA',
        page: 12,
        items: [
          { title: '1.1. Introducción', page: 12 },
          { title: '1.2. Criterios de normalidad psicológica', page: 12 },
          { title: '1.3. Principales modelos en psicopatología', page: 12 }
        ]
      },
      {
        part: 'TEMA 2. SISTEMAS CLASIFICATORIOS EN PSICOPATOLOGÍA',
        page: 14,
        items: [
          { title: '2.1. Introducción', page: 14 },
          { title: '2.2. Tipos de clasificación', page: 14 },
          { title: '2.3. Modelos de clasificación en psicopatología', page: 14 },
          { title: '2.4. Clasificaciones psicopatológicas internacionales (DSM y CIE)', page: 15 }
        ]
      },
      {
        part: 'TEMA 3. PSICOPATOLOGÍA DE LA CONCIENCIA',
        page: 22,
        items: [
          { title: '3.1. Introducción a la conciencia', page: 22 },
          { title: '3.2. Psicopatología de la conciencia (trastornos cuantitativos y cualitativos)', page: 22 }
        ]
      },
      {
        part: 'TEMA 4. PSICOPATOLOGÍA DE LA ATENCIÓN Y LA ORIENTACIÓN',
        page: 26,
        items: [
          { title: '4.1. Introducción', page: 26 },
          { title: '4.2. La atención como proceso cognitivo', page: 26 },
          { title: '4.3. Psicopatología clásica de la atención', page: 27 },
          { title: '4.4. Psicopatología clásica de la orientación', page: 28 },
          { title: '4.5. Alteraciones atencionales en trastornos mentales', page: 29 }
        ]
      },
      {
        part: 'TEMA 5. PSICOPATOLOGÍA DE LA SENSOPERCEPCIÓN',
        page: 30,
        items: [
          { title: '5.1. Introducción a la sensopercepción', page: 30 },
          { title: '5.2. Distorsiones perceptivas o sensoriales', page: 30 },
          { title: '5.3. Engaños perceptivos: Alucinaciones, pseudopercepciones y alucinosis', page: 31 }
        ]
      },
      {
        part: 'TEMA 6. PSICOPATOLOGÍA DE LA MEMORIA',
        page: 39,
        items: [
          { title: '6.1. Introducción a los procesos mnésicos', page: 39 },
          { title: '6.2. Amnesia retrógrada y anterógrada', page: 39 },
          { title: '6.3. Síndrome amnésico (Korsakoff y lesiones diencefálicas)', page: 40 },
          { title: '6.4. Amnesia y demencias', page: 41 },
          { title: '6.5. Amnesias funcionales o psicógenas', page: 41 },
          { title: '6.6. Hipermnesias', page: 42 },
          { title: '6.7. Paramnesias y parapraxias (déjà vu, confabulación, falsos reconocimientos)', page: 42 },
          { title: '6.8. Alteraciones mnésicas en trastornos mentales', page: 42 }
        ]
      },
      {
        part: 'TEMA 7. PSICOPATOLOGÍA DEL PENSAMIENTO',
        page: 45,
        items: [
          { title: '7.1. Introducción al pensamiento', page: 45 },
          { title: '7.2. Trastornos formales o del curso del pensamiento (fuga de ideas, disgregación, bloqueo)', page: 45 },
          { title: '7.3. Trastornos del contenido del pensamiento: Delirios e ideas sobrevaloradas', page: 46 }
        ]
      },
      {
        part: 'TEMA 8. PSICOPATOLOGÍA DEL LENGUAJE',
        page: 52,
        items: [
          { title: '8.1. Introducción al lenguaje', page: 52 },
          { title: '8.2. Afasias (Broca, Wernicke, Conducción, Global, Transcorticales)', page: 52 },
          { title: '8.3. Disfasias infantiles', page: 55 },
          { title: '8.4. Dislalias infantiles y retraso simple del lenguaje', page: 56 },
          { title: '8.5. Disfemia o tartamudez', page: 56 },
          { title: '8.6. Alteraciones del lenguaje en trastornos mentales', page: 57 }
        ]
      },
      {
        part: 'TEMA 9. PSICOPATOLOGÍA DE LA AFECTIVIDAD',
        page: 60,
        items: [
          { title: '9.1. Introducción a la afectividad', page: 60 },
          { title: '9.2. Alteraciones de la afectividad (tristeza, euforia, anhedonia, aplanamiento, labilidad)', page: 60 }
        ]
      },
      {
        part: 'TEMA 10. TRASTORNOS PSICOMOTORES',
        page: 62,
        items: [
          { title: '10.1. Introducción a la psicomotricidad', page: 62 },
          { title: '10.2. Trastornos psicomotores (agitación, estupor, catatonía, temblores, tics, apraxias)', page: 62 },
          { title: '10.3. Trastornos de la mímica (hipermimias, hipomimias, dismimias)', page: 67 }
        ]
      },
      {
        part: 'BIBLIOGRAFÍA',
        page: 68,
        items: [
          { title: 'Referencias bibliográficas especializadas', page: 68 }
        ]
      }
    ],
    chapters: [
      { title: 'Portada (Pág. 1)', page: 1 },
      { title: 'Créditos y Autores (Pág. 5)', page: 6 },
      { title: 'Recomendaciones de Estudio (Pág. 7)', page: 8 },
      { title: 'Índice General (Pág. 9)', page: 10 },
      { title: 'Tema 1: Modelos en Psicopatología (Pág. 11)', page: 12 },
      { title: 'Tema 2: Sistemas Clasificatorios (Pág. 13)', page: 14 },
      { title: 'Tema 3: Psicopatología de la Conciencia (Pág. 21)', page: 22 },
      { title: 'Tema 4: Psicopatología de la Atención y Orientación (Pág. 25)', page: 26 },
      { title: 'Tema 5: Psicopatología de la Sensopercepción (Pág. 29)', page: 30 },
      { title: 'Tema 6: Psicopatología de la Memoria (Pág. 38)', page: 39 },
      { title: 'Tema 7: Psicopatología del Pensamiento y Delirios (Pág. 44)', page: 45 },
      { title: 'Tema 8: Psicopatología del Lenguaje (Pág. 51)', page: 52 },
      { title: 'Tema 9: Psicopatología de la Afectividad (Pág. 59)', page: 60 },
      { title: 'Tema 10: Trastornos Psicomotores y Mímica (Pág. 61)', page: 62 },
      { title: 'Bibliografía (Pág. 67)', page: 68 }
    ],
    details: {
      edition: '1.ª Edición - Editorial Médica Marbán / Academia APIR',
      pages: '73 páginas completas',
      scope: 'Manual de referencia formativa PIR y psicopatología clínica básica y avanzada.',
      clinicalGuidance: 'Esquema conceptual y semiológico de alta precisión para diagnóstico diferencial rápido, exploración psicopatológica por áreas del vivenciar y preparación técnica rigurosa.'
    }
  },
  {
    id: 'la-orientacion',
    title: 'La orientación',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-ORI-01',
    icon: '🧭',
    author: 'Semiología Psiquiátrica • Capponi & APIR',
    badge: 'Examen Mental • 4 Dimensiones',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL', 'FUNCIONES COGNITIVAS'],
    academicAffiliation: 'Semiología Psiquiátrica (Ricardo Capponi) & Manual de Psicopatología APIR',
    summary: 'Definición: capacidad de ubicarse respecto de sí mismo, el tiempo, el espacio y la situación.\nDimensiones: temporal, espacial, autopsíquica y situacional.\nAlteraciones destacadas: desorientación orgánica, amnésica, parcial, doble orientación y falsa orientación; también pueden describirse alteraciones temporales, espaciales y autopsíquicas.\nEvaluación: preguntas directas, observación de la consistencia, examen del estado mental y valoración de conciencia, atención y memoria.\nCriterio clínico: describir qué dimensión está afectada, el grado de alteración y el contexto en que aparece; no establecer un diagnóstico a partir de una sola respuesta.',
    topics: [
      'Orientación Temporal',
      'Orientación Espacial',
      'Orientación Autopsíquica',
      'Orientación Situacional',
      'Desorientación Orgánica',
      'Desorientación Amnésica',
      'Doble Orientación',
      'Falsa Orientación',
      'Desorientación Parcial',
      'Poriomanía',
      'Evaluación Clínica Directa'
    ]
  },
  {
    id: 'evaluacion-trastorno-orientacion',
    title: 'Evaluación para trastorno de orientación',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-ORI-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Entrevista Directa',
    badge: 'Entrevista Clínica • 4 Dimensiones',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PSICOPATOLOGÍA'],
    academicAffiliation: 'Exploración Psicopatológica Directa del Estado Mental',
    summary: 'Protocolo de exploración clínica estructurada del estado mental para evaluar las cuatro dimensiones de la orientación: personal (autopsíquica), temporal, espacial y situacional mediante entrevista directa y observación de consistencia.',
    topics: [
      'Paso 1: Evaluar 4 Dimensiones',
      'A. Orientación Personal (Autopsíquica)',
      'B. Orientación Temporal (Alopsíquica)',
      'C. Orientación Espacial (Alopsíquica)',
      'D. Orientación Situacional (Contextual)'
    ]  },
  {
    id: 'la-memoria',
    title: 'La memoria',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-MEM-01',
    icon: '🧠',
    author: 'Semiología Psiquiátrica • Capponi, Belloch & APIR',
    badge: 'Proceso Mnésico • Fases & Alteraciones',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'PROCESOS PSICOLÓGICOS', 'EVALUACIÓN CLÍNICA', 'FUNCIONES COGNITIVAS'],
    academicAffiliation: 'Semiología Psiquiátrica (Ricardo Capponi) • Manual Belloch (Vol. 1) • APIR',
    summary: 'Definición: la memoria permite registrar, conservar y recuperar información.\nFases: fijación, conservación, evocación, reconocimiento y ubicación temporal.\nTipos principales: sensorial, corto plazo, trabajo, largo plazo; explícita e implícita.\nAlteraciones cuantitativas: amnesia, hipomnesia e hipermnesia.\nAlteraciones cualitativas: paramnesias, como déjà vu, jamais vu, confabulación y criptomnesia.\nEvaluación: explorar memoria inmediata, reciente, remota, reconocimiento y memoria autobiográfica, diferenciando los posibles problemas de atención, registro, conservación y recuperación.',
    topics: [
      'Fases Mnésicas: Fijación, Conservación, Evocación, Reconocimiento',
      'Memoria Sensorial, Corto y Largo Plazo',
      'Memoria de Trabajo / Operativa',
      'Memoria Explícita: Episódica y Semántica',
      'Memoria Implícita: Procedimental y Priming',
      'Alteraciones Cuantitativas: Amnesia, Hipomnesia, Hipermnesia',
      'Tipos de Amnesia: Anterógrada, Retrógrada, Lacunar, Global',
      'Alteraciones Cualitativas: Paramnesias y Confabulación',
      'Síndromes: Alzheimer, Delirium, Korsakoff'
    ]
  },
  {
    id: 'evaluacion-trastorno-memoria',
    title: 'Evaluación para trastorno de memoria',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MEM-02',
    icon: '📝',
    author: 'Protocolo Semiográfico • Entrevista & Exploración Práctica',
    badge: 'Exploración Clínica • 6 Pruebas',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PROCESOS PSICOLÓGICOS'],
    academicAffiliation: 'Exploración Psicopatológica de la Memoria (Capponi & APIR)',
    summary: 'Protocolo de exploración clínica de la memoria mediante entrevista estructurada y 6 pruebas prácticas breves: memoria inmediata, reciente, remota, reconocimiento, autobiográfica y procedimental, con pauta de registro de resultados.',
    topics: [
      '1. Memoria Inmediata (Dígitos y palabras)',
      '2. Memoria Reciente (Recuerdo diferido 3 min)',
      '3. Memoria Remota (Datos biográficos verificables)',
      '4. Memoria de Reconocimiento',
      '5. Memoria Episódica y Autobiográfica',
      '6. Memoria Procedimental',
      'Preguntas para la Entrevista Clínica',
      'Pauta de Registro de Resultados'
    ]
  }
];



function getMemoryDocHtml() {
  return `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🧠 DEFINICIÓN SEMIOLÓGICA & PROCESO COGNITIVO</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: PROCESOS PSICOLÓGICOS</span>
        </div>
        <h2 class="orientation-main-title">La memoria</h2>
        <p class="orientation-authors-meta">Semiología Psiquiátrica (Ricardo Capponi) • Manual de Psicopatología Belloch (Vol. 1) • APIR</p>
      </div>

      <!-- 1. Definición de memoria -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Definición de memoria</h3>
        <p class="orientation-lead-p">
          La memoria es el conjunto de <strong>procesos neurocognitivos</strong> que permiten codificar, almacenar y recuperar información, así como utilizar conocimientos adquiridos previamente. Es fundamental para el aprendizaje, la experiencia personal y la continuidad de la identidad.
        </p>
        <p class="orientation-p">
          Belloch y colaboradores explican que la memoria interviene en actividades diversas: recordar experiencias autobiográficas, reconocer personas, recuperar conocimientos y ejecutar habilidades aprendidas. Por eso, sus alteraciones pueden afectar funciones diferentes y no necesariamente todas a la vez <span class="citation-tag">(Manual de psicopatología, vol. 1, capítulo 7, pp. 170 y siguientes)</span>.
        </p>
        <div style="margin-top: 0.65rem;">
          <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="182" title="Abrir Capítulo 7 en el lector de PDF de Belloch">
            📖 Consultar en Belloch: Cap. 7 Psicopatología de la Memoria (Pág. 182) →
          </button>
        </div>
      </section>

      <!-- 2. Conceptos fundamentales -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Conceptos fundamentales</h3>
        <p class="orientation-p">
          <strong>Fases del proceso de la memoria:</strong> Capponi distingue cuatro etapas funcionales que permiten comprender dónde puede producirse una alteración <span class="citation-tag">(Psicopatología y semiología psiquiátrica, pp. 146–147)</span>.
        </p>
        <div style="margin-bottom: 0.9rem;">
          <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="148" title="Abrir sección de Psicopatología de la memoria en Capponi">
            📖 Consultar en Capponi: Psicopatología de la Memoria (Pág. 148) →
          </button>
        </div>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">📥</span>
              <div>
                <h4 class="dim-name">1. Fijación o codificación</h4>
                <span class="dim-badge">Fase de Registro</span>
              </div>
            </div>
            <p class="dim-desc">La información se capta mediante la percepción y se registra. Depende, entre otros factores, de la atención, la concentración, el interés y la motivación.</p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">💾</span>
              <div>
                <h4 class="dim-name">2. Conservación o almacenamiento</h4>
                <span class="dim-badge">Fase de Mantenimiento</span>
              </div>
            </div>
            <p class="dim-desc">La información registrada se mantiene durante un periodo para poder utilizarse posteriormente.</p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⚡</span>
              <div>
                <h4 class="dim-name">3. Evocación o recuperación</h4>
                <span class="dim-badge">Fase de Conciencia</span>
              </div>
            </div>
            <p class="dim-desc">La información conservada vuelve a la conciencia. Puede recuperarse voluntariamente, aparecer de forma espontánea o expresarse mediante habilidades automatizadas.</p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🔍</span>
              <div>
                <h4 class="dim-name">4. Reconocimiento y ubicación temporal</h4>
                <span class="dim-badge">Fase Cualitativa</span>
              </div>
            </div>
            <p class="dim-desc">Se identifica lo recordado y se reconoce como una experiencia pasada, situándola temporalmente. Capponi señala que esta etapa se relaciona especialmente con las alteraciones cualitativas de la memoria.</p>
          </div>
        </div>

        <div class="orientation-subcard" style="margin-top: 1.15rem;">
          <h4 class="orientation-subcard-title">Conceptos que conviene diferenciar</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Codificación:</strong> ingreso y registro de información.</li>
            <li><strong>Almacenamiento:</strong> mantenimiento de la información.</li>
            <li><strong>Evocación:</strong> recuperación de información previamente registrada.</li>
            <li><strong>Reconocimiento:</strong> identificación de algo como conocido.</li>
            <li><strong>Olvido:</strong> dificultad o incapacidad para recuperar información; no siempre implica que esta se haya perdido por completo.</li>
            <li><strong>Interferencia:</strong> una información puede dificultar el aprendizaje o la recuperación de otra.</li>
          </ul>
        </div>

        <div class="orientation-clinical-note">
          💡 <strong>Conservación de Recuerdos:</strong>
          El olvido también puede relacionarse con el desuso, un procesamiento inicial insuficiente o alteraciones cerebrales. Capponi describe que la evocación periódica favorece la conservación de los recuerdos <span class="citation-tag">(Psicopatología y semiología psiquiátrica, p. 146)</span>.
        </div>
      </section>

      <!-- 3. Tipos de memoria -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Tipos de memoria</h3>
        <p class="orientation-p">
          La memoria puede clasificarse según el tiempo de retención, el contenido y la modalidad de la información. Estas clasificaciones se complementan entre sí.
        </p>

        <!-- A. Duración -->
        <h4 style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary); margin: 0.95rem 0 0.5rem 0;">A. Según la duración y el funcionamiento</h4>
        <div class="orientation-table-wrap">
          <table class="orientation-table">
            <thead>
              <tr>
                <th style="width: 32%;">Tipo</th>
                <th>Definición y características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong class="table-type-tag">Memoria sensorial</strong></td>
                <td>Retiene brevemente la información procedente de los sentidos. Se distingue la memoria icónica (visual) y la ecoica (auditiva).</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Memoria a corto plazo</strong></td>
                <td>Mantiene una cantidad limitada de información durante un periodo breve.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Memoria de trabajo u operativa</strong></td>
                <td>Mantiene información temporalmente y permite manipularla para realizar tareas como comprender, razonar o calcular.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Memoria a largo plazo</strong></td>
                <td>Conserva información durante periodos prolongados, desde horas hasta años.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="orientation-small-note" style="margin-top: 0.65rem;">
          Belloch advierte que la distinción tradicional entre memoria a corto y largo plazo proviene del modelo multialmacén, cuya formulación original ha sido revisada. También describe la memoria operativa como un sistema más complejo que el simple almacenamiento temporal <span class="citation-tag">(Manual de psicopatología, vol. 1, capítulo 7)</span>.
        </p>

        <!-- B. Contenido -->
        <h4 style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary); margin: 1.25rem 0 0.5rem 0;">B. Según el contenido</h4>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <h5 style="margin: 0 0 0.4rem 0; font-size: 0.94rem; color: #1e3a8a; font-weight: 700;">Memoria explícita o declarativa</h5>
            <p style="font-size: 0.82rem; margin: 0 0 0.5rem 0; color: var(--text-secondary);">Información que puede recuperarse conscientemente y expresarse verbalmente.</p>
            <ul class="orientation-bullet-list">
              <li><strong>Episódica:</strong> experiencias personales situadas en un tiempo y lugar. <em>Ejemplo: recordar qué hiciste ayer.</em></li>
              <li><strong>Semántica:</strong> conocimientos generales, conceptos y significados. <em>Ejemplo: saber qué es una neurona.</em></li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <h5 style="margin: 0 0 0.4rem 0; font-size: 0.94rem; color: #1e3a8a; font-weight: 700;">Memoria implícita o no declarativa</h5>
            <p style="font-size: 0.82rem; margin: 0 0 0.5rem 0; color: var(--text-secondary);">Se manifiesta en el desempeño o la conducta sin requerir necesariamente un recuerdo consciente.</p>
            <ul class="orientation-bullet-list">
              <li><strong>Procedimental:</strong> habilidades y acciones aprendidas. <em>Ejemplo: montar en bicicleta.</em></li>
              <li><strong>Priming:</strong> una experiencia previa facilita el procesamiento posterior de un estímulo.</li>
              <li><strong>Condicionamiento:</strong> aprendizaje de asociaciones entre estímulos o entre una conducta y sus consecuencias.</li>
            </ul>
          </div>
        </div>
        <p class="orientation-small-note" style="margin-top: 0.65rem;">
          Esta distinción entre memoria declarativa y procedimental, así como la diferenciación entre memoria episódica y semántica, aparece desarrollada en Belloch y colaboradores <span class="citation-tag">(Manual de psicopatología, vol. 1, capítulo 7)</span>.
        </p>

        <!-- C. Modalidad sensorial -->
        <h4 style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary); margin: 1.25rem 0 0.5rem 0;">C. Según la modalidad sensorial</h4>
        <div class="orientation-subcard" style="margin: 0.4rem 0 0 0;">
          <ul class="orientation-bullet-list">
            <li><strong>Visual:</strong> imágenes, formas y características visuales.</li>
            <li><strong>Auditiva:</strong> sonidos, palabras y estímulos escuchados.</li>
            <li><strong>Kinestésica:</strong> información vinculada con el movimiento y la posición corporal.</li>
          </ul>
          <p class="orientation-small-note" style="margin-top: 0.55rem;">
            Estas modalidades describen el tipo de información involucrada, no necesariamente sistemas completamente independientes.
          </p>
        </div>
      </section>

      <!-- 4. Alteraciones de la memoria -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 4</div>
        <h3 class="orientation-sec-title">4. Alteraciones de la memoria</h3>
        <p class="orientation-p">
          Una clasificación general distingue las <strong>alteraciones cuantitativas</strong>, que afectan la capacidad de recordar, y las <strong>alteraciones cualitativas</strong>, que afectan la exactitud, el reconocimiento o la vivencia de los recuerdos.
        </p>

        <!-- A. Cuantitativas -->
        <h4 style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary); margin: 1rem 0 0.5rem 0;">A. Alteraciones cuantitativas</h4>
        <div class="orientation-table-wrap">
          <table class="orientation-table">
            <thead>
              <tr>
                <th style="width: 28%;">Alteración</th>
                <th>Definición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong class="table-type-tag">Amnesia</strong></td>
                <td>Pérdida patológica de recuerdos o incapacidad para registrar información nueva.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Hipomnesia</strong></td>
                <td>Disminución de la capacidad para aprender o recordar información.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Hipermnesia</strong></td>
                <td>Incremento anormal de la evocación o de la facilidad para recuperar recuerdos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); margin: 1.15rem 0 0.55rem 0; text-transform: uppercase; letter-spacing: 0.04em;">Tipos de amnesia</h5>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <h6 style="margin: 0 0 0.3rem 0; font-size: 0.9rem; font-weight: 700; color: #b91c1c;">Amnesia anterógrada o de fijación</h6>
            <p style="font-size: 0.82rem; margin: 0; line-height: 1.5; color: var(--text-secondary);">Dificultad o incapacidad para formar nuevos recuerdos después del inicio de la lesión o enfermedad. Puede conservarse el recuerdo de acontecimientos anteriores.</p>
          </div>
          <div class="orientation-dim-item">
            <h6 style="margin: 0 0 0.3rem 0; font-size: 0.9rem; font-weight: 700; color: #b91c1c;">Amnesia retrógrada o de evocación</h6>
            <p style="font-size: 0.82rem; margin: 0; line-height: 1.5; color: var(--text-secondary);">Pérdida de recuerdos correspondientes a acontecimientos anteriores al inicio de la lesión o enfermedad.</p>
          </div>
          <div class="orientation-dim-item">
            <h6 style="margin: 0 0 0.3rem 0; font-size: 0.9rem; font-weight: 700; color: #b91c1c;">Amnesia lacunar</h6>
            <p style="font-size: 0.82rem; margin: 0; line-height: 1.5; color: var(--text-secondary);">Pérdida de recuerdos limitada a un periodo concreto.</p>
          </div>
          <div class="orientation-dim-item">
            <h6 style="margin: 0 0 0.3rem 0; font-size: 0.9rem; font-weight: 700; color: #b91c1c;">Amnesia global o retroanterógrada</h6>
            <p style="font-size: 0.82rem; margin: 0; line-height: 1.5; color: var(--text-secondary);">Compromiso simultáneo de la memoria anterógrada y retrógrada.</p>
          </div>
          <div class="orientation-dim-item">
            <h6 style="margin: 0 0 0.3rem 0; font-size: 0.9rem; font-weight: 700; color: #b91c1c;">Amnesia de conservación</h6>
            <p style="font-size: 0.82rem; margin: 0; line-height: 1.5; color: var(--text-secondary);">Dificultad para mantener a lo largo del tiempo información que había sido registrada previamente.</p>
          </div>
          <div class="orientation-dim-item">
            <h6 style="margin: 0 0 0.3rem 0; font-size: 0.9rem; font-weight: 700; color: #b91c1c;">Amnesia disociativa</h6>
            <p style="font-size: 0.82rem; margin: 0; line-height: 1.5; color: var(--text-secondary);">Incapacidad para recordar información autobiográfica relevante, asociada a factores psicológicos en determinados cuadros clínicos.</p>
          </div>
        </div>

        <p class="orientation-small-note" style="margin-top: 0.85rem;">
          Capponi diferencia la amnesia de fijación, la de conservación y las alteraciones de evocación, y explica que pueden comprometer distintas fases del proceso mnésico <span class="citation-tag">(Psicopatología y semiología psiquiátrica, pp. 147 y siguientes)</span>. APIR también describe el síndrome amnésico y sus características clínicas <span class="citation-tag">(Manual de psicopatología APIR, p. 38)</span>.
        </p>
        <div style="margin-top: 0.5rem; display: flex; gap: 0.6rem; flex-wrap: wrap;">
          <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="148">
            📖 Consultar en Capponi (Pág. 148) →
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="39">
            📖 Consultar en APIR: Psicopatología de la Memoria (Pág. 39) →
          </button>
        </div>

        <!-- B. Cualitativas (Paramnesias) -->
        <h4 style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary); margin: 1.45rem 0 0.5rem 0;">B. Alteraciones cualitativas: paramnesias</h4>
        <p class="orientation-p">
          Las paramnesias son alteraciones del recuerdo o del reconocimiento en las que la experiencia recordada no coincide adecuadamente con la realidad.
        </p>
        <div class="orientation-table-wrap">
          <table class="orientation-table">
            <thead>
              <tr>
                <th style="width: 28%;">Alteración</th>
                <th>Definición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong class="table-type-tag">Déjà vu</strong></td>
                <td>Sensación de haber vivido anteriormente una situación nueva.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Jamais vu</strong></td>
                <td>Sensación de no reconocer o de no haber visto algo que en realidad resulta familiar.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Falso reconocimiento</strong></td>
                <td>Identificación errónea de una persona, objeto o situación como conocido.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Confabulación</strong></td>
                <td>Producción de recuerdos inexactos que la persona puede experimentar como verdaderos.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Criptomnesia</strong></td>
                <td>Un recuerdo previo se experimenta como si fuera una idea o experiencia nueva, sin reconocer su origen anterior.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Paramnesia reduplicativa</strong></td>
                <td>Creencia o vivencia de duplicación de lugares, situaciones o acontecimientos.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Ecmnesia</strong></td>
                <td>Reviviscencia intensa de una época pasada, como si se estuviera viviendo nuevamente.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Ilusión de la memoria</strong></td>
                <td>Recuerdo de un hecho real reconstruido con elementos erróneos o distorsionados.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Alucinación de la memoria</strong></td>
                <td>Término clásico para una aparente evocación de un recuerdo que no corresponde a una experiencia realmente registrada.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="orientation-small-note" style="margin-top: 0.65rem;">
          Capponi señala que los trastornos de reconocimiento y ubicación temporal están especialmente relacionados con las alteraciones cualitativas de la memoria <span class="citation-tag">(Psicopatología y semiología psiquiátrica, p. 147)</span>.
        </p>

        <!-- C. Síndromes -->
        <h4 style="font-size: 0.96rem; font-weight: 700; color: var(--text-primary); margin: 1.45rem 0 0.5rem 0;">C. Síndromes asociados a alteraciones de la memoria</h4>
        <div class="orientation-subcard" style="margin: 0.4rem 0 0 0;">
          <ul class="orientation-bullet-list">
            <li><strong>Enfermedad de Alzheimer:</strong> deterioro progresivo de la memoria y otras funciones cognitivas.</li>
            <li><strong>Delirium:</strong> alteración aguda de la atención y la conciencia que puede acompañarse de dificultades de memoria.</li>
            <li><strong>Trastorno neurocognitivo vascular:</strong> deterioro cognitivo asociado a enfermedad cerebrovascular.</li>
            <li><strong>Traumatismo craneoencefálico:</strong> puede provocar alteraciones de fijación o pérdida de recuerdos.</li>
            <li><strong>Síndrome de Korsakoff:</strong> síndrome amnésico de origen orgánico, frecuentemente relacionado con deficiencia de tiamina.</li>
            <li><strong>Amnesia disociativa:</strong> alteración del recuerdo autobiográfico asociada a factores psicológicos.</li>
          </ul>
          <p class="orientation-small-note" style="margin-top: 0.65rem;">
            APIR desarrolla el síndrome amnésico y el síndrome de Korsakoff, incluyendo sus características y posibles causas <span class="citation-tag">(Manual de psicopatología APIR, p. 38)</span>.
          </p>
        </div>
      </section>

      <!-- Botón inferior para evaluación -->
      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta" id="btn-goto-memory-eval">
          <span class="cta-icon">📝</span>
          <div class="cta-texts">
            <strong class="cta-title">Evaluación para trastorno de memoria</strong>
            <span class="cta-sub">Abrir protocolo estructurado de exploración práctica (6 pruebas breves), entrevista y pauta de registro</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `;
}

function getMemoryEvaluationDocHtml() {
  return `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📝 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">🧠 ÁREA: PROCESOS PSICOLÓGICOS</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación para trastorno de memoria</h2>
            <p class="orientation-authors-meta">Exploración Clínica Directa • Pruebas Breves & Registro Semiográfico</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-memory-def">
            ← Ver Definición y Psicopatología
          </button>
        </div>
      </div>

      <!-- 5. Forma de evaluar la memoria -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 5</div>
        <h3 class="orientation-sec-title">5. Forma de evaluar la memoria</h3>
        <p class="orientation-lead-p">
          La evaluación se realiza mediante <strong>entrevista clínica y tareas breves</strong> que permiten examinar diferentes fases y tipos de memoria. No basta con preguntar si la persona tiene olvidos: hay que determinar qué información no recuerda, desde cuándo ocurre y en qué condiciones.
        </p>
        <p class="orientation-p">
          Capponi describe procedimientos específicos para explorar la memoria inmediata y reciente, entre ellos la retención de dígitos y el recuerdo de palabras tras un intervalo <span class="citation-tag">(Psicopatología y semiología psiquiátrica, p. 146)</span>.
        </p>
        <div style="margin-bottom: 1.15rem;">
          <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="148">
            📖 Consultar procedimientos de exploración en Capponi (Pág. 148) →
          </button>
        </div>

        <div class="orientation-eval-step-header">
          <span class="step-badge">Parte A</span>
          <h4 class="step-title">Exploración práctica (6 Pruebas Breves)</h4>
        </div>

        <div class="eval-dimensions-grid">
          <!-- 1. Inmediata -->
          <div class="eval-card eval-temporal">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">⚡</div>
              <div>
                <h5 class="eval-card-name">1. Memoria inmediata</h5>
                <span class="eval-card-sub">Registro & Retención a corto plazo</span>
              </div>
            </div>
            <div class="eval-card-body">
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Qué evalúa:</span>
                <span>Registro y retención durante unos segundos, muy relacionados con la atención.</span>
              </div>
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Cómo evaluarla:</span>
                <span>Pedir que repita una serie de números o palabras inmediatamente después de escucharlos.</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">💬</span>
                <span class="q-text">Ejemplo: «Repita estos números: 4, 8, 2, 7».</span>
              </div>
            </div>
          </div>

          <!-- 2. Reciente -->
          <div class="eval-card eval-personal">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">⏱️</div>
              <div>
                <h5 class="eval-card-name">2. Memoria reciente</h5>
                <span class="eval-card-sub">Retención diferida (3 minutos)</span>
              </div>
            </div>
            <div class="eval-card-body">
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Qué evalúa:</span>
                <span>Capacidad para retener información durante unos minutos.</span>
              </div>
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Cómo evaluarla:</span>
                <span>Presentar tres o cuatro palabras no relacionadas y solicitar que las recuerde después de aproximadamente tres minutos. También puede preguntarse por temas tratados recientemente en la entrevista.</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">💬</span>
                <span class="q-text">Ejemplo: «Recuerde estas palabras: árbol, moneda, ventana. Se las preguntaré dentro de unos minutos».</span>
              </div>
            </div>
          </div>

          <!-- 3. Remota -->
          <div class="eval-card eval-spatial">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">🏛️</div>
              <div>
                <h5 class="eval-card-name">3. Memoria remota</h5>
                <span class="eval-card-sub">Largo plazo & Conocimientos pasados</span>
              </div>
            </div>
            <div class="eval-card-body">
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Qué evalúa:</span>
                <span>Recuperación de acontecimientos y conocimientos adquiridos hace tiempo.</span>
              </div>
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Cómo evaluarla:</span>
                <span>Preguntar por hechos biográficos o acontecimientos pasados que puedan verificarse cuando sea necesario.</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">💬</span>
                <span class="q-text">Ejemplos: «¿En qué colegio estudió?» o «¿En qué ciudad vivía durante su infancia?».</span>
              </div>
            </div>
          </div>

          <!-- 4. Reconocimiento -->
          <div class="eval-card eval-situational">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">🔍</div>
              <div>
                <h5 class="eval-card-name">4. Memoria de reconocimiento</h5>
                <span class="eval-card-sub">Identificación de familiaridad</span>
              </div>
            </div>
            <div class="eval-card-body">
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Qué evalúa:</span>
                <span>Capacidad para identificar estímulos o personas como previamente conocidos.</span>
              </div>
              <div class="dim-eval-box">
                <span class="dim-eval-label">Cómo evaluarla:</span>
                <span>Presentar opciones o estímulos y comprobar si reconoce los que ya había visto o escuchado.</span>
              </div>
            </div>
          </div>

          <!-- 5. Episódica y autobiográfica -->
          <div class="eval-card eval-personal">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">📖</div>
              <div>
                <h5 class="eval-card-name">5. Memoria episódica y autobiográfica</h5>
                <span class="eval-card-sub">Vivencias personales contextualizadas</span>
              </div>
            </div>
            <div class="eval-card-body">
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Qué evalúa:</span>
                <span>Recuerdo de experiencias personales, incluidos su contenido y contexto temporal.</span>
              </div>
              <div class="dim-eval-box">
                <span class="dim-eval-label">Cómo evaluarla:</span>
                <span>Solicitar la descripción de acontecimientos recientes o pasados y observar la coherencia de los detalles, sin asumir que una imprecisión aislada constituye una alteración patológica.</span>
              </div>
            </div>
          </div>

          <!-- 6. Procedimental -->
          <div class="eval-card eval-temporal">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">⚙️</div>
              <div>
                <h5 class="eval-card-name">6. Memoria procedimental</h5>
                <span class="eval-card-sub">Habilidades motoras y automatismos</span>
              </div>
            </div>
            <div class="eval-card-body">
              <div class="dim-eval-box" style="margin-bottom: 0.4rem;">
                <span class="dim-eval-label">Qué evalúa:</span>
                <span>Conservación de habilidades aprendidas.</span>
              </div>
              <div class="dim-eval-box">
                <span class="dim-eval-label">Cómo evaluarla:</span>
                <span>Observar la ejecución de una tarea previamente aprendida, cuando resulte pertinente.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- B. Preguntas para la entrevista clínica -->
        <div class="orientation-eval-step-header" style="margin-top: 1.5rem;">
          <span class="step-badge">Parte B</span>
          <h4 class="step-title">Preguntas para la entrevista clínica</h4>
        </div>
        <div class="orientation-subcard" style="margin-top: 0.5rem;">
          <div class="eval-card-body">
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Ha notado que olvida información que antes recordaba con facilidad?</span>
            </div>
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Recuerda lo que ocurrió hace unos minutos o durante los últimos días?</span>
            </div>
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Le cuesta aprender información nueva?</span>
            </div>
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Recuerda acontecimientos importantes de su vida?</span>
            </div>
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Reconoce a personas, lugares u objetos familiares?</span>
            </div>
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Ha tenido periodos de los que no recuerda nada?</span>
            </div>
            <div class="eval-question-bubble">
              <span class="q-bullet">🔹</span>
              <span class="q-text">¿Ha experimentado recuerdos que parecen reales, pero que otras personas le dicen que no ocurrieron?</span>
            </div>
          </div>
          <p class="orientation-small-note" style="margin-top: 0.75rem;">
            Las respuestas deben interpretarse junto con la atención, el estado de conciencia, el estado emocional, el nivel educativo, el contexto clínico y el funcionamiento cotidiano.
          </p>
        </div>

        <!-- C. ¿Cómo registrar los resultados? -->
        <div class="orientation-eval-step-header" style="margin-top: 1.5rem;">
          <span class="step-badge">Parte C</span>
          <h4 class="step-title">¿Cómo registrar los resultados? (Guía de Organización Clínica)</h4>
        </div>
        <div class="orientation-table-wrap" style="margin-top: 0.5rem;">
          <table class="orientation-table">
            <thead>
              <tr>
                <th style="width: 25%;">Área evaluada</th>
                <th>Qué registrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong class="table-type-tag">Inmediata</strong></td>
                <td>Si repite correctamente la información y cuántos elementos retiene.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Reciente</strong></td>
                <td>Si recuerda las palabras o acontecimientos tras el intervalo establecido.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Remota</strong></td>
                <td>Si evoca acontecimientos pasados con coherencia.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Reconocimiento</strong></td>
                <td>Si identifica correctamente estímulos previamente presentados.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Autobiográfica</strong></td>
                <td>Si recuerda experiencias personales y las sitúa en su contexto.</td>
              </tr>
              <tr>
                <td><strong class="table-type-tag">Cualitativa</strong></td>
                <td>Si aparecen falsos reconocimientos, distorsiones o vivencias anómalas del recuerdo.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="orientation-clinical-note" style="margin-top: 1rem;">
          📋 <strong>Alcance Metodológico:</strong>
          Esta tabla es una guía de organización clínica, no una escala diagnóstica validada. Si se requiere una valoración formal, deben utilizarse instrumentos neuropsicológicos apropiados y considerar la evaluación profesional.
        </div>
      </section>

      <!-- Botón inferior para regresar a definición -->
      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-memory-def">
          <span class="cta-icon">🧠</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a La memoria (Definición & Semiología)</strong>
            <span class="cta-sub">Consultar las fases del proceso mnésico, amnesias cuantitativas y paramnesias cualitativas</span>
          </div>
          <span class="cta-arrow">←</span>
        </button>
      </div>
    </div>
  `;
}

function getOrientationDocHtml() {
  return `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🧭 DEFINICIÓN SEMIOLÓGICA & TRASTORNO</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">📋 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">La orientación</h2>
        <p class="orientation-authors-meta">Semiología Psiquiátrica (Ricardo Capponi) & Manual de Psicopatología APIR</p>
      </div>

      <!-- 1. Definición y conceptos básicos -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Definición y conceptos básicos</h3>
        <p class="orientation-p">
          La orientación es una función cognitiva que permite a la persona reconocerse a sí misma y situarse correctamente en el tiempo, el espacio y la situación que está viviendo. Forma parte del examen del estado mental y depende de la integración de la conciencia, la atención, la memoria y otras funciones cognitivas.
        </p>
        <p class="orientation-p">
          Desde la perspectiva de la semiología psiquiátrica, la orientación permite relacionar las experiencias presentes con las vivencias pasadas y reconocer la propia continuidad personal. <span class="citation-tag">(Capponi, s. f., pp. 152–153)</span>.
        </p>

        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">Conceptos fundamentales</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Orientación conservada:</strong> la persona identifica correctamente quién es, dónde está, en qué momento se encuentra y qué sucede.</li>
            <li><strong>Desorientación:</strong> pérdida total o parcial de la capacidad para ubicarse correctamente en el tiempo, el espacio o respecto de sí misma.</li>
            <li><strong>Desorientación parcial:</strong> la persona conserva algunas referencias, pero su ubicación temporal o espacial es insegura, incompleta o inconstante.</li>
            <li><strong>Alteración de la orientación:</strong> puede presentarse en trastornos de conciencia, alteraciones de la memoria y otras condiciones neurológicas o psiquiátricas.</li>
          </ul>
        </div>

        <div class="orientation-clinical-alert">
          <strong>⚠️ Criterio de Interpretación Clínica:</strong>
          La desorientación no constituye por sí sola un diagnóstico; debe interpretarse dentro del estado clínico general del paciente. <span class="citation-tag">(Academia APIR, s. f., p. 27; Capponi, s. f., pp. 152–153)</span>.
        </div>
      </section>

      <!-- 2. Dimensiones o tipos de orientación -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Dimensiones o tipos de orientación</h3>
        <p class="orientation-p">
          Se distinguen cuatro dimensiones principales para la evaluación clínica.
        </p>

        <div class="orientation-dimensions-grid">
          <!-- 1. Orientación temporal -->
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">📅</span>
              <div>
                <h4 class="dim-name">1. Orientación temporal</h4>
                <span class="dim-badge">Alopsíquica</span>
              </div>
            </div>
            <p class="dim-desc">Capacidad para reconocer el momento en que se encuentra la persona.</p>
            <div class="dim-eval-box">
              <span class="dim-eval-label">Se evalúa:</span>
              <span>Día, fecha, mes, año, estación y momento aproximado del día.</span>
            </div>
            <div class="dim-alter-box">
              <span class="dim-alter-label">Alteración:</span>
              <span>El paciente no identifica correctamente la fecha o el momento temporal.</span>
            </div>
          </div>

          <!-- 2. Orientación espacial -->
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">📍</span>
              <div>
                <h4 class="dim-name">2. Orientación espacial</h4>
                <span class="dim-badge">Alopsíquica</span>
              </div>
            </div>
            <p class="dim-desc">Capacidad para reconocer la ubicación física y la posición propia dentro del entorno.</p>
            <div class="dim-eval-box">
              <span class="dim-eval-label">Se evalúa:</span>
              <span>País, ciudad, institución, habitación y lugar concreto.</span>
            </div>
            <div class="dim-alter-box">
              <span class="dim-alter-label">Alteración:</span>
              <span>El paciente desconoce dónde está o confunde el lugar en el que se encuentra.</span>
            </div>
          </div>

          <!-- 3. Orientación autopsíquica o personal -->
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">👤</span>
              <div>
                <h4 class="dim-name">3. Orientación autopsíquica o personal</h4>
                <span class="dim-badge">Autopsíquica</span>
              </div>
            </div>
            <p class="dim-desc">Capacidad para reconocerse a sí mismo y conservar referencias de la propia identidad.</p>
            <div class="dim-eval-box">
              <span class="dim-eval-label">Se evalúa:</span>
              <span>Nombre, edad, historia personal y rol familiar o social.</span>
            </div>
            <div class="dim-alter-box">
              <span class="dim-alter-label">Alteración:</span>
              <span>La persona no logra identificar quién es o presenta una alteración importante del reconocimiento de su identidad.</span>
            </div>
          </div>

          <!-- 4. Orientación situacional -->
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🎯</span>
              <div>
                <h4 class="dim-name">4. Orientación situacional</h4>
                <span class="dim-badge">Alopsíquica / Contextual</span>
              </div>
            </div>
            <p class="dim-desc">Capacidad para comprender las circunstancias actuales y el motivo por el que se encuentra en un lugar determinado.</p>
            <div class="dim-eval-box">
              <span class="dim-eval-label">Se evalúa:</span>
              <span>Qué está sucediendo, dónde está siendo atendido y por qué acudió o fue ingresado.</span>
            </div>
            <div class="dim-alter-box">
              <span class="dim-alter-label">Alteración:</span>
              <span>La persona no comprende adecuadamente su situación inmediata.</span>
            </div>
          </div>
        </div>

        <div class="orientation-clinical-note">
          💡 <strong>Distinción Semiológica Fundamental:</strong>
          Las orientaciones temporal y espacial se consideran <em>alopsíquicas</em>, porque se refieren a la ubicación respecto del entorno; la <em>autopsíquica</em> se refiere a la propia persona. Esta distinción está descrita por Capponi <span class="citation-tag">(s. f., p. 152)</span>.
        </div>
      </section>

      <!-- 3. Psicopatología de la orientación: principales alteraciones -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Psicopatología de la orientación: principales alteraciones</h3>

        <!-- 3.1 Desorientación orgánica -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.1</span>
            <h4 class="alteration-title">Desorientación orgánica</h4>
          </div>
          <p class="orientation-p">
            Es una alteración vinculada a una condición orgánica. En la clasificación presentada por el Manual de Psicopatología APIR, puede manifestarse como una desorientación extensa en tiempo y espacio, acompañada de amnesia y, en los cuadros graves, de alteración de la orientación personal.
          </p>
          <div class="alteration-example-box">
            <strong>Ejemplo clínico:</strong> Una persona con un síndrome confusional no identifica el hospital ni el día en que se encuentra.
          </div>
          <p class="orientation-small-note">
            Posibles contextos clínicos incluyen delirium, enfermedades neurocognitivas, intoxicaciones y lesiones cerebrales. La causa debe establecerse mediante la evaluación clínica, no solo por las respuestas de orientación. <span class="citation-tag">(Academia APIR, s. f., p. 27)</span>.
          </p>
        </div>

        <!-- 3.2 Desorientación amnésica -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.2</span>
            <h4 class="alteration-title">Desorientación amnésica</h4>
          </div>
          <p class="orientation-p">
            Se relaciona con una alteración de la memoria que dificulta registrar o retener información nueva. La persona puede conservar recuerdos antiguos, pero olvidar repetidamente información reciente.
          </p>
          <div class="alteration-example-box">
            <strong>Ejemplo clínico:</strong> El paciente pregunta varias veces dónde está porque no retiene la respuesta que acaba de recibir.
          </div>
          <div class="orientation-diff-note">
            <strong>Diferenciación semiológica:</strong> Es importante distinguirla de una desorientación global: el problema predominante puede ser la incapacidad para fijar información nueva.
          </div>
        </div>

        <!-- 3.3 Doble orientación -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.3</span>
            <h4 class="alteration-title">Doble orientación</h4>
            <span class="alteration-alias">Orientación errónea delirante / Doble contabilidad</span>
          </div>
          <p class="orientation-p">
            La persona puede reconocer las coordenadas reales y, al mismo tiempo, incorporar elementos irreales o delirantes a su interpretación de la situación.
          </p>
          <div class="alteration-example-box">
            <strong>Ejemplo clínico:</strong> Sabe que está en un hospital, pero afirma que ese hospital también es una nave espacial.
          </div>
          <p class="orientation-small-note">
            La característica distintiva es la coexistencia de referencias reales y anormales. <span class="citation-tag">(Academia APIR, s. f., p. 27)</span>.
          </p>
        </div>

        <!-- 3.4 Falsa orientación u orientación confabulada -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.4</span>
            <h4 class="alteration-title">Falsa orientación u orientación confabulada</h4>
          </div>
          <p class="orientation-p">
            La persona proporciona respuestas sobre su ubicación, tiempo o identidad que considera válidas, pero que no corresponden a las circunstancias reales. En la descripción de APIR, se orienta mediante referencias patológicas e ignora las referencias temporoespaciales reales.
          </p>
          <div class="alteration-example-box">
            <strong>Ejemplo clínico:</strong> Afirma estar en su casa cuando realmente está en un hospital y mantiene esa interpretación como verdadera.
          </div>
          <div class="orientation-diff-note">
            <strong>Distinción con la doble orientación:</strong> En esta última coexisten referencias reales y anormales; en la falsa orientación predominan las referencias incorrectas. <span class="citation-tag">(Academia APIR, s. f., p. 27)</span>.
          </div>
        </div>

        <!-- 3.5 Desorientación parcial -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.5</span>
            <h4 class="alteration-title">Desorientación parcial</h4>
          </div>
          <p class="orientation-p">
            La ubicación temporoespacial es insegura o inconstante. La persona puede conservar algunas referencias y fallar en otras.
          </p>
          <p class="orientation-small-note">
            Capponi describe que la orientación temporal suele estar más afectada que la espacial y que, cuando se compromete la orientación autopsíquica, habitualmente también existe afectación temporoespacial <span class="citation-tag">(Capponi, s. f., p. 153)</span>.
          </p>
        </div>

        <!-- 3.6 Desorientación temporal, espacial y autopsíquica -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.6</span>
            <h4 class="alteration-title">Desorientación temporal, espacial y autopsíquica</h4>
          </div>
          <p class="orientation-p">
            Estas alteraciones se clasifican según la dimensión principalmente afectada:
          </p>
          <div class="orientation-table-wrap">
            <table class="orientation-table">
              <thead>
                <tr>
                  <th style="width: 28%;">Tipo</th>
                  <th>Manifestación principal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong class="table-type-tag">Temporal</strong></td>
                  <td>No identifica adecuadamente el día, la fecha, el mes o el momento del día.</td>
                </tr>
                <tr>
                  <td><strong class="table-type-tag">Espacial</strong></td>
                  <td>No reconoce el lugar físico donde se encuentra.</td>
                </tr>
                <tr>
                  <td><strong class="table-type-tag">Autopsíquica</strong></td>
                  <td>No reconoce adecuadamente su identidad, sus antecedentes personales o su rol social.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="orientation-small-note" style="margin-top: 0.65rem;">
            Las definiciones de estas tres formas aparecen en la sección de psicopatología de la orientación de Capponi <span class="citation-tag">(s. f., p. 153)</span>.
          </p>
        </div>

        <!-- 3.7 Poriomanía -->
        <div class="alteration-card">
          <div class="alteration-header">
            <span class="alteration-num">3.7</span>
            <h4 class="alteration-title">Poriomanía</h4>
          </div>
          <p class="orientation-p">
            Se describe como una deambulación automática, sin rumbo definido y con conciencia disminuida de la conducta, seguida en ocasiones de recuerdo incompleto de lo ocurrido. En el material de estudio se relaciona especialmente con fenómenos de origen epiléptico.
          </p>
          <div class="orientation-clinical-alert">
            <strong>Nota de Valoración:</strong> Conviene considerarla una manifestación clínica que requiere valoración neurológica y contextual, no una prueba aislada de desorientación.
          </div>
        </div>
      </section>

      <!-- Botón inferior para evaluación -->
      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta" id="btn-goto-orientation-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Evaluación para trastorno de orientación</strong>
            <span class="cta-sub">Abrir protocolo estructurado de preguntas y exploración clínica de las 4 dimensiones</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `;
}

function getOrientationEvaluationDocHtml() {
  return `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">🧬 ÁREA: SEMIOLOGÍA</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación para trastorno de orientación</h2>
            <p class="orientation-authors-meta">Exploración Clínica Directa del Estado Mental • 4 Dimensiones</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-orientation-def">
            ← Ver Definición y Psicopatología
          </button>
        </div>
      </div>

      <!-- 4. ¿Cómo se evalúa la orientación? -->
      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 4</div>
        <h3 class="orientation-sec-title">4. ¿Cómo se evalúa la orientación?</h3>
        <p class="orientation-lead-p">
          La orientación se explora mediante una <strong>entrevista clínica directa</strong>, observando tanto las respuestas como la coherencia de estas con la situación real.
        </p>

        <div class="orientation-eval-step-header">
          <span class="step-badge">Paso 1</span>
          <h4 class="step-title">Evaluar las cuatro dimensiones</h4>
        </div>

        <div class="eval-dimensions-grid">
          <!-- A. Orientación personal -->
          <div class="eval-card eval-personal">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">👤</div>
              <div>
                <h5 class="eval-card-name">A. Orientación personal</h5>
                <span class="eval-card-sub">Dimensión Autopsíquica</span>
              </div>
            </div>
            <div class="eval-card-body">
              <span class="eval-questions-label">Preguntas de evaluación directa:</span>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Cómo se llama?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Cuántos años tiene?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Puede contarme algunos datos de su historia personal?</span>
              </div>
            </div>
          </div>

          <!-- B. Orientación temporal -->
          <div class="eval-card eval-temporal">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">📅</div>
              <div>
                <h5 class="eval-card-name">B. Orientación temporal</h5>
                <span class="eval-card-sub">Dimensión Alopsíquica</span>
              </div>
            </div>
            <div class="eval-card-body">
              <span class="eval-questions-label">Preguntas de evaluación directa:</span>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Qué día es hoy?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿En qué mes y año estamos?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Es de mañana, tarde o noche?</span>
              </div>
            </div>
          </div>

          <!-- C. Orientación espacial -->
          <div class="eval-card eval-spatial">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">📍</div>
              <div>
                <h5 class="eval-card-name">C. Orientación espacial</h5>
                <span class="eval-card-sub">Dimensión Alopsíquica</span>
              </div>
            </div>
            <div class="eval-card-body">
              <span class="eval-questions-label">Preguntas de evaluación directa:</span>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿En qué país y ciudad estamos?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Dónde estamos ahora?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Qué tipo de establecimiento es este?</span>
              </div>
            </div>
          </div>

          <!-- D. Orientación situacional -->
          <div class="eval-card eval-situational">
            <div class="eval-card-header">
              <div class="eval-card-icon-wrap">🎯</div>
              <div>
                <h5 class="eval-card-name">D. Orientación situacional</h5>
                <span class="eval-card-sub">Dimensión Contextual</span>
              </div>
            </div>
            <div class="eval-card-body">
              <span class="eval-questions-label">Preguntas de evaluación directa:</span>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Por qué está aquí?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Qué está sucediendo en este momento?</span>
              </div>
              <div class="eval-question-bubble">
                <span class="q-bullet">🔹</span>
                <span class="q-text">¿Cuál es el motivo de su consulta o ingreso?</span>
              </div>
            </div>
          </div>
        </div>

        <div class="orientation-clinical-note" style="margin-top: 1.25rem;">
          📋 <strong>Criterio Clínico Operativo:</strong>
          Describir con precisión qué dimensión está afectada, el grado de alteración y el contexto en que aparece. No establecer un diagnóstico a partir de una sola respuesta; valorar consistencia con conciencia, atención y memoria.
        </div>
      </section>

      <!-- Botón inferior para regresar a definición -->
      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-def">
          <span class="cta-icon">🧭</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a La orientación (Definición & Semiología)</strong>
            <span class="cta-sub">Consultar las alteraciones nosológicas, desorientación orgánica, amnésica y delirante</span>
          </div>
          <span class="cta-arrow">←</span>
        </button>
      </div>
    </div>
  `;
}

class LibraryController {
  constructor() {
    this.searchInput = document.getElementById('library-search-input');
    this.searchClear = document.getElementById('library-search-clear');
    this.chips = document.querySelectorAll('.lib-chip');
    this.cardsGrid = document.getElementById('library-cards-grid');
    this.countBadge = document.getElementById('library-count-badge');
    this.titleEl = document.getElementById('library-title');

    // Modal elements (Resource Inspection)
    this.modal = document.getElementById('modal-resource-backdrop');
    this.modalTitle = document.getElementById('modal-resource-title');
    this.modalBadge = document.getElementById('modal-resource-badge');
    this.modalIcon = document.getElementById('modal-resource-icon');
    this.modalContent = document.getElementById('modal-resource-content');
    this.modalClose = document.getElementById('btn-close-resource-modal');
    this.modalFooterClose = document.getElementById('btn-close-resource-footer');
    this.btnModalOpenPdf = document.getElementById('btn-modal-open-pdf');

    // Native PDF Reader Modal elements (PDF.js High-DPI Canvas Engine)
    this.pdfModal = document.getElementById('modal-pdf-reader-backdrop');
    this.pdfTitle = document.getElementById('pdf-reader-title');
    this.pdfAuthor = document.getElementById('pdf-reader-author');
    this.pdfChapterSelect = document.getElementById('pdf-chapter-select');
    this.pdfPagesTag = document.getElementById('pdf-reader-pages-tag');
    this.btnClosePdf = document.getElementById('btn-close-pdf-reader');
    this.btnPdfFullscreen = document.getElementById('btn-pdf-toggle-fullscreen');
    this.btnPdfExternalTab = document.getElementById('btn-pdf-external-tab');
    this.btnPdfPrev = document.getElementById('btn-pdf-prev-page');
    this.btnPdfNext = document.getElementById('btn-pdf-next-page');
    this.pdfPageInput = document.getElementById('pdf-page-input');
    this.pdfPageTotalLabel = document.getElementById('pdf-page-total-label');
    this.btnPdfZoomOut = document.getElementById('btn-pdf-zoom-out');
    this.btnPdfZoomIn = document.getElementById('btn-pdf-zoom-in');
    this.btnPdfFitWidth = document.getElementById('btn-pdf-fit-width');
    this.pdfZoomBadge = document.getElementById('pdf-zoom-badge');
    this.pdfStatusText = document.getElementById('pdf-reader-status-text');
    this.btnPdfDownload = document.getElementById('btn-pdf-download');
    this.pdfCanvas = document.getElementById('pdf-render-canvas');
    this.pdfViewport = document.getElementById('pdf-reader-frame-container');
    this.pdfLoading = document.getElementById('pdf-page-loading');
    this.pdfLoadingText = document.getElementById('pdf-loading-text');
    this.btnTouchPrev = document.getElementById('btn-touch-edge-prev');
    this.btnTouchNext = document.getElementById('btn-touch-edge-next');
    this.pdfTouchHint = document.getElementById('pdf-touch-swipe-hint');

    this.currentPage = 1;
    this.totalPages = 234;
    this.currentZoom = 100;
    this.pdfDoc = null;
    this.pdfDocUrl = null;
    this.isRendering = false;
    this.renderTask = null;
    this.pendingPage = null;

    // Mobile / Tablet Touch Swipe Tracking State
    this.touchStartX = null;
    this.touchStartY = null;
    this.touchStartTime = 0;
    this.isTouchSwiping = false;
    this.swipeHintTimeout = null;

    this.currentCategory = 'all';
    this.currentSearch = '';
    this.currentInspectedResource = null;
    this.currentPdfBook = null;

    // Alphabetical Sorting & Transition State
    this.sortBtn = document.getElementById('btn-library-sort');
    this.sortLabel = document.getElementById('library-sort-label');
    this.sortBadge = document.getElementById('library-sort-badge');
    this.sortIcon = document.getElementById('library-sort-icon');
    this.currentSort = 'none'; // 'none' (default), 'asc' (A → Z), 'desc' (Z → A)
    this.isReordering = false;

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Alphabetical Sort Button trigger
    if (this.sortBtn) {
      this.sortBtn.addEventListener('click', () => {
        this.cycleSort();
      });
    }

    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearch = (e.target.value || '').trim().toLowerCase();
        if (this.searchClear) {
          this.searchClear.style.display = this.currentSearch ? 'block' : 'none';
        }
        this.render();
      });
    }

    // Search clear button
    if (this.searchClear) {
      this.searchClear.addEventListener('click', () => {
        if (this.searchInput) {
          this.searchInput.value = '';
          this.searchInput.focus();
        }
        this.currentSearch = '';
        this.searchClear.style.display = 'none';
        this.render();
      });
    }

    // Category chips
    this.chips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentCategory = chip.dataset.category || 'all';
        this.render();
      });
    });

    // Modal close triggers
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    if (this.modalFooterClose) {
      this.modalFooterClose.addEventListener('click', () => this.closeModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    // Modal button: Open Native PDF Reader
    if (this.btnModalOpenPdf) {
      this.btnModalOpenPdf.addEventListener('click', () => {
        if (this.currentInspectedResource && this.currentInspectedResource.pdfUrl) {
          this.closeModal();
          this.openPdfReader(this.currentInspectedResource, 1);
        }
      });
    }

    // PDF Reader controls
    if (this.btnClosePdf) {
      this.btnClosePdf.addEventListener('click', () => this.closePdfReader());
    }
    if (this.pdfModal) {
      this.pdfModal.addEventListener('click', (e) => {
        if (e.target === this.pdfModal) this.closePdfReader();
      });
    }

    if (this.btnPdfFullscreen) {
      this.btnPdfFullscreen.addEventListener('click', () => {
        const card = this.pdfModal?.querySelector('.pdf-reader-modal-card');
        if (card) {
          card.classList.toggle('is-fullscreen');
          this.btnPdfFullscreen.textContent = card.classList.contains('is-fullscreen') ? '🗗' : '⛶';
        }
      });
    }

    if (this.pdfChapterSelect) {
      this.pdfChapterSelect.addEventListener('change', (e) => {
        const page = parseInt(e.target.value, 10) || 1;
        this.jumpPdfToPage(page);
      });
    }

    // Page navigation stepper
    if (this.btnPdfPrev) {
      this.btnPdfPrev.addEventListener('click', () => {
        this.jumpPdfToPage(this.currentPage - 1, 'prev');
      });
    }

    if (this.btnPdfNext) {
      this.btnPdfNext.addEventListener('click', () => {
        this.jumpPdfToPage(this.currentPage + 1, 'next');
      });
    }

    // Touch edge tap navigation buttons (‹ and ›)
    if (this.btnTouchPrev) {
      this.btnTouchPrev.addEventListener('click', () => {
        this.jumpPdfToPage(this.currentPage - 1, 'prev');
      });
    }

    if (this.btnTouchNext) {
      this.btnTouchNext.addEventListener('click', () => {
        this.jumpPdfToPage(this.currentPage + 1, 'next');
      });
    }

    if (this.pdfPageInput) {
      this.pdfPageInput.addEventListener('change', (e) => {
        const page = parseInt(e.target.value, 10) || 1;
        this.jumpPdfToPage(page);
      });
      this.pdfPageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const page = parseInt(this.pdfPageInput.value, 10) || 1;
          this.jumpPdfToPage(page);
        }
      });
    }

    // Zoom controls
    if (this.btnPdfZoomOut) {
      this.btnPdfZoomOut.addEventListener('click', () => {
        this.changeZoom(-15);
      });
    }

    if (this.btnPdfZoomIn) {
      this.btnPdfZoomIn.addEventListener('click', () => {
        this.changeZoom(15);
      });
    }

    if (this.btnPdfFitWidth) {
      this.btnPdfFitWidth.addEventListener('click', () => {
        this.fitWidth();
      });
    }

    // Setup touch swipe gesture handling on PDF container
    this.setupTouchSwipeGestures();

    // Escape and Arrow keys listener
    window.addEventListener('keydown', (e) => {
      if (this.pdfModal && this.pdfModal.classList.contains('active')) {
        if (e.key === 'Escape') {
          this.closePdfReader();
        } else if (e.key === 'ArrowLeft') {
          this.jumpPdfToPage(this.currentPage - 1, 'prev');
        } else if (e.key === 'ArrowRight') {
          this.jumpPdfToPage(this.currentPage + 1, 'next');
        }
      } else if (this.modal && this.modal.classList.contains('active')) {
        if (e.key === 'Escape') {
          this.closeModal();
        }
      }
    });
  }

  onActivated() {
    triggerKineticTitleAnimation(this.titleEl);
    this.render();
  }

  cycleSort() {
    if (this.isReordering) return;
    // 3-state cycle: none (default curated) -> asc (A-Z) -> desc (Z-A) -> none (default)
    let next = 'asc';
    if (this.currentSort === 'asc') {
      next = 'desc';
    } else if (this.currentSort === 'desc') {
      next = 'none';
    } else {
      next = 'asc';
    }
    this.setSort(next);
  }

  setSort(sortType) {
    if (this.isReordering) return;
    this.isReordering = true;
    this.currentSort = sortType;
    this.updateSortButtonUI();

    // 1. Smoothly blur out the current cards grid
    if (this.cardsGrid) {
      this.cardsGrid.classList.add('is-reordering');
    }

    // 2. Wait for peak blur, then reorder and re-render
    setTimeout(() => {
      this.render();

      // 3. Smoothly blur back in with new order
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (this.cardsGrid) {
            this.cardsGrid.classList.remove('is-reordering');
          }
          this.isReordering = false;
        });
      });
    }, 180);
  }

  updateSortButtonUI() {
    if (!this.sortBtn) return;

    if (this.currentSort === 'asc') {
      this.sortBtn.classList.add('active-sort');
      if (this.sortLabel) this.sortLabel.textContent = 'Orden: A → Z';
      if (this.sortBadge) this.sortBadge.textContent = 'A-Z';
      if (this.sortIcon) {
        this.sortIcon.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="6" x2="16" y2="6"></line>
            <line x1="4" y1="12" x2="12" y2="12"></line>
            <line x1="4" y1="18" x2="8" y2="18"></line>
            <polyline points="15 15 18 18 21 15"></polyline>
            <line x1="18" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      }
      this.sortBtn.setAttribute('title', 'Orden alfabético ascendente (A → Z). Clic para ordenar descendente (Z → A)');
    } else if (this.currentSort === 'desc') {
      this.sortBtn.classList.add('active-sort');
      if (this.sortLabel) this.sortLabel.textContent = 'Orden: Z → A';
      if (this.sortBadge) this.sortBadge.textContent = 'Z-A';
      if (this.sortIcon) {
        this.sortIcon.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="6" x2="8" y2="6"></line>
            <line x1="4" y1="12" x2="12" y2="12"></line>
            <line x1="4" y1="18" x2="16" y2="18"></line>
            <polyline points="15 9 18 6 21 9"></polyline>
            <line x1="18" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      }
      this.sortBtn.setAttribute('title', 'Orden alfabético descendente (Z → A). Clic para restablecer orden original');
    } else {
      this.sortBtn.classList.remove('active-sort');
      if (this.sortLabel) this.sortLabel.textContent = 'Ordenar: A → Z';
      if (this.sortBadge) this.sortBadge.textContent = 'A-Z';
      if (this.sortIcon) {
        this.sortIcon.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="6" x2="16" y2="6"></line>
            <line x1="4" y1="12" x2="12" y2="12"></line>
            <line x1="4" y1="18" x2="8" y2="18"></line>
            <polyline points="15 15 18 18 21 15"></polyline>
            <line x1="18" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      }
      this.sortBtn.setAttribute('title', 'Clic para ordenar alfabéticamente (A → Z)');
    }
  }

  render() {
    if (!this.cardsGrid) return;

    const filtered = LIBRARY_CATALOG.filter(item => {
      let matchesCat = false;
      if (this.currentCategory === 'all' || this.currentCategory === 'books') {
        matchesCat = true;
      } else if (this.currentCategory === 'psicopatologia') {
        matchesCat = (item.areas || []).includes('PSICOPATOLOGÍA') || item.category === 'psicopatologia' || (item.categories || []).some(c => c.toLowerCase().includes('psicopatología'));
      } else if (this.currentCategory === 'semiologia') {
        matchesCat = (item.areas || []).includes('SEMIOLOGÍA') || (item.categories || []).some(c => c.toLowerCase().includes('semiología'));
      } else if (this.currentCategory === 'procesos') {
        matchesCat = (item.areas || []).includes('PROCESOS PSICOLÓGICOS') || (item.categories || []).some(c => c.toLowerCase().includes('procesos'));
      } else if (this.currentCategory === 'evaluacion') {
        matchesCat = (item.areas || []).includes('EVALUACIÓN CLÍNICA') || (item.categories || []).some(c => c.toLowerCase().includes('evaluación'));
      } else {
        matchesCat = item.category === this.currentCategory;
      }
      if (!matchesCat) return false;

      if (!this.currentSearch) return true;
      const haystack = `${item.title} ${item.code} ${item.author} ${item.summary} ${item.categoryLabel} ${(item.areas || []).join(' ')} ${(item.topics || []).join(' ')} ${(item.categories || []).join(' ')}`.toLowerCase();
      return haystack.includes(this.currentSearch);
    });

    // Alphabetical Sorting Application
    const sortedList = [...filtered];
    if (this.currentSort === 'asc') {
      sortedList.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base', numeric: true }));
    } else if (this.currentSort === 'desc') {
      sortedList.sort((a, b) => b.title.localeCompare(a.title, 'es', { sensitivity: 'base', numeric: true }));
    }

    // Update count badge
    if (this.countBadge) {
      const count = sortedList.length;
      this.countBadge.textContent = `${count} ${count === 1 ? 'recurso disponible' : 'recursos disponibles'}`;
    }

    if (sortedList.length === 0) {
      this.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem 1.5rem; text-align: center; background: rgba(255,255,255,0.7); border-radius: 20px; border: 1px dashed rgba(0,0,0,0.1);">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 0.75rem;">🔍</span>
          <strong style="font-size: 1.1rem; color: var(--text-primary); display: block; margin-bottom: 0.35rem;">No se encontraron libros</strong>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0 0 1rem 0;">No hay resultados para "${this.currentSearch}". Intenta con Capponi, Belloch, APIR, Psicopatología o Semiología.</p>
          <button type="button" class="btn-row-action" id="btn-empty-clear-search">Limpiar Búsqueda</button>
        </div>
      `;
      const btnClear = document.getElementById('btn-empty-clear-search');
      if (btnClear) {
        btnClear.addEventListener('click', () => {
          if (this.searchInput) this.searchInput.value = '';
          this.currentSearch = '';
          if (this.searchClear) this.searchClear.style.display = 'none';
          this.render();
        });
      }
      return;
    }

    this.cardsGrid.innerHTML = sortedList.map(item => {
      const resolvedCover = LibraryAssetResolver.resolveCoverUrl(item);
      const coverThumbHtml = resolvedCover ? `
        <img src="${resolvedCover}" alt="Portada ${item.title}" class="lib-card-cover-thumb" loading="lazy" />
      ` : '';

      const pdfBtnHtml = item.pdfUrl ? `
        <button type="button" class="lib-btn-read-pdf" data-read-pdf-id="${item.id}" title="Leer en lector nativo de PDF">
          <span>📖</span>
          <span>Leer PDF</span>
        </button>
      ` : '';

      const areasBadgesHtml = (item.areas && item.areas.length > 0) ? item.areas.map(a => `
        <span class="lib-card-area-tag">ÁREA: ${a}</span>
      `).join('') : '';

      const topicsBadgesHtml = (item.topics && item.topics.length > 0) ? `
        <div class="lib-card-topics-wrap">
          ${item.topics.slice(0, 4).map(t => `<span class="lib-topic-chip">${t}</span>`).join('')}
          ${item.topics.length > 4 ? `<span class="lib-topic-chip more">+${item.topics.length - 4} temas más</span>` : ''}
        </div>
      ` : '';

      return `
        <article class="lib-resource-card" data-resource-id="${item.id}">
          <div>
            ${coverThumbHtml}
            <div class="lib-card-top">
              <div class="lib-card-tag-group">
                <span class="lib-card-type-pill">${item.isBook ? '📚 LIBRO' : item.categoryLabel}</span>
                ${areasBadgesHtml}
              </div>
              <span class="lib-card-code">${item.code}</span>
            </div>
            <h3 class="lib-card-title">${item.title}</h3>
            <p class="lib-card-author">${item.author}</p>
            ${item.academicAffiliation ? `<p class="lib-card-affiliation">${item.academicAffiliation}</p>` : ''}
            ${item.isClinicalEntity && item.summary.includes('\n') 
              ? `<div class="lib-card-specs-box">${item.summary.split('\n').map(line => {
                  const idx = line.indexOf(':');
                  if (idx > -1) {
                    const label = line.slice(0, idx);
                    const text = line.slice(idx + 1);
                    return `<div class="lib-card-spec-line"><strong>${label}:</strong><span>${text}</span></div>`;
                  }
                  return `<div class="lib-card-spec-line">${line}</div>`;
                }).join('')}</div>` 
              : `<p class="lib-card-desc">${item.summary}</p>`}
            ${topicsBadgesHtml}
          </div>
          <div class="lib-card-footer">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-tertiary);">${item.badge}</span>
            <div style="display: flex; gap: 0.45rem; align-items: center;">
              ${pdfBtnHtml}
              <button type="button" class="lib-btn-inspect" data-inspect-id="${item.id}">
                <span>${item.isEvaluationProtocol ? 'Explorar Protocolo' : (item.isClinicalEntity ? 'Ver Contenido' : 'Explorar Ficha')}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Bind card inspect clicks
    const inspectButtons = this.cardsGrid.querySelectorAll('[data-inspect-id]');
    inspectButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-inspect-id');
        this.openResourceModal(id);
      });
    });

    // Bind direct PDF read clicks from cards
    const readPdfButtons = this.cardsGrid.querySelectorAll('[data-read-pdf-id]');
    readPdfButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-read-pdf-id');
        const book = LIBRARY_CATALOG.find(x => x.id === id);
        if (book) this.openPdfReader(book, 1);
      });
    });

    const cards = this.cardsGrid.querySelectorAll('.lib-resource-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-resource-id');
        this.openResourceModal(id);
      });
      card.addEventListener('dblclick', (e) => {
        e.preventDefault();
        const id = card.getAttribute('data-resource-id');
        this.openResourceModal(id);
      });
    });
  }

  openResourceModal(id) {
    const item = LIBRARY_CATALOG.find(x => x.id === id);
    if (!item || !this.modal) return;

    this.currentInspectedResource = item;

    if (this.modalTitle) this.modalTitle.textContent = item.title;
    if (this.modalBadge) this.modalBadge.textContent = item.badge;
    if (this.modalIcon) this.modalIcon.textContent = item.icon;

    const modalCard = this.modal.querySelector('.library-preview-card');
    if (modalCard) {
      modalCard.classList.toggle('is-book', Boolean(item.coverImage));
    }

    // Toggle modal footer PDF button
    if (this.btnModalOpenPdf) {
      if (item.pdfUrl) {
        this.btnModalOpenPdf.style.display = 'inline-flex';
        this.btnModalOpenPdf.textContent = `📖 Leer en Lector PDF Nativo`;
      } else {
        this.btnModalOpenPdf.style.display = 'none';
      }
    }

    if (this.modalContent) {
      const d = item.details || {};

      if (item.id === 'la-memoria') {
        this.modalContent.innerHTML = getMemoryDocHtml();
        const btnGotoEval = this.modalContent.querySelector('#btn-goto-memory-eval');
        if (btnGotoEval) {
          btnGotoEval.addEventListener('click', () => {
            this.openResourceModal('evaluacion-trastorno-memoria');
          });
        }
        // Jump buttons to books
        this.modalContent.querySelectorAll('[data-book-id]').forEach(btn => {
          btn.addEventListener('click', () => {
            const bookId = btn.getAttribute('data-book-id');
            const page = parseInt(btn.getAttribute('data-page'), 10) || 1;
            const book = LIBRARY_CATALOG.find(x => x.id === bookId);
            if (book) {
              this.closeModal();
              this.openPdfReader(book, page);
            }
          });
        });
      } else if (item.id === 'evaluacion-trastorno-memoria') {
        this.modalContent.innerHTML = getMemoryEvaluationDocHtml();
        const btnBackDef = this.modalContent.querySelector('#btn-back-memory-def');
        if (btnBackDef) {
          btnBackDef.addEventListener('click', () => {
            this.openResourceModal('la-memoria');
          });
        }
        const btnBottomBackDef = this.modalContent.querySelector('#btn-bottom-back-memory-def');
        if (btnBottomBackDef) {
          btnBottomBackDef.addEventListener('click', () => {
            this.openResourceModal('la-memoria');
          });
        }
        // Jump buttons to books
        this.modalContent.querySelectorAll('[data-book-id]').forEach(btn => {
          btn.addEventListener('click', () => {
            const bookId = btn.getAttribute('data-book-id');
            const page = parseInt(btn.getAttribute('data-page'), 10) || 1;
            const book = LIBRARY_CATALOG.find(x => x.id === bookId);
            if (book) {
              this.closeModal();
              this.openPdfReader(book, page);
            }
          });
        });
      } else if (item.id === 'la-orientacion') {
        this.modalContent.innerHTML = getOrientationDocHtml();
        const btnGotoEval = this.modalContent.querySelector('#btn-goto-orientation-eval');
        if (btnGotoEval) {
          btnGotoEval.addEventListener('click', () => {
            this.openResourceModal('evaluacion-trastorno-orientacion');
          });
        }
      } else if (item.id === 'evaluacion-trastorno-orientacion') {
        this.modalContent.innerHTML = getOrientationEvaluationDocHtml();
        const btnBackDef = this.modalContent.querySelector('#btn-back-orientation-def');
        if (btnBackDef) {
          btnBackDef.addEventListener('click', () => {
            this.openResourceModal('la-orientacion');
          });
        }
        const btnBottomBackDef = this.modalContent.querySelector('#btn-bottom-back-def');
        if (btnBottomBackDef) {
          btnBottomBackDef.addEventListener('click', () => {
            this.openResourceModal('la-orientacion');
          });
        }
      } else if (item.coverImage || item.prologue || item.indexTree) {
        const resolvedCover = LibraryAssetResolver.resolveCoverUrl(item);
        const resolvedPdf = LibraryAssetResolver.resolvePdfUrl(item);
        const coverHtml = resolvedCover ? `
          <div class="lib-book-cover-showcase">
            <img src="${resolvedCover}" alt="Portada de ${item.title}" class="book-cover-img" />
            <div class="book-showcase-meta">
              <div class="modal-areas-row">
                <span class="modal-type-pill">📚 LIBRO DE TEXTO CLÍNICO</span>
                ${(item.areas || []).map(a => `<span class="modal-area-pill">🧬 ÁREA: ${a}</span>`).join('')}
              </div>
              <h3 class="book-showcase-title">${item.title}</h3>
              <p class="book-showcase-author">${item.author}</p>
              ${item.academicAffiliation ? `<p class="book-showcase-affiliation">${item.academicAffiliation}</p>` : ''}
              <div style="margin-top: 0.75rem; display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
                <button type="button" class="primary-gradient-btn" id="btn-showcase-read-pdf" style="padding: 0.65rem 1.4rem; font-size: 0.86rem;">
                  📖 Abrir Lector Nativo de PDF (${item.badge ? (item.badge.split('•')[1]?.trim() || item.badge) : 'Documento Completo'})
                </button>
                <a href="${resolvedPdf}" download="${item.title}.pdf" class="btn-row-action" style="padding: 0.6rem 1rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
                  ⬇ Descargar PDF
                </a>
              </div>
            </div>
          </div>
        ` : '';

        const areasHtml = item.areas && item.areas.length > 0 ? `
          <div style="margin-top: 0.35rem;">
            <h4 class="preview-section-title">Áreas de Especialidad</h4>
            <div class="modal-areas-row">
              ${item.areas.map(a => `<span class="modal-area-pill">🧬 ÁREA: ${a}</span>`).join('')}
            </div>
          </div>
        ` : '';

        const topicsHtml = item.topics && item.topics.length > 0 ? `
          <div style="margin-top: 0.35rem;">
            <h4 class="preview-section-title">Ejes Temáticos y Contenidos que Abarca (Índice General)</h4>
            <div class="book-categories-wrap">
              ${item.topics.map(t => `<span class="book-category-pill">📌 ${t}</span>`).join('')}
            </div>
          </div>
        ` : '';

        const prologueHtml = item.prologue ? `
          <div class="book-prologue-card">
            <div class="book-prologue-header">
              <h4 class="book-prologue-title">📜 Prólogo de la Obra</h4>
              <span class="book-prologue-author">${item.prologue.author} • ${item.prologue.date}</span>
            </div>
            <div class="book-prologue-body">
              ${item.prologue.paragraphs.map(p => `<p class="book-prologue-p">${p}</p>`).join('')}
            </div>
          </div>
        ` : '';

        const indexHtml = item.indexTree && item.indexTree.length > 0 ? `
          <h4 class="preview-section-title">Índice General del Texto (Navegación Interactiva al Lector PDF)</h4>
          <div class="book-index-tree">
            ${item.indexTree.map(part => `
              <div class="book-index-part">
                <div class="book-index-part-title">
                  <span>${part.part}</span>
                  ${part.page ? `<button type="button" class="book-page-jump-btn" data-jump-page="${part.page}">Ir a Pág. ${part.page} →</button>` : ''}
                </div>
                ${part.items ? part.items.map(it => `
                  <div>
                    <div class="book-index-item">
                      <span>${it.title}</span>
                      ${it.page ? `<button type="button" class="book-page-jump-btn" data-jump-page="${it.page}">Pág. ${it.page} →</button>` : ''}
                    </div>
                    ${it.subs ? it.subs.map(sub => `
                      <div class="book-index-subitem">
                        <span>${sub.title}</span>
                        ${sub.page ? `<button type="button" class="book-page-jump-btn" data-jump-page="${sub.page}">Pág. ${sub.page} →</button>` : ''}
                      </div>
                    `).join('') : ''}
                  </div>
                `).join('') : ''}
              </div>
            `).join('')}
          </div>
        ` : '';

        this.modalContent.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${coverHtml}
            ${areasHtml}
            ${topicsHtml}

            <p style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.6; margin: 0.35rem 0;">
              ${item.summary}
            </p>

            ${prologueHtml}
            ${indexHtml}

            <div style="margin-top: 0.65rem; padding: 1rem 1.2rem; background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; border-radius: 0 14px 14px 0;">
              <strong style="font-size: 0.82rem; text-transform: uppercase; color: #1d4ed8; display: block; margin-bottom: 0.25rem; letter-spacing: 0.04em;">Recomendación Clínica PsiOS</strong>
              <p style="font-size: 0.86rem; color: var(--text-primary); line-height: 1.55; margin: 0;">
                ${d.clinicalGuidance || 'Lectura formativa imprescindible para la discriminación fenomenológica exacta de síntomas y cuadros psiquiátricos.'}
              </p>
            </div>
          </div>
        `;

        // Bind jump buttons to open the PDF reader at that exact page
        const jumpBtns = this.modalContent.querySelectorAll('[data-jump-page]');
        jumpBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const page = parseInt(btn.getAttribute('data-jump-page'), 10) || 1;
            this.closeModal();
            this.openPdfReader(item, page);
          });
        });

        const showcaseReadBtn = document.getElementById('btn-showcase-read-pdf');
        if (showcaseReadBtn) {
          showcaseReadBtn.addEventListener('click', () => {
            this.closeModal();
            this.openPdfReader(item, 1);
          });
        }
      } else {
        // Standard diagnostic manual / test inspection
        let sectionsHtml = '';
        if (d.keySections && d.keySections.length > 0) {
          sectionsHtml = `
            <h4 class="preview-section-title">Estructura y Dimensiones Evaluadas</h4>
            <div class="preview-pill-list">
              ${d.keySections.map(s => `<span class="preview-pill-item">${s}</span>`).join('')}
            </div>
          `;
        }

        let scoringHtml = '';
        if (d.scoringTable) {
          scoringHtml = `
            <h4 class="preview-section-title">Puntos de Corte y Baremos Clínicos</h4>
            <p style="font-size: 0.84rem; color: var(--text-primary); background: rgba(0,0,0,0.03); padding: 0.75rem 1rem; border-radius: 12px; margin-bottom: 0.75rem; font-weight: 600;">
              ${d.scoringTable}
            </p>
          `;
        }

        this.modalContent.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            <p style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.6; margin: 0;">
              ${item.summary}
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; padding: 0.9rem; background: rgba(255,255,255,0.7); border: 1px solid rgba(0,0,0,0.05); border-radius: 14px;">
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--text-tertiary); display: block;">Autoría</span>
                <strong style="font-size: 0.85rem; color: var(--text-primary);">${item.author}</strong>
              </div>
              ${d.edition ? `
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--text-tertiary); display: block;">Edición / Versión</span>
                <strong style="font-size: 0.85rem; color: var(--text-primary);">${d.edition}</strong>
              </div>` : ''}
              ${d.duration ? `
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--text-tertiary); display: block;">Tiempo de Aplicación</span>
                <strong style="font-size: 0.85rem; color: var(--text-primary);">${d.duration}</strong>
              </div>` : ''}
            </div>

            ${scoringHtml}
            ${sectionsHtml}

            <div style="margin-top: 0.5rem; padding: 0.95rem 1.1rem; background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; border-radius: 0 12px 12px 0;">
              <strong style="font-size: 0.8rem; text-transform: uppercase; color: #1d4ed8; display: block; margin-bottom: 0.2rem; letter-spacing: 0.04em;">Recomendación Clínica PsiOS</strong>
              <p style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.5; margin: 0;">
                ${d.clinicalGuidance || 'Utilizar como respaldo formal contrastando con la entrevista clínica inicial.'}
              </p>
            </div>
          </div>
        `;
      }
    }

    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
  }

  // --- NATIVE PDF READER ENGINE (PDF.js High-DPI Canvas & Vector Navigation) ---
  async getPdfJsLib() {
    if (!this.pdfjsLib) {
      this.pdfjsLib = await import('pdfjs-dist');
      if (typeof window !== 'undefined') {
        const basePath = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : './';
        this.pdfjsLib.GlobalWorkerOptions.workerSrc = `${basePath.replace(/\/+$/, '')}/pdf.worker.min.mjs`;
      }
    }
    return this.pdfjsLib;
  }

  async openPdfReader(book, targetPage = 1) {
    if (!this.pdfModal || !book) return;
    this.currentPdfBook = book;
    this.currentPage = targetPage;

    // Pause 3D renderer to free GPU during reading
    window.psios3D?.pause();

    if (this.pdfTitle) this.pdfTitle.textContent = book.title;
    if (this.pdfAuthor) this.pdfAuthor.textContent = book.author;
    if (this.pdfPagesTag) this.pdfPagesTag.textContent = book.badge ? (book.badge.split('•')[1]?.trim() || book.badge) : 'Documento';

    // Resolves local path in desktop (0-cloud query) or cloud URL for web
    const resolvedUrl = LibraryAssetResolver.resolvePdfUrl(book);
    const encodedPdf = resolvedUrl;
    if (this.btnPdfExternalTab) {
      this.btnPdfExternalTab.href = encodedPdf;
    }
    if (this.btnPdfDownload) {
      this.btnPdfDownload.href = encodedPdf;
      this.btnPdfDownload.setAttribute('download', `${book.title}.pdf`);
    }

    this.populatePdfChapters(book);

    this.pdfModal.classList.add('active');
    this.pdfModal.setAttribute('aria-hidden', 'false');

    if (!this.pdfDoc || this.pdfDocUrl !== resolvedUrl) {
      await this.loadPdfDocument(resolvedUrl);
    }

    this.jumpPdfToPage(targetPage);
    this.showSwipeHint();
  }

  populatePdfChapters(book) {
    if (!this.pdfChapterSelect) return;
    if (book.chapters && book.chapters.length > 0) {
      this.pdfChapterSelect.innerHTML = book.chapters.map(c => `
        <option value="${c.page}">${c.title}</option>
      `).join('');
    }
  }

  async loadPdfDocument(url) {
    if (this.pdfLoading) {
      this.pdfLoading.style.display = 'inline-flex';
      if (this.pdfLoadingText) this.pdfLoadingText.textContent = 'Cargando lector y documento...';
    }
    try {
      this.pdfDocUrl = url;
      const pdfjs = await this.getPdfJsLib();
      const basePath = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : './';
      const loadingTask = pdfjs.getDocument({
        url,
        standardFontDataUrl: `${basePath.replace(/\/+$/, '')}/standard_fonts/`
      });
      this.pdfDoc = await loadingTask.promise;
      this.totalPages = this.pdfDoc.numPages || 234;
      if (this.pdfPageInput) {
        this.pdfPageInput.max = this.totalPages;
      }
      if (this.pdfPageTotalLabel) {
        this.pdfPageTotalLabel.textContent = `/ ${this.totalPages}`;
      }
    } catch (err) {
      console.error('Error cargando documento PDF con PDF.js:', err);
      if (this.pdfStatusText) {
        this.pdfStatusText.textContent = `Aviso: ${err.message || 'Error al procesar PDF'}`;
      }
    } finally {
      if (this.pdfLoading) {
        this.pdfLoading.style.display = 'none';
      }
    }
  }

  jumpPdfToPage(targetPage, direction = null) {
    const page = Math.max(1, Math.min(this.totalPages, targetPage));
    const isDifferent = page !== this.currentPage;
    this.currentPage = page;

    if (this.pdfPageInput) {
      this.pdfPageInput.value = page;
    }

    if (this.pdfStatusText) {
      this.pdfStatusText.textContent = `Documento: ${this.currentPdfBook?.title || 'Documento'} (${this.currentPdfBook?.author || ''}) • Página ${page} de ${this.totalPages}`;
    }

    if (this.pdfChapterSelect) {
      const options = Array.from(this.pdfChapterSelect.options);
      let closestVal = options[0]?.value;
      for (const opt of options) {
        const val = parseInt(opt.value, 10);
        if (val <= page) {
          closestVal = opt.value;
        }
      }
      if (closestVal) this.pdfChapterSelect.value = closestVal;
    }

    // Smooth page flip slide animation
    if (direction && this.pdfCanvas && isDifferent) {
      this.pdfCanvas.classList.remove('flip-anim-next', 'flip-anim-prev');
      void this.pdfCanvas.offsetWidth;
      this.pdfCanvas.classList.add(direction === 'next' ? 'flip-anim-next' : 'flip-anim-prev');
      setTimeout(() => {
        if (this.pdfCanvas) {
          this.pdfCanvas.classList.remove('flip-anim-next', 'flip-anim-prev');
        }
      }, 260);
    }

    this.renderPage(page);
  }

  async renderPage(pageNum) {
    if (!this.pdfDoc || !this.pdfCanvas) return;

    if (this.isRendering) {
      this.pendingPage = pageNum;
      if (this.renderTask) {
        try { this.renderTask.cancel(); } catch (e) {}
      }
      return;
    }

    this.isRendering = true;
    if (this.pdfLoading) {
      this.pdfLoading.style.display = 'inline-flex';
      if (this.pdfLoadingText) this.pdfLoadingText.textContent = `Página ${pageNum} cargando...`;
    }

    try {
      const page = await this.pdfDoc.getPage(pageNum);
      // Clean up previous page object from RAM/VRAM
      if (this.activePdfPage && this.activePdfPage !== page) {
        try { this.activePdfPage.cleanup(); } catch (e) {}
      }
      this.activePdfPage = page;

      const canvas = this.pdfCanvas;
      const ctx = canvas.getContext('2d', { alpha: false });

      const scale = (this.currentZoom / 100);
      const viewport = page.getViewport({ scale });

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      ctx.save();
      ctx.scale(dpr, dpr);

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      this.renderTask = page.render(renderContext);
      await this.renderTask.promise;
      ctx.restore();

      if (this.pdfZoomBadge) {
        this.pdfZoomBadge.textContent = `${this.currentZoom}%`;
      }

      if (this.pdfViewport) {
        this.pdfViewport.scrollTop = 0;
      }
    } catch (err) {
      if (err?.name !== 'RenderingCancelledException') {
        console.error('Error renderizando página PDF:', err);
      }
    } finally {
      this.isRendering = false;
      if (this.pdfLoading) {
        this.pdfLoading.style.display = 'none';
      }
      if (this.pendingPage !== null) {
        const next = this.pendingPage;
        this.pendingPage = null;
        this.renderPage(next);
      }
    }
  }

  changeZoom(deltaPercent) {
    const nextZoom = Math.max(50, Math.min(250, this.currentZoom + deltaPercent));
    if (nextZoom !== this.currentZoom) {
      this.currentZoom = nextZoom;
      this.renderPage(this.currentPage);
    }
  }

  fitWidth() {
    if (!this.pdfDoc || !this.pdfViewport) return;
    this.pdfDoc.getPage(this.currentPage).then(page => {
      const baseVp = page.getViewport({ scale: 1.0 });
      const availableW = Math.max(400, this.pdfViewport.clientWidth - 80);
      const fitScale = availableW / baseVp.width;
      this.currentZoom = Math.round(fitScale * 100);
      this.renderPage(this.currentPage);
    });
  }

  closePdfReader() {
    if (!this.pdfModal) return;
    this.pdfModal.classList.remove('active');
    this.pdfModal.setAttribute('aria-hidden', 'true');
    const card = this.pdfModal.querySelector('.pdf-reader-modal-card');
    if (card) card.classList.remove('is-fullscreen');
    if (this.btnPdfFullscreen) this.btnPdfFullscreen.textContent = '⛶';
    if (this.renderTask) {
      try { this.renderTask.cancel(); } catch (e) {}
    }
    // Release active page memory and clear raster bitmap buffer
    if (this.activePdfPage) {
      try { this.activePdfPage.cleanup(); } catch (e) {}
      this.activePdfPage = null;
    }
    if (this.pdfCanvas) {
      this.pdfCanvas.width = 1;
      this.pdfCanvas.height = 1;
    }
    clearTimeout(this.swipeHintTimeout);
    this.dismissSwipeHint();
    this.currentPdfBook = null;

    // Auto-resume 3D visual engine if returning to Welcome/Splash view
    const appEl = document.getElementById('app');
    if (appEl && !appEl.classList.contains('workspace-mode-active')) {
      window.psios3D?.resume();
    }
  }

  setupTouchSwipeGestures() {
    if (!this.pdfViewport) return;

    // Mobile / Tablet touch events for horizontal page flipping
    this.pdfViewport.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.touchStartTime = Date.now();
      this.isTouchSwiping = false;
    }, { passive: true });

    this.pdfViewport.addEventListener('touchmove', (e) => {
      if (e.touches.length !== 1 || this.touchStartX === null) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = currentX - this.touchStartX;
      const diffY = currentY - this.touchStartY;

      // Discriminate between vertical scrolling and horizontal swipe
      if (!this.isTouchSwiping) {
        if (Math.abs(diffY) > Math.abs(diffX) * 1.15) {
          // Dominant vertical gesture: allow native container scroll
          return;
        }
        if (Math.abs(diffX) > 14 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
          this.isTouchSwiping = true;
          this.dismissSwipeHint();
        }
      }

      if (this.isTouchSwiping && this.pdfCanvas) {
        // Elastic resistance translation during finger drag
        const clampedX = Math.max(-90, Math.min(90, diffX * 0.45));
        this.pdfCanvas.classList.add('touch-swiping');
        this.pdfCanvas.style.transform = `translateX(${clampedX}px)`;
      }
    }, { passive: true });

    const handleTouchEnd = (e) => {
      if (this.pdfCanvas) {
        this.pdfCanvas.classList.remove('touch-swiping');
        this.pdfCanvas.style.transform = '';
      }

      if (this.isTouchSwiping && e.changedTouches && e.changedTouches.length > 0) {
        const finalX = e.changedTouches[0].clientX;
        const diffX = finalX - this.touchStartX;
        const elapsed = Math.max(1, Date.now() - this.touchStartTime);
        const velocity = Math.abs(diffX) / elapsed;

        this.dismissSwipeHint();

        // 45px drag threshold OR 25px fast flick
        if (diffX < -45 || (diffX < -25 && velocity > 0.3)) {
          // Swiped left -> Next page
          if (this.currentPage < this.totalPages) {
            this.jumpPdfToPage(this.currentPage + 1, 'next');
          }
        } else if (diffX > 45 || (diffX > 25 && velocity > 0.3)) {
          // Swiped right -> Previous page
          if (this.currentPage > 1) {
            this.jumpPdfToPage(this.currentPage - 1, 'prev');
          }
        }
      }

      this.touchStartX = null;
      this.touchStartY = null;
      this.isTouchSwiping = false;
    };

    this.pdfViewport.addEventListener('touchend', handleTouchEnd, { passive: true });
    this.pdfViewport.addEventListener('touchcancel', () => {
      if (this.pdfCanvas) {
        this.pdfCanvas.classList.remove('touch-swiping');
        this.pdfCanvas.style.transform = '';
      }
      this.touchStartX = null;
      this.touchStartY = null;
      this.isTouchSwiping = false;
    }, { passive: true });
  }

  showSwipeHint() {
    if (!this.pdfTouchHint) return;
    this.pdfTouchHint.classList.remove('fade-out');
    clearTimeout(this.swipeHintTimeout);
    this.swipeHintTimeout = setTimeout(() => {
      this.dismissSwipeHint();
    }, 4500);
  }

  dismissSwipeHint() {
    if (this.pdfTouchHint && !this.pdfTouchHint.classList.contains('fade-out')) {
      this.pdfTouchHint.classList.add('fade-out');
    }
  }
}

/* ==========================================================================
   7. CLINIC CONTROLLER (Pacientes, Citas, Calendario, Reloj y Sidebar)
   ========================================================================== */
class ClinicController {
  constructor() {
    this.patients = this.loadPatients();
    this.appointments = this.loadAppointments();

    this.titleEl = document.getElementById('clinic-title');
    this.sidebar = document.getElementById('clinic-sidebar');
    this.btnSidebarCollapse = document.getElementById('btn-sidebar-collapse');
    this.btnToggleSidebar = document.getElementById('btn-toggle-sidebar');

    // Sidebar navigation tabs
    this.sidebarTabs = document.querySelectorAll('.sidebar-nav-tab');
    this.subviews = {
      dashboard: document.getElementById('tab-clinic-dashboard'),
      patients: document.getElementById('tab-clinic-patients'),
      appointments: document.getElementById('tab-clinic-appointments')
    };

    // Live clock elements
    this.clockTimeEl = document.getElementById('clock-live-time');
    this.clockDateEl = document.getElementById('clock-live-date');
    this.clockInterval = null;

    // Doctor profile elements
    this.sidebarDocName = document.getElementById('sidebar-doctor-name');
    this.sidebarDocAvatar = document.getElementById('sidebar-doctor-avatar');

    // Patient modal elements
    this.patientModal = document.getElementById('modal-patient-backdrop');
    this.patientForm = document.getElementById('form-add-patient');
    this.patientNameInput = document.getElementById('patient-input-name');
    this.patientBirthInput = document.getElementById('patient-input-birthdate');
    this.patientAgeVal = document.getElementById('patient-age-val');
    this.patientPhoneInput = document.getElementById('patient-input-phone');
    this.patientNotesInput = document.getElementById('patient-input-notes');
    this.errPatientName = document.getElementById('err-patient-name');
    this.errPatientBirth = document.getElementById('err-patient-birthdate');
    this.btnClosePatient = document.getElementById('btn-close-patient-modal');
    this.btnCancelPatient = document.getElementById('btn-cancel-patient-modal');

    // Patient Sheet Modal (Ficha Clínica Expandida)
    this.sheetModal = document.getElementById('modal-patient-sheet-backdrop');
    this.sheetAvatar = document.getElementById('sheet-avatar');
    this.sheetName = document.getElementById('sheet-name');
    this.sheetDemographics = document.getElementById('sheet-demographics');
    this.sheetStatusTag = document.getElementById('sheet-status-tag');
    this.sheetCodeTag = document.getElementById('sheet-code-tag');
    this.sheetContent = document.getElementById('patient-sheet-content');
    this.btnCloseSheet = document.getElementById('btn-close-patient-sheet');
    this.btnCloseSheetFooter = document.getElementById('btn-close-patient-sheet-footer');
    this.btnSheetNewAppt = document.getElementById('btn-sheet-new-appt');
    this.btnSheetPrint = document.getElementById('btn-sheet-print');
    this.activeSheetPatientId = null;

    // Appointment modal elements
    this.apptModal = document.getElementById('modal-appointment-backdrop');
    this.apptForm = document.getElementById('form-add-appointment');
    this.apptTitleInput = document.getElementById('appt-input-title');
    this.apptDateInput = document.getElementById('appt-input-date');
    this.apptTimeInput = document.getElementById('appt-input-time');
    this.apptPatientSelect = document.getElementById('appt-select-patient');
    this.apptTypeSelect = document.getElementById('appt-input-type');
    this.apptNotesInput = document.getElementById('appt-input-notes');
    this.errApptTitle = document.getElementById('err-appt-title');
    this.errApptDate = document.getElementById('err-appt-date');
    this.errApptTime = document.getElementById('err-appt-time');
    this.btnCloseAppt = document.getElementById('btn-close-appointment-modal');
    this.btnCancelAppt = document.getElementById('btn-cancel-appointment-modal');

    // Interactive Triggers
    this.btnSidebarNewPatient = document.getElementById('btn-sidebar-new-patient');
    this.btnSidebarNewAppt = document.getElementById('btn-sidebar-new-appointment');
    this.btnDashNewPatient = document.getElementById('btn-dash-new-patient');
    this.btnDashNewAppt = document.getElementById('btn-dash-new-appointment');
    this.btnOpenPatientModal = document.getElementById('btn-open-patient-modal');
    this.btnOpenApptModal = document.getElementById('btn-open-appointment-modal');

    // Search and counters
    this.patientsSearchBox = document.getElementById('patients-search-box');
    this.patientsContainer = document.getElementById('patients-data-container');
    this.patientsCountPill = document.getElementById('patients-list-count');
    this.sidebarPatientCounter = document.getElementById('sidebar-patient-counter');
    this.sidebarApptCounter = document.getElementById('sidebar-appointment-counter');

    // Dashboard metrics & lists
    this.metricTodayCount = document.getElementById('metric-today-count');
    this.metricTodayCaption = document.getElementById('metric-today-caption');
    this.metricPatientsCount = document.getElementById('metric-patients-count');
    this.metricNextTime = document.getElementById('metric-next-appt-time');
    this.metricNextPatient = document.getElementById('metric-next-appt-patient');
    this.dashTodayList = document.getElementById('dash-today-appointments-list');
    this.dashRecentList = document.getElementById('dash-recent-patients-list');
    this.dashRecentCount = document.getElementById('dash-recent-patients-count');
    this.dashTodayIndicator = document.getElementById('dashboard-today-indicator');

    // Calendars
    this.dashMiniCal = document.getElementById('dash-mini-calendar');
    this.dashCalMonthLabel = document.getElementById('dash-cal-month-label');
    this.btnDashCalPrev = document.getElementById('btn-dash-cal-prev');
    this.btnDashCalNext = document.getElementById('btn-dash-cal-next');

    this.fullCalCanvas = document.getElementById('full-calendar-canvas');
    this.fullCalHeading = document.getElementById('full-cal-heading');
    this.btnFullCalPrev = document.getElementById('btn-full-cal-prev');
    this.btnFullCalNext = document.getElementById('btn-full-cal-next');
    this.btnFullCalToday = document.getElementById('btn-full-cal-today');
    this.agendaFeedList = document.getElementById('agenda-feed-list');
    this.agendaFeedTitle = document.getElementById('agenda-feed-title');
    this.agendaFeedCounter = document.getElementById('agenda-feed-counter');

    // State
    const now = new Date();
    this.viewYear = now.getFullYear();
    this.viewMonth = now.getMonth();
    this.selectedCalFilterDate = null; // null means all or today

    this.initClock();
    this.initSyncIndicator();
    this.bindEvents();
    this.renderAll();
    this.syncCloudData();
  }

  // --- PERSISTENCE ---
  loadPatients() {
    try {
      const data = localStorage.getItem('psios_patients_v1');
      if (data) {
        const parsed = JSON.parse(data);
        return parsed.map(p => ({
          ...p,
          evolutionNotes: Array.isArray(p.evolutionNotes) ? p.evolutionNotes : []
        }));
      }
    } catch (e) {
      console.warn('Error loading patients from localStorage:', e);
    }

    // Default seeded psychological patients
    const initial = [
      {
        id: 'pat-1',
        name: 'Sofía Elena Mendoza',
        birthdate: '1998-04-12',
        age: this.calculateAge('1998-04-12'),
        gender: 'female',
        phone: '+54 9 11 5544-2211',
        notes: 'Derivada por cuadro ansioso generalizado y dificultades en conciliación de sueño.',
        evolutionNotes: [
          {
            id: 'ev-1',
            timestamp: Date.now() - 86400000 * 4,
            dateStr: '10 Oct 2026, 11:30',
            text: 'Primera sesión de encuadre. Se explora el disparador de ansiedad laboral y sintomatología somática (taquicardia, tensión cervical). Se acuerda autorregistro de pensamientos automáticos.'
          },
          {
            id: 'ev-2',
            timestamp: Date.now() - 86400000 * 2,
            dateStr: '12 Oct 2026, 10:30',
            text: 'Revisión de autorregistro. Identificación de distorsiones: catastrofismo y sobregeneralización. Se introduce técnica de respiración diafragmática con adecuada adherencia.'
          }
        ],
        createdAt: Date.now() - 86400000 * 5
      },
      {
        id: 'pat-2',
        name: 'Alejandro Tomás Silva',
        birthdate: '1989-11-23',
        age: this.calculateAge('1989-11-23'),
        gender: 'male',
        phone: '+54 9 11 6789-1234',
        notes: 'Seguimiento por episodio depresivo moderado. Buena respuesta a reestructuración cognitiva.',
        evolutionNotes: [
          {
            id: 'ev-3',
            timestamp: Date.now() - 86400000 * 3,
            dateStr: '11 Oct 2026, 16:00',
            text: 'Evaluación psicodiagnóstica de seguimiento con BDI-II. Puntuación en descenso de 28 a 16 (remisión clínica parcial). Se activa plan de activación conductual semanal.'
          }
        ],
        createdAt: Date.now() - 86400000 * 3
      },
      {
        id: 'pat-3',
        name: 'Valentina Rocío Torres',
        birthdate: '2005-08-15',
        age: this.calculateAge('2005-08-15'),
        gender: 'female',
        phone: '+54 9 11 4321-9876',
        notes: 'Evaluación vocacional y manejo de perfeccionismo desadaptativo en etapa universitaria.',
        evolutionNotes: [
          {
            id: 'ev-4',
            timestamp: Date.now() - 86400000 * 1,
            dateStr: '13 Oct 2026, 15:00',
            text: 'Apertura de historia clínica y evaluación vocacional preliminar. Manifiesta alta autoexigencia académica y temor desproporcionado al fracaso evaluativo.'
          }
        ],
        createdAt: Date.now() - 86400000 * 1
      }
    ];
    this.savePatients(initial);
    return initial;
  }

  savePatients(list, syncItem = null) {
    this.patients = list;
    try {
      localStorage.setItem('psios_patients_v1', JSON.stringify(list));
    } catch (e) {
      console.warn('Error saving patients:', e);
    }
    if (syncItem) {
      clinicSyncService.syncPatient(syncItem);
    } else if (Array.isArray(list) && list.length > 0) {
      clinicSyncService.syncPatient(list[0]);
    }
  }

  loadAppointments() {
    try {
      const data = localStorage.getItem('psios_appointments_v1');
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Error loading appointments from localStorage:', e);
    }

    const todayStr = this.getTodayDateString();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = this.formatDateIso(tomorrow);

    const initial = [
      {
        id: 'appt-1',
        title: 'Sesión de Psicoterapia Cognitivo-Conductual',
        date: todayStr,
        time: '10:30',
        patientId: 'pat-1',
        patientName: 'Sofía Elena Mendoza',
        modality: 'presencial',
        notes: 'Revisión de autorregistro cognitivo y técnicas de respiración diafragmática.'
      },
      {
        id: 'appt-2',
        title: 'Supervisión de Casos Clínicos y Ateneo',
        date: todayStr,
        time: '14:00',
        patientId: 'none',
        patientName: 'Ninguno (Reunión / Supervisión)',
        modality: 'online',
        notes: 'Discusión con equipo interdisciplinario sobre abordaje de desregulación emocional.'
      },
      {
        id: 'appt-3',
        title: 'Evaluación Psicodiagnóstica e Informe BDI-II',
        date: todayStr,
        time: '16:45',
        patientId: 'pat-2',
        patientName: 'Alejandro Tomás Silva',
        modality: 'evaluacion',
        notes: 'Explicación del perfil psicométrico y metas de tratamiento.'
      },
      {
        id: 'appt-4',
        title: 'Entrevista Clínica de Admisión',
        date: tomorrowStr,
        time: '11:15',
        patientId: 'pat-3',
        patientName: 'Valentina Rocío Torres',
        modality: 'presencial',
        notes: 'Apertura de historia clínica y anamnesis general.'
      }
    ];
    this.saveAppointments(initial);
    return initial;
  }

  saveAppointments(list, syncItem = null) {
    this.appointments = list;
    try {
      localStorage.setItem('psios_appointments_v1', JSON.stringify(list));
    } catch (e) {
      console.warn('Error saving appointments:', e);
    }
    if (syncItem) {
      clinicSyncService.syncAppointment(syncItem);
    } else if (Array.isArray(list) && list.length > 0) {
      clinicSyncService.syncAppointment(list[0]);
    }
  }

  initSyncIndicator() {
    const dot = document.getElementById('clinic-sync-dot');
    const text = document.getElementById('clinic-sync-text');
    if (!dot || !text) return;

    clinicSyncService.onStatusChange((status) => {
      dot.className = `sync-status-dot dot-${status}`;
      if (status === 'synced') {
        text.textContent = 'Sincronizado';
      } else if (status === 'syncing') {
        text.textContent = 'Sincronizando...';
      } else if (status === 'offline') {
        text.textContent = 'Modo Offline';
      } else {
        text.textContent = 'Guardado Local';
      }
    });
  }

  async syncCloudData() {
    try {
      const merged = await clinicSyncService.pullPatientsFromCloud(this.patients);
      if (merged && merged.length > 0) {
        this.patients = merged;
        try {
          localStorage.setItem('psios_patients_v1', JSON.stringify(this.patients));
        } catch (e) {}
        this.renderAll();
      }
    } catch (err) {
      console.warn('Error al sincronizar datos clínicos desde la nube:', err);
    }
  }

  // --- AUTOMATIC AGE CALCULATION ---
  calculateAge(birthdateStr) {
    if (!birthdateStr) return null;
    const parts = birthdateStr.split('-');
    if (parts.length !== 3) return null;
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const d = parseInt(parts[2], 10);
    const birth = new Date(y, m, d);
    if (isNaN(birth.getTime())) return null;

    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 0 ? age : 0;
  }

  getTodayDateString() {
    return this.formatDateIso(new Date());
  }

  formatDateIso(dateObj) {
    const y = dateObj.getFullYear();
    const m = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const d = dateObj.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // --- CLOCK & DATE REAL-TIME ENGINE ---
  initClock() {
    const update = () => {
      const now = new Date();
      if (this.clockTimeEl) {
        const hh = now.getHours().toString().padStart(2, '0');
        const mm = now.getMinutes().toString().padStart(2, '0');
        const ss = now.getSeconds().toString().padStart(2, '0');
        this.clockTimeEl.textContent = `${hh}:${mm}:${ss}`;
      }
      if (this.clockDateEl) {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const dayName = days[now.getDay()];
        const dayNum = now.getDate();
        const monthName = months[now.getMonth()];
        const year = now.getFullYear();
        this.clockDateEl.textContent = `${dayName}, ${dayNum} ${monthName} ${year}`;
      }
    };
    update();
    this.clockInterval = setInterval(update, 1000);
  }

  // --- BIND EVENTS ---
  bindEvents() {
    // 1. Collapsible Sidebar toggle
    const setSidebarCollapsed = (collapsed) => {
      if (!this.sidebar) return;
      if (collapsed) {
        this.sidebar.classList.add('is-collapsed');
        if (this.btnToggleSidebar) {
          this.btnToggleSidebar.classList.add('is-collapsed-state');
          this.btnToggleSidebar.setAttribute('title', 'Desplegar barra lateral');
        }
      } else {
        this.sidebar.classList.remove('is-collapsed');
        if (this.btnToggleSidebar) {
          this.btnToggleSidebar.classList.remove('is-collapsed-state');
          this.btnToggleSidebar.setAttribute('title', 'Minimizar barra lateral');
        }
      }
    };

    if (this.btnSidebarCollapse) {
      this.btnSidebarCollapse.addEventListener('click', () => {
        setSidebarCollapsed(true);
      });
    }

    if (this.btnToggleSidebar) {
      this.btnToggleSidebar.addEventListener('click', () => {
        const isCollapsed = this.sidebar && this.sidebar.classList.contains('is-collapsed');
        setSidebarCollapsed(!isCollapsed);
      });
    }

    // 2. Sidebar Navigation Tabs
    this.sidebarTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    // 3. Modals open triggers
    const patientOpeners = [this.btnSidebarNewPatient, this.btnDashNewPatient, this.btnOpenPatientModal];
    patientOpeners.forEach(btn => {
      if (btn) btn.addEventListener('click', () => this.openPatientModal());
    });

    const apptOpeners = [this.btnSidebarNewAppt, this.btnDashNewAppt, this.btnOpenApptModal];
    apptOpeners.forEach(btn => {
      if (btn) btn.addEventListener('click', () => this.openApptModal());
    });

    // 4. Patient modal close & form
    if (this.btnClosePatient) this.btnClosePatient.addEventListener('click', () => this.closePatientModal());
    if (this.btnCancelPatient) this.btnCancelPatient.addEventListener('click', () => this.closePatientModal());
    if (this.patientModal) {
      this.patientModal.addEventListener('click', (e) => {
        if (e.target === this.patientModal) this.closePatientModal();
      });
    }

    // Live automatic age calculation on birthdate change
    if (this.patientBirthInput) {
      const handleAgeCalc = () => {
        const val = this.patientBirthInput.value;
        const age = this.calculateAge(val);
        if (this.errPatientBirth) this.errPatientBirth.classList.remove('visible');
        if (age !== null) {
          this.patientAgeVal.textContent = `${age} ${age === 1 ? 'año' : 'años'}`;
          this.patientAgeVal.classList.add('calculated');
        } else {
          this.patientAgeVal.textContent = '-- años';
          this.patientAgeVal.classList.remove('calculated');
        }
      };
      this.patientBirthInput.addEventListener('input', handleAgeCalc);
      this.patientBirthInput.addEventListener('change', handleAgeCalc);
    }

    if (this.patientNameInput) {
      this.patientNameInput.addEventListener('input', () => {
        if (this.errPatientName) this.errPatientName.classList.remove('visible');
      });
    }

    if (this.patientForm) {
      this.patientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handlePatientSubmit();
      });
    }

    // 5. Appointment modal close & form
    if (this.btnCloseAppt) this.btnCloseAppt.addEventListener('click', () => this.closeApptModal());
    if (this.btnCancelAppt) this.btnCancelAppt.addEventListener('click', () => this.closeApptModal());
    if (this.apptModal) {
      this.apptModal.addEventListener('click', (e) => {
        if (e.target === this.apptModal) this.closeApptModal();
      });
    }

    if (this.apptTitleInput) {
      this.apptTitleInput.addEventListener('input', () => {
        if (this.errApptTitle) this.errApptTitle.classList.remove('visible');
      });
    }
    if (this.apptDateInput) {
      this.apptDateInput.addEventListener('input', () => {
        if (this.errApptDate) this.errApptDate.classList.remove('visible');
      });
    }
    if (this.apptTimeInput) {
      this.apptTimeInput.addEventListener('input', () => {
        if (this.errApptTime) this.errApptTime.classList.remove('visible');
      });
    }

    if (this.apptForm) {
      this.apptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleApptSubmit();
      });
    }

    // 6. Patient search in Patients Tab
    if (this.patientsSearchBox) {
      this.patientsSearchBox.addEventListener('input', () => {
        this.renderPatientsTable();
      });
    }

    // 7. Calendar month navigation controls
    if (this.btnDashCalPrev) {
      this.btnDashCalPrev.addEventListener('click', () => {
        this.changeMonth(-1);
      });
    }
    if (this.btnDashCalNext) {
      this.btnDashCalNext.addEventListener('click', () => {
        this.changeMonth(1);
      });
    }
    if (this.btnFullCalPrev) {
      this.btnFullCalPrev.addEventListener('click', () => {
        this.changeMonth(-1);
      });
    }
    if (this.btnFullCalNext) {
      this.btnFullCalNext.addEventListener('click', () => {
        this.changeMonth(1);
      });
    }
    if (this.btnFullCalToday) {
      this.btnFullCalToday.addEventListener('click', () => {
        const now = new Date();
        this.viewYear = now.getFullYear();
        this.viewMonth = now.getMonth();
        this.selectedCalFilterDate = this.getTodayDateString();
        this.renderCalendars();
        this.renderAppointmentsAgenda();
      });
    }

    // 8. Patient Sheet Modal (Ficha Clínica Expandida)
    if (this.btnCloseSheet) {
      this.btnCloseSheet.addEventListener('click', () => this.closePatientSheet());
    }
    if (this.btnCloseSheetFooter) {
      this.btnCloseSheetFooter.addEventListener('click', () => this.closePatientSheet());
    }
    if (this.sheetModal) {
      this.sheetModal.addEventListener('click', (e) => {
        if (e.target === this.sheetModal) this.closePatientSheet();
      });
    }
    if (this.btnSheetNewAppt) {
      this.btnSheetNewAppt.addEventListener('click', () => {
        const patId = this.activeSheetPatientId;
        this.closePatientSheet();
        this.openApptModal();
        if (this.apptPatientSelect && patId) {
          this.apptPatientSelect.value = patId;
        }
      });
    }
    if (this.btnSheetPrint) {
      this.btnSheetPrint.addEventListener('click', () => {
        window.print();
      });
    }

    // Global Escape Key to close open modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.sheetModal && this.sheetModal.classList.contains('active')) {
          this.closePatientSheet();
        } else if (this.patientModal && this.patientModal.classList.contains('active')) {
          this.closePatientModal();
        } else if (this.apptModal && this.apptModal.classList.contains('active')) {
          this.closeApptModal();
        }
      }
    });
  }

  onActivated() {
    triggerKineticTitleAnimation(this.titleEl);
    this.syncDoctorProfile();
    this.renderAll();
  }

  syncDoctorProfile() {
    try {
      const userRaw = localStorage.getItem('psios_user_profile');
      if (userRaw) {
        const user = JSON.parse(userRaw);
        if (this.sidebarDocName) {
          const title = user.displayTitle || user.title || 'Dr.';
          this.sidebarDocName.textContent = `${title} ${user.firstName || user.rawName}`;
        }
        if (this.sidebarDocAvatar) {
          if (user.gender === 'female') this.sidebarDocAvatar.textContent = '👩‍⚕️';
          else if (user.gender === 'male') this.sidebarDocAvatar.textContent = '👨‍⚕️';
          else this.sidebarDocAvatar.textContent = '🧠';
        }
      }
    } catch (e) {
      console.warn('Could not sync doctor profile:', e);
    }
  }

  switchTab(targetTab) {
    this.sidebarTabs.forEach(t => {
      const isTarget = t.dataset.tab === targetTab;
      t.classList.toggle('active', isTarget);
      t.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    Object.keys(this.subviews).forEach(key => {
      const el = this.subviews[key];
      if (el) {
        el.classList.toggle('active', key === targetTab);
      }
    });

    // Re-render relevant data surfaces
    if (targetTab === 'dashboard') {
      this.renderDashboard();
    } else if (targetTab === 'patients') {
      this.renderPatientsTable();
    } else if (targetTab === 'appointments') {
      this.renderCalendars();
      this.renderAppointmentsAgenda();
    }
  }

  changeMonth(delta) {
    this.viewMonth += delta;
    if (this.viewMonth < 0) {
      this.viewMonth = 11;
      this.viewYear--;
    } else if (this.viewMonth > 11) {
      this.viewMonth = 0;
      this.viewYear++;
    }
    this.renderCalendars();
  }

  // --- MODAL: AGREGAR PACIENTE ---
  openPatientModal() {
    if (!this.patientModal) return;
    if (this.patientForm) this.patientForm.reset();
    if (this.patientAgeVal) {
      this.patientAgeVal.textContent = '-- años';
      this.patientAgeVal.classList.remove('calculated');
    }
    if (this.errPatientName) this.errPatientName.classList.remove('visible');
    if (this.errPatientBirth) this.errPatientBirth.classList.remove('visible');

    this.patientModal.classList.add('active');
    this.patientModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      if (this.patientNameInput) this.patientNameInput.focus();
    }, 200);
  }

  closePatientModal() {
    if (!this.patientModal) return;
    this.patientModal.classList.remove('active');
    this.patientModal.setAttribute('aria-hidden', 'true');
  }

  handlePatientSubmit() {
    const name = (this.patientNameInput?.value || '').trim();
    const birthdate = this.patientBirthInput?.value || '';

    let hasError = false;
    if (!name) {
      if (this.errPatientName) this.errPatientName.classList.add('visible');
      hasError = true;
    }
    if (!birthdate) {
      if (this.errPatientBirth) this.errPatientBirth.classList.add('visible');
      hasError = true;
    }

    if (hasError) return;

    const age = this.calculateAge(birthdate);
    const genderEl = this.patientForm.querySelector('input[name="patient_gender"]:checked');
    const gender = genderEl ? genderEl.value : 'other';
    const phone = (this.patientPhoneInput?.value || '').trim();
    const notes = (this.patientNotesInput?.value || '').trim();

    const newPatient = {
      id: `pat-${Date.now()}`,
      name,
      birthdate,
      age: age !== null ? age : 0,
      gender,
      phone: phone || 'No informado',
      notes: notes || 'Sin notas clínicas preliminares.',
      evolutionNotes: [],
      createdAt: Date.now()
    };

    const updated = [newPatient, ...this.patients];
    this.savePatients(updated);

    this.closePatientModal();
    this.renderAll();
  }

  // --- MODAL: FICHA CLÍNICA EXPANDIDA (HOJA COMPLETA DE PACIENTE) ---
  openPatientSheet(patientId) {
    if (!this.sheetModal) return;
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) return;

    this.activeSheetPatientId = patientId;
    if (!Array.isArray(patient.evolutionNotes)) {
      patient.evolutionNotes = [];
    }

    const avatar = patient.gender === 'female' ? '👩' : (patient.gender === 'male' ? '👨' : '🧑');
    const genderLabels = {
      female: 'Femenino',
      male: 'Masculino',
      other: 'No binario / No especificado'
    };
    const genderText = genderLabels[patient.gender] || 'No especificado';

    // Header updates
    if (this.sheetAvatar) this.sheetAvatar.textContent = avatar;
    if (this.sheetName) this.sheetName.textContent = patient.name;
    if (this.sheetDemographics) {
      this.sheetDemographics.textContent = `${patient.age} años • Género ${genderText} • F. Nac: ${patient.birthdate}`;
    }
    if (this.sheetCodeTag) {
      const cleanId = patient.id.replace(/^pat-/, '');
      this.sheetCodeTag.textContent = `HC-${cleanId.substring(0, 8).toUpperCase()}`;
    }
    if (this.sheetStatusTag) {
      this.sheetStatusTag.textContent = 'Paciente Activo • Historia Abierta';
    }

    // Filter appointments for this patient
    const patientAppts = this.appointments
      .filter(a => a.patientId === patientId)
      .sort((a, b) => {
        const cmp = b.date.localeCompare(a.date);
        return cmp !== 0 ? cmp : b.time.localeCompare(a.time);
      });

    const renderEvolutionList = () => {
      const historyEl = document.getElementById('sheet-evolution-history-list');
      if (!historyEl) return;
      if (!patient.evolutionNotes || patient.evolutionNotes.length === 0) {
        historyEl.innerHTML = `
          <div style="padding: 1rem; text-align: center; color: var(--text-tertiary); font-size: 0.8rem; background: rgba(0,0,0,0.015); border-radius: 10px;">
            Sin notas de evolución registradas aún. Ingresa la primera nota de sesión arriba.
          </div>
        `;
        return;
      }
      historyEl.innerHTML = patient.evolutionNotes.map(n => `
        <div class="sheet-evolution-item">
          <span class="sheet-evolution-date">📅 ${n.dateStr}</span>
          <p style="margin: 0; white-space: pre-wrap;">${n.text}</p>
        </div>
      `).join('');
    };

    // Render body content
    if (this.sheetContent) {
      this.sheetContent.innerHTML = `
        <!-- Demographic summary tiles -->
        <div class="sheet-demographics-grid">
          <div class="sheet-tile">
            <span class="sheet-tile-label">Edad Cronológica</span>
            <span class="sheet-tile-val">${patient.age} años</span>
            <span class="sheet-tile-sub">Nacimiento: ${patient.birthdate}</span>
          </div>
          <div class="sheet-tile">
            <span class="sheet-tile-label">Identidad de Género</span>
            <span class="sheet-tile-val">${genderText}</span>
            <span class="sheet-tile-sub">Registro clínico</span>
          </div>
          <div class="sheet-tile">
            <span class="sheet-tile-label">Contacto Primario</span>
            <span class="sheet-tile-val" style="font-size: 0.9rem;">${patient.phone || 'No registrado'}</span>
            <span class="sheet-tile-sub">Vía telefónica / WhatsApp</span>
          </div>
          <div class="sheet-tile">
            <span class="sheet-tile-label">Consultas Agendadas</span>
            <span class="sheet-tile-val">${patientAppts.length} ${patientAppts.length === 1 ? 'sesión' : 'sesiones'}</span>
            <span class="sheet-tile-sub">${patientAppts.length > 0 ? 'En curso' : 'Sin citas agendadas'}</span>
          </div>
        </div>

        <!-- Anamnesis / Motivo de Consulta -->
        <div class="sheet-section-card">
          <div class="sheet-section-header">
            <h3 class="sheet-section-heading">📝 Motivo de Consulta e Historia Clínica</h3>
            <span style="font-size: 0.72rem; color: var(--text-tertiary); font-weight: 600;">Ingreso Inicial</span>
          </div>
          <p class="sheet-notes-paragraph">${patient.notes || 'Sin antecedentes ni notas clínicas preliminares cargadas.'}</p>
        </div>

        <!-- Timeline of Appointments -->
        <div class="sheet-section-card">
          <div class="sheet-section-header">
            <h3 class="sheet-section-heading">📅 Sesiones y Citas del Paciente (${patientAppts.length})</h3>
            <button type="button" class="btn-row-action" id="btn-sheet-inline-new-appt" style="font-size: 0.76rem;">+ Nueva Cita</button>
          </div>
          <div class="sheet-appts-timeline">
            ${patientAppts.length === 0 ? `
              <div style="padding: 1.25rem; text-align: center; color: var(--text-secondary); background: rgba(0,0,0,0.015); border-radius: 12px; font-size: 0.82rem;">
                No hay sesiones agendadas para este paciente todavía.
              </div>
            ` : patientAppts.map(appt => {
              const modLabels = {
                presencial: 'Presencial',
                online: 'Online',
                evaluacion: 'Evaluación',
                devolucion: 'Devolución',
                supervision: 'Supervisión'
              };
              const label = modLabels[appt.modality] || 'Consulta';
              return `
                <div class="sheet-appt-row">
                  <div style="display: flex; align-items: center; gap: 0.85rem;">
                    <span class="appt-time-pill" style="min-width: 58px; text-align: center;">${appt.time}</span>
                    <div>
                      <strong style="font-size: 0.88rem; color: var(--text-primary); display: block;">${appt.title}</strong>
                      <span style="font-size: 0.75rem; color: var(--text-tertiary);">Fecha: ${appt.date} • ${appt.notes}</span>
                    </div>
                  </div>
                  <span class="appt-badge">${label}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Suggested Psychometric Batteries from Library -->
        <div class="sheet-section-card">
          <div class="sheet-section-header">
            <h3 class="sheet-section-heading">🧠 Baterías Psicométricas y Protocolos Clínicos</h3>
            <span style="font-size: 0.72rem; color: var(--text-tertiary); font-weight: 600;">Biblioteca PsiOS</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 0.5rem 0;">
            Instrumentos estandarizados disponibles en la Biblioteca Clínica sugeridos para este perfil:
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
            <div style="padding: 0.85rem; border-radius: 12px; background: rgba(59, 130, 246, 0.04); border: 1px solid rgba(59, 130, 246, 0.15);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                <strong style="font-size: 0.85rem; color: #1e40af;">BDI-II (Beck)</strong>
                <span style="font-size: 0.68rem; background: #dbeafe; color: #1e40af; padding: 0.15rem 0.5rem; border-radius: 9999px; font-weight: 700;">Depresión</span>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">21 ítems psicométricos con escala Likert de 4 puntos.</span>
            </div>

            <div style="padding: 0.85rem; border-radius: 12px; background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.15);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                <strong style="font-size: 0.85rem; color: #065f46;">BAI (Beck Ansiedad)</strong>
                <span style="font-size: 0.68rem; background: #d1fae5; color: #065f46; padding: 0.15rem 0.5rem; border-radius: 9999px; font-weight: 700;">Ansiedad</span>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">21 síntomas somáticos y cognitivos de ansiedad.</span>
            </div>

            <div style="padding: 0.85rem; border-radius: 12px; background: rgba(139, 92, 246, 0.04); border: 1px solid rgba(139, 92, 246, 0.15);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                <strong style="font-size: 0.85rem; color: #5b21b6;">MCMI-IV (Millon)</strong>
                <span style="font-size: 0.68rem; background: #ede9fe; color: #5b21b6; padding: 0.15rem 0.5rem; border-radius: 9999px; font-weight: 700;">Personalidad</span>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-secondary); display: block;">195 ítems para patrones clínicos de personalidad.</span>
            </div>
          </div>
        </div>

        <!-- Evolution Notes Section -->
        <div class="sheet-section-card">
          <div class="sheet-section-header">
            <h3 class="sheet-section-heading">📋 Evolución Clínica y Notas de Sesión</h3>
            <span style="font-size: 0.72rem; color: var(--text-tertiary); font-weight: 600;">Confidencial</span>
          </div>

          <div class="sheet-evolution-editor">
            <textarea
              class="sheet-evolution-textarea"
              id="sheet-evolution-input"
              rows="3"
              placeholder="Ingresa los hallazgos de la sesión, intervenciones aplicadas, acuerdos y tareas para la próxima consulta..."
            ></textarea>
            <div style="display: flex; justify-content: flex-end;">
              <button type="button" class="primary-gradient-btn" id="btn-sheet-save-evolution" style="padding: 0.55rem 1.15rem; font-size: 0.82rem;">
                💾 Guardar Nota de Evolución
              </button>
            </div>
          </div>

          <div class="sheet-evolution-history" id="sheet-evolution-history-list">
            <!-- Populated via renderEvolutionList -->
          </div>
        </div>
      `;

      // Render existing evolution notes
      renderEvolutionList();

      // Inline new appointment button inside sheet
      const btnInlineAppt = document.getElementById('btn-sheet-inline-new-appt');
      if (btnInlineAppt) {
        btnInlineAppt.addEventListener('click', () => {
          this.closePatientSheet();
          this.openApptModal();
          if (this.apptPatientSelect) {
            this.apptPatientSelect.value = patientId;
          }
        });
      }

      // Save Evolution Note handler
      const btnSaveEvolution = document.getElementById('btn-sheet-save-evolution');
      const inputEvolution = document.getElementById('sheet-evolution-input');
      if (btnSaveEvolution && inputEvolution) {
        btnSaveEvolution.addEventListener('click', () => {
          const text = inputEvolution.value.trim();
          if (!text) {
            inputEvolution.focus();
            inputEvolution.style.borderColor = '#ef4444';
            setTimeout(() => { inputEvolution.style.borderColor = ''; }, 1500);
            return;
          }

          const now = new Date();
          const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
          const day = now.getDate().toString().padStart(2, '0');
          const month = months[now.getMonth()];
          const year = now.getFullYear();
          const hh = now.getHours().toString().padStart(2, '0');
          const mm = now.getMinutes().toString().padStart(2, '0');
          const dateStr = `${day} ${month} ${year}, ${hh}:${mm}`;

          const newNote = {
            id: `ev-${Date.now()}`,
            timestamp: Date.now(),
            dateStr,
            text
          };

          if (!Array.isArray(patient.evolutionNotes)) patient.evolutionNotes = [];
          patient.evolutionNotes.unshift(newNote);

          // Update state and persist
          this.savePatients(this.patients);
          inputEvolution.value = '';
          renderEvolutionList();
        });
      }
    }

    this.sheetModal.classList.add('active');
    this.sheetModal.setAttribute('aria-hidden', 'false');
  }

  closePatientSheet() {
    if (!this.sheetModal) return;
    this.sheetModal.classList.remove('active');
    this.sheetModal.setAttribute('aria-hidden', 'true');
    this.activeSheetPatientId = null;
  }

  // --- MODAL: PROGRAMAR CITA ---
  openApptModal() {
    if (!this.apptModal) return;
    if (this.apptForm) this.apptForm.reset();
    if (this.errApptTitle) this.errApptTitle.classList.remove('visible');
    if (this.errApptDate) this.errApptDate.classList.remove('visible');
    if (this.errApptTime) this.errApptTime.classList.remove('visible');

    // Default to today and nearest round hour
    if (this.apptDateInput) {
      this.apptDateInput.value = this.getTodayDateString();
    }
    if (this.apptTimeInput) {
      const d = new Date();
      const nextHour = (d.getHours() + 1).toString().padStart(2, '0');
      this.apptTimeInput.value = `${nextHour}:00`;
    }

    // Populate patient selector with "Ninguno" first, then registered patients
    if (this.apptPatientSelect) {
      const sortedPatients = [...this.patients].sort((a, b) => a.name.localeCompare(b.name));
      const options = [
        '<option value="none">Ninguno (Reunión / Supervisión / Sin paciente asociado)</option>',
        ...sortedPatients.map(p => `<option value="${p.id}">${p.name} (${p.age} años)</option>`)
      ];
      this.apptPatientSelect.innerHTML = options.join('');
    }

    this.apptModal.classList.add('active');
    this.apptModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      if (this.apptTitleInput) this.apptTitleInput.focus();
    }, 200);
  }

  closeApptModal() {
    if (!this.apptModal) return;
    this.apptModal.classList.remove('active');
    this.apptModal.setAttribute('aria-hidden', 'true');
  }

  handleApptSubmit() {
    const title = (this.apptTitleInput?.value || '').trim();
    const date = this.apptDateInput?.value || '';
    const time = this.apptTimeInput?.value || '';
    const patientVal = this.apptPatientSelect?.value || 'none';
    const modality = this.apptTypeSelect?.value || 'presencial';
    const notes = (this.apptNotesInput?.value || '').trim();

    let hasError = false;
    if (!title) {
      if (this.errApptTitle) this.errApptTitle.classList.add('visible');
      hasError = true;
    }
    if (!date) {
      if (this.errApptDate) this.errApptDate.classList.add('visible');
      hasError = true;
    }
    if (!time) {
      if (this.errApptTime) this.errApptTime.classList.add('visible');
      hasError = true;
    }

    if (hasError) return;

    let patientName = 'Ninguno';
    if (patientVal !== 'none') {
      const found = this.patients.find(p => p.id === patientVal);
      if (found) patientName = found.name;
    }

    const newAppt = {
      id: `appt-${Date.now()}`,
      title,
      date,
      time,
      patientId: patientVal,
      patientName,
      modality,
      notes: notes || 'Sin notas adicionales.',
      createdAt: Date.now()
    };

    const updated = [newAppt, ...this.appointments];
    this.saveAppointments(updated);

    this.closeApptModal();
    this.renderAll();
  }

  // --- RENDERING PIPELINE ---
  renderAll() {
    this.updateCounters();
    this.renderDashboard();
    this.renderPatientsTable();
    this.renderCalendars();
    this.renderAppointmentsAgenda();
  }

  updateCounters() {
    const totalPatients = this.patients.length;
    const totalAppts = this.appointments.length;
    const todayStr = this.getTodayDateString();
    const todayAppts = this.appointments.filter(a => a.date === todayStr);

    if (this.sidebarPatientCounter) this.sidebarPatientCounter.textContent = totalPatients.toString();
    if (this.sidebarApptCounter) this.sidebarApptCounter.textContent = todayAppts.length.toString();
    if (this.metricPatientsCount) this.metricPatientsCount.textContent = totalPatients.toString();
    if (this.metricTodayCount) this.metricTodayCount.textContent = todayAppts.length.toString();
    if (this.metricTodayCaption) {
      this.metricTodayCaption.textContent = todayAppts.length === 1 ? 'Consulta en agenda' : 'Consultas en agenda';
    }

    // Determine next appointment
    if (todayAppts.length > 0) {
      const sorted = [...todayAppts].sort((a, b) => a.time.localeCompare(b.time));
      const next = sorted[0];
      if (this.metricNextTime) this.metricNextTime.textContent = next.time;
      if (this.metricNextPatient) {
        this.metricNextPatient.textContent = next.patientId === 'none' ? next.title : next.patientName;
      }
    } else {
      if (this.metricNextTime) this.metricNextTime.textContent = 'Sin citas hoy';
      if (this.metricNextPatient) this.metricNextPatient.textContent = 'Horario libre disponible';
    }
  }

  // --- PANTALLA PRINCIPAL DE CLÍNICA (RESUMEN GENERAL) ---
  renderDashboard() {
    const todayStr = this.getTodayDateString();
    const todayAppts = this.appointments
      .filter(a => a.date === todayStr)
      .sort((a, b) => a.time.localeCompare(b.time));

    // 1. Resumen de Citas de Hoy
    if (this.dashTodayList) {
      if (todayAppts.length === 0) {
        this.dashTodayList.innerHTML = `
          <div style="padding: 2.2rem 1.2rem; text-align: center; color: var(--text-secondary); background: rgba(255,255,255,0.6); border-radius: 16px; border: 1px dashed rgba(0,0,0,0.08);">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 0.5rem;">☀️</span>
            <strong style="color: var(--text-primary); font-size: 0.95rem; display: block;">No hay citas agendadas para hoy</strong>
            <p style="font-size: 0.8rem; margin: 0.25rem 0 0.85rem 0;">Puedes programar una sesión con un paciente o un ateneo clínico.</p>
            <button type="button" class="btn-row-action" id="btn-dash-empty-appt">+ Programar Cita</button>
          </div>
        `;
        const btnEmptyAppt = document.getElementById('btn-dash-empty-appt');
        if (btnEmptyAppt) btnEmptyAppt.addEventListener('click', () => this.openApptModal());
      } else {
        this.dashTodayList.innerHTML = todayAppts.map(appt => {
          const modalityLabels = {
            presencial: 'Presencial',
            online: 'Online',
            evaluacion: 'Evaluación',
            devolucion: 'Devolución',
            supervision: 'Supervisión'
          };
          const modLabel = modalityLabels[appt.modality] || 'Consulta';
          const patientLabel = appt.patientId === 'none' ? 'Sin paciente directo (Reunión / Supervisión)' : `Paciente: ${appt.patientName}`;

          return `
            <div class="appt-item-row">
              <span class="appt-time-pill">${appt.time}</span>
              <div class="appt-details">
                <strong class="appt-title">${appt.title}</strong>
                <span class="appt-patient-name" ${appt.patientId !== 'none' ? `data-open-patient-id="${appt.patientId}" style="cursor: pointer;" title="Abrir ficha clínica de ${appt.patientName}"` : ''}>${patientLabel}</span>
              </div>
              <span class="appt-badge">${modLabel}</span>
            </div>
          `;
        }).join('');

        const patientNameLinks = this.dashTodayList.querySelectorAll('[data-open-patient-id]');
        patientNameLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.stopPropagation();
            const patId = link.getAttribute('data-open-patient-id');
            if (patId) this.openPatientSheet(patId);
          });
        });
      }
    }

    // 2. Pequeña Lista de Pacientes Recientes
    if (this.dashRecentList) {
      const recentPatients = [...this.patients].slice(0, 4);
      if (this.dashRecentCount) {
        this.dashRecentCount.textContent = `${this.patients.length} total`;
      }

      if (recentPatients.length === 0) {
        this.dashRecentList.innerHTML = `
          <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary); background: rgba(255,255,255,0.6); border-radius: 14px;">
            <p style="font-size: 0.82rem; margin: 0;">No hay pacientes registrados aún.</p>
          </div>
        `;
      } else {
        this.dashRecentList.innerHTML = recentPatients.map(p => {
          const avatar = p.gender === 'female' ? '👩' : (p.gender === 'male' ? '👨' : '🧑');
          const genderText = p.gender === 'female' ? 'Femenino' : (p.gender === 'male' ? 'Masculino' : 'No especificado');
          return `
            <div class="recent-patient-card" data-card-patient-id="${p.id}" style="cursor: pointer;" title="Abrir ficha clínica de ${p.name}">
              <span class="patient-avatar-badge">${avatar}</span>
              <div class="patient-meta-box">
                <strong class="patient-full-name">${p.name}</strong>
                <span class="patient-age-gender">${p.age} años • ${genderText} • ${p.phone}</span>
              </div>
              <button type="button" class="btn-row-action" data-view-patient-id="${p.id}" title="Ver ficha clínica completa">Ver Ficha</button>
            </div>
          `;
        }).join('');

        const patientCards = this.dashRecentList.querySelectorAll('.recent-patient-card');
        patientCards.forEach(card => {
          card.addEventListener('click', () => {
            const pid = card.getAttribute('data-card-patient-id');
            if (pid) this.openPatientSheet(pid);
          });
        });
      }
    }
  }

  // --- DIRECTORIO DE PACIENTES (PESTAÑA PACIENTES) ---
  renderPatientsTable() {
    if (!this.patientsContainer) return;

    const query = (this.patientsSearchBox?.value || '').trim().toLowerCase();
    const filtered = this.patients.filter(p => {
      if (!query) return true;
      const haystack = `${p.name} ${p.notes} ${p.phone}`.toLowerCase();
      return haystack.includes(query);
    });

    if (this.patientsCountPill) {
      this.patientsCountPill.textContent = `Total: ${filtered.length} ${filtered.length === 1 ? 'paciente' : 'pacientes'}`;
    }

    if (filtered.length === 0) {
      this.patientsContainer.innerHTML = `
        <div style="padding: 3rem 1.5rem; text-align: center; color: var(--text-secondary);">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 0.5rem;">👥</span>
          <strong style="color: var(--text-primary); font-size: 1.05rem; display: block; margin-bottom: 0.25rem;">No se encontraron pacientes</strong>
          <p style="font-size: 0.85rem; margin: 0 0 1rem 0;">No hay registros que coincidan con la búsqueda.</p>
          <button type="button" class="primary-gradient-btn" id="btn-table-new-patient">+ Registrar Nuevo Paciente</button>
        </div>
      `;
      const btn = document.getElementById('btn-table-new-patient');
      if (btn) btn.addEventListener('click', () => this.openPatientModal());
      return;
    }

    this.patientsContainer.innerHTML = `
      <div class="patients-grid-list">
        <div class="patient-table-row patient-table-header">
          <span>Paciente / Historia</span>
          <span>Nacimiento y Edad</span>
          <span>Género</span>
          <span>Contacto / Teléfono</span>
          <span style="text-align: right;">Acciones</span>
        </div>
        ${filtered.map(p => {
          const avatar = p.gender === 'female' ? '👩' : (p.gender === 'male' ? '👨' : '🧑');
          const genderBadge = p.gender === 'female' ? 'Mujer' : (p.gender === 'male' ? 'Hombre' : 'Neutro');
          return `
            <div class="patient-table-row" data-table-patient-id="${p.id}" style="cursor: pointer;" title="Abrir ficha clínica de ${p.name}">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="font-size: 1.35rem; width: 34px; height: 34px; border-radius: 50%; background: rgba(0,0,0,0.04); display: flex; align-items: center; justify-content: center;">${avatar}</span>
                <div>
                  <strong style="color: var(--text-primary); font-size: 0.92rem; display: block;">${p.name}</strong>
                  <span style="color: var(--text-tertiary); font-size: 0.76rem;">${p.notes.substring(0, 48)}${p.notes.length > 48 ? '...' : ''}</span>
                </div>
              </div>

              <div>
                <strong style="color: var(--text-primary); font-size: 0.88rem; font-weight: 700;">${p.age} años</strong>
                <span style="display: block; color: var(--text-tertiary); font-size: 0.74rem;">F. Nac: ${p.birthdate}</span>
              </div>

              <div>
                <span style="font-size: 0.75rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 9999px; background: rgba(0,0,0,0.04); color: var(--text-secondary);">${genderBadge}</span>
              </div>

              <div>
                <span style="font-size: 0.82rem; color: var(--text-primary); font-weight: 500;">${p.phone}</span>
              </div>

              <div style="display: flex; gap: 0.4rem; justify-content: flex-end;" onclick="event.stopPropagation();">
                <button type="button" class="btn-row-action" data-open-sheet-btn="${p.id}" title="Ver hoja completa del paciente" style="font-weight: 600; color: #2563eb;">Ver Ficha</button>
                <button type="button" class="btn-row-action" data-appt-for-patient="${p.id}" title="Agendar cita con este paciente">+ Cita</button>
                <button type="button" class="btn-row-action" data-delete-patient="${p.id}" title="Eliminar paciente" style="color: #ef4444;">✕</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Bind row click to open patient sheet
    const tableRows = this.patientsContainer.querySelectorAll('.patient-table-row:not(.patient-table-header)');
    tableRows.forEach(row => {
      row.addEventListener('click', () => {
        const patId = row.getAttribute('data-table-patient-id');
        if (patId) this.openPatientSheet(patId);
      });
    });

    const sheetBtns = this.patientsContainer.querySelectorAll('[data-open-sheet-btn]');
    sheetBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const patId = btn.getAttribute('data-open-sheet-btn');
        if (patId) this.openPatientSheet(patId);
      });
    });

    // Bind action buttons
    const apptBtns = this.patientsContainer.querySelectorAll('[data-appt-for-patient]');
    apptBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const patId = btn.getAttribute('data-appt-for-patient');
        this.openApptModal();
        if (this.apptPatientSelect) {
          this.apptPatientSelect.value = patId;
        }
      });
    });

    const deleteBtns = this.patientsContainer.querySelectorAll('[data-delete-patient]');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const patId = btn.getAttribute('data-delete-patient');
        const pat = this.patients.find(x => x.id === patId);
        if (pat && confirm(`¿Deseas eliminar a ${pat.name} del directorio clínico?`)) {
          const updated = this.patients.filter(x => x.id !== patId);
          this.savePatients(updated);
          this.renderAll();
        }
      });
    });
  }

  // --- CALENDARIOS INTERACTIVOS (MINI Y MASTER) ---
  renderCalendars() {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthTitle = `${monthNames[this.viewMonth]} ${this.viewYear}`;

    if (this.dashCalMonthLabel) this.dashCalMonthLabel.textContent = monthTitle;
    if (this.fullCalHeading) this.fullCalHeading.textContent = `Agenda de ${monthTitle}`;

    const daysOfWeek = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === this.viewYear && today.getMonth() === this.viewMonth;
    const todayDay = isCurrentMonth ? today.getDate() : -1;

    // First day of month (0 = Sun, 1 = Mon ... 6 = Sat) -> map to Monday=0
    const firstDayIndex = new Date(this.viewYear, this.viewMonth, 1).getDay();
    const startOffset = (firstDayIndex + 6) % 7; // Monday as first column

    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();

    // Map appointments for this month
    const apptDateSet = new Set(this.appointments.map(a => a.date));

    const buildCalendarHtml = (isCompact = false) => {
      let html = daysOfWeek.map(d => `<div class="cal-weekday">${d}</div>`).join('');

      // Empty offset cells
      for (let i = 0; i < startOffset; i++) {
        html += `<div class="cal-day-cell empty"></div>`;
      }

      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const monthPad = (this.viewMonth + 1).toString().padStart(2, '0');
        const dayPad = day.toString().padStart(2, '0');
        const dateStr = `${this.viewYear}-${monthPad}-${dayPad}`;

        const isToday = day === todayDay;
        const hasAppts = apptDateSet.has(dateStr);
        const isSelected = this.selectedCalFilterDate === dateStr;

        let classes = 'cal-day-cell';
        if (isToday) classes += ' is-today';
        if (hasAppts) classes += ' has-appointments';
        if (isSelected && !isToday) classes += ' is-selected-filter';

        html += `<div class="${classes}" data-cal-date="${dateStr}">${day}</div>`;
      }

      return html;
    };

    if (this.dashMiniCal) {
      this.dashMiniCal.innerHTML = buildCalendarHtml(true);
      const cells = this.dashMiniCal.querySelectorAll('.cal-day-cell:not(.empty)');
      cells.forEach(cell => {
        cell.addEventListener('click', () => {
          const date = cell.getAttribute('data-cal-date');
          this.selectedCalFilterDate = (this.selectedCalFilterDate === date) ? null : date;
          this.switchTab('appointments');
        });
      });
    }

    if (this.fullCalCanvas) {
      this.fullCalCanvas.innerHTML = buildCalendarHtml(false);
      const cells = this.fullCalCanvas.querySelectorAll('.cal-day-cell:not(.empty)');
      cells.forEach(cell => {
        cell.addEventListener('click', () => {
          const date = cell.getAttribute('data-cal-date');
          this.selectedCalFilterDate = (this.selectedCalFilterDate === date) ? null : date;
          this.renderCalendars();
          this.renderAppointmentsAgenda();
        });
      });
    }
  }

  // --- AGENDA FEED DE CITAS ---
  renderAppointmentsAgenda() {
    if (!this.agendaFeedList) return;

    let filtered = [...this.appointments];
    if (this.selectedCalFilterDate) {
      filtered = filtered.filter(a => a.date === this.selectedCalFilterDate);
      if (this.agendaFeedTitle) {
        this.agendaFeedTitle.textContent = `Citas del ${this.selectedCalFilterDate}`;
      }
    } else {
      if (this.agendaFeedTitle) {
        this.agendaFeedTitle.textContent = 'Todas las Citas Programadas';
      }
    }

    // Sort by date then time
    filtered.sort((a, b) => {
      const cmp = a.date.localeCompare(b.date);
      return cmp !== 0 ? cmp : a.time.localeCompare(b.time);
    });

    if (this.agendaFeedCounter) {
      this.agendaFeedCounter.textContent = `${filtered.length} ${filtered.length === 1 ? 'cita' : 'citas'}`;
    }

    if (filtered.length === 0) {
      this.agendaFeedList.innerHTML = `
        <div style="padding: 2.5rem 1.5rem; text-align: center; color: var(--text-secondary); background: rgba(255,255,255,0.6); border-radius: 18px; border: 1px dashed rgba(0,0,0,0.08);">
          <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">📅</span>
          <strong style="color: var(--text-primary); font-size: 0.95rem; display: block; margin-bottom: 0.25rem;">No hay citas para esta fecha</strong>
          <p style="font-size: 0.8rem; margin: 0 0 1rem 0;">Puedes agendar una nueva consulta con o sin paciente asociado.</p>
          <button type="button" class="primary-gradient-btn" id="btn-agenda-new-appt">+ Programar Cita</button>
        </div>
      `;
      const btn = document.getElementById('btn-agenda-new-appt');
      if (btn) btn.addEventListener('click', () => this.openApptModal());
      return;
    }

    const todayStr = this.getTodayDateString();

    this.agendaFeedList.innerHTML = filtered.map(a => {
      const isToday = a.date === todayStr;
      const patientDisplay = a.patientId === 'none' ? 'Sin paciente directo (Supervisión / Reunión)' : `Paciente: ${a.patientName}`;
      const modalityLabels = {
        presencial: 'Presencial',
        online: 'Online',
        evaluacion: 'Evaluación',
        devolucion: 'Devolución',
        supervision: 'Supervisión'
      };
      const modLabel = modalityLabels[a.modality] || 'Consulta';

      return `
        <div class="appt-item-row" style="background: ${isToday ? 'rgba(59, 130, 246, 0.04)' : 'rgba(255, 255, 255, 0.8)'}; border-left: 3px solid ${isToday ? '#3b82f6' : 'rgba(0,0,0,0.1)'};">
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 65px;">
            <span class="appt-time-pill">${a.time}</span>
            <small style="font-size: 0.68rem; color: var(--text-tertiary); margin-top: 0.25rem; font-weight: 600;">${a.date}</small>
          </div>
          
          <div class="appt-details">
            <strong class="appt-title">${a.title}</strong>
            <span class="appt-patient-name" ${a.patientId !== 'none' ? `data-open-patient-id="${a.patientId}" style="cursor: pointer;" title="Abrir ficha clínica de ${a.patientName}"` : ''}>${patientDisplay}</span>
            <small style="font-size: 0.72rem; color: var(--text-tertiary); margin-top: 0.2rem;">${a.notes}</small>
          </div>

          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem;">
            <span class="appt-badge">${modLabel}</span>
            <button type="button" class="btn-row-action" data-delete-appt="${a.id}" title="Eliminar cita" style="padding: 0.2rem 0.5rem; font-size: 0.7rem; color: #ef4444;">✕</button>
          </div>
        </div>
      `;
    }).join('');

    const patientNameLinks = this.agendaFeedList.querySelectorAll('[data-open-patient-id]');
    patientNameLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.stopPropagation();
        const patId = link.getAttribute('data-open-patient-id');
        if (patId) this.openPatientSheet(patId);
      });
    });

    const deleteBtns = this.agendaFeedList.querySelectorAll('[data-delete-appt]');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const apptId = btn.getAttribute('data-delete-appt');
        if (confirm('¿Deseas cancelar y eliminar esta cita de la agenda?')) {
          const updated = this.appointments.filter(x => x.id !== apptId);
          this.saveAppointments(updated);
          this.renderAll();
        }
      });
    });
  }
}

/* ==========================================================================
   8. CLOUDFLARE PRODUCT LICENSE MODAL CONTROLLER
   ========================================================================== */
class LicenseModalController {
  constructor() {
    this.modal = document.getElementById('modal-license-activation');
    this.btnClose = document.getElementById('btn-close-license-modal');
    this.btnCloseFooter = document.getElementById('btn-close-license-footer');
    this.keyInput = document.getElementById('input-license-key');
    this.btnPaste = document.getElementById('btn-paste-license');
    this.stationIdEl = document.getElementById('license-station-id');
    this.btnCopyStation = document.getElementById('btn-copy-station-id');
    this.demoChips = document.querySelectorAll('.demo-key-chip');
    this.workerUrlInput = document.getElementById('input-cf-worker-url');
    this.btnActivate = document.getElementById('btn-submit-license-activate');
    this.btnDeactivate = document.getElementById('btn-license-deactivate');
    this.feedbackHint = document.getElementById('license-feedback-hint');
    this.statusBanner = document.getElementById('license-status-banner');
    this.bannerTitle = document.getElementById('license-banner-title');
    this.bannerMeta = document.getElementById('license-banner-meta');
    this.bannerTag = document.getElementById('license-banner-tag');

    // Header buttons
    this.btnWelcomeLic = document.getElementById('btn-welcome-license');
    this.btnLibLic = document.getElementById('btn-lib-license-modal');
    this.welcomeLicText = document.getElementById('welcome-lic-text');
    this.libLicLabel = document.getElementById('lib-license-label');
    this.libLicDot = document.getElementById('lib-license-dot');

    this.init();
  }

  init() {
    if (this.stationIdEl) {
      this.stationIdEl.textContent = licenseService.deviceId;
    }
    if (this.workerUrlInput) {
      this.workerUrlInput.value = licenseService.getWorkerUrl();
      this.workerUrlInput.addEventListener('change', () => {
        licenseService.setWorkerUrl(this.workerUrlInput.value);
      });
    }

    this.bindEvents();
    this.updateUI();
  }

  bindEvents() {
    // Open modal triggers
    if (this.btnWelcomeLic) {
      this.btnWelcomeLic.addEventListener('click', (e) => {
        e.stopPropagation();
        this.open();
      });
    }
    if (this.btnLibLic) {
      this.btnLibLic.addEventListener('click', (e) => {
        e.stopPropagation();
        this.open();
      });
    }

    // Close triggers
    if (this.btnClose) this.btnClose.addEventListener('click', () => this.close());
    if (this.btnCloseFooter) this.btnCloseFooter.addEventListener('click', () => this.close());
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Formatting key input (auto dash & uppercase)
    if (this.keyInput) {
      this.keyInput.addEventListener('input', (e) => {
        let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (val.startsWith('PSIOS')) {
          val = val.substring(5);
        }
        let parts = ['PSIOS'];
        for (let i = 0; i < val.length && i < 15; i += 5) {
          parts.push(val.substring(i, i + 5));
        }
        e.target.value = parts.join('-');
      });
    }

    // Paste button
    if (this.btnPaste) {
      this.btnPaste.addEventListener('click', async () => {
        try {
          const text = await navigator.clipboard.readText();
          if (text && this.keyInput) {
            this.keyInput.value = text.trim().toUpperCase();
            this.keyInput.dispatchEvent(new Event('input'));
          }
        } catch {
          if (this.feedbackHint) this.feedbackHint.textContent = 'Usa Ctrl+V para pegar la clave.';
        }
      });
    }

    // Copy station ID
    if (this.btnCopyStation) {
      this.btnCopyStation.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(licenseService.deviceId);
          const orig = this.btnCopyStation.textContent;
          this.btnCopyStation.textContent = '¡Copiado!';
          setTimeout(() => { if (this.btnCopyStation) this.btnCopyStation.textContent = orig; }, 1800);
        } catch {
          // fallback
        }
      });
    }

    // Demo key chips
    this.demoChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const key = chip.getAttribute('data-key');
        if (key && this.keyInput) {
          this.keyInput.value = key;
          if (this.feedbackHint) {
            this.feedbackHint.textContent = `Clave seleccionada: ${key}`;
          }
        }
      });
    });

    // Activate button
    if (this.btnActivate) {
      this.btnActivate.addEventListener('click', () => this.handleActivate());
    }

    // Deactivate button
    if (this.btnDeactivate) {
      this.btnDeactivate.addEventListener('click', () => {
        if (confirm('¿Deseas revocar la activación actual de esta estación?')) {
          licenseService.deactivate();
          this.updateUI();
          if (this.feedbackHint) {
            this.feedbackHint.textContent = 'Licencia desactivada. Puedes ingresar una nueva clave.';
          }
        }
      });
    }
  }

  async handleActivate() {
    const key = this.keyInput ? this.keyInput.value.trim() : '';
    if (!key) {
      if (this.feedbackHint) {
        this.feedbackHint.textContent = 'Por favor ingresa una clave de producto.';
        this.feedbackHint.style.color = '#dc2626';
      }
      return;
    }

    if (this.btnActivate) {
      this.btnActivate.disabled = true;
      this.btnActivate.innerHTML = '<span>Verificando con Cloudflare...</span>';
    }

    try {
      if (this.workerUrlInput) {
        licenseService.setWorkerUrl(this.workerUrlInput.value);
      }
      const lic = await licenseService.activate(key, 'Profesional Clínico');
      this.updateUI();
      if (this.feedbackHint) {
        this.feedbackHint.textContent = `✓ Activada con éxito: ${lic.plan}. Garantía offline permanente.`;
        this.feedbackHint.style.color = '#059669';
      }
    } catch (err) {
      if (this.feedbackHint) {
        this.feedbackHint.textContent = `Error: ${err.message}`;
        this.feedbackHint.style.color = '#dc2626';
      }
    } finally {
      if (this.btnActivate) {
        this.btnActivate.disabled = false;
        this.btnActivate.innerHTML = '<span>🛡️ Activar Estación</span>';
      }
    }
  }

  updateUI() {
    const lic = licenseService.getLicenseInfo();
    const isAct = licenseService.isActivated();

    if (isAct && lic) {
      if (this.bannerTitle) this.bannerTitle.textContent = `${lic.plan} — Licencia Activa`;
      if (this.bannerMeta) {
        this.bannerMeta.textContent = lic.isPerpetual
          ? 'Autorización permanente de por vida • 0 consultas a la nube requeridas'
          : `Válida hasta: ${new Date(lic.expiresAt).toLocaleDateString()}`;
      }
      if (this.bannerTag) {
        this.bannerTag.textContent = lic.tier ? lic.tier.toUpperCase() : 'ACTIVA';
      }
      if (this.welcomeLicText) this.welcomeLicText.textContent = lic.tier === 'enterprise' ? 'Enterprise' : 'Licencia Pro';
      if (this.libLicLabel) this.libLicLabel.textContent = `Licencia: ${lic.tier === 'enterprise' ? 'Enterprise' : 'Activa'}`;
      if (this.libLicDot) this.libLicDot.className = 'status-pill-dot dot-active';
      if (this.btnDeactivate) this.btnDeactivate.style.display = 'inline-block';
      if (this.keyInput && !this.keyInput.value) this.keyInput.value = lic.licenseKey;
    } else {
      if (this.bannerTitle) this.bannerTitle.textContent = 'Modo de Evaluación — Sin Licencia';
      if (this.bannerMeta) this.bannerMeta.textContent = 'Ingresa una clave para desbloquear todas las funciones sin restricciones.';
      if (this.bannerTag) this.bannerTag.textContent = 'EVALUACIÓN';
      if (this.welcomeLicText) this.welcomeLicText.textContent = 'Activar';
      if (this.libLicLabel) this.libLicLabel.textContent = 'Activar PsiOS';
      if (this.libLicDot) this.libLicDot.className = 'status-pill-dot dot-offline';
      if (this.btnDeactivate) this.btnDeactivate.style.display = 'none';
    }
  }

  open() {
    if (!this.modal) return;
    this.updateUI();
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
  }
}

/* ==========================================================================
   9. FIREBASE CLINICAL AUTH & SYNC MODAL CONTROLLER
   ========================================================================== */
class CloudAuthModalController {
  constructor(clinicController) {
    this.clinic = clinicController;
    this.modal = document.getElementById('modal-clinical-auth');
    this.btnClose = document.getElementById('btn-close-auth-modal');
    this.btnCloseFooter = document.getElementById('btn-close-auth-footer');

    // Header buttons
    this.btnLibCloud = document.getElementById('btn-lib-cloud-modal');
    this.btnClinicCloud = document.getElementById('btn-clinic-cloud-modal');
    this.libCloudLabel = document.getElementById('lib-cloud-label');
    this.libCloudDot = document.getElementById('lib-cloud-dot');
    this.clinicDocAvatar = document.getElementById('clinic-header-doc-avatar');
    this.clinicDocName = document.getElementById('clinic-header-doc-name');

    // Tabs
    this.tabs = document.querySelectorAll('.auth-tab-btn');
    this.panes = {
      login: document.getElementById('auth-pane-login'),
      register: document.getElementById('auth-pane-register'),
      config: document.getElementById('auth-pane-config')
    };

    // Active User Banner
    this.bannerAvatar = document.getElementById('auth-banner-avatar');
    this.bannerName = document.getElementById('auth-banner-name');
    this.bannerBadge = document.getElementById('auth-banner-badge');
    this.bannerEmail = document.getElementById('auth-banner-email');
    this.btnLogout = document.getElementById('btn-auth-logout');

    // Login Pane
    this.loginEmail = document.getElementById('auth-login-email');
    this.loginPass = document.getElementById('auth-login-password');
    this.btnLogin = document.getElementById('btn-do-login');
    this.loginFeedback = document.getElementById('auth-login-feedback');

    // Register Pane
    this.regName = document.getElementById('auth-reg-name');
    this.regSpecialty = document.getElementById('auth-reg-specialty');
    this.regEmail = document.getElementById('auth-reg-email');
    this.regPass = document.getElementById('auth-reg-password');
    this.btnRegister = document.getElementById('btn-do-register');
    this.regFeedback = document.getElementById('auth-register-feedback');

    // Config Pane
    this.cfgApiKey = document.getElementById('cfg-api-key');
    this.cfgProjectId = document.getElementById('cfg-project-id');
    this.cfgBucket = document.getElementById('cfg-storage-bucket');
    this.btnSaveCfg = document.getElementById('btn-save-firebase-config');
    this.btnResetCfg = document.getElementById('btn-reset-firebase-config');
    this.cfgFeedback = document.getElementById('auth-config-feedback');

    this.init();
  }

  init() {
    this.bindEvents();
    this.loadCurrentConfig();
    authService.onAuthChange((user) => this.handleUserChange(user));
  }

  bindEvents() {
    // Open triggers
    if (this.btnLibCloud) {
      this.btnLibCloud.addEventListener('click', (e) => {
        e.stopPropagation();
        this.open();
      });
    }
    if (this.btnClinicCloud) {
      this.btnClinicCloud.addEventListener('click', (e) => {
        e.stopPropagation();
        this.open();
      });
    }

    // Close triggers
    if (this.btnClose) this.btnClose.addEventListener('click', () => this.close());
    if (this.btnCloseFooter) this.btnCloseFooter.addEventListener('click', () => this.close());
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    // Tab switching
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        this.switchTab(target);
      });
    });

    // Login action
    if (this.btnLogin) {
      this.btnLogin.addEventListener('click', () => this.handleLogin());
    }

    // Register action
    if (this.btnRegister) {
      this.btnRegister.addEventListener('click', () => this.handleRegister());
    }

    // Logout action
    if (this.btnLogout) {
      this.btnLogout.addEventListener('click', async () => {
        await authService.logout();
        this.showFeedback(this.loginFeedback, 'Sesión cerrada.', 'success');
      });
    }

    // Config save action
    if (this.btnSaveCfg) {
      this.btnSaveCfg.addEventListener('click', () => this.handleSaveConfig());
    }
    if (this.btnResetCfg) {
      this.btnResetCfg.addEventListener('click', () => {
        setStoredFirebaseConfig(null);
        this.loadCurrentConfig();
        this.showFeedback(this.cfgFeedback, 'Configuración restablecida a valores por defecto.', 'success');
      });
    }
  }

  switchTab(tabId) {
    this.tabs.forEach(t => {
      const isTarget = t.getAttribute('data-tab') === tabId;
      t.classList.toggle('active', isTarget);
      t.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    Object.entries(this.panes).forEach(([key, pane]) => {
      if (pane) {
        pane.style.display = key === tabId ? 'block' : 'none';
      }
    });
  }

  handleUserChange(user) {
    if (!user) return;
    if (this.bannerName) this.bannerName.textContent = user.displayName || 'Profesional Clínico';
    if (this.bannerEmail) this.bannerEmail.textContent = user.email || 'clinico@psios.local';
    if (this.bannerBadge) {
      this.bannerBadge.textContent = user.isCloudUser ? 'Nube Conectada' : 'Modo Autónomo Local';
      this.bannerBadge.className = `auth-mode-badge ${user.isCloudUser ? 'cloud' : ''}`;
    }

    // Update clinic header
    if (this.clinicDocName) this.clinicDocName.textContent = user.displayName || 'Profesional Clínico';
    const welcomeName = document.getElementById('welcome-user-fullname');
    if (welcomeName) welcomeName.textContent = user.displayName || 'Profesional Clínico';

    if (this.libCloudLabel) {
      this.libCloudLabel.textContent = user.isCloudUser ? 'Nube Sincronizada' : 'Modo Local';
    }
    if (this.libCloudDot) {
      this.libCloudDot.className = `status-pill-dot ${user.isCloudUser ? 'dot-cloud' : 'dot-offline'}`;
    }

    // Trigger clinic data pull if cloud user
    if (user.isCloudUser && this.clinic) {
      this.clinic.syncCloudData();
    }
  }

  async handleLogin() {
    const email = this.loginEmail?.value.trim();
    const pass = this.loginPass?.value;

    if (!email || !pass) {
      this.showFeedback(this.loginFeedback, 'Por favor completa todos los campos.', 'error');
      return;
    }

    try {
      this.btnLogin.disabled = true;
      this.btnLogin.innerHTML = '<span>Verificando credenciales...</span>';
      const user = await authService.login(email, pass);
      this.showFeedback(this.loginFeedback, `✓ Bienvenido, ${user.displayName}. Sesión activa.`, 'success');
      setTimeout(() => this.close(), 1200);
    } catch (err) {
      this.showFeedback(this.loginFeedback, err.message, 'error');
    } finally {
      this.btnLogin.disabled = false;
      this.btnLogin.innerHTML = '<span>☁️ Iniciar Sesión en la Nube</span>';
    }
  }

  async handleRegister() {
    const name = this.regName?.value.trim();
    const spec = this.regSpecialty?.value.trim();
    const email = this.regEmail?.value.trim();
    const pass = this.regPass?.value;

    if (!email || !pass || !name) {
      this.showFeedback(this.regFeedback, 'Por favor completa nombre, correo y contraseña.', 'error');
      return;
    }

    try {
      this.btnRegister.disabled = true;
      this.btnRegister.innerHTML = '<span>Creando cuenta clínica...</span>';
      const user = await authService.register(email, pass, name, spec);
      this.showFeedback(this.regFeedback, `✓ Cuenta creada con éxito para ${user.displayName}.`, 'success');
      setTimeout(() => this.close(), 1200);
    } catch (err) {
      this.showFeedback(this.regFeedback, err.message, 'error');
    } finally {
      this.btnRegister.disabled = false;
      this.btnRegister.innerHTML = '<span>✨ Crear Cuenta y Conectar Nube</span>';
    }
  }

  loadCurrentConfig() {
    const cfg = getStoredFirebaseConfig();
    if (cfg) {
      if (this.cfgApiKey) this.cfgApiKey.value = cfg.apiKey || '';
      if (this.cfgProjectId) this.cfgProjectId.value = cfg.projectId || '';
      if (this.cfgBucket) this.cfgBucket.value = cfg.storageBucket || '';
    }
  }

  handleSaveConfig() {
    const apiKey = this.cfgApiKey?.value.trim();
    const projectId = this.cfgProjectId?.value.trim();
    const storageBucket = this.cfgBucket?.value.trim();

    if (!apiKey || !projectId) {
      this.showFeedback(this.cfgFeedback, 'Se requiere al menos apiKey y projectId.', 'error');
      return;
    }

    const cfg = {
      apiKey,
      projectId,
      storageBucket: storageBucket || `${projectId}.firebasestorage.app`,
      authDomain: `${projectId}.firebaseapp.com`
    };

    setStoredFirebaseConfig(cfg);
    if (storageBucket) {
      LibraryAssetResolver.setRemoteBucketUrl(`https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o`);
    }
    this.showFeedback(this.cfgFeedback, '✓ Credenciales guardadas. Conexión configurada.', 'success');
  }

  showFeedback(el, msg, type) {
    if (!el) return;
    el.style.display = 'block';
    el.className = `auth-feedback-box ${type}`;
    el.textContent = msg;
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
  }
}

/* ==========================================================================
   10. APP NAVIGATION & USER REGISTRATION CONTROLLER
   ========================================================================== */
class AppNavigationController {
  constructor(kineticTypography, libraryController, clinicController) {
    this.kinetic = kineticTypography;
    this.library = libraryController;
    this.clinic = clinicController;
    this.currentViewId = 'view-splash';

    // Buttons & Elements
    this.btnIngresar = document.getElementById('btn-ingresar');
    this.btnContinuar = document.getElementById('btn-continuar');
    this.btnResetUser = document.getElementById('btn-reset-user');
    this.footerStatus = document.getElementById('footer-status-label');

    // Portal Action Buttons in Welcome Screen
    this.btnPortalLibrary = document.getElementById('btn-portal-library');
    this.btnPortalClinic = document.getElementById('btn-portal-clinic');

    // Cross Navigation & Return Home Buttons
    this.btnLibraryHome = document.getElementById('btn-library-home');
    this.btnClinicHome = document.getElementById('btn-clinic-home');
    this.btnLibraryGotoClinic = document.getElementById('btn-library-goto-clinic');
    this.btnClinicGotoLibrary = document.getElementById('btn-clinic-goto-library');

    // Form elements
    this.courtesySelect = document.getElementById('courtesy-title');
    this.nameInput = document.getElementById('user-name-input');
    this.nameError = document.getElementById('name-error-hint');
    this.genderButtons = document.querySelectorAll('.gender-option-btn');
    this.selectedGender = 'male';

    // Welcome elements
    this.welcomeHeroText = document.getElementById('welcome-hero-text');
    this.welcomeSecondaryPrompt = document.getElementById('welcome-secondary-prompt');
    this.welcomeFullname = document.getElementById('welcome-user-fullname');
    this.welcomeAvatar = document.getElementById('welcome-avatar-icon');
    this.welcomeTopUserPill = document.getElementById('welcome-top-user-pill');

    // Registration 2-Step Elements (Beta 0.0.1)
    this.regStepLicense = document.getElementById('register-step-license');
    this.regStepProfile = document.getElementById('register-step-profile');
    this.regLicenseInput = document.getElementById('reg-license-input');
    this.regLicenseError = document.getElementById('reg-license-error');
    this.btnRegDemoChip = document.getElementById('btn-reg-demo-chip');
    this.btnVerifyLicense = document.getElementById('btn-verify-license');

    // Logout session buttons
    this.btnLogoutSession = document.getElementById('btn-logout-session');
    this.btnLibLogout = document.getElementById('btn-lib-logout');
    this.btnClinicLogout = document.getElementById('btn-clinic-logout');

    this.bindEvents();
    this.updateCourtesySelectLabel(this.selectedGender);
  }

  bindEvents() {
    // 1. 'Ingresar' Button Click
    if (this.btnIngresar) {
      this.btnIngresar.addEventListener('click', () => {
        const savedUser = this.getSavedUser();
        const isLicensed = licenseService.isActivated();
        if (savedUser && isLicensed) {
          this.showWelcomeView(savedUser);
        } else {
          this.showRegistrationView();
        }
      });
    }

    // 1.1 Step 1 Product Key input formatting (uppercase + auto dashes)
    if (this.regLicenseInput) {
      this.regLicenseInput.addEventListener('input', (e) => {
        let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (val.startsWith('PSIOS')) {
          val = val.substring(5);
        }
        let parts = ['PSIOS'];
        for (let i = 0; i < val.length && i < 15; i += 5) {
          parts.push(val.substring(i, i + 5));
        }
        e.target.value = parts.join('-');
        if (this.regLicenseError) this.regLicenseError.classList.remove('visible');
      });

      this.regLicenseInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleVerifyLicenseStep();
        }
      });
    }

    // 1.2 Step 1 Demo Key Chip click
    if (this.btnRegDemoChip) {
      this.btnRegDemoChip.addEventListener('click', () => {
        const key = this.btnRegDemoChip.getAttribute('data-key') || 'PSIOS-PRO-2026-CLINIC';
        if (this.regLicenseInput) {
          this.regLicenseInput.value = key;
          if (this.regLicenseError) this.regLicenseError.classList.remove('visible');
        }
      });
    }

    // 1.3 Step 1 Verify License Button click
    if (this.btnVerifyLicense) {
      this.btnVerifyLicense.addEventListener('click', () => {
        this.handleVerifyLicenseStep();
      });
    }

    // 1.4 Logout Session triggers (clears user, revokes license, re-prompts for key)
    const logoutBtns = [this.btnLogoutSession, this.btnLibLogout, this.btnClinicLogout];
    logoutBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          this.handleLogout();
        });
      }
    });

    // 2. Gender Segmented Selector (Hombre, Sin sexo, Mujer)
    this.genderButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.genderButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        this.selectedGender = btn.dataset.gender || 'male';
        this.updateCourtesySelectLabel(this.selectedGender);
      });
    });

    // 3. Clear validation error upon typing
    if (this.nameInput) {
      this.nameInput.addEventListener('input', () => {
        if (this.nameError) this.nameError.classList.remove('visible');
      });

      this.nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleRegisterSubmit();
        }
      });
    }

    // 4. 'Continuar' Button Click
    if (this.btnContinuar) {
      this.btnContinuar.addEventListener('click', () => {
        this.handleRegisterSubmit();
      });
    }

    // 5. Change User / Reset Button
    if (this.btnResetUser) {
      this.btnResetUser.addEventListener('click', () => {
        this.showRegistrationView();
      });
    }

    // 6. Welcome Portal Grid Buttons: Biblioteca & Clínica
    if (this.btnPortalLibrary) {
      this.btnPortalLibrary.addEventListener('click', () => {
        this.switchView('view-library');
      });
    }

    if (this.btnPortalClinic) {
      this.btnPortalClinic.addEventListener('click', () => {
        this.switchView('view-clinic');
      });
    }

    // 7. Navigation back to Welcome / Inicio
    if (this.btnLibraryHome) {
      this.btnLibraryHome.addEventListener('click', () => {
        const savedUser = this.getSavedUser();
        if (savedUser) {
          this.showWelcomeView(savedUser);
        } else {
          this.switchView('view-welcome');
        }
      });
    }

    if (this.btnClinicHome) {
      this.btnClinicHome.addEventListener('click', () => {
        const savedUser = this.getSavedUser();
        if (savedUser) {
          this.showWelcomeView(savedUser);
        } else {
          this.switchView('view-welcome');
        }
      });
    }

    // 8. Cross-Module Navigation: Biblioteca <-> Clínica
    if (this.btnLibraryGotoClinic) {
      this.btnLibraryGotoClinic.addEventListener('click', () => {
        this.switchView('view-clinic');
      });
    }

    if (this.btnClinicGotoLibrary) {
      this.btnClinicGotoLibrary.addEventListener('click', () => {
        this.switchView('view-library');
      });
    }
  }

  getSavedUser() {
    try {
      const data = localStorage.getItem('psios_user_profile');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  saveUser(userData) {
    try {
      localStorage.setItem('psios_user_profile', JSON.stringify(userData));
    } catch (err) {
      console.warn('Could not save user profile to localStorage:', err);
    }
  }

  resolveTitle(title, gender) {
    if (!title) return '';
    if (title === 'Dr/Dra' || title === 'Dr' || title === 'Dra' || title === 'Dr.' || title === 'Dra.') {
      if (gender === 'male') return 'Dr.';
      if (gender === 'female') return 'Dra.';
      return 'Dr/Dra.';
    }
    if (title === 'Lic' || title === 'Lic.') {
      return 'Lic.';
    }
    if (title === 'Est' || title === 'Est.') {
      return 'Est.';
    }
    return title;
  }

  updateCourtesySelectLabel(gender) {
    if (!this.courtesySelect) return;
    const drOption = this.courtesySelect.querySelector('option[value="Dr/Dra"]');
    if (drOption) {
      if (gender === 'male') {
        drOption.textContent = 'Dr.';
      } else if (gender === 'female') {
        drOption.textContent = 'Dra.';
      } else {
        drOption.textContent = 'Dr/Dra';
      }
    }
  }

  handleRegisterSubmit() {
    const rawName = (this.nameInput?.value || '').trim();
    if (!rawName) {
      if (this.nameError) this.nameError.classList.add('visible');
      if (this.nameInput) this.nameInput.focus();
      return;
    }

    const cleanNameParts = rawName.replace(/^(dr|dra|lic|est)\.?\s+/i, '').split(/\s+/);
    const firstName = cleanNameParts[0] || rawName;
    const rawTitle = this.courtesySelect ? this.courtesySelect.value : 'Dr/Dra';
    const resolvedTitle = this.resolveTitle(rawTitle, this.selectedGender);

    const userData = {
      title: rawTitle,
      displayTitle: resolvedTitle,
      rawName,
      firstName,
      gender: this.selectedGender,
      registeredAt: Date.now()
    };

    this.saveUser(userData);

    // Also update authService profile
    authService.saveLocalUser({
      uid: `user-${Date.now().toString(36)}`,
      email: `${firstName.toLowerCase().replace(/[^a-z0-9]/g, '')}@psios.local`,
      displayName: `${resolvedTitle} ${rawName}`.trim(),
      specialty: 'Psicología Clínica & Semiología',
      isCloudUser: false,
      lastLogin: new Date().toISOString()
    });

    this.showWelcomeView(userData);
  }

  showRegistrationView() {
    const isLicensed = licenseService.isActivated();
    if (!isLicensed) {
      // Step 1: Force product key entry
      if (this.regStepLicense) this.regStepLicense.style.display = 'flex';
      if (this.regStepProfile) this.regStepProfile.style.display = 'none';
      this.switchView('view-register');
      setTimeout(() => {
        if (this.regLicenseInput) this.regLicenseInput.focus();
      }, 420);
    } else {
      // Step 2: Show name & gender entry
      if (this.regStepLicense) this.regStepLicense.style.display = 'none';
      if (this.regStepProfile) this.regStepProfile.style.display = 'flex';
      this.switchView('view-register');
      setTimeout(() => {
        if (this.nameInput) this.nameInput.focus();
      }, 420);
    }
  }

  async handleVerifyLicenseStep() {
    const key = (this.regLicenseInput?.value || '').trim().toUpperCase();
    if (!key) {
      if (this.regLicenseError) {
        this.regLicenseError.textContent = 'Por favor ingresa tu clave de producto.';
        this.regLicenseError.classList.add('visible');
      }
      if (this.regLicenseInput) this.regLicenseInput.focus();
      return;
    }

    if (this.btnVerifyLicense) {
      this.btnVerifyLicense.disabled = true;
      const textSpan = this.btnVerifyLicense.querySelector('.btn-text');
      if (textSpan) textSpan.textContent = 'Verificando...';
    }

    try {
      await licenseService.activate(key, 'Profesional Clínico');
      if (this.regLicenseError) this.regLicenseError.classList.remove('visible');

      // Transition to Step 2 ('¿Quién eres?')
      if (this.regStepLicense) this.regStepLicense.style.display = 'none';
      if (this.regStepProfile) {
        this.regStepProfile.style.display = 'flex';
      }
      setTimeout(() => {
        if (this.nameInput) this.nameInput.focus();
      }, 200);
    } catch (err) {
      if (this.regLicenseError) {
        this.regLicenseError.textContent = err.message || 'Clave no válida. Usa PSIOS-PRO-2026-CLINIC.';
        this.regLicenseError.classList.add('visible');
      }
    } finally {
      if (this.btnVerifyLicense) {
        this.btnVerifyLicense.disabled = false;
        const textSpan = this.btnVerifyLicense.querySelector('.btn-text');
        if (textSpan) textSpan.textContent = 'Verificar y Continuar';
      }
    }
  }

  handleLogout() {
    // Clear user and license persistence
    try {
      localStorage.removeItem('psios_user_profile');
      localStorage.removeItem('psios_clinical_user_v1');
    } catch {}

    licenseService.deactivate();
    authService.logout();

    // Reset form inputs
    if (this.regLicenseInput) this.regLicenseInput.value = '';
    if (this.nameInput) this.nameInput.value = '';
    if (this.regLicenseError) this.regLicenseError.classList.remove('visible');
    if (this.nameError) this.nameError.classList.remove('visible');

    // Reset registration step panes
    if (this.regStepLicense) this.regStepLicense.style.display = 'flex';
    if (this.regStepProfile) this.regStepProfile.style.display = 'none';

    // Hide top capsule
    if (this.welcomeTopUserPill) {
      this.welcomeTopUserPill.setAttribute('aria-hidden', 'true');
      this.welcomeTopUserPill.style.display = 'none';
    }

    // Return to Splash view
    this.switchView('view-splash');
  }

  showWelcomeView(user) {
    let primarySalutation = "Comencemos";
    let avatarEmoji = "🧠";

    if (user.gender === 'male') {
      primarySalutation = "Bienvenido";
      avatarEmoji = "👨‍⚕️";
    } else if (user.gender === 'female') {
      primarySalutation = "Bienvenida";
      avatarEmoji = "👩‍⚕️";
    }

    if (this.welcomeHeroText) {
      this.welcomeHeroText.textContent = primarySalutation;
    }

    if (this.welcomeSecondaryPrompt) {
      this.welcomeSecondaryPrompt.textContent = `¿Cómo comenzamos hoy, ${user.firstName}?`;
    }

    const displayTitle = this.resolveTitle(user.displayTitle || user.title, user.gender);

    if (this.welcomeFullname) {
      this.welcomeFullname.textContent = `${displayTitle} ${user.rawName}`.trim();
    }

    if (this.welcomeAvatar) {
      this.welcomeAvatar.textContent = avatarEmoji;
    }

    if (this.footerStatus) {
      this.footerStatus.textContent = `Sesión Iniciada • ${displayTitle} ${user.firstName}`.trim();
    }

    // Ensure user session pill in top right is visible and updated
    if (this.welcomeTopUserPill) {
      this.welcomeTopUserPill.setAttribute('aria-hidden', 'false');
      this.welcomeTopUserPill.style.display = 'inline-flex';
    }

    // Update clinic header doctor name
    const clinicDocName = document.getElementById('clinic-header-doc-name');
    if (clinicDocName) clinicDocName.textContent = `${displayTitle} ${user.rawName}`.trim();
    const clinicDocAvatar = document.getElementById('clinic-header-doc-avatar');
    if (clinicDocAvatar) clinicDocAvatar.textContent = avatarEmoji;

    this.switchView('view-welcome');
  }

  switchView(targetViewId) {
    if (this.currentViewId === targetViewId) return;

    const currentEl = document.getElementById(this.currentViewId);
    const targetEl = document.getElementById(targetViewId);
    if (!targetEl) return;

    // Pause kinetic typography when not on splash screen
    if (this.kinetic) {
      if (targetViewId === 'view-splash') {
        this.kinetic.resumeCycle();
      } else {
        this.kinetic.pauseCycle();
      }
    }

    // Exit transition with blur & fade-out
    if (currentEl) {
      currentEl.classList.remove('active');
      currentEl.classList.add('view-exit');
    }

    // Enter transition with blur & fade-in after exit delay
    setTimeout(() => {
      if (currentEl) {
        currentEl.classList.remove('view-exit');
        currentEl.style.display = 'none';
      }

      targetEl.style.display = 'flex';
      targetEl.classList.add('view-enter');

      // Toggle layout mode classes on #app container
      const appContainer = document.getElementById('app');
      if (appContainer) {
        if (targetViewId === 'view-welcome') {
          appContainer.classList.add('welcome-mode-active');
          appContainer.classList.remove('workspace-mode-active');
        } else if (targetViewId === 'view-library' || targetViewId === 'view-clinic') {
          appContainer.classList.add('workspace-mode-active');
          appContainer.classList.remove('welcome-mode-active');
        } else {
          appContainer.classList.remove('welcome-mode-active');
          appContainer.classList.remove('workspace-mode-active');
        }
      }

      // Notify Three.js viewer to adjust framing
      window.dispatchEvent(new Event('resize'));

      // Intelligent GPU throttle: resume Three.js only when 3D model is visible
      if (targetViewId === 'view-splash' || targetViewId === 'view-welcome') {
        window.psios3D?.resume();
      } else {
        window.psios3D?.pause();
      }

      // Trigger module lifecycle callbacks
      if (targetViewId === 'view-library' && this.library) {
        this.library.onActivated();
      } else if (targetViewId === 'view-clinic' && this.clinic) {
        this.clinic.onActivated();
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          targetEl.classList.remove('view-enter');
          targetEl.classList.add('active');
          this.currentViewId = targetViewId;
        });
      });
    }, 360);
  }
}

/* ==========================================================================
   9. APPLICATION BOOTSTRAP
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  const kinetic = new KineticTypographyController();
  window.psios3D = new ThreeDViewer();
  window.psiosModal = new LiquidGlassModalController();
  const library = new LibraryController();
  const clinic = new ClinicController();
  window.psiosLibrary = library;
  window.psiosClinic = clinic;
  window.LIBRARY_CATALOG = LIBRARY_CATALOG;
  window.psiosLicense = new LicenseModalController();
  window.psiosCloudAuth = new CloudAuthModalController(clinic);
  window.psiosApp = new AppNavigationController(kinetic, library, clinic);
});
