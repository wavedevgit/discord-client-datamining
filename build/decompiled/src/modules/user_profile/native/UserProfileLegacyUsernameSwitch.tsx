// modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileLegacyUsernameSwitch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79955: for (var _fun79955_ip = 0;;) switch (_fun79955_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.legacyUsername;
                var1 = var0.pendingLegacyUsernameDisabled;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var5 = var2.LegacyUsernameDisabled;
                var2 = var5.useSetting;
                var2 = var2.bind(var5)();
                var _closure2_slot0 = var2;
                var5 = var2;
                if (!(var3 !== var1)) {
                    _fun79955_ip = 72;
                    continue _fun79955
                }
            case 69:
                var5 = var1;
            case 72:
                var2 = _closure1_slot2;
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 3;
                var0 = var10[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.UserProfileEditFormSwitch;
                var0 = {};
                var5 = !var5;
                var0.value = var5;
                var5 = 4;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["3cWDuO"];
                var7 = var8.bind(var11)(var7);
                var0.label = var7;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.aYhclf;
                var5 = {};
                var5.username = var9;
                var5 = var7.bind(var8)(var6, var5);
                var0.subLabel = var5;
                var4 = function arg0() {
                    _fun79956: for (var _fun79956_ip = 0;;) switch (_fun79956_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = !var0;
                            var1 = _closure2_slot0;
                            if (!(var2 !== var1)) {
                                _fun79956_ip = 58;
                                continue _fun79956
                            }
                        case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.setPendingLegacyUsernameDisabled;
                            var0 = !var0;
                            var0 = var1.bind(var2)(var0);
                            _fun79956_ip = 93;
                            continue _fun79956;
                        case 58:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.resetPendingLegacyUsernameDisabled;
                            var0 = var0.bind(var1)();
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onValueChange = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1348, 10125, 1234, 5683, 2]);