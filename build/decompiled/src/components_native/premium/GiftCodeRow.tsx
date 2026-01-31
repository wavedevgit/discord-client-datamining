// components_native/premium/GiftCodeRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun82679: for (var _fun82679_ip = 0;;) switch (_fun82679_ip) {
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
                _fun82679_ip = 76;
                continue _fun82679;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot8 = var7;
    var13 = var6.StyleSheet;
    var6 = var6.TouchableWithoutFeedback;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AnalyticsSections;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot11 = var7;
    var6 = var6.jsxs;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {};
    var11 = 16;
    var9.paddingHorizontal = var11;
    var11 = 10;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var14;
    var6.giftCodeRow = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'marginVertical': 8,
        'padding': 8
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9.borderRadius = var14;
    var13 = var13.hairlineWidth;
    var9.borderWidth = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var6.giftCodeShare = var9;
    var9 = {
        'marginLeft': 12,
        'paddingHorizontal': 16,
        'fontSize': 12
    };
    var6.giftCodeShareButton = var9;
    var9 = {
        'fontSize': 14,
        'lineHeight': 18,
        'flexShrink': 1
    };
    var6.codeText = var9;
    var9 = {
        'marginBottom': 8,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.subTextRow = var9;
    var9 = {
        'fontSize': 12,
        'lineHeight': 16
    };
    var6.expiryText = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BLUE_345;
    var9.color = var11;
    var6.revokeHint = var9;
    var9 = {};
    var9.borderWidth = var10;
    var6.firstRow = var9;
    var9 = {
        'flexShrink': 0,
        'flexGrow': 1
    };
    var6.buttonContainer = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot13 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun82683: for (var _fun82683_ip = 0;;) switch (_fun82683_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun82683_ip = 86;
                        continue _fun82683
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun82683_ip = 120;
                    continue _fun82683;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun82684: for (var _fun82684_ip = 0;;) switch (_fun82684_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var4 = var0.giftCode;
                                var3 = var0.sku;
                                var1 = null;
                                var0 = var1 != var4;
                                if (!var0) {
                                    _fun82684_ip = 37;
                                    continue _fun82684
                                }
                            case 33:
                                var0 = var1 != var3;
                            case 37:
                                if (!var0) {
                                    _fun82684_ip = 142;
                                    continue _fun82684
                                }
                            case 40:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 11;
                                var1 = var8[var5];
                                var6 = undefined;
                                var2 = var7.bind(var6)(var1);
                                var1 = var2.trackGiftCodeCopy;
                                var1 = var1.bind(var2)(var4, var3);
                                var1 = 12;
                                var1 = var8[var1];
                                var3 = var7.bind(var6)(var1);
                                var2 = var3.showShareActionSheet;
                                var1 = {};
                                var5 = var8[var5];
                                var6 = var7.bind(var6)(var5);
                                var5 = var6.getGiftCodeURL;
                                var4 = var4.code;
                                var4 = var5.bind(var6)(var4);
                                var1.url = var4;
                                var0 = _closure1_slot10;
                                var0 = var0.GIFT_CODE_ROW;
                                var0 = var2.bind(var3)(var1, var0);
                            case 142:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleShare = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'handleRevoke';
        var4.key = var0;
        var0 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.revokeGiftCode;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun82686: for (var _fun82686_ip = 0;;) switch (_fun82686_ip) {
                case 0:
                    var19 = this;
                    var _closure3_slot0 = var19;
                    var1 = _closure1_slot13;
                    var0 = var19.context;
                    var3 = undefined;
                    var10 = var1.bind(var3)(var0);
                    var _closure3_slot1 = var10;
                    var0 = var19.props;
                    var18 = var0.giftCode;
                    var _closure3_slot2 = var18;
                    var6 = var0.isFirst;
                    var2 = _closure1_slot12;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var5 = var10.giftCodeRow;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var8 = null;
                    var5 = null;
                    if (!var6) {
                        _fun82686_ip = 90;
                        continue _fun82686
                    }
                case 84:
                    var5 = var10.firstRow;
                case 90:
                    var4[1] = var5;
                    var0.style = var4;
                    var5 = _closure1_slot12;
                    var7 = _closure1_slot8;
                    var4 = {};
                    var6 = var10.giftCodeShare;
                    var4.style = var6;
                    var6 = _closure1_slot11;
                    var23 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var9 = 14;
                    var11 = var20[var9];
                    var11 = var23.bind(var3)(var11);
                    var12 = var11.Text;
                    var11 = {
                        'variant': 'text-sm/normal',
                        'lineClamp': 1
                    };
                    var13 = 11;
                    var13 = var20[var13];
                    var15 = var23.bind(var3)(var13);
                    var14 = var15.getGiftCodeURL;
                    var13 = var18.code;
                    var13 = var14.bind(var15)(var13);
                    var11.children = var13;
                    var12 = var6.bind(var3)(var12, var11);
                    var11 = new Array(2);
                    var11[0] = var12;
                    var13 = {};
                    var12 = var10.buttonContainer;
                    var13.style = var12;
                    var21 = _closure1_slot1;
                    var12 = 15;
                    var14 = var20[var12];
                    var15 = var21.bind(var3)(var14);
                    var14 = {};
                    var12 = var20[var12];
                    var12 = var21.bind(var3)(var12);
                    var12 = var12.Sizes;
                    var12 = var12.XSMALL;
                    var14.size = var12;
                    var12 = var10.giftCodeShareButton;
                    var14.style = var12;
                    var12 = 16;
                    var21 = var20[var12];
                    var21 = var23.bind(var3)(var21);
                    var22 = var21.intl;
                    var21 = var22.string;
                    var20 = var20[var12];
                    var20 = var23.bind(var3)(var20);
                    var20 = var20.t;
                    var20 = var20.h5EvZM;
                    var20 = var21.bind(var22)(var20);
                    var14.text = var20;
                    var19 = var19.handleShare;
                    var14.onPress = var19;
                    var14 = var6.bind(var3)(var15, var14);
                    var13.children = var14;
                    var13 = var6.bind(var3)(var7, var13);
                    var11[1] = var13;
                    var4.children = var11;
                    var5 = var5.bind(var3)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var10 = var10.subTextRow;
                    var5.style = var10;
                    var10 = var18.expiresAt;
                    var10 = var8 != var10;
                    var8 = null;
                    if (!var10) {
                        _fun82686_ip = 563;
                        continue _fun82686
                    }
                case 403:
                    var11 = _closure1_slot11;
                    var13 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var9 = var21[var9];
                    var9 = var13.bind(var3)(var9);
                    var10 = var9.Text;
                    var9 = {
                        'variant': 'text-xs/normal',
                        'color': 'text-subtle'
                    };
                    var14 = var21[var12];
                    var14 = var13.bind(var3)(var14);
                    var15 = var14.intl;
                    var14 = var15.format;
                    var12 = var21[var12];
                    var12 = var13.bind(var3)(var12);
                    var12 = var12.t;
                    var13 = var12.b1BfWD;
                    var12 = {};
                    var20 = var18.expiresAt;
                    var19 = var20.diff;
                    var18 = _closure1_slot1;
                    var17 = 17;
                    var17 = var21[var17];
                    var17 = var18.bind(var3)(var17);
                    var18 = var17.bind(var3)();
                    var17 = 'h';
                    var17 = var19.bind(var20)(var18, var17);
                    var12.hours = var17;
                    var16 = function arg0, arg1() {
                        var4 = _closure1_slot11;
                        var3 = _closure1_slot9;
                        var2 = {};
                        var1 = 'button';
                        var2.accessibilityRole = var1;
                        var1 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.handleRevoke;
                            var0 = _closure3_slot2;
                            var0 = var0.code;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2.onPress = var1;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var0 = var1[var0];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var0);
                        var0 = {};
                        var7 = _closure3_slot1;
                        var8 = var7.expiryText;
                        var6 = new Array(2);
                        var6[0] = var8;
                        var7 = var7.revokeHint;
                        var6[1] = var7;
                        var0.style = var6;
                        var6 = arg0;
                        var0.children = var6;
                        var0 = var4.bind(var1)(var5, var0);
                        var2.children = var0;
                        var0 = arg1;
                        var0 = var4.bind(var1)(var3, var2, var0);
                        return var0;
                    };
                    var12.revokeHook = var16;
                    var12 = var14.bind(var15)(var13, var12);
                    var9.children = var12;
                    var8 = var11.bind(var3)(var10, var9);
                case 563:
                    var5.children = var8;
                    var5 = var6.bind(var3)(var7, var5);
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var1.contextType = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/GiftCodeRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 660, 33, 1297, 671, 3307, 8232, 6824, 3900, 4836, 1234, 3004, 1295, 3118, 2]);