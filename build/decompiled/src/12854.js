// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var5 = function(arg0) { // Original name: extractPathForTransaction, environment: var1
        _fun98932: for (var _fun98932_ip = 0;;) switch (_fun98932_ip) {
            case 0:
                var4 = arg0;
                var8 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var10 = 1;
                if (!(var1 > var10)) {
                    _fun98932_ip = 25;
                    continue _fun98932
                }
            case 17:
                var1 = arguments[var10];
                if (!(var8 === var1)) {
                    _fun98932_ip = 29;
                    continue _fun98932
                }
            case 25:
                var2 = {};
                _fun98932_ip = 33;
                continue _fun98932;
            case 29:
                var2 = arguments[var10];
            case 33:
                var0 = var4.method;
                if (!var0) {
                    _fun98932_ip = 58;
                    continue _fun98932
                }
            case 42:
                var3 = var4.method;
                var1 = var3.toUpperCase;
                var0 = var1.bind(var3)();
            case 58:
                var1 = var2.customRoute;
                if (var1) {
                    _fun98932_ip = 166;
                    continue _fun98932
                }
            case 67:
                var1 = var4.route;
                if (var1) {
                    _fun98932_ip = 166;
                    continue _fun98932
                }
            case 76:
                var6 = var4.originalUrl;
                if (var6) {
                    _fun98932_ip = 90;
                    continue _fun98932
                }
            case 85:
                var6 = var4.url;
            case 90:
                var9 = '';
                var5 = 'url';
                var3 = var9;
                var1 = var5;
                if (!var6) {
                    _fun98932_ip = 239;
                    continue _fun98932
                }
            case 110:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var8 = var7.bind(var8)(var6);
                var7 = var8.stripUrlQueryAndFragment;
                var6 = var4.originalUrl;
                if (var6) {
                    _fun98932_ip = 150;
                    continue _fun98932
                }
            case 145:
                var6 = var4.url;
            case 150:
                if (var6) {
                    _fun98932_ip = 156;
                    continue _fun98932
                }
            case 153:
                var6 = var9;
            case 156:
                var3 = var7.bind(var8)(var6);
                var1 = var5;
                _fun98932_ip = 239;
                continue _fun98932;
            case 166:
                var5 = var2.customRoute;
                if (var5) {
                    _fun98932_ip = 232;
                    continue _fun98932
                }
            case 175:
                var8 = var4.baseUrl;
                if (var8) {
                    _fun98932_ip = 188;
                    continue _fun98932
                }
            case 184:
                var8 = '';
            case 188:
                var7 = var4.route;
                if (!var7) {
                    _fun98932_ip = 209;
                    continue _fun98932
                }
            case 197:
                var4 = var4.route;
                var7 = var4.path;
            case 209:
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = '';
                var5 = var6.bind(var4)(var8, var7);
            case 232:
                var1 = 'route';
                var3 = var5;
            case 239:
                var4 = var2.method;
                if (!var4) {
                    _fun98932_ip = 251;
                    continue _fun98932
                }
            case 248:
                var4 = var0;
            case 251:
                var5 = '';
                if (!var4) {
                    _fun98932_ip = 261;
                    continue _fun98932
                }
            case 258:
                var5 = '' + var0;
            case 261:
                var4 = var2.method;
                if (!var4) {
                    _fun98932_ip = 276;
                    continue _fun98932
                }
            case 270:
                var4 = var2.path;
            case 276:
                var0 = var5;
                if (!var4) {
                    _fun98932_ip = 292;
                    continue _fun98932
                }
            case 282:
                var4 = ' ';
                var0 = var5 + var4;
            case 292:
                var4 = var2.path;
                if (!var4) {
                    _fun98932_ip = 304;
                    continue _fun98932
                }
            case 301:
                var4 = var3;
            case 304:
                var2 = var0;
                if (!var4) {
                    _fun98932_ip = 314;
                    continue _fun98932
                }
            case 310:
                var2 = var0 + var3;
            case 314:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function(arg0) { // Original name: extractRequestData, environment: var1
        _fun98933: for (var _fun98933_ip = 0;;) switch (_fun98933_ip) {
            case 0:
                var4 = arg0;
                var0 = undefined;
                var5 = undefined;
                var _closure2_slot0 = var4;
                var2 = arguments.length;
                var3 = 1;
                if (!(var2 > var3)) {
                    _fun98933_ip = 31;
                    continue _fun98933
                }
            case 23:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun98933_ip = 35;
                    continue _fun98933
                }
            case 31:
                var2 = {};
                _fun98933_ip = 39;
                continue _fun98933;
            case 35:
                var2 = arguments[var3];
            case 39:
                var3 = var2.include;
                if (!(var0 === var3)) {
                    _fun98933_ip = 56;
                    continue _fun98933
                }
            case 49:
                var3 = _closure1_slot4;
            case 56:
                var _closure2_slot1 = var3;
                var0 = {};
                var _closure2_slot2 = var0;
                var2 = var4.headers;
                if (var2) {
                    _fun98933_ip = 77;
                    continue _fun98933
                }
            case 75:
                var2 = {};
            case 77:
                var _closure2_slot3 = var2;
                var5 = var4.method;
                var _closure2_slot4 = var5;
                var9 = var2.host;
                if (var9) {
                    _fun98933_ip = 106;
                    continue _fun98933
                }
            case 100:
                var9 = var4.hostname;
            case 106:
                if (var9) {
                    _fun98933_ip = 115;
                    continue _fun98933
                }
            case 109:
                var9 = var4.host;
            case 115:
                if (var9) {
                    _fun98933_ip = 124;
                    continue _fun98933
                }
            case 118:
                var9 = '<no host>';
            case 124:
                var5 = var4.protocol;
                var2 = 'https';
                if (!(var2 !== var5)) {
                    _fun98933_ip = 172;
                    continue _fun98933
                }
            case 138:
                var5 = var4.socket;
                var6 = 'http';
                var8 = var6;
                if (!var5) {
                    _fun98933_ip = 175;
                    continue _fun98933
                }
            case 154:
                var5 = var4.socket;
                var5 = var5.encrypted;
                var8 = var6;
                if (!var5) {
                    _fun98933_ip = 175;
                    continue _fun98933
                }
            case 172:
                var8 = var2;
            case 175:
                var2 = var4.originalUrl;
                if (var2) {
                    _fun98933_ip = 189;
                    continue _fun98933
                }
            case 184:
                var2 = var4.url;
            case 189:
                if (var2) {
                    _fun98933_ip = 196;
                    continue _fun98933
                }
            case 192:
                var2 = '';
            case 196:
                var4 = var2.startsWith;
                var4 = var4.bind(var2)(var8);
                var7 = var2;
                var2 = var7;
                if (var4) {
                    _fun98933_ip = 252;
                    continue _fun98933
                }
            case 216:
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var14 = '';
                var12 = '://';
                var13 = var8;
                var11 = var9;
                var10 = var7;
                var2 = var14[var6](var13, var12, var11, var10, var9);
            case 252:
                var _closure2_slot5 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun98934: for (var _fun98934_ip = 0;;) switch (_fun98934_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = 'headers';
                            if (!(var0 !== var2)) {
                                _fun98934_ip = 646;
                                continue _fun98934
                            }
                        case 14:
                            var0 = 'method';
                            if (!(var0 !== var2)) {
                                _fun98934_ip = 624;
                                continue _fun98934
                            }
                        case 25:
                            var0 = 'url';
                            if (!(var0 !== var2)) {
                                _fun98934_ip = 602;
                                continue _fun98934
                            }
                        case 36:
                            var0 = 'cookies';
                            if (!(var0 !== var2)) {
                                _fun98934_ip = 504;
                                continue _fun98934
                            }
                        case 47:
                            var0 = 'query_string';
                            if (!(var0 !== var2)) {
                                _fun98934_ip = 305;
                                continue _fun98934
                            }
                        case 58:
                            var0 = 'data';
                            if (!(var0 !== var2)) {
                                _fun98934_ip = 119;
                                continue _fun98934
                            }
                        case 66:
                            var0 = {};
                            var4 = var0.hasOwnProperty;
                            var3 = var4.call;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var1, var2);
                            if (!var1) {
                                _fun98934_ip = 770;
                                continue _fun98934
                            }
                        case 98:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var0 = var0[var2];
                            var1[var2] = var0;
                            _fun98934_ip = 770;
                            continue _fun98934;
                        case 119:
                            var1 = _closure2_slot4;
                            var0 = 'GET';
                            if (!(var0 !== var1)) {
                                _fun98934_ip = 770;
                                continue _fun98934
                            }
                        case 139:
                            var1 = _closure2_slot4;
                            var0 = 'HEAD';
                            if (!(var0 !== var1)) {
                                _fun98934_ip = 770;
                                continue _fun98934
                            }
                        case 156:
                            var0 = _closure2_slot0;
                            var0 = var0.body;
                            var6 = undefined;
                            if (!(var6 !== var0)) {
                                _fun98934_ip = 770;
                                continue _fun98934
                            }
                        case 174:
                            var1 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 4;
                            var3 = var5[var3];
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.isString;
                            var3 = _closure2_slot0;
                            var3 = var3.body;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun98934_ip = 285;
                                continue _fun98934
                            }
                        case 224:
                            var3 = global;
                            var4 = var3.JSON;
                            var3 = var4.stringify;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 5;
                            var0 = var7[var0];
                            var6 = var5.bind(var6)(var0);
                            var5 = var6.normalize;
                            var0 = _closure2_slot0;
                            var0 = var0.body;
                            var0 = var5.bind(var6)(var0);
                            var0 = var3.bind(var4)(var0);
                            _fun98934_ip = 294;
                            continue _fun98934;
                        case 285:
                            var2 = _closure2_slot0;
                            var0 = var2.body;
                        case 294:
                            var1.data = var0;
                            _fun98934_ip = 770;
                            continue _fun98934;
                        case 305:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var6 = var0;
                            var5 = undefined;
                            var4 = undefined;
                            var3 = var0.originalUrl;
                            if (var3) {
                                _fun98934_ip = 340;
                                continue _fun98934
                            }
                        case 332:
                            var0 = var6;
                            var3 = var0.url;
                        case 340:
                            if (var3) {
                                _fun98934_ip = 347;
                                continue _fun98934
                            }
                        case 343:
                            var3 = '';
                        case 347:
                            var5 = var3;
                            var0 = undefined;
                            if (!var3) {
                                _fun98934_ip = 493;
                                continue _fun98934
                            }
                        case 358:
                            var8 = var5;
                            var7 = var8.startsWith;
                            var3 = '/';
                            var3 = var7.bind(var8)(var3);
                            if (!var3) {
                                _fun98934_ip = 406;
                                continue _fun98934
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
                                _fun98934_ip = 468;
                                continue _fun98934
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
                                _fun98934_ip = 484;
                                continue _fun98934
                            }
                        case 481:
                            var3 = var4;
                        case 484: // try_end0
                            var0 = var3;
                            _fun98934_ip = 493;
                            continue _fun98934;
                        case 489: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var0 = undefined;
                        case 493:
                            var1.query_string = var0;
                            _fun98934_ip = 770;
                            continue _fun98934;
                        case 504:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var0 = var0.cookies;
                            if (var0) {
                                _fun98934_ip = 586;
                                continue _fun98934
                            }
                        case 524:
                            var2 = _closure2_slot3;
                            var2 = var2.cookie;
                            if (!var2) {
                                _fun98934_ip = 583;
                                continue _fun98934
                            }
                        case 537:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 3;
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
                                _fun98934_ip = 591;
                                continue _fun98934
                            }
                        case 589:
                            var0 = {};
                        case 591:
                            var1.cookies = var0;
                            _fun98934_ip = 770;
                            continue _fun98934;
                        case 602:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot5;
                            var1.url = var0;
                            _fun98934_ip = 770;
                            continue _fun98934;
                        case 624:
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot4;
                            var1.method = var0;
                            _fun98934_ip = 770;
                            continue _fun98934;
                        case 646:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var2.headers = var1;
                            var3 = _closure2_slot1;
                            var2 = var3.includes;
                            var1 = 'cookies';
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun98934_ip = 699;
                                continue _fun98934
                            }
                        case 684:
                            var1 = _closure2_slot2;
                            var1 = var1.headers;
                            var1 = delete var1.cookie;
                        case 699:
                            var2 = _closure2_slot1;
                            var1 = var2.includes;
                            var0 = 'ip';
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun98934_ip = 770;
                                continue _fun98934
                            }
                        case 720:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.ipHeaderNames;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = _closure2_slot2;
                                var1 = var0.headers;
                                var0 = arg0;
                                var0 = delete var1[var0];
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 770:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function(arg0) { // Original name: winterCGHeadersToDict, environment: var1
        _fun98936: for (var _fun98936_ip = 0;;) switch (_fun98936_ip) {
            case 0:
                var2 = arg0;
                var3 = {};
                var0 = var3;
                var _closure2_slot0 = var3;
            case 14: // try_start_0
                var3 = var2;
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun98937: for (var _fun98937_ip = 0;;) switch (_fun98937_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'string';
                            var0 = typeof var2;
                            if (!(var1 === var0)) {
                                _fun98937_ip = 28;
                                continue _fun98937
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
            case 34: // try_end0
                _fun98936_ip = 114;
                continue _fun98936;
            case 36: // catch_target0
                CatchBlockStart(arg_register = 1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun98936_ip = 114;
                    continue _fun98936
                }
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'Sentry failed extracting headers from a request object. If you see this, please file an issue.';
                var1 = var2.bind(var3)(var1);
            case 114:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7.value = var6;
    var6 = '__esModule';
    var6 = var8.bind(var9)(var2, var6, var7);
    var6 = {
        'ip': false,
        'request': true,
        'transaction': true,
        'user': true
    };
    var _closure1_slot3 = var6;
    var6 = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'];
    var _closure1_slot4 = var6;
    var6 = ['id', 'username', 'email'];
    var _closure1_slot5 = var6;
    var2.DEFAULT_USER_INCLUDES = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: addRequestDataToEvent, environment: var1
        _fun98938: for (var _fun98938_ip = 0;;) switch (_fun98938_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var1 = arg2;
                var4 = global;
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = _closure1_slot3;
                var3 = var1;
                if (!var3) {
                    _fun98938_ip = 41;
                    continue _fun98938
                }
            case 35:
                var3 = var1.include;
            case 41:
                var1 = {};
                var1 = var7.bind(var8)(var1, var6, var3);
                var3 = var1.request;
                if (!var3) {
                    _fun98938_ip = 197;
                    continue _fun98938
                }
            case 62:
                var7 = var4.Array;
                var6 = var7.isArray;
                var3 = var1.request;
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun98938_ip = 107;
                    continue _fun98938
                }
            case 87:
                var7 = new Array(0);
                var6 = var7.concat;
                var3 = _closure1_slot4;
                var3 = var6.bind(var7)(var3);
                _fun98938_ip = 124;
                continue _fun98938;
            case 107:
                var8 = _closure1_slot2;
                var7 = var1.request;
                var6 = undefined;
                var3 = var8.bind(var6)(var7);
            case 124:
                var6 = var1.ip;
                if (!var6) {
                    _fun98938_ip = 146;
                    continue _fun98938
                }
            case 132:
                var7 = var3.push;
                var6 = 'ip';
                var6 = var7.bind(var3)(var6);
            case 146:
                var7 = _closure1_slot7;
                var6 = {};
                var6.include = var3;
                var3 = undefined;
                var9 = var7.bind(var3)(var5, var6);
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = var0.request;
                var3 = {};
                var3 = var7.bind(var8)(var3, var6, var9);
                var0.request = var3;
            case 197:
                var3 = var1.user;
                if (!var3) {
                    _fun98938_ip = 344;
                    continue _fun98938
                }
            case 208:
                var3 = var5.user;
                if (!var3) {
                    _fun98938_ip = 257;
                    continue _fun98938
                }
            case 216:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 4;
                var3 = var7[var3];
                var9 = undefined;
                var7 = var6.bind(var9)(var3);
                var6 = var7.isPlainObject;
                var3 = var5.user;
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun98938_ip = 261;
                    continue _fun98938
                }
            case 257:
                var6 = {};
                _fun98938_ip = 286;
                continue _fun98938;
            case 261:
                var8 = var5.user;
                var7 = var1.user;
                var3 = function(arg0, arg1) { // Original name: extractUserData, environment: var3
                    _fun98939: for (var _fun98939_ip = 0;;) switch (_fun98939_ip) {
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
                                _fun98939_ip = 46;
                                continue _fun98939
                            }
                        case 39:
                            var3 = _closure1_slot5;
                        case 46:
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun98940: for (var _fun98940_ip = 0;;) switch (_fun98940_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        if (!var1) {
                                            _fun98940_ip = 21;
                                            continue _fun98940
                                        }
                                    case 13:
                                        var3 = _closure3_slot0;
                                        var1 = var2 in var3;
                                    case 21:
                                        if (!var1) {
                                            _fun98940_ip = 40;
                                            continue _fun98940
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
            case 286:
                var7 = var4.Object;
                var3 = var7.keys;
                var3 = var3.bind(var7)(var6);
                var3 = var3.length;
                var9 = var6;
                if (!var3) {
                    _fun98938_ip = 344;
                    continue _fun98938
                }
            case 313:
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = var0.user;
                var3 = {};
                var3 = var7.bind(var8)(var3, var6, var9);
                var0.user = var3;
            case 344:
                var3 = var1.ip;
                if (!var3) {
                    _fun98938_ip = 479;
                    continue _fun98938
                }
            case 355:
                var3 = var5.headers;
                if (!var3) {
                    _fun98938_ip = 403;
                    continue _fun98938
                }
            case 364:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 2;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.getClientIPAddress;
                var6 = var5.headers;
                var3 = var7.bind(var8)(var6);
            case 403:
                if (var3) {
                    _fun98938_ip = 411;
                    continue _fun98938
                }
            case 406:
                var3 = var5.ip;
            case 411:
                if (var3) {
                    _fun98938_ip = 438;
                    continue _fun98938
                }
            case 414:
                var6 = var5.socket;
                if (!var6) {
                    _fun98938_ip = 435;
                    continue _fun98938
                }
            case 423:
                var7 = var5.socket;
                var6 = var7.remoteAddress;
            case 435:
                var3 = var6;
            case 438:
                if (!var3) {
                    _fun98938_ip = 479;
                    continue _fun98938
                }
            case 441:
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = var0.user;
                var4 = {};
                var4.ip_address = var3;
                var3 = {};
                var3 = var7.bind(var8)(var3, var6, var4);
                var0.user = var3;
            case 479:
                var3 = var1.transaction;
                if (!var3) {
                    _fun98938_ip = 497;
                    continue _fun98938
                }
            case 488:
                var4 = var0.transaction;
                var3 = !var4;
            case 497:
                if (!var3) {
                    _fun98938_ip = 513;
                    continue _fun98938
                }
            case 500:
                var6 = var0.type;
                var4 = 'transaction';
                var3 = var4 === var6;
            case 513:
                if (!var3) {
                    _fun98938_ip = 715;
                    continue _fun98938
                }
            case 519:
                var3 = var1.transaction;
                var1 = 'path';
                if (!(var1 !== var3)) {
                    _fun98938_ip = 682;
                    continue _fun98938
                }
            case 536:
                var1 = 'handler';
                if (!(var1 !== var3)) {
                    _fun98938_ip = 600;
                    continue _fun98938
                }
            case 544:
                var4 = _closure1_slot6;
                var3 = {
                    'path': true,
                    'method': true
                };
                var7 = var5._reconstructedRoute;
                var1 = undefined;
                var6 = undefined;
                if (!var7) {
                    _fun98938_ip = 581;
                    continue _fun98938
                }
            case 575:
                var6 = var5._reconstructedRoute;
            case 581:
                var3.customRoute = var6;
                var3 = var4.bind(var1)(var5, var3);
                var1 = 0;
                var1 = var3[var1];
                _fun98938_ip = 709;
                continue _fun98938;
            case 600:
                var3 = var5.route;
                if (!var3) {
                    _fun98938_ip = 621;
                    continue _fun98938
                }
            case 609:
                var4 = var5.route;
                var3 = var4.stack;
            case 621:
                if (!var3) {
                    _fun98938_ip = 642;
                    continue _fun98938
                }
            case 624:
                var4 = var5.route;
                var6 = var4.stack;
                var4 = 0;
                var3 = var6[var4];
            case 642:
                if (!var3) {
                    _fun98938_ip = 668;
                    continue _fun98938
                }
            case 645:
                var4 = var5.route;
                var6 = var4.stack;
                var4 = 0;
                var4 = var6[var4];
                var3 = var4.name;
            case 668:
                if (var3) {
                    _fun98938_ip = 677;
                    continue _fun98938
                }
            case 671:
                var3 = '<anonymous>';
            case 677:
                var1 = var3;
                _fun98938_ip = 709;
                continue _fun98938;
            case 682:
                var4 = _closure1_slot6;
                var3 = {};
                var2 = true;
                var3.path = var2;
                var2 = undefined;
                var3 = var4.bind(var2)(var5, var3);
                var2 = 0;
                var1 = var3[var2];
            case 709:
                var0.transaction = var1;
            case 715:
                return var0;
        }
    };
    var2.addRequestDataToEvent = var6;
    var2.extractPathForTransaction = var5;
    var2.extractRequestData = var4;
    var2.winterCGHeadersToDict = var3;
    var1 = function(arg0) { // Original name: winterCGRequestToRequestData, environment: var1
        var2 = arg0;
        var3 = _closure1_slot8;
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
    var2.winterCGRequestToRequestData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 12855, 12856, 12857, 12826, 12850, 12834, 12833]);