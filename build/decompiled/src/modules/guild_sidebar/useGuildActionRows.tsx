// modules/guild_sidebar/useGuildActionRows.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelListGuildActionRow;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot5 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useGuildActionRows, environment: var1
        _fun103160: for (var _fun103160_ip = 0;;) switch (_fun103160_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var4 = _closure1_slot1;
                var23 = _closure1_slot2;
                var2 = 3;
                var2 = var23[var2];
                var21 = undefined;
                var3 = var4.bind(var21)(var2);
                var2 = var7.id;
                var15 = var3.bind(var21)(var2);
                var20 = _closure1_slot0;
                var2 = 4;
                var2 = var23[var2];
                var5 = var20.bind(var21)(var2);
                var3 = var5.useCanReviewGuildMemberApplications;
                var2 = var7.id;
                var6 = var3.bind(var5)(var2);
                var2 = 5;
                var2 = var23[var2];
                var5 = var20.bind(var21)(var2);
                var3 = var5.useShowRoleSubscriptionsInChannelList;
                var2 = var7.id;
                var11 = var3.bind(var5)(var2);
                var2 = 6;
                var2 = var23[var2];
                var3 = var20.bind(var21)(var2);
                var2 = var3.useGuildShopVisibleInGuild;
                var10 = var2.bind(var3)(var7);
                var2 = 7;
                var2 = var23[var2];
                var3 = var20.bind(var21)(var2);
                var2 = var3.hasSocialLayerStorefront;
                var8 = var2.bind(var3)(var7);
                var2 = 8;
                var2 = var23[var2];
                var5 = var20.bind(var21)(var2);
                var3 = var5.useIsEligibleForSocialLayerStorefrontUserExperiment;
                var2 = {};
                var9 = 'guild-action-rows';
                var2.location = var9;
                var9 = var3.bind(var5)(var2);
                var2 = 9;
                var2 = var23[var2];
                var5 = var20.bind(var21)(var2);
                var3 = var5.useCanSeeOnboardingHome;
                var2 = var7.id;
                var17 = var3.bind(var5)(var2);
                var2 = 10;
                var2 = var23[var2];
                var12 = var20.bind(var21)(var2);
                var5 = var12.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var13 = var7.id;
                var2 = new Array(1);
                var2[0] = var13;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getNewMemberActions;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var5.bind(var12)(var3, var0, var2);
                var0 = 11;
                var0 = var23[var0];
                var2 = var4.bind(var21)(var0);
                var0 = var7.id;
                var18 = var2.bind(var21)(var0);
                var0 = 12;
                var0 = var23[var0];
                var3 = var20.bind(var21)(var0);
                var2 = var3.useAllActionsCompleted;
                var0 = var7.id;
                var19 = var2.bind(var3)(var0);
                var0 = 13;
                var0 = var23[var0];
                var3 = var20.bind(var21)(var0);
                var2 = var3.useCanAccessMemberSafetyPage;
                var0 = var7.id;
                var0 = var2.bind(var3)(var0);
                var0 = new Array(0);
                var12 = var7.features;
                var5 = var12.has;
                var3 = _closure1_slot5;
                var2 = var3.HUB;
                var12 = var5.bind(var12)(var2);
                var13 = var7.features;
                var5 = var13.has;
                var2 = var3.COMMUNITY;
                var14 = var5.bind(var13)(var2);
                var2 = 14;
                var2 = var23[var2];
                var13 = var20.bind(var21)(var2);
                var5 = var13.useShowBrowseChannelsExperiment;
                var2 = 15;
                var2 = var23[var2];
                var24 = var20.bind(var21)(var2);
                var22 = var24.isOptInEnabledForGuild;
                var2 = var7.id;
                var2 = var22.bind(var24)(var2);
                var2 = !var2;
                var13 = var5.bind(var13)(var2);
                var22 = var7.features;
                var5 = var22.has;
                var2 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
                var2 = var5.bind(var22)(var2);
                var2 = 16;
                var2 = var23[var2];
                var4 = var4.bind(var21)(var2);
                var2 = var7.id;
                var4 = var4.bind(var21)(var2);
                var2 = 17;
                var2 = var23[var2];
                var5 = var20.bind(var21)(var2);
                var2 = var5.useGuildPowerupsMobileEnabledExperiment;
                var22 = 'useGuildActionRows';
                var5 = var2.bind(var5)(var22);
                var2 = 18;
                var2 = var23[var2];
                var21 = var20.bind(var21)(var2);
                var20 = var21.useGameServerEnabled;
                var2 = var7.id;
                var2 = var20.bind(var21)(var2, var22);
                var21 = var7.features;
                var20 = var21.has;
                var3 = var3.GAME_SERVERS;
                var3 = var20.bind(var21)(var3);
                if (!var12) {
                    _fun103160_ip = 600;
                    continue _fun103160
                }
            case 580:
                var21 = var0.push;
                var20 = _closure1_slot4;
                var20 = var20.GUILD_HUB_HEADER_OPTIONS;
                var20 = var21.bind(var0)(var20);
            case 600:
                if (var19) {
                    _fun103160_ip = 648;
                    continue _fun103160
                }
            case 603:
                if (!var17) {
                    _fun103160_ip = 648;
                    continue _fun103160
                }
            case 606:
                if (!var18) {
                    _fun103160_ip = 648;
                    continue _fun103160
                }
            case 609:
                var18 = null;
                if (!(var18 != var16)) {
                    _fun103160_ip = 648;
                    continue _fun103160
                }
            case 615:
                var18 = var16.length;
                var16 = 0;
                if (!(var18 > var16)) {
                    _fun103160_ip = 648;
                    continue _fun103160
                }
            case 626:
                var18 = var0.push;
                var16 = _closure1_slot4;
                var16 = var16.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                var16 = var18.bind(var0)(var16);
                _fun103160_ip = 654;
                continue _fun103160;
            case 648:
                var16 = var7.premiumProgressBarEnabled;
            case 654:
                var16 = !var12;
                if (!var16) {
                    _fun103160_ip = 663;
                    continue _fun103160
                }
            case 660:
                var16 = var17;
            case 663:
                if (!var16) {
                    _fun103160_ip = 686;
                    continue _fun103160
                }
            case 666:
                var17 = var0.push;
                var16 = _closure1_slot4;
                var16 = var16.GUILD_HOME;
                var16 = var17.bind(var0)(var16);
            case 686:
                if (!var15) {
                    _fun103160_ip = 709;
                    continue _fun103160
                }
            case 689:
                var16 = var0.push;
                var15 = _closure1_slot4;
                var15 = var15.GUILD_SCHEDULED_EVENTS;
                var15 = var16.bind(var0)(var15);
            case 709:
                var12 = !var12;
                if (!var12) {
                    _fun103160_ip = 718;
                    continue _fun103160
                }
            case 715:
                var12 = var14;
            case 718:
                if (!var12) {
                    _fun103160_ip = 724;
                    continue _fun103160
                }
            case 721:
                var12 = var13;
            case 724:
                if (!var12) {
                    _fun103160_ip = 747;
                    continue _fun103160
                }
            case 727:
                var13 = var0.push;
                var12 = _closure1_slot4;
                var12 = var12.CHANNELS_AND_ROLES;
                var12 = var13.bind(var0)(var12);
            case 747:
                if (!var11) {
                    _fun103160_ip = 770;
                    continue _fun103160
                }
            case 750:
                var12 = var0.push;
                var11 = _closure1_slot4;
                var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
                var11 = var12.bind(var0)(var11);
            case 770:
                if (!var10) {
                    _fun103160_ip = 793;
                    continue _fun103160
                }
            case 773:
                var11 = var0.push;
                var10 = _closure1_slot4;
                var10 = var10.GUILD_SHOP;
                var10 = var11.bind(var0)(var10);
            case 793:
                if (!var8) {
                    _fun103160_ip = 799;
                    continue _fun103160
                }
            case 796:
                var8 = var9;
            case 799:
                if (!var8) {
                    _fun103160_ip = 822;
                    continue _fun103160
                }
            case 802:
                var9 = var0.push;
                var8 = _closure1_slot4;
                var8 = var8.GUILD_GAME_SHOP;
                var8 = var9.bind(var0)(var8);
            case 822:
                if (!var6) {
                    _fun103160_ip = 851;
                    continue _fun103160
                }
            case 825:
                var9 = var7.features;
                var8 = var9.has;
                var7 = _closure1_slot5;
                var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var6 = var8.bind(var9)(var7);
            case 851:
                if (!var6) {
                    _fun103160_ip = 874;
                    continue _fun103160
                }
            case 854:
                var7 = var0.push;
                var6 = _closure1_slot4;
                var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
                var6 = var7.bind(var0)(var6);
            case 874:
                if (!var4) {
                    _fun103160_ip = 880;
                    continue _fun103160
                }
            case 877:
                var4 = var5;
            case 880:
                if (!var4) {
                    _fun103160_ip = 903;
                    continue _fun103160
                }
            case 883:
                var5 = var0.push;
                var4 = _closure1_slot4;
                var4 = var4.GUILD_BOOSTS;
                var4 = var5.bind(var0)(var4);
            case 903:
                if (!var2) {
                    _fun103160_ip = 909;
                    continue _fun103160
                }
            case 906:
                var2 = var3;
            case 909:
                if (!var2) {
                    _fun103160_ip = 932;
                    continue _fun103160
                }
            case 912:
                var2 = var0.push;
                var1 = _closure1_slot4;
                var1 = var1.GAME_SERVERS;
                var1 = var2.bind(var0)(var1);
            case 932:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4265, 4535, 660, 11685, 5598, 5577, 5596, 3453, 3455, 4537, 632, 4538, 11658, 5599, 12452, 4536, 9873, 13400, 5600, 2]);