// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun13983: for (var _fun13983_ip = 0;;) switch (_fun13983_ip) {
        case 0:
            var5 = require;
            var3 = exports;
            var6 = dependencyMap;
            var4 = this;
            var _closure1_slot0 = var5;
            var0 = module;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var6;
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = var4;
            if (!var1) {
                _fun13983_ip = 90;
                continue _fun13983
            }
        case 84:
            var1 = var4.__awaiter;
        case 90:
            if (var1) {
                _fun13983_ip = 98;
                continue _fun13983
            }
        case 93:
            var1 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                _fun13984: for (var _fun13984_ip = 0;;) switch (_fun13984_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun13984_ip = 48;
                            continue _fun13984
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun13985: for (var _fun13985_ip = 0;;) switch (_fun13985_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function arg0() {
                                        _fun13986: for (var _fun13986_ip = 0;;) switch (_fun13986_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun13986_ip = 52;
                                                continue _fun13986;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function arg0() {
                                        _fun13987: for (var _fun13987_ip = 0;;) switch (_fun13987_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun13987_ip = 53;
                                                continue _fun13987;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function arg0() {
                                        _fun13988: for (var _fun13988_ip = 0;;) switch (_fun13988_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun13988_ip = 54;
                                                    continue _fun13988
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function arg0() {
                                                    _fun13989: for (var _fun13989_ip = 0;;) switch (_fun13989_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun13989_ip = 52;
                                                                continue _fun13989
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun13988_ip = 73;
                                                continue _fun13988;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun13985_ip = 70;
                                        continue _fun13985
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 98:
            var _closure1_slot6 = var1;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var1 = true;
            var4.value = var1;
            var1 = '__esModule';
            var1 = var5.bind(var6)(var3, var1, var4);
            var3.MessageLoader = var0;
            var1 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot6;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun13993: for (var _fun13993_ip = 0;;) switch (_fun13993_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun13993_ip = 68;
                                    continue _fun13993
                                }
                            case 7:
                                var1 = global;
                                var3 = var1.Promise;
                                var2 = var3.all;
                                var5 = _closure1_slot8;
                                var4 = var5.map;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = arg0;
                                    var1 = var2._loadLocale;
                                    var0 = _closure2_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun13993_ip = 65;
                                    continue _fun13993
                                }
                            case 60:
                                var2 = undefined;
                                return var2;
                            case 65:
                                return var1;
                            case 68:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.loadAllMessagesInLocale = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun13997: for (var _fun13997_ip = 0;;) switch (_fun13997_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun13997_ip = 68;
                                    continue _fun13997
                                }
                            case 7:
                                var1 = global;
                                var3 = var1.Promise;
                                var2 = var3.all;
                                var5 = _closure1_slot8;
                                var4 = var5.map;
                                var1 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var0 = var1.waitForDefaultLocale;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun13997_ip = 65;
                                    continue _fun13997
                                }
                            case 60:
                                var2 = undefined;
                                return var2;
                            case 65:
                                return var1;
                            case 68:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.waitForAllDefaultIntlMessagesLoaded = var1;
            var1 = function arg0, arg1() {
                var4 = _closure1_slot7;
                var0 = var4.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = arg0;
                var5 = arg1;
                var7 = var2;
                var0 = new var7[var4](var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = _closure1_slot8;
                var1 = var2.push;
                var1 = var1.bind(var2)(var0);
                return var0;
            };
            var3.createLoader = var1;
            var1 = function() { // Environment: var2
                var3 = _closure1_slot5;
                var2 = function arg0, arg1() {
                    _fun14001: for (var _fun14001_ip = 0;;) switch (_fun14001_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = this;
                            var0 = undefined;
                            var8 = undefined;
                            var _closure3_slot0 = var4;
                            var2 = _closure1_slot4;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var0)(var4, var1);
                            var1 = {};
                            var4.messages = var1;
                            var4.localeImportMap = var3;
                            var1 = global;
                            var5 = var1.Object;
                            var2 = var5.keys;
                            var2 = var2.bind(var5)(var3);
                            var4.supportedLocales = var2;
                            var2 = arg1;
                            var4.defaultLocale = var2;
                            var2 = {};
                            var4._localeLoadingPromises = var2;
                            var2 = {};
                            var4._parseCache = var2;
                            var2 = var1.Set;
                            var5 = var2.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var13 = var5;
                            var2 = new var13[var2](var12);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var4._subscribers = var2;
                            var5 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 3;
                            var2 = var9[var2];
                            var2 = var5.bind(var0)(var2);
                            var10 = var2.InternalIntlMessage;
                            var11 = var4.defaultLocale;
                            var2 = var10.prototype;
                            var5 = Object.create(var2, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var12 = new Array(0);
                            var13 = var5;
                            var2 = new var13[var10](var12, var11, var10);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var4.fallbackMessage = var2;
                            var2 = _closure1_slot1;
                            var2 = var2.hot;
                            if (!var2) {
                                _fun14001_ip = 292;
                                continue _fun14001
                            }
                        case 206:
                            var8 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = _closure1_slot1;
                                var3 = var1.hot;
                                var2 = var3.accept;
                                var1 = _closure3_slot1;
                                var0 = function() { // Environment: var0
                                    var3 = _closure1_slot6;
                                    var7 = _closure3_slot0;
                                    var4 = function*() { // Environment: var0
                                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                                            _fun14005: for (var _fun14005_ip = 0;;) switch (_fun14005_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    var3 = this;
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun14005_ip = 54;
                                                        continue _fun14005
                                                    }
                                                case 10:
                                                    var2 = var3._loadLocale;
                                                    var1 = _closure4_slot0;
                                                    var1 = var2.bind(var3)(var1);
                                                    SaveGenerator(address = 32);
                                                case 30:
                                                    return var1;
                                                case 32:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                    if (var2) {
                                                        _fun14005_ip = 51;
                                                        continue _fun14005
                                                    }
                                                case 38:
                                                    var2 = {};
                                                    var3._parseCache = var2;
                                                    var2 = undefined;
                                                    return var2;
                                                case 51:
                                                    return var1;
                                                case 54:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var8 = undefined;
                                    var6 = undefined;
                                    var5 = undefined;
                                    var0 = var8[var3](var7, var6, var5, var4, var3);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var1.Object;
                            var1 = var2.entries;
                            var1 = var1.bind(var2)(var3);
                            var5 = var1;
                            var2 = var5[Symbol.iterator];
                            var5 = var2().next;
                            var4 = 2;
                            var3 = 0;
                            var1 = 1;
                        case 242:
                            var10 = var5().value;
                            var9 = var2;
                            if (!(var9 !== var0)) {
                                _fun14001_ip = 292;
                                continue _fun14001
                            }
                        case 253: // try_start_0
                            var9 = _closure1_slot3;
                            var9 = var9.bind(var0)(var10, var4);
                            var10 = var9[var3];
                            var9 = var9[var1];
                            var _closure3_slot1 = var9;
                            var9 = var8;
                            var9 = var9.bind(var0)(var10);
                        case 283: // try_end0
                            _fun14001_ip = 242;
                            continue _fun14001;
                        case 285: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 292:
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'withDebugValues';
                var0.key = var1;
                var1 = function arg0, arg1() {
                    var1 = this;
                    var0 = arg0;
                    var1._debugKeyMap = var0;
                    var0 = arg1;
                    var1._localeFileMap = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(11);
                var1[0] = var0;
                var0 = {};
                var5 = 'fallbackWith';
                var0.key = var5;
                var5 = function arg0() {
                    _fun14007: for (var _fun14007_ip = 0;;) switch (_fun14007_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = this;
                            var3 = null;
                            var2 = var0;
                            if (!(var3 != var2)) {
                                _fun14007_ip = 29;
                                continue _fun14007
                            }
                        case 15:
                            var2 = var2._parentLoader;
                            if (!(var2 !== var0)) {
                                _fun14007_ip = 45;
                                continue _fun14007
                            }
                        case 25:
                            if (var3 != var2) {
                                _fun14007_ip = 15;
                                continue _fun14007
                            }
                        case 29:
                            var0.fallbackLoader = var1;
                            var1._parentLoader = var0;
                            var0 = undefined;
                            return var0;
                        case 45:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = 'Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve';
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'get';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun14008: for (var _fun14008_ip = 0;;) switch (_fun14008_ip) {
                        case 0:
                            var11 = arg0;
                            var10 = arg1;
                            var3 = this;
                            var0 = var3.getMessageValue;
                            var0 = var0.bind(var3)(var11, var10);
                            var5 = null;
                            if (!(var5 == var0)) {
                                _fun14008_ip = 390;
                                continue _fun14008
                            }
                        case 30:
                            var1 = var3.isLocaleLoading;
                            var1 = var1.bind(var3)(var10);
                            if (!var1) {
                                _fun14008_ip = 72;
                                continue _fun14008
                            }
                        case 44:
                            var2 = var3.isLocaleLoaded;
                            var1 = var3.defaultLocale;
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun14008_ip = 72;
                                continue _fun14008
                            }
                        case 64:
                            var1 = var3.fallbackMessage;
                            return var1;
                        case 72:
                            var2 = var3.getMessageValue;
                            var1 = var3.defaultLocale;
                            var1 = var2.bind(var3)(var11, var1);
                            if (!(var5 == var1)) {
                                _fun14008_ip = 388;
                                continue _fun14008
                            }
                        case 97:
                            var6 = var3.fallbackLoader;
                            var2 = undefined;
                            if (!(var5 !== var6)) {
                                _fun14008_ip = 126;
                                continue _fun14008
                            }
                        case 109:
                            var2 = undefined;
                            if (!(var2 !== var6)) {
                                _fun14008_ip = 126;
                                continue _fun14008
                            }
                        case 115:
                            var4 = var6.get;
                            var2 = var4.bind(var6)(var11, var10);
                        case 126:
                            if (!(var5 == var2)) {
                                _fun14008_ip = 386;
                                continue _fun14008
                            }
                        case 133:
                            var4 = var3._debugKeyMap;
                            var12 = var11;
                            if (!(var5 != var4)) {
                                _fun14008_ip = 190;
                                continue _fun14008
                            }
                        case 146:
                            var4 = var3._debugKeyMap;
                            var17 = var4[var11];
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var8 = var4.concat;
                            var18 = '"';
                            var16 = '" (';
                            var14 = ')';
                            var15 = var11;
                            var12 = var18[var8](var17, var16, var15, var14, var13);
                        case 190:
                            var4 = var3._localeFileMap;
                            var11 = var10;
                            if (!(var5 != var4)) {
                                _fun14008_ip = 247;
                                continue _fun14008
                            }
                        case 203:
                            var4 = var3._localeFileMap;
                            var15 = var4[var10];
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var8 = var4.concat;
                            var18 = '';
                            var16 = ' (';
                            var14 = ')';
                            var17 = var10;
                            var11 = var18[var8](var17, var16, var15, var14, var13);
                        case 247:
                            var4 = var3._localeFileMap;
                            if (!(var5 == var4)) {
                                _fun14008_ip = 265;
                                continue _fun14008
                            }
                        case 257:
                            var10 = var3.defaultLocale;
                            _fun14008_ip = 318;
                            continue _fun14008;
                        case 265:
                            var17 = var3.defaultLocale;
                            var5 = var3._localeFileMap;
                            var4 = var3.defaultLocale;
                            var15 = var5[var4];
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var7 = var4.concat;
                            var18 = '';
                            var16 = ' (';
                            var14 = ')';
                            var10 = var18[var7](var17, var16, var15, var14, var13);
                        case 318:
                            var4 = global;
                            var6 = var4.console;
                            var5 = var6.warn;
                            var4 = var4.HermesInternal;
                            var9 = var4.concat;
                            var18 = 'Requested message ';
                            var16 = ' does not have a value in the requested locale ';
                            var14 = ' nor the default locale ';
                            var17 = var12;
                            var15 = var11;
                            var13 = var10;
                            var4 = var18[var9](var17, var16, var15, var14, var13, var12);
                            var4 = var5.bind(var6)(var4);
                            var3 = var3.fallbackMessage;
                            return var3;
                        case 386:
                            return var2;
                        case 388:
                            return var1;
                        case 390:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'getMessageValue';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun14009: for (var _fun14009_ip = 0;;) switch (_fun14009_ip) {
                        case 0:
                            var3 = arg0;
                            var6 = arg1;
                            var2 = this;
                            var0 = var2._parseCache;
                            var1 = var0[var6];
                            var4 = undefined;
                            var7 = null;
                            var0 = undefined;
                            if (!(var7 !== var1)) {
                                _fun14009_ip = 39;
                                continue _fun14009
                            }
                        case 29:
                            var0 = undefined;
                            if (!(var0 !== var1)) {
                                _fun14009_ip = 39;
                                continue _fun14009
                            }
                        case 35:
                            var0 = var1[var3];
                        case 39:
                            if (var0) {
                                _fun14009_ip = 199;
                                continue _fun14009
                            }
                        case 45:
                            var1 = var2.messages;
                            var1 = var1[var6];
                            if (!(var7 == var1)) {
                                _fun14009_ip = 91;
                                continue _fun14009
                            }
                        case 59:
                            var5 = var2.supportedLocales;
                            var1 = var5.includes;
                            var1 = var1.bind(var5)(var6);
                            if (!var1) {
                                _fun14009_ip = 109;
                                continue _fun14009
                            }
                        case 78:
                            var1 = var2._loadLocale;
                            var1 = var1.bind(var2)(var6);
                            _fun14009_ip = 109;
                            continue _fun14009;
                        case 91:
                            var1 = var2.messages;
                            var1 = var1[var6];
                            var8 = var1[var3];
                            if (!(var7 == var8)) {
                                _fun14009_ip = 111;
                                continue _fun14009
                            }
                        case 109:
                            return var4;
                        case 111:
                            var5 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 3;
                            var1 = var9[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.InternalIntlMessage;
                            var5 = var1.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var12 = var5;
                            var11 = var8;
                            var10 = var6;
                            var1 = new var12[var1](var11, var10, var9);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var5 = var2._parseCache;
                            var2 = var5[var6];
                            if (!(var7 !== var2)) {
                                _fun14009_ip = 184;
                                continue _fun14009
                            }
                        case 180:
                            if (!(var4 === var2)) {
                                _fun14009_ip = 193;
                                continue _fun14009
                            }
                        case 184:
                            var4 = {};
                            var5[var6] = var4;
                            var2 = var4;
                        case 193:
                            var2[var3] = var1;
                            return var1;
                        case 199:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = '_loadLocale';
                var0.key = var5;
                var5 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot6;
                    var7 = this;
                    var4 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun14012: for (var _fun14012_ip = 0;;) switch (_fun14012_ip) {
                                case 0:
                                    StartGenerator();
                                    var3 = this;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun14012_ip = 388;
                                        continue _fun14012
                                    }
                                case 13:
                                    var4 = var3.messages;
                                    var1 = _closure3_slot0;
                                    var1 = var4[var1];
                                    var5 = null;
                                    if (!(var5 == var1)) {
                                        _fun14012_ip = 380;
                                        continue _fun14012
                                    }
                                case 39:
                                    var4 = var3._localeLoadingPromises;
                                    var1 = _closure3_slot0;
                                    var4 = var4[var1];
                                    var6 = undefined;
                                    var1 = undefined;
                                    if (!(var5 !== var4)) {
                                        _fun14012_ip = 72;
                                        continue _fun14012
                                    }
                                case 61:
                                    var1 = undefined;
                                    if (!(var6 !== var4)) {
                                        _fun14012_ip = 72;
                                        continue _fun14012
                                    }
                                case 67:
                                    var1 = var4.current;
                                case 72:
                                    if (!(var5 != var1)) {
                                        _fun14012_ip = 123;
                                        continue _fun14012
                                    }
                                case 76:
                                    var4 = var3._localeLoadingPromises;
                                    var1 = _closure3_slot0;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    if (!(var5 !== var4)) {
                                        _fun14012_ip = 107;
                                        continue _fun14012
                                    }
                                case 96:
                                    var1 = undefined;
                                    if (!(var6 !== var4)) {
                                        _fun14012_ip = 107;
                                        continue _fun14012
                                    }
                                case 102:
                                    var1 = var4.current;
                                case 107:
                                    SaveGenerator(address = 111);
                                case 109:
                                    return var1;
                                case 111:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (!var4) {
                                        _fun14012_ip = 380;
                                        continue _fun14012
                                    }
                                case 120:
                                    return var1;
                                case 123:
                                    var4 = var3.localeImportMap;
                                    var1 = _closure3_slot0;
                                    var1 = var4[var1];
                                    if (!(var5 == var1)) {
                                        _fun14012_ip = 230;
                                        continue _fun14012
                                    }
                                case 141:
                                    var7 = var3.supportedLocales;
                                    var4 = var7.includes;
                                    var1 = _closure3_slot0;
                                    var1 = var4.bind(var7)(var1);
                                    if (!var1) {
                                        _fun14012_ip = 380;
                                        continue _fun14012
                                    }
                                case 167:
                                    var1 = global;
                                    var7 = var1.Error;
                                    var9 = _closure3_slot0;
                                    var1 = var1.HermesInternal;
                                    var8 = var1.concat;
                                    var4 = 'Requested to load locale ';
                                    var1 = ', which should be supported, but no source for translation data was provided.';
                                    var11 = var8.bind(var4)(var9, var1);
                                    var4 = var7.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var12 = var4;
                                    var1 = new var12[var7](var11, var10);
                                    var1 = var1 instanceof Object ? var1 : var4;
                                    throw var1;
                                case 230:
                                    var4 = var3.localeImportMap;
                                    var7 = _closure3_slot0;
                                    var1 = var4[var7];
                                    var1 = var1.bind(var4)();
                                    var4 = var3._localeLoadingPromises;
                                    var7 = var4[var7];
                                    var4 = undefined;
                                    if (!(var5 !== var7)) {
                                        _fun14012_ip = 276;
                                        continue _fun14012
                                    }
                                case 264:
                                    var4 = undefined;
                                    if (!(var4 !== var7)) {
                                        _fun14012_ip = 276;
                                        continue _fun14012
                                    }
                                case 270:
                                    var4 = var7.initialized;
                                case 276:
                                    var8 = var5 !== var4;
                                    if (!var8) {
                                        _fun14012_ip = 287;
                                        continue _fun14012
                                    }
                                case 283:
                                    var8 = var6 !== var4;
                                case 287:
                                    if (!var8) {
                                        _fun14012_ip = 293;
                                        continue _fun14012
                                    }
                                case 290:
                                    var8 = var4;
                                case 293:
                                    var5 = var3._localeLoadingPromises;
                                    var7 = _closure3_slot0;
                                    var4 = {};
                                    var4.initialized = var8;
                                    var4.current = var1;
                                    var5[var7] = var4;
                                    var5 = var3.messages;
                                    SaveGenerator(address = 328);
                                case 326:
                                    return var1;
                                case 328:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun14012_ip = 385;
                                        continue _fun14012
                                    }
                                case 334:
                                    var4 = var1.default;
                                    var5[var7] = var4;
                                    var5 = var3._localeLoadingPromises;
                                    var4 = _closure3_slot0;
                                    var2 = {};
                                    var7 = true;
                                    var2.initialized = var7;
                                    var2.current = var6;
                                    var5[var4] = var2;
                                    var2 = var3.emitChange;
                                    var2 = var2.bind(var3)();
                                case 380:
                                    var2 = undefined;
                                    return var2;
                                case 385:
                                    return var1;
                                case 388:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var8 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var0 = var8[var3](var7, var6, var5, var4, var3);
                    return var0;
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'emitChange';
                var0.key = var5;
                var5 = function() {
                    _fun14013: for (var _fun14013_ip = 0;;) switch (_fun14013_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._subscribers;
                            var0 = var1.values;
                            var0 = var0.bind(var1)();
                            var1 = var0;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                            var0 = undefined;
                        case 26:
                            var3 = var1().value;
                            var4 = var2;
                            if (!(var4 !== var0)) {
                                _fun14013_ip = 50;
                                continue _fun14013
                            }
                        case 37: // try_start_0
                            var3 = var3.bind(var0)();
                        case 41: // try_end0
                            _fun14013_ip = 26;
                            continue _fun14013;
                        case 43: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 50:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'onChange';
                var0.key = var5;
                var5 = function arg0() {
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var1;
                    var2 = var1._subscribers;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot1;
                        var2 = var1._subscribers;
                        var1 = var2.delete;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'isLocaleLoading';
                var0.key = var5;
                var5 = function arg0() {
                    _fun14016: for (var _fun14016_ip = 0;;) switch (_fun14016_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._localeLoadingPromises;
                            var0 = arg0;
                            var2 = var1[var0];
                            var1 = null;
                            var0 = undefined;
                            if (!(var1 !== var2)) {
                                _fun14016_ip = 35;
                                continue _fun14016
                            }
                        case 24:
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun14016_ip = 35;
                                continue _fun14016
                            }
                        case 30:
                            var0 = var2.current;
                        case 35:
                            var0 = var1 != var0;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'isLocaleLoaded';
                var0.key = var5;
                var5 = function arg0() {
                    _fun14017: for (var _fun14017_ip = 0;;) switch (_fun14017_ip) {
                        case 0:
                            var4 = undefined;
                            var2 = undefined;
                            var1 = arguments.length;
                            var0 = 1;
                            var1 = var1 > var0;
                            if (!var1) {
                                _fun14017_ip = 25;
                                continue _fun14017
                            }
                        case 17:
                            var3 = arguments[var0];
                            var1 = var4 !== var3;
                        case 25:
                            if (!var1) {
                                _fun14017_ip = 32;
                                continue _fun14017
                            }
                        case 28:
                            var1 = arguments[var0];
                        case 32:
                            var0 = this;
                            var2 = var0._localeLoadingPromises;
                            var0 = arg0;
                            var2 = var2[var0];
                            var3 = null;
                            var0 = var3 != var2;
                            if (!var0) {
                                _fun14017_ip = 69;
                                continue _fun14017
                            }
                        case 57:
                            var5 = var2.initialized;
                            var4 = 0;
                            var0 = var4 != var5;
                        case 69:
                            if (!var0) {
                                _fun14017_ip = 90;
                                continue _fun14017
                            }
                        case 72:
                            var1 = !var1;
                            if (var1) {
                                _fun14017_ip = 87;
                                continue _fun14017
                            }
                        case 78:
                            var2 = var2.current;
                            var1 = var3 == var2;
                        case 87:
                            var0 = var1;
                        case 90:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = 'waitForLocaleLoaded';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = undefined;
                    var3 = _closure1_slot6;
                    var0 = arguments;
                    var7 = var0;
                    var8 = this;
                    var5 = function(arg0) { // Environment: var0
                        _fun14019: for (var _fun14019_ip = 0;;) switch (_fun14019_ip) {
                            case 0:
                                var1 = undefined;
                                var4 = undefined;
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var2 = this;
                                var _closure4_slot1 = var2;
                                var2 = arguments.length;
                                var3 = 1;
                                var2 = var2 > var3;
                                if (!var2) {
                                    _fun14019_ip = 41;
                                    continue _fun14019
                                }
                            case 33:
                                var5 = arguments[var3];
                                var2 = var1 !== var5;
                            case 41:
                                if (!var2) {
                                    _fun14019_ip = 48;
                                    continue _fun14019
                                }
                            case 44:
                                var2 = arguments[var3];
                            case 48:
                                var _closure4_slot2 = var2;
                                var0 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun14021: for (var _fun14021_ip = 0;;) switch (_fun14021_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun14021_ip = 98;
                                                    continue _fun14021
                                                }
                                            case 7:
                                                var2 = _closure4_slot1;
                                                var3 = var2._localeLoadingPromises;
                                                var2 = _closure4_slot0;
                                                var2 = var3[var2];
                                                var3 = null;
                                                if (!(var3 != var2)) {
                                                    _fun14021_ip = 76;
                                                    continue _fun14021
                                                }
                                            case 34:
                                                var3 = var2.initialized;
                                                if (!var3) {
                                                    _fun14021_ip = 50;
                                                    continue _fun14021
                                                }
                                            case 43:
                                                var4 = _closure4_slot2;
                                                var3 = !var4;
                                            case 50:
                                                if (var3) {
                                                    _fun14021_ip = 71;
                                                    continue _fun14021
                                                }
                                            case 53:
                                                var2 = var2.current;
                                                SaveGenerator(address = 62);
                                            case 60:
                                                return var2;
                                            case 62:
                                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                                if (!var3) {
                                                    _fun14021_ip = 71;
                                                    continue _fun14021
                                                }
                                            case 68:
                                                return var2;
                                            case 71:
                                                var2 = undefined;
                                                return var2;
                                            case 76:
                                                var3 = _closure4_slot1;
                                                var2 = var3._loadLocale;
                                                var1 = _closure4_slot0;
                                                var1 = var2.bind(var3)(var1);
                                                return var1;
                                            case 98:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var0 = var0.bind(var1)();
                                return var0;
                        }
                    };
                    var9 = undefined;
                    var6 = undefined;
                    var0 = var9[var3](var8, var7, var6, var5, var4);
                    return var0;
                };
                var0.value = var5;
                var1[9] = var0;
                var0 = {};
                var5 = 'waitForDefaultLocale';
                var0.key = var5;
                var4 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot6;
                    var0 = arguments;
                    var7 = var0;
                    var8 = this;
                    var5 = function() { // Environment: var0
                        _fun14023: for (var _fun14023_ip = 0;;) switch (_fun14023_ip) {
                            case 0:
                                var1 = undefined;
                                var4 = undefined;
                                var2 = this;
                                var _closure4_slot0 = var2;
                                var2 = arguments.length;
                                var3 = 0;
                                var2 = var2 > var3;
                                if (!var2) {
                                    _fun14023_ip = 33;
                                    continue _fun14023
                                }
                            case 25:
                                var5 = arguments[var3];
                                var2 = var1 !== var5;
                            case 33:
                                if (!var2) {
                                    _fun14023_ip = 40;
                                    continue _fun14023
                                }
                            case 36:
                                var2 = arguments[var3];
                            case 40:
                                var _closure4_slot1 = var2;
                                var0 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun14025: for (var _fun14025_ip = 0;;) switch (_fun14025_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun14025_ip = 39;
                                                    continue _fun14025
                                                }
                                            case 7:
                                                var4 = _closure4_slot0;
                                                var3 = var4.waitForLocaleLoaded;
                                                var2 = var4.defaultLocale;
                                                var1 = _closure4_slot1;
                                                var1 = var3.bind(var4)(var2, var1);
                                                return var1;
                                            case 39:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var0 = var0.bind(var1)();
                                return var0;
                        }
                    };
                    var9 = undefined;
                    var6 = undefined;
                    var0 = var9[var3](var8, var7, var6, var5, var4);
                    return var0;
                };
                var0.value = var4;
                var1[10] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var _closure1_slot7 = var1;
            var3.MessageLoader = var1;
            var1 = new Array(0);
            var _closure1_slot8 = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1291]);