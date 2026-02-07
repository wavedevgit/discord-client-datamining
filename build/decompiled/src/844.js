// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        _fun8950: for (var _fun8950_ip = 0;;) switch (_fun8950_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var5 = 1;
                if (!(var1 > var5)) {
                    _fun8950_ip = 25;
                    continue _fun8950
                }
            case 17:
                var1 = arguments[var5];
                if (!(var0 === var1)) {
                    _fun8950_ip = 29;
                    continue _fun8950
                }
            case 25:
                var1 = {};
                _fun8950_ip = 33;
                continue _fun8950;
            case 29:
                var1 = arguments[var5];
            case 33:
                var3 = var1.user;
                if (!var3) {
                    _fun8950_ip = 145;
                    continue _fun8950
                }
            case 41:
                var3 = var2.ipAddress;
                var3 = !var3;
                if (!var3) {
                    _fun8950_ip = 64;
                    continue _fun8950
                }
            case 53:
                var4 = var1.user;
                var3 = var4.ip_address;
            case 64:
                if (!var3) {
                    _fun8950_ip = 84;
                    continue _fun8950
                }
            case 67:
                var3 = var1.user;
                var3 = var3.ip_address;
                var2.ipAddress = var3;
            case 84:
                var3 = var2.did;
                if (var3) {
                    _fun8950_ip = 99;
                    continue _fun8950
                }
            case 93:
                var3 = var1.did;
            case 99:
                if (var3) {
                    _fun8950_ip = 145;
                    continue _fun8950
                }
            case 102:
                var3 = var1.user;
                var3 = var3.id;
                if (var3) {
                    _fun8950_ip = 126;
                    continue _fun8950
                }
            case 115:
                var4 = var1.user;
                var3 = var4.email;
            case 126:
                if (var3) {
                    _fun8950_ip = 139;
                    continue _fun8950
                }
            case 129:
                var4 = var1.user;
                var3 = var4.username;
            case 139:
                var2.did = var3;
            case 145:
                var3 = var1.timestamp;
                if (var3) {
                    _fun8950_ip = 186;
                    continue _fun8950
                }
            case 154:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 0;
                var4 = var7[var4];
                var6 = var6.bind(var0)(var4);
                var4 = var6.timestampInSeconds;
                var3 = var4.bind(var6)();
            case 186:
                var2.timestamp = var3;
                var3 = var1.abnormal_mechanism;
                if (!var3) {
                    _fun8950_ip = 213;
                    continue _fun8950
                }
            case 201:
                var3 = var1.abnormal_mechanism;
                var2.abnormal_mechanism = var3;
            case 213:
                var3 = var1.ignoreDuration;
                if (!var3) {
                    _fun8950_ip = 234;
                    continue _fun8950
                }
            case 222:
                var3 = var1.ignoreDuration;
                var2.ignoreDuration = var3;
            case 234:
                var3 = var1.sid;
                if (!var3) {
                    _fun8950_ip = 305;
                    continue _fun8950
                }
            case 243:
                var3 = var1.sid;
                var4 = var3.length;
                var3 = 32;
                if (!(var3 !== var4)) {
                    _fun8950_ip = 293;
                    continue _fun8950
                }
            case 261:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var4 = var4.bind(var0)(var3);
                var3 = var4.uuid4;
                var3 = var3.bind(var4)();
                _fun8950_ip = 299;
                continue _fun8950;
            case 293:
                var3 = var1.sid;
            case 299:
                var2.sid = var3;
            case 305:
                var3 = var1.init;
                if (!(var0 !== var3)) {
                    _fun8950_ip = 327;
                    continue _fun8950
                }
            case 315:
                var3 = var1.init;
                var2.init = var3;
            case 327:
                var3 = var2.did;
                var3 = !var3;
                if (!var3) {
                    _fun8950_ip = 345;
                    continue _fun8950
                }
            case 339:
                var3 = var1.did;
            case 345:
                if (!var3) {
                    _fun8950_ip = 382;
                    continue _fun8950
                }
            case 348:
                var5 = var1.did;
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '';
                var3 = var4.bind(var3)(var5);
                var2.did = var3;
            case 382:
                var3 = var1.started;
                var4 = 'number';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun8950_ip = 411;
                    continue _fun8950
                }
            case 399:
                var3 = var1.started;
                var2.started = var3;
            case 411:
                var3 = var2.ignoreDuration;
                if (var3) {
                    _fun8950_ip = 478;
                    continue _fun8950
                }
            case 420:
                var3 = var1.duration;
                var3 = typeof var3;
                if (!(var4 !== var3)) {
                    _fun8950_ip = 465;
                    continue _fun8950
                }
            case 432:
                var5 = var2.timestamp;
                var3 = var2.started;
                var5 = var5 - var3;
                var3 = 0;
                if (!(var5 >= var3)) {
                    _fun8950_ip = 457;
                    continue _fun8950
                }
            case 454:
                var3 = var5;
            case 457:
                var2.duration = var3;
                _fun8950_ip = 484;
                continue _fun8950;
            case 465:
                var3 = var1.duration;
                var2.duration = var3;
                _fun8950_ip = 484;
                continue _fun8950;
            case 478:
                var2.duration = var0;
            case 484:
                var3 = var1.release;
                if (!var3) {
                    _fun8950_ip = 505;
                    continue _fun8950
                }
            case 493:
                var3 = var1.release;
                var2.release = var3;
            case 505:
                var3 = var1.environment;
                if (!var3) {
                    _fun8950_ip = 526;
                    continue _fun8950
                }
            case 514:
                var3 = var1.environment;
                var2.environment = var3;
            case 526:
                var3 = var2.ipAddress;
                var3 = !var3;
                if (!var3) {
                    _fun8950_ip = 544;
                    continue _fun8950
                }
            case 538:
                var3 = var1.ipAddress;
            case 544:
                if (!var3) {
                    _fun8950_ip = 559;
                    continue _fun8950
                }
            case 547:
                var3 = var1.ipAddress;
                var2.ipAddress = var3;
            case 559:
                var3 = var2.userAgent;
                var3 = !var3;
                if (!var3) {
                    _fun8950_ip = 577;
                    continue _fun8950
                }
            case 571:
                var3 = var1.userAgent;
            case 577:
                if (!var3) {
                    _fun8950_ip = 592;
                    continue _fun8950
                }
            case 580:
                var3 = var1.userAgent;
                var2.userAgent = var3;
            case 592:
                var3 = var1.errors;
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun8950_ip = 617;
                    continue _fun8950
                }
            case 605:
                var3 = var1.errors;
                var2.errors = var3;
            case 617:
                var3 = var1.status;
                if (!var3) {
                    _fun8950_ip = 636;
                    continue _fun8950
                }
            case 625:
                var1 = var1.status;
                var2.status = var1;
            case 636:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = function arg0, arg1() {
        _fun8951: for (var _fun8951_ip = 0;;) switch (_fun8951_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = {};
                if (var1) {
                    _fun8951_ip = 39;
                    continue _fun8951
                }
            case 11:
                var4 = var3.status;
                var0 = 'ok';
                if (!(var0 === var4)) {
                    _fun8951_ip = 48;
                    continue _fun8951
                }
            case 24:
                var0 = {};
                var4 = 'exited';
                var0.status = var4;
                var2 = var0;
                _fun8951_ip = 48;
                continue _fun8951;
            case 39:
                var0 = {};
                var0.status = var1;
                var2 = var0;
            case 48:
                var1 = _closure1_slot2;
                var0 = undefined;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var1.closeSession = var3;
    var2 = function arg0() {
        _fun8952: for (var _fun8952_ip = 0;;) switch (_fun8952_ip) {
            case 0:
                var3 = arg0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 0;
                var0 = var8[var0];
                var2 = undefined;
                var5 = var7.bind(var2)(var0);
                var0 = var5.timestampInSeconds;
                var5 = var0.bind(var5)();
                var0 = {
                    'sid': null,
                    'init': true,
                    'timestamp': null,
                    'started': null,
                    'duration': 0,
                    'status': 'ok',
                    'errors': 0,
                    'ignoreDuration': false
                };
                var6 = 1;
                var6 = var8[var6];
                var7 = var7.bind(var2)(var6);
                var6 = var7.uuid4;
                var6 = var6.bind(var7)();
                var0.sid = var6;
                var0.timestamp = var5;
                var0.started = var5;
                var5 = function() {
                    _fun8953: for (var _fun8953_ip = 0;;) switch (_fun8953_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = {};
                            var4 = var2.sid;
                            var3 = global;
                            var1 = var3.HermesInternal;
                            var1 = var1.concat;
                            var5 = '';
                            var1 = var1.bind(var5)(var4);
                            var0.sid = var1;
                            var1 = var2.init;
                            var0.init = var1;
                            var7 = var3.Date;
                            var1 = var2.started;
                            var4 = 1000;
                            var8 = var4 * var1;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var9 = var6;
                            var1 = new var9[var7](var8, var7);
                            var6 = var1 instanceof Object ? var1 : var6;
                            var1 = var6.toISOString;
                            var1 = var1.bind(var6)();
                            var0.started = var1;
                            var6 = var3.Date;
                            var1 = var2.timestamp;
                            var8 = var4 * var1;
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var9 = var4;
                            var1 = new var9[var6](var8, var7);
                            var4 = var1 instanceof Object ? var1 : var4;
                            var1 = var4.toISOString;
                            var1 = var1.bind(var4)();
                            var0.timestamp = var1;
                            var1 = var2.status;
                            var0.status = var1;
                            var1 = var2.errors;
                            var0.errors = var1;
                            var1 = var2.did;
                            var4 = 'number';
                            var1 = typeof var1;
                            if (!(var4 !== var1)) {
                                _fun8953_ip = 217;
                                continue _fun8953
                            }
                        case 198:
                            var4 = var2.did;
                            var6 = 'string';
                            var4 = typeof var4;
                            var1 = undefined;
                            if (!(var6 === var4)) {
                                _fun8953_ip = 239;
                                continue _fun8953
                            }
                        case 217:
                            var4 = var2.did;
                            var3 = var3.HermesInternal;
                            var3 = var3.concat;
                            var1 = var3.bind(var5)(var4);
                        case 239:
                            var0.did = var1;
                            var1 = var2.duration;
                            var0.duration = var1;
                            var1 = var2.abnormal_mechanism;
                            var0.abnormal_mechanism = var1;
                            var1 = {};
                            var3 = var2.release;
                            var1.release = var3;
                            var3 = var2.environment;
                            var1.environment = var3;
                            var3 = var2.ipAddress;
                            var1.ip_address = var3;
                            var2 = var2.userAgent;
                            var1.user_agent = var2;
                            var0.attrs = var1;
                            return var0;
                    }
                };
                var0.toJSON = var5;
                var _closure2_slot0 = var0;
                if (!var3) {
                    _fun8952_ip = 116;
                    continue _fun8952
                }
            case 106:
                var1 = _closure1_slot2;
                var1 = var1.bind(var2)(var0, var3);
            case 116:
                return var0;
        }
    };
    var1.makeSession = var2;
    var1.updateSession = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [837, 830]);