// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        _fun99163: for (var _fun99163_ip = 0;;) switch (_fun99163_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                var4 = undefined;
                var1 = arguments.length;
                var3 = 1;
                if (!(var1 > var3)) {
                    _fun99163_ip = 25;
                    continue _fun99163
                }
            case 17:
                var1 = arguments[var3];
                if (!(var0 === var1)) {
                    _fun99163_ip = 29;
                    continue _fun99163
                }
            case 25:
                var1 = {};
                _fun99163_ip = 33;
                continue _fun99163;
            case 29:
                var1 = arguments[var3];
            case 33:
                var3 = var1.user;
                if (!var3) {
                    _fun99163_ip = 145;
                    continue _fun99163
                }
            case 41:
                var3 = var2.ipAddress;
                var3 = !var3;
                if (!var3) {
                    _fun99163_ip = 64;
                    continue _fun99163
                }
            case 53:
                var4 = var1.user;
                var3 = var4.ip_address;
            case 64:
                if (!var3) {
                    _fun99163_ip = 84;
                    continue _fun99163
                }
            case 67:
                var3 = var1.user;
                var3 = var3.ip_address;
                var2.ipAddress = var3;
            case 84:
                var3 = var2.did;
                if (var3) {
                    _fun99163_ip = 99;
                    continue _fun99163
                }
            case 93:
                var3 = var1.did;
            case 99:
                if (var3) {
                    _fun99163_ip = 145;
                    continue _fun99163
                }
            case 102:
                var3 = var1.user;
                var3 = var3.id;
                if (var3) {
                    _fun99163_ip = 126;
                    continue _fun99163
                }
            case 115:
                var4 = var1.user;
                var3 = var4.email;
            case 126:
                if (var3) {
                    _fun99163_ip = 139;
                    continue _fun99163
                }
            case 129:
                var4 = var1.user;
                var3 = var4.username;
            case 139:
                var2.did = var3;
            case 145:
                var3 = var1.timestamp;
                if (var3) {
                    _fun99163_ip = 186;
                    continue _fun99163
                }
            case 154:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 0;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.timestampInSeconds;
                var3 = var4.bind(var5)();
            case 186:
                var2.timestamp = var3;
                var3 = var1.abnormal_mechanism;
                if (!var3) {
                    _fun99163_ip = 213;
                    continue _fun99163
                }
            case 201:
                var3 = var1.abnormal_mechanism;
                var2.abnormal_mechanism = var3;
            case 213:
                var3 = var1.ignoreDuration;
                if (!var3) {
                    _fun99163_ip = 234;
                    continue _fun99163
                }
            case 222:
                var3 = var1.ignoreDuration;
                var2.ignoreDuration = var3;
            case 234:
                var3 = var1.sid;
                if (!var3) {
                    _fun99163_ip = 307;
                    continue _fun99163
                }
            case 243:
                var3 = var1.sid;
                var4 = var3.length;
                var3 = 32;
                if (!(var3 !== var4)) {
                    _fun99163_ip = 295;
                    continue _fun99163
                }
            case 261:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 0;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.uuid4;
                var3 = var3.bind(var4)();
                _fun99163_ip = 301;
                continue _fun99163;
            case 295:
                var3 = var1.sid;
            case 301:
                var2.sid = var3;
            case 307:
                var3 = var1.init;
                if (!(var0 !== var3)) {
                    _fun99163_ip = 329;
                    continue _fun99163
                }
            case 317:
                var3 = var1.init;
                var2.init = var3;
            case 329:
                var3 = var2.did;
                var3 = !var3;
                if (!var3) {
                    _fun99163_ip = 347;
                    continue _fun99163
                }
            case 341:
                var3 = var1.did;
            case 347:
                if (!var3) {
                    _fun99163_ip = 384;
                    continue _fun99163
                }
            case 350:
                var5 = var1.did;
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '';
                var3 = var4.bind(var3)(var5);
                var2.did = var3;
            case 384:
                var3 = var1.started;
                var4 = 'number';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun99163_ip = 413;
                    continue _fun99163
                }
            case 401:
                var3 = var1.started;
                var2.started = var3;
            case 413:
                var3 = var2.ignoreDuration;
                if (var3) {
                    _fun99163_ip = 480;
                    continue _fun99163
                }
            case 422:
                var3 = var1.duration;
                var3 = typeof var3;
                if (!(var4 !== var3)) {
                    _fun99163_ip = 467;
                    continue _fun99163
                }
            case 434:
                var5 = var2.timestamp;
                var3 = var2.started;
                var5 = var5 - var3;
                var3 = 0;
                if (!(var5 >= var3)) {
                    _fun99163_ip = 459;
                    continue _fun99163
                }
            case 456:
                var3 = var5;
            case 459:
                var2.duration = var3;
                _fun99163_ip = 486;
                continue _fun99163;
            case 467:
                var3 = var1.duration;
                var2.duration = var3;
                _fun99163_ip = 486;
                continue _fun99163;
            case 480:
                var2.duration = var0;
            case 486:
                var3 = var1.release;
                if (!var3) {
                    _fun99163_ip = 507;
                    continue _fun99163
                }
            case 495:
                var3 = var1.release;
                var2.release = var3;
            case 507:
                var3 = var1.environment;
                if (!var3) {
                    _fun99163_ip = 528;
                    continue _fun99163
                }
            case 516:
                var3 = var1.environment;
                var2.environment = var3;
            case 528:
                var3 = var2.ipAddress;
                var3 = !var3;
                if (!var3) {
                    _fun99163_ip = 546;
                    continue _fun99163
                }
            case 540:
                var3 = var1.ipAddress;
            case 546:
                if (!var3) {
                    _fun99163_ip = 561;
                    continue _fun99163
                }
            case 549:
                var3 = var1.ipAddress;
                var2.ipAddress = var3;
            case 561:
                var3 = var2.userAgent;
                var3 = !var3;
                if (!var3) {
                    _fun99163_ip = 579;
                    continue _fun99163
                }
            case 573:
                var3 = var1.userAgent;
            case 579:
                if (!var3) {
                    _fun99163_ip = 594;
                    continue _fun99163
                }
            case 582:
                var3 = var1.userAgent;
                var2.userAgent = var3;
            case 594:
                var3 = var1.errors;
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun99163_ip = 619;
                    continue _fun99163
                }
            case 607:
                var3 = var1.errors;
                var2.errors = var3;
            case 619:
                var3 = var1.status;
                if (!var3) {
                    _fun99163_ip = 638;
                    continue _fun99163
                }
            case 627:
                var1 = var1.status;
                var2.status = var1;
            case 638:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = function arg0, arg1() {
        _fun99164: for (var _fun99164_ip = 0;;) switch (_fun99164_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = {};
                if (var1) {
                    _fun99164_ip = 39;
                    continue _fun99164
                }
            case 11:
                var4 = var3.status;
                var0 = 'ok';
                if (!(var0 === var4)) {
                    _fun99164_ip = 48;
                    continue _fun99164
                }
            case 24:
                var0 = {};
                var4 = 'exited';
                var0.status = var4;
                var2 = var0;
                _fun99164_ip = 48;
                continue _fun99164;
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
        _fun99165: for (var _fun99165_ip = 0;;) switch (_fun99165_ip) {
            case 0:
                var3 = arg0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 0;
                var0 = var8[var6];
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
                var6 = var8[var6];
                var7 = var7.bind(var2)(var6);
                var6 = var7.uuid4;
                var6 = var6.bind(var7)();
                var0.sid = var6;
                var0.timestamp = var5;
                var0.started = var5;
                var5 = function() {
                    _fun99166: for (var _fun99166_ip = 0;;) switch (_fun99166_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 0;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.dropUndefinedKeys;
                            var0 = {};
                            var8 = var4.sid;
                            var5 = global;
                            var6 = var5.HermesInternal;
                            var6 = var6.concat;
                            var7 = '';
                            var6 = var6.bind(var7)(var8);
                            var0.sid = var6;
                            var6 = var4.init;
                            var0.init = var6;
                            var10 = var5.Date;
                            var6 = var4.started;
                            var8 = 1000;
                            var11 = var8 * var6;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var12 = var9;
                            var6 = new var12[var10](var11, var10);
                            var9 = var6 instanceof Object ? var6 : var9;
                            var6 = var9.toISOString;
                            var6 = var6.bind(var9)();
                            var0.started = var6;
                            var9 = var5.Date;
                            var6 = var4.timestamp;
                            var11 = var8 * var6;
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var12 = var8;
                            var6 = new var12[var9](var11, var10);
                            var8 = var6 instanceof Object ? var6 : var8;
                            var6 = var8.toISOString;
                            var6 = var6.bind(var8)();
                            var0.timestamp = var6;
                            var6 = var4.status;
                            var0.status = var6;
                            var6 = var4.errors;
                            var0.errors = var6;
                            var6 = var4.did;
                            var8 = 'number';
                            var6 = typeof var6;
                            if (!(var8 !== var6)) {
                                _fun99166_ip = 247;
                                continue _fun99166
                            }
                        case 228:
                            var6 = var4.did;
                            var8 = 'string';
                            var6 = typeof var6;
                            var3 = undefined;
                            if (!(var8 === var6)) {
                                _fun99166_ip = 269;
                                continue _fun99166
                            }
                        case 247:
                            var6 = var4.did;
                            var5 = var5.HermesInternal;
                            var5 = var5.concat;
                            var3 = var5.bind(var7)(var6);
                        case 269:
                            var0.did = var3;
                            var3 = var4.duration;
                            var0.duration = var3;
                            var3 = var4.abnormal_mechanism;
                            var0.abnormal_mechanism = var3;
                            var3 = {};
                            var5 = var4.release;
                            var3.release = var5;
                            var5 = var4.environment;
                            var3.environment = var5;
                            var5 = var4.ipAddress;
                            var3.ip_address = var5;
                            var4 = var4.userAgent;
                            var3.user_agent = var4;
                            var0.attrs = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0.toJSON = var5;
                var _closure2_slot0 = var0;
                if (!var3) {
                    _fun99165_ip = 115;
                    continue _fun99165
                }
            case 105:
                var1 = _closure1_slot2;
                var1 = var1.bind(var2)(var0, var3);
            case 115:
                return var0;
        }
    };
    var1.makeSession = var2;
    var1.updateSession = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12824]);