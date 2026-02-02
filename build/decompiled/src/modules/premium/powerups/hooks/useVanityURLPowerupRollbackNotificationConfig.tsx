// modules/premium/powerups/hooks/useVanityURLPowerupRollbackNotificationConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var3.PowerupActiveStatusType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useVanityURLPowerupRollbackNotificationConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun102301: for (var _fun102301_ip = 0;;) switch (_fun102301_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var5 = var3[var1];
                var9 = undefined;
                var10 = var2.bind(var9)(var5);
                var8 = var10.useStateFromStores;
                var5 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    _fun102302: for (var _fun102302_ip = 0;;) switch (_fun102302_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun102302_ip = 41;
                                continue _fun102302
                            }
                        case 35:
                            var0 = var1.features;
                        case 41:
                            return var0;
                    }
                };
                var6 = var8.bind(var10)(var6, var5);
                var1 = var3[var1];
                var3 = var2.bind(var9)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var12 = null;
                var1 = var12 == var0;
                var3 = undefined;
                if (var1) {
                    _fun102301_ip = 150;
                    continue _fun102301
                }
            case 114:
                var1 = var0.allPowerups;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var2.bind(var9)(var0);
                var0 = var0.VANITY_URL_POWERUP_SKU_ID;
                var3 = var1[var0];
            case 150:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var1.bind(var9)(var0);
                var0 = var0.bind(var9)(var7, var3);
                var2 = _closure1_slot0;
                var1 = 7;
                var1 = var5[var1];
                var5 = var2.bind(var9)(var1);
                var2 = var5.useVanityURLPerkRollbackEnabled;
                var1 = arg1;
                var2 = var2.bind(var5)(var7, var1);
                var1 = var12 == var3;
                var13 = var3;
                var8 = undefined;
                if (var1) {
                    _fun102301_ip = 225;
                    continue _fun102301
                }
            case 219:
                var8 = var13.storeRemovalDate;
            case 225:
                var1 = var12 == var6;
                var3 = undefined;
                if (var1) {
                    _fun102301_ip = 254;
                    continue _fun102301
                }
            case 234:
                var5 = var6.has;
                var1 = _closure1_slot6;
                var1 = var1.PARTNERED;
                var3 = var5.bind(var6)(var1);
            case 254:
                var1 = var12 != var3;
                if (!var1) {
                    _fun102301_ip = 264;
                    continue _fun102301
                }
            case 261:
                var1 = var3;
            case 264:
                if (!var2) {
                    _fun102301_ip = 271;
                    continue _fun102301
                }
            case 267:
                var2 = var12 != var8;
            case 271:
                if (!var2) {
                    _fun102301_ip = 277;
                    continue _fun102301
                }
            case 274:
                var2 = !var1;
            case 277:
                if (!var2) {
                    _fun102301_ip = 299;
                    continue _fun102301
                }
            case 280:
                var1 = var0.type;
                var0 = _closure1_slot5;
                var0 = var0.POWERUP_ACTIVATED;
                var2 = var1 === var0;
            case 299:
                var0 = {};
                var0.shouldShow = var2;
                var1 = null;
                if (!var2) {
                    _fun102301_ip = 486;
                    continue _fun102301
                }
            case 314:
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 8;
                var3 = var6[var5];
                var3 = var7.bind(var9)(var3);
                var11 = var3.intl;
                var10 = var11.formatToPlainString;
                var7 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var6 = var7.bind(var9)(var6);
                var7 = var6.mgoPkU;
                var6 = {};
                var14 = var12 == var13;
                var12 = undefined;
                if (var14) {
                    _fun102301_ip = 386;
                    continue _fun102301
                }
            case 381:
                var12 = var13.title;
            case 386:
                var6.perkName = var12;
                var6 = var10.bind(var11)(var7, var6);
                var2.title = var6;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = var11[var5];
                var5 = var6.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var10 = _closure1_slot1;
                var3 = var11[var3];
                var3 = var10.bind(var9)(var3);
                var4 = var3.UT9pkI;
                var3 = {};
                var7 = 10;
                var7 = var11[var7];
                var7 = var10.bind(var9)(var7);
                var7 = var7.bind(var9)(var8);
                var3.dateString = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2.description = var3;
                var1 = var2;
            case 486:
                var0.notificationConfig = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 6680, 6681, 660, 566, 6604, 13303, 13301, 1234, 1881, 13304, 2]);