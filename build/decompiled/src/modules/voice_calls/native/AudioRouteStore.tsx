// modules/voice_calls/native/AudioRouteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun66449: for (var _fun66449_ip = 0;;) switch (_fun66449_ip) {
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
                _fun66449_ip = 76;
                continue _fun66449;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun66452: for (var _fun66452_ip = 0;;) switch (_fun66452_ip) {
            case 0:
                var5 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun66452_ip = 19;
                    continue _fun66452
                }
            case 12:
                var2 = _closure1_slot12;
            case 19:
                var1 = null;
                if (!(var1 != var5)) {
                    _fun66452_ip = 137;
                    continue _fun66452
                }
            case 25:
                var1 = '';
                if (!(var1 !== var5)) {
                    _fun66452_ip = 137;
                    continue _fun66452
                }
            case 33:
                var3 = var5.includes;
                var1 = 'Bluetooth';
                var3 = var3.bind(var5)(var1);
                if (var3) {
                    _fun66452_ip = 125;
                    continue _fun66452
                }
            case 55:
                var4 = var5.includes;
                var3 = 'Speaker';
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun66452_ip = 113;
                    continue _fun66452
                }
            case 74:
                var4 = var5.includes;
                var3 = 'Receiver';
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot10;
                if (var3) {
                    _fun66452_ip = 105;
                    continue _fun66452
                }
            case 97:
                var3 = var4.UNKNOWN;
                _fun66452_ip = 111;
                continue _fun66452;
            case 105:
                var3 = var4.RECEIVER;
            case 111:
                _fun66452_ip = 123;
                continue _fun66452;
            case 113:
                var4 = _closure1_slot10;
                var3 = var4.SPEAKER;
            case 123:
                _fun66452_ip = 135;
                continue _fun66452;
            case 125:
                var1 = _closure1_slot10;
                var3 = var1.BLUETOOTH;
            case 135:
                _fun66452_ip = 150;
                continue _fun66452;
            case 137:
                var1 = _closure1_slot10;
                var3 = var1.UNKNOWN;
            case 150:
                _closure1_slot11 = var3;
                _closure1_slot12 = var2;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var0 = _closure1_slot10;
        var0 = var0.UNKNOWN;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.NativeModules;
    var _closure1_slot8 = var3;
    var9 = var1.NativeEventEmitter;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = {};
    var8 = 'unknown';
    var1.UNKNOWN = var8;
    var8 = 'bluetooth';
    var1.BLUETOOTH = var8;
    var8 = 'speaker';
    var1.SPEAKER = var8;
    var8 = 'receiver';
    var1.RECEIVER = var8;
    var _closure1_slot10 = var1;
    var8 = var1.UNKNOWN;
    var _closure1_slot11 = var8;
    var8 = false;
    var _closure1_slot12 = var8;
    var8 = null;
    var _closure1_slot13 = var8;
    var12 = var3.AudioRouteEmitter;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var13 = var8;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot14 = var3;
    var3 = function() {
        _fun66454: for (var _fun66454_ip = 0;;) switch (_fun66454_ip) {
            case 0:
                var3 = _closure1_slot9;
                var1 = var3.isConnected;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot13;
                var4 = null;
                if (!(var4 === var3)) {
                    _fun66454_ip = 32;
                    continue _fun66454
                }
            case 29:
                if (var1) {
                    _fun66454_ip = 108;
                    continue _fun66454
                }
            case 32:
                var3 = _closure1_slot13;
                if (!(var4 != var3)) {
                    _fun66454_ip = 330;
                    continue _fun66454
                }
            case 43:
                if (var1) {
                    _fun66454_ip = 330;
                    continue _fun66454
                }
            case 49:
                var1 = _closure1_slot8;
                var3 = var1.AudioRoutePicker;
                if (!(var4 != var3)) {
                    _fun66454_ip = 75;
                    continue _fun66454
                }
            case 63:
                var1 = var3.resetPortOverride;
                var1 = var1.bind(var3)();
            case 75:
                var3 = _closure1_slot19;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var3 = _closure1_slot13;
                var1 = var3.remove;
                var1 = var1.bind(var3)();
                _closure1_slot13 = var4;
                _fun66454_ip = 330;
                continue _fun66454;
            case 108:
                var1 = _closure1_slot19;
                var5 = undefined;
                var1 = var1.bind(var5)();
                var1 = _closure1_slot14;
                var3 = var4 == var1;
                var1 = undefined;
                if (var3) {
                    _fun66454_ip = 160;
                    continue _fun66454
                }
            case 131:
                var8 = _closure1_slot14;
                var7 = var8.addListener;
                var6 = 'audio-route-changed';
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = var0.routeType;
                    var3 = var0.multipleRoutesAvailable;
                    var2 = _closure1_slot18;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var4, var3);
                    var2 = _closure1_slot16;
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = var7.bind(var8)(var6, var3);
            case 160:
                _closure1_slot13 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun66454_ip = 219;
                    continue _fun66454
                }
            case 197:
                var1 = _closure1_slot8;
                var3 = var1.AudioRouteEmitter;
                var1 = var3.getCurrentRoute;
                var3 = var1.bind(var3)();
                _fun66454_ip = 278;
                continue _fun66454;
            case 219:
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 8;
                var1 = var1[var6];
                var1 = var7.bind(var5)(var1);
                var4 = var4 == var1;
                var1 = undefined;
                if (var4) {
                    _fun66454_ip = 275;
                    continue _fun66454
                }
            case 248:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var4 = var4.bind(var5)(var2);
                var2 = var4.getCurrentRoute;
                var1 = var2.bind(var4)();
            case 275:
                var3 = var1;
            case 278:
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = var0.routeType;
                    var2 = var0.multipleRoutesAvailable;
                    var1 = _closure1_slot18;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var3, var2);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function() { // Environment: var0
                    _fun66457: for (var _fun66457_ip = 0;;) switch (_fun66457_ip) {
                        case 0:
                            var2 = _closure1_slot16;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun66457_ip = 32;
                                continue _fun66457
                            }
                        case 18:
                            var2 = _closure1_slot16;
                            var1 = var2.emitChange;
                            var0 = var1.bind(var2)();
                        case 32:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 330:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun66460: for (var _fun66460_ip = 0;;) switch (_fun66460_ip) {
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
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun66460_ip = 69;
                        continue _fun66460
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun66460_ip = 105;
                    continue _fun66460;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var0);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = _closure1_slot15;
            var1 = 'RTC_CONNECTION_STATE';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCurrentRouteType';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMultipleRoutesAvailable';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var8);
    var3 = 'AudioRouteStore';
    var9.displayName = var3;
    var3 = 9;
    var3 = var6[var3];
    var12 = var7.bind(var0)(var3);
    var3 = var9.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var11 = {};
    var13 = var7;
    var3 = new var13[var9](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot16 = var3;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/AudioRouteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.RouteTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 3518, 478, 8228, 806, 566, 2]);