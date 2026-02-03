// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun98959: for (var _fun98959_ip = 0;;) switch (_fun98959_ip) {
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
                    _fun98959_ip = 71;
                    continue _fun98959
                }
            case 34: // try_start_0
                var6 = var4;
                var5 = var7[var2];
                var5 = var5.type;
                var5 = var6.bind(var0)(var7, var5);
                if (var5) {
                    _fun98959_ip = 57;
                    continue _fun98959
                }
            case 55: // try_end0
                _fun98959_ip = 23;
                continue _fun98959;
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
        _fun98960: for (var _fun98960_ip = 0;;) switch (_fun98960_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.__SENTRY__;
                if (!var0) {
                    _fun98960_ip = 81;
                    continue _fun98960
                }
            case 43:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var2.bind(var4)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.__SENTRY__;
                var0 = var0.encodePolyfill;
                if (var0) {
                    _fun98960_ip = 122;
                    continue _fun98960
                }
            case 81:
                var0 = global;
                var0 = var0.TextEncoder;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var2;
                var0 = new var7[var0](var6);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.encode;
                var0 = var0.bind(var2)(var3);
                _fun98960_ip = 162;
                continue _fun98960;
            case 122:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var1 = var1.GLOBAL_OBJ;
                var2 = var1.__SENTRY__;
                var1 = var2.encodePolyfill;
                var0 = var1.bind(var2)(var3);
            case 162:
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
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
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
        'statsd': 'metric_bucket'
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
        _fun98962: for (var _fun98962_ip = 0;;) switch (_fun98962_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.data;
                var1 = 'string';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun98962_ip = 26;
                    continue _fun98962
                }
            case 19:
                var1 = var4.data;
                _fun98962_ip = 45;
                continue _fun98962;
            case 26:
                var3 = _closure1_slot6;
                var2 = var4.data;
                var0 = undefined;
                var1 = var3.bind(var0)(var2);
            case 45:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.dropUndefinedKeys;
                var0 = {};
                var5 = 'attachment';
                var0.type = var5;
                var5 = var1.length;
                var0.length = var5;
                var5 = var4.filename;
                var0.filename = var5;
                var5 = var4.contentType;
                var0.content_type = var5;
                var4 = var4.attachmentType;
                var0.attachment_type = var4;
                var2 = var2.bind(var3)(var0);
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.createAttachmentEnvelopeItem = var4;
    var4 = function arg0() {
        _fun98963: for (var _fun98963_ip = 0;;) switch (_fun98963_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = new Array(2);
                var1 = arg0;
                var0[0] = var1;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun98963_ip = 33;
                    continue _fun98963
                }
            case 25:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun98963_ip = 39;
                    continue _fun98963
                }
            case 33:
                var1 = new Array(0);
                _fun98963_ip = 43;
                continue _fun98963;
            case 39:
                var1 = arguments[var2];
            case 43:
                var0[1] = var1;
                return var0;
        }
    };
    var2.createEnvelope = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun98964: for (var _fun98964_ip = 0;;) switch (_fun98964_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var9 = arg3;
                var12 = var0.sdkProcessingMetadata;
                if (!var12) {
                    _fun98964_ip = 30;
                    continue _fun98964
                }
            case 18:
                var2 = var0.sdkProcessingMetadata;
                var12 = var2.dynamicSamplingContext;
            case 30:
                var7 = global;
                var5 = var7.Object;
                var4 = var5.assign;
                var3 = {};
                var0 = var0.event_id;
                var3.event_id = var0;
                var0 = var7.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var17 = var2;
                var0 = new var17[var0](var16);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.toISOString;
                var0 = var0.bind(var2)();
                var3.sent_at = var0;
                var2 = var1;
                if (!var2) {
                    _fun98964_ip = 113;
                    continue _fun98964
                }
            case 103:
                var0 = {};
                var0.sdk = var1;
                var2 = var0;
            case 113:
                var0 = arg2;
                var0 = !var0;
                var1 = !var0;
                if (var0) {
                    _fun98964_ip = 128;
                    continue _fun98964
                }
            case 125:
                var1 = var9;
            case 128:
                if (!var1) {
                    _fun98964_ip = 177;
                    continue _fun98964
                }
            case 131:
                var0 = {};
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 5;
                var8 = var8[var6];
                var6 = undefined;
                var8 = var10.bind(var6)(var8);
                var6 = var8.dsnToString;
                var6 = var6.bind(var8)(var9);
                var0.dsn = var6;
                var1 = var0;
            case 177:
                var0 = var12;
                if (!var0) {
                    _fun98964_ip = 248;
                    continue _fun98964
                }
            case 183:
                var6 = {};
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var8 = 4;
                var9 = var9[var8];
                var8 = undefined;
                var9 = var10.bind(var8)(var9);
                var8 = var9.dropUndefinedKeys;
                var11 = var7.Object;
                var10 = var11.assign;
                var7 = {};
                var7 = var10.bind(var11)(var7, var12);
                var7 = var8.bind(var9)(var7);
                var6.trace = var7;
                var0 = var6;
            case 248:
                var17 = var5;
                var16 = var3;
                var15 = var2;
                var14 = var1;
                var13 = var0;
                var0 = var17[var4](var16, var15, var14, var13, var12);
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
        _fun98969: for (var _fun98969_ip = 0;;) switch (_fun98969_ip) {
            case 0:
                var0 = arg0;
                if (!var0) {
                    _fun98969_ip = 15;
                    continue _fun98969
                }
            case 6:
                var1 = var0.sdk;
                if (var1) {
                    _fun98969_ip = 19;
                    continue _fun98969
                }
            case 15:
                var1 = undefined;
                return var1;
            case 19:
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
        _fun98970: for (var _fun98970_ip = 0;;) switch (_fun98970_ip) {
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
                    _fun98972: for (var _fun98972_ip = 0;;) switch (_fun98972_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.indexOf;
                            var0 = 10;
                            var4 = var1.bind(var2)(var0);
                            var0 = 0;
                            if (!(var4 < var0)) {
                                _fun98972_ip = 36;
                                continue _fun98972
                            }
                        case 27:
                            var0 = _closure2_slot0;
                            var4 = var0.length;
                        case 36:
                            var0 = global;
                            var2 = var0.JSON;
                            var1 = var2.parse;
                            var3 = _closure2_slot1;
                            var6 = undefined;
                            var5 = var3.bind(var6)(var4);
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var7 = 2;
                            var4 = var4[var7];
                            var4 = var8.bind(var6)(var4);
                            var4 = var4.GLOBAL_OBJ;
                            var4 = var4.__SENTRY__;
                            if (!var4) {
                                _fun98972_ip = 137;
                                continue _fun98972
                            }
                        case 99:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var7];
                            var4 = var8.bind(var6)(var4);
                            var4 = var4.GLOBAL_OBJ;
                            var4 = var4.__SENTRY__;
                            var4 = var4.decodePolyfill;
                            if (var4) {
                                _fun98972_ip = 176;
                                continue _fun98972
                            }
                        case 137:
                            var0 = var0.TextDecoder;
                            var4 = var0.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var10 = var4;
                            var0 = new var10[var0](var9);
                            var4 = var0 instanceof Object ? var0 : var4;
                            var0 = var4.decode;
                            var0 = var0.bind(var4)(var5);
                            _fun98972_ip = 216;
                            continue _fun98972;
                        case 176:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var7];
                            var3 = var4.bind(var6)(var3);
                            var3 = var3.GLOBAL_OBJ;
                            var4 = var3.__SENTRY__;
                            var3 = var4.decodePolyfill;
                            var0 = var3.bind(var4)(var5);
                        case 216:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = 'string';
                var1 = typeof var3;
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun98970_ip = 51;
                    continue _fun98970
                }
            case 37:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 51:
                var _closure2_slot0 = var0;
                var4 = undefined;
                var2 = var5.bind(var4)();
                var1 = new Array(0);
                var0 = _closure2_slot0;
                var0 = var0.length;
                var3 = 'number';
                if (!var0) {
                    _fun98970_ip = 152;
                    continue _fun98970
                }
            case 81:
                var9 = var5.bind(var4)();
                var0 = var9.length;
                var0 = typeof var0;
                var10 = undefined;
                if (!(var3 === var0)) {
                    _fun98970_ip = 104;
                    continue _fun98970
                }
            case 99:
                var10 = var9.length;
            case 104:
                var8 = var1.push;
                var0 = new Array(2);
                var0[0] = var9;
                if (var10) {
                    _fun98970_ip = 126;
                    continue _fun98970
                }
            case 120:
                var9 = var5.bind(var4)();
                _fun98970_ip = 131;
                continue _fun98970;
            case 126:
                var9 = var6.bind(var4)(var10);
            case 131:
                var0[1] = var9;
                var0 = var8.bind(var1)(var0);
                var0 = _closure2_slot0;
                var0 = var0.length;
                if (var0) {
                    _fun98970_ip = 81;
                    continue _fun98970
                }
            case 152:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.parseEnvelope = var3;
    var1 = function arg0() {
        _fun98973: for (var _fun98973_ip = 0;;) switch (_fun98973_ip) {
            case 0:
                var3 = undefined;
                var12 = undefined;
                var13 = undefined;
                var14 = function arg0() {
                    _fun98974: for (var _fun98974_ip = 0;;) switch (_fun98974_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var2 = 'string';
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun98974_ip = 61;
                                continue _fun98974
                            }
                        case 21:
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var6 = typeof var3;
                            var0 = var3;
                            if (!(var2 === var6)) {
                                _fun98974_ip = 54;
                                continue _fun98974
                            }
                        case 40:
                            var7 = _closure1_slot6;
                            var6 = undefined;
                            var0 = var7.bind(var6)(var3);
                        case 54:
                            var0 = var4.bind(var5)(var0);
                            _fun98974_ip = 112;
                            continue _fun98974;
                        case 61:
                            var0 = typeof var3;
                            if (!(var2 !== var0)) {
                                _fun98974_ip = 100;
                                continue _fun98974
                            }
                        case 68:
                            var4 = _closure1_slot6;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var3;
                            _fun98974_ip = 108;
                            continue _fun98974;
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
                var5 = 3;
                var0 = '\n';
                var2 = 'string';
            case 87:
                var16 = var6().value;
                var15 = var4;
                if (!(var15 !== var3)) {
                    _fun98973_ip = 297;
                    continue _fun98973
                }
            case 101: // try_start_1
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
                    _fun98973_ip = 274;
                    continue _fun98973
                }
            case 171:
                var16 = var12;
                var15 = var7.Uint8Array;
                var15 = var16 instanceof var15;
                if (var15) {
                    _fun98973_ip = 274;
                    continue _fun98973
                }
            case 187:
                var13 = undefined;
            case 189: // try_start_0
                var17 = var7.JSON;
                var16 = var17.stringify;
                var15 = var12;
                var13 = var16.bind(var17)(var15);
            case 209: // try_end0
                _fun98973_ip = 261;
                continue _fun98973;
            case 211: // catch_target0
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
            case 261:
                var16 = var14;
                var15 = var13;
                var15 = var16.bind(var3)(var15);
                _fun98973_ip = 285;
                continue _fun98973;
            case 274:
                var16 = var14;
                var15 = var12;
                var15 = var16.bind(var3)(var15);
            case 285: // try_end1
                _fun98973_ip = 87;
                continue _fun98973;
            case 290: // catch_target1
                CatchBlockStart(arg_register = 0);
                var4.return();
                throw var0;
            case 297:
                var0 = _closure2_slot0;
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun98973_ip = 326;
                    continue _fun98973
                }
            case 308:
                var2 = _closure2_slot0;
                var0 = function arg0() {
                    _fun98975: for (var _fun98975_ip = 0;;) switch (_fun98975_ip) {
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
                        case 68:
                            var5 = var1().value;
                            var6 = var2;
                            if (!(var6 !== var3)) {
                                _fun98975_ip = 114;
                                continue _fun98975
                            }
                        case 79: // try_start_0
                            var8 = var0;
                            var7 = var8.set;
                            var6 = var4;
                            var7 = var7.bind(var8)(var5, var6);
                            var5 = var5.length;
                            var4 = var6 + var5;
                        case 105: // try_end0
                            _fun98975_ip = 68;
                            continue _fun98975;
                        case 107: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 114:
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var2);
                _fun98973_ip = 330;
                continue _fun98973;
            case 326:
                var0 = _closure2_slot0;
            case 330:
                return var0;
        }
    };
    var2.serializeEnvelope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 12864, 12884, 12873, 12866]);