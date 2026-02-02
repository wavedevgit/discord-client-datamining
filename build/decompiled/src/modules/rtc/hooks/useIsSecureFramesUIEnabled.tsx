// modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.END_TO_END_ENCRYPTION_DISABLED;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.channelId;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot2;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun66846: for (var _fun66846_ip = 0;;) switch (_fun66846_ip) {
                case 0:
                    var8 = _closure2_slot0;
                    var0 = _closure1_slot3;
                    var1 = new Array(2);
                    var1[0] = var0;
                    var0 = _closure1_slot2;
                    var1[1] = var0;
                    var3 = undefined;
                    if (!(var1 === var3)) {
                        _fun66846_ip = 59;
                        continue _fun66846
                    }
                case 36:
                    var4 = _closure1_slot3;
                    var0 = new Array(2);
                    var0[0] = var4;
                    var4 = _closure1_slot2;
                    var0[1] = var4;
                    var1 = var0;
                case 59:
                    var4 = var1;
                    var0 = var4[Symbol.iterator];
                    var4 = var0().next;
                    var6 = var4().value;
                    var1 = var0;
                    var1 = var1 === var3;
                    var5 = undefined;
                    if (var1) {
                        _fun66846_ip = 84;
                        continue _fun66846
                    }
                case 81:
                    var5 = var6;
                case 84:
                    var7 = undefined;
                    if (var1) {
                        _fun66846_ip = 114;
                        continue _fun66846
                    }
                case 89:
                    var6 = var4().value;
                    var4 = var0;
                    var4 = var4 === var3;
                    var7 = undefined;
                    var1 = var4;
                    if (var4) {
                        _fun66846_ip = 114;
                        continue _fun66846
                    }
                case 108:
                    var7 = var6;
                    var1 = var4;
                case 114:
                    if (var1) {
                        _fun66846_ip = 120;
                        continue _fun66846
                    }
                case 117:
                    var0.return();
                case 120:
                    var1 = null;
                    var4 = var1 == var8;
                    var0 = false;
                    if (var4) {
                        _fun66846_ip = 224;
                        continue _fun66846
                    }
                case 131:
                    var4 = var5.getChannelId;
                    var4 = var4.bind(var5)();
                    var0 = false;
                    if (!(var4 === var8)) {
                        _fun66846_ip = 224;
                        continue _fun66846
                    }
                case 147:
                    var4 = var7.getChannel;
                    var7 = var4.bind(var7)(var8);
                    var4 = var1 == var7;
                    var0 = false;
                    if (var4) {
                        _fun66846_ip = 224;
                        continue _fun66846
                    }
                case 166:
                    var4 = var7.isGuildStageVoice;
                    var4 = var4.bind(var7)();
                    var0 = false;
                    if (var4) {
                        _fun66846_ip = 224;
                        continue _fun66846
                    }
                case 181:
                    var4 = var5.getSecureFramesState;
                    var4 = var4.bind(var5)();
                    var5 = var1 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun66846_ip = 206;
                        continue _fun66846
                    }
                case 200:
                    var3 = var4.version;
                case 206:
                    var1 = var1 != var3;
                    if (!var1) {
                        _fun66846_ip = 221;
                        continue _fun66846
                    }
                case 213:
                    var2 = _closure1_slot4;
                    var1 = var3 !== var2;
                case 221:
                    var0 = var1;
                case 224:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsSecureFramesUIEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3479, 8226, 566, 2]);