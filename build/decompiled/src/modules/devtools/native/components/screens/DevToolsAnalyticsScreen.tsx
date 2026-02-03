// modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx
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
        var8 = var0.name;
        var5 = var0.children;
        var0 = _closure1_slot10;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = var6.commonProperty;
        var0.style = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 9;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'text-sm/semibold',
            'color': 'text-default'
        };
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun86090: for (var _fun86090_ip = 0;;) switch (_fun86090_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.event;
                var16 = var0.properties;
                var23 = var0.timestamp;
                var29 = var0.fingerprint;
                var _closure2_slot0 = var29;
                var9 = var0.start;
                var8 = var0.end;
                var0 = _closure1_slot10;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var _closure2_slot1 = var14;
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var4 = false;
                var2 = var0.bind(var1)(var4);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var5 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot2 = var0;
                var1 = _closure1_slot6;
                var0 = var1.getUser;
                var26 = var0.bind(var1)(var29);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var0.collapsable = var4;
                var7 = _closure1_slot8;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 10;
                var4 = var18[var4];
                var4 = var15.bind(var3)(var4);
                var6 = var4.TableRow;
                var4 = {};
                var12 = !var5;
                var4.arrow = var12;
                var17 = _closure1_slot8;
                var12 = 11;
                var12 = var18[var12];
                var12 = var15.bind(var3)(var12);
                var15 = var12.AnalyticsIcon;
                var12 = {};
                var12 = var17.bind(var3)(var15, var12);
                var4.icon = var12;
                var4.label = var11;
                var11 = 'name';
                var11 = var11 in var16;
                if (var11) {
                    _fun86090_ip = 268;
                    continue _fun86090
                }
            case 225:
                var17 = var16.location;
                var11 = null;
                var15 = var11 == var17;
                var12 = undefined;
                if (var15) {
                    _fun86090_ip = 250;
                    continue _fun86090
                }
            case 241:
                var15 = var17.toString;
                var12 = var15.bind(var17)();
            case 250:
                var15 = var11 != var12;
                var11 = 'N/A';
                if (!var15) {
                    _fun86090_ip = 266;
                    continue _fun86090
                }
            case 263:
                var11 = var12;
            case 266:
                _fun86090_ip = 273;
                continue _fun86090;
            case 268:
                var11 = var16.name;
            case 273:
                var4.subLabel = var11;
                var11 = function() {
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.onPress = var11;
                var4.start = var9;
                var4.end = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun86090_ip = 944;
                    continue _fun86090
                }
            case 317:
                var8 = _closure1_slot9;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var14.detailsContainer;
                var6.style = var9;
                var12 = _closure1_slot9;
                var11 = _closure1_slot5;
                var9 = {};
                var15 = var14.commonPropertiesContainer;
                var9.style = var15;
                var18 = _closure1_slot8;
                var17 = _closure1_slot11;
                var15 = {};
                var19 = 'Timestamp (local)';
                var15.name = var19;
                var21 = _closure1_slot8;
                var20 = _closure1_slot0;
                var27 = _closure1_slot2;
                var24 = 9;
                var19 = var27[var24];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = _closure1_slot1;
                var22 = 12;
                var22 = var27[var22];
                var22 = var25.bind(var3)(var22);
                var23 = var22.bind(var3)(var23);
                var22 = var23.calendar;
                var22 = var22.bind(var23)();
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var15.children = var19;
                var17 = var18.bind(var3)(var17, var15);
                var15 = new Array(3);
                var15[0] = var17;
                var20 = null;
                var17 = var20 != var26;
                if (!var17) {
                    _fun86090_ip = 554;
                    continue _fun86090
                }
            case 488:
                var21 = _closure1_slot8;
                var19 = _closure1_slot11;
                var18 = {};
                var22 = 'User ';
                var18.name = var22;
                var25 = _closure1_slot8;
                var23 = _closure1_slot1;
                var27 = _closure1_slot2;
                var22 = 13;
                var22 = var27[var22];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var22.user = var26;
                var22 = var25.bind(var3)(var23, var22);
                var18.children = var22;
                var17 = var21.bind(var3)(var19, var18);
            case 554:
                var15[1] = var17;
                var19 = _closure1_slot8;
                var18 = _closure1_slot11;
                var17 = {};
                var21 = 'Fingerprint';
                var17.name = var21;
                if (!(var20 == var29)) {
                    _fun86090_ip = 645;
                    continue _fun86090
                }
            case 582:
                var22 = _closure1_slot8;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var24];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted',
                    'style': null,
                    'children': 'null'
                };
                var23 = var14.monospace;
                var20.style = var23;
                var20 = var22.bind(var3)(var21, var20);
                _fun86090_ip = 832;
                continue _fun86090;
            case 645:
                var23 = _closure1_slot9;
                var26 = _closure1_slot0;
                var28 = _closure1_slot2;
                var21 = 14;
                var21 = var28[var21];
                var21 = var26.bind(var3)(var21);
                var22 = var21.PressableOpacity;
                var21 = {};
                var25 = var14.copyContainer;
                var21.style = var25;
                var25 = function() {
                    _fun86093: for (var _fun86093_ip = 0;;) switch (_fun86093_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun86093_ip = 53;
                                continue _fun86093
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.copy;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21.onPress = var25;
                var27 = _closure1_slot8;
                var24 = var28[var24];
                var24 = var26.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var31 = var14.monospace;
                var30 = new Array(2);
                var30[0] = var31;
                var31 = {};
                var32 = 4;
                var31.marginRight = var32;
                var30[1] = var31;
                var24.style = var30;
                var24.children = var29;
                var25 = var27.bind(var3)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var27 = _closure1_slot8;
                var25 = 16;
                var25 = var28[var25];
                var25 = var26.bind(var3)(var25);
                var26 = var25.CopyIcon;
                var25 = {};
                var28 = 'sm';
                var25.size = var28;
                var25 = var27.bind(var3)(var26, var25);
                var24[1] = var25;
                var21.children = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 832:
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var15[2] = var17;
                var9.children = var15;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot5;
                var10 = {};
                var14 = var14.customPropertiesContainer;
                var10.style = var14;
                var14 = global;
                var15 = var14.Object;
                var14 = var15.entries;
                var15 = var14.bind(var15)(var16);
                var14 = var15.map;
                var13 = function(arg0) { // Environment: var13
                    _fun86094: for (var _fun86094_ip = 0;;) switch (_fun86094_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var5 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var3 = undefined;
                            if (var1) {
                                _fun86094_ip = 27;
                                continue _fun86094
                            }
                        case 24:
                            var3 = var5;
                        case 27:
                            var12 = undefined;
                            if (var1) {
                                _fun86094_ip = 57;
                                continue _fun86094
                            }
                        case 32:
                            var5 = var2().value;
                            var2 = var0;
                            var2 = var2 === var4;
                            var12 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun86094_ip = 57;
                                continue _fun86094
                            }
                        case 51:
                            var12 = var5;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun86094_ip = 63;
                                continue _fun86094
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var2 = _closure1_slot9;
                            var1 = _closure1_slot5;
                            var0 = {};
                            var14 = _closure2_slot1;
                            var5 = var14.customProperty;
                            var0.style = var5;
                            var13 = _closure1_slot9;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 9;
                            var5 = var9[var6];
                            var5 = var7.bind(var4)(var5);
                            var11 = var5.Text;
                            var5 = {
                                'variant': 'text-sm/semibold',
                                'color': 'text-brand'
                            };
                            var14 = var14.customPropertyName;
                            var5.style = var14;
                            var14 = new Array(2);
                            var14[0] = var3;
                            var15 = ':';
                            var14[1] = var15;
                            var5.children = var14;
                            var11 = var13.bind(var4)(var11, var5);
                            var5 = new Array(2);
                            var5[0] = var11;
                            var8 = _closure1_slot8;
                            var6 = var9[var6];
                            var6 = var7.bind(var4)(var6);
                            var7 = var6.Text;
                            var6 = null;
                            if (!(var6 == var12)) {
                                _fun86094_ip = 236;
                                continue _fun86094
                            }
                        case 204:
                            var6 = {
                                'variant': 'text-sm/semibold',
                                'color': 'text-muted',
                                'style': null,
                                'children': 'null'
                            };
                            var9 = _closure2_slot1;
                            var9 = var9.monospace;
                            var6.style = var9;
                            _fun86094_ip = 290;
                            continue _fun86094;
                        case 236:
                            var9 = {
                                'variant': 'text-sm/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var10 = _closure2_slot1;
                            var10 = var10.monospace;
                            var9.style = var10;
                            var10 = global;
                            var11 = var10.JSON;
                            var10 = var11.stringify;
                            var10 = var10.bind(var11)(var12);
                            var9.children = var10;
                            var6 = var9;
                        case 290:
                            var6 = var8.bind(var4)(var7, var6);
                            var5[1] = var6;
                            var0.children = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 944:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 8;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var8.flex = var12;
    var3.analyticsContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var3.contentContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.searchFieldContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.detailsContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var10;
    var10 = 10;
    var8.paddingHorizontal = var10;
    var3.commonPropertiesContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'marginVertical': 8,
        'height': 20
    };
    var3.commonProperty = var8;
    var8 = {
        'flexGrow': 0,
        'height': 22
    };
    var3.commonPropertyDiscordTag = var8;
    var8 = {
        'paddingHorizontal': 10,
        'paddingVertical': 4
    };
    var3.customPropertiesContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap',
        'justifyContent': 'flex-start',
        'marginVertical': 4
    };
    var3.customProperty = var8;
    var8 = {
        'fontWeight': '600',
        'fontFamily': null,
        'marginRight': 4
    };
    var10 = var9.CODE_BOLD;
    var8.fontFamily = var10;
    var3.customPropertyName = var8;
    var8 = {};
    var9 = var9.CODE_BOLD;
    var8.fontFamily = var9;
    var3.monospace = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.copyContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun86095: for (var _fun86095_ip = 0;;) switch (_fun86095_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var7
                    var0 = _closure1_slot7;
                    var0 = var0.loggedEventsVersion;
                    return var0;
                };
                var10 = var4.bind(var5)(var2, var1);
                var21 = var0.loggedEvents;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var5 = 2;
                var0 = var0.bind(var3)(var1, var5);
                var22 = 0;
                var30 = var0[var22];
                var1 = 1;
                var29 = var0[var1];
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var2 = '';
                var4 = var0.bind(var4)(var2);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var28 = var0[var22];
                var31 = var0[var1];
                var0 = var28.toLowerCase;
                var1 = var0.bind(var28)();
                var0 = var1.trim;
                var1 = var0.bind(var1)();
                var _closure2_slot0 = var1;
                var0 = var21;
                if (!(var2 !== var1)) {
                    _fun86095_ip = 199;
                    continue _fun86095
                }
            case 182:
                var2 = var21.filter;
                var1 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var1 = var0.event;
                    var0 = var1.toLowerCase;
                    var2 = var0.bind(var1)();
                    var1 = var2.includes;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var21)(var1);
            case 199:
                var1 = new Array(0);
                var38 = var1;
                var37 = var0;
                var36 = 0;
                var2 = arraySpread(var38, var37, var36);
                var19 = var0;
                if (var30) {
                    _fun86095_ip = 226;
                    continue _fun86095
                }
            case 221:
                var9 = var1;
                _fun86095_ip = 236;
                continue _fun86095;
            case 226:
                var0 = var1.reverse;
                var9 = var0.bind(var1)();
            case 236:
                var _closure2_slot1 = var9;
                var1 = _closure1_slot1;
                var24 = _closure1_slot2;
                var0 = 18;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var11.analyticsContainer;
                var0.style = var4;
                var6 = _closure1_slot8;
                var17 = _closure1_slot0;
                var4 = 19;
                var4 = var24[var4];
                var4 = var17.bind(var3)(var4);
                var5 = var4.FlashList;
                var4 = {};
                var14 = _closure1_slot9;
                var12 = 20;
                var12 = var24[var12];
                var12 = var17.bind(var3)(var12);
                var13 = var12.Stack;
                var12 = {};
                var15 = 16;
                var12.spacing = var15;
                var25 = _closure1_slot9;
                var16 = 21;
                var15 = var24[var16];
                var15 = var17.bind(var3)(var15);
                var18 = var15.TableRowGroup;
                var15 = {
                    'title': 'Actions',
                    'hasIcons': true
                };
                var27 = _closure1_slot8;
                var23 = 22;
                var23 = var24[var23];
                var23 = var17.bind(var3)(var23);
                var26 = var23.TableSwitchRow;
                var23 = {};
                var34 = _closure1_slot8;
                var32 = 23;
                var32 = var24[var32];
                var32 = var17.bind(var3)(var32);
                var33 = var32.ArrowsUpDownIcon;
                var32 = {};
                var32 = var34.bind(var3)(var33, var32);
                var23.icon = var32;
                var32 = 'Reverse Events';
                var23.label = var32;
                var23.value = var30;
                var23.onValueChange = var29;
                var23 = var27.bind(var3)(var26, var23);
                var26 = new Array(2);
                var26[0] = var23;
                var30 = _closure1_slot8;
                var23 = 10;
                var27 = var24[var23];
                var27 = var17.bind(var3)(var27);
                var29 = var27.TableRow;
                var27 = {
                    'arrow': true,
                    'variant': 'danger',
                    'icon': null,
                    'label': 'Clear Analytics Log'
                };
                var34 = _closure1_slot8;
                var32 = 24;
                var32 = var24[var32];
                var32 = var17.bind(var3)(var32);
                var33 = var32.TrashIcon;
                var32 = {};
                var35 = 'text-feedback-critical';
                var32.color = var35;
                var32 = var34.bind(var3)(var33, var32);
                var27.icon = var32;
                var32 = 25;
                var32 = var24[var32];
                var32 = var17.bind(var3)(var32);
                var32 = var32.clearAnalyticsLog;
                var27.onPress = var32;
                var27 = var30.bind(var3)(var29, var27);
                var26[1] = var27;
                var15.children = var26;
                var18 = var25.bind(var3)(var18, var15);
                var15 = new Array(3);
                var15[0] = var18;
                var26 = _closure1_slot8;
                var25 = _closure1_slot5;
                var18 = {};
                var27 = var11.searchFieldContainer;
                var18.style = var27;
                var30 = _closure1_slot8;
                var27 = 26;
                var27 = var24[var27];
                var27 = var17.bind(var3)(var27);
                var29 = var27.SearchField;
                var27 = {};
                var32 = 'Search by event name';
                var27.placeholder = var32;
                var27.onChange = var31;
                var27 = var30.bind(var3)(var29, var27);
                var18.children = var27;
                var18 = var26.bind(var3)(var25, var18);
                var15[1] = var18;
                var18 = _closure1_slot8;
                var16 = var24[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.TableRowGroup;
                var16 = {};
                var24 = 'Analytics Events';
                var16.title = var24;
                var21 = var21.length;
                if (!(var22 !== var21)) {
                    _fun86095_ip = 803;
                    continue _fun86095
                }
            case 722:
                var21 = var19.length;
                var19 = null;
                if (!(var22 === var21)) {
                    _fun86095_ip = 801;
                    continue _fun86095
                }
            case 733:
                var24 = _closure1_slot8;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var23];
                var21 = var22.bind(var3)(var21);
                var22 = var21.TableRow;
                var21 = {};
                var25 = global;
                var25 = var25.HermesInternal;
                var27 = var25.concat;
                var26 = 'No events match "';
                var25 = '"';
                var25 = var27.bind(var26)(var28, var25);
                var21.label = var25;
                var19 = var24.bind(var3)(var22, var21);
            case 801:
                _fun86095_ip = 848;
                continue _fun86095;
            case 803:
                var22 = _closure1_slot8;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var23];
                var20 = var21.bind(var3)(var20);
                var21 = var20.TableRow;
                var20 = {};
                var23 = 'No events logged.';
                var20.label = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 848:
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[2] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var4.ListHeaderComponent = var12;
                var11 = var11.contentContainer;
                var4.contentContainerStyle = var11;
                var4.extraData = var10;
                var4.data = var9;
                var4.estimatedItemSize = var8;
                var7 = function arg0() {
                    var1 = arg0;
                    var0 = var1.item;
                    var5 = var1.index;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var4 = 0;
                    var4 = var4 === var5;
                    var1.start = var4;
                    var4 = _closure2_slot1;
                    var6 = var4.length;
                    var4 = 1;
                    var4 = var6 - var4;
                    var4 = var5 === var4;
                    var1.end = var4;
                    var4 = var0.event;
                    var1.event = var4;
                    var4 = var0.properties;
                    var1.properties = var4;
                    var4 = var0.timestamp;
                    var1.timestamp = var4;
                    var0 = var0.fingerprint;
                    var1.fingerprint = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4.renderItem = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 11096, 660, 33, 1297, 671, 3932, 4893, 9349, 3036, 8194, 4897, 5286, 3249, 566, 7554, 5748, 4071, 5358, 5411, 11097, 3260, 11090, 7004, 2]);