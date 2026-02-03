// modules/game_console/native/GameConsoleConnecting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var6 = var3.Pressable;
    var _closure1_slot4 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.toggleFocus;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var11 = 'center';
    var9 = 'justifyContent';
    var8[var9] = var11;
    var9 = 'alignItems';
    var8[var9] = var11;
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.BLACK;
    var9 = 'backgroundColor';
    var8[var9] = var10;
    var3.root = var8;
    var8 = {};
    var9 = '75%';
    var8.width = var9;
    var3.animation = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/GameConsoleConnecting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69568: for (var _fun69568_ip = 0;;) switch (_fun69568_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.awaitingRemoteSessionInfo;
                var2 = _closure1_slot10;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var9 = _closure1_slot3;
                var4 = var9.useRef;
                var2 = null;
                var8 = var4.bind(var9)(var2);
                var _closure2_slot0 = var8;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var10 = var4.bind(var3)(var2);
                var7 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var7 = var7.bind(var10)(var4, var2);
                var _closure2_slot1 = var7;
                var4 = var9.useEffect;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var1
                    _fun69570: for (var _fun69570_ip = 0;;) switch (_fun69570_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun69570_ip = 35;
                                continue _fun69570
                            }
                        case 10:
                            var0 = _closure2_slot0;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun69570_ip = 35;
                                continue _fun69570
                            }
                        case 25:
                            var0 = var1.reset;
                            var0 = var0.bind(var1)();
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var9)(var1, var2);
                var1 = var0.type;
                var0 = _closure1_slot8;
                var0 = var0.XBOX;
                if (!(var0 !== var1)) {
                    _fun69568_ip = 318;
                    continue _fun69568
                }
            case 146:
                var0 = _closure1_slot8;
                var0 = var0.PLAYSTATION;
                if (!(var0 !== var1)) {
                    _fun69568_ip = 242;
                    continue _fun69568
                }
            case 160:
                var0 = _closure1_slot8;
                var0 = var0.PLAYSTATION_STAGING;
                if (!(var0 !== var1)) {
                    _fun69568_ip = 242;
                    continue _fun69568
                }
            case 174:
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {
                    'animating': true,
                    'size': 'large'
                };
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 7;
                var4 = var10[var4];
                var4 = var9.bind(var3)(var4);
                var4 = var4.unsafe_rawColors;
                var4 = var4.WHITE;
                var0.color = var4;
                var4 = var2.bind(var3)(var1, var0);
                _fun69568_ip = 392;
                continue _fun69568;
            case 242:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 9;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var5.animation;
                var0.style = var9;
                var0.ref = var8;
                var10 = _closure1_slot0;
                var9 = 11;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var0.source = var9;
                var9 = !var7;
                var0.autoPlay = var9;
                var4 = var2.bind(var3)(var1, var0);
                _fun69568_ip = 392;
                continue _fun69568;
            case 318:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 9;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var5.animation;
                var0.style = var9;
                var0.ref = var8;
                var9 = _closure1_slot0;
                var8 = 10;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var0.source = var8;
                var7 = !var7;
                var0.autoPlay = var7;
                var4 = var2.bind(var3)(var1, var0);
            case 392:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = _closure1_slot7;
                var0.onPress = var6;
                var5 = var5.root;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 7882, 660, 33, 1297, 671, 566, 6599, 8697, 8698, 2]);