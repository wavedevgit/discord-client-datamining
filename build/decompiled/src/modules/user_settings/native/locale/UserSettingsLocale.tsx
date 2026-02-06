// modules/user_settings/native/locale/UserSettingsLocale.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun85483: for (var _fun85483_ip = 0;;) switch (_fun85483_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun85483_ip = 71;
                            continue _fun85483
                        }
                    case 10:
                        var1 = _closure1_slot6;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var5);
                        SaveGenerator(address = 28);
                    case 26:
                        return var1;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun85483_ip = 68;
                            continue _fun85483
                        }
                    case 34:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 7;
                        var3 = var6[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.updateLocale;
                        var3 = var3.bind(var4)(var5);
                        return var2;
                    case 68:
                        return var1;
                    case 71:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var7 = var3.Image;
    var _closure1_slot4 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.setAppLocale;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.padding = var10;
    var3.content = var9;
    var9 = {
        'width': 27,
        'height': 18
    };
    var3.flagImage = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function() {
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 8;
        var0 = var11[var0];
        var3 = undefined;
        var4 = var10.bind(var3)(var0);
        var2 = var4.useStateFromStores;
        var0 = _closure1_slot7;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var8
            var0 = _closure1_slot7;
            var0 = var0.locale;
            return var0;
        };
        var12 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = _closure1_slot9;
        var4 = var4.content;
        var0.contentContainerStyle = var4;
        var4 = 9;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.SafeAreaPaddingView;
        var4 = {};
        var6 = true;
        var4.bottom = var6;
        var6 = 10;
        var6 = var11[var6];
        var6 = var10.bind(var3)(var6);
        var7 = var6.TableRadioGroup;
        var6 = {};
        var6.defaultValue = var12;
        var9 = _closure1_slot10;
        var6.onChange = var9;
        var9 = 11;
        var9 = var11[var9];
        var10 = var10.bind(var3)(var9);
        var9 = var10.getAvailableLocales;
        var10 = var9.bind(var10)();
        var9 = var10.map;
        var8 = function(arg0) { // Environment: var8
            var0 = arg0;
            var11 = var0.localizedName;
            var4 = var0.name;
            var8 = var0.value;
            var3 = _closure1_slot8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var0 = 12;
            var0 = var10[var0];
            var2 = undefined;
            var0 = var9.bind(var2)(var0);
            var1 = var0.TableRadioRow;
            var0 = {};
            var0.value = var8;
            var0.label = var4;
            var5 = 11;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var5 = var5.bind(var6)(var11);
            var0.subLabel = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var7 = _closure1_slot9;
            var7 = var7.flagImage;
            var5.style = var7;
            var7 = 13;
            var7 = var10[var7];
            var7 = var9.bind(var2)(var7);
            var7 = var7.flags;
            var7 = var7[var8];
            var5.source = var7;
            var5 = var3.bind(var2)(var6, var5);
            var0.icon = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var8 = var9.bind(var10)(var8);
        var6.children = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/locale/UserSettingsLocale.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1686, 1685, 33, 671, 7651, 566, 4737, 5427, 1234, 5426, 10982, 2]);