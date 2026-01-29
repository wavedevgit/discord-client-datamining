// modules/video_calls/useMuteStates.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0) { // Original name: getMuteStates, environment: var3
        _fun50552: for (var _fun50552_ip = 0;;) switch (_fun50552_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var11 = var0.authenticationStore;
                var2 = undefined;
                if (!(var11 === var2)) {
                    _fun50552_ip = 27;
                    continue _fun50552
                }
            case 20:
                var11 = _closure1_slot3;
            case 27:
                var10 = var0.voiceStateStore;
                if (!(var10 === var2)) {
                    _fun50552_ip = 44;
                    continue _fun50552
                }
            case 37:
                var10 = _closure1_slot6;
            case 44:
                var5 = var0.mediaEngineStore;
                if (!(var5 === var2)) {
                    _fun50552_ip = 61;
                    continue _fun50552
                }
            case 54:
                var5 = _closure1_slot4;
            case 61:
                var7 = var0.permissionStore;
                if (!(var7 === var2)) {
                    _fun50552_ip = 78;
                    continue _fun50552
                }
            case 71:
                var7 = _closure1_slot5;
            case 78:
                var6 = var0.impersonateStore;
                if (!(var6 === var2)) {
                    _fun50552_ip = 95;
                    continue _fun50552
                }
            case 88:
                var6 = _closure1_slot2;
            case 95:
                var1 = null;
                var0 = var1 != var8;
                var3 = null;
                if (!var0) {
                    _fun50552_ip = 138;
                    continue _fun50552
                }
            case 106:
                var9 = var10.getVoiceState;
                var0 = var8.getGuildId;
                var4 = var0.bind(var8)();
                var0 = var11.getId;
                var0 = var0.bind(var11)();
                var3 = var9.bind(var10)(var4, var0);
            case 138:
                var0 = var5.isSelfMute;
                var4 = var0.bind(var5)();
                if (var4) {
                    _fun50552_ip = 161;
                    continue _fun50552
                }
            case 151:
                var0 = var5.isSelfMutedTemporarily;
                var4 = var0.bind(var5)();
            case 161:
                var0 = var1 == var8;
                var5 = undefined;
                if (var0) {
                    _fun50552_ip = 180;
                    continue _fun50552
                }
            case 170:
                var0 = var8.getGuildId;
                var5 = var0.bind(var8)();
            case 180:
                var0 = var6.isViewingRoles;
                var5 = var0.bind(var6)(var5);
                if (!var5) {
                    _fun50552_ip = 222;
                    continue _fun50552
                }
            case 194:
                var6 = var7.can;
                var0 = _closure1_slot7;
                var0 = var0.SPEAK;
                var0 = var6.bind(var7)(var0, var8);
                var5 = !var0;
            case 222:
                var0 = {};
                var0.selfMute = var4;
                var6 = var1 == var3;
                var4 = undefined;
                if (var6) {
                    _fun50552_ip = 244;
                    continue _fun50552
                }
            case 238:
                var4 = var3.suppress;
            case 244:
                if (var4) {
                    _fun50552_ip = 250;
                    continue _fun50552
                }
            case 247:
                var4 = var5;
            case 250:
                var0.suppress = var4;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun50552_ip = 270;
                    continue _fun50552
                }
            case 264:
                var2 = var3.mute;
            case 270:
                var1 = var1 != var2;
                if (!var1) {
                    _fun50552_ip = 280;
                    continue _fun50552
                }
            case 277:
                var1 = var2;
            case 280:
                var0.mute = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/useMuteStates.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: useMuteStates, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = _closure1_slot6;
        var1[1] = var5;
        var5 = _closure1_slot4;
        var1[2] = var5;
        var5 = _closure1_slot5;
        var1[3] = var5;
        var4 = _closure1_slot2;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot8;
            var1 = {};
            var3 = _closure2_slot0;
            var1.channel = var3;
            var3 = _closure1_slot3;
            var1.authenticationStore = var3;
            var3 = _closure1_slot6;
            var1.voiceStateStore = var3;
            var3 = _closure1_slot4;
            var1.mediaEngineStore = var3;
            var3 = _closure1_slot5;
            var1.permissionStore = var3;
            var0 = _closure1_slot2;
            var1.impersonateStore = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.getMuteStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1664, 1216, 3435, 3050, 3480, 660, 566, 2]);