// lib/RTCMediaSinkWantsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun93518: for (var _fun93518_ip = 0;;) switch (_fun93518_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93518_ip = 46;
                    continue _fun93518
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93518_ip = 55;
                    continue _fun93518
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93518_ip = 345;
                    continue _fun93518
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93518_ip = 323;
                    continue _fun93518
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93518_ip = 283;
                    continue _fun93518
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93518_ip = 270;
                    continue _fun93518
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun93518_ip = 163;
                    continue _fun93518
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93518_ip = 179;
                    continue _fun93518
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93518_ip = 249;
                    continue _fun93518
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93518_ip = 249;
                    continue _fun93518
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93518_ip = 234;
                    continue _fun93518
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93518_ip = 247;
                    continue _fun93518
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93518_ip = 265;
                continue _fun93518;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93518_ip = 283;
                continue _fun93518;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93518_ip = 323;
                    continue _fun93518
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun93518_ip = 330;
                    continue _fun93518
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93519: for (var _fun93519_ip = 0;;) switch (_fun93519_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93519_ip = 56;
                                continue _fun93519
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun93519_ip = 67;
                            continue _fun93519;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun93520: for (var _fun93520_ip = 0;;) switch (_fun93520_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93520_ip = 23;
                    continue _fun93520
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93520_ip = 33;
                    continue _fun93520
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun93520_ip = 70;
                    continue _fun93520
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93520_ip = 55;
                    continue _fun93520
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun93521: for (var _fun93521_ip = 0;;) switch (_fun93521_ip) {
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
                _fun93521_ip = 76;
                continue _fun93521;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.VideoToggleState;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.SimulcastOverrideQuality;
    var _closure1_slot11 = var1;
    var3 = {};
    var1 = 100;
    var3.any = var1;
    var _closure1_slot12 = var3;
    var1 = 9;
    var5 = var7[var1];
    var5 = var8.bind(var0)(var5);
    var5 = var5.Millis;
    var9 = var5.SECOND;
    var5 = 30;
    var5 = var5 * var9;
    var _closure1_slot13 = var5;
    var1 = var7[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.Millis;
    var5 = var1.SECOND;
    var1 = 120;
    var1 = var1 * var5;
    var _closure1_slot14 = var1;
    var1 = 10;
    var1 = var7[var1];
    var5 = var6.bind(var0)(var1);
    var1 = var5.getFirefoxVersion;
    var5 = var1.bind(var5)();
    var1 = -1;
    var1 = var1 !== var5;
    var _closure1_slot15 = var1;
    var1 = {};
    var5 = 'user-ssrc-update';
    var1.UserSSRCUpdate = var5;
    var5 = 'update';
    var1.Update = var5;
    var _closure1_slot16 = var1;
    var5 = 19;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var4 = function(arg0) { // Environment: var4
        var3 = function arg0, arg1, arg2() {
            _fun93525: for (var _fun93525_ip = 0;;) switch (_fun93525_ip) {
                case 0:
                    var3 = arguments[3];
                    var6 = this;
                    var5 = undefined;
                    if (!(var3 === var5)) {
                        _fun93525_ip = 63;
                        continue _fun93525
                    }
                case 14:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 11;
                    var0 = var4[var0];
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.MediaSinkWantsLadder;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var15 = var1;
                    var0 = new var15[var0](var14);
                    var3 = var0 instanceof Object ? var0 : var1;
                case 63:
                    var _closure3_slot0 = var5;
                    var0 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var0 = var0.bind(var5)(var6, var4);
                    var0 = _closure1_slot7;
                    var11 = var0.bind(var5)(var4);
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun93525_ip = 124;
                        continue _fun93525
                    }
                case 111:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var6, var5);
                    _fun93525_ip = 162;
                    continue _fun93525;
                case 124:
                    var7 = global;
                    var10 = var7.Reflect;
                    var9 = var10.construct;
                    var7 = _closure1_slot7;
                    var7 = var7.bind(var5)(var6);
                    var8 = var7.constructor;
                    var7 = new Array(0);
                    var0 = var9.bind(var10)(var11, var7, var8);
                case 162:
                    var0 = var4.bind(var5)(var6, var0);
                    _closure3_slot0 = var0;
                    var4 = arg0;
                    var0.userId = var4;
                    var4 = arg1;
                    var0.isStageChannel = var4;
                    var4 = arg2;
                    var0.supportsSeamless = var4;
                    var0.ladder = var3;
                    var4 = null;
                    var0.connection = var4;
                    var3 = {};
                    var0.audioSsrcs = var3;
                    var3 = {};
                    var0.videoSsrcs = var3;
                    var3 = {};
                    var0.remoteVideoSsrcs = var3;
                    var3 = {};
                    var0.framesReceived = var3;
                    var3 = {};
                    var0.streamIds = var3;
                    var3 = {};
                    var0.offscreenUsers = var3;
                    var3 = {};
                    var0.offscreenDisabledUsers = var3;
                    var3 = {};
                    var0.streamPixelCounts = var3;
                    var3 = _closure1_slot12;
                    var0.latestWants = var3;
                    var3 = global;
                    var6 = var3.Set;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var7;
                    var6 = new var15[var6](var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.participants = var6;
                    var0.selectedParticipantId = var4;
                    var6 = false;
                    var0.pipOpen = var6;
                    var6 = var3.Map;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var7;
                    var6 = new var15[var6](var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.simulcastDebugOverrides = var6;
                    var0.videoHealthManager = var4;
                    var3 = var3.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var4;
                    var3 = new var15[var3](var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.otherUsers = var3;
                    var3 = function() { // Environment: var2
                        var0 = _closure3_slot0;
                        var1 = var0.delayedCall;
                        var0 = var1.delay;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.delayedUpdate = var3;
                    var3 = function(arg0, arg1, arg2) { // Environment: var2
                        _fun93527: for (var _fun93527_ip = 0;;) switch (_fun93527_ip) {
                            case 0:
                                var7 = arg1;
                                var3 = arg2;
                                var1 = var3.push;
                                var0 = arg0;
                                var0 = var1.bind(var3)(var0);
                                var1 = var3.length;
                                var0 = 3;
                                if (!(!(var1 <= var0))) {
                                    _fun93527_ip = 142;
                                    continue _fun93527
                                }
                            case 31:
                                var0 = var3.length;
                                var6 = 0;
                                var1 = var6 < var0;
                                var5 = -1;
                                var4 = var5;
                                var2 = var4;
                                if (!var1) {
                                    _fun93527_ip = 107;
                                    continue _fun93527
                                }
                            case 60:
                                var8 = var3[var6];
                                var1 = _closure3_slot0;
                                var1 = var1.offscreenUsers;
                                var1 = var1[var8];
                                var1 = var7 - var1;
                                if (!(var1 > var5)) {
                                    _fun93527_ip = 92;
                                    continue _fun93527
                                }
                            case 86:
                                var5 = var1;
                                var4 = var6;
                            case 92:
                                var6 = var6 + 1;
                                var1 = var3.length;
                                var2 = var4;
                                if (var6 < var1) {
                                    _fun93527_ip = 60;
                                    continue _fun93527
                                }
                            case 107:
                                var0 = _closure3_slot0;
                                var4 = var0.offscreenDisabledUsers;
                                var1 = var3[var2];
                                var0 = true;
                                var4[var1] = var0;
                                var1 = var3.splice;
                                var0 = 1;
                                var0 = var1.bind(var3)(var2, var0);
                            case 142:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.addLru = var3;
                    var3 = function() { // Environment: var2
                        _fun93528: for (var _fun93528_ip = 0;;) switch (_fun93528_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.connection;
                                var14 = null;
                                if (!(var14 != var2)) {
                                    _fun93528_ip = 599;
                                    continue _fun93528
                                }
                            case 22:
                                var1 = var2.getActiveOutputSinkTrackingEnabled;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun93528_ip = 599;
                                    continue _fun93528
                                }
                            case 40:
                                var8 = global;
                                var2 = var8.Date;
                                var1 = var2.now;
                                var4 = var1.bind(var2)();
                                var3 = new Array(0);
                                var5 = _closure1_slot17;
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 12;
                                var1 = var7[var1];
                                var7 = undefined;
                                var9 = var6.bind(var7)(var1);
                                var6 = var9.entries;
                                var1 = _closure3_slot0;
                                var1 = var1.streamIds;
                                var1 = var6.bind(var9)(var1);
                                var13 = var5.bind(var7)(var1);
                                var6 = var13.bind(var7)();
                                var1 = var6.done;
                                var12 = true;
                                var11 = 2;
                                var5 = 0;
                                var10 = 1;
                                var9 = var6;
                                var6 = undefined;
                                if (var1) {
                                    _fun93528_ip = 410;
                                    continue _fun93528
                                }
                            case 146:
                                var15 = var9.value;
                                var1 = _closure1_slot3;
                                var1 = var1.bind(var7)(var15, var11);
                                var16 = var1[var5];
                                var17 = var1[var10];
                                if (!(var14 != var17)) {
                                    _fun93528_ip = 392;
                                    continue _fun93528
                                }
                            case 176:
                                var1 = _closure3_slot0;
                                var1 = var1.connection;
                                if (!(var14 != var1)) {
                                    _fun93528_ip = 207;
                                    continue _fun93528
                                }
                            case 190:
                                var15 = var1.getHasActiveVideoOutputSink;
                                var15 = var15.bind(var1)(var17);
                                if (var15) {
                                    _fun93528_ip = 361;
                                    continue _fun93528
                                }
                            case 207:
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenUsers;
                                var15 = var15[var16];
                                if (!(var14 != var15)) {
                                    _fun93528_ip = 325;
                                    continue _fun93528
                                }
                            case 225:
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenDisabledUsers;
                                var15 = var15[var16];
                                var6 = var1;
                                if (var15) {
                                    _fun93528_ip = 392;
                                    continue _fun93528
                                }
                            case 248:
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenUsers;
                                var15 = var15[var16];
                                var17 = var4 - var15;
                                var18 = _closure3_slot0;
                                var15 = var18.getOffscreenTimeoutMs;
                                var15 = var15.bind(var18)();
                                if (!(!(var17 >= var15))) {
                                    _fun93528_ip = 306;
                                    continue _fun93528
                                }
                            case 284:
                                var17 = _closure3_slot0;
                                var15 = var17.addLru;
                                var15 = var15.bind(var17)(var16, var4, var3);
                                var6 = var1;
                                _fun93528_ip = 392;
                                continue _fun93528;
                            case 306:
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenDisabledUsers;
                                var15[var16] = var12;
                                var6 = var1;
                                _fun93528_ip = 392;
                                continue _fun93528;
                            case 325:
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenUsers;
                                var15[var16] = var4;
                                var17 = _closure3_slot0;
                                var15 = var17.addLru;
                                var15 = var15.bind(var17)(var16, var4, var3);
                                var6 = var1;
                                _fun93528_ip = 392;
                                continue _fun93528;
                            case 361:
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenUsers;
                                var15 = delete var15[var16];
                                var15 = _closure3_slot0;
                                var15 = var15.offscreenDisabledUsers;
                                var15 = delete var15[var16];
                                var6 = var1;
                            case 392:
                                var15 = var13.bind(var7)();
                                var1 = var15.done;
                                var9 = var15;
                                if (!var1) {
                                    _fun93528_ip = 146;
                                    continue _fun93528
                                }
                            case 410:
                                var1 = var3.length;
                                if (!(!(var1 > var5))) {
                                    _fun93528_ip = 444;
                                    continue _fun93528
                                }
                            case 419:
                                var1 = _closure3_slot0;
                                var5 = var1.offscreenTimeout;
                                var1 = var5.stop;
                                var1 = var1.bind(var5)();
                                _fun93528_ip = 599;
                                continue _fun93528;
                            case 444:
                                var5 = _closure3_slot0;
                                var1 = var5.getOffscreenTimeoutMs;
                                var1 = var1.bind(var5)();
                                var1 = var4 + var1;
                                var2 = _closure1_slot17;
                                var6 = var2.bind(var7)(var3);
                                var3 = var6.bind(var7)();
                                var2 = var3.done;
                                var5 = var3;
                                var3 = var1;
                                var1 = var3;
                                if (var2) {
                                    _fun93528_ip = 564;
                                    continue _fun93528
                                }
                            case 492:
                                var11 = var5.value;
                                var10 = var8.Math;
                                var9 = var10.min;
                                var2 = _closure3_slot0;
                                var2 = var2.offscreenUsers;
                                var11 = var2[var11];
                                var12 = _closure3_slot0;
                                var2 = var12.getOffscreenTimeoutMs;
                                var2 = var2.bind(var12)();
                                var2 = var11 + var2;
                                var3 = var9.bind(var10)(var3, var2);
                                var10 = var6.bind(var7)();
                                var2 = var10.done;
                                var5 = var10;
                                var1 = var3;
                                if (!var2) {
                                    _fun93528_ip = 492;
                                    continue _fun93528
                                }
                            case 564:
                                var2 = _closure3_slot0;
                                var3 = var2.offscreenTimeout;
                                var2 = var3.start;
                                var1 = var1 - var4;
                                var0 = _closure3_slot0;
                                var0 = var0.update;
                                var0 = var2.bind(var3)(var1, var0);
                            case 599:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.updateOffscreenUsers = var3;
                    var3 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.update;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLocalVideoDisabled = var3;
                    var3 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.update;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLocalMute = var3;
                    var3 = function() { // Environment: var2
                        _fun93531: for (var _fun93531_ip = 0;;) switch (_fun93531_ip) {
                            case 0:
                                var29 = arguments[0];
                                var7 = undefined;
                                if (!(var29 === var7)) {
                                    _fun93531_ip = 13;
                                    continue _fun93531
                                }
                            case 9:
                                var29 = new Array(0);
                            case 13:
                                var1 = _closure3_slot0;
                                var0 = var1.getWantsLevel;
                                var28 = var0.bind(var1)();
                                var2 = {};
                                var2.any = var28;
                                var1 = _closure3_slot0;
                                var0 = var1.updateOffscreenUsers;
                                var0 = var0.bind(var1)();
                                var1 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 13;
                                var0 = var5[var0];
                                var1 = var1.bind(var7)(var0);
                                var0 = var1.isDesktop;
                                var27 = var0.bind(var1)();
                                if (!var27) {
                                    _fun93531_ip = 101;
                                    continue _fun93531
                                }
                            case 87:
                                var1 = _closure3_slot0;
                                var0 = var1.isOneToOneCall;
                                var27 = var0.bind(var1)();
                            case 101:
                                if (!var27) {
                                    _fun93531_ip = 117;
                                    continue _fun93531
                                }
                            case 104:
                                var0 = _closure3_slot0;
                                var0 = var0.isStageChannel;
                                var27 = !var0;
                            case 117:
                                var1 = _closure1_slot17;
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var0 = 12;
                                var0 = var6[var0];
                                var6 = var5.bind(var7)(var0);
                                var5 = var6.entries;
                                var0 = _closure3_slot0;
                                var0 = var0.videoSsrcs;
                                var0 = var5.bind(var6)(var0);
                                var26 = var1.bind(var7)(var0);
                                var1 = var26.bind(var7)();
                                var0 = var1.done;
                                var10 = 0;
                                var25 = 14;
                                var24 = 100;
                                var23 = 50;
                                var9 = 1;
                                var20 = var28 !== var24;
                                var8 = 2;
                                var5 = null;
                                var19 = var1;
                                var18 = undefined;
                                var17 = undefined;
                                var16 = undefined;
                                var15 = undefined;
                                var14 = undefined;
                                var13 = undefined;
                                var12 = undefined;
                                var11 = undefined;
                                var6 = undefined;
                                var1 = undefined;
                                if (var0) {
                                    _fun93531_ip = 1492;
                                    continue _fun93531
                                }
                            case 228:
                                var30 = var19.value;
                                var0 = _closure1_slot3;
                                var0 = var0.bind(var7)(var30, var8);
                                var43 = var0[var10];
                                var39 = var0[var9];
                                var44 = new Array(0);
                                var0 = _closure3_slot0;
                                var30 = var0.streamPixelCounts;
                                var0 = _closure3_slot0;
                                var0 = var0.streamIds;
                                var0 = var0[var43];
                                var0 = var30[var0];
                                var30 = var5 != var0;
                                var31 = 0;
                                if (!var30) {
                                    _fun93531_ip = 295;
                                    continue _fun93531
                                }
                            case 292:
                                var31 = var0;
                            case 295:
                                var30 = _closure3_slot0;
                                var0 = var30.getWantsLevel;
                                var51 = var0.bind(var30)(var31);
                                var0 = var39[var10];
                                var48 = var0.ssrc;
                                var30 = _closure3_slot0;
                                var0 = var30.shouldReceiveFromUser;
                                var0 = var0.bind(var30)(var43);
                                if (var0) {
                                    _fun93531_ip = 473;
                                    continue _fun93531
                                }
                            case 341:
                                var0 = _closure1_slot17;
                                var46 = var0.bind(var7)(var39);
                                var30 = var46.bind(var7)();
                                var0 = var30.done;
                                var45 = var30;
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var18;
                                var37 = var17;
                                var36 = var16;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var45;
                                var30 = var46;
                                if (var0) {
                                    _fun93531_ip = 1122;
                                    continue _fun93531
                                }
                            case 403:
                                var0 = var45.value;
                                var0 = var0.ssrc;
                                var2[var0] = var10;
                                var47 = var46.bind(var7)();
                                var0 = var47.done;
                                var45 = var47;
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var18;
                                var37 = var17;
                                var36 = var16;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var45;
                                var30 = var46;
                                if (var0) {
                                    _fun93531_ip = 1122;
                                    continue _fun93531
                                }
                            case 471:
                                _fun93531_ip = 403;
                                continue _fun93531;
                            case 473:
                                var0 = _closure3_slot0;
                                var0 = var0.selectedParticipantId;
                                var50 = var43 === var0;
                                if (!var50) {
                                    _fun93531_ip = 493;
                                    continue _fun93531
                                }
                            case 490:
                                var50 = var20;
                            case 493:
                                if (!var50) {
                                    _fun93531_ip = 509;
                                    continue _fun93531
                                }
                            case 496:
                                var0 = _closure3_slot0;
                                var0 = var0.pipOpen;
                                var50 = !var0;
                            case 509:
                                var0 = var39.length;
                                if (!(!(var0 > var9))) {
                                    _fun93531_ip = 653;
                                    continue _fun93531
                                }
                            case 521:
                                if (var50) {
                                    _fun93531_ip = 609;
                                    continue _fun93531
                                }
                            case 524:
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var50;
                                var37 = var17;
                                var36 = var16;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var11;
                                var30 = var6;
                                if (!var27) {
                                    _fun93531_ip = 1122;
                                    continue _fun93531
                                }
                            case 565:
                                var2[var48] = var51;
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var50;
                                var37 = var17;
                                var36 = var16;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var11;
                                var30 = var6;
                                _fun93531_ip = 1122;
                                continue _fun93531;
                            case 609:
                                var2[var48] = var24;
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var50;
                                var37 = var17;
                                var36 = var16;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var11;
                                var30 = var6;
                                _fun93531_ip = 1122;
                                continue _fun93531;
                            case 653:
                                var0 = _closure1_slot17;
                                var49 = var0.bind(var7)(var39);
                                var47 = var49.bind(var7)();
                                var0 = var47.done;
                                var46 = var48;
                                var45 = var47;
                                var48 = var46;
                                var47 = var45;
                                if (var0) {
                                    _fun93531_ip = 795;
                                    continue _fun93531
                                }
                            case 686:
                                var52 = var45.value;
                                var0 = var52.quality;
                                if (!(var0 !== var24)) {
                                    _fun93531_ip = 740;
                                    continue _fun93531
                                }
                            case 701:
                                if (var50) {
                                    _fun93531_ip = 725;
                                    continue _fun93531
                                }
                            case 704:
                                if (!var27) {
                                    _fun93531_ip = 717;
                                    continue _fun93531
                                }
                            case 707:
                                var0 = var52.ssrc;
                                var2[var0] = var51;
                            case 717:
                                var54 = var52.ssrc;
                                _fun93531_ip = 768;
                                continue _fun93531;
                            case 725:
                                var0 = var52.ssrc;
                                var2[var0] = var10;
                                var54 = var46;
                                _fun93531_ip = 768;
                                continue _fun93531;
                            case 740:
                                var0 = var52.ssrc;
                                if (var50) {
                                    _fun93531_ip = 758;
                                    continue _fun93531
                                }
                            case 749:
                                var2[var0] = var10;
                                var54 = var46;
                                _fun93531_ip = 768;
                                continue _fun93531;
                            case 758:
                                var2[var0] = var24;
                                var54 = var52.ssrc;
                            case 768:
                                var53 = var49.bind(var7)();
                                var0 = var53.done;
                                var46 = var54;
                                var45 = var53;
                                var48 = var46;
                                var47 = var45;
                                var15 = var52;
                                if (!var0) {
                                    _fun93531_ip = 686;
                                    continue _fun93531
                                }
                            case 795:
                                var0 = _closure3_slot0;
                                var0 = var0.supportsSeamless;
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var50;
                                var37 = var47;
                                var36 = var49;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var11;
                                var30 = var6;
                                if (!var0) {
                                    _fun93531_ip = 1122;
                                    continue _fun93531
                                }
                            case 846:
                                var0 = _closure3_slot0;
                                var0 = var0.framesReceived;
                                var0 = var0[var48];
                                var42 = var44;
                                var41 = false;
                                var40 = var48;
                                var38 = var50;
                                var37 = var47;
                                var36 = var49;
                                var35 = var15;
                                var34 = var14;
                                var33 = var13;
                                var32 = var12;
                                var31 = var11;
                                var30 = var6;
                                if (var0) {
                                    _fun93531_ip = 1122;
                                    continue _fun93531
                                }
                            case 901:
                                var46 = new Array(1);
                                var46[0] = var48;
                                var0 = _closure1_slot17;
                                var45 = var0.bind(var7)(var39);
                                var52 = var45.bind(var7)();
                                var0 = var52.done;
                                var44 = var52;
                                var42 = var46;
                                var41 = true;
                                var40 = var48;
                                var38 = var50;
                                var37 = var47;
                                var36 = var49;
                                var35 = var15;
                                var34 = var44;
                                var33 = var45;
                                var32 = var12;
                                var31 = var11;
                                var30 = var6;
                                if (var0) {
                                    _fun93531_ip = 1122;
                                    continue _fun93531
                                }
                            case 971:
                                var52 = var44.value;
                                var0 = var52.ssrc;
                                var0 = var0 !== var48;
                                if (!var0) {
                                    _fun93531_ip = 1009;
                                    continue _fun93531
                                }
                            case 989:
                                var53 = _closure3_slot0;
                                var54 = var53.framesReceived;
                                var53 = var52.ssrc;
                                var0 = var54[var53];
                            case 1009:
                                if (!var0) {
                                    _fun93531_ip = 1069;
                                    continue _fun93531
                                }
                            case 1012:
                                var0 = var52.quality;
                                if (!(var0 !== var24)) {
                                    _fun93531_ip = 1043;
                                    continue _fun93531
                                }
                            case 1022:
                                var53 = var52.ssrc;
                                var0 = var28;
                                if (!var27) {
                                    _fun93531_ip = 1037;
                                    continue _fun93531
                                }
                            case 1034:
                                var0 = var51;
                            case 1037:
                                var2[var53] = var0;
                                _fun93531_ip = 1053;
                                continue _fun93531;
                            case 1043:
                                var0 = var52.ssrc;
                                var2[var0] = var24;
                            case 1053:
                                var53 = var46.push;
                                var0 = var52.ssrc;
                                var0 = var53.bind(var46)(var0);
                            case 1069:
                                var53 = var45.bind(var7)();
                                var0 = var53.done;
                                var44 = var53;
                                var42 = var46;
                                var41 = true;
                                var40 = var48;
                                var38 = var50;
                                var37 = var47;
                                var36 = var49;
                                var35 = var15;
                                var34 = var44;
                                var33 = var45;
                                var32 = var52;
                                var31 = var11;
                                var30 = var6;
                                if (!var0) {
                                    _fun93531_ip = 971;
                                    continue _fun93531
                                }
                            case 1122:
                                var44 = _closure3_slot0;
                                var0 = var44.getSimulcastOverrideQuality;
                                var44 = var0.bind(var44)(var43);
                                var0 = _closure1_slot11;
                                var0 = var0.HIGH;
                                if (!(var44 !== var0)) {
                                    _fun93531_ip = 1173;
                                    continue _fun93531
                                }
                            case 1153:
                                var0 = _closure1_slot11;
                                var0 = var0.LOW;
                                if (!(var44 === var0)) {
                                    _fun93531_ip = 1177;
                                    continue _fun93531
                                }
                            case 1167:
                                var2[var40] = var23;
                                _fun93531_ip = 1177;
                                continue _fun93531;
                            case 1173:
                                var2[var40] = var24;
                            case 1177:
                                var0 = _closure3_slot0;
                                var0 = var0.supportsSeamless;
                                if (!var0) {
                                    _fun93531_ip = 1193;
                                    continue _fun93531
                                }
                            case 1190:
                                var0 = var41;
                            case 1193:
                                if (var0) {
                                    _fun93531_ip = 1207;
                                    continue _fun93531
                                }
                            case 1196:
                                var0 = new Array(1);
                                var0[0] = var40;
                                var42 = var0;
                            case 1207:
                                var0 = _closure1_slot17;
                                var40 = var0.bind(var7)(var39);
                                var39 = var40.bind(var7)();
                                var0 = var39.done;
                                if (var0) {
                                    _fun93531_ip = 1290;
                                    continue _fun93531
                                }
                            case 1228:
                                var41 = var39.value;
                                var44 = var42.includes;
                                var0 = var41.ssrc;
                                var0 = var44.bind(var42)(var0);
                                if (var0) {
                                    _fun93531_ip = 1272;
                                    continue _fun93531
                                }
                            case 1252:
                                var0 = _closure3_slot0;
                                var44 = var0.framesReceived;
                                var0 = var41.ssrc;
                                var0 = delete var44[var0];
                            case 1272:
                                var44 = var40.bind(var7)();
                                var0 = var44.done;
                                var39 = var44;
                                var1 = var41;
                                if (!var0) {
                                    _fun93531_ip = 1228;
                                    continue _fun93531
                                }
                            case 1290:
                                var0 = var29.includes;
                                var0 = var0.bind(var29)(var43);
                                if (var0) {
                                    _fun93531_ip = 1367;
                                    continue _fun93531
                                }
                            case 1303:
                                var39 = _closure3_slot0;
                                var39 = var39.remoteVideoSsrcs;
                                var39 = var39[var43];
                                var39 = var7 !== var39;
                                if (!var39) {
                                    _fun93531_ip = 1364;
                                    continue _fun93531
                                }
                            case 1324:
                                var41 = _closure1_slot1;
                                var40 = _closure1_slot2;
                                var40 = var40[var25];
                                var41 = var41.bind(var7)(var40);
                                var40 = _closure3_slot0;
                                var40 = var40.remoteVideoSsrcs;
                                var40 = var40[var43];
                                var40 = var41.bind(var7)(var40, var42);
                                var39 = !var40;
                            case 1364:
                                var0 = var39;
                            case 1367:
                                if (!var0) {
                                    _fun93531_ip = 1447;
                                    continue _fun93531
                                }
                            case 1370:
                                var0 = _closure3_slot0;
                                var39 = var0.remoteVideoSsrcs;
                                var0 = new Array(0);
                                var58 = var0;
                                var57 = var42;
                                var56 = 0;
                                var40 = arraySpread(var58, var57, var56);
                                var39[var43] = var0;
                                var41 = _closure3_slot0;
                                var40 = var41.emit;
                                var0 = _closure1_slot16;
                                var58 = var0.UserSSRCUpdate;
                                var0 = _closure3_slot0;
                                var0 = var0.audioSsrcs;
                                var56 = var0[var43];
                                var59 = var41;
                                var57 = var43;
                                var55 = var42;
                                var0 = var59[var40](var58, var57, var56, var55, var54);
                            case 1447:
                                var39 = var26.bind(var7)();
                                var0 = var39.done;
                                var19 = var39;
                                var18 = var38;
                                var17 = var37;
                                var16 = var36;
                                var15 = var35;
                                var14 = var34;
                                var13 = var33;
                                var12 = var32;
                                var11 = var31;
                                var6 = var30;
                                if (!var0) {
                                    _fun93531_ip = 228;
                                    continue _fun93531
                                }
                            case 1492:
                                var0 = global;
                                var6 = var0.Object;
                                var1 = var6.entries;
                                var0 = _closure3_slot0;
                                var0 = var0.audioSsrcs;
                                var6 = var1.bind(var6)(var0);
                                var0 = var6.length;
                                var0 = var10 < var0;
                                var1 = 0;
                                if (!var0) {
                                    _fun93531_ip = 1604;
                                    continue _fun93531
                                }
                            case 1535:
                                var11 = var6[var1];
                                var0 = _closure1_slot3;
                                var0 = var0.bind(var7)(var11, var8);
                                var14 = var0[var10];
                                var0 = var0[var9];
                                var11 = _closure3_slot0;
                                var13 = var11.connection;
                                var11 = var5 != var13;
                                if (!var11) {
                                    _fun93531_ip = 1585;
                                    continue _fun93531
                                }
                            case 1574:
                                var12 = var13.getLocalMute;
                                var11 = var12.bind(var13)(var14);
                            case 1585:
                                if (!var11) {
                                    _fun93531_ip = 1592;
                                    continue _fun93531
                                }
                            case 1588:
                                var2[var0] = var10;
                            case 1592:
                                var1 = var1 + 1;
                                var0 = var6.length;
                                if (var1 < var0) {
                                    _fun93531_ip = 1535;
                                    continue _fun93531
                                }
                            case 1604:
                                var0 = _closure1_slot15;
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun93531_ip = 1717;
                                    continue _fun93531
                                }
                            case 1615:
                                var0 = var1.connection;
                                var5 = var5 == var0;
                                if (var5) {
                                    _fun93531_ip = 1670;
                                    continue _fun93531
                                }
                            case 1628:
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 15;
                                var0 = var8[var0];
                                var7 = var6.bind(var7)(var0);
                                var6 = var7.isEqual;
                                var0 = _closure3_slot0;
                                var0 = var0.latestWants;
                                var5 = var6.bind(var7)(var0, var2);
                            case 1670:
                                var0 = var2;
                                if (var5) {
                                    _fun93531_ip = 1723;
                                    continue _fun93531
                                }
                            case 1676:
                                var5 = _closure3_slot0;
                                var5.latestWants = var2;
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot16;
                                var3 = var3.Update;
                                var3 = var4.bind(var5)(var3, var2);
                                var0 = var2;
                                _fun93531_ip = 1723;
                                continue _fun93531;
                            case 1717:
                                var0 = var1.latestWants;
                            case 1723:
                                return var0;
                        }
                    };
                    var0.update = var3;
                    var2 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.update;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.incomingVideoEnabledChanged = var2;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var3 = var6[var1];
                    var3 = var2.bind(var5)(var3);
                    var8 = var3.DelayedCall;
                    var13 = var0.update;
                    var3 = var8.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var8
                        }
                    });
                    var14 = 100;
                    var15 = var4;
                    var3 = new var15[var8](var14, var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.delayedCall = var3;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.Timeout;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var3;
                    var1 = new var15[var1](var14);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0.offscreenTimeout = var1;
                    var1 = 17;
                    var3 = var6[var1];
                    var3 = var2.bind(var5)(var3);
                    var4 = var3.WindowVisibilityVideoManager;
                    var3 = var4.on;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.WindowVisibilityEvent;
                    var2 = var1.IncomingVideoEnabledChanged;
                    var1 = var0.incomingVideoEnabledChanged;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'getWantsLevel';
        var4.key = var0;
        var0 = function() {
            _fun93533: for (var _fun93533_ip = 0;;) switch (_fun93533_ip) {
                case 0:
                    var3 = arguments[0];
                    var0 = this;
                    var1 = undefined;
                    if (!(var3 === var1)) {
                        _fun93533_ip = 14;
                        continue _fun93533
                    }
                case 12:
                    var3 = 0;
                case 14:
                    var1 = var0.getVideoParticipantCount;
                    var2 = var1.bind(var0)();
                    var1 = var0.ladder;
                    var0 = var1.getMaxSinkValue;
                    var0 = var0.bind(var1)(var2, var3);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'userVideoDisabled';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var1 = var0.offscreenDisabledUsers;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isOneToOneCall';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.otherUsers;
            var1 = var0.size;
            var0 = 1;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'updateCallUserIds';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = global;
            var3 = var0.Set;
            var0 = var3.prototype;
            var2 = Object.create(var0, {
                constructor: {
                    value: var3
                }
            });
            var5 = arg0;
            var6 = var2;
            var0 = new var6[var3](var5, var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var1.otherUsers = var0;
            var3 = var1.otherUsers;
            var2 = var3.delete;
            var4 = _closure1_slot9;
            var0 = var4.getId;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var0);
            var0 = var1.update;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'shouldReceiveFromUser';
        var4.key = var6;
        var6 = function arg0() {
            _fun93537: for (var _fun93537_ip = 0;;) switch (_fun93537_ip) {
                case 0:
                    var5 = arg0;
                    var3 = this;
                    var4 = var3.connection;
                    var2 = null;
                    var0 = var2 != var4;
                    if (!var0) {
                        _fun93537_ip = 32;
                        continue _fun93537
                    }
                case 21:
                    var1 = var4.getLocalVideoDisabled;
                    var0 = var1.bind(var4)(var5);
                case 32:
                    if (var0) {
                        _fun93537_ip = 99;
                        continue _fun93537
                    }
                case 35:
                    var1 = var3.userVideoDisabled;
                    var1 = var1.bind(var3)(var5);
                    if (!var1) {
                        _fun93537_ip = 96;
                        continue _fun93537
                    }
                case 51:
                    var4 = var3.videoHealthManager;
                    var2 = var2 == var4;
                    var3 = undefined;
                    if (var2) {
                        _fun93537_ip = 79;
                        continue _fun93537
                    }
                case 66:
                    var2 = var4.getCurrentVideoToggleState;
                    var3 = var2.bind(var4)(var5);
                case 79:
                    var2 = _closure1_slot10;
                    var2 = var2.AUTO_PROBING;
                    var1 = var3 !== var2;
                case 96:
                    var0 = var1;
                case 99:
                    var1 = !var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var2 = var0.WindowVisibilityVideoManager;
                    var0 = var2.isIncomingVideoEnabled;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun93537_ip = 149;
                        continue _fun93537
                    }
                case 146:
                    var0 = var1;
                case 149:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAudioSSRCs';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.audioSsrcs;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'setConnection';
        var4.key = var6;
        var6 = function arg0() {
            _fun93539: for (var _fun93539_ip = 0;;) switch (_fun93539_ip) {
                case 0:
                    var1 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun93539_ip = 14;
                        continue _fun93539
                    }
                case 12:
                    var1 = true;
                case 14:
                    var7 = var2.connection;
                    var3 = null;
                    if (!(var3 != var7)) {
                        _fun93539_ip = 79;
                        continue _fun93539
                    }
                case 26:
                    var6 = var7.removeListener;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.LocalVideoDisabled;
                    var4 = var2.handleLocalVideoDisabled;
                    var4 = var6.bind(var7)(var5, var4);
                case 79:
                    var7 = var2.connection;
                    if (!(var3 != var7)) {
                        _fun93539_ip = 142;
                        continue _fun93539
                    }
                case 89:
                    var6 = var7.removeListener;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.LocalMute;
                    var4 = var2.handleLocalMute;
                    var4 = var6.bind(var7)(var5, var4);
                case 142:
                    var7 = var2.connection;
                    if (!(var3 != var7)) {
                        _fun93539_ip = 205;
                        continue _fun93539
                    }
                case 152:
                    var6 = var7.removeListener;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.ActiveSinksChange;
                    var4 = var2.delayedUpdate;
                    var4 = var6.bind(var7)(var5, var4);
                case 205:
                    var4 = arg0;
                    var2.connection = var4;
                    var7 = var2.connection;
                    if (!(var3 != var7)) {
                        _fun93539_ip = 277;
                        continue _fun93539
                    }
                case 224:
                    var6 = var7.addListener;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.LocalVideoDisabled;
                    var4 = var2.handleLocalVideoDisabled;
                    var4 = var6.bind(var7)(var5, var4);
                case 277:
                    var7 = var2.connection;
                    if (!(var3 != var7)) {
                        _fun93539_ip = 340;
                        continue _fun93539
                    }
                case 287:
                    var6 = var7.addListener;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var5 = var4.LocalMute;
                    var4 = var2.handleLocalMute;
                    var4 = var6.bind(var7)(var5, var4);
                case 340:
                    var6 = var2.connection;
                    if (!(var3 != var6)) {
                        _fun93539_ip = 403;
                        continue _fun93539
                    }
                case 350:
                    var5 = var6.addListener;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 18;
                    var3 = var7[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.BaseConnectionEvent;
                    var4 = var3.ActiveSinksChange;
                    var3 = var2.delayedUpdate;
                    var3 = var5.bind(var6)(var4, var3);
                case 403:
                    if (!var1) {
                        _fun93539_ip = 416;
                        continue _fun93539
                    }
                case 406:
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
                case 416:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setAudioSSRC';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93540: for (var _fun93540_ip = 0;;) switch (_fun93540_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun93540_ip = 27;
                        continue _fun93540
                    }
                case 15:
                    var0 = var1.audioSsrcs;
                    var0 = delete var0[var3];
                    _fun93540_ip = 37;
                    continue _fun93540;
                case 27:
                    var0 = var1.audioSsrcs;
                    var0[var3] = var2;
                case 37:
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'setVideoSSRCs';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93541: for (var _fun93541_ip = 0;;) switch (_fun93541_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var2 = this;
                    var4 = var5.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun93542: for (var _fun93542_ip = 0;;) switch (_fun93542_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.active;
                                if (!var0) {
                                    _fun93542_ip = 38;
                                    continue _fun93542
                                }
                            case 12:
                                var3 = var1.ssrc;
                                var1 = null;
                                var4 = var1 != var3;
                                var2 = 0;
                                var1 = 0;
                                if (!var4) {
                                    _fun93542_ip = 34;
                                    continue _fun93542
                                }
                            case 31:
                                var1 = var3;
                            case 34:
                                var0 = var1 > var2;
                            case 38:
                                return var0;
                        }
                    };
                    var4 = var4.bind(var5)(var1);
                    var1 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun93543: for (var _fun93543_ip = 0;;) switch (_fun93543_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = {};
                                var3 = var1.quality;
                                var2 = null;
                                var4 = var2 != var3;
                                var2 = 100;
                                if (!var4) {
                                    _fun93543_ip = 26;
                                    continue _fun93543
                                }
                            case 23:
                                var2 = var3;
                            case 26:
                                var0.quality = var2;
                                var1 = var1.ssrc;
                                var0.ssrc = var1;
                                return var0;
                        }
                    };
                    var1 = var1.bind(var4)(var0);
                    var4 = var1.length;
                    var0 = 0;
                    if (!(!(var4 > var0))) {
                        _fun93541_ip = 226;
                        continue _fun93541
                    }
                case 59:
                    var0 = var2.videoSsrcs;
                    var0 = var0[var3];
                    var6 = undefined;
                    if (!(var6 !== var0)) {
                        _fun93541_ip = 145;
                        continue _fun93541
                    }
                case 75:
                    var4 = _closure1_slot17;
                    var0 = var2.videoSsrcs;
                    var0 = var0[var3];
                    var5 = var4.bind(var6)(var0);
                    var4 = var5.bind(var6)();
                    var0 = var4.done;
                    if (var0) {
                        _fun93541_ip = 145;
                        continue _fun93541
                    }
                case 109:
                    var0 = var4.value;
                    var7 = var0.ssrc;
                    var0 = var2.framesReceived;
                    var0 = delete var0[var7];
                    var7 = var5.bind(var6)();
                    var0 = var7.done;
                    var4 = var7;
                    if (!var0) {
                        _fun93541_ip = 109;
                        continue _fun93541
                    }
                case 145:
                    var0 = var2.remoteVideoSsrcs;
                    var0 = delete var0[var3];
                    var0 = var2.videoSsrcs;
                    var0 = delete var0[var3];
                    var4 = var2.participants;
                    var0 = var4.delete;
                    var0 = var0.bind(var4)(var3);
                    var6 = var2.emit;
                    var0 = _closure1_slot16;
                    var11 = var0.UserSSRCUpdate;
                    var0 = var2.audioSsrcs;
                    var9 = var0[var3];
                    var8 = new Array(0);
                    var12 = var2;
                    var10 = var3;
                    var0 = var12[var6](var11, var10, var9, var8, var7);
                    _fun93541_ip = 252;
                    continue _fun93541;
                case 226:
                    var0 = var2.videoSsrcs;
                    var0[var3] = var1;
                    var1 = var2.participants;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var3);
                case 252:
                    var1 = var2.update;
                    var0 = global;
                    var4 = var0.Array;
                    var3 = var4.from;
                    var0 = var2.participants;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'setFirstFrameReceived';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var3 = var1.framesReceived;
            var2 = true;
            var0 = arg0;
            var3[var0] = var2;
            var0 = var1.update;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'setStreamId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93545: for (var _fun93545_ip = 0;;) switch (_fun93545_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun93545_ip = 60;
                        continue _fun93545
                    }
                case 15:
                    var0 = var1.streamIds;
                    var0 = var3 in var0;
                    if (!var0) {
                        _fun93545_ip = 48;
                        continue _fun93545
                    }
                case 28:
                    var4 = var1.streamPixelCounts;
                    var0 = var1.streamIds;
                    var0 = var0[var3];
                    var0 = delete var4[var0];
                case 48:
                    var0 = var1.streamIds;
                    var0 = delete var0[var3];
                    _fun93545_ip = 70;
                    continue _fun93545;
                case 60:
                    var0 = var1.streamIds;
                    var0[var3] = var2;
                case 70:
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'destroyUser';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var2 = this;
            var0 = var2.audioSsrcs;
            var0 = delete var0[var1];
            var0 = var2.videoSsrcs;
            var0 = delete var0[var1];
            var3 = var2.participants;
            var0 = var3.delete;
            var0 = var0.bind(var3)(var1);
            var3 = var2.streamPixelCounts;
            var0 = var2.streamIds;
            var0 = var0[var1];
            var0 = delete var3[var0];
            var0 = var2.streamIds;
            var0 = delete var0[var1];
            var1 = var2.update;
            var0 = global;
            var4 = var0.Array;
            var3 = var4.from;
            var0 = var2.participants;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var3 = var1.setConnection;
            var2 = null;
            var0 = false;
            var0 = var3.bind(var1)(var2, var0);
            var0 = {};
            var1.audioSsrcs = var0;
            var0 = {};
            var1.videoSsrcs = var0;
            var0 = {};
            var1.remoteVideoSsrcs = var0;
            var0 = {};
            var1.framesReceived = var0;
            var0 = {};
            var1.streamIds = var0;
            var0 = {};
            var1.streamPixelCounts = var0;
            var2 = _closure1_slot12;
            var1.latestWants = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 17;
            var3 = var6[var2];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var4 = var3.WindowVisibilityVideoManager;
            var3 = var4.off;
            var2 = var6[var2];
            var2 = var5.bind(var0)(var2);
            var2 = var2.WindowVisibilityEvent;
            var2 = var2.IncomingVideoEnabledChanged;
            var1 = var1.incomingVideoEnabledChanged;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'setSelectedParticipant';
        var4.key = var6;
        var6 = function arg0() {
            _fun93548: for (var _fun93548_ip = 0;;) switch (_fun93548_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0.selectedParticipantId;
                    if (!(var3 !== var2)) {
                        _fun93548_ip = 180;
                        continue _fun93548
                    }
                case 25:
                    var4 = new Array(0);
                    var5 = var0.selectedParticipantId;
                    var2 = null;
                    var5 = var2 != var5;
                    if (!var5) {
                        _fun93548_ip = 59;
                        continue _fun93548
                    }
                case 44:
                    var7 = var0.selectedParticipantId;
                    var6 = var0.userId;
                    var5 = var7 !== var6;
                case 59:
                    if (!var5) {
                        _fun93548_ip = 78;
                        continue _fun93548
                    }
                case 62:
                    var6 = var4.push;
                    var5 = var0.selectedParticipantId;
                    var5 = var6.bind(var4)(var5);
                case 78:
                    if (!(var2 == var3)) {
                        _fun93548_ip = 90;
                        continue _fun93548
                    }
                case 82:
                    var0.selectedParticipantId = var2;
                    _fun93548_ip = 150;
                    continue _fun93548;
                case 90:
                    var5 = var0.participants;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var3);
                    if (var2) {
                        _fun93548_ip = 134;
                        continue _fun93548
                    }
                case 109:
                    var2 = var0.userId;
                    if (!(var2 === var3)) {
                        _fun93548_ip = 126;
                        continue _fun93548
                    }
                case 118:
                    var0.selectedParticipantId = var3;
                    _fun93548_ip = 150;
                    continue _fun93548;
                case 126:
                    var2 = var0.latestWants;
                    return var2;
                case 134:
                    var0.selectedParticipantId = var3;
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var3);
                case 150:
                    var2 = var0.update;
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun93549: for (var _fun93549_ip = 0;;) switch (_fun93549_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.videoSsrcs;
                                var0 = arg0;
                                var0 = var1[var0];
                                var1 = null;
                                var2 = var1 == var0;
                                var1 = undefined;
                                if (var2) {
                                    _fun93549_ip = 36;
                                    continue _fun93549
                                }
                            case 31:
                                var1 = var0.length;
                            case 36:
                                var0 = 1;
                                var0 = var1 > var0;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var1;
                case 180:
                    var0 = var0.latestWants;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'setPipOpen';
        var4.key = var6;
        var6 = function arg0() {
            _fun93550: for (var _fun93550_ip = 0;;) switch (_fun93550_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var3.pipOpen = var0;
                    var1 = var3.selectedParticipantId;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun93550_ip = 32;
                        continue _fun93550
                    }
                case 24:
                    var0 = var3.latestWants;
                    _fun93550_ip = 57;
                    continue _fun93550;
                case 32:
                    var2 = var3.update;
                    var4 = var3.selectedParticipantId;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = var2.bind(var3)(var1);
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getOffscreenDisabledUsers';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.offscreenDisabledUsers;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'setSimulcastDebugOverride';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = this;
            var4 = var1.simulcastDebugOverrides;
            var3 = var4.set;
            var2 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var0);
            var0 = var1.update;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'setVideoSize';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93553: for (var _fun93553_ip = 0;;) switch (_fun93553_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun93553_ip = 27;
                        continue _fun93553
                    }
                case 15:
                    var0 = var1.streamPixelCounts;
                    var0 = delete var0[var3];
                    _fun93553_ip = 37;
                    continue _fun93553;
                case 27:
                    var0 = var1.streamPixelCounts;
                    var0[var3] = var2;
                case 37:
                    var0 = var1.delayedUpdate;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getVideoParticipantCount';
        var4.key = var6;
        var6 = function() {
            _fun93554: for (var _fun93554_ip = 0;;) switch (_fun93554_ip) {
                case 0:
                    var6 = this;
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = var6.videoSsrcs;
                    var5 = var1.bind(var2)(var0);
                    var1 = var5.length;
                    var0 = 0;
                    var1 = var0 < var1;
                    var4 = null;
                    var3 = 0;
                    var2 = 0;
                    if (!var1) {
                        _fun93554_ip = 102;
                        continue _fun93554
                    }
                case 47:
                    var9 = var5[var2];
                    var8 = var6.connection;
                    var1 = var4 != var8;
                    if (!var1) {
                        _fun93554_ip = 75;
                        continue _fun93554
                    }
                case 64:
                    var7 = var8.getLocalVideoDisabled;
                    var1 = var7.bind(var8)(var9);
                case 75:
                    var7 = var3;
                    if (var1) {
                        _fun93554_ip = 84;
                        continue _fun93554
                    }
                case 81:
                    var7 = var3 + 1;
                case 84:
                    var2 = var2 + 1;
                    var1 = var5.length;
                    var3 = var7;
                    var0 = var3;
                    if (var2 < var1) {
                        _fun93554_ip = 47;
                        continue _fun93554
                    }
                case 102:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getOffscreenTimeoutMs';
        var4.key = var6;
        var6 = function() {
            _fun93555: for (var _fun93555_ip = 0;;) switch (_fun93555_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.isStageChannel;
                    if (var0) {
                        _fun93555_ip = 21;
                        continue _fun93555
                    }
                case 15:
                    var0 = _closure1_slot13;
                    _fun93555_ip = 25;
                    continue _fun93555;
                case 21:
                    var0 = _closure1_slot14;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getSimulcastOverrideQuality';
        var4.key = var6;
        var5 = function arg0() {
            _fun93556: for (var _fun93556_ip = 0;;) switch (_fun93556_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.simulcastDebugOverrides;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun93556_ip = 40;
                        continue _fun93556
                    }
                case 25:
                    var0 = _closure1_slot11;
                    var0 = var0.NO_OVERRIDE;
                    _fun93556_ip = 56;
                    continue _fun93556;
                case 40:
                    var2 = var1.simulcastDebugOverrides;
                    var1 = var2.get;
                    var0 = var1.bind(var2)(var3);
                case 56:
                    return var0;
            }
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var5);
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/RTCMediaSinkWantsManager.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.DEFAULT_WANTS_FULL = var3;
    var2.RTCMediaSinkWantsManagerEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1216, 660, 3510, 667, 3441, 3688, 21, 478, 628, 22, 3630, 8054, 3633, 3707, 2]);