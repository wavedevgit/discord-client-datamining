// modules/feedback/native/RatingSelector.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_RATINGS;
    var _closure1_slot5 = var6;
    var3 = var3.FeedbackRating;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.ratings = var9;
    var9 = {};
    var6.rating = var9;
    var9 = {
        'width': 64,
        'height': 64,
        'marginVertical': 24,
        'marginHorizontal': 12
    };
    var6.emoji = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'justifyContent': 'flex-start',
        'gap': 16,
        'marginBottom': 12
    };
    var3.ratings = var8;
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.rating = var8;
    var8 = {
        'width': 32,
        'height': 32
    };
    var3.emoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/RatingSelector.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76256: for (var _fun76256_ip = 0;;) switch (_fun76256_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.ratingOptions;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun76256_ip = 24;
                    continue _fun76256
                }
            case 17:
                var2 = _closure1_slot5;
            case 24:
                var7 = var0.textLabels;
                var _closure2_slot0 = var7;
                var1 = var0.selectedRating;
                var _closure2_slot1 = var1;
                var0 = var0.onChangeRating;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                var5 = _closure1_slot8;
                var5 = var5.bind(var3)();
                var6 = null;
                if (!(var6 != var7)) {
                    _fun76256_ip = 86;
                    continue _fun76256
                }
            case 83:
                var5 = var1;
            case 86:
                _closure2_slot3 = var5;
                var1 = function arg0() {
                    var2 = arg0;
                    var1 = {};
                    var5 = _closure1_slot6;
                    var4 = var5.BAD;
                    var3 = {};
                    var6 = {};
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 5;
                    var8 = var10[var8];
                    var9 = undefined;
                    var8 = var11.bind(var9)(var8);
                    var6.selected = var8;
                    var8 = _closure1_slot0;
                    var7 = 6;
                    var7 = var10[var7];
                    var12 = var8.bind(var9)(var7);
                    var7 = var12.useFeedbackModalSadDesaturatedSource;
                    var7 = var7.bind(var12)();
                    var6.normal = var7;
                    var3.source = var6;
                    var6 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 7;
                        var1 = var5[var0];
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        var2 = var1.intl;
                        var1 = var2.string;
                        var0 = var5[var0];
                        var0 = var4.bind(var3)(var0);
                        var0 = var0.t;
                        var0 = var0["C/12Tt"];
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.getLabel = var6;
                    var6 = var5.BAD;
                    var3.rating = var6;
                    var1[var4] = var3;
                    var4 = var5.NEUTRAL;
                    var3 = {};
                    var6 = {};
                    var7 = 8;
                    var7 = var10[var7];
                    var7 = var11.bind(var9)(var7);
                    var6.selected = var7;
                    var7 = 9;
                    var7 = var10[var7];
                    var12 = var8.bind(var9)(var7);
                    var7 = var12.useFeedbackModalNeutralDesaturatedSource;
                    var7 = var7.bind(var12)();
                    var6.normal = var7;
                    var3.source = var6;
                    var6 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 7;
                        var1 = var5[var0];
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        var2 = var1.intl;
                        var1 = var2.string;
                        var0 = var5[var0];
                        var0 = var4.bind(var3)(var0);
                        var0 = var0.t;
                        var0 = var0.Xcb4cF;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.getLabel = var6;
                    var6 = var5.NEUTRAL;
                    var3.rating = var6;
                    var1[var4] = var3;
                    var4 = var5.GOOD;
                    var3 = {};
                    var6 = {};
                    var7 = 10;
                    var7 = var10[var7];
                    var7 = var11.bind(var9)(var7);
                    var6.selected = var7;
                    var7 = 11;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.useFeedbackModalHappyDesaturatedSource;
                    var7 = var7.bind(var8)();
                    var6.normal = var7;
                    var3.source = var6;
                    var6 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 7;
                        var1 = var5[var0];
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        var2 = var1.intl;
                        var1 = var2.string;
                        var0 = var5[var0];
                        var0 = var4.bind(var3)(var0);
                        var0 = var0.t;
                        var0 = var0["1Vyb5J"];
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.getLabel = var6;
                    var5 = var5.GOOD;
                    var3.rating = var5;
                    var1[var4] = var3;
                    var _closure3_slot0 = var1;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var1.bind(var3)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var5.ratings;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun76262: for (var _fun76262_ip = 0;;) switch (_fun76262_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.rating;
                            var _closure3_slot0 = var5;
                            var1 = var0.source;
                            var12 = var1.selected;
                            var11 = var1.normal;
                            var13 = var0.getLabel;
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun76262_ip = 193;
                                continue _fun76262
                            }
                        case 54:
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.PressableOpacity;
                            var0 = {};
                            var6 = 'button';
                            var0.accessibilityRole = var6;
                            var6 = var13.bind(var2)();
                            var0.accessibilityLabel = var6;
                            var6 = {};
                            var7 = _closure2_slot1;
                            var9 = var7 === var5;
                            var6.selected = var9;
                            var0.accessibilityState = var6;
                            var6 = function() {
                                var2 = _closure2_slot2;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onPress = var6;
                            var6 = _closure1_slot4;
                            var4 = {};
                            var7 = _closure2_slot3;
                            var7 = var7.emoji;
                            var4.style = var7;
                            var7 = var11;
                            if (!var9) {
                                _fun76262_ip = 167;
                                continue _fun76262
                            }
                        case 164:
                            var7 = var12;
                        case 167:
                            var4.source = var7;
                            var4 = var3.bind(var2)(var6, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0, var5);
                            _fun76262_ip = 366;
                            continue _fun76262;
                        case 193:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot3;
                            var2 = {};
                            var1 = _closure2_slot3;
                            var1 = var1.rating;
                            var2.style = var1;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 12;
                            var6 = var6[var1];
                            var1 = undefined;
                            var6 = var7.bind(var1)(var6);
                            var7 = var6.RowButton;
                            var6 = {};
                            var14 = 'button';
                            var6.accessibilityRole = var14;
                            var13 = var13.bind(var1)();
                            var6.accessibilityLabel = var13;
                            var14 = {};
                            var13 = _closure2_slot1;
                            var13 = var13 === var5;
                            var14.selected = var13;
                            var6.accessibilityState = var14;
                            var10 = function() {
                                var2 = _closure2_slot2;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var6.onPress = var10;
                            var10 = _closure1_slot4;
                            var9 = {};
                            var14 = _closure2_slot3;
                            var14 = var14.emoji;
                            var9.style = var14;
                            if (!var13) {
                                _fun76262_ip = 323;
                                continue _fun76262
                            }
                        case 320:
                            var11 = var12;
                        case 323:
                            var9.source = var11;
                            var9 = var4.bind(var1)(var10, var9);
                            var6.icon = var9;
                            var8 = _closure2_slot0;
                            var8 = var8[var5];
                            var6.label = var8;
                            var6 = var4.bind(var1)(var7, var6);
                            var2.children = var6;
                            var0 = var4.bind(var1)(var3, var2, var5);
                        case 366:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9674, 33, 1297, 9679, 9680, 1234, 9684, 9685, 9689, 9690, 5344, 4867, 2]);