// modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun117542: for (var _fun117542_ip = 0;;) switch (_fun117542_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.voiceChannelId;
                var6 = var0.voiceState;
                var2 = _closure1_slot2;
                var0 = var2.getChannel;
                var5 = var0.bind(var2)(var3);
                var4 = null;
                var3 = var4 == var5;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun117542_ip = 55;
                    continue _fun117542
                }
            case 45:
                var3 = var5.isGuildStageVoice;
                var2 = var3.bind(var5)();
            case 55:
                if (!var2) {
                    _fun117542_ip = 76;
                    continue _fun117542
                }
            case 58:
                var7 = var4 == var6;
                var3 = undefined;
                if (var7) {
                    _fun117542_ip = 73;
                    continue _fun117542
                }
            case 67:
                var3 = var6.suppress;
            case 73:
                var2 = var3;
            case 76:
                var3 = global;
                var7 = var3.Object;
                var6 = var7.keys;
                var8 = _closure1_slot3;
                var3 = var8.getInputDevices;
                var3 = var3.bind(var8)();
                var3 = var6.bind(var7)(var3);
                var7 = var3.length;
                var6 = _closure1_slot4;
                var3 = var6.getMediaSessionId;
                var3 = var3.bind(var6)();
                var6 = 0;
                if (!(var6 === var7)) {
                    _fun117542_ip = 221;
                    continue _fun117542
                }
            case 133:
                if (!(var4 != var5)) {
                    _fun117542_ip = 221;
                    continue _fun117542
                }
            case 137:
                if (!(var4 != var3)) {
                    _fun117542_ip = 221;
                    continue _fun117542
                }
            case 141:
                if (var2) {
                    _fun117542_ip = 221;
                    continue _fun117542
                }
            case 144:
                var2 = {};
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.AVError;
                var1 = var1.NO_INPUT_DEVICES;
                var2.type = var1;
                var1 = 4;
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getVoiceChannelErrorContext;
                var9 = var1.bind(var3)();
                var10 = var2;
                var1 = copyDataProperties(var10, var9);
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            case 221:
                return var0;
        }
    };
    var1.getActiveErrors = var6;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.mediaSessionId;
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = '';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.makeErrorContextKey = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AVErrorNoInputDevicesDefinition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3435, 3477, 7967, 14938, 2]);