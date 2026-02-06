// modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var7 = var3.Dimensions;
    var6 = var3.AccessibilityInfo;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PermissionTemplateTypes;
    var _closure1_slot10 = var6;
    var6 = var3.PermissionTemplates;
    var _closure1_slot11 = var6;
    var3 = var3.DEFAULT_TEMPLATE_TYPE;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot13 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot14 = var6;
    var10 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var6 = var7.get;
    var3 = 'window';
    var3 = var6.bind(var7)(var3);
    var6 = var3.width;
    var _closure1_slot17 = var6;
    var3 = 300;
    var3 = var6 - var3;
    var _closure1_slot18 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 9;
    var13 = var5[var9];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var8.flex = var12;
    var3.container = var8;
    var8 = {};
    var8.flex = var12;
    var3.carousel = var8;
    var8 = {
        'paddingHorizontal': 10,
        'flex': 1
    };
    var3.cardWrapper = var8;
    var8 = {
        'backgroundColor': null,
        'borderColor': null,
        'borderRadius': null,
        'borderStyle': 'solid',
        'borderWidth': 1,
        'flex': 1,
        'maxHeight': 460,
        'flexDirection': 'column',
        'marginVertical': 16,
        'padding': 16,
        'paddingTop': 20
    };
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.borderColor = var12;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var11 = 16;
    var3.card = var8;
    var9 = 'center';
    var8 = {
        'alignItems': 'center',
        'textAlign': 'center',
        'paddingBottom': 16
    };
    var3.templateTitle = var8;
    var8 = {};
    var8.paddingBottom = var11;
    var3.templateSubtitle = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'flex-start'
    };
    var3.templateContentWrapper = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'paddingBottom': 8
    };
    var3.templateContent = var8;
    var8 = {
        'flex': 1,
        'marginLeft': 12
    };
    var3.templateContentText = var8;
    var8 = {};
    var10 = var10.PRIMARY_SEMIBOLD;
    var8.fontFamily = var10;
    var3.templateContentTextBold = var8;
    var8 = {
        'justifyContent': 'flex-end',
        'flexGrow': 0,
        'paddingTop': 16
    };
    var3.templateButton = var8;
    var8 = {};
    var8.alignItems = var9;
    var3.sliderContainer = var8;
    var8 = {
        'marginTop': 8,
        'width': 300,
        'maxWidth': '72%'
    };
    var3.slider = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'marginBottom': 16,
        'textAlign': 'center',
        'width': 380,
        'maxWidth': '85%'
    };
    var3.sliderLabels = var8;
    var8 = {
        'marginHorizontal': 0,
        'width': '25%',
        'textAlign': 'center',
        'alignItems': 'center'
    };
    var3.sliderLabel = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleTemplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116025: for (var _fun116025_ip = 0;;) switch (_fun116025_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onSelect;
                var _closure2_slot0 = var1;
                var1 = var0.location;
                var _closure2_slot1 = var1;
                var0 = var0.guildId;
                var _closure2_slot2 = var0;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot6 = var3;
                var22 = function arg0() {
                    _fun116026: for (var _fun116026_ip = 0;;) switch (_fun116026_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Math;
                            var1 = var2.round;
                            var0 = arg0;
                            var4 = var1.bind(var2)(var0);
                            var2 = _closure2_slot6;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var4);
                            var2 = _closure2_slot4;
                            var5 = null;
                            var2 = var5 != var2;
                            if (!var2) {
                                _fun116026_ip = 61;
                                continue _fun116026
                            }
                        case 48:
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var2 = var5 != var3;
                        case 61:
                            if (!var2) {
                                _fun116026_ip = 103;
                                continue _fun116026
                            }
                        case 64:
                            var1 = _closure2_slot4;
                            var3 = var1.current;
                            var2 = var3.snapToItem;
                            var1 = _closure1_slot8;
                            var1 = var1.useReducedMotion;
                            var1 = !var1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 103:
                            return var0;
                    }
                };
                var _closure2_slot11 = var22;
                var0 = _closure1_slot19;
                var9 = var0.bind(var3)();
                var _closure2_slot3 = var9;
                var6 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 10;
                var0 = var17[var0];
                var0 = var6.bind(var3)(var0);
                var16 = var0.bind(var3)();
                var4 = _closure1_slot4;
                var1 = var4.useRef;
                var0 = null;
                var12 = var1.bind(var4)(var0);
                _closure2_slot4 = var12;
                var1 = var4.useState;
                var0 = _closure1_slot12;
                var0 = var1.bind(var4)(var0);
                var5 = _closure1_slot3;
                var2 = 2;
                var0 = var5.bind(var3)(var0, var2);
                var1 = 0;
                var21 = var0[var1];
                var _closure2_slot5 = var21;
                var25 = 1;
                var0 = var0[var25];
                _closure2_slot6 = var0;
                var7 = var4.useState;
                var0 = _closure1_slot17;
                var0 = var7.bind(var4)(var0);
                var0 = var5.bind(var3)(var0, var2);
                var10 = var0[var1];
                var _closure2_slot7 = var10;
                var0 = var0[var25];
                var _closure2_slot8 = var0;
                var7 = var4.useState;
                var0 = _closure1_slot18;
                var0 = var7.bind(var4)(var0);
                var0 = var5.bind(var3)(var0, var2);
                var14 = var0[var1];
                var0 = var0[var25];
                var _closure2_slot9 = var0;
                var0 = var4.useState;
                var20 = false;
                var0 = var0.bind(var4)(var20);
                var0 = var5.bind(var3)(var0, var2);
                var8 = var0[var1];
                var0 = var0[var25];
                var _closure2_slot10 = var0;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var11
                    var1 = _closure1_slot6;
                    var0 = var1.isScreenReaderEnabled;
                    var2 = var0.bind(var1)();
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot10;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var0 = global;
                var2 = var0.Object;
                var1 = var2.values;
                var0 = _closure1_slot11;
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var9.container;
                var0.style = var4;
                var4 = function arg0() {
                    _fun116029: for (var _fun116029_ip = 0;;) switch (_fun116029_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var3 = var0.width;
                            var1 = _closure2_slot7;
                            if (!(var3 !== var1)) {
                                _fun116029_ip = 61;
                                continue _fun116029
                            }
                        case 31:
                            var1 = _closure2_slot8;
                            var2 = undefined;
                            var1 = var1.bind(var2)(var3);
                            var1 = _closure2_slot9;
                            var0 = 300;
                            var0 = var3 - var0;
                            var0 = var1.bind(var2)(var0);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onLayout = var4;
                var4 = {};
                var5 = var9.sliderContainer;
                var4.style = var5;
                var7 = _closure1_slot15;
                var5 = {
                    'accessible': false,
                    'accessibilityElementsHidden': true,
                    'importantForAccessibility': 'no-hide-descendants'
                };
                var13 = true;
                var18 = 13;
                var18 = var17[var18];
                var19 = var6.bind(var3)(var18);
                var18 = {};
                var24 = var15.length;
                var24 = var24 - var25;
                var18.maximumValue = var24;
                var24 = var15[var21];
                var24 = var24.color;
                var18.minimumTrackTintColor = var24;
                var23 = _closure1_slot10;
                var23 = var23.COSMETIC;
                var18.minimumValue = var23;
                var18.onSlidingComplete = var22;
                var22 = var9.slider;
                var18.style = var22;
                var22 = var15[var21];
                var22 = var22.color;
                var18.thumbTintColor = var22;
                var18.value = var21;
                var18.accessible = var20;
                var18.accessibilityElementsHidden = var13;
                var20 = 'no';
                var18.importantForAccessibility = var20;
                var18 = var7.bind(var3)(var19, var18);
                var5.children = var18;
                var18 = var7.bind(var3)(var1, var5);
                var5 = new Array(2);
                var5[0] = var18;
                var18 = {};
                var19 = var9.sliderLabels;
                var18.style = var19;
                var20 = var15.map;
                var19 = function(arg0, arg1) { // Environment: var11
                    var12 = arg1;
                    var0 = arg0;
                    var0 = var0.title;
                    var _closure3_slot0 = var12;
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.sliderLabel;
                    var2.style = var5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 14;
                    var5 = var9[var1];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var6 = var5.PressableOpacity;
                    var5 = {};
                    var10 = 'button';
                    var5.accessibilityRole = var10;
                    var10 = {};
                    var11 = _closure2_slot5;
                    var11 = var11 === var12;
                    var10.selected = var11;
                    var5.accessibilityState = var10;
                    var7 = function() {
                        var2 = _closure2_slot11;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var5.onPress = var7;
                    var7 = 15;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {};
                    var9 = 'text-sm/medium';
                    var7.variant = var9;
                    var9 = var0.bind(var1)();
                    var7.children = var9;
                    var7 = var4.bind(var1)(var8, var7);
                    var5.children = var7;
                    var5 = var4.bind(var1)(var6, var5);
                    var2.children = var5;
                    var0 = var0.bind(var1)();
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var19 = var20.bind(var15)(var19);
                var18.children = var19;
                var18 = var7.bind(var3)(var1, var18);
                var5[1] = var18;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 16;
                var5 = var17[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'data': null,
                    'firstItem': 0,
                    'inactiveSlideScale': 1
                };
                var5.data = var15;
                var15 = 0.7;
                if (!var16) {
                    _fun116025_ip = 614;
                    continue _fun116025
                }
            case 604:
                var15 = 0.3;
            case 614:
                var5.inactiveSlideOpacity = var15;
                var14 = var10 - var14;
                var5.itemWidth = var14;
                var14 = function arg0() {
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onBeforeSnapToItem = var14;
                var5.enableMomentum = var13;
                var13 = 0.9;
                var5.decelerationRate = var13;
                var5.ref = var12;
                var11 = function arg0() {
                    _fun116033: for (var _fun116033_ip = 0;;) switch (_fun116033_ip) {
                        case 0:
                            var0 = arg0;
                            var17 = var0.item;
                            var _closure3_slot0 = var17;
                            var1 = var0.index;
                            var0 = _closure2_slot5;
                            var4 = var1 === var0;
                            var0 = var17.contentPreface;
                            var18 = var0.bind(var17)();
                            var3 = _closure1_slot15;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var0 = !var4;
                            var5 = !var0;
                            if (!var4) {
                                _fun116033_ip = 64;
                                continue _fun116033
                            }
                        case 62:
                            var5 = undefined;
                        case 64:
                            var1.accessible = var5;
                            var1.accessibilityElementsHidden = var0;
                            var0 = 'no-hide-descendants';
                            if (!var4) {
                                _fun116033_ip = 88;
                                continue _fun116033
                            }
                        case 82:
                            var0 = 'yes';
                        case 88:
                            var1.importantForAccessibility = var0;
                            var15 = _closure2_slot3;
                            var0 = var15.cardWrapper;
                            var1.style = var0;
                            var6 = _closure1_slot16;
                            var5 = _closure1_slot5;
                            var4 = {};
                            var0 = var15.card;
                            var4.style = var0;
                            var10 = _closure1_slot15;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var21 = 15;
                            var7 = var8[var21];
                            var0 = undefined;
                            var7 = var9.bind(var0)(var7);
                            var14 = var7.Text;
                            var7 = {};
                            var16 = var15.templateTitle;
                            var7.style = var16;
                            var16 = 'heading-lg/extrabold';
                            var7.variant = var16;
                            var16 = var17.title;
                            var16 = var16.bind(var17)();
                            var7.children = var16;
                            var14 = var10.bind(var0)(var14, var7);
                            var7 = new Array(4);
                            var7[0] = var14;
                            var8 = var8[var21];
                            var8 = var9.bind(var0)(var8);
                            var9 = var8.Text;
                            var8 = {};
                            var14 = var15.templateSubtitle;
                            var8.style = var14;
                            var20 = 'text-sm/medium';
                            var8.variant = var20;
                            var14 = var17.description;
                            var14 = var14.bind(var17)();
                            var8.children = var14;
                            var8 = var10.bind(var0)(var9, var8);
                            var7[1] = var8;
                            var9 = _closure1_slot7;
                            var8 = {};
                            var14 = {};
                            var15 = var15.templateContentWrapper;
                            var14.style = var15;
                            var19 = null;
                            var15 = var19 != var18;
                            var16 = null;
                            if (!var15) {
                                _fun116033_ip = 369;
                                continue _fun116033
                            }
                        case 293:
                            var15 = '';
                            var16 = null;
                            if (!(var15 !== var18)) {
                                _fun116033_ip = 369;
                                continue _fun116033
                            }
                        case 303:
                            var19 = _closure1_slot15;
                            var18 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var15 = var15[var21];
                            var15 = var18.bind(var0)(var15);
                            var18 = var15.Text;
                            var15 = {};
                            var21 = _closure2_slot3;
                            var21 = var21.templateSubtitle;
                            var15.style = var21;
                            var15.variant = var20;
                            var20 = var17.contentPreface;
                            var20 = var20.bind(var17)();
                            var15.children = var20;
                            var16 = var19.bind(var0)(var18, var15);
                        case 369:
                            var15 = new Array(2);
                            var15[0] = var16;
                            var16 = var17.contents;
                            var18 = var16.bind(var17)();
                            var17 = var18.map;
                            var16 = function(arg0, arg1) { // Environment: var13
                                var4 = _closure1_slot16;
                                var3 = _closure1_slot5;
                                var2 = {};
                                var8 = _closure2_slot3;
                                var0 = var8.templateContent;
                                var2.style = var0;
                                var7 = _closure1_slot15;
                                var11 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var10 = 17;
                                var0 = var9[var10];
                                var1 = undefined;
                                var5 = var11.bind(var1)(var0);
                                var0 = {};
                                var12 = 18;
                                var12 = var9[var12];
                                var12 = var11.bind(var1)(var12);
                                var0.source = var12;
                                var6 = _closure1_slot0;
                                var10 = var9[var10];
                                var10 = var6.bind(var1)(var10);
                                var10 = var10.IconSizes;
                                var10 = var10.MEDIUM;
                                var0.size = var10;
                                var10 = 9;
                                var10 = var9[var10];
                                var10 = var11.bind(var1)(var10);
                                var10 = var10.unsafe_rawColors;
                                var10 = var10.GREEN_360;
                                var0.color = var10;
                                var5 = var7.bind(var1)(var5, var0);
                                var0 = new Array(2);
                                var0[0] = var5;
                                var5 = 15;
                                var5 = var9[var5];
                                var5 = var6.bind(var1)(var5);
                                var6 = var5.Text;
                                var5 = {};
                                var8 = var8.templateContentText;
                                var5.style = var8;
                                var8 = 'text-sm/medium';
                                var5.variant = var8;
                                var8 = arg0;
                                var5.children = var8;
                                var5 = var7.bind(var1)(var6, var5);
                                var0[1] = var5;
                                var2.children = var0;
                                var0 = _closure3_slot0;
                                var8 = var0.key;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var7 = var0.concat;
                                var6 = '';
                                var5 = '_content_';
                                var0 = arg1;
                                var0 = var7.bind(var6)(var8, var5, var0);
                                var0 = var4.bind(var1)(var3, var2, var0);
                                return var0;
                            };
                            var16 = var17.bind(var18)(var16);
                            var15[1] = var16;
                            var14.children = var15;
                            var14 = var6.bind(var0)(var5, var14);
                            var8.children = var14;
                            var8 = var10.bind(var0)(var9, var8);
                            var7[2] = var8;
                            var10 = _closure1_slot15;
                            var9 = _closure1_slot5;
                            var8 = {};
                            var12 = _closure2_slot3;
                            var12 = var12.templateButton;
                            var8.style = var12;
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var11 = 19;
                            var11 = var18[var11];
                            var11 = var17.bind(var0)(var11);
                            var12 = var11.Button;
                            var11 = {};
                            var14 = 20;
                            var15 = var18[var14];
                            var15 = var17.bind(var0)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var18[var14];
                            var14 = var17.bind(var0)(var14);
                            var14 = var14.t;
                            var14 = var14.mQS8Is;
                            var14 = var15.bind(var16)(var14);
                            var11.text = var14;
                            var13 = function() {
                                _fun116035: for (var _fun116035_ip = 0;;) switch (_fun116035_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var4 = var0.permissions;
                                        var2 = var0.communityPermissions;
                                        var7 = var0.key;
                                        var3 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var0 = 11;
                                        var1 = var11[var0];
                                        var0 = undefined;
                                        var9 = var3.bind(var0)(var1);
                                        var8 = var9.track;
                                        var1 = _closure1_slot13;
                                        var6 = var1.ROLE_TEMPLATE_SELECTED;
                                        var3 = {};
                                        var10 = _closure2_slot1;
                                        var3.location_page = var10;
                                        var3.template_name = var7;
                                        var10 = _closure1_slot0;
                                        var7 = 12;
                                        var7 = var11[var7];
                                        var11 = var10.bind(var0)(var7);
                                        var10 = var11.collectGuildAnalyticsMetadata;
                                        var7 = _closure2_slot2;
                                        var12 = var10.bind(var11)(var7);
                                        var13 = var3;
                                        var10 = copyDataProperties(var13, var12);
                                        var3 = var8.bind(var9)(var6, var3);
                                        var6 = _closure1_slot9;
                                        var3 = var6.getGuild;
                                        var6 = var3.bind(var6)(var7);
                                        var3 = null;
                                        if (!(var3 != var6)) {
                                            _fun116035_ip = 200;
                                            continue _fun116035
                                        }
                                    case 147:
                                        var7 = var6.features;
                                        var6 = var7.has;
                                        var5 = _closure1_slot14;
                                        var5 = var5.COMMUNITY;
                                        var5 = var6.bind(var7)(var5);
                                        if (!var5) {
                                            _fun116035_ip = 180;
                                            continue _fun116035
                                        }
                                    case 176:
                                        if (!(var3 == var2)) {
                                            _fun116035_ip = 191;
                                            continue _fun116035
                                        }
                                    case 180:
                                        var3 = _closure2_slot0;
                                        var3 = var3.bind(var0)(var4);
                                        _fun116035_ip = 200;
                                        continue _fun116035;
                                    case 191:
                                        var1 = _closure2_slot0;
                                        var1 = var1.bind(var0)(var2);
                                    case 200:
                                        return var0;
                                }
                            };
                            var11.onPress = var13;
                            var11 = var10.bind(var0)(var12, var11);
                            var8.children = var11;
                            var8 = var10.bind(var0)(var9, var8);
                            var7[3] = var8;
                            var4.children = var7;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var5.renderItem = var11;
                var5.sliderWidth = var10;
                var9 = var9.carousel;
                var5.style = var9;
                var8 = !var8;
                var5.scrollEnabled = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1410, 14807, 660, 33, 1297, 671, 7712, 795, 4303, 5432, 4905, 3943, 9513, 4087, 7489, 4085, 1234, 2]);