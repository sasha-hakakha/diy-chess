/*

Should we be using an icon name string?
  */

class Peice{
    name: string;
    movement: MovementType;
    icon_name: string;
    constructor(name: string, movement: MovementType, icon_name: string){
        this.name = name;
        this.movement = movement;
        this.icon_name = icon_name;
    }
}

class MovementType{
    limit: number;
    constructor(limit: number){
        this.limit = limit;
    }
}

class VerticalMovement extends MovementType{
    up: boolean;
    constructor(up: boolean, limit: number){
        super(limit);
        this.up = up;
    }
}

class HorizontalMovement extends MovementType{
    left: boolean;
    constructor(left: boolean, limit: number){
        super(limit);
        this.left = left;
    }
}

class DiagonalMovement extends MovementType{
    up: boolean;
    left: boolean;
    constructor(up: boolean, left: boolean, limit: number){
        super(limit);
        this.up = up;
        this.left = left;
    }
}

class LMovmenet extends DiagonalMovement{
    horizontal_length: number;
    vertical_length: number;
    constructor(h: number, v: number, up: boolean, left: boolean, limit:number){
        super(up, left, limit);
        this.horizontal_length = h;
        this.vertical_length = v;
    }
}
