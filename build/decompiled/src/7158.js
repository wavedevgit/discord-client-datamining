// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var4 = function arg0() {
        _fun58772: for (var _fun58772_ip = 0;;) switch (_fun58772_ip) {
            case 0:
                var4 = arg0;
                var8 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 1;
                if (!(var2 > var0)) {
                    _fun58772_ip = 25;
                    continue _fun58772
                }
            case 17:
                var2 = arguments[var0];
                if (!(var8 === var2)) {
                    _fun58772_ip = 29;
                    continue _fun58772
                }
            case 25:
                var2 = {};
                _fun58772_ip = 33;
                continue _fun58772;
            case 29:
                var2 = arguments[var0];
            case 33:
                var0 = var4.method;
                if (!var0) {
                    _fun58772_ip = 58;
                    continue _fun58772
                }
            case 42:
                var3 = var4.method;
                var1 = var3.toUpperCase;
                var0 = var1.bind(var3)();
            case 58:
                var1 = var2.customRoute;
                if (var1) {
                    _fun58772_ip = 168;
                    continue _fun58772
                }
            case 67:
                var1 = var4.route;
                if (var1) {
                    _fun58772_ip = 168;
                    continue _fun58772
                }
            case 76:
                var6 = var4.originalUrl;
                if (var6) {
                    _fun58772_ip = 90;
                    continue _fun58772
                }
            case 85:
                var6 = var4.url;
            case 90:
                var9 = '';
                var5 = 'url';
                var3 = var9;
                var1 = var5;
                if (!var6) {
                    _fun58772_ip = 241;
                    continue _fun58772
                }
            case 110:
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 0;
                var6 = var10[var6];
                var8 = var7.bind(var8)(var6);
                var7 = var8.stripUrlQueryAndFragment;
                var6 = var4.originalUrl;
                if (var6) {
                    _fun58772_ip = 152;
                    continue _fun58772
                }
            case 147:
                var6 = var4.url;
            case 152:
                if (var6) {
                    _fun58772_ip = 158;
                    continue _fun58772
                }
            case 155:
                var6 = var9;
            case 158:
                var3 = var7.bind(var8)(var6);
                var1 = var5;
                _fun58772_ip = 241;
                continue _fun58772;
            case 168:
                var5 = var2.customRoute;
                if (var5) {
                    _fun58772_ip = 234;
                    continue _fun58772
                }
            case 177:
                var8 = var4.baseUrl;
                if (var8) {
                    _fun58772_ip = 190;
                    continue _fun58772
                }
            case 186:
                var8 = '';
            case 190:
                var7 = var4.route;
                if (!var7) {
                    _fun58772_ip = 211;
                    continue _fun58772
                }
            case 199:
                var4 = var4.route;
                var7 = var4.path;
            case 211:
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = '';
                var5 = var6.bind(var4)(var8, var7);
            case 234:
                var1 = 'route';
                var3 = var5;
            case 241:
                var4 = var2.method;
                if (!var4) {
                    _fun58772_ip = 253;
                    continue _fun58772
                }
            case 250:
                var4 = var0;
            case 253:
                var5 = '';
                if (!var4) {
                    _fun58772_ip = 263;
                    continue _fun58772
                }
            case 260:
                var5 = '' + var0;
            case 263:
                var4 = var2.method;
                if (!var4) {
                    _fun58772_ip = 278;
                    continue _fun58772
                }
            case 272:
                var4 = var2.path;
            case 278:
                var0 = var5;
                if (!var4) {
                    _fun58772_ip = 294;
                    continue _fun58772
                }
            case 284:
                var4 = ' ';
                var0 = var5 + var4;
            case 294:
                var4 = var2.path;
                if (!var4) {
                    _fun58772_ip = 306;
                    continue _fun58772
                }
            case 303:
                var4 = var3;
            case 306:
                var2 = var0;
                if (!var4) {
                    _fun58772_ip = 316;
                    continue _fun58772
                }
            case 312:
                var2 = var0 + var3;
            case 316:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function arg0, arg1() {
        _fun58773: for (var _fun58773_ip = 0;;) switch (_fun58773_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var4;
                if (var0) {
                    _fun58773_ip = 17;
                    continue _fun58773
                }
            case 15:
                var0 = {};
            case 17:
                var3 = var0.include;
                var0 = undefined;
                if (!(var0 === var3)) {
                    _fun58773_ip = 36;
                    continue _fun58773
                }
            case 29:
                var3 = _closure1_slot3;
            case 36:
                var _closure2_slot1 = var3;
                var0 = {};
                var _closure2_slot2 = var0;
                var2 = var4.headers;
                if (var2) {
                    _fun58773_ip = 57;
                    continue _fun58773
                }
            case 55:
                var2 = {};
            case 57:
                var _closure2_slot3 = var2;
                var5 = var4.method;
                var _closure2_slot4 = var5;
                var9 = var2.host;
                if (var9) {
                    _fun58773_ip = 86;
                    continue _fun58773
                }
            case 80:
                var9 = var4.hostname;
            case 86:
                if (var9) {
                    _fun58773_ip = 95;
                    continue _fun58773
                }
            case 89:
                var9 = var4.host;
            case 95:
                if (var9) {
                    _fun58773_ip = 104;
                    continue _fun58773
                }
            case 98:
                var9 = '<no host>';
            case 104:
                var5 = var4.protocol;
                var2 = 'https';
                if (!(var2 !== var5)) {
                    _fun58773_ip = 152;
                    continue _fun58773
                }
            case 118:
                var5 = var4.socket;
                var6 = 'http';
                var8 = var6;
                if (!var5) {
                    _fun58773_ip = 155;
                    continue _fun58773
                }
            case 134:
                var5 = var4.socket;
                var5 = var5.encrypted;
                var8 = var6;
                if (!var5) {
                    _fun58773_ip = 155;
                    continue _fun58773
                }
            case 152:
                var8 = var2;
            case 155:
                var2 = var4.originalUrl;
                if (var2) {
                    _fun58773_ip = 169;
                    continue _fun58773
                }
            case 164:
                var2 = var4.url;
            case 169:
                if (var2) {
                    _fun58773_ip = 176;
                    continue _fun58773
                }
            case 172:
                var2 = '';
            case 176:
                var4 = var2.startsWith;
                var4 = var4.bind(var2)(var8);
                var7 = var2;
                var2 = var7;
                if (var4) {
                    _fun58773_ip = 232;
                    continue _fun58773
                }
            case 196:
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var14 = '';
                var12 = '://';
                var13 = var8;
                var11 = var9;
                var10 = var7;
                var2 = var14[var6](var13, var12, var11, var10, var9);
            case 232:
                var _closure2_slot5 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun58774: for (var _fun58774_ip = 0;;) switch (_fun58774_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = 'headers';
                            if (!(var0 !== var2)) {
                                _fun58774_ip = 637;
                                continue _fun58774
                            }
                        case 14:
                            var0 = 'method';
                            if (!(var0 !== var2)) {
                                _fun58774_ip = 618;
                                continue _fun58774
                            }
                        case 25:
                            var0 = 'url';
                            if (!(var0 !== var2)) {
                                _fun58774_ip = 599;
                                continue _fun58774
                            }
                        case 36:
                            var0 = 'cookies';
                            if (!(var0 !== var2)) {
                                _fun58774_ip = 504;
                                continue _fun58774
                            }
                        case 47:
                            var0 = 'query_string';
                            if (!(var0 !== var2)) {
                                _fun58774_ip = 305;
                                continue _fun58774
                            }
                        case 58:
                            var0 = 'data';
                            if (!(var0 !== var2)) {
                                _fun58774_ip = 119;
                                continue _fun58774
                            }
                        case 66:
                            var0 = {};
                            var4 = var0.hasOwnProperty;
                            var3 = var4.call;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1, var2);
                            if (!var1) {
                                _fun58774_ip = 690;
                                continue _fun58774
                            }
                        case 98:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var0 = var0[var2];
                            var1[var2] = var0;
                            _fun58774_ip = 690;
                            continue _fun58774;
                        case 119:
                            var1 = _closure2_slot4;
                            var0 = 'GET';
                            if (!(var0 !== var1)) {
                                _fun58774_ip = 690;
                                continue _fun58774
                            }
                        case 139:
                            var1 = _closure2_slot4;
                            var0 = 'HEAD';
                            if (!(var0 !== var1)) {
                                _fun58774_ip = 690;
                                continue _fun58774
                            }
                        case 156:
                            var0 = _closure2_slot0;
                            var0 = var0.body;
                            var6 = undefined;
                            if (!(var6 !== var0)) {
                                _fun58774_ip = 690;
                                continue _fun58774
                            }
                        case 174:
                            var1 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 2;
                            var3 = var5[var3];
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.isString;
                            var3 = _closure2_slot0;
                            var3 = var3.body;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun58774_ip = 285;
                                continue _fun58774
                            }
                        case 224:
                            var3 = global;
                            var4 = var3.JSON;
                            var3 = var4.stringify;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 3;
                            var0 = var7[var0];
                            var6 = var5.bind(var6)(var0);
                            var5 = var6.normalize;
                            var0 = _closure2_slot0;
                            var0 = var0.body;
                            var0 = var5.bind(var6)(var0);
                            var0 = var3.bind(var4)(var0);
                            _fun58774_ip = 294;
                            continue _fun58774;
                        case 285:
                            var2 = _closure2_slot0;
                            var0 = var2.body;
                        case 294:
                            var1.data = var0;
                            _fun58774_ip = 690;
                            continue _fun58774;
                        case 305:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var6 = var0;
                            var5 = undefined;
                            var4 = undefined;
                            var3 = var0.originalUrl;
                            if (var3) {
                                _fun58774_ip = 340;
                                continue _fun58774
                            }
                        case 332:
                            var0 = var6;
                            var3 = var0.url;
                        case 340:
                            if (var3) {
                                _fun58774_ip = 347;
                                continue _fun58774
                            }
                        case 343:
                            var3 = '';
                        case 347:
                            var5 = var3;
                            var0 = undefined;
                            if (!var3) {
                                _fun58774_ip = 493;
                                continue _fun58774
                            }
                        case 358:
                            var8 = var5;
                            var7 = var8.startsWith;
                            var3 = '/';
                            var3 = var7.bind(var8)(var3);
                            if (!var3) {
                                _fun58774_ip = 406;
                                continue _fun58774
                            }
                        case 379:
                            var8 = var5;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var3 = 'http://dogs.are.great';
                            var5 = var7.bind(var3)(var8);
                        case 406: // try_start_0
                            var6 = var6.query;
                            var3 = var6;
                            if (var6) {
                                _fun58774_ip = 468;
                                continue _fun58774
                            }
                        case 418:
                            var6 = global;
                            var7 = var6.URL;
                            var10 = var5;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var11 = var6;
                            var5 = new var11[var7](var10, var9);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var7 = var5.search;
                            var6 = var7.slice;
                            var5 = 1;
                            var3 = var6.bind(var7)(var5);
                        case 468:
                            var4 = var3;
                            var5 = var3.length;
                            var3 = undefined;
                            if (!var5) {
                                _fun58774_ip = 484;
                                continue _fun58774
                            }
                        case 481:
                            var3 = var4;
                        case 484: // try_end0
                            var0 = var3;
                            _fun58774_ip = 493;
                            continue _fun58774;
                        case 489: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var0 = undefined;
                        case 493:
                            var1.query_string = var0;
                            _fun58774_ip = 690;
                            continue _fun58774;
                        case 504:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var0 = var0.cookies;
                            if (var0) {
                                _fun58774_ip = 586;
                                continue _fun58774
                            }
                        case 524:
                            var2 = _closure2_slot3;
                            var2 = var2.cookie;
                            if (!var2) {
                                _fun58774_ip = 583;
                                continue _fun58774
                            }
                        case 537:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 1;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.parseCookie;
                            var3 = _closure2_slot3;
                            var3 = var3.cookie;
                            var2 = var4.bind(var5)(var3);
                        case 583:
                            var0 = var2;
                        case 586:
                            if (var0) {
                                _fun58774_ip = 591;
                                continue _fun58774
                            }
                        case 589:
                            var0 = {};
                        case 591:
                            var1.cookies = var0;
                            _fun58774_ip = 690;
                            continue _fun58774;
                        case 599:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot5;
                            var1.url = var0;
                            _fun58774_ip = 690;
                            continue _fun58774;
                        case 618:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot4;
                            var1.method = var0;
                            _fun58774_ip = 690;
                            continue _fun58774;
                        case 637:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var2.headers = var1;
                            var3 = _closure2_slot1;
                            var2 = var3.includes;
                            var1 = 'cookies';
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun58774_ip = 690;
                                continue _fun58774
                            }
                        case 675:
                            var0 = _closure2_slot2;
                            var0 = var0.headers;
                            var0 = delete var0.cookie;
                        case 690:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var2 = function arg0() {
        _fun58775: for (var _fun58775_ip = 0;;) switch (_fun58775_ip) {
            case 0:
                var2 = arg0;
                var3 = {};
                var0 = var3;
                var _closure2_slot0 = var3;
            case 14: // try_start_0
                var3 = var2;
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun58776: for (var _fun58776_ip = 0;;) switch (_fun58776_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'string';
                            var0 = typeof var2;
                            if (!(var1 === var0)) {
                                _fun58776_ip = 28;
                                continue _fun58776
                            }
                        case 14:
                            var1 = _closure2_slot0;
                            var0 = arg1;
                            var1[var0] = var2;
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 32: // try_end0
                _fun58775_ip = 112;
                continue _fun58775;
            case 34: // catch_target0
                CatchBlockStart(arg_register = 1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 4;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun58775_ip = 112;
                    continue _fun58775
                }
            case 70:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 5;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'Sentry failed extracting headers from a request object. If you see this, please file an issue.';
                var1 = var2.bind(var3)(var1);
            case 112:
                return var0;
        }
    };
    var _closure1_slot7 = var2;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var1, var5, var6);
    var5 = {
        'ip': false,
        'request': true,
        'transaction': true,
        'user': true
    };
    var _closure1_slot2 = var5;
    var5 = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'];
    var _closure1_slot3 = var5;
    var5 = ['id', 'username', 'email'];
    var _closure1_slot4 = var5;
    var1.DEFAULT_USER_INCLUDES = var5;
    var5 = function arg0, arg1, arg2() {
        _fun58777: for (var _fun58777_ip = 0;;) switch (_fun58777_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var1 = arg2;
                var4 = global;
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = _closure1_slot2;
                var3 = var1;
                if (!var3) {
                    _fun58777_ip = 41;
                    continue _fun58777
                }
            case 35:
                var3 = var1.include;
            case 41:
                var1 = {};
                var1 = var7.bind(var8)(var1, var6, var3);
                var3 = var1.request;
                if (!var3) {
                    _fun58777_ip = 148;
                    continue _fun58777
                }
            case 59:
                var7 = var4.Array;
                var6 = var7.isArray;
                var3 = var1.request;
                var3 = var6.bind(var7)(var3);
                var7 = _closure1_slot6;
                var6 = undefined;
                if (var3) {
                    _fun58777_ip = 97;
                    continue _fun58777
                }
            case 90:
                var9 = var7.bind(var6)(var5);
                _fun58777_ip = 116;
                continue _fun58777;
            case 97:
                var3 = {};
                var8 = var1.request;
                var3.include = var8;
                var9 = var7.bind(var6)(var5, var3);
            case 116:
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = var0.request;
                var3 = {};
                var3 = var7.bind(var8)(var3, var6, var9);
                var0.request = var3;
            case 148:
                var3 = var1.user;
                if (!var3) {
                    _fun58777_ip = 293;
                    continue _fun58777
                }
            case 159:
                var3 = var5.user;
                if (!var3) {
                    _fun58777_ip = 208;
                    continue _fun58777
                }
            case 167:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var9 = undefined;
                var7 = var6.bind(var9)(var3);
                var6 = var7.isPlainObject;
                var3 = var5.user;
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun58777_ip = 212;
                    continue _fun58777
                }
            case 208:
                var6 = {};
                _fun58777_ip = 235;
                continue _fun58777;
            case 212:
                var8 = var5.user;
                var7 = var1.user;
                var3 = function arg0, arg1() {
                    _fun58778: for (var _fun58778_ip = 0;;) switch (_fun58778_ip) {
                        case 0:
                            var3 = arg1;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = {};
                            var _closure3_slot1 = var0;
                            var2 = global;
                            var4 = var2.Array;
                            var2 = var4.isArray;
                            var2 = var2.bind(var4)(var3);
                            if (var2) {
                                _fun58778_ip = 46;
                                continue _fun58778
                            }
                        case 39:
                            var3 = _closure1_slot4;
                        case 46:
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun58779: for (var _fun58779_ip = 0;;) switch (_fun58779_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        if (!var1) {
                                            _fun58779_ip = 21;
                                            continue _fun58779
                                        }
                                    case 13:
                                        var3 = _closure3_slot0;
                                        var1 = var2 in var3;
                                    case 21:
                                        if (!var1) {
                                            _fun58779_ip = 40;
                                            continue _fun58779
                                        }
                                    case 24:
                                        var1 = _closure3_slot1;
                                        var0 = _closure3_slot0;
                                        var0 = var0[var2];
                                        var1[var2] = var0;
                                    case 40:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var6 = var3.bind(var9)(var8, var7);
            case 235:
                var7 = var4.Object;
                var3 = var7.keys;
                var3 = var3.bind(var7)(var6);
                var3 = var3.length;
                var9 = var6;
                if (!var3) {
                    _fun58777_ip = 293;
                    continue _fun58777
                }
            case 262:
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = var0.user;
                var3 = {};
                var3 = var7.bind(var8)(var3, var6, var9);
                var0.user = var3;
            case 293:
                var3 = var1.ip;
                if (!var3) {
                    _fun58777_ip = 374;
                    continue _fun58777
                }
            case 301:
                var3 = var5.ip;
                if (var3) {
                    _fun58777_ip = 333;
                    continue _fun58777
                }
            case 309:
                var6 = var5.socket;
                if (!var6) {
                    _fun58777_ip = 330;
                    continue _fun58777
                }
            case 318:
                var7 = var5.socket;
                var6 = var7.remoteAddress;
            case 330:
                var3 = var6;
            case 333:
                if (!var3) {
                    _fun58777_ip = 374;
                    continue _fun58777
                }
            case 336:
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = var0.user;
                var4 = {};
                var4.ip_address = var3;
                var3 = {};
                var3 = var7.bind(var8)(var3, var6, var4);
                var0.user = var3;
            case 374:
                var3 = var1.transaction;
                if (!var3) {
                    _fun58777_ip = 392;
                    continue _fun58777
                }
            case 383:
                var4 = var0.transaction;
                var3 = !var4;
            case 392:
                if (!var3) {
                    _fun58777_ip = 408;
                    continue _fun58777
                }
            case 395:
                var6 = var0.type;
                var4 = 'transaction';
                var3 = var4 === var6;
            case 408:
                if (!var3) {
                    _fun58777_ip = 610;
                    continue _fun58777
                }
            case 414:
                var3 = var1.transaction;
                var1 = 'path';
                if (!(var1 !== var3)) {
                    _fun58777_ip = 577;
                    continue _fun58777
                }
            case 431:
                var1 = 'handler';
                if (!(var1 !== var3)) {
                    _fun58777_ip = 495;
                    continue _fun58777
                }
            case 439:
                var4 = _closure1_slot5;
                var3 = {
                    'path': true,
                    'method': true
                };
                var7 = var5._reconstructedRoute;
                var1 = undefined;
                var6 = undefined;
                if (!var7) {
                    _fun58777_ip = 476;
                    continue _fun58777
                }
            case 470:
                var6 = var5._reconstructedRoute;
            case 476:
                var3.customRoute = var6;
                var3 = var4.bind(var1)(var5, var3);
                var1 = 0;
                var1 = var3[var1];
                _fun58777_ip = 604;
                continue _fun58777;
            case 495:
                var3 = var5.route;
                if (!var3) {
                    _fun58777_ip = 516;
                    continue _fun58777
                }
            case 504:
                var4 = var5.route;
                var3 = var4.stack;
            case 516:
                if (!var3) {
                    _fun58777_ip = 537;
                    continue _fun58777
                }
            case 519:
                var4 = var5.route;
                var6 = var4.stack;
                var4 = 0;
                var3 = var6[var4];
            case 537:
                if (!var3) {
                    _fun58777_ip = 563;
                    continue _fun58777
                }
            case 540:
                var4 = var5.route;
                var6 = var4.stack;
                var4 = 0;
                var4 = var6[var4];
                var3 = var4.name;
            case 563:
                if (var3) {
                    _fun58777_ip = 572;
                    continue _fun58777
                }
            case 566:
                var3 = '<anonymous>';
            case 572:
                var1 = var3;
                _fun58777_ip = 604;
                continue _fun58777;
            case 577:
                var4 = _closure1_slot5;
                var3 = {};
                var2 = true;
                var3.path = var2;
                var2 = undefined;
                var3 = var4.bind(var2)(var5, var3);
                var2 = 0;
                var1 = var3[var2];
            case 604:
                var0.transaction = var1;
            case 610:
                return var0;
        }
    };
    var1.addRequestDataToEvent = var5;
    var1.extractPathForTransaction = var4;
    var1.extractRequestData = var3;
    var1.winterCGHeadersToDict = var2;
    var0 = function arg0() {
        var2 = arg0;
        var3 = _closure1_slot7;
        var1 = var2.headers;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var0 = {};
        var3 = var2.method;
        var0.method = var3;
        var2 = var2.url;
        var0.url = var2;
        var0.headers = var1;
        return var0;
    };
    var1.winterCGRequestToRequestData = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7159, 7160, 7130, 7154, 7138, 7137]);