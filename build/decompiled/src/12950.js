// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun99343: for (var _fun99343_ip = 0;;) switch (_fun99343_ip) {
            case 0:
                var6 = arg0;
                var3 = arg2;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var1 = var1[var5];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.getSdkMetadataForEnvelopeHeader;
                var10 = var1.bind(var4)(var3);
                var1 = var6.type;
                var8 = 'event';
                var4 = var8;
                if (!var1) {
                    _fun99343_ip = 78;
                    continue _fun99343
                }
            case 57:
                var7 = var6.type;
                var1 = 'replay_event';
                var4 = var8;
                if (!(var1 !== var7)) {
                    _fun99343_ip = 78;
                    continue _fun99343
                }
            case 73:
                var4 = var6.type;
            case 78:
                var1 = var3;
                if (!var1) {
                    _fun99343_ip = 90;
                    continue _fun99343
                }
            case 84:
                var1 = var3.sdk;
            case 90:
                if (!var1) {
                    _fun99343_ip = 331;
                    continue _fun99343
                }
            case 96:
                var3 = var6.sdk;
                if (var3) {
                    _fun99343_ip = 107;
                    continue _fun99343
                }
            case 105:
                var3 = {};
            case 107:
                var6.sdk = var3;
                var7 = var6.sdk;
                var3 = var6.sdk;
                var3 = var3.name;
                if (var3) {
                    _fun99343_ip = 138;
                    continue _fun99343
                }
            case 133:
                var3 = var1.name;
            case 138:
                var7.name = var3;
                var7 = var6.sdk;
                var3 = var6.sdk;
                var3 = var3.version;
                if (var3) {
                    _fun99343_ip = 171;
                    continue _fun99343
                }
            case 165:
                var3 = var1.version;
            case 171:
                var7.version = var3;
                var7 = var6.sdk;
                var11 = new Array(0);
                var9 = var11.concat;
                var8 = _closure1_slot2;
                var3 = var6.sdk;
                var3 = var3.integrations;
                if (var3) {
                    _fun99343_ip = 215;
                    continue _fun99343
                }
            case 211:
                var3 = new Array(0);
            case 215:
                var8 = var8.bind(var2)(var3);
                var12 = _closure1_slot2;
                var3 = var1.integrations;
                if (var3) {
                    _fun99343_ip = 237;
                    continue _fun99343
                }
            case 233:
                var3 = new Array(0);
            case 237:
                var3 = var12.bind(var2)(var3);
                var3 = var9.bind(var11)(var8, var3);
                var7.integrations = var3;
                var3 = var6.sdk;
                var9 = new Array(0);
                var8 = var9.concat;
                var11 = _closure1_slot2;
                var7 = var6.sdk;
                var7 = var7.packages;
                if (var7) {
                    _fun99343_ip = 292;
                    continue _fun99343
                }
            case 288:
                var7 = new Array(0);
            case 292:
                var7 = var11.bind(var2)(var7);
                var11 = _closure1_slot2;
                var1 = var1.packages;
                if (var1) {
                    _fun99343_ip = 314;
                    continue _fun99343
                }
            case 310:
                var1 = new Array(0);
            case 314:
                var1 = var11.bind(var2)(var1);
                var1 = var8.bind(var9)(var7, var1);
                var3.packages = var1;
            case 331:
                var1 = !var6;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = var0[var5];
                var9 = var1.bind(var2)(var3);
                var8 = var9.createEventEnvelopeHeaders;
                var15 = arg3;
                var14 = arg1;
                var18 = var9;
                var17 = var6;
                var16 = var10;
                var3 = var18[var8](var17, var16, var15, var14, var13);
                var7 = delete var6.sdkProcessingMetadata;
                var7 = {};
                var7.type = var4;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0 = var0[var5];
                var2 = var1.bind(var2)(var0);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createEventEnvelope = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun99344: for (var _fun99344_ip = 0;;) switch (_fun99344_ip) {
            case 0:
                var6 = arg0;
                var12 = arg1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var1 = var1[var5];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.getSdkMetadataForEnvelopeHeader;
                var1 = arg2;
                var9 = var3.bind(var4)(var1);
                var1 = global;
                var8 = var1.Object;
                var7 = var8.assign;
                var4 = {};
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var16 = var3;
                var1 = new var16[var1](var15);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.toISOString;
                var1 = var1.bind(var3)();
                var4.sent_at = var1;
                var3 = var9;
                if (!var3) {
                    _fun99344_ip = 117;
                    continue _fun99344
                }
            case 107:
                var1 = {};
                var1.sdk = var9;
                var3 = var1;
            case 117:
                var1 = arg3;
                var9 = !var1;
                var1 = !var9;
                if (var9) {
                    _fun99344_ip = 132;
                    continue _fun99344
                }
            case 129:
                var1 = var12;
            case 132:
                if (!var1) {
                    _fun99344_ip = 173;
                    continue _fun99344
                }
            case 135:
                var9 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var5];
                var11 = var11.bind(var2)(var10);
                var10 = var11.dsnToString;
                var10 = var10.bind(var11)(var12);
                var9.dsn = var10;
                var1 = var9;
            case 173:
                var3 = var7.bind(var8)(var4, var3, var1);
                var1 = 'aggregates';
                var1 = var1 in var6;
                var7 = {};
                if (var1) {
                    _fun99344_ip = 225;
                    continue _fun99344
                }
            case 193:
                var1 = 'session';
                var7.type = var1;
                var4 = new Array(2);
                var4[0] = var7;
                var1 = var6.toJSON;
                var1 = var1.bind(var6)();
                var4[1] = var1;
                _fun99344_ip = 248;
                continue _fun99344;
            case 225:
                var1 = 'sessions';
                var7.type = var1;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var4 = var1;
            case 248:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var2 = var1.bind(var2)(var0);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createSessionEnvelope = var3;
    var1 = function arg0, arg1() {
        _fun99345: for (var _fun99345_ip = 0;;) switch (_fun99345_ip) {
            case 0:
                var5 = arg0;
                var10 = arg1;
                var4 = undefined;
                var7 = undefined;
                var0 = undefined;
                var8 = undefined;
                var3 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 2;
                var2 = var9[var2];
                var9 = var3.bind(var4)(var2);
                var3 = var9.getDynamicSamplingContextFromSpan;
                var2 = 0;
                var2 = var5[var2];
                var14 = var3.bind(var9)(var2);
                var16 = var10;
                if (!var10) {
                    _fun99345_ip = 72;
                    continue _fun99345
                }
            case 62:
                var2 = var10.getDsn;
                var16 = var2.bind(var10)();
            case 72:
                var2 = var10;
                if (!var10) {
                    _fun99345_ip = 94;
                    continue _fun99345
                }
            case 78:
                var3 = var10.getOptions;
                var3 = var3.bind(var10)();
                var2 = var3.tunnel;
            case 94:
                var3 = global;
                var12 = var3.Object;
                var11 = var12.assign;
                var9 = {};
                var3 = var3.Date;
                var13 = var3.prototype;
                var13 = Object.create(var13, {
                    constructor: {
                        value: var3
                    }
                });
                var21 = var13;
                var3 = new var21[var3](var20);
                var13 = var3 instanceof Object ? var3 : var13;
                var3 = var13.toISOString;
                var3 = var3.bind(var13)();
                var9.sent_at = var3;
                var3 = var14.trace_id;
                var13 = !var3;
                var3 = !var13;
                if (var13) {
                    _fun99345_ip = 177;
                    continue _fun99345
                }
            case 165:
                var13 = var14.public_key;
                var13 = !var13;
                var3 = !var13;
            case 177:
                if (!var3) {
                    _fun99345_ip = 190;
                    continue _fun99345
                }
            case 180:
                var13 = {};
                var13.trace = var14;
                var3 = var13;
            case 190:
                var13 = !var2;
                var2 = !var13;
                if (var13) {
                    _fun99345_ip = 202;
                    continue _fun99345
                }
            case 199:
                var2 = var16;
            case 202:
                if (!var2) {
                    _fun99345_ip = 246;
                    continue _fun99345
                }
            case 205:
                var13 = {};
                var15 = _closure1_slot0;
                var17 = _closure1_slot1;
                var14 = 1;
                var14 = var17[var14];
                var15 = var15.bind(var4)(var14);
                var14 = var15.dsnToString;
                var14 = var14.bind(var15)(var16);
                var13.dsn = var14;
                var2 = var13;
            case 246:
                var3 = var11.bind(var12)(var9, var3, var2);
                var2 = var10;
                if (!var2) {
                    _fun99345_ip = 275;
                    continue _fun99345
                }
            case 259:
                var9 = var10.getOptions;
                var9 = var9.bind(var10)();
                var2 = var9.beforeSendSpan;
            case 275:
                var _closure2_slot0 = var2;
                if (var2) {
                    _fun99345_ip = 291;
                    continue _fun99345
                }
            case 282:
                var2 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.spanToJSON;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                _fun99345_ip = 298;
                continue _fun99345;
            case 291:
                var2 = function(arg0) { // Environment: var6
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var0 = var1[var0];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var0);
                    var3 = var4.spanToJSON;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
            case 298:
                var7 = var2;
                var0 = new Array(0);
                var2 = var5;
                var6 = var2[Symbol.iterator];
                var2 = var6().next;
                var5 = 1;
            case 314:
                var10 = var2().value;
                var9 = var6;
                if (!(var9 !== var4)) {
                    _fun99345_ip = 392;
                    continue _fun99345
                }
            case 325: // try_start_0
                var9 = var7;
                var9 = var9.bind(var4)(var10);
                var8 = var9;
                if (!var9) {
                    _fun99345_ip = 383;
                    continue _fun99345
                }
            case 339:
                var11 = var0;
                var10 = var11.push;
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var5];
                var13 = var12.bind(var4)(var9);
                var12 = var13.createSpanEnvelopeItem;
                var9 = var8;
                var9 = var12.bind(var13)(var9);
                var9 = var10.bind(var11)(var9);
            case 383: // try_end0
                _fun99345_ip = 314;
                continue _fun99345;
            case 385: // catch_target0
                CatchBlockStart(arg_register = 2);
                var6.return();
                throw var2;
            case 392:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.createEnvelope;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createSpanEnvelope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 12869, 12943, 12923]);