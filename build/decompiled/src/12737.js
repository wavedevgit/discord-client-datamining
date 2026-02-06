// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = 0;
    var2 = var4[var0];
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            _fun97076: for (var _fun97076_ip = 0;;) switch (_fun97076_ip) {
                case 0:
                    var3 = arg1;
                    var2 = this;
                    var4 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = 0;
                    var4 = var3[var1];
                    var1 = 1;
                    var3 = var3[var1];
                    var8 = null;
                    var9 = null;
                    if (!(var0 !== var3)) {
                        _fun97076_ip = 87;
                        continue _fun97076
                    }
                case 49:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 2;
                    var1 = var7[var1];
                    var6 = var6.bind(var0)(var1);
                    var1 = var6.basicURLParse;
                    var9 = var1.bind(var6)(var3);
                    if (!(var8 !== var9)) {
                        _fun97076_ip = 281;
                        continue _fun97076
                    }
                case 87:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 2;
                    var1 = var7[var1];
                    var7 = var6.bind(var0)(var1);
                    var6 = var7.basicURLParse;
                    var1 = {};
                    var1.baseURL = var9;
                    var6 = var6.bind(var7)(var4, var1);
                    if (!(var8 !== var6)) {
                        _fun97076_ip = 229;
                        continue _fun97076
                    }
                case 130:
                    var7 = var6.query;
                    var1 = '';
                    if (!(var8 !== var7)) {
                        _fun97076_ip = 150;
                        continue _fun97076
                    }
                case 144:
                    var1 = var6.query;
                case 150:
                    var2._url = var6;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 3;
                    var5 = var7[var5];
                    var8 = var6.bind(var0)(var5);
                    var7 = var8.createImpl;
                    var6 = new Array(1);
                    var6[0] = var1;
                    var5 = {};
                    var1 = true;
                    var5.doNotStripQMark = var1;
                    var1 = arg0;
                    var1 = var7.bind(var8)(var1, var6, var5);
                    var2._query = var1;
                    var1 = var2._query;
                    var1._url = var2;
                    return var0;
                case 229:
                    var0 = global;
                    var2 = var0.TypeError;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Invalid URL: ';
                    var12 = var1.bind(var0)(var4);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 281:
                    var0 = global;
                    var2 = var0.TypeError;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Invalid base URL: ';
                    var12 = var1.bind(var0)(var3);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'href';
        var0.key = var1;
        var1 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.serializeURL;
            var0 = this;
            var0 = var0._url;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun97078: for (var _fun97078_ip = 0;;) switch (_fun97078_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var4 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.basicURLParse;
                    var5 = var4.bind(var5)(var3);
                    var4 = null;
                    if (!(var4 !== var5)) {
                        _fun97078_ip = 134;
                        continue _fun97078
                    }
                case 48:
                    var2._url = var5;
                    var6 = var2._query;
                    var8 = var6._list;
                    var7 = var8.splice;
                    var6 = 0;
                    var6 = var7.bind(var8)(var6);
                    var5 = var5.query;
                    if (!(var4 !== var5)) {
                        _fun97078_ip = 132;
                        continue _fun97078
                    }
                case 89:
                    var2 = var2._query;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 4;
                    var1 = var6[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.parseUrlencoded;
                    var1 = var1.bind(var4)(var5);
                    var2._list = var1;
                case 132:
                    return var0;
                case 134:
                    var0 = global;
                    var2 = var0.TypeError;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Invalid URL: ';
                    var9 = var1.bind(var0)(var3);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.set = var1;
        var1 = new Array(13);
        var1[0] = var0;
        var0 = {};
        var5 = 'origin';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.serializeURLOrigin;
            var0 = this;
            var0 = var0._url;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'protocol';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._url;
            var1 = var0.scheme;
            var0 = ':';
            var0 = var1 + var0;
            return var0;
        };
        var0.get = var5;
        var5 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.basicURLParse;
            var2 = arg0;
            var1 = ':';
            var2 = var2 + var1;
            var1 = {};
            var5 = this;
            var5 = var5._url;
            var1.url = var5;
            var5 = 'scheme start';
            var1.stateOverride = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.set = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'username';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._url;
            var0 = var0.username;
            return var0;
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97083: for (var _fun97083_ip = 0;;) switch (_fun97083_ip) {
                case 0:
                    var1 = this;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 2;
                    var3 = var0[var4];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.cannotHaveAUsernamePasswordPort;
                    var3 = var1._url;
                    var3 = var5.bind(var6)(var3);
                    if (var3) {
                        _fun97083_ip = 86;
                        continue _fun97083
                    }
                case 48:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var4];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setTheUsername;
                    var2 = var1._url;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                case 86:
                    return var0;
            }
        };
        var0.set = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'password';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._url;
            var0 = var0.password;
            return var0;
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97085: for (var _fun97085_ip = 0;;) switch (_fun97085_ip) {
                case 0:
                    var1 = this;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 2;
                    var3 = var0[var4];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.cannotHaveAUsernamePasswordPort;
                    var3 = var1._url;
                    var3 = var5.bind(var6)(var3);
                    if (var3) {
                        _fun97085_ip = 86;
                        continue _fun97085
                    }
                case 48:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var4];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setThePassword;
                    var2 = var1._url;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                case 86:
                    return var0;
            }
        };
        var0.set = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'host';
        var0.key = var5;
        var5 = function() {
            _fun97086: for (var _fun97086_ip = 0;;) switch (_fun97086_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._url;
                    var1 = var2.host;
                    var0 = '';
                    var3 = null;
                    if (!(var3 !== var1)) {
                        _fun97086_ip = 165;
                        continue _fun97086
                    }
                case 28:
                    var1 = var2.port;
                    if (!(var3 !== var1)) {
                        _fun97086_ip = 120;
                        continue _fun97086
                    }
                case 38:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 2;
                    var3 = var6[var1];
                    var4 = undefined;
                    var8 = var5.bind(var4)(var3);
                    var7 = var8.serializeHost;
                    var3 = var2.host;
                    var7 = var7.bind(var8)(var3);
                    var3 = ':';
                    var3 = var7 + var3;
                    var1 = var6[var1];
                    var5 = var5.bind(var4)(var1);
                    var4 = var5.serializeInteger;
                    var1 = var2.port;
                    var1 = var4.bind(var5)(var1);
                    var1 = var3 + var1;
                    _fun97086_ip = 162;
                    continue _fun97086;
                case 120:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 2;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.serializeHost;
                    var2 = var2.host;
                    var1 = var3.bind(var4)(var2);
                case 162:
                    var0 = var1;
                case 165:
                    return var0;
            }
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97087: for (var _fun97087_ip = 0;;) switch (_fun97087_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._url;
                    var1 = var1.cannotBeABaseURL;
                    if (var1) {
                        _fun97087_ip = 79;
                        continue _fun97087
                    }
                case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.basicURLParse;
                    var1 = {};
                    var0 = var0._url;
                    var1.url = var0;
                    var0 = 'host';
                    var1.stateOverride = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'hostname';
        var0.key = var5;
        var5 = function() {
            _fun97088: for (var _fun97088_ip = 0;;) switch (_fun97088_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._url;
                    var3 = var0.host;
                    var0 = '';
                    var2 = null;
                    if (!(var2 !== var3)) {
                        _fun97088_ip = 73;
                        continue _fun97088
                    }
                case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.serializeHost;
                    var1 = var1._url;
                    var1 = var1.host;
                    var0 = var2.bind(var3)(var1);
                case 73:
                    return var0;
            }
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97089: for (var _fun97089_ip = 0;;) switch (_fun97089_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._url;
                    var1 = var1.cannotBeABaseURL;
                    if (var1) {
                        _fun97089_ip = 79;
                        continue _fun97089
                    }
                case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.basicURLParse;
                    var1 = {};
                    var0 = var0._url;
                    var1.url = var0;
                    var0 = 'hostname';
                    var1.stateOverride = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'port';
        var0.key = var5;
        var5 = function() {
            _fun97090: for (var _fun97090_ip = 0;;) switch (_fun97090_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._url;
                    var3 = var0.port;
                    var0 = '';
                    var2 = null;
                    if (!(var2 !== var3)) {
                        _fun97090_ip = 73;
                        continue _fun97090
                    }
                case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.serializeInteger;
                    var1 = var1._url;
                    var1 = var1.port;
                    var0 = var2.bind(var3)(var1);
                case 73:
                    return var0;
            }
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97091: for (var _fun97091_ip = 0;;) switch (_fun97091_ip) {
                case 0:
                    var5 = arg0;
                    var1 = this;
                    var6 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 2;
                    var3 = var0[var4];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var3);
                    var6 = var7.cannotHaveAUsernamePasswordPort;
                    var3 = var1._url;
                    var3 = var6.bind(var7)(var3);
                    if (var3) {
                        _fun97091_ip = 125;
                        continue _fun97091
                    }
                case 51:
                    var3 = '';
                    if (!(var3 !== var5)) {
                        _fun97091_ip = 111;
                        continue _fun97091
                    }
                case 59:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var4];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.basicURLParse;
                    var2 = {};
                    var6 = var1._url;
                    var2.url = var6;
                    var6 = 'port';
                    var2.stateOverride = var6;
                    var2 = var3.bind(var4)(var5, var2);
                    _fun97091_ip = 125;
                    continue _fun97091;
                case 111:
                    var2 = var1._url;
                    var1 = null;
                    var2.port = var1;
                case 125:
                    return var0;
            }
        };
        var0.set = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'pathname';
        var0.key = var5;
        var5 = function() {
            _fun97092: for (var _fun97092_ip = 0;;) switch (_fun97092_ip) {
                case 0:
                    var3 = this;
                    var0 = var3._url;
                    var0 = var0.cannotBeABaseURL;
                    var1 = var3._url;
                    var2 = var1.path;
                    var1 = 0;
                    if (var0) {
                        _fun97092_ip = 77;
                        continue _fun97092
                    }
                case 32:
                    var4 = var2.length;
                    var0 = '';
                    if (!(var1 !== var4)) {
                        _fun97092_ip = 75;
                        continue _fun97092
                    }
                case 45:
                    var3 = var3._url;
                    var5 = var3.path;
                    var3 = var5.join;
                    var4 = '/';
                    var3 = var3.bind(var5)(var4);
                    var0 = var4 + var3;
                case 75:
                    _fun97092_ip = 81;
                    continue _fun97092;
                case 77:
                    var0 = var2[var1];
                case 81:
                    return var0;
            }
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97093: for (var _fun97093_ip = 0;;) switch (_fun97093_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._url;
                    var1 = var1.cannotBeABaseURL;
                    if (var1) {
                        _fun97093_ip = 97;
                        continue _fun97093
                    }
                case 18:
                    var2 = var0._url;
                    var1 = new Array(0);
                    var2.path = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.basicURLParse;
                    var1 = {};
                    var0 = var0._url;
                    var1.url = var0;
                    var0 = 'path start';
                    var1.stateOverride = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'search';
        var0.key = var5;
        var5 = function() {
            _fun97094: for (var _fun97094_ip = 0;;) switch (_fun97094_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._url;
                    var4 = var0.query;
                    var3 = '';
                    var2 = null;
                    var0 = var3;
                    if (!(var2 !== var4)) {
                        _fun97094_ip = 67;
                        continue _fun97094
                    }
                case 28:
                    var2 = var1._url;
                    var2 = var2.query;
                    var0 = var3;
                    if (!(var0 !== var2)) {
                        _fun97094_ip = 67;
                        continue _fun97094
                    }
                case 47:
                    var1 = var1._url;
                    var2 = var1.query;
                    var1 = '?';
                    var0 = var1 + var2;
                case 67:
                    return var0;
            }
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97095: for (var _fun97095_ip = 0;;) switch (_fun97095_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var2 = var0._url;
                    var1 = '';
                    if (!(var1 !== var5)) {
                        _fun97095_ip = 149;
                        continue _fun97095
                    }
                case 23:
                    var3 = 0;
                    var4 = var5[var3];
                    var3 = '?';
                    var6 = var5;
                    if (!(var3 === var4)) {
                        _fun97095_ip = 54;
                        continue _fun97095
                    }
                case 40:
                    var4 = var5.substring;
                    var3 = 1;
                    var6 = var4.bind(var5)(var3);
                case 54:
                    var2.query = var1;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 2;
                    var3 = var7[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var3);
                    var4 = var8.basicURLParse;
                    var3 = {};
                    var3.url = var2;
                    var9 = 'query';
                    var3.stateOverride = var9;
                    var3 = var4.bind(var8)(var6, var3);
                    var4 = var0._query;
                    var3 = 4;
                    var3 = var7[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.parseUrlencoded;
                    var3 = var3.bind(var5)(var6);
                    var4._list = var3;
                    return var1;
                case 149:
                    var1 = null;
                    var2.query = var1;
                    var1 = var0._query;
                    var0 = new Array(0);
                    var1._list = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'searchParams';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._query;
            return var0;
        };
        var0.get = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'hash';
        var0.key = var5;
        var5 = function() {
            _fun97097: for (var _fun97097_ip = 0;;) switch (_fun97097_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._url;
                    var4 = var0.fragment;
                    var3 = '';
                    var2 = null;
                    var0 = var3;
                    if (!(var2 !== var4)) {
                        _fun97097_ip = 67;
                        continue _fun97097
                    }
                case 28:
                    var2 = var1._url;
                    var2 = var2.fragment;
                    var0 = var3;
                    if (!(var0 !== var2)) {
                        _fun97097_ip = 67;
                        continue _fun97097
                    }
                case 47:
                    var1 = var1._url;
                    var2 = var1.fragment;
                    var1 = '#';
                    var0 = var1 + var2;
                case 67:
                    return var0;
            }
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun97098: for (var _fun97098_ip = 0;;) switch (_fun97098_ip) {
                case 0:
                    var5 = arg0;
                    var4 = this;
                    var1 = '';
                    if (!(var1 === var5)) {
                        _fun97098_ip = 30;
                        continue _fun97098
                    }
                case 14:
                    var2 = var4._url;
                    var0 = null;
                    var2.fragment = var0;
                    _fun97098_ip = 131;
                    continue _fun97098;
                case 30:
                    var0 = 0;
                    var2 = var5[var0];
                    var0 = '#';
                    var3 = var5;
                    if (!(var0 === var2)) {
                        _fun97098_ip = 61;
                        continue _fun97098
                    }
                case 47:
                    var2 = var5.substring;
                    var0 = 1;
                    var3 = var2.bind(var5)(var0);
                case 61:
                    var0 = var4._url;
                    var0.fragment = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.basicURLParse;
                    var0 = {};
                    var4 = var4._url;
                    var0.url = var4;
                    var4 = 'fragment';
                    var0.stateOverride = var4;
                    var0 = var1.bind(var2)(var3, var0);
                case 131:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'toJSON';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0.href;
            return var0;
        };
        var0.value = var4;
        var1[12] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2 = var1.bind(var0)();
    var1 = arg5;
    var1.implementation = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 12738, 12742, 12741]);