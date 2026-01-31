// modules/application_commands/native/ContextMenuCommandRootScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CONTEXT_MENU_COMMANDS_QUERY_LIMIT;
    var _closure1_slot8 = var6;
    var3 = var3.BuiltInSectionId;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingBottom = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.sectionHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ContextMenuCommandRootScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ContextMenuCommandRootScreen, environment: var1
        _fun109418: for (var _fun109418_ip = 0;;) switch (_fun109418_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.navigation;
                var _closure2_slot0 = var4;
                var1 = var1.route;
                var1 = var1.params;
                var19 = var1.channel;
                var _closure2_slot1 = var19;
                var11 = var1.commandType;
                var15 = var1.commandTargetId;
                var _closure2_slot2 = var15;
                var9 = var1.onPressAppCommand;
                var _closure2_slot3 = var9;
                var1 = var1.onClose;
                var _closure2_slot4 = var1;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 8;
                var2 = var7[var2];
                var10 = var6.bind(var3)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var8.bind(var10)(var6, var2);
                var _closure2_slot5 = var13;
                var10 = _closure1_slot5;
                var6 = var10.useRef;
                var2 = false;
                var2 = var6.bind(var10)(var2);
                var _closure2_slot6 = var2;
                var6 = _closure1_slot1;
                var2 = 9;
                var2 = var7[var2];
                var8 = var6.bind(var3)(var2);
                var6 = var8.useConfig;
                var2 = {};
                var12 = 'ContextMenuCommandRootScreen';
                var2.location = var12;
                var2 = var6.bind(var8)(var2);
                var6 = var2.searchEnabled;
                var8 = var10.useState;
                var2 = '';
                var14 = var8.bind(var10)(var2);
                var12 = _closure1_slot4;
                var8 = 2;
                var14 = var12.bind(var3)(var14, var8);
                var16 = 0;
                var12 = var14[var16];
                var8 = 1;
                var18 = var14[var8];
                var17 = var2 !== var12;
                var _closure2_slot7 = var17;
                var8 = var10.useEffect;
                var2 = new Array(2);
                var2[0] = var4;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.addListener;
                    var1 = 'beforeRemove';
                    var0 = function() { // Environment: var0
                        _fun109421: for (var _fun109421_ip = 0;;) switch (_fun109421_ip) {
                            case 0:
                                var1 = _closure2_slot6;
                                var1 = var1.current;
                                if (var1) {
                                    _fun109421_ip = 25;
                                    continue _fun109421
                                }
                            case 15:
                                var3 = _closure2_slot4;
                                var2 = null;
                                var1 = var2 == var3;
                            case 25:
                                if (var1) {
                                    _fun109421_ip = 38;
                                    continue _fun109421
                                }
                            case 28:
                                var1 = _closure2_slot4;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 38:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var8.bind(var10)(var1, var2);
                var2 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.useDiscovery;
                var1 = {};
                var8 = {};
                var8.channel = var19;
                var10 = 'channel';
                var8.type = var10;
                var1.context = var8;
                var8 = {};
                var10 = undefined;
                if (!var17) {
                    _fun109418_ip = 378;
                    continue _fun109418
                }
            case 375:
                var10 = var12;
            case 378:
                var8.text = var10;
                var10 = new Array(1);
                var10[0] = var11;
                var8.commandTypes = var10;
                var1.filters = var8;
                var8 = {};
                var10 = _closure1_slot8;
                var8.limit = var10;
                var10 = !var17;
                var8.includeFrecency = var10;
                var10 = undefined;
                if (!var17) {
                    _fun109418_ip = 455;
                    continue _fun109418
                }
            case 423:
                var12 = _closure1_slot0;
                var14 = _closure1_slot3;
                var11 = 11;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ScoreMethod;
                var10 = var11.COMMAND_OR_APPLICATION;
            case 455:
                var8.scoreMethod = var10;
                var1.options = var8;
                var11 = true;
                var1.allowFetch = var11;
                var7 = var2.bind(var7)(var1);
                var14 = var7.commands;
                _closure2_slot8 = var14;
                var2 = var7.commandsByActiveSection;
                _closure2_slot9 = var2;
                var1 = var7.sectionDescriptors;
                _closure2_slot10 = var1;
                var7 = var7.loading;
                _closure2_slot11 = var7;
                var8 = _closure1_slot5;
                var12 = var8.useMemo;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = {};
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot10;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var0 = var2.id;
                        var1[var0] = var2;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = {};
                    var0.sections = var1;
                    return var0;
                };
                var1 = var12.bind(var8)(var1, var10);
                var1 = var1.sections;
                _closure2_slot12 = var1;
                var12 = var8.useCallback;
                var10 = new Array(5);
                var10[0] = var19;
                var10[1] = var15;
                var10[2] = var13;
                var10[3] = var4;
                var10[4] = var9;
                var9 = function(arg0) { // Environment: var0
                    _fun109424: for (var _fun109424_ip = 0;;) switch (_fun109424_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun109424_ip = 23;
                                continue _fun109424
                            }
                        case 13:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var2 = _closure2_slot6;
                            var0 = true;
                            var2.current = var0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 12;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = {};
                            var5 = arg0;
                            var2.command = var5;
                            var5 = {};
                            var2.optionValues = var5;
                            var5 = {};
                            var6 = _closure2_slot1;
                            var5.channel = var6;
                            var6 = _closure2_slot5;
                            var5.guild = var6;
                            var2.context = var5;
                            var5 = _closure2_slot2;
                            var2.commandTargetId = var5;
                            var2 = var4.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var2 = var4.getParent;
                            var2 = var2.bind(var4)();
                            if (!(var3 == var2)) {
                                _fun109424_ip = 135;
                                continue _fun109424
                            }
                        case 131:
                            var2 = _closure2_slot0;
                        case 135:
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var20 = var12.bind(var8)(var9, var10);
                _closure2_slot13 = var20;
                var10 = var8.useCallback;
                var9 = new Array(3);
                var9[0] = var2;
                var9[1] = var4;
                var9[2] = var20;
                var4 = function(arg0) { // Environment: var0
                    _fun109425: for (var _fun109425_ip = 0;;) switch (_fun109425_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var3 = _closure2_slot9;
                            var2 = var3.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.section;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var0);
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            var5 = undefined;
                            if (var4) {
                                _fun109425_ip = 51;
                                continue _fun109425
                            }
                        case 46:
                            var5 = var3.data;
                        case 51:
                            if (!(var2 == var5)) {
                                _fun109425_ip = 59;
                                continue _fun109425
                            }
                        case 55:
                            var5 = new Array(0);
                        case 59:
                            var4 = _closure2_slot0;
                            var3 = var4.navigate;
                            var2 = {};
                            var2.section = var6;
                            var2.commands = var5;
                            var1 = _closure2_slot13;
                            var2.onPressCommand = var1;
                            var1 = 'app';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var19 = var10.bind(var8)(var4, var9);
                _closure2_slot14 = var19;
                var9 = var8.useMemo;
                var4 = new Array(3);
                var4[0] = var7;
                var10 = var14.length;
                var4[1] = var10;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    _fun109427: for (var _fun109427_ip = 0;;) switch (_fun109427_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            if (var2) {
                                _fun109427_ip = 144;
                                continue _fun109427
                            }
                        case 15:
                            var2 = _closure2_slot8;
                            var3 = var2.length;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun109427_ip = 144;
                                continue _fun109427
                            }
                        case 30:
                            var4 = _closure2_slot9;
                            var3 = var4.find;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.section;
                                var1 = var0.id;
                                var0 = _closure1_slot9;
                                var0 = var0.FRECENCY;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var3.bind(var4)(var2);
                            var3 = _closure2_slot9;
                            var2 = var3.filter;
                            var0 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.section;
                                var1 = var0.id;
                                var0 = _closure1_slot9;
                                var0 = var0.FRECENCY;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var0);
                            var0 = {};
                            var4 = null;
                            var6 = var4 == var5;
                            var2 = undefined;
                            if (var6) {
                                _fun109427_ip = 107;
                                continue _fun109427
                            }
                        case 85:
                            var7 = var5.data;
                            var6 = var7.map;
                            var5 = function(arg0) { // Environment: var1
                                var0 = {};
                                var1 = 'command';
                                var0.type = var1;
                                var1 = arg0;
                                var0.command = var1;
                                return var0;
                            };
                            var2 = var6.bind(var7)(var5);
                        case 107:
                            if (!(var4 == var2)) {
                                _fun109427_ip = 115;
                                continue _fun109427
                            }
                        case 111:
                            var2 = new Array(0);
                        case 115:
                            var0.frecencyItems = var2;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.section;
                                var0 = {};
                                var2 = 'app';
                                var0.type = var2;
                                var0.section = var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0.appItems = var1;
                            return var0;
                        case 144:
                            var0 = {};
                            var1 = new Array(0);
                            var0.frecencyItems = var1;
                            var1 = new Array(0);
                            var0.appItems = var1;
                            return var0;
                    }
                };
                var4 = var9.bind(var8)(var2, var4);
                var2 = var4.frecencyItems;
                _closure2_slot15 = var2;
                var4 = var4.appItems;
                _closure2_slot16 = var4;
                var10 = var8.useMemo;
                var9 = new Array(5);
                var9[0] = var7;
                var9[1] = var14;
                var9[2] = var17;
                var9[3] = var2;
                var9[4] = var4;
                var4 = function() { // Environment: var0
                    _fun109432: for (var _fun109432_ip = 0;;) switch (_fun109432_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            if (var1) {
                                _fun109432_ip = 158;
                                continue _fun109432
                            }
                        case 13:
                            var1 = _closure2_slot8;
                            var1 = var1.length;
                            var3 = 0;
                            if (!(var3 !== var1)) {
                                _fun109432_ip = 128;
                                continue _fun109432
                            }
                        case 28:
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun109432_ip = 95;
                                continue _fun109432
                            }
                        case 35:
                            var1 = new Array(0);
                            var2 = _closure2_slot15;
                            var2 = var2.length;
                            if (!(var2 > var3)) {
                                _fun109432_ip = 66;
                                continue _fun109432
                            }
                        case 52:
                            var4 = var1.push;
                            var2 = _closure2_slot15;
                            var2 = var4.bind(var1)(var2);
                        case 66:
                            var2 = _closure2_slot16;
                            var2 = var2.length;
                            if (!(var2 > var3)) {
                                _fun109432_ip = 93;
                                continue _fun109432
                            }
                        case 79:
                            var3 = var1.push;
                            var2 = _closure2_slot16;
                            var2 = var3.bind(var1)(var2);
                        case 93:
                            return var1;
                        case 95:
                            var2 = _closure2_slot8;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = 'command';
                                var0.type = var1;
                                var1 = arg0;
                                var0.command = var1;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                        case 128:
                            var0 = {};
                            var1 = 'no_commands';
                            var0.type = var1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                        case 158:
                            var0 = {};
                            var1 = 'placeholder';
                            var0.type = var1;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                    }
                };
                var21 = var10.bind(var8)(var4, var9);
                _closure2_slot17 = var21;
                var9 = _closure1_slot1;
                var22 = _closure1_slot3;
                var4 = 13;
                var4 = var22[var4];
                var10 = var9.bind(var3)(var4);
                var4 = {};
                var4.includeKeyboardHeight = var11;
                var4 = var10.bind(var3)(var4);
                var11 = var4.insets;
                var4 = 14;
                var4 = var22[var4];
                var4 = var9.bind(var3)(var4);
                var12 = var4.bind(var3)();
                var10 = var8.useMemo;
                var9 = new Array(1);
                var9[0] = var21;
                var4 = function() { // Environment: var0
                    var2 = _closure2_slot17;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.length;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var10.bind(var8)(var4, var9);
                var4 = _closure1_slot12;
                var4 = var4.bind(var3)();
                _closure2_slot18 = var4;
                var15 = 'text-sm/semibold';
                _closure2_slot19 = var15;
                var10 = _closure1_slot0;
                var9 = 15;
                var9 = var22[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.useScaledTextLineHeight;
                var15 = var9.bind(var10)(var15);
                _closure2_slot20 = var15;
                var10 = var8.useCallback;
                var9 = new Array(5);
                var9[0] = var7;
                var22 = var14.length;
                var9[1] = var22;
                var9[2] = var17;
                var2 = var2.length;
                var9[3] = var2;
                var2 = var4.sectionHeader;
                var9[4] = var2;
                var2 = function(arg0) { // Environment: var0
                    _fun109436: for (var _fun109436_ip = 0;;) switch (_fun109436_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            if (var0) {
                                _fun109436_ip = 265;
                                continue _fun109436
                            }
                        case 13:
                            var0 = _closure2_slot8;
                            var0 = var0.length;
                            var1 = 0;
                            if (!(var1 !== var0)) {
                                _fun109436_ip = 265;
                                continue _fun109436
                            }
                        case 31:
                            var0 = _closure2_slot7;
                            if (var0) {
                                _fun109436_ip = 265;
                                continue _fun109436
                            }
                        case 41:
                            var0 = arg0;
                            if (!(var1 === var0)) {
                                _fun109436_ip = 61;
                                continue _fun109436
                            }
                        case 48:
                            var0 = _closure2_slot15;
                            var0 = var0.length;
                            if (!(!(var0 > var1))) {
                                _fun109436_ip = 123;
                                continue _fun109436
                            }
                        case 61:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var0 = 16;
                            var1 = var6[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var6[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.PHjkRE;
                            var4 = var1.bind(var2)(var0);
                            _fun109436_ip = 185;
                            continue _fun109436;
                        case 123:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var0 = 16;
                            var1 = var7[var0];
                            var3 = undefined;
                            var1 = var6.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var7[var0];
                            var0 = var6.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.V0w2ap;
                            var4 = var1.bind(var2)(var0);
                        case 185:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.Text;
                            var0 = {};
                            var6 = _closure2_slot19;
                            var0.variant = var6;
                            var6 = 'text-default';
                            var0.color = var6;
                            var5 = _closure2_slot18;
                            var5 = var5.sectionHeader;
                            var0.style = var5;
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 265:
                            var0 = null;
                            return var0;
                    }
                };
                var9 = var10.bind(var8)(var2, var9);
                var10 = var8.useCallback;
                var2 = new Array(4);
                var2[0] = var21;
                var2[1] = var20;
                var2[2] = var19;
                var2[3] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun109437: for (var _fun109437_ip = 0;;) switch (_fun109437_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var0 = _closure2_slot17;
                            var0 = var0[var3];
                            var0 = var0[var2];
                            var _closure3_slot0 = var0;
                            var1 = 0;
                            var6 = var1 === var2;
                            var1 = _closure2_slot17;
                            var1 = var1[var3];
                            var3 = var1.length;
                            var1 = 1;
                            var1 = var3 - var1;
                            var5 = var2 === var1;
                            var2 = var0.type;
                            var4 = 'placeholder';
                            if (!(var4 !== var2)) {
                                _fun109437_ip = 354;
                                continue _fun109437
                            }
                        case 73:
                            var7 = 'no_commands';
                            if (!(var7 !== var2)) {
                                _fun109437_ip = 300;
                                continue _fun109437
                            }
                        case 86:
                            var1 = 'command';
                            if (!(var1 !== var2)) {
                                _fun109437_ip = 190;
                                continue _fun109437
                            }
                        case 94:
                            var1 = 'app';
                            if (!(var1 !== var2)) {
                                _fun109437_ip = 106;
                                continue _fun109437
                            }
                        case 102:
                            var1 = undefined;
                            return var1;
                        case 106:
                            var11 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 18;
                            var1 = var3[var1];
                            var8 = undefined;
                            var1 = var2.bind(var8)(var1);
                            var3 = var1.ContextMenuCommandAppItem;
                            var2 = {};
                            var1 = var0.section;
                            var2.section = var1;
                            var1 = function() { // Original name: onPress, environment: var10
                                var2 = _closure2_slot14;
                                var0 = _closure3_slot0;
                                var1 = var0.section;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var1;
                            var2.start = var6;
                            var2.end = var5;
                            var1 = var0.section;
                            var1 = var1.id;
                            var1 = var11.bind(var8)(var3, var2, var1);
                            return var1;
                        case 190:
                            var8 = _closure1_slot10;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 18;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var11 = var0.command;
                            var1.item = var11;
                            var10 = function() { // Original name: onPress, environment: var10
                                var2 = _closure2_slot13;
                                var0 = _closure3_slot0;
                                var1 = var0.command;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPress = var10;
                            var10 = _closure2_slot12;
                            var9 = var0.command;
                            var9 = var9.applicationId;
                            var9 = var10[var9];
                            var1.section = var9;
                            var1.start = var6;
                            var1.end = var5;
                            var9 = true;
                            var1.newUI = var9;
                            var0 = var0.command;
                            var0 = var0.id;
                            var0 = var8.bind(var3)(var2, var1, var0);
                            return var0;
                        case 300:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 18;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ContextMenuCommandEmptyItem;
                            var0 = {};
                            var0.start = var6;
                            var0.end = var5;
                            var0 = var3.bind(var2)(var1, var0, var7);
                            return var0;
                        case 354:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 18;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ContextMenuCommandLoadingItem;
                            var0 = {};
                            var0.start = var6;
                            var0.end = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var10 = var10.bind(var8)(var1, var2);
                var2 = var8.useMemo;
                var1 = new Array(6);
                var1[0] = var7;
                var19 = var14.length;
                var1[1] = var19;
                var1[2] = var17;
                var1[3] = var15;
                var15 = var4.sectionHeader;
                var15 = var15.paddingTop;
                var1[4] = var15;
                var15 = var4.sectionHeader;
                var15 = var15.paddingBottom;
                var1[5] = var15;
                var0 = function() { // Environment: var0
                    _fun109440: for (var _fun109440_ip = 0;;) switch (_fun109440_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var3 = 0;
                            var0 = 0;
                            if (var2) {
                                _fun109440_ip = 82;
                                continue _fun109440
                            }
                        case 14:
                            var2 = _closure2_slot8;
                            var2 = var2.length;
                            var0 = 0;
                            if (!(var3 !== var2)) {
                                _fun109440_ip = 82;
                                continue _fun109440
                            }
                        case 29:
                            var2 = _closure2_slot7;
                            var0 = 0;
                            if (var2) {
                                _fun109440_ip = 82;
                                continue _fun109440
                            }
                        case 38:
                            var3 = _closure2_slot20;
                            var2 = _closure2_slot18;
                            var2 = var2.sectionHeader;
                            var2 = var2.paddingTop;
                            var2 = var3 + var2;
                            var1 = _closure2_slot18;
                            var1 = var1.sectionHeader;
                            var1 = var1.paddingBottom;
                            var0 = var2 + var1;
                        case 82:
                            return var0;
                    }
                };
                var8 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                if (!var6) {
                    _fun109418_ip = 1098;
                    continue _fun109418
                }
            case 1071:
                var4 = var17;
                if (var4) {
                    _fun109418_ip = 1095;
                    continue _fun109418
                }
            case 1077:
                var7 = !var7;
                if (!var7) {
                    _fun109418_ip = 1092;
                    continue _fun109418
                }
            case 1083:
                var14 = var14.length;
                var7 = var14 > var16;
            case 1092:
                var4 = var7;
            case 1095:
                var6 = var4;
            case 1098:
                if (!var6) {
                    _fun109418_ip = 1274;
                    continue _fun109418
                }
            case 1104:
                var14 = _closure1_slot10;
                var7 = _closure1_slot6;
                var4 = {};
                var15 = {};
                var16 = 0;
                if (!var17) {
                    _fun109418_ip = 1151;
                    continue _fun109418
                }
            case 1121:
                var19 = _closure1_slot1;
                var20 = _closure1_slot3;
                var17 = 7;
                var17 = var20[var17];
                var17 = var19.bind(var3)(var17);
                var17 = var17.spacing;
                var16 = var17.PX_16;
            case 1151:
                var15.marginBottom = var16;
                var4.style = var15;
                var17 = _closure1_slot10;
                var21 = _closure1_slot0;
                var22 = _closure1_slot3;
                var15 = 19;
                var15 = var22[var15];
                var15 = var21.bind(var3)(var15);
                var16 = var15.SearchField;
                var15 = {};
                var19 = 'md';
                var15.size = var19;
                var15.onChange = var18;
                var18 = 16;
                var19 = var22[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.m1UwbP;
                var18 = var19.bind(var20)(var18);
                var15.placeholder = var18;
                var15 = var17.bind(var3)(var16, var15);
                var4.children = var15;
                var6 = var14.bind(var3)(var7, var4);
            case 1274:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var14 = _closure1_slot3;
                var5 = 20;
                var5 = var14[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.sections = var13;
                var13 = 'windowSize';
                var5.estimatedListSize = var13;
                var5.itemSize = var12;
                var11 = var11.bottom;
                var5.insetEnd = var11;
                var5.renderItem = var10;
                var5.renderSectionHeader = var9;
                var5.sectionHeaderSize = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 4509, 33, 1297, 671, 566, 9579, 7560, 7561, 7946, 4856, 7521, 6939, 1234, 3900, 9581, 6971, 7524, 2]);