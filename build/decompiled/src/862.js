// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun9074: for (var _fun9074_ip = 0;;) switch (_fun9074_ip) {
            case 0:
                var4 = arg1;
                var1 = arg0;
                var0 = 1;
                var0 = var1[var0];
                var3 = var0;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var2 = 0;
                var0 = undefined;
            case 23:
                var7 = var3().value;
                var5 = var1;
                if (!(var5 !== var0)) {
                    _fun9074_ip = 71;
                    continue _fun9074
                }
            case 34: // try_start_0
                var6 = var4;
                var5 = var7[var2];
                var5 = var5.type;
                var5 = var6.bind(var0)(var7, var5);
                if (var5) {
                    _fun9074_ip = 57;
                    continue _fun9074
                }
            case 55: // try_end0
                _fun9074_ip = 23;
                continue _fun9074;
            case 57:
                var1.return();
                var0 = true;
                return var0;
            case 64: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 71:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function arg0() {
        _fun9075: for (var _fun9075_ip = 0;;) switch (_fun9075_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var4 = undefined;
                var2 = var5.bind(var4)(var0);
                var1 = var2.getSentryCarrier;
                var0 = 3;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.GLOBAL_OBJ;
                var2 = var1.bind(var2)(var0);
                var0 = var2.encodePolyfill;
                if (var0) {
                    _fun9075_ip = 107;
                    continue _fun9075
                }
            case 66:
                var0 = global;
                var0 = var0.TextEncoder;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var0 = new var8[var0](var7);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.encode;
                var0 = var0.bind(var1)(var3);
                _fun9075_ip = 118;
                continue _fun9075;
            case 107:
                var1 = var2.encodePolyfill;
                var0 = var1.bind(var2)(var3);
            case 118:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = {
        'session': 'session',
        'sessions': 'session',
        'attachment': 'attachment',
        'transaction': 'transaction',
        'event': 'error',
        'client_report': 'internal',
        'user_report': 'default',
        'profile': 'profile',
        'profile_chunk': 'profile',
        'replay_event': 'replay',
        'replay_recording': 'replay',
        'check_in': 'monitor',
        'feedback': 'feedback',
        'span': 'span',
        'raw_security': 'security',
        'log': 'log_item',
        'metric': 'metric',
        'trace_metric': 'metric'
    };
    var _closure1_slot4 = var4;
    var4 = function arg0, arg1() {
        var3 = _closure1_slot3;
        var5 = undefined;
        var2 = arg0;
        var0 = 2;
        var2 = var3.bind(var5)(var2, var0);
        var0 = 0;
        var3 = var2[var0];
        var0 = 1;
        var2 = var2[var0];
        var0 = new Array(2);
        var0[0] = var3;
        var4 = new Array(0);
        var3 = var4.concat;
        var1 = _closure1_slot2;
        var2 = var1.bind(var5)(var2);
        var1 = new Array(1);
        var5 = arg1;
        var1[0] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0[1] = var1;
        return var0;
    };
    var2.addItemToEnvelope = var4;
    var4 = function arg0() {
        _fun9077: for (var _fun9077_ip = 0;;) switch (_fun9077_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.data;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun9077_ip = 26;
                    continue _fun9077
                }
            case 19:
                var1 = var0.data;
                _fun9077_ip = 45;
                continue _fun9077;
            case 26:
                var4 = _closure1_slot6;
                var3 = var0.data;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
            case 45:
                var2 = {};
                var3 = 'attachment';
                var2.type = var3;
                var3 = var1.length;
                var2.length = var3;
                var3 = var0.filename;
                var2.filename = var3;
                var3 = var0.contentType;
                var2.content_type = var3;
                var0 = var0.attachmentType;
                var2.attachment_type = var0;
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.createAttachmentEnvelopeItem = var4;
    var4 = function arg0() {
        _fun9078: for (var _fun9078_ip = 0;;) switch (_fun9078_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = new Array(2);
                var1 = arg0;
                var0[0] = var1;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun9078_ip = 33;
                    continue _fun9078
                }
            case 25:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun9078_ip = 39;
                    continue _fun9078
                }
            case 33:
                var1 = new Array(0);
                _fun9078_ip = 43;
                continue _fun9078;
            case 39:
                var1 = arguments[var2];
            case 43:
                var0[1] = var1;
                return var0;
        }
    };
    var2.createEnvelope = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun9079: for (var _fun9079_ip = 0;;) switch (_fun9079_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var9 = arg3;
                var0 = var2.sdkProcessingMetadata;
                var3 = null;
                var3 = var3 == var0;
                var10 = undefined;
                var7 = undefined;
                if (var3) {
                    _fun9079_ip = 34;
                    continue _fun9079
                }
            case 28:
                var7 = var0.dynamicSamplingContext;
            case 34:
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var3 = {};
                var2 = var2.event_id;
                var3.event_id = var2;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var16 = var2;
                var0 = new var16[var0](var15);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.toISOString;
                var0 = var0.bind(var2)();
                var3.sent_at = var0;
                var2 = var1;
                if (!var2) {
                    _fun9079_ip = 117;
                    continue _fun9079
                }
            case 107:
                var0 = {};
                var0.sdk = var1;
                var2 = var0;
            case 117:
                var0 = arg2;
                var0 = !var0;
                var1 = !var0;
                if (var0) {
                    _fun9079_ip = 132;
                    continue _fun9079
                }
            case 129:
                var1 = var9;
            case 132:
                if (!var1) {
                    _fun9079_ip = 179;
                    continue _fun9079
                }
            case 135:
                var0 = {};
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 5;
                var6 = var11[var6];
                var8 = var8.bind(var10)(var6);
                var6 = var8.dsnToString;
                var6 = var6.bind(var8)(var9);
                var0.dsn = var6;
                var1 = var0;
            case 179:
                var0 = var7;
                if (!var0) {
                    _fun9079_ip = 195;
                    continue _fun9079
                }
            case 185:
                var6 = {};
                var6.trace = var7;
                var0 = var6;
            case 195:
                var16 = var5;
                var15 = var3;
                var14 = var2;
                var13 = var1;
                var12 = var0;
                var0 = var16[var4](var15, var14, var13, var12, var11);
                return var0;
        }
    };
    var2.createEventEnvelopeHeaders = var4;
    var4 = function arg0() {
        var1 = {};
        var0 = 'span';
        var1.type = var0;
        var0 = new Array(2);
        var0[0] = var1;
        var1 = arg0;
        var0[1] = var1;
        return var0;
    };
    var2.createSpanEnvelopeItem = var4;
    var4 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0, arg1) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.includes;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.envelopeContainsItemType = var4;
    var4 = function arg0() {
        var1 = _closure1_slot4;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.envelopeItemTypeToDataCategory = var4;
    var2.forEachEnvelopeItem = var3;
    var3 = function arg0() {
        _fun9084: for (var _fun9084_ip = 0;;) switch (_fun9084_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun9084_ip = 18;
                    continue _fun9084
                }
            case 9:
                var1 = var0.sdk;
                if (var1) {
                    _fun9084_ip = 22;
                    continue _fun9084
                }
            case 18:
                var1 = undefined;
                return var1;
            case 22:
                var1 = var0.sdk;
                var0 = {};
                var2 = var1.name;
                var0.name = var2;
                var1 = var1.version;
                var0.version = var1;
                return var0;
        }
    };
    var2.getSdkMetadataForEnvelopeHeader = var3;
    var3 = function arg0() {
        _fun9085: for (var _fun9085_ip = 0;;) switch (_fun9085_ip) {
            case 0:
                var3 = arg0;
                var6 = function arg0() {
                    var5 = arg0;
                    var3 = _closure2_slot0;
                    var1 = var3.subarray;
                    var0 = 0;
                    var0 = var1.bind(var3)(var0, var5);
                    var4 = _closure2_slot0;
                    var3 = var4.subarray;
                    var1 = 1;
                    var1 = var5 + var1;
                    var1 = var3.bind(var4)(var1);
                    _closure2_slot0 = var1;
                    return var0;
                };
                var _closure2_slot1 = var6;
                var5 = function() {
                    _fun9087: for (var _fun9087_ip = 0;;) switch (_fun9087_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.indexOf;
                            var0 = 10;
                            var4 = var1.bind(var2)(var0);
                            var0 = 0;
                            if (!(var4 < var0)) {
                                _fun9087_ip = 36;
                                continue _fun9087
                            }
                        case 27:
                            var0 = _closure2_slot0;
                            var4 = var0.length;
                        case 36:
                            var0 = global;
                            var2 = var0.JSON;
                            var1 = var2.parse;
                            var3 = _closure2_slot1;
                            var8 = undefined;
                            var5 = var3.bind(var8)(var4);
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var3 = 2;
                            var3 = var9[var3];
                            var6 = var7.bind(var8)(var3);
                            var4 = var6.getSentryCarrier;
                            var3 = 3;
                            var3 = var9[var3];
                            var3 = var7.bind(var8)(var3);
                            var3 = var3.GLOBAL_OBJ;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.decodePolyfill;
                            if (var3) {
                                _fun9087_ip = 161;
                                continue _fun9087
                            }
                        case 122:
                            var0 = var0.TextDecoder;
                            var3 = var0.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var11 = var3;
                            var0 = new var11[var0](var10);
                            var3 = var0 instanceof Object ? var0 : var3;
                            var0 = var3.decode;
                            var0 = var0.bind(var3)(var5);
                            _fun9087_ip = 172;
                            continue _fun9087;
                        case 161:
                            var3 = var4.decodePolyfill;
                            var0 = var3.bind(var4)(var5);
                        case 172:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun9085_ip = 47;
                    continue _fun9085
                }
            case 33:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                var _closure2_slot0 = var0;
                var4 = undefined;
                var2 = var5.bind(var4)();
                var1 = new Array(0);
                var0 = _closure2_slot0;
                var0 = var0.length;
                var3 = 'number';
                if (!var0) {
                    _fun9085_ip = 148;
                    continue _fun9085
                }
            case 77:
                var9 = var5.bind(var4)();
                var0 = var9.length;
                var0 = typeof var0;
                var10 = undefined;
                if (!(var3 === var0)) {
                    _fun9085_ip = 100;
                    continue _fun9085
                }
            case 95:
                var10 = var9.length;
            case 100:
                var8 = var1.push;
                var0 = new Array(2);
                var0[0] = var9;
                if (var10) {
                    _fun9085_ip = 122;
                    continue _fun9085
                }
            case 116:
                var9 = var5.bind(var4)();
                _fun9085_ip = 127;
                continue _fun9085;
            case 122:
                var9 = var6.bind(var4)(var10);
            case 127:
                var0[1] = var9;
                var0 = var8.bind(var1)(var0);
                var0 = _closure2_slot0;
                var0 = var0.length;
                if (var0) {
                    _fun9085_ip = 77;
                    continue _fun9085
                }
            case 148:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.parseEnvelope = var3;
    var1 = function arg0() {
        _fun9088: for (var _fun9088_ip = 0;;) switch (_fun9088_ip) {
            case 0:
                var3 = undefined;
                var12 = undefined;
                var13 = undefined;
                var14 = function arg0() {
                    _fun9089: for (var _fun9089_ip = 0;;) switch (_fun9089_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var2 = 'string';
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun9089_ip = 61;
                                continue _fun9089
                            }
                        case 21:
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var6 = typeof var3;
                            var0 = var3;
                            if (!(var2 === var6)) {
                                _fun9089_ip = 54;
                                continue _fun9089
                            }
                        case 40:
                            var7 = _closure1_slot6;
                            var6 = undefined;
                            var0 = var7.bind(var6)(var3);
                        case 54:
                            var0 = var4.bind(var5)(var0);
                            _fun9089_ip = 112;
                            continue _fun9089;
                        case 61:
                            var0 = typeof var3;
                            if (!(var2 !== var0)) {
                                _fun9089_ip = 100;
                                continue _fun9089
                            }
                        case 68:
                            var4 = _closure1_slot6;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var3;
                            _fun9089_ip = 108;
                            continue _fun9089;
                        case 100:
                            var2 = _closure2_slot0;
                            var0 = var2 + var3;
                        case 108:
                            _closure2_slot0 = var0;
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = _closure1_slot3;
                var0 = arg0;
                var10 = 2;
                var0 = var2.bind(var3)(var0, var10);
                var9 = 0;
                var5 = var0[var9];
                var8 = 1;
                var0 = var0[var8];
                var7 = global;
                var4 = var7.JSON;
                var2 = var4.stringify;
                var2 = var2.bind(var4)(var5);
                var _closure2_slot0 = var2;
                var6 = var0;
                var4 = var6[Symbol.iterator];
                var6 = var4().next;
                var5 = 4;
                var0 = '\n';
                var2 = 'string';
            case 85:
                var16 = var6().value;
                var15 = var4;
                if (!(var15 !== var3)) {
                    _fun9088_ip = 295;
                    continue _fun9088
                }
            case 99: // try_start_1
                var15 = _closure1_slot3;
                var15 = var15.bind(var3)(var16, var10);
                var19 = var15[var9];
                var15 = var15[var8];
                var12 = var15;
                var17 = var14;
                var18 = var7.JSON;
                var16 = var18.stringify;
                var18 = var16.bind(var18)(var19);
                var16 = var7.HermesInternal;
                var16 = var16.concat;
                var16 = var16.bind(var0)(var18, var0);
                var16 = var17.bind(var3)(var16);
                var15 = typeof var15;
                if (!(var2 !== var15)) {
                    _fun9088_ip = 272;
                    continue _fun9088
                }
            case 169:
                var16 = var12;
                var15 = var7.Uint8Array;
                var15 = var16 instanceof var15;
                if (var15) {
                    _fun9088_ip = 272;
                    continue _fun9088
                }
            case 185:
                var13 = undefined;
            case 187: // try_start_0
                var17 = var7.JSON;
                var16 = var17.stringify;
                var15 = var12;
                var13 = var16.bind(var17)(var15);
            case 207: // try_end0
                _fun9088_ip = 259;
                continue _fun9088;
            case 209: // catch_target0
                CatchBlockStart(arg_register = 15);
                var17 = var7.JSON;
                var16 = var17.stringify;
                var18 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var5];
                var19 = var18.bind(var3)(var15);
                var18 = var19.normalize;
                var15 = var12;
                var15 = var18.bind(var19)(var15);
                var13 = var16.bind(var17)(var15);
            case 259:
                var16 = var14;
                var15 = var13;
                var15 = var16.bind(var3)(var15);
                _fun9088_ip = 283;
                continue _fun9088;
            case 272:
                var16 = var14;
                var15 = var12;
                var15 = var16.bind(var3)(var15);
            case 283: // try_end1
                _fun9088_ip = 85;
                continue _fun9088;
            case 288: // catch_target1
                CatchBlockStart(arg_register = 0);
                var4.return();
                throw var0;
            case 295:
                var0 = _closure2_slot0;
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun9088_ip = 322;
                    continue _fun9088
                }
            case 306:
                var2 = _closure2_slot0;
                var0 = function arg0() {
                    _fun9090: for (var _fun9090_ip = 0;;) switch (_fun9090_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = undefined;
                            var0 = undefined;
                            var4 = undefined;
                            var6 = var5.reduce;
                            var2 = function(arg0, arg1) { // Environment: var1
                                var0 = arg1;
                                var1 = var0.length;
                                var0 = arg0;
                                var0 = var0 + var1;
                                return var0;
                            };
                            var1 = 0;
                            var10 = var6.bind(var5)(var2, var1);
                            var2 = global;
                            var2 = var2.Uint8Array;
                            var6 = var2.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var6;
                            var2 = new var11[var2](var10, var9);
                            var0 = var2 instanceof Object ? var2 : var6;
                            var4 = 0;
                            var1 = var5;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                        case 66:
                            var5 = var1().value;
                            var6 = var2;
                            if (!(var6 !== var3)) {
                                _fun9090_ip = 112;
                                continue _fun9090
                            }
                        case 77: // try_start_0
                            var8 = var0;
                            var7 = var8.set;
                            var6 = var4;
                            var7 = var7.bind(var8)(var5, var6);
                            var5 = var5.length;
                            var4 = var6 + var5;
                        case 103: // try_end0
                            _fun9090_ip = 66;
                            continue _fun9090;
                        case 105: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 112:
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var2);
                _fun9088_ip = 326;
                continue _fun9088;
            case 322:
                var0 = _closure2_slot0;
            case 326:
                return var0;
        }
    };
    var2.serializeEnvelope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 825, 821, 863, 836]);