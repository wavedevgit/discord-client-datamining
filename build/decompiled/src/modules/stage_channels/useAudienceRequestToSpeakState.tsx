// modules/stage_channels/useAudienceRequestToSpeakState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function arg0() {
        _fun38794: for (var _fun38794_ip = 0;;) switch (_fun38794_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun38794_ip = 129;
                    continue _fun38794
                }
            case 9:
                var0 = var1.suppress;
                if (!var0) {
                    _fun38794_ip = 28;
                    continue _fun38794
                }
            case 18:
                var0 = var1.requestToSpeakTimestamp;
                if (!(var2 == var0)) {
                    _fun38794_ip = 114;
                    continue _fun38794
                }
            case 28:
                var0 = var1.suppress;
                if (var0) {
                    _fun38794_ip = 62;
                    continue _fun38794
                }
            case 37:
                var0 = var1.requestToSpeakTimestamp;
                if (!(var2 != var0)) {
                    _fun38794_ip = 62;
                    continue _fun38794
                }
            case 47:
                var0 = _closure1_slot3;
                var0 = var0.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                _fun38794_ip = 112;
                continue _fun38794;
            case 62:
                var3 = var1.suppress;
                if (var3) {
                    _fun38794_ip = 96;
                    continue _fun38794
                }
            case 71:
                var1 = var1.requestToSpeakTimestamp;
                if (!(var2 == var1)) {
                    _fun38794_ip = 96;
                    continue _fun38794
                }
            case 81:
                var1 = _closure1_slot3;
                var1 = var1.ON_STAGE;
                _fun38794_ip = 109;
                continue _fun38794;
            case 96:
                var2 = _closure1_slot3;
                var1 = var2.NONE;
            case 109:
                var0 = var1;
            case 112:
                _fun38794_ip = 127;
                continue _fun38794;
            case 114:
                var1 = _closure1_slot3;
                var0 = var1.REQUESTED_TO_SPEAK;
            case 127:
                _fun38794_ip = 142;
                continue _fun38794;
            case 129:
                var1 = _closure1_slot3;
                var0 = var1.NONE;
            case 142:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var8 = 0;
    var5 = var7[var8];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = {};
    var3.NONE = var8;
    var5 = 'NONE';
    var3[var8] = var5;
    var8 = 1;
    var3.REQUESTED_TO_SPEAK = var8;
    var5 = 'REQUESTED_TO_SPEAK';
    var3[var8] = var5;
    var5 = 2;
    var3.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = var5;
    var8 = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK';
    var3[var5] = var8;
    var9 = 3;
    var3.ON_STAGE = var9;
    var8 = 'ON_STAGE';
    var3[var9] = var8;
    var _closure1_slot3 = var3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/useAudienceRequestToSpeakState.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun38796: for (var _fun38796_ip = 0;;) switch (_fun38796_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun38796_ip = 61;
                        continue _fun38796
                    }
                case 13:
                    var1 = _closure2_slot1;
                    if (!(var2 != var1)) {
                        _fun38796_ip = 61;
                        continue _fun38796
                    }
                case 21:
                    var2 = _closure1_slot4;
                    var4 = _closure1_slot2;
                    var3 = var4.getVoiceStateForChannel;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1, var0);
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    _fun38796_ip = 74;
                    continue _fun38796;
                case 61:
                    var1 = _closure1_slot3;
                    var0 = var1.NONE;
                case 74:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var4;
    var2.RequestToSpeakStates = var3;
    var2.getAudienceRequestToSpeakState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3521, 566, 2]);