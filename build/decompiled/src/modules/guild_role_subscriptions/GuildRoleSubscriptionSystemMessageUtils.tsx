// modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun55586: for (var _fun55586_ip = 0;;) switch (_fun55586_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot3;
                var1 = var2.getGuild;
                var0 = arg0;
                var6 = var1.bind(var2)(var0);
                var1 = null;
                var4 = var1 == var3;
                var0 = undefined;
                if (var4) {
                    _fun55586_ip = 40;
                    continue _fun55586
                }
            case 34:
                var0 = var3.total_months_subscribed;
            case 40:
                var7 = var1 != var0;
                var5 = 0;
                var4 = 0;
                if (!var7) {
                    _fun55586_ip = 54;
                    continue _fun55586
                }
            case 51:
                var4 = var0;
            case 54:
                var0 = {};
                var0.guild = var6;
                var0.totalMonthsSubscribed = var4;
                var4 = var4 > var5;
                var0.showWithDuration = var4;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun55586_ip = 91;
                    continue _fun55586
                }
            case 83:
                var2 = var3.is_renewal;
            case 91:
                var1 = var1 != var2;
                if (!var1) {
                    _fun55586_ip = 101;
                    continue _fun55586
                }
            case 98:
                var1 = var2;
            case 101:
                var0.isRenewal = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun55587: for (var _fun55587_ip = 0;;) switch (_fun55587_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.username;
                var5 = var0.usernameOnClickHandler;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun55587_ip = 27;
                    continue _fun55587
                }
            case 20:
                var5 = _closure1_slot10;
            case 27:
                var6 = var0.roleSubscriptionOnClickHandler;
                if (!(var6 === var3)) {
                    _fun55587_ip = 44;
                    continue _fun55587
                }
            case 37:
                var6 = _closure1_slot9;
            case 44:
                var1 = var0.guildId;
                var4 = var0.roleSubscriptionData;
                var0 = _closure1_slot11;
                var0 = var0.bind(var3)(var1, var4);
                var8 = var0.guild;
                var2 = var0.totalMonthsSubscribed;
                var1 = var0.showWithDuration;
                var9 = var0.isRenewal;
                var0 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 5;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                if (var1) {
                    _fun55587_ip = 144;
                    continue _fun55587
                }
            case 121:
                if (var9) {
                    _fun55587_ip = 134;
                    continue _fun55587
                }
            case 124:
                var1 = var10.mYjFFx;
                _fun55587_ip = 142;
                continue _fun55587;
            case 134:
                var1 = var10.mPTTdv;
            case 142:
                _fun55587_ip = 168;
                continue _fun55587;
            case 144:
                if (var9) {
                    _fun55587_ip = 157;
                    continue _fun55587
                }
            case 147:
                var9 = var10.eCgb2W;
                _fun55587_ip = 165;
                continue _fun55587;
            case 157:
                var9 = var10.Iy66M7;
            case 165:
                var1 = var9;
            case 168:
                var0.content = var1;
                var1 = {};
                var1.username = var7;
                var1.usernameHook = var5;
                var5 = null;
                var9 = var5 == var8;
                var7 = undefined;
                if (var9) {
                    _fun55587_ip = 199;
                    continue _fun55587
                }
            case 194:
                var7 = var8.name;
            case 199:
                var1.guildName = var7;
                var1.handleGuildNameClick = var6;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun55587_ip = 226;
                    continue _fun55587
                }
            case 220:
                var3 = var4.tier_name;
            case 226:
                var1.tierName = var3;
                var1.months = var2;
                var0.formatParams = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.getJoinButtonLabels;
    var _closure1_slot5 = var6;
    var6 = var3.getRenewButtonLabels;
    var _closure1_slot6 = var6;
    var3 = var3.STICKERS;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.NOOP;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55588: for (var _fun55588_ip = 0;;) switch (_fun55588_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var4 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun55588_ip = 34;
                    continue _fun55588
                }
            case 29:
                var5 = var2.id;
            case 34:
                var1 = var1 != var5;
                var2 = 0;
                if (!var1) {
                    _fun55588_ip = 74;
                    continue _fun55588
                }
            case 43:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.extractTimestamp;
                var2 = var1.bind(var3)(var5);
            case 74:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var4 = var3.bind(var4)(var1);
                var3 = var4.extractTimestamp;
                var1 = arg0;
                var1 = var3.bind(var4)(var1);
                var2 = var2 + var1;
                var1 = _closure1_slot7;
                var0 = var1.length;
                var0 = var2 % var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.pickRoleSubscriptionPurchaseSticker = var3;
    var3 = function arg0, arg1() {
        _fun55589: for (var _fun55589_ip = 0;;) switch (_fun55589_ip) {
            case 0:
                var1 = arg1;
                if (var1) {
                    _fun55589_ip = 21;
                    continue _fun55589
                }
            case 9:
                var2 = _closure1_slot5;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun55589_ip = 31;
                continue _fun55589;
            case 21:
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = var3.bind(var2)();
            case 31:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.extractTimestamp;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = var1.length;
                var0 = var2 % var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.getRoleSubscriptionPurchaseStickerCTA = var3;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.username;
        var6 = var0.usernameOnClickHandler;
        var5 = var0.roleSubscriptionOnClickHandler;
        var4 = var0.guildId;
        var3 = var0.roleSubscriptionData;
        var2 = _closure1_slot12;
        var1 = {};
        var1.username = var7;
        var1.usernameOnClickHandler = var6;
        var1.roleSubscriptionOnClickHandler = var5;
        var1.guildId = var4;
        var1.roleSubscriptionData = var3;
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var3 = var1.content;
        var2 = var1.formatParams;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var0 = var5[var0];
        var0 = var1.bind(var4)(var0);
        var1 = var0.intl;
        var0 = var1.format;
        var0 = var0.bind(var1)(var3, var2);
        return var0;
    };
    var2.getRoleSubscriptionPurchaseSystemMessageFormattedContent = var3;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.username;
        var6 = var0.usernameOnClickHandler;
        var5 = var0.roleSubscriptionOnClickHandler;
        var4 = var0.guildId;
        var3 = var0.roleSubscriptionData;
        var2 = _closure1_slot12;
        var1 = {};
        var1.username = var7;
        var1.usernameOnClickHandler = var6;
        var1.roleSubscriptionOnClickHandler = var5;
        var1.guildId = var4;
        var1.roleSubscriptionData = var3;
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var3 = var1.content;
        var2 = var1.formatParams;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var0 = var5[var0];
        var0 = var1.bind(var4)(var0);
        var1 = var0.intl;
        var0 = var1.formatToParts;
        var0 = var0.bind(var1)(var3, var2);
        return var0;
    };
    var2.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent = var3;
    var3 = function arg0() {
        _fun55592: for (var _fun55592_ip = 0;;) switch (_fun55592_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.username;
                var6 = var0.usernameOnClickHandler;
                var8 = undefined;
                if (!(var6 === var8)) {
                    _fun55592_ip = 27;
                    continue _fun55592
                }
            case 20:
                var6 = _closure1_slot10;
            case 27:
                var5 = var0.roleSubscriptionOnClickHandler;
                if (!(var5 === var8)) {
                    _fun55592_ip = 44;
                    continue _fun55592
                }
            case 37:
                var5 = _closure1_slot9;
            case 44:
                var2 = var0.guildId;
                var9 = var0.roleSubscriptionData;
                var1 = _closure1_slot11;
                var1 = var1.bind(var8)(var2, var9);
                var12 = var1.guild;
                var4 = var1.totalMonthsSubscribed;
                var3 = var1.showWithDuration;
                var1 = var1.isRenewal;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 5;
                var10 = var10[var2];
                var10 = var11.bind(var8)(var10);
                var10 = var10.t;
                if (var3) {
                    _fun55592_ip = 142;
                    continue _fun55592
                }
            case 119:
                if (var1) {
                    _fun55592_ip = 132;
                    continue _fun55592
                }
            case 122:
                var3 = var10["6Z1E+7"];
                _fun55592_ip = 140;
                continue _fun55592;
            case 132:
                var3 = var10.OxP1NC;
            case 140:
                _fun55592_ip = 166;
                continue _fun55592;
            case 142:
                if (var1) {
                    _fun55592_ip = 155;
                    continue _fun55592
                }
            case 145:
                var1 = var10["+N9bxq"];
                _fun55592_ip = 163;
                continue _fun55592;
            case 155:
                var1 = var10.OQ0OUy;
            case 163:
                var3 = var1;
            case 166:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var8)(var0);
                var2 = var0.intl;
                var1 = var2.formatToParts;
                var0 = {};
                var10 = null;
                var13 = var10 == var12;
                var11 = undefined;
                if (var13) {
                    _fun55592_ip = 212;
                    continue _fun55592
                }
            case 207:
                var11 = var12.name;
            case 212:
                var0.guildName = var11;
                var10 = var10 == var9;
                var8 = undefined;
                if (var10) {
                    _fun55592_ip = 232;
                    continue _fun55592
                }
            case 226:
                var8 = var9.tier_name;
            case 232:
                var0.tierName = var8;
                var0.username = var7;
                var0.usernameOnClick = var6;
                var0.roleSubscriptionOnClick = var5;
                var0.months = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.getRoleSubscriptionPurchaseSystemMessageContentMobile = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.isCreatorMonetizationEnabledGuild;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun55594: for (var _fun55594_ip = 0;;) switch (_fun55594_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot8;
                var2 = var1.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED;
                var1 = {};
                var6 = arg0;
                var1.guild_id = var6;
                var6 = _closure1_slot4;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun55594_ip = 79;
                    continue _fun55594
                }
            case 74:
                var5 = var6.id;
            case 79:
                var1.user_id = var5;
                var5 = arg1;
                var1.channel_id = var5;
                var5 = arg2;
                var1.message_id = var5;
                var5 = arg3;
                var1.role_subscription_listing_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackRoleSubscriptionPurchaseMessageTierClick = var3;
    var1 = function arg0, arg1() {
        _fun55595: for (var _fun55595_ip = 0;;) switch (_fun55595_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = {};
                var3 = var2.guild_id;
                var0.guild_id = var3;
                var4 = _closure1_slot4;
                var3 = var4.getCurrentUser;
                var4 = var3.bind(var4)();
                var3 = null;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun55595_ip = 49;
                    continue _fun55595
                }
            case 44:
                var3 = var4.id;
            case 49:
                var0.sender = var3;
                var3 = var1.author;
                var3 = var3.id;
                var0.target_user = var3;
                var2 = var2.id;
                var0.channel_id = var2;
                var1 = var1.id;
                var0.message_id = var1;
                return var0;
        }
    };
    var2.getRoleSubscriptionPurchaseSystemMessageEventProperties = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1621, 6692, 660, 21, 1234, 5620, 4302, 2]);