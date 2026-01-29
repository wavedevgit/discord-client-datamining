// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            _fun3111: for (var _fun3111_ip = 0;;) switch (_fun3111_ip) {
                        case 0:
                            var6 = metroImportDefault;
                            var2 = exports;
                            var4 = dependencyMap;
                            var0 = function(arg0) { // Original name: validateBaseUrl, environment: var1
                                    var2 = /^(?:(?:(?:https?|ftp):)?\\/\\ / )( ? : ( ? : [1 - 9]\ d ? | 1\ d\ d | 2[01]\ d | 22[0 - 3])( ? : \.( ? : 1 ? \d {
                                    1,
                                    2
                                } | 2[0 - 4]\ d | 25[0 - 5])) {
                                    2
                                }( ? : \.( ? : [1 - 9]\ d ? | 1\ d\ d | 2[0 - 4]\ d | 25[0 - 4])) | ( ? : ( ? : [a - z0 - 9 \u00a1 - \uffff][a - z0 - 9 \u00a1 - \uffff_ - ] {
                                    0,
                                    62
                                }) ? [a - z0 - 9 \u00a1 - \uffff]\.) * ( ? : [a - z\u00a1 - \uffff] {
                                    2,
                                }\. ? ))( ? ::\d {
                                    2,
                                    5
                                }) ? ( ? : [\/?#]\S*)?$/;
                                        var1 = var2.test;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var _closure1_slot3 = var0; var3 = global; var8 = var3.Object; var7 = var8.defineProperty; var5 = {}; var0 = true; var5.value = var0; var0 = '__esModule'; var0 = var7.bind(var8)(var2, var0, var5); var0 = 0; var5 = var4[var0]; var0 = undefined; var5 = var6.bind(var0)(var5);
                                    var _closure1_slot0 = var5; var5 = 1; var5 = var4[var5]; var5 = var6.bind(var0)(var5);
                                    var _closure1_slot1 = var5; var5 = null;
                                    var _closure1_slot2 = var5; var5 = 2; var7 = var4[var5]; var7 = var6.bind(var0)(var7);
                                    if (!var7) {
                                        _fun3111_ip = 236;
                                        continue _fun3111
                                    }
                                    case 109:
                                    var7 = var4[var5]; var8 = var6.bind(var0)(var7); var7 = var8.getConstants; var7 = var7.bind(var8)(); var7 = var7.BLOB_URI_SCHEME; var8 = 'string'; var7 = typeof var7;
                                    if (!(var8 === var7)) {
                                        _fun3111_ip = 236;
                                        continue _fun3111
                                    }
                                    case 145:
                                    var5 = var4[var5]; var6 = var6.bind(var0)(var5); var5 = var6.getConstants; var6 = var5.bind(var6)(); var7 = var6.BLOB_URI_SCHEME; var5 = ':'; var5 = var7 + var5; _closure1_slot2 = var5; var7 = var6.BLOB_URI_HOST; var7 = typeof var7;
                                    if (!(var8 === var7)) {
                                        _fun3111_ip = 236;
                                        continue _fun3111
                                    }
                                    case 195:
                                    var8 = var6.BLOB_URI_HOST; var3 = var3.HermesInternal; var7 = var3.concat; var6 = '//'; var3 = '/'; var3 = var7.bind(var6)(var8, var3); var3 = var5 + var3; _closure1_slot2 = var3;
                                    case 236:
                                    var1 = function() { // Environment: var1
                                        var4 = _closure1_slot1;
                                        var3 = function(arg0, arg1) { // Original name: URL, environment: var5
                                            _fun3114: for (var _fun3114_ip = 0;;) switch (_fun3114_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var7 = arg1;
                                                    var2 = this;
                                                    var5 = _closure1_slot0;
                                                    var4 = _closure2_slot0;
                                                    var0 = undefined;
                                                    var4 = var5.bind(var0)(var2, var4);
                                                    var4 = null;
                                                    var2._searchParamsInstance = var4;
                                                    if (!var7) {
                                                        _fun3114_ip = 288;
                                                        continue _fun3114
                                                    }
                                                case 45:
                                                    var4 = _closure1_slot3;
                                                    var4 = var4.bind(var0)(var1);
                                                    if (var4) {
                                                        _fun3114_ip = 288;
                                                        continue _fun3114
                                                    }
                                                case 60:
                                                    var5 = 'string';
                                                    var4 = typeof var7;
                                                    if (!(var5 !== var4)) {
                                                        _fun3114_ip = 82;
                                                        continue _fun3114
                                                    }
                                                case 71:
                                                    var4 = var7.toString;
                                                    var4 = var4.bind(var7)();
                                                    _fun3114_ip = 149;
                                                    continue _fun3114;
                                                case 82:
                                                    var3 = _closure1_slot3;
                                                    var3 = var3.bind(var0)(var7);
                                                    var4 = var7;
                                                    if (var3) {
                                                        _fun3114_ip = 149;
                                                        continue _fun3114
                                                    }
                                                case 97:
                                                    var3 = global;
                                                    var6 = var3.TypeError;
                                                    var3 = var3.HermesInternal;
                                                    var5 = var3.concat;
                                                    var3 = 'Invalid base URL: ';
                                                    var10 = var5.bind(var3)(var7);
                                                    var5 = var6.prototype;
                                                    var5 = Object.create(var5, {
                                                        constructor: {
                                                            value: var6
                                                        }
                                                    });
                                                    var11 = var5;
                                                    var3 = new var11[var6](var10, var9);
                                                    var3 = var3 instanceof Object ? var3 : var5;
                                                    throw var3;
                                                case 149:
                                                    var3 = var4.endsWith;
                                                    var5 = '/';
                                                    var3 = var3.bind(var4)(var5);
                                                    var8 = var4;
                                                    var6 = var8;
                                                    if (!var3) {
                                                        _fun3114_ip = 198;
                                                        continue _fun3114
                                                    }
                                                case 173:
                                                    var7 = var8.slice;
                                                    var4 = var8.length;
                                                    var3 = 1;
                                                    var4 = var4 - var3;
                                                    var3 = 0;
                                                    var6 = var7.bind(var8)(var3, var4);
                                                case 198:
                                                    var3 = var1.startsWith;
                                                    var3 = var3.bind(var1)(var5);
                                                    var4 = var1;
                                                    if (var3) {
                                                        _fun3114_ip = 233;
                                                        continue _fun3114
                                                    }
                                                case 215:
                                                    var3 = global;
                                                    var3 = var3.HermesInternal;
                                                    var3 = var3.concat;
                                                    var4 = var3.bind(var5)(var1);
                                                case 233:
                                                    var3 = var6.endsWith;
                                                    var3 = var3.bind(var6)(var4);
                                                    var5 = var4;
                                                    if (!var3) {
                                                        _fun3114_ip = 254;
                                                        continue _fun3114
                                                    }
                                                case 250:
                                                    var5 = '';
                                                case 254:
                                                    var3 = global;
                                                    var3 = var3.HermesInternal;
                                                    var4 = var3.concat;
                                                    var3 = '';
                                                    var3 = var4.bind(var3)(var6, var5);
                                                    var2._url = var3;
                                                    _fun3114_ip = 483;
                                                    continue _fun3114;
                                                case 288:
                                                    var2._url = var1;
                                                    var3 = var2._url;
                                                    var1 = var3.includes;
                                                    var6 = '#';
                                                    var1 = var1.bind(var3)(var6);
                                                    if (!var1) {
                                                        _fun3114_ip = 401;
                                                        continue _fun3114
                                                    }
                                                case 317:
                                                    var3 = var2._url;
                                                    var1 = var3.split;
                                                    var4 = var1.bind(var3)(var6);
                                                    var1 = 0;
                                                    var5 = var4[var1];
                                                    var3 = var5.split;
                                                    var1 = '://';
                                                    var3 = var3.bind(var5)(var1);
                                                    var1 = 1;
                                                    var5 = var3[var1];
                                                    var3 = var5.includes;
                                                    var1 = '/';
                                                    var1 = var3.bind(var5)(var1);
                                                    if (var1) {
                                                        _fun3114_ip = 401;
                                                        continue _fun3114
                                                    }
                                                case 379:
                                                    var3 = var4.join;
                                                    var1 = '/#';
                                                    var1 = var3.bind(var4)(var1);
                                                    var2._url = var1;
                                                case 401:
                                                    var4 = var2._url;
                                                    var1 = var4.endsWith;
                                                    var3 = '/';
                                                    var1 = var1.bind(var4)(var3);
                                                    if (var1) {
                                                        _fun3114_ip = 445;
                                                        continue _fun3114
                                                    }
                                                case 425:
                                                    var7 = var2._url;
                                                    var5 = var7.includes;
                                                    var4 = '?';
                                                    var1 = var5.bind(var7)(var4);
                                                case 445:
                                                    if (var1) {
                                                        _fun3114_ip = 464;
                                                        continue _fun3114
                                                    }
                                                case 448:
                                                    var5 = var2._url;
                                                    var4 = var5.includes;
                                                    var1 = var4.bind(var5)(var6);
                                                case 464:
                                                    if (var1) {
                                                        _fun3114_ip = 483;
                                                        continue _fun3114
                                                    }
                                                case 467:
                                                    var1 = var2._url;
                                                    var1 = var1 + var3;
                                                    var2._url = var1;
                                                case 483:
                                                    return var0;
                                            }
                                        };
                                        var _closure2_slot0 = var3;
                                        var0 = {};
                                        var1 = 'hash';
                                        var0.key = var1;
                                        var1 = function() { // Original name: get, environment: var5
                                            _fun3115: for (var _fun3115_ip = 0;;) switch (_fun3115_ip) {
                                                case 0:
                                                    var0 = this;
                                                    var2 = var0._url;
                                                    var1 = var2.match;
                                                    var0 = /#([^\/]*)/;
                                                    var2 = var1.bind(var2)(var0);
                                                    var0 = '';
                                                    if (!var2) {
                                                        _fun3115_ip = 70;
                                                        continue _fun3115
                                                    }
                                                case 41:
                                                    var1 = 1;
                                                    var3 = var2[var1];
                                                    var1 = global;
                                                    var1 = var1.HermesInternal;
                                                    var2 = var1.concat;
                                                    var1 = '#';
                                                    var0 = var2.bind(var1)(var3);
                                                case 70:
                                                    return var0;
                                            }
                                        };
                                        var0.get = var1;
                                        var2 = new Array(14);
                                        var2[0] = var0;
                                        var0 = {};
                                        var1 = 'host';
                                        var0.key = var1;
                                        var1 = function() { // Original name: get, environment: var5
                                                _fun3116: for (var _fun3116_ip = 0;;) switch (_fun3116_ip) {
                                                    case 0:
                                                        var0 = this;
                                                        var3 = var0._url;
                                                        var2 = var3.match;
                                                        var1 = /^https?:\\/\\ / ( ? : [ ^ @] + @) ? ([ ^: \/?#]+)/;
                                                                var1 = var2.bind(var3)(var1);
                                                                var3 = var0._url;
                                                                var2 = var3.match;
                                                                var0 = /:(\d+)(?=[\/?#]|$)/;
                                                                var4 = var2.bind(var3)(var0);
                                                                var2 = '';
                                                                var0 = var2;
                                                                if (!var1) {
                                                                    _fun3116_ip = 115;
                                                                    continue _fun3116
                                                                }
                                                                case 75:
                                                                var3 = 1;
                                                                var1 = var1[var3];
                                                                if (!var4) {
                                                                    _fun3116_ip = 111;
                                                                    continue _fun3116
                                                                }
                                                                case 85:
                                                                var5 = var4[var3];
                                                                var3 = global;
                                                                var3 = var3.HermesInternal;
                                                                var4 = var3.concat;
                                                                var3 = ':';
                                                                var2 = var4.bind(var3)(var5);
                                                                case 111:
                                                                var0 = var1 + var2;
                                                                case 115:
                                                                return var0;
                                                            }
                                                        };
                                                        var0.get = var1;
                                                        var2[1] = var0;
                                                        var0 = {};
                                                        var1 = 'hostname';
                                                        var0.key = var1;
                                                        var1 = function() { // Original name: get, environment: var5
                                                            _fun3117: for (var _fun3117_ip = 0;;) switch (_fun3117_ip) {
                                                                case 0:
                                                                    var0 = this;
                                                                    var2 = var0._url;
                                                                    var1 = var2.match;
                                                                    var0 = /^https?:\\/\\ / ( ? : [ ^ @] + @) ? ([ ^: \/?#]+)/;
                                                                            var2 = var1.bind(var2)(var0);
                                                                            var0 = '';
                                                                            if (!var2) {
                                                                                _fun3117_ip = 48;
                                                                                continue _fun3117
                                                                            }
                                                                            case 41:
                                                                            var1 = 1;
                                                                            var0 = var2[var1];
                                                                            case 48:
                                                                            return var0;
                                                                        }
                                                                    };
                                                                    var0.get = var1;
                                                                    var2[2] = var0;
                                                                    var0 = {};
                                                                    var1 = 'href';
                                                                    var0.key = var1;
                                                                    var1 = function() { // Original name: get, environment: var5
                                                                        var1 = this;
                                                                        var0 = var1.toString;
                                                                        var0 = var0.bind(var1)();
                                                                        return var0;
                                                                    };
                                                                    var0.get = var1;
                                                                    var2[3] = var0;
                                                                    var0 = {};
                                                                    var1 = 'origin';
                                                                    var0.key = var1;
                                                                    var1 = function() { // Original name: get, environment: var5
                                                                        _fun3119: for (var _fun3119_ip = 0;;) switch (_fun3119_ip) {
                                                                            case 0:
                                                                                var0 = this;
                                                                                var2 = var0._url;
                                                                                var1 = var2.match;
                                                                                var0 = /^(https?:\\/\\ / [ ^ \/]+)/;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = '';
                                                                                    if (!var2) {
                                                                                        _fun3119_ip = 48;
                                                                                        continue _fun3119
                                                                                    }
                                                                                    case 41:
                                                                                    var1 = 1;
                                                                                    var0 = var2[var1];
                                                                                    case 48:
                                                                                    return var0;
                                                                                }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[4] = var0;
                                                                        var0 = {};
                                                                        var1 = 'password';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3120: for (var _fun3120_ip = 0;;) switch (_fun3120_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._url;
                                                                                    var1 = var2.match;
                                                                                    var0 = /https?:\\/\\ / .*: (.*) @ / ;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = '';
                                                                                    if (!var2) {
                                                                                        _fun3120_ip = 48;
                                                                                        continue _fun3120
                                                                                    }
                                                                                case 41:
                                                                                    var1 = 1;
                                                                                    var0 = var2[var1];
                                                                                case 48:
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[5] = var0;
                                                                        var0 = {};
                                                                        var1 = 'pathname';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3121: for (var _fun3121_ip = 0;;) switch (_fun3121_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._url;
                                                                                    var1 = var2.match;
                                                                                    var0 = /https?:\\/\\ / [ ^ \/]+(\\/ [ ^ ? #] * ) ? /;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = var2;
                                                                                    if (!var0) {
                                                                                        _fun3121_ip = 47;
                                                                                        continue _fun3121
                                                                                    }
                                                                                case 40:
                                                                                    var1 = 1;
                                                                                    var0 = var2[var1];
                                                                                case 47:
                                                                                    if (var0) {
                                                                                        _fun3121_ip = 54;
                                                                                        continue _fun3121
                                                                                    }
                                                                                case 50:
                                                                                    var0 = '/';
                                                                                case 54:
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[6] = var0;
                                                                        var0 = {};
                                                                        var1 = 'port';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3122: for (var _fun3122_ip = 0;;) switch (_fun3122_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._url;
                                                                                    var1 = var2.match;
                                                                                    var0 = /:(\d+)(?=[\/?#]|$)/;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = '';
                                                                                    if (!var2) {
                                                                                        _fun3122_ip = 48;
                                                                                        continue _fun3122
                                                                                    }
                                                                                case 41:
                                                                                    var1 = 1;
                                                                                    var0 = var2[var1];
                                                                                case 48:
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[7] = var0;
                                                                        var0 = {};
                                                                        var1 = 'protocol';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3123: for (var _fun3123_ip = 0;;) switch (_fun3123_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._url;
                                                                                    var1 = var2.match;
                                                                                    var0 = /^([a-zA-Z][a-zA-Z\d+\-.]*):/;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = '';
                                                                                    if (!var2) {
                                                                                        _fun3123_ip = 56;
                                                                                        continue _fun3123
                                                                                    }
                                                                                case 41:
                                                                                    var1 = 1;
                                                                                    var2 = var2[var1];
                                                                                    var1 = ':';
                                                                                    var0 = var2 + var1;
                                                                                case 56:
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[8] = var0;
                                                                        var0 = {};
                                                                        var1 = 'search';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3124: for (var _fun3124_ip = 0;;) switch (_fun3124_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._url;
                                                                                    var1 = var2.match;
                                                                                    var0 = /\?([^#]*)/;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = '';
                                                                                    if (!var2) {
                                                                                        _fun3124_ip = 70;
                                                                                        continue _fun3124
                                                                                    }
                                                                                case 41:
                                                                                    var1 = 1;
                                                                                    var3 = var2[var1];
                                                                                    var1 = global;
                                                                                    var1 = var1.HermesInternal;
                                                                                    var2 = var1.concat;
                                                                                    var1 = '?';
                                                                                    var0 = var2.bind(var1)(var3);
                                                                                case 70:
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[9] = var0;
                                                                        var0 = {};
                                                                        var1 = 'searchParams';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3125: for (var _fun3125_ip = 0;;) switch (_fun3125_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._searchParamsInstance;
                                                                                    var1 = null;
                                                                                    if (!(var1 == var2)) {
                                                                                        _fun3125_ip = 55;
                                                                                        continue _fun3125
                                                                                    }
                                                                                case 15:
                                                                                    var1 = global;
                                                                                    var3 = var1.URLSearchParams;
                                                                                    var4 = var0.search;
                                                                                    var2 = var3.prototype;
                                                                                    var2 = Object.create(var2, {
                                                                                        constructor: {
                                                                                            value: var3
                                                                                        }
                                                                                    });
                                                                                    var5 = var2;
                                                                                    var1 = new var5[var3](var4, var3);
                                                                                    var1 = var1 instanceof Object ? var1 : var2;
                                                                                    var0._searchParamsInstance = var1;
                                                                                case 55:
                                                                                    var0 = var0._searchParamsInstance;
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[10] = var0;
                                                                        var0 = {};
                                                                        var1 = 'toJSON';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: toJSON, environment: var5
                                                                            var1 = this;
                                                                            var0 = var1.toString;
                                                                            var0 = var0.bind(var1)();
                                                                            return var0;
                                                                        };
                                                                        var0.value = var1;
                                                                        var2[11] = var0;
                                                                        var0 = {};
                                                                        var1 = 'toString';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: toString, environment: var5
                                                                            _fun3127: for (var _fun3127_ip = 0;;) switch (_fun3127_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._searchParamsInstance;
                                                                                    var1 = null;
                                                                                    if (!(var1 !== var2)) {
                                                                                        _fun3127_ip = 84;
                                                                                        continue _fun3127
                                                                                    }
                                                                                case 15:
                                                                                    var2 = var0._searchParamsInstance;
                                                                                    var1 = var2.toString;
                                                                                    var2 = var1.bind(var2)();
                                                                                    var4 = var0._url;
                                                                                    var1 = var4.indexOf;
                                                                                    var3 = '?';
                                                                                    var4 = var1.bind(var4)(var3);
                                                                                    var1 = -1;
                                                                                    var1 = var4 > var1;
                                                                                    if (!var1) {
                                                                                        _fun3127_ip = 68;
                                                                                        continue _fun3127
                                                                                    }
                                                                                case 64:
                                                                                    var3 = '&';
                                                                                case 68:
                                                                                    var1 = var0._url;
                                                                                    var1 = var1 + var3;
                                                                                    var1 = var1 + var2;
                                                                                    return var1;
                                                                                case 84:
                                                                                    var0 = var0._url;
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.value = var1;
                                                                        var2[12] = var0;
                                                                        var0 = {};
                                                                        var1 = 'username';
                                                                        var0.key = var1;
                                                                        var1 = function() { // Original name: get, environment: var5
                                                                            _fun3128: for (var _fun3128_ip = 0;;) switch (_fun3128_ip) {
                                                                                case 0:
                                                                                    var0 = this;
                                                                                    var2 = var0._url;
                                                                                    var1 = var2.match;
                                                                                    var0 = /^https?:\\/\\ / ([ ^: @] + )( ? ::[ ^ @] * ) ? @ / ;
                                                                                    var2 = var1.bind(var2)(var0);
                                                                                    var0 = '';
                                                                                    if (!var2) {
                                                                                        _fun3128_ip = 48;
                                                                                        continue _fun3128
                                                                                    }
                                                                                case 41:
                                                                                    var1 = 1;
                                                                                    var0 = var2[var1];
                                                                                case 48:
                                                                                    return var0;
                                                                            }
                                                                        };
                                                                        var0.get = var1;
                                                                        var2[13] = var0;
                                                                        var0 = {};
                                                                        var1 = 'createObjectURL';
                                                                        var0.key = var1;
                                                                        var1 = function(arg0) { // Original name: createObjectURL, environment: var5
                                                                            _fun3129: for (var _fun3129_ip = 0;;) switch (_fun3129_ip) {
                                                                                case 0:
                                                                                    var0 = arg0;
                                                                                    var3 = _closure1_slot2;
                                                                                    var2 = null;
                                                                                    if (!(var2 !== var3)) {
                                                                                        _fun3129_ip = 82;
                                                                                        continue _fun3129
                                                                                    }
                                                                                case 16:
                                                                                    var13 = _closure1_slot2;
                                                                                    var1 = var0.data;
                                                                                    var12 = var1.blobId;
                                                                                    var1 = var0.data;
                                                                                    var10 = var1.offset;
                                                                                    var8 = var0.size;
                                                                                    var0 = global;
                                                                                    var0 = var0.HermesInternal;
                                                                                    var3 = var0.concat;
                                                                                    var14 = '';
                                                                                    var11 = '?offset=';
                                                                                    var9 = '&size=';
                                                                                    var0 = var14[var3](var13, var12, var11, var10, var9, var8, var7);
                                                                                    return var0;
                                                                                case 82:
                                                                                    var0 = global;
                                                                                    var2 = var0.Error;
                                                                                    var0 = var2.prototype;
                                                                                    var1 = Object.create(var0, {
                                                                                        constructor: {
                                                                                            value: var2
                                                                                        }
                                                                                    });
                                                                                    var13 = 'Cannot create URL for blob!';
                                                                                    var14 = var1;
                                                                                    var0 = new var14[var2](var13, var12);
                                                                                    var0 = var0 instanceof Object ? var0 : var1;
                                                                                    throw var0;
                                                                            }
                                                                        };
                                                                        var0.value = var1;
                                                                        var1 = new Array(2);
                                                                        var1[0] = var0;
                                                                        var0 = {};
                                                                        var6 = 'revokeObjectURL';
                                                                        var0.key = var6;
                                                                        var5 = function(arg0) { // Original name: revokeObjectURL, environment: var5
                                                                            var0 = undefined;
                                                                            return var0;
                                                                        };
                                                                        var0.value = var5;
                                                                        var1[1] = var0;
                                                                        var0 = undefined;
                                                                        var0 = var4.bind(var0)(var3, var2, var1);
                                                                        return var0;
                                                                    };
                                                                    var1 = var1.bind(var0)();
                                                                    var3 = 3;
                                                                    var4 = var4[var3];
                                                                    var3 = arg1;
                                                                    var3 = var3.bind(var0)(var4);
                                                                    var3 = var3.URLSearchParams;
                                                                    var2.URLSearchParams = var3;
                                                                    var2.URL = var1;
                                                                    return var0;
                                                            }
                                                        })(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 195, 227]);