// stores/VoiceChannelSettingsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun114692: for (var _fun114692_ip = 0;;) switch (_fun114692_ip) {
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
                _fun114692_ip = 76;
                continue _fun114692;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun114695: for (var _fun114695_ip = 0;;) switch (_fun114695_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun114695_ip = 45;
                    continue _fun114695
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun114695_ip = 54;
                    continue _fun114695
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun114695_ip = 344;
                    continue _fun114695
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun114695_ip = 322;
                    continue _fun114695
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun114695_ip = 282;
                    continue _fun114695
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun114695_ip = 269;
                    continue _fun114695
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
                    _fun114695_ip = 162;
                    continue _fun114695
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun114695_ip = 178;
                    continue _fun114695
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun114695_ip = 248;
                    continue _fun114695
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun114695_ip = 248;
                    continue _fun114695
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun114695_ip = 233;
                    continue _fun114695
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun114695_ip = 246;
                    continue _fun114695
                }
            case 233:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun114695_ip = 264;
                continue _fun114695;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun114695_ip = 282;
                continue _fun114695;
            case 269:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun114695_ip = 322;
                    continue _fun114695
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
                    _fun114695_ip = 329;
                    continue _fun114695
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun114696: for (var _fun114696_ip = 0;;) switch (_fun114696_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun114696_ip = 56;
                                continue _fun114696
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
                            _fun114696_ip = 67;
                            continue _fun114696;
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
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun114697: for (var _fun114697_ip = 0;;) switch (_fun114697_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun114697_ip = 23;
                    continue _fun114697
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun114697_ip = 33;
                    continue _fun114697
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
                    _fun114697_ip = 70;
                    continue _fun114697
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun114697_ip = 55;
                    continue _fun114697
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: updateVoiceSettings, environment: var1
        _fun114698: for (var _fun114698_ip = 0;;) switch (_fun114698_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.getVoiceChannelId;
                var5 = var1.bind(var2)();
                var1 = _closure1_slot8;
                var4 = var1.bitrate;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun114698_ip = 120;
                    continue _fun114698
                }
            case 33:
                var3 = _closure1_slot9;
                var1 = var3.getChannel;
                var5 = var1.bind(var3)(var5);
                var1 = var2 != var5;
                if (!var1) {
                    _fun114698_ip = 64;
                    continue _fun114698
                }
            case 54:
                var3 = var5.bitrate;
                var1 = var4 !== var3;
            case 64:
                if (!var1) {
                    _fun114698_ip = 120;
                    continue _fun114698
                }
            case 67:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.dispatch;
                var1 = {};
                var6 = 'SET_CHANNEL_BITRATE';
                var1.type = var6;
                var5 = var5.bitrate;
                var1.bitrate = var5;
                var1 = var3.bind(var4)(var1);
            case 120:
                var3 = _closure1_slot10;
                var1 = var3.getVoiceChannelId;
                var5 = var1.bind(var3)();
                var1 = _closure1_slot11;
                var1 = var1.mode;
                if (!(var2 != var5)) {
                    _fun114698_ip = 235;
                    continue _fun114698
                }
            case 147:
                var4 = _closure1_slot9;
                var3 = var4.getChannel;
                var3 = var3.bind(var4)(var5);
                if (!(var2 != var3)) {
                    _fun114698_ip = 235;
                    continue _fun114698
                }
            case 165:
                var3 = var3.videoQualityMode;
                if (!(var2 == var3)) {
                    _fun114698_ip = 185;
                    continue _fun114698
                }
            case 175:
                var2 = _closure1_slot12;
                var3 = var2.AUTO;
            case 185:
                if (!(var1 !== var3)) {
                    _fun114698_ip = 235;
                    continue _fun114698
                }
            case 189:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'SET_CHANNEL_VIDEO_QUALITY_MODE';
                var0.type = var4;
                var0.mode = var3;
                var0 = var1.bind(var2)(var0);
            case 235:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: handleChannelUpdates, environment: var1
        _fun114699: for (var _fun114699_ip = 0;;) switch (_fun114699_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channels;
                var1 = _closure1_slot14;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun114699_ip = 86;
                    continue _fun114699
                }
            case 35:
                var1 = var2.value;
                var6 = _closure1_slot10;
                var5 = var6.getVoiceChannelId;
                var5 = var5.bind(var6)();
                var1 = var1.id;
                if (!(var5 === var1)) {
                    _fun114699_ip = 71;
                    continue _fun114699
                }
            case 63:
                var1 = _closure1_slot16;
                var1 = var1.bind(var0)();
            case 71:
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun114699_ip = 35;
                    continue _fun114699
                }
            case 86:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var1
        var0 = arg0;
        var2 = var0.voiceStates;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun114701: for (var _fun114701_ip = 0;;) switch (_fun114701_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getSessionId;
                    var2 = var1.bind(var2)();
                    var1 = arg0;
                    var1 = var1.sessionId;
                    if (!(var2 === var1)) {
                        _fun114701_ip = 40;
                        continue _fun114701
                    }
                case 30:
                    var1 = _closure1_slot16;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot18 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VideoQualityMode;
    var _closure1_slot12 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: VoiceChannelSettingsManager, environment: var0
            _fun114703: for (var _fun114703_ip = 0;;) switch (_fun114703_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114703_ip = 84;
                        continue _fun114703
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114703_ip = 118;
                    continue _fun114703;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot17;
                    var1.CHANNEL_UPDATES = var3;
                    var2 = _closure1_slot18;
                    var1.VOICE_STATE_UPDATES = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/VoiceChannelSettingsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1216, 3475, 1372, 1661, 12273, 660, 806, 4256, 2]);