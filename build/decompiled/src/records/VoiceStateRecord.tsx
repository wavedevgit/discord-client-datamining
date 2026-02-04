// records/VoiceStateRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun31262: for (var _fun31262_ip = 0;;) switch (_fun31262_ip) {
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
            case 70: // try_end0
                _fun31262_ip = 74;
                continue _fun31262;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun31266: for (var _fun31266_ip = 0;;) switch (_fun31266_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun31266_ip = 65;
                        continue _fun31266
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun31266_ip = 103;
                    continue _fun31266;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.userId;
                    if (var2) {
                        _fun31266_ip = 121;
                        continue _fun31266
                    }
                case 117:
                    var2 = '';
                case 121:
                    var0.userId = var2;
                    var2 = var1.channelId;
                    if (var2) {
                        _fun31266_ip = 137;
                        continue _fun31266
                    }
                case 135:
                    var2 = null;
                case 137:
                    var0.channelId = var2;
                    var2 = var1.sessionId;
                    if (var2) {
                        _fun31266_ip = 154;
                        continue _fun31266
                    }
                case 152:
                    var2 = null;
                case 154:
                    var0.sessionId = var2;
                    var2 = var1.mute;
                    if (var2) {
                        _fun31266_ip = 171;
                        continue _fun31266
                    }
                case 169:
                    var2 = false;
                case 171:
                    var0.mute = var2;
                    var2 = var1.deaf;
                    if (var2) {
                        _fun31266_ip = 188;
                        continue _fun31266
                    }
                case 186:
                    var2 = false;
                case 188:
                    var0.deaf = var2;
                    var2 = var1.selfMute;
                    if (var2) {
                        _fun31266_ip = 205;
                        continue _fun31266
                    }
                case 203:
                    var2 = false;
                case 205:
                    var0.selfMute = var2;
                    var2 = var1.selfDeaf;
                    if (var2) {
                        _fun31266_ip = 222;
                        continue _fun31266
                    }
                case 220:
                    var2 = false;
                case 222:
                    var0.selfDeaf = var2;
                    var2 = var1.selfVideo;
                    if (var2) {
                        _fun31266_ip = 239;
                        continue _fun31266
                    }
                case 237:
                    var2 = false;
                case 239:
                    var0.selfVideo = var2;
                    var2 = var1.selfStream;
                    if (var2) {
                        _fun31266_ip = 256;
                        continue _fun31266
                    }
                case 254:
                    var2 = false;
                case 256:
                    var0.selfStream = var2;
                    var2 = var1.suppress;
                    if (var2) {
                        _fun31266_ip = 273;
                        continue _fun31266
                    }
                case 271:
                    var2 = false;
                case 273:
                    var0.suppress = var2;
                    var2 = var1.requestToSpeakTimestamp;
                    var0.requestToSpeakTimestamp = var2;
                    var2 = var1.discoverable;
                    var1 = null;
                    var1 = var1 == var2;
                    if (var1) {
                        _fun31266_ip = 309;
                        continue _fun31266
                    }
                case 306:
                    var1 = var2;
                case 309:
                    var0.discoverable = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'isVoiceMuted';
        var4.key = var0;
        var0 = function() {
            _fun31267: for (var _fun31267_ip = 0;;) switch (_fun31267_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.selfMute;
                    if (var0) {
                        _fun31267_ip = 18;
                        continue _fun31267
                    }
                case 12:
                    var0 = var1.mute;
                case 18:
                    if (var0) {
                        _fun31267_ip = 27;
                        continue _fun31267
                    }
                case 21:
                    var0 = var1.suppress;
                case 27:
                    if (var0) {
                        _fun31267_ip = 42;
                        continue _fun31267
                    }
                case 30:
                    var2 = var1.requestToSpeakTimestamp;
                    var1 = null;
                    var0 = var1 != var2;
                case 42:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'isVoiceDeafened';
        var4.key = var6;
        var5 = function() {
            _fun31268: for (var _fun31268_ip = 0;;) switch (_fun31268_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.selfDeaf;
                    if (var0) {
                        _fun31268_ip = 18;
                        continue _fun31268
                    }
                case 12:
                    var0 = var1.deaf;
                case 18:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/VoiceStateRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 2]);