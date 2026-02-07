// modules/soundboard/native/SoundboardHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SoundboardOrientationConfig;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot8 = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useOrientation;
        var1 = var1.bind(var2)();
        var0 = _closure1_slot7;
        var0 = var0[var1];
        var0 = var0.alternate;
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/native/SoundboardHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        var0 = {};
        var2 = _closure1_slot9;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.soundsPerRow;
        var0.soundsPerRow = var1;
        return var0;
    };
    var2.useSoundPickerListStyleConfig = var3;
    var3 = function() { // Environment: var1
        var0 = _closure1_slot9;
        var3 = undefined;
        var1 = var0.bind(var3)();
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 7;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var5 = var0.width;
        var0 = {};
        var3 = global;
        var4 = var3.Math;
        var3 = var4.min;
        var2 = _closure1_slot8;
        var3 = var3.bind(var4)(var2, var5);
        var2 = var1.soundRowPadding;
        var2 = var3 - var2;
        var1 = var1.soundsPerRow;
        var1 = var2 / var1;
        var0.buttonWidth = var1;
        return var0;
    };
    var2.useSoundButtonStyleConfig = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var5 = var0.shouldFetch;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 8;
        var7 = var6[var3];
        var0 = undefined;
        var10 = var4.bind(var0)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() { // Environment: var1
            var0 = _closure1_slot5;
            var0 = var0.saturation;
            return var0;
        };
        var7 = var9.bind(var10)(var8, var7);
        var3 = var6[var3];
        var8 = var4.bind(var0)(var3);
        var6 = var8.useStateFromStores;
        var3 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isThemeDark;
            var0 = _closure1_slot6;
            var0 = var0.theme;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var6.bind(var8)(var4, var3);
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            var1 = function() { // Environment: var0
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun69202: for (var _fun69202_ip = 0;;) switch (_fun69202_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun69202_ip = 98;
                                    continue _fun69202
                                }
                            case 7:
                                var1 = _closure2_slot0;
                                if (!var1) {
                                    _fun69202_ip = 90;
                                    continue _fun69202
                                }
                            case 17:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var1 = var4[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var5 = var1.FrecencyUserSettingsActionCreators;
                                var1 = var5.loadIfNecessary;
                                var1 = var1.bind(var5)();
                                var1 = 11;
                                var1 = var4[var1];
                                var2 = var3.bind(var2)(var1);
                                var1 = var2.maybeFetchSoundboardSounds;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 84);
                            case 82:
                                return var1;
                            case 84:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun69202_ip = 95;
                                    continue _fun69202
                                }
                            case 90:
                                var2 = undefined;
                                return var2;
                            case 95:
                                return var1;
                            case 98:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useMaybeFetchSoundboardSounds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1298, 3198, 8580, 4934, 7888, 1464, 566, 3207, 1355, 5663, 2]);