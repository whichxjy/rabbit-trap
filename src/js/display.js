class TileSheet {
    constructor(row, column, tileSize) {
        // the image for tiles
        this.image = new Image();
        // the number of rows
        this.row = row;
        // the number of columns
        this.column = column;
        // the size of each tile (size = height = width)
        this.tileSize = tileSize;
    }
}

class Display {
    constructor(canvas, bufferWidth, bufferHeight) {
        // buffer to draw
        this.buffer = document.createElement("canvas").getContext("2d");
        this.buffer.canvas.width = bufferWidth;
        this.buffer.canvas.height = bufferHeight;
        // context to display
        this.context = canvas.getContext("2d");
        // tile sheets form the game
        this.tileSheet = new TileSheet(8, 8, 16);

        // draw the map to the buffer
        this.drawMap = (gameMap, mapColumn) => {
            gameMap.forEach((value, index) => {
                // source location to load tile
                let sourceX = (value % this.tileSheet.column) * this.tileSheet.tileSize;
                let sourceY = Math.floor(value / this.tileSheet.column) * this.tileSheet.tileSize;
                // target location to draw tile
                let targetX = (index % mapColumn) * this.tileSheet.tileSize; 
                let targetY = Math.floor(index / mapColumn) * this.tileSheet.tileSize;
                // draw this tile
                this.buffer.drawImage(
                    this.tileSheet.image,
                    sourceX, sourceY, this.tileSheet.tileSize, this.tileSheet.tileSize,
                    targetX, targetY, this.tileSheet.tileSize, this.tileSheet.tileSize
                );
            });
        }

        // draw rectangle to the buffer
        this.drawRectangle = (x, y, width, height, color) => {
            this.buffer.fillStyle = color;
            this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
        };

        // draw the player
        this.drawPlayer = (player, color1, color2) => {
            this.drawRectangle(
                player.posX, player.posY,
                player.width, player.height,
                color1
            );
            this.drawRectangle(
                player.posX + 2, player.posY + 2,
                player.width - 4, player.height - 4,
                color2
            );
        }
    
        // display the context in the buffer
        this.render = () => {
            const bufferWidth = this.buffer.canvas.width;
            const bufferHeight = this.buffer.canvas.height;
            const displayWidth = this.context.canvas.width;
            const displayHeight = this.context.canvas.height;
            this.context.drawImage(
                this.buffer.canvas,
                0, 0, bufferWidth, bufferHeight,
                0, 0, displayWidth, displayHeight
            );
        };

        // resize window
        this.resize = (clientWidth, clientHeight, heightWidthRatio) => {
            if (clientHeight / clientWidth > heightWidthRatio) {
                this.context.canvas.width = clientWidth;
                this.context.canvas.height = clientWidth * heightWidthRatio;
            }
            else {
                this.context.canvas.width = clientHeight / heightWidthRatio;
                this.context.canvas.height = clientHeight;
            }
            this.context.imageSmoothingEnabled = false;
        };
    }
}