// modules/user_settings/parseSettingsUrl.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun72447: for (var _fun72447_ip = 0;;) switch (_fun72447_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 == var2;
                var0 = '';
                if (var1) {
                    _fun72447_ip = 67;
                    continue _fun72447
                }
            case 16:
                var1 = var2.toUpperCase;
                var5 = var1.bind(var2)();
                var4 = var5.replace;
                var3 = _closure1_slot4;
                var2 = '_';
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.replace;
                var2 = _closure1_slot5;
                var1 = 'AND';
                var0 = var3.bind(var4)(var2, var1);
            case 67:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.hasOwnProperty;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot3 = var3;
    var3 = /(-|%20)/g;
    var _closure1_slot4 = var3;
    var3 = /%26/g;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/parseSettingsUrl.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun72449: for (var _fun72449_ip = 0;;) switch (_fun72449_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var1 = var2.split;
                var0 = '/';
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot2;
                var9 = undefined;
                var0 = 4;
                var1 = var1.bind(var9)(var2, var0);
                var10 = 2;
                var2 = var1[var10];
                var0 = 3;
                var1 = var1[var0];
                var0 = _closure1_slot6;
                var4 = var0.bind(var9)(var2);
                var2 = var0.bind(var9)(var1);
                var0 = _closure1_slot7;
                var5 = var0.bind(var9)(var4);
                var0 = '';
                var1 = var0 === var2;
                if (var1) {
                    _fun72449_ip = 95;
                    continue _fun72449
                }
            case 86:
                var0 = _closure1_slot7;
                var1 = var0.bind(var9)(var2);
            case 95:
                var8 = null;
                var0 = null;
                if (!var5) {
                    _fun72449_ip = 180;
                    continue _fun72449
                }
            case 102:
                var0 = null;
                if (!var1) {
                    _fun72449_ip = 180;
                    continue _fun72449
                }
            case 107:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var10];
                var6 = var6.bind(var9)(var5);
                var5 = var6.parse;
                if (!(var8 == var7)) {
                    _fun72449_ip = 150;
                    continue _fun72449
                }
            case 136:
                var8 = global;
                var8 = var8.location;
                var7 = var8.search;
            case 150:
                var5 = var5.bind(var6)(var7);
                var1.params = var5;
                var3 = _closure1_slot3;
                var3 = var3[var4];
                var1.section = var3;
                var1.subsection = var2;
                var0 = var1;
            case 180:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 660, 3299, 2]);