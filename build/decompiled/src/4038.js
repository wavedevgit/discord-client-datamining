// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var5 = true;
    var1.value = var5;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = {};
    var3 = false;
    var1 = {
        'controlledBottomTabs': false,
        'synchronousScreenUpdatesEnabled': false,
        'synchronousHeaderConfigUpdatesEnabled': false,
        'synchronousHeaderSubviewUpdatesEnabled': false,
        'androidResetScreenShadowStateOnOrientationChangeEnabled': true,
        'iosPreventReattachmentOfDismissedScreens': false
    };
    var0.experiment = var1;
    var1 = {};
    var0.stable = var1;
    var _closure1_slot0 = var0;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = function() {
            var0 = _closure1_slot0;
            var1 = var0.experiment;
            var0 = _closure2_slot0;
            var0 = var1[var0];
            return var0;
        };
        var0.get = var2;
        var1 = function arg0() {
            _fun37455: for (var _fun37455_ip = 0;;) switch (_fun37455_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot0;
                    var4 = var0.experiment;
                    var3 = _closure2_slot0;
                    var3 = var4[var3];
                    var3 = var2 !== var3;
                    if (!var3) {
                        _fun37455_ip = 60;
                        continue _fun37455
                    }
                case 34:
                    var4 = _closure1_slot0;
                    var5 = var4.experiment;
                    var4 = _closure2_slot0;
                    var5 = var5[var4];
                    var4 = _closure2_slot1;
                    var3 = var5 !== var4;
                case 60:
                    if (!var3) {
                        _fun37455_ip = 114;
                        continue _fun37455
                    }
                case 63:
                    var3 = global;
                    var5 = var3.console;
                    var4 = var5.error;
                    var8 = _closure2_slot0;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = '[RNScreens] ';
                    var3 = ' feature flag modified for a second time; this might lead to unexpected effects';
                    var3 = var7.bind(var6)(var8, var3);
                    var3 = var4.bind(var5)(var3);
                case 114:
                    var1 = _closure1_slot0;
                    var1 = var1.experiment;
                    var0 = _closure2_slot0;
                    var1[var0] = var2;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var1;
        return var0;
    };
    var0 = undefined;
    var12 = 'controlledBottomTabs';
    var6 = var1.bind(var0)(var12, var3);
    var _closure1_slot1 = var6;
    var11 = 'synchronousScreenUpdatesEnabled';
    var6 = var1.bind(var0)(var11, var3);
    var _closure1_slot2 = var6;
    var10 = 'synchronousHeaderConfigUpdatesEnabled';
    var6 = var1.bind(var0)(var10, var3);
    var _closure1_slot3 = var6;
    var9 = 'synchronousHeaderSubviewUpdatesEnabled';
    var6 = var1.bind(var0)(var9, var3);
    var _closure1_slot4 = var6;
    var8 = 'androidResetScreenShadowStateOnOrientationChangeEnabled';
    var5 = var1.bind(var0)(var8, var5);
    var _closure1_slot5 = var5;
    var6 = 'iosPreventReattachmentOfDismissedScreens';
    var1 = var1.bind(var0)(var6, var3);
    var _closure1_slot6 = var1;
    var1 = {};
    var3 = {};
    var7 = function() {
        var1 = _closure1_slot1;
        var0 = var1.get;
        var0 = var0.bind(var1)();
        return var0;
    };
    var5 = function arg0() {
        var2 = _closure1_slot1;
        var1 = var2.set;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    Object.defineProperty(var3, var12, {
        get: var7,
        set: var5,
        enumerable: true
    });
    var7 = function() {
        var1 = _closure1_slot2;
        var0 = var1.get;
        var0 = var0.bind(var1)();
        return var0;
    };
    var5 = function arg0() {
        var2 = _closure1_slot2;
        var1 = var2.set;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    Object.defineProperty(var3, var11, {
        get: var7,
        set: var5,
        enumerable: true
    });
    var7 = function() {
        var1 = _closure1_slot3;
        var0 = var1.get;
        var0 = var0.bind(var1)();
        return var0;
    };
    var5 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.set;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    Object.defineProperty(var3, var10, {
        get: var7,
        set: var5,
        enumerable: true
    });
    var7 = function() {
        var1 = _closure1_slot4;
        var0 = var1.get;
        var0 = var0.bind(var1)();
        return var0;
    };
    var5 = function arg0() {
        var2 = _closure1_slot4;
        var1 = var2.set;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    Object.defineProperty(var3, var9, {
        get: var7,
        set: var5,
        enumerable: true
    });
    var7 = function() {
        var1 = _closure1_slot5;
        var0 = var1.get;
        var0 = var0.bind(var1)();
        return var0;
    };
    var5 = function arg0() {
        var2 = _closure1_slot5;
        var1 = var2.set;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    Object.defineProperty(var3, var8, {
        get: var7,
        set: var5,
        enumerable: true
    });
    var5 = function() {
        var1 = _closure1_slot6;
        var0 = var1.get;
        var0 = var0.bind(var1)();
        return var0;
    };
    var4 = function arg0() {
        var2 = _closure1_slot6;
        var1 = var2.set;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    Object.defineProperty(var3, var6, {
        get: var5,
        set: var4,
        enumerable: true
    });
    var1.experiment = var3;
    var3 = {};
    var1.stable = var3;
    var2.default = var1;
    var3 = {
        'isNewBackTitleImplementation': true,
        'usesHeaderFlexboxImplementation': true,
        'usesNewAndroidHeaderHeightImplementation': true
    };
    var2.compatibilityFlags = var3;
    var2.featureFlags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);