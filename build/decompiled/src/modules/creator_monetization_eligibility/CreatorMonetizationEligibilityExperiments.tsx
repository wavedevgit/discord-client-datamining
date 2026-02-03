// modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var12 = true;
    var1.value = var12;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var7[var1];
    var0 = undefined;
    var8 = var6.bind(var0)(var3);
    var4 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2022-04_creator_monetization_country_allowlist',
        'label': 'Creator Monetization Available in Country'
    };
    var5 = {};
    var11 = false;
    var5.isUserEligibleForCreatorMonetization = var11;
    var3.defaultConfig = var5;
    var10 = {
        'id': 1,
        'label': 'Enables users to view Creator Monetization entrypoints'
    };
    var5 = 1;
    var9 = {};
    var9.isUserEligibleForCreatorMonetization = var12;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var4 = var4.bind(var8)(var3);
    var3 = var7[var1];
    var9 = var6.bind(var0)(var3);
    var8 = var9.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2022-11_creator_monetization_onboarding_waitlist',
        'label': 'Creator Monetization Onboarding Waitlist'
    };
    var10 = {};
    var10.enableWaitlist = var11;
    var3.defaultConfig = var10;
    var13 = {
        'id': 1,
        'label': 'Enables Guilds to (possibly) see the waitlist'
    };
    var10 = {};
    var10.enableWaitlist = var12;
    var13.config = var10;
    var10 = new Array(1);
    var10[0] = var13;
    var3.treatments = var10;
    var3 = var8.bind(var9)(var3);
    var1 = var7[var1];
    var9 = var6.bind(var0)(var1);
    var8 = var9.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2023-01_creator_monetization_nag_activate_users',
        'label': 'Creator Monetization Nag Activate Users'
    };
    var10 = {};
    var10.enableCreatorMonetizationNagActivateForUser = var11;
    var1.defaultConfig = var10;
    var11 = {
        'id': 1,
        'label': 'Enables users to see nag bar to activate server subscriptions'
    };
    var10 = {};
    var10.enableCreatorMonetizationNagActivateForUser = var12;
    var11.config = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var1.treatments = var10;
    var1 = var8.bind(var9)(var1);
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperiments.tsx';
    var5 = var6.bind(var7)(var5);
    var2.CreatorMonetizationCountryAllowlistExperiment = var4;
    var2.CreatorMonetizationOnboardingWaitlistExperiment = var3;
    var2.CreatorMonetizationNagActivateExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3115, 2]);