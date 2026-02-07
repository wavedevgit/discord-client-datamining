// modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 64;
    var8.minHeight = var11;
    var3.selectionOptionItemWithDescription = var8;
    var8 = {};
    var11 = 56;
    var8.paddingLeft = var11;
    var3.selectionOptionItemWithEmoji = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.selectionOptionItemDescription = var8;
    var8 = {
        'flexShrink': 0,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.emojiWrapper = var8;
    var8 = {
        'fontSize': 16,
        'color': '#000000'
    };
    var3.textEmoji = var8;
    var8 = {
        'width': 24,
        'height': 24
    };
    var3.fastImageEmoji = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79836: for (var _fun79836_ip = 0;;) switch (_fun79836_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.selectionActionComponent;
                var _closure2_slot0 = var9;
                var10 = var0.labelComponent;
                var4 = var0.channelId;
                var8 = var0.containerId;
                var1 = var0.onSubmit;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot6;
                var3 = undefined;
                var7 = var2.bind(var3)();
                var _closure2_slot2 = var7;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 5;
                var2 = var13[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.getInitialStringSelectOptions;
                var16 = var2.bind(var6)(var9, var8);
                var14 = _closure1_slot4;
                var6 = var14.useState;
                var2 = global;
                var2 = var2.Set;
                var8 = var2.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = var8;
                var2 = new var17[var2](var16, var15);
                var2 = var2 instanceof Object ? var2 : var8;
                var8 = var6.bind(var14)(var2);
                var6 = _closure1_slot3;
                var2 = 2;
                var8 = var6.bind(var3)(var8, var2);
                var2 = 0;
                var6 = var8[var2];
                var _closure2_slot3 = var6;
                var2 = 1;
                var2 = var8[var2];
                var _closure2_slot4 = var2;
                var11 = var14.useMemo;
                var8 = new Array(1);
                var8[0] = var9;
                var2 = function() { // Environment: var5
                    var0 = _closure2_slot0;
                    var1 = var0.maxValues;
                    var0 = 1;
                    var0 = var1 > var0;
                    return var0;
                };
                var11 = var11.bind(var14)(var2, var8);
                var _closure2_slot5 = var11;
                var8 = var14.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var5
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var2 = var3[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.STRING_SELECT;
                    var4.type = var2;
                    var2 = arg0;
                    var4.values = var2;
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var0)(var4);
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = var8.bind(var14)(var1, var2);
                var _closure2_slot6 = var1;
                var8 = var14.useCallback;
                var2 = new Array(4);
                var2[0] = var6;
                var2[1] = var11;
                var2[2] = var9;
                var2[3] = var1;
                var1 = function(arg0, arg1) { // Environment: var5
                    _fun79839: for (var _fun79839_ip = 0;;) switch (_fun79839_ip) {
                        case 0:
                            var3 = arg1;
                            var _closure3_slot0 = var3;
                            var5 = _closure2_slot3;
                            var4 = var5.has;
                            var2 = var3.value;
                            var2 = var4.bind(var5)(var2);
                            var2 = !var2;
                            var _closure3_slot1 = var2;
                            var4 = _closure2_slot5;
                            if (var4) {
                                _fun79839_ip = 83;
                                continue _fun79839
                            }
                        case 45:
                            var5 = _closure2_slot6;
                            if (var2) {
                                _fun79839_ip = 58;
                                continue _fun79839
                            }
                        case 52:
                            var4 = new Array(0);
                            _fun79839_ip = 74;
                            continue _fun79839;
                        case 58:
                            var6 = var3.value;
                            var3 = new Array(1);
                            var3[0] = var6;
                            var4 = var3;
                        case 74:
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            _fun79839_ip = 130;
                            continue _fun79839;
                        case 83:
                            if (!var2) {
                                _fun79839_ip = 109;
                                continue _fun79839
                            }
                        case 86:
                            var3 = _closure2_slot3;
                            var4 = var3.size;
                            var3 = _closure2_slot0;
                            var3 = var3.maxValues;
                            var2 = var4 >= var3;
                        case 109:
                            if (var2) {
                                _fun79839_ip = 130;
                                continue _fun79839
                            }
                        case 112:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                _fun79840: for (var _fun79840_ip = 0;;) switch (_fun79840_ip) {
                                    case 0:
                                        var0 = global;
                                        var2 = var0.Set;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var4 = arg0;
                                        var5 = var1;
                                        var0 = new var5[var2](var4, var3);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        var2 = _closure3_slot1;
                                        if (var2) {
                                            _fun79840_ip = 62;
                                            continue _fun79840
                                        }
                                    case 41:
                                        var3 = var0.delete;
                                        var2 = _closure3_slot0;
                                        var2 = var2.value;
                                        var2 = var3.bind(var0)(var2);
                                        _fun79840_ip = 81;
                                        continue _fun79840;
                                    case 62:
                                        var2 = var0.add;
                                        var1 = _closure3_slot0;
                                        var1 = var1.value;
                                        var1 = var2.bind(var0)(var1);
                                    case 81:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var1)(var0);
                        case 130:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var8.bind(var14)(var1, var2);
                var8 = var14.useMemo;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var5
                    var0 = _closure2_slot0;
                    var2 = var0.options;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.description;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var14)(var1, var2);
                var11 = var14.useMemo;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var5
                    var0 = _closure2_slot0;
                    var2 = var0.options;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.emoji;
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var11.bind(var14)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPressOptionItem = var12;
                var12 = function arg0() {
                    _fun79845: for (var _fun79845_ip = 0;;) switch (_fun79845_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.emoji;
                            var0 = null;
                            var1 = var0 != var1;
                            if (!var1) {
                                _fun79845_ip = 126;
                                continue _fun79845
                            }
                        case 18:
                            var4 = _closure1_slot5;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var6 = var5.emoji;
                            var6 = var6.src;
                            var1.src = var6;
                            var5 = var5.emoji;
                            var5 = var5.name;
                            var1.name = var5;
                            var5 = _closure2_slot2;
                            var6 = var5.emojiWrapper;
                            var1.style = var6;
                            var6 = var5.textEmoji;
                            var1.textEmojiStyle = var6;
                            var5 = var5.fastImageEmoji;
                            var1.fastImageStyle = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 126:
                            return var0;
                    }
                };
                var0.renderIcon = var12;
                var11 = !var11;
                var0.skipIcon = var11;
                var11 = function arg0() {
                    _fun79846: for (var _fun79846_ip = 0;;) switch (_fun79846_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = var5.description;
                            var3 = null;
                            var1 = var3 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun79846_ip = 116;
                                continue _fun79846
                            }
                        case 19:
                            var2 = var5.description;
                            var1 = '';
                            var0 = null;
                            if (!(var1 !== var2)) {
                                _fun79846_ip = 116;
                                continue _fun79846
                            }
                        case 34:
                            var4 = _closure1_slot5;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'style': null,
                                'variant': 'text-xs/medium',
                                'color': 'text-default'
                            };
                            var6 = _closure2_slot2;
                            var6 = var6.selectionOptionItemDescription;
                            var1.style = var6;
                            var5 = var5.description;
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 116:
                            return var0;
                    }
                };
                var0.renderDescription = var11;
                var0.selectionActionComponent = var9;
                var0.labelComponent = var10;
                var9 = var9.options;
                var0.options = var9;
                if (!var8) {
                    _fun79836_ip = 404;
                    continue _fun79836
                }
            case 398:
                var8 = var7.selectionOptionItemWithDescription;
            case 404:
                var7 = new Array(1);
                var7[0] = var8;
                var0.itemStyle = var7;
                var6 = var6.size;
                var0.selectedCount = var6;
                var6 = function arg0() {
                    var2 = _closure2_slot3;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.value;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.isSelected = var6;
                var6 = function() {
                    var2 = _closure2_slot6;
                    var5 = _closure2_slot3;
                    var1 = new Array(0);
                    var4 = 0;
                    var6 = var1;
                    var0 = arraySpread(var6, var5, var4);
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.submitSelection = var6;
                var5 = function arg0() {
                    _fun79849: for (var _fun79849_ip = 0;;) switch (_fun79849_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 11;
                            var2 = var6[var0];
                            var5 = undefined;
                            var2 = var1.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var6[var0];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.t;
                            var1 = var0.ZbrH2f;
                            var0 = {};
                            var6 = var4.emoji;
                            var7 = null;
                            var7 = var7 == var6;
                            if (var7) {
                                _fun79849_ip = 82;
                                continue _fun79849
                            }
                        case 77:
                            var5 = var6.name;
                        case 82:
                            var0.emojiName = var5;
                            var5 = var4.label;
                            var0.optionName = var5;
                            var4 = var4.description;
                            var0.optionDescription = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.itemAccessibilityLabel = var5;
                var0.channelId = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 1297, 671, 6901, 1647, 3279, 10163, 5820, 3942, 1234, 2]);