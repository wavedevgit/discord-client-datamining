// modules/user_settings/native/defs/QuestHomeSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var9 = var1.UserSettingsSections;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.QuestsExperimentLocations;
    var _closure1_slot2 = var1;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRoute;
    var1 = {};
    var7 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.JALI2K;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var7;
    var7 = function() {
        _fun83199: for (var _fun83199_ip = 0;;) switch (_fun83199_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.useIsEligibleForQuests;
                var0 = {};
                var5 = _closure1_slot2;
                var5 = var5.QUEST_HOME_MOBILE;
                var0.location = var5;
                var0 = var2.bind(var4)(var0);
                if (!var0) {
                    _fun83199_ip = 88;
                    continue _fun83199
                }
            case 55:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isMetaQuest;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 88:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var7 = null;
    var1.parent = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.QuestsIcon;
    var1.IconComponent = var7;
    var7 = {};
    var9 = var9.QUESTS;
    var7.route = var9;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var7.getComponent = var8;
    var1.screen = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/QuestHomeSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5228, 5314, 4106, 8999, 1234, 10703, 10705, 2]);