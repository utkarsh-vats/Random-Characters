class Character {
    constructor(characterActions) {
        this.width = 103;
        this.height = 113.125;
        this.frameX = 3;
        this.frameY = 3;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = (Math.random() * 2) + 4;
        this.diagSpeed = this.speed / 1.4;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
        this.minFrame = 0;
        this.maxFrame = 0;
        if(this.action === "right") {
            this.frameY = 3;
            this.minFrame = 3;
            this.maxFrame = 13;
        } else if(this.action === "up") {
            this.frameY = 0;
            this.minFrame = 3;
            this.maxFrame = 15;
        } else if(this.action === "down") {
            this.frameY = 6;
            this.minFrame = 0;
            this.maxFrame = 12;
        } else if(this.action === "down right") {
            this.frameY = 4;
            this.minFrame = 3;
            this.maxFrame = 13;
        } else if(this.action === "up right") {
            this.frameY = 1;
            this.minFrame = 3;
            this.maxFrame = 14;
        }
    }
    draw() {
        if(this.action === "right") {
            this.frameX = (this.frameX < this.maxFrame) ? this.frameX + 1 : this.minFrame;
            drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        } else if(this.action === "up") {
            this.frameX = (this.frameX < this.maxFrame) ? this.frameX + 1 : this.minFrame;
            drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        } else if(this.action === "down") {
            this.frameX = (this.frameX < this.maxFrame) ? this.frameX + 1 : this.minFrame;
            drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        } else if(this.action === "left") {
            // drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        // } else if(this.action === "up right") {
        } else if(this.action === "down right") {
            this.frameX = (this.frameX < this.maxFrame) ? this.frameX + 1 : this.minFrame;
            drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }
    update() {
        if(this.action === "right") {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                this.y = Math.random() * (canvas.height - this.height);
            } else {
                this.x += this.speed;
            }

        } else if(this.action === "up") {
            if(this.y < 0 - this.height) {
                this.y = canvas.height + this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y -= this.speed;
            }
        } else if(this.action === "down") {
            if(this.y > canvas.height + this.height) {
                this.y = 0 - this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y += this.speed;
            }
        } else if(this.action === "down right") {
            if(this.x > canvas.width + this.width && this.y > canvas.height + this.height) {
                this.y = 0 - this.height;
                this.x = Math.random() * (canvas.width / 2);
            } else {
                this.x += this.diagSpeed;
                this.y += this.diagSpeed;
            }
        }
    }
}
