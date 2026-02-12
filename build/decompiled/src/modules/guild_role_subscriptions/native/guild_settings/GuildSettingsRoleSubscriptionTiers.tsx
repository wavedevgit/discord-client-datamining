// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun115502: for (var _fun115502_ip = 0;;) switch (_fun115502_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var7 = var0.onPress;
                var6 = var0.onLongPress;
                var5 = var0.disabled;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun115502_ip = 32;
                    continue _fun115502
                }
            case 30:
                var5 = false;
            case 32:
                var1 = _closure1_slot17;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot15;
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 18;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var10.tierManagementButton;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var5;
                if (!var9) {
                    _fun115502_ip = 94;
                    continue _fun115502
                }
            case 89:
                var9 = var10.disabled;
            case 94:
                var8[1] = var9;
                var0.style = var8;
                var8 = 'button';
                var0.accessibilityRole = var8;
                var0.onPress = var7;
                var0.onLongPress = var6;
                var0.disabled = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun115503: for (var _fun115503_ip = 0;;) switch (_fun115503_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.editStateId;
                var _closure2_slot0 = var6;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var1 = var0.groupListingId;
                var _closure2_slot2 = var1;
                var10 = var0.onPress;
                var0 = _closure1_slot17;
                var3 = undefined;
                var21 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 20;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot10;
                    var1 = var2.getSubscriptionListing;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var7 = null;
                var1 = var7 == var0;
                var2 = undefined;
                if (var1) {
                    _fun115503_ip = 119;
                    continue _fun115503
                }
            case 113:
                var2 = var0.published;
            case 119:
                var1 = var7 != var2;
                if (!var1) {
                    _fun115503_ip = 129;
                    continue _fun115503
                }
            case 126:
                var1 = var2;
            case 129:
                var4 = var7 == var0;
                var2 = undefined;
                if (var4) {
                    _fun115503_ip = 144;
                    continue _fun115503
                }
            case 138:
                var2 = var0.archived;
            case 144:
                var18 = var7 != var2;
                if (!var18) {
                    _fun115503_ip = 154;
                    continue _fun115503
                }
            case 151:
                var18 = var2;
            case 154:
                var19 = !var18;
                if (!var19) {
                    _fun115503_ip = 163;
                    continue _fun115503
                }
            case 160:
                var19 = !var1;
            case 163:
                if (!var19) {
                    _fun115503_ip = 170;
                    continue _fun115503
                }
            case 166:
                var19 = var3 !== var0;
            case 170:
                var17 = var3 === var0;
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 21;
                var1 = var5[var2];
                var11 = var4.bind(var3)(var1);
                var1 = var11.useName;
                var11 = var1.bind(var11)(var6);
                var1 = _closure1_slot4;
                var14 = 1;
                var11 = var1.bind(var3)(var11, var14);
                var1 = 0;
                var15 = var11[var1];
                var11 = var5[var2];
                var12 = var4.bind(var3)(var11);
                var11 = var12.usePriceTier;
                var12 = var11.bind(var12)(var6);
                var11 = _closure1_slot4;
                var11 = var11.bind(var3)(var12, var14);
                var23 = var11[var1];
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useImage;
                var2 = 250;
                var4 = var4.bind(var5)(var6, var2);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var4, var14);
                var13 = var2[var1];
                var2 = var7 == var0;
                var12 = undefined;
                if (var2) {
                    _fun115503_ip = 315;
                    continue _fun115503
                }
            case 305:
                var0 = var0.subscription_plans;
                var12 = var0[var1];
            case 315:
                var20 = '';
                if (!(var3 !== var23)) {
                    _fun115503_ip = 606;
                    continue _fun115503
                }
            case 326:
                if (!(var7 == var12)) {
                    _fun115503_ip = 482;
                    continue _fun115503
                }
            case 333:
                var6 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 14;
                var1 = var11[var0];
                var1 = var6.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.formatToPlainString;
                var0 = var11[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.CgmBaG;
                var0 = {};
                var5 = 15;
                var5 = var11[var5];
                var22 = var6.bind(var3)(var5);
                var16 = var22.formatPrice;
                var5 = _closure1_slot11;
                var5 = var5.USD;
                var5 = var16.bind(var22)(var23, var5);
                var0.price = var5;
                var5 = 16;
                var5 = var11[var5];
                var11 = var6.bind(var3)(var5);
                var6 = var11.formatPlanInterval;
                var5 = {};
                var16 = _closure1_slot14;
                var16 = var16.MONTH;
                var5.interval = var16;
                var5.interval_count = var14;
                var5 = var6.bind(var11)(var5);
                var0.interval = var5;
                var0 = var2.bind(var4)(var1, var0);
                _fun115503_ip = 603;
                continue _fun115503;
            case 482:
                var11 = _closure1_slot0;
                var14 = _closure1_slot3;
                var1 = 14;
                var2 = var14[var1];
                var2 = var11.bind(var3)(var2);
                var5 = var2.intl;
                var4 = var5.formatToPlainString;
                var1 = var14[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.CgmBaG;
                var1 = {};
                var6 = 15;
                var6 = var14[var6];
                var22 = var11.bind(var3)(var6);
                var16 = var22.formatPrice;
                var6 = var12.currency;
                var6 = var16.bind(var22)(var23, var6);
                var1.price = var6;
                var6 = 16;
                var6 = var14[var6];
                var11 = var11.bind(var3)(var6);
                var6 = var11.formatPlanInterval;
                var6 = var6.bind(var11)(var12);
                var1.interval = var6;
                var0 = var4.bind(var5)(var2, var1);
            case 603:
                var20 = var0;
            case 606:
                var2 = _closure1_slot15;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = _closure1_slot16;
                var5 = _closure1_slot24;
                var4 = {};
                var4.onPress = var10;
                var9 = function() {
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 11;
                    var4 = var2[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.openLazy;
                    var8 = _closure1_slot0;
                    var3 = 13;
                    var3 = var2[var3];
                    var8 = var8.bind(var0)(var3);
                    var3 = 12;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var8.bind(var0)(var3, var2);
                    var2 = {};
                    var2.editStateId = var7;
                    var2.guildId = var6;
                    var2.groupListingId = var1;
                    var1 = 'TierArchiveOrDelete';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var4.onLongPress = var9;
                var9 = var7 != var13;
                if (!var9) {
                    _fun115503_ip = 709;
                    continue _fun115503
                }
            case 649:
                var11 = _closure1_slot15;
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var7 = 22;
                var7 = var12[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var12 = var21.tierIcon;
                var7.style = var12;
                var12 = 'cover';
                var7.resizeMode = var12;
                var12 = {};
                var12.uri = var13;
                var7.source = var12;
                var9 = var11.bind(var3)(var10, var7);
            case 709:
                var7 = new Array(3);
                var7[0] = var9;
                var11 = _closure1_slot16;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var21.tierColumn;
                var9.style = var12;
                var14 = _closure1_slot15;
                var13 = _closure1_slot0;
                var12 = _closure1_slot3;
                var22 = 17;
                var12 = var12[var22];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var12.children = var15;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot16;
                var14 = _closure1_slot6;
                var13 = {};
                var16 = var21.detailsRow;
                var13.style = var16;
                if (!var19) {
                    _fun115503_ip = 825;
                    continue _fun115503
                }
            case 821:
                var19 = _closure1_slot18;
            case 825:
                var16 = new Array(4);
                var16[0] = var19;
                if (!var18) {
                    _fun115503_ip = 840;
                    continue _fun115503
                }
            case 836:
                var18 = _closure1_slot19;
            case 840:
                var16[1] = var18;
                if (!var17) {
                    _fun115503_ip = 851;
                    continue _fun115503
                }
            case 847:
                var17 = _closure1_slot20;
            case 851:
                var16[2] = var17;
                var19 = _closure1_slot15;
                var18 = _closure1_slot0;
                var17 = _closure1_slot3;
                var17 = var17[var22];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var21 = var21.tierPrice;
                var17.style = var21;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[3] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var7[1] = var9;
                var8 = _closure1_slot21;
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun115506: for (var _fun115506_ip = 0;;) switch (_fun115506_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.guildId;
                var _closure2_slot0 = var5;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var1 = _closure1_slot17;
                var16 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var1 = 24;
                var1 = var8[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var9 = var1.bottom;
                var1 = 25;
                var1 = var8[var1];
                var1 = var2.bind(var3)(var1);
                var12 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var1 = 26;
                var1 = var8[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot1 = var1;
                var2 = 27;
                var2 = var8[var2];
                var4 = var6.bind(var3)(var2);
                var2 = var4.useGroupListingsFetchContext;
                var4 = var2.bind(var4)();
                var2 = 28;
                var7 = var8[var2];
                var10 = var6.bind(var3)(var7);
                var7 = var10.useRoleSubscriptionMaxTiersExperiment;
                var7 = var7.bind(var10)(var5);
                var24 = var7.maxTiers;
                var7 = 29;
                var7 = var8[var7];
                var10 = var6.bind(var3)(var7);
                var7 = var10.useRoleSubscriptionSettingsDisabled;
                var11 = var7.bind(var10)();
                var7 = var8[var2];
                var10 = var6.bind(var3)(var7);
                var7 = var10.useGuildEligibleForTierTemplates;
                var14 = var7.bind(var10)(var5);
                var _closure2_slot2 = var14;
                var2 = var8[var2];
                var7 = var6.bind(var3)(var2);
                var2 = var7.useUserEligibleForTierTemplates;
                var15 = var2.bind(var7)();
                var _closure2_slot3 = var15;
                var2 = 30;
                var2 = var8[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.useGroupListingsForGuild;
                var17 = var2.bind(var6)(var5);
                var2 = 0;
                var10 = var17[var2];
                var _closure2_slot4 = var10;
                var7 = var17.map;
                var6 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var6 = var7.bind(var17)(var6);
                var17 = var6[var2];
                var _closure2_slot5 = var17;
                var7 = _closure1_slot2;
                var6 = 21;
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.useEditStateIds;
                var6 = {};
                var18 = true;
                var6.includeSoftDeleted = var18;
                var6 = var7.bind(var8)(var17, var5, var6);
                var17 = var6.editStateIds;
                var _closure2_slot6 = var17;
                var8 = _closure1_slot5;
                var7 = var8.useState;
                var6 = {};
                var8 = var7.bind(var8)(var6);
                var7 = _closure1_slot4;
                var6 = 2;
                var7 = var7.bind(var3)(var8, var6);
                var2 = var7[var2];
                var _closure2_slot7 = var2;
                var6 = 1;
                var6 = var7[var6];
                var _closure2_slot8 = var6;
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var17;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun115509: for (var _fun115509_ip = 0;;) switch (_fun115509_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = _closure2_slot7;
                                var1 = var1[var0];
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun115509_ip = 23;
                                    continue _fun115509
                                }
                            case 20:
                                var0 = var1;
                            case 23:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 31;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.uniq;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var6);
                var8 = _closure1_slot5;
                var7 = var8.useLayoutEffect;
                var6 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        var3 = _closure1_slot15;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var0 = 32;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.NavigatorHeader;
                        var0 = {};
                        var4 = 14;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var9 = var5.intl;
                        var6 = var9.string;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5.pXbGYc;
                        var5 = var6.bind(var9)(var5);
                        var0.title = var5;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["KzCF/6"];
                        var4 = var5.bind(var6)(var4);
                        var0.subtitle = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerTitle = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var8 = _closure1_slot5;
                var7 = var8.useCallback;
                var6 = new Array(5);
                var6[0] = var15;
                var6[1] = var14;
                var6[2] = var5;
                var6[3] = var1;
                var1 = null;
                var14 = var1 == var10;
                var5 = undefined;
                if (var14) {
                    _fun115506_ip = 489;
                    continue _fun115506
                }
            case 484:
                var5 = var10.id;
            case 489:
                var6[4] = var5;
                var5 = function() { // Environment: var0
                    _fun115512: for (var _fun115512_ip = 0;;) switch (_fun115512_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun115512_ip = 72;
                                continue _fun115512
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 33;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.GuildRoleSubscriptionsTierTemplatesExperiment;
                            var1 = var2.trackExposure;
                            var0 = {};
                            var3 = _closure2_slot0;
                            var0.guildId = var3;
                            var3 = '57f505_1';
                            var0.location = var3;
                            var0 = var1.bind(var2)(var0);
                        case 72:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun115512_ip = 86;
                                continue _fun115512
                            }
                        case 79:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun115512_ip = 175;
                                continue _fun115512
                            }
                        case 86:
                            var1 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var0 = 35;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.openTierCreationModal;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var6 = _closure2_slot4;
                            var4 = null;
                            var4 = var4 == var6;
                            if (var4) {
                                _fun115512_ip = 149;
                                continue _fun115512
                            }
                        case 140:
                            var4 = _closure2_slot4;
                            var3 = var4.id;
                        case 149:
                            var0.groupListingId = var3;
                            var3 = function() {
                                var2 = _closure2_slot1;
                                var1 = var2.navigate;
                                var0 = _closure1_slot12;
                                var0 = var0.ROLE_SUBSCRIPTIONS_TIERS;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.onAfterTierCreation = var3;
                            var0 = var1.bind(var2)(var0);
                            _fun115512_ip = 253;
                            continue _fun115512;
                        case 175:
                            var1 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var0 = 34;
                            var0 = var2[var0];
                            var4 = undefined;
                            var3 = var1.bind(var4)(var0);
                            var2 = var3.pushTierTemplateSelectionScene;
                            var1 = _closure2_slot1;
                            var0 = {};
                            var6 = _closure2_slot0;
                            var0.guildId = var6;
                            var7 = _closure2_slot4;
                            var6 = null;
                            var6 = var6 == var7;
                            if (var6) {
                                _fun115512_ip = 242;
                                continue _fun115512
                            }
                        case 233:
                            var5 = _closure2_slot4;
                            var4 = var5.id;
                        case 242:
                            var0.groupListingId = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 253:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var7.bind(var8)(var5, var6);
                _closure2_slot9 = var14;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 20;
                var5 = var7[var5];
                var8 = var6.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    var0 = var0.subsection;
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                _closure2_slot10 = var5;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var14;
                var5 = function() { // Environment: var0
                    _fun115515: for (var _fun115515_ip = 0;;) switch (_fun115515_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = _closure1_slot13;
                            var1 = var1.ROLE_SUBSCRIPTION_TIER_TEMPLATE;
                            if (!(var2 === var1)) {
                                _fun115515_ip = 34;
                                continue _fun115515
                            }
                        case 24:
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5, var6);
                if (var4) {
                    _fun115506_ip = 637;
                    continue _fun115506
                }
            case 601:
                var6 = _closure1_slot15;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var16.spinner;
                var4.style = var7;
                var7 = _closure1_slot22;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                return var4;
            case 637:
                var4 = function arg0() {
                    _fun115516: for (var _fun115516_ip = 0;;) switch (_fun115516_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var3 = _closure1_slot9;
                            var2 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var2 = var2.bind(var3)(var0);
                            var7 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 36;
                            var4 = var3[var0];
                            var0 = undefined;
                            var7 = var7.bind(var0)(var4);
                            var9 = null;
                            var4 = var9 != var2;
                            var2 = 'guild must not be null';
                            var2 = var7.bind(var0)(var4, var2);
                            var2 = _closure1_slot2;
                            var1 = 34;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.pushTierEditScene;
                            var2 = _closure2_slot1;
                            var1 = {};
                            var7 = _closure2_slot4;
                            var9 = var9 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun115516_ip = 123;
                                continue _fun115516
                            }
                        case 114:
                            var8 = _closure2_slot4;
                            var7 = var8.id;
                        case 123:
                            var1.groupListingId = var7;
                            var1.initialEditStateId = var6;
                            var5 = function arg0() {
                                var0 = arg0;
                                var3 = var0.id;
                                var2 = _closure3_slot0;
                                var1 = function(arg0, arg1) { // Environment: var0
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var0 = arg1;
                                    var _closure5_slot1 = var0;
                                    var2 = _closure2_slot8;
                                    var0 = undefined;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = {};
                                        var3 = arg0;
                                        var4 = var0;
                                        var1 = copyDataProperties(var4, var3);
                                        var2 = _closure5_slot1;
                                        var1 = _closure5_slot0;
                                        var0[var2] = var1;
                                        return var0;
                                    };
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = undefined;
                                var1 = var1.bind(var0)(var3, var2);
                                return var0;
                            };
                            var1.onBeforeDispatchNewListing = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                _closure2_slot11 = var4;
                var1 = var1 == var2;
                var8 = undefined;
                if (var1) {
                    _fun115506_ip = 674;
                    continue _fun115506
                }
            case 657:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var1.editStateId = var4;
                    var6 = _closure2_slot0;
                    var1.guildId = var6;
                    var5 = _closure2_slot5;
                    var1.groupListingId = var5;
                    var0 = function() {
                        var2 = _closure2_slot11;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var8 = var1.bind(var2)(var0);
            case 674:
                var2 = _closure1_slot15;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var16.container;
                var0.style = var4;
                var6 = _closure1_slot16;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = {};
                var7.paddingBottom = var9;
                var4.style = var7;
                var10 = _closure1_slot15;
                var9 = _closure1_slot1;
                var19 = _closure1_slot3;
                var7 = 37;
                var7 = var19[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var12 = var12.header;
                var7.style = var12;
                var18 = _closure1_slot0;
                var15 = 14;
                var12 = var19[var15];
                var12 = var18.bind(var3)(var12);
                var20 = var12.intl;
                var17 = var20.string;
                var12 = var19[var15];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["7iBIoO"];
                var12 = var17.bind(var20)(var12);
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(4);
                var7[0] = var9;
                var17 = _closure1_slot15;
                var12 = 17;
                var9 = var19[var12];
                var9 = var18.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var20 = var16.tierManagementDescription;
                var9.style = var20;
                var20 = var19[var15];
                var20 = var18.bind(var3)(var20);
                var23 = var20.intl;
                var22 = var23.format;
                var20 = var19[var15];
                var20 = var18.bind(var3)(var20);
                var20 = var20.t;
                var21 = var20.nHRSvM;
                var20 = {};
                var20.maxTiers = var24;
                var20 = var22.bind(var23)(var21, var20);
                var9.children = var20;
                var9 = var17.bind(var3)(var10, var9);
                var7[1] = var9;
                var7[2] = var8;
                var10 = _closure1_slot16;
                var9 = _closure1_slot24;
                var8 = {};
                var8.onPress = var14;
                var8.disabled = var11;
                var14 = _closure1_slot23;
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot15;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var16.createTierLabel;
                var12.style = var16;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.PiFnny;
                var15 = var16.bind(var17)(var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
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
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var14 = 4;
    var3 = var5[var14];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var13 = 6;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CurrencyCodes;
    var _closure1_slot11 = var7;
    var7 = var3.GuildSettingsSections;
    var _closure1_slot12 = var7;
    var3 = var3.GuildSettingsSubsections;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var8 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = '100%';
    var11.height = var12;
    var3.container = var11;
    var11 = {
        'marginBottom': 16,
        'paddingHorizontal': 16
    };
    var3.tierManagementDescription = var11;
    var11 = {
        'backgroundColor': null,
        'borderRadius': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'alignSelf': 'stretch',
        'justifyContent': 'flex-start',
        'height': 72,
        'padding': 16,
        'marginHorizontal': 16,
        'marginBottom': 8
    };
    var15 = 10;
    var12 = var5[var15];
    var12 = var9.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var12;
    var12 = var5[var15];
    var12 = var9.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11.borderRadius = var12;
    var3.tierManagementButton = var11;
    var11 = {
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'flex-start',
        'flex': 1
    };
    var3.tierColumn = var11;
    var11 = {
        'backgroundColor': null,
        'borderRadius': 20,
        'marginEnd': 12,
        'height': 40,
        'width': 40
    };
    var12 = var5[var15];
    var12 = var9.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var12;
    var12 = 12;
    var3.tierIcon = var11;
    var11 = {};
    var11.marginStart = var13;
    var3.tierPrice = var11;
    var11 = {};
    var13 = var5[var15];
    var13 = var9.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.YELLOW_300;
    var11.backgroundColor = var13;
    var13 = var5[var15];
    var13 = var9.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var11.borderRadius = var13;
    var11.paddingHorizontal = var14;
    var3.draftBadge = var11;
    var11 = {};
    var13 = var5[var15];
    var13 = var9.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_860;
    var11.color = var13;
    var13 = 'uppercase';
    var11.textTransform = var13;
    var3.draftBadgeLabel = var11;
    var11 = {};
    var16 = var5[var15];
    var16 = var9.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_500;
    var11.backgroundColor = var16;
    var16 = var5[var15];
    var16 = var9.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var11.borderRadius = var16;
    var11.paddingHorizontal = var14;
    var3.archiveBadge = var11;
    var11 = {};
    var11.textTransform = var13;
    var3.archiveBadgeLabel = var11;
    var11 = {};
    var16 = var5[var15];
    var16 = var9.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_MUTED;
    var11.backgroundColor = var16;
    var15 = var5[var15];
    var15 = var9.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11.borderRadius = var15;
    var11.paddingHorizontal = var14;
    var3.unsavedBadge = var11;
    var11 = {};
    var11.textTransform = var13;
    var3.unsavedBadgeLabel = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 3
    };
    var3.detailsRow = var11;
    var11 = {};
    var11.marginStart = var12;
    var3.createTierLabel = var11;
    var11 = {};
    var11.marginTop = var12;
    var3.spinner = var11;
    var11 = {};
    var12 = 0.5;
    var11.opacity = var12;
    var3.disabled = var11;
    var3 = var8.bind(var10)(var3);
    var _closure1_slot17 = var3;
    var8 = function() {
        var0 = _closure1_slot17;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot15;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var7.draftBadge;
        var0.style = var5;
        var6 = _closure1_slot15;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var4 = 17;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {};
        var7 = var7.draftBadgeLabel;
        var4.style = var7;
        var7 = 'text-xs/semibold';
        var4.variant = var7;
        var7 = 14;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.vosPk5;
        var7 = var8.bind(var9)(var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot18 = var3;
    var8 = function() {
        var0 = _closure1_slot17;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot15;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var7.archiveBadge;
        var0.style = var5;
        var6 = _closure1_slot15;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var4 = 17;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-xs/semibold',
            'color': 'always-white'
        };
        var7 = var7.archiveBadgeLabel;
        var4.style = var7;
        var7 = 14;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.nhbtEl;
        var7 = var8.bind(var9)(var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot19 = var3;
    var8 = function() {
        var0 = _closure1_slot17;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot15;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var7.unsavedBadge;
        var0.style = var5;
        var6 = _closure1_slot15;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var4 = 17;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-xs/semibold',
            'color': 'always-white'
        };
        var7 = var7.unsavedBadgeLabel;
        var4.style = var7;
        var7 = 14;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.aiwXeq;
        var7 = var8.bind(var9)(var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot20 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.PencilIcon;
    var3 = {};
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot21 = var3;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot22 = var3;
    var3 = 22;
    var3 = var5[var3];
    var6 = var9.bind(var0)(var3);
    var3 = {};
    var8 = 23;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var3.source = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot23 = var3;
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var3 = _closure1_slot15;
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 38;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.guildId = var7;
        var6 = _closure1_slot15;
        var5 = _closure1_slot26;
        var4 = {};
        var4.guildId = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8285, 1410, 3087, 660, 1623, 33, 1297, 671, 3279, 14781, 1307, 1234, 4612, 10682, 3938, 6879, 7584, 632, 10678, 5426, 14783, 1568, 12625, 1469, 10664, 5692, 14765, 10663, 22, 5836, 5693, 14784, 14786, 44, 6007, 14768, 2]);