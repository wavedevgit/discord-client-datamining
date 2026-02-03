// modules/notification_center/useRelativeTimestamp.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/useRelativeTimestamp.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101363: for (var _fun101363_ip = 0;;) switch (_fun101363_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.timestamp;
                var _closure2_slot0 = var6;
                var5 = var0.abbreviated;
                var7 = undefined;
                if (!(var5 === var7)) {
                    _fun101363_ip = 29;
                    continue _fun101363
                }
            case 27:
                var5 = true;
            case 29:
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var7;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getRelativeTimestamp;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot3;
                var0 = 2;
                var3 = var2.bind(var7)(var3, var0);
                var0 = 0;
                var0 = var3[var0];
                var2 = 1;
                var2 = var3[var2];
                _closure2_slot2 = var2;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun101365: for (var _fun101365_ip = 0;;) switch (_fun101365_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 2;
                            var6 = var5[var0];
                            var0 = undefined;
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.getRelativeTimestamp;
                            var6 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var7.bind(var8)(var6, var2);
                            var2 = var3.bind(var0)(var2);
                            var3 = global;
                            var7 = var3.Date;
                            var2 = var7.now;
                            var2 = var2.bind(var7)();
                            var2 = var2 - var6;
                            var6 = _closure1_slot1;
                            var7 = 3;
                            var5 = var5[var7];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.Millis;
                            var5 = var5.DAY;
                            if (!(!(var2 > var5))) {
                                _fun101365_ip = 249;
                                continue _fun101365
                            }
                        case 115:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.Millis;
                            var5 = var5.HOUR;
                            if (!(!(var2 >= var5))) {
                                _fun101365_ip = 179;
                                continue _fun101365
                            }
                        case 148:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.Millis;
                            var5 = var5.MINUTE;
                            _fun101365_ip = 208;
                            continue _fun101365;
                        case 179:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.Millis;
                            var5 = var4.HOUR;
                        case 208:
                            var4 = var3.setInterval;
                            var2 = var2 % var5;
                            var3 = var5 - var2;
                            var2 = function() { // Environment: var1
                                var2 = _closure2_slot2;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 2;
                                var3 = var3[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.getRelativeTimestamp;
                                var3 = _closure2_slot0;
                                var1 = _closure2_slot1;
                                var1 = var4.bind(var5)(var3, var1);
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var4.bind(var0)(var2, var5, var3);
                            var _closure3_slot0 = var2;
                            var1 = function() { // Environment: var1
                                var0 = global;
                                var2 = var0.clearInterval;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var1;
                        case 249:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useRelativeTimestamp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4222, 667, 2]);