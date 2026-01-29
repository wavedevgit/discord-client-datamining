// modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx
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
    var7 = var5[var3];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot4 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useEffect;
    var _closure1_slot5 = var6;
    var6 = var3.useLayoutEffect;
    var _closure1_slot6 = var6;
    var3 = var3.useRef;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 43.5,
        'paddingVertical': 12
    };
    var3.contentWrapper = var8;
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.centeredText = var8;
    var8 = {
        'paddingHorizontal': 15,
        'flexDirection': 'column',
        'display': 'flex',
        'gap': 6
    };
    var3.ctaContainer = var8;
    var8 = {
        'marginStart': 4294967294,
        'width': 20,
        'height': 20
    };
    var3.nitroWheelButton = var8;
    var8 = {};
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.getNitroButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = function(arg0) { // Original name: sharedClientThemeToThemeSettings, environment: var1
        _fun89184: for (var _fun89184_ip = 0;;) switch (_fun89184_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                if (!(var0 === var1)) {
                    _fun89184_ip = 11;
                    continue _fun89184
                }
            case 9:
                return var0;
            case 11:
                var0 = {};
                var4 = var1.colors;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '#';
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var0.colors = var2;
                var2 = new Array(0);
                var0.gradientColorStops = var2;
                var2 = var1.gradient_angle;
                var0.gradientAngle = var2;
                var1 = var1.base_mix;
                var0.baseMix = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = function(arg0) { // Original name: PrimaryActionButton, environment: var1
        _fun89186: for (var _fun89186_ip = 0;;) switch (_fun89186_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.onPressApply;
                var0 = _closure1_slot14;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var _closure2_slot0 = var5;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 19;
                var0 = var8[var0];
                var9 = var1.bind(var4)(var0);
                var2 = var9.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var1 = _closure1_slot9;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var2.bind(var9)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 20;
                var0 = var8[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getPremiumTypeFromSubscription;
                var1 = var0.bind(var1)(var2);
                var0 = _closure1_slot11;
                var0 = var0.TIER_2;
                if (!(var1 === var0)) {
                    _fun89186_ip = 222;
                    continue _fun89186
                }
            case 119:
                var2 = _closure1_slot12;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 18;
                var0 = var12[var0];
                var0 = var11.bind(var4)(var0);
                var1 = var0.Button;
                var0 = {};
                var8 = 14;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["1Qm822"];
                var8 = var9.bind(var10)(var8);
                var0.text = var8;
                var0.onPress = var3;
                var3 = 'primary';
                var0.variant = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun89186_ip = 342;
                continue _fun89186;
            case 222:
                var3 = _closure1_slot12;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 23;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var10 = _closure1_slot0;
                var7 = 14;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.pj0XBN;
                var7 = var8.bind(var9)(var7);
                var1.text = var7;
                var7 = function() { // Original name: onPress, environment: var6
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 21;
                    var1 = var5[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var1);
                    var1 = {};
                    var3 = _closure1_slot11;
                    var3 = var3.TIER_2;
                    var1.premiumType = var3;
                    var3 = 22;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var4 = var3.SHARE_CUSTOM_CLIENT_THEME_EMBED;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1.analyticsLocations = var3;
                    var3 = {};
                    var1.analyticsLocation = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onPress = var7;
                var6 = function() { // Original name: renderIcon, environment: var6
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.nitroWheelButton;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.renderIcon = var6;
                var5 = var5.getNitroButton;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 342:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var3 = function(arg0) { // Original name: getBaseThemeFromSharedClientTheme, environment: var1
        _fun89190: for (var _fun89190_ip = 0;;) switch (_fun89190_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                if (!(var3 === var0)) {
                    _fun89190_ip = 11;
                    continue _fun89190
                }
            case 9:
                return var3;
            case 11:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 25;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getBaseTheme;
                var0 = var0.base_theme;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/native/chat/SharedCustomThemeActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var0 = var0.message;
        var9 = var0.sharedClientTheme;
        var _closure2_slot0 = var9;
        var0 = _closure1_slot14;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var1 = _closure1_slot7;
        var0 = null;
        var5 = var1.bind(var3)(var0);
        var _closure2_slot1 = var5;
        var12 = _closure1_slot4;
        var1 = var12.useState;
        var0 = _closure1_slot15;
        var0 = var0.bind(var3)(var9);
        var0 = var1.bind(var12)(var0);
        var13 = _closure1_slot3;
        var1 = 2;
        var0 = var13.bind(var3)(var0, var1);
        var4 = 0;
        var10 = var0[var4];
        var _closure2_slot2 = var10;
        var2 = 1;
        var0 = var0[var2];
        var _closure2_slot3 = var0;
        var6 = var12.useState;
        var0 = _closure1_slot17;
        var0 = var0.bind(var3)(var9);
        var0 = var6.bind(var12)(var0);
        var0 = var13.bind(var3)(var0, var1);
        var6 = var0[var4];
        var _closure2_slot4 = var6;
        var0 = var0[var2];
        var _closure2_slot5 = var0;
        var14 = var12.useState;
        var0 = false;
        var0 = var14.bind(var12)(var0);
        var0 = var13.bind(var3)(var0, var1);
        var1 = var0[var4];
        var _closure2_slot6 = var1;
        var0 = var0[var2];
        var _closure2_slot7 = var0;
        var2 = var12.useRef;
        var0 = true;
        var0 = var2.bind(var12)(var0);
        var _closure2_slot8 = var0;
        var2 = _closure1_slot5;
        var12 = new Array(1);
        var12[0] = var9;
        var9 = function() { // Environment: var11
            var5 = _closure2_slot3;
            var3 = _closure1_slot15;
            var4 = _closure2_slot0;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var3 = var5.bind(var0)(var3);
            var3 = _closure2_slot5;
            var2 = _closure1_slot17;
            var2 = var2.bind(var0)(var4);
            var2 = var3.bind(var0)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot10;
            var2 = var1.CUSTOM_THEME_SHARE_PREVIEWED;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var9 = var2.bind(var3)(var9, var12);
        var9 = new Array(2);
        var9[0] = var10;
        var9[1] = var6;
        var6 = function() { // Environment: var11
            _fun89193: for (var _fun89193_ip = 0;;) switch (_fun89193_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var0 !== var1;
                    if (!var1) {
                        _fun89193_ip = 24;
                        continue _fun89193
                    }
                case 16:
                    var2 = _closure2_slot4;
                    var1 = var0 !== var2;
                case 24:
                    if (!var1) {
                        _fun89193_ip = 103;
                        continue _fun89193
                    }
                case 27:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.previewCustomTheme;
                    var1 = {};
                    var7 = _closure2_slot4;
                    var1.baseTheme = var7;
                    var6 = _closure2_slot2;
                    var1.customTheme = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = 11;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.refreshTheme;
                    var1 = var1.bind(var2)();
                case 103:
                    return var0;
            }
        };
        var6 = var2.bind(var3)(var6, var9);
        var9 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() { // Environment: var11
            var1 = _closure2_slot8;
            var0 = _closure2_slot6;
            var0 = !var0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var9.bind(var3)(var1, var6);
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var11
            var0 = function() { // Environment: var0
                _fun89196: for (var _fun89196_ip = 0;;) switch (_fun89196_ip) {
                    case 0:
                        var0 = _closure2_slot8;
                        var0 = var0.current;
                        if (!var0) {
                            _fun89196_ip = 72;
                            continue _fun89196
                        }
                    case 15:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 10;
                        var0 = var3[var0];
                        var1 = undefined;
                        var4 = var2.bind(var1)(var0);
                        var0 = var4.clearPreviewTheme;
                        var0 = var0.bind(var4)();
                        var0 = 11;
                        var0 = var3[var0];
                        var1 = var2.bind(var1)(var0);
                        var0 = var1.refreshTheme;
                        var0 = var0.bind(var1)();
                    case 72:
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var2 = _closure1_slot13;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var0 = 12;
        var0 = var16[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var0.ref = var5;
        var0.backdropOpacity = var4;
        var10 = _closure1_slot12;
        var4 = 13;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var12 = 14;
        var6 = var16[var12];
        var6 = var15.bind(var3)(var6);
        var13 = var6.intl;
        var9 = var13.string;
        var19 = _closure1_slot1;
        var14 = 15;
        var6 = var16[var14];
        var6 = var19.bind(var3)(var6);
        var6 = var6["3ej1LT"];
        var6 = var9.bind(var13)(var6);
        var4.title = var6;
        var5 = var10.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var6 = _closure1_slot8;
        var5 = {};
        var9 = var8.contentWrapper;
        var5.style = var9;
        var9 = 16;
        var9 = var16[var9];
        var9 = var15.bind(var3)(var9);
        var13 = var9.Text;
        var9 = {};
        var17 = 'heading-md/medium';
        var9.variant = var17;
        var17 = var8.centeredText;
        var9.style = var17;
        var17 = var16[var12];
        var17 = var15.bind(var3)(var17);
        var18 = var17.intl;
        var17 = var18.string;
        var14 = var16[var14];
        var14 = var19.bind(var3)(var14);
        var14 = var14.qZMUoL;
        var14 = var17.bind(var18)(var14);
        var9.children = var14;
        var9 = var10.bind(var3)(var13, var9);
        var5.children = var9;
        var5 = var10.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = {};
        var8 = var8.ctaContainer;
        var5.style = var8;
        var8 = _closure1_slot16;
        var7 = {};
        var9 = function() { // Original name: onPressApply, environment: var11
            _fun89197: for (var _fun89197_ip = 0;;) switch (_fun89197_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var2 = var0 !== var2;
                    if (!var2) {
                        _fun89197_ip = 24;
                        continue _fun89197
                    }
                case 16:
                    var3 = _closure2_slot4;
                    var2 = var0 !== var3;
                case 24:
                    if (!var2) {
                        _fun89197_ip = 42;
                        continue _fun89197
                    }
                case 27:
                    var3 = _closure2_slot1;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 !== var4;
                case 42:
                    if (!var2) {
                        _fun89197_ip = 214;
                        continue _fun89197
                    }
                case 48:
                    var3 = _closure2_slot7;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var6 = var5[var3];
                    var7 = var4.bind(var0)(var6);
                    var6 = var7.updateCustomTheme;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot4;
                    var6 = var6.bind(var7)(var10, var9);
                    var6 = 17;
                    var6 = var5[var6];
                    var8 = var4.bind(var0)(var6);
                    var7 = var8.saveClientTheme;
                    var6 = {};
                    var6.customUserThemeSettings = var10;
                    var6.theme = var9;
                    var6 = var7.bind(var8)(var6);
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.clearPreviewTheme;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot1;
                    var3 = 9;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot10;
                    var3 = var2.CUSTOM_THEME_SHARE_APPLIED;
                    var2 = {};
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.closeActionSheet;
                    var1 = var1.bind(var2)();
                case 214:
                    return var0;
            }
        };
        var7.onPressApply = var9;
        var8 = var10.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 18;
        var8 = var16[var8];
        var8 = var15.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {};
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["13/7kX"];
        var12 = var13.bind(var14)(var12);
        var8.text = var12;
        var11 = function() { // Original name: onPress, environment: var11
            _fun89198: for (var _fun89198_ip = 0;;) switch (_fun89198_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 !== var2)) {
                        _fun89198_ip = 94;
                        continue _fun89198
                    }
                case 18:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var1 = var5.clearPreviewTheme;
                    var1 = var1.bind(var5)();
                    var1 = 11;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.refreshTheme;
                    var1 = var1.bind(var2)();
                    var0 = _closure2_slot1;
                    var1 = var0.current;
                    var0 = var1.closeActionSheet;
                    var0 = var0.bind(var1)();
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var8.onPress = var11;
        var11 = 'secondary';
        var8.variant = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3076, 660, 1615, 33, 1297, 671, 795, 10677, 3197, 4887, 5167, 1234, 2011, 3895, 7584, 4037, 566, 3068, 7010, 5536, 7591, 6563, 3198, 2]);