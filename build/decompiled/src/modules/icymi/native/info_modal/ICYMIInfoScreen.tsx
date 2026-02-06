// modules/icymi/native/info_modal/ICYMIInfoScreen.tsx
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'position': 'relative',
        'flex': 1
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'left': 12,
        'width': 24,
        'height': null,
        'zIndex': 2
    };
    var11 = 12;
    var13 = 8;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.NAV_BAR_HEIGHT;
    var8.height = var14;
    var3.closeIcon = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var8.backgroundColor = var14;
    var3.closeIconColor = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'aspectRatio': 1.2515923566878981,
        'overflow': 'visible'
    };
    var3.bgImage = var8;
    var8 = {
        'position': 'absolute',
        'top': 16,
        'width': 361,
        'height': 240
    };
    var3.headerImg = var8;
    var8 = {
        'marginBottom': 32,
        'marginTop': 132
    };
    var3.flashIcon = var8;
    var8 = {
        'flex': 1,
        'paddingHorizontal': 16,
        'paddingTop': 16
    };
    var3.subContainer = var8;
    var8 = {
        'alignItems': 'center',
        'paddingHorizontal': 12
    };
    var3.header = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var3.headerText = var8;
    var8 = {
        'gap': 16,
        'padding': 16,
        'backgroundColor': null,
        'borderRadius': null,
        'marginTop': 40
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var8.borderRadius = var14;
    var3.body = var8;
    var8 = {
        'height': 1,
        'backgroundColor': null,
        'marginLeft': 48
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.backgroundColor = var14;
    var3.divider = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'overflow': 'hidden',
        'gap': 16
    };
    var3.infoRow = var8;
    var8 = {};
    var8.padding = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var3.infoIcon = var8;
    var8 = {};
    var8.flexShrink = var12;
    var3.infoText = var8;
    var8 = {};
    var8.margin = var11;
    var3.hint = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.left = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.right = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingBottom = var9;
    var3.footer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/info_modal/ICYMIInfoScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103726: for (var _fun103726_ip = 0;;) switch (_fun103726_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.extendedOnboarding;
                var _closure2_slot0 = var11;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot12;
                var15 = var0.bind(var3)();
                var14 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var0 = var14.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var25 = var0.top;
                var8 = var0.bottom;
                var0 = 10;
                var0 = var7[var0];
                var0 = var14.bind(var3)(var0);
                var24 = var0.bind(var3)();
                var19 = _closure1_slot0;
                var0 = 11;
                var0 = var7[var0];
                var1 = var19.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var2 = _closure1_slot5;
                var5 = var2.useCallback;
                var4 = _closure1_slot4;
                var1 = function*() { // Environment: var31
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun103728: for (var _fun103728_ip = 0;;) switch (_fun103728_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun103728_ip = 183;
                                    continue _fun103728
                                }
                            case 10:
                                var2 = _closure2_slot0;
                                if (var2) {
                                    _fun103728_ip = 57;
                                    continue _fun103728
                                }
                            case 23:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 14;
                                var4 = var4[var2];
                                var2 = undefined;
                                var4 = var5.bind(var2)(var4);
                                var2 = var4.pop;
                                var2 = var2.bind(var4)();
                                _fun103728_ip = 175;
                                continue _fun103728;
                            case 57:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var4 = 12;
                                var4 = var3[var4];
                                var5 = undefined;
                                var4 = var2.bind(var5)(var4);
                                var7 = var4.ICYMIAnalytics;
                                var6 = var7.trackFeedOnboardingScreenSkipped;
                                var4 = {};
                                var8 = 'overview';
                                var4.location = var8;
                                var4 = var6.bind(var7)(var4);
                                var4 = _closure2_slot2;
                                var1 = true;
                                var1 = var4.bind(var5)(var1);
                                var1 = 13;
                                var1 = var3[var1];
                                var2 = var2.bind(var5)(var1);
                                var1 = var2.maybeFetchGuildDiscoveryCategories;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 143);
                            case 141:
                                return var1;
                            case 143:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun103728_ip = 180;
                                    continue _fun103728
                                }
                            case 149:
                                var2 = global;
                                var4 = var2.setTimeout;
                                var3 = function() { // Environment: var2
                                    var2 = _closure2_slot1;
                                    var1 = var2.navigate;
                                    var0 = 'topics_cloud';
                                    var0 = var1.bind(var2)(var0);
                                    var0 = global;
                                    var3 = var0.setTimeout;
                                    var0 = undefined;
                                    var2 = function() { // Environment: var1
                                        var2 = _closure2_slot2;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var1 = 500;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var2 = 100;
                                var2 = var4.bind(var5)(var3, var2);
                            case 175:
                                var2 = undefined;
                                return var2;
                            case 180:
                                return var1;
                            case 183:
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var4.bind(var3)(var1);
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var0;
                var10 = var5.bind(var2)(var4, var1);
                var4 = var2.useLayoutEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var31
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        var0 = null;
                        return var0;
                    };
                    var0.header = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var4.bind(var2)(var0, var1);
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var13 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                _closure2_slot2 = var0;
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var0 = {};
                var21 = _closure1_slot9;
                var20 = _closure1_slot6;
                var4 = {};
                var6 = {};
                var6.marginTop = var25;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var15.closeIcon;
                var5[1] = var6;
                var4.style = var5;
                var5 = 15;
                var5 = var7[var5];
                var5 = var19.bind(var3)(var5);
                var6 = var5.HeaderIconButton;
                var5 = {};
                var9 = 16;
                var9 = var7[var9];
                var9 = var14.bind(var3)(var9);
                var5.source = var9;
                var9 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5.onPress = var9;
                var16 = 17;
                var9 = var7[var16];
                var9 = var19.bind(var3)(var9);
                var18 = var9.intl;
                var17 = var18.string;
                var9 = var7[var16];
                var9 = var19.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.cpT0Cq;
                var9 = var17.bind(var18)(var9);
                var5.accessibilityLabel = var9;
                var9 = var15.closeIconColor;
                var9 = var9.backgroundColor;
                var5.color = var9;
                var5 = var21.bind(var3)(var6, var5);
                var4.children = var5;
                var5 = var21.bind(var3)(var20, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var17 = _closure1_slot7;
                var5 = {};
                var9 = var15.container;
                var6 = new Array(2);
                var6[0] = var9;
                var9 = {};
                var9.marginBottom = var8;
                var6[1] = var9;
                var5.style = var6;
                var9 = 18;
                var6 = var7[var9];
                var18 = var14.bind(var3)(var6);
                var6 = {};
                var19 = {};
                var22 = 19;
                var22 = var7[var22];
                var22 = var14.bind(var3)(var22);
                var19.uri = var22;
                var6.source = var19;
                var19 = var15.bgImage;
                var6.style = var19;
                var6 = var21.bind(var3)(var18, var6);
                var18 = new Array(2);
                var18[0] = var6;
                var19 = {};
                var22 = var15.subContainer;
                var6 = new Array(2);
                var6[0] = var22;
                var22 = {};
                var23 = 7;
                var23 = var7[var23];
                var23 = var14.bind(var3)(var23);
                var23 = var23.spacing;
                var23 = var23.PX_12;
                var23 = var25 + var23;
                var22.marginTop = var23;
                var6[1] = var22;
                var19.style = var6;
                var6 = {};
                var22 = var15.header;
                var6.style = var22;
                var7 = var7[var9];
                var14 = var14.bind(var3)(var7);
                var7 = {};
                var22 = {};
                var23 = _closure1_slot8;
                var23 = var23.LIGHT;
                if (!(var24 !== var23)) {
                    _fun103726_ip = 619;
                    continue _fun103726
                }
            case 597:
                var24 = _closure1_slot1;
                var25 = _closure1_slot2;
                var23 = 21;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                _fun103726_ip = 639;
                continue _fun103726;
            case 619:
                var25 = _closure1_slot1;
                var26 = _closure1_slot2;
                var24 = 20;
                var24 = var26[var24];
                var23 = var25.bind(var3)(var24);
            case 639:
                var22.uri = var23;
                var7.source = var22;
                var22 = var15.headerImg;
                var7.style = var22;
                var7 = var21.bind(var3)(var14, var7);
                var21 = new Array(4);
                var21[0] = var7;
                var7 = _closure1_slot9;
                var24 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = var14[var9];
                var22 = var24.bind(var3)(var9);
                var9 = {};
                var23 = 22;
                var23 = var14[var23];
                var23 = var24.bind(var3)(var23);
                var9.source = var23;
                var23 = var15.flashIcon;
                var9.style = var23;
                var9 = var7.bind(var3)(var22, var9);
                var21[1] = var9;
                var9 = _closure1_slot0;
                var25 = 23;
                var22 = var14[var25];
                var22 = var9.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = var14[var16];
                var24 = var9.bind(var3)(var24);
                var27 = var24.intl;
                var26 = var27.string;
                var24 = var14[var16];
                var24 = var9.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["jnXV/V"];
                var24 = var26.bind(var27)(var24);
                var22.children = var24;
                var22 = var7.bind(var3)(var23, var22);
                var21[2] = var22;
                var22 = var14[var25];
                var22 = var9.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var24 = var15.headerText;
                var22.style = var24;
                var24 = var14[var16];
                var24 = var9.bind(var3)(var24);
                var27 = var24.intl;
                var26 = var27.string;
                var24 = var14[var16];
                var24 = var9.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["9SjvoK"];
                var24 = var26.bind(var27)(var24);
                var22.children = var24;
                var22 = var7.bind(var3)(var23, var22);
                var21[3] = var22;
                var6.children = var21;
                var6 = var2.bind(var3)(var20, var6);
                var21 = new Array(2);
                var21[0] = var6;
                var23 = _closure1_slot10;
                var6 = _closure1_slot6;
                var22 = {};
                var24 = {};
                var26 = var15.body;
                var24.style = var26;
                var26 = {};
                var27 = var15.infoRow;
                var26.style = var27;
                var27 = {};
                var28 = var15.infoIcon;
                var27.style = var28;
                var28 = 24;
                var28 = var14[var28];
                var28 = var9.bind(var3)(var28);
                var29 = var28.ServerIcon;
                var28 = {
                    'size': 'sm',
                    'color': 'interactive-text-active'
                };
                var28 = var7.bind(var3)(var29, var28);
                var27.children = var28;
                var28 = var7.bind(var3)(var6, var27);
                var27 = new Array(2);
                var27[0] = var28;
                var28 = var14[var25];
                var28 = var9.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var30 = var15.infoText;
                var28.style = var30;
                var30 = var14[var16];
                var30 = var9.bind(var3)(var30);
                var33 = var30.intl;
                var32 = var33.string;
                var30 = var14[var16];
                var30 = var9.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.knxfqR;
                var30 = var32.bind(var33)(var30);
                var28.children = var30;
                var28 = var7.bind(var3)(var29, var28);
                var27[1] = var28;
                var26.children = var27;
                var27 = var23.bind(var3)(var6, var26);
                var26 = new Array(5);
                var26[0] = var27;
                var27 = {};
                var28 = var15.divider;
                var27.style = var28;
                var27 = var7.bind(var3)(var6, var27);
                var26[1] = var27;
                var27 = {};
                var28 = var15.infoRow;
                var27.style = var28;
                var28 = {};
                var29 = var15.infoIcon;
                var28.style = var29;
                var29 = 25;
                var29 = var14[var29];
                var29 = var9.bind(var3)(var29);
                var30 = var29.NewUserIcon;
                var29 = {
                    'size': 'sm',
                    'color': 'interactive-text-active'
                };
                var29 = var7.bind(var3)(var30, var29);
                var28.children = var29;
                var29 = var7.bind(var3)(var6, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = var14[var25];
                var29 = var9.bind(var3)(var29);
                var30 = var29.Text;
                var29 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var32 = var15.infoText;
                var29.style = var32;
                var32 = var14[var16];
                var32 = var9.bind(var3)(var32);
                var34 = var32.intl;
                var33 = var34.string;
                var32 = var14[var16];
                var32 = var9.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.BnUXZi;
                var32 = var33.bind(var34)(var32);
                var29.children = var32;
                var29 = var7.bind(var3)(var30, var29);
                var28[1] = var29;
                var27.children = var28;
                var27 = var23.bind(var3)(var6, var27);
                var26[2] = var27;
                var27 = {};
                var28 = var15.divider;
                var27.style = var28;
                var27 = var7.bind(var3)(var6, var27);
                var26[3] = var27;
                var27 = {};
                var28 = var15.infoRow;
                var27.style = var28;
                var28 = {};
                var29 = var15.infoIcon;
                var28.style = var29;
                var29 = 26;
                var29 = var14[var29];
                var29 = var9.bind(var3)(var29);
                var30 = var29.CircleCheckIcon;
                var29 = {
                    'size': 'sm',
                    'color': 'interactive-text-active'
                };
                var29 = var7.bind(var3)(var30, var29);
                var28.children = var29;
                var29 = var7.bind(var3)(var6, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = var14[var25];
                var29 = var9.bind(var3)(var29);
                var30 = var29.Text;
                var29 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var32 = var15.infoText;
                var29.style = var32;
                var32 = var14[var16];
                var32 = var9.bind(var3)(var32);
                var34 = var32.intl;
                var33 = var34.string;
                var32 = var14[var16];
                var32 = var9.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.itb1rh;
                var32 = var33.bind(var34)(var32);
                var29.children = var32;
                var29 = var7.bind(var3)(var30, var29);
                var28[1] = var29;
                var27.children = var28;
                var27 = var23.bind(var3)(var6, var27);
                var26[4] = var27;
                var24.children = var26;
                var26 = var23.bind(var3)(var6, var24);
                var24 = new Array(2);
                var24[0] = var26;
                var25 = var14[var25];
                var25 = var9.bind(var3)(var25);
                var26 = var25.Text;
                var25 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var27 = var15.hint;
                var25.style = var27;
                var27 = var14[var16];
                var27 = var9.bind(var3)(var27);
                var30 = var27.intl;
                var29 = var30.format;
                var27 = var14[var16];
                var27 = var9.bind(var3)(var27);
                var27 = var27.t;
                var28 = var27["jVS/hc"];
                var27 = {};
                var31 = function arg0, arg1() {
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-xs/medium',
                        'color': 'text-link'
                    };
                    var0 = function() {
                        var3 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var2 = 27;
                        var2 = var0[var2];
                        var5 = undefined;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.openLazy;
                        var2 = _closure1_slot0;
                        var1 = 29;
                        var1 = var0[var1];
                        var2 = var2.bind(var5)(var1);
                        var1 = 28;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var2 = var2.bind(var5)(var1, var0);
                        var1 = 'ICYMIFeedbackSheet';
                        var0 = {};
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var1.onPress = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var27.feedbackHook = var31;
                var27 = var29.bind(var30)(var28, var27);
                var25.children = var27;
                var25 = var7.bind(var3)(var26, var25);
                var24[1] = var25;
                var22.children = var24;
                var22 = var23.bind(var3)(var6, var22);
                var21[1] = var22;
                var19.children = var21;
                var19 = var2.bind(var3)(var20, var19);
                var18[1] = var19;
                var5.children = var18;
                var5 = var2.bind(var3)(var17, var5);
                var4[1] = var5;
                var5 = {};
                var17 = {};
                var17.marginBottom = var8;
                var8 = new Array(2);
                var8[0] = var17;
                var15 = var15.footer;
                var8[1] = var15;
                var5.style = var8;
                var8 = 30;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var14 = 'lg';
                var8.size = var14;
                var8.loading = var13;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                if (var11) {
                    _fun103726_ip = 1879;
                    continue _fun103726
                }
            case 1866:
                var11 = var12["+IrDzN"];
                var11 = var13.bind(var14)(var11);
                _fun103726_ip = 1890;
                continue _fun103726;
            case 1879:
                var12 = var12.LhlgY9;
                var11 = var13.bind(var14)(var12);
            case 1890:
                var8.text = var11;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 483, 33, 1297, 671, 4704, 1568, 3248, 1469, 8916, 13572, 4562, 8928, 8936, 1234, 4705, 13574, 13575, 13576, 13577, 3943, 5363, 7881, 3273, 3280, 13578, 1307, 4085, 2]);