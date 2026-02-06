// modules/user_settings/hooks/useDerivedDMSpamFilterSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExplicitContentFilterToDmSpamFilterV2;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/hooks/useDerivedDMSpamFilterSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun81925: for (var _fun81925_ip = 0;;) switch (_fun81925_ip) {
            case 0:
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var0 = var3[var1];
                var4 = undefined;
                var0 = var8.bind(var4)(var0);
                var5 = var0.DmSpamFilterV2;
                var0 = var5.useSetting;
                var0 = var0.bind(var5)();
                var1 = var3[var1];
                var1 = var8.bind(var4)(var1);
                var5 = var1.ExplicitContentFilter;
                var1 = var5.useSetting;
                var7 = var1.bind(var5)();
                var1 = 3;
                var1 = var3[var1];
                var9 = var8.bind(var4)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot2;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var9)(var5, var1);
                var1 = 4;
                var1 = var3[var1];
                var9 = var8.bind(var4)(var1);
                var5 = var9.useIsGidgetPawtectEnabled;
                var1 = 'use_derived_dm_spam_filter_setting';
                var1 = var5.bind(var9)(var1);
                var5 = 5;
                var3 = var3[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.DmSpamFilterV2;
                var3 = var3.DEFAULT_UNSET;
                if (!(var0 === var3)) {
                    _fun81925_ip = 274;
                    continue _fun81925
                }
            case 167:
                var3 = null;
                var9 = var3 == var6;
                var8 = undefined;
                if (var9) {
                    _fun81925_ip = 184;
                    continue _fun81925
                }
            case 178:
                var8 = var6.nsfwAllowed;
            case 184:
                var6 = false;
                if (!(var6 === var8)) {
                    _fun81925_ip = 193;
                    continue _fun81925
                }
            case 190:
                if (var1) {
                    _fun81925_ip = 242;
                    continue _fun81925
                }
            case 193:
                var6 = _closure1_slot3;
                var1 = var6.get;
                var1 = var1.bind(var6)(var7);
                if (!(var3 == var1)) {
                    _fun81925_ip = 240;
                    continue _fun81925
                }
            case 211:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.DmSpamFilterV2;
                var1 = var3.NON_FRIENDS;
            case 240:
                _fun81925_ip = 271;
                continue _fun81925;
            case 242:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.DmSpamFilterV2;
                var1 = var2.FRIENDS_AND_NON_FRIENDS;
            case 271:
                var0 = var1;
            case 274:
                return var0;
        }
    };
    var2.useDerivedDmSpamFilterSettingValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 1350, 1348, 566, 4278, 1311, 2]);