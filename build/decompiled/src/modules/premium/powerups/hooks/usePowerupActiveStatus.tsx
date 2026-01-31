// modules/premium/powerups/hooks/usePowerupActiveStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0, arg1) { // Original name: usePowerupsActiveStatuses, environment: var3
        _fun102304: for (var _fun102304_ip = 0;;) switch (_fun102304_ip) {
            case 0:
                var2 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = function(arg0) { // Original name: getPowerupActiveStatus, environment: var0
                    _fun102305: for (var _fun102305_ip = 0;;) switch (_fun102305_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.skuId;
                            var0 = _closure1_slot4;
                            if (!(var1 !== var0)) {
                                _fun102305_ip = 489;
                                continue _fun102305
                            }
                        case 23:
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102305_ip = 212;
                                continue _fun102305
                            }
                        case 32:
                            var0 = _closure2_slot1;
                            if (!(var1 != var0)) {
                                _fun102305_ip = 212;
                                continue _fun102305
                            }
                        case 46:
                            var0 = _closure2_slot2;
                            if (!(var1 != var0)) {
                                _fun102305_ip = 212;
                                continue _fun102305
                            }
                        case 57:
                            var3 = _closure1_slot7;
                            var0 = var2.skuId;
                            var3 = var3[var0];
                            if (!(var1 != var3)) {
                                _fun102305_ip = 186;
                                continue _fun102305
                            }
                        case 75:
                            var0 = _closure2_slot1;
                            var0 = var0.premiumTier;
                            var6 = var0 >= var3;
                            var0 = _closure1_slot8;
                            var8 = var0[var3];
                            var3 = var1 != var8;
                            var5 = undefined;
                            if (!var3) {
                                _fun102305_ip = 132;
                                continue _fun102305
                            }
                        case 106:
                            var3 = _closure2_slot2;
                            var9 = var3.unlockedPowerups;
                            var10 = var1 == var9;
                            var3 = undefined;
                            if (var10) {
                                _fun102305_ip = 129;
                                continue _fun102305
                            }
                        case 125:
                            var3 = var9[var8];
                        case 129:
                            var5 = var3;
                        case 132:
                            var9 = var1 != var8;
                            var3 = undefined;
                            if (!var9) {
                                _fun102305_ip = 167;
                                continue _fun102305
                            }
                        case 141:
                            var7 = _closure2_slot2;
                            var7 = var7.allPowerups;
                            var9 = var1 == var7;
                            var0 = undefined;
                            if (var9) {
                                _fun102305_ip = 164;
                                continue _fun102305
                            }
                        case 160:
                            var0 = var7[var8];
                        case 164:
                            var3 = var0;
                        case 167:
                            var0 = {};
                            var0.isActiveFromLevel = var6;
                            var0.levelEntitlement = var5;
                            var0.levelPowerup = var3;
                            _fun102305_ip = 236;
                            continue _fun102305;
                        case 186:
                            var3 = {};
                            var5 = false;
                            var3.isActiveFromLevel = var5;
                            var5 = undefined;
                            var3.levelEntitlement = var5;
                            var3.levelPowerup = var5;
                            var0 = var3;
                            _fun102305_ip = 236;
                            continue _fun102305;
                        case 212:
                            var3 = {};
                            var5 = false;
                            var3.isActiveFromLevel = var5;
                            var5 = undefined;
                            var3.levelEntitlement = var5;
                            var3.levelPowerup = var5;
                            var0 = var3;
                        case 236:
                            var9 = var0.isActiveFromLevel;
                            var5 = var0.levelEntitlement;
                            var3 = var0.levelPowerup;
                            var8 = _closure2_slot3;
                            if (!var8) {
                                _fun102305_ip = 284;
                                continue _fun102305
                            }
                        case 264:
                            var10 = _closure1_slot5;
                            var6 = var10.has;
                            var0 = var2.skuId;
                            var8 = var6.bind(var10)(var0);
                        case 284:
                            var0 = _closure2_slot2;
                            var10 = var1 == var0;
                            var6 = undefined;
                            var0 = undefined;
                            if (var10) {
                                _fun102305_ip = 328;
                                continue _fun102305
                            }
                        case 299:
                            var7 = _closure2_slot2;
                            var10 = var7.unlockedPowerups;
                            var7 = var1 == var10;
                            var0 = undefined;
                            if (var7) {
                                _fun102305_ip = 328;
                                continue _fun102305
                            }
                        case 318:
                            var7 = var2.skuId;
                            var0 = var10[var7];
                        case 328:
                            var10 = var1 != var0;
                            var7 = null;
                            if (!var10) {
                                _fun102305_ip = 340;
                                continue _fun102305
                            }
                        case 337:
                            var7 = var0;
                        case 340:
                            var0 = {};
                            var10 = _closure1_slot6;
                            var10 = var10.INACTIVE;
                            var0.type = var10;
                            var0.powerup = var2;
                            var0.sourceEntitlement = var6;
                            var0.sourcePowerup = var6;
                            if (var9) {
                                _fun102305_ip = 453;
                                continue _fun102305
                            }
                        case 374:
                            if (var8) {
                                _fun102305_ip = 417;
                                continue _fun102305
                            }
                        case 377:
                            if (!(var1 != var7)) {
                                _fun102305_ip = 487;
                                continue _fun102305
                            }
                        case 381:
                            var1 = {};
                            var8 = _closure1_slot6;
                            var8 = var8.POWERUP_ACTIVATED;
                            var1.type = var8;
                            var1.powerup = var2;
                            var1.sourceEntitlement = var7;
                            var1.sourcePowerup = var2;
                            var0 = var1;
                            _fun102305_ip = 487;
                            continue _fun102305;
                        case 417:
                            var1 = {};
                            var7 = _closure1_slot6;
                            var7 = var7.TIER_OVERRIDE_ACTIVATED;
                            var1.type = var7;
                            var1.powerup = var2;
                            var1.sourceEntitlement = var6;
                            var1.sourcePowerup = var2;
                            var0 = var1;
                            _fun102305_ip = 487;
                            continue _fun102305;
                        case 453:
                            var1 = {};
                            var6 = _closure1_slot6;
                            var6 = var6.LEVEL_ACTIVATED;
                            var1.type = var6;
                            var1.powerup = var2;
                            var1.sourceEntitlement = var5;
                            var1.sourcePowerup = var3;
                            var0 = var1;
                        case 487:
                            return var0;
                        case 489:
                            var0 = {};
                            var1 = _closure2_slot1;
                            var5 = null;
                            var7 = var5 == var1;
                            var1 = undefined;
                            var3 = undefined;
                            if (var7) {
                                _fun102305_ip = 550;
                                continue _fun102305
                            }
                        case 511:
                            var6 = _closure2_slot1;
                            var8 = var6.features;
                            var6 = var5 == var8;
                            var3 = undefined;
                            if (var6) {
                                _fun102305_ip = 550;
                                continue _fun102305
                            }
                        case 530:
                            var7 = var8.has;
                            var6 = _closure1_slot9;
                            var6 = var6.GAME_SERVERS;
                            var3 = var7.bind(var8)(var6);
                        case 550:
                            if (!(var5 != var3)) {
                                _fun102305_ip = 557;
                                continue _fun102305
                            }
                        case 554:
                            if (var3) {
                                _fun102305_ip = 569;
                                continue _fun102305
                            }
                        case 557:
                            var3 = _closure1_slot6;
                            var3 = var3.INACTIVE;
                            _fun102305_ip = 579;
                            continue _fun102305;
                        case 569:
                            var4 = _closure1_slot6;
                            var3 = var4.POWERUP_ACTIVATED;
                        case 579:
                            var0.type = var3;
                            var0.powerup = var2;
                            var0.sourceEntitlement = var1;
                            var0.sourcePowerup = var1;
                            return var0;
                    }
                };
                var _closure2_slot4 = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var5 = var6[var1];
                var7 = undefined;
                var10 = var3.bind(var7)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot2;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var9.bind(var10)(var8, var5);
                var _closure2_slot1 = var5;
                var1 = var6[var1];
                var8 = var3.bind(var7)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var8)(var3, var1);
                var _closure2_slot2 = var1;
                var1 = null;
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun102304_ip = 171;
                    continue _fun102304
                }
            case 136:
                var6 = var5.features;
                var5 = var1 == var6;
                var3 = undefined;
                if (var5) {
                    _fun102304_ip = 171;
                    continue _fun102304
                }
            case 151:
                var5 = var6.has;
                var4 = _closure1_slot9;
                var4 = var4.PREMIUM_TIER_3_OVERRIDE;
                var3 = var5.bind(var6)(var4);
            case 171:
                var1 = var1 != var3;
                if (!var1) {
                    _fun102304_ip = 181;
                    continue _fun102304
                }
            case 178:
                var1 = var3;
            case 181:
                var _closure2_slot3 = var1;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var5.bind(var0)(var4);
    var4 = var4.GAME_SERVER_POWERUP_SKU_ID;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
    var _closure1_slot5 = var7;
    var7 = var4.PowerupActiveStatusType;
    var _closure1_slot6 = var7;
    var7 = var4.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot7 = var7;
    var4 = var4.BOOSTING_TIER_TO_LEVEL_SKU_ID;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/usePowerupActiveStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Original name: usePowerupActiveStatus, environment: var3
        _fun102309: for (var _fun102309_ip = 0;;) switch (_fun102309_ip) {
            case 0:
                var0 = arg1;
                var4 = _closure1_slot10;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun102309_ip = 26;
                    continue _fun102309
                }
            case 16:
                var1 = new Array(1);
                var1[0] = var0;
                _fun102309_ip = 30;
                continue _fun102309;
            case 26:
                var1 = new Array(0);
            case 30:
                var2 = undefined;
                var0 = arg0;
                var1 = var4.bind(var2)(var0, var1);
                var4 = var1.length;
                var0 = 0;
                if (!(!(var4 <= var0))) {
                    _fun102309_ip = 58;
                    continue _fun102309
                }
            case 52:
                var0 = var1[var0];
                _fun102309_ip = 87;
                continue _fun102309;
            case 58:
                var1 = {};
                var3 = _closure1_slot6;
                var3 = var3.INACTIVE;
                var1.type = var3;
                var1.sourceEntitlement = var2;
                var1.sourcePowerup = var2;
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.default = var4;
    var3 = function(arg0) { // Original name: isPowerupActiveStatusActive, environment: var3
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot6;
        var0 = var0.INACTIVE;
        var0 = var1 !== var0;
        return var0;
    };
    var2.isPowerupActiveStatusActive = var3;
    var2.usePowerupsActiveStatuses = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 6678, 9873, 6679, 660, 566, 2]);