// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var1 = exports;
            var2 = global;
            var5 = var2.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var2 = true;
            var3.value = var2;
            var2 = '__esModule';
            var2 = var4.bind(var5)(var1, var2, var3);
            var2 = function arg0() {
                var2 = arg0;
                var1 = var2.split;
                var0 = /\\?\\/ / ;
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun98944: for (var _fun98944_ip = 0;;) switch (_fun98944_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.length;
                            var0 = 0;
                            var0 = var1 > var0;
                            if (!var0) {
                                _fun98944_ip = 25;
                                continue _fun98944
                            }
                        case 17:
                            var1 = ',';
                            var0 = var1 !== var2;
                        case 25:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = var0.length;
                return var0;
            };
            var1.getNumberOfUrlSegments = var2;
            var2 = function arg0() {
                _fun98945: for (var _fun98945_ip = 0;;) switch (_fun98945_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.protocol;
                        var7 = var0.host;
                        var4 = var0.path;
                        var3 = '';
                        var2 = var3;
                        if (!var5) {
                            _fun98945_ip = 56;
                            continue _fun98945
                        }
                    case 31:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '://';
                        var2 = var1.bind(var3)(var5, var0);
                    case 56:
                        var1 = var7;
                        if (!var1) {
                            _fun98945_ip = 143;
                            continue _fun98945
                        }
                    case 62:
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
                    case 143:
                        if (var1) {
                            _fun98945_ip = 149;
                            continue _fun98945
                        }
                    case 146:
                        var1 = var3;
                    case 149:
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var0 = var0.concat;
                        var0 = var0.bind(var3)(var2, var1, var4);
                        return var0;
                }
            };
            var1.getSanitizedUrlString = var2;
            var2 = function arg0() {
                _fun98946: for (var _fun98946_ip = 0;;) switch (_fun98946_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun98946_ip = 10;
                            continue _fun98946
                        }
                    case 6:
                        var0 = {};
                        return var0;
                    case 10:
                        var1 = var2.match;
                        var0 = /^(([^:\/?#]+):)?(\\/\\ / ([ ^ \/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
                                var4 = var1.bind(var2)(var0);
                                if (var4) {
                                    _fun98946_ip = 42;
                                    continue _fun98946
                                }
                                case 38:
                                var0 = {};
                                return var0;
                                case 42:
                                var0 = 6;
                                var3 = var4[var0];
                                if (var3) {
                                    _fun98946_ip = 56;
                                    continue _fun98946
                                }
                                case 52:
                                var3 = '';
                                case 56:
                                var0 = 8;
                                var2 = var4[var0];
                                if (var2) {
                                    _fun98946_ip = 70;
                                    continue _fun98946
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
                        var1.parseUrl = var2;
                        var0 = function arg0() {
                            var3 = arg0;
                            var2 = var3.split;
                            var1 = /[?#]/;
                            var0 = 1;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = 0;
                            var0 = var1[var0];
                            return var0;
                        };
                        var1.stripUrlQueryAndFragment = var0;
                        var0 = undefined;
                        return var0;
                })(undefined, undefined, undefined, undefined, undefined, undefined, []);