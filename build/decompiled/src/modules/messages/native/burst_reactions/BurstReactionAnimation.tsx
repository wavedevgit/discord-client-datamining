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
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var6 = var7.create;
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
        _fun54485: for (var _fun54485_ip = 0;;) switch (_fun54485_ip) {
            case 0:
                var6 = arg0;
                var12 = var6.channelId;
                var13 = var6.messageId;
                var14 = var6.emoji;
                var11 = var6.isFullscreen;
                var2 = var6.onComplete;
                var5 = var6.withFadeOut;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun54485_ip = 45;
                    continue _fun54485
                }
            case 43:
                var5 = true;
            case 45:
                var3 = {
                    'channelId': 0,
                    'messageId': 0,
                    'emoji': 0,
                    'isFullscreen': 0,
                    'onComplete': 0,
                    'withFadeOut': 0
                };
                var0 = null;
                var17 = var3;
                var16 = null;
                var1 = silentSetPrototypeOf(var17, var16);
                var17 = {};
                var16 = var6;
                var15 = var3;
                var7 = copyDataProperties(var17, var16, var15);
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 4;
                var1 = var9[var1];
                var10 = var3.bind(var4)(var1);
                var6 = var10.useBurstReactionAnimationSource;
                var1 = {};
                var1.emoji = var14;
                var1.messageId = var13;
                var1.channelId = var12;
                var1.isFullscreen = var11;
                var6 = var6.bind(var10)(var1);
                var1 = 5;
                var1 = var9[var1];
                var10 = var3.bind(var4)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot3;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var9 = var9.bind(var10)(var3, var1);
                if (!(var0 != var6)) {
                    _fun54485_ip = 331;
                    continue _fun54485
                }
            case 185:
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                if (var5) {
                    _fun54485_ip = 205;
                    continue _fun54485
                }
            case 196:
                var1 = 7;
                var1 = var11[var1];
                _fun54485_ip = 212;
                continue _fun54485;
            case 205:
                var10 = 6;
                var1 = var11[var10];
            case 212:
                var3 = var3.bind(var4)(var1);
                var1 = {};
                if (var5) {
                    _fun54485_ip = 232;
                    continue _fun54485
                }
            case 222:
                var1.onAnimationFinish = var2;
                var5 = var1;
                _fun54485_ip = 240;
                continue _fun54485;
            case 232:
                var1.onComplete = var2;
                var5 = var1;
            case 240:
                var2 = _closure1_slot4;
                var1 = {};
                var8 = _closure1_slot5;
                var8 = var8.content;
                var1.style = var8;
                var8 = false;
                var1.loop = var8;
                var8 = 1.2;
                if (!var9) {
                    _fun54485_ip = 289;
                    continue _fun54485
                }
            case 279:
                var8 = 0.5;
            case 289:
                var1.speed = var8;
                var17 = var1;
                var16 = var7;
                var7 = copyDataProperties(var17, var16);
                var17 = var1;
                var16 = var5;
                var5 = copyDataProperties(var17, var16);
                var5 = 'source';
                var1[var5] = var6;
                var1 = var2.bind(var4)(var3, var1);
                return var1;
            case 331:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 6520, 566, 6562, 6563, 2]);