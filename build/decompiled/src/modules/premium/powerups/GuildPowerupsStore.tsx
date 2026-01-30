// modules/premium/powerups/GuildPowerupsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun55642: for (var _fun55642_ip = 0;;) switch (_fun55642_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun55642_ip = 74;
                continue _fun55642;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: calculateAppliedBoosts, environment: var3
        _fun55645: for (var _fun55645_ip = 0;;) switch (_fun55645_ip) {
            case 0:
                var14 = arg0;
                var1 = _closure1_slot6;
                var0 = var1.getGuild;
                var12 = var0.bind(var1)(var14);
                var11 = null;
                var0 = var11 == var12;
                var10 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun55645_ip = 59;
                    continue _fun55645
                }
            case 33:
                var3 = var12.features;
                var1 = var3.has;
                var0 = _closure1_slot10;
                var0 = var0.PREMIUM_TIER_3_OVERRIDE;
                var2 = var1.bind(var3)(var0);
            case 59:
                var9 = 0;
                var1 = true;
                var0 = 0;
                if (!(var1 !== var2)) {
                    _fun55645_ip = 106;
                    continue _fun55645
                }
            case 69:
                var2 = _closure1_slot8;
                var3 = var11 == var12;
                var1 = undefined;
                if (var3) {
                    _fun55645_ip = 88;
                    continue _fun55645
                }
            case 82:
                var1 = var12.premiumTier;
            case 88:
                if (!(var11 == var1)) {
                    _fun55645_ip = 102;
                    continue _fun55645
                }
            case 92:
                var3 = _closure1_slot9;
                var1 = var3.NONE;
            case 102:
                var0 = var2[var1];
            case 106:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = _closure1_slot7;
                var8 = var2.bind(var3)(var1);
                var1 = var8.length;
                var1 = var9 < var1;
                var7 = 2;
                var6 = 1;
                var5 = var0;
                var4 = 0;
                var3 = undefined;
                var2 = undefined;
                var0 = var5;
                if (!var1) {
                    _fun55645_ip = 340;
                    continue _fun55645
                }
            case 162:
                var15 = var8[var4];
                var1 = _closure1_slot5;
                var1 = var1.bind(var10)(var15, var7);
                var18 = var1[var9];
                var1 = var1[var6];
                var16 = var11 != var12;
                if (!var16) {
                    _fun55645_ip = 204;
                    continue _fun55645
                }
            case 191:
                var15 = var12.premiumFeatures;
                var16 = var11 != var15;
                var3 = var15;
            case 204:
                if (!var16) {
                    _fun55645_ip = 223;
                    continue _fun55645
                }
            case 207:
                var17 = var3.features;
                var15 = var17.includes;
                var16 = var15.bind(var17)(var18);
            case 223:
                if (!var16) {
                    _fun55645_ip = 268;
                    continue _fun55645
                }
            case 226:
                var15 = var1.isEnabled;
                var17 = var11 == var15;
                var15 = undefined;
                if (var17) {
                    _fun55645_ip = 252;
                    continue _fun55645
                }
            case 241:
                var17 = var1.isEnabled;
                var15 = var17.bind(var1)(var14);
            case 252:
                var17 = var11 == var15;
                if (var17) {
                    _fun55645_ip = 262;
                    continue _fun55645
                }
            case 259:
                var17 = var15;
            case 262:
                var16 = var17;
                var2 = var15;
            case 268:
                if (!var16) {
                    _fun55645_ip = 303;
                    continue _fun55645
                }
            case 271:
                var15 = var1.includedInLevel;
                var15 = var11 == var15;
                if (var15) {
                    _fun55645_ip = 300;
                    continue _fun55645
                }
            case 284:
                var18 = var12.premiumTier;
                var17 = var1.includedInLevel;
                var15 = var18 < var17;
            case 300:
                var16 = var15;
            case 303:
                var15 = var5;
                if (!var16) {
                    _fun55645_ip = 319;
                    continue _fun55645
                }
            case 309:
                var1 = var1.boostPrice;
                var15 = var5 + var1;
            case 319:
                var4 = var4 + 1;
                var1 = var8.length;
                var5 = var15;
                var0 = var5;
                if (var4 < var1) {
                    _fun55645_ip = 162;
                    continue _fun55645
                }
            case 340:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: getStateForGuild, environment: var3
        _fun55646: for (var _fun55646_ip = 0;;) switch (_fun55646_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot11;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun55646_ip = 67;
                    continue _fun55646
                }
            case 20:
                var3 = _closure1_slot13;
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = _closure1_slot11;
                var2 = {};
                var5 = {};
                var2.allPowerups = var5;
                var5 = {};
                var2.powerupCatalog = var5;
                var5 = {};
                var2.unlockedPowerups = var5;
                var2.appliedBoosts = var4;
                var3[var1] = var2;
            case 67:
                var0 = _closure1_slot11;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: recalculateState, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var6 = var0.entitlements;
        var0 = arg1;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot14;
        var0 = undefined;
        var5 = var3.bind(var0)(var4);
        var _closure2_slot1 = var5;
        var3 = var6.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun55648: for (var _fun55648_ip = 0;;) switch (_fun55648_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var1 = var0.unlockedPowerups;
                    var0 = var2.sku_id;
                    if (var3) {
                        _fun55648_ip = 35;
                        continue _fun55648
                    }
                case 29:
                    var3 = delete var1[var0];
                    _fun55648_ip = 39;
                    continue _fun55648;
                case 35:
                    var1[var0] = var2;
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var6)(var1);
        var1 = {};
        var7 = _closure1_slot11;
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        var3 = {};
        var8 = var3;
        var7 = var5;
        var5 = copyDataProperties(var8, var7);
        var5 = _closure1_slot13;
        var6 = var5.bind(var0)(var4);
        var5 = 'appliedBoosts';
        var3[var5] = var6;
        var1[var4] = var3;
        _closure1_slot11 = var1;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO;
    var _closure1_slot7 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot8 = var7;
    var7 = var1.BoostedGuildTiers;
    var _closure1_slot9 = var7;
    var1 = var1.GuildFeatures;
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildPowerupsStore, environment: var5
            _fun55650: for (var _fun55650_ip = 0;;) switch (_fun55650_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55650_ip = 69;
                        continue _fun55650
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55650_ip = 105;
                    continue _fun55650;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun55651: for (var _fun55651_ip = 0;;) switch (_fun55651_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var3 = var4.waitFor;
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun55651_ip = 34;
                        continue _fun55651
                    }
                case 30:
                    _closure1_slot11 = var1;
                case 34:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getStateForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55653: for (var _fun55653_ip = 0;;) switch (_fun55653_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    var0 = undefined;
                    if (!var1) {
                        _fun55653_ip = 25;
                        continue _fun55653
                    }
                case 14:
                    var1 = _closure1_slot11;
                    var0 = var1[var2];
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'shouldFetchCatalogForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55654: for (var _fun55654_ip = 0;;) switch (_fun55654_ip) {
                case 0:
                    var1 = _closure1_slot11;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var3 = var0 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun55654_ip = 33;
                        continue _fun55654
                    }
                case 25:
                    var2 = var1.catalogFetchCooldown;
                case 33:
                    var0 = var0 == var2;
                    if (var0) {
                        _fun55654_ip = 71;
                        continue _fun55654
                    }
                case 40:
                    var1 = 86400000;
                    var2 = var2 + var1;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var0 = var2 < var1;
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'shouldFetchPowerupsForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55655: for (var _fun55655_ip = 0;;) switch (_fun55655_ip) {
                case 0:
                    var1 = _closure1_slot11;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var3 = var0 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun55655_ip = 33;
                        continue _fun55655
                    }
                case 25:
                    var2 = var1.unlockedPowerupsFetchCooldown;
                case 33:
                    var0 = var0 == var2;
                    if (var0) {
                        _fun55655_ip = 71;
                        continue _fun55655
                    }
                case 40:
                    var1 = 3600000;
                    var2 = var2 + var1;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var0 = var2 < var1;
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasFetchedPowerupCatalog';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55656: for (var _fun55656_ip = 0;;) switch (_fun55656_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun55656_ip = 46;
                        continue _fun55656
                    }
                case 12:
                    var1 = _closure1_slot11;
                    var1 = var1[var3];
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun55656_ip = 40;
                        continue _fun55656
                    }
                case 32:
                    var2 = var1.hasFetchedPowerupCatalog;
                case 40:
                    var1 = true;
                    var0 = var1 === var2;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasFetchedUnlockedPowerups';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun55657: for (var _fun55657_ip = 0;;) switch (_fun55657_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun55657_ip = 46;
                        continue _fun55657
                    }
                case 12:
                    var1 = _closure1_slot11;
                    var1 = var1[var3];
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun55657_ip = 40;
                        continue _fun55657
                    }
                case 32:
                    var2 = var1.hasFetchedUnlockedPowerups;
                case 40:
                    var1 = true;
                    var0 = var1 === var2;
                case 46:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildPowerupsStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(1);
    var8 = function(arg0) { // Environment: var3
        _fun55658: for (var _fun55658_ip = 0;;) switch (_fun55658_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                var0 = var6;
                if (!(var2 != var0)) {
                    _fun55658_ip = 80;
                    continue _fun55658
                }
            case 14:
                var4 = global;
                var3 = var4.Object;
                var2 = var3.fromEntries;
                var5 = var4.Object;
                var4 = var5.entries;
                var6 = var4.bind(var5)(var6);
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var1
                    _fun55659: for (var _fun55659_ip = 0;;) switch (_fun55659_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3[Symbol.iterator];
                            var3 = var0().next;
                            var1 = var3().value;
                            var1 = var0;
                            var5 = undefined;
                            var2 = var1 === var5;
                            var1 = undefined;
                            if (var2) {
                                _fun55659_ip = 49;
                                continue _fun55659
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var0;
                            var3 = var3 === var5;
                            var1 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun55659_ip = 49;
                                continue _fun55659
                            }
                        case 43:
                            var1 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun55659_ip = 55;
                                continue _fun55659
                            }
                        case 52:
                            var0.return();
                        case 55:
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun55659_ip = 75;
                                continue _fun55659
                            }
                        case 64:
                            var2 = 'object';
                            var1 = typeof var1;
                            var0 = var2 === var1;
                        case 75:
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    _fun55660: for (var _fun55660_ip = 0;;) switch (_fun55660_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4[Symbol.iterator];
                            var4 = var0().next;
                            var3 = var4().value;
                            var1 = var0;
                            var6 = undefined;
                            var2 = var1 === var6;
                            var1 = undefined;
                            if (var2) {
                                _fun55660_ip = 27;
                                continue _fun55660
                            }
                        case 24:
                            var1 = var3;
                        case 27:
                            var3 = undefined;
                            if (var2) {
                                _fun55660_ip = 57;
                                continue _fun55660
                            }
                        case 32:
                            var5 = var4().value;
                            var4 = var0;
                            var4 = var4 === var6;
                            var3 = undefined;
                            var2 = var4;
                            if (var4) {
                                _fun55660_ip = 57;
                                continue _fun55660
                            }
                        case 51:
                            var3 = var5;
                            var2 = var4;
                        case 57:
                            if (var2) {
                                _fun55660_ip = 63;
                                continue _fun55660
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var8 = var1;
                            var7 = var3;
                            var2 = copyDataProperties(var8, var7);
                            var5 = var3.allPowerups;
                            var2 = null;
                            if (!(var2 == var5)) {
                                _fun55660_ip = 97;
                                continue _fun55660
                            }
                        case 95:
                            var5 = {};
                        case 97:
                            var4 = 'allPowerups';
                            var1[var4] = var5;
                            var5 = var3.powerupCatalog;
                            if (!(var2 == var5)) {
                                _fun55660_ip = 118;
                                continue _fun55660
                            }
                        case 116:
                            var5 = {};
                        case 118:
                            var4 = 'powerupCatalog';
                            var1[var4] = var5;
                            var3 = var3.unlockedPowerups;
                            if (!(var2 == var3)) {
                                _fun55660_ip = 139;
                                continue _fun55660
                            }
                        case 137:
                            var3 = {};
                        case 139:
                            var2 = 'unlockedPowerups';
                            var1[var2] = var3;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var0 = var2.bind(var3)(var1);
            case 80:
                return var0;
        }
    };
    var1[0] = var8;
    var7.migrations = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleReset, environment: var3
        var0 = {};
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function(arg0) { // Original name: handleGuildPowerupCatalogFetchSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var7 = var0.allPowerups;
        var6 = var0.powerupCatalog;
        var1 = _closure1_slot14;
        var0 = undefined;
        var5 = var1.bind(var0)(var4);
        var1 = {};
        var8 = _closure1_slot11;
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var3 = {};
        var9 = var3;
        var8 = var5;
        var5 = copyDataProperties(var9, var8);
        var5 = 'allPowerups';
        var3[var5] = var7;
        var5 = 'powerupCatalog';
        var3[var5] = var6;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 'catalogFetchCooldown';
        var3[var5] = var6;
        var6 = true;
        var5 = 'hasFetchedPowerupCatalog';
        var3[var5] = var6;
        var1[var4] = var3;
        _closure1_slot11 = var1;
        return var0;
    };
    var1.GUILD_POWERUP_CATALOG_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleGuildBoostEntitlementsFetchSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var7 = var0.unlockedPowerups;
        var1 = _closure1_slot14;
        var0 = undefined;
        var5 = var1.bind(var0)(var4);
        var1 = _closure1_slot13;
        var6 = var1.bind(var0)(var4);
        var1 = {};
        var8 = _closure1_slot11;
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var3 = {};
        var9 = var3;
        var8 = var5;
        var5 = copyDataProperties(var9, var8);
        var5 = 'unlockedPowerups';
        var3[var5] = var7;
        var5 = 'appliedBoosts';
        var3[var5] = var6;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 'unlockedPowerupsFetchCooldown';
        var3[var5] = var6;
        var6 = true;
        var5 = 'hasFetchedUnlockedPowerups';
        var3[var5] = var6;
        var1[var4] = var3;
        _closure1_slot11 = var1;
        return var0;
    };
    var1.GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleGuildPowerupCreated, environment: var3
        var3 = _closure1_slot15;
        var0 = undefined;
        var2 = arg0;
        var1 = true;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.GUILD_POWERUP_ENTITLEMENTS_CREATE = var8;
    var8 = function(arg0) { // Original name: handleGuildPowerupDeleted, environment: var3
        var3 = _closure1_slot15;
        var0 = undefined;
        var2 = arg0;
        var1 = false;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.GUILD_POWERUP_ENTITLEMENTS_DELETE = var8;
    var8 = function(arg0) { // Original name: handleGuildUpdated, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var3 = var0.id;
        var2 = _closure1_slot11;
        var1 = {};
        var5 = _closure1_slot14;
        var0 = undefined;
        var6 = var5.bind(var0)(var3);
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var4 = _closure1_slot13;
        var5 = var4.bind(var0)(var3);
        var4 = 'appliedBoosts';
        var1[var4] = var5;
        var2[var3] = var1;
        return var0;
    };
    var1.GUILD_UPDATE = var8;
    var3 = function(arg0) { // Original name: handleGameServerInstanceFetched, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot11;
        var1 = {};
        var5 = _closure1_slot14;
        var0 = undefined;
        var6 = var5.bind(var0)(var3);
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var4 = _closure1_slot13;
        var5 = var4.bind(var0)(var3);
        var4 = 'appliedBoosts';
        var1[var4] = var5;
        var2[var3] = var1;
        return var0;
    };
    var1.GAME_SERVER_FETCH_INSTANCES_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/GuildPowerupsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1410, 6678, 660, 566, 806, 2]);