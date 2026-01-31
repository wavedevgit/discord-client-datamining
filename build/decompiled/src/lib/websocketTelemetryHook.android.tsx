// lib/websocketTelemetryHook.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/websocketTelemetryHook.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: installWebsocketTelemetryHook, environment: var1
        _fun117931: for (var _fun117931_ip = 0;;) switch (_fun117931_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = function(arg0, arg1) { // Original name: handleMessage, environment: var1
                    _fun117932: for (var _fun117932_ip = 0;;) switch (_fun117932_ip) {
                        case 0:
                            var3 = arg1;
                            var0 = undefined;
                            var2 = undefined;
                            var5 = undefined;
                            var1 = {};
                            var4 = arg0;
                            var10 = undefined;
                            var9 = undefined;
                            var6 = undefined;
                        case 20: // try_start_0
                            var8 = global;
                            var12 = var8.URL;
                            var14 = var4;
                            var11 = var12.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var15 = var11;
                            var7 = new var15[var12](var14, var13);
                            var11 = var7 instanceof Object ? var7 : var11;
                            var7 = var11.hostname;
                            var10 = var7;
                            var9 = var11.pathname;
                            var12 = null;
                            if (!(var12 != var7)) {
                                _fun117932_ip = 83;
                                continue _fun117932
                            }
                        case 72:
                            var7 = var10;
                            var11 = '';
                            if (!(var11 === var7)) {
                                _fun117932_ip = 85;
                                continue _fun117932
                            }
                        case 83: // try_end0
                            _fun117932_ip = 136;
                            continue _fun117932;
                        case 85: // try_start_1
                            var7 = var9;
                            if (!(var12 != var7)) {
                                _fun117932_ip = 110;
                                continue _fun117932
                            }
                        case 92:
                            var7 = var9;
                            if (!(var11 !== var7)) {
                                _fun117932_ip = 110;
                                continue _fun117932
                            }
                        case 99:
                            var12 = var9;
                            var7 = '/';
                            if (!(var7 === var12)) {
                                _fun117932_ip = 115;
                                continue _fun117932
                            }
                        case 110:
                            var7 = var10;
                            _fun117932_ip = 132;
                            continue _fun117932;
                        case 115:
                            var8 = var8.HermesInternal;
                            var8 = var8.concat;
                            var7 = var8.bind(var11)(var10, var9);
                        case 132: // try_end1
                            _fun117932_ip = 178;
                            continue _fun117932;
                        case 134: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 8);
                        case 136:
                            var9 = var4;
                            var8 = var9.split;
                            var4 = '?';
                            var8 = var8.bind(var9)(var4);
                            var4 = 0;
                            var9 = var8[var4];
                            var6 = var9;
                            var8 = '';
                            var4 = null;
                            if (!(var8 !== var9)) {
                                _fun117932_ip = 175;
                                continue _fun117932
                            }
                        case 172:
                            var4 = var6;
                        case 175:
                            var7 = var4;
                        case 178:
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 193;
                                continue _fun117932
                            }
                        case 184:
                            var4 = var1;
                            var4.url = var7;
                        case 193:
                            var2 = false;
                            var7 = var3;
                            var4 = 'string';
                            var7 = typeof var7;
                            if (!(var4 === var7)) {
                                _fun117932_ip = 483;
                                continue _fun117932
                            }
                        case 212:
                            var7 = var3;
                            var7 = var7.length;
                            var8 = 0;
                            if (!(var7 > var8)) {
                                _fun117932_ip = 483;
                                continue _fun117932
                            }
                        case 229:
                            var7 = var3;
                            var8 = var7[var8];
                            var7 = '{';
                            if (!(var7 === var8)) {
                                _fun117932_ip = 483;
                                continue _fun117932
                            }
                        case 247: // try_start_2
                            var7 = global;
                            var9 = var7.JSON;
                            var8 = var9.parse;
                            var7 = var3;
                            var8 = var8.bind(var9)(var7);
                            var5 = var8;
                            var8 = var6 != var8;
                            var7 = var8;
                            if (!var8) {
                                _fun117932_ip = 296;
                                continue _fun117932
                            }
                        case 282:
                            var8 = var5;
                            var9 = 'object';
                            var8 = typeof var8;
                            var7 = var9 === var8;
                        case 296:
                            if (!var7) {
                                _fun117932_ip = 479;
                                continue _fun117932
                            }
                        case 302:
                            var7 = var5;
                            var7 = var7.op;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 331;
                                continue _fun117932
                            }
                        case 314:
                            var8 = var1;
                            var7 = var5;
                            var7 = var7.op;
                            var8.op = var7;
                        case 331:
                            var7 = var5;
                            var7 = var7.s;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 360;
                                continue _fun117932
                            }
                        case 343:
                            var8 = var1;
                            var7 = var5;
                            var7 = var7.s;
                            var8.s = var7;
                        case 360:
                            var7 = var5;
                            var7 = var7.t;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 389;
                                continue _fun117932
                            }
                        case 372:
                            var8 = var1;
                            var7 = var5;
                            var7 = var7.t;
                            var8.t = var7;
                        case 389:
                            var7 = var5;
                            var7 = var7.type;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 418;
                                continue _fun117932
                            }
                        case 401:
                            var8 = var1;
                            var7 = var5;
                            var7 = var7.type;
                            var8.type = var7;
                        case 418:
                            var7 = var5;
                            var7 = var7.evt;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 449;
                                continue _fun117932
                            }
                        case 431:
                            var8 = var1;
                            var7 = var5;
                            var7 = var7.evt;
                            var8.evt = var7;
                        case 449:
                            var7 = var5;
                            var7 = var7.cmd;
                            if (!(var6 != var7)) {
                                _fun117932_ip = 477;
                                continue _fun117932
                            }
                        case 462:
                            var7 = var1;
                            var5 = var5.cmd;
                            var7.cmd = var5;
                        case 477:
                            var2 = true;
                        case 479: // try_end2
                            _fun117932_ip = 483;
                            continue _fun117932;
                        case 481: // catch_target2
                            CatchBlockStart(arg_register = 5);
                        case 483:
                            if (var2) {
                                _fun117932_ip = 493;
                                continue _fun117932
                            }
                        case 486:
                            var5 = var3;
                            var2 = var6 == var5;
                        case 493:
                            if (var2) {
                                _fun117932_ip = 503;
                                continue _fun117932
                            }
                        case 496:
                            var3 = typeof var3;
                            var2 = var4 === var3;
                        case 503:
                            if (var2) {
                                _fun117932_ip = 519;
                                continue _fun117932
                            }
                        case 506:
                            var3 = var1;
                            var2 = 'binary';
                            var3.type = var2;
                        case 519: // try_start_3
                            var2 = _closure2_slot0;
                            var1 = var2.bind(var0)(var1);
                        case 531: // try_end3
                            _fun117932_ip = 535;
                            continue _fun117932;
                        case 533: // catch_target3
                            CatchBlockStart(arg_register = 1);
                        case 535:
                            return var0;
                    }
                };
                var _closure2_slot2 = var0;
                var3 = global;
                var0 = var3.globalThis;
                var5 = 'undefined';
                var0 = typeof var0;
                if (!(var5 === var0)) {
                    _fun117931_ip = 80;
                    continue _fun117931
                }
            case 39:
                var4 = _closure1_slot0;
                var2 = undefined;
                if (!(var2 === var4)) {
                    _fun117931_ip = 74;
                    continue _fun117931
                }
            case 52:
                var4 = var3.window;
                var4 = typeof var4;
                var2 = null;
                if (!(var5 !== var4)) {
                    _fun117931_ip = 72;
                    continue _fun117931
                }
            case 66:
                var2 = var3.window;
            case 72:
                _fun117931_ip = 78;
                continue _fun117931;
            case 74:
                var2 = _closure1_slot0;
            case 78:
                _fun117931_ip = 86;
                continue _fun117931;
            case 80:
                var2 = var3.globalThis;
            case 86:
                var5 = null;
                var6 = var5 == var2;
                var0 = undefined;
                var4 = undefined;
                if (var6) {
                    _fun117931_ip = 105;
                    continue _fun117931
                }
            case 99:
                var4 = var2.WebSocket;
            case 105:
                if (!(var5 != var4)) {
                    _fun117931_ip = 177;
                    continue _fun117931
                }
            case 109:
                var4 = var2.__discordWebsocketTelemetryPatched;
                if (var4) {
                    _fun117931_ip = 177;
                    continue _fun117931
                }
            case 118:
                var5 = var2.WebSocket;
                var _closure2_slot1 = var5;
                var1 = function(arg0) { // Original name: PatchedWebSocket, environment: var1
                    _fun117933: for (var _fun117933_ip = 0;;) switch (_fun117933_ip) {
                        case 0:
                            var2 = 0;
                            var8 = 0;
                            var1 = copyRestArgs(var8);
                            var3 = _closure2_slot1;
                            var0 = new Array(0);
                            var8 = var0;
                            var7 = var1;
                            var6 = 0;
                            var4 = arraySpread(var8, var7, var6);
                            var8 = var3;
                            var7 = var0;
                            var0 = apply(var8, var7);
                            var3 = var1[var2];
                            var4 = 'string';
                            var3 = typeof var3;
                            if (!(var4 !== var3)) {
                                _fun117933_ip = 79;
                                continue _fun117933
                            }
                        case 56:
                            var4 = var0.url;
                            var3 = null;
                            var5 = var3 != var4;
                            var3 = '';
                            if (!var5) {
                                _fun117933_ip = 77;
                                continue _fun117933
                            }
                        case 74:
                            var3 = var4;
                        case 77:
                            _fun117933_ip = 83;
                            continue _fun117933;
                        case 79:
                            var3 = var1[var2];
                        case 83:
                            var2 = function(arg0, arg1) { // Original name: attachListener, environment: var1
                                _fun117934: for (var _fun117934_ip = 0;;) switch (_fun117934_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = arg1;
                                        var _closure4_slot0 = var1;
                                        var1 = var3.addEventListener;
                                        var2 = 'function';
                                        var1 = typeof var1;
                                        if (!(var2 === var1)) {
                                            _fun117934_ip = 52;
                                            continue _fun117934
                                        }
                                    case 29:
                                        var2 = var3.addEventListener;
                                        var1 = 'message';
                                        var0 = function(arg0) { // Environment: var0
                                            _fun117935: for (var _fun117935_ip = 0;;) switch (_fun117935_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var3 = _closure2_slot2;
                                                    var2 = _closure4_slot0;
                                                    var0 = null;
                                                    var5 = var0 == var4;
                                                    var0 = undefined;
                                                    var1 = undefined;
                                                    if (var5) {
                                                        _fun117935_ip = 35;
                                                        continue _fun117935
                                                    }
                                                case 30:
                                                    var1 = var4.data;
                                                case 35:
                                                    var1 = var3.bind(var0)(var2, var1);
                                                    return var0;
                                            }
                                        };
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)(var0, var3);
                            return var0;
                    }
                };
                var4 = var5.prototype;
                var1.prototype = var4;
                var4 = var3.Object;
                var3 = var4.assign;
                var3 = var3.bind(var4)(var1, var5);
                var2.WebSocket = var1;
                var1 = true;
                var2.__discordWebsocketTelemetryPatched = var1;
            case 177:
                return var0;
        }
    };
    var2.installWebsocketTelemetryHook = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);