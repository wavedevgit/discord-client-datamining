// modules/voice_calls/native/action_sheet/NUFKrispActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var7 = var3.Image;
    var _closure1_slot5 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot8 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var8 = var10.createStyles;
    var3 = {};
    var12 = 16;
    var11 = {
        'alignItems': 'center',
        'padding': 16
    };
    var3.container = var11;
    var11 = {
        'textAlign': 'center',
        'marginTop': 16,
        'marginBottom': 8
    };
    var3.title = var11;
    var11 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.description = var11;
    var11 = {
        'height': 48,
        'width': 106
    };
    var3.logo = var11;
    var11 = {
        'marginTop': 16,
        'marginBottom': 16,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.logoContainer = var11;
    var11 = {};
    var11.marginLeft = var12;
    var3.link = var11;
    var3 = var8.bind(var10)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var8 = 7;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var3.source = var8;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot13 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/action_sheet/NUFKrispActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91336: for (var _fun91336_ip = 0;;) switch (_fun91336_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.callback;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot12;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var1 = var6[var0];
                var8 = var2.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var10
                    var0 = _closure1_slot7;
                    var0 = var0.theme;
                    return var0;
                };
                var4 = var7.bind(var8)(var4, var1);
                var0 = var6[var0];
                var8 = var2.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var1 = _closure1_slot6;
                    var0 = var1.getKey;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var7.bind(var8)(var1, var0);
                var _closure2_slot1 = var0;
                var8 = _closure1_slot3;
                var7 = var8.useRef;
                var1 = false;
                var1 = var7.bind(var8)(var1);
                var _closure2_slot2 = var1;
                var1 = 9;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isThemeLight;
                var1 = var1.bind(var2)(var4);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                if (var1) {
                    _fun91336_ip = 189;
                    continue _fun91336
                }
            case 175:
                var1 = 11;
                var1 = var4[var1];
                var15 = var2.bind(var3)(var1);
                _fun91336_ip = 201;
                continue _fun91336;
            case 189:
                var1 = 10;
                var1 = var4[var1];
                var15 = var2.bind(var3)(var1);
            case 201:
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var10
                    _fun91339: for (var _fun91339_ip = 0;;) switch (_fun91339_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = 'NUF_KRISP_ACTIONSHEET';
                            var1 = var2 === var1;
                            if (var1) {
                                _fun91339_ip = 29;
                                continue _fun91339
                            }
                        case 20:
                            var2 = _closure2_slot2;
                            var1 = var2.current;
                        case 29:
                            if (var1) {
                                _fun91339_ip = 54;
                                continue _fun91339
                            }
                        case 32:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            var1 = _closure2_slot2;
                            var0 = true;
                            var1.current = var0;
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 12;
                var0 = var13[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var12.container;
                var4.style = var7;
                var8 = _closure1_slot13;
                var7 = new Array(5);
                var7[0] = var8;
                var8 = 13;
                var9 = var13[var8];
                var9 = var17.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'style': null,
                    'maxFontSizeMultiplier': 2,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.title;
                var9.style = var14;
                var14 = 14;
                var16 = var13[var14];
                var16 = var17.bind(var3)(var16);
                var19 = var16.intl;
                var18 = var19.string;
                var16 = var13[var14];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["5iqgHe"];
                var16 = var18.bind(var19)(var16);
                var9.children = var16;
                var9 = var2.bind(var3)(var11, var9);
                var7[1] = var9;
                var8 = var13[var8];
                var8 = var17.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var12.description;
                var8.style = var11;
                var11 = var13[var14];
                var11 = var17.bind(var3)(var11);
                var18 = var11.intl;
                var16 = var18.string;
                var11 = var13[var14];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.ChUi9n;
                var11 = var16.bind(var18)(var11);
                var8.children = var11;
                var8 = var2.bind(var3)(var9, var8);
                var7[2] = var8;
                var8 = {};
                var9 = var12.logoContainer;
                var8.style = var9;
                var11 = _closure1_slot5;
                var9 = {};
                var9.source = var15;
                var15 = var12.logo;
                var9.style = var15;
                var11 = var2.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = 15;
                var11 = var13[var11];
                var11 = var17.bind(var3)(var11);
                var15 = var11.TextWithIOSLinkWorkaround;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var12 = var12.link;
                var11.style = var12;
                var12 = var13[var14];
                var12 = var17.bind(var3)(var12);
                var20 = var12.intl;
                var19 = var20.format;
                var12 = var13[var14];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var18 = var12.BPDKoA;
                var16 = {};
                var12 = _closure1_slot1;
                var22 = 16;
                var22 = var13[var22];
                var23 = var12.bind(var3)(var22);
                var22 = var23.getArticleURL;
                var21 = _closure1_slot8;
                var21 = var21.NOISE_SUPPRESSION;
                var21 = var22.bind(var23)(var21);
                var16.helpdeskArticle = var21;
                var16 = var19.bind(var20)(var18, var16);
                var11.children = var16;
                var11 = var2.bind(var3)(var15, var11);
                var9[1] = var11;
                var8.children = var9;
                var8 = var6.bind(var3)(var5, var8);
                var7[3] = var8;
                var11 = 17;
                var8 = var13[var11];
                var9 = var12.bind(var3)(var8);
                var8 = {};
                var15 = var13[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["daih+S"];
                var14 = var15.bind(var16)(var14);
                var8.text = var14;
                var14 = var13[var11];
                var14 = var12.bind(var3)(var14);
                var14 = var14.Sizes;
                var14 = var14.MEDIUM;
                var8.size = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.BRAND;
                var8.color = var11;
                var10 = function() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 18;
                    var2 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.setNoiseCancellation;
                    var2 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.NOISE_CANCELLATION_POPOUT;
                    var2.section = var3;
                    var3 = true;
                    var2 = var5.bind(var6)(var3, var2);
                    var2 = _closure1_slot0;
                    var1 = 19;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentNoiseCancellation;
                    var1 = var1.bind(var2)(var3);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.onPress = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 'NUF_KRISP_ACTIONSHEET';
    var2.NUF_KRISP_ACTIONSHEET_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3142, 3198, 660, 33, 1297, 11823, 566, 3207, 10699, 10700, 5232, 3938, 1234, 5384, 1686, 4849, 8573, 3149, 2]);