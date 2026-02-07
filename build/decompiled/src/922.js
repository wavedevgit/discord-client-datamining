// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var0 = function arg0() {
        _fun9622: for (var _fun9622_ip = 0;;) switch (_fun9622_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = var0;
                var0 = true;
                var1.__SENTRY_INSTRUMENTED__ = var0;
            case 14: // try_end0
                _fun9622_ip = 18;
                continue _fun9622;
            case 16: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 18:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun9623: for (var _fun9623_ip = 0;;) switch (_fun9623_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var0 = var0.__SENTRY_INSTRUMENTED__;
            case 9: // try_end0
                return var0;
            case 11: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var5 = function arg0() {
        _fun9624: for (var _fun9624_ip = 0;;) switch (_fun9624_ip) {
            case 0:
                var2 = arg0;
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var1 = 1;
                if (!(var0 > var1)) {
                    _fun9624_ip = 25;
                    continue _fun9624
                }
            case 17:
                var0 = arguments[var1];
                if (!(var4 === var0)) {
                    _fun9624_ip = 29;
                    continue _fun9624
                }
            case 25:
                var0 = {};
                _fun9624_ip = 33;
                continue _fun9624;
            case 29:
                var0 = arguments[var1];
            case 33:
                var1 = 'GET';
                if (!(var1 !== var2)) {
                    _fun9624_ip = 143;
                    continue _fun9624
                }
            case 43:
                var1 = 'POST';
                if (!(var1 !== var2)) {
                    _fun9624_ip = 91;
                    continue _fun9624
                }
            case 53:
                var1 = 'PATCH';
                if (!(var1 !== var2)) {
                    _fun9624_ip = 85;
                    continue _fun9624
                }
            case 63:
                var1 = 'DELETE';
                if (!(var1 !== var2)) {
                    _fun9624_ip = 79;
                    continue _fun9624
                }
            case 71:
                var1 = '<unknown-op>';
                return var1;
            case 79:
                var1 = 'delete';
                return var1;
            case 85:
                var1 = 'update';
                return var1;
            case 91:
                var4 = var0.Prefer;
                var0 = null;
                var1 = var0 != var4;
                var2 = 'insert';
                var0 = var2;
                if (!var1) {
                    _fun9624_ip = 141;
                    continue _fun9624
                }
            case 113:
                var3 = var4.includes;
                var1 = 'resolution=';
                var1 = var3.bind(var4)(var1);
                var0 = var2;
                if (!var1) {
                    _fun9624_ip = 141;
                    continue _fun9624
                }
            case 135:
                var0 = 'upsert';
            case 141:
                return var0;
            case 143:
                var0 = 'select';
                return var0;
        }
    };
    var _closure1_slot13 = var5;
    var1 = function arg0, arg1() {
        _fun9625: for (var _fun9625_ip = 0;;) switch (_fun9625_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = '';
                if (!(var1 !== var3)) {
                    _fun9625_ip = 371;
                    continue _fun9625
                }
            case 17:
                var0 = '*';
                if (!(var0 !== var3)) {
                    _fun9625_ip = 371;
                    continue _fun9625
                }
            case 28:
                var0 = 'select';
                if (!(var0 !== var2)) {
                    _fun9625_ip = 340;
                    continue _fun9625
                }
            case 39:
                var0 = 'or';
                if (!(var0 !== var2)) {
                    _fun9625_ip = 319;
                    continue _fun9625
                }
            case 50:
                var4 = var2.endsWith;
                var0 = '.or';
                var0 = var4.bind(var2)(var0);
                if (var0) {
                    _fun9625_ip = 319;
                    continue _fun9625
                }
            case 73:
                var0 = var3.split;
                var5 = '.';
                var6 = var0.bind(var3)(var5);
                var4 = _closure1_slot5;
                var0 = undefined;
                var6 = var4.bind(var0)(var6);
                var0 = 0;
                var11 = var6[var0];
                var4 = var6.slice;
                var0 = 1;
                var4 = var4.bind(var6)(var0);
                var7 = null;
                if (!(var7 != var11)) {
                    _fun9625_ip = 150;
                    continue _fun9625
                }
            case 126:
                var6 = var11.startsWith;
                var0 = 'fts';
                var0 = var6.bind(var11)(var0);
                var8 = 'textSearch';
                if (var0) {
                    _fun9625_ip = 267;
                    continue _fun9625
                }
            case 150:
                if (!(var7 != var11)) {
                    _fun9625_ip = 178;
                    continue _fun9625
                }
            case 154:
                var6 = var11.startsWith;
                var0 = 'plfts';
                var6 = var6.bind(var11)(var0);
                var0 = 'textSearch[plain]';
                if (var6) {
                    _fun9625_ip = 264;
                    continue _fun9625
                }
            case 178:
                if (!(var7 != var11)) {
                    _fun9625_ip = 206;
                    continue _fun9625
                }
            case 182:
                var9 = var11.startsWith;
                var6 = 'phfts';
                var9 = var9.bind(var11)(var6);
                var6 = 'textSearch[phrase]';
                if (var9) {
                    _fun9625_ip = 261;
                    continue _fun9625
                }
            case 206:
                if (!(var7 != var11)) {
                    _fun9625_ip = 234;
                    continue _fun9625
                }
            case 210:
                var9 = var11.startsWith;
                var7 = 'wfts';
                var9 = var9.bind(var11)(var7);
                var7 = 'textSearch[websearch]';
                if (var9) {
                    _fun9625_ip = 258;
                    continue _fun9625
                }
            case 234:
                var9 = var11;
                if (!var9) {
                    _fun9625_ip = 248;
                    continue _fun9625
                }
            case 240:
                var10 = _closure1_slot8;
                var9 = var10[var11];
            case 248:
                if (var9) {
                    _fun9625_ip = 255;
                    continue _fun9625
                }
            case 251:
                var9 = 'filter';
            case 255:
                var7 = var9;
            case 258:
                var6 = var7;
            case 261:
                var0 = var6;
            case 264:
                var8 = var0;
            case 267:
                var0 = var4.join;
                var14 = var0.bind(var4)(var5);
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var17 = '(';
                var15 = ', ';
                var13 = ')';
                var19 = var1;
                var18 = var8;
                var16 = var2;
                var0 = var19[var6](var18, var17, var16, var15, var14, var13, var12);
                return var0;
            case 319:
                var0 = global;
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var1)(var2, var3);
                return var0;
            case 340:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = 'select(';
                var0 = ')';
                var0 = var2.bind(var1)(var3, var0);
                return var0;
            case 371:
                var0 = 'select(*)';
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = function arg0() {
        _fun9626: for (var _fun9626_ip = 0;;) switch (_fun9626_ip) {
            case 0:
                var3 = arg0;
                var6 = undefined;
                var4 = undefined;
                var _closure2_slot0 = var3;
                var0 = arguments.length;
                var2 = 1;
                var0 = var0 > var2;
                if (!var0) {
                    _fun9626_ip = 34;
                    continue _fun9626
                }
            case 26:
                var5 = arguments[var2];
                var0 = var6 !== var5;
            case 34:
                if (!var0) {
                    _fun9626_ip = 41;
                    continue _fun9626
                }
            case 37:
                var0 = arguments[var2];
            case 41:
                var _closure2_slot1 = var0;
                var0 = global;
                var2 = var0.Proxy;
                var0 = {};
                var1 = function arg0, arg1, arg2() {
                    _fun9627: for (var _fun9627_ip = 0;;) switch (_fun9627_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = arg2;
                            var _closure3_slot2 = var1;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 4;
                            var1 = var3[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.startSpan;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var10 = '';
                            var12 = var10;
                            if (!var4) {
                                _fun9627_ip = 79;
                                continue _fun9627
                            }
                        case 73:
                            var12 = '(admin) ';
                        case 79:
                            var4 = _closure2_slot0;
                            var11 = var4.name;
                            var4 = global;
                            var7 = var4.HermesInternal;
                            var9 = var7.concat;
                            var7 = 'auth ';
                            var7 = var9.bind(var7)(var12, var11);
                            var1.name = var7;
                            var7 = _closure1_slot4;
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var6 = 5;
                            var11 = var12[var6];
                            var11 = var9.bind(var8)(var11);
                            var14 = var11.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var13 = {};
                            var11 = 'auto.db.supabase';
                            var11 = var7.bind(var8)(var13, var14, var11);
                            var6 = var12[var6];
                            var6 = var9.bind(var8)(var6);
                            var9 = var6.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var6 = 'db';
                            var11 = var7.bind(var8)(var11, var9, var6);
                            var9 = 'db.system';
                            var6 = 'postgresql';
                            var6 = var7.bind(var8)(var11, var9, var6);
                            var9 = _closure2_slot1;
                            if (!var9) {
                                _fun9627_ip = 220;
                                continue _fun9627
                            }
                        case 214:
                            var10 = 'admin.';
                        case 220:
                            var5 = _closure2_slot0;
                            var9 = var5.name;
                            var4 = var4.HermesInternal;
                            var5 = var4.concat;
                            var4 = 'auth.';
                            var5 = var5.bind(var4)(var10, var9);
                            var4 = 'db.operation';
                            var4 = var7.bind(var8)(var6, var4, var5);
                            var1.attributes = var4;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = global;
                                var4 = var1.Reflect;
                                var3 = var4.apply;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var5 = _closure3_slot2;
                                var3 = var3.bind(var4)(var2, var1, var5);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    _fun9629: for (var _fun9629_ip = 0;;) switch (_fun9629_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun9629_ip = 36;
                                                continue _fun9629
                                            }
                                        case 6:
                                            var2 = 'object';
                                            var1 = typeof var0;
                                            if (!(var2 === var1)) {
                                                _fun9629_ip = 36;
                                                continue _fun9629
                                            }
                                        case 17:
                                            var1 = 'error';
                                            var1 = var1 in var0;
                                            if (!var1) {
                                                _fun9629_ip = 36;
                                                continue _fun9629
                                            }
                                        case 28:
                                            var1 = var0.error;
                                            if (var1) {
                                                _fun9629_ip = 93;
                                                continue _fun9629
                                            }
                                        case 36:
                                            var3 = _closure4_slot0;
                                            var2 = var3.setStatus;
                                            var1 = {};
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var4 = 6;
                                            var5 = var5[var4];
                                            var4 = undefined;
                                            var4 = var6.bind(var4)(var5);
                                            var4 = var4.SPAN_STATUS_OK;
                                            var1.code = var4;
                                            var1 = var2.bind(var3)(var1);
                                            _fun9629_ip = 194;
                                            continue _fun9629;
                                        case 93:
                                            var6 = _closure4_slot0;
                                            var5 = var6.setStatus;
                                            var1 = {};
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var2 = 6;
                                            var7 = var4[var2];
                                            var2 = undefined;
                                            var7 = var3.bind(var2)(var7);
                                            var7 = var7.SPAN_STATUS_ERROR;
                                            var1.code = var7;
                                            var1 = var5.bind(var6)(var1);
                                            var1 = 7;
                                            var1 = var4[var1];
                                            var4 = var3.bind(var2)(var1);
                                            var3 = var4.captureException;
                                            var2 = var0.error;
                                            var1 = {};
                                            var5 = {
                                                'handled': false,
                                                'type': 'auto.db.supabase.auth'
                                            };
                                            var1.mechanism = var5;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 194:
                                            var2 = _closure4_slot0;
                                            var1 = var2.end;
                                            var1 = var1.bind(var2)();
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.catch;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var5 = _closure4_slot0;
                                    var6 = var5.setStatus;
                                    var1 = {};
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var2 = 6;
                                    var7 = var4[var2];
                                    var2 = undefined;
                                    var7 = var3.bind(var2)(var7);
                                    var7 = var7.SPAN_STATUS_ERROR;
                                    var1.code = var7;
                                    var1 = var6.bind(var5)(var1);
                                    var1 = var5.end;
                                    var1 = var1.bind(var5)();
                                    var1 = 7;
                                    var1 = var4[var1];
                                    var3 = var3.bind(var2)(var1);
                                    var2 = var3.captureException;
                                    var1 = {};
                                    var4 = {
                                        'handled': false,
                                        'type': 'auto.db.supabase.auth'
                                    };
                                    var1.mechanism = var4;
                                    var1 = var2.bind(var3)(var0, var1);
                                    throw var0;
                                };
                                var3 = var1.bind(var2)(var0);
                                var2 = var3.then;
                                var1 = var2.apply;
                                var4 = _closure1_slot3;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var5);
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.apply = var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var1;
                var8 = var3;
                var7 = var0;
                var0 = new var9[var2](var8, var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun9631: for (var _fun9631_ip = 0;;) switch (_fun9631_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot12;
                var0 = var1.prototype;
                var3 = var0.from;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                if (var3) {
                    _fun9631_ip = 114;
                    continue _fun9631
                }
            case 30:
                var4 = var1.prototype;
                var3 = global;
                var7 = var3.Proxy;
                var3 = var1.prototype;
                var9 = var3.from;
                var3 = {};
                var5 = function arg0, arg1, arg2() {
                    var0 = global;
                    var4 = var0.Reflect;
                    var3 = var4.apply;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var3 = var0.constructor;
                    var2 = function arg0() {
                        _fun9633: for (var _fun9633_ip = 0;;) switch (_fun9633_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var3 = function arg0() {
                                    _fun9634: for (var _fun9634_ip = 0;;) switch (_fun9634_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var _closure5_slot0 = var3;
                                            var5 = _closure1_slot12;
                                            var0 = _closure4_slot0;
                                            var0 = var0.prototype;
                                            var4 = var0[var3];
                                            var0 = undefined;
                                            var4 = var5.bind(var0)(var4);
                                            if (var4) {
                                                _fun9634_ip = 126;
                                                continue _fun9634
                                            }
                                        case 42:
                                            var1 = _closure4_slot0;
                                            var5 = var1.prototype;
                                            var4 = global;
                                            var8 = var4.Proxy;
                                            var4 = var1.prototype;
                                            var10 = var4[var3];
                                            var4 = {};
                                            var6 = function arg0, arg1, arg2() {
                                                _fun9635: for (var _fun9635_ip = 0;;) switch (_fun9635_ip) {
                                                    case 0:
                                                        var1 = global;
                                                        var5 = var1.Reflect;
                                                        var4 = var5.apply;
                                                        var3 = arg0;
                                                        var2 = arg1;
                                                        var0 = arg2;
                                                        var0 = var4.bind(var5)(var3, var2, var0);
                                                        var3 = var0.constructor;
                                                        var6 = _closure1_slot0;
                                                        var5 = _closure1_slot1;
                                                        var2 = 11;
                                                        var5 = var5[var2];
                                                        var2 = undefined;
                                                        var5 = var6.bind(var2)(var5);
                                                        var5 = var5.DEBUG_BUILD;
                                                        if (!var5) {
                                                            _fun9635_ip = 140;
                                                            continue _fun9635
                                                        }
                                                    case 68:
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot1;
                                                        var4 = 12;
                                                        var4 = var6[var4];
                                                        var4 = var5.bind(var2)(var4);
                                                        var5 = var4.debug;
                                                        var4 = var5.log;
                                                        var8 = _closure5_slot0;
                                                        var1 = var1.HermesInternal;
                                                        var7 = var1.concat;
                                                        var6 = 'Instrumenting ';
                                                        var1 = " operation's PostgRESTFilterBuilder";
                                                        var1 = var7.bind(var6)(var8, var1);
                                                        var1 = var4.bind(var5)(var1);
                                                    case 140:
                                                        var1 = function arg0() {
                                                            _fun9636: for (var _fun9636_ip = 0;;) switch (_fun9636_ip) {
                                                                case 0:
                                                                    var1 = arg0;
                                                                    var4 = _closure1_slot12;
                                                                    var0 = var1.prototype;
                                                                    var3 = var0.then;
                                                                    var0 = undefined;
                                                                    var3 = var4.bind(var0)(var3);
                                                                    if (var3) {
                                                                        _fun9636_ip = 116;
                                                                        continue _fun9636
                                                                    }
                                                                case 30:
                                                                    var4 = var1.prototype;
                                                                    var3 = global;
                                                                    var7 = var3.Proxy;
                                                                    var3 = var1.prototype;
                                                                    var9 = var3.then;
                                                                    var3 = {};
                                                                    var5 = function arg0, arg1, arg2() {
                                                                        _fun9637: for (var _fun9637_ip = 0;;) switch (_fun9637_ip) {
                                                                            case 0:
                                                                                var4 = arg0;
                                                                                var3 = arg1;
                                                                                var2 = arg2;
                                                                                var _closure8_slot0 = var4;
                                                                                var _closure8_slot1 = var3;
                                                                                var _closure8_slot2 = var2;
                                                                                var6 = undefined;
                                                                                var10 = undefined;
                                                                                var5 = undefined;
                                                                                var9 = _closure1_slot9;
                                                                                var11 = _closure1_slot13;
                                                                                var8 = var3.method;
                                                                                var7 = var3.headers;
                                                                                var7 = var11.bind(var6)(var8, var7);
                                                                                var _closure8_slot3 = var7;
                                                                                var8 = var9.includes;
                                                                                var8 = var8.bind(var9)(var7);
                                                                                if (var8) {
                                                                                    _fun9637_ip = 97;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 75:
                                                                                var8 = global;
                                                                                var9 = var8.Reflect;
                                                                                var8 = var9.apply;
                                                                                var8 = var8.bind(var9)(var4, var3, var2);
                                                                                return var8;
                                                                            case 97:
                                                                                var16 = null;
                                                                                if (!(var16 != var3)) {
                                                                                    _fun9637_ip = 794;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 106:
                                                                                var8 = var3.url;
                                                                                if (!(var16 != var8)) {
                                                                                    _fun9637_ip = 794;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 118:
                                                                                var8 = var8.pathname;
                                                                                if (!var8) {
                                                                                    _fun9637_ip = 794;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 130:
                                                                                var8 = var3.url;
                                                                                var8 = var8.pathname;
                                                                                var9 = 'string';
                                                                                var8 = typeof var8;
                                                                                if (!(var9 === var8)) {
                                                                                    _fun9637_ip = 794;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 155:
                                                                                var8 = var3.url;
                                                                                var11 = var8.pathname;
                                                                                var9 = var11.split;
                                                                                var8 = '/';
                                                                                var9 = var9.bind(var11)(var8);
                                                                                var8 = var9.length;
                                                                                var15 = 0;
                                                                                var8 = var8 > var15;
                                                                                var17 = '';
                                                                                var12 = var17;
                                                                                if (!var8) {
                                                                                    _fun9637_ip = 217;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 201:
                                                                                var11 = var9.length;
                                                                                var8 = 1;
                                                                                var8 = var11 - var8;
                                                                                var12 = var9[var8];
                                                                            case 217:
                                                                                var8 = new Array(0);
                                                                                var10 = var8;
                                                                                var _closure8_slot4 = var8;
                                                                                var8 = var3.url;
                                                                                var9 = var8.searchParams;
                                                                                var8 = var9.entries;
                                                                                var11 = var8.bind(var9)();
                                                                                var8 = var11;
                                                                                var9 = var8[Symbol.iterator];
                                                                                var8 = var9().next;
                                                                                var14 = 2;
                                                                                var13 = 1;
                                                                            case 261:
                                                                                var18 = var8().value;
                                                                                var11 = var9;
                                                                                if (!(var11 !== var6)) {
                                                                                    _fun9637_ip = 322;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 272: // try_start_0
                                                                                var11 = _closure1_slot2;
                                                                                var11 = var11.bind(var6)(var18, var14);
                                                                                var21 = var11[var15];
                                                                                var20 = var11[var13];
                                                                                var19 = var10;
                                                                                var18 = var19.push;
                                                                                var11 = _closure1_slot14;
                                                                                var11 = var11.bind(var6)(var21, var20);
                                                                                var11 = var18.bind(var19)(var11);
                                                                            case 313: // try_end0
                                                                                _fun9637_ip = 261;
                                                                                continue _fun9637;
                                                                            case 315: // catch_target0
                                                                                CatchBlockStart(arg_register = 8);
                                                                                var9.return();
                                                                                throw var8;
                                                                            case 322:
                                                                                var9 = global;
                                                                                var11 = var9.Object;
                                                                                var8 = var11.create;
                                                                                var8 = var8.bind(var11)(var16);
                                                                                var5 = var8;
                                                                                var _closure8_slot5 = var8;
                                                                                var11 = _closure1_slot0;
                                                                                var16 = _closure1_slot1;
                                                                                var8 = 8;
                                                                                var8 = var16[var8];
                                                                                var16 = var11.bind(var6)(var8);
                                                                                var11 = var16.isPlainObject;
                                                                                var8 = var3.body;
                                                                                var8 = var11.bind(var16)(var8);
                                                                                if (!var8) {
                                                                                    _fun9637_ip = 459;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 386:
                                                                                var16 = var9.Object;
                                                                                var11 = var16.entries;
                                                                                var8 = var3.body;
                                                                                var16 = var11.bind(var16)(var8);
                                                                                var8 = var16;
                                                                                var11 = var8[Symbol.iterator];
                                                                                var8 = var11().next;
                                                                            case 414:
                                                                                var18 = var8().value;
                                                                                var16 = var11;
                                                                                if (!(var16 !== var6)) {
                                                                                    _fun9637_ip = 459;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 425: // try_start_1
                                                                                var16 = _closure1_slot2;
                                                                                var16 = var16.bind(var6)(var18, var14);
                                                                                var19 = var16[var15];
                                                                                var18 = var16[var13];
                                                                                var16 = var5;
                                                                                var16[var19] = var18;
                                                                            case 450: // try_end1
                                                                                _fun9637_ip = 414;
                                                                                continue _fun9637;
                                                                            case 452: // catch_target1
                                                                                CatchBlockStart(arg_register = 8);
                                                                                var11.return();
                                                                                throw var8;
                                                                            case 459:
                                                                                var8 = 'select';
                                                                                var16 = var17;
                                                                                if (!(var8 !== var7)) {
                                                                                    _fun9637_ip = 502;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 470:
                                                                                var8 = var5;
                                                                                var11 = var17;
                                                                                if (!var8) {
                                                                                    _fun9637_ip = 485;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 479:
                                                                                var11 = '(...) ';
                                                                            case 485:
                                                                                var8 = var9.HermesInternal;
                                                                                var8 = var8.concat;
                                                                                var16 = var8.bind(var17)(var7, var11);
                                                                            case 502:
                                                                                var11 = var10;
                                                                                var13 = var11.join;
                                                                                var8 = ' ';
                                                                                var25 = var13.bind(var11)(var8);
                                                                                var8 = var9.HermesInternal;
                                                                                var14 = var8.concat;
                                                                                var24 = ' from(';
                                                                                var22 = ')';
                                                                                var27 = var17;
                                                                                var26 = var16;
                                                                                var23 = var12;
                                                                                var8 = var27[var14](var26, var25, var24, var23, var22, var21);
                                                                                var _closure8_slot6 = var8;
                                                                                var14 = _closure1_slot4;
                                                                                var17 = {};
                                                                                var17['db.table'] = var12;
                                                                                var12 = var3.schema;
                                                                                var17['db.schema'] = var12;
                                                                                var12 = var3.url;
                                                                                var12 = var12.origin;
                                                                                var17['db.url'] = var12;
                                                                                var12 = var3.headers;
                                                                                var12 = var12["X-Client-Info"];
                                                                                var17['db.sdk'] = var12;
                                                                                var12 = 'postgresql';
                                                                                var17['db.system'] = var12;
                                                                                var17['db.operation'] = var7;
                                                                                var12 = _closure1_slot0;
                                                                                var15 = _closure1_slot1;
                                                                                var7 = 5;
                                                                                var13 = var15[var7];
                                                                                var13 = var12.bind(var6)(var13);
                                                                                var16 = var13.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                                                                var13 = 'auto.db.supabase';
                                                                                var13 = var14.bind(var6)(var17, var16, var13);
                                                                                var7 = var15[var7];
                                                                                var7 = var12.bind(var6)(var7);
                                                                                var12 = var7.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                                                                var7 = 'db';
                                                                                var7 = var14.bind(var6)(var13, var12, var7);
                                                                                var11 = var11.length;
                                                                                if (!var11) {
                                                                                    _fun9637_ip = 711;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 705:
                                                                                var7['db.query'] = var10;
                                                                            case 711:
                                                                                var11 = var9.Object;
                                                                                var10 = var11.keys;
                                                                                var9 = var5;
                                                                                var9 = var10.bind(var11)(var9);
                                                                                var9 = var9.length;
                                                                                if (!var9) {
                                                                                    _fun9637_ip = 744;
                                                                                    continue _fun9637
                                                                                }
                                                                            case 738:
                                                                                var7['db.body'] = var5;
                                                                            case 744:
                                                                                var5 = _closure1_slot0;
                                                                                var9 = _closure1_slot1;
                                                                                var1 = 4;
                                                                                var1 = var9[var1];
                                                                                var6 = var5.bind(var6)(var1);
                                                                                var5 = var6.startSpan;
                                                                                var1 = {};
                                                                                var1.name = var8;
                                                                                var1.attributes = var7;
                                                                                var0 = function(arg0) { // Environment: var0
                                                                                    var0 = arg0;
                                                                                    var _closure9_slot0 = var0;
                                                                                    var0 = global;
                                                                                    var6 = var0.Reflect;
                                                                                    var5 = var6.apply;
                                                                                    var4 = _closure8_slot0;
                                                                                    var3 = _closure8_slot1;
                                                                                    var2 = new Array(0);
                                                                                    var4 = var5.bind(var6)(var4, var3, var2);
                                                                                    var3 = var4.then;
                                                                                    var2 = function(arg0) { // Environment: var1
                                                                                        _fun9639: for (var _fun9639_ip = 0;;) switch (_fun9639_ip) {
                                                                                            case 0:
                                                                                                var0 = arg0;
                                                                                                var3 = _closure9_slot0;
                                                                                                if (!var3) {
                                                                                                    _fun9639_ip = 114;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 15:
                                                                                                var3 = var0;
                                                                                                if (!var3) {
                                                                                                    _fun9639_ip = 32;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 21:
                                                                                                var5 = 'object';
                                                                                                var4 = typeof var0;
                                                                                                var3 = var5 === var4;
                                                                                            case 32:
                                                                                                if (!var3) {
                                                                                                    _fun9639_ip = 43;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 35:
                                                                                                var4 = 'status';
                                                                                                var3 = var4 in var0;
                                                                                            case 43:
                                                                                                if (!var3) {
                                                                                                    _fun9639_ip = 101;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 46:
                                                                                                var5 = _closure1_slot0;
                                                                                                var4 = _closure1_slot1;
                                                                                                var3 = 6;
                                                                                                var4 = var4[var3];
                                                                                                var3 = undefined;
                                                                                                var6 = var5.bind(var3)(var4);
                                                                                                var5 = var6.setHttpStatus;
                                                                                                var4 = _closure9_slot0;
                                                                                                var3 = var0.status;
                                                                                                if (var3) {
                                                                                                    _fun9639_ip = 95;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 89:
                                                                                                var3 = 500;
                                                                                            case 95:
                                                                                                var3 = var5.bind(var6)(var4, var3);
                                                                                            case 101:
                                                                                                var3 = _closure9_slot0;
                                                                                                var2 = var3.end;
                                                                                                var2 = var2.bind(var3)();
                                                                                            case 114:
                                                                                                var2 = var0.error;
                                                                                                if (!var2) {
                                                                                                    _fun9639_ip = 334;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 125:
                                                                                                var5 = global;
                                                                                                var4 = var5.Error;
                                                                                                var2 = var0.error;
                                                                                                var9 = var2.message;
                                                                                                var3 = var4.prototype;
                                                                                                var3 = Object.create(var3, {
                                                                                                    constructor: {
                                                                                                        value: var4
                                                                                                    }
                                                                                                });
                                                                                                var10 = var3;
                                                                                                var2 = new var10[var4](var9, var8);
                                                                                                var4 = var2 instanceof Object ? var2 : var3;
                                                                                                var2 = var0.error;
                                                                                                var2 = var2.code;
                                                                                                if (!var2) {
                                                                                                    _fun9639_ip = 192;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 176:
                                                                                                var2 = var0.error;
                                                                                                var2 = var2.code;
                                                                                                var4.code = var2;
                                                                                            case 192:
                                                                                                var2 = var0.error;
                                                                                                var2 = var2.details;
                                                                                                if (!var2) {
                                                                                                    _fun9639_ip = 223;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 206:
                                                                                                var2 = var0.error;
                                                                                                var2 = var2.details;
                                                                                                var4.details = var2;
                                                                                            case 223:
                                                                                                var3 = {};
                                                                                                var _closure10_slot0 = var3;
                                                                                                var6 = _closure8_slot4;
                                                                                                var6 = var6.length;
                                                                                                if (!var6) {
                                                                                                    _fun9639_ip = 254;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 244:
                                                                                                var6 = _closure8_slot4;
                                                                                                var3.query = var6;
                                                                                            case 254:
                                                                                                var7 = var5.Object;
                                                                                                var6 = var7.keys;
                                                                                                var5 = _closure8_slot5;
                                                                                                var5 = var6.bind(var7)(var5);
                                                                                                var5 = var5.length;
                                                                                                if (!var5) {
                                                                                                    _fun9639_ip = 292;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 282:
                                                                                                var2 = _closure8_slot5;
                                                                                                var3.body = var2;
                                                                                            case 292:
                                                                                                var5 = _closure1_slot0;
                                                                                                var3 = _closure1_slot1;
                                                                                                var2 = 7;
                                                                                                var3 = var3[var2];
                                                                                                var2 = undefined;
                                                                                                var3 = var5.bind(var2)(var3);
                                                                                                var2 = var3.captureException;
                                                                                                var1 = function(arg0) { // Environment: var1
                                                                                                    var0 = arg0;
                                                                                                    var2 = var0.addEventProcessor;
                                                                                                    var1 = function(arg0) { // Environment: var1
                                                                                                        var0 = arg0;
                                                                                                        var3 = _closure1_slot0;
                                                                                                        var2 = _closure1_slot1;
                                                                                                        var1 = 9;
                                                                                                        var2 = var2[var1];
                                                                                                        var1 = undefined;
                                                                                                        var3 = var3.bind(var1)(var2);
                                                                                                        var2 = var3.addExceptionMechanism;
                                                                                                        var1 = {
                                                                                                            'handled': false,
                                                                                                            'type': 'auto.db.supabase.postgres'
                                                                                                        };
                                                                                                        var1 = var2.bind(var3)(var0, var1);
                                                                                                        return var0;
                                                                                                    };
                                                                                                    var1 = var2.bind(var0)(var1);
                                                                                                    var3 = var0.setContext;
                                                                                                    var2 = _closure10_slot0;
                                                                                                    var1 = 'supabase';
                                                                                                    var1 = var3.bind(var0)(var1, var2);
                                                                                                    return var0;
                                                                                                };
                                                                                                var1 = var2.bind(var3)(var4, var1);
                                                                                            case 334:
                                                                                                var3 = {};
                                                                                                var1 = 'supabase';
                                                                                                var3.type = var1;
                                                                                                var6 = _closure8_slot3;
                                                                                                var2 = global;
                                                                                                var1 = var2.HermesInternal;
                                                                                                var5 = var1.concat;
                                                                                                var1 = 'db.';
                                                                                                var1 = var5.bind(var1)(var6);
                                                                                                var3.category = var1;
                                                                                                var1 = _closure8_slot6;
                                                                                                var3.message = var1;
                                                                                                var1 = {};
                                                                                                var5 = _closure8_slot4;
                                                                                                var5 = var5.length;
                                                                                                if (!var5) {
                                                                                                    _fun9639_ip = 414;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 404:
                                                                                                var5 = _closure8_slot4;
                                                                                                var1.query = var5;
                                                                                            case 414:
                                                                                                var7 = var2.Object;
                                                                                                var6 = var7.keys;
                                                                                                var5 = _closure8_slot5;
                                                                                                var5 = var6.bind(var7)(var5);
                                                                                                var5 = var5.length;
                                                                                                if (!var5) {
                                                                                                    _fun9639_ip = 452;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 442:
                                                                                                var4 = _closure8_slot5;
                                                                                                var1.body = var4;
                                                                                            case 452:
                                                                                                var4 = var2.Object;
                                                                                                var2 = var4.keys;
                                                                                                var2 = var2.bind(var4)(var1);
                                                                                                var2 = var2.length;
                                                                                                if (!var2) {
                                                                                                    _fun9639_ip = 482;
                                                                                                    continue _fun9639
                                                                                                }
                                                                                            case 476:
                                                                                                var3.data = var1;
                                                                                            case 482:
                                                                                                var4 = _closure1_slot0;
                                                                                                var2 = _closure1_slot1;
                                                                                                var1 = 10;
                                                                                                var2 = var2[var1];
                                                                                                var1 = undefined;
                                                                                                var2 = var4.bind(var1)(var2);
                                                                                                var1 = var2.addBreadcrumb;
                                                                                                var1 = var1.bind(var2)(var3);
                                                                                                return var0;
                                                                                        }
                                                                                    };
                                                                                    var1 = function(arg0) { // Environment: var1
                                                                                        _fun9642: for (var _fun9642_ip = 0;;) switch (_fun9642_ip) {
                                                                                            case 0:
                                                                                                var1 = _closure9_slot0;
                                                                                                if (!var1) {
                                                                                                    _fun9642_ip = 66;
                                                                                                    continue _fun9642
                                                                                                }
                                                                                            case 10:
                                                                                                var3 = _closure1_slot0;
                                                                                                var2 = _closure1_slot1;
                                                                                                var1 = 6;
                                                                                                var2 = var2[var1];
                                                                                                var1 = undefined;
                                                                                                var3 = var3.bind(var1)(var2);
                                                                                                var2 = var3.setHttpStatus;
                                                                                                var1 = _closure9_slot0;
                                                                                                var0 = 500;
                                                                                                var0 = var2.bind(var3)(var1, var0);
                                                                                                var0 = var1.end;
                                                                                                var0 = var0.bind(var1)();
                                                                                            case 66:
                                                                                                var0 = arg0;
                                                                                                throw var0;
                                                                                        }
                                                                                    };
                                                                                    var3 = var3.bind(var4)(var2, var1);
                                                                                    var2 = var3.then;
                                                                                    var1 = var2.apply;
                                                                                    var5 = _closure1_slot3;
                                                                                    var4 = _closure8_slot2;
                                                                                    var0 = undefined;
                                                                                    var0 = var5.bind(var0)(var4);
                                                                                    var0 = var1.bind(var2)(var3, var0);
                                                                                    return var0;
                                                                                };
                                                                                var0 = var5.bind(var6)(var1, var0);
                                                                                return var0;
                                                                            case 794:
                                                                                var0 = global;
                                                                                var1 = var0.Reflect;
                                                                                var0 = var1.apply;
                                                                                var0 = var0.bind(var1)(var4, var3, var2);
                                                                                return var0;
                                                                        }
                                                                    };
                                                                    var3.apply = var5;
                                                                    var5 = var7.prototype;
                                                                    var5 = Object.create(var5, {
                                                                        constructor: {
                                                                            value: var7
                                                                        }
                                                                    });
                                                                    var10 = var5;
                                                                    var8 = var3;
                                                                    var3 = new var10[var7](var9, var8, var7);
                                                                    var3 = var3 instanceof Object ? var3 : var5;
                                                                    var4.then = var3;
                                                                    var2 = _closure1_slot11;
                                                                    var1 = var1.prototype;
                                                                    var1 = var1.then;
                                                                    var1 = var2.bind(var0)(var1);
                                                                    return var0;
                                                                case 116:
                                                                    return var0;
                                                            }
                                                        };
                                                        var1 = var1.bind(var2)(var3);
                                                        return var0;
                                                }
                                            };
                                            var4.apply = var6;
                                            var6 = var8.prototype;
                                            var6 = Object.create(var6, {
                                                constructor: {
                                                    value: var8
                                                }
                                            });
                                            var11 = var6;
                                            var9 = var4;
                                            var4 = new var11[var8](var10, var9, var8);
                                            var4 = var4 instanceof Object ? var4 : var6;
                                            var5[var3] = var4;
                                            var2 = _closure1_slot11;
                                            var1 = var1.prototype;
                                            var1 = var1[var3];
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        case 126:
                                            var0 = 1;
                                            return var0;
                                    }
                                };
                                var0 = _closure1_slot9;
                                var1 = var0;
                                var2 = var1[Symbol.iterator];
                                var1 = var2().next;
                                var0 = undefined;
                            case 29:
                                var5 = var1().value;
                                var4 = var2;
                                if (!(var4 !== var0)) {
                                    _fun9633_ip = 57;
                                    continue _fun9633
                                }
                            case 40: // try_start_0
                                var4 = var3;
                                var4 = var4.bind(var0)(var5);
                            case 48: // try_end0
                                _fun9633_ip = 29;
                                continue _fun9633;
                            case 50: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2.return();
                                throw var1;
                            case 57:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    return var0;
                };
                var3.apply = var5;
                var5 = var7.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var5;
                var8 = var3;
                var3 = new var10[var7](var9, var8, var7);
                var3 = var3 instanceof Object ? var3 : var5;
                var4.from = var3;
                var2 = _closure1_slot11;
                var1 = var1.prototype;
                var1 = var1.from;
                var1 = var2.bind(var0)(var1);
            case 114:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = 0;
    var4 = var10[var0];
    var0 = undefined;
    var4 = var9.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var10[var4];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var4 = var4.Symbol;
    var6 = var4.toStringTag;
    var4 = {};
    var11 = 'Module';
    var4.value = var11;
    var4 = var7.bind(var8)(var2, var6, var4);
    var4 = ['reauthenticate', 'signInAnonymously', 'signInWithOAuth', 'signInWithIdToken', 'signInWithOtp', 'signInWithPassword', 'signInWithSSO', 'signOut', 'signUp', 'verifyOtp'];
    var _closure1_slot6 = var4;
    var4 = ['createUser', 'deleteUser', 'listUsers', 'getUserById', 'updateUserById', 'inviteUserByEmail'];
    var _closure1_slot7 = var4;
    var6 = {
        'eq': 'eq',
        'neq': 'neq',
        'gt': 'gt',
        'gte': 'gte',
        'lt': 'lt',
        'lte': 'lte',
        'like': 'like',
        'like(all)': 'likeAllOf',
        'like(any)': 'likeAnyOf',
        'ilike': 'ilike',
        'ilike(all)': 'ilikeAllOf',
        'ilike(any)': 'ilikeAnyOf',
        'is': 'is',
        'in': 'in',
        'cs': 'contains',
        'cd': 'containedBy',
        'sr': 'rangeGt',
        'nxl': 'rangeGte',
        'sl': 'rangeLt',
        'nxr': 'rangeLte',
        'adj': 'rangeAdjacent',
        'ov': 'overlaps',
        'fts': '',
        'plfts': 'plain',
        'phfts': 'phrase',
        'wfts': 'websearch',
        'not': 'not'
    };
    var _closure1_slot8 = var6;
    var7 = ['select', 'insert', 'upsert', 'update', 'delete'];
    var _closure1_slot9 = var7;
    var4 = function arg0() {
        _fun9643: for (var _fun9643_ip = 0;;) switch (_fun9643_ip) {
            case 0:
                var3 = arg0;
                if (var3) {
                    _fun9643_ip = 90;
                    continue _fun9643
                }
            case 9:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.DEBUG_BUILD;
                if (!var0) {
                    _fun9643_ip = 424;
                    continue _fun9643
                }
            case 43:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 12;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var4 = var0.debug;
                var2 = var4.warn;
                var0 = 'Supabase integration was not installed because no Supabase client was provided.';
                var0 = var2.bind(var4)(var0);
                _fun9643_ip = 424;
                continue _fun9643;
            case 90:
                var4 = _closure1_slot16;
                var5 = var3.constructor;
                var0 = global;
                var2 = var0.Function;
                var0 = var3;
                if (!(var5 !== var2)) {
                    _fun9643_ip = 119;
                    continue _fun9643
                }
            case 114:
                var0 = var3.constructor;
            case 119:
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                var0 = var3;
                var7 = undefined;
                var5 = undefined;
                var10 = undefined;
                var8 = undefined;
                var9 = undefined;
                var3 = var3.auth;
                var7 = var3;
                if (!var3) {
                    _fun9643_ip = 424;
                    continue _fun9643
                }
            case 154:
                var4 = _closure1_slot12;
                var3 = var0;
                var3 = var3.auth;
                var3 = var4.bind(var2)(var3);
                if (var3) {
                    _fun9643_ip = 424;
                    continue _fun9643
                }
            case 178:
                var6 = _closure1_slot6;
                var3 = var6;
                var4 = var3[Symbol.iterator];
                var3 = var4().next;
                var6 = 'function';
            case 192:
                var12 = var3().value;
                var11 = var4;
                if (!(var11 !== var2)) {
                    _fun9643_ip = 285;
                    continue _fun9643
                }
            case 203: // try_start_0
                var5 = var12;
                var11 = var7;
                var12 = var11[var12];
                var10 = var12;
                var11 = var12;
                if (!var12) {
                    _fun9643_ip = 245;
                    continue _fun9643
                }
            case 222:
                var12 = var0;
                var13 = var12.auth;
                var12 = var5;
                var12 = var13[var12];
                var12 = typeof var12;
                var11 = var6 === var12;
            case 245:
                if (!var11) {
                    _fun9643_ip = 276;
                    continue _fun9643
                }
            case 248:
                var11 = var0;
                var13 = var11.auth;
                var12 = var5;
                var14 = _closure1_slot15;
                var11 = var10;
                var11 = var14.bind(var2)(var11);
                var13[var12] = var11;
            case 276: // try_end0
                _fun9643_ip = 192;
                continue _fun9643;
            case 278: // catch_target0
                CatchBlockStart(arg_register = 3);
                var4.return();
                throw var3;
            case 285:
                var3 = _closure1_slot7;
                var5 = var3;
                var4 = var5[Symbol.iterator];
                var5 = var4().next;
                var3 = true;
            case 297:
                var11 = var5().value;
                var10 = var4;
                if (!(var10 !== var2)) {
                    _fun9643_ip = 409;
                    continue _fun9643
                }
            case 308: // try_start_1
                var8 = var11;
                var10 = var7;
                var10 = var10.admin;
                var11 = var10[var11];
                var9 = var11;
                var10 = var11;
                if (!var11) {
                    _fun9643_ip = 362;
                    continue _fun9643
                }
            case 333:
                var11 = var0;
                var11 = var11.auth;
                var12 = var11.admin;
                var11 = var8;
                var11 = var12[var11];
                var11 = typeof var11;
                var10 = var6 === var11;
            case 362:
                if (!var10) {
                    _fun9643_ip = 400;
                    continue _fun9643
                }
            case 365:
                var10 = var0;
                var10 = var10.auth;
                var12 = var10.admin;
                var11 = var8;
                var13 = _closure1_slot15;
                var10 = var9;
                var10 = var13.bind(var2)(var10, var3);
                var12[var11] = var10;
            case 400: // try_end1
                _fun9643_ip = 297;
                continue _fun9643;
            case 402: // catch_target1
                CatchBlockStart(arg_register = 3);
                var4.return();
                throw var3;
            case 409:
                var1 = _closure1_slot11;
                var0 = var0.auth;
                var0 = var1.bind(var2)(var0);
            case 424:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var8 = 13;
    var8 = var10[var8];
    var9 = var9.bind(var0)(var8);
    var8 = var9.defineIntegration;
    var3 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.supabaseClient;
        var1 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.setupOnce = var1;
            var1 = 'Supabase';
            var0.name = var1;
            return var0;
        };
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var3 = var8.bind(var9)(var3);
    var2.DB_OPERATIONS_TO_INSTRUMENT = var7;
    var2.FILTER_MAPPINGS = var6;
    var2.extractOperation = var5;
    var2.instrumentSupabaseClient = var4;
    var2.supabaseIntegration = var3;
    var2.translateFiltersIntoMethods = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 77, 852, 864, 838, 839, 867, 827, 830, 905, 823, 824, 881]);