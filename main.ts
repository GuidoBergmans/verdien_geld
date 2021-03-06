function wereld () {
    tiles.setTilemap(tilemap`level3`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile31`, function (sprite, location) {
    info.changeScoreBy(-1)
    tiles.setTileAt(location, assets.tile`tile44`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile37`, function (sprite, location) {
    fabriek()
})
function fabriek () {
    tiles.setTilemap(tilemap`level4`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile32`, function (sprite, location) {
    info.changeScoreBy(-1)
    tiles.setTileAt(location, assets.tile`tile45`)
    mySprite.destroy()
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f 2 1 2 
        . . e 4 f 2 2 2 2 2 2 f 4 2 1 2 
        . . 4 d f 2 2 2 2 2 2 f d 2 1 2 
        . . 4 4 f 4 4 5 5 4 4 f 4 2 1 2 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile43`, function (sprite, location) {
    info.changeScoreBy(10)
    music.baDing.play()
    tiles.setTileAt(location, assets.tile`tile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile41`, function (sprite, location) {
    wereld()
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level3`)
forever(function () {
    controller.moveSprite(mySprite)
})
forever(function () {
    music.setVolume(0)
    music.playMelody("G B A G C5 B A B ", 120)
})
