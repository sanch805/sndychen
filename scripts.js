<canvas id="canvas" style="position: fixed; inset: 0; z-index: 99999; height: 100vh; width: 100%; pointer-events: none"></canvas>

<script>
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blocks = [];
    let lastMove = Date.now();
    let color = getCursorColor();  // Initialize with the current color mode

    function getCursorColor() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? '#fff' : '#000';
    }

    const drawSquare = (x, y) => {
      blocks.push({x, y, time: Date.now()});

      while (blocks.length > 12) {
        blocks.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let block of blocks) {
        ctx.fillStyle = color;
        ctx.fillRect(block.x - window.scrollX, block.y - window.scrollY, 4, 4);
      }
    };

    document.addEventListener("mousemove", (e) => {
      lastMove = Date.now();
      drawSquare(e.pageX, e.pageY);
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Listen for changes in color scheme and update cursor color
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      color = e.matches ? '#fff' : '#000';  // Set color to white if dark mode, black if light mode
    });

    // Clear old blocks after inactivity
    setInterval(() => {
      if (Date.now() - lastMove > 400) {
        blocks.shift();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let block of blocks) {
          ctx.fillStyle = color;
          ctx.fillRect(block.x - window.scrollX, block.y - window.scrollY, 4, 4);
        }
      }
    }, 50);
</script>

<canvas id="canvas" style="position: fixed; inset: 0; z-index: 99999; height: 100vh; width: 100%; pointer-events: none"></canvas>

<script>
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blocks = [];
    let lastMove = Date.now();
    let color = getCursorColor();  // Initialize with the current color mode

    function getCursorColor() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? '#fff' : '#000';
    }

    const drawSquare = (x, y) => {
      blocks.push({x, y, time: Date.now()});

      while (blocks.length > 12) {
        blocks.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let block of blocks) {
        ctx.fillStyle = color;
        ctx.fillRect(block.x - window.scrollX, block.y - window.scrollY, 4, 4);
      }
    };

    document.addEventListener("mousemove", (e) => {
      lastMove = Date.now();
      drawSquare(e.pageX, e.pageY);
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Listen for changes in color scheme and update cursor color
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      color = e.matches ? '#fff' : '#000';  // Set color to white if dark mode, black if light mode
    });

    // Clear old blocks after inactivity
    setInterval(() => {
      if (Date.now() - lastMove > 400) {
        blocks.shift();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let block of blocks) {
          ctx.fillStyle = color;
          ctx.fillRect(block.x - window.scrollX, block.y - window.scrollY, 4, 4);
        }
      }
    }, 50);
</script>