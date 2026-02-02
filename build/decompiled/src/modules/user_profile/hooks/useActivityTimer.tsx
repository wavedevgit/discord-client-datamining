// modules/user_profile/hooks/useActivityTimer.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useEffect;
    var _closure1_slot4 = var6;
    var3 = var3.useState;
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        var0 = global;
        var2 = var0.String;
        var1 = undefined;
        var0 = arg0;
        var3 = var2.bind(var1)(var0);
        var2 = var3.padStart;
        var1 = 2;
        var0 = '0';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useActivityTimer.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var13 = var0.start;
        var2 = var0.end;
        var6 = _closure1_slot5;
        var4 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 3;
        var0 = var12[var0];
        var11 = undefined;
        var0 = var4.bind(var11)(var0);
        var0 = var0.Interval;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var16 = var4;
        var0 = new var16[var0](var15);
        var0 = var0 instanceof Object ? var0 : var4;
        var0 = var6.bind(var11)(var0);
        var8 = _closure1_slot3;
        var7 = 1;
        var0 = var8.bind(var11)(var0, var7);
        var4 = 0;
        var10 = var0[var4];
        var _closure2_slot0 = var10;
        var5 = global;
        var9 = var5.Date;
        var0 = var9.now;
        var0 = var0.bind(var9)();
        var6 = var6.bind(var11)(var0);
        var0 = 2;
        var6 = var8.bind(var11)(var6, var0);
        var9 = var6[var4];
        var6 = var6[var7];
        var _closure2_slot1 = var6;
        var8 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var10;
        var3 = function() { // Environment: var3
            var4 = _closure2_slot0;
            var3 = var4.start;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var1 = var1.Millis;
            var2 = var1.HALF_SECOND;
            var1 = function() { // Environment: var0
                var2 = _closure2_slot1;
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            var0 = function() { // Environment: var0
                var1 = _closure2_slot0;
                var0 = var1.stop;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var3 = var8.bind(var11)(var3, var6);
        var2 = var2 - var13;
        var10 = _closure1_slot1;
        var1 = var12[var0];
        var1 = var10.bind(var11)(var1);
        var1 = var1.Millis;
        var1 = var1.SECOND;
        var8 = var2 / var1;
        var2 = var5.Math;
        var1 = var2.max;
        var6 = var5.Math;
        var3 = var6.min;
        var9 = var9 - var13;
        var0 = var12[var0];
        var0 = var10.bind(var11)(var0);
        var0 = var0.Millis;
        var0 = var0.SECOND;
        var0 = var9 / var0;
        var0 = var3.bind(var6)(var0, var8);
        var1 = var1.bind(var2)(var0, var4);
        var0 = {};
        var0.elapsed = var1;
        var0.duration = var8;
        var3 = var5.Math;
        var2 = var3.max;
        var6 = var5.Math;
        var5 = var6.min;
        var1 = var1 / var8;
        var1 = var5.bind(var6)(var1, var7);
        var1 = var2.bind(var3)(var1, var4);
        var0.percentage = var1;
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        _fun62495: for (var _fun62495_ip = 0;;) switch (_fun62495_ip) {
            case 0:
                var8 = arg0;
                var1 = global;
                var2 = var1.Math;
                var0 = var2.floor;
                var5 = var0.bind(var2)(var8);
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 2;
                var3 = var10[var0];
                var4 = undefined;
                var3 = var9.bind(var4)(var3);
                var3 = var3.Seconds;
                var3 = var3.MINUTE;
                var3 = var5 % var3;
                var7 = var1.Math;
                var6 = var7.floor;
                var5 = var10[var0];
                var5 = var9.bind(var4)(var5);
                var5 = var5.Seconds;
                var5 = var5.MINUTE;
                var5 = var8 / var5;
                var6 = var6.bind(var7)(var5);
                var5 = var10[var0];
                var5 = var9.bind(var4)(var5);
                var5 = var5.Seconds;
                var5 = var5.MINUTE;
                var5 = var6 % var5;
                var7 = var1.Math;
                var6 = var7.floor;
                var0 = var10[var0];
                var0 = var9.bind(var4)(var0);
                var0 = var0.Seconds;
                var0 = var0.HOUR;
                var0 = var8 / var0;
                var6 = var6.bind(var7)(var0);
                var0 = 0;
                if (!(var0 !== var6)) {
                    _fun62495_ip = 231;
                    continue _fun62495
                }
            case 178:
                var0 = _closure1_slot6;
                var10 = var0.bind(var4)(var6);
                var13 = var0.bind(var4)(var5);
                var11 = var0.bind(var4)(var3);
                var0 = var1.HermesInternal;
                var7 = var0.concat;
                var16 = '';
                var0 = ':';
                var15 = var10;
                var14 = var0;
                var12 = var0;
                var0 = var16[var7](var15, var14, var13, var12, var11, var10);
                _fun62495_ip = 271;
                continue _fun62495;
            case 231:
                var2 = _closure1_slot6;
                var5 = var2.bind(var4)(var5);
                var4 = var2.bind(var4)(var3);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ':';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 271:
                return var0;
        }
    };
    var2.formatTime = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 667, 3591, 2]);