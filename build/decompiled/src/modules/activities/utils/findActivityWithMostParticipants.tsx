// modules/activities/utils/findActivityWithMostParticipants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/findActivityWithMostParticipants.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun101589: for (var _fun101589_ip = 0;;) switch (_fun101589_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var4)) {
                    _fun101589_ip = 57;
                    continue _fun101589
                }
            case 16:
                var1 = 1;
                if (!(var1 !== var4)) {
                    _fun101589_ip = 50;
                    continue _fun101589
                }
            case 23:
                var5 = var3.reduce;
                var4 = var3[var2];
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun101590: for (var _fun101590_ip = 0;;) switch (_fun101590_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var2 = var0.userIds;
                            var3 = var2.size;
                            var2 = var1.userIds;
                            var2 = var2.size;
                            if (!(var3 < var2)) {
                                _fun101590_ip = 35;
                                continue _fun101590
                            }
                        case 32:
                            var0 = var1;
                        case 35:
                            return var0;
                    }
                };
                var1 = var5.bind(var3)(var1, var4);
                _fun101589_ip = 54;
                continue _fun101589;
            case 50:
                var1 = var3[var2];
            case 54:
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun101591: for (var _fun101591_ip = 0;;) switch (_fun101591_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.length;
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun101591_ip = 129;
                    continue _fun101591
                }
            case 16:
                var4 = 1;
                if (!(var4 !== var3)) {
                    _fun101591_ip = 123;
                    continue _fun101591
                }
            case 23:
                var5 = var1[var0];
                var3 = new Array(2);
                var3[0] = var5;
                var5 = var1[var0];
                var9 = var5.userIds;
                var7 = new Array(0);
                var10 = var7;
                var8 = 0;
                var5 = arraySpread(var10, var9, var8);
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = var2.isBlockedOrIgnored;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var5 = var5.length;
                var3[1] = var5;
                var5 = var3[var0];
                var _closure2_slot0 = var5;
                var3 = var3[var4];
                var _closure2_slot1 = var3;
                var4 = var1.forEach;
                var3 = function(arg0) { // Environment: var2
                    _fun101593: for (var _fun101593_ip = 0;;) switch (_fun101593_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.userIds;
                            var3 = new Array(0);
                            var4 = 0;
                            var6 = var3;
                            var0 = arraySpread(var6, var5, var4);
                            var2 = var3.filter;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = var2.isBlockedOrIgnored;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            var2 = var0.length;
                            var3 = _closure2_slot1;
                            if (!(var2 > var3)) {
                                _fun101593_ip = 65;
                                continue _fun101593
                            }
                        case 57:
                            _closure2_slot1 = var2;
                            _closure2_slot0 = var1;
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                return var2;
            case 123:
                var0 = var1[var0];
                return var0;
            case 129:
                var0 = null;
                return var0;
        }
    };
    var2.findActivityWithMostNonBlockedOrIgnoredParticipants = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3100, 2]);