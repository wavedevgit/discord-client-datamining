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
    var8 = function(arg0, arg1) { // Original name: maybeGetLevelUnlockedPopoutDCF, environment: var1
        _fun102615: for (var _fun102615_ip = 0;;) switch (_fun102615_ip) {
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
                    _fun102616: for (var _fun102616_ip = 0;;) switch (_fun102616_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var0 = arg0;
                            var4 = var2[var0];
                            var0 = null;
                            var3 = var0 != var4;
                            var2 = undefined;
                            if (!var3) {
                                _fun102616_ip = 42;
                                continue _fun102616
                            }
                        case 25:
                            var3 = _closure2_slot1;
                            var3 = var3.unlockedPowerups;
                            var2 = var3[var4];
                        case 42:
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun102616_ip = 63;
                                continue _fun102616
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
                    _fun102615_ip = 215;
                    continue _fun102615
                }
            case 73:
                var3 = _closure1_slot10;
                var8 = var3[var6];
                var _closure2_slot2 = var8;
                if (!(var1 != var8)) {
                    _fun102615_ip = 215;
                    continue _fun102615
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
                    _fun102615_ip = 215;
                    continue _fun102615
                }
            case 127:
                var3 = _closure1_slot9;
                var6 = var3[var6];
                var7 = var1 != var6;
                var3 = undefined;
                if (!var7) {
                    _fun102615_ip = 154;
                    continue _fun102615
                }
            case 144:
                var5 = var5.allPowerups;
                var3 = var5[var6];
            case 154:
                if (!(var1 != var3)) {
                    _fun102615_ip = 215;
                    continue _fun102615
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
                var2 = function(arg0) { // Original name: markAsDismissed, environment: var2
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
    var7 = function(arg0, arg1, arg2) { // Original name: maybeGetPerkPurchaseablePopoutDCF, environment: var1
        _fun102618: for (var _fun102618_ip = 0;;) switch (_fun102618_ip) {
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
                    _fun102618_ip = 59;
                    continue _fun102618
                }
            case 53:
                var0 = var2.premiumTier;
            case 59:
                if (!(var1 == var0)) {
                    _fun102618_ip = 73;
                    continue _fun102618
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
                    _fun102619: for (var _fun102619_ip = 0;;) switch (_fun102619_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.length;
                            var1 = 0;
                            if (!(!(var3 <= var1))) {
                                _fun102619_ip = 56;
                                continue _fun102619
                            }
                        case 16:
                            var3 = var2.some;
                            var1 = function(arg0) { // Environment: var0
                                _fun102620: for (var _fun102620_ip = 0;;) switch (_fun102620_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = _closure2_slot1;
                                        var0 = var0.unlockedPowerups;
                                        var2 = var0[var3];
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun102620_ip = 54;
                                            continue _fun102620
                                        }
                                    case 26:
                                        var2 = _closure1_slot15;
                                        var2 = var2[var3];
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun102620_ip = 52;
                                            continue _fun102620
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
                                _fun102619_ip = 56;
                                continue _fun102619
                            }
                        case 37:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun102621: for (var _fun102621_ip = 0;;) switch (_fun102621_ip) {
                                    case 0:
                                        var0 = _closure2_slot1;
                                        var1 = var0.allPowerups;
                                        var0 = arg0;
                                        var1 = var1[var0];
                                        var3 = null;
                                        var4 = var3 == var1;
                                        var0 = null;
                                        if (var4) {
                                            _fun102621_ip = 106;
                                            continue _fun102621
                                        }
                                    case 31:
                                        var5 = _closure2_slot2;
                                        var4 = var1.cost;
                                        var4 = var5 < var4;
                                        var0 = null;
                                        if (var4) {
                                            _fun102621_ip = 106;
                                            continue _fun102621
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
                                            _fun102621_ip = 106;
                                            continue _fun102621
                                        }
                                    case 103:
                                        var0 = var1;
                                    case 106:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun102619_ip = 60;
                            continue _fun102619;
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
                    _fun102618_ip = 175;
                    continue _fun102618
                }
            case 173:
                return var7;
            case 175:
                var0 = var4.length;
                var2 = 1;
                if (!(var2 === var0)) {
                    _fun102618_ip = 306;
                    continue _fun102618
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
                    _fun102618_ip = 306;
                    continue _fun102618
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
                var1 = function(arg0) { // Original name: markAsDismissed, environment: var3
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
                _fun102618_ip = 442;
                continue _fun102618;
            case 306:
                var1 = var4.length;
                var2 = var1 > var2;
                var1 = undefined;
                if (!var2) {
                    _fun102618_ip = 439;
                    continue _fun102618
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
                    _fun102618_ip = 439;
                    continue _fun102618
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
                var3 = function(arg0) { // Original name: markAsDismissed, environment: var3
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
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: maybeGetGameServerHostingGuildEligiblePopoutDCF, environment: var1
        _fun102624: for (var _fun102624_ip = 0;;) switch (_fun102624_ip) {
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
                    _fun102624_ip = 194;
                    continue _fun102624
                }
            case 61:
                var1 = arg1;
                if (var1) {
                    _fun102624_ip = 194;
                    continue _fun102624
                }
            case 70:
                var1 = null;
                if (!(var1 != var4)) {
                    _fun102624_ip = 194;
                    continue _fun102624
                }
            case 76:
                var1 = arg2;
                if (!(var1 >= var4)) {
                    _fun102624_ip = 194;
                    continue _fun102624
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
                    _fun102624_ip = 194;
                    continue _fun102624
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
                var2 = function(arg0) { // Original name: markAsDismissed, environment: var2
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
    var5 = function(arg0, arg1) { // Original name: useGuildPowerupNewPerkAvailableCoachmarkVersion, environment: var1
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 16;
        var2 = var9[var2];
        var3 = undefined;
        var5 = var4.bind(var3)(var2);
        var2 = var5.useVanityURLPerkPurchaseEnabled;
        var10 = 'GuildPowerupsChannelRow';
        var8 = var2.bind(var5)(var7, var10);
        var _closure2_slot2 = var8;
        var2 = 15;
        var2 = var9[var2];
        var5 = var4.bind(var3)(var2);
        var2 = var5.useGameServerEnabled;
        var5 = var2.bind(var5)(var7, var10);
        var _closure2_slot3 = var5;
        var2 = 17;
        var2 = var9[var2];
        var9 = var4.bind(var3)(var2);
        var4 = var9.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun102627: for (var _fun102627_ip = 0;;) switch (_fun102627_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun102627_ip = 61;
                        continue _fun102627
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
        var4 = var4.bind(var9)(var3, var2);
        var _closure2_slot4 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun102628: for (var _fun102628_ip = 0;;) switch (_fun102628_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    if (!var0) {
                        _fun102628_ip = 32;
                        continue _fun102628
                    }
                case 10:
                    var0 = _closure2_slot4;
                    if (var0) {
                        _fun102628_ip = 32;
                        continue _fun102628
                    }
                case 17:
                    var0 = _closure1_slot13;
                    var0 = var0.GAME_SERVER_HOSTING;
                    return var0;
                case 32:
                    var0 = global;
                    var4 = var0.Array;
                    var3 = var4.from;
                    var5 = _closure1_slot14;
                    var1 = _closure1_slot13;
                    var1 = var1.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                    var1 = var5[var1];
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.some;
                    var1 = function(arg0) { // Environment: var1
                        _fun102629: for (var _fun102629_ip = 0;;) switch (_fun102629_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var1 = null;
                                var3 = var1 == var0;
                                var0 = undefined;
                                if (var3) {
                                    _fun102629_ip = 44;
                                    continue _fun102629
                                }
                            case 18:
                                var2 = _closure2_slot1;
                                var3 = var2.unlockedPowerups;
                                var2 = var1 == var3;
                                var0 = undefined;
                                if (var2) {
                                    _fun102629_ip = 44;
                                    continue _fun102629
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
                        _fun102628_ip = 106;
                        continue _fun102628
                    }
                case 94:
                    var1 = _closure1_slot13;
                    var1 = var1.GUILD_TAG_BADGE_PACKS_WAVE_ONE;
                    return var1;
                case 106:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun102628_ip = 275;
                        continue _fun102628
                    }
                case 116:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 18;
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
                        _fun102628_ip = 190;
                        continue _fun102628
                    }
                case 167:
                    var5 = _closure2_slot1;
                    var5 = var5.unlockedPowerups;
                    var8 = var4 == var5;
                    var1 = undefined;
                    if (var8) {
                        _fun102628_ip = 190;
                        continue _fun102628
                    }
                case 186:
                    var1 = var5[var6];
                case 190:
                    var1 = var4 != var1;
                    if (!(var4 == var3)) {
                        _fun102628_ip = 213;
                        continue _fun102628
                    }
                case 198:
                    if (var1) {
                        _fun102628_ip = 213;
                        continue _fun102628
                    }
                case 201:
                    var5 = _closure1_slot13;
                    var5 = var5.VANITY_URL;
                    return var5;
                case 213:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.getGuildTierFromGuild;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    if (!(var4 != var2)) {
                        _fun102628_ip = 275;
                        continue _fun102628
                    }
                case 252:
                    if (!(var4 != var3)) {
                        _fun102628_ip = 275;
                        continue _fun102628
                    }
                case 256:
                    if (!(var2 < var3)) {
                        _fun102628_ip = 275;
                        continue _fun102628
                    }
                case 260:
                    if (var1) {
                        _fun102628_ip = 275;
                        continue _fun102628
                    }
                case 263:
                    var0 = _closure1_slot13;
                    var0 = var0.VANITY_URL;
                    return var0;
                case 275:
                    var0 = 0;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var5;
    var4 = function(arg0, arg1, arg2) { // Original name: useGuildPowerupsNotificationIndicator, environment: var1
        _fun102630: for (var _fun102630_ip = 0;;) switch (_fun102630_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var10 = arg2;
                var _closure2_slot0 = var9;
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var10;
                var3 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 19;
                var2 = var12[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)(var9);
                var6 = var2.available;
                var _closure2_slot3 = var6;
                var2 = 20;
                var2 = var12[var2];
                var3 = var3.bind(var4)(var2);
                var2 = 'useGuildPowerupsNotificationIndicator';
                var2 = var3.bind(var4)(var9, var2);
                var7 = var2.shouldShow;
                var11 = _closure1_slot0;
                var2 = 21;
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
                    _fun102630_ip = 151;
                    continue _fun102630
                }
            case 148:
                var7 = !var2;
            case 151:
                var _closure2_slot4 = var7;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
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
                    _fun102630_ip = 243;
                    continue _fun102630
                }
            case 237:
                var9 = var10.lastBoostCount;
            case 243:
                var1[1] = var9;
                var11 = var6 == var10;
                var9 = undefined;
                if (var11) {
                    _fun102630_ip = 262;
                    continue _fun102630
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
                    _fun102630_ip = 289;
                    continue _fun102630
                }
            case 283:
                var4 = var5.entitlements;
            case 289:
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    _fun102632: for (var _fun102632_ip = 0;;) switch (_fun102632_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun102632_ip = 478;
                                continue _fun102632
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            var9 = var0.unlockedPowerups;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 22;
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
                                _fun102632_ip = 124;
                                continue _fun102632
                            }
                        case 114:
                            var13 = _closure2_slot5;
                            var9 = var13.entitlements;
                        case 124:
                            if (!(var2 == var9)) {
                                _fun102632_ip = 130;
                                continue _fun102632
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
                                _fun102632_ip = 173;
                                continue _fun102632
                            }
                        case 163:
                            var8 = _closure2_slot2;
                            var7 = var8.lastSeenWarningNotification;
                        case 173:
                            if (!(var2 == var7)) {
                                _fun102632_ip = 192;
                                continue _fun102632
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
                                _fun102632_ip = 229;
                                continue _fun102632
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
                                _fun102632_ip = 285;
                                continue _fun102632
                            }
                        case 275:
                            var9 = _closure2_slot2;
                            var8 = var9.lastBoostCount;
                        case 285:
                            var9 = var2 != var8;
                            var2 = 0;
                            if (!var9) {
                                _fun102632_ip = 297;
                                continue _fun102632
                            }
                        case 294:
                            var2 = var8;
                        case 297:
                            var6 = var6.length;
                            var6 = var6 > var0;
                            if (!var6) {
                                _fun102632_ip = 313;
                                continue _fun102632
                            }
                        case 309:
                            var6 = var7 < var4;
                        case 313:
                            var4 = _closure2_slot3;
                            var4 = var4 - var2;
                            if (var6) {
                                _fun102632_ip = 421;
                                continue _fun102632
                            }
                        case 324:
                            var6 = _closure2_slot4;
                            if (var6) {
                                _fun102632_ip = 421;
                                continue _fun102632
                            }
                        case 331:
                            var1 = _closure2_slot3;
                            if (!(var1 !== var2)) {
                                _fun102632_ip = 343;
                                continue _fun102632
                            }
                        case 339:
                            if (!(!(var4 > var0))) {
                                _fun102632_ip = 359;
                                continue _fun102632
                            }
                        case 343:
                            var0 = {};
                            var0.indicator = var5;
                            var1 = false;
                            var0.showUnread = var1;
                            _fun102632_ip = 419;
                            continue _fun102632;
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
                            _fun102632_ip = 476;
                            continue _fun102632;
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
    var3 = function(arg0, arg1) { // Original name: useGuildPowerupsChannelListPopout, environment: var1
        _fun102633: for (var _fun102633_ip = 0;;) switch (_fun102633_ip) {
            case 0:
                var22 = arg0;
                var12 = arg1;
                var _closure2_slot0 = var22;
                var _closure2_slot1 = var12;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var16 = 23;
                var2 = var5[var16];
                var14 = undefined;
                var6 = var8.bind(var14)(var2);
                var4 = var6.usePerksCoachmarkDCF;
                var2 = null;
                var3 = var2 != var12;
                var4 = var4.bind(var6)(var3);
                var3 = _closure1_slot3;
                var13 = 2;
                var4 = var3.bind(var14)(var4, var13);
                var7 = 0;
                var9 = var4[var7];
                var3 = 1;
                var10 = var4[var3];
                var _closure2_slot2 = var10;
                var6 = 14;
                var4 = var5[var6];
                var4 = var8.bind(var14)(var4);
                var4 = var4.DismissibleContent;
                var4 = var4.GUILD_POWERUP_PERKS_COACHMARK;
                var11 = var9 === var4;
                var _closure2_slot3 = var11;
                var9 = _closure1_slot1;
                var4 = 19;
                var4 = var5[var4];
                var4 = var9.bind(var14)(var4);
                var4 = var4.bind(var14)(var22);
                var21 = var4.available;
                var _closure2_slot4 = var21;
                var4 = 17;
                var9 = var5[var4];
                var18 = var8.bind(var14)(var9);
                var17 = var18.useStateFromStores;
                var9 = _closure1_slot5;
                var15 = new Array(1);
                var15[0] = var9;
                var9 = function() { // Environment: var0
                    _fun102634: for (var _fun102634_ip = 0;;) switch (_fun102634_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var1 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var3 = var1.bind(var3)(var0);
                            var0 = null;
                            var4 = var0 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun102634_ip = 61;
                                continue _fun102634
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
                                _fun102634_ip = 71;
                                continue _fun102634
                            }
                        case 68:
                            var0 = var1;
                        case 71:
                            return var0;
                    }
                };
                var20 = var17.bind(var18)(var15, var9);
                var _closure2_slot5 = var20;
                var4 = var5[var4];
                var17 = var8.bind(var14)(var4);
                var15 = var17.useStateFromStores;
                var4 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getLowestGameCostForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var15.bind(var17)(var9, var4);
                var _closure2_slot6 = var9;
                var4 = _closure1_slot22;
                var4 = var4.bind(var14)(var22, var12);
                var _closure2_slot7 = var4;
                var5 = var5[var16];
                var15 = var8.bind(var14)(var5);
                var8 = var15.useNewPerkAvailableCoachmarkDCF;
                var5 = var2 != var12;
                if (!var5) {
                    _fun102633_ip = 279;
                    continue _fun102633
                }
            case 276:
                var5 = !var11;
            case 279:
                var8 = var8.bind(var15)(var5, var4);
                var5 = _closure1_slot3;
                var5 = var5.bind(var14)(var8, var13);
                var17 = var5[var7];
                var5 = var5[var3];
                var _closure2_slot8 = var5;
                var15 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = var8[var6];
                var6 = var15.bind(var14)(var6);
                var6 = var6.DismissibleContent;
                var6 = var6.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
                var6 = var17 === var6;
                var _closure2_slot9 = var6;
                var19 = _closure1_slot4;
                var18 = var19.useMemo;
                var17 = new Array(7);
                var17[0] = var22;
                var17[1] = var12;
                var17[2] = var11;
                var17[3] = var6;
                var17[4] = var21;
                var17[5] = var20;
                var17[6] = var9;
                var9 = function() { // Environment: var0
                    _fun102636: for (var _fun102636_ip = 0;;) switch (_fun102636_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun102636_ip = 125;
                                continue _fun102636
                            }
                        case 13:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun102636_ip = 125;
                                continue _fun102636
                            }
                        case 20:
                            var0 = _closure2_slot9;
                            if (var0) {
                                _fun102636_ip = 125;
                                continue _fun102636
                            }
                        case 27:
                            var6 = _closure1_slot19;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var2 = undefined;
                            var0 = var6.bind(var2)(var1, var0);
                            if (!(var4 == var0)) {
                                _fun102636_ip = 123;
                                continue _fun102636
                            }
                        case 54:
                            var8 = _closure1_slot20;
                            var7 = _closure2_slot0;
                            var6 = _closure2_slot1;
                            var1 = _closure2_slot4;
                            var1 = var8.bind(var2)(var7, var6, var1);
                            if (!(var4 == var1)) {
                                _fun102636_ip = 121;
                                continue _fun102636
                            }
                        case 81:
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
                                _fun102636_ip = 119;
                                continue _fun102636
                            }
                        case 116:
                            var2 = var3;
                        case 119:
                            return var2;
                        case 121:
                            return var1;
                        case 123:
                            return var0;
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var18.bind(var19)(var9, var17);
                var _closure2_slot10 = var9;
                var8 = var8[var16];
                var15 = var15.bind(var14)(var8);
                var8 = var15.useGuildPowerupNotificationDCF;
                var2 = var2 != var9;
                var8 = var8.bind(var15)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var14)(var8, var13);
                var8 = var2[var7];
                var _closure2_slot11 = var8;
                var7 = var2[var3];
                var _closure2_slot12 = var7;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(9);
                var1[0] = var12;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var9;
                var1[4] = var8;
                var1[5] = var7;
                var1[6] = var6;
                var1[7] = var5;
                var1[8] = var4;
                var0 = function() { // Environment: var0
                    _fun102637: for (var _fun102637_ip = 0;;) switch (_fun102637_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var5 = null;
                            if (!(var5 == var2)) {
                                _fun102637_ip = 19;
                                continue _fun102637
                            }
                        case 15:
                            var2 = undefined;
                            return var2;
                        case 19:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun102637_ip = 337;
                                continue _fun102637
                            }
                        case 29:
                            var2 = _closure2_slot9;
                            if (var2) {
                                _fun102637_ip = 130;
                                continue _fun102637
                            }
                        case 36:
                            var6 = _closure2_slot11;
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
                                _fun102637_ip = 128;
                                continue _fun102637
                            }
                        case 83:
                            var3 = _closure2_slot10;
                            var3 = var5 != var3;
                            var2 = undefined;
                            if (!var3) {
                                _fun102637_ip = 128;
                                continue _fun102637
                            }
                        case 96:
                            var3 = {};
                            var7 = _closure2_slot10;
                            var8 = var3;
                            var4 = copyDataProperties(var8, var7);
                            var5 = function(arg0) { // Original name: markAsDismissed, environment: var0
                                var3 = arg0;
                                var2 = _closure2_slot12;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var3);
                                var2 = _closure2_slot10;
                                var1 = var2.markAsDismissed;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                            };
                            var4 = 'markAsDismissed';
                            var3[var4] = var5;
                            var2 = var3;
                        case 128:
                            return var2;
                        case 130:
                            var4 = _closure2_slot7;
                            var3 = _closure1_slot13;
                            var3 = var3.GAME_SERVER_HOSTING;
                            if (!(var4 !== var3)) {
                                _fun102637_ip = 286;
                                continue _fun102637
                            }
                        case 154:
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
                                _fun102637_ip = 282;
                                continue _fun102637
                            }
                        case 226:
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
                        case 282:
                            var0 = undefined;
                            return var0;
                        case 286:
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
                        case 337:
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
    var9 = function(arg0) { // Original name: useGuildPowerupsNotifications, environment: var1
        _fun102640: for (var _fun102640_ip = 0;;) switch (_fun102640_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 17;
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
                    _fun102640_ip = 130;
                    continue _fun102640
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
                    _fun102640_ip = 165;
                    continue _fun102640
                }
            case 162:
                var1 = var5;
            case 165:
                var1 = var6.bind(var0)(var7, var1);
                if (!(var4 !== var5)) {
                    _fun102640_ip = 186;
                    continue _fun102640
                }
            case 175:
                if (!(var4 == var3)) {
                    _fun102640_ip = 188;
                    continue _fun102640
                }
            case 179:
                if (var2) {
                    _fun102640_ip = 188;
                    continue _fun102640
                }
            case 182:
                if (!(var4 == var1)) {
                    _fun102640_ip = 188;
                    continue _fun102640
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
    var10 = 25;
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
    var1 = function(arg0) { // Original name: useDismissGuildPowerupsNotifications, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 17;
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
            var0 = 24;
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
            _fun102646: for (var _fun102646_ip = 0;;) switch (_fun102646_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var4 = null;
                    var1 = var4 == var0;
                    var0 = undefined;
                    var3 = undefined;
                    if (var1) {
                        _fun102646_ip = 37;
                        continue _fun102646
                    }
                case 20:
                    var2 = _closure2_slot2;
                    var2 = var2.popout;
                    var1 = var4 == var2;
                    var3 = var2;
                case 37:
                    if (var1) {
                        _fun102646_ip = 64;
                        continue _fun102646
                    }
                case 40:
                    var2 = var3.markAsDismissed;
                    var1 = _closure1_slot18;
                    var1 = var1.AUTO_DISMISS;
                    var1 = var2.bind(var3)(var1);
                case 64:
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
            _fun102647: for (var _fun102647_ip = 0;;) switch (_fun102647_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun102647_ip = 63;
                        continue _fun102647
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
                        _fun102648: for (var _fun102648_ip = 0;;) switch (_fun102648_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = _closure1_slot9;
                                var5 = var1[var4];
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun102648_ip = 107;
                                    continue _fun102648
                                }
                            case 20:
                                var3 = _closure2_slot1;
                                var3 = var3.unlockedPowerups;
                                var3 = var3[var5];
                                if (!(var2 != var3)) {
                                    _fun102648_ip = 107;
                                    continue _fun102648
                                }
                            case 41:
                                var3 = _closure1_slot10;
                                var5 = var3[var4];
                                if (!(var2 != var5)) {
                                    _fun102648_ip = 107;
                                    continue _fun102648
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
    var2.useDismissGuildPowerupsNotifications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 6672, 13336, 6674, 6675, 660, 1369, 6665, 11238, 13326, 13338, 1304, 1358, 5600, 13339, 632, 6598, 6671, 13340, 1360, 13337, 13343, 9870, 2]);