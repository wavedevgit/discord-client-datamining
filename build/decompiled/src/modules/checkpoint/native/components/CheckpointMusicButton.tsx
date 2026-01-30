// modules/checkpoint/native/components/CheckpointMusicButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.useContext;
    var _closure1_slot3 = var6;
    var6 = var3.useEffect;
    var _closure1_slot4 = var6;
    var3 = var3.useRef;
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppState;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.padding = var10;
    var8.flexGrow = var9;
    var3.closeButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/CheckpointMusicButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CheckpointMusicButton, environment: var1
        _fun87110: for (var _fun87110_ip = 0;;) switch (_fun87110_ip) {
            case 0:
                var2 = _closure1_slot9;
                var3 = undefined;
                var4 = var2.bind(var3)();
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.CheckpointColorContext;
                var2 = var6.bind(var3)(var2);
                var6 = 7;
                var6 = var7[var6];
                var8 = var5.bind(var3)(var6);
                var6 = var8.useToken;
                var2 = var2.primaryColor;
                var6 = var6.bind(var8)(var2);
                var2 = 8;
                var2 = var7[var2];
                var8 = var5.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot7;
                    var0 = var0.isMuted;
                    return var0;
                };
                var8 = var7.bind(var8)(var5, var2);
                var _closure2_slot0 = var8;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var8) {
                    _fun87110_ip = 145;
                    continue _fun87110
                }
            case 136:
                var2 = 10;
                var2 = var9[var2];
                _fun87110_ip = 152;
                continue _fun87110;
            case 145:
                var7 = 9;
                var2 = var9[var7];
            case 152:
                var5 = var5.bind(var3)(var2);
                var7 = _closure1_slot5;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 11;
                var2 = var10[var2];
                var13 = var9.bind(var3)(var2);
                var12 = var13.createSound;
                var11 = _closure1_slot1;
                var2 = 12;
                var2 = var10[var2];
                var11 = var11.bind(var3)(var2);
                var2 = 'vibing_wumpus';
                var2 = var12.bind(var13)(var11, var2);
                var2 = var7.bind(var3)(var2);
                var _closure2_slot1 = var2;
                var7 = _closure1_slot4;
                var11 = function() { // Environment: var1
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.loop;
                    var1 = var1.bind(var2)();
                    var4 = _closure1_slot6;
                    var3 = var4.addEventListener;
                    var2 = 'change';
                    var1 = function(arg0) { // Environment: var0
                        _fun87113: for (var _fun87113_ip = 0;;) switch (_fun87113_ip) {
                            case 0:
                                var1 = 'active';
                                var0 = arg0;
                                if (!(var1 === var0)) {
                                    _fun87113_ip = 35;
                                    continue _fun87113
                                }
                            case 11:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = var1.play;
                                var0 = var0.bind(var1)();
                                _fun87113_ip = 57;
                                continue _fun87113;
                            case 35:
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = var1.pause;
                                var0 = var0.bind(var1)();
                            case 57:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = _closure2_slot1;
                        var1 = var0.current;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        var1 = _closure3_slot0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var7.bind(var3)(var11, var2);
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun87115: for (var _fun87115_ip = 0;;) switch (_fun87115_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            var2 = _closure2_slot0;
                            var0 = 1;
                            if (!var2) {
                                _fun87115_ip = 24;
                                continue _fun87115
                            }
                        case 22:
                            var0 = 0;
                        case 24:
                            var1.volume = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var3)(var1, var2);
                var2 = _closure1_slot8;
                var0 = 13;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.HeaderActionButton;
                var0 = {};
                var0.source = var5;
                var5 = 14;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.toggleMute;
                var0.onPress = var5;
                var5 = 15;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.w4m945;
                var5 = var7.bind(var8)(var5);
                var0.accessibilityLabel = var5;
                var5 = {};
                var5.tintColor = var6;
                var0.imageStyle = var5;
                var4 = var4.closeButton;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11134, 33, 1297, 671, 11136, 3110, 566, 9141, 8458, 8366, 11198, 5283, 11135, 1234, 2]);