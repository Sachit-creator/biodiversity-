// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020101010101010101010101020202020201010101010101010101010202020202010101010101010101010102020202020101030303030303030303020202020201010101030202020202020202020202010101010302020202020202020202020202010103020202020202020202020202020101030202020202020202020202020201010302020202020202020202020202010103020202020202020202020202020101030202020202020202020202020201010302020202020202020202020202010103020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
