// modules/create_guild/native/components/CreationIntent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var6 = global;
    var8 = var6.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CreateGuildModalStates;
    var _closure1_slot6 = var7;
    var7 = var3.GuildTemplateTriggers;
    var _closure1_slot7 = var7;
    var3 = var3.NUXGuildTemplatesAnalytics;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var3 = var3.AnalyticsLocations;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 5;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var7 = {};
    var3 = {};
    var3.flex = var10;
    var12 = 6;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.NAV_BAR_HEIGHT;
    var3.marginTop = var12;
    var7.contentContainer = var3;
    var3 = {};
    var3.flex = var10;
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var3.backgroundColor = var10;
    var7.scrollContainer = var3;
    var3 = {
        'alignItems': 'center',
        'paddingVertical': 20,
        'paddingHorizontal': 16
    };
    var7.headerContainer = var3;
    var3 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var7.headerTitle = var3;
    var3 = 18;
    var10 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var7.headerDescription = var10;
    var10 = {
        'marginTop': 16,
        'paddingHorizontal': 16,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var7.skipDescription = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var7 = var6.Math;
    var6 = var7.random;
    var7 = var6.bind(var7)();
    var6 = 0.5;
    var6 = var7 < var6;
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/native/components/CreationIntent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80701: for (var _fun80701_ip = 0;;) switch (_fun80701_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildTemplate;
                var _closure2_slot0 = var1;
                var0 = var0.trigger;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var1 = function arg0() {
                    _fun80702: for (var _fun80702_ip = 0;;) switch (_fun80702_ip) {
                        case 0:
                            var9 = arg0;
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var4 = 10;
                            var2 = var0[var4];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot9;
                            var3 = var2.GUILD_CREATION_INTENT_SELECTED;
                            var2 = {};
                            var7 = null;
                            var8 = var7 == var9;
                            var2.skipped = var8;
                            var8 = var7 != var9;
                            if (!var8) {
                                _fun80702_ip = 66;
                                continue _fun80702
                            }
                        case 63:
                            var8 = var9;
                        case 66:
                            var2.is_community = var8;
                            var2 = var5.bind(var6)(var3, var2);
                            var8 = _closure2_slot2;
                            var5 = var8.push;
                            var2 = _closure1_slot6;
                            var3 = var2.CREATE_SERVER;
                            var2 = {};
                            var10 = _closure2_slot0;
                            var2.guildTemplate = var10;
                            var2.isCommunityIntent = var9;
                            var2 = var5.bind(var8)(var3, var2);
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot7;
                            var2 = var2.NUF;
                            if (!(var3 !== var2)) {
                                _fun80702_ip = 298;
                                continue _fun80702
                            }
                        case 144:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot7;
                            var2 = var2.IN_APP;
                            if (!(var3 === var2)) {
                                _fun80702_ip = 419;
                                continue _fun80702
                            }
                        case 165:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = var3[var4];
                            var12 = var5.bind(var0)(var2);
                            var11 = var12.track;
                            var2 = _closure1_slot9;
                            var10 = var2.OPEN_MODAL;
                            var8 = {};
                            var9 = 'Create Guild Step 2';
                            var8.type = var9;
                            var9 = _closure1_slot10;
                            var13 = var9.CREATE_JOIN_GUILD_MODAL;
                            var8.location_section = var13;
                            var8 = var11.bind(var12)(var10, var8);
                            var3 = var3[var4];
                            var8 = var5.bind(var0)(var3);
                            var5 = var8.track;
                            var3 = var2.CREATE_GUILD_VIEWED;
                            var2 = {};
                            var9 = var9.CREATE_JOIN_GUILD_MODAL;
                            var2.location_section = var9;
                            var9 = _closure2_slot0;
                            var10 = var7 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun80702_ip = 285;
                                continue _fun80702
                            }
                        case 276:
                            var10 = _closure2_slot0;
                            var9 = var10.id;
                        case 285:
                            var2.guild_template_name = var9;
                            var2 = var5.bind(var8)(var3, var2);
                            _fun80702_ip = 419;
                            continue _fun80702;
                        case 298:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 9;
                            var3 = var2[var3];
                            var10 = var5.bind(var0)(var3);
                            var9 = var10.trackNUFStep;
                            var3 = _closure1_slot8;
                            var8 = var3.STEP_CREATION_INTENT;
                            var5 = var3.STEP_GUILD_CREATE;
                            var3 = {};
                            var11 = false;
                            var3.skip = var11;
                            var3 = var9.bind(var10)(var8, var5, var3);
                            var3 = _closure1_slot1;
                            var2 = var2[var4];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot9;
                            var2 = var1.CREATE_GUILD_VIEWED;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun80702_ip = 408;
                                continue _fun80702
                            }
                        case 399:
                            var6 = _closure2_slot0;
                            var5 = var6.id;
                        case 408:
                            var1.guild_template_name = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 419:
                            return var0;
                    }
                };
                var _closure2_slot3 = var1;
                var1 = _closure1_slot13;
                var13 = var1.bind(var3)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                _closure2_slot2 = var1;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    _fun80703: for (var _fun80703_ip = 0;;) switch (_fun80703_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot7;
                            var2 = var2.NUF;
                            if (!(var3 !== var2)) {
                                _fun80703_ip = 99;
                                continue _fun80703
                            }
                        case 24:
                            var2 = _closure2_slot1;
                            var1 = _closure1_slot7;
                            var1 = var1.IN_APP;
                            if (!(var2 === var1)) {
                                _fun80703_ip = 159;
                                continue _fun80703
                            }
                        case 42:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot9;
                            var2 = var1.OPEN_MODAL;
                            var1 = {};
                            var5 = 'Server Intent Discovery';
                            var1.type = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun80703_ip = 159;
                            continue _fun80703;
                        case 99:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.trackNUFStep;
                            var0 = _closure1_slot8;
                            var2 = var0.STEP_GUILD_TEMPLATE;
                            var1 = var0.STEP_CREATION_INTENT;
                            var0 = {};
                            var5 = false;
                            var0.skip = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 159:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var0 = 11;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = true;
                var0.top = var4;
                var4 = var13.contentContainer;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var13.scrollContainer;
                var4.style = var7;
                var9 = _closure1_slot4;
                var7 = {};
                var12 = var13.headerContainer;
                var7.style = var12;
                var14 = 12;
                var12 = var11[var14];
                var12 = var10.bind(var3)(var12);
                var17 = var12.Text;
                var12 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var13.headerTitle;
                var12.style = var16;
                var16 = 13;
                var18 = var11[var16];
                var18 = var10.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var11[var16];
                var18 = var10.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.f3MvGS;
                var18 = var19.bind(var20)(var18);
                var12.children = var18;
                var17 = var2.bind(var3)(var17, var12);
                var12 = new Array(2);
                var12[0] = var17;
                var14 = var11[var14];
                var14 = var10.bind(var3)(var14);
                var17 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var18 = var13.headerDescription;
                var14.style = var18;
                var18 = var11[var16];
                var18 = var10.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var11[var16];
                var18 = var10.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.nOzc7w;
                var18 = var19.bind(var20)(var18);
                var14.children = var18;
                var14 = var2.bind(var3)(var17, var14);
                var12[1] = var14;
                var7.children = var12;
                var9 = var6.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var9 = 14;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.FormSection;
                var9 = _closure1_slot14;
                var11 = {};
                var18 = _closure1_slot11;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 15;
                var12 = var19[var14];
                var21 = var17.bind(var3)(var12);
                var12 = {};
                var22 = _closure1_slot0;
                var20 = 16;
                var23 = var19[var20];
                var23 = var22.bind(var3)(var23);
                if (var9) {
                    _fun80701_ip = 689;
                    continue _fun80701
                }
            case 493:
                var9 = var23.WorldIllocon;
                var12.Icon = var9;
                var9 = var19[var16];
                var9 = var22.bind(var3)(var9);
                var25 = var9.intl;
                var24 = var25.string;
                var9 = var19[var16];
                var9 = var22.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.h9Q1lG;
                var9 = var24.bind(var25)(var9);
                var12.message = var9;
                var9 = function() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var9;
                var24 = var18.bind(var3)(var21, var12);
                var9 = new Array(2);
                var9[0] = var24;
                var24 = var19[var14];
                var25 = var17.bind(var3)(var24);
                var24 = {};
                var26 = var19[var20];
                var26 = var22.bind(var3)(var26);
                var26 = var26.ChairIllocon;
                var24.Icon = var26;
                var26 = var19[var16];
                var26 = var22.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var19[var16];
                var26 = var22.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.uE7zcu;
                var26 = var27.bind(var28)(var26);
                var24.message = var26;
                var26 = function() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var24.onPress = var26;
                var24 = var18.bind(var3)(var25, var24);
                var9[1] = var24;
                var11.children = var9;
                var9 = var11;
                _fun80701_ip = 880;
                continue _fun80701;
            case 689:
                var23 = var23.ChairIllocon;
                var12.Icon = var23;
                var23 = var19[var16];
                var23 = var22.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var19[var16];
                var23 = var22.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.uE7zcu;
                var23 = var24.bind(var25)(var23);
                var12.message = var23;
                var23 = function() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var23;
                var21 = var18.bind(var3)(var21, var12);
                var12 = new Array(2);
                var12[0] = var21;
                var14 = var19[var14];
                var17 = var17.bind(var3)(var14);
                var14 = {};
                var20 = var19[var20];
                var20 = var22.bind(var3)(var20);
                var20 = var20.WorldIllocon;
                var14.Icon = var20;
                var20 = var19[var16];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var16];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.h9Q1lG;
                var19 = var20.bind(var21)(var19);
                var14.message = var19;
                var19 = function() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onPress = var19;
                var14 = var18.bind(var3)(var17, var14);
                var12[1] = var14;
                var11.children = var12;
                var9 = var11;
            case 880:
                var9 = var6.bind(var3)(var10, var9);
                var7[1] = var9;
                var10 = _closure1_slot11;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 17;
                var8 = var11[var8];
                var8 = var12.bind(var3)(var8);
                var9 = var8.TextWithIOSLinkWorkaround;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var13.skipDescription;
                var8.style = var13;
                var13 = var11[var16];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var11[var16];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11["SMc+Gz"];
                var11 = {};
                var15 = function() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = null;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onSkip = var15;
                var11 = var13.bind(var14)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7565, 660, 33, 1297, 4703, 671, 1469, 10286, 795, 4736, 3941, 1234, 5382, 8974, 5966, 5336, 2]);