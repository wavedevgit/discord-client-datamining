// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() {
        var0 = _closure1_slot18;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot16;
        var1 = _closure1_slot7;
        var0 = {};
        var5 = var7.draftBadge;
        var0.style = var5;
        var6 = _closure1_slot16;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var4 = 18;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {};
        var7 = var7.draftBadgeLabel;
        var4.style = var7;
        var7 = 'text-xs/semibold';
        var4.variant = var7;
        var7 = 15;
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
    var _closure1_slot19 = var0;
    var0 = function() {
        var0 = _closure1_slot18;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot16;
        var1 = _closure1_slot7;
        var0 = {};
        var5 = var7.archiveBadge;
        var0.style = var5;
        var6 = _closure1_slot16;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var4 = 18;
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
        var7 = 15;
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
    var _closure1_slot20 = var0;
    var0 = function() {
        var0 = _closure1_slot18;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot16;
        var1 = _closure1_slot7;
        var0 = {};
        var5 = var7.unsavedBadge;
        var0.style = var5;
        var6 = _closure1_slot16;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var4 = 18;
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
        var7 = 15;
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
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun116656: for (var _fun116656_ip = 0;;) switch (_fun116656_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var7 = var0.onPress;
                var6 = var0.onLongPress;
                var5 = var0.disabled;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun116656_ip = 32;
                    continue _fun116656
                }
            case 30:
                var5 = false;
            case 32:
                var1 = _closure1_slot18;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 19;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var10.tierManagementButton;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var5;
                if (!var9) {
                    _fun116656_ip = 94;
                    continue _fun116656
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
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun116657: for (var _fun116657_ip = 0;;) switch (_fun116657_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.editStateId;
                var _closure2_slot0 = var6;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var1 = var0.groupListingId;
                var _closure2_slot2 = var1;
                var12 = var0.onPress;
                var0 = _closure1_slot18;
                var3 = undefined;
                var23 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 20;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot11;
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
                    _fun116657_ip = 119;
                    continue _fun116657
                }
            case 113:
                var2 = var0.published;
            case 119:
                var1 = var7 != var2;
                if (!var1) {
                    _fun116657_ip = 129;
                    continue _fun116657
                }
            case 126:
                var1 = var2;
            case 129:
                var4 = var7 == var0;
                var2 = undefined;
                if (var4) {
                    _fun116657_ip = 144;
                    continue _fun116657
                }
            case 138:
                var2 = var0.archived;
            case 144:
                var11 = var7 != var2;
                if (!var11) {
                    _fun116657_ip = 154;
                    continue _fun116657
                }
            case 151:
                var11 = var2;
            case 154:
                var20 = !var11;
                if (!var20) {
                    _fun116657_ip = 163;
                    continue _fun116657
                }
            case 160:
                var20 = !var1;
            case 163:
                if (!var20) {
                    _fun116657_ip = 170;
                    continue _fun116657
                }
            case 166:
                var20 = var3 !== var0;
            case 170:
                var9 = var3 === var0;
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 21;
                var1 = var5[var2];
                var13 = var4.bind(var3)(var1);
                var1 = var13.useName;
                var13 = var1.bind(var13)(var6);
                var1 = _closure1_slot4;
                var16 = 1;
                var13 = var1.bind(var3)(var13, var16);
                var1 = 0;
                var17 = var13[var1];
                var13 = var5[var2];
                var14 = var4.bind(var3)(var13);
                var13 = var14.usePriceTier;
                var14 = var13.bind(var14)(var6);
                var13 = _closure1_slot4;
                var13 = var13.bind(var3)(var14, var16);
                var21 = var13[var1];
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useImage;
                var2 = 250;
                var4 = var4.bind(var5)(var6, var2);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var4, var16);
                var15 = var2[var1];
                var2 = var7 == var0;
                var14 = undefined;
                if (var2) {
                    _fun116657_ip = 315;
                    continue _fun116657
                }
            case 305:
                var0 = var0.subscription_plans;
                var14 = var0[var1];
            case 315:
                var22 = '';
                if (!(var3 !== var21)) {
                    _fun116657_ip = 606;
                    continue _fun116657
                }
            case 326:
                if (!(var7 == var14)) {
                    _fun116657_ip = 482;
                    continue _fun116657
                }
            case 333:
                var6 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 15;
                var1 = var13[var0];
                var1 = var6.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.formatToPlainString;
                var0 = var13[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.CgmBaG;
                var0 = {};
                var5 = 16;
                var5 = var13[var5];
                var19 = var6.bind(var3)(var5);
                var18 = var19.formatPrice;
                var5 = _closure1_slot12;
                var5 = var5.USD;
                var5 = var18.bind(var19)(var21, var5);
                var0.price = var5;
                var5 = 17;
                var5 = var13[var5];
                var13 = var6.bind(var3)(var5);
                var6 = var13.formatPlanInterval;
                var5 = {};
                var18 = _closure1_slot15;
                var18 = var18.MONTH;
                var5.interval = var18;
                var5.interval_count = var16;
                var5 = var6.bind(var13)(var5);
                var0.interval = var5;
                var0 = var2.bind(var4)(var1, var0);
                _fun116657_ip = 603;
                continue _fun116657;
            case 482:
                var13 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 15;
                var2 = var16[var1];
                var2 = var13.bind(var3)(var2);
                var5 = var2.intl;
                var4 = var5.formatToPlainString;
                var1 = var16[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.CgmBaG;
                var1 = {};
                var6 = 16;
                var6 = var16[var6];
                var19 = var13.bind(var3)(var6);
                var18 = var19.formatPrice;
                var6 = var14.currency;
                var6 = var18.bind(var19)(var21, var6);
                var1.price = var6;
                var6 = 17;
                var6 = var16[var6];
                var13 = var13.bind(var3)(var6);
                var6 = var13.formatPlanInterval;
                var6 = var6.bind(var13)(var14);
                var1.interval = var6;
                var0 = var4.bind(var5)(var2, var1);
            case 603:
                var22 = var0;
            case 606:
                var2 = _closure1_slot16;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = _closure1_slot17;
                var5 = _closure1_slot22;
                var4 = {};
                var4.onPress = var12;
                var10 = function() {
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 12;
                    var4 = var2[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.openLazy;
                    var8 = _closure1_slot0;
                    var3 = 14;
                    var3 = var2[var3];
                    var8 = var8.bind(var0)(var3);
                    var3 = 13;
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
                var4.onLongPress = var10;
                var10 = var7 != var15;
                if (!var10) {
                    _fun116657_ip = 709;
                    continue _fun116657
                }
            case 649:
                var13 = _closure1_slot16;
                var12 = _closure1_slot1;
                var14 = _closure1_slot3;
                var7 = 22;
                var7 = var14[var7];
                var12 = var12.bind(var3)(var7);
                var7 = {};
                var14 = var23.tierIcon;
                var7.style = var14;
                var14 = 'cover';
                var7.resizeMode = var14;
                var14 = {};
                var14.uri = var15;
                var7.source = var14;
                var10 = var13.bind(var3)(var12, var7);
            case 709:
                var7 = new Array(3);
                var7[0] = var10;
                var13 = _closure1_slot17;
                var12 = _closure1_slot7;
                var10 = {};
                var14 = var23.tierColumn;
                var10.style = var14;
                var16 = _closure1_slot16;
                var15 = _closure1_slot0;
                var14 = _closure1_slot3;
                var19 = 18;
                var14 = var14[var19];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot17;
                var16 = _closure1_slot7;
                var15 = {};
                var18 = var23.detailsRow;
                var15.style = var18;
                if (!var20) {
                    _fun116657_ip = 837;
                    continue _fun116657
                }
            case 821:
                var24 = _closure1_slot16;
                var21 = _closure1_slot19;
                var18 = {};
                var20 = var24.bind(var3)(var21, var18);
            case 837:
                var18 = new Array(4);
                var18[0] = var20;
                if (!var11) {
                    _fun116657_ip = 864;
                    continue _fun116657
                }
            case 848:
                var24 = _closure1_slot16;
                var21 = _closure1_slot20;
                var20 = {};
                var11 = var24.bind(var3)(var21, var20);
            case 864:
                var18[1] = var11;
                if (!var9) {
                    _fun116657_ip = 887;
                    continue _fun116657
                }
            case 871:
                var21 = _closure1_slot16;
                var20 = _closure1_slot21;
                var11 = {};
                var9 = var21.bind(var3)(var20, var11);
            case 887:
                var18[2] = var9;
                var21 = _closure1_slot16;
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var19 = var11[var19];
                var19 = var9.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var23 = var23.tierPrice;
                var19.style = var23;
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[3] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var10.children = var14;
                var10 = var13.bind(var3)(var12, var10);
                var7[1] = var10;
                var10 = _closure1_slot16;
                var8 = 23;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.PencilIcon;
                var8 = {};
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun116660: for (var _fun116660_ip = 0;;) switch (_fun116660_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.guildId;
                var _closure2_slot0 = var5;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var1 = _closure1_slot18;
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
                var25 = var7.maxTiers;
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
                        _fun116663: for (var _fun116663_ip = 0;;) switch (_fun116663_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = _closure2_slot7;
                                var1 = var1[var0];
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun116663_ip = 23;
                                    continue _fun116663
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
                        var3 = _closure1_slot16;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var0 = 32;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.NavigatorHeader;
                        var0 = {};
                        var4 = 15;
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
                    _fun116660_ip = 489;
                    continue _fun116660
                }
            case 484:
                var5 = var10.id;
            case 489:
                var6[4] = var5;
                var5 = function() { // Environment: var0
                    _fun116666: for (var _fun116666_ip = 0;;) switch (_fun116666_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun116666_ip = 72;
                                continue _fun116666
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
                                _fun116666_ip = 86;
                                continue _fun116666
                            }
                        case 79:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun116666_ip = 175;
                                continue _fun116666
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
                                _fun116666_ip = 149;
                                continue _fun116666
                            }
                        case 140:
                            var4 = _closure2_slot4;
                            var3 = var4.id;
                        case 149:
                            var0.groupListingId = var3;
                            var3 = function() {
                                var2 = _closure2_slot1;
                                var1 = var2.navigate;
                                var0 = _closure1_slot13;
                                var0 = var0.ROLE_SUBSCRIPTIONS_TIERS;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.onAfterTierCreation = var3;
                            var0 = var1.bind(var2)(var0);
                            _fun116666_ip = 253;
                            continue _fun116666;
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
                                _fun116666_ip = 242;
                                continue _fun116666
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
                var5 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot9;
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
                    _fun116669: for (var _fun116669_ip = 0;;) switch (_fun116669_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = _closure1_slot14;
                            var1 = var1.ROLE_SUBSCRIPTION_TIER_TEMPLATE;
                            if (!(var2 === var1)) {
                                _fun116669_ip = 34;
                                continue _fun116669
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
                    _fun116660_ip = 649;
                    continue _fun116660
                }
            case 601:
                var6 = _closure1_slot16;
                var5 = _closure1_slot7;
                var4 = {};
                var7 = var16.spinner;
                var4.style = var7;
                var10 = _closure1_slot16;
                var8 = _closure1_slot6;
                var7 = {};
                var7 = var10.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                return var4;
            case 649:
                var4 = function arg0() {
                    _fun116670: for (var _fun116670_ip = 0;;) switch (_fun116670_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var3 = _closure1_slot10;
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
                                _fun116670_ip = 123;
                                continue _fun116670
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
                    _fun116660_ip = 686;
                    continue _fun116660
                }
            case 669:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot16;
                    var2 = _closure1_slot23;
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
            case 686:
                var2 = _closure1_slot16;
                var1 = _closure1_slot8;
                var0 = {};
                var4 = var16.container;
                var0.style = var4;
                var6 = _closure1_slot17;
                var5 = _closure1_slot7;
                var4 = {};
                var7 = {};
                var7.paddingBottom = var9;
                var4.style = var7;
                var10 = _closure1_slot16;
                var21 = _closure1_slot1;
                var19 = _closure1_slot3;
                var7 = 37;
                var7 = var19[var7];
                var9 = var21.bind(var3)(var7);
                var7 = {};
                var12 = var12.header;
                var7.style = var12;
                var18 = _closure1_slot0;
                var15 = 15;
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
                var17 = _closure1_slot16;
                var12 = 18;
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
                var24 = var20.intl;
                var23 = var24.format;
                var20 = var19[var15];
                var20 = var18.bind(var3)(var20);
                var20 = var20.t;
                var22 = var20.nHRSvM;
                var20 = {};
                var20.maxTiers = var25;
                var20 = var23.bind(var24)(var22, var20);
                var9.children = var20;
                var9 = var17.bind(var3)(var10, var9);
                var7[1] = var9;
                var7[2] = var8;
                var10 = _closure1_slot17;
                var9 = _closure1_slot22;
                var8 = {};
                var8.onPress = var14;
                var8.disabled = var11;
                var17 = _closure1_slot16;
                var11 = 22;
                var11 = var19[var11];
                var14 = var21.bind(var3)(var11);
                var11 = {};
                var20 = 38;
                var20 = var19[var20];
                var20 = var21.bind(var3)(var20);
                var11.source = var20;
                var14 = var17.bind(var3)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot16;
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
    var _closure1_slot24 = var0;
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
    var3 = var15.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var16 = 6;
    var3 = var5[var16];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CurrencyCodes;
    var _closure1_slot12 = var6;
    var13 = var3.Fonts;
    var6 = var3.GuildSettingsSections;
    var _closure1_slot13 = var6;
    var3 = var3.GuildSettingsSubsections;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionIntervalTypes;
    var _closure1_slot15 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var9 = '100%';
    var3.height = var9;
    var6.container = var3;
    var3 = {};
    var14 = 10;
    var9 = var5[var14];
    var18 = var15.bind(var0)(var9);
    var17 = var13.PRIMARY_SEMIBOLD;
    var11 = 11;
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_LINK;
    var10 = 16;
    var21 = var18.bind(var0)(var17, var9, var10);
    var22 = var3;
    var9 = copyDataProperties(var22, var21);
    var6.saveButtonLabel = var3;
    var3 = {};
    var3.paddingHorizontal = var10;
    var6.paddedContainer = var3;
    var3 = {
        'height': 114,
        'width': '100%'
    };
    var6.coverPhoto = var3;
    var3 = {};
    var9 = var5[var14];
    var19 = var15.bind(var0)(var9);
    var18 = var13.PRIMARY_MEDIUM;
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.colors;
    var17 = var9.TEXT_SUBTLE;
    var9 = 14;
    var21 = var19.bind(var0)(var18, var17, var9);
    var22 = var3;
    var9 = copyDataProperties(var22, var21);
    var9 = 'marginTop';
    var3[var9] = var10;
    var6.coverDescription = var3;
    var3 = {
        'marginBottom': 16,
        'paddingHorizontal': 16
    };
    var6.tierManagementDescription = var3;
    var3 = {
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
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var9;
    var9 = var5[var11];
    var9 = var15.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var3.borderRadius = var9;
    var6.tierManagementButton = var3;
    var3 = {
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'flex-start',
        'flex': 1
    };
    var6.tierColumn = var3;
    var9 = {
        'backgroundColor': null,
        'borderRadius': 20,
        'marginEnd': 12,
        'height': 40,
        'width': 40
    };
    var3 = var5[var11];
    var3 = var15.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var3;
    var10 = 12;
    var3 = 40;
    var6.tierIcon = var9;
    var9 = {};
    var9.marginStart = var16;
    var6.tierPrice = var9;
    var9 = {};
    var16 = var5[var11];
    var16 = var15.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.YELLOW_300;
    var9.backgroundColor = var16;
    var16 = var5[var11];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var9.borderRadius = var16;
    var9.paddingHorizontal = var12;
    var6.draftBadge = var9;
    var9 = {};
    var16 = var5[var11];
    var16 = var15.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_860;
    var9.color = var16;
    var16 = 'uppercase';
    var9.textTransform = var16;
    var6.draftBadgeLabel = var9;
    var9 = {};
    var17 = var5[var11];
    var17 = var15.bind(var0)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.PRIMARY_500;
    var9.backgroundColor = var17;
    var17 = var5[var11];
    var17 = var15.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var9.borderRadius = var17;
    var9.paddingHorizontal = var12;
    var6.archiveBadge = var9;
    var9 = {};
    var9.textTransform = var16;
    var6.archiveBadgeLabel = var9;
    var9 = {};
    var17 = var5[var11];
    var17 = var15.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var17;
    var17 = var5[var11];
    var17 = var15.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var9.borderRadius = var17;
    var9.paddingHorizontal = var12;
    var6.unsavedBadge = var9;
    var9 = {};
    var9.textTransform = var16;
    var6.unsavedBadgeLabel = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 3
    };
    var6.detailsRow = var9;
    var9 = {
        'flexDirection': 'row',
        'marginTop': 4
    };
    var6.memberCount = var9;
    var9 = {};
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var13 = var13.PRIMARY_MEDIUM;
    var11 = var5[var11];
    var11 = var15.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var21 = var14.bind(var0)(var13, var11, var10);
    var22 = var9;
    var11 = copyDataProperties(var22, var21);
    var11 = 'marginStart';
    var9[var11] = var12;
    var6.memberCountLabel = var9;
    var9 = {};
    var9.marginStart = var10;
    var6.createTierLabel = var9;
    var9 = {};
    var9.marginTop = var10;
    var6.spinner = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var6.disabled = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot18 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var3 = _closure1_slot16;
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 39;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.guildId = var7;
        var6 = _closure1_slot16;
        var5 = _closure1_slot24;
        var4 = {};
        var4.guildId = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8156, 1410, 3085, 660, 1623, 33, 1297, 4682, 671, 3278, 14884, 1307, 1234, 4606, 10829, 3941, 6784, 632, 10825, 4704, 7516, 1568, 12566, 1469, 10809, 5633, 14866, 10808, 22, 4705, 5634, 14886, 14887, 44, 5930, 14921, 14882, 2]);