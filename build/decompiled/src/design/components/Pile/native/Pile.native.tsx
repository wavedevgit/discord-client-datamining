// design/components/Pile/native/Pile.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.pile = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Pile/native/Pile.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62248: for (var _fun62248_ip = 0;;) switch (_fun62248_ip) {
            case 0:
                var1 = arg0;
                var6 = var1["aria-label"];
                var0 = var1.shape;
                var _closure2_slot0 = var0;
                var0 = var1.size;
                var _closure2_slot1 = var0;
                var2 = var1.gap;
                var _closure2_slot2 = var2;
                var2 = var1.depthX;
                var _closure2_slot3 = var2;
                var2 = var1.depthY;
                var _closure2_slot4 = var2;
                var7 = var1.children;
                var1 = _closure1_slot6;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var1 = _closure1_slot3;
                var2 = var1.Children;
                var1 = var2.toArray;
                var11 = var1.bind(var2)(var7);
                var2 = var11.filter;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 4;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var11)(var1);
                var1 = var1.length;
                var _closure2_slot5 = var1;
                var2 = 5;
                var2 = var10[var2];
                var9 = var9.bind(var3)(var2);
                var2 = var9.isArray;
                var2 = var2.bind(var9)(var0);
                if (!var2) {
                    _fun62248_ip = 177;
                    continue _fun62248
                }
            case 168:
                var0 = var0.length;
                if (!(var0 === var1)) {
                    _fun62248_ip = 240;
                    continue _fun62248
                }
            case 177:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var8.pile;
                var0.style = var8;
                var0['aria-label'] = var6;
                var5 = _closure1_slot3;
                var6 = var5.Children;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun62249: for (var _fun62249_ip = 0;;) switch (_fun62249_ip) {
                        case 0:
                            var9 = arg0;
                            var4 = arg1;
                            var1 = _closure1_slot3;
                            var0 = var1.isValidElement;
                            var0 = var0.bind(var1)(var9);
                            if (var0) {
                                _fun62249_ip = 31;
                                continue _fun62249
                            }
                        case 27:
                            var0 = null;
                            return var0;
                        case 31:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var13 = 5;
                            var0 = var0[var13];
                            var3 = undefined;
                            var5 = var1.bind(var3)(var0);
                            var1 = var5.isArray;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var5)(var0);
                            var0 = _closure2_slot1;
                            if (var1) {
                                _fun62249_ip = 82;
                                continue _fun62249
                            }
                        case 77:
                            var10 = var0;
                            _fun62249_ip = 86;
                            continue _fun62249;
                        case 82:
                            var10 = var0[var4];
                        case 86:
                            var0 = _closure2_slot5;
                            var1 = 1;
                            var0 = var0 - var1;
                            var0 = var4 < var0;
                            var11 = undefined;
                            if (!var0) {
                                _fun62249_ip = 514;
                                continue _fun62249
                            }
                        case 109:
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var13];
                            var7 = var5.bind(var3)(var0);
                            var5 = var7.isArray;
                            var0 = _closure2_slot1;
                            var0 = var5.bind(var7)(var0);
                            var5 = _closure2_slot1;
                            if (var0) {
                                _fun62249_ip = 152;
                                continue _fun62249
                            }
                        case 147:
                            var7 = var5;
                            _fun62249_ip = 160;
                            continue _fun62249;
                        case 152:
                            var0 = var4 + var1;
                            var7 = var5[var0];
                        case 160:
                            var5 = _closure2_slot0;
                            var8 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var12 = 6;
                            var0 = var0[var12];
                            var0 = var8.bind(var3)(var0);
                            var0 = var0.CutoutShape;
                            var0 = var0.Circle;
                            if (!(var5 !== var0)) {
                                _fun62249_ip = 413;
                                continue _fun62249
                            }
                        case 203:
                            var5 = _closure2_slot0;
                            var8 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var12];
                            var0 = var8.bind(var3)(var0);
                            var0 = var0.CutoutShape;
                            var0 = var0.RoundedRect;
                            if (!(var5 !== var0)) {
                                _fun62249_ip = 282;
                                continue _fun62249
                            }
                        case 240:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 4;
                            var0 = var8[var0];
                            var8 = var5.bind(var3)(var0);
                            var5 = var8.assertNever;
                            var0 = _closure2_slot0;
                            var0 = var5.bind(var8)(var0);
                            var11 = undefined;
                            _fun62249_ip = 514;
                            continue _fun62249;
                        case 282:
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.shape = var5;
                            var5 = _closure2_slot3;
                            var8 = null;
                            if (!(var8 != var5)) {
                                _fun62249_ip = 317;
                                continue _fun62249
                            }
                        case 303:
                            var5 = _closure2_slot3;
                            var5 = var1 - var5;
                            var5 = var10 * var5;
                            _fun62249_ip = 324;
                            continue _fun62249;
                        case 317:
                            var12 = _closure2_slot2;
                            var5 = -var12;
                        case 324:
                            var0.x = var5;
                            var5 = _closure2_slot4;
                            if (!(var8 != var5)) {
                                _fun62249_ip = 350;
                                continue _fun62249
                            }
                        case 336:
                            var5 = _closure2_slot4;
                            var5 = var1 - var5;
                            var5 = var10 * var5;
                            _fun62249_ip = 357;
                            continue _fun62249;
                        case 350:
                            var8 = _closure2_slot2;
                            var5 = -var8;
                        case 357:
                            var0.y = var5;
                            var8 = _closure2_slot2;
                            var5 = 2;
                            var12 = var5 * var8;
                            var12 = var7 + var12;
                            var0.width = var12;
                            var5 = var5 * var8;
                            var5 = var7 + var5;
                            var0.height = var5;
                            var5 = 3;
                            var5 = var7 / var5;
                            var5 = var5 + var8;
                            var0.cornerRadius = var5;
                            var11 = var0;
                            _fun62249_ip = 514;
                            continue _fun62249;
                        case 413:
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.shape = var5;
                            var5 = _closure2_slot3;
                            var8 = null;
                            if (!(var8 != var5)) {
                                _fun62249_ip = 448;
                                continue _fun62249
                            }
                        case 434:
                            var5 = _closure2_slot3;
                            var5 = var1 - var5;
                            var5 = var10 * var5;
                            _fun62249_ip = 455;
                            continue _fun62249;
                        case 448:
                            var12 = _closure2_slot2;
                            var5 = -var12;
                        case 455:
                            var0.x = var5;
                            var5 = _closure2_slot4;
                            if (!(var8 != var5)) {
                                _fun62249_ip = 481;
                                continue _fun62249
                            }
                        case 467:
                            var5 = _closure2_slot4;
                            var5 = var1 - var5;
                            var5 = var10 * var5;
                            _fun62249_ip = 488;
                            continue _fun62249;
                        case 481:
                            var8 = _closure2_slot2;
                            var5 = -var8;
                        case 488:
                            var0.y = var5;
                            var8 = _closure2_slot2;
                            var5 = 2;
                            var5 = var5 * var8;
                            var5 = var7 + var5;
                            var0.size = var5;
                            var11 = var0;
                        case 514:
                            var0 = 0;
                            var7 = var4 > var0;
                            var8 = 0;
                            var5 = 0;
                            if (!var7) {
                                _fun62249_ip = 658;
                                continue _fun62249
                            }
                        case 530:
                            var12 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var13];
                            var13 = var12.bind(var3)(var7);
                            var12 = var13.isArray;
                            var7 = _closure2_slot1;
                            var12 = var12.bind(var13)(var7);
                            var7 = _closure2_slot1;
                            if (var12) {
                                _fun62249_ip = 573;
                                continue _fun62249
                            }
                        case 568:
                            var12 = var7;
                            _fun62249_ip = 581;
                            continue _fun62249;
                        case 573:
                            var1 = var4 - var1;
                            var12 = var7[var1];
                        case 581:
                            var1 = _closure2_slot3;
                            var13 = null;
                            if (!(var13 != var1)) {
                                _fun62249_ip = 612;
                                continue _fun62249
                            }
                        case 591:
                            var7 = -var12;
                            var1 = _closure2_slot3;
                            var7 = var7 * var1;
                            var1 = _closure2_slot2;
                            var1 = var7 + var1;
                            _fun62249_ip = 615;
                            continue _fun62249;
                        case 612:
                            var1 = -var12;
                        case 615:
                            var7 = _closure2_slot4;
                            var7 = var13 == var7;
                            var0 = 0;
                            if (var7) {
                                _fun62249_ip = 652;
                                continue _fun62249
                            }
                        case 628:
                            var7 = _closure2_slot4;
                            var7 = var12 * var7;
                            var7 = var12 - var7;
                            var2 = _closure2_slot2;
                            var2 = var7 + var2;
                            var0 = var4 * var2;
                        case 652:
                            var5 = var0;
                            var8 = var1;
                        case 658:
                            var2 = _closure1_slot5;
                            var1 = _closure1_slot4;
                            var0 = {};
                            var7 = {};
                            var7.height = var10;
                            var7.marginLeft = var8;
                            var7.marginTop = var5;
                            var5 = new Array(2);
                            var5[0] = var7;
                            var8 = var9.type;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 7;
                            var7 = var13[var7];
                            var7 = var12.bind(var3)(var7);
                            var7 = var7.PileOverflow;
                            if (!(var8 !== var7)) {
                                _fun62249_ip = 734;
                                continue _fun62249
                            }
                        case 726:
                            var7 = {};
                            var7.width = var10;
                            _fun62249_ip = 744;
                            continue _fun62249;
                        case 734:
                            var8 = {};
                            var8.minWidth = var10;
                            var7 = var8;
                        case 744:
                            var5[1] = var7;
                            var0.style = var5;
                            var7 = null;
                            var5 = var9;
                            if (!(var7 != var11)) {
                                _fun62249_ip = 810;
                                continue _fun62249
                            }
                        case 761:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 6;
                            var6 = var10[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = {};
                            var10 = new Array(1);
                            var10[0] = var11;
                            var6.cutouts = var10;
                            var6.children = var9;
                            var5 = var8.bind(var3)(var7, var6);
                        case 810:
                            var0.children = var5;
                            var0 = var2.bind(var3)(var1, var0, var4);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var7, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 240:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Pile: size array must have the same number of elements as children';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.Pile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 1304, 22, 5457, 7810, 2]);