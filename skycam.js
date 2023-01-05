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

  /* [SERVERSIDE EXAMPLE]

      //TO SKY LIKE IN GTA ONLINE
      alt.emitClient(player, 'skycam:Move', 'up', 1); 

      //TO PLAYER LIKE IN GTA ONLINE
      alt.emitClient(player, 'skycam:Move', 'up', 1);

    */
  switch (moveTo) {
    case 'up':
      native.switchToMultiFirstpart(alt.Player.local.scriptID, 0, parseInt(switchType));
      break;
    case 'down':
      native.switchToMultiSecondpart(alt.Player.local.scriptID);
      break;
    default:
      break;
  }
}
