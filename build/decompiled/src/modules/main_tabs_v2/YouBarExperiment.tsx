// modules/main_tabs_v2/YouBarExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var4 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createExperiment;
    var1 = {
        'id': '2025-09_you_bar',
        'label': 'You Bar',
        'commonTriggerPoint': null,
        'kind': 'user'
    };
    var4 = var4.CONNECTION_OPEN;
    var1.commonTriggerPoint = var4;
    var4 = {
        'enabled': false,
        'backButtonBadge': false,
        'animateBetweenServers': false,
        'profileButton': false
    };
    var1.defaultConfig = var4;
    var4 = {
        'id': 1,
        'label': 'You Bar no profile button'
    };
    var9 = {
        'enabled': true,
        'backButtonBadge': true,
        'animateBetweenServers': false,
        'profileButton': false
    };
    var4.config = var9;
    var9 = new Array(3);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'You Bar profile button'
    };
    var4 = 2;
    var11 = {
        'enabled': true,
        'backButtonBadge': true,
        'animateBetweenServers': false,
        'profileButton': true
    };
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'You Bar with badged back button and animate between servers'
    };
    var11 = {
        'enabled': true,
        'backButtonBadge': true,
        'animateBetweenServers': true,
        'profileButton': false
    };
    var10.config = var11;
    var9[2] = var10;
    var1.treatments = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot0 = var1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/YouBarExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useYouBarEnabled = var4;
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.backButtonBadge;
        return var0;
    };
    var2.useYouBarBackButtonBadgeEnabled = var3;
    var2.YouBarExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3076, 2]);