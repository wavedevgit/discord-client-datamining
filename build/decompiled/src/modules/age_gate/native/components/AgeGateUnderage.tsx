// modules/age_gate/native/components/AgeGateUnderage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'flex': 1,
        'padding': 16,
        'paddingTop': 0
    };
    var10 = 16;
    var9 = 5;
    var11 = var5[var9];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.header = var8;
    var8 = {
        'marginTop': 8,
        'lineHeight': 20,
        'textAlign': 'center'
    };
    var3.body = var8;
    var8 = {
        'width': '100%',
        'marginTop': 24,
        'flexGrow': 0
    };
    var3.button = var8;
    var8 = {
        'width': 13,
        'height': 22,
        'marginRight': 6
    };
    var3.leftButtonChevron = var8;
    var8 = {};
    var8.margin = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/native/components/AgeGateUnderage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100522: for (var _fun100522_ip = 0;;) switch (_fun100522_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.onClose;
                var _closure2_slot0 = var15;
                var19 = var1.underageMessage;
                var6 = var1.existingUser;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun100522_ip = 35;
                    continue _fun100522
                }
            case 33:
                var6 = false;
            case 35:
                var _closure2_slot1 = var6;
                var9 = var1.fromRegister;
                if (!(var9 === var3)) {
                    _fun100522_ip = 51;
                    continue _fun100522
                }
            case 49:
                var9 = false;
            case 51:
                var1 = var1.disableSwipe;
                if (!(var1 === var3)) {
                    _fun100522_ip = 63;
                    continue _fun100522
                }
            case 61:
                var1 = false;
            case 63:
                var _closure2_slot2 = var1;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot9;
                var14 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 6;
                var5 = var4[var5];
                var7 = var2.bind(var3)(var5);
                var5 = var7.useNavigation;
                var11 = var5.bind(var7)();
                _closure2_slot3 = var11;
                var8 = _closure1_slot3;
                var7 = var8.useLayoutEffect;
                var5 = new Array(4);
                var5[0] = var15;
                var5[1] = var6;
                var5[2] = var11;
                var5[3] = var1;
                var1 = function() { // Environment: var0
                    _fun100523: for (var _fun100523_ip = 0;;) switch (_fun100523_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = _closure2_slot1;
                            if (var4) {
                                _fun100523_ip = 64;
                                continue _fun100523
                            }
                        case 22:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 7;
                            var5 = var5[var4];
                            var4 = undefined;
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.getHeaderBackButton;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var6)(var4);
                            _fun100523_ip = 73;
                            continue _fun100523;
                        case 64:
                            var4 = function() { // Environment: var5
                                var0 = null;
                                return var0;
                            };
                        case 73:
                            var0.headerLeft = var4;
                            var3 = _closure2_slot2;
                            var3 = !var3;
                            var0.gestureEnabled = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var1, var5);
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigatorBackPressHandler;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = true;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var17 = 9;
                var1 = var0[var17];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var17];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                if (var6) {
                    _fun100522_ip = 251;
                    continue _fun100522
                }
            case 236:
                var4 = var0.nCB6Ga;
                var13 = var1.bind(var2)(var4);
                _fun100522_ip = 264;
                continue _fun100522;
            case 251:
                var0 = var0["NR/zrG"];
                var13 = var1.bind(var2)(var0);
            case 264:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var8 = _closure1_slot6;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 10;
                var4 = var11[var4];
                var5 = var12.bind(var3)(var4);
                var4 = {};
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(6);
                var4[0] = var5;
                var5 = 11;
                var5 = var11[var5];
                var7 = var12.bind(var3)(var5);
                var5 = {};
                var5 = var8.bind(var3)(var7, var5);
                var4[1] = var5;
                var7 = _closure1_slot0;
                var5 = 12;
                var5 = var11[var5];
                var5 = var7.bind(var3)(var5);
                var16 = var5.ShieldSpotIllustration;
                var5 = {};
                var5 = var8.bind(var3)(var16, var5);
                var4[2] = var5;
                var5 = 13;
                var5 = var11[var5];
                var12 = var12.bind(var3)(var5);
                var5 = {};
                var16 = var14.header;
                var5.style = var16;
                var5.children = var13;
                var5 = var8.bind(var3)(var12, var5);
                var4[3] = var5;
                var5 = 14;
                var5 = var11[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.TextWithIOSLinkWorkaround;
                var5 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-default'
                };
                var11 = var14.body;
                var5.style = var11;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var17];
                var12 = var16.bind(var3)(var12);
                var13 = var12.intl;
                if (var9) {
                    _fun100522_ip = 637;
                    continue _fun100522
                }
            case 489:
                var18 = var13.format;
                var9 = var11[var17];
                var9 = var16.bind(var3)(var9);
                var9 = var9.t;
                var12 = var9.b0QzXe;
                var9 = {};
                var20 = null;
                if (!(var20 == var19)) {
                    _fun100522_ip = 578;
                    continue _fun100522
                }
            case 524:
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var21 = var20[var17];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var17];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.WqEH4D;
                var19 = var21.bind(var22)(var20);
            case 578:
                var9.underageMessage = var19;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 15;
                var19 = var21[var19];
                var21 = var20.bind(var3)(var19);
                var20 = var21.getArticleURL;
                var19 = _closure1_slot5;
                var19 = var19.AGE_GATE;
                var19 = var20.bind(var21)(var19);
                var9.helpURL = var19;
                var9 = var18.bind(var13)(var12, var9);
                _fun100522_ip = 669;
                continue _fun100522;
            case 637:
                var12 = var13.string;
                var11 = var11[var17];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.GDQgHL;
                var9 = var12.bind(var13)(var11);
            case 669:
                var5.children = var9;
                var5 = var8.bind(var3)(var7, var5);
                var4[4] = var5;
                var5 = null;
                if (!var6) {
                    _fun100522_ip = 930;
                    continue _fun100522
                }
            case 691:
                var8 = _closure1_slot8;
                var7 = _closure1_slot7;
                var6 = {};
                var12 = _closure1_slot6;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 16;
                var9 = var13[var9];
                var9 = var16.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-default'
                };
                var18 = var14.body;
                var9.style = var18;
                var18 = var13[var17];
                var18 = var16.bind(var3)(var18);
                var21 = var18.intl;
                var20 = var21.format;
                var18 = var13[var17];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18["3axQdB"];
                var18 = {};
                var22 = 30;
                var18.days = var22;
                var18 = var20.bind(var21)(var19, var18);
                var9.children = var18;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot1;
                var10 = 17;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.onPress = var15;
                var14 = var14.button;
                var10.style = var14;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.JhDw5o;
                var13 = var14.bind(var15)(var13);
                var10.text = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 930:
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 1469, 4705, 4708, 1234, 7529, 7532, 5962, 7533, 5332, 1684, 3941, 4873, 2]);