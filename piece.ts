class Peice{
    name: string;
    movement: MovementType;
    constructor(name: string, movement: MovementType){
        this.name = name;
        this.movement = movement;
    }
}

class MovementType{
    limit: bigint;
    constructor(limit: bigint){
        this.limit = limit;
    }
}

class VerticalMovement extends MovementType{
    up: bool;
    constructor(up: bool, limit: bigint){
        this.up = up;
        super(limit);
    }
}

class HorizontalMovement extends MovementType{
    left: bool;
    constructor(left: bool, limit: bigint){
        this.left = left;
        super(limit);
    }
}

class DiagonalMovmenet extends MovmenetType{
    up: bool;
    left: bool;
    constructor(up: bool, left: bool, limit: bigint){
        this.up = up;
        this.left = left;
        super(limit);
    }
}

class LMovmenet extends MovementType{
    horizontal_length = bigint;
    vertical_length = bigint;
    constructor(h: bigint, v: bigint; up: bool, left: bool, limit:bigint){
        this.horizontal_length = h;
        this.vertical_length = v;
        super(up, left, limit);
    }
}
