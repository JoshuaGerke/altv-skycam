import alt from 'alt-client';
import * as native from 'natives';

alt.onServer('skycam:Move', moveFromToAir);

function moveFromToAir(moveTo, switchType) {
    /*
        switchType: 0 - 3

        0: 1 step towards player
        1: 3 steps out from player (Recommended)
        2: 1 step out from player
        3: 1 step towards player
    */
    switch (moveTo) {
        case 'up':
            native.switchOutPlayer(alt.Player.local.scriptID, 0, parseInt(switchType));
            break;
        case 'down':
            native.switchInPlayer(alt.Player.local.scriptID);
            break;
        default:
            break;
    }
}
