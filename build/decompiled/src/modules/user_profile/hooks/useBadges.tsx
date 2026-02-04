// modules/user_profile/hooks/useBadges.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useBadges.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun57181: for (var _fun57181_ip = 0;;) switch (_fun57181_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var6 = var3.LegacyUsernameDisabled;
                var3 = var6.useSetting;
                var3 = var3.bind(var6)();
                if (!(var5 !== var2)) {
                    _fun57181_ip = 56;
                    continue _fun57181
                }
            case 53:
                var3 = var2;
            case 56:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 3;
                var6 = var8[var2];
                var11 = var7.bind(var5)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot3;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var1
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var10.bind(var11)(var9, var6);
                var2 = var8[var2];
                var8 = var7.bind(var5)(var2);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot2;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var0);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun57181_ip = 245;
                    continue _fun57181
                }
            case 147:
                var7 = var0 == var4;
                var5 = undefined;
                if (var7) {
                    _fun57181_ip = 166;
                    continue _fun57181
                }
            case 156:
                var7 = var4.getBadges;
                var5 = var7.bind(var4)();
            case 166:
                if (!(var0 == var5)) {
                    _fun57181_ip = 174;
                    continue _fun57181
                }
            case 170:
                var5 = new Array(0);
            case 174:
                var0 = var0 != var6;
                if (!var0) {
                    _fun57181_ip = 195;
                    continue _fun57181
                }
            case 181:
                var6 = var6.id;
                var4 = var4.userId;
                var0 = var6 === var4;
            case 195:
                if (!var0) {
                    _fun57181_ip = 201;
                    continue _fun57181
                }
            case 198:
                var0 = var3;
            case 201:
                var3 = var5;
                if (!var0) {
                    _fun57181_ip = 222;
                    continue _fun57181
                }
            case 207:
                var4 = var5.filter;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = 'legacy_username';
                    var0 = var1 !== var0;
                    return var0;
                };
                var3 = var4.bind(var5)(var0);
            case 222:
                var0 = var3;
                if (!var2) {
                    _fun57181_ip = 243;
                    continue _fun57181
                }
            case 228:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun57185: for (var _fun57185_ip = 0;;) switch (_fun57185_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = {};
                            var9 = var0;
                            var8 = var1;
                            var2 = copyDataProperties(var9, var8);
                            var3 = var1.id;
                            var2 = 'legacy_username';
                            if (!(var3 !== var2)) {
                                _fun57185_ip = 35;
                                continue _fun57185
                            }
                        case 28:
                            var2 = var1.description;
                            _fun57185_ip = 97;
                            continue _fun57185;
                        case 35:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 4;
                            var3 = var7[var1];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1.Br1ls3;
                            var2 = var3.bind(var4)(var1);
                        case 97:
                            var1 = 'description';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 243:
                return var0;
            case 245:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 'quest_completed';
    var2.QUEST_COMPLETED_BADGE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3237, 1621, 1348, 632, 1234, 2]);