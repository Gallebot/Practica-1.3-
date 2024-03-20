// Definir la clase Size
class Size {
    constructor(width = 80, height = 60) { //Funcion constructora
      this.width = width;    //Ancho 
      this.height = height;  //Alto
    }
  
    resize(newWidth, newHeight) {
      this.width = newWidth;   //Nuevo ancho
      this.height = newHeight;  //Nuevo alto
    }
 }

  // Definir la clase Position
  class Position {
    constructor(x = 0, y = 0) { //Funcion constructora 
        this.x = x;
        this.y = y;
    }
    
    move(newX, newY) {
        this.x = newX;   //Nuevo X
        this.y = newY;   //Nuevo Y
    }
  }

   // Definir la clase ProgramWindow
   class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size ();
        this.position = new Position ();
    }

   }