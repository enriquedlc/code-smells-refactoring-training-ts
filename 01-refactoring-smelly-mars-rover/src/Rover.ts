export class Coordiantes {
    private readonly x: number;
    private readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Rover {
    private direction: string;
    private y: number;
    private x: number;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public receive(commandsSequence: string) {
        for (let i = 0; i < commandsSequence.length; ++i) {
            const command = commandsSequence.substring(i, i + 1);

            if (command === "l") {
                this.rotateLeft();
            } else if (command === "r") {
                this.rotateRight();
            } else {
                // Displace Rover
                let displacement1 = -1;

                if (command === "f") {
                    displacement1 = 1;
                }
                let displacement = displacement1;

                if (this.isFacingNorth()) {
                    this.y += displacement;
                } else if (this.isFacingSouth()) {
                    this.y -= displacement;
                } else if (this.isFacingWest()) {
                    this.x -= displacement;
                } else {
                    this.x += displacement;
                }
            }
        }
    }

    private isFacingWest() {
        return this.direction === "W";
    }

    private isFacingSouth() {
        return this.direction === "S";
    }

    private isFacingNorth() {
        return this.direction === "N";
    }

    private setDirection(direction: string) {
        this.direction = direction;
    }

    private rotateRight() {
        if (this.isFacingNorth()) {
            this.setDirection("E");
        } else if (this.isFacingSouth()) {
            this.setDirection("W");
        } else if (this.isFacingWest()) {
            this.setDirection("N");
        } else {
            this.setDirection("S");
        }
    }

    private rotateLeft() {
        if (this.isFacingNorth()) {
            this.setDirection("W");
        } else if (this.isFacingSouth()) {
            this.setDirection("E");
        } else if (this.isFacingWest()) {
            this.setDirection("S");
        } else {
            this.setDirection("N");
        }
    }
}
