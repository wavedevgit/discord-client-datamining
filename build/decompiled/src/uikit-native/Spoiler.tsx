// uikit-native/Spoiler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun70269: for (var _fun70269_ip = 0;;) switch (_fun70269_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun70269_ip = 76;
                continue _fun70269;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot7 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot8 = var7;
    var6 = var6.StyleSheet;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var13 = var6.EMOJI_CHAT_SIZE;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var10 = var6.MUTED_OPACITY_CONTENT;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot10 = var6;
    var6 = 10;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {};
    var11 = 'rgba(0,0,0,0.0019607844)';
    var9.color = var11;
    var11 = 11;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.SPOILER_HIDDEN_BACKGROUND;
    var9.backgroundColor = var14;
    var6.spoiler = var9;
    var9 = {};
    var9.width = var13;
    var9.height = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.SPOILER_HIDDEN_BACKGROUND;
    var9.backgroundColor = var13;
    var6.placeholder = var9;
    var9 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var9.color = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.SPOILER_REVEALED_BACKGROUND;
    var9.backgroundColor = var11;
    var6.spoilerRevealed = var9;
    var9 = {};
    var9.opacity = var10;
    var6.muted = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var6 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot7;
        var3 = var1.Children;
        var2 = var3.map;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun70273: for (var _fun70273_ip = 0;;) switch (_fun70273_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure1_slot7;
                    var0 = var1.isValidElement;
                    var0 = var0.bind(var1)(var3);
                    if (var0) {
                        _fun70273_ip = 26;
                        continue _fun70273
                    }
                case 24:
                    return var3;
                case 26:
                    var0 = var3.props;
                    var2 = var0.style;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var2);
                    var7 = var2;
                    if (!var0) {
                        _fun70273_ip = 75;
                        continue _fun70273
                    }
                case 60:
                    var1 = _closure1_slot9;
                    var0 = var1.flatten;
                    var7 = var0.bind(var1)(var2);
                case 75:
                    var2 = _closure1_slot7;
                    var1 = var2.cloneElement;
                    var0 = {};
                    var8 = _closure1_slot12;
                    var4 = var3.props;
                    var5 = var4.children;
                    var6 = _closure2_slot0;
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5, var6);
                    var0.children = var5;
                    var5 = new Array(2);
                    var5[0] = var7;
                    var6 = var6.spoiler;
                    var5[1] = var6;
                    var0.style = var5;
                    var0.onPress = var4;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun70275: for (var _fun70275_ip = 0;;) switch (_fun70275_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun70275_ip = 86;
                        continue _fun70275
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun70275_ip = 120;
                    continue _fun70275;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = false;
                    var2.revealed = var3;
                    var0.state = var2;
                    var1 = function() { // Environment: var1
                        _fun70276: for (var _fun70276_ip = 0;;) switch (_fun70276_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var1 = var1.revealed;
                                if (var1) {
                                    _fun70276_ip = 36;
                                    continue _fun70276
                                }
                            case 21:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var1 = var2.disableReveal;
                            case 36:
                                if (var1) {
                                    _fun70276_ip = 75;
                                    continue _fun70276
                                }
                            case 39:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = var2.state;
                                var3 = var3.revealed;
                                var3 = !var3;
                                var0.revealed = var3;
                                var0 = var1.bind(var2)(var0);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleTap = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun70277: for (var _fun70277_ip = 0;;) switch (_fun70277_ip) {
                case 0:
                    var6 = this;
                    var4 = _closure1_slot11;
                    var2 = var6.context;
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var _closure3_slot0 = var8;
                    var2 = var6.state;
                    var7 = var2.revealed;
                    var _closure3_slot1 = var7;
                    var4 = var6.props;
                    var5 = var4.children;
                    var2 = var4.spoilerStyle;
                    var4 = var4.spoilerRevealedStyle;
                    if (var7) {
                        _fun70277_ip = 88;
                        continue _fun70277
                    }
                case 68:
                    var9 = var8.spoiler;
                    var7 = new Array(2);
                    var7[0] = var9;
                    var7[1] = var2;
                    _fun70277_ip = 109;
                    continue _fun70277;
                case 88:
                    var9 = var8.spoilerRevealed;
                    var2 = new Array(2);
                    var2[0] = var9;
                    var2[1] = var4;
                    var7 = var2;
                case 109:
                    var2 = _closure1_slot7;
                    var4 = var2.Children;
                    var2 = var4.count;
                    var4 = var2.bind(var4)(var5);
                    var2 = 0;
                    if (!(var2 !== var4)) {
                        _fun70277_ip = 281;
                        continue _fun70277
                    }
                case 139:
                    var2 = _closure1_slot7;
                    var4 = var2.Children;
                    var2 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun70278: for (var _fun70278_ip = 0;;) switch (_fun70278_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = _closure1_slot7;
                                var0 = var1.isValidElement;
                                var1 = var0.bind(var1)(var6);
                                var0 = var6;
                                if (!var1) {
                                    _fun70278_ip = 166;
                                    continue _fun70278
                                }
                            case 30:
                                var1 = var6.type;
                                var2 = var1.displayName;
                                var1 = 'Image';
                                if (!(var1 !== var2)) {
                                    _fun70278_ip = 73;
                                    continue _fun70278
                                }
                            case 48:
                                var3 = var6.props;
                                var2 = null;
                                var5 = var2 == var3;
                                var1 = undefined;
                                if (var5) {
                                    _fun70278_ip = 69;
                                    continue _fun70278
                                }
                            case 64:
                                var1 = var3.source;
                            case 69:
                                if (!(var2 != var1)) {
                                    _fun70278_ip = 117;
                                    continue _fun70278
                                }
                            case 73:
                                var2 = _closure3_slot1;
                                if (var2) {
                                    _fun70278_ip = 117;
                                    continue _fun70278
                                }
                            case 83:
                                var5 = _closure1_slot10;
                                var3 = _closure1_slot8;
                                var2 = {};
                                var1 = _closure3_slot0;
                                var1 = var1.placeholder;
                                var2.style = var1;
                                var1 = undefined;
                                var1 = var5.bind(var1)(var3, var2);
                                _fun70278_ip = 163;
                                continue _fun70278;
                            case 117:
                                var5 = var6.props;
                                var3 = null;
                                var2 = var6;
                                if (!(var3 != var5)) {
                                    _fun70278_ip = 160;
                                    continue _fun70278
                                }
                            case 131:
                                var5 = _closure3_slot1;
                                var2 = var6;
                                if (var5) {
                                    _fun70278_ip = 160;
                                    continue _fun70278
                                }
                            case 144:
                                var5 = _closure1_slot12;
                                var4 = _closure3_slot0;
                                var3 = undefined;
                                var2 = var5.bind(var3)(var6, var4);
                            case 160:
                                var1 = var2;
                            case 163:
                                var0 = var1;
                            case 166:
                                return var0;
                        }
                    };
                    var4 = var2.bind(var4)(var5, var1);
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 12;
                    var0 = var5[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.LegacyText;
                    var0 = {};
                    var5 = 'button';
                    var0.accessibilityRole = var5;
                    var5 = new Array(2);
                    var5[0] = var7;
                    var7 = var6.props;
                    var7 = var7.muted;
                    if (!var7) {
                        _fun70277_ip = 235;
                        continue _fun70277
                    }
                case 229:
                    var7 = var8.muted;
                case 235:
                    var5[1] = var7;
                    var0.style = var5;
                    var5 = var6.props;
                    var7 = var5.disableReveal;
                    var5 = undefined;
                    if (var7) {
                        _fun70277_ip = 265;
                        continue _fun70277
                    }
                case 259:
                    var5 = var6.handleTap;
                case 265:
                    var0.onPress = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                case 281:
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var1.contextType = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/Spoiler.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 660, 8821, 33, 1297, 671, 4878, 3159, 2]);