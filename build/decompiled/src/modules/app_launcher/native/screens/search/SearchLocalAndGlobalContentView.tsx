// modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx
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
        _fun107730: for (var _fun107730_ip = 0;;) switch (_fun107730_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.type;
                var0 = _closure1_slot13;
                var2 = var0.PLACERHOLDER;
                var0 = undefined;
                if (!(var4 !== var2)) {
                    _fun107730_ip = 53;
                    continue _fun107730
                }
            case 27:
                var4 = var1.application;
                var2 = null;
                var2 = var2 != var4;
                var0 = undefined;
                if (!var2) {
                    _fun107730_ip = 53;
                    continue _fun107730
                }
            case 43:
                var1 = var1.application;
                var0 = var1.id;
            case 53:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var0 = {};
        var3 = _closure1_slot18;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0.applicationId = var1;
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun107732: for (var _fun107732_ip = 0;;) switch (_fun107732_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.context;
                var12 = var0.command;
                var16 = var0.application;
                var5 = var0.onPress;
                var13 = var0.isFirstRow;
                var6 = var0.isLastRow;
                var10 = var0.beforeExecuteCommand;
                var7 = var0.onExecuteCommand;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.getAppLauncherIconSource;
                var8 = var0.bind(var1)(var16);
                var0 = null;
                var14 = var0 != var8;
                if (!var14) {
                    _fun107732_ip = 130;
                    continue _fun107732
                }
            case 93:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.iconSource = var8;
                var14 = var2.bind(var3)(var1, var0);
            case 130:
                var2 = _closure1_slot10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 11;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.icon = var14;
                var14 = var12.displayName;
                var0.label = var14;
                var14 = 12;
                var14 = var9[var14];
                var15 = var8.bind(var3)(var14);
                var14 = var15.getSectionName;
                var14 = var14.bind(var15)(var16);
                var0.subLabel = var14;
                var14 = 1;
                var0.subLabelLineClamp = var14;
                var0.start = var13;
                var0.end = var6;
                var0.onPress = var5;
                var6 = _closure1_slot10;
                var5 = _closure1_slot1;
                var4 = 13;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.command = var12;
                var4.context = var11;
                var4.beforeExecuteCommand = var10;
                var4.onExecuteCommand = var7;
                var7 = 14;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.AppLauncherSectionName;
                var7 = var7.SEARCH;
                var4.sectionName = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun107733: for (var _fun107733_ip = 0;;) switch (_fun107733_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.isFirstRow;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun107733_ip = 17;
                    continue _fun107733
                }
            case 15:
                var5 = false;
            case 17:
                var4 = var0.isLastRow;
                if (!(var4 === var3)) {
                    _fun107733_ip = 29;
                    continue _fun107733
                }
            case 27:
                var4 = false;
            case 29:
                var0 = _closure1_slot17;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 15;
                var2 = var7[var0];
                var11 = var1.bind(var3)(var2);
                var10 = var11.usePlaceholderWidth;
                var8 = 10;
                var2 = 50;
                var18 = var10.bind(var11)(var8, var2);
                var0 = var7[var0];
                var10 = var1.bind(var3)(var0);
                var8 = var10.usePlaceholderWidth;
                var2 = 30;
                var0 = 90;
                var14 = var8.bind(var10)(var2, var0);
                var2 = _closure1_slot10;
                var0 = 11;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var10 = _closure1_slot10;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var9.loadingCommandAppIcon;
                var7.style = var11;
                var7 = var10.bind(var3)(var8, var7);
                var0.icon = var7;
                var10 = _closure1_slot10;
                var8 = _closure1_slot5;
                var7 = {};
                var11 = var9.loadingTextPlaceholder;
                var15 = new Array(2);
                var15[0] = var11;
                var16 = {};
                var11 = global;
                var12 = var11.HermesInternal;
                var17 = var12.concat;
                var13 = '';
                var12 = '%';
                var17 = var17.bind(var13)(var18, var12);
                var16.width = var17;
                var15[1] = var16;
                var7.style = var15;
                var7 = var10.bind(var3)(var8, var7);
                var0.label = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var9.loadingTextPlaceholderSmall;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = var11.HermesInternal;
                var11 = var11.concat;
                var11 = var11.bind(var13)(var14, var12);
                var10.width = var11;
                var9[1] = var10;
                var6.style = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.subLabel = var6;
                var6 = 1;
                var0.subLabelLineClamp = var6;
                var0.start = var5;
                var0.end = var4;
                var4 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun107735: for (var _fun107735_ip = 0;;) switch (_fun107735_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var3 = var0.type;
                var1 = _closure1_slot13;
                var1 = var1.PLACERHOLDER;
                if (!(var3 !== var1)) {
                    _fun107735_ip = 40;
                    continue _fun107735
                }
            case 28:
                var0 = var0.application;
                var0 = var0.id;
                _fun107735_ip = 49;
                continue _fun107735;
            case 40:
                var1 = var2.toString;
                var0 = var1.bind(var2)();
            case 49:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.commandData;
        var _closure2_slot0 = var8;
        var9 = var0.context;
        var _closure2_slot1 = var9;
        var10 = var0.beforeExecuteCommand;
        var _closure2_slot2 = var10;
        var6 = var0.onPressCommand;
        var _closure2_slot3 = var6;
        var7 = var0.onExecuteCommand;
        var _closure2_slot4 = var7;
        var4 = var0.expanded;
        var5 = _closure1_slot4;
        var3 = var5.useMemo;
        var2 = new Array(5);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.map;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun107738: for (var _fun107738_ip = 0;;) switch (_fun107738_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = _closure1_slot14;
                        if (!(var1 !== var2)) {
                            _fun107738_ip = 51;
                            continue _fun107738
                        }
                    case 23:
                        var2 = var1.command;
                        var _closure4_slot1 = var2;
                        var1 = var1.application;
                        var _closure4_slot2 = var1;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var5 = var0.isLastRow;
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot20;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var1.context = var6;
                            var7 = _closure4_slot1;
                            var1.command = var7;
                            var7 = _closure4_slot2;
                            var1.application = var7;
                            var7 = function() {
                                var3 = _closure2_slot3;
                                var2 = _closure4_slot1;
                                var1 = _closure4_slot0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var7;
                            var7 = _closure4_slot0;
                            var6 = 0;
                            var6 = var6 === var7;
                            var1.isFirstRow = var6;
                            var1.isLastRow = var5;
                            var4 = function() {
                                var2 = _closure2_slot2;
                                var1 = {};
                                var3 = _closure4_slot1;
                                var1.command = var3;
                                var0 = _closure4_slot0;
                                var1.searchResultsPosition = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.beforeExecuteCommand = var4;
                            var0 = _closure2_slot4;
                            var1.onExecuteCommand = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        return var1;
                    case 51:
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.isLastRow;
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot21;
                            var1 = {};
                            var5 = _closure4_slot0;
                            var4 = 0;
                            var4 = var4 === var5;
                            var1.isFirstRow = var4;
                            var1.isLastRow = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot10;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 30;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.items = var5;
        var0.expandedOverride = var4;
        var4 = false;
        var0.showsExpandCTAOverride = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var15 = 0;
    var6 = var5[var15];
    var0 = undefined;
    var6 = var11.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var7 = var5[var13];
    var6 = arg3;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot4 = var6;
    var10 = 2;
    var7 = var5[var10];
    var7 = var4.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var8 = 3;
    var7 = var5[var8];
    var7 = var4.bind(var0)(var7);
    var7 = var7.getSection;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.FetchState;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var12 = var7.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = var12;
    var7 = var7.useAppLauncherNavigation;
    var _closure1_slot9 = var7;
    var14 = 6;
    var7 = var5[var14];
    var7 = var4.bind(var0)(var7);
    var9 = var7.jsx;
    var _closure1_slot10 = var9;
    var9 = var7.jsxs;
    var _closure1_slot11 = var9;
    var7 = var7.Fragment;
    var _closure1_slot12 = var7;
    var9 = {};
    var9.PLACERHOLDER = var15;
    var7 = 'PLACERHOLDER';
    var9[var15] = var7;
    var9.LOCAL_APPLICATION = var13;
    var7 = 'LOCAL_APPLICATION';
    var9[var13] = var7;
    var9.GLOBAL_APPLICATION = var10;
    var7 = 'GLOBAL_APPLICATION';
    var9[var10] = var7;
    var _closure1_slot13 = var9;
    var13 = 'placeholder';
    var _closure1_slot14 = var13;
    var7 = var3.Array;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var19 = var10;
    var18 = var14;
    var7 = new var19[var7](var18, var17);
    var10 = var7 instanceof Object ? var7 : var10;
    var7 = var10.fill;
    var7 = var7.bind(var10)(var13);
    var _closure1_slot15 = var7;
    var3 = var3.Array;
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var19 = var7;
    var18 = var8;
    var3 = new var19[var3](var18, var17);
    var8 = var3 instanceof Object ? var3 : var7;
    var7 = var8.fill;
    var3 = {};
    var9 = var9.PLACERHOLDER;
    var3.type = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var9.marginBottom = var10;
    var3.sectionHeader = var9;
    var9 = {};
    var9.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var3.list = var9;
    var9 = {
        'width': 32,
        'height': 32
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var3.loadingCommandAppIcon = var9;
    var9 = {
        'backgroundColor': null,
        'height': 16,
        'marginBottom': 4,
        'borderRadius': null,
        'alignSelf': 'flex-start'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var13 = 16;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = 'flex-start';
    var3.loadingTextPlaceholder = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var14;
    var9.height = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var9.alignSelf = var12;
    var3.loadingTextPlaceholderSmall = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var3.divider = var9;
    var9 = {
        'justifyContent': 'space-between',
        'flexDirection': 'row'
    };
    var3.commandsHeaderContainer = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.paddingHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.marginBottom = var12;
    var12 = 'center';
    var9.justifyContent = var12;
    var3.commandsCTA = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9.color = var10;
    var3.commandsCTAUnderlayColor = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun107743: for (var _fun107743_ip = 0;;) switch (_fun107743_ip) {
            case 0:
                var0 = arg0;
                var38 = var0.context;
                var _closure2_slot0 = var38;
                var6 = var0.onScroll;
                var _closure2_slot1 = var6;
                var35 = var0.onSend;
                var25 = var0.entrypoint;
                var _closure2_slot2 = var25;
                var4 = undefined;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var0 = _closure1_slot17;
                var28 = var0.bind(var4)();
                var _closure2_slot3 = var28;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = var0.bottom;
                var0 = 17;
                var0 = var8[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var18 = var0.width;
                var _closure2_slot4 = var18;
                var0 = 18;
                var0 = var8[var0];
                var0 = var3.bind(var4)(var0);
                var10 = var0.bind(var4)();
                var _closure2_slot5 = var10;
                var0 = _closure1_slot9;
                var0 = var0.bind(var4)();
                var _closure2_slot6 = var0;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var3 = '';
                var7 = var5.bind(var7)(var3);
                var5 = _closure1_slot3;
                var3 = 2;
                var7 = var5.bind(var4)(var7, var3);
                var24 = 0;
                var3 = var7[var24];
                var _closure2_slot7 = var3;
                var5 = 1;
                var5 = var7[var5];
                var _closure2_slot8 = var5;
                var11 = _closure1_slot4;
                var9 = var11.useImperativeHandle;
                var7 = arg1;
                var5 = function() { // Environment: var1
                    var0 = {};
                    var1 = _closure2_slot8;
                    var0.setQuery = var1;
                    return var0;
                };
                var5 = var9.bind(var11)(var7, var5);
                var7 = _closure1_slot0;
                var5 = 19;
                var5 = var8[var5];
                var8 = var7.bind(var4)(var5);
                var7 = var8.useIsActivitiesInTextEnabled;
                var11 = var38.type;
                var9 = 'channel';
                var5 = undefined;
                if (!(var9 === var11)) {
                    _fun107743_ip = 308;
                    continue _fun107743
                }
            case 298:
                var9 = var38.channel;
                var5 = var9.id;
            case 308:
                var11 = var7.bind(var8)(var5);
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 20;
                var7 = var9[var5];
                var13 = var14.bind(var4)(var7);
                var8 = var13.useLocalSearchResults;
                var7 = {};
                var7.context = var38;
                var7.query = var3;
                var7.commandLimit = var5;
                var15 = 10;
                var7.applicationLimit = var15;
                var27 = 14;
                var9 = var9[var27];
                var9 = var14.bind(var4)(var9);
                var9 = var9.AppLauncherEntrypoint;
                var9 = var9.VOICE;
                var9 = var25 === var9;
                if (var9) {
                    _fun107743_ip = 397;
                    continue _fun107743
                }
            case 394:
                var9 = var11;
            case 397:
                var7.searchesActivities = var9;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var14 = var11[var27];
                var14 = var9.bind(var4)(var14);
                var14 = var14.AppLauncherEntrypoint;
                var14 = var14.TEXT;
                var14 = var25 === var14;
                var7.searchesCommands = var14;
                var14 = var11[var27];
                var14 = var9.bind(var4)(var14);
                var14 = var14.AppLauncherEntrypoint;
                var14 = var14.TEXT;
                var14 = var25 === var14;
                var7.searchesBots = var14;
                var7 = var8.bind(var13)(var7);
                var14 = var7.loading;
                _closure2_slot9 = var14;
                var8 = var7.commandResults;
                _closure2_slot10 = var8;
                var16 = var7.applicationResults;
                _closure2_slot11 = var16;
                var5 = var11[var5];
                var15 = var9.bind(var4)(var5);
                var13 = var15.useGlobalSearchResults;
                var5 = {};
                var5.query = var3;
                var5.context = var38;
                var7 = true;
                var5.fetches = var7;
                var5.entrypoint = var25;
                var13 = var13.bind(var15)(var5);
                var5 = var13.fetchState;
                _closure2_slot12 = var5;
                var15 = var13.applicationResults;
                _closure2_slot13 = var15;
                var17 = var13.fetchNextPage;
                _closure2_slot14 = var17;
                var13 = function arg0() {
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var0 = false;
                    var5 = var3.bind(var4)(var0);
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var0 = 2;
                    var4 = var4.bind(var3)(var5, var0);
                    var0 = 0;
                    var3 = var4[var0];
                    var0 = 1;
                    var0 = var4[var0];
                    var _closure3_slot0 = var0;
                    var6 = _closure1_slot4;
                    var5 = var6.useEffect;
                    var4 = new Array(1);
                    var0 = arg0;
                    var4[0] = var0;
                    var0 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var5.bind(var6)(var0, var4);
                    var0 = {};
                    var0.isCommandsExpanded = var3;
                    var4 = _closure1_slot4;
                    var3 = var4.useCallback;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = !var0;
                            return var0;
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = new Array(0);
                    var1 = var3.bind(var4)(var2, var1);
                    var0.toggleCommandsExpanded = var1;
                    return var0;
                };
                var13 = var13.bind(var4)(var3);
                var34 = var13.isCommandsExpanded;
                var42 = var13.toggleCommandsExpanded;
                var21 = _closure1_slot4;
                var20 = var21.useCallback;
                var19 = new Array(4);
                var19[0] = var38;
                var19[1] = var25;
                var19[2] = var0;
                var19[3] = var3;
                var13 = function(arg0, arg1) { // Environment: var1
                    var5 = arg0;
                    var3 = _closure1_slot6;
                    var9 = _closure2_slot0;
                    var2 = var5.applicationId;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var9, var2);
                    var8 = var2.descriptor;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var1 = var7[var1];
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.handleApplicationCommandSelected;
                    var1 = {};
                    var10 = 21;
                    var10 = var7[var10];
                    var10 = var6.bind(var0)(var10);
                    var10 = var10.ApplicationCommandTriggerLocations;
                    var10 = var10.APP_LAUNCHER_HOME_SEARCH;
                    var1.location = var10;
                    var1.context = var9;
                    var1.command = var5;
                    var1.section = var8;
                    var5 = new Array(1);
                    var5[0] = var8;
                    var1.sectionDescriptors = var5;
                    var5 = _closure2_slot7;
                    var1.query = var5;
                    var5 = _closure2_slot6;
                    var1.navigation = var5;
                    var5 = 14;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.AppLauncherSectionName;
                    var5 = var5.SEARCH;
                    var1.sectionName = var5;
                    var5 = arg1;
                    var1.searchResultsPosition = var5;
                    var4 = _closure2_slot2;
                    var1.entrypoint = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var36 = var20.bind(var21)(var13, var19);
                var21 = _closure1_slot4;
                var20 = var21.useCallback;
                var19 = new Array(2);
                var19[0] = var38;
                var19[1] = var3;
                var13 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var9 = var0.command;
                    var4 = var0.searchResultsPosition;
                    var6 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var2 = var9.applicationId;
                    var0 = undefined;
                    var2 = var6.bind(var0)(var3, var2);
                    var10 = var2.descriptor;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 22;
                    var1 = var8[var6];
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.trackCommandSelected;
                    var1 = {};
                    var1.command = var9;
                    var9 = 21;
                    var9 = var8[var9];
                    var9 = var7.bind(var0)(var9);
                    var9 = var9.ApplicationCommandTriggerLocations;
                    var9 = var9.APP_LAUNCHER_HOME_SEARCH;
                    var1.location = var9;
                    var6 = var8[var6];
                    var9 = var7.bind(var0)(var6);
                    var6 = var9.getCommandTriggerSection;
                    var6 = var6.bind(var9)(var10);
                    var1.triggerSection = var6;
                    var5 = _closure2_slot7;
                    var6 = var5.length;
                    var1.queryLength = var6;
                    var6 = 14;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.AppLauncherSectionName;
                    var6 = var6.SEARCH;
                    var1.sectionName = var6;
                    var1.query = var5;
                    var1.searchResultsPosition = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var37 = var20.bind(var21)(var13, var19);
                var20 = _closure1_slot4;
                var19 = var20.useCallback;
                var13 = new Array(4);
                var13[0] = var0;
                var13[1] = var38;
                var13[2] = var3;
                var13[3] = var25;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = var0.section;
                    var6 = var0.installOnDemand;
                    var5 = var0.searchResultsPosition;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 9;
                    var1 = var9[var0];
                    var0 = undefined;
                    var3 = var8.bind(var0)(var1);
                    var2 = var3.handleApplicationSelected;
                    var1 = {};
                    var7 = 21;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.ApplicationCommandTriggerLocations;
                    var7 = var7.APP_LAUNCHER_HOME_SEARCH;
                    var1.location = var7;
                    var1.application = var4;
                    var7 = _closure2_slot6;
                    var1.navigation = var7;
                    var7 = _closure2_slot0;
                    var1.context = var7;
                    var7 = 14;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.AppLauncherSectionName;
                    var7 = var7.SEARCH;
                    var1.sectionName = var7;
                    var1.installOnDemand = var6;
                    var6 = _closure2_slot7;
                    var1.query = var6;
                    var1.searchResultsPosition = var5;
                    var4 = _closure2_slot2;
                    var1.entrypoint = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var19.bind(var20)(var0, var13);
                _closure2_slot15 = var0;
                var20 = _closure1_slot4;
                var19 = var20.useMemo;
                var13 = new Array(2);
                var13[0] = var14;
                var13[1] = var8;
                var8 = function() { // Environment: var1
                    _fun107752: for (var _fun107752_ip = 0;;) switch (_fun107752_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun107752_ip = 16;
                                continue _fun107752
                            }
                        case 10:
                            var0 = _closure2_slot10;
                            _fun107752_ip = 23;
                            continue _fun107752;
                        case 16:
                            var0 = _closure1_slot15;
                        case 23:
                            return var0;
                    }
                };
                var22 = var19.bind(var20)(var8, var13);
                _closure2_slot16 = var22;
                var8 = 23;
                var8 = var11[var8];
                var13 = var9.bind(var4)(var8);
                var11 = var13.useTrackSearchItems;
                var9 = _closure1_slot18;
                var8 = _closure1_slot19;
                var8 = var11.bind(var13)(var9, var8, var3);
                var8 = var8.handleViewableItemsChanged;
                var13 = _closure1_slot4;
                var11 = var13.useMemo;
                var9 = new Array(4);
                var9[0] = var16;
                var9[1] = var15;
                var9[2] = var14;
                var9[3] = var5;
                var5 = function() { // Environment: var1
                    _fun107753: for (var _fun107753_ip = 0;;) switch (_fun107753_ip) {
                        case 0:
                            var4 = _closure2_slot11;
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var1
                                var0 = {};
                                var1 = _closure1_slot13;
                                var1 = var1.LOCAL_APPLICATION;
                                var0.type = var1;
                                var1 = arg0;
                                var0.application = var1;
                                return var0;
                            };
                            var4 = var3.bind(var4)(var2);
                            var2 = global;
                            var5 = var2.Set;
                            var6 = _closure2_slot11;
                            var3 = var6.map;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var9 = var3.bind(var6)(var2);
                            var3 = var5.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var10 = var3;
                            var2 = new var10[var5](var9, var8);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot13;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun107753_ip = 95;
                                continue _fun107753
                            }
                        case 89:
                            var6 = new Array(0);
                            _fun107753_ip = 99;
                            continue _fun107753;
                        case 95:
                            var6 = _closure2_slot13;
                        case 99:
                            var5 = var6.filter;
                            var3 = function(arg0) { // Environment: var1
                                _fun107756: for (var _fun107756_ip = 0;;) switch (_fun107756_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.type;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var0 = 24;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var0 = var4.bind(var0)(var3);
                                        var0 = var0.ApplicationDirectorySearchResultType;
                                        var0 = var0.CONNECTION;
                                        var0 = var2 !== var0;
                                        if (!var0) {
                                            _fun107756_ip = 82;
                                            continue _fun107756
                                        }
                                    case 52:
                                        var3 = _closure3_slot0;
                                        var2 = var3.has;
                                        var1 = var1.data;
                                        var1 = var1.id;
                                        var1 = var2.bind(var3)(var1);
                                        var0 = !var1;
                                    case 82:
                                        return var0;
                                }
                            };
                            var5 = var5.bind(var6)(var3);
                            var3 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = {};
                                var1 = _closure1_slot13;
                                var1 = var1.GLOBAL_APPLICATION;
                                var0.type = var1;
                                var1 = arg0;
                                var1 = var1.data;
                                var0.application = var1;
                                return var0;
                            };
                            var3 = var3.bind(var5)(var1);
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun107753_ip = 242;
                                continue _fun107753
                            }
                        case 140:
                            var1 = _closure2_slot12;
                            if (!(var2 != var1)) {
                                _fun107753_ip = 197;
                                continue _fun107753
                            }
                        case 148:
                            var1 = _closure2_slot12;
                            var0 = _closure1_slot7;
                            var0 = var0.FETCHING;
                            if (!(var1 !== var0)) {
                                _fun107753_ip = 197;
                                continue _fun107753
                            }
                        case 169:
                            var0 = new Array(0);
                            var7 = 0;
                            var9 = var0;
                            var8 = var4;
                            var7 = arraySpread(var9, var8, var7);
                            var9 = var0;
                            var8 = var3;
                            var1 = arraySpread(var9, var8, var7);
                            _fun107753_ip = 240;
                            continue _fun107753;
                        case 197:
                            var1 = new Array(0);
                            var7 = 0;
                            var9 = var1;
                            var8 = var4;
                            var7 = arraySpread(var9, var8, var7);
                            var9 = var1;
                            var8 = var3;
                            var7 = arraySpread(var9, var8, var7);
                            var8 = _closure1_slot16;
                            var9 = var1;
                            var2 = arraySpread(var9, var8, var7);
                            var0 = var1;
                        case 240:
                            _fun107753_ip = 249;
                            continue _fun107753;
                        case 242:
                            var0 = _closure1_slot16;
                        case 249:
                            return var0;
                    }
                };
                var11 = var11.bind(var13)(var5, var9);
                _closure2_slot17 = var11;
                var5 = var22.length;
                var21 = var24 === var5;
                if (!var21) {
                    _fun107743_ip = 868;
                    continue _fun107743
                }
            case 859:
                var5 = var11.length;
                var21 = var24 === var5;
            case 868:
                var13 = _closure1_slot4;
                var9 = var13.useCallback;
                var14 = var11.length;
                var5 = new Array(3);
                var5[0] = var14;
                var5[1] = var0;
                var5[2] = var10;
                var0 = function(arg0) { // Environment: var1
                    _fun107758: for (var _fun107758_ip = 0;;) switch (_fun107758_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.item;
                            var _closure3_slot0 = var1;
                            var6 = var0.index;
                            var _closure3_slot1 = var6;
                            var3 = undefined;
                            var _closure3_slot2 = var3;
                            var4 = var1.type;
                            var2 = _closure1_slot13;
                            var2 = var2.PLACERHOLDER;
                            if (!(var4 !== var2)) {
                                _fun107758_ip = 185;
                                continue _fun107758
                            }
                        case 54:
                            var8 = var1.application;
                            _closure3_slot2 = var8;
                            var2 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 9;
                            var1 = var9[var1];
                            var4 = var2.bind(var3)(var1);
                            var1 = var4.getAppLauncherIconSource;
                            var7 = var1.bind(var4)(var8);
                            var4 = _closure1_slot10;
                            var1 = 26;
                            var1 = var9[var1];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.BaseAppRow;
                            var1 = {};
                            var1.application = var8;
                            var1.iconSource = var7;
                            var5 = function() {
                                _fun107759: for (var _fun107759_ip = 0;;) switch (_fun107759_ip) {
                                    case 0:
                                        var2 = _closure2_slot15;
                                        var1 = {};
                                        var3 = _closure3_slot2;
                                        var1.section = var3;
                                        var3 = _closure3_slot0;
                                        var5 = var3.type;
                                        var3 = _closure1_slot13;
                                        var3 = var3.GLOBAL_APPLICATION;
                                        var3 = var5 === var3;
                                        if (var3) {
                                            _fun107759_ip = 72;
                                            continue _fun107759
                                        }
                                    case 49:
                                        var5 = _closure3_slot0;
                                        var5 = var5.type;
                                        var4 = _closure1_slot13;
                                        var4 = var4.LOCAL_APPLICATION;
                                        var3 = var5 === var4;
                                    case 72:
                                        var1.installOnDemand = var3;
                                        var0 = _closure3_slot1;
                                        var1.searchResultsPosition = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1.onPress = var5;
                            var5 = 0;
                            var5 = var5 === var6;
                            var1.isFirstRow = var5;
                            var5 = _closure2_slot17;
                            var7 = var5.length;
                            var5 = 1;
                            var5 = var7 - var5;
                            var5 = var6 === var5;
                            var1.isLastRow = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        case 185:
                            var2 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 25;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var4 = 0;
                            var4 = var4 === var6;
                            var0.isFirstRow = var4;
                            var4 = _closure2_slot17;
                            var7 = var4.length;
                            var4 = 1;
                            var4 = var7 - var4;
                            var4 = var6 === var4;
                            var0.isLastRow = var4;
                            var4 = {};
                            var5 = _closure2_slot5;
                            var4.height = var5;
                            var0.style = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var13 = var9.bind(var13)(var0, var5);
                var0 = _closure1_slot8;
                var2 = var2 + var0;
                _closure2_slot18 = var2;
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 27;
                var5 = var16[var0];
                var9 = var9.bind(var4)(var5);
                var5 = var9.useAppLauncherFlashListProps;
                var5 = var5.bind(var9)();
                var15 = _closure1_slot4;
                var14 = var15.useCallback;
                var9 = new Array(3);
                var9[0] = var17;
                var9[1] = var6;
                var9[2] = var10;
                var6 = function(arg0) { // Environment: var1
                    _fun107760: for (var _fun107760_ip = 0;;) switch (_fun107760_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.nativeEvent;
                            var1 = var0.layoutMeasurement;
                            var3 = var1.height;
                            var1 = var0.contentOffset;
                            var1 = var1.y;
                            var3 = var3 + var1;
                            var0 = var0.contentSize;
                            var4 = var0.height;
                            var5 = _closure2_slot5;
                            var1 = 3;
                            var1 = var1 * var5;
                            var1 = var4 - var1;
                            if (!(var3 >= var1)) {
                                _fun107760_ip = 78;
                                continue _fun107760
                            }
                        case 68:
                            var3 = _closure2_slot14;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                        case 78:
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun107760_ip = 99;
                                continue _fun107760
                            }
                        case 88:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var14.bind(var15)(var6, var9);
                var17 = _closure1_slot4;
                var15 = var17.useMemo;
                var9 = var28.list;
                var14 = new Array(2);
                var14[0] = var9;
                var14[1] = var2;
                var9 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure2_slot3;
                    var3 = var2.list;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot18;
                    var1 = 'paddingBottom';
                    var0[var1] = var2;
                    return var0;
                };
                var15 = var15.bind(var17)(var9, var14);
                var17 = _closure1_slot4;
                var14 = var17.useMemo;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = {};
                    var1 = _closure2_slot18;
                    var0.bottom = var1;
                    return var0;
                };
                var14 = var14.bind(var17)(var2, var9);
                var17 = _closure1_slot4;
                var9 = var17.useMemo;
                var2 = new Array(4);
                var2[0] = var10;
                var19 = var11.length;
                var2[1] = var19;
                var19 = var22.length;
                var2[2] = var19;
                var2[3] = var18;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot17;
                    var4 = var2.length;
                    var2 = _closure2_slot16;
                    var2 = var2.length;
                    var2 = var4 + var2;
                    var2 = var3 * var2;
                    var0.height = var2;
                    var1 = _closure2_slot4;
                    var0.width = var1;
                    return var0;
                };
                var9 = var9.bind(var17)(var1, var2);
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var0 = var16[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var18 = _closure1_slot11;
                var17 = _closure1_slot12;
                var16 = {};
                var19 = var22.length;
                var23 = null;
                if (!(var24 !== var19)) {
                    _fun107743_ip = 1678;
                    continue _fun107743
                }
            case 1156:
                var29 = _closure1_slot11;
                var26 = _closure1_slot12;
                var19 = {};
                var31 = _closure1_slot5;
                var30 = {};
                var32 = var28.commandsHeaderContainer;
                var30.style = var32;
                var39 = _closure1_slot10;
                var40 = _closure1_slot0;
                var41 = _closure1_slot2;
                var45 = 28;
                var32 = var41[var45];
                var32 = var40.bind(var4)(var32);
                var33 = var32.Text;
                var32 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var43 = var28.sectionHeader;
                var32.style = var43;
                var49 = 29;
                var43 = var41[var49];
                var43 = var40.bind(var4)(var43);
                var46 = var43.intl;
                var44 = var46.string;
                var43 = var41[var49];
                var43 = var40.bind(var4)(var43);
                var43 = var43.t;
                var43 = var43["0hKkS+"];
                var43 = var44.bind(var46)(var43);
                var32.children = var43;
                var33 = var39.bind(var4)(var33, var32);
                var32 = new Array(2);
                var32[0] = var33;
                var39 = var22.length;
                var33 = 30;
                var33 = var41[var33];
                var33 = var40.bind(var4)(var33);
                var33 = var33.COLLAPSED_LIST_ITEM_MAX;
                var39 = var39 > var33;
                var33 = null;
                if (!var39) {
                    _fun107743_ip = 1597;
                    continue _fun107743
                }
            case 1335:
                var41 = _closure1_slot10;
                var40 = _closure1_slot0;
                var43 = _closure1_slot2;
                var39 = 31;
                var39 = var43[var39];
                var39 = var40.bind(var4)(var39);
                var40 = var39.AnimatedPressableHighlight;
                var39 = {};
                var43 = var28.commandsCTA;
                var39.style = var43;
                var43 = var28.commandsCTAUnderlayColor;
                var43 = var43.color;
                var39.underlayColor = var43;
                var44 = _closure1_slot0;
                var43 = _closure1_slot2;
                var46 = var43[var49];
                var46 = var44.bind(var4)(var46);
                var47 = var46.intl;
                var46 = var47.string;
                var43 = var43[var49];
                var43 = var44.bind(var4)(var43);
                var44 = var43.t;
                if (var34) {
                    _fun107743_ip = 1450;
                    continue _fun107743
                }
            case 1437:
                var43 = var44.xal319;
                var43 = var46.bind(var47)(var43);
                _fun107743_ip = 1461;
                continue _fun107743;
            case 1450:
                var44 = var44.nPGLFQ;
                var43 = var46.bind(var47)(var44);
            case 1461:
                var39.accessibilityLabel = var43;
                var39.onPress = var42;
                var44 = _closure1_slot10;
                var43 = _closure1_slot0;
                var42 = _closure1_slot2;
                var42 = var42[var45];
                var42 = var43.bind(var4)(var42);
                var43 = var42.Text;
                var42 = {
                    'color': 'text-brand',
                    'variant': 'text-md/semibold'
                };
                var46 = _closure1_slot0;
                var45 = _closure1_slot2;
                var47 = var45[var49];
                var47 = var46.bind(var4)(var47);
                var48 = var47.intl;
                var47 = var48.string;
                var45 = var45[var49];
                var45 = var46.bind(var4)(var45);
                var46 = var45.t;
                if (var34) {
                    _fun107743_ip = 1566;
                    continue _fun107743
                }
            case 1553:
                var45 = var46.xal319;
                var45 = var47.bind(var48)(var45);
                _fun107743_ip = 1577;
                continue _fun107743;
            case 1566:
                var46 = var46.nPGLFQ;
                var45 = var47.bind(var48)(var46);
            case 1577:
                var42.children = var45;
                var42 = var44.bind(var4)(var43, var42);
                var39.children = var42;
                var33 = var41.bind(var4)(var40, var39);
            case 1597:
                var32[1] = var33;
                var30.children = var32;
                var31 = var29.bind(var4)(var31, var30);
                var30 = new Array(2);
                var30[0] = var31;
                var33 = _closure1_slot10;
                var32 = _closure1_slot23;
                var31 = {};
                var31.commandData = var22;
                var31.context = var38;
                var31.beforeExecuteCommand = var37;
                var31.onPressCommand = var36;
                var31.onExecuteCommand = var35;
                var31.expanded = var34;
                var31 = var33.bind(var4)(var32, var31);
                var30[1] = var31;
                var19.children = var30;
                var23 = var29.bind(var4)(var26, var19);
            case 1678:
                var19 = new Array(4);
                var19[0] = var23;
                var22 = var22.length;
                var23 = var22 > var24;
                var22 = null;
                if (!var23) {
                    _fun107743_ip = 1740;
                    continue _fun107743
                }
            case 1700:
                var23 = var11.length;
                var23 = var23 > var24;
                var22 = null;
                if (!var23) {
                    _fun107743_ip = 1740;
                    continue _fun107743
                }
            case 1714:
                var29 = _closure1_slot10;
                var26 = _closure1_slot5;
                var23 = {};
                var30 = var28.divider;
                var23.style = var30;
                var22 = var29.bind(var4)(var26, var23);
            case 1740:
                var19[1] = var22;
                var23 = var11.length;
                var22 = null;
                if (!(var24 !== var23)) {
                    _fun107743_ip = 1865;
                    continue _fun107743
                }
            case 1755:
                var26 = _closure1_slot10;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var23 = 28;
                var23 = var32[var23];
                var23 = var31.bind(var4)(var23);
                var24 = var23.Text;
                var23 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var28 = var28.sectionHeader;
                var23.style = var28;
                var28 = 29;
                var29 = var32[var28];
                var29 = var31.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var32[var28];
                var28 = var31.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.PHjkRE;
                var28 = var29.bind(var30)(var28);
                var23.children = var28;
                var22 = var26.bind(var4)(var24, var23);
            case 1865:
                var19[2] = var22;
                var20 = null;
                if (!var21) {
                    _fun107743_ip = 1945;
                    continue _fun107743
                }
            case 1874:
                var23 = _closure1_slot10;
                var22 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 32;
                var21 = var24[var21];
                var22 = var22.bind(var4)(var21);
                var21 = {};
                var21.query = var3;
                var26 = _closure1_slot0;
                var24 = var24[var27];
                var24 = var26.bind(var4)(var24);
                var24 = var24.AppLauncherEntrypoint;
                var24 = var24.VOICE;
                var24 = var25 === var24;
                var21.showsGenericMessage = var24;
                var20 = var23.bind(var4)(var22, var21);
            case 1945:
                var19[3] = var20;
                var16.children = var19;
                var16 = var18.bind(var4)(var17, var16);
                var0.ListHeaderComponent = var16;
                var0.contentContainerStyle = var15;
                var0.scrollIndicatorInsets = var14;
                var0.renderItem = var13;
                var12 = _closure1_slot22;
                var0.keyExtractor = var12;
                var0.data = var11;
                var0.estimatedItemSize = var10;
                var0.estimatedListSize = var9;
                var9 = 'on-drag';
                var0.keyboardDismissMode = var9;
                var9 = 'always';
                var0.keyboardShouldPersistTaps = var9;
                var9 = false;
                var0.automaticallyAdjustsScrollIndicatorInsets = var9;
                var0.showsVerticalScrollIndicator = var9;
                var0.onViewableItemsChanged = var8;
                var0.preserveScrollMomentum = var7;
                var0.onScroll = var6;
                var6 = var5.onScroll;
                var0.animatedOnScroll = var6;
                var6 = var5.scrollerRef;
                var0.ref = var6;
                var6 = var5.gestureRef;
                var0.simultaneousHandlers = var6;
                var5 = var5.animatedProps;
                var0.animatedProps = var5;
                var0 = var2.bind(var4)(var1, var0, var3);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SearchLocalAndGlobalContentView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4674, 13873, 1468, 33, 1297, 671, 13859, 10564, 4898, 4673, 13906, 7737, 13862, 1568, 1464, 7562, 6824, 13872, 4547, 4544, 13907, 13908, 13894, 13887, 13746, 3941, 1234, 13909, 7028, 13910, 2]);