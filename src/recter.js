export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
       // get prediction results
       const [x, y, width, height] = prediction['bbox'];
       const text = prediction['class'];

       //set styling
       const color = '#' + Math.floor(Math.random()*13203210).toString(16);
       ctx.strokeStyle = color
       ctx.font = '18px Arial'
       ctx.fillStyle = color

       // Draw rectangles and text
       ctx.beginPath()
       ctx.fillText(text, x, y)
       ctx.rect(x, y, width, height)
       ctx.stroke();
   })
}