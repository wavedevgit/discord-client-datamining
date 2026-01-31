// modules/go_live/ApplicationStreamingManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun117640: for (var _fun117640_ip = 0;;) switch (_fun117640_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun117640_ip = 46;
                    continue _fun117640
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun117640_ip = 55;
                    continue _fun117640
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun117640_ip = 345;
                    continue _fun117640
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun117640_ip = 323;
                    continue _fun117640
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun117640_ip = 283;
                    continue _fun117640
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun117640_ip = 270;
                    continue _fun117640
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
                    _fun117640_ip = 163;
                    continue _fun117640
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun117640_ip = 179;
                    continue _fun117640
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun117640_ip = 249;
                    continue _fun117640
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun117640_ip = 249;
                    continue _fun117640
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun117640_ip = 234;
                    continue _fun117640
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun117640_ip = 247;
                    continue _fun117640
                }
            case 234:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun117640_ip = 265;
                continue _fun117640;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun117640_ip = 283;
                continue _fun117640;
            case 270:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun117640_ip = 323;
                    continue _fun117640
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
                    _fun117640_ip = 330;
                    continue _fun117640
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun117641: for (var _fun117641_ip = 0;;) switch (_fun117641_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun117641_ip = 56;
                                continue _fun117641
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
                            _fun117641_ip = 67;
                            continue _fun117641;
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
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun117642: for (var _fun117642_ip = 0;;) switch (_fun117642_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun117642_ip = 23;
                    continue _fun117642
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun117642_ip = 33;
                    continue _fun117642
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
                    _fun117642_ip = 70;
                    continue _fun117642
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun117642_ip = 55;
                    continue _fun117642
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun117643: for (var _fun117643_ip = 0;;) switch (_fun117643_ip) {
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
                _fun117643_ip = 76;
                continue _fun117643;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: clearSpectatorReconnectionTimer, environment: var1
        _fun117646: for (var _fun117646_ip = 0;;) switch (_fun117646_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot17;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun117646_ip = 30;
                    continue _fun117646
                }
            case 20:
                var2 = var3.stop;
                var2 = var2.bind(var3)();
            case 30:
                var0 = _closure1_slot17;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0) { // Original name: clearConnectTimeout, environment: var1
        _fun117647: for (var _fun117647_ip = 0;;) switch (_fun117647_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot18;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun117647_ip = 30;
                    continue _fun117647
                }
            case 20:
                var2 = var3.stop;
                var2 = var2.bind(var3)();
            case 30:
                var0 = _closure1_slot18;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: maybeAutowatchStream, environment: var1
        _fun117648: for (var _fun117648_ip = 0;;) switch (_fun117648_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var2 = _closure1_slot13;
                var0 = var2.getVoiceChannelId;
                var0 = var0.bind(var2)();
                if (!(var0 === var3)) {
                    _fun117648_ip = 251;
                    continue _fun117648
                }
            case 30:
                var2 = _closure1_slot10;
                var0 = var2.getChannel;
                var6 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun117648_ip = 247;
                    continue _fun117648
                }
            case 53:
                var2 = var6.isDM;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun117648_ip = 83;
                    continue _fun117648
                }
            case 66:
                var2 = var6.isGuildStageVoice;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun117648_ip = 83;
                    continue _fun117648
                }
            case 79:
                var2 = false;
                return var2;
            case 83:
                var4 = _closure1_slot8;
                var3 = var4.getActiveStreamForUser;
                var2 = var6.getGuildId;
                var2 = var2.bind(var6)();
                var2 = var3.bind(var4)(var5, var2);
                if (!(var0 == var2)) {
                    _fun117648_ip = 243;
                    continue _fun117648
                }
            case 116:
                var4 = _closure1_slot8;
                var3 = var4.getStreamForUser;
                var2 = var6.getGuildId;
                var2 = var2.bind(var6)();
                var5 = var3.bind(var4)(var5, var2);
                if (!(var0 != var5)) {
                    _fun117648_ip = 239;
                    continue _fun117648
                }
            case 146:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 18;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.encodeStreamKey;
                var2 = var0.bind(var2)(var5);
                var0 = _closure1_slot22;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun117648_ip = 237;
                    continue _fun117648
                }
            case 190:
                _closure1_slot22 = var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.watchStream;
                var2 = {};
                var1 = true;
                var2.noFocus = var1;
                var2 = var3.bind(var4)(var5, var2);
                var0 = true;
            case 237:
                return var0;
            case 239:
                var0 = false;
                return var0;
            case 243:
                var0 = false;
                return var0;
            case 247:
                var0 = false;
                return var0;
            case 251:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0, arg1) { // Original name: updateRegion, environment: var1
        _fun117649: for (var _fun117649_ip = 0;;) switch (_fun117649_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun117649_ip = 29;
                    continue _fun117649
                }
            case 12:
                var4 = _closure1_slot12;
                var1 = var4.getPreferredRegion;
                var2 = var1.bind(var4)();
            case 29:
                var0 = var0 != var2;
                if (!var0) {
                    _fun117649_ip = 73;
                    continue _fun117649
                }
            case 36:
                var5 = _closure1_slot12;
                var4 = var5.getRegion;
                var6 = _closure1_slot14;
                var1 = var6.getHostname;
                var1 = var1.bind(var6)(var3);
                var1 = var4.bind(var5)(var1);
                var0 = var2 !== var1;
            case 73:
                if (!var0) {
                    _fun117649_ip = 113;
                    continue _fun117649
                }
            case 76:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.changeStreamRegion;
                var0 = var0.bind(var1)(var3, var2);
            case 113:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1) { // Original name: maybeStartConnectTimeout, environment: var1
        _fun117650: for (var _fun117650_ip = 0;;) switch (_fun117650_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot14;
                var1 = var3.getAllActiveStreamKeys;
                var3 = var1.bind(var3)();
                var1 = var3.includes;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun117650_ip = 143;
                    continue _fun117650
                }
            case 39:
                var1 = _closure1_slot18;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun117650_ip = 101;
                    continue _fun117650
                }
            case 53:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var5);
                var1 = var1.Timeout;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var5;
                var1 = new var9[var1](var8);
                var3 = var1 instanceof Object ? var1 : var5;
            case 101:
                var1 = _closure1_slot18;
                var1[var2] = var3;
                var2 = var3.start;
                var1 = arg1;
                if (var1) {
                    _fun117650_ip = 126;
                    continue _fun117650
                }
            case 120:
                var1 = _closure1_slot20;
                _fun117650_ip = 130;
                continue _fun117650;
            case 126:
                var1 = _closure1_slot21;
            case 130:
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'STREAM_TIMED_OUT';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.streamKey = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
            case 143:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var10 = 3;
    var3 = var5[var10];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var9 = 5;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var7 = 12;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.GO_LIVE_NOTIFY_FRIENDS_MIN_MEMBER_COUNT;
    var3 = var3.STREAM_NOTIFY_GUILD_MAX_SIZE;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ApplicationStreamDeleteReasons;
    var _closure1_slot15 = var8;
    var3 = var3.ApplicationStreamStates;
    var _closure1_slot16 = var3;
    var3 = 15;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var11 = var12.debounce;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.notifyStreamStart;
    var3 = 1000;
    var3 = var11.bind(var12)(var8, var3);
    var3 = {};
    var _closure1_slot17 = var3;
    var3 = {};
    var _closure1_slot18 = var3;
    var3 = 17;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var10 * var8;
    var _closure1_slot19 = var8;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var9 * var8;
    var _closure1_slot20 = var8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var3 = var7 * var3;
    var _closure1_slot21 = var3;
    var3 = null;
    var _closure1_slot22 = var3;
    var3 = 23;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: BaseApplicationStreamingManager, environment: var0
            _fun117653: for (var _fun117653_ip = 0;;) switch (_fun117653_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117653_ip = 86;
                        continue _fun117653
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117653_ip = 120;
                    continue _fun117653;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function(arg0) { // Environment: var1
                        _fun117654: for (var _fun117654_ip = 0;;) switch (_fun117654_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.streamKey;
                                var _closure4_slot0 = var5;
                                var3 = var0.allowMultiple;
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 18;
                                var4 = var4[var0];
                                var0 = undefined;
                                var6 = var6.bind(var0)(var4);
                                var4 = var6.decodeStreamKey;
                                var4 = var4.bind(var6)(var5);
                                var7 = var4.channelId;
                                var6 = _closure1_slot10;
                                var4 = var6.getChannel;
                                var8 = var4.bind(var6)(var7);
                                var6 = _closure1_slot30;
                                var4 = null;
                                var7 = var4 == var8;
                                var4 = undefined;
                                if (var7) {
                                    _fun117654_ip = 101;
                                    continue _fun117654
                                }
                            case 91:
                                var7 = var8.isGuildStageVoice;
                                var4 = var7.bind(var8)();
                            case 101:
                                var4 = var6.bind(var0)(var5, var4);
                                var4 = _closure1_slot26;
                                var4 = var4.bind(var0)(var5);
                                if (var3) {
                                    _fun117654_ip = 150;
                                    continue _fun117654
                                }
                            case 119:
                                var3 = _closure1_slot8;
                                var2 = var3.getAllActiveStreams;
                                var3 = var2.bind(var3)();
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun117655: for (var _fun117655_ip = 0;;) switch (_fun117655_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var0 = 18;
                                            var3 = var3[var0];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var3);
                                            var3 = var4.encodeStreamKey;
                                            var4 = var3.bind(var4)(var2);
                                            var3 = var2.ownerId;
                                            var5 = _closure1_slot9;
                                            var2 = var5.getId;
                                            var2 = var2.bind(var5)();
                                            var2 = var3 !== var2;
                                            if (!var2) {
                                                _fun117655_ip = 77;
                                                continue _fun117655
                                            }
                                        case 66:
                                            var3 = _closure4_slot0;
                                            var2 = var4 !== var3;
                                        case 77:
                                            if (!var2) {
                                                _fun117655_ip = 114;
                                                continue _fun117655
                                            }
                                        case 80:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 16;
                                            var1 = var3[var1];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.stopStream;
                                            var1 = false;
                                            var1 = var2.bind(var3)(var4, var1);
                                        case 114:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                            case 150:
                                return var0;
                        }
                    };
                    var0.handleStreamWatch = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun117656: for (var _fun117656_ip = 0;;) switch (_fun117656_ip) {
                            case 0:
                                var3 = arg0;
                                var8 = var3.channelId;
                                var10 = var3.streamType;
                                var9 = var3.guildId;
                                var1 = _closure1_slot10;
                                var0 = var1.getChannel;
                                var6 = var0.bind(var1)(var8);
                                var4 = _closure1_slot30;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 18;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var2 = var5.encodeStreamKey;
                                var1 = {};
                                var1.streamType = var10;
                                var1.guildId = var9;
                                var1.channelId = var8;
                                var8 = _closure1_slot9;
                                var7 = var8.getId;
                                var7 = var7.bind(var8)();
                                var1.ownerId = var7;
                                var2 = var2.bind(var5)(var1);
                                var1 = null;
                                var5 = var1 == var6;
                                var1 = undefined;
                                if (var5) {
                                    _fun117656_ip = 128;
                                    continue _fun117656
                                }
                            case 118:
                                var5 = var6.isGuildStageVoice;
                                var1 = var5.bind(var6)();
                            case 128:
                                var1 = var4.bind(var0)(var2, var1);
                                var2 = _closure3_slot0;
                                var1 = var2.platformHandleStreamStart;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var0.handleStreamStart = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var4 = var0.streamKey;
                        var2 = _closure1_slot27;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var4);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 18;
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.decodeStreamKey;
                        var2 = var2.bind(var3)(var4);
                        var3 = var2.ownerId;
                        var3 = var2.guildId;
                        var2 = _closure1_slot11;
                        var1 = var2.getMemberCount;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                    };
                    var0.handleStreamCreate = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.streamKey;
                        var1 = _closure1_slot27;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0.handleStreamUpdate = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun117659: for (var _fun117659_ip = 0;;) switch (_fun117659_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.reason;
                                var6 = var0.streamKey;
                                var2 = _closure1_slot27;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var6);
                                var2 = _closure1_slot15;
                                var2 = var2.STREAM_FULL;
                                if (!(var3 === var2)) {
                                    _fun117659_ip = 150;
                                    continue _fun117659
                                }
                            case 43:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 21;
                                var1 = var7[var4];
                                var3 = var5.bind(var0)(var1);
                                var2 = var3.reportAVError;
                                var1 = {};
                                var4 = var7[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.AVError;
                                var4 = var4.STREAM_FULL;
                                var1.type = var4;
                                var4 = 22;
                                var4 = var7[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.getStreamErrorContext;
                                var8 = var4.bind(var5)(var6);
                                var9 = var1;
                                var4 = copyDataProperties(var9, var8);
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot0;
                                var1 = var2.platformShowStreamFull;
                                var1 = var1.bind(var2)();
                            case 150:
                                return var0;
                        }
                    };
                    var0.handleStreamDelete = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.streamKey;
                        var3 = _closure1_slot26;
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var1 = _closure1_slot27;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0.handleStreamClose = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun117661: for (var _fun117661_ip = 0;;) switch (_fun117661_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.channelId;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun117661_ip = 83;
                                    continue _fun117661
                                }
                            case 14:
                                _closure1_slot22 = var2;
                                var4 = _closure1_slot8;
                                var0 = var4.getAllApplicationStreamsForChannel;
                                var5 = var0.bind(var4)(var3);
                                var4 = var5.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.ownerId;
                                    var2 = _closure1_slot9;
                                    var0 = var2.getId;
                                    var0 = var0.bind(var2)();
                                    var0 = var1 !== var0;
                                    return var0;
                                };
                                var4 = var4.bind(var5)(var0);
                                var0 = 0;
                                var0 = var4[var0];
                                if (!(var2 != var0)) {
                                    _fun117661_ip = 83;
                                    continue _fun117661
                                }
                            case 65:
                                var2 = _closure1_slot28;
                                var1 = var0.ownerId;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var3, var1);
                            case 83:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleVoiceChannelSelect = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.voiceStates;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun117664: for (var _fun117664_ip = 0;;) switch (_fun117664_ip) {
                                case 0:
                                    var3 = arg0;
                                    var7 = var3.userId;
                                    var8 = var3.channelId;
                                    var6 = var3.guildId;
                                    var1 = var3.selfStream;
                                    var2 = _closure3_slot0;
                                    var0 = var2.platformHandleVoiceStateUpdate;
                                    var0 = var0.bind(var2)(var3);
                                    var3 = _closure1_slot9;
                                    var0 = var3.getId;
                                    var0 = var0.bind(var3)();
                                    if (!(var7 !== var0)) {
                                        _fun117664_ip = 403;
                                        continue _fun117664
                                    }
                                case 70:
                                    var3 = null;
                                    if (!(var3 != var8)) {
                                        _fun117664_ip = 403;
                                        continue _fun117664
                                    }
                                case 79:
                                    if (!var1) {
                                        _fun117664_ip = 100;
                                        continue _fun117664
                                    }
                                case 82:
                                    var5 = _closure1_slot28;
                                    var0 = undefined;
                                    var5 = var5.bind(var0)(var8, var7);
                                    if (var5) {
                                        _fun117664_ip = 409;
                                        continue _fun117664
                                    }
                                case 100:
                                    var9 = _closure1_slot8;
                                    var5 = var9.getActiveStreamForUser;
                                    var9 = var5.bind(var9)(var7, var6);
                                    if (!(var3 != var9)) {
                                        _fun117664_ip = 403;
                                        continue _fun117664
                                    }
                                case 123:
                                    var5 = var9.channelId;
                                    if (!(var5 === var8)) {
                                        _fun117664_ip = 403;
                                        continue _fun117664
                                    }
                                case 135:
                                    if (var1) {
                                        _fun117664_ip = 288;
                                        continue _fun117664
                                    }
                                case 141:
                                    var8 = var9.state;
                                    var5 = _closure1_slot16;
                                    var5 = var5.ENDED;
                                    if (!(var8 !== var5)) {
                                        _fun117664_ip = 288;
                                        continue _fun117664
                                    }
                                case 163:
                                    var8 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 18;
                                    var5 = var10[var5];
                                    var12 = undefined;
                                    var8 = var8.bind(var12)(var5);
                                    var5 = var8.encodeStreamKey;
                                    var8 = var5.bind(var8)(var9);
                                    var _closure5_slot0 = var8;
                                    var5 = _closure1_slot17;
                                    var5 = var5[var8];
                                    if (!(var3 == var5)) {
                                        _fun117664_ip = 258;
                                        continue _fun117664
                                    }
                                case 212:
                                    var11 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var10 = 19;
                                    var10 = var13[var10];
                                    var10 = var11.bind(var12)(var10);
                                    var10 = var10.Timeout;
                                    var11 = var10.prototype;
                                    var11 = Object.create(var11, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var16 = var11;
                                    var10 = new var16[var10](var15);
                                    var5 = var10 instanceof Object ? var10 : var11;
                                case 258:
                                    var11 = var5.start;
                                    var10 = _closure1_slot19;
                                    var4 = function() { // Environment: var4
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 16;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.closeStream;
                                        var1 = _closure5_slot0;
                                        var0 = false;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var4 = var11.bind(var5)(var10, var4);
                                    var4 = _closure1_slot17;
                                    var4[var8] = var5;
                                case 288:
                                    if (!var1) {
                                        _fun117664_ip = 403;
                                        continue _fun117664
                                    }
                                case 291:
                                    var4 = var9.state;
                                    var1 = _closure1_slot16;
                                    var1 = var1.ENDED;
                                    if (!(var4 === var1)) {
                                        _fun117664_ip = 403;
                                        continue _fun117664
                                    }
                                case 310:
                                    var5 = _closure1_slot26;
                                    var8 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 18;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var8 = var8.bind(var1)(var4);
                                    var4 = var8.encodeStreamKey;
                                    var4 = var4.bind(var8)(var9);
                                    var4 = var5.bind(var1)(var4);
                                    var5 = _closure1_slot8;
                                    var4 = var5.getStreamForUser;
                                    var4 = var4.bind(var5)(var7, var6);
                                    if (!(var3 != var4)) {
                                        _fun117664_ip = 407;
                                        continue _fun117664
                                    }
                                case 372:
                                    var3 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var2 = 16;
                                    var2 = var5[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.watchStream;
                                    var2 = var2.bind(var3)(var4);
                                case 403:
                                    var2 = undefined;
                                    return var2;
                                case 407:
                                    return var1;
                                case 409:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleVoiceStateUpdates = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun117666: for (var _fun117666_ip = 0;;) switch (_fun117666_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.channelId;
                                var3 = var0.region;
                                var2 = _closure1_slot8;
                                var0 = var2.getCurrentUserActiveStream;
                                var5 = var0.bind(var2)();
                                var0 = null;
                                var6 = var0 == var5;
                                var0 = undefined;
                                var2 = undefined;
                                if (var6) {
                                    _fun117666_ip = 49;
                                    continue _fun117666
                                }
                            case 44:
                                var2 = var5.channelId;
                            case 49:
                                if (!(var2 === var4)) {
                                    _fun117666_ip = 94;
                                    continue _fun117666
                                }
                            case 53:
                                var2 = _closure1_slot29;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 18;
                                var1 = var6[var1];
                                var4 = var4.bind(var0)(var1);
                                var1 = var4.encodeStreamKey;
                                var1 = var1.bind(var4)(var5);
                                var1 = var2.bind(var0)(var1, var3);
                            case 94:
                                return var0;
                        }
                    };
                    var0.handleCallUpdate = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun117667: for (var _fun117667_ip = 0;;) switch (_fun117667_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.channels;
                                var2 = _closure1_slot8;
                                var0 = var2.getCurrentUserActiveStream;
                                var5 = var0.bind(var2)();
                                var0 = null;
                                if (!(var0 != var5)) {
                                    _fun117667_ip = 136;
                                    continue _fun117667
                                }
                            case 32:
                                var0 = _closure1_slot23;
                                var4 = undefined;
                                var3 = var0.bind(var4)(var1);
                                var1 = var3.bind(var4)();
                                var0 = var1.done;
                                var2 = 18;
                                if (var0) {
                                    _fun117667_ip = 136;
                                    continue _fun117667
                                }
                            case 58:
                                var0 = var1.value;
                                var8 = var5.channelId;
                                var7 = var0.id;
                                if (!(var8 === var7)) {
                                    _fun117667_ip = 121;
                                    continue _fun117667
                                }
                            case 77:
                                var8 = _closure1_slot29;
                                var9 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var7 = var7[var2];
                                var9 = var9.bind(var4)(var7);
                                var7 = var9.encodeStreamKey;
                                var7 = var7.bind(var9)(var5);
                                var0 = var0.rtcRegion;
                                var0 = var8.bind(var4)(var7, var0);
                            case 121:
                                var7 = var3.bind(var4)();
                                var0 = var7.done;
                                var1 = var7;
                                if (!var0) {
                                    _fun117667_ip = 58;
                                    continue _fun117667
                                }
                            case 136:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleChannelUpdates = var1;
                    var1 = {};
                    var2 = var0.handleStreamWatch;
                    var1.STREAM_WATCH = var2;
                    var2 = var0.handleStreamStart;
                    var1.STREAM_START = var2;
                    var2 = var0.handleStreamCreate;
                    var1.STREAM_CREATE = var2;
                    var2 = var0.handleStreamUpdate;
                    var1.STREAM_UPDATE = var2;
                    var2 = var0.handleStreamDelete;
                    var1.STREAM_DELETE = var2;
                    var2 = var0.handleStreamClose;
                    var1.STREAM_CLOSE = var2;
                    var2 = var0.handleCallUpdate;
                    var1.CALL_UPDATE = var2;
                    var2 = var0.handleChannelUpdates;
                    var1.CHANNEL_UPDATES = var2;
                    var2 = var0.handleVoiceChannelSelect;
                    var1.VOICE_CHANNEL_SELECT = var2;
                    var2 = var0.handleVoiceStateUpdates;
                    var1.VOICE_STATE_UPDATES = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/ApplicationStreamingManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 3673, 1216, 1372, 1599, 3586, 1661, 3568, 1613, 3465, 660, 22, 7975, 667, 3464, 3589, 806, 7967, 14938, 4263, 2]);