// modules/threads/ThreadNotificationSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun69850: for (var _fun69850_ip = 0;;) switch (_fun69850_ip) {
            case 0:
                var2 = arg0;
                var4 = arguments[1];
                var3 = arguments[2];
                var5 = arguments[3];
                var7 = undefined;
                if (!(var4 === var7)) {
                    _fun69850_ip = 25;
                    continue _fun69850
                }
            case 18:
                var4 = _closure1_slot4;
            case 25:
                if (!(var3 === var7)) {
                    _fun69850_ip = 36;
                    continue _fun69850
                }
            case 29:
                var3 = _closure1_slot3;
            case 36:
                if (!(var5 === var7)) {
                    _fun69850_ip = 47;
                    continue _fun69850
                }
            case 40:
                var5 = _closure1_slot2;
            case 47:
                var1 = var4.flags;
                var0 = var2.id;
                var8 = var1.bind(var4)(var0);
                var1 = null;
                if (!(var1 != var8)) {
                    _fun69850_ip = 392;
                    continue _fun69850
                }
            case 71:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 5;
                var4 = var4[var9];
                var10 = var6.bind(var7)(var4);
                var6 = var10.hasFlag;
                var4 = _closure1_slot5;
                var4 = var4.ALL_MESSAGES;
                var4 = var6.bind(var10)(var8, var4);
                if (var4) {
                    _fun69850_ip = 380;
                    continue _fun69850
                }
            case 122:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var10 = var6.bind(var7)(var4);
                var6 = var10.hasFlag;
                var4 = _closure1_slot5;
                var4 = var4.ONLY_MENTIONS;
                var4 = var6.bind(var10)(var8, var4);
                if (var4) {
                    _fun69850_ip = 368;
                    continue _fun69850
                }
            case 167:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var7 = var6.bind(var7)(var4);
                var6 = var7.hasFlag;
                var4 = _closure1_slot5;
                var4 = var4.NO_MESSAGES;
                var4 = var6.bind(var7)(var8, var4);
                if (var4) {
                    _fun69850_ip = 356;
                    continue _fun69850
                }
            case 212:
                var4 = var5.getChannel;
                var2 = var2.parent_id;
                var2 = var4.bind(var5)(var2);
                if (!(var1 != var2)) {
                    _fun69850_ip = 344;
                    continue _fun69850
                }
            case 232:
                var5 = var3.isGuildOrCategoryOrChannelMuted;
                var4 = var2.guild_id;
                var1 = var2.id;
                var1 = var5.bind(var3)(var4, var1);
                if (var1) {
                    _fun69850_ip = 332;
                    continue _fun69850
                }
            case 257:
                var1 = var3.resolvedMessageNotifications;
                var2 = var1.bind(var3)(var2);
                var1 = _closure1_slot6;
                var1 = var1.NO_MESSAGES;
                if (!(var2 !== var1)) {
                    _fun69850_ip = 320;
                    continue _fun69850
                }
            case 282:
                var1 = _closure1_slot6;
                var1 = var1.ONLY_MENTIONS;
                if (!(var2 !== var1)) {
                    _fun69850_ip = 308;
                    continue _fun69850
                }
            case 296:
                var1 = _closure1_slot5;
                var1 = var1.ALL_MESSAGES;
                _fun69850_ip = 318;
                continue _fun69850;
            case 308:
                var2 = _closure1_slot5;
                var1 = var2.ONLY_MENTIONS;
            case 318:
                _fun69850_ip = 330;
                continue _fun69850;
            case 320:
                var2 = _closure1_slot5;
                var1 = var2.NO_MESSAGES;
            case 330:
                return var1;
            case 332:
                var1 = _closure1_slot5;
                var1 = var1.NO_MESSAGES;
                return var1;
            case 344:
                var1 = _closure1_slot5;
                var1 = var1.NO_MESSAGES;
                return var1;
            case 356:
                var1 = _closure1_slot5;
                var1 = var1.NO_MESSAGES;
                return var1;
            case 368:
                var1 = _closure1_slot5;
                var1 = var1.ONLY_MENTIONS;
                return var1;
            case 380:
                var0 = _closure1_slot5;
                var0 = var0.ALL_MESSAGES;
                return var0;
            case 392:
                var0 = _closure1_slot5;
                var0 = var0.NO_MESSAGES;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
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
    var4 = var5.bind(var0)(var4);
    var4 = var4.ThreadMemberFlags;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserNotificationSettings;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadNotificationSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2.computeThreadNotificationSetting = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot3;
        var2[1] = var6;
        var1 = _closure1_slot2;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useThreadNotificationSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 4303, 3093, 1233, 660, 1384, 566, 2]);