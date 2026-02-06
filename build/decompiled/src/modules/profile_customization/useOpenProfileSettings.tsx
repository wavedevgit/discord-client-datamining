// modules/profile_customization/useOpenProfileSettings.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ProfileCustomizationSubsection;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/useOpenProfileSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun60034: for (var _fun60034_ip = 0;;) switch (_fun60034_ip) {
            case 0:
                var1 = arguments[0];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun60034_ip = 13;
                    continue _fun60034
                }
            case 11:
                var1 = {};
            case 13:
                var7 = var1.guild;
                var _closure2_slot0 = var7;
                var6 = var1.scrollPosition;
                var _closure2_slot1 = var6;
                var5 = var1.analyticsLocation;
                var _closure2_slot2 = var5;
                var4 = var1.analyticsLocations;
                var _closure2_slot3 = var4;
                var2 = _closure1_slot2;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun60035: for (var _fun60035_ip = 0;;) switch (_fun60035_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var6 = null;
                            if (!(var6 != var0)) {
                                _fun60035_ip = 58;
                                continue _fun60035
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.initGuildIdentitySettings;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 58:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.openUserSettings;
                            var1 = {};
                            var4 = _closure1_slot3;
                            var4 = var4.PROFILE_CUSTOMIZATION;
                            var1.screen = var4;
                            var4 = _closure2_slot0;
                            if (!(var6 == var4)) {
                                _fun60035_ip = 126;
                                continue _fun60035
                            }
                        case 114:
                            var4 = _closure1_slot4;
                            var4 = var4.USER_PROFILE;
                            _fun60035_ip = 136;
                            continue _fun60035;
                        case 126:
                            var5 = _closure1_slot4;
                            var4 = var5.GUILD;
                        case 136:
                            var1.subsection = var4;
                            var4 = _closure2_slot2;
                            var1.analyticsLocation = var4;
                            var4 = _closure2_slot3;
                            var1.analyticsLocations = var4;
                            var3 = _closure2_slot1;
                            var1.scrollPosition = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 665, 5587, 5931, 5730, 5930, 2]);