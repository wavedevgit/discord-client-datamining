// modules/polls/chat/useFormattedExpirationLabel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var1 = function arg0() {
        _fun56322: for (var _fun56322_ip = 0;;) switch (_fun56322_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.bind(var0)();
                if (!(!(var7 <= var4))) {
                    _fun56322_ip = 292;
                    continue _fun56322
                }
            case 38:
                var3 = var7.diff;
                var2 = 'days';
                var5 = var3.bind(var7)(var4, var2);
                var6 = 1;
                if (!(!(var5 > var6))) {
                    _fun56322_ip = 228;
                    continue _fun56322
                }
            case 64:
                var3 = var7.diff;
                var2 = 'hours';
                var8 = var3.bind(var7)(var4, var2);
                if (!(!(var8 > var6))) {
                    _fun56322_ip = 164;
                    continue _fun56322
                }
            case 84:
                var3 = var7.diff;
                var2 = 'minutes';
                var9 = var3.bind(var7)(var4, var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var6];
                var4 = var3.bind(var0)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var2 = var2[var6];
                var2 = var3.bind(var0)(var2);
                var2 = var2.t;
                var3 = var2["3SLXAz"];
                var2 = {};
                var2.minutes = var9;
                var2 = var4.bind(var7)(var3, var2);
                return var2;
            case 164:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var6];
                var4 = var3.bind(var0)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var2 = var2[var6];
                var2 = var3.bind(var0)(var2);
                var2 = var2.t;
                var3 = var2.BWqf0c;
                var2 = {};
                var2.hours = var8;
                var2 = var4.bind(var7)(var3, var2);
                return var2;
            case 228:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = var1[var6];
                var3 = var2.bind(var0)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var6];
                var1 = var2.bind(var0)(var1);
                var1 = var1.t;
                var2 = var1.dex68a;
                var1 = {};
                var1.days = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 292:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/chat/useFormattedExpirationLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun56323: for (var _fun56323_ip = 0;;) switch (_fun56323_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun56323_ip = 13;
                    continue _fun56323
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var1 = _closure1_slot3;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2.default = var3;
    var2.formatExpirationLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3045, 1234, 2]);