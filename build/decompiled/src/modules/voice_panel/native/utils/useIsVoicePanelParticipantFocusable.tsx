// modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1, arg2() {
        _fun110792: for (var _fun110792_ip = 0;;) switch (_fun110792_ip) {
            case 0:
                var6 = arg2;
                var5 = arguments[3];
                var7 = arguments[4];
                var4 = arguments[5];
                var8 = arguments[6];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun110792_ip = 28;
                    continue _fun110792
                }
            case 21:
                var5 = _closure1_slot3;
            case 28:
                if (!(var7 === var0)) {
                    _fun110792_ip = 39;
                    continue _fun110792
                }
            case 32:
                var7 = _closure1_slot5;
            case 39:
                if (!(var4 === var0)) {
                    _fun110792_ip = 50;
                    continue _fun110792
                }
            case 43:
                var4 = _closure1_slot2;
            case 50:
                if (!(var8 === var0)) {
                    _fun110792_ip = 61;
                    continue _fun110792
                }
            case 54:
                var8 = _closure1_slot4;
            case 61:
                var3 = null;
                if (!(var3 != var6)) {
                    _fun110792_ip = 274;
                    continue _fun110792
                }
            case 70:
                var2 = var5.getParticipant;
                var1 = arg1;
                var2 = var2.bind(var5)(var1, var6);
                if (!(var3 != var2)) {
                    _fun110792_ip = 270;
                    continue _fun110792
                }
            case 92:
                var1 = _closure1_slot6;
                var1 = var1.bind(var0)(var2);
                if (var1) {
                    _fun110792_ip = 223;
                    continue _fun110792
                }
            case 107:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)(var2);
                if (var1) {
                    _fun110792_ip = 192;
                    continue _fun110792
                }
            case 119:
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var2);
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                if (var1) {
                    _fun110792_ip = 166;
                    continue _fun110792
                }
            case 139:
                var1 = 6;
                var1 = var9[var1];
                var5 = var6.bind(var0)(var1);
                var1 = var5.assertNever;
                var1 = var1.bind(var5)(var2);
                var1 = undefined;
                _fun110792_ip = 190;
                continue _fun110792;
            case 166:
                var5 = 5;
                var5 = var9[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.canRenderParticipantVideo;
                var1 = var5.bind(var6)(var2, var7);
            case 190:
                _fun110792_ip = 221;
                continue _fun110792;
            case 192:
                var7 = var8.getActiveStreamForUser;
                var5 = var2.user;
                var6 = var5.id;
                var5 = arg0;
                var5 = var7.bind(var8)(var6, var5);
                var1 = var3 != var5;
            case 221:
                return var1;
            case 223:
                var1 = var4.getCurrentEmbeddedActivity;
                var1 = var1.bind(var4)();
                var4 = var3 == var1;
                var0 = undefined;
                if (var4) {
                    _fun110792_ip = 247;
                    continue _fun110792
                }
            case 242:
                var0 = var1.applicationId;
            case 247:
                var0 = var3 != var0;
                if (!var0) {
                    _fun110792_ip = 268;
                    continue _fun110792
                }
            case 254:
                var2 = var2.applicationId;
                var1 = var1.applicationId;
                var0 = var2 === var1;
            case 268:
                return var0;
            case 270:
                var0 = false;
                return var0;
            case 274:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.isActivityParticipant;
    var _closure1_slot6 = var7;
    var7 = var4.isStreamParticipant;
    var _closure1_slot7 = var7;
    var4 = var4.isUserParticipant;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = _closure1_slot5;
        var1[1] = var5;
        var5 = _closure1_slot2;
        var1[2] = var5;
        var4 = _closure1_slot4;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var8 = _closure1_slot9;
            var15 = _closure2_slot0;
            var14 = _closure2_slot1;
            var13 = _closure2_slot2;
            var12 = _closure1_slot3;
            var11 = _closure1_slot5;
            var10 = _closure1_slot2;
            var9 = _closure1_slot4;
            var16 = undefined;
            var0 = var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.isVoicePanelParticipantFocusable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 3948, 3714, 3476, 3523, 8067, 1304, 566, 2]);