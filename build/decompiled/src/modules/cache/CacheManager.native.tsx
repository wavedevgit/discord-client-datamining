// modules/cache/CacheManager.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun112707: for (var _fun112707_ip = 0;;) switch (_fun112707_ip) {
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
                _fun112707_ip = 76;
                continue _fun112707;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'CacheStore';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var7 = var3.MINUTE;
    var3 = 15;
    var3 = var3 * var7;
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun112711: for (var _fun112711_ip = 0;;) switch (_fun112711_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun112711_ip = 86;
                        continue _fun112711
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun112711_ip = 120;
                    continue _fun112711;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var3 = var0.handleConnectionOpen;
                    var1.POST_CONNECTION_OPEN = var3;
                    var3 = var0.handleConnectionClose;
                    var1.CONNECTION_CLOSED = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAppStateUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.APP_STATE_UPDATE = var3;
                    var2 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleWindowFocus;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.WINDOW_FOCUS = var2;
                    var0.actions = var1;
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
        var0 = 'handleConnectionOpen';
        var4.key = var0;
        var0 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.doesDatabaseVersionMatchJsConstants;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var1
                _fun112715: for (var _fun112715_ip = 0;;) switch (_fun112715_ip) {
                    case 0:
                        var0 = arg0;
                        if (var0) {
                            _fun112715_ip = 41;
                            continue _fun112715
                        }
                    case 6:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.writeCaches;
                        var0 = var0.bind(var1)();
                    case 41:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleConnectionClose';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleAppStateUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun112717: for (var _fun112717_ip = 0;;) switch (_fun112717_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.state;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.isAndroid;
                    var1 = var1.bind(var4)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.AppStates;
                    if (var1) {
                        _fun112717_ip = 80;
                        continue _fun112717
                    }
                case 72:
                    var1 = var4.INACTIVE;
                    _fun112717_ip = 86;
                    continue _fun112717;
                case 80:
                    var1 = var4.BACKGROUND;
                case 86:
                    var1 = var1 === var3;
                    if (!var1) {
                        _fun112717_ip = 107;
                        continue _fun112717
                    }
                case 93:
                    var4 = _closure1_slot8;
                    var3 = var4.isConnected;
                    var1 = var3.bind(var4)();
                case 107:
                    if (!var1) {
                        _fun112717_ip = 140;
                        continue _fun112717
                    }
                case 110:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var0 = var3[var0];
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.writeCaches;
                    var0 = var0.bind(var1)();
                case 140:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleWindowFocus';
        var4.key = var6;
        var5 = function arg0() {
            _fun112718: for (var _fun112718_ip = 0;;) switch (_fun112718_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.focused;
                    if (var0) {
                        _fun112718_ip = 132;
                        continue _fun112718
                    }
                case 12:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var2 = var0.bind(var1)();
                    var1 = _closure1_slot9;
                    var1 = var1.lastWriteTime;
                    var2 = var2 - var1;
                    var1 = _closure1_slot11;
                    if (!(!(var2 > var1))) {
                        _fun112718_ip = 79;
                        continue _fun112718
                    }
                case 56:
                    var3 = _closure1_slot10;
                    var2 = var3.verbose;
                    var1 = 'Not writing cache from window unfocus';
                    var1 = var2.bind(var3)(var1);
                    _fun112718_ip = 132;
                    continue _fun112718;
                case 79:
                    var3 = _closure1_slot10;
                    var2 = var3.verbose;
                    var1 = 'Writing cache from window unfocus';
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.writeCaches;
                    var0 = var0.bind(var1)();
                case 132:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/cache/CacheManager.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3465, 4361, 3, 667, 12200, 11086, 478, 670, 4295, 2]);