// modules/create_guild/native/components/GuildTemplates.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.guildTemplate;
        var _closure2_slot0 = var5;
        var0 = var0.onGuildTemplatePress;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot14;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 17;
        var0 = var8[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var7 = _closure1_slot0;
        var6 = 18;
        var6 = var8[var6];
        var6 = var7.bind(var2)(var6);
        var7 = var6.GUILD_TEMPLATE_ICON_COMPONENTS;
        var6 = var5.id;
        var6 = var7[var6];
        var0.Icon = var6;
        var5 = var5.label;
        var0.message = var5;
        var4 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
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
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.getGuildTemplatesMap;
    var _closure1_slot7 = var6;
    var3 = var3.GuildTemplateId;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CreateGuildModalStates;
    var _closure1_slot9 = var6;
    var6 = var3.GuildTemplateTriggers;
    var _closure1_slot10 = var6;
    var3 = var3.NUXGuildTemplatesAnalytics;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot12 = var6;
    var3 = var3.AnalyticsLocations;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var10;
    var3.flex = var8;
    var8 = {};
    var9 = 8;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.NAV_BAR_HEIGHT;
    var8.marginTop = var12;
    var3.contentContainer = var8;
    var8 = {};
    var8.flex = var10;
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var3.scrollContainer = var8;
    var8 = {
        'alignItems': 'center',
        'paddingTop': 20,
        'paddingBottom': 20,
        'paddingHorizontal': 16
    };
    var3.headerContainer = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.headerTitle = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.headerDescription = var8;
    var8 = {
        'paddingTop': 20,
        'paddingBottom': 4,
        'paddingHorizontal': 16
    };
    var3.subHeader = var8;
    var8 = {
        'backgroundColor': null,
        'position': 'absolute',
        'bottom': 0,
        'width': '100%'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.footerSafeAreaContainer = var8;
    var8 = {
        'padding': 16,
        'gap': 16,
        'minHeight': 110,
        'justifyContent': 'center'
    };
    var3.footerContainer = var8;
    var8 = {
        'alignSelf': 'center',
        'textAlign': 'center'
    };
    var3.footerTitle = var8;
    var8 = {};
    var8.flexGrow = var0;
    var3.footerButton = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.backButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = function() {
        var0 = _closure1_slot16;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot15;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var9.headerContainer;
        var0.style = var4;
        var10 = _closure1_slot14;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 10;
        var4 = var12[var5];
        var4 = var11.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var9.headerTitle;
        var4.style = var8;
        var8 = 11;
        var13 = var12[var8];
        var13 = var11.bind(var3)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var12[var8];
        var13 = var11.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["5HZu07"];
        var13 = var14.bind(var15)(var13);
        var4.children = var13;
        var7 = var10.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot14;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var9 = var9.headerDescription;
        var5.style = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["/k/L/j"];
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var3;
    var3 = function arg0() {
        _fun80711: for (var _fun80711_ip = 0;;) switch (_fun80711_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.trigger;
                var _closure2_slot0 = var2;
                var0 = var0.onHeightChange;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot16;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useNavigation;
                var1 = var1.bind(var4)();
                var _closure2_slot2 = var1;
                var4 = _closure1_slot1;
                var1 = 13;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var8 = var1.bottom;
                var1 = _closure1_slot10;
                var1 = var1.NUF;
                if (!(var2 !== var1)) {
                    _fun80711_ip = 168;
                    continue _fun80711
                }
            case 111:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.riOUtB;
                var11 = var2.bind(var4)(var1);
                _fun80711_ip = 225;
                continue _fun80711;
            case 168:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.INo2NK;
                var11 = var2.bind(var4)(var1);
            case 225:
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var10
                    var2 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var12.footerSafeAreaContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.paddingBottom = var8;
                var5[1] = var6;
                var0.style = var5;
                var0.onLayout = var4;
                var5 = _closure1_slot15;
                var4 = {};
                var6 = var12.footerContainer;
                var4.style = var6;
                var9 = _closure1_slot14;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 10;
                var6 = var13[var6];
                var6 = var17.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.footerTitle;
                var6.style = var14;
                var14 = 11;
                var15 = var13[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["N+Mi/U"];
                var14 = var15.bind(var16)(var14);
                var6.children = var14;
                var8 = var9.bind(var3)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot14;
                var8 = _closure1_slot1;
                var7 = 14;
                var7 = var13[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var12 = var12.footerButton;
                var7.style = var12;
                var7.text = var11;
                var10 = function() {
                    _fun80713: for (var _fun80713_ip = 0;;) switch (_fun80713_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot10;
                            var2 = var2.NUF;
                            if (!(var3 !== var2)) {
                                _fun80713_ip = 107;
                                continue _fun80713
                            }
                        case 24:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot10;
                            var2 = var2.IN_APP;
                            if (!(var3 === var2)) {
                                _fun80713_ip = 203;
                                continue _fun80713
                            }
                        case 45:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 16;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot12;
                            var3 = var2.JOIN_GUILD_VIEWED;
                            var2 = {};
                            var6 = _closure1_slot13;
                            var6 = var6.CREATE_JOIN_GUILD_MODAL;
                            var2.location_section = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            _fun80713_ip = 203;
                            continue _fun80713;
                        case 107:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 15;
                            var2 = var5[var2];
                            var4 = undefined;
                            var8 = var3.bind(var4)(var2);
                            var7 = var8.trackNUFStep;
                            var2 = _closure1_slot11;
                            var6 = var2.STEP_GUILD_TEMPLATE;
                            var3 = var2.STEP_GUILD_JOIN;
                            var2 = {};
                            var9 = false;
                            var2.skip = var9;
                            var2 = var7.bind(var8)(var6, var3, var2);
                            var3 = _closure1_slot1;
                            var2 = 16;
                            var2 = var5[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.track;
                            var2 = _closure1_slot12;
                            var2 = var2.JOIN_GUILD_VIEWED;
                            var2 = var3.bind(var4)(var2);
                        case 203:
                            var3 = _closure2_slot2;
                            var2 = var3.push;
                            var0 = _closure1_slot9;
                            var1 = var0.JOIN_SERVER;
                            var0 = {};
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var7.onPress = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/native/components/GuildTemplates.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var12 = var1.trigger;
        var _closure2_slot0 = var12;
        var6 = var1.location;
        var _closure2_slot1 = var6;
        var1 = var1.fromStep;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot16;
        var3 = undefined;
        var10 = var2.bind(var3)();
        var4 = _closure1_slot1;
        var23 = _closure1_slot2;
        var2 = 13;
        var2 = var23[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var14 = var2.bottom;
        var22 = _closure1_slot0;
        var2 = 12;
        var2 = var23[var2];
        var4 = var22.bind(var3)(var2);
        var2 = var4.useNavigation;
        var2 = var2.bind(var4)();
        var _closure2_slot3 = var2;
        var4 = _closure1_slot4;
        var5 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var12;
        var2[1] = var6;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            _fun80715: for (var _fun80715_ip = 0;;) switch (_fun80715_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot10;
                    var2 = var2.NUF;
                    if (!(var3 !== var2)) {
                        _fun80715_ip = 129;
                        continue _fun80715
                    }
                case 24:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot10;
                    var2 = var2.IN_APP;
                    if (!(var3 === var2)) {
                        _fun80715_ip = 209;
                        continue _fun80715
                    }
                case 45:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot12;
                    var3 = var2.OPEN_MODAL;
                    var2 = {};
                    var6 = 'Create Guild Templates';
                    var2.type = var6;
                    var7 = _closure2_slot1;
                    var6 = null;
                    var7 = var6 != var7;
                    var6 = 'Guild List';
                    if (!var7) {
                        _fun80715_ip = 117;
                        continue _fun80715
                    }
                case 113:
                    var6 = _closure2_slot1;
                case 117:
                    var2.source = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun80715_ip = 209;
                    continue _fun80715;
                case 129:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackNUFStep;
                    var5 = _closure2_slot2;
                    var2 = null;
                    if (!(var2 == var5)) {
                        _fun80715_ip = 179;
                        continue _fun80715
                    }
                case 167:
                    var2 = _closure1_slot11;
                    var2 = var2.STEP_REGISTRATION;
                    _fun80715_ip = 183;
                    continue _fun80715;
                case 179:
                    var2 = _closure2_slot2;
                case 183:
                    var0 = _closure1_slot11;
                    var1 = var0.STEP_GUILD_TEMPLATE;
                    var0 = {};
                    var5 = false;
                    var0.skip = var5;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 209:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var5.bind(var4)(var1, var2);
        var19 = function arg0() {
            _fun80716: for (var _fun80716_ip = 0;;) switch (_fun80716_ip) {
                case 0:
                    var4 = arg0;
                    var6 = _closure2_slot3;
                    var5 = var6.push;
                    var1 = _closure1_slot9;
                    var3 = var1.CREATION_INTENT;
                    var1 = {};
                    var1.guildTemplate = var4;
                    var2 = _closure2_slot0;
                    var1.trigger = var2;
                    var1 = var5.bind(var6)(var3, var1);
                    var1 = _closure1_slot10;
                    var1 = var1.IN_APP;
                    if (!(var2 === var1)) {
                        _fun80716_ip = 119;
                        continue _fun80716
                    }
                case 64:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot12;
                    var1 = var0.GUILD_TEMPLATE_SELECTED;
                    var0 = {};
                    var4 = var4.id;
                    var0.template_name = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var4.useState;
        var1 = _closure1_slot7;
        var1 = var1.bind(var3)();
        var1 = var2.bind(var4)(var1);
        var7 = _closure1_slot3;
        var2 = 1;
        var1 = var7.bind(var3)(var1, var2);
        var5 = 0;
        var21 = var1[var5];
        var6 = var4.useState;
        var1 = 110;
        var6 = var6.bind(var4)(var1);
        var1 = 2;
        var1 = var7.bind(var3)(var6, var1);
        var13 = var1[var5];
        var1 = var1[var2];
        var _closure2_slot4 = var1;
        var2 = var4.useCallback;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure2_slot4;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = new Array(0);
        var11 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot14;
        var0 = 19;
        var0 = var23[var0];
        var0 = var22.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.top = var4;
        var5 = var10.flex;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = var10.contentContainer;
        var4[1] = var5;
        var0.style = var4;
        var6 = _closure1_slot15;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var10.flex;
        var4.style = var7;
        var9 = _closure1_slot6;
        var7 = {};
        var10 = var10.scrollContainer;
        var7.style = var10;
        var10 = {};
        var14 = var13 + var14;
        var13 = 16;
        var13 = var14 + var13;
        var10.paddingBottom = var13;
        var7.contentContainerStyle = var10;
        var14 = _closure1_slot14;
        var13 = _closure1_slot17;
        var10 = {};
        var13 = var14.bind(var3)(var13, var10);
        var10 = new Array(3);
        var10[0] = var13;
        var16 = _closure1_slot14;
        var13 = 20;
        var14 = var23[var13];
        var14 = var22.bind(var3)(var14);
        var15 = var14.FormSection;
        var14 = {};
        var24 = _closure1_slot14;
        var18 = _closure1_slot19;
        var17 = {};
        var20 = _closure1_slot8;
        var25 = var20.CREATE;
        var25 = var21[var25];
        var17.guildTemplate = var25;
        var17.onGuildTemplatePress = var19;
        var17 = var24.bind(var3)(var18, var17);
        var14.children = var17;
        var14 = var16.bind(var3)(var15, var14);
        var10[1] = var14;
        var13 = var23[var13];
        var13 = var22.bind(var3)(var13);
        var14 = var13.FormSection;
        var13 = {};
        var15 = 11;
        var16 = var23[var15];
        var16 = var22.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var23[var15];
        var15 = var22.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.JGDkfg;
        var15 = var16.bind(var17)(var15);
        var13.title = var15;
        var16 = _closure1_slot14;
        var15 = {};
        var17 = var20.GAMING;
        var17 = var21[var17];
        var15.guildTemplate = var17;
        var15.onGuildTemplatePress = var19;
        var16 = var16.bind(var3)(var18, var15);
        var15 = new Array(6);
        var15[0] = var16;
        var17 = _closure1_slot14;
        var16 = {};
        var22 = var20.SCHOOL_CLUB;
        var22 = var21[var22];
        var16.guildTemplate = var22;
        var16.onGuildTemplatePress = var19;
        var16 = var17.bind(var3)(var18, var16);
        var15[1] = var16;
        var17 = _closure1_slot14;
        var16 = {};
        var22 = var20.STUDY;
        var22 = var21[var22];
        var16.guildTemplate = var22;
        var16.onGuildTemplatePress = var19;
        var16 = var17.bind(var3)(var18, var16);
        var15[2] = var16;
        var17 = _closure1_slot14;
        var16 = {};
        var22 = var20.FRIENDS;
        var22 = var21[var22];
        var16.guildTemplate = var22;
        var16.onGuildTemplatePress = var19;
        var16 = var17.bind(var3)(var18, var16);
        var15[3] = var16;
        var17 = _closure1_slot14;
        var16 = {};
        var22 = var20.CREATORS;
        var22 = var21[var22];
        var16.guildTemplate = var22;
        var16.onGuildTemplatePress = var19;
        var16 = var17.bind(var3)(var18, var16);
        var15[4] = var16;
        var17 = _closure1_slot14;
        var16 = {};
        var20 = var20.LOCAL_COMMUNITY;
        var20 = var21[var20];
        var16.guildTemplate = var20;
        var16.onGuildTemplatePress = var19;
        var16 = var17.bind(var3)(var18, var16);
        var15[5] = var16;
        var13.children = var15;
        var13 = var6.bind(var3)(var14, var13);
        var10[2] = var13;
        var7.children = var10;
        var9 = var6.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var10 = _closure1_slot14;
        var9 = _closure1_slot18;
        var8 = {};
        var8.trigger = var12;
        var8.onHeightChange = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 10291, 7570, 660, 33, 1297, 4704, 671, 3943, 1234, 1469, 1568, 4876, 10292, 795, 8980, 10293, 4737, 5383, 2]);