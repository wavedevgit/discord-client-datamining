// modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsPages;
    var _closure1_slot4 = var6;
    var3 = var3.InstantInviteSources;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useInviteMembersCallback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useInviteMembersCallback, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun111072: for (var _fun111072_ip = 0;;) switch (_fun111072_ip) {
                case 0:
                    var3 = _closure1_slot3;
                    var1 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var3 = var1.bind(var3)(var0);
                    var0 = null;
                    var1 = var0 != var3;
                    if (!var1) {
                        _fun111072_ip = 142;
                        continue _fun111072
                    }
                case 33:
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    if (var1) {
                        _fun111072_ip = 98;
                        continue _fun111072
                    }
                case 54:
                    var1 = 4;
                    var4 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var4 = var7.showInstantInviteActionSheet;
                    var1 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.VOICE_CHANNEL;
                    var1.source = var8;
                    var1 = var4.bind(var7)(var3, var1);
                    _fun111072_ip = 139;
                    continue _fun111072;
                case 98:
                    var4 = 3;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.navigateToNewGroupDM;
                    var3 = var3.id;
                    var2 = _closure1_slot4;
                    var2 = var2.CHANNEL_CALL;
                    var1 = var4.bind(var5)(var3, var2);
                case 139:
                    var0 = var1;
                case 142:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useInviteMembersCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 660, 3872, 8287, 2]);