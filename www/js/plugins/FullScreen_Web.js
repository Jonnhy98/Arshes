//=============================================================================
// FitToBrowser.js
//=============================================================================
 /*:
 * @plugindesc Fit to Browser v1.00
 * @author Afar Build 2 / Credit to YanFly for a couple of lines from ScreenResolution.js
 *
 * @param Minimum Width
 * @desc Makes the game not go below this size. 0 = doesn't matter.
 * Default: 640
 * @default 640
 *
 * @param Minimum Height
 * @desc Makes the game not go below this size.  0 = doesn't matter.                      
 * Default: 480
 * @default 480
 *
 * @param Maximum Width
 * @desc Makes the game not go above this size. 0 = doesn't matter.
 * Default: 1024
 * @default 1024
 *
 * @param Maximum Height
 * @desc Makes the game not go above this size. 0 = doesn't matter.                      
 * Default: 768
 * @default 768
 */

var AmyPond = AmyPond || {};
AmyPond.resolution = AmyPond.resolution || {};

AmyPond.parameters = PluginManager.parameters('FitToBrowser');
AmyPond.minWidth = Number(AmyPond.parameters['Minimum Width'] || 0);
AmyPond.minHeight = Number(AmyPond.parameters['Minimum Height'] || 0);
AmyPond.maxWidth = Number(AmyPond.parameters['Maximum Width'] || 0);
AmyPond.maxHeight = Number(AmyPond.parameters['Maximum Height'] || 0);

AmyPond.resize = function() {
    AmyPond.w = window.screen.width * window.devicePixelRatio;  //window.innerWidth
    //|| document.documentElement.clientWidth
    //|| document.body.clientWidth;

    AmyPond.h = window.screen.height * window.devicePixelRatio; //window.outerHeight
    //|| document.documentElement.clientHeight
    //|| document.body.clientHeight;

    if (AmyPond.minWidth != 0) {
        if (AmyPond.w < AmyPond.minWidth) {
            AmyPond.w = AmyPond.minWidth;
        }
    }
    if (AmyPond.maxWidth != 0) {
        if (AmyPond.w > AmyPond.maxWidth) {
            AmyPond.w = AmyPond.maxWidth;
        }
    }
    if (AmyPond.minHeight != 0) {
        if (AmyPond.h < AmyPond.minHeight) {
            AmyPond.h = AmyPond.minHeight;
        }
    }
    if (AmyPond.maxHeight != 0) {
        if (AmyPond.h > AmyPond.maxHeight) {
            AmyPond.h = AmyPond.maxHeight;
        }
    }
    
    SceneManager._screenWidth = 816; //Math.round((AmyPond.w * 600)/AmyPond.h);
    SceneManager._screenHeight = Math.round((AmyPond.h * 816)/AmyPond.w); //748
    SceneManager._boxWidth = 816;
    SceneManager._boxHeight = Math.round((AmyPond.h * 816)/AmyPond.w);
    window.resizeBy(AmyPond.w,AmyPond.h);
};

AmyPond.resize();
============================================
// End of File
//=============================================================================
 
