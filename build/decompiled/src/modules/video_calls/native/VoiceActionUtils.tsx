// modules/video_calls/native/VoiceActionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var6 = 0;
    var3.SERVER_MUTE = var6;
    var0 = 'SERVER_MUTE';
    var3[var6] = var0;
    var0 = 1;
    var3.SUPPRESS = var0;
    var6 = 'SUPPRESS';
    var3[var0] = var6;
    var7 = 2;
    var3.SELF_MUTE = var7;
    var6 = 'SELF_MUTE';
    var3[var7] = var6;
    var7 = 3;
    var3.NONE = var7;
    var6 = 'NONE';
    var3[var7] = var6;
    var _closure1_slot2 = var3;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/VoiceActionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.DominantMuteState = var3;
    var3 = function arg0() {
        _fun68044: for (var _fun68044_ip = 0;;) switch (_fun68044_ip) {
            case 0:
                var4 = arg0;
                var0 = arguments[1];
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun68044_ip = 14;
                    continue _fun68044
                }
            case 12:
                var0 = false;
            case 14:
                var1 = _closure1_slot2;
                var1 = var1.NONE;
                var2 = var4.selfMute;
                if (!var2) {
                    _fun68044_ip = 46;
                    continue _fun68044
                }
            case 36:
                var2 = _closure1_slot2;
                var1 = var2.SELF_MUTE;
            case 46:
                if (var0) {
                    _fun68044_ip = 76;
                    continue _fun68044
                }
            case 49:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var0 = var2.bind(var6)(var0);
                var2 = var0.handleToggleSelfMute;
                _fun68044_ip = 80;
                continue _fun68044;
            case 76:
                var2 = _closure1_slot3;
            case 80:
                var0 = var4.suppress;
                if (!var0) {
                    _fun68044_ip = 124;
                    continue _fun68044
                }
            case 89:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var2 = var0.showSuppressedAlert;
                var5 = _closure1_slot2;
                var1 = var5.SUPPRESS;
            case 124:
                var0 = var4.mute;
                if (!var0) {
                    _fun68044_ip = 168;
                    continue _fun68044
                }
            case 133:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var2 = var0.showServerMuteAlert;
                var3 = _closure1_slot2;
                var1 = var3.SERVER_MUTE;
            case 168:
                var0 = {};
                var3 = var4.selfMute;
                if (var3) {
                    _fun68044_ip = 185;
                    continue _fun68044
                }
            case 179:
                var3 = var4.mute;
            case 185:
                if (var3) {
                    _fun68044_ip = 194;
                    continue _fun68044
                }
            case 188:
                var3 = var4.suppress;
            case 194:
                var0.mute = var3;
                var0.onPress = var2;
                var0.dominantMuteState = var1;
                return var0;
        }
    };
    var2.createMuteHandler = var3;
    var1 = function arg0() {
        _fun68045: for (var _fun68045_ip = 0;;) switch (_fun68045_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 0;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var1 = var1.handleToggleSelfDeaf;
                var2 = var3.deaf;
                if (!var2) {
                    _fun68045_ip = 65;
                    continue _fun68045
                }
            case 42:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var2.bind(var4)(var0);
                var1 = var0.showServerDeafenAlert;
            case 65:
                var0 = {};
                var2 = var3.selfDeaf;
                if (var2) {
                    _fun68045_ip = 82;
                    continue _fun68045
                }
            case 76:
                var2 = var3.deaf;
            case 82:
                var0.deaf = var2;
                var0.onPress = var1;
                return var0;
        }
    };
    var2.createDeafHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8165, 2]);