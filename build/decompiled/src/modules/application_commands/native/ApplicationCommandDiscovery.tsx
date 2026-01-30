// modules/application_commands/native/ApplicationCommandDiscovery.tsx
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun90674: for (var _fun90674_ip = 0;;) switch (_fun90674_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun90674_ip = 45;
                    continue _fun90674
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun90674_ip = 54;
                    continue _fun90674
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun90674_ip = 344;
                    continue _fun90674
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun90674_ip = 322;
                    continue _fun90674
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun90674_ip = 282;
                    continue _fun90674
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun90674_ip = 269;
                    continue _fun90674
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun90674_ip = 162;
                    continue _fun90674
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun90674_ip = 178;
                    continue _fun90674
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun90674_ip = 248;
                    continue _fun90674
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun90674_ip = 248;
                    continue _fun90674
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun90674_ip = 233;
                    continue _fun90674
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun90674_ip = 246;
                    continue _fun90674
                }
            case 233:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun90674_ip = 264;
                continue _fun90674;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun90674_ip = 282;
                continue _fun90674;
            case 269:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun90674_ip = 322;
                    continue _fun90674
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun90674_ip = 329;
                    continue _fun90674
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun90675: for (var _fun90675_ip = 0;;) switch (_fun90675_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun90675_ip = 56;
                                continue _fun90675
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun90675_ip = 67;
                            continue _fun90675;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun90676: for (var _fun90676_ip = 0;;) switch (_fun90676_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun90676_ip = 23;
                    continue _fun90676
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun90676_ip = 33;
                    continue _fun90676
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun90676_ip = 70;
                    continue _fun90676
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun90676_ip = 55;
                    continue _fun90676
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
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
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.SectionList;
    var _closure1_slot7 = var3;
    var6 = 3;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var7 = var3.BuiltInSectionId;
    var _closure1_slot8 = var7;
    var3 = var3.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ITEM_HEIGHT;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot11 = var3;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot12 = var8;
    var7 = var7.SectionListElementType;
    var _closure1_slot13 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot14 = var8;
    var8 = var7.Fragment;
    var _closure1_slot15 = var8;
    var7 = var7.jsxs;
    var _closure1_slot16 = var7;
    var3 = var6 * var3;
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.discoveryWrapper = var8;
    var8 = {
        'height': 50,
        'width': 50,
        'marginBottom': 16
    };
    var3.noCommandsImage = var8;
    var8 = {
        'padding': 0,
        'height': 100
    };
    var3.noCommandsContainer = var8;
    var8 = {};
    var9 = 10;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.commandsList = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandDiscovery.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ApplicationCommandDiscovery, environment: var1
        _fun90677: for (var _fun90677_ip = 0;;) switch (_fun90677_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.style;
                var1 = var0.onPressSlashItem;
                var _closure2_slot0 = var1;
                var9 = var0.onHeightChange;
                var _closure2_slot1 = var9;
                var1 = var0.channel;
                var _closure2_slot2 = var1;
                var12 = var0.canOnlyUseTextCommands;
                var3 = undefined;
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
                var0 = _closure1_slot18;
                var17 = var0.bind(var3)();
                var _closure2_slot3 = var17;
                var6 = _closure1_slot5;
                var0 = var6.useRef;
                var11 = null;
                var19 = var0.bind(var6)(var11);
                var _closure2_slot4 = var19;
                var2 = var6.useState;
                var0 = 0;
                var8 = var2.bind(var6)(var0);
                var5 = _closure1_slot4;
                var2 = 2;
                var2 = var5.bind(var3)(var8, var2);
                var0 = var2[var0];
                var _closure2_slot5 = var0;
                var13 = 1;
                var14 = var2[var13];
                var _closure2_slot6 = var14;
                var5 = var6.useRef;
                var2 = false;
                var2 = var5.bind(var6)(var2);
                var _closure2_slot7 = var2;
                var16 = _closure1_slot0;
                var18 = _closure1_slot3;
                var2 = 11;
                var2 = var18[var2];
                var6 = var16.bind(var3)(var2);
                var5 = var6.useCommandDiscoveryManager;
                var2 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.initialSectionId;
                    return var0;
                };
                var21 = var5.bind(var6)(var2);
                var _closure2_slot8 = var21;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var18[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useDiscovery;
                var2 = {};
                var8 = {};
                var8.channel = var1;
                var15 = 'channel';
                var8.type = var15;
                var2.context = var8;
                var8 = {};
                var15 = 13;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.ApplicationCommandType;
                var16 = var15.CHAT;
                var15 = new Array(1);
                var15[0] = var16;
                var8.commandTypes = var15;
                var16 = _closure1_slot0;
                var18 = _closure1_slot3;
                var15 = 14;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.BuiltInCommandFilter;
                if (var12) {
                    _fun90677_ip = 342;
                    continue _fun90677
                }
            case 334:
                var15 = var16.ALLOW;
                _fun90677_ip = 348;
                continue _fun90677;
            case 342:
                var15 = var16.ONLY_TEXT;
            case 348:
                var8.builtIns = var15;
                var12 = !var12;
                var8.applicationCommands = var12;
                var2.filters = var8;
                var12 = {
                    'placeholderCount': 3,
                    'limit': null,
                    'includeFrecency': true
                };
                var8 = _closure1_slot9;
                var12.limit = var8;
                var8 = true;
                var2.options = var12;
                var2.allowFetch = var8;
                var5 = var5.bind(var6)(var2);
                var6 = var5.sectionDescriptors;
                _closure2_slot9 = var6;
                var2 = var5.activeSections;
                _closure2_slot10 = var2;
                var18 = var5.commandsByActiveSection;
                _closure2_slot11 = var18;
                var2 = var5.hasMoreAfter;
                _closure2_slot12 = var2;
                var12 = var5.loading;
                var2 = var5.filteredSectionId;
                _closure2_slot13 = var2;
                var15 = var5.scrollDown;
                _closure2_slot14 = var15;
                var15 = var5.filterSection;
                _closure2_slot15 = var15;
                var5 = _closure1_slot5;
                var20 = var5.useEffect;
                var16 = new Array(4);
                var16[0] = var15;
                var16[1] = var21;
                var16[2] = var14;
                var16[3] = var6;
                var14 = function() { // Environment: var10
                    _fun90679: for (var _fun90679_ip = 0;;) switch (_fun90679_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90679_ip = 76;
                                continue _fun90679
                            }
                        case 13:
                            var3 = _closure2_slot15;
                            var1 = _closure2_slot8;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var4 = _closure2_slot9;
                            var3 = var4.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure2_slot8;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var1);
                            var1 = _closure2_slot6;
                            var4 = -1;
                            var0 = 0;
                            if (!(var4 !== var3)) {
                                _fun90679_ip = 71;
                                continue _fun90679
                            }
                        case 68:
                            var0 = var3;
                        case 71:
                            var0 = var1.bind(var2)(var0);
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var20.bind(var5)(var14, var16);
                var20 = var5.useEffect;
                var16 = function() { // Environment: var10
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var1 = var4[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var6 = var1.AccessibilityAnnouncer;
                    var5 = var6.announce;
                    var1 = 16;
                    var7 = var4[var1];
                    var7 = var3.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.t;
                    var1 = var1["2wfLMm"];
                    var1 = var7.bind(var8)(var1);
                    var1 = var5.bind(var6)(var1);
                    var1 = 17;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.trackWithMetadata;
                    var0 = _closure1_slot12;
                    var0 = var0.APPLICATION_COMMAND_BROWSER_OPENED;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.updateInitialSectionId;
                        var1 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
                };
                var14 = new Array(0);
                var14 = var20.bind(var5)(var16, var14);
                var16 = var5.useEffect;
                var14 = new Array(2);
                var14[0] = var18;
                var14[1] = var9;
                var9 = function() { // Environment: var10
                    _fun90683: for (var _fun90683_ip = 0;;) switch (_fun90683_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90683_ip = 62;
                                continue _fun90683
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var5 = _closure2_slot11;
                            var0 = var5.length;
                            var4 = 0;
                            var1 = 0;
                            if (!(var1 !== var0)) {
                                _fun90683_ip = 55;
                                continue _fun90683
                            }
                        case 34:
                            var3 = var5.reduce;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun90684: for (var _fun90684_ip = 0;;) switch (_fun90684_ip) {
                                    case 0:
                                        var0 = arg1;
                                        var1 = var0.data;
                                        var2 = var1.length;
                                        var1 = 0;
                                        if (!(var1 !== var2)) {
                                            _fun90684_ip = 89;
                                            continue _fun90684
                                        }
                                    case 19:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var1 = 8;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.APPLICATION_SECTION_HEADER_HEIGHT;
                                        var3 = _closure1_slot11;
                                        var2 = _closure1_slot10;
                                        var2 = var3 + var2;
                                        var0 = var0.data;
                                        var0 = var0.length;
                                        var0 = var2 * var0;
                                        var1 = var1 + var0;
                                        var0 = arg0;
                                        var0 = var0 + var1;
                                        _fun90684_ip = 127;
                                        continue _fun90684;
                                    case 89:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var1 = 8;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        var2 = var1.APPLICATION_SECTION_HEADER_HEIGHT;
                                        var1 = 160;
                                        var0 = var2 + var1;
                                    case 127:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var5)(var0, var4);
                        case 55:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var16.bind(var5)(var9, var14);
                var14 = var5.useCallback;
                var9 = new Array(3);
                var9[0] = var6;
                var9[1] = var15;
                var9[2] = var2;
                var2 = function(arg0) { // Environment: var10
                    _fun90685: for (var _fun90685_ip = 0;;) switch (_fun90685_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot9;
                            var1 = var1[var3];
                            var4 = var1.id;
                            var2 = _closure2_slot13;
                            if (!(var4 !== var2)) {
                                _fun90685_ip = 76;
                                continue _fun90685
                            }
                        case 27:
                            var4 = var1.id;
                            var2 = _closure1_slot8;
                            var2 = var2.FRECENCY;
                            if (!(var4 !== var2)) {
                                _fun90685_ip = 76;
                                continue _fun90685
                            }
                        case 49:
                            var4 = _closure2_slot15;
                            var1 = var1.id;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var2)(var3);
                            _fun90685_ip = 100;
                            continue _fun90685;
                        case 76:
                            var3 = _closure2_slot15;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            var1 = _closure2_slot6;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                        case 100:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateInitialSectionId;
                            var1 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var20 = var14.bind(var5)(var2, var9);
                _closure2_slot16 = var20;
                var14 = var5.useCallback;
                var9 = function() { // Environment: var10
                    var1 = _closure2_slot7;
                    var0 = true;
                    var1.current = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 17;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.trackWithMetadata;
                    var1 = _closure1_slot12;
                    var1 = var1.APPLICATION_COMMAND_BROWSER_SCROLLED;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var16 = var14.bind(var5)(var9, var2);
                var14 = var5.useCallback;
                var9 = function(arg0) { // Environment: var10
                    _fun90687: for (var _fun90687_ip = 0;;) switch (_fun90687_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.nativeEvent;
                            var0 = var1.contentOffset;
                            var3 = var1.targetContentOffset;
                            var2 = var0.y;
                            var0 = null;
                            var4 = var0 == var3;
                            var0 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun90687_ip = 46;
                                continue _fun90687
                            }
                        case 41:
                            var1 = var3.y;
                        case 46:
                            if (!(var2 === var1)) {
                                _fun90687_ip = 65;
                                continue _fun90687
                            }
                        case 50:
                            var2 = _closure2_slot7;
                            var1 = false;
                            var2.current = var1;
                        case 65:
                            return var0;
                    }
                };
                var2 = new Array(0);
                var15 = var14.bind(var5)(var9, var2);
                var14 = var5.useCallback;
                var9 = function() { // Environment: var10
                    var1 = _closure2_slot7;
                    var0 = false;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = new Array(0);
                var14 = var14.bind(var5)(var9, var2);
                var21 = var5.useMemo;
                var9 = new Array(2);
                var9[0] = var6;
                var9[1] = var18;
                var2 = function() { // Environment: var10
                    _fun90689: for (var _fun90689_ip = 0;;) switch (_fun90689_ip) {
                        case 0:
                            var0 = 0;
                            var _closure3_slot0 = var0;
                            var0 = new Array(0);
                            var _closure3_slot1 = var0;
                            var5 = function(arg0) { // Original name: _loop, environment: var1
                                _fun90690: for (var _fun90690_ip = 0;;) switch (_fun90690_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var3 = _closure2_slot11;
                                        var2 = var3.findIndex;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var0 = var0.section;
                                            var1 = var0.id;
                                            var0 = _closure4_slot0;
                                            var0 = var0.id;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        var2 = 0;
                                        if (!(!(var1 >= var2))) {
                                            _fun90690_ip = 63;
                                            continue _fun90690
                                        }
                                    case 40:
                                        var4 = _closure3_slot1;
                                        var3 = var4.push;
                                        var2 = _closure3_slot0;
                                        var2 = var3.bind(var4)(var2);
                                        _fun90690_ip = 153;
                                        continue _fun90690;
                                    case 63:
                                        var0 = _closure2_slot11;
                                        var0 = var0[var1];
                                        var0 = var0.data;
                                        var2 = var0.length;
                                        var1 = _closure1_slot11;
                                        var1 = var2 * var1;
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 8;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2);
                                        var0 = var0.APPLICATION_SECTION_HEADER_HEIGHT;
                                        var2 = var1 + var0;
                                        var0 = _closure3_slot0;
                                        var0 = var2 + var0;
                                        var3 = _closure3_slot1;
                                        var2 = var3.push;
                                        var2 = var2.bind(var3)(var0);
                                        _closure3_slot0 = var0;
                                    case 153:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = _closure1_slot19;
                            var1 = _closure2_slot9;
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun90689_ip = 81;
                                continue _fun90689
                            }
                        case 56:
                            var1 = var2.value;
                            var1 = var5.bind(var4)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun90689_ip = 56;
                                continue _fun90689
                            }
                        case 81:
                            return var0;
                    }
                };
                var2 = var21.bind(var5)(var2, var9);
                _closure2_slot17 = var2;
                var21 = var5.useMemo;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.throttle;
                    var1 = function(arg0) { // Environment: var0
                        _fun90693: for (var _fun90693_ip = 0;;) switch (_fun90693_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = _closure2_slot17;
                                var1 = var1.length;
                                var5 = 0;
                                var1 = var5 < var1;
                                var2 = 0;
                                if (!var1) {
                                    _fun90693_ip = 124;
                                    continue _fun90693
                                }
                            case 26:
                                var1 = _closure2_slot17;
                                var1 = var1[var5];
                                var4 = 0;
                                var3 = 0;
                                if (!(var5 !== var1)) {
                                    _fun90693_ip = 63;
                                    continue _fun90693
                                }
                            case 42:
                                var1 = _closure2_slot17;
                                var1 = var1[var5];
                                var1 = var6 >= var1;
                                var4 = 0;
                                var3 = 0;
                                var2 = 0;
                                if (!var1) {
                                    _fun90693_ip = 124;
                                    continue _fun90693
                                }
                            case 63:
                                var7 = var4 + 1;
                                var8 = var3 + 1;
                                var1 = _closure2_slot17;
                                var1 = var1.length;
                                var2 = var7;
                                if (!(var8 < var1)) {
                                    _fun90693_ip = 124;
                                    continue _fun90693
                                }
                            case 85:
                                var1 = _closure2_slot17;
                                var1 = var1[var8];
                                var4 = var7;
                                var3 = var8;
                                if (var5 === var1) {
                                    _fun90693_ip = 63;
                                    continue _fun90693
                                }
                            case 103:
                                var1 = _closure2_slot17;
                                var1 = var1[var8];
                                var4 = var7;
                                var3 = var8;
                                var2 = var4;
                                if (var6 >= var1) {
                                    _fun90693_ip = 63;
                                    continue _fun90693
                                }
                            case 124:
                                var1 = _closure2_slot6;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                        }
                    };
                    var0 = 100;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var21.bind(var5)(var2, var9);
                _closure2_slot18 = var2;
                var21 = var5.useCallback;
                var9 = function(arg0, arg1) { // Environment: var10
                    _fun90694: for (var _fun90694_ip = 0;;) switch (_fun90694_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = arg1;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun90694_ip = 424;
                                continue _fun90694
                            }
                        case 15:
                            var0 = _closure1_slot13;
                            var18 = var0.ROW;
                            var0 = _closure1_slot19;
                            var7 = undefined;
                            var17 = var0.bind(var7)(var3);
                            var4 = var17.bind(var7)();
                            var0 = var4.done;
                            var10 = 1;
                            var16 = var4;
                            var15 = 0;
                            var14 = 0;
                            var13 = 0;
                            var5 = 0;
                            var4 = 0;
                            var6 = var18;
                            if (var0) {
                                _fun90694_ip = 291;
                                continue _fun90694
                            }
                        case 73:
                            var0 = var16.value;
                            var9 = var15 + var14;
                            var8 = var0.data;
                            var8 = var8.length;
                            var8 = var9 + var8;
                            var8 = var8 + var13;
                            var11 = var8 + var10;
                            var9 = var15;
                            var8 = var14;
                            var12 = var13;
                            if (!(!(var11 >= var1))) {
                                _fun90694_ip = 168;
                                continue _fun90694
                            }
                        case 117:
                            var15 = var9 + var10;
                            var11 = var0.data;
                            var11 = var11.length;
                            var14 = var8 + var11;
                            var13 = var12 + var10;
                            var21 = var17.bind(var7)();
                            var11 = var21.done;
                            var16 = var21;
                            var5 = var15;
                            var4 = var14;
                            var6 = var18;
                            if (var11) {
                                _fun90694_ip = 291;
                                continue _fun90694
                            }
                        case 166:
                            _fun90694_ip = 73;
                            continue _fun90694;
                        case 168:
                            var11 = var9 + var8;
                            var11 = var11 + var12;
                            if (!(var1 !== var11)) {
                                _fun90694_ip = 275;
                                continue _fun90694
                            }
                        case 180:
                            var13 = var9 + var8;
                            var11 = var0.data;
                            var11 = var11.length;
                            var11 = var13 + var11;
                            var11 = var11 + var12;
                            var11 = var11 + var10;
                            if (!(var1 !== var11)) {
                                _fun90694_ip = 245;
                                continue _fun90694
                            }
                        case 210:
                            var13 = var9 + var10;
                            var11 = var1 - var13;
                            var11 = var11 - var8;
                            var11 = var11 - var12;
                            var4 = var8 + var11;
                            var11 = _closure1_slot13;
                            var6 = var11.ROW;
                            var5 = var13;
                            _fun90694_ip = 291;
                            continue _fun90694;
                        case 245:
                            var5 = var9 + var10;
                            var0 = var0.data;
                            var0 = var0.length;
                            var4 = var8 + var0;
                            var0 = _closure1_slot13;
                            var6 = var0.FOOTER;
                            _fun90694_ip = 291;
                            continue _fun90694;
                        case 275:
                            var0 = _closure1_slot13;
                            var6 = var0.HEADER;
                            var5 = var9;
                            var4 = var8;
                        case 291:
                            var0 = _closure1_slot13;
                            var0 = var0.ROW;
                            if (!(var0 !== var6)) {
                                _fun90694_ip = 361;
                                continue _fun90694
                            }
                        case 305:
                            var0 = _closure1_slot13;
                            var0 = var0.HEADER;
                            if (!(var0 !== var6)) {
                                _fun90694_ip = 333;
                                continue _fun90694
                            }
                        case 319:
                            var0 = _closure1_slot13;
                            var0 = var0.FOOTER;
                            var3 = 0;
                            _fun90694_ip = 365;
                            continue _fun90694;
                        case 333:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var0 = 8;
                            var0 = var8[var0];
                            var0 = var6.bind(var7)(var0);
                            var3 = var0.APPLICATION_SECTION_HEADER_HEIGHT;
                            _fun90694_ip = 365;
                            continue _fun90694;
                        case 361:
                            var3 = _closure1_slot11;
                        case 365:
                            var0 = {};
                            var0.length = var3;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 8;
                            var3 = var8[var3];
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.APPLICATION_SECTION_HEADER_HEIGHT;
                            var3 = var5 * var3;
                            var2 = _closure1_slot11;
                            var2 = var4 * var2;
                            var2 = var3 + var2;
                            var0.offset = var2;
                            var0.index = var1;
                            return var0;
                        case 424:
                            var0 = {
                                'length': 0,
                                'offset': 0
                            };
                            var0.index = var1;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var9 = var21.bind(var5)(var9, var2);
                var2 = var5.useMemo;
                var21 = var1.guild_id;
                var1 = new Array(4);
                var1[0] = var21;
                var1[1] = var20;
                var1[2] = var6;
                var1[3] = var0;
                var0 = function() { // Environment: var10
                    var3 = _closure1_slot14;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot16;
                    var0.onPressSection = var5;
                    var5 = _closure2_slot9;
                    var0.sections = var5;
                    var5 = _closure2_slot5;
                    var0.selectedIndex = var5;
                    var4 = _closure2_slot2;
                    var4 = var4.guild_id;
                    var0.guildId = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var20 = var17.discoveryWrapper;
                var6 = new Array(2);
                var6[0] = var20;
                var6[1] = var7;
                var0.style = var6;
                var7 = _closure1_slot14;
                var6 = _closure1_slot7;
                var4 = {};
                var4.ref = var19;
                var4.sections = var18;
                var17 = var17.commandsList;
                var4.style = var17;
                var4.onScrollBeginDrag = var16;
                var4.onScrollEndDrag = var15;
                var4.onMomentumScrollEnd = var14;
                var14 = function(arg0) { // Original name: onScroll, environment: var10
                    _fun90696: for (var _fun90696_ip = 0;;) switch (_fun90696_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.nativeEvent;
                            var4 = var1.layoutMeasurement;
                            var3 = var1.contentSize;
                            var0 = var1.contentOffset;
                            var2 = var1.contentInset;
                            var5 = var0.y;
                            var6 = _closure2_slot18;
                            var0 = undefined;
                            var6 = var6.bind(var0)(var5);
                            var6 = _closure2_slot7;
                            var6 = var6.current;
                            if (var6) {
                                _fun90696_ip = 288;
                                continue _fun90696
                            }
                        case 67:
                            var6 = _closure2_slot10;
                            var6 = var6.length;
                            var12 = 0;
                            if (!(var6 > var12)) {
                                _fun90696_ip = 288;
                                continue _fun90696
                            }
                        case 85:
                            var6 = var2.top;
                            if (!(!(var5 < var6))) {
                                _fun90696_ip = 248;
                                continue _fun90696
                            }
                        case 97:
                            var7 = var3.height;
                            var6 = var4.height;
                            var6 = var7 - var6;
                            var2 = var2.bottom;
                            var2 = var6 - var2;
                            if (!(var5 > var2)) {
                                _fun90696_ip = 288;
                                continue _fun90696
                            }
                        case 127:
                            var2 = _closure2_slot4;
                            var7 = var2.current;
                            var2 = null;
                            if (!(var2 != var7)) {
                                _fun90696_ip = 288;
                                continue _fun90696
                            }
                        case 145:
                            var6 = var7.scrollToLocation;
                            var2 = {};
                            var8 = _closure2_slot10;
                            var9 = var8.length;
                            var8 = 1;
                            var9 = var9 - var8;
                            var2.sectionIndex = var9;
                            var9 = global;
                            var11 = var9.Math;
                            var10 = var11.max;
                            var13 = _closure2_slot11;
                            var9 = var13.length;
                            var9 = var9 - var8;
                            var9 = var13[var9];
                            var9 = var9.data;
                            var9 = var9.length;
                            var9 = var9 - var8;
                            var9 = var10.bind(var11)(var9, var12);
                            var2.itemIndex = var9;
                            var2.viewPosition = var8;
                            var8 = false;
                            var2.animated = var8;
                            var2 = var6.bind(var7)(var2);
                            _fun90696_ip = 288;
                            continue _fun90696;
                        case 248:
                            var2 = _closure2_slot4;
                            var7 = var2.current;
                            var2 = null;
                            if (!(var2 != var7)) {
                                _fun90696_ip = 288;
                                continue _fun90696
                            }
                        case 263:
                            var6 = var7.scrollToLocation;
                            var2 = {
                                'sectionIndex': 0,
                                'itemIndex': 0,
                                'viewPosition': 0,
                                'animated': false
                            };
                            var2 = var6.bind(var7)(var2);
                        case 288:
                            var2 = _closure2_slot12;
                            if (!var2) {
                                _fun90696_ip = 324;
                                continue _fun90696
                            }
                        case 295:
                            var4 = var4.height;
                            var4 = var5 + var4;
                            var5 = var3.height;
                            var3 = _closure1_slot17;
                            var3 = var5 - var3;
                            var2 = var4 >= var3;
                        case 324:
                            if (!var2) {
                                _fun90696_ip = 335;
                                continue _fun90696
                            }
                        case 327:
                            var1 = _closure2_slot14;
                            var1 = var1.bind(var0)();
                        case 335:
                            return var0;
                    }
                };
                var4.onScroll = var14;
                var14 = 16;
                var4.scrollEventThrottle = var14;
                var14 = function(arg0) { // Original name: keyExtractor, environment: var10
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var4.keyExtractor = var14;
                var11 = null;
                if (!var12) {
                    _fun90677_ip = 932;
                    continue _fun90677
                }
            case 922:
                var12 = {};
                var12.minIndexForVisible = var13;
                var11 = var12;
            case 932:
                var4.maintainVisibleContentPosition = var11;
                var11 = function(arg0) { // Original name: renderItem, environment: var10
                    _fun90698: for (var _fun90698_ip = 0;;) switch (_fun90698_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.item;
                            var _closure3_slot0 = var7;
                            var6 = var0.section;
                            var _closure3_slot1 = var6;
                            var3 = undefined;
                            var _closure3_slot2 = var3;
                            var2 = var7.inputType;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 20;
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ApplicationCommandInputType;
                            var1 = var1.PLACEHOLDER;
                            if (!(var2 !== var1)) {
                                _fun90698_ip = 193;
                                continue _fun90698
                            }
                        case 74:
                            var4 = _closure2_slot9;
                            var2 = var4.find;
                            var1 = function(arg0) { // Environment: var9
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.applicationId;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var8 = var2.bind(var4)(var1);
                            _closure3_slot2 = var8;
                            var4 = _closure1_slot14;
                            var2 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var1 = 22;
                            var1 = var10[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1.command = var7;
                            var9 = function() { // Original name: onPress, environment: var9
                                _fun90700: for (var _fun90700_ip = 0;;) switch (_fun90700_ip) {
                                    case 0:
                                        var2 = _closure2_slot0;
                                        var0 = null;
                                        var2 = var0 == var2;
                                        var5 = undefined;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun90700_ip = 51;
                                            continue _fun90700
                                        }
                                    case 20:
                                        var4 = _closure2_slot0;
                                        var3 = _closure3_slot0;
                                        var2 = _closure3_slot2;
                                        var1 = _closure3_slot1;
                                        var1 = var1.section;
                                        var0 = var4.bind(var5)(var3, var2, var1);
                                    case 51:
                                        return var0;
                                }
                            };
                            var1.onPress = var9;
                            var1.section = var8;
                            var7 = var7.applicationId;
                            var6 = var6.section;
                            var6 = var6.id;
                            var6 = var7 !== var6;
                            var1.showIcon = var6;
                            var5 = _closure2_slot2;
                            var5 = var5.guild_id;
                            var1.guildId = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        case 193:
                            var2 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 21;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var4.renderItem = var11;
                var10 = function(arg0) { // Original name: renderSectionHeader, environment: var10
                    _fun90701: for (var _fun90701_ip = 0;;) switch (_fun90701_ip) {
                        case 0:
                            var0 = arg0;
                            var14 = var0.section;
                            var3 = _closure1_slot16;
                            var2 = _closure1_slot15;
                            var1 = {};
                            var7 = _closure1_slot14;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 8;
                            var4 = var4[var0];
                            var0 = undefined;
                            var6 = var5.bind(var0)(var4);
                            var5 = {};
                            var4 = var14.section;
                            var5.section = var4;
                            var4 = _closure2_slot2;
                            var4 = var4.guild_id;
                            var5.guildId = var4;
                            var4 = var14.section;
                            var4 = var4.id;
                            var5 = var7.bind(var0)(var6, var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = var14.data;
                            var6 = var5.length;
                            var5 = 0;
                            var5 = var5 === var6;
                            if (!var5) {
                                _fun90701_ip = 291;
                                continue _fun90701
                            }
                        case 121:
                            var8 = _closure1_slot14;
                            var11 = _closure1_slot0;
                            var15 = _closure1_slot3;
                            var6 = 23;
                            var6 = var15[var6];
                            var6 = var11.bind(var0)(var6);
                            var7 = var6.ThemedEmptyState;
                            var6 = {};
                            var12 = _closure1_slot1;
                            var10 = 24;
                            var13 = var15[var10];
                            var13 = var12.bind(var0)(var13);
                            var6.lightSource = var13;
                            var10 = var15[var10];
                            var10 = var12.bind(var0)(var10);
                            var6.darkSource = var10;
                            var10 = 16;
                            var12 = var15[var10];
                            var12 = var11.bind(var0)(var12);
                            var13 = var12.intl;
                            var12 = var13.format;
                            var10 = var15[var10];
                            var10 = var11.bind(var0)(var10);
                            var10 = var10.t;
                            var11 = var10.WoQXT6;
                            var10 = {};
                            var14 = var14.section;
                            var14 = var14.name;
                            var10.applicationName = var14;
                            var10 = var12.bind(var13)(var11, var10);
                            var6.body = var10;
                            var9 = _closure2_slot3;
                            var10 = var9.noCommandsContainer;
                            var6.containerStyle = var10;
                            var9 = var9.noCommandsImage;
                            var6.imageStyle = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 291:
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var4.renderSectionHeader = var10;
                var4.getItemLayout = var9;
                var4.stickySectionHeadersEnabled = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4508, 11725, 9221, 660, 33, 11726, 1297, 671, 11727, 7561, 1636, 7562, 3119, 1234, 4265, 22, 11728, 4510, 11729, 11730, 8316, 9346, 2]);