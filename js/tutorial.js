class CheckerboardPainter {
  static get inputProperties() {
    // List of CSS custom properties
    // the paint method can access
    return ["--checkerboard-tile-size"];
  }

  // The paint method, called whenever
  // the element needs to be painted
  paint(ctx, size, properties) {
    // Default tile size if the
    // custom property is not provided
    const defaultTileSize = 10;
    let tileSize = defaultTileSize;

    // Retrieve the custom property value
    const tileSizeProp = properties.get(
      "--checkerboard-tile-size"
    );

    console.log(tileSizeProp);

    // If the custom property exists,
    // parse its value
    if (tileSizeProp) {
      const tileSizeValue =
        tileSizeProp.toString();

      // Use default if parsing fails
      tileSize =
        parseInt(tileSizeValue, 10) ||
        defaultTileSize;
    }

    // Colors to use for the checkerboard pattern
    const colors = ["#181824", "#fff"];

    // Nested loops to paint each tile
    for (
      let y = 0;
      y < size.height;
      y += tileSize
    ) {
      for (
        let x = 0;
        x < size.width;
        x += tileSize
      ) {
        ctx.fillStyle =
          colors[((x + y) / tileSize) % 2 | 0];

        ctx.fillRect(x, y, tileSize, tileSize);
      }
    }
  }
}

// Register the `CheckerboardPainter` under
// the name 'checkerboard' for use
// with CSS Paint API
registerPaint(
  "checkerboard",
  CheckerboardPainter
);
