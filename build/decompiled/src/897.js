// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var6 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var5;
            var3 = function arg0() {
                var1 = 'isRelative';
                var0 = arg0;
                var0 = var1 in var0;
                return var0;
            };
            var _closure1_slot3 = var3;
            var4 = function arg0() {
                _fun9475: for (var _fun9475_ip = 0;;) switch (_fun9475_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure1_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var0);
                        if (var1) {
                            _fun9475_ip = 157;
                            continue _fun9475
                        }
                    case 23:
                        var1 = global;
                        var1 = var1.URL;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var7 = var2;
                        var6 = var0;
                        var1 = new var7[var1](var6, var5);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = '';
                        var2.search = var1;
                        var2.hash = var1;
                        var5 = ['80', '443'];
                        var4 = var5.includes;
                        var3 = var2.port;
                        var3 = var4.bind(var5)(var3);
                        if (!var3) {
                            _fun9475_ip = 105;
                            continue _fun9475
                        }
                    case 99:
                        var2.port = var1;
                    case 105:
                        var1 = var2.password;
                        if (!var1) {
                            _fun9475_ip = 126;
                            continue _fun9475
                        }
                    case 114:
                        var1 = '%filtered%';
                        var2.password = var1;
                    case 126:
                        var1 = var2.username;
                        if (!var1) {
                            _fun9475_ip = 146;
                            continue _fun9475
                        }
                    case 134:
                        var1 = '%filtered%';
                        var2.username = var1;
                    case 146:
                        var1 = var2.toString;
                        var1 = var1.bind(var2)();
                        return var1;
                    case 157:
                        var0 = var0.pathname;
                        return var0;
                }
            };
            var _closure1_slot4 = var4;
            var0 = function arg0, arg1, arg2, arg3() {
                _fun9476: for (var _fun9476_ip = 0;;) switch (_fun9476_ip) {
                    case 0:
                        var6 = arg0;
                        var2 = arg2;
                        var4 = arg3;
                        var1 = null;
                        var3 = var1 == var2;
                        var5 = undefined;
                        var0 = undefined;
                        if (var3) {
                            _fun9476_ip = 47;
                            continue _fun9476
                        }
                    case 22:
                        var3 = var2.method;
                        var2 = var1 == var3;
                        var0 = undefined;
                        if (var2) {
                            _fun9476_ip = 47;
                            continue _fun9476
                        }
                    case 37:
                        var2 = var3.toUpperCase;
                        var0 = var2.bind(var3)();
                    case 47:
                        var1 = var1 != var0;
                        var3 = 'GET';
                        if (!var1) {
                            _fun9476_ip = 63;
                            continue _fun9476
                        }
                    case 60:
                        var3 = var0;
                    case 63:
                        if (var4) {
                            _fun9476_ip = 110;
                            continue _fun9476
                        }
                    case 66:
                        var0 = '/';
                        if (!var6) {
                            _fun9476_ip = 107;
                            continue _fun9476
                        }
                    case 73:
                        var2 = 'client';
                        var1 = arg1;
                        if (!(var2 !== var1)) {
                            _fun9476_ip = 92;
                            continue _fun9476
                        }
                    case 84:
                        var1 = var6.pathname;
                        _fun9476_ip = 104;
                        continue _fun9476;
                    case 92:
                        var2 = _closure1_slot4;
                        var1 = var2.bind(var5)(var6);
                    case 104:
                        var0 = var1;
                    case 107:
                        var4 = var0;
                    case 110:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var1 = '';
                        var0 = ' ';
                        var0 = var2.bind(var1)(var3, var0, var4);
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var0 = 0;
            var5 = var5[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var _closure1_slot2 = var5;
            var5 = global;
            var8 = var5.Object;
            var7 = var8.defineProperty;
            var5 = var5.Symbol;
            var6 = var5.toStringTag;
            var5 = {};
            var9 = 'Module';
            var5.value = var9;
            var5 = var7.bind(var8)(var2, var6, var5);
            var5 = function arg0, arg1, arg2, arg3, arg4() {
                _fun9477: for (var _fun9477_ip = 0;;) switch (_fun9477_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = arg3;
                        var3 = arg4;
                        var10 = _closure1_slot2;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var9 = 1;
                        var8 = var1[var9];
                        var2 = undefined;
                        var8 = var7.bind(var2)(var8);
                        var12 = var8.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                        var11 = {};
                        var8 = arg2;
                        var8 = var10.bind(var2)(var11, var12, var8);
                        var1 = var1[var9];
                        var1 = var7.bind(var2)(var1);
                        var7 = var1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                        var1 = 'url';
                        var1 = var10.bind(var2)(var8, var7, var1);
                        if (!var3) {
                            _fun9477_ip = 143;
                            continue _fun9477
                        }
                    case 88:
                        var7 = 'url.template';
                        var8 = 'server';
                        if (!(var8 === var5)) {
                            _fun9477_ip = 108;
                            continue _fun9477
                        }
                    case 102:
                        var7 = 'http.route';
                    case 108:
                        var1[var7] = var3;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                        var7 = 'route';
                        var1[var8] = var7;
                    case 143:
                        var7 = null;
                        var7 = var7 != var4;
                        if (!var7) {
                            _fun9477_ip = 158;
                            continue _fun9477
                        }
                    case 152:
                        var7 = var4.method;
                    case 158:
                        if (!var7) {
                            _fun9477_ip = 204;
                            continue _fun9477
                        }
                    case 161:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD;
                        var10 = var4.method;
                        var7 = var10.toUpperCase;
                        var7 = var7.bind(var10)();
                        var1[var8] = var7;
                    case 204:
                        if (!var6) {
                            _fun9477_ip = 440;
                            continue _fun9477
                        }
                    case 210:
                        var7 = var6.search;
                        if (!var7) {
                            _fun9477_ip = 231;
                            continue _fun9477
                        }
                    case 219:
                        var7 = var6.search;
                        var1['url.query'] = var7;
                    case 231:
                        var7 = var6.hash;
                        if (!var7) {
                            _fun9477_ip = 250;
                            continue _fun9477
                        }
                    case 239:
                        var7 = var6.hash;
                        var1['url.fragment'] = var7;
                    case 250:
                        var7 = var6.pathname;
                        if (!var7) {
                            _fun9477_ip = 316;
                            continue _fun9477
                        }
                    case 259:
                        var7 = var6.pathname;
                        var1['url.path'] = var7;
                        var8 = var6.pathname;
                        var7 = '/';
                        if (!(var7 === var8)) {
                            _fun9477_ip = 316;
                            continue _fun9477
                        }
                    case 285:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                        var7 = 'route';
                        var1[var8] = var7;
                    case 316:
                        var7 = _closure1_slot3;
                        var7 = var7.bind(var2)(var6);
                        if (var7) {
                            _fun9477_ip = 440;
                            continue _fun9477
                        }
                    case 328:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.SEMANTIC_ATTRIBUTE_URL_FULL;
                        var7 = var6.href;
                        var1[var8] = var7;
                        var7 = var6.port;
                        if (!var7) {
                            _fun9477_ip = 382;
                            continue _fun9477
                        }
                    case 370:
                        var7 = var6.port;
                        var1['url.port'] = var7;
                    case 382:
                        var7 = var6.protocol;
                        if (!var7) {
                            _fun9477_ip = 403;
                            continue _fun9477
                        }
                    case 391:
                        var7 = var6.protocol;
                        var1['url.scheme'] = var7;
                    case 403:
                        var7 = var6.hostname;
                        if (!var7) {
                            _fun9477_ip = 440;
                            continue _fun9477
                        }
                    case 412:
                        var8 = 'url.domain';
                        var7 = 'server';
                        if (!(var7 === var5)) {
                            _fun9477_ip = 430;
                            continue _fun9477
                        }
                    case 426:
                        var8 = 'server.address';
                    case 430:
                        var7 = var6.hostname;
                        var1[var8] = var7;
                    case 440:
                        var0 = _closure1_slot5;
                        var17 = undefined;
                        var16 = var6;
                        var15 = var5;
                        var14 = var4;
                        var13 = var3;
                        var2 = var17[var0](var16, var15, var14, var13, var12);
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                }
            };
            var2.getHttpSpanDetailsFromUrlObject = var5;
            var5 = function arg0() {
                _fun9478: for (var _fun9478_ip = 0;;) switch (_fun9478_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.protocol;
                        var7 = var0.host;
                        var4 = var0.path;
                        var3 = '';
                        var2 = var3;
                        if (!var5) {
                            _fun9478_ip = 56;
                            continue _fun9478
                        }
                    case 31:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '://';
                        var2 = var1.bind(var3)(var5, var0);
                    case 56:
                        var0 = null;
                        var0 = var0 == var7;
                        var1 = undefined;
                        if (var0) {
                            _fun9478_ip = 148;
                            continue _fun9478
                        }
                    case 67:
                        var6 = var7.replace;
                        var5 = /^.*@/;
                        var0 = '[filtered]:[filtered]@';
                        var6 = var6.bind(var7)(var5, var0);
                        var5 = var6.replace;
                        var0 = /(:80)$/;
                        var6 = var5.bind(var6)(var0, var3);
                        var5 = var6.replace;
                        var0 = /(:443)$/;
                        var1 = var5.bind(var6)(var0, var3);
                    case 148:
                        if (var1) {
                            _fun9478_ip = 154;
                            continue _fun9478
                        }
                    case 151:
                        var1 = var3;
                    case 154:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var0 = var0.concat;
                        var0 = var0.bind(var3)(var2, var1, var4);
                        return var0;
                }
            };
            var2.getSanitizedUrlString = var5;
            var2.getSanitizedUrlStringFromUrlObject = var4;
            var2.isURLObjectRelative = var3;
            var3 = function arg0, arg1() {
                _fun9479: for (var _fun9479_ip = 0;;) switch (_fun9479_ip) {
                    case 0:
                        var8 = arg0;
                        var5 = arg1;
                        var2 = var8;
                        var0 = undefined;
                        var4 = undefined;
                        var1 = undefined;
                        var3 = undefined;
                        var7 = var8.indexOf;
                        var6 = '://';
                        var6 = var7.bind(var8)(var6);
                        var8 = 0;
                        var6 = var6 <= var8;
                        if (!var6) {
                            _fun9479_ip = 67;
                            continue _fun9479
                        }
                    case 43:
                        var10 = var2;
                        var9 = var10.indexOf;
                        var7 = '//';
                        var7 = var9.bind(var10)(var7);
                        var6 = var8 !== var7;
                    case 67:
                        var4 = var6;
                        var6 = null;
                        if (!(var6 == var5)) {
                            _fun9479_ip = 93;
                            continue _fun9479
                        }
                    case 76:
                        var7 = var4;
                        var6 = undefined;
                        if (!var7) {
                            _fun9479_ip = 90;
                            continue _fun9479
                        }
                    case 84:
                        var6 = 'thismessage:/';
                    case 90:
                        var5 = var6;
                    case 93:
                        var1 = var5;
                    case 96: // try_start_0
                        var5 = global;
                        var7 = var5.URL;
                        var6 = 'canParse';
                        var6 = var6 in var7;
                        if (!var6) {
                            _fun9479_ip = 144;
                            continue _fun9479
                        }
                    case 115:
                        var9 = var5.URL;
                        var8 = var9.canParse;
                        var7 = var2;
                        var6 = var1;
                        var6 = var8.bind(var9)(var7, var6);
                        if (var6) {
                            _fun9479_ip = 144;
                            continue _fun9479
                        }
                    case 142: // try_end0
                        return var0;
                    case 144: // try_start_1
                        var6 = var5.URL;
                        var12 = var2;
                        var11 = var1;
                        var2 = var6.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = var2;
                        var1 = new var13[var6](var12, var11, var10);
                        var3 = var1 instanceof Object ? var1 : var2;
                        var1 = var4;
                        if (var1) {
                            _fun9479_ip = 187;
                            continue _fun9479
                        }
                    case 182:
                        var1 = var3;
                        _fun9479_ip = 228;
                        continue _fun9479;
                    case 187:
                        var2 = {};
                        var2.isRelative = var4;
                        var4 = var3.pathname;
                        var2.pathname = var4;
                        var4 = var3.search;
                        var2.search = var4;
                        var3 = var3.hash;
                        var2.hash = var3;
                        var1 = var2;
                    case 228: // try_end1
                        return var1;
                    case 230: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 1);
                        return var0;
                }
            };
            var2.parseStringToURLObject = var3;
            var3 = function arg0() {
                _fun9480: for (var _fun9480_ip = 0;;) switch (_fun9480_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun9480_ip = 10;
                            continue _fun9480
                        }
                    case 6:
                        var0 = {};
                        return var0;
                    case 10:
                        var1 = var2.match;
                        var0 = /^(([^:\/?#]+):)?(\\/\\ / ([ ^ \/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
                                var4 = var1.bind(var2)(var0);
                                if (var4) {
                                    _fun9480_ip = 42;
                                    continue _fun9480
                                }
                                case 38:
                                var0 = {};
                                return var0;
                                case 42:
                                var0 = 6;
                                var3 = var4[var0];
                                if (var3) {
                                    _fun9480_ip = 56;
                                    continue _fun9480
                                }
                                case 52:
                                var3 = '';
                                case 56:
                                var0 = 8;
                                var2 = var4[var0];
                                if (var2) {
                                    _fun9480_ip = 70;
                                    continue _fun9480
                                }
                                case 66:
                                var2 = '';
                                case 70:
                                var0 = {};
                                var1 = 4;
                                var1 = var4[var1];
                                var0.host = var1;
                                var1 = 5;
                                var5 = var4[var1];
                                var0.path = var5;
                                var5 = 2;
                                var5 = var4[var5];
                                var0.protocol = var5;
                                var0.search = var3;
                                var0.hash = var2;
                                var1 = var4[var1];
                                var1 = var1 + var3;
                                var1 = var1 + var2;
                                var0.relative = var1;
                                return var0;
                            }
                        };
                        var2.parseUrl = var3;
                        var1 = function arg0() {
                            var3 = arg0;
                            var2 = var3.split;
                            var1 = /[?#]/;
                            var0 = 1;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = 0;
                            var0 = var1[var0];
                            return var0;
                        };
                        var2.stripUrlQueryAndFragment = var1;
                        return var0;
                })(undefined, undefined, undefined, undefined, undefined, undefined, [77, 838]);