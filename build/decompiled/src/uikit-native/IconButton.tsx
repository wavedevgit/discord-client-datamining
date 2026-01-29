// uikit-native/IconButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: SquareIconButton, environment: var8
        _fun91995: for (var _fun91995_ip = 0;;) switch (_fun91995_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.onPress;
                var7 = var1.source;
                var6 = var1.style;
                var10 = var1.iconStyle;
                var13 = var1.size;
                var _closure2_slot0 = var13;
                var8 = var1.disableColor;
                var16 = var1.accessibilityLabel;
                var14 = var1.accessibilityHidden;
                var4 = var1.disabled;
                var1 = _closure1_slot6;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var _closure2_slot1 = var9;
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var13;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    _fun91996: for (var _fun91996_ip = 0;;) switch (_fun91996_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot5;
                            var2 = var2.MEDIUM_32;
                            if (!(var2 !== var3)) {
                                _fun91996_ip = 72;
                                continue _fun91996
                            }
                        case 24:
                            var2 = _closure1_slot5;
                            var2 = var2.LARGE_40;
                            if (!(var2 !== var3)) {
                                _fun91996_ip = 60;
                                continue _fun91996
                            }
                        case 38:
                            var1 = _closure1_slot5;
                            var1 = var1.SMALL_24;
                            var1 = _closure2_slot1;
                            var1 = var1.small;
                            return var1;
                        case 60:
                            var1 = _closure2_slot1;
                            var1 = var1.large;
                            return var1;
                        case 72:
                            var0 = _closure2_slot1;
                            var0 = var0.medium;
                            return var0;
                    }
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 5;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var15 = 'button';
                var0.accessibilityRole = var15;
                var15 = undefined;
                if (var14) {
                    _fun91995_ip = 156;
                    continue _fun91995
                }
            case 153:
                var15 = var16;
            case 156:
                var0.accessibilityLabel = var15;
                var0.accessibilityElementsHidden = var14;
                var0.onPress = var11;
                var0.disabled = var4;
                var11 = var9.container;
                var4 = new Array(3);
                var4[0] = var11;
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var14 = 6;
                var4 = var4[var14];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var11 = _closure1_slot5;
                var11 = var11.LARGE_40;
                if (!(var13 !== var11)) {
                    _fun91995_ip = 269;
                    continue _fun91995
                }
            case 238:
                var13 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var11 = var13.bind(var3)(var11);
                var11 = var11.Sizes;
                var11 = var11.REFRESH_SMALL_16;
                _fun91995_ip = 298;
                continue _fun91995;
            case 269:
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var11 = var12.MEDIUM;
            case 298:
                var4.size = var11;
                var11 = null;
                if (var8) {
                    _fun91995_ip = 312;
                    continue _fun91995
                }
            case 307:
                var11 = var9.icon;
            case 312:
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var4.style = var9;
                var4.disableColor = var8;
                var4.source = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var1 = function(arg0) { // Original name: CircularIconButton, environment: var8
        _fun91997: for (var _fun91997_ip = 0;;) switch (_fun91997_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.style;
                var6 = var2.size;
                var5 = var2.disableColor;
                var1 = {
                    'style': 0,
                    'size': 0,
                    'disableColor': 0
                };
                var12 = null;
                var13 = var1;
                var0 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var2;
                var11 = var1;
                var4 = copyDataProperties(var13, var12, var11);
                var0 = _closure1_slot6;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot7;
                var0 = {};
                var10 = _closure1_slot5;
                var10 = var10.SMALL_24;
                if (!(var10 !== var6)) {
                    _fun91997_ip = 137;
                    continue _fun91997
                }
            case 91:
                var10 = _closure1_slot5;
                var10 = var10.MEDIUM_32;
                if (!(var10 !== var6)) {
                    _fun91997_ip = 129;
                    continue _fun91997
                }
            case 105:
                var9 = _closure1_slot5;
                var10 = var9.LARGE_40;
                var9 = undefined;
                if (!(var10 === var6)) {
                    _fun91997_ip = 143;
                    continue _fun91997
                }
            case 121:
                var9 = var7.largeCircular;
                _fun91997_ip = 143;
                continue _fun91997;
            case 129:
                var9 = var7.mediumCircular;
                _fun91997_ip = 143;
                continue _fun91997;
            case 137:
                var9 = var7.smallCircular;
            case 143:
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.style = var7;
                var0.size = var6;
                var13 = var0;
                var12 = var4;
                var4 = copyDataProperties(var13, var12);
                var4 = 'disableColor';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {};
    var9 = 24;
    var4.SMALL_24 = var9;
    var7 = 'SMALL_24';
    var4[var9] = var7;
    var9 = 32;
    var4.MEDIUM_32 = var9;
    var7 = 'MEDIUM_32';
    var4[var9] = var7;
    var9 = 40;
    var4.LARGE_40 = var9;
    var7 = 'LARGE_40';
    var4[var9] = var7;
    var _closure1_slot5 = var4;
    var14 = 2;
    var7 = var6[var14];
    var10 = var5.bind(var0)(var7);
    var9 = var10.createStyles;
    var7 = {};
    var11 = {
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = 3;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var11.borderRadius = var12;
    var12 = 4;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.DARK_PRIMARY_700_LIGHT_PRIMARY_230;
    var11.backgroundColor = var13;
    var7.container = var11;
    var11 = {};
    var13 = var4.SMALL_24;
    var11.height = var13;
    var13 = var4.SMALL_24;
    var11.width = var13;
    var7.small = var11;
    var11 = {};
    var13 = var4.MEDIUM_32;
    var11.height = var13;
    var13 = var4.MEDIUM_32;
    var11.width = var13;
    var7.medium = var11;
    var11 = {};
    var13 = var4.LARGE_40;
    var11.height = var13;
    var13 = var4.LARGE_40;
    var11.width = var13;
    var7.large = var11;
    var11 = {};
    var13 = var4.SMALL_24;
    var13 = var13 / var14;
    var11.borderRadius = var13;
    var7.smallCircular = var11;
    var11 = {};
    var13 = var4.MEDIUM_32;
    var13 = var13 / var14;
    var11.borderRadius = var13;
    var7.mediumCircular = var11;
    var11 = {};
    var13 = var4.LARGE_40;
    var13 = var13 / var14;
    var11.borderRadius = var13;
    var7.largeCircular = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.DARK_PRIMARY_300_LIGHT_PRIMARY_500;
    var11.tintColor = var12;
    var7.icon = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot6 = var7;
    var3.Sizes = var4;
    var1.Sizes = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/IconButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SquareIconButton = var3;
    var2.CircularIconButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4828, 4858, 4039, 2]);