// modules/messages/native/burst_reactions/BurstReactionAnimation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/burst_reactions/BurstReactionAnimation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55263: for (var _fun55263_ip = 0;;) switch (_fun55263_ip) {
            case 0:
                var3 = arg0;
                var13 = var3.channelId;
                var14 = var3.messageId;
                var15 = var3.emoji;
                var12 = var3.isFullscreen;
                var10 = var3.onComplete;
                var5 = var3.withFadeOut;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun55263_ip = 45;
                    continue _fun55263
                }
            case 43:
                var5 = true;
            case 45:
                var2 = {
                    'channelId': 0,
                    'messageId': 0,
                    'emoji': 0,
                    'isFullscreen': 0,
                    'onComplete': 0,
                    'withFadeOut': 0
                };
                var0 = null;
                var18 = var2;
                var17 = null;
                var1 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var3;
                var16 = var2;
                var7 = copyDataProperties(var18, var17, var16);
                var2 = _closure1_slot5;
                var8 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var11 = var3.bind(var4)(var2);
                var6 = var11.useBurstReactionAnimationSource;
                var2 = {};
                var2.emoji = var15;
                var2.messageId = var14;
                var2.channelId = var13;
                var2.isFullscreen = var12;
                var6 = var6.bind(var11)(var2);
                var2 = 5;
                var2 = var9[var2];
                var11 = var3.bind(var4)(var2);
                var9 = var11.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = _closure1_slot3;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var9 = var9.bind(var11)(var3, var2);
                if (!(var0 != var6)) {
                    _fun55263_ip = 335;
                    continue _fun55263
                }
            case 193:
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                if (var5) {
                    _fun55263_ip = 213;
                    continue _fun55263
                }
            case 204:
                var2 = 7;
                var2 = var12[var2];
                _fun55263_ip = 220;
                continue _fun55263;
            case 213:
                var11 = 6;
                var2 = var12[var11];
            case 220:
                var3 = var3.bind(var4)(var2);
                var2 = {};
                if (var5) {
                    _fun55263_ip = 240;
                    continue _fun55263
                }
            case 230:
                var2.onAnimationFinish = var10;
                var5 = var2;
                _fun55263_ip = 248;
                continue _fun55263;
            case 240:
                var2.onComplete = var10;
                var5 = var2;
            case 248:
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var8.content;
                var1.style = var8;
                var8 = false;
                var1.loop = var8;
                var8 = 1.2;
                if (!var9) {
                    _fun55263_ip = 293;
                    continue _fun55263
                }
            case 283:
                var8 = 0.5;
            case 293:
                var1.speed = var8;
                var18 = var1;
                var17 = var7;
                var7 = copyDataProperties(var18, var17);
                var18 = var1;
                var17 = var5;
                var5 = copyDataProperties(var18, var17);
                var5 = 'source';
                var1[var5] = var6;
                var1 = var2.bind(var4)(var3, var1);
                return var1;
            case 335:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 33, 1297, 6631, 566, 6673, 6674, 2]);