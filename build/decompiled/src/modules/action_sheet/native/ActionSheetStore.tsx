// modules/action_sheet/native/ActionSheetStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun27000: for (var _fun27000_ip = 0;;) switch (_fun27000_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun27000_ip = 74;
                continue _fun27000;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var1 = var1.Array;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot5 = var1;
    var1 = function(arg0) { // Original name: setContent, environment: var3
        _fun27003: for (var _fun27003_ip = 0;;) switch (_fun27003_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.content;
                var6 = var0.key;
                var3 = var0.impressionName;
                var2 = var0.impressionProperties;
                var1 = var0.backdropKind;
                var5 = var0.stackingBehavior;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun27003_ip = 49;
                    continue _fun27003
                }
            case 43:
                var5 = 'replaceTopSheet';
            case 49:
                var4 = {};
                var4.content = var7;
                var4.key = var6;
                var4.impressionName = var3;
                var4.impressionProperties = var2;
                var4.backdropKind = var1;
                var1 = _closure1_slot5;
                var3 = var1.length;
                var1 = 3;
                var1 = var3 < var1;
                var3 = 'replaceAll';
                if (!(var3 !== var5)) {
                    _fun27003_ip = 181;
                    continue _fun27003
                }
            case 101:
                var3 = 'stack';
                if (!(var3 === var5)) {
                    _fun27003_ip = 112;
                    continue _fun27003
                }
            case 109:
                if (var1) {
                    _fun27003_ip = 147;
                    continue _fun27003
                }
            case 112:
                var6 = _closure1_slot5;
                var5 = var6.slice;
                var3 = 0;
                var1 = -1;
                var3 = var5.bind(var6)(var3, var1);
                var1 = var3.concat;
                var1 = var1.bind(var3)(var4);
                _fun27003_ip = 179;
                continue _fun27003;
            case 147:
                var9 = _closure1_slot5;
                var3 = new Array(1);
                var8 = 0;
                var10 = var3;
                var6 = arraySpread(var10, var9, var8);
                var3[var6] = var4;
                var5 = 1;
                var5 = var6 + var5;
                var1 = var3;
            case 179:
                _fun27003_ip = 192;
                continue _fun27003;
            case 181:
                var3 = new Array(1);
                var3[0] = var4;
                var1 = var3;
            case 192:
                _closure1_slot5 = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function(arg0) { // Original name: clearContent, environment: var3
        _fun27004: for (var _fun27004_ip = 0;;) switch (_fun27004_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun27004_ip = 45;
                    continue _fun27004
                }
            case 15:
                var5 = _closure1_slot5;
                var4 = var5.slice;
                var3 = 0;
                var1 = -1;
                var1 = var4.bind(var5)(var3, var1);
                _closure1_slot5 = var1;
            case 45:
                var3 = _closure1_slot5;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _closure1_slot5 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: ActionSheetStore, environment: var5
            _fun27007: for (var _fun27007_ip = 0;;) switch (_fun27007_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun27007_ip = 86;
                        continue _fun27007
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun27007_ip = 120;
                    continue _fun27007;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = function() { // Environment: var1
                        _fun27008: for (var _fun27008_ip = 0;;) switch (_fun27008_ip) {
                            case 0:
                                var2 = _closure1_slot5;
                                var1 = var2.at;
                                var0 = -1;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun27008_ip = 40;
                                    continue _fun27008
                                }
                            case 35:
                                var0 = var1.content;
                            case 40:
                                return var0;
                        }
                    };
                    var0.getContent = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot5;
                        return var0;
                    };
                    var0.getStack = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure1_slot5;
                        var1 = var0.length;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var0.isOpen = var2;
                    var1 = function() { // Environment: var1
                        _fun27011: for (var _fun27011_ip = 0;;) switch (_fun27011_ip) {
                            case 0:
                                var2 = _closure1_slot5;
                                var1 = var2.at;
                                var0 = -1;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun27011_ip = 40;
                                    continue _fun27011
                                }
                            case 35:
                                var0 = var1.key;
                            case 40:
                                return var0;
                        }
                    };
                    var0.getKey = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'impressionName';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27013: for (var _fun27013_ip = 0;;) switch (_fun27013_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.at;
                    var0 = -1;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun27013_ip = 41;
                        continue _fun27013
                    }
                case 35:
                    var0 = var1.impressionName;
                case 41:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'impressionProperties';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun27014: for (var _fun27014_ip = 0;;) switch (_fun27014_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.at;
                    var0 = -1;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun27014_ip = 41;
                        continue _fun27014
                    }
                case 35:
                    var0 = var1.impressionProperties;
                case 41:
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'backdropKind';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            _fun27015: for (var _fun27015_ip = 0;;) switch (_fun27015_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.at;
                    var0 = -1;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun27015_ip = 41;
                        continue _fun27015
                    }
                case 35:
                    var0 = var1.backdropKind;
                case 41:
                    return var0;
            }
        };
        var4.get = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ActionSheetStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleShowActionSheet, environment: var3
        var2 = _closure1_slot6;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.SHOW_ACTION_SHEET = var7;
    var7 = function(arg0) { // Original name: handleShowActionSheetQuickSwitcher, environment: var3
        var2 = _closure1_slot6;
        var1 = {};
        var0 = 'QuickSwitcher';
        var1.key = var0;
        var3 = arg0;
        var4 = var1;
        var0 = copyDataProperties(var4, var3);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.SHOW_ACTION_SHEET_QUICK_SWITCHER = var7;
    var7 = function(arg0) { // Original name: handleHideActionSheet, environment: var3
        var0 = arg0;
        var2 = var0.key;
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.HIDE_ACTION_SHEET = var7;
    var7 = function() { // Original name: handleHideAllActionSheets, environment: var3
        var0 = new Array(0);
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var1.HIDE_ALL_ACTION_SHEETS = var7;
    var3 = function() { // Original name: handleHideActionSheetQuickSwitcher, environment: var3
        var2 = _closure1_slot7;
        var0 = undefined;
        var1 = 'QuickSwitcher';
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.HIDE_ACTION_SHEET_QUICK_SWITCHER = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/ActionSheetStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);