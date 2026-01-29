// modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: handleJoinGuild, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.openGuildJoinServerScreen;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: handleCreateGuild, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.openCreateGuildModal;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot16 = var0;
    var1 = function(arg0) { // Original name: GuildsEmptyContent, environment: var3
        var0 = arg0;
        var5 = var0.contentContainerStyle;
        var0 = _closure1_slot14;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot7;
        var0 = {
            'alwaysBounceVertical': false,
            'bounces': false
        };
        var4 = var12.scrollView;
        var0.style = var4;
        var6 = var12.scrollViewContentContainer;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.contentContainerStyle = var4;
        var6 = _closure1_slot13;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = {};
        var8 = var12.content;
        var7.style = var8;
        var10 = _closure1_slot12;
        var9 = _closure1_slot6;
        var8 = {};
        var11 = var12.illustrationWrapper;
        var8.style = var11;
        var16 = _closure1_slot12;
        var14 = _closure1_slot5;
        var13 = {};
        var18 = _closure1_slot1;
        var20 = _closure1_slot2;
        var11 = 12;
        var17 = var20[var11];
        var17 = var18.bind(var3)(var17);
        var13.source = var17;
        var17 = var12.illustration;
        var13.style = var17;
        var13 = var16.bind(var3)(var14, var13);
        var8.children = var13;
        var9 = var10.bind(var3)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var13 = _closure1_slot13;
        var10 = _closure1_slot6;
        var9 = {};
        var14 = var12.textWrapper;
        var9.style = var14;
        var21 = _closure1_slot12;
        var19 = _closure1_slot0;
        var17 = 10;
        var14 = var20[var17];
        var14 = var19.bind(var3)(var14);
        var18 = var14.Text;
        var14 = {
            'color': 'mobile-text-heading-primary',
            'variant': 'heading-md/bold'
        };
        var22 = var12.text;
        var16 = new Array(2);
        var16[0] = var22;
        var22 = var12.headerText;
        var16[1] = var22;
        var14.style = var16;
        var16 = 13;
        var22 = var20[var16];
        var22 = var19.bind(var3)(var22);
        var24 = var22.intl;
        var23 = var24.string;
        var22 = var20[var16];
        var22 = var19.bind(var3)(var22);
        var22 = var22.t;
        var22 = var22["Y7Ml/I"];
        var22 = var23.bind(var24)(var22);
        var14.children = var22;
        var18 = var21.bind(var3)(var18, var14);
        var14 = new Array(2);
        var14[0] = var18;
        var21 = _closure1_slot12;
        var17 = var20[var17];
        var17 = var19.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'color': 'text-default',
            'variant': 'text-md/medium'
        };
        var22 = var12.text;
        var17.style = var22;
        var22 = var20[var16];
        var22 = var19.bind(var3)(var22);
        var24 = var22.intl;
        var23 = var24.string;
        var22 = var20[var16];
        var22 = var19.bind(var3)(var22);
        var22 = var22.t;
        var22 = var22.kuyE4r;
        var22 = var23.bind(var24)(var22);
        var17.children = var22;
        var17 = var21.bind(var3)(var18, var17);
        var14[1] = var17;
        var9.children = var14;
        var9 = var13.bind(var3)(var10, var9);
        var8[1] = var9;
        var7.children = var8;
        var8 = var6.bind(var3)(var5, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var10 = _closure1_slot13;
        var8 = 14;
        var8 = var20[var8];
        var8 = var19.bind(var3)(var8);
        var9 = var8.Stack;
        var8 = {};
        var12 = var12.buttonContainer;
        var8.style = var12;
        var8.spacing = var11;
        var14 = _closure1_slot12;
        var12 = 15;
        var11 = var20[var12];
        var11 = var19.bind(var3)(var11);
        var13 = var11.Button;
        var11 = {};
        var17 = 'lg';
        var11.size = var17;
        var17 = var20[var16];
        var17 = var19.bind(var3)(var17);
        var21 = var17.intl;
        var18 = var21.string;
        var17 = var20[var16];
        var17 = var19.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.riOUtB;
        var17 = var18.bind(var21)(var17);
        var11.text = var17;
        var17 = _closure1_slot15;
        var11.onPress = var17;
        var13 = var14.bind(var3)(var13, var11);
        var11 = new Array(2);
        var11[0] = var13;
        var14 = _closure1_slot12;
        var12 = var20[var12];
        var12 = var19.bind(var3)(var12);
        var13 = var12.Button;
        var12 = {
            'size': 'lg',
            'variant': 'secondary'
        };
        var17 = var20[var16];
        var17 = var19.bind(var3)(var17);
        var18 = var17.intl;
        var17 = var18.string;
        var16 = var20[var16];
        var16 = var19.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["BetvT+"];
        var16 = var17.bind(var18)(var16);
        var12.text = var16;
        var15 = _closure1_slot16;
        var12.onPress = var15;
        var12 = var14.bind(var3)(var13, var12);
        var11[1] = var12;
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var14.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.Image;
    var _closure1_slot5 = var8;
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var13 = 8;
    var4 = var6[var13];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var12 = 9;
    var11 = var6[var12];
    var11 = var14.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xxl;
    var10.borderTopLeftRadius = var11;
    var11 = var6[var12];
    var11 = var14.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10.borderTopRightRadius = var11;
    var4.scrollView = var10;
    var10 = {
        'zIndex': 100,
        'width': '100%',
        'backgroundColor': null,
        'flex': 1
    };
    var11 = var6[var12];
    var11 = var14.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var11;
    var4.header = var10;
    var11 = 'center';
    var10 = {
        'height': 56,
        'marginLeft': 16,
        'marginRight': 8,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.headerTitle = var10;
    var10 = {
        'flexGrow': 2,
        'justifyContent': 'center'
    };
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var15;
    var4.scrollViewContentContainer = var10;
    var10 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.headerInner = var10;
    var10 = {
        'flexGrow': 2,
        'paddingHorizontal': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.paddingHorizontal = var15;
    var4.content = var10;
    var10 = {
        'width': '100%',
        'paddingHorizontal': 36
    };
    var4.illustrationWrapper = var10;
    var10 = {
        'resizeMode': 'contain',
        'alignSelf': 'center'
    };
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var10.marginBottom = var15;
    var4.illustration = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.paddingBottom = var15;
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.paddingHorizontal = var15;
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var15;
    var4.buttonContainer = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.marginHorizontal = var15;
    var12 = var6[var12];
    var12 = var14.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var10.marginVertical = var12;
    var4.textWrapper = var10;
    var10 = {};
    var12 = 10;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.TextStyleSheet;
    var17 = var12["heading-md/bold"];
    var18 = var10;
    var12 = copyDataProperties(var18, var17);
    var14 = 18;
    var12 = 'fontSize';
    var10[var12] = var14;
    var12 = 'marginBottom';
    var10[var12] = var13;
    var4.headerText = var10;
    var10 = {};
    var10.textAlign = var11;
    var4.text = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Original name: GuildsEmpty, environment: var3
        _fun103230: for (var _fun103230_ip = 0;;) switch (_fun103230_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.selectedGuildId;
                var7 = var0.style;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var0 = _closure1_slot14;
                var14 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 16;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var11 = var0.bind(var4)();
                var _closure2_slot0 = var11;
                var1 = _closure1_slot0;
                var0 = 17;
                var0 = var5[var0];
                var8 = var1.bind(var4)(var0);
                var5 = var8.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot8;
                    var0 = var1.getSessionId;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = var5.bind(var8)(var1, var0);
                var12 = null;
                if (!var1) {
                    _fun103230_ip = 115;
                    continue _fun103230
                }
            case 112:
                var12 = var3;
            case 115:
                _closure2_slot1 = var12;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 18;
                var3 = var8[var3];
                var9 = var5.bind(var4)(var3);
                var3 = {};
                var5 = _closure1_slot0;
                var10 = 19;
                var13 = var8[var10];
                var13 = var5.bind(var4)(var13);
                var13 = var13.ImpressionTypes;
                var13 = var13.VIEW;
                var3.type = var13;
                var10 = var8[var10];
                var10 = var5.bind(var4)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.GUILDS_EMPTY_NUX;
                var3.name = var10;
                var3 = var9.bind(var4)(var3);
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var11;
                var2 = function() { // Environment: var2
                    _fun103232: for (var _fun103232_ip = 0;;) switch (_fun103232_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun103232_ip = 243;
                                continue _fun103232
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            if (!(var4 != var2)) {
                                _fun103232_ip = 243;
                                continue _fun103232
                            }
                        case 29:
                            var6 = _closure1_slot9;
                            var5 = var6.getGuild;
                            var3 = _closure2_slot1;
                            var3 = var5.bind(var6)(var3);
                            if (!(var4 == var3)) {
                                _fun103232_ip = 82;
                                continue _fun103232
                            }
                        case 54:
                            var7 = _closure1_slot9;
                            var6 = var7.getGuild;
                            var8 = _closure1_slot10;
                            var5 = var8.getGuildId;
                            var5 = var5.bind(var8)();
                            var3 = var6.bind(var7)(var5);
                        case 82:
                            if (!(var4 == var3)) {
                                _fun103232_ip = 114;
                                continue _fun103232
                            }
                        case 86:
                            var7 = _closure1_slot9;
                            var6 = var7.getGuild;
                            var8 = _closure1_slot10;
                            var5 = var8.getLastSelectedGuildId;
                            var5 = var5.bind(var8)();
                            var3 = var6.bind(var7)(var5);
                        case 114:
                            if (!(var4 == var3)) {
                                _fun103232_ip = 152;
                                continue _fun103232
                            }
                        case 118:
                            var7 = _closure1_slot9;
                            var5 = var7.getGuilds;
                            var6 = var5.bind(var7)();
                            var5 = var7.getGuildIds;
                            var7 = var5.bind(var7)();
                            var5 = 0;
                            var5 = var7[var5];
                            var3 = var6[var5];
                        case 152:
                            if (!(var4 != var3)) {
                                _fun103232_ip = 243;
                                continue _fun103232
                            }
                        case 156:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 20;
                            var4 = var5[var4];
                            var5 = undefined;
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.getInitialGuildState;
                            var4 = var3.id;
                            var3 = false;
                            var4 = var6.bind(var7)(var4, var5, var3);
                            var3 = _closure1_slot3;
                            var2 = 2;
                            var3 = var3.bind(var5)(var4, var2);
                            var2 = 1;
                            var2 = var3[var2];
                            var _closure3_slot0 = var2;
                            var2 = _closure2_slot0;
                            var1 = var2.dispatch;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 21;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var2 = var0.CommonActions;
                                var1 = var2.reset;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 243:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var3);
                var2 = 22;
                var2 = var8[var2];
                var3 = var5.bind(var4)(var2);
                var2 = var3.useIsScreenLandscape;
                var2 = var2.bind(var3)();
                var3 = 23;
                var3 = var8[var3];
                var8 = var5.bind(var4)(var3);
                var5 = var8.useYouBarEnabled;
                var3 = 'guilds-empty';
                var10 = var5.bind(var8)(var3);
                if (!var10) {
                    _fun103230_ip = 294;
                    continue _fun103230
                }
            case 291:
                var10 = var2;
            case 294:
                var2 = _closure1_slot11;
                var11 = var2.bind(var4)();
                var0 = null;
                if (!var1) {
                    _fun103230_ip = 561;
                    continue _fun103230
                }
            case 310:
                var3 = _closure1_slot13;
                var2 = _closure1_slot6;
                var1 = {};
                var8 = var14.header;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1.style = var5;
                var8 = _closure1_slot12;
                var7 = _closure1_slot6;
                var5 = {};
                var9 = var14.headerTitle;
                var5.style = var9;
                var13 = _closure1_slot12;
                var12 = _closure1_slot6;
                var9 = {};
                var14 = var14.headerInner;
                var9.style = var14;
                var16 = _closure1_slot12;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 10;
                var14 = var21[var14];
                var14 = var20.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-lg/bold',
                    'maxFontSizeMultiplier': 1.75,
                    'accessibilityRole': 'header'
                };
                var17 = 13;
                var18 = var21[var17];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17["7hB4kg"];
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var9.children = var14;
                var9 = var13.bind(var4)(var12, var9);
                var5.children = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot12;
                var7 = _closure1_slot17;
                var6 = {};
                var9 = undefined;
                if (!var10) {
                    _fun103230_ip = 536;
                    continue _fun103230
                }
            case 526:
                var10 = {};
                var10.paddingBottom = var11;
                var9 = var10;
            case 536:
                var6.contentContainerStyle = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 561:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GuildsEmptyContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1216, 1410, 3172, 13121, 33, 1297, 671, 3895, 10140, 13444, 1234, 4033, 4037, 8946, 632, 5170, 481, 3874, 1470, 5319, 12150, 2]);