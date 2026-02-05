// modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/GuildPowerupsNotificationsDCF.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun102347: for (var _fun102347_ip = 0;;) switch (_fun102347_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var5 = undefined;
                var2 = var1.bind(var5)(var0);
                var1 = var2.useSelectedDismissibleContent;
                var0 = arg0;
                if (var0) {
                    _fun102347_ip = 42;
                    continue _fun102347
                }
            case 36:
                var0 = new Array(0);
                _fun102347_ip = 85;
                continue _fun102347;
            case 42:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.DismissibleContent;
                var4 = var3.GUILD_POWERUP_PERKS_COACHMARK;
                var3 = new Array(1);
                var3[0] = var4;
                var0 = var3;
            case 85:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.usePerksCoachmarkDCF = var3;
    var3 = function arg0, arg1() {
        _fun102348: for (var _fun102348_ip = 0;;) switch (_fun102348_ip) {
            case 0:
                var3 = arg1;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var6 = undefined;
                var2 = var1.bind(var6)(var0);
                var1 = var2.useSelectedVersionedDismissibleContent;
                var8 = arg0;
                var0 = null;
                if (!var8) {
                    _fun102348_ip = 82;
                    continue _fun102348
                }
            case 41:
                var5 = var3 > var5;
                var0 = null;
                if (!var5) {
                    _fun102348_ip = 82;
                    continue _fun102348
                }
            case 50:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.DismissibleContent;
                var0 = var4.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
            case 82:
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.useNewPerkAvailableCoachmarkDCF = var3;
    var1 = function arg0() {
        _fun102349: for (var _fun102349_ip = 0;;) switch (_fun102349_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var6 = undefined;
                var3 = var1.bind(var6)(var0);
                var2 = var3.useSelectedTimeRecurringDismissibleContent;
                var0 = arg0;
                var1 = null;
                if (!var0) {
                    _fun102349_ip = 70;
                    continue _fun102349
                }
            case 38:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var0 = var0.DismissibleContent;
                var1 = var0.GUILD_POWERUP_NOTIFICATION;
            case 70:
                var0 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.GUILD_POWERUP_NOTIFICATION_COOLDOWN;
                var0.cooldownDurationMs = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useGuildPowerupNotificationDCF = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5961, 1358, 13343, 2]);