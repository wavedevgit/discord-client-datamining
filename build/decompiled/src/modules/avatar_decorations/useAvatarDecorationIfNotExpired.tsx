// modules/avatar_decorations/useAvatarDecorationIfNotExpired.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/avatar_decorations/useAvatarDecorationIfNotExpired.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun50918: for (var _fun50918_ip = 0;;) switch (_fun50918_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var6 = _closure1_slot3;
                var4 = var6.useState;
                var2 = false;
                var5 = var4.bind(var6)(var2);
                var4 = _closure1_slot2;
                var0 = undefined;
                var2 = 2;
                var5 = var4.bind(var0)(var5, var2);
                var2 = 0;
                var2 = var5[var2];
                var _closure2_slot1 = var2;
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot2 = var4;
                var5 = var6.useRef;
                var4 = null;
                var4 = var5.bind(var6)(var4);
                var _closure2_slot3 = var4;
                var7 = var6.useEffect;
                var5 = new Array(1);
                var5[0] = var1;
                var4 = function() { // Environment: var3
                    var2 = function() {
                        _fun50920: for (var _fun50920_ip = 0;;) switch (_fun50920_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun50920_ip = 42;
                                    continue _fun50920
                                }
                            case 13:
                                var3 = _closure2_slot0;
                                var1 = 'expiresAt';
                                var1 = var1 in var3;
                                if (!var1) {
                                    _fun50920_ip = 42;
                                    continue _fun50920
                                }
                            case 28:
                                var1 = _closure2_slot0;
                                var1 = var1.expiresAt;
                                if (!(var2 == var1)) {
                                    _fun50920_ip = 60;
                                    continue _fun50920
                                }
                            case 42:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                _fun50920_ip = 252;
                                continue _fun50920;
                            case 60:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 2;
                                var2 = var4[var2];
                                var4 = undefined;
                                var5 = var3.bind(var4)(var2);
                                var3 = var5.isAvatarDecorationExpired;
                                var2 = _closure2_slot0;
                                var3 = var3.bind(var5)(var2);
                                var5 = _closure2_slot2;
                                var5 = var5.bind(var4)(var3);
                                var5 = var2.expiresAt;
                                var2 = 1000;
                                var6 = var2 * var5;
                                var2 = global;
                                var7 = var2.Date;
                                var5 = var7.now;
                                var5 = var5.bind(var7)();
                                var6 = var6 - var5;
                                if (var3) {
                                    _fun50920_ip = 252;
                                    continue _fun50920
                                }
                            case 149:
                                var3 = 0;
                                if (!(var6 > var3)) {
                                    _fun50920_ip = 252;
                                    continue _fun50920
                                }
                            case 155:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 3;
                                var1 = var5[var1];
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.Timeout;
                                var3 = var1.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var10 = var3;
                                var1 = new var10[var1](var9);
                                var1 = var1 instanceof Object ? var1 : var3;
                                var4 = var1.start;
                                var5 = var2.Math;
                                var3 = var5.min;
                                var2 = 2147483647;
                                var3 = var3.bind(var5)(var2, var6);
                                var2 = function() { // Environment: var2
                                    var1 = _closure3_slot0;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var2 = var4.bind(var1)(var3, var2);
                                var0 = _closure2_slot3;
                                var0.current = var1;
                            case 252:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var0 = function() { // Environment: var0
                        _fun50922: for (var _fun50922_ip = 0;;) switch (_fun50922_ip) {
                            case 0:
                                var0 = _closure2_slot3;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun50922_ip = 33;
                                    continue _fun50922
                                }
                            case 23:
                                var1 = var2.stop;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var7.bind(var6)(var4, var5);
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var2;
                var3 = function() { // Environment: var3
                    _fun50923: for (var _fun50923_ip = 0;;) switch (_fun50923_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun50923_ip = 35;
                                continue _fun50923
                            }
                        case 10:
                            var0 = _closure2_slot3;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun50923_ip = 35;
                                continue _fun50923
                            }
                        case 25:
                            var0 = var1.stop;
                            var0 = var0.bind(var1)();
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                if (var2) {
                    _fun50918_ip = 134;
                    continue _fun50918
                }
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1605, 3621, 2]);