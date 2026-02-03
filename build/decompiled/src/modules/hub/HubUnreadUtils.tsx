// modules/hub/HubUnreadUtils.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/HubUnreadUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun102105: for (var _fun102105_ip = 0;;) switch (_fun102105_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    if (!(var6 != var1)) {
                        _fun102105_ip = 174;
                        continue _fun102105
                    }
                case 18:
                    var5 = _closure1_slot4;
                    var4 = var5.ackMessageId;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    var _closure3_slot0 = var2;
                    if (!(var6 != var2)) {
                        _fun102105_ip = 170;
                        continue _fun102105
                    }
                case 53:
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.values;
                    var8 = _closure1_slot3;
                    var7 = var8.getDirectoryEntries;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var7.bind(var8)(var3);
                    if (!(var6 == var3)) {
                        _fun102105_ip = 96;
                        continue _fun102105
                    }
                case 94:
                    var3 = {};
                case 96:
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = global;
                        var2 = var0.Date;
                        var0 = arg0;
                        var4 = var0.createdAt;
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = var1.getTime;
                        var1 = var0.bind(var1)();
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 3;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.extractTimestamp;
                        var0 = _closure3_slot0;
                        var0 = var2.bind(var3)(var0);
                        var0 = var1 > var0;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var3 = var2.Math;
                    var2 = var3.min;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MAX_CATEGORY_SERVERS;
                    var0 = var0.length;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                case 170:
                    var0 = 0;
                    return var0;
                case 174:
                    var0 = 0;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useHubUnreadCount = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8918, 3938, 566, 21, 8910, 2]);