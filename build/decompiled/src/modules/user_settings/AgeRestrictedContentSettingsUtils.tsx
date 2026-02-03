// modules/user_settings/AgeRestrictedContentSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun64089: for (var _fun64089_ip = 0;;) switch (_fun64089_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                if (!var0) {
                    _fun64089_ip = 15;
                    continue _fun64089
                }
            case 9:
                var1 = arg3;
                var0 = !var1;
            case 15:
                var0 = !var0;
                if (!var0) {
                    _fun64089_ip = 51;
                    continue _fun64089
                }
            case 21:
                var2 = false;
                var1 = arg2;
                var1 = var2 !== var1;
                if (!var1) {
                    _fun64089_ip = 48;
                    continue _fun64089
                }
            case 33:
                var2 = null;
                var2 = var2 != var3;
                if (!var2) {
                    _fun64089_ip = 45;
                    continue _fun64089
                }
            case 42:
                var2 = var3;
            case 45:
                var1 = var2;
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/AgeRestrictedContentSettingsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.resolveNsfwTogglesWithDefaults = var3;
    var3 = function() { // Environment: var1
        _fun64090: for (var _fun64090_ip = 0;;) switch (_fun64090_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var0 = var8[var0];
                var5 = undefined;
                var0 = var7.bind(var5)(var0);
                var2 = var0.ViewNsfwCommands;
                var0 = var2.useSetting;
                var4 = var0.bind(var2)();
                var0 = 2;
                var0 = var8[var0];
                var2 = var7.bind(var5)(var0);
                var0 = var2.useIsAgeVerified;
                var3 = var0.bind(var2)();
                var0 = 3;
                var0 = var8[var0];
                var2 = var7.bind(var5)(var0);
                var0 = var2.useNSFWAllowed;
                var2 = var0.bind(var2)();
                var0 = 4;
                var0 = var8[var0];
                var9 = var7.bind(var5)(var0);
                var6 = var9.useIsFeatureAgeGated;
                var0 = 5;
                var0 = var8[var0];
                var0 = var7.bind(var5)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.COMMANDS_TOGGLE;
                var6 = var6.bind(var9)(var0);
                var0 = 6;
                var0 = var8[var0];
                var8 = var7.bind(var5)(var0);
                var7 = var8.useIsGidgetPawtectEnabled;
                var0 = 'useViewNsfwCommandsOrDefault';
                var0 = var7.bind(var8)(var0);
                var1 = _closure1_slot3;
                if (var0) {
                    _fun64090_ip = 169;
                    continue _fun64090
                }
            case 166:
                var0 = var6;
            case 169:
                var14 = undefined;
                var13 = var4;
                var12 = var0;
                var11 = var2;
                var10 = var3;
                var0 = var14[var1](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var2.useViewNsfwCommandsOrDefault = var3;
    var3 = function() { // Environment: var1
        _fun64091: for (var _fun64091_ip = 0;;) switch (_fun64091_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var0 = var8[var0];
                var5 = undefined;
                var0 = var7.bind(var5)(var0);
                var2 = var0.ViewNsfwGuilds;
                var0 = var2.useSetting;
                var4 = var0.bind(var2)();
                var0 = 2;
                var0 = var8[var0];
                var2 = var7.bind(var5)(var0);
                var0 = var2.useIsAgeVerified;
                var3 = var0.bind(var2)();
                var0 = 3;
                var0 = var8[var0];
                var2 = var7.bind(var5)(var0);
                var0 = var2.useNSFWAllowed;
                var2 = var0.bind(var2)();
                var0 = 4;
                var0 = var8[var0];
                var9 = var7.bind(var5)(var0);
                var6 = var9.useIsFeatureAgeGated;
                var0 = 5;
                var0 = var8[var0];
                var0 = var7.bind(var5)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.COMMANDS_TOGGLE;
                var6 = var6.bind(var9)(var0);
                var0 = 6;
                var0 = var8[var0];
                var8 = var7.bind(var5)(var0);
                var7 = var8.useIsGidgetPawtectEnabled;
                var0 = 'useViewNsfwGuildsOrDefault';
                var0 = var7.bind(var8)(var0);
                var1 = _closure1_slot3;
                if (var0) {
                    _fun64091_ip = 171;
                    continue _fun64091
                }
            case 168:
                var0 = var6;
            case 171:
                var14 = undefined;
                var13 = var4;
                var12 = var0;
                var11 = var2;
                var10 = var3;
                var0 = var14[var1](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var2.useViewNsfwGuildsOrDefault = var3;
    var3 = function() { // Environment: var1
        _fun64092: for (var _fun64092_ip = 0;;) switch (_fun64092_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var0 = var8[var0];
                var5 = undefined;
                var0 = var7.bind(var5)(var0);
                var1 = var0.ViewNsfwCommands;
                var0 = var1.getSetting;
                var4 = var0.bind(var1)();
                var0 = 2;
                var0 = var8[var0];
                var1 = var7.bind(var5)(var0);
                var0 = var1.isAgeVerified;
                var3 = var0.bind(var1)();
                var1 = _closure1_slot2;
                var0 = var1.getCurrentUser;
                var6 = var0.bind(var1)();
                var0 = 4;
                var0 = var8[var0];
                var9 = var7.bind(var5)(var0);
                var1 = var9.isFeatureAgeGated;
                var0 = 5;
                var0 = var8[var0];
                var0 = var7.bind(var5)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.COMMANDS_TOGGLE;
                var0 = var1.bind(var9)(var0);
                var1 = 6;
                var1 = var8[var1];
                var8 = var7.bind(var5)(var1);
                var7 = var8.getIsGidgetPawtectEnabled;
                var1 = 'getViewNsfwCommandsOrDefault';
                var1 = var7.bind(var8)(var1);
                var2 = _closure1_slot3;
                if (var1) {
                    _fun64092_ip = 160;
                    continue _fun64092
                }
            case 157:
                var1 = var0;
            case 160:
                var0 = null;
                var7 = var0 == var6;
                var0 = undefined;
                if (var7) {
                    _fun64092_ip = 177;
                    continue _fun64092
                }
            case 171:
                var0 = var6.nsfwAllowed;
            case 177:
                var14 = undefined;
                var13 = var4;
                var12 = var1;
                var11 = var0;
                var10 = var3;
                var0 = var14[var2](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var2.getViewNsfwCommandsOrDefault = var3;
    var1 = function() { // Environment: var1
        _fun64093: for (var _fun64093_ip = 0;;) switch (_fun64093_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var0 = var8[var0];
                var5 = undefined;
                var0 = var7.bind(var5)(var0);
                var1 = var0.ViewNsfwGuilds;
                var0 = var1.getSetting;
                var4 = var0.bind(var1)();
                var0 = 2;
                var0 = var8[var0];
                var1 = var7.bind(var5)(var0);
                var0 = var1.isAgeVerified;
                var3 = var0.bind(var1)();
                var1 = _closure1_slot2;
                var0 = var1.getCurrentUser;
                var6 = var0.bind(var1)();
                var0 = 4;
                var0 = var8[var0];
                var9 = var7.bind(var5)(var0);
                var1 = var9.isFeatureAgeGated;
                var0 = 5;
                var0 = var8[var0];
                var0 = var7.bind(var5)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.COMMANDS_TOGGLE;
                var0 = var1.bind(var9)(var0);
                var1 = 6;
                var1 = var8[var1];
                var8 = var7.bind(var5)(var1);
                var7 = var8.getIsGidgetPawtectEnabled;
                var1 = 'getViewNsfwGuildsOrDefault';
                var1 = var7.bind(var8)(var1);
                var2 = _closure1_slot3;
                if (var1) {
                    _fun64093_ip = 160;
                    continue _fun64093
                }
            case 157:
                var1 = var0;
            case 160:
                var0 = null;
                var7 = var0 == var6;
                var0 = undefined;
                if (var7) {
                    _fun64093_ip = 177;
                    continue _fun64093
                }
            case 171:
                var0 = var6.nsfwAllowed;
            case 177:
                var14 = undefined;
                var13 = var4;
                var12 = var1;
                var11 = var0;
                var10 = var3;
                var0 = var14[var2](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var2.getViewNsfwGuildsOrDefault = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 1348, 4248, 7955, 4276, 4300, 4275, 2]);