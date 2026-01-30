// stores/web/WindowStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun94023: for (var _fun94023_ip = 0;;) switch (_fun94023_ip) {
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
            case 72: // try_end0
                _fun94023_ip = 76;
                continue _fun94023;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: getWindowIdState, environment: var3
        _fun94026: for (var _fun94026_ip = 0;;) switch (_fun94026_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.get;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun94026_ip = 59;
                    continue _fun94026
                }
            case 26:
                var1 = {
                    'isElementFullscreen': false,
                    'focused': false,
                    'windowSize': null,
                    'visible': false
                };
                var2 = {
                    'width': 0,
                    'height': 0
                };
                var1.windowSize = var2;
                var0 = var1;
            case 59:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = null;
    var _closure1_slot8 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: WindowStore, environment: var5
            _fun94028: for (var _fun94028_ip = 0;;) switch (_fun94028_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun94028_ip = 69;
                        continue _fun94028
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun94028_ip = 105;
                    continue _fun94028;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'isFocused';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun94029: for (var _fun94029_ip = 0;;) switch (_fun94029_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun94029_ip = 42;
                        continue _fun94029
                    }
                case 9:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 6;
                    var0 = var4[var0];
                    var3 = var3.bind(var1)(var0);
                    var0 = var3.getMainWindowId;
                    var2 = var0.bind(var3)();
                case 42:
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.focused;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'isAppFocused';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.getFocusedWindowId;
            var1 = var0.bind(var1)();
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isVisible';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun94031: for (var _fun94031_ip = 0;;) switch (_fun94031_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun94031_ip = 42;
                        continue _fun94031
                    }
                case 9:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 6;
                    var0 = var4[var0];
                    var3 = var3.bind(var1)(var0);
                    var0 = var3.getMainWindowId;
                    var2 = var0.bind(var3)();
                case 42:
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.visible;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getFocusedWindowId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = null;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot9;
            var2 = var3.forEach;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun94033: for (var _fun94033_ip = 0;;) switch (_fun94033_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.focused;
                        if (!var0) {
                            _fun94033_ip = 22;
                            continue _fun94033
                        }
                    case 12:
                        var0 = arg1;
                        _closure3_slot0 = var0;
                    case 22:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0 = _closure3_slot0;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getLastFocusedWindowId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isElementFullScreen';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun94035: for (var _fun94035_ip = 0;;) switch (_fun94035_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun94035_ip = 42;
                        continue _fun94035
                    }
                case 9:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 6;
                    var0 = var4[var0];
                    var3 = var3.bind(var1)(var0);
                    var0 = var3.getMainWindowId;
                    var2 = var0.bind(var3)();
                case 42:
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.isElementFullscreen;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'windowSize';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun94036: for (var _fun94036_ip = 0;;) switch (_fun94036_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun94036_ip = 42;
                        continue _fun94036
                    }
                case 9:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 6;
                    var0 = var4[var0];
                    var3 = var3.bind(var1)(var0);
                    var0 = var3.getMainWindowId;
                    var2 = var0.bind(var3)();
                case 42:
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.windowSize;
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'WindowStore';
    var8.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function(arg0) { // Original name: handleWindowInit, environment: var3
        _fun94037: for (var _fun94037_ip = 0;;) switch (_fun94037_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var6 = _closure1_slot9;
                var3 = var6.has;
                var2 = var0.windowId;
                var2 = var3.bind(var6)(var2);
                var3 = !var2;
                var2 = 'Window initialized multiple times';
                var2 = var4.bind(var5)(var3, var2);
                var11 = var0.width;
                var10 = var0.height;
                var8 = var0.isElementFullscreen;
                var2 = var0.focused;
                var7 = var0.visible;
                var6 = _closure1_slot9;
                var5 = var6.set;
                var4 = var0.windowId;
                var3 = {};
                var9 = {};
                var9.width = var11;
                var9.height = var10;
                var3.windowSize = var9;
                var3.isElementFullscreen = var8;
                var3.focused = var2;
                var3.visible = var7;
                var3 = var5.bind(var6)(var4, var3);
                if (!var2) {
                    _fun94037_ip = 157;
                    continue _fun94037
                }
            case 147:
                var0 = var0.windowId;
                _closure1_slot8 = var0;
            case 157:
                var0 = true;
                return var0;
        }
    };
    var1.WINDOW_INIT = var6;
    var6 = function(arg0) { // Original name: handleWindowFullscreenChange, environment: var3
        _fun94038: for (var _fun94038_ip = 0;;) switch (_fun94038_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot11;
                var2 = var5.windowId;
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var2 = var6.isElementFullscreen;
                var0 = var5.isElementFullscreen;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun94038_ip = 92;
                    continue _fun94038
                }
            case 42:
                var4 = _closure1_slot9;
                var3 = var4.set;
                var2 = var5.windowId;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = var5.isElementFullscreen;
                var5 = 'isElementFullscreen';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                var0 = true;
            case 92:
                return var0;
        }
    };
    var1.WINDOW_FULLSCREEN_CHANGE = var6;
    var6 = function(arg0) { // Original name: handleWindowFocus, environment: var3
        _fun94039: for (var _fun94039_ip = 0;;) switch (_fun94039_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot11;
                var2 = var5.windowId;
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var2 = var6.focused;
                var0 = var5.focused;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun94039_ip = 111;
                    continue _fun94039
                }
            case 42:
                var2 = var5.focused;
                if (!var2) {
                    _fun94039_ip = 61;
                    continue _fun94039
                }
            case 51:
                var2 = var5.windowId;
                _closure1_slot8 = var2;
            case 61:
                var4 = _closure1_slot9;
                var3 = var4.set;
                var2 = var5.windowId;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = var5.focused;
                var5 = 'focused';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                var0 = true;
            case 111:
                return var0;
        }
    };
    var1.WINDOW_FOCUS = var6;
    var6 = function(arg0) { // Original name: handleWindowResize, environment: var3
        _fun94040: for (var _fun94040_ip = 0;;) switch (_fun94040_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot11;
                var2 = var5.windowId;
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var0 = var6.windowSize;
                var2 = var0.width;
                var0 = var5.width;
                var0 = var2 !== var0;
                if (var0) {
                    _fun94040_ip = 66;
                    continue _fun94040
                }
            case 46:
                var2 = var6.windowSize;
                var3 = var2.height;
                var2 = var5.height;
                var0 = var3 !== var2;
            case 66:
                if (!var0) {
                    _fun94040_ip = 133;
                    continue _fun94040
                }
            case 69:
                var4 = _closure1_slot9;
                var3 = var4.set;
                var2 = var5.windowId;
                var1 = {};
                var9 = var1;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var6 = {};
                var7 = var5.width;
                var6.width = var7;
                var5 = var5.height;
                var6.height = var5;
                var5 = 'windowSize';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                var0 = true;
            case 133:
                return var0;
        }
    };
    var1.WINDOW_RESIZED = var6;
    var6 = function(arg0) { // Original name: handleWindowUnload, environment: var3
        _fun94041: for (var _fun94041_ip = 0;;) switch (_fun94041_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot9;
                var3 = var4.delete;
                var2 = var0.windowId;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot8;
                var0 = var0.windowId;
                if (!(var2 === var0)) {
                    _fun94041_ip = 46;
                    continue _fun94041
                }
            case 40:
                var0 = null;
                _closure1_slot8 = var0;
            case 46:
                var0 = true;
                return var0;
        }
    };
    var1.WINDOW_UNLOAD = var6;
    var6 = function(arg0) { // Original name: handleWindowVisibilityChange, environment: var3
        _fun94042: for (var _fun94042_ip = 0;;) switch (_fun94042_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot11;
                var2 = var5.windowId;
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var2 = var6.visible;
                var0 = var5.visible;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun94042_ip = 92;
                    continue _fun94042
                }
            case 42:
                var4 = _closure1_slot9;
                var3 = var4.set;
                var2 = var5.windowId;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = var5.visible;
                var5 = 'visible';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                var0 = true;
            case 92:
                return var0;
        }
    };
    var1.WINDOW_VISIBILITY_CHANGE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var13 = var6;
    var11 = var1;
    var1 = new var13[var8](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var6 = 10;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var6 = 9;
    var7 = var5[var6];
    var6 = var5.paths;
    var7 = var8.bind(var0)(var7, var6);
    var6 = var7.then;
    var3 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.addExtraAnalyticsDecorator;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/web/WindowStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 44, 7397, 566, 806, 795, 1307, 2]);