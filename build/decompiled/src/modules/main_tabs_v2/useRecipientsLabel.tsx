// modules/main_tabs_v2/useRecipientsLabel.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/useRecipientsLabel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var4.bind(var2)(var3);
        var4 = var6.useStateFromStoresArray;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var3 = var1.recipients;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot4;
                var1 = var2.getUser;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getName;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var4.bind(var6)(var3, var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun72796: for (var _fun72796_ip = 0;;) switch (_fun72796_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = var0.name;
                    var3 = '';
                    var0 = null;
                    if (!(var3 !== var4)) {
                        _fun72796_ip = 448;
                        continue _fun72796
                    }
                case 25:
                    var7 = _closure2_slot1;
                    var2 = var7.length;
                    var6 = 0;
                    var1 = null;
                    if (!(var6 !== var2)) {
                        _fun72796_ip = 445;
                        continue _fun72796
                    }
                case 45:
                    var2 = var7.length;
                    var8 = 1;
                    if (!(var8 !== var2)) {
                        _fun72796_ip = 371;
                        continue _fun72796
                    }
                case 60:
                    var2 = var7.length;
                    var10 = 2;
                    if (!(var10 !== var2)) {
                        _fun72796_ip = 289;
                        continue _fun72796
                    }
                case 75:
                    var2 = var7.length;
                    var3 = 3;
                    if (!(var3 !== var2)) {
                        _fun72796_ip = 195;
                        continue _fun72796
                    }
                case 87:
                    var2 = var7.length;
                    var9 = var2 - var3;
                    var11 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var10];
                    var3 = undefined;
                    var4 = var11.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var2[var10];
                    var2 = var11.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.VYfueb;
                    var2 = {};
                    var11 = var7[var6];
                    var2.first = var11;
                    var11 = var7[var8];
                    var2.second = var11;
                    var11 = var7[var10];
                    var2.third = var11;
                    var2.count = var9;
                    var1 = var4.bind(var5)(var3, var2);
                    _fun72796_ip = 445;
                    continue _fun72796;
                case 195:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var10];
                    var3 = undefined;
                    var4 = var9.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var2[var10];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.QDB5et;
                    var2 = {};
                    var9 = var7[var6];
                    var2.first = var9;
                    var9 = var7[var8];
                    var2.second = var9;
                    var9 = var7[var10];
                    var2.third = var9;
                    var1 = var4.bind(var5)(var3, var2);
                    _fun72796_ip = 445;
                    continue _fun72796;
                case 289:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var10];
                    var3 = undefined;
                    var4 = var9.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var2[var10];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.gwRP0Y;
                    var2 = {};
                    var9 = var7[var6];
                    var2.first = var9;
                    var8 = var7[var8];
                    var2.second = var8;
                    var1 = var4.bind(var5)(var3, var2);
                    _fun72796_ip = 445;
                    continue _fun72796;
                case 371:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2["J+Wpst"];
                    var2 = {};
                    var6 = var7[var6];
                    var2.first = var6;
                    var1 = var4.bind(var5)(var3, var2);
                case 445:
                    var0 = var1;
                case 448:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useRecipientsLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 1234, 566, 1304, 3236, 2]);