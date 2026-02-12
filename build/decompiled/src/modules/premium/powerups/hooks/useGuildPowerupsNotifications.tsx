// modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var8 = function arg0, arg1() {
        _fun102752: for (var _fun102752_ip = 0;;) switch (_fun102752_ip) {
            case 0:
                var9 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var9;
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var6 = var1.ReverseOrderedTiers;
                var3 = var6.find;
                var1 = function(arg0) { // Environment: var2
                    _fun102753: for (var _fun102753_ip = 0;;) switch (_fun102753_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var0 = arg0;
                            var4 = var2[var0];
                            var0 = null;
                            var3 = var0 != var4;
                            var2 = undefined;
                            if (!var3) {
                                _fun102753_ip = 42;
                                continue _fun102753
                            }
                        case 25:
                            var3 = _closure2_slot1;
                            var3 = var3.unlockedPowerups;
                            var2 = var3[var4];
                        case 42:
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun102753_ip = 63;
                                continue _fun102753
                            }
                        case 49:
                            var2 = var2.user_id;
                            var1 = _closure1_slot11;
                            var0 = var2 !== var1;
                        case 63:
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var1);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun102752_ip = 215;
                    continue _fun102752
                }
            case 73:
                var3 = _closure1_slot10;
                var8 = var3[var6];
                var _closure2_slot2 = var8;
                if (!(var1 != var8)) {
                    _fun102752_ip = 215;
                    continue _fun102752
                }
            case 92:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 10;
                var3 = var10[var3];
                var7 = var7.bind(var0)(var3);
                var3 = var7.isContentDismissed;
                var3 = var3.bind(var7)(var8, var9);
                if (var3) {
                    _fun102752_ip = 215;
                    continue _fun102752
                }
            case 127:
                var3 = _closure1_slot9;
                var6 = var3[var6];
                var7 = var1 != var6;
                var3 = undefined;
                if (!var7) {
                    _fun102752_ip = 154;
                    continue _fun102752
                }
            case 144:
                var5 = var5.allPowerups;
                var3 = var5[var6];
            case 154:
                if (!(var1 != var3)) {
                    _fun102752_ip = 215;
                    continue _fun102752
                }
            case 158:
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 11;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.GuildPowerupNotificationPopoutType;
                var4 = var4.LEVEL_REACHED;
                var1.type = var4;
                var1.powerup = var3;
                var2 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.markContentAsDismissed;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot0;
                    var8 = true;
                    var7 = arg0;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var1.markAsDismissed = var2;
                return var1;
            case 215:
                return var0;
        }
    };
    var _closure1_slot19 = var8;
    var7 = function arg0, arg1, arg2() {
        _fun102755: for (var _fun102755_ip = 0;;) switch (_fun102755_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var1 = _closure1_slot5;
                var0 = var1.getGuild;
                var2 = var0.bind(var1)(var9);
                var1 = null;
                var4 = var1 == var2;
                var7 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun102755_ip = 59;
                    continue _fun102755
                }
            case 53:
                var0 = var2.premiumTier;
            case 59:
                if (!(var1 == var0)) {
                    _fun102755_ip = 73;
                    continue _fun102755
                }
            case 63:
                var1 = _closure1_slot16;
                var0 = var1.NONE;
            case 73:
                var _closure2_slot3 = var0;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var4 = _closure1_slot12;
                var0 = var4.values;
                var0 = var0.bind(var4)();
                var2 = var1.bind(var2)(var0);
                var1 = var2.flatMap;
                var0 = function(arg0) { // Environment: var3
                    _fun102756: for (var _fun102756_ip = 0;;) switch (_fun102756_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.length;
                            var1 = 0;
                            if (!(!(var3 <= var1))) {
                                _fun102756_ip = 56;
                                continue _fun102756
                            }
                        case 16:
                            var3 = var2.some;
                            var1 = function(arg0) { // Environment: var0
                                _fun102757: for (var _fun102757_ip = 0;;) switch (_fun102757_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = _closure2_slot1;
                                        var0 = var0.unlockedPowerups;
                                        var2 = var0[var3];
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun102757_ip = 54;
                                            continue _fun102757
                                        }
                                    case 26:
                                        var2 = _closure1_slot15;
                                        var2 = var2[var3];
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun102757_ip = 52;
                                            continue _fun102757
                                        }
                                    case 44:
                                        var1 = _closure2_slot3;
                                        var0 = var1 >= var2;
                                    case 52:
                                        return var0;
                                    case 54:
                                        var0 = true;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var2)(var1);
                            if (var1) {
                                _fun102756_ip = 56;
                                continue _fun102756
                            }
                        case 37:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun102758: for (var _fun102758_ip = 0;;) switch (_fun102758_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var1 = var0.allPowerups;
                                        var0 = arg0;
                                        var1 = var1[var0];
                                        var3 = null;
                                        var4 = var3 == var1;
                                        var0 = null;
                                        if (var4) {
                                            _fun102758_ip = 106;
                                            continue _fun102758
                                        }
                                    case 31:
                                        var5 = _closure2_slot2;
                                        var4 = var1.cost;
                                        var4 = var5 < var4;
                                        var0 = null;
                                        if (var4) {
                                            _fun102758_ip = 106;
                                            continue _fun102758
                                        }
                                    case 50:
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var4 = 12;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var6 = var6.bind(var4)(var5);
                                        var5 = var6.isGuildPowerupRollbackEnabled;
                                        var4 = _closure2_slot0;
                                        var2 = 'maybeGetPerkPurchaseablePopoutDCF';
                                        var2 = var5.bind(var6)(var4, var1, var2);
                                        var0 = null;
                                        if (var2) {
                                            _fun102758_ip = 106;
                                            continue _fun102758
                                        }
                                    case 103:
                                        var0 = var1;
                                    case 106:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun102756_ip = 60;
                            continue _fun102756;
                        case 56:
                            var0 = new Array(0);
                        case 60:
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 13;
                var0 = var6[var0];
                var0 = var4.bind(var7)(var0);
                var0 = var0.isNotNullish;
                var4 = var1.bind(var2)(var0);
                var1 = var4.length;
                var0 = 0;
                if (!(var0 === var1)) {
                    _fun102755_ip = 175;
                    continue _fun102755
                }
            case 173:
                return var7;
            case 175:
                var0 = var4.length;
                var2 = 1;
                if (!(var2 === var0)) {
                    _fun102755_ip = 306;
                    continue _fun102755
                }
            case 187:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var6 = var8.bind(var7)(var0);
                var1 = var6.isContentDismissed;
                var0 = 14;
                var0 = var10[var0];
                var0 = var8.bind(var7)(var0);
                var0 = var0.DismissibleGuildContent;
                var0 = var0.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK;
                var0 = var1.bind(var6)(var0, var9);
                if (var0) {
                    _fun102755_ip = 306;
                    continue _fun102755
                }
            case 246:
                var0 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.GuildPowerupNotificationPopoutType;
                var1 = var1.PERKS_PURCHASABLE;
                var0.type = var1;
                var0.powerups = var4;
                var1 = function arg0() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.markContentAsDismissed;
                    var1 = 14;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleGuildContent;
                    var10 = var1.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK;
                    var9 = _closure2_slot0;
                    var8 = true;
                    var7 = arg0;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var0.markAsDismissed = var1;
                _fun102755_ip = 442;
                continue _fun102755;
            case 306:
                var1 = var4.length;
                var2 = var1 > var2;
                var1 = undefined;
                if (!var2) {
                    _fun102755_ip = 439;
                    continue _fun102755
                }
            case 320:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 10;
                var2 = var11[var2];
                var8 = var10.bind(var7)(var2);
                var6 = var8.isContentDismissed;
                var2 = 14;
                var2 = var11[var2];
                var2 = var10.bind(var7)(var2);
                var2 = var2.DismissibleGuildContent;
                var2 = var2.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK;
                var2 = var6.bind(var8)(var2, var9);
                var1 = undefined;
                if (var2) {
                    _fun102755_ip = 439;
                    continue _fun102755
                }
            case 381:
                var2 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 11;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.GuildPowerupNotificationPopoutType;
                var5 = var5.PERKS_PURCHASABLE;
                var2.type = var5;
                var2.powerups = var4;
                var3 = function arg0() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.markContentAsDismissed;
                    var1 = 14;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleGuildContent;
                    var10 = var1.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK;
                    var9 = _closure2_slot0;
                    var8 = true;
                    var7 = arg0;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var2.markAsDismissed = var3;
                var1 = var2;
            case 439:
                var0 = var1;
            case 442:
                return var0;
        }
    };
    var _closure1_slot20 = var7;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun102761: for (var _fun102761_ip = 0;;) switch (_fun102761_ip) {
            case 0:
                var6 = arg0;
                var4 = arg3;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var1);
                var5 = var7.getGameServerEnabled;
                var1 = 'maybeGetGameServerHostingGuildEligiblePopoutDCF';
                var1 = var5.bind(var7)(var6, var1);
                if (!var1) {
                    _fun102761_ip = 194;
                    continue _fun102761
                }
            case 61:
                var1 = arg1;
                if (var1) {
                    _fun102761_ip = 194;
                    continue _fun102761
                }
            case 70:
                var1 = null;
                if (!(var1 != var4)) {
                    _fun102761_ip = 194;
                    continue _fun102761
                }
            case 76:
                var1 = arg2;
                if (!(var1 >= var4)) {
                    _fun102761_ip = 194;
                    continue _fun102761
                }
            case 83:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var5 = var7.bind(var0)(var1);
                var4 = var5.isContentDismissed;
                var1 = 14;
                var1 = var8[var1];
                var1 = var7.bind(var0)(var1);
                var1 = var1.DismissibleGuildContent;
                var1 = var1.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
                var1 = var4.bind(var5)(var1, var6);
                if (var1) {
                    _fun102761_ip = 194;
                    continue _fun102761
                }
            case 142:
                var1 = {};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.GuildPowerupNotificationPopoutType;
                var3 = var3.GAME_SERVER_HOSTING_GUILD_ELIGIBLE;
                var1.type = var3;
                var2 = function arg0() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.markContentAsDismissed;
                    var1 = 14;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleGuildContent;
                    var10 = var1.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
                    var9 = _closure2_slot0;
                    var8 = true;
                    var7 = arg0;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var1.markAsDismissed = var2;
                return var1;
            case 194:
                return var0;
        }
    };
    var _closure1_slot21 = var6;
    var5 = function arg0, arg1() {
        var8 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 16;
        var2 = var10[var2];
        var3 = undefined;
        var4 = var5.bind(var3)(var2);
        var2 = var4.useVanityURLPerkPurchaseEnabled;
        var11 = 'GuildPowerupsChannelRow';
        var9 = var2.bind(var4)(var8, var11);
        var _closure2_slot2 = var9;
        var2 = 15;
        var2 = var10[var2];
        var4 = var5.bind(var3)(var2);
        var2 = var4.useGameServerEnabled;
        var6 = var2.bind(var4)(var8, var11);
        var _closure2_slot3 = var6;
        var2 = 17;
        var2 = var10[var2];
        var4 = var5.bind(var3)(var2);
        var2 = var4.useGuildTagBadgePacksWaveTwoExperimentEnabled;
        var4 = var2.bind(var4)(var8, var11);
        var _closure2_slot4 = var4;
        var2 = 18;
        var2 = var10[var2];
        var10 = var5.bind(var3)(var2);
        var5 = var10.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun102764: for (var _fun102764_ip = 0;;) switch (_fun102764_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun102764_ip = 61;
                        continue _fun102764
                    }
                case 35:
                    var3 = var2.features;
                    var2 = var3.has;
                    var1 = _closure1_slot17;
                    var1 = var1.GAME_SERVERS;
                    var0 = var2.bind(var3)(var1);
                case 61:
                    return var0;
            }
        };
        var5 = var5.bind(var10)(var3, var2);
        var _closure2_slot5 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function() { // Environment: var0
            _fun102765: for (var _fun102765_ip = 0;;) switch (_fun102765_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    if (!var0) {
                        _fun102765_ip = 84;
                        continue _fun102765
                    }
                case 12:
                    var0 = global;
                    var5 = var0.Array;
                    var4 = var5.from;
                    var6 = _closure1_slot14;
                    var3 = _closure1_slot13;
                    var3 = var3.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.some;
                    var3 = function(arg0) { // Environment: var1
                        _fun102766: for (var _fun102766_ip = 0;;) switch (_fun102766_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = null;
                                var3 = var1 == var0;
                                var0 = undefined;
                                if (var3) {
                                    _fun102766_ip = 44;
                                    continue _fun102766
                                }
                            case 18:
                                var2 = _closure2_slot1;
                                var3 = var2.unlockedPowerups;
                                var2 = var1 == var3;
                                var0 = undefined;
                                if (var2) {
                                    _fun102766_ip = 44;
                                    continue _fun102766
                                }
                            case 37:
                                var2 = arg0;
                                var0 = var3[var2];
                            case 44:
                                var0 = var1 != var0;
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    if (var3) {
                        _fun102765_ip = 84;
                        continue _fun102765
                    }
                case 72:
                    var0 = _closure1_slot13;
                    var0 = var0.GUILD_TAG_BADGE_PACKS_WAVE_TWO;
                    return var0;
                case 84:
                    var0 = _closure2_slot3;
                    if (!var0) {
                        _fun102765_ip = 113;
                        continue _fun102765
                    }
                case 91:
                    var0 = _closure2_slot5;
                    if (var0) {
                        _fun102765_ip = 113;
                        continue _fun102765
                    }
                case 98:
                    var0 = _closure1_slot13;
                    var0 = var0.GAME_SERVER_HOSTING;
                    return var0;
                case 113:
                    var0 = global;
                    var5 = var0.Array;
                    var4 = var5.from;
                    var6 = _closure1_slot14;
                    var3 = _closure1_slot13;
                    var3 = var3.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.some;
                    var1 = function(arg0) { // Environment: var1
                        _fun102767: for (var _fun102767_ip = 0;;) switch (_fun102767_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = null;
                                var3 = var1 == var0;
                                var0 = undefined;
                                if (var3) {
                                    _fun102767_ip = 44;
                                    continue _fun102767
                                }
                            case 18:
                                var2 = _closure2_slot1;
                                var3 = var2.unlockedPowerups;
                                var2 = var1 == var3;
                                var0 = undefined;
                                if (var2) {
                                    _fun102767_ip = 44;
                                    continue _fun102767
                                }
                            case 37:
                                var2 = arg0;
                                var0 = var3[var2];
                            case 44:
                                var0 = var1 != var0;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    if (var1) {
                        _fun102765_ip = 185;
                        continue _fun102765
                    }
                case 173:
                    var1 = _closure1_slot13;
                    var1 = var1.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                    return var1;
                case 185:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun102765_ip = 354;
                        continue _fun102765
                    }
                case 195:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var6 = var1.VANITY_URL_POWERUP_SKU_ID;
                    var1 = _closure1_slot15;
                    var3 = var1[var6];
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    if (var5) {
                        _fun102765_ip = 269;
                        continue _fun102765
                    }
                case 246:
                    var5 = _closure2_slot1;
                    var5 = var5.unlockedPowerups;
                    var8 = var4 == var5;
                    var1 = undefined;
                    if (var8) {
                        _fun102765_ip = 269;
                        continue _fun102765
                    }
                case 265:
                    var1 = var5[var6];
                case 269:
                    var1 = var4 != var1;
                    if (!(var4 == var3)) {
                        _fun102765_ip = 292;
                        continue _fun102765
                    }
                case 277:
                    if (var1) {
                        _fun102765_ip = 292;
                        continue _fun102765
                    }
                case 280:
                    var5 = _closure1_slot13;
                    var5 = var5.VANITY_URL;
                    return var5;
                case 292:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.getGuildTierFromGuild;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    if (!(var4 != var2)) {
                        _fun102765_ip = 354;
                        continue _fun102765
                    }
                case 331:
                    if (!(var4 != var3)) {
                        _fun102765_ip = 354;
                        continue _fun102765
                    }
                case 335:
                    if (!(var2 < var3)) {
                        _fun102765_ip = 354;
                        continue _fun102765
                    }
                case 339:
                    if (var1) {
                        _fun102765_ip = 354;
                        continue _fun102765
                    }
                case 342:
                    var0 = _closure1_slot13;
                    var0 = var0.VANITY_URL;
                    return var0;
                case 354:
                    var0 = 0;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun102768: for (var _fun102768_ip = 0;;) switch (_fun102768_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var10 = arg2;
                var _closure2_slot0 = var9;
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var10;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 20;
                var2 = var12[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)(var9);
                var6 = var2.available;
                var _closure2_slot3 = var6;
                var2 = 21;
                var2 = var12[var2];
                var3 = var3.bind(var4)(var2);
                var2 = 'useGuildPowerupsNotificationIndicator';
                var2 = var3.bind(var4)(var9, var2);
                var7 = var2.shouldShow;
                var11 = _closure1_slot0;
                var2 = 22;
                var2 = var12[var2];
                var5 = var11.bind(var4)(var2);
                var3 = var5.useIsSingleUseGuildDismissibleContentDismissed;
                var2 = 14;
                var2 = var12[var2];
                var2 = var11.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION;
                var2 = var3.bind(var5)(var2, var9);
                if (!var7) {
                    _fun102768_ip = 151;
                    continue _fun102768
                }
            case 148:
                var7 = !var2;
            case 151:
                var _closure2_slot4 = var7;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var9 = var3.bind(var4)(var2);
                var5 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var9)(var3, var2);
                var _closure2_slot5 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(6);
                var1[0] = var6;
                var6 = null;
                var11 = var6 == var10;
                var9 = undefined;
                if (var11) {
                    _fun102768_ip = 243;
                    continue _fun102768
                }
            case 237:
                var9 = var10.lastBoostCount;
            case 243:
                var1[1] = var9;
                var11 = var6 == var10;
                var9 = undefined;
                if (var11) {
                    _fun102768_ip = 262;
                    continue _fun102768
                }
            case 256:
                var9 = var10.lastSeenWarningNotification;
            case 262:
                var1[2] = var9;
                var1[3] = var8;
                var1[4] = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun102768_ip = 289;
                    continue _fun102768
                }
            case 283:
                var4 = var5.entitlements;
            case 289:
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    _fun102770: for (var _fun102770_ip = 0;;) switch (_fun102770_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun102770_ip = 478;
                                continue _fun102770
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            var9 = var0.unlockedPowerups;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 23;
                            var0 = var5[var0];
                            var5 = undefined;
                            var8 = var4.bind(var5)(var0);
                            var7 = var8.getExpiringGuildEntitlements;
                            var4 = global;
                            var6 = var4.Object;
                            var0 = var6.values;
                            var15 = var0.bind(var6)(var9);
                            var6 = new Array(0);
                            var0 = 0;
                            var16 = var6;
                            var14 = 0;
                            var10 = arraySpread(var16, var15, var14);
                            var12 = var4.Object;
                            var11 = var12.values;
                            var9 = _closure2_slot5;
                            var13 = var2 == var9;
                            var9 = undefined;
                            if (var13) {
                                _fun102770_ip = 124;
                                continue _fun102770
                            }
                        case 114:
                            var13 = _closure2_slot5;
                            var9 = var13.entitlements;
                        case 124:
                            if (!(var2 == var9)) {
                                _fun102770_ip = 130;
                                continue _fun102770
                            }
                        case 128:
                            var9 = {};
                        case 130:
                            var15 = var11.bind(var12)(var9);
                            var16 = var6;
                            var14 = var10;
                            var9 = arraySpread(var16, var15, var14);
                            var6 = var7.bind(var8)(var6);
                            var7 = _closure2_slot2;
                            var8 = var2 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun102770_ip = 173;
                                continue _fun102770
                            }
                        case 163:
                            var8 = _closure2_slot2;
                            var7 = var8.lastSeenWarningNotification;
                        case 173:
                            if (!(var2 == var7)) {
                                _fun102770_ip = 192;
                                continue _fun102770
                            }
                        case 177:
                            var9 = var4.Date;
                            var8 = var9.now;
                            var7 = var8.bind(var9)();
                        case 192:
                            var9 = var4.Date;
                            var8 = var6.length;
                            var4 = 1;
                            var4 = var8 - var4;
                            var8 = var6[var4];
                            var10 = var2 == var8;
                            var4 = undefined;
                            if (var10) {
                                _fun102770_ip = 229;
                                continue _fun102770
                            }
                        case 223:
                            var4 = var8.ends_at;
                        case 229:
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var17 = var8;
                            var16 = var4;
                            var4 = new var17[var9](var16, var15);
                            var8 = var4 instanceof Object ? var4 : var8;
                            var4 = var8.getTime;
                            var4 = var4.bind(var8)();
                            var8 = _closure2_slot2;
                            var9 = var2 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun102770_ip = 285;
                                continue _fun102770
                            }
                        case 275:
                            var9 = _closure2_slot2;
                            var8 = var9.lastBoostCount;
                        case 285:
                            var9 = var2 != var8;
                            var2 = 0;
                            if (!var9) {
                                _fun102770_ip = 297;
                                continue _fun102770
                            }
                        case 294:
                            var2 = var8;
                        case 297:
                            var6 = var6.length;
                            var6 = var6 > var0;
                            if (!var6) {
                                _fun102770_ip = 313;
                                continue _fun102770
                            }
                        case 309:
                            var6 = var7 < var4;
                        case 313:
                            var4 = _closure2_slot3;
                            var4 = var4 - var2;
                            if (var6) {
                                _fun102770_ip = 421;
                                continue _fun102770
                            }
                        case 324:
                            var6 = _closure2_slot4;
                            if (var6) {
                                _fun102770_ip = 421;
                                continue _fun102770
                            }
                        case 331:
                            var1 = _closure2_slot3;
                            if (!(var1 !== var2)) {
                                _fun102770_ip = 343;
                                continue _fun102770
                            }
                        case 339:
                            if (!(!(var4 > var0))) {
                                _fun102770_ip = 359;
                                continue _fun102770
                            }
                        case 343:
                            var0 = {};
                            var0.indicator = var5;
                            var1 = false;
                            var0.showUnread = var1;
                            _fun102770_ip = 419;
                            continue _fun102770;
                        case 359:
                            var1 = {};
                            var2 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 11;
                            var6 = var8[var6];
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.GuildPowerupNotificationIndicatorType;
                            var6 = var6.UNREAD;
                            var2.type = var6;
                            var2.count = var4;
                            var1.indicator = var2;
                            var2 = true;
                            var1.showUnread = var2;
                            var0 = var1;
                        case 419:
                            _fun102770_ip = 476;
                            continue _fun102770;
                        case 421:
                            var1 = {};
                            var2 = {};
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 11;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.GuildPowerupNotificationIndicatorType;
                            var3 = var3.WARNING;
                            var2.type = var3;
                            var1.indicator = var2;
                            var2 = true;
                            var1.showUnread = var2;
                            var0 = var1;
                        case 476:
                            return var0;
                        case 478:
                            var0 = {};
                            var1 = undefined;
                            var0.indicator = var1;
                            var1 = false;
                            var0.showUnread = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot23 = var4;
    var3 = function arg0, arg1() {
        _fun102771: for (var _fun102771_ip = 0;;) switch (_fun102771_ip) {
            case 0:
                var25 = arg0;
                var15 = arg1;
                var _closure2_slot0 = var25;
                var _closure2_slot1 = var15;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var19 = 24;
                var2 = var4[var19];
                var17 = undefined;
                var7 = var5.bind(var17)(var2);
                var6 = var7.usePerksCoachmarkDCF;
                var2 = null;
                var3 = var2 != var15;
                var6 = var6.bind(var7)(var3);
                var3 = _closure1_slot3;
                var16 = 2;
                var6 = var3.bind(var17)(var6, var16);
                var10 = 0;
                var8 = var6[var10];
                var3 = 1;
                var13 = var6[var3];
                var _closure2_slot2 = var13;
                var6 = 14;
                var7 = var4[var6];
                var7 = var5.bind(var17)(var7);
                var7 = var7.DismissibleContent;
                var7 = var7.GUILD_POWERUP_PERKS_COACHMARK;
                var14 = var8 === var7;
                var _closure2_slot3 = var14;
                var8 = _closure1_slot1;
                var7 = 20;
                var7 = var4[var7];
                var7 = var8.bind(var17)(var7);
                var7 = var7.bind(var17)(var25);
                var24 = var7.available;
                var _closure2_slot4 = var24;
                var7 = 18;
                var8 = var4[var7];
                var12 = var5.bind(var17)(var8);
                var11 = var12.useStateFromStores;
                var8 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    _fun102772: for (var _fun102772_ip = 0;;) switch (_fun102772_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var1 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var3 = var1.bind(var3)(var0);
                            var0 = null;
                            var4 = var0 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun102772_ip = 61;
                                continue _fun102772
                            }
                        case 35:
                            var4 = var3.features;
                            var3 = var4.has;
                            var2 = _closure1_slot17;
                            var2 = var2.GAME_SERVERS;
                            var1 = var3.bind(var4)(var2);
                        case 61:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun102772_ip = 71;
                                continue _fun102772
                            }
                        case 68:
                            var0 = var1;
                        case 71:
                            return var0;
                    }
                };
                var23 = var11.bind(var12)(var9, var8);
                var _closure2_slot5 = var23;
                var7 = var4[var7];
                var11 = var5.bind(var17)(var7);
                var9 = var11.useStateFromStores;
                var7 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getLowestGameCostForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var9.bind(var11)(var8, var7);
                var _closure2_slot6 = var12;
                var7 = _closure1_slot22;
                var7 = var7.bind(var17)(var25, var15);
                var _closure2_slot7 = var7;
                var4 = var4[var19];
                var8 = var5.bind(var17)(var4);
                var5 = var8.useNewPerkAvailableCoachmarkDCF;
                var4 = var2 != var15;
                if (!var4) {
                    _fun102771_ip = 279;
                    continue _fun102771
                }
            case 276:
                var4 = !var14;
            case 279:
                var5 = var5.bind(var8)(var4, var7);
                var4 = _closure1_slot3;
                var4 = var4.bind(var17)(var5, var16);
                var9 = var4[var10];
                var8 = var4[var3];
                var _closure2_slot8 = var8;
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var6];
                var5 = var11.bind(var17)(var5);
                var5 = var5.DismissibleContent;
                var5 = var5.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
                var9 = var9 === var5;
                var _closure2_slot9 = var9;
                var18 = _closure1_slot1;
                var5 = 25;
                var5 = var4[var5];
                var5 = var18.bind(var17)(var5);
                var5 = var5.bind(var17)(var25);
                var _closure2_slot10 = var5;
                var4 = var4[var19];
                var18 = var11.bind(var17)(var4);
                var11 = var18.useBoostToUnlockCoachmarkDCF;
                var4 = var2 != var15;
                if (!var4) {
                    _fun102771_ip = 394;
                    continue _fun102771
                }
            case 391:
                var4 = !var14;
            case 394:
                if (!var4) {
                    _fun102771_ip = 400;
                    continue _fun102771
                }
            case 397:
                var4 = !var9;
            case 400:
                if (!var4) {
                    _fun102771_ip = 407;
                    continue _fun102771
                }
            case 403:
                var4 = var2 != var5;
            case 407:
                var11 = var11.bind(var18)(var4, var25);
                var4 = _closure1_slot3;
                var4 = var4.bind(var17)(var11, var16);
                var20 = var4[var10];
                var4 = var4[var3];
                var _closure2_slot11 = var4;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var6];
                var6 = var18.bind(var17)(var6);
                var6 = var6.DismissibleContent;
                var6 = var6.BOOST_TO_UNLOCK_COACHMARK;
                var6 = var20 === var6;
                var _closure2_slot12 = var6;
                var22 = _closure1_slot4;
                var21 = var22.useMemo;
                var20 = new Array(8);
                var20[0] = var25;
                var20[1] = var15;
                var20[2] = var14;
                var20[3] = var9;
                var20[4] = var6;
                var20[5] = var24;
                var20[6] = var23;
                var20[7] = var12;
                var12 = function() { // Environment: var0
                    _fun102774: for (var _fun102774_ip = 0;;) switch (_fun102774_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun102774_ip = 132;
                                continue _fun102774
                            }
                        case 13:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun102774_ip = 132;
                                continue _fun102774
                            }
                        case 20:
                            var0 = _closure2_slot9;
                            if (var0) {
                                _fun102774_ip = 132;
                                continue _fun102774
                            }
                        case 27:
                            var0 = _closure2_slot12;
                            if (var0) {
                                _fun102774_ip = 132;
                                continue _fun102774
                            }
                        case 34:
                            var6 = _closure1_slot19;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var2 = undefined;
                            var0 = var6.bind(var2)(var1, var0);
                            if (!(var4 == var0)) {
                                _fun102774_ip = 130;
                                continue _fun102774
                            }
                        case 61:
                            var8 = _closure1_slot20;
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot1;
                            var1 = _closure2_slot4;
                            var1 = var8.bind(var2)(var7, var6, var1);
                            if (!(var4 == var1)) {
                                _fun102774_ip = 128;
                                continue _fun102774
                            }
                        case 88:
                            var8 = _closure1_slot21;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot5;
                            var10 = _closure2_slot4;
                            var9 = _closure2_slot6;
                            var13 = undefined;
                            var3 = var13[var8](var12, var11, var10, var9, var8);
                            var4 = var4 != var3;
                            var2 = undefined;
                            if (!var4) {
                                _fun102774_ip = 126;
                                continue _fun102774
                            }
                        case 123:
                            var2 = var3;
                        case 126:
                            return var2;
                        case 128:
                            return var1;
                        case 130:
                            return var0;
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var21.bind(var22)(var12, var20);
                var _closure2_slot13 = var12;
                var11 = var11[var19];
                var18 = var18.bind(var17)(var11);
                var11 = var18.useGuildPowerupNotificationDCF;
                var2 = var2 != var12;
                var11 = var11.bind(var18)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var17)(var11, var16);
                var11 = var2[var10];
                var _closure2_slot14 = var11;
                var10 = var2[var3];
                var _closure2_slot15 = var10;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(12);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var13;
                var1[3] = var12;
                var1[4] = var11;
                var1[5] = var10;
                var1[6] = var9;
                var1[7] = var8;
                var1[8] = var7;
                var1[9] = var6;
                var1[10] = var5;
                var1[11] = var4;
                var0 = function() { // Environment: var0
                    _fun102775: for (var _fun102775_ip = 0;;) switch (_fun102775_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var5 = null;
                            if (!(var5 == var2)) {
                                _fun102775_ip = 19;
                                continue _fun102775
                            }
                        case 15:
                            var2 = undefined;
                            return var2;
                        case 19:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun102775_ip = 421;
                                continue _fun102775
                            }
                        case 29:
                            var2 = _closure2_slot9;
                            if (var2) {
                                _fun102775_ip = 214;
                                continue _fun102775
                            }
                        case 39:
                            var2 = _closure2_slot12;
                            if (!var2) {
                                _fun102775_ip = 54;
                                continue _fun102775
                            }
                        case 46:
                            var2 = _closure2_slot10;
                            if (!(var5 == var2)) {
                                _fun102775_ip = 148;
                                continue _fun102775
                            }
                        case 54:
                            var6 = _closure2_slot14;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.DismissibleContent;
                            var3 = var2.GUILD_POWERUP_NOTIFICATION;
                            var2 = undefined;
                            if (!(var6 === var3)) {
                                _fun102775_ip = 146;
                                continue _fun102775
                            }
                        case 101:
                            var3 = _closure2_slot13;
                            var3 = var5 != var3;
                            var2 = undefined;
                            if (!var3) {
                                _fun102775_ip = 146;
                                continue _fun102775
                            }
                        case 114:
                            var3 = {};
                            var7 = _closure2_slot13;
                            var8 = var3;
                            var4 = copyDataProperties(var8, var7);
                            var5 = function arg0() {
                                var3 = arg0;
                                var2 = _closure2_slot15;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var3);
                                var2 = _closure2_slot13;
                                var1 = var2.markAsDismissed;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                            };
                            var4 = 'markAsDismissed';
                            var3[var4] = var5;
                            var2 = var3;
                        case 146:
                            _fun102775_ip = 212;
                            continue _fun102775;
                        case 148:
                            var3 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 11;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.GuildPowerupNotificationPopoutType;
                            var4 = var4.BOOST_TO_UNLOCK;
                            var3.type = var4;
                            var4 = _closure2_slot10;
                            var3.powerup = var4;
                            var4 = _closure2_slot11;
                            var3.markAsDismissed = var4;
                            var2 = var3;
                        case 212:
                            return var2;
                        case 214:
                            var4 = _closure2_slot7;
                            var3 = _closure1_slot13;
                            var3 = var3.GAME_SERVER_HOSTING;
                            if (!(var4 !== var3)) {
                                _fun102775_ip = 370;
                                continue _fun102775
                            }
                        case 238:
                            var4 = _closure1_slot14;
                            var3 = _closure2_slot7;
                            var3 = var4[var3];
                            var _closure3_slot0 = var3;
                            var3 = global;
                            var5 = var3.Object;
                            var4 = var5.values;
                            var3 = _closure2_slot1;
                            var3 = var3.allPowerups;
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.filter;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var0.skuId;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var3.bind(var4)(var0);
                            var4 = var3.length;
                            var0 = 0;
                            if (!(var0 !== var4)) {
                                _fun102775_ip = 366;
                                continue _fun102775
                            }
                        case 310:
                            var0 = {};
                            var0.powerups = var3;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = var3.GuildPowerupNotificationPopoutType;
                            var3 = var3.NEW_PERK_AVAILABLE;
                            var0.type = var3;
                            var3 = _closure2_slot8;
                            var0.markAsDismissed = var3;
                            return var0;
                        case 366:
                            var0 = undefined;
                            return var0;
                        case 370:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var2 = var2.GuildPowerupNotificationPopoutType;
                            var2 = var2.GAME_SERVER_HOSTING_AVAILABLE;
                            var0.type = var2;
                            var2 = _closure2_slot8;
                            var0.markAsDismissed = var2;
                            return var0;
                        case 421:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var2 = var2.GuildPowerupNotificationPopoutType;
                            var2 = var2.PERKS_AVAILABLE;
                            var0.type = var2;
                            var1 = _closure2_slot2;
                            var0.markAsDismissed = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var9 = function arg0() {
        _fun102778: for (var _fun102778_ip = 0;;) switch (_fun102778_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 18;
                var6 = var5[var3];
                var0 = undefined;
                var11 = var4.bind(var0)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var6;
                var8 = new Array(1);
                var8[0] = var7;
                var6 = function() { // Environment: var2
                    var2 = _closure1_slot7;
                    var1 = var2.getNotificationStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var10.bind(var11)(var9, var6, var8);
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.useStateFromStores;
                var8 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var8;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var4.bind(var5)(var3, var2);
                var3 = _closure1_slot23;
                var4 = null;
                var8 = var4 != var5;
                var2 = undefined;
                if (!var8) {
                    _fun102778_ip = 130;
                    continue _fun102778
                }
            case 127:
                var2 = var5;
            case 130:
                var2 = var3.bind(var0)(var7, var2, var6);
                var3 = var2.indicator;
                var2 = var2.showUnread;
                var6 = _closure1_slot24;
                var8 = var4 != var5;
                var1 = undefined;
                if (!var8) {
                    _fun102778_ip = 165;
                    continue _fun102778
                }
            case 162:
                var1 = var5;
            case 165:
                var1 = var6.bind(var0)(var7, var1);
                if (!(var4 !== var5)) {
                    _fun102778_ip = 186;
                    continue _fun102778
                }
            case 175:
                if (!(var4 == var3)) {
                    _fun102778_ip = 188;
                    continue _fun102778
                }
            case 179:
                if (var2) {
                    _fun102778_ip = 188;
                    continue _fun102778
                }
            case 182:
                if (!(var4 == var1)) {
                    _fun102778_ip = 188;
                    continue _fun102778
                }
            case 186:
                return var0;
            case 188:
                var0 = {};
                var0.indicator = var3;
                var0.showUnread = var2;
                var0.popout = var1;
                return var0;
        }
    };
    var _closure1_slot25 = var9;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var10);
    var0 = 0;
    var10 = var12[var0];
    var0 = undefined;
    var10 = var13.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var14 = var12[var10];
    var10 = arg3;
    var10 = var10.bind(var0)(var14);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var13 = var10.BOOSTING_TIER_TO_LEVEL_SKU_ID;
    var _closure1_slot9 = var13;
    var13 = var10.BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC;
    var _closure1_slot10 = var13;
    var13 = var10.GUILD_POWERUP_MIGRATION_USER_ID;
    var _closure1_slot11 = var13;
    var13 = var10.GUILD_POWERUP_NEW_PERK_GROUPS;
    var _closure1_slot12 = var13;
    var13 = var10.GuildPowerupNewPerkAvailableCoachmarkVersion;
    var _closure1_slot13 = var13;
    var13 = var10.NEW_PERK_AVAILABLE_COACHMARK_VERSION_TO_POWERUP_SKU_ID_SET;
    var _closure1_slot14 = var13;
    var10 = var10.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot15 = var10;
    var10 = 7;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var13 = var10.BoostedGuildTiers;
    var _closure1_slot16 = var13;
    var10 = var10.GuildFeatures;
    var _closure1_slot17 = var10;
    var10 = 8;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.ContentDismissActionType;
    var _closure1_slot18 = var10;
    var10 = 27;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx';
    var10 = var11.bind(var12)(var10);
    var2.default = var9;
    var2.maybeGetLevelUnlockedPopoutDCF = var8;
    var2.maybeGetPerkPurchaseablePopoutDCF = var7;
    var2.maybeGetGameServerHostingGuildEligiblePopoutDCF = var6;
    var2.useGuildPowerupNewPerkAvailableCoachmarkVersion = var5;
    var2.useGuildPowerupsNotificationIndicator = var4;
    var2.useGuildPowerupsChannelListPopout = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 18;
        var3 = var3[var0];
        var0 = undefined;
        var7 = var4.bind(var0)(var3);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot8;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot8;
            var1 = var2.getStateForGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot25;
        var3 = var3.bind(var0)(var6);
        var _closure2_slot2 = var3;
        var9 = _closure1_slot4;
        var8 = var9.useEffect;
        var7 = new Array(1);
        var7[0] = var6;
        var4 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 26;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildPowerupsAckNotification;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var8.bind(var9)(var4, var7);
        var8 = _closure1_slot4;
        var7 = var8.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            _fun102784: for (var _fun102784_ip = 0;;) switch (_fun102784_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var5 = null;
                    var1 = var5 == var0;
                    var0 = undefined;
                    var3 = undefined;
                    if (var1) {
                        _fun102784_ip = 44;
                        continue _fun102784
                    }
                case 20:
                    var1 = _closure2_slot2;
                    var1 = var1.popout;
                    var2 = var5 == var1;
                    var3 = undefined;
                    if (var2) {
                        _fun102784_ip = 44;
                        continue _fun102784
                    }
                case 39:
                    var3 = var1.type;
                case 44:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 11;
                    var2 = var7[var2];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.GuildPowerupNotificationPopoutType;
                    var2 = var2.BOOST_TO_UNLOCK;
                    if (!(var3 !== var2)) {
                        _fun102784_ip = 137;
                        continue _fun102784
                    }
                case 83:
                    var2 = _closure2_slot2;
                    var2 = var5 == var2;
                    var3 = undefined;
                    if (var2) {
                        _fun102784_ip = 113;
                        continue _fun102784
                    }
                case 96:
                    var4 = _closure2_slot2;
                    var4 = var4.popout;
                    var2 = var5 == var4;
                    var3 = var4;
                case 113:
                    if (var2) {
                        _fun102784_ip = 137;
                        continue _fun102784
                    }
                case 116:
                    var2 = var3.markAsDismissed;
                    var1 = _closure1_slot18;
                    var1 = var1.AUTO_DISMISS;
                    var1 = var2.bind(var3)(var1);
                case 137:
                    return var0;
            }
        };
        var3 = var7.bind(var8)(var3, var4);
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun102785: for (var _fun102785_ip = 0;;) switch (_fun102785_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun102785_ip = 63;
                        continue _fun102785
                    }
                case 13:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReverseOrderedTiers;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun102786: for (var _fun102786_ip = 0;;) switch (_fun102786_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = _closure1_slot9;
                                var5 = var1[var4];
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun102786_ip = 107;
                                    continue _fun102786
                                }
                            case 20:
                                var3 = _closure2_slot1;
                                var3 = var3.unlockedPowerups;
                                var3 = var3[var5];
                                if (!(var2 != var3)) {
                                    _fun102786_ip = 107;
                                    continue _fun102786
                                }
                            case 41:
                                var3 = _closure1_slot10;
                                var5 = var3[var4];
                                if (!(var2 != var5)) {
                                    _fun102786_ip = 107;
                                    continue _fun102786
                                }
                            case 53:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 10;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.markContentAsDismissed;
                                var8 = _closure2_slot0;
                                var0 = _closure1_slot18;
                                var6 = var0.AUTO_DISMISS;
                                var7 = false;
                                var10 = var4;
                                var9 = var5;
                                var0 = var10[var3](var9, var8, var7, var6, var5);
                            case 107:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useAutoDismissGuildPowerupsNotifications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 6808, 13372, 6810, 6811, 660, 1369, 6801, 11144, 13362, 13374, 1304, 1358, 5701, 13375, 6812, 632, 6733, 6807, 13376, 1360, 13373, 13379, 13380, 7456, 2]);