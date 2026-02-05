// stores/RTCDebugStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var9;
    var0 = function() {
        _fun69360: for (var _fun69360_ip = 0;;) switch (_fun69360_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun69360_ip = 76;
                continue _fun69360;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1, arg2() {
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var11 = '';
        var10 = arg0;
        var2 = ':';
        var8 = arg1;
        var6 = arg2;
        var9 = var2;
        var7 = var2;
        var0 = var11[var5](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot25 = var0;
    var3 = function arg0, arg1, arg2() {
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var11 = '';
        var10 = arg0;
        var2 = ':';
        var8 = arg1;
        var6 = arg2;
        var9 = var2;
        var7 = var2;
        var0 = var11[var5](var10, var9, var8, var7, var6, var5);
        return var0;
    };
    var6 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = _closure1_slot12;
        var2 = var1.bind(var2)(var0);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot17;
            var1 = {};
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot26 = var6;
    var0 = function() {
        _fun69368: for (var _fun69368_ip = 0;;) switch (_fun69368_ip) {
            case 0:
                var2 = _closure1_slot22;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun69368_ip = 31;
                    continue _fun69368
                }
            case 13:
                var3 = _closure1_slot22;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                _closure1_slot22 = var0;
            case 31:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun69369: for (var _fun69369_ip = 0;;) switch (_fun69369_ip) {
            case 0:
                var20 = arguments[1];
                var19 = arguments[2];
                var18 = undefined;
                if (!(var20 === var18)) {
                    _fun69369_ip = 14;
                    continue _fun69369
                }
            case 12:
                var20 = {};
            case 14:
                if (!(var19 === var18)) {
                    _fun69369_ip = 35;
                    continue _fun69369
                }
            case 18:
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var19 = var0.bind(var1)();
            case 35:
                var0 = {};
                var17 = global;
                var3 = var17.Object;
                var2 = var3.entries;
                var1 = arg0;
                var16 = var2.bind(var3)(var1);
                var1 = var16.length;
                var15 = 0;
                var1 = var15 < var1;
                var13 = 'object';
                var12 = null;
                var11 = 600;
                var10 = 'number';
                var9 = 2;
                var8 = 1;
                var7 = 0;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun69369_ip = 568;
                    continue _fun69369
                }
            case 113:
                var21 = var16[var7];
                var1 = _closure1_slot7;
                var21 = var1.bind(var18)(var21, var9);
                var1 = var21[var15];
                var29 = var21[var8];
                var27 = var20[var1];
                var22 = var17.Array;
                var21 = var22.isArray;
                var21 = var21.bind(var22)(var29);
                if (var21) {
                    _fun69369_ip = 373;
                    continue _fun69369
                }
            case 161:
                var21 = typeof var29;
                if (!(var13 === var21)) {
                    _fun69369_ip = 175;
                    continue _fun69369
                }
            case 168:
                if (!(var12 === var29)) {
                    _fun69369_ip = 322;
                    continue _fun69369
                }
            case 175:
                var22 = _closure1_slot19;
                var22 = var1 in var22;
                if (!var22) {
                    _fun69369_ip = 190;
                    continue _fun69369
                }
            case 186:
                if (!(var10 !== var21)) {
                    _fun69369_ip = 214;
                    continue _fun69369
                }
            case 190:
                var0[var1] = var29;
                var25 = var6;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                var21 = var2;
                _fun69369_ip = 538;
                continue _fun69369;
            case 214:
                var28 = var17.Array;
                var26 = var28.isArray;
                var28 = var26.bind(var28)(var27);
                var26 = var27;
                if (var28) {
                    _fun69369_ip = 240;
                    continue _fun69369
                }
            case 236:
                var26 = new Array(0);
            case 240:
                var0[var1] = var26;
                var30 = var26.push;
                var28 = {};
                var28.value = var29;
                var28.time = var19;
                var28 = var30.bind(var26)(var28);
                var28 = var26.length;
                var25 = var6;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                var21 = var26;
                if (!(var28 > var11)) {
                    _fun69369_ip = 538;
                    continue _fun69369
                }
            case 292:
                var28 = var26.shift;
                var28 = var28.bind(var26)();
                var25 = var6;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                var21 = var26;
                _fun69369_ip = 538;
                continue _fun69369;
            case 322:
                var26 = typeof var27;
                if (!(var13 === var26)) {
                    _fun69369_ip = 336;
                    continue _fun69369
                }
            case 329:
                var28 = var27;
                if (!(var12 === var27)) {
                    _fun69369_ip = 338;
                    continue _fun69369
                }
            case 336:
                var28 = {};
            case 338:
                var26 = _closure1_slot28;
                var26 = var26.bind(var18)(var29, var28, var19);
                var0[var1] = var26;
                var25 = var6;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                var21 = var2;
                _fun69369_ip = 538;
                continue _fun69369;
            case 373:
                var26 = var29[var15];
                var26 = typeof var26;
                if (!(var13 !== var26)) {
                    _fun69369_ip = 408;
                    continue _fun69369
                }
            case 384:
                var0[var1] = var29;
                var25 = var6;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                var21 = var2;
                _fun69369_ip = 538;
                continue _fun69369;
            case 408:
                var28 = var17.Array;
                var26 = var28.isArray;
                var26 = var26.bind(var28)(var27);
                var28 = var27;
                if (var26) {
                    _fun69369_ip = 434;
                    continue _fun69369
                }
            case 430:
                var28 = new Array(0);
            case 434:
                var27 = new Array(0);
                var0[var1] = var27;
                var1 = var29.length;
                var1 = var15 < var1;
                var26 = 0;
                var25 = var28;
                var24 = var27;
                var23 = 0;
                var22 = var3;
                var21 = var2;
                if (!var1) {
                    _fun69369_ip = 538;
                    continue _fun69369
                }
            case 470:
                var31 = var28[var26];
                var1 = typeof var31;
                var33 = var31;
                if (!(var13 !== var1)) {
                    _fun69369_ip = 486;
                    continue _fun69369
                }
            case 484:
                var33 = {};
            case 486:
                var30 = var27.push;
                var32 = _closure1_slot28;
                var1 = var29[var26];
                var1 = var32.bind(var18)(var1, var33, var19);
                var1 = var30.bind(var27)(var1);
                var26 = var26 + 1;
                var1 = var29.length;
                var25 = var28;
                var24 = var27;
                var22 = var31;
                var21 = var2;
                var23 = var26;
                if (var23 < var1) {
                    _fun69369_ip = 470;
                    continue _fun69369
                }
            case 538:
                var7 = var7 + 1;
                var1 = var16.length;
                var6 = var25;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                var2 = var21;
                if (var7 < var1) {
                    _fun69369_ip = 113;
                    continue _fun69369
                }
            case 568:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var11 = 0;
    var5 = var9[var11];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.RTCDebugSections;
    var10 = 9;
    var10 = var9[var10];
    var12 = var8.bind(var0)(var10);
    var10 = var12.MediaEngineContextTypes;
    var _closure1_slot12 = var10;
    var13 = var12.Features;
    var _closure1_slot13 = var13;
    var12 = var12.SimulcastOverrideQuality;
    var _closure1_slot14 = var12;
    var10 = var10.DEFAULT;
    var5 = var5.TRANSPORT;
    var5 = var3.bind(var0)(var10, var5, var11);
    var _closure1_slot15 = var5;
    var _closure1_slot16 = var5;
    var5 = {};
    var _closure1_slot17 = var5;
    var4 = var4.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var17 = var5;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot18 = var4;
    var5 = {
        'availableOutgoingBitrate': true,
        'bitrate': true,
        'bitrateTarget': true,
        'bytesReceived': true,
        'bytesSent': true,
        'encoderQualityPsnr': true,
        'encoderQualityVmaf': true,
        'encodeUsage': true,
        'frameRateDecode': true,
        'frameRateEncode': true,
        'frameRateInput': true,
        'frameRateNetwork': true,
        'frameRateRender': true,
        'keyFramesEncoded': true,
        'keyFramesDecoded': true,
        'inboundBitrateEstimate': true,
        'packetsLost': true,
        'packetsReceived': true,
        'packetsSent': true,
        'ping': true,
        'qpSum': true,
        'videoEntropy': true,
        'audioLevel': true
    };
    var _closure1_slot19 = var5;
    var4 = function() { // Environment: var1
        var4 = function arg0() {
            var2 = this;
            var3 = _closure1_slot8;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.state = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot9;
        var0 = {};
        var2 = 'put';
        var0.key = var2;
        var2 = function arg0, arg1, arg2, arg3() {
            _fun69372: for (var _fun69372_ip = 0;;) switch (_fun69372_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = arg2;
                    var7 = arg3;
                    var0 = this;
                    var1 = '';
                    if (!(var1 !== var7)) {
                        _fun69372_ip = 90;
                        continue _fun69372
                    }
                case 23:
                    var6 = _closure2_slot0;
                    var1 = {};
                    var8 = _closure1_slot24;
                    var2 = undefined;
                    var2 = var8.bind(var2)(var5, var4, var3);
                    var1[var2] = var7;
                    var10 = var0.state;
                    var11 = var1;
                    var2 = copyDataProperties(var11, var10);
                    var2 = var6.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var2;
                    var11 = var1;
                    var1 = new var12[var6](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 90:
                    var2 = {};
                    var10 = var0.state;
                    var11 = var2;
                    var0 = copyDataProperties(var11, var10);
                    var1 = _closure1_slot24;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var5, var4, var3);
                    var0 = delete var2[var0];
                    var0 = _closure2_slot0;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var12 = var1;
                    var11 = var2;
                    var0 = new var12[var0](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun69373: for (var _fun69373_ip = 0;;) switch (_fun69373_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.state;
                    var5 = _closure1_slot24;
                    var4 = undefined;
                    var3 = arg0;
                    var2 = arg1;
                    var0 = arg2;
                    var0 = var5.bind(var4)(var3, var2, var0);
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun69373_ip = 49;
                        continue _fun69373
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'empty';
        var0.key = var5;
        var1 = function() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = {};
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var4 = var4.bind(var0)();
    var10 = var4.empty;
    var10 = var10.bind(var4)();
    var _closure1_slot20 = var10;
    var10 = false;
    var _closure1_slot21 = var10;
    var10 = null;
    var _closure1_slot22 = var10;
    var6 = var6.bind(var0)();
    var6 = 13;
    var6 = var9[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.Store;
    var6 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun69376: for (var _fun69376_ip = 0;;) switch (_fun69376_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun69376_ip = 69;
                        continue _fun69376
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun69376_ip = 105;
                    continue _fun69376;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot9;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot10;
            var0 = _closure1_slot11;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSection';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getInboundStats';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun69379: for (var _fun69379_ip = 0;;) switch (_fun69379_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getAllStats;
                    var0 = arg1;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var1[var0];
                    var2 = null;
                    var3 = var2 == var0;
                    var1 = undefined;
                    var5 = undefined;
                    if (var3) {
                        _fun69379_ip = 64;
                        continue _fun69379
                    }
                case 36:
                    var0 = var0.rtp;
                    var3 = var2 == var0;
                    var5 = undefined;
                    if (var3) {
                        _fun69379_ip = 64;
                        continue _fun69379
                    }
                case 51:
                    var3 = var0.inbound;
                    var0 = arg0;
                    var5 = var3[var0];
                case 64:
                    var0 = var2 == var5;
                    var3 = undefined;
                    if (var0) {
                        _fun69379_ip = 92;
                        continue _fun69379
                    }
                case 73:
                    var4 = var5.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = 'video';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var0);
                case 92:
                    var0 = {};
                    var5 = var2 == var3;
                    var4 = undefined;
                    if (var5) {
                        _fun69379_ip = 114;
                        continue _fun69379
                    }
                case 103:
                    var5 = var3.codec;
                    var4 = var5.name;
                case 114:
                    var0.codec = var4;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun69379_ip = 134;
                        continue _fun69379
                    }
                case 128:
                    var2 = var3.resolution;
                case 134:
                    var0.resolution = var2;
                    var0.bitrateEstimate = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getOutboundStats';
        var4.key = var6;
        var6 = function arg0() {
            _fun69381: for (var _fun69381_ip = 0;;) switch (_fun69381_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getAllStats;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var6 = 0;
                    var3 = var1[var6];
                    var4 = null;
                    var5 = var4 == var3;
                    var0 = undefined;
                    if (var5) {
                        _fun69381_ip = 40;
                        continue _fun69381
                    }
                case 34:
                    var0 = var3.transport;
                case 40:
                    var1 = var1[var6];
                    var3 = var4 == var1;
                    var7 = undefined;
                    if (var3) {
                        _fun69381_ip = 74;
                        continue _fun69381
                    }
                case 53:
                    var1 = var1.rtp;
                    var3 = var4 == var1;
                    var7 = undefined;
                    if (var3) {
                        _fun69381_ip = 74;
                        continue _fun69381
                    }
                case 68:
                    var7 = var1.outbound;
                case 74:
                    var1 = var4 == var7;
                    var3 = undefined;
                    if (var1) {
                        _fun69381_ip = 102;
                        continue _fun69381
                    }
                case 83:
                    var5 = var7.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = 'video';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var3 = var5.bind(var7)(var1);
                case 102:
                    var1 = global;
                    var7 = var1.Array;
                    var5 = var7.isArray;
                    var8 = var4 == var0;
                    var1 = undefined;
                    if (var8) {
                        _fun69381_ip = 130;
                        continue _fun69381
                    }
                case 124:
                    var1 = var0.availableOutgoingBitrate;
                case 130:
                    var5 = var5.bind(var7)(var1);
                    if (!var5) {
                        _fun69381_ip = 153;
                        continue _fun69381
                    }
                case 138:
                    var1 = var0.availableOutgoingBitrate;
                    var1 = var1.length;
                    var5 = var1 > var6;
                case 153:
                    var1 = undefined;
                    if (!var5) {
                        _fun69381_ip = 191;
                        continue _fun69381
                    }
                case 158:
                    var5 = var0.availableOutgoingBitrate;
                    var0 = var0.availableOutgoingBitrate;
                    var6 = var0.length;
                    var0 = 1;
                    var0 = var6 - var0;
                    var0 = var5[var0];
                    var1 = var0.value;
                case 191:
                    var0 = {};
                    var6 = var4 == var3;
                    var5 = undefined;
                    if (var6) {
                        _fun69381_ip = 213;
                        continue _fun69381
                    }
                case 202:
                    var6 = var3.codec;
                    var5 = var6.name;
                case 213:
                    var0.codec = var5;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun69381_ip = 233;
                        continue _fun69381
                    }
                case 227:
                    var2 = var3.resolution;
                case 233:
                    var0.resolution = var2;
                    var0.bitrateEstimate = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAllStats';
        var4.key = var6;
        var6 = function() {
            _fun69383: for (var _fun69383_ip = 0;;) switch (_fun69383_ip) {
                case 0:
                    var3 = arguments[0];
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun69383_ip = 22;
                        continue _fun69383
                    }
                case 9:
                    var0 = _closure1_slot12;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.values;
                    var0 = _closure1_slot17;
                    var0 = var0[var3];
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getVideoStreams';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'shouldRecordNextConnection';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSimulcastDebugOverride';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun69386: for (var _fun69386_ip = 0;;) switch (_fun69386_ip) {
                case 0:
                    var4 = _closure1_slot25;
                    var3 = undefined;
                    var2 = arg0;
                    var0 = arg1;
                    var3 = var4.bind(var3)(var2, var0);
                    var2 = _closure1_slot18;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun69386_ip = 50;
                        continue _fun69386
                    }
                case 38:
                    var0 = _closure1_slot14;
                    var0 = var0.NO_OVERRIDE;
                    _fun69386_ip = 64;
                    continue _fun69386;
                case 50:
                    var2 = _closure1_slot18;
                    var1 = var2.get;
                    var0 = var1.bind(var2)(var3);
                case 64:
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var11 = var6.bind(var0)(var10);
    var6 = 'RTCDebugStore';
    var11.displayName = var6;
    var6 = 12;
    var6 = var9[var6];
    var16 = var7.bind(var0)(var6);
    var6 = {};
    var7 = function arg0() {
        _fun69387: for (var _fun69387_ip = 0;;) switch (_fun69387_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.section;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun69387_ip = 21;
                    continue _fun69387
                }
            case 14:
                var1 = _closure1_slot15;
            case 21:
                _closure1_slot16 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var6.RTC_DEBUG_MODAL_OPEN = var7;
    var7 = function() {
        var1 = _closure1_slot27;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6.RTC_DEBUG_MODAL_CLOSE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.section;
        _closure1_slot16 = var1;
        var0 = undefined;
        return var0;
    };
    var6.RTC_DEBUG_MODAL_SET_SECTION = var7;
    var7 = function() {
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.chooseReplayPath;
        var1 = var1.bind(var2)();
        return var0;
    };
    var6.RTC_DEBUG_MODAL_OPEN_REPLAY = var7;
    var7 = function arg0() {
        _fun69391: for (var _fun69391_ip = 0;;) switch (_fun69391_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.path;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot10;
                var3 = var4.getMediaEngine;
                var5 = var3.bind(var4)();
                var3 = _closure1_slot27;
                var3 = var3.bind(var0)();
                var4 = var5.supports;
                var3 = _closure1_slot13;
                var3 = var3.CONNECTION_REPLAY;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun69391_ip = 204;
                    continue _fun69391
                }
            case 69:
                var4 = var6.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun69391_ip = 204;
                    continue _fun69391
                }
            case 83:
                var4 = var5.createReplayConnection;
                var3 = _closure1_slot12;
                var3 = var3.DEFAULT;
                var7 = var4.bind(var5)(var3, var6);
                _closure2_slot0 = var7;
                var3 = null;
                if (!(var3 != var7)) {
                    _fun69391_ip = 204;
                    continue _fun69391
                }
            case 115:
                _closure1_slot22 = var7;
                var6 = var7.on;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 11;
                var3 = var4[var3];
                var3 = var5.bind(var0)(var3);
                var3 = var3.BaseConnectionEvent;
                var5 = var3.Video;
                var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                    _fun69392: for (var _fun69392_ip = 0;;) switch (_fun69392_ip) {
                        case 0:
                            var5 = arg1;
                            var7 = arg3;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT';
                            var1.type = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.mediaEngineConnectionId;
                            var1.mediaEngineConnectionId = var4;
                            var4 = arg0;
                            var1.userId = var4;
                            var4 = null;
                            var8 = var4 != var7;
                            var6 = 0;
                            if (!var8) {
                                _fun69392_ip = 87;
                                continue _fun69392
                            }
                        case 84:
                            var6 = var7;
                        case 87:
                            var1.videoSsrc = var6;
                            var6 = var4 != var5;
                            var4 = '';
                            if (!var6) {
                                _fun69392_ip = 106;
                                continue _fun69392
                            }
                        case 103:
                            var4 = var5;
                        case 106:
                            var1.streamId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure1_slot1;
                var2 = 12;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.open;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 204:
                return var0;
        }
    };
    var6.RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH = var7;
    var7 = function arg0() {
        var0 = arg0;
        var6 = _closure1_slot20;
        var5 = var6.put;
        var10 = var0.mediaEngineConnectionId;
        var9 = var0.userId;
        var8 = var0.videoSsrc;
        var7 = var0.streamId;
        var11 = var6;
        var0 = var11[var5](var10, var9, var8, var7, var6);
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var6.RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.value;
        _closure1_slot21 = var1;
        var0 = undefined;
        return var0;
    };
    var6.RTC_DEBUG_SET_RECORDING_FLAG = var7;
    var7 = function arg0() {
        var0 = arg0;
        var6 = var0.userId;
        var5 = var0.context;
        var4 = var0.quality;
        var3 = _closure1_slot18;
        var2 = var3.set;
        var1 = _closure1_slot25;
        var0 = undefined;
        var1 = var1.bind(var0)(var6, var5);
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var6.RTC_DEBUG_SET_SIMULCAST_OVERRIDE = var7;
    var7 = function arg0() {
        _fun69397: for (var _fun69397_ip = 0;;) switch (_fun69397_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun69397_ip = 41;
                    continue _fun69397
                }
            case 14:
                var2 = _closure1_slot26;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = _closure1_slot18;
                var0 = var1.clear;
                var0 = var0.bind(var1)();
            case 41:
                var0 = undefined;
                return var0;
        }
    };
    var6.VOICE_CHANNEL_SELECT = var7;
    var7 = function arg0() {
        _fun69398: for (var _fun69398_ip = 0;;) switch (_fun69398_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.streamId;
                var0 = null;
                if (!(var0 === var2)) {
                    _fun69398_ip = 65;
                    continue _fun69398
                }
            case 15:
                var4 = _closure1_slot25;
                var3 = var1.userId;
                var2 = var1.context;
                var1 = undefined;
                var3 = var4.bind(var1)(var3, var2);
                var2 = _closure1_slot18;
                var1 = var2.set;
                var0 = _closure1_slot14;
                var0 = var0.NO_OVERRIDE;
                var0 = var1.bind(var2)(var3, var0);
            case 65:
                var0 = undefined;
                return var0;
        }
    };
    var6.RTC_CONNECTION_VIDEO = var7;
    var7 = function arg0() {
        var1 = arg0;
        var1 = var1.connectionStats;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot12;
        var2 = var2.bind(var3)(var1);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.context;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.forEach;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun69402: for (var _fun69402_ip = 0;;) switch (_fun69402_ip) {
                    case 0:
                        var0 = {};
                        var1 = _closure3_slot0;
                        var0.context = var1;
                        var1 = arg0;
                        var1 = var1.stats;
                        var0.stats = var1;
                        var1 = arg1;
                        var0.index = var1;
                        var6 = var0.context;
                        var5 = var0.stats;
                        var2 = var0.index;
                        var1 = _closure1_slot17;
                        var1 = var1[var6];
                        var8 = null;
                        if (!(var8 == var5)) {
                            _fun69402_ip = 76;
                            continue _fun69402
                        }
                    case 67:
                        var3 = delete var1[var2];
                        _fun69402_ip = 236;
                        continue _fun69402;
                    case 76:
                        var7 = _closure1_slot16;
                        var4 = var7.split;
                        var3 = ':';
                        var9 = var4.bind(var7)(var3);
                        var7 = _closure1_slot7;
                        var4 = undefined;
                        var3 = 3;
                        var10 = var7.bind(var4)(var9, var3);
                        var3 = 0;
                        var3 = var10[var3];
                        var7 = 1;
                        var7 = var10[var7];
                        var9 = 2;
                        var9 = var10[var9];
                        if (!(var3 === var6)) {
                            _fun69402_ip = 218;
                            continue _fun69402
                        }
                    case 133:
                        var3 = global;
                        var6 = var3.parseInt;
                        var6 = var6.bind(var4)(var9);
                        if (!(var6 === var2)) {
                            _fun69402_ip = 218;
                            continue _fun69402
                        }
                    case 150:
                        var9 = _closure1_slot11;
                        var6 = var9.getUser;
                        var6 = var6.bind(var9)(var7);
                        if (!(var8 != var6)) {
                            _fun69402_ip = 218;
                            continue _fun69402
                        }
                    case 169:
                        var6 = var5.rtp;
                        var8 = var6.inbound;
                        var6 = var3.Object;
                        var3 = var6.keys;
                        var6 = var3.bind(var6)(var8);
                        var3 = var6.includes;
                        var3 = var3.bind(var6)(var7);
                        if (var3) {
                            _fun69402_ip = 218;
                            continue _fun69402
                        }
                    case 210:
                        var3 = _closure1_slot15;
                        _closure1_slot16 = var3;
                    case 218:
                        var3 = _closure1_slot28;
                        var0 = var1[var2];
                        var0 = var3.bind(var4)(var5, var0);
                        var1[var2] = var0;
                    case 236:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var6.MEDIA_ENGINE_CONNECTION_STATS = var7;
    var7 = var11.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var17 = var7;
    var15 = var6;
    var6 = new var17[var11](var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 14;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'stores/RTCDebugStore.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.graphs = var5;
    var2.RTCDebugVideoOutputMap = var4;
    var2.keySection = var3;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = ':';
        var3 = var1.bind(var2)(var0);
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = 2;
        var2 = var2.bind(var1)(var3, var0);
        var0 = {};
        var1 = 0;
        var1 = var2[var1];
        var0.context = var1;
        var1 = 1;
        var1 = var2[var1];
        var0.section = var1;
        return var0;
    };
    var2.parseSection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 6, 7, 3476, 1621, 660, 3510, 8681, 3633, 806, 566, 2]);