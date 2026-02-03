// modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun109315: for (var _fun109315_ip = 0;;) switch (_fun109315_ip) {
            case 0:
                var0 = _closure1_slot8;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var2 = var4.bind(var3)(var0);
                var0 = var2.useNavigation;
                var2 = var0.bind(var2)();
                var _closure2_slot0 = var2;
                var0 = 6;
                var0 = var8[var0];
                var4 = var4.bind(var3)(var0);
                var0 = var4.useRoute;
                var4 = var0.bind(var4)();
                var0 = var4.params;
                var9 = var0.channelId;
                var _closure2_slot1 = var9;
                var0 = var4.params;
                var0 = var0.searchContext;
                var _closure2_slot2 = var0;
                var4 = var4.params;
                var11 = var4.onBeforeJumpToMessage;
                var _closure2_slot3 = var11;
                var5 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var10 = var4.width;
                var _closure2_slot4 = var10;
                var5 = _closure1_slot3;
                var8 = var5.useCallback;
                var4 = new Array(4);
                var4[0] = var0;
                var4[1] = var9;
                var4[2] = var11;
                var4[3] = var2;
                var2 = function() { // Environment: var1
                    _fun109316: for (var _fun109316_ip = 0;;) switch (_fun109316_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.trackSearchJumpToMessage;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.searchContext = var6;
                            var6 = _closure2_slot1;
                            var1.channelId = var6;
                            var1 = var4.bind(var5)(var1);
                            var4 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun109316_ip = 76;
                                continue _fun109316
                            }
                        case 68:
                            var4 = _closure2_slot3;
                            var4 = var4.bind(var0)();
                        case 76:
                            var4 = _closure2_slot2;
                            var4 = var4.type;
                            var5 = _closure1_slot6;
                            var5 = var5.DMS;
                            if (!(var5 !== var4)) {
                                _fun109316_ip = 127;
                                continue _fun109316
                            }
                        case 99:
                            var5 = _closure1_slot6;
                            var5 = var5.GUILD;
                            if (!(var5 !== var4)) {
                                _fun109316_ip = 127;
                                continue _fun109316
                            }
                        case 113:
                            var3 = _closure1_slot6;
                            var3 = var3.CHANNEL;
                            if (!(var3 === var4)) {
                                _fun109316_ip = 155;
                                continue _fun109316
                            }
                        case 127:
                            var3 = _closure2_slot0;
                            var2 = var3.getParent;
                            var2 = var2.bind(var3)();
                            if (!(var1 != var2)) {
                                _fun109316_ip = 157;
                                continue _fun109316
                            }
                        case 145:
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                        case 155:
                            return var0;
                        case 157:
                            return var0;
                    }
                };
                var8 = var8.bind(var5)(var2, var4);
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var1 = _closure2_slot4;
                    var0.width = var1;
                    return var0;
                };
                var10 = var4.bind(var5)(var1, var2);
                var1 = var0.type;
                var0 = _closure1_slot6;
                var0 = var0.CHANNEL;
                if (!(var0 !== var1)) {
                    _fun109315_ip = 291;
                    continue _fun109315
                }
            case 234:
                var0 = _closure1_slot6;
                var0 = var0.GUILD_CHANNEL;
                if (!(var0 !== var1)) {
                    _fun109315_ip = 291;
                    continue _fun109315
                }
            case 248:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.channelId = var9;
                var0.onBeforeJumpToMessage = var8;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 291:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {
                    'horizontal': true,
                    'scrollEnabled': false,
                    'bounces': false
                };
                var5 = var7.container;
                var4 = new Array(2);
                var4[0] = var5;
                var4[1] = var10;
                var0.style = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var11 = var7.container;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var4.style = var7;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 9;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.channelId = var9;
                var6.onBeforeJumpToMessage = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 1469, 1472, 1464, 8958, 14023, 2]);