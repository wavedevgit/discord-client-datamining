// actions/native/CreateGuildActionCreators.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InstantInviteSources;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/CreateGuildActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: showInstantInviteModal, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot2;
        var1 = var2.addConditionalChangeListener;
        var0 = function() { // Environment: var0
            _fun80470: for (var _fun80470_ip = 0;;) switch (_fun80470_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getDefaultChannel;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var _closure3_slot0 = var2;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun80470_ip = 64;
                        continue _fun80470
                    }
                case 40:
                    var2 = global;
                    var3 = var2.setImmediate;
                    var2 = undefined;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.showInstantInviteActionSheet;
                        var2 = _closure3_slot0;
                        var1 = {};
                        var5 = _closure1_slot3;
                        var5 = var5.GUILD_CREATE;
                        var1.source = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var0 = false;
                case 64:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.showInstantInviteModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1662, 660, 8287, 2]);