// modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
        'paddingHorizontal': null,
        'marginTop': 16,
        'marginLeft': 16,
        'marginRight': 16
    };
    var10 = 5;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingHorizontal = var9;
    var9 = 16;
    var3.segmentedControl = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.container = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var3.header = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'padding': 12
    };
    var3.platformItem = var8;
    var8 = {};
    var8.marginHorizontal = var9;
    var3.divider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116103: for (var _fun116103_ip = 0;;) switch (_fun116103_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.addConnection;
                var _closure2_slot0 = var1;
                var1 = var0.excludedConnections;
                var _closure2_slot1 = var1;
                var1 = var0.excludedApplications;
                var _closure2_slot2 = var1;
                var4 = var0.integrations;
                var0 = var0.onCompleteApplication;
                var _closure2_slot3 = var0;
                var0 = _closure1_slot9;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var _closure2_slot4 = var8;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var _closure2_slot5 = var0;
                var2 = _closure1_slot6;
                var10 = _closure1_slot0;
                var0 = 7;
                var0 = var6[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.BottomSheetTitleHeader;
                var0 = {};
                var16 = 8;
                var7 = var6[var16];
                var7 = var10.bind(var3)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var6 = var6[var16];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Sm0YG7;
                var6 = var7.bind(var9)(var6);
                var0.title = var6;
                var6 = var8.header;
                var0.backgroundColor = var6;
                var7 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var13 = 0;
                var2 = var0.bind(var1)(var13);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var12 = var1[var13];
                var0 = 1;
                var17 = var1[var0];
                var6 = null;
                var0 = var6 == var4;
                var2 = undefined;
                if (var0) {
                    _fun116103_ip = 260;
                    continue _fun116103
                }
            case 243:
                var1 = var4.filter;
                var0 = function(arg0) { // Environment: var15
                    _fun116104: for (var _fun116104_ip = 0;;) switch (_fun116104_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = var4.application;
                            var5 = null;
                            var2 = var5 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun116104_ip = 25;
                                continue _fun116104
                            }
                        case 19:
                            var0 = var1.roleConnectionsVerificationUrl;
                        case 25:
                            var0 = var5 != var0;
                            if (!var0) {
                                _fun116104_ip = 71;
                                continue _fun116104
                            }
                        case 32:
                            var2 = _closure2_slot2;
                            var1 = var2.has;
                            var4 = var4.application;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun116104_ip = 63;
                                continue _fun116104
                            }
                        case 58:
                            var3 = var4.id;
                        case 63:
                            var1 = var1.bind(var2)(var3);
                            var0 = !var1;
                        case 71:
                            return var0;
                    }
                };
                var2 = var1.bind(var4)(var0);
            case 260:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.usePlatforms;
                var4 = var0.bind(var1)();
                var1 = var4.filter;
                var0 = function(arg0) { // Environment: var15
                    var2 = _closure2_slot1;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var4 = var1.bind(var4)(var0);
                var1 = var4.map;
                var0 = function(arg0) { // Environment: var15
                    _fun116106: for (var _fun116106_ip = 0;;) switch (_fun116106_ip) {
                        case 0:
                            var9 = arg0;
                            var _closure3_slot0 = var9;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 10;
                            var0 = var7[var0];
                            var3 = undefined;
                            var2 = var6.bind(var3)(var0);
                            var1 = var2.makeSource;
                            var0 = 11;
                            var0 = var7[var0];
                            var7 = var6.bind(var3)(var0);
                            var6 = var7.isThemeDark;
                            var0 = _closure2_slot5;
                            var0 = var6.bind(var7)(var0);
                            var6 = var9.icon;
                            if (var0) {
                                _fun116106_ip = 86;
                                continue _fun116106
                            }
                        case 78:
                            var0 = var6.lightPNG;
                            _fun116106_ip = 92;
                            continue _fun116106;
                        case 86:
                            var0 = var6.darkPNG;
                        case 92:
                            var15 = var1.bind(var2)(var0);
                            var2 = _closure1_slot8;
                            var1 = _closure1_slot7;
                            var0 = {};
                            var8 = _closure1_slot6;
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 12;
                            var12 = var11[var6];
                            var12 = var7.bind(var3)(var12);
                            var13 = var12.FormRow;
                            var12 = {};
                            var10 = _closure2_slot4;
                            var14 = var10.platformItem;
                            var12.style = var14;
                            var14 = _closure1_slot1;
                            var5 = 13;
                            var5 = var11[var5];
                            var14 = var14.bind(var3)(var5);
                            var5 = {};
                            var5.source = var15;
                            var15 = true;
                            var5.disableColor = var15;
                            var5 = var8.bind(var3)(var14, var5);
                            var12.leading = var5;
                            var5 = 14;
                            var5 = var11[var5];
                            var5 = var7.bind(var3)(var5);
                            var14 = var5.Text;
                            var5 = {};
                            var15 = 'text-sm/medium';
                            var5.variant = var15;
                            var15 = var9.name;
                            var5.children = var15;
                            var5 = var8.bind(var3)(var14, var5);
                            var12.label = var5;
                            var4 = function() {
                                var2 = _closure2_slot0;
                                var0 = _closure3_slot0;
                                var1 = var0.type;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 15;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var12.onPress = var4;
                            var15 = var9.type;
                            var5 = global;
                            var4 = var5.HermesInternal;
                            var14 = var4.concat;
                            var4 = 'row-';
                            var4 = var14.bind(var4)(var15);
                            var12 = var8.bind(var3)(var13, var12, var4);
                            var4 = new Array(2);
                            var4[0] = var12;
                            var6 = var11[var6];
                            var6 = var7.bind(var3)(var6);
                            var7 = var6.FormDivider;
                            var6 = {};
                            var10 = var10.divider;
                            var6.style = var10;
                            var10 = var9.type;
                            var5 = var5.HermesInternal;
                            var9 = var5.concat;
                            var5 = 'divider-';
                            var5 = var9.bind(var5)(var10);
                            var5 = var8.bind(var3)(var7, var6, var5);
                            var4[1] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var11 = var1.bind(var4)(var0);
                var0 = var6 == var2;
                var10 = undefined;
                if (var0) {
                    _fun116103_ip = 350;
                    continue _fun116103
                }
            case 333:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var15
                    _fun116108: for (var _fun116108_ip = 0;;) switch (_fun116108_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = var0.application;
                            var _closure3_slot0 = var10;
                            var15 = null;
                            var1 = var15 == var10;
                            var0 = null;
                            if (var1) {
                                _fun116108_ip = 434;
                                continue _fun116108
                            }
                        case 28:
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var13 = _closure1_slot6;
                            var14 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var12 = 12;
                            var8 = var6[var12];
                            var1 = undefined;
                            var8 = var14.bind(var1)(var8);
                            var9 = var8.FormRow;
                            var8 = {};
                            var16 = _closure2_slot4;
                            var16 = var16.platformItem;
                            var8.style = var16;
                            var17 = _closure1_slot1;
                            var18 = 16;
                            var16 = var6[var18];
                            var17 = var17.bind(var1)(var16);
                            var16 = {};
                            var19 = var10.bot;
                            var16.user = var19;
                            var18 = var6[var18];
                            var18 = var14.bind(var1)(var18);
                            var18 = var18.AvatarSizes;
                            var18 = var18.XSMALL;
                            var16.size = var18;
                            var16.guildId = var1;
                            var16 = var13.bind(var1)(var17, var16);
                            var8.leading = var16;
                            var17 = 14;
                            var6 = var6[var17];
                            var6 = var14.bind(var1)(var6);
                            var14 = var6.Text;
                            var6 = {};
                            var16 = 'text-sm/medium';
                            var6.variant = var16;
                            var16 = var10.name;
                            var6.children = var16;
                            var6 = var13.bind(var1)(var14, var6);
                            var8.label = var6;
                            var14 = var10.description;
                            var6 = undefined;
                            if (!(var1 !== var14)) {
                                _fun116108_ip = 283;
                                continue _fun116108
                            }
                        case 217:
                            var14 = var10.description;
                            var6 = undefined;
                            if (!(var15 !== var14)) {
                                _fun116108_ip = 283;
                                continue _fun116108
                            }
                        case 228:
                            var16 = _closure1_slot6;
                            var15 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var14 = var14[var17];
                            var14 = var15.bind(var1)(var14);
                            var15 = var14.Text;
                            var14 = {
                                'variant': 'text-xs/normal',
                                'color': 'text-default'
                            };
                            var17 = var10.description;
                            var14.children = var17;
                            var6 = var16.bind(var1)(var15, var14);
                        case 283:
                            var8.subLabel = var6;
                            var5 = function() {
                                var2 = _closure2_slot3;
                                var0 = _closure3_slot0;
                                var1 = var0.id;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 15;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var8.onPress = var5;
                            var15 = var10.id;
                            var6 = global;
                            var5 = var6.HermesInternal;
                            var14 = var5.concat;
                            var5 = 'row-';
                            var5 = var14.bind(var5)(var15);
                            var8 = var13.bind(var1)(var9, var8, var5);
                            var5 = new Array(2);
                            var5[0] = var8;
                            var9 = _closure1_slot6;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var12];
                            var7 = var8.bind(var1)(var7);
                            var8 = var7.FormDivider;
                            var7 = {};
                            var11 = _closure2_slot4;
                            var11 = var11.divider;
                            var7.style = var11;
                            var11 = var10.id;
                            var6 = var6.HermesInternal;
                            var10 = var6.concat;
                            var6 = 'divider-';
                            var6 = var10.bind(var6)(var11);
                            var6 = var9.bind(var1)(var8, var7, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 434:
                            return var0;
                    }
                };
                var10 = var1.bind(var2)(var0);
            case 350:
                var0 = var6 == var10;
                var1 = undefined;
                if (var0) {
                    _fun116103_ip = 364;
                    continue _fun116103
                }
            case 359:
                var1 = var10.length;
            case 364:
                var2 = var6 != var1;
                var0 = 0;
                if (!var2) {
                    _fun116103_ip = 376;
                    continue _fun116103
                }
            case 373:
                var0 = var1;
            case 376:
                var4 = var0 > var13;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 17;
                var0 = var9[var0];
                var14 = var1.bind(var3)(var0);
                var2 = var14.useSegmentedControlState;
                var0 = {};
                var0.pageWidth = var13;
                var0.defaultIndex = var12;
                var0.onSetActiveIndex = var17;
                var17 = var9[var16];
                var17 = var1.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var9[var16];
                var17 = var1.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["3fe7U5"];
                var18 = var18.bind(var19)(var17);
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var9[var16];
                var18 = var1.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var9[var16];
                var16 = var1.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.PHjkRE;
                var16 = var18.bind(var19)(var16);
                var17[1] = var16;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var15
                    var1 = arg0;
                    var0 = {};
                    var0.id = var1;
                    var0.label = var1;
                    var1 = null;
                    var0.page = var1;
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var0.items = var15;
                var17 = var2.bind(var14)(var0);
                var2 = _closure1_slot8;
                var0 = 18;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {
                    'scrollable': true,
                    'header': null,
                    'startExpanded': true
                };
                var14 = true;
                var0.header = var7;
                var6 = null;
                if (!var4) {
                    _fun116103_ip = 666;
                    continue _fun116103
                }
            case 598:
                var9 = _closure1_slot6;
                var7 = _closure1_slot5;
                var4 = {};
                var15 = var8.segmentedControl;
                var4.style = var15;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 19;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.SegmentedControl;
                var15 = {};
                var15.state = var17;
                var15 = var9.bind(var3)(var16, var15);
                var4.children = var15;
                var6 = var9.bind(var3)(var7, var4);
            case 666:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 20;
                var5 = var15[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.BottomSheetScrollView;
                var5 = {};
                var8 = var8.container;
                var5.style = var8;
                var8 = 21;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SafeAreaPaddingView;
                var8 = {};
                var8.bottom = var14;
                if (!(var13 === var12)) {
                    _fun116103_ip = 746;
                    continue _fun116103
                }
            case 743:
                var10 = var11;
            case 746:
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
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3207, 5176, 1234, 4484, 1417, 3167, 5342, 4047, 3902, 3239, 5416, 7759, 5173, 8151, 4898, 4699, 2]);