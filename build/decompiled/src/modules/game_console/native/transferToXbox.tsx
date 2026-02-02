// modules/game_console/native/transferToXbox.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66952: for (var _fun66952_ip = 0;;) switch (_fun66952_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66952_ip = 403;
                            continue _fun66952
                        }
                    case 13:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 5;
                        var1 = var3[var1];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var1);
                        var2 = var3.maybeShowPTTAlert;
                        var1 = _closure1_slot6;
                        var1 = var1.XBOX;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 63);
                    case 61:
                        return var1;
                    case 63:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66952_ip = 400;
                            continue _fun66952
                        }
                    case 72:
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot3;
                        var12 = 6;
                        var2 = var2[var12];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.disconnectRemote;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 106);
                    case 104:
                        return var2;
                    case 106:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun66952_ip = 397;
                            continue _fun66952
                        }
                    case 115:
                        var4 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var3 = var3[var12];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.getConnectNonce;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 146);
                    case 144:
                        return var3;
                    case 146:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66952_ip = 394;
                            continue _fun66952
                        }
                    case 155:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var4 = 7;
                        var4 = var9[var4];
                        var8 = var8.bind(var5)(var4);
                        var4 = {};
                        var4.nonce = var3;
                        var10 = false;
                        var4.forQRCode = var10;
                        var8 = var8.bind(var5)(var7, var4);
                        var9 = _closure1_slot5;
                        var4 = var9.canOpenURL;
                        var4 = var4.bind(var9)(var8);
                        SaveGenerator(address = 214);
                    case 212:
                        return var4;
                    case 214:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                        if (var9) {
                            _fun66952_ip = 391;
                            continue _fun66952
                        }
                    case 223:
                        var13 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        if (var4) {
                            _fun66952_ip = 276;
                            continue _fun66952
                        }
                    case 234:
                        var9 = 8;
                        var9 = var11[var9];
                        var15 = var13.bind(var5)(var9);
                        var14 = var15.openLazy;
                        var9 = {};
                        var16 = function() {
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var1 = 10;
                            var1 = var0[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = 9;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var3)(var1, var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var1 = var1.default;
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure1_slot7;
                                    var2 = _closure6_slot0;
                                    var1 = {};
                                    var4 = arg0;
                                    var5 = var1;
                                    var0 = copyDataProperties(var5, var4);
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var9.importer = var16;
                        var9 = var14.bind(var15)(var9);
                        return var9;
                    case 276:
                        var9 = 11;
                        var9 = var11[var9];
                        var14 = var13.bind(var5)(var9);
                        var13 = var7.id;
                        var9 = _closure1_slot6;
                        var9 = var9.XBOX;
                        var9 = var14.bind(var5)(var13, var9);
                        var9 = _closure1_slot2;
                        var12 = var11[var12];
                        var14 = var9.bind(var5)(var12);
                        var13 = var14.waitForSession;
                        var12 = _closure1_slot6;
                        var12 = var12.XBOX;
                        var7 = var7.id;
                        var7 = var13.bind(var14)(var12, var7, var3);
                        var7 = 12;
                        var7 = var11[var7];
                        var9 = var9.bind(var5)(var7);
                        var7 = var9.stopOwnStream;
                        var7 = var7.bind(var9)(var10);
                        var7 = _closure1_slot5;
                        var6 = var7.openURL;
                        var6 = var6.bind(var7)(var8);
                        return var5;
                    case 391:
                        return var4;
                    case 394:
                        return var3;
                    case 397:
                        return var2;
                    case 400:
                        return var1;
                    case 403:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Linking;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/transferToXbox.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 33, 8260, 8257, 8269, 3897, 8270, 1307, 8263, 7977, 2]);