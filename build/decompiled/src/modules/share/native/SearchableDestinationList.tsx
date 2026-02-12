// modules/share/native/SearchableDestinationList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var7 = var5[var13];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.Keyboard;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var9 = var3.Fragment;
    var _closure1_slot9 = var9;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 6;
    var14 = var5[var12];
    var14 = var6.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11.paddingHorizontal = var14;
    var14 = var5[var12];
    var14 = var6.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11.paddingBottom = var14;
    var14 = var5[var12];
    var14 = var6.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var14;
    var3.searchBarContainer = var11;
    var11 = {};
    var11.flex = var13;
    var12 = var5[var12];
    var12 = var6.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var12;
    var3.noResults = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3.absolute = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/SearchableDestinationList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92315: for (var _fun92315_ip = 0;;) switch (_fun92315_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.initialSelectedDestinations;
                var14 = var1.disabledDestinations;
                var _closure2_slot0 = var14;
                var27 = var1.originDestination;
                var26 = var1.getRowIsUnavailable;
                var _closure2_slot1 = var26;
                var18 = var1.onSelectedDestinationChange;
                var _closure2_slot2 = var18;
                var21 = var1.onSearchTextChange;
                var _closure2_slot3 = var21;
                var22 = var1.rowMode;
                var3 = undefined;
                if (!(var22 === var3)) {
                    _fun92315_ip = 84;
                    continue _fun92315
                }
            case 71:
                var2 = _closure1_slot7;
                var22 = var2.NONE;
            case 84:
                var _closure2_slot4 = var22;
                var17 = var1.insetStart;
                if (!(var17 === var3)) {
                    _fun92315_ip = 132;
                    continue _fun92315
                }
            case 98:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.spacing;
                var17 = var2.PX_8;
            case 132:
                var11 = var1.insetEnd;
                if (!(var11 === var3)) {
                    _fun92315_ip = 176;
                    continue _fun92315
                }
            case 142:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.spacing;
                var11 = var2.PX_12;
            case 176:
                var13 = var1.autoFocusSearch;
                if (!(var13 === var3)) {
                    _fun92315_ip = 188;
                    continue _fun92315
                }
            case 186:
                var13 = false;
            case 188:
                var8 = var1.hideSearchOnDefaultNoResults;
                if (!(var8 === var3)) {
                    _fun92315_ip = 200;
                    continue _fun92315
                }
            case 198:
                var8 = false;
            case 200:
                var5 = var1.defaultNoResultsFound;
                var4 = var1.disableGradient;
                var9 = var1.disableStickySections;
                var23 = var1.disableSelection;
                var _closure2_slot5 = var23;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
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
                var1 = _closure1_slot11;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var6 = null;
                var16 = var1.bind(var2)(var6);
                _closure2_slot6 = var16;
                var1 = var2.useState;
                if (!(var6 == var7)) {
                    _fun92315_ip = 332;
                    continue _fun92315
                }
            case 328:
                var7 = new Array(0);
            case 332:
                var1 = var1.bind(var2)(var7);
                var25 = _closure1_slot3;
                var24 = 2;
                var2 = var25.bind(var3)(var1, var24);
                var7 = 0;
                var1 = var2[var7];
                _closure2_slot7 = var1;
                var20 = 1;
                var2 = var2[var20];
                _closure2_slot8 = var2;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = 8;
                var2 = var19[var2];
                var19 = var15.bind(var3)(var2);
                var15 = var19.useShareSearchResults;
                var2 = {};
                var2.selectedDestinations = var1;
                var2.originDestination = var27;
                var27 = true;
                var2.includeMissingDMs = var27;
                var2 = var15.bind(var19)(var2);
                var27 = var2.results;
                _closure2_slot9 = var27;
                var15 = var2.updateSearchText;
                _closure2_slot10 = var15;
                var2 = _closure1_slot4;
                var28 = var2.useRef;
                var19 = '';
                var19 = var28.bind(var2)(var19);
                _closure2_slot11 = var19;
                var28 = var2.useState;
                var19 = false;
                var19 = var28.bind(var2)(var19);
                var19 = var25.bind(var3)(var19, var24);
                var7 = var19[var7];
                var19 = var19[var20];
                _closure2_slot12 = var19;
                var19 = var2.useRef;
                var19 = var19.bind(var2)(var6);
                _closure2_slot13 = var19;
                var24 = var2.useEffect;
                var20 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun92317: for (var _fun92317_ip = 0;;) switch (_fun92317_ip) {
                            case 0:
                                var0 = _closure2_slot13;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun92317_ip = 28;
                                    continue _fun92317
                                }
                            case 18:
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var19 = new Array(0);
                var19 = var24.bind(var2)(var20, var19);
                var20 = var2.useCallback;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var15;
                var15 = function(arg0) { // Environment: var0
                    _fun92318: for (var _fun92318_ip = 0;;) switch (_fun92318_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = arguments[1];
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun92318_ip = 14;
                                continue _fun92318
                            }
                        case 12:
                            var2 = false;
                        case 14:
                            var3 = _closure2_slot11;
                            var3 = var3.current;
                            if (!(var4 !== var3)) {
                                _fun92318_ip = 183;
                                continue _fun92318
                            }
                        case 33:
                            var3 = _closure2_slot11;
                            var3.current = var4;
                            if (!var2) {
                                _fun92318_ip = 72;
                                continue _fun92318
                            }
                        case 46:
                            var2 = _closure2_slot6;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92318_ip = 72;
                                continue _fun92318
                            }
                        case 61:
                            var2 = var3.setText;
                            var2 = var2.bind(var3)(var4);
                        case 72:
                            var2 = _closure2_slot10;
                            var2 = var2.bind(var0)(var4);
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92318_ip = 100;
                                continue _fun92318
                            }
                        case 91:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)(var4);
                        case 100:
                            var3 = _closure2_slot12;
                            var2 = var4.trim;
                            var2 = var2.bind(var4)();
                            var4 = var2.length;
                            var2 = 0;
                            var2 = var4 > var2;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot13;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var1 = var4[var1];
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.runAfterInteractions;
                            var1 = function() { // Environment: var1
                                _fun92319: for (var _fun92319_ip = 0;;) switch (_fun92319_ip) {
                                    case 0:
                                        var0 = _closure2_slot20;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun92319_ip = 31;
                                            continue _fun92319
                                        }
                                    case 18:
                                        var1 = var2.scrollToTop;
                                        var0 = false;
                                        var0 = var1.bind(var2)(var0);
                                    case 31:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            var2.current = var1;
                        case 183:
                            return var0;
                    }
                };
                var15 = var20.bind(var2)(var15, var19);
                _closure2_slot14 = var15;
                var20 = var2.useEffect;
                var19 = new Array(3);
                var19[0] = var1;
                var19[1] = var18;
                var19[2] = var15;
                var18 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = function() { // Environment: var1
                        var1 = _closure1_slot6;
                        var0 = var1.dismiss;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var3 = 0;
                    var3 = var5.bind(var0)(var4, var3);
                    var3 = var2.setTimeout;
                    var2 = function() { // Environment: var1
                        var3 = _closure2_slot14;
                        var0 = undefined;
                        var2 = '';
                        var1 = true;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = 50;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var18 = var20.bind(var2)(var18, var19);
                var20 = var2.useMemo;
                var18 = var27.length;
                var19 = new Array(1);
                var19[0] = var18;
                var18 = function() { // Environment: var0
                    var0 = _closure2_slot9;
                    var1 = var0.length;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var20 = var20.bind(var2)(var18, var19);
                var21 = var2.useCallback;
                var19 = function() { // Environment: var0
                    var0 = {};
                    var1 = 'section';
                    var0.type = var1;
                    var1 = {};
                    var2 = true;
                    var1.hideTitle = var2;
                    var0.props = var1;
                    return var0;
                };
                var18 = new Array(0);
                var18 = var21.bind(var2)(var19, var18);
                var21 = var2.useMemo;
                var19 = new Array(1);
                var19[0] = var14;
                var14 = function() { // Environment: var0
                    _fun92325: for (var _fun92325_ip = 0;;) switch (_fun92325_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var0;
                            var6 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun92325_ip = 63;
                                continue _fun92325
                            }
                        case 20:
                            var4 = _closure2_slot0;
                            var3 = var4.map;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 10;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.destinationKey;
                            var0 = var3.bind(var4)(var2);
                        case 63:
                            if (!(var1 == var0)) {
                                _fun92325_ip = 71;
                                continue _fun92325
                            }
                        case 67:
                            var0 = new Array(0);
                        case 71:
                            return var0;
                    }
                };
                var24 = var21.bind(var2)(var14, var19);
                _closure2_slot15 = var24;
                var19 = var2.useMemo;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() { // Environment: var0
                    _fun92326: for (var _fun92326_ip = 0;;) switch (_fun92326_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var1 = null;
                            var3 = var1 == var0;
                            var6 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun92326_ip = 63;
                                continue _fun92326
                            }
                        case 20:
                            var4 = _closure2_slot7;
                            var3 = var4.map;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 10;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.destinationKey;
                            var0 = var3.bind(var4)(var2);
                        case 63:
                            if (!(var1 == var0)) {
                                _fun92326_ip = 71;
                                continue _fun92326
                            }
                        case 67:
                            var0 = new Array(0);
                        case 71:
                            return var0;
                    }
                };
                var25 = var19.bind(var2)(var1, var14);
                _closure2_slot16 = var25;
                var19 = var2.useCallback;
                var14 = new Array(1);
                var14[0] = var23;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun92328: for (var _fun92328_ip = 0;;) switch (_fun92328_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.findIndex;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure3_slot0;
                                    var0 = var0.id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var4 = var2.bind(var0)(var1);
                                var1 = -1;
                                if (!(var1 !== var4)) {
                                    _fun92328_ip = 66;
                                    continue _fun92328
                                }
                            case 33:
                                var1 = new Array(0);
                                var5 = 0;
                                var7 = var1;
                                var6 = var0;
                                var2 = arraySpread(var7, var6, var5);
                                var3 = var1.splice;
                                var2 = 1;
                                var2 = var3.bind(var1)(var4, var2);
                                _fun92328_ip = 107;
                                continue _fun92328;
                            case 66:
                                var2 = _closure2_slot5;
                                if (var2) {
                                    _fun92328_ip = 109;
                                    continue _fun92328
                                }
                            case 76:
                                var3 = _closure3_slot0;
                                var2 = new Array(1);
                                var2[0] = var3;
                                var5 = 1;
                                var7 = var2;
                                var6 = var0;
                                var3 = arraySpread(var7, var6, var5);
                                var1 = var2;
                            case 107:
                                return var1;
                            case 109:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var19.bind(var2)(var1, var14);
                _closure2_slot17 = var1;
                var21 = var2.useCallback;
                var19 = new Array(1);
                var19[0] = var1;
                var14 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot17;
                    var1 = {};
                    var0 = 'user';
                    var1.type = var0;
                    var0 = arg0;
                    var0 = var0.id;
                    var1.id = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var21 = var21.bind(var2)(var14, var19);
                _closure2_slot18 = var21;
                var19 = var2.useCallback;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot17;
                    var1 = {};
                    var0 = 'channel';
                    var1.type = var0;
                    var0 = arg0;
                    var0 = var0.id;
                    var1.id = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var19.bind(var2)(var1, var14);
                _closure2_slot19 = var1;
                var19 = var2.useCallback;
                var14 = new Array(8);
                var14[0] = var27;
                var14[1] = var26;
                var14[2] = var25;
                var14[3] = var24;
                var14[4] = var23;
                var14[5] = var22;
                var14[6] = var21;
                var14[7] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun92332: for (var _fun92332_ip = 0;;) switch (_fun92332_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = _closure2_slot9;
                            var0 = var0[var1];
                            var2 = var0.type;
                            var4 = var0.record;
                            var0 = _closure2_slot9;
                            var5 = var0.length;
                            var0 = 1;
                            var0 = var5 - var0;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 11;
                            var8 = var7[var6];
                            var7 = undefined;
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.AutocompleterResultTypes;
                            var8 = var8.HEADER;
                            if (!(var2 === var8)) {
                                _fun92332_ip = 84;
                                continue _fun92332
                            }
                        case 82:
                            return var7;
                        case 84:
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var6];
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.AutocompleterResultTypes;
                            var8 = var8.USER;
                            if (!(var2 !== var8)) {
                                _fun92332_ip = 169;
                                continue _fun92332
                            }
                        case 117:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 10;
                            var8 = var10[var8];
                            var10 = var9.bind(var7)(var8);
                            var9 = var10.destinationKey;
                            var8 = {};
                            var11 = 'channel';
                            var8.type = var11;
                            var11 = var4.id;
                            var8.id = var11;
                            var13 = var9.bind(var10)(var8);
                            _fun92332_ip = 219;
                            continue _fun92332;
                        case 169:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 10;
                            var8 = var10[var8];
                            var10 = var9.bind(var7)(var8);
                            var9 = var10.destinationKey;
                            var8 = {};
                            var11 = 'user';
                            var8.type = var11;
                            var11 = var4.id;
                            var8.id = var11;
                            var13 = var9.bind(var10)(var8);
                        case 219:
                            var8 = _closure2_slot1;
                            var9 = null;
                            var8 = var9 == var8;
                            var10 = undefined;
                            if (var8) {
                                _fun92332_ip = 243;
                                continue _fun92332
                            }
                        case 234:
                            var8 = _closure2_slot1;
                            var10 = var8.bind(var7)(var4);
                        case 243:
                            var11 = _closure2_slot16;
                            var8 = var11.includes;
                            var11 = var8.bind(var11)(var13);
                            var12 = _closure2_slot15;
                            var8 = var12.includes;
                            var13 = var8.bind(var12)(var13);
                            var8 = {};
                            var12 = _closure2_slot5;
                            if (!var12) {
                                _fun92332_ip = 283;
                                continue _fun92332
                            }
                        case 280:
                            var12 = !var11;
                        case 283:
                            if (var12) {
                                _fun92332_ip = 289;
                                continue _fun92332
                            }
                        case 286:
                            var12 = var13;
                        case 289:
                            if (var12) {
                                _fun92332_ip = 296;
                                continue _fun92332
                            }
                        case 292:
                            var12 = var9 != var10;
                        case 296:
                            var8.disabled = var12;
                            var8.selected = var11;
                            if (!(var9 == var10)) {
                                _fun92332_ip = 315;
                                continue _fun92332
                            }
                        case 309:
                            var11 = _closure2_slot4;
                            _fun92332_ip = 325;
                            continue _fun92332;
                        case 315:
                            var12 = _closure1_slot7;
                            var11 = var12.NONE;
                        case 325:
                            var8.mode = var11;
                            var11 = var9 != var10;
                            var9 = undefined;
                            if (!var11) {
                                _fun92332_ip = 343;
                                continue _fun92332
                            }
                        case 338:
                            var9 = var10.label;
                        case 343:
                            var8.subLabel = var9;
                            var9 = 0;
                            var9 = var9 === var1;
                            var8.start = var9;
                            var0 = var1 === var0;
                            var8.end = var0;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.AutocompleterResultTypes;
                            var0 = var0.USER;
                            if (!(var2 !== var0)) {
                                _fun92332_ip = 643;
                                continue _fun92332
                            }
                        case 402:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.AutocompleterResultTypes;
                            var0 = var0.GROUP_DM;
                            if (!(var2 !== var0)) {
                                _fun92332_ip = 588;
                                continue _fun92332
                            }
                        case 438:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.AutocompleterResultTypes;
                            var0 = var0.TEXT_CHANNEL;
                            if (!(var2 !== var0)) {
                                _fun92332_ip = 539;
                                continue _fun92332
                            }
                        case 471:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var1.bind(var7)(var0);
                            var0 = var0.AutocompleterResultTypes;
                            var0 = var0.VOICE_CHANNEL;
                            if (!(var2 !== var0)) {
                                _fun92332_ip = 539;
                                continue _fun92332
                            }
                        case 504:
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 13;
                            var0 = var6[var0];
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.assertNever;
                            var0 = var0.bind(var1)(var2);
                            var0 = undefined;
                            _fun92332_ip = 586;
                            continue _fun92332;
                        case 539:
                            var1 = {};
                            var6 = 'channel';
                            var1.type = var6;
                            var2 = {};
                            var16 = var2;
                            var15 = var8;
                            var9 = copyDataProperties(var16, var15);
                            var2[var6] = var4;
                            var9 = _closure2_slot19;
                            var6 = 'onPress';
                            var2[var6] = var9;
                            var1.props = var2;
                            var0 = var1;
                        case 586:
                            _fun92332_ip = 641;
                            continue _fun92332;
                        case 588:
                            var1 = {};
                            var2 = 'gdm';
                            var1.type = var2;
                            var2 = {};
                            var16 = var2;
                            var15 = var8;
                            var6 = copyDataProperties(var16, var15);
                            var6 = 'channel';
                            var2[var6] = var4;
                            var9 = _closure2_slot19;
                            var6 = 'onPress';
                            var2[var6] = var9;
                            var1.props = var2;
                            var0 = var1;
                        case 641:
                            _fun92332_ip = 735;
                            continue _fun92332;
                        case 643:
                            var1 = {};
                            var6 = 'user';
                            var1.type = var6;
                            var2 = {};
                            var16 = var2;
                            var15 = var8;
                            var8 = copyDataProperties(var16, var15);
                            var2[var6] = var4;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 12;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.getRelationshipType;
                            var4 = var4.id;
                            var5 = var5.bind(var6)(var4);
                            var4 = 'type';
                            var2[var4] = var5;
                            var4 = _closure2_slot18;
                            var3 = 'onPress';
                            var2[var3] = var4;
                            var1.props = var2;
                            var0 = var1;
                        case 735:
                            return var0;
                    }
                };
                var19 = var19.bind(var2)(var1, var14);
                var1 = var2.useRef;
                var21 = var1.bind(var2)(var6);
                _closure2_slot20 = var21;
                var1 = var20.some;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var14 = var1.bind(var20)(var0);
                var2 = _closure1_slot8;
                if (var14) {
                    _fun92315_ip = 1047;
                    continue _fun92315
                }
            case 896:
                var1 = _closure1_slot5;
                if (var7) {
                    _fun92315_ip = 933;
                    continue _fun92315
                }
            case 903:
                if (!(var6 != var5)) {
                    _fun92315_ip = 933;
                    continue _fun92315
                }
            case 907:
                var0 = {};
                var23 = var10.noResults;
                var22 = new Array(1);
                var22[0] = var23;
                var0.style = var22;
                var0.children = var5;
                _fun92315_ip = 1039;
                continue _fun92315;
            case 933:
                var5 = {};
                var22 = var10.noResults;
                var5.style = var22;
                var24 = _closure1_slot8;
                var23 = _closure1_slot1;
                var29 = _closure1_slot2;
                var22 = 15;
                var22 = var29[var22];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var28 = _closure1_slot0;
                var25 = 16;
                var26 = var29[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.V6nAfF;
                var25 = var26.bind(var27)(var25);
                var22.title = var25;
                var22 = var24.bind(var3)(var23, var22);
                var5.children = var22;
                var0 = var5;
            case 1039:
                var5 = var2.bind(var3)(var1, var0);
                _fun92315_ip = 1115;
                continue _fun92315;
            case 1047:
                var1 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 14;
                var0 = var22[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UsersFastList;
                var0 = {};
                var0.ref = var21;
                var0.sections = var20;
                var0.getItemProps = var19;
                var0.getSectionProps = var18;
                var0.insetStart = var17;
                var0.insetEnd = var11;
                var0.disableStickySections = var9;
                var5 = var2.bind(var3)(var1, var0);
            case 1115:
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var9 = !var4;
                if (!var9) {
                    _fun92315_ip = 1135;
                    continue _fun92315
                }
            case 1131:
                var9 = _closure1_slot12;
            case 1135:
                var4 = new Array(3);
                var4[0] = var9;
                if (!var8) {
                    _fun92315_ip = 1157;
                    continue _fun92315
                }
            case 1146:
                if (var14) {
                    _fun92315_ip = 1157;
                    continue _fun92315
                }
            case 1149:
                var6 = null;
                if (!var7) {
                    _fun92315_ip = 1308;
                    continue _fun92315
                }
            case 1157:
                var9 = _closure1_slot8;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var10.searchBarContainer;
                var7.style = var10;
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 17;
                var10 = var17[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.SearchField;
                var10 = {};
                var10.ref = var16;
                var16 = 'md';
                var10.size = var16;
                var10.onChange = var15;
                if (!var13) {
                    _fun92315_ip = 1228;
                    continue _fun92315
                }
            case 1225:
                var13 = var14;
            case 1228:
                var10.autoFocus = var13;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 16;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.CaEER6;
                var12 = var13.bind(var14)(var12);
                var10.accessibilityLabel = var12;
                var10 = var9.bind(var3)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 1308:
                var4[1] = var6;
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7689, 33, 1297, 671, 7690, 11979, 5929, 6716, 6718, 8903, 1304, 8909, 11671, 1234, 7107, 2]);