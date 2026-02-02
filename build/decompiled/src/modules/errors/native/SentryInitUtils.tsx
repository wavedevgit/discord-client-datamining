// modules/errors/native/SentryInitUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun13170: for (var _fun13170_ip = 0;;) switch (_fun13170_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun13170_ip = 274;
                            continue _fun13170
                        }
                    case 15:
                        var1 = var3.breadcrumbs;
                        var5 = global;
                        var6 = var5.Array;
                        var4 = var6.isArray;
                        var4 = var4.bind(var6)(var1);
                        if (!var4) {
                            _fun13170_ip = 56;
                            continue _fun13170
                        }
                    case 42:
                        var4 = var1.length;
                        var1 = 0;
                        if (!(!(var4 > var1))) {
                            _fun13170_ip = 269;
                            continue _fun13170
                        }
                    case 56:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 6;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var6.bind(var1)(var4);
                        var4 = var1.SentryTelemetry;
                        var1 = var4.snapshotForBreadcrumbs;
                        var7 = var1.bind(var4)();
                        var6 = var5.Promise;
                        var4 = var6.race;
                        var1 = new Array(2);
                        var1[0] = var7;
                        var9 = var5.Promise;
                        var7 = var9.prototype;
                        var8 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var10 = function(arg0, arg1) { // Environment: var2
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = undefined;
                            var1 = function() { // Environment: var0
                                var2 = _closure5_slot0;
                                var0 = global;
                                var3 = var0.Error;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'TelemetryRing breadcrumb timeout';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 200;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var11 = var8;
                        var7 = new var11[var9](var10, var9);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var1[1] = var7;
                        var6 = var4.bind(var6)(var1);
                        var4 = var6.catch;
                        var1 = function() { // Environment: var2
                            var0 = null;
                            return var0;
                        };
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 177);
                    case 175:
                        return var1;
                    case 177:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun13170_ip = 266;
                            continue _fun13170
                        }
                    case 183:
                        var4 = null;
                        var4 = var4 != var1;
                        if (!var4) {
                            _fun13170_ip = 214;
                            continue _fun13170
                        }
                    case 192:
                        var7 = var5.Array;
                        var6 = var7.isArray;
                        var5 = var1.entries;
                        var4 = var6.bind(var7)(var5);
                    case 214:
                        if (!var4) {
                            _fun13170_ip = 234;
                            continue _fun13170
                        }
                    case 217:
                        var5 = var1.entries;
                        var6 = var5.length;
                        var5 = 0;
                        var4 = var5 !== var6;
                    case 234:
                        if (!var4) {
                            _fun13170_ip = 269;
                            continue _fun13170
                        }
                    case 237:
                        var5 = var1.entries;
                        var4 = var5.map;
                        var2 = function(arg0) { // Environment: var2
                            _fun13174: for (var _fun13174_ip = 0;;) switch (_fun13174_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = {};
                                    var2 = var1.message;
                                    var3 = null;
                                    if (!(var3 == var2)) {
                                        _fun13174_ip = 21;
                                        continue _fun13174
                                    }
                                case 16:
                                    var2 = var1.key;
                                case 21:
                                    var0.message = var2;
                                    var2 = 'telemetry_ring';
                                    var0.category = var2;
                                    var3 = var1.timestamp;
                                    var2 = 1000;
                                    var2 = var3 / var2;
                                    var0.timestamp = var2;
                                    var1 = var1.data;
                                    var0.data = var1;
                                    return var0;
                            }
                        };
                        var2 = var4.bind(var5)(var2);
                        var3.breadcrumbs = var2;
                        _fun13170_ip = 269;
                        continue _fun13170;
                    case 266:
                        return var1;
                    case 269:
                        var1 = undefined;
                        return var1;
                    case 274:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun13175: for (var _fun13175_ip = 0;;) switch (_fun13175_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var6;
                var0 = null;
                var4 = var0 == var6;
                var3 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun13175_ip = 35;
                    continue _fun13175
                }
            case 29:
                var7 = var6.originalException;
            case 35:
                var4 = var0 == var7;
                var5 = undefined;
                if (var4) {
                    _fun13175_ip = 49;
                    continue _fun13175
                }
            case 44:
                var5 = var7.status;
            case 49:
                if (!var5) {
                    _fun13175_ip = 67;
                    continue _fun13175
                }
            case 52:
                var4 = 400;
                var5 = var5 >= var4;
                var4 = true;
                if (var5) {
                    _fun13175_ip = 126;
                    continue _fun13175
                }
            case 67:
                var8 = var0 == var7;
                var5 = undefined;
                if (var8) {
                    _fun13175_ip = 82;
                    continue _fun13175
                }
            case 76:
                var5 = var7.captchaFields;
            case 82:
                var5 = var0 != var5;
                var8 = null;
                if (!var5) {
                    _fun13175_ip = 108;
                    continue _fun13175
                }
            case 91:
                var9 = var0 == var7;
                var5 = undefined;
                if (var9) {
                    _fun13175_ip = 105;
                    continue _fun13175
                }
            case 100:
                var5 = var7.code;
            case 105:
                var8 = var5;
            case 108:
                var4 = false;
                if (!var8) {
                    _fun13175_ip = 126;
                    continue _fun13175
                }
            case 113:
                var5 = 0;
                var5 = var8 < var5;
                var4 = false;
                if (!var5) {
                    _fun13175_ip = 126;
                    continue _fun13175
                }
            case 124:
                var4 = true;
            case 126:
                if (var4) {
                    _fun13175_ip = 190;
                    continue _fun13175
                }
            case 129:
                var7 = var0 == var6;
                var5 = undefined;
                if (var7) {
                    _fun13175_ip = 144;
                    continue _fun13175
                }
            case 138:
                var5 = var6.originalException;
            case 144:
                var7 = var0 == var5;
                var8 = undefined;
                if (var7) {
                    _fun13175_ip = 173;
                    continue _fun13175
                }
            case 153:
                var5 = var5.err;
                var7 = var0 == var5;
                var8 = undefined;
                if (var7) {
                    _fun13175_ip = 173;
                    continue _fun13175
                }
            case 168:
                var8 = var5.code;
            case 173:
                var7 = 'ABORTED';
                var5 = false;
                if (!(var7 === var8)) {
                    _fun13175_ip = 187;
                    continue _fun13175
                }
            case 185:
                var5 = true;
            case 187:
                var4 = var5;
            case 190:
                if (var4) {
                    _fun13175_ip = 352;
                    continue _fun13175
                }
            case 196:
                var5 = var0 == var6;
                var4 = undefined;
                if (var5) {
                    _fun13175_ip = 211;
                    continue _fun13175
                }
            case 205:
                var4 = var6.originalException;
            case 211:
                var7 = var0 == var4;
                var5 = undefined;
                if (var7) {
                    _fun13175_ip = 225;
                    continue _fun13175
                }
            case 220:
                var5 = var4.status;
            case 225:
                if (!(var0 != var5)) {
                    _fun13175_ip = 259;
                    continue _fun13175
                }
            case 229:
                var4 = var1.tags;
                if (!(var0 == var4)) {
                    _fun13175_ip = 247;
                    continue _fun13175
                }
            case 239:
                var4 = {};
                var1.tags = var4;
            case 247:
                var4 = var1.tags;
                var4.httpStatusCode = var5;
            case 259:
                var7 = _closure1_slot12;
                var8 = var1.level;
                var5 = 'error';
                if (!(var5 === var8)) {
                    _fun13175_ip = 290;
                    continue _fun13175
                }
            case 280:
                var7 = 0.005;
            case 290:
                var5 = _closure1_slot13;
                if (var5) {
                    _fun13175_ip = 332;
                    continue _fun13175
                }
            case 297:
                var5 = _closure1_slot14;
                var5 = var5.bind(var3)();
                if (!var5) {
                    _fun13175_ip = 320;
                    continue _fun13175
                }
            case 308:
                var5 = _closure1_slot20;
                var5 = var5.bind(var3)(var7);
                if (var5) {
                    _fun13175_ip = 332;
                    continue _fun13175
                }
            case 320:
                var5 = _closure1_slot19;
                var5 = var5.bind(var3)(var1, var6);
                _fun13175_ip = 370;
                continue _fun13175;
            case 332:
                var4 = _closure1_slot4;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun13177: for (var _fun13177_ip = 0;;) switch (_fun13177_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun13177_ip = 191;
                                    continue _fun13177
                                }
                            case 12: // try_start_0
                                var6 = global;
                                var5 = var6.Promise;
                                var3 = var5.race;
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var1 = 6;
                                var1 = var4[var1];
                                var4 = undefined;
                                var1 = var7.bind(var4)(var1);
                                var7 = var1.ZoomedInTelemetry;
                                var1 = var7.flushNow;
                                var7 = var1.bind(var7)();
                                var1 = new Array(2);
                                var1[0] = var7;
                                var8 = var6.Promise;
                                var6 = var8.prototype;
                                var7 = Object.create(var6, {
                                    constructor: {
                                        value: var8
                                    }
                                });
                                var10 = function(arg0) { // Environment: var2
                                    var0 = global;
                                    var3 = var0.setTimeout;
                                    var2 = undefined;
                                    var1 = arg0;
                                    var0 = 200;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var11 = var7;
                                var6 = new var11[var8](var10, var9);
                                var6 = var6 instanceof Object ? var6 : var7;
                                var1[1] = var6;
                                var1 = var3.bind(var5)(var1);
                                SaveGenerator(address = 119);
                            case 117:
                                return var1;
                            case 119:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun13177_ip = 157;
                                    continue _fun13177
                                }
                            case 125:
                                var3 = _closure2_slot0;
                                var2 = function() {
                                    var0 = undefined;
                                    var3 = _closure1_slot15;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var2 = var2.bind(var4)(var3);
                                SaveGenerator(address = 146);
                            case 144:
                                return var2;
                            case 146:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun13177_ip = 154;
                                    continue _fun13177
                                }
                            case 152: // try_end0
                                _fun13177_ip = 162;
                                continue _fun13177;
                            case 154:
                                return var2;
                            case 157:
                                return var1;
                            case 160: // catch_target0
                                CatchBlockStart(arg_register = 1);
                            case 162:
                                var4 = _closure1_slot19;
                                var1 = _closure2_slot0;
                                var3 = _closure2_slot1;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var1, var3);
                                return var1;
                            case 191:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                return var2;
            case 352:
                var2 = _closure1_slot21;
                var1 = var1.event_id;
                var1 = var2.bind(var3)(var1);
            case 370:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun13180: for (var _fun13180_ip = 0;;) switch (_fun13180_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.exception;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun13180_ip = 40;
                    continue _fun13180
                }
            case 20:
                var4 = var3.values;
                var3 = var2 == var4;
                var0 = undefined;
                if (var3) {
                    _fun13180_ip = 40;
                    continue _fun13180
                }
            case 34:
                var3 = 0;
                var0 = var4[var3];
            case 40:
                if (!(var2 != var0)) {
                    _fun13180_ip = 178;
                    continue _fun13180
                }
            case 47:
                var7 = var0.type;
                var6 = var0.value;
                if (!(var2 != var7)) {
                    _fun13180_ip = 65;
                    continue _fun13180
                }
            case 61:
                if (!(var2 == var6)) {
                    _fun13180_ip = 146;
                    continue _fun13180
                }
            case 65:
                var0 = var1.extra;
                var3 = var2 == var0;
                var4 = undefined;
                if (var3) {
                    _fun13180_ip = 86;
                    continue _fun13180
                }
            case 80:
                var4 = var0.persisted_error_message;
            case 86:
                var0 = var6;
                if (!(var2 != var7)) {
                    _fun13180_ip = 96;
                    continue _fun13180
                }
            case 93:
                var0 = var7;
            case 96:
                if (!(var2 == var0)) {
                    _fun13180_ip = 105;
                    continue _fun13180
                }
            case 100:
                var0 = var1.message;
            case 105:
                if (!(var2 == var0)) {
                    _fun13180_ip = 144;
                    continue _fun13180
                }
            case 109:
                var9 = 'string';
                var8 = typeof var4;
                var3 = undefined;
                if (!(var9 === var8)) {
                    _fun13180_ip = 141;
                    continue _fun13180
                }
            case 122:
                var9 = var4.length;
                var8 = 0;
                var8 = var9 > var8;
                var3 = undefined;
                if (!var8) {
                    _fun13180_ip = 141;
                    continue _fun13180
                }
            case 138:
                var3 = var4;
            case 141:
                var0 = var3;
            case 144:
                return var0;
            case 146:
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '';
                var0 = ': ';
                var0 = var4.bind(var3)(var7, var0, var6);
                return var0;
            case 178:
                var0 = var1.extra;
                var4 = var2 == var0;
                var3 = undefined;
                if (var4) {
                    _fun13180_ip = 199;
                    continue _fun13180
                }
            case 193:
                var3 = var0.persisted_error_message;
            case 199:
                var6 = 'string';
                var4 = typeof var3;
                var0 = undefined;
                if (!(var6 === var4)) {
                    _fun13180_ip = 231;
                    continue _fun13180
                }
            case 212:
                var6 = var3.length;
                var4 = 0;
                var4 = var6 > var4;
                var0 = undefined;
                if (!var4) {
                    _fun13180_ip = 231;
                    continue _fun13180
                }
            case 228:
                var0 = var3;
            case 231:
                if (!(var2 == var0)) {
                    _fun13180_ip = 240;
                    continue _fun13180
                }
            case 235:
                var0 = var1.message;
            case 240:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun13181: for (var _fun13181_ip = 0;;) switch (_fun13181_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.exception;
                var1 = null;
                var5 = var1 == var4;
                var2 = undefined;
                if (var5) {
                    _fun13181_ip = 40;
                    continue _fun13181
                }
            case 20:
                var5 = var4.values;
                var4 = var1 == var5;
                var2 = undefined;
                if (var4) {
                    _fun13181_ip = 40;
                    continue _fun13181
                }
            case 34:
                var4 = 0;
                var2 = var5[var4];
            case 40:
                if (!(var1 != var2)) {
                    _fun13181_ip = 180;
                    continue _fun13181
                }
            case 47:
                var4 = var2.stacktrace;
                var5 = var1 == var4;
                var2 = undefined;
                if (var5) {
                    _fun13181_ip = 108;
                    continue _fun13181
                }
            case 62:
                var6 = var4.frames;
                var4 = var1 == var6;
                var2 = undefined;
                if (var4) {
                    _fun13181_ip = 108;
                    continue _fun13181
                }
            case 77:
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var10 = var0.filename;
                    var8 = var0.lineno;
                    var6 = var0.colno;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var11 = '';
                    var0 = ':';
                    var9 = var0;
                    var7 = var0;
                    var0 = var11[var2](var10, var9, var8, var7, var6, var5);
                    return var0;
                };
                var6 = var5.bind(var6)(var4);
                var5 = var6.join;
                var4 = '\n';
                var2 = var5.bind(var6)(var4);
            case 108:
                if (!(var1 != var2)) {
                    _fun13181_ip = 123;
                    continue _fun13181
                }
            case 112:
                var5 = var2.length;
                var4 = 0;
                if (!(!(var5 > var4))) {
                    _fun13181_ip = 178;
                    continue _fun13181
                }
            case 123:
                var4 = var0.extra;
                var6 = var1 == var4;
                var5 = undefined;
                if (var6) {
                    _fun13181_ip = 144;
                    continue _fun13181
                }
            case 138:
                var5 = var4.persisted_error_stack;
            case 144:
                var7 = 'string';
                var6 = typeof var5;
                var4 = undefined;
                if (!(var7 === var6)) {
                    _fun13181_ip = 176;
                    continue _fun13181
                }
            case 157:
                var7 = var5.length;
                var6 = 0;
                var6 = var7 > var6;
                var4 = undefined;
                if (!var6) {
                    _fun13181_ip = 176;
                    continue _fun13181
                }
            case 173:
                var4 = var5;
            case 176:
                return var4;
            case 178:
                return var2;
            case 180:
                var0 = var0.extra;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun13181_ip = 201;
                    continue _fun13181
                }
            case 195:
                var1 = var0.persisted_error_stack;
            case 201:
                var4 = 'string';
                var2 = typeof var1;
                var0 = undefined;
                if (!(var4 === var2)) {
                    _fun13181_ip = 233;
                    continue _fun13181
                }
            case 214:
                var4 = var1.length;
                var2 = 0;
                var2 = var4 > var2;
                var0 = undefined;
                if (!var2) {
                    _fun13181_ip = 233;
                    continue _fun13181
                }
            case 230:
                var0 = var1;
            case 233:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun13183: for (var _fun13183_ip = 0;;) switch (_fun13183_ip) {
            case 0:
                var0 = arg0;
                var13 = arg1;
                var5 = _closure1_slot10;
                var4 = var5.info;
                var3 = {};
                var3.event = var0;
                var3.hint = var13;
                var2 = 'Crash';
                var2 = var4.bind(var5)(var2, var3);
                var6 = var0.level;
                var3 = var0.extra;
                var7 = null;
                var4 = var7 == var3;
                var8 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun13183_ip = 74;
                    continue _fun13183
                }
            case 68:
                var2 = var3.native_is_native;
            case 74:
                if (!(var7 == var2)) {
                    _fun13183_ip = 109;
                    continue _fun13183
                }
            case 78:
                var2 = var0.tags;
                var4 = var7 == var2;
                var3 = undefined;
                if (var4) {
                    _fun13183_ip = 99;
                    continue _fun13183
                }
            case 93:
                var3 = var2["event.origin"];
            case 99:
                var2 = 'javascript';
                var3 = var2 !== var3;
                _fun13183_ip = 129;
                continue _fun13183;
            case 109:
                var2 = var0.extra;
                var4 = var2.native_is_native;
                var2 = 'true';
                var3 = var2 === var4;
            case 129:
                var2 = 'fatal';
                if (!(var2 !== var6)) {
                    _fun13183_ip = 152;
                    continue _fun13183
                }
            case 137:
                var2 = 'error';
                if (!(var2 !== var6)) {
                    _fun13183_ip = 152;
                    continue _fun13183
                }
            case 145:
                if (!(var7 == var6)) {
                    _fun13183_ip = 981;
                    continue _fun13183
                }
            case 152:
                var2 = var3;
                if (var2) {
                    _fun13183_ip = 166;
                    continue _fun13183
                }
            case 158:
                var4 = 'error';
                var2 = var4 !== var6;
            case 166:
                var4 = 1;
                if (var2) {
                    _fun13183_ip = 182;
                    continue _fun13183
                }
            case 172:
                var4 = 0.01;
            case 182:
                var2 = _closure1_slot13;
                if (var2) {
                    _fun13183_ip = 218;
                    continue _fun13183
                }
            case 189:
                var2 = _closure1_slot20;
                var2 = var2.bind(var8)(var4);
                if (var2) {
                    _fun13183_ip = 218;
                    continue _fun13183
                }
            case 201:
                var4 = _closure1_slot21;
                var2 = var0.event_id;
                var2 = var4.bind(var8)(var2);
                return var8;
            case 218:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 7;
                var2 = var5[var2];
                var4 = var4.bind(var8)(var2);
                var2 = var4.getHistory;
                var2 = var2.bind(var4)();
                var14 = var2.location;
                var2 = var0.event_id;
                var5 = var7 != var2;
                var4 = null;
                if (!var5) {
                    _fun13183_ip = 271;
                    continue _fun13183
                }
            case 268:
                var4 = var2;
            case 271:
                var5 = var0.timestamp;
                var2 = var7 != var5;
                var12 = undefined;
                if (!var2) {
                    _fun13183_ip = 404;
                    continue _fun13183
                }
            case 286:
                var10 = typeof var5;
                var2 = 'number';
                if (!(var2 === var10)) {
                    _fun13183_ip = 325;
                    continue _fun13183
                }
            case 297:
                var2 = global;
                var2 = var2.isNaN;
                var2 = var2.bind(var8)(var5);
                if (var2) {
                    _fun13183_ip = 325;
                    continue _fun13183
                }
            case 313:
                var2 = 1000;
                var12 = var2 * var5;
                _fun13183_ip = 404;
                continue _fun13183;
            case 325:
                var9 = global;
                var2 = var9.Date;
                var2 = var5 instanceof var2;
                if (var2) {
                    _fun13183_ip = 394;
                    continue _fun13183
                }
            case 340:
                var2 = 'string';
                var12 = undefined;
                if (!(var2 === var10)) {
                    _fun13183_ip = 404;
                    continue _fun13183
                }
            case 350:
                var10 = var9.Date;
                var2 = var10.parse;
                var2 = var2.bind(var10)(var5);
                var10 = var9.Number;
                var9 = var10.isNaN;
                var9 = var9.bind(var10)(var2);
                var12 = undefined;
                if (var9) {
                    _fun13183_ip = 404;
                    continue _fun13183
                }
            case 389:
                var12 = var2;
                _fun13183_ip = 404;
                continue _fun13183;
            case 394:
                var2 = var5.getTime;
                var12 = var2.bind(var5)();
            case 404:
                if (!(var7 == var12)) {
                    _fun13183_ip = 425;
                    continue _fun13183
                }
            case 408:
                var2 = global;
                var5 = var2.Date;
                var2 = var5.now;
                var12 = var2.bind(var5)();
            case 425:
                var5 = _closure1_slot1;
                var9 = _closure1_slot3;
                var2 = 8;
                var2 = var9[var2];
                var10 = var5.bind(var8)(var2);
                var9 = var10.track;
                var2 = _closure1_slot6;
                if (var3) {
                    _fun13183_ip = 547;
                    continue _fun13183
                }
            case 457:
                var11 = var2.APP_CRASHED;
                var5 = {};
                var14 = var14.pathname;
                var5.path = var14;
                var5.client_track_timestamp = var12;
                var5.sentry_issue_id = var4;
                var5.extra = var13;
                var13 = _closure1_slot17;
                var13 = var13.bind(var8)(var0);
                var5.error_message = var13;
                var14 = var7 != var6;
                var13 = undefined;
                if (!var14) {
                    _fun13183_ip = 517;
                    continue _fun13183
                }
            case 514:
                var13 = var6;
            case 517:
                var5.error_level = var13;
                var13 = _closure1_slot18;
                var13 = var13.bind(var8)(var0);
                var5.error_stack = var13;
                var5 = var9.bind(var10)(var11, var5);
                _fun13183_ip = 784;
                continue _fun13183;
            case 547:
                var5 = var2.APP_NATIVE_CRASH;
                var11 = var0.extra;
                if (!(var7 == var11)) {
                    _fun13183_ip = 565;
                    continue _fun13183
                }
            case 563:
                var11 = {};
            case 565:
                var2 = {};
                var13 = true;
                var2.did_crash = var13;
                var14 = var0.event_id;
                var15 = var7 != var14;
                var13 = null;
                if (!var15) {
                    _fun13183_ip = 592;
                    continue _fun13183
                }
            case 589:
                var13 = var14;
            case 592:
                var2.sentry_issue_id = var13;
                var2.client_track_timestamp = var12;
                var12 = _closure1_slot22;
                var13 = var11.native_exit_reason;
                var13 = var12.bind(var8)(var13);
                var2.exit_reason = var13;
                var13 = var11.native_exit_description;
                var13 = var12.bind(var8)(var13);
                var2.exit_description = var13;
                var13 = var11.native_tombstone_hash;
                var13 = var12.bind(var8)(var13);
                var2.tombstone_hash = var13;
                var13 = var11.native_tombstone_cause;
                var13 = var12.bind(var8)(var13);
                var2.tombstone_cause = var13;
                var13 = var11.native_tombstone;
                var13 = var12.bind(var8)(var13);
                var2.tombstone = var13;
                var13 = var11.native_tombstone_group_by;
                var13 = var12.bind(var8)(var13);
                var2.call_stack_tree = var13;
                var13 = var11.native_tombstone_origin;
                var13 = var12.bind(var8)(var13);
                var2.binary_name = var13;
                var13 = _closure1_slot17;
                var13 = var13.bind(var8)(var0);
                var2.exception_message = var13;
                var13 = _closure1_slot18;
                var13 = var13.bind(var8)(var0);
                var2.exception_stacktrace = var13;
                var13 = var11.persisted_error_message;
                var13 = var12.bind(var8)(var13);
                var2.js_error_message = var13;
                var11 = var11.persisted_error_stack;
                var11 = var12.bind(var8)(var11);
                var2.js_error_stacktrace = var11;
                var2 = var9.bind(var10)(var5, var2);
            case 784:
                var2 = _closure1_slot21;
                var2 = var2.bind(var8)(var4);
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 9;
                var2 = var5[var2];
                var2 = var4.bind(var8)(var2);
                var2 = var2.AppCrashedReasons;
                if (var3) {
                    _fun13183_ip = 830;
                    continue _fun13183
                }
            case 822:
                var9 = var2.UNHANDLED_JS_ERROR;
                _fun13183_ip = 836;
                continue _fun13183;
            case 830:
                var9 = var2.UNHANDLED_NATIVE_ERROR;
            case 836:
                var3 = _closure1_slot1;
                var10 = _closure1_slot3;
                var2 = 10;
                var2 = var10[var2];
                var4 = var3.bind(var8)(var2);
                var3 = var4.increment;
                var2 = {};
                var5 = _closure1_slot0;
                var1 = 11;
                var1 = var10[var1];
                var1 = var5.bind(var8)(var1);
                var1 = var1.MetricEvents;
                var1 = var1.APP_CRASHED;
                var2.name = var1;
                var5 = global;
                var1 = var5.HermesInternal;
                var8 = var1.concat;
                var1 = 'reason:';
                var8 = var8.bind(var1)(var9);
                var1 = new Array(2);
                var1[0] = var8;
                var8 = var7 != var6;
                var7 = 'unknown';
                if (!var8) {
                    _fun13183_ip = 942;
                    continue _fun13183
                }
            case 939:
                var7 = var6;
            case 942:
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = 'level:';
                var5 = var6.bind(var5)(var7);
                var1[1] = var5;
                var2.tags = var1;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
            case 981:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = global;
        var1 = var0.Math;
        var0 = var1.random;
        var1 = var0.bind(var1)();
        var0 = arg0;
        var0 = var1 <= var0;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun13185: for (var _fun13185_ip = 0;;) switch (_fun13185_ip) {
            case 0:
                var2 = arg0;
                var1 = 'string';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun13185_ip = 28;
                    continue _fun13185
                }
            case 17:
                var3 = var2.length;
                var1 = 0;
                var0 = var1 !== var3;
            case 28:
                if (!var0) {
                    _fun13185_ip = 67;
                    continue _fun13185
                }
            case 31:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.markCrashHandled;
                var0 = var0.bind(var1)(var2);
            case 67:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun13186: for (var _fun13186_ip = 0;;) switch (_fun13186_ip) {
            case 0:
                var1 = arg0;
                var4 = 'string';
                var2 = typeof var1;
                var0 = null;
                if (!(var4 === var2)) {
                    _fun13186_ip = 35;
                    continue _fun13186
                }
            case 16:
                var4 = var1.length;
                var2 = 0;
                var2 = var4 > var2;
                var0 = null;
                if (!var2) {
                    _fun13186_ip = 35;
                    continue _fun13186
                }
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var8 = global;
    var9 = var8.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot6 = var4;
    var9 = var3.Endpoints;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.PRIMARY_DOMAIN;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = var4.reactNavigationIntegration;
    var3 = var3.bind(var4)();
    var _closure1_slot8 = var3;
    var12 = var8.RegExp;
    var4 = var8.window;
    var4 = var4.GLOBAL_ENV;
    var11 = var4.API_VERSION;
    var10 = var9.METRICS;
    var4 = var8.HermesInternal;
    var4 = var4.concat;
    var13 = '/v';
    var18 = var4.bind(var13)(var11, var10);
    var10 = var12.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var11 = 'g';
    var19 = var10;
    var17 = var11;
    var4 = new var19[var12](var18, var17, var16);
    var10 = var4 instanceof Object ? var4 : var10;
    var4 = new Array(3);
    var4[0] = var10;
    var14 = var8.RegExp;
    var10 = var8.window;
    var10 = var10.GLOBAL_ENV;
    var15 = var10.API_VERSION;
    var12 = var9.METRICS_V2;
    var10 = var8.HermesInternal;
    var10 = var10.concat;
    var18 = var10.bind(var13)(var15, var12);
    var12 = var14.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var14
        }
    });
    var19 = var12;
    var17 = var11;
    var10 = new var19[var14](var18, var17, var16);
    var10 = var10 instanceof Object ? var10 : var12;
    var4[1] = var10;
    var10 = var8.RegExp;
    var12 = var8.window;
    var12 = var12.GLOBAL_ENV;
    var12 = var12.API_VERSION;
    var9 = var9.TRACK;
    var8 = var8.HermesInternal;
    var8 = var8.concat;
    var18 = var8.bind(var13)(var12, var9);
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var19 = var9;
    var17 = var11;
    var8 = new var19[var10](var18, var17, var16);
    var8 = var8 instanceof Object ? var8 : var9;
    var4[2] = var8;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var18 = 'Sentry';
    var19 = var7;
    var4 = new var19[var8](var18, var17);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var4 = ['The operation couldn’t be completed. (com.apple.CallKit.error.requesttransaction', 'Request has been terminated', "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", 'database is no longer open'];
    var _closure1_slot11 = var4;
    var4 = 0.05;
    var _closure1_slot12 = var4;
    var4 = false;
    var _closure1_slot13 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.filterThrottle;
    var4 = {
        'maxBudgetMinute': 1,
        'maxBudgetHour': 15
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/native/SentryInitUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.routingInstrumentation = var3;
    var1 = function() {
        _fun13187: for (var _fun13187_ip = 0;;) switch (_fun13187_ip) {
            case 0:
                var0 = _closure1_slot5;
                var2 = var0.CrashReportingManager;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun13187_ip = 37;
                    continue _fun13187
                }
            case 19:
                var1 = var2.getIsUserStaffForCrashReporting;
                var0 = function(arg0) { // Environment: var0
                    _fun13188: for (var _fun13188_ip = 0;;) switch (_fun13188_ip) {
                        case 0:
                            var3 = arg0;
                            _closure1_slot13 = var3;
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getConstants;
                            var1 = var1.bind(var2)();
                            var2 = var1.ReleaseChannel;
                            var6 = var2.indexOf;
                            var4 = 'debug';
                            var4 = var6.bind(var2)(var4);
                            var7 = -1;
                            if (!(var7 === var4)) {
                                _fun13188_ip = 759;
                                continue _fun13188
                            }
                        case 78:
                            var6 = var2.indexOf;
                            var4 = 'developer';
                            var4 = var6.bind(var2)(var4);
                            if (!(var7 === var4)) {
                                _fun13188_ip = 759;
                                continue _fun13188
                            }
                        case 102:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var4 = 15;
                            var4 = var6[var4];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.isStable;
                            var13 = _closure1_slot10;
                            var12 = var13.verbose;
                            var11 = {};
                            var11.releaseChannel = var2;
                            var11.isProductionChannel = var4;
                            var10 = 'Initialize';
                            var10 = var12.bind(var13)(var10, var11);
                            var12 = 16;
                            var6 = var6[var12];
                            var8 = var8.bind(var0)(var6);
                            var6 = var8.isAndroid;
                            var6 = var6.bind(var8)();
                            if (!var6) {
                                _fun13188_ip = 244;
                                continue _fun13188
                            }
                        case 187:
                            if (!var4) {
                                _fun13188_ip = 244;
                                continue _fun13188
                            }
                        case 190:
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var6 = 17;
                            var6 = var10[var6];
                            var8 = var8.bind(var0)(var6);
                            var6 = var8.getDevice;
                            var10 = var6.bind(var8)();
                            var8 = var10.indexOf;
                            var6 = 'vivo';
                            var6 = var8.bind(var10)(var6);
                            if (!(var7 === var6)) {
                                _fun13188_ip = 759;
                                continue _fun13188
                            }
                        case 244:
                            var6 = 0.05;
                            _closure1_slot12 = var6;
                            var10 = var1.SentryDsn;
                            if (var4) {
                                _fun13188_ip = 280;
                                continue _fun13188
                            }
                        case 267:
                            var4 = 1;
                            _closure1_slot12 = var4;
                            var10 = var1.SentryAlphaBetaDsn;
                        case 280:
                            if (!var3) {
                                _fun13188_ip = 296;
                                continue _fun13188
                            }
                        case 283:
                            var10 = var1.SentryStaffDsn;
                            var4 = 1;
                            _closure1_slot12 = var4;
                        case 296:
                            var3 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getLastCrashReport;
                                var4 = var2.bind(var3)();
                                var3 = var4.then;
                                var2 = function(arg0) { // Environment: var1
                                    _fun13190: for (var _fun13190_ip = 0;;) switch (_fun13190_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = null;
                                            if (!(var0 != var3)) {
                                                _fun13190_ip = 37;
                                                continue _fun13190
                                            }
                                        case 9:
                                            var2 = _closure1_slot19;
                                            var1 = {};
                                            var0 = 'startup_reconcile';
                                            var1.crash_event_source = var0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var3, var1);
                                        case 37:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.catch;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot10;
                                    var2 = var3.warn;
                                    var1 = 'Failed to replay pending crash report';
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3 = var3.bind(var0)();
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 4;
                            var4 = var8[var3];
                            var7 = var11.bind(var0)(var4);
                            var6 = var7.init;
                            var4 = {};
                            var8 = var8[var12];
                            var11 = var11.bind(var0)(var8);
                            var8 = var11.isAndroid;
                            var8 = var8.bind(var11)();
                            var11 = 'ios';
                            if (!var8) {
                                _fun13188_ip = 363;
                                continue _fun13188
                            }
                        case 359:
                            var11 = 'android';
                        case 363:
                            var8 = '/error-reporting-proxy/';
                            var8 = var8 + var11;
                            var4.tunnel = var8;
                            var8 = false;
                            var4.autoInitializeNativeSdk = var8;
                            var8 = _closure1_slot16;
                            var4.beforeSend = var8;
                            var8 = '5107';
                            var4.dist = var8;
                            var4.dsn = var10;
                            var4.environment = var2;
                            var2 = 0;
                            var4.tracesSampleRate = var2;
                            var2 = 1;
                            var4.sampleRate = var2;
                            var2 = _closure1_slot11;
                            var4.ignoreErrors = var2;
                            var2 = 'discord_android@316.0.0-2+316200';
                            var4.release = var2;
                            var10 = _closure1_slot7;
                            var2 = new Array(1);
                            var2[0] = var10;
                            var4.tracePropagationTargets = var2;
                            var2 = _closure1_slot8;
                            var10 = new Array(2);
                            var10[0] = var2;
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var11 = var5[var3];
                            var13 = var2.bind(var0)(var11);
                            var12 = var13.reactNativeTracingIntegration;
                            var11 = {};
                            var14 = function arg0() {
                                var2 = _closure1_slot9;
                                var1 = var2.some;
                                var0 = arg0;
                                var0 = var0.match;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var11.shouldCreateSpanForRequest = var14;
                            var11 = var12.bind(var13)(var11);
                            var10[1] = var11;
                            var4.integrations = var10;
                            var9 = function arg0() {
                                _fun13193: for (var _fun13193_ip = 0;;) switch (_fun13193_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.data;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun13193_ip = 22;
                                            continue _fun13193
                                        }
                                    case 14:
                                        var2 = {};
                                        var0.data = var2;
                                    case 22:
                                        var6 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var5 = 18;
                                        var3 = var3[var5];
                                        var4 = undefined;
                                        var6 = var6.bind(var4)(var3);
                                        var3 = var6.getCurrentMemoryUsageKB;
                                        var6 = var3.bind(var6)();
                                        if (!(var1 != var6)) {
                                            _fun13193_ip = 72;
                                            continue _fun13193
                                        }
                                    case 61:
                                        var3 = var0.data;
                                        var3.client_performance_memory = var6;
                                    case 72:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot3;
                                        var2 = var2[var5];
                                        var3 = var3.bind(var4)(var2);
                                        var2 = var3.getCurrentCPUUsagePercent;
                                        var2 = var2.bind(var3)();
                                        if (!(var1 != var2)) {
                                            _fun13193_ip = 114;
                                            continue _fun13193
                                        }
                                    case 103:
                                        var1 = var0.data;
                                        var1.client_performance_cpu = var2;
                                    case 114:
                                        return var0;
                                }
                            };
                            var4.beforeBreadcrumb = var9;
                            var4 = var6.bind(var7)(var4);
                            var4 = var5[var3];
                            var7 = var2.bind(var0)(var4);
                            var6 = var7.setTag;
                            var4 = 'buildNumber';
                            var4 = var6.bind(var7)(var4, var8);
                            var4 = var5[var3];
                            var7 = var2.bind(var0)(var4);
                            var6 = var7.setTag;
                            var4 = var1.Version;
                            var1 = 'appVersion';
                            var1 = var6.bind(var7)(var1, var4);
                            var1 = var5[var3];
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.setTag;
                            var1 = 19;
                            var1 = var5[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.DesignIds;
                            var8 = var1.DESIGN_TABS_IA;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var1 = '';
                            var4 = var4.bind(var1)(var8);
                            var1 = 'design_id';
                            var1 = var6.bind(var7)(var1, var4);
                            var1 = var5[var3];
                            var8 = var2.bind(var0)(var1);
                            var7 = var8.setTag;
                            var1 = 20;
                            var4 = var5[var1];
                            var6 = var2.bind(var0)(var4);
                            var4 = var6.isFabric;
                            var6 = var4.bind(var6)();
                            var4 = 'newArchEnabled';
                            var4 = var7.bind(var8)(var4, var6);
                            var3 = var5[var3];
                            var4 = var2.bind(var0)(var3);
                            var3 = var4.setTag;
                            var1 = var5[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.isBridgeless;
                            var1 = 'isBridgeless';
                            var1 = var3.bind(var4)(var1, var2);
                        case 759:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 37:
                var0 = undefined;
                return var0;
        }
    };
    var2.initSentry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 660, 483, 810, 3, 1209, 1220, 795, 12585, 4227, 4232, 12586, 1207, 1594, 4228, 478, 1309, 12178, 657, 3872, 2]);