// modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Dimensions;
    var _closure1_slot3 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun102111: for (var _fun102111_ip = 0;;) switch (_fun102111_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.guildId;
                var _closure2_slot0 = var11;
                var10 = var1.section;
                var _closure2_slot1 = var10;
                var9 = var1.listRef;
                var _closure2_slot2 = var9;
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var3 = undefined;
                var8 = var1.bind(var3)(var2);
                var6 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.isVoiceCategoryCollapsed;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var8)(var5, var2);
                var _closure2_slot3 = var6;
                var8 = _closure1_slot2;
                var5 = var8.useCallback;
                var2 = new Array(4);
                var2[0] = var6;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var0 = function() { // Environment: var0
                    _fun102113: for (var _fun102113_ip = 0;;) switch (_fun102113_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 5;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            if (var2) {
                                _fun102113_ip = 80;
                                continue _fun102113
                            }
                        case 35:
                            var4 = var3.voiceCategoryCollapse;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure2_slot2;
                            var5 = var2.current;
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun102113_ip = 120;
                                continue _fun102113
                            }
                        case 65:
                            var4 = var5.scrollToTop;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            _fun102113_ip = 120;
                            continue _fun102113;
                        case 80:
                            var2 = var3.voiceCategoryExpand;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = function() { // Environment: var1
                                _fun102114: for (var _fun102114_ip = 0;;) switch (_fun102114_ip) {
                                    case 0:
                                        var0 = _closure2_slot2;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun102114_ip = 116;
                                            continue _fun102114
                                        }
                                    case 18:
                                        var1 = var2.scrollToLocation;
                                        var0 = {
                                            'animated': false,
                                            'section': null,
                                            'item': 0
                                        };
                                        var3 = _closure2_slot1;
                                        var0.section = var3;
                                        var3 = global;
                                        var5 = var3.Math;
                                        var4 = var5.round;
                                        var7 = _closure1_slot3;
                                        var6 = var7.get;
                                        var3 = 'window';
                                        var3 = var6.bind(var7)(var3);
                                        var6 = var3.height;
                                        var3 = 0.3;
                                        var3 = var3 * var6;
                                        var3 = var4.bind(var5)(var3);
                                        var0.paddingStart = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 116:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = 0;
                            var1 = var3.bind(var0)(var2, var1);
                        case 120:
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var0, var2);
                var2 = _closure1_slot5;
                var0 = 6;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 7;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun102111_ip = 220;
                    continue _fun102111
                }
            case 205:
                var6 = var7.Q2gPWl;
                var6 = var8.bind(var9)(var6);
                _fun102111_ip = 233;
                continue _fun102111;
            case 220:
                var7 = var7["/eB9Bg"];
                var6 = var8.bind(var9)(var7);
            case 233:
                var0.text = var6;
                var8 = _closure1_slot5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 8;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var7 = var4.VoiceNormalIcon;
                var6 = {};
                var4 = 'sm';
                var6.size = var4;
                var6 = var8.bind(var3)(var7, var6);
                var0.icon = var6;
                var0.onPress = var5;
                var5 = 'secondary';
                var0.variant = var5;
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/items/ShowAllVoiceChannelsButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4541, 33, 566, 13270, 4043, 1234, 4826, 2]);