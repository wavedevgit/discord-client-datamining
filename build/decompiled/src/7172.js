// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        _fun58729: for (var _fun58729_ip = 0;;) switch (_fun58729_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot3;
                var1 = var2.exec;
                var2 = var1.bind(var2)(var4);
                if (var2) {
                    _fun58729_ip = 70;
                    continue _fun58729
                }
            case 30:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.consoleSandbox;
                var3 = function() { // Environment: var3
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.error;
                    var4 = _closure2_slot0;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var0 = 'Invalid Sentry Dsn: ';
                    var0 = var3.bind(var0)(var4);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                return var1;
            case 70:
                var1 = var2.slice;
                var11 = 1;
                var4 = var1.bind(var2)(var11);
                var3 = _closure1_slot2;
                var2 = undefined;
                var1 = 6;
                var6 = var3.bind(var2)(var4, var1);
                var10 = 0;
                var4 = var6[var10];
                var3 = var6[var11];
                var1 = 2;
                var1 = var6[var1];
                var7 = '';
                var8 = var7;
                if (!(var2 !== var1)) {
                    _fun58729_ip = 129;
                    continue _fun58729
                }
            case 126:
                var8 = var1;
            case 129:
                var1 = 3;
                var1 = var6[var1];
                var9 = var7;
                if (!(var2 !== var1)) {
                    _fun58729_ip = 146;
                    continue _fun58729
                }
            case 143:
                var9 = var1;
            case 146:
                var1 = 4;
                var1 = var6[var1];
                var5 = var7;
                if (!(var2 !== var1)) {
                    _fun58729_ip = 163;
                    continue _fun58729
                }
            case 160:
                var5 = var1;
            case 163:
                var1 = 5;
                var1 = var6[var1];
                var6 = var7;
                if (!(var2 !== var1)) {
                    _fun58729_ip = 180;
                    continue _fun58729
                }
            case 177:
                var6 = var1;
            case 180:
                var1 = var6.split;
                var13 = '/';
                var12 = var1.bind(var6)(var13);
                var1 = var12.length;
                var1 = var1 > var11;
                var11 = var6;
                if (!var1) {
                    _fun58729_ip = 246;
                    continue _fun58729
                }
            case 209:
                var6 = var12.slice;
                var1 = -1;
                var6 = var6.bind(var12)(var10, var1);
                var1 = var6.join;
                var7 = var1.bind(var6)(var13);
                var1 = var12.pop;
                var11 = var1.bind(var12)();
            case 246:
                var6 = var11;
                if (!var6) {
                    _fun58729_ip = 287;
                    continue _fun58729
                }
            case 252:
                var12 = var11.match;
                var1 = /^\d+/;
                var1 = var12.bind(var11)(var1);
                var6 = var11;
                if (!var1) {
                    _fun58729_ip = 287;
                    continue _fun58729
                }
            case 283:
                var6 = var1[var10];
            case 287:
                var1 = _closure1_slot5;
                var0 = {};
                var0.host = var9;
                var0.pass = var8;
                var0.path = var7;
                var0.projectId = var6;
                var0.port = var5;
                var0.protocol = var4;
                var0.publicKey = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = function arg0() {
        _fun58731: for (var _fun58731_ip = 0;;) switch (_fun58731_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.protocol;
                var0.protocol = var2;
                var2 = var1.publicKey;
                if (var2) {
                    _fun58731_ip = 29;
                    continue _fun58731
                }
            case 25:
                var2 = '';
            case 29:
                var0.publicKey = var2;
                var2 = var1.pass;
                if (var2) {
                    _fun58731_ip = 47;
                    continue _fun58731
                }
            case 43:
                var2 = '';
            case 47:
                var0.pass = var2;
                var2 = var1.host;
                var0.host = var2;
                var2 = var1.port;
                if (var2) {
                    _fun58731_ip = 76;
                    continue _fun58731
                }
            case 72:
                var2 = '';
            case 76:
                var0.port = var2;
                var2 = var1.path;
                if (var2) {
                    _fun58731_ip = 94;
                    continue _fun58731
                }
            case 90:
                var2 = '';
            case 94:
                var0.path = var2;
                var1 = var1.projectId;
                var0.projectId = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var4 = /^(?:(\w+):)\\/\\ / ( ? : (\w + )( ? ::(\w + ) ? ) ? @)([\w. - ] + )( ? ::(\d + )) ? \\/(.+)/;
    var _closure1_slot3 = var4;
    var2.dsnFromString = var3;
    var3 = function arg0() {
        _fun58732: for (var _fun58732_ip = 0;;) switch (_fun58732_ip) {
            case 0:
                var1 = arg0;
                var5 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 1;
                var0 = var0 > var2;
                if (!var0) {
                    _fun58732_ip = 28;
                    continue _fun58732
                }
            case 20:
                var4 = arguments[var2];
                var0 = var5 !== var4;
            case 28:
                if (!var0) {
                    _fun58732_ip = 35;
                    continue _fun58732
                }
            case 31:
                var0 = arguments[var2];
            case 35:
                var11 = var1.host;
                var2 = var1.path;
                var4 = var1.pass;
                var3 = var1.port;
                var10 = var1.projectId;
                var9 = var1.protocol;
                var8 = var1.publicKey;
                var7 = '';
                var6 = var7;
                if (!var0) {
                    _fun58732_ip = 115;
                    continue _fun58732
                }
            case 87:
                var6 = var7;
                if (!var4) {
                    _fun58732_ip = 115;
                    continue _fun58732
                }
            case 93:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = ':';
                var6 = var1.bind(var0)(var4);
            case 115:
                var5 = var7;
                if (!var3) {
                    _fun58732_ip = 143;
                    continue _fun58732
                }
            case 121:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = ':';
                var5 = var1.bind(var0)(var3);
            case 143:
                var4 = var2;
                if (!var4) {
                    _fun58732_ip = 172;
                    continue _fun58732
                }
            case 149:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '/';
                var4 = var1.bind(var7)(var2, var0);
            case 172:
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var20 = '://';
                var17 = '@';
                var14 = '/';
                var22 = var7;
                var21 = var9;
                var19 = var8;
                var18 = var6;
                var16 = var11;
                var15 = var5;
                var13 = var4;
                var12 = var10;
                var0 = var22[var3](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                return var0;
        }
    };
    var2.dsnToString = var3;
    var1 = function arg0() {
        _fun58733: for (var _fun58733_ip = 0;;) switch (_fun58733_ip) {
            case 0:
                var3 = arg0;
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun58733_ip = 30;
                    continue _fun58733
                }
            case 14:
                var1 = _closure1_slot5;
                var0 = undefined;
                var0 = var1.bind(var0)(var3);
                _fun58733_ip = 44;
                continue _fun58733;
            case 30:
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 44:
                if (!var0) {
                    _fun58733_ip = 64;
                    continue _fun58733
                }
            case 47:
                var2 = function arg0() {
                    _fun58734: for (var _fun58734_ip = 0;;) switch (_fun58734_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 2;
                            var2 = var5[var2];
                            var7 = undefined;
                            var2 = var3.bind(var7)(var2);
                            var2 = var2.DEBUG_BUILD;
                            if (var2) {
                                _fun58734_ip = 47;
                                continue _fun58734
                            }
                        case 43:
                            var2 = true;
                            return var2;
                        case 47:
                            var9 = var1.port;
                            var8 = var1.projectId;
                            var10 = var1.protocol;
                            var2 = ['protocol', 'publicKey', 'host', 'projectId'];
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                _fun58735: for (var _fun58735_ip = 0;;) switch (_fun58735_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var0 = _closure3_slot0;
                                        var0 = var0[var6];
                                        var0 = !var0;
                                        if (!var0) {
                                            _fun58735_ip = 94;
                                            continue _fun58735
                                        }
                                    case 20:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var1 = 1;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        var3 = var1.logger;
                                        var2 = var3.error;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var4 = 'Invalid Sentry Dsn: ';
                                        var1 = ' missing';
                                        var1 = var5.bind(var4)(var6, var1);
                                        var1 = var2.bind(var3)(var1);
                                        var0 = true;
                                    case 94:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun58734_ip = 382;
                                continue _fun58734
                            }
                        case 96:
                            var2 = var8.match;
                            var1 = /^\d+$/;
                            var1 = var2.bind(var8)(var1);
                            if (var1) {
                                _fun58734_ip = 189;
                                continue _fun58734
                            }
                        case 124:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 1;
                            var2 = var2[var1];
                            var2 = var3.bind(var7)(var2);
                            var5 = var2.logger;
                            var3 = var5.error;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Invalid Sentry Dsn: Invalid projectId ';
                            var2 = var6.bind(var2)(var8);
                            var2 = var3.bind(var5)(var2);
                            _fun58734_ip = 379;
                            continue _fun58734;
                        case 189:
                            var2 = 'http';
                            var2 = var2 === var10;
                            if (var2) {
                                _fun58734_ip = 208;
                                continue _fun58734
                            }
                        case 200:
                            var3 = 'https';
                            var2 = var3 === var10;
                        case 208:
                            if (var2) {
                                _fun58734_ip = 273;
                                continue _fun58734
                            }
                        case 211:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 1;
                            var3 = var3[var2];
                            var3 = var5.bind(var7)(var3);
                            var6 = var3.logger;
                            var5 = var6.error;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var8 = var3.concat;
                            var3 = 'Invalid Sentry Dsn: Invalid protocol ';
                            var3 = var8.bind(var3)(var10);
                            var3 = var5.bind(var6)(var3);
                            _fun58734_ip = 376;
                            continue _fun58734;
                        case 273:
                            var3 = var9;
                            if (!var3) {
                                _fun58734_ip = 307;
                                continue _fun58734
                            }
                        case 279:
                            var5 = global;
                            var6 = var5.isNaN;
                            var8 = var5.parseInt;
                            var5 = 10;
                            var5 = var8.bind(var7)(var9, var5);
                            var3 = var6.bind(var7)(var5);
                        case 307:
                            if (!var3) {
                                _fun58734_ip = 373;
                                continue _fun58734
                            }
                        case 310:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 1;
                            var5 = var5[var4];
                            var5 = var6.bind(var7)(var5);
                            var7 = var5.logger;
                            var6 = var7.error;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var8 = var5.concat;
                            var5 = 'Invalid Sentry Dsn: Invalid port ';
                            var5 = var8.bind(var5)(var9);
                            var5 = var6.bind(var7)(var5);
                            var3 = var4;
                        case 373:
                            var2 = var3;
                        case 376:
                            var1 = var2;
                        case 379:
                            var0 = var1;
                        case 382:
                            var0 = !var0;
                            return var0;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var0);
                if (var1) {
                    _fun58733_ip = 68;
                    continue _fun58733
                }
            case 64:
                var1 = undefined;
                return var1;
            case 68:
                return var0;
        }
    };
    var2.makeDsn = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 7173, 7174]);