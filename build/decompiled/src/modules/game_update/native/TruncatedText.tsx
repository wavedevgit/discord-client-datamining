// modules/game_update/native/TruncatedText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignSelf': 'flex-start',
        'borderBottomWidth': 0.8,
        'borderColor': null,
        'marginTop': 20
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_LINK;
    var8.borderColor = var9;
    var3.toggleTruncateButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/native/TruncatedText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun118081: for (var _fun118081_ip = 0;;) switch (_fun118081_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.onToggle;
                var _closure2_slot0 = var0;
                var10 = var2.lineClamp;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun118081_ip = 30;
                    continue _fun118081
                }
            case 27:
                var10 = 8;
            case 30:
                var _closure2_slot1 = var10;
                var0 = null;
                var1 = Object.create(var0);
                var5 = 0;
                var1.onToggle = var5;
                var1.lineClamp = var5;
                var19 = {};
                var18 = var2;
                var17 = var1;
                var14 = copyDataProperties(var19, var18, var17);
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot8;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var0 = var2.useState;
                var1 = false;
                var0 = var0.bind(var2)(var1);
                var7 = _closure1_slot2;
                var6 = 2;
                var0 = var7.bind(var3)(var0, var6);
                var11 = var0[var5];
                _closure2_slot2 = var11;
                var4 = 1;
                var0 = var0[var4];
                _closure2_slot3 = var0;
                var0 = var2.useState;
                var0 = var0.bind(var2)(var1);
                var0 = var7.bind(var3)(var0, var6);
                var5 = var0[var5];
                _closure2_slot4 = var5;
                var0 = var0[var4];
                _closure2_slot5 = var0;
                var0 = var2.useRef;
                var0 = var0.bind(var2)(var1);
                _closure2_slot6 = var0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = function() {
                    _fun118082: for (var _fun118082_ip = 0;;) switch (_fun118082_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun118082_ip = 28;
                                continue _fun118082
                            }
                        case 13:
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 28:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun118082_ip = 55;
                                continue _fun118082
                            }
                        case 35:
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = !var0;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var6;
                var6 = 'togglebutton';
                var0.accessibilityRole = var6;
                if (!var5) {
                    _fun118081_ip = 232;
                    continue _fun118081
                }
            case 222:
                var4 = 0.8;
            case 232:
                var0.activeOpacity = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var13 = 6;
                var4 = var4[var13];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {};
                var19 = var4;
                var18 = var14;
                var14 = copyDataProperties(var19, var18);
                var14 = undefined;
                if (!var5) {
                    _fun118081_ip = 291;
                    continue _fun118081
                }
            case 283:
                var14 = undefined;
                if (var11) {
                    _fun118081_ip = 291;
                    continue _fun118081
                }
            case 288:
                var14 = var10;
            case 291:
                var10 = 'lineClamp';
                var4[var10] = var14;
                var10 = function arg0() {
                    _fun118084: for (var _fun118084_ip = 0;;) switch (_fun118084_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            if (var1) {
                                _fun118084_ip = 66;
                                continue _fun118084
                            }
                        case 15:
                            var2 = _closure2_slot6;
                            var1 = true;
                            var2.current = var1;
                            var2 = _closure2_slot5;
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.lines;
                            var1 = var1.length;
                            var0 = _closure2_slot1;
                            var1 = var1 > var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = 'onTextLayout';
                var4[var8] = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun118081_ip = 483;
                    continue _fun118081
                }
            case 336:
                var8 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var9.toggleTruncateButton;
                var6.style = var9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var13];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var12 = 7;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                if (var11) {
                    _fun118081_ip = 452;
                    continue _fun118081
                }
            case 439:
                var11 = var12.Fbrd8J;
                var11 = var13.bind(var14)(var11);
                _fun118081_ip = 463;
                continue _fun118081;
            case 452:
                var12 = var12["JQX/Pb"];
                var11 = var13.bind(var14)(var12);
            case 463:
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 483:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TruncatedText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3941, 1234, 2]);