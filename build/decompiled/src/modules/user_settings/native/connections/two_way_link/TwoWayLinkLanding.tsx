// modules/user_settings/native/connections/two_way_link/TwoWayLinkLanding.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot2 = var6;
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
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
    var8 = {};
    var9 = 32;
    var8.marginBottom = var9;
    var3.image = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.title = var8;
    var8 = {
        'marginTop': 24,
        'maxWidth': '100%'
    };
    var3.valueProps = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/TwoWayLinkLanding.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47502: for (var _fun47502_ip = 0;;) switch (_fun47502_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.platformType;
                var _closure2_slot0 = var1;
                var8 = var0.img;
                var21 = var0.imgStyle;
                var23 = var0.headerConnect;
                var22 = var0.headerReconnect;
                var19 = var0.body;
                var17 = var0.valueProps;
                var _closure2_slot1 = var17;
                var18 = var0.learnMoreLink;
                var12 = var0.onNext;
                var0 = _closure1_slot8;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useTwoWayLinkStyles;
                var10 = var0.bind(var4)();
                var0 = 6;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    _fun47503: for (var _fun47503_ip = 0;;) switch (_fun47503_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getAccount;
                            var0 = _closure2_slot0;
                            var1 = null;
                            var0 = var2.bind(var3)(var1, var0);
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun47503_ip = 43;
                                continue _fun47503
                            }
                        case 37:
                            var1 = var0.twoWayLink;
                        case 43:
                            var0 = false;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var24 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var6 = _closure1_slot4;
                var4 = {};
                var7 = false;
                var4.alwaysBounceVertical = var7;
                var7 = {};
                var9 = var10.content;
                var7.style = var9;
                var13 = _closure1_slot6;
                var11 = _closure1_slot2;
                var9 = {};
                var9.source = var8;
                var8 = var16.image;
                var14 = new Array(2);
                var14[0] = var8;
                var8 = null;
                var20 = var8 != var21;
                if (!var20) {
                    _fun47502_ip = 232;
                    continue _fun47502
                }
            case 229:
                var20 = var21;
            case 232:
                var14[1] = var20;
                var9.style = var14;
                var11 = var13.bind(var3)(var11, var9);
                var9 = new Array(4);
                var9[0] = var11;
                var14 = _closure1_slot6;
                var13 = _closure1_slot0;
                var11 = _closure1_slot1;
                var20 = 7;
                var11 = var11[var20];
                var11 = var13.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary',
                    'style': null,
                    'accessibilityRole': 'header'
                };
                var21 = var10.title;
                var11.style = var21;
                var21 = var23;
                if (!var24) {
                    _fun47502_ip = 324;
                    continue _fun47502
                }
            case 314:
                var21 = var23;
                if (!(var8 != var22)) {
                    _fun47502_ip = 324;
                    continue _fun47502
                }
            case 321:
                var21 = var22;
            case 324:
                var11.children = var21;
                var11 = var14.bind(var3)(var13, var11);
                var9[1] = var11;
                var14 = _closure1_slot6;
                var13 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var20];
                var11 = var13.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var20 = var10.body;
                var11.style = var20;
                var11.children = var19;
                var11 = var14.bind(var3)(var13, var11);
                var9[2] = var11;
                var13 = _closure1_slot3;
                var11 = {};
                var16 = var16.valueProps;
                var11.style = var16;
                var16 = var17.map;
                var15 = function(arg0, arg1) { // Environment: var15
                    var0 = arg0;
                    var11 = arg1;
                    var4 = var0.label;
                    var9 = var0.subLabel;
                    var7 = var0.icon;
                    var3 = _closure1_slot6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 8;
                    var0 = var8[var5];
                    var2 = undefined;
                    var0 = var6.bind(var2)(var0);
                    var1 = var0.TableRow;
                    var0 = {};
                    var10 = 0;
                    var10 = var10 === var11;
                    var0.start = var10;
                    var10 = _closure2_slot1;
                    var12 = var10.length;
                    var10 = 1;
                    var10 = var12 - var10;
                    var10 = var11 === var10;
                    var0.end = var10;
                    var0.subLabel = var9;
                    var9 = 7;
                    var9 = var8[var9];
                    var9 = var6.bind(var2)(var9);
                    var10 = var9.Text;
                    var9 = {
                        'variant': 'text-sm/normal',
                        'color': 'mobile-text-heading-primary'
                    };
                    var9.children = var4;
                    var9 = var3.bind(var2)(var10, var9);
                    var0.label = var9;
                    var5 = var8[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.TableRow;
                    var6 = var5.Icon;
                    var5 = {};
                    var5.IconComponent = var7;
                    var5 = var3.bind(var2)(var6, var5);
                    var0.icon = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var11.children = var15;
                var11 = var14.bind(var3)(var13, var11);
                var9[3] = var11;
                var7.children = var9;
                var9 = var2.bind(var3)(var1, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var9 = var8 != var18;
                var8 = null;
                if (!var9) {
                    _fun47502_ip = 593;
                    continue _fun47502
                }
            case 473:
                var13 = _closure1_slot6;
                var15 = _closure1_slot0;
                var19 = _closure1_slot1;
                var9 = 9;
                var9 = var19[var9];
                var9 = var15.bind(var3)(var9);
                var11 = var9.TextWithIOSLinkWorkaround;
                var9 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var14 = var10.body;
                var9.style = var14;
                var14 = 10;
                var16 = var19[var14];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14["/l3n+1"];
                var14 = {};
                var14.helpCenterLink = var18;
                var14 = var16.bind(var17)(var15, var14);
                var9.children = var14;
                var8 = var13.bind(var3)(var11, var9);
            case 593:
                var7[1] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var16 = _closure1_slot0;
                var17 = _closure1_slot1;
                var5 = 11;
                var5 = var17[var5];
                var5 = var16.bind(var3)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {};
                var8 = true;
                var5.bottom = var8;
                var8 = var10.footerContainer;
                var5.style = var8;
                var8 = 12;
                var8 = var17[var8];
                var8 = var16.bind(var3)(var8);
                var9 = var8.Stack;
                var8 = {
                    'spacing': 8,
                    'direction': 'vertical'
                };
                var10 = var10.footerButton;
                var8.style = var10;
                var10 = 13;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {
                    'variant': 'primary',
                    'size': 'lg'
                };
                var13 = 10;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.LhlgY9;
                var13 = var14.bind(var15)(var13);
                var10.text = var13;
                var10.onPress = var12;
                var10 = var7.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TwoWayLinkLanding = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4483, 33, 1297, 5293, 566, 3900, 4861, 5294, 1234, 4697, 4039, 4043, 2]);