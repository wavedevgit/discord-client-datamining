// modules/user_settings/native/defs/IcymiTabSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.D4clKq;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.ADVANCED;
    var1.parent = var8;
    var8 = function() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 1;
        var1 = var4[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var3 = _closure1_slot0;
        var0 = 2;
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.ICYMI_LAB_FEATURE;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useValue = var8;
    var8 = function arg0() {
        _fun85400: for (var _fun85400_ip = 0;;) switch (_fun85400_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 3;
                var3 = var0[var2];
                var0 = undefined;
                var8 = var4.bind(var0)(var3);
                var7 = var8.itemInteracted;
                var6 = 'show';
                if (!var5) {
                    _fun85400_ip = 45;
                    continue _fun85400
                }
            case 41:
                var6 = 'hide';
            case 45:
                var4 = 'icymi_tab_toggle';
                var3 = 'press';
                var3 = var7.bind(var8)(var6, var4, var3);
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = var6[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.feedPageActioned;
                var2 = {};
                var7 = {
                    'actionGestureType': 'press',
                    'actionTargetElement': 'icymi_tab_toggle',
                    'actionIntentType': 'configure',
                    'actionDestinationType': null
                };
                var2.actionParameters = var7;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot0;
                var1 = 4;
                var1 = var6[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.toggleLabFeature;
                var1 = 2;
                var1 = var6[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ICYMI_LAB_FEATURE;
                var1 = {};
                var1.enabled = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.onValueChange = var8;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var3 = var0.ICYMIExperiment;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = 'settings';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/IcymiTabSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6967, 8829, 8826, 8832, 10972, 8943, 1234, 2]);