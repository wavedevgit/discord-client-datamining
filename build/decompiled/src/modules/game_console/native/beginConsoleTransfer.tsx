// modules/game_console/native/beginConsoleTransfer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun66984: for (var _fun66984_ip = 0;;) switch (_fun66984_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg0;
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66984_ip = 322;
                            continue _fun66984
                        }
                    case 16:
                        var3 = _closure1_slot4;
                        var1 = var3.has;
                        var1 = var1.bind(var3)(var7);
                        if (var1) {
                            _fun66984_ip = 65;
                            continue _fun66984
                        }
                    case 36:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.bind(var3)(var11);
                        _fun66984_ip = 172;
                        continue _fun66984;
                    case 65:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var9 = undefined;
                        var3 = var3.bind(var9)(var1);
                        var1 = var3.fetchDevices;
                        var1 = var1.bind(var3)(var7);
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun66984_ip = 319;
                            continue _fun66984
                        }
                    case 111:
                        var4 = var1.length;
                        var3 = 1;
                        if (!(var3 === var4)) {
                            _fun66984_ip = 180;
                            continue _fun66984
                        }
                    case 123:
                        var3 = 0;
                        var5 = var1[var3];
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 3;
                        var3 = var6[var3];
                        var4 = var4.bind(var9)(var3);
                        var3 = var4.transferToPlaystationWithAlert;
                        var3 = var3.bind(var4)(var7, var5, var11);
                        SaveGenerator(address = 166);
                    case 164:
                        return var3;
                    case 166:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66984_ip = 177;
                            continue _fun66984
                        }
                    case 172:
                        var4 = undefined;
                        return var4;
                    case 177:
                        return var3;
                    case 180:
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 4;
                        var3 = var10[var3];
                        var6 = var4.bind(var9)(var3);
                        var5 = var6.openLazy;
                        var8 = _closure1_slot0;
                        var2 = 6;
                        var2 = var10[var2];
                        var4 = var8.bind(var9)(var2);
                        var2 = 5;
                        var3 = var10[var2];
                        var2 = var10.paths;
                        var4 = var4.bind(var9)(var3, var2);
                        var12 = var11.id;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = 'GameConsoleDeviceListActionSheet';
                        var3 = var3.bind(var2)(var12);
                        var2 = {};
                        var2.channel = var11;
                        var2.platform = var7;
                        var7 = 7;
                        var7 = var10[var7];
                        var7 = var8.bind(var9)(var7);
                        var7 = var7.ImpressionNames;
                        var7 = var7.GAME_CONSOLE_DEVICE_LIST;
                        var2.impressionName = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var2;
                    case 319:
                        return var1;
                    case 322:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.PlatformTypes;
    var7 = var3.Set;
    var8 = var6.PLAYSTATION;
    var3 = new Array(2);
    var3[0] = var8;
    var6 = var6.PLAYSTATION_STAGING;
    var3[1] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var13 = var6;
    var12 = var3;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/beginConsoleTransfer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.beginConsoleTransfer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 8289, 8296, 3269, 8297, 1307, 481, 8300, 2]);