// modules/user_settings/native/defs/AccountEnable2faSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var8 = true;
    var1.value = var8;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 6;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.cDgKte;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.ACCOUNT;
    var1.parent = var9;
    var9 = function() {
        _fun81451: for (var _fun81451_ip = 0;;) switch (_fun81451_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var4 = var0.bind(var2)();
                var3 = null;
                var5 = var3 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun81451_ip = 35;
                    continue _fun81451
                }
            case 29:
                var2 = var4.verified;
            case 35:
                if (!(var3 != var2)) {
                    _fun81451_ip = 45;
                    continue _fun81451
                }
            case 39:
                if (var2) {
                    _fun81451_ip = 183;
                    continue _fun81451
                }
            case 45:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.show;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = 5;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.v740sh;
                var6 = var7.bind(var10)(var6);
                var2.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.uggF7o;
                var5 = var6.bind(var7)(var5);
                var2.body = var5;
                var2 = var3.bind(var4)(var2);
                _fun81451_ip = 213;
                continue _fun81451;
            case 183:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.open;
                var1 = var1.bind(var2)();
            case 213:
                return var0;
        }
    };
    var1.onPress = var9;
    var1.withArrow = var8;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useIsTOTPEnabled;
        var0 = var0.bind(var1)();
        var0 = !var0;
        return var0;
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountEnable2faSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 7000, 10165, 10370, 3994, 1234, 8977, 2]);