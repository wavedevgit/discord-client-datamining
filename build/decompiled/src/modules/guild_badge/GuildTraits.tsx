// modules/guild_badge/GuildTraits.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function arg0() {
        _fun59681: for (var _fun59681_ip = 0;;) switch (_fun59681_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                var0 = var2 != var4;
                if (!var0) {
                    _fun59681_ip = 119;
                    continue _fun59681
                }
            case 12:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.isGuildRecord;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun59681_ip = 78;
                    continue _fun59681
                }
            case 51:
                var1 = var4.premiumSubscriptionCount;
                var1 = var2 != var1;
                if (!var1) {
                    _fun59681_ip = 76;
                    continue _fun59681
                }
            case 64:
                var5 = var4.premiumSubscriptionCount;
                var2 = 0;
                var1 = var5 > var2;
            case 76:
                _fun59681_ip = 116;
                continue _fun59681;
            case 78:
                var5 = var4.premiumSubscriberCount;
                var2 = 0;
                var2 = var5 > var2;
                if (var2) {
                    _fun59681_ip = 113;
                    continue _fun59681
                }
            case 93:
                var4 = var4.premiumTier;
                var3 = _closure1_slot3;
                var3 = var3.NONE;
                var2 = var4 > var3;
            case 113:
                var1 = var2;
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var5 = var4.GuildFeatures;
    var _closure1_slot2 = var5;
    var4 = var4.BoostedGuildTiers;
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'PUBLIC';
    var4.PUBLIC = var5;
    var5 = 'INVITE_ONLY';
    var4.INVITE_ONLY = var5;
    var5 = 'APPLY_TO_JOIN';
    var4.APPLY_TO_JOIN = var5;
    var _closure1_slot4 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_badge/GuildTraits.tsx';
    var5 = var6.bind(var7)(var5);
    var2.GuildVisibility = var4;
    var4 = function arg0() {
        _fun59682: for (var _fun59682_ip = 0;;) switch (_fun59682_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var3 = var1.Set;
                var11 = var0.features;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var7 = var1 instanceof Object ? var1 : var2;
                var1 = _closure1_slot4;
                var4 = var1.INVITE_ONLY;
                var2 = var7.has;
                var1 = _closure1_slot2;
                var1 = var1.COMMUNITY;
                var1 = var2.bind(var7)(var1);
                if (!var1) {
                    _fun59682_ip = 96;
                    continue _fun59682
                }
            case 73:
                var2 = var7.has;
                var1 = _closure1_slot2;
                var1 = var1.DISCOVERABLE;
                var1 = var2.bind(var7)(var1);
                if (var1) {
                    _fun59682_ip = 154;
                    continue _fun59682
                }
            case 96:
                var2 = var7.has;
                var1 = _closure1_slot2;
                var1 = var1.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var1 = var2.bind(var7)(var1);
                if (!var1) {
                    _fun59682_ip = 139;
                    continue _fun59682
                }
            case 119:
                var3 = var7.has;
                var2 = _closure1_slot2;
                var2 = var2.MEMBER_VERIFICATION_GATE_ENABLED;
                var1 = var3.bind(var7)(var2);
            case 139:
                if (!var1) {
                    _fun59682_ip = 164;
                    continue _fun59682
                }
            case 142:
                var1 = _closure1_slot4;
                var4 = var1.APPLY_TO_JOIN;
                _fun59682_ip = 164;
                continue _fun59682;
            case 154:
                var1 = _closure1_slot4;
                var4 = var1.PUBLIC;
            case 164:
                var1 = _closure1_slot5;
                var8 = undefined;
                var3 = var1.bind(var8)(var0);
                var2 = 0;
                if (!var3) {
                    _fun59682_ip = 245;
                    continue _fun59682
                }
            case 180:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 1;
                var6 = var10[var6];
                var9 = var9.bind(var8)(var6);
                var6 = var9.isGuildRecord;
                var6 = var6.bind(var9)(var0);
                if (var6) {
                    _fun59682_ip = 222;
                    continue _fun59682
                }
            case 214:
                var6 = var0.premiumSubscriptionCount;
                _fun59682_ip = 228;
                continue _fun59682;
            case 222:
                var6 = var0.premiumSubscriberCount;
            case 228:
                var9 = null;
                var9 = var9 != var6;
                var1 = 0;
                if (!var9) {
                    _fun59682_ip = 242;
                    continue _fun59682
                }
            case 239:
                var1 = var6;
            case 242:
                var2 = var1;
            case 245:
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 1;
                var1 = var9[var1];
                var6 = var6.bind(var8)(var1);
                var1 = var6.isGuildRecord;
                var1 = var1.bind(var6)(var0);
                if (var1) {
                    _fun59682_ip = 291;
                    continue _fun59682
                }
            case 279:
                var1 = _closure1_slot3;
                var1 = var1.NONE;
                _fun59682_ip = 297;
                continue _fun59682;
            case 291:
                var1 = var0.premiumTier;
            case 297:
                var0 = {};
                var8 = var7.has;
                var5 = _closure1_slot2;
                var6 = var5.VERIFIED;
                var6 = var8.bind(var7)(var6);
                var0.verified = var6;
                var8 = var7.has;
                var6 = var5.PARTNERED;
                var6 = var8.bind(var7)(var6);
                var0.partnered = var6;
                var8 = var7.has;
                var6 = var5.COMMUNITY;
                var6 = var8.bind(var7)(var6);
                var0.community = var6;
                var6 = var7.has;
                var5 = var5.INTERNAL_EMPLOYEE_ONLY;
                var5 = var6.bind(var7)(var5);
                var0.staff = var5;
                var0.visibility = var4;
                var0.premium = var3;
                var0.premiumSubscriberCount = var2;
                var0.premiumTier = var1;
                return var0;
        }
    };
    var2.getGuildTraits = var4;
    var2.isPremiumGuild = var3;
    var1 = function arg0() {
        _fun59683: for (var _fun59683_ip = 0;;) switch (_fun59683_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun59683_ip = 69;
                    continue _fun59683
                }
            case 12:
                var2 = global;
                var3 = var2.Set;
                var4 = var1.features;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.has;
                var1 = _closure1_slot2;
                var1 = var1.DISCOVERABLE;
                var0 = var2.bind(var3)(var1);
            case 69:
                return var0;
        }
    };
    var2.isDiscoverableGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1598, 2]);