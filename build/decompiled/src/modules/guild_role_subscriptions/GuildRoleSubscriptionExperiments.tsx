// modules/guild_role_subscriptions/GuildRoleSubscriptionExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var14 = true;
    var1.value = var14;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var10 = var1.MAX_SUBSCRIPTION_TIERS;
    var1 = 1;
    var3 = var9[var1];
    var5 = var8.bind(var0)(var3);
    var4 = var5.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2022-01_guild_role_subscription_trials',
        'label': 'Guild Role Subscription Trials'
    };
    var6 = {};
    var13 = false;
    var6.enableRoleSubscriptionTrialsForGuild = var13;
    var3.defaultConfig = var6;
    var7 = {
        'id': 1,
        'label': 'Enables guild to create Guild Role Subscription Trials'
    };
    var6 = {};
    var6.enableRoleSubscriptionTrialsForGuild = var14;
    var7.config = var6;
    var6 = new Array(1);
    var6[0] = var7;
    var3.treatments = var6;
    var6 = var4.bind(var5)(var3);
    var3 = var9[var1];
    var5 = var8.bind(var0)(var3);
    var4 = var5.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2022-07_guild_role_subscriptions_variable_max_tiers',
        'label': 'Guild Role Subscription Max Tiers'
    };
    var7 = {};
    var7.enabled = var13;
    var7.maxTiers = var10;
    var3.defaultConfig = var7;
    var11 = [4, 5, 6];
    var10 = var11.map;
    var7 = function(arg0) { // Environment: var7
        var2 = arg0;
        var0 = {};
        var0.id = var2;
        var1 = 'Enables {n} maximum published tiers';
        var0.label = var1;
        var1 = {};
        var3 = true;
        var1.enabled = var3;
        var1.maxTiers = var2;
        var0.config = var1;
        return var0;
    };
    var7 = var10.bind(var11)(var7);
    var3.treatments = var7;
    var5 = var4.bind(var5)(var3);
    var3 = var9[var1];
    var7 = var8.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2022-12_mobile_guild_role_subscription_team_setup',
        'label': 'Mobile Guild Role Subscription Team Setup'
    };
    var10 = {};
    var10.enabled = var13;
    var3.defaultConfig = var10;
    var11 = {
        'id': 1,
        'label': 'Enables guild to allow payout team setup on mobile'
    };
    var10 = {};
    var10.enabled = var14;
    var11.config = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var3.treatments = var10;
    var4 = var4.bind(var7)(var3);
    var3 = var9[var1];
    var11 = var8.bind(var0)(var3);
    var10 = var11.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2023-03_server_subscriptions_tier_templates',
        'label': 'Server Subscriptions Tier Templates'
    };
    var7 = {
        'enabled': false,
        'showCreatorPortalLink': false
    };
    var3.defaultConfig = var7;
    var7 = {
        'id': 1,
        'label': '299 basic tier + no link'
    };
    var12 = {
        'enabled': true,
        'showCreatorPortalLink': false
    };
    var7.config = var12;
    var12 = new Array(3);
    var12[0] = var7;
    var15 = {
        'id': 2,
        'label': '399 basic tier + no link'
    };
    var7 = 2;
    var16 = {
        'enabled': true,
        'showCreatorPortalLink': false
    };
    var15.config = var16;
    var12[1] = var15;
    var15 = {
        'id': 3,
        'label': '399 basic tier + link'
    };
    var16 = {
        'enabled': true,
        'showCreatorPortalLink': true
    };
    var15.config = var16;
    var12[2] = var15;
    var3.treatments = var12;
    var3 = var10.bind(var11)(var3);
    var1 = var9[var1];
    var11 = var8.bind(var0)(var1);
    var10 = var11.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2023-04_server_subscriptions_tier_templates_user',
        'label': 'Server Subscriptions Tier Templates'
    };
    var12 = {};
    var12.enabled = var13;
    var1.defaultConfig = var12;
    var13 = {
        'id': 1,
        'label': 'Enable tier templates for user'
    };
    var12 = {};
    var12.enabled = var14;
    var13.config = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var1.treatments = var12;
    var1 = var10.bind(var11)(var1);
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var2.GuildRoleSubscriptionTrialsExperiment = var6;
    var2.GuildRoleSubscriptionMaxTiersExperiment = var5;
    var2.GuildRoleSubscriptionsMobileTeamSetupExperiment = var4;
    var2.GuildRoleSubscriptionsTierTemplatesExperiment = var3;
    var2.GuildRoleSubscriptionsTierTemplatesUserExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5599, 3076, 2]);