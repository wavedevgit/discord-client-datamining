// modules/collectibles/hooks/useWishlistButtonState.tsx
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
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useWishlistButtonState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87364: for (var _fun87364_ip = 0;;) switch (_fun87364_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.currentUser;
                var _closure2_slot0 = var12;
                var10 = var1.skuId;
                var _closure2_slot1 = var10;
                var8 = var1.onAddSuccess;
                var _closure2_slot2 = var8;
                var7 = var1.onRemoveSuccess;
                var _closure2_slot3 = var7;
                var6 = var1.onError;
                var _closure2_slot4 = var6;
                var13 = undefined;
                var _closure2_slot10 = var13;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var13)(var2);
                var2 = var2.bind(var13)();
                var9 = var2.analyticsLocations;
                var _closure2_slot5 = var9;
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var4[var2];
                var14 = var3.bind(var13)(var2);
                var11 = var14.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    _fun87365: for (var _fun87365_ip = 0;;) switch (_fun87365_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun87365_ip = 43;
                                continue _fun87365
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var11 = var11.bind(var14)(var5, var2);
                var _closure2_slot6 = var11;
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var13)(var2);
                var2 = var3.useIsSkuInWishlist;
                var3 = var2.bind(var3)(var11, var10);
                var19 = _closure1_slot5;
                var2 = var19.useState;
                var5 = null;
                var2 = var2.bind(var19)(var5);
                var17 = _closure1_slot4;
                var16 = 2;
                var14 = var17.bind(var13)(var2, var16);
                var2 = 0;
                var4 = var14[var2];
                var15 = 1;
                var14 = var14[var15];
                var _closure2_slot7 = var14;
                var18 = var19.useState;
                var14 = false;
                var14 = var18.bind(var19)(var14);
                var14 = var17.bind(var13)(var14, var16);
                var2 = var14[var2];
                var _closure2_slot8 = var2;
                var14 = var14[var15];
                var _closure2_slot9 = var14;
                if (!(var5 !== var4)) {
                    _fun87364_ip = 263;
                    continue _fun87364
                }
            case 260:
                var3 = var4;
            case 263:
                _closure2_slot10 = var3;
                var5 = _closure1_slot5;
                var15 = var5.useEffect;
                var14 = new Array(1);
                var14[0] = var10;
                var4 = function() { // Environment: var0
                    var3 = _closure2_slot7;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot9;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var15.bind(var5)(var4, var14);
                var4 = var5.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun87368: for (var _fun87368_ip = 0;;) switch (_fun87368_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun87368_ip = 412;
                                    continue _fun87368
                                }
                            case 10:
                                var4 = _closure2_slot0;
                                var6 = null;
                                if (!(var6 != var4)) {
                                    _fun87368_ip = 407;
                                    continue _fun87368
                                }
                            case 26:
                                var4 = _closure2_slot8;
                                if (var4) {
                                    _fun87368_ip = 407;
                                    continue _fun87368
                                }
                            case 36:
                                var5 = _closure2_slot9;
                                var4 = undefined;
                                var7 = true;
                                var5 = var5.bind(var4)(var7);
                                var5 = _closure2_slot10;
                                if (!var5) {
                                    _fun87368_ip = 67;
                                    continue _fun87368
                                }
                            case 56:
                                var5 = _closure2_slot6;
                                if (!(var6 == var5)) {
                                    _fun87368_ip = 238;
                                    continue _fun87368
                                }
                            case 67:
                                var5 = _closure2_slot7;
                                var5 = var5.bind(var4)(var7);
                            case 76: // try_start_0 // try_start_2
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 7;
                                var5 = var8[var5];
                                var9 = var7.bind(var4)(var5);
                                var8 = var9.addSkuToWishlist;
                                var7 = _closure2_slot1;
                                var5 = _closure2_slot5;
                                var5 = var8.bind(var9)(var7, var5);
                                SaveGenerator(address = 123);
                            case 121:
                                return var5;
                            case 123:
                                ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun87368_ip = 147;
                                    continue _fun87368
                                }
                            case 129:
                                var7 = _closure2_slot2;
                                if (!(var6 != var7)) {
                                    _fun87368_ip = 145;
                                    continue _fun87368
                                }
                            case 137:
                                var7 = _closure2_slot2;
                                var7 = var7.bind(var4)();
                            case 145: // try_end0
                                _fun87368_ip = 189;
                                continue _fun87368;
                            case 147: // try_end2
                                var7 = _closure2_slot7;
                                var7 = var7.bind(var4)(var6);
                                var8 = _closure2_slot9;
                                var7 = false;
                                var7 = var8.bind(var4)(var7);
                                return var5;
                            case 170: // try_start_3 // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var5 = _closure2_slot4;
                                if (!(var6 != var5)) {
                                    _fun87368_ip = 189;
                                    continue _fun87368
                                }
                            case 180:
                                var5 = _closure2_slot4;
                                var3 = var5.bind(var4)(var3);
                            case 189: // try_end3
                                var3 = _closure2_slot7;
                                var3 = var3.bind(var4)(var6);
                                var5 = _closure2_slot9;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                _fun87368_ip = 407;
                                continue _fun87368;
                            case 214: // catch_target2 // catch_target3
                                CatchBlockStart(arg_register = 3);
                                var5 = _closure2_slot7;
                                var5 = var5.bind(var4)(var6);
                                var7 = _closure2_slot9;
                                var5 = false;
                                var5 = var7.bind(var4)(var5);
                                throw var3;
                            case 238:
                                var5 = _closure2_slot7;
                                var3 = false;
                                var5 = var5.bind(var4)(var3);
                            case 249: // try_start_1 // try_start_4
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 7;
                                var5 = var8[var5];
                                var10 = var7.bind(var4)(var5);
                                var9 = var10.removeSkuFromWishlist;
                                var8 = _closure2_slot6;
                                var7 = _closure2_slot1;
                                var5 = _closure2_slot5;
                                var5 = var9.bind(var10)(var8, var7, var5);
                                SaveGenerator(address = 301);
                            case 299:
                                return var5;
                            case 301:
                                ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun87368_ip = 325;
                                    continue _fun87368
                                }
                            case 307:
                                var7 = _closure2_slot3;
                                if (!(var6 != var7)) {
                                    _fun87368_ip = 323;
                                    continue _fun87368
                                }
                            case 315:
                                var7 = _closure2_slot3;
                                var7 = var7.bind(var4)();
                            case 323: // try_end1
                                _fun87368_ip = 365;
                                continue _fun87368;
                            case 325: // try_end4
                                var7 = _closure2_slot7;
                                var7 = var7.bind(var4)(var6);
                                var7 = _closure2_slot9;
                                var7 = var7.bind(var4)(var3);
                                return var5;
                            case 346: // try_start_5 // catch_target1
                                CatchBlockStart(arg_register = 1);
                                var5 = _closure2_slot4;
                                if (!(var6 != var5)) {
                                    _fun87368_ip = 365;
                                    continue _fun87368
                                }
                            case 356:
                                var5 = _closure2_slot4;
                                var1 = var5.bind(var4)(var1);
                            case 365: // try_end5
                                var1 = _closure2_slot7;
                                var1 = var1.bind(var4)(var6);
                                var1 = _closure2_slot9;
                                var1 = var1.bind(var4)(var3);
                                _fun87368_ip = 407;
                                continue _fun87368;
                            case 385: // catch_target4 // catch_target5
                                CatchBlockStart(arg_register = 1);
                                var5 = _closure2_slot7;
                                var5 = var5.bind(var4)(var6);
                                var2 = _closure2_slot9;
                                var2 = var2.bind(var4)(var3);
                                throw var1;
                            case 407:
                                var1 = undefined;
                                return var1;
                            case 412:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var13)(var0);
                var0 = new Array(9);
                var0[0] = var12;
                var0[1] = var2;
                var0[2] = var3;
                var0[3] = var11;
                var0[4] = var10;
                var0[5] = var9;
                var0[6] = var8;
                var0[7] = var7;
                var0[8] = var6;
                var1 = var4.bind(var5)(var1, var0);
                var0 = {};
                var0.isWishlisted = var3;
                var0.isBusy = var2;
                var0.handleToggle = var1;
                return var0;
        }
    };
    var2.useWishlistButtonState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 4661, 5734, 566, 11316, 11320, 2]);