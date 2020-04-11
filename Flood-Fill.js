/*

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

*/

var floodFill = function (image, sr, sc, newColor) {
  const val = image[sr][sc];
  if (val === newColor) return image;

  function gen(r, c) {
    image[r][c] = newColor;
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    dirs.forEach((d) => {
      const x = r + d[0],
        y = c + d[1];

      if (x >= 0 && x < image.length && y >= 0 && y < image[x].length) {
        if (image[x][y] === val) gen(x, y);
      }
    });
  }

  gen(sr, sc);
  return image;
};
