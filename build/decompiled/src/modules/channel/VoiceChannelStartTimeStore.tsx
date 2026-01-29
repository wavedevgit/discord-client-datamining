// modules/channel/VoiceChannelStartTimeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun95630: for (var _fun95630_ip = 0;;) switch (_fun95630_ip) {
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
                _fun95630_ip = 76;
                continue _fun95630;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun95633: for (var _fun95633_ip = 0;;) switch (_fun95633_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95633_ip = 45;
                    continue _fun95633
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun95633_ip = 54;
                    continue _fun95633
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun95633_ip = 344;
                    continue _fun95633
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95633_ip = 322;
                    continue _fun95633
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95633_ip = 282;
                    continue _fun95633
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95633_ip = 269;
                    continue _fun95633
                }
            case 109:
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
                    _fun95633_ip = 162;
                    continue _fun95633
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun95633_ip = 178;
                    continue _fun95633
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95633_ip = 248;
                    continue _fun95633
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95633_ip = 248;
                    continue _fun95633
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95633_ip = 233;
                    continue _fun95633
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95633_ip = 246;
                    continue _fun95633
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun95633_ip = 264;
                continue _fun95633;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun95633_ip = 282;
                continue _fun95633;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun95633_ip = 322;
                    continue _fun95633
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun95633_ip = 329;
                    continue _fun95633
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95634: for (var _fun95634_ip = 0;;) switch (_fun95634_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95634_ip = 56;
                                continue _fun95634
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
                            _fun95634_ip = 67;
                            continue _fun95634;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun95635: for (var _fun95635_ip = 0;;) switch (_fun95635_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95635_ip = 23;
                    continue _fun95635
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95635_ip = 33;
                    continue _fun95635
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
                    _fun95635_ip = 70;
                    continue _fun95635
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95635_ip = 55;
                    continue _fun95635
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: _toTimestampMs, environment: var3
        var0 = global;
        var2 = var0.Date;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var1);
        var0 = var0.Millis;
        var1 = var0.SECOND;
        var0 = arg0;
        var4 = var0 * var1;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var1.getTime;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot14 = var0;
    var8 = function() { // Original name: handleConnectionReset, environment: var3
        var1 = _closure1_slot9;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var9 = function(arg0) { // Original name: handleGuildReset, environment: var3
        var2 = _closure1_slot9;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var0.guild;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: VoiceChannelStartTimeStore, environment: var5
            _fun95640: for (var _fun95640_ip = 0;;) switch (_fun95640_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95640_ip = 69;
                        continue _fun95640
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95640_ip = 105;
                    continue _fun95640;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getStartTime';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun95642: for (var _fun95642_ip = 0;;) switch (_fun95642_ip) {
                case 0:
                    var1 = arg0;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun95642_ip = 64;
                        continue _fun95642
                    }
                case 9:
                    var0 = var1.guild_id;
                    if (!(var3 != var0)) {
                        _fun95642_ip = 64;
                        continue _fun95642
                    }
                case 18:
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 9;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ChannelTypes;
                    var4 = var4.GUILD_VOICE;
                    if (!(var5 !== var4)) {
                        _fun95642_ip = 68;
                        continue _fun95642
                    }
                case 64:
                    var4 = undefined;
                    return var4;
                case 68:
                    var4 = _closure1_slot10;
                    var2 = var1.guild_id;
                    var2 = var4[var2];
                    var3 = var3 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun95642_ip = 99;
                        continue _fun95642
                    }
                case 90:
                    var1 = var1.id;
                    var0 = var2[var1];
                case 99:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasRequestedStartTimes';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot9;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VoiceChannelStartTimeStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.GUILD_CREATE = var9;
    var1.GUILD_DELETE = var9;
    var1.CONNECTION_RESUMED = var8;
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleVoiceChannelStartTimeUpdate, environment: var3
        _fun95644: for (var _fun95644_ip = 0;;) switch (_fun95644_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var3 = var0.id;
                var5 = var0.voiceStartTime;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var1 = var2[var0];
                var0 = undefined;
                var1 = var7.bind(var0)(var1);
                var9 = var1.VoiceChannelDurationMobileExperiment;
                var8 = var9.getCurrentConfig;
                var1 = {};
                var1.guildId = var6;
                var10 = 'VoiceChannelStartTimeStore';
                var1.location = var10;
                var1 = var8.bind(var9)(var1);
                var1 = var1.enabled;
                var8 = 8;
                var2 = var2[var8];
                var7 = var7.bind(var0)(var2);
                var2 = var7.isIOS;
                var2 = var2.bind(var7)();
                if (var2) {
                    _fun95644_ip = 137;
                    continue _fun95644
                }
            case 107:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var7 = var7.bind(var0)(var2);
                var2 = var7.isAndroid;
                var2 = var2.bind(var7)();
                if (!var2) {
                    _fun95644_ip = 144;
                    continue _fun95644
                }
            case 137:
                if (var1) {
                    _fun95644_ip = 144;
                    continue _fun95644
                }
            case 140:
                var1 = false;
                return var1;
            case 144:
                var1 = _closure1_slot10;
                var2 = var1[var6];
                var1 = null;
                if (!(var1 == var2)) {
                    _fun95644_ip = 168;
                    continue _fun95644
                }
            case 158:
                var7 = _closure1_slot10;
                var2 = {};
                var7[var6] = var2;
            case 168:
                var2 = _closure1_slot10;
                var2 = var2[var6];
                var6 = var1 != var5;
                var1 = undefined;
                if (!var6) {
                    _fun95644_ip = 194;
                    continue _fun95644
                }
            case 185:
                var4 = _closure1_slot14;
                var1 = var4.bind(var0)(var5);
            case 194:
                var2[var3] = var1;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_START_TIME_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleStartTimes, environment: var3
        _fun95645: for (var _fun95645_ip = 0;;) switch (_fun95645_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var2 = var0.channels;
                var1 = _closure1_slot10;
                var0 = {};
                var1[var6] = var0;
                var1 = _closure1_slot12;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = null;
                if (var1) {
                    _fun95645_ip = 113;
                    continue _fun95645
                }
            case 52:
                var1 = var2.value;
                var8 = var1.id;
                var10 = var1.voiceStartTime;
                var1 = _closure1_slot10;
                var7 = var1[var6];
                var9 = var3 != var10;
                var1 = undefined;
                if (!var9) {
                    _fun95645_ip = 94;
                    continue _fun95645
                }
            case 85:
                var9 = _closure1_slot14;
                var1 = var9.bind(var0)(var10);
            case 94:
                var7[var8] = var1;
                var7 = var4.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun95645_ip = 52;
                    continue _fun95645
                }
            case 113:
                return var0;
        }
    };
    var1.CHANNEL_INFO = var8;
    var3 = function(arg0) { // Original name: handleFetchChannelInfo, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot9;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = _closure1_slot8;
        var0 = var1.getSocket;
        var2 = var0.bind(var1)();
        var1 = var2.requestChannelInfo;
        var0 = ['status', 'voice_start_time'];
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var1.FETCH_CHANNEL_INFO = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/VoiceChannelStartTimeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3433, 667, 12437, 479, 790, 566, 806, 2]);