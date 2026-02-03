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
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/useGuildActionRows.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102717: for (var _fun102717_ip = 0;;) switch (_fun102717_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var4 = _closure1_slot1;
                var24 = _closure1_slot2;
                var2 = 3;
                var2 = var24[var2];
                var22 = undefined;
                var3 = var4.bind(var22)(var2);
                var2 = var7.id;
                var15 = var3.bind(var22)(var2);
                var21 = _closure1_slot0;
                var2 = 4;
                var2 = var24[var2];
                var5 = var21.bind(var22)(var2);
                var3 = var5.useCanReviewGuildMemberApplications;
                var2 = var7.id;
                var6 = var3.bind(var5)(var2);
                var2 = 5;
                var2 = var24[var2];
                var5 = var21.bind(var22)(var2);
                var3 = var5.useShowRoleSubscriptionsInChannelList;
                var2 = var7.id;
                var11 = var3.bind(var5)(var2);
                var2 = 6;
                var2 = var24[var2];
                var3 = var21.bind(var22)(var2);
                var2 = var3.useGuildShopVisibleInGuild;
                var10 = var2.bind(var3)(var7);
                var2 = 7;
                var2 = var24[var2];
                var3 = var21.bind(var22)(var2);
                var2 = var3.hasSocialLayerStorefront;
                var8 = var2.bind(var3)(var7);
                var2 = 8;
                var2 = var24[var2];
                var5 = var21.bind(var22)(var2);
                var3 = var5.useIsEligibleForSocialLayerStorefrontUserExperiment;
                var2 = {};
                var23 = 'guild-action-rows';
                var2.location = var23;
                var9 = var3.bind(var5)(var2);
                var2 = 9;
                var2 = var24[var2];
                var5 = var21.bind(var22)(var2);
                var3 = var5.useCanSeeOnboardingHome;
                var2 = var7.id;
                var17 = var3.bind(var5)(var2);
                var2 = 10;
                var2 = var24[var2];
                var12 = var21.bind(var22)(var2);
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
                var18 = var5.bind(var12)(var3, var0, var2);
                var0 = 11;
                var0 = var24[var0];
                var2 = var4.bind(var22)(var0);
                var0 = var7.id;
                var19 = var2.bind(var22)(var0);
                var0 = 12;
                var0 = var24[var0];
                var3 = var21.bind(var22)(var0);
                var2 = var3.useAllActionsCompleted;
                var0 = var7.id;
                var16 = var2.bind(var3)(var0);
                var0 = 13;
                var0 = var24[var0];
                var3 = var21.bind(var22)(var0);
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
                var2 = var24[var2];
                var13 = var21.bind(var22)(var2);
                var5 = var13.useShowBrowseChannelsExperiment;
                var2 = 15;
                var2 = var24[var2];
                var25 = var21.bind(var22)(var2);
                var20 = var25.isOptInEnabledForGuild;
                var2 = var7.id;
                var2 = var20.bind(var25)(var2);
                var2 = !var2;
                var13 = var5.bind(var13)(var2);
                var20 = var7.features;
                var5 = var20.has;
                var2 = var3.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY;
                var2 = var5.bind(var20)(var2);
                var2 = 16;
                var2 = var24[var2];
                var4 = var4.bind(var22)(var2);
                var2 = var7.id;
                var4 = var4.bind(var22)(var2);
                var2 = 17;
                var2 = var24[var2];
                var5 = var21.bind(var22)(var2);
                var2 = var5.useGuildPowerupsMobileEnabledExperiment;
                var26 = 'useGuildActionRows';
                var5 = var2.bind(var5)(var26);
                var2 = 18;
                var2 = var24[var2];
                var25 = var21.bind(var22)(var2);
                var20 = var25.useGameServerEnabled;
                var2 = var7.id;
                var2 = var20.bind(var25)(var2, var26);
                var25 = var7.features;
                var20 = var25.has;
                var3 = var3.GAME_SERVERS;
                var3 = var20.bind(var25)(var3);
                var20 = 19;
                var20 = var24[var20];
                var22 = var21.bind(var22)(var20);
                var21 = var22.useIsBoostProgressBarEnabled;
                var20 = {};
                var20.location = var23;
                var20 = var21.bind(var22)(var7, var20);
                if (!var12) {
                    _fun102717_ip = 630;
                    continue _fun102717
                }
            case 610:
                var21 = var0.push;
                var20 = _closure1_slot4;
                var20 = var20.GUILD_HUB_HEADER_OPTIONS;
                var20 = var21.bind(var0)(var20);
            case 630:
                var16 = !var16;
                if (!var16) {
                    _fun102717_ip = 639;
                    continue _fun102717
                }
            case 636:
                var16 = var17;
            case 639:
                if (!var16) {
                    _fun102717_ip = 645;
                    continue _fun102717
                }
            case 642:
                var16 = var19;
            case 645:
                if (!var16) {
                    _fun102717_ip = 654;
                    continue _fun102717
                }
            case 648:
                var19 = null;
                var16 = var19 != var18;
            case 654:
                if (!var16) {
                    _fun102717_ip = 668;
                    continue _fun102717
                }
            case 657:
                var19 = var18.length;
                var18 = 0;
                var16 = var19 > var18;
            case 668:
                if (!var16) {
                    _fun102717_ip = 691;
                    continue _fun102717
                }
            case 671:
                var18 = var0.push;
                var16 = _closure1_slot4;
                var16 = var16.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                var16 = var18.bind(var0)(var16);
            case 691:
                var16 = !var12;
                if (!var16) {
                    _fun102717_ip = 700;
                    continue _fun102717
                }
            case 697:
                var16 = var17;
            case 700:
                if (!var16) {
                    _fun102717_ip = 723;
                    continue _fun102717
                }
            case 703:
                var17 = var0.push;
                var16 = _closure1_slot4;
                var16 = var16.GUILD_HOME;
                var16 = var17.bind(var0)(var16);
            case 723:
                if (!var15) {
                    _fun102717_ip = 746;
                    continue _fun102717
                }
            case 726:
                var16 = var0.push;
                var15 = _closure1_slot4;
                var15 = var15.GUILD_SCHEDULED_EVENTS;
                var15 = var16.bind(var0)(var15);
            case 746:
                var12 = !var12;
                if (!var12) {
                    _fun102717_ip = 755;
                    continue _fun102717
                }
            case 752:
                var12 = var14;
            case 755:
                if (!var12) {
                    _fun102717_ip = 761;
                    continue _fun102717
                }
            case 758:
                var12 = var13;
            case 761:
                if (!var12) {
                    _fun102717_ip = 784;
                    continue _fun102717
                }
            case 764:
                var13 = var0.push;
                var12 = _closure1_slot4;
                var12 = var12.CHANNELS_AND_ROLES;
                var12 = var13.bind(var0)(var12);
            case 784:
                if (!var11) {
                    _fun102717_ip = 807;
                    continue _fun102717
                }
            case 787:
                var12 = var0.push;
                var11 = _closure1_slot4;
                var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
                var11 = var12.bind(var0)(var11);
            case 807:
                if (!var10) {
                    _fun102717_ip = 830;
                    continue _fun102717
                }
            case 810:
                var11 = var0.push;
                var10 = _closure1_slot4;
                var10 = var10.GUILD_SHOP;
                var10 = var11.bind(var0)(var10);
            case 830:
                if (!var8) {
                    _fun102717_ip = 836;
                    continue _fun102717
                }
            case 833:
                var8 = var9;
            case 836:
                if (!var8) {
                    _fun102717_ip = 859;
                    continue _fun102717
                }
            case 839:
                var9 = var0.push;
                var8 = _closure1_slot4;
                var8 = var8.GUILD_GAME_SHOP;
                var8 = var9.bind(var0)(var8);
            case 859:
                if (!var6) {
                    _fun102717_ip = 888;
                    continue _fun102717
                }
            case 862:
                var9 = var7.features;
                var8 = var9.has;
                var7 = _closure1_slot5;
                var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var6 = var8.bind(var9)(var7);
            case 888:
                if (!var6) {
                    _fun102717_ip = 911;
                    continue _fun102717
                }
            case 891:
                var7 = var0.push;
                var6 = _closure1_slot4;
                var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
                var6 = var7.bind(var0)(var6);
            case 911:
                if (!var4) {
                    _fun102717_ip = 917;
                    continue _fun102717
                }
            case 914:
                var4 = var5;
            case 917:
                if (!var4) {
                    _fun102717_ip = 940;
                    continue _fun102717
                }
            case 920:
                var5 = var0.push;
                var4 = _closure1_slot4;
                var4 = var4.GUILD_BOOSTS;
                var4 = var5.bind(var0)(var4);
            case 940:
                if (!var2) {
                    _fun102717_ip = 946;
                    continue _fun102717
                }
            case 943:
                var2 = var3;
            case 946:
                if (!var2) {
                    _fun102717_ip = 969;
                    continue _fun102717
                }
            case 949:
                var2 = var0.push;
                var1 = _closure1_slot4;
                var1 = var1.GAME_SERVERS;
                var1 = var2.bind(var0)(var1);
            case 969:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4304, 4574, 660, 11674, 5635, 5614, 5633, 3485, 3487, 4576, 632, 4577, 11647, 5636, 12448, 4575, 9959, 13389, 5637, 8150, 2]);