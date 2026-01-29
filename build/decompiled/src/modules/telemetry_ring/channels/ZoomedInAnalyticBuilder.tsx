// modules/telemetry_ring/channels/ZoomedInAnalyticBuilder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: convertDeviceEventBreadcrumb, environment: var1
        _fun97081: for (var _fun97081_ip = 0;;) switch (_fun97081_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.data;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun97081_ip = 146;
                    continue _fun97081
                }
            case 17:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var5);
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun97081_ip = 146;
                    continue _fun97081
                }
            case 46:
                var6 = _closure1_slot10;
                var4 = var5.action;
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                if (!(var0 == var4)) {
                    _fun97081_ip = 83;
                    continue _fun97081
                }
            case 69:
                var7 = _closure1_slot10;
                var6 = var3.message;
                var4 = var7.bind(var2)(var6);
            case 83:
                var6 = _closure1_slot10;
                var3 = var3.message;
                var3 = var6.bind(var2)(var3);
                if (!(var0 == var3)) {
                    _fun97081_ip = 115;
                    continue _fun97081
                }
            case 101:
                var6 = _closure1_slot10;
                var1 = var5.description;
                var3 = var6.bind(var2)(var1);
            case 115:
                var1 = function(arg0) { // Original name: formatDeviceMetadata, environment: var1
                    _fun97082: for (var _fun97082_ip = 0;;) switch (_fun97082_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.entries;
                            var0 = arg0;
                            var3 = var2.bind(var3)(var0);
                            var2 = var3.filter;
                            var0 = function(arg0) { // Environment: var1
                                _fun97083: for (var _fun97083_ip = 0;;) switch (_fun97083_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var1 = var5[Symbol.iterator];
                                        var5 = var1().next;
                                        var7 = undefined;
                                        var2 = undefined;
                                        var4 = undefined;
                                        var6 = var5().value;
                                        var8 = var1;
                                        var8 = var8 === var7;
                                        var2 = var8;
                                        if (var8) {
                                            _fun97083_ip = 32;
                                            continue _fun97083
                                        }
                                    case 29:
                                        var4 = var6;
                                    case 32:
                                        var4 = undefined;
                                        var6 = var2;
                                        if (var6) {
                                            _fun97083_ip = 60;
                                            continue _fun97083
                                        }
                                    case 40:
                                        var5 = var5().value;
                                        var6 = var1;
                                        var6 = var6 === var7;
                                        var2 = var6;
                                        if (var6) {
                                            _fun97083_ip = 60;
                                            continue _fun97083
                                        }
                                    case 57:
                                        var4 = var5;
                                    case 60:
                                        var3 = var4;
                                        var4 = var2;
                                        if (var4) {
                                            _fun97083_ip = 72;
                                            continue _fun97083
                                        }
                                    case 69:
                                        var1.return();
                                    case 72:
                                        var4 = var3;
                                        var3 = null;
                                        var3 = var3 != var4;
                                        return var3;
                                    case 83:
                                        CatchBlockStart(arg_register = 0);
                                        if (var2) {
                                            _fun97083_ip = 91;
                                            continue _fun97083
                                        }
                                    case 88:
                                        var1.return();
                                    case 91:
                                        throw var0;
                                }
                            };
                            var3 = var2.bind(var3)(var0);
                            var4 = var3.length;
                            var2 = 0;
                            var0 = null;
                            if (!(var2 !== var4)) {
                                _fun97082_ip = 87;
                                continue _fun97082
                            }
                        case 54:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun97084: for (var _fun97084_ip = 0;;) switch (_fun97084_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = var2[Symbol.iterator];
                                        var2 = var0().next;
                                        var3 = var2().value;
                                        var1 = var0;
                                        var6 = undefined;
                                        var1 = var1 === var6;
                                        var4 = undefined;
                                        if (var1) {
                                            _fun97084_ip = 27;
                                            continue _fun97084
                                        }
                                    case 24:
                                        var4 = var3;
                                    case 27:
                                        var3 = undefined;
                                        if (var1) {
                                            _fun97084_ip = 57;
                                            continue _fun97084
                                        }
                                    case 32:
                                        var5 = var2().value;
                                        var2 = var0;
                                        var2 = var2 === var6;
                                        var3 = undefined;
                                        var1 = var2;
                                        if (var2) {
                                            _fun97084_ip = 57;
                                            continue _fun97084
                                        }
                                    case 51:
                                        var3 = var5;
                                        var1 = var2;
                                    case 57:
                                        if (var1) {
                                            _fun97084_ip = 63;
                                            continue _fun97084
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var2 = var0.concat;
                                        var1 = '';
                                        var0 = '=';
                                        var0 = var2.bind(var1)(var4, var0, var3);
                                        return var0;
                                }
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.join;
                            var1 = ', ';
                            var0 = var2.bind(var3)(var1);
                        case 87:
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var5);
                var1 = {};
                var1.action = var4;
                var1.description = var3;
                var1.metadata = var2;
                return var1;
            case 146:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: resolveSocketKind, environment: var1
        _fun97085: for (var _fun97085_ip = 0;;) switch (_fun97085_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var4 = _closure1_slot10;
                var1 = var3.socket_kind;
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun97085_ip = 324;
                    continue _fun97085
                }
            case 35:
                var5 = var1 == var6;
                var4 = null;
                if (var5) {
                    _fun97085_ip = 321;
                    continue _fun97085
                }
            case 47:
                var5 = var6.toLowerCase;
                var8 = var5.bind(var6)();
                var6 = var8.includes;
                var5 = 'gateway';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 308;
                    continue _fun97085
                }
            case 77:
                var6 = var8.includes;
                var5 = 'discord.media';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 296;
                    continue _fun97085
                }
            case 99:
                var6 = var8.includes;
                var5 = 'remote-auth';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 284;
                    continue _fun97085
                }
            case 121:
                var6 = var8.includes;
                var5 = 'spotify';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 272;
                    continue _fun97085
                }
            case 141:
                var6 = var8.includes;
                var5 = 'rtc';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 260;
                    continue _fun97085
                }
            case 160:
                var6 = var8.includes;
                var5 = '127.0.0.1';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 248;
                    continue _fun97085
                }
            case 179:
                var6 = var8.includes;
                var5 = 'localhost';
                var5 = var6.bind(var8)(var5);
                if (var5) {
                    _fun97085_ip = 248;
                    continue _fun97085
                }
            case 198:
                var6 = var8.includes;
                var5 = 'game';
                var6 = var6.bind(var8)(var5);
                var5 = null;
                if (!var6) {
                    _fun97085_ip = 246;
                    continue _fun97085
                }
            case 217:
                var7 = var8.includes;
                var6 = 'ping';
                var6 = var7.bind(var8)(var6);
                var5 = null;
                if (!var6) {
                    _fun97085_ip = 246;
                    continue _fun97085
                }
            case 236:
                var6 = _closure1_slot2;
                var5 = var6.GameServerPing;
            case 246:
                _fun97085_ip = 258;
                continue _fun97085;
            case 248:
                var6 = _closure1_slot2;
                var5 = var6.Rpc;
            case 258:
                _fun97085_ip = 270;
                continue _fun97085;
            case 260:
                var6 = _closure1_slot2;
                var5 = var6.RtcControl;
            case 270:
                _fun97085_ip = 282;
                continue _fun97085;
            case 272:
                var6 = _closure1_slot2;
                var5 = var6.Spotify;
            case 282:
                _fun97085_ip = 294;
                continue _fun97085;
            case 284:
                var6 = _closure1_slot2;
                var5 = var6.RemoteAuth;
            case 294:
                _fun97085_ip = 306;
                continue _fun97085;
            case 296:
                var6 = _closure1_slot2;
                var5 = var6.RtcControl;
            case 306:
                _fun97085_ip = 318;
                continue _fun97085;
            case 308:
                var6 = _closure1_slot2;
                var5 = var6.Gateway;
            case 318:
                var4 = var5;
            case 321:
                var0 = var4;
            case 324:
                if (!(var1 == var0)) {
                    _fun97085_ip = 396;
                    continue _fun97085
                }
            case 328:
                var4 = var3.cmd;
                if (!(var1 == var4)) {
                    _fun97085_ip = 383;
                    continue _fun97085
                }
            case 338:
                var4 = var3.evt;
                if (!(var1 == var4)) {
                    _fun97085_ip = 383;
                    continue _fun97085
                }
            case 348:
                var4 = var3.t;
                if (!(var1 == var4)) {
                    _fun97085_ip = 371;
                    continue _fun97085
                }
            case 357:
                var3 = var3.s;
                var3 = var1 != var3;
                var1 = null;
                if (!var3) {
                    _fun97085_ip = 381;
                    continue _fun97085
                }
            case 371:
                var3 = _closure1_slot2;
                var1 = var3.Gateway;
            case 381:
                _fun97085_ip = 393;
                continue _fun97085;
            case 383:
                var2 = _closure1_slot2;
                var1 = var2.Rpc;
            case 393:
                var0 = var1;
            case 396:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: buildSocketMessageIdentity, environment: var1
        _fun97086: for (var _fun97086_ip = 0;;) switch (_fun97086_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var5 = _closure1_slot10;
                var4 = var0.t;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun97086_ip = 29;
                    continue _fun97086
                }
            case 24:
                var4 = var0.type;
            case 29:
                if (!(var1 == var4)) {
                    _fun97086_ip = 39;
                    continue _fun97086
                }
            case 33:
                var4 = var0.evt;
            case 39:
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = _closure1_slot2;
                var4 = var4.Gateway;
                if (!(var6 !== var4)) {
                    _fun97086_ip = 266;
                    continue _fun97086
                }
            case 63:
                var4 = _closure1_slot2;
                var4 = var4.RtcControl;
                if (!(var6 !== var4)) {
                    _fun97086_ip = 150;
                    continue _fun97086
                }
            case 77:
                var6 = _closure1_slot10;
                var4 = var0.cmd;
                var11 = var6.bind(var3)(var4);
                var4 = var0.evt;
                var10 = var6.bind(var3)(var4);
                var4 = var5;
                if (!(var1 != var11)) {
                    _fun97086_ip = 148;
                    continue _fun97086
                }
            case 110:
                var6 = var11;
                if (!(var1 != var10)) {
                    _fun97086_ip = 145;
                    continue _fun97086
                }
            case 117:
                var7 = global;
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var8 = '';
                var7 = '/';
                var6 = var9.bind(var8)(var11, var7, var10);
            case 145:
                var4 = var6;
            case 148:
                return var4;
            case 150:
                var6 = var0.op;
                var4 = _closure1_slot11;
                var7 = var4.bind(var3)(var6);
                var6 = var1 == var7;
                var4 = null;
                if (var6) {
                    _fun97086_ip = 222;
                    continue _fun97086
                }
            case 173:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 2;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.RTCSocketOpcode;
                var7 = var6[var7];
                var9 = 'string';
                var8 = typeof var7;
                var6 = null;
                if (!(var9 === var8)) {
                    _fun97086_ip = 219;
                    continue _fun97086
                }
            case 216:
                var6 = var7;
            case 219:
                var4 = var6;
            case 222:
                if (!(var1 == var4)) {
                    _fun97086_ip = 264;
                    continue _fun97086
                }
            case 226:
                var7 = _closure1_slot11;
                var6 = var0.op;
                var8 = var7.bind(var3)(var6);
                var7 = var1 != var8;
                var6 = null;
                if (!var7) {
                    _fun97086_ip = 262;
                    continue _fun97086
                }
            case 249:
                var7 = global;
                var7 = var7.String;
                var6 = var7.bind(var3)(var8);
            case 262:
                return var6;
            case 264:
                return var4;
            case 266:
                var6 = var0.op;
                var4 = _closure1_slot11;
                var7 = var4.bind(var3)(var6);
                var6 = var1 == var7;
                var4 = null;
                if (var6) {
                    _fun97086_ip = 338;
                    continue _fun97086
                }
            case 289:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 1;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.Opcode;
                var7 = var6[var7];
                var9 = 'string';
                var8 = typeof var7;
                var6 = null;
                if (!(var9 === var8)) {
                    _fun97086_ip = 335;
                    continue _fun97086
                }
            case 332:
                var6 = var7;
            case 335:
                var4 = var6;
            case 338:
                if (!(var1 == var4)) {
                    _fun97086_ip = 415;
                    continue _fun97086
                }
            case 342:
                var2 = _closure1_slot11;
                var0 = var0.op;
                var8 = var2.bind(var3)(var0);
                var0 = var5;
                if (!(var1 != var8)) {
                    _fun97086_ip = 413;
                    continue _fun97086
                }
            case 363:
                if (!(var1 == var5)) {
                    _fun97086_ip = 382;
                    continue _fun97086
                }
            case 367:
                var2 = global;
                var2 = var2.String;
                var2 = var2.bind(var3)(var8);
                _fun97086_ip = 410;
                continue _fun97086;
            case 382:
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var6 = '';
                var3 = '/';
                var2 = var7.bind(var6)(var8, var3, var5);
            case 410:
                var0 = var2;
            case 413:
                return var0;
            case 415:
                var2 = 'DISPATCH';
                var0 = var4;
                if (!(var2 === var4)) {
                    _fun97086_ip = 461;
                    continue _fun97086
                }
            case 426:
                var0 = var4;
                if (!(var1 != var5)) {
                    _fun97086_ip = 461;
                    continue _fun97086
                }
            case 433:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '/';
                var0 = var3.bind(var2)(var4, var1, var5);
            case 461:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: buildWebsocketMessageProps, environment: var1
        _fun97087: for (var _fun97087_ip = 0;;) switch (_fun97087_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.data;
                var2 = null;
                if (!(var2 != var6)) {
                    _fun97087_ip = 121;
                    continue _fun97087
                }
            case 14:
                var7 = _closure1_slot10;
                var0 = var6.url;
                var5 = undefined;
                var0 = var7.bind(var5)(var0);
                var1 = _closure1_slot6;
                var1 = var1.bind(var5)(var6, var0);
                var3 = var6.message_identity;
                var3 = var7.bind(var5)(var3);
                if (!(var2 == var3)) {
                    _fun97087_ip = 68;
                    continue _fun97087
                }
            case 58:
                var4 = _closure1_slot7;
                var3 = var4.bind(var5)(var6, var1);
            case 68:
                if (!(var2 == var3)) {
                    _fun97087_ip = 86;
                    continue _fun97087
                }
            case 72:
                var4 = function(arg0) { // Original name: buildLegacyMessageIdentity, environment: var4
                    _fun97088: for (var _fun97088_ip = 0;;) switch (_fun97088_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot10;
                            var2 = var0.category;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var2 = var0.type;
                            var2 = var3.bind(var1)(var2);
                            var0 = var0.name;
                            var1 = var3.bind(var1)(var0);
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun97088_ip = 62;
                                continue _fun97088
                            }
                        case 49:
                            if (!(var0 == var2)) {
                                _fun97088_ip = 62;
                                continue _fun97088
                            }
                        case 53:
                            var3 = var0 == var1;
                            var0 = null;
                            if (var3) {
                                _fun97088_ip = 111;
                                continue _fun97088
                            }
                        case 62:
                            var3 = new Array(3);
                            var3[0] = var4;
                            var3[1] = var2;
                            var3[2] = var1;
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var1 = null;
                                var0 = arg0;
                                var0 = var1 != var0;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.join;
                            var1 = '/';
                            var0 = var2.bind(var3)(var1);
                        case 111:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var6);
            case 86:
                if (!(var2 != var3)) {
                    _fun97087_ip = 93;
                    continue _fun97087
                }
            case 90:
                var0 = var3;
            case 93:
                var3 = var2 != var0;
                var2 = 'unknown';
                if (!var3) {
                    _fun97087_ip = 107;
                    continue _fun97087
                }
            case 104:
                var2 = var0;
            case 107:
                var0 = {};
                var0.message_identity = var2;
                var0.socket_kind = var1;
                return var0;
            case 121:
                var0 = {};
                var1 = 'unknown';
                var0.message_identity = var1;
                var1 = undefined;
                var0.socket_kind = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: coerceNumber, environment: var1
        _fun97090: for (var _fun97090_ip = 0;;) switch (_fun97090_ip) {
            case 0:
                var1 = arg0;
                var4 = 'number';
                var2 = typeof var1;
                var0 = null;
                if (!(var4 === var2)) {
                    _fun97090_ip = 43;
                    continue _fun97090
                }
            case 16:
                var2 = global;
                var4 = var2.Number;
                var2 = var4.isFinite;
                var2 = var2.bind(var4)(var1);
                var0 = null;
                if (!var2) {
                    _fun97090_ip = 43;
                    continue _fun97090
                }
            case 40:
                var0 = var1;
            case 43:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: coerceString, environment: var1
        _fun97091: for (var _fun97091_ip = 0;;) switch (_fun97091_ip) {
            case 0:
                var1 = arg0;
                var3 = 'string';
                var2 = typeof var1;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun97091_ip = 19;
                    continue _fun97091
                }
            case 16:
                var0 = var1;
            case 19:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: coerceNumberFromUnknown, environment: var1
        _fun97092: for (var _fun97092_ip = 0;;) switch (_fun97092_ip) {
            case 0:
                var0 = arg0;
                var2 = typeof var0;
                var1 = 'number';
                if (!(var1 === var2)) {
                    _fun97092_ip = 36;
                    continue _fun97092
                }
            case 14:
                var1 = global;
                var3 = var1.Number;
                var1 = var3.isFinite;
                var1 = var1.bind(var3)(var0);
                if (var1) {
                    _fun97092_ip = 108;
                    continue _fun97092
                }
            case 36:
                var1 = 'string';
                if (!(var1 === var2)) {
                    _fun97092_ip = 62;
                    continue _fun97092
                }
            case 44:
                var1 = var0.trim;
                var2 = var1.bind(var0)();
                var1 = '';
                if (!(var1 === var2)) {
                    _fun97092_ip = 66;
                    continue _fun97092
                }
            case 62:
                var1 = null;
                return var1;
            case 66:
                var1 = global;
                var3 = var1.Number;
                var2 = undefined;
                var2 = var3.bind(var2)(var0);
                var3 = var1.Number;
                var1 = var3.isFinite;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                if (!var3) {
                    _fun97092_ip = 106;
                    continue _fun97092
                }
            case 103:
                var1 = var2;
            case 106:
                return var1;
            case 108:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var3 = {};
    var7 = 'gateway';
    var3.Gateway = var7;
    var7 = 'rtc_control';
    var3.RtcControl = var7;
    var7 = 'remote_auth';
    var3.RemoteAuth = var7;
    var7 = 'spotify';
    var3.Spotify = var7;
    var7 = 'rpc';
    var3.Rpc = var7;
    var7 = 'game_server_ping';
    var3.GameServerPing = var7;
    var _closure1_slot2 = var3;
    var3 = {};
    var8 = var6.DEVICE_EVENT;
    var7 = function(arg0) { // Environment: var1
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3[var8] = var7;
    var8 = var6.REACT_SOFT_EXCEPTION;
    var7 = function(arg0) { // Environment: var1
        _fun97094: for (var _fun97094_ip = 0;;) switch (_fun97094_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.data;
                var5 = null;
                var1 = var5 == var2;
                var0 = null;
                if (var1) {
                    _fun97094_ip = 115;
                    continue _fun97094
                }
            case 19:
                var1 = {};
                var7 = _closure1_slot10;
                var6 = var2.error_message;
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                if (!(var5 == var6)) {
                    _fun97094_ip = 59;
                    continue _fun97094
                }
            case 45:
                var8 = _closure1_slot10;
                var7 = var2.message;
                var6 = var8.bind(var4)(var7);
            case 59:
                var7 = var5 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun97094_ip = 71;
                    continue _fun97094
                }
            case 68:
                var5 = var6;
            case 71:
                var1.error_message = var5;
                var3 = _closure1_slot10;
                var5 = var2.component;
                var5 = var3.bind(var4)(var5);
                var1.component = var5;
                var2 = var2.stacktrace;
                var2 = var3.bind(var4)(var2);
                var1.stacktrace = var2;
                var0 = var1;
            case 115:
                return var0;
        }
    };
    var3[var8] = var7;
    var8 = var6.NETWORK_CAPABILITIES_CHANGED;
    var7 = function(arg0) { // Environment: var1
        _fun97095: for (var _fun97095_ip = 0;;) switch (_fun97095_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.data;
                var2 = null;
                var1 = var2 == var3;
                var0 = null;
                if (var1) {
                    _fun97095_ip = 129;
                    continue _fun97095
                }
            case 19:
                var1 = {};
                var7 = _closure1_slot10;
                var5 = var3.action;
                var6 = undefined;
                var5 = var7.bind(var6)(var5);
                var1.action = var5;
                var5 = var3.network_type;
                var5 = var7.bind(var6)(var5);
                var1.network_type = var5;
                var5 = _closure1_slot9;
                var4 = var3.upload_bandwidth;
                var4 = var5.bind(var6)(var4);
                var1.upload_bandwidth = var4;
                var4 = var3.download_bandwidth;
                var4 = var5.bind(var6)(var4);
                var1.download_bandwidth = var4;
                var4 = var3.vpn_active;
                var5 = 'boolean';
                var4 = typeof var4;
                var2 = null;
                if (!(var5 === var4)) {
                    _fun97095_ip = 121;
                    continue _fun97095
                }
            case 115:
                var2 = var3.vpn_active;
            case 121:
                var1.vpn_active = var2;
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var3[var8] = var7;
    var8 = var6.FOREGROUND_SERVICE;
    var7 = function(arg0) { // Environment: var1
        _fun97096: for (var _fun97096_ip = 0;;) switch (_fun97096_ip) {
            case 0:
                var7 = arg0;
                var2 = var7.data;
                var5 = null;
                var1 = var5 == var2;
                var0 = null;
                if (var1) {
                    _fun97096_ip = 186;
                    continue _fun97096
                }
            case 22:
                var1 = {};
                var8 = _closure1_slot10;
                var6 = var2.service_name;
                var4 = undefined;
                var6 = var8.bind(var4)(var6);
                var1.service_name = var6;
                var6 = var2.action;
                var6 = var8.bind(var4)(var6);
                var1.action = var6;
                var6 = var2.detail;
                var6 = var8.bind(var4)(var6);
                if (!(var5 == var6)) {
                    _fun97096_ip = 92;
                    continue _fun97096
                }
            case 78:
                var8 = _closure1_slot10;
                var7 = var7.message;
                var6 = var8.bind(var4)(var7);
            case 92:
                var1.detail = var6;
                var7 = _closure1_slot10;
                var6 = var2.fgs_operation;
                var6 = var7.bind(var4)(var6);
                var1.fgs_operation = var6;
                var6 = var2.fgs_configuration_type;
                var6 = var7.bind(var4)(var6);
                var1.fgs_configuration_type = var6;
                var6 = var2.guard_allowed;
                var7 = 'boolean';
                var6 = typeof var6;
                var5 = null;
                if (!(var7 === var6)) {
                    _fun97096_ip = 158;
                    continue _fun97096
                }
            case 152:
                var5 = var2.guard_allowed;
            case 158:
                var1.guard_allowed = var5;
                var3 = _closure1_slot10;
                var2 = var2.fgs_guard_reason;
                var2 = var3.bind(var4)(var2);
                var1.fgs_guard_reason = var2;
                var0 = var1;
            case 186:
                return var0;
        }
    };
    var3[var8] = var7;
    var8 = var6.APP_LIFECYCLE;
    var7 = function(arg0) { // Environment: var1
        _fun97097: for (var _fun97097_ip = 0;;) switch (_fun97097_ip) {
            case 0:
                var6 = arg0;
                var2 = var6.data;
                var7 = null;
                var1 = var7 == var2;
                var0 = null;
                if (var1) {
                    _fun97097_ip = 101;
                    continue _fun97097
                }
            case 19:
                var1 = {};
                var8 = _closure1_slot10;
                var5 = var2.state;
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                if (!(var7 == var5)) {
                    _fun97097_ip = 58;
                    continue _fun97097
                }
            case 44:
                var7 = _closure1_slot10;
                var6 = var6.message;
                var5 = var7.bind(var4)(var6);
            case 58:
                var1.state = var5;
                var3 = _closure1_slot10;
                var5 = var2.previous_state;
                var5 = var3.bind(var4)(var5);
                var1.previous_state = var5;
                var2 = var2.details;
                var2 = var3.bind(var4)(var2);
                var1.details = var2;
                var0 = var1;
            case 101:
                return var0;
        }
    };
    var3[var8] = var7;
    var8 = var6.UI_LIFECYCLE;
    var7 = function(arg0) { // Environment: var1
        _fun97098: for (var _fun97098_ip = 0;;) switch (_fun97098_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.data;
                var6 = null;
                var1 = var6 == var3;
                var0 = null;
                if (var1) {
                    _fun97098_ip = 167;
                    continue _fun97098
                }
            case 22:
                var1 = {};
                var7 = _closure1_slot10;
                var2 = var3.activity_name;
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                if (!(var6 == var2)) {
                    _fun97098_ip = 63;
                    continue _fun97098
                }
            case 48:
                var8 = _closure1_slot10;
                var7 = var3.screen;
                var2 = var8.bind(var5)(var7);
            case 63:
                var1.activity_name = var2;
                var7 = _closure1_slot10;
                var2 = var3.stage;
                var2 = var7.bind(var5)(var2);
                if (!(var6 == var2)) {
                    _fun97098_ip = 101;
                    continue _fun97098
                }
            case 87:
                var8 = _closure1_slot10;
                var7 = var3.state;
                var2 = var8.bind(var5)(var7);
            case 101:
                var1.stage = var2;
                var7 = _closure1_slot10;
                var2 = var3.extra;
                var2 = var7.bind(var5)(var2);
                if (!(var6 == var2)) {
                    _fun97098_ip = 140;
                    continue _fun97098
                }
            case 125:
                var8 = _closure1_slot10;
                var7 = var3.details;
                var2 = var8.bind(var5)(var7);
            case 140:
                if (!(var6 == var2)) {
                    _fun97098_ip = 159;
                    continue _fun97098
                }
            case 144:
                var4 = _closure1_slot10;
                var3 = var3.detail;
                var2 = var4.bind(var5)(var3);
            case 159:
                var1.extra = var2;
                var0 = var1;
            case 167:
                return var0;
        }
    };
    var3[var8] = var7;
    var _closure1_slot3 = var3;
    var3 = {};
    var8 = var6.TOUCH_EVENT;
    var7 = function(arg0) { // Environment: var1
        _fun97099: for (var _fun97099_ip = 0;;) switch (_fun97099_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.data;
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun97099_ip = 294;
                    continue _fun97099
                }
            case 20:
                var1 = {};
                var6 = _closure1_slot10;
                var5 = var2.touch_action_type;
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var1.touch_action_type = var5;
                var3 = _closure1_slot9;
                var5 = var2.client_timestamp_ms;
                var5 = var3.bind(var4)(var5);
                var1.client_timestamp_ms = var5;
                var5 = var2.screen_x;
                var5 = var3.bind(var4)(var5);
                var1.screen_x = var5;
                var5 = var2.screen_y;
                var5 = var3.bind(var4)(var5);
                var1.screen_y = var5;
                var5 = var2.view_x;
                var5 = var3.bind(var4)(var5);
                var1.view_x = var5;
                var5 = var2.view_y;
                var5 = var3.bind(var4)(var5);
                var1.view_y = var5;
                var5 = var2.total_memory_mb;
                var5 = var3.bind(var4)(var5);
                var1.total_memory_mb = var5;
                var5 = var2.memory_breakdown;
                var5 = var6.bind(var4)(var5);
                var1.memory_breakdown = var5;
                var5 = var2.view_hierarchy;
                var5 = var6.bind(var4)(var5);
                var1.view_hierarchy = var5;
                var5 = var2.gesture;
                var5 = var6.bind(var4)(var5);
                var1.gesture = var5;
                var5 = var2.window_name;
                var5 = var6.bind(var4)(var5);
                var1.window_name = var5;
                var5 = var2.hit_test_duration_us;
                var5 = var3.bind(var4)(var5);
                var1.hit_test_duration_us = var5;
                var5 = var2.distance;
                var5 = var3.bind(var4)(var5);
                var1.distance = var5;
                var5 = var2.duration_ms;
                var5 = var3.bind(var4)(var5);
                var1.duration_ms = var5;
                var5 = var2.velocity;
                var5 = var3.bind(var4)(var5);
                var1.velocity = var5;
                var2 = var2.scale_factor;
                var2 = var3.bind(var4)(var2);
                var1.scale_factor = var2;
                var0 = var1;
            case 294:
                return var0;
        }
    };
    var3[var8] = var7;
    var8 = var6.HTTP_REQUEST;
    var7 = function(arg0) { // Environment: var1
        _fun97100: for (var _fun97100_ip = 0;;) switch (_fun97100_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.data;
                var1 = null;
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun97100_ip = 137;
                    continue _fun97100
                }
            case 19:
                var4 = _closure1_slot10;
                var3 = var2.url;
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                if (!(var1 == var4)) {
                    _fun97100_ip = 56;
                    continue _fun97100
                }
            case 42:
                var7 = _closure1_slot10;
                var3 = var2.uri;
                var4 = var7.bind(var6)(var3);
            case 56:
                if (!(var1 == var4)) {
                    _fun97100_ip = 75;
                    continue _fun97100
                }
            case 60:
                var7 = _closure1_slot10;
                var3 = var2.request_url;
                var4 = var7.bind(var6)(var3);
            case 75:
                var7 = _closure1_slot10;
                var3 = var2.method;
                var3 = var7.bind(var6)(var3);
                if (!(var1 == var3)) {
                    _fun97100_ip = 111;
                    continue _fun97100
                }
            case 94:
                var5 = _closure1_slot10;
                var2 = var2.http_method;
                var3 = var5.bind(var6)(var2);
            case 111:
                var2 = var1 == var4;
                var1 = null;
                if (var2) {
                    _fun97100_ip = 134;
                    continue _fun97100
                }
            case 120:
                var2 = {};
                var2.url = var4;
                var2.method = var3;
                var1 = var2;
            case 134:
                var0 = var1;
            case 137:
                return var0;
        }
    };
    var3[var8] = var7;
    var7 = var6.WEBSOCKET_MESSAGE_RECEIVED;
    var6 = function(arg0) { // Environment: var1
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3[var7] = var6;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/telemetry_ring/channels/ZoomedInAnalyticBuilder.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: buildZoomedInAnalyticsEvent, environment: var1
        _fun97102: for (var _fun97102_ip = 0;;) switch (_fun97102_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.key;
                var1 = _closure1_slot3;
                var1 = var3 in var1;
                var3 = var2.key;
                if (var1) {
                    _fun97102_ip = 84;
                    continue _fun97102
                }
            case 27:
                var1 = _closure1_slot4;
                var1 = var3 in var1;
                if (var1) {
                    _fun97102_ip = 42;
                    continue _fun97102
                }
            case 38:
                var1 = null;
                return var1;
            case 42:
                var6 = var2.key;
                var4 = _closure1_slot4;
                var1 = var4[var6];
                var5 = var1.bind(var4)(var2);
                var1 = null;
                var4 = var1 == var5;
                if (var4) {
                    _fun97102_ip = 82;
                    continue _fun97102
                }
            case 69:
                var4 = {};
                var4.key = var6;
                var4.props = var5;
                var1 = var4;
            case 82:
                return var1;
            case 84:
                var1 = _closure1_slot3;
                var0 = var1[var3];
                var2 = var0.bind(var1)(var2);
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun97102_ip = 119;
                    continue _fun97102
                }
            case 106:
                var1 = {};
                var1.key = var3;
                var1.props = var2;
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.buildZoomedInAnalyticsEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 12423, 12241, 2]);