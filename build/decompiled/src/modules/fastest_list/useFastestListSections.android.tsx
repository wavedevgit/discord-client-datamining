// modules/fastest_list/useFastestListSections.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/useFastestListSections.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61145: for (var _fun61145_ip = 0;;) switch (_fun61145_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.fastestListId;
                var _closure2_slot0 = var9;
                var14 = var3.itemSize;
                var _closure2_slot1 = var14;
                var15 = var3.keyExtractor;
                var _closure2_slot2 = var15;
                var13 = var3.listFooterSize;
                var2 = undefined;
                if (!(var13 === var2)) {
                    _fun61145_ip = 49;
                    continue _fun61145
                }
            case 47:
                var13 = 0;
            case 49:
                var _closure2_slot3 = var13;
                var12 = var3.listHeaderSize;
                if (!(var12 === var2)) {
                    _fun61145_ip = 65;
                    continue _fun61145
                }
            case 63:
                var12 = 0;
            case 65:
                var _closure2_slot4 = var12;
                var1 = var3.sections;
                var _closure2_slot5 = var1;
                var11 = var3.sectionHeaderSize;
                if (!(var11 === var2)) {
                    _fun61145_ip = 91;
                    continue _fun61145
                }
            case 89:
                var11 = 0;
            case 91:
                var _closure2_slot6 = var11;
                var10 = var3.sectionFooterSize;
                if (!(var10 === var2)) {
                    _fun61145_ip = 107;
                    continue _fun61145
                }
            case 105:
                var10 = 0;
            case 107:
                var _closure2_slot7 = var10;
                var _closure2_slot8 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 1;
                var6 = var4[var6];
                var7 = var3.bind(var2)(var6);
                var6 = function() { // Environment: var0
                    var0 = 0;
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var2 = function() {
                        var2 = _closure3_slot0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = '';
                        var0 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0.getId = var2;
                    var1 = function() {
                        var0 = _closure3_slot0;
                        var0 = parseFloat(var0);
                        var1 = var0 + 1;
                        _closure3_slot0 = var1;
                        return var0;
                    };
                    var0.incrementId = var1;
                    return var0;
                };
                var8 = var7.bind(var2)(var6);
                _closure2_slot8 = var8;
                var7 = _closure1_slot2;
                var6 = var7.useMemo;
                var5 = new Array(9);
                var5[0] = var15;
                var5[1] = var14;
                var5[2] = var13;
                var5[3] = var12;
                var5[4] = var11;
                var5[5] = var10;
                var5[6] = var9;
                var5[7] = var8;
                var5[8] = var1;
                var1 = function() { // Environment: var0
                    _fun61149: for (var _fun61149_ip = 0;;) switch (_fun61149_ip) {
                        case 0:
                            var3 = new Array(0);
                            var0 = _closure2_slot1;
                            var4 = 'number';
                            var0 = typeof var0;
                            var2 = var4 === var0;
                            var1 = new Array(0);
                            var0 = _closure2_slot3;
                            var0 = typeof var0;
                            if (!(var4 !== var0)) {
                                _fun61149_ip = 49;
                                continue _fun61149
                            }
                        case 37:
                            var5 = _closure2_slot3;
                            var0 = undefined;
                            var13 = var5.bind(var0)();
                            _fun61149_ip = 53;
                            continue _fun61149;
                        case 49:
                            var13 = _closure2_slot3;
                        case 53:
                            var0 = _closure2_slot2;
                            var27 = null;
                            var5 = var27 == var0;
                            var26 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun61149_ip = 112;
                                continue _fun61149
                            }
                        case 70:
                            var7 = _closure2_slot2;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 2;
                            var5 = var8[var5];
                            var5 = var6.bind(var26)(var5);
                            var6 = var5.LIST_FOOTER;
                            var5 = 0;
                            var0 = var7.bind(var26)(var6, var5, var5);
                        case 112:
                            var5 = var27 != var0;
                            var25 = '';
                            var14 = var25;
                            if (!var5) {
                                _fun61149_ip = 129;
                                continue _fun61149
                            }
                        case 126:
                            var14 = var0;
                        case 129:
                            var0 = _closure2_slot4;
                            var0 = typeof var0;
                            if (!(var4 !== var0)) {
                                _fun61149_ip = 150;
                                continue _fun61149
                            }
                        case 140:
                            var0 = _closure2_slot4;
                            var11 = var0.bind(var26)();
                            _fun61149_ip = 154;
                            continue _fun61149;
                        case 150:
                            var11 = _closure2_slot4;
                        case 154:
                            var0 = _closure2_slot2;
                            var5 = var27 == var0;
                            var0 = undefined;
                            if (var5) {
                                _fun61149_ip = 209;
                                continue _fun61149
                            }
                        case 167:
                            var7 = _closure2_slot2;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 2;
                            var5 = var8[var5];
                            var5 = var6.bind(var26)(var5);
                            var6 = var5.LIST_HEADER;
                            var5 = 0;
                            var0 = var7.bind(var26)(var6, var5, var5);
                        case 209:
                            var5 = var27 != var0;
                            var12 = var25;
                            if (!var5) {
                                _fun61149_ip = 222;
                                continue _fun61149
                            }
                        case 219:
                            var12 = var0;
                        case 222:
                            var9 = new Array(0);
                            var8 = new Array(0);
                            var0 = _closure2_slot6;
                            var0 = typeof var0;
                            var7 = var4 === var0;
                            var6 = new Array(0);
                            var5 = new Array(0);
                            var0 = _closure2_slot7;
                            var0 = typeof var0;
                            var4 = var4 === var0;
                            var0 = _closure2_slot2;
                            var15 = var27 == var0;
                            if (!var15) {
                                _fun61149_ip = 317;
                                continue _fun61149
                            }
                        case 271:
                            var16 = var3.push;
                            var0 = {};
                            var17 = [''];
                            var0.keys = var17;
                            var0 = var16.bind(var3)(var0);
                            var0 = var9.push;
                            var0 = var0.bind(var9)(var25);
                            var0 = var6.push;
                            var0 = var0.bind(var6)(var25);
                        case 317:
                            if (!var2) {
                                _fun61149_ip = 349;
                                continue _fun61149
                            }
                        case 320:
                            var16 = var1.push;
                            var0 = {};
                            var18 = _closure2_slot1;
                            var17 = new Array(1);
                            var17[0] = var18;
                            var0.sizes = var17;
                            var0 = var16.bind(var1)(var0);
                        case 349:
                            if (!var7) {
                                _fun61149_ip = 366;
                                continue _fun61149
                            }
                        case 352:
                            var16 = var8.push;
                            var0 = _closure2_slot6;
                            var0 = var16.bind(var8)(var0);
                        case 366:
                            if (!var4) {
                                _fun61149_ip = 383;
                                continue _fun61149
                            }
                        case 369:
                            var16 = var5.push;
                            var0 = _closure2_slot7;
                            var0 = var16.bind(var5)(var0);
                        case 383:
                            if (!var4) {
                                _fun61149_ip = 398;
                                continue _fun61149
                            }
                        case 386:
                            if (!var7) {
                                _fun61149_ip = 398;
                                continue _fun61149
                            }
                        case 389:
                            if (!var2) {
                                _fun61149_ip = 398;
                                continue _fun61149
                            }
                        case 392:
                            if (var15) {
                                _fun61149_ip = 834;
                                continue _fun61149
                            }
                        case 398:
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            var24 = 0;
                            var0 = var24 < var0;
                            var22 = 2;
                            var21 = 0;
                            var20 = undefined;
                            var19 = undefined;
                            var18 = undefined;
                            var17 = undefined;
                            var16 = undefined;
                            if (!var0) {
                                _fun61149_ip = 834;
                                continue _fun61149
                            }
                        case 437:
                            if (var7) {
                                _fun61149_ip = 459;
                                continue _fun61149
                            }
                        case 440:
                            var28 = var8.push;
                            var0 = _closure2_slot6;
                            var0 = var0.bind(var26)(var21);
                            var0 = var28.bind(var8)(var0);
                        case 459:
                            if (var4) {
                                _fun61149_ip = 481;
                                continue _fun61149
                            }
                        case 462:
                            var28 = var5.push;
                            var0 = _closure2_slot7;
                            var0 = var0.bind(var26)(var21);
                            var0 = var28.bind(var5)(var0);
                        case 481:
                            if (var15) {
                                _fun61149_ip = 604;
                                continue _fun61149
                            }
                        case 484:
                            var29 = var9.push;
                            var28 = _closure2_slot2;
                            var30 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var22];
                            var0 = var30.bind(var26)(var0);
                            var0 = var0.SECTION_HEADER;
                            var28 = var28.bind(var26)(var0, var21, var24);
                            var30 = var27 != var28;
                            var0 = var25;
                            if (!var30) {
                                _fun61149_ip = 536;
                                continue _fun61149
                            }
                        case 533:
                            var0 = var28;
                        case 536:
                            var0 = var29.bind(var9)(var0);
                            var30 = var6.push;
                            var29 = _closure2_slot2;
                            var31 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var22];
                            var0 = var31.bind(var26)(var0);
                            var0 = var0.SECTION_FOOTER;
                            var0 = var29.bind(var26)(var0, var21, var24);
                            var31 = var27 != var0;
                            var29 = var25;
                            if (!var31) {
                                _fun61149_ip = 593;
                                continue _fun61149
                            }
                        case 590:
                            var29 = var0;
                        case 593:
                            var29 = var30.bind(var6)(var29);
                            var20 = var28;
                            var19 = var0;
                        case 604:
                            if (!var2) {
                                _fun61149_ip = 616;
                                continue _fun61149
                            }
                        case 607:
                            var28 = var16;
                            if (var15) {
                                _fun61149_ip = 812;
                                continue _fun61149
                            }
                        case 616:
                            var0 = _closure2_slot5;
                            var30 = var0[var21];
                            if (var2) {
                                _fun61149_ip = 648;
                                continue _fun61149
                            }
                        case 627:
                            var29 = var1.push;
                            var0 = {};
                            var31 = new Array(0);
                            var0.sizes = var31;
                            var0 = var29.bind(var1)(var0);
                        case 648:
                            if (var15) {
                                _fun61149_ip = 671;
                                continue _fun61149
                            }
                        case 651:
                            var29 = var3.push;
                            var0 = {};
                            var31 = new Array(0);
                            var0.keys = var31;
                            var0 = var29.bind(var3)(var0);
                        case 671:
                            var31 = var24 < var30;
                            var29 = 0;
                            var0 = var16;
                            var18 = var30;
                            var17 = 0;
                            var28 = var0;
                            if (!var31) {
                                _fun61149_ip = 812;
                                continue _fun61149
                            }
                        case 691:
                            if (var2) {
                                _fun61149_ip = 724;
                                continue _fun61149
                            }
                        case 694:
                            var31 = var1[var21];
                            var33 = var31.sizes;
                            var32 = var33.push;
                            var31 = _closure2_slot1;
                            var31 = var31.bind(var26)(var21, var29);
                            var31 = var32.bind(var33)(var31);
                        case 724:
                            if (var15) {
                                _fun61149_ip = 796;
                                continue _fun61149
                            }
                        case 727:
                            var31 = var3[var21];
                            var34 = var31.keys;
                            var33 = var34.push;
                            var32 = _closure2_slot2;
                            var35 = _closure1_slot0;
                            var31 = _closure1_slot1;
                            var31 = var31[var22];
                            var31 = var35.bind(var26)(var31);
                            var31 = var31.ITEM;
                            var31 = var32.bind(var26)(var31, var21, var29);
                            var35 = var27 != var31;
                            var32 = var25;
                            if (!var35) {
                                _fun61149_ip = 788;
                                continue _fun61149
                            }
                        case 785:
                            var32 = var31;
                        case 788:
                            var32 = var33.bind(var34)(var32);
                            var0 = var31;
                        case 796:
                            var29 = var29 + 1;
                            var18 = var30;
                            var28 = var0;
                            var17 = var29;
                            if (var17 < var30) {
                                _fun61149_ip = 691;
                                continue _fun61149
                            }
                        case 812:
                            var21 = var21 + 1;
                            var0 = _closure2_slot5;
                            var0 = var0.length;
                            var16 = var28;
                            if (var21 < var0) {
                                _fun61149_ip = 437;
                                continue _fun61149
                            }
                        case 834:
                            var0 = {};
                            var0.keysAreUniform = var15;
                            var15 = _closure2_slot0;
                            var0.listId = var15;
                            var0.listFooterKey = var14;
                            var0.listFooterSize = var13;
                            var0.listHeaderKey = var12;
                            var0.listHeaderSize = var11;
                            var11 = _closure2_slot5;
                            var0.sections = var11;
                            var11 = _closure2_slot8;
                            var10 = var11.getId;
                            var10 = var10.bind(var11)();
                            var0.sectionsId = var10;
                            var0.sectionHeaderKeys = var9;
                            var0.sectionHeaderSizes = var8;
                            var0.sectionHeaderSizeIsUniform = var7;
                            var0.sectionFooterKeys = var6;
                            var0.sectionFooterSizes = var5;
                            var0.sectionFooterSizeIsUniform = var4;
                            var0.itemKeys = var3;
                            var0.itemSizeIsUniform = var2;
                            var0.itemSizes = var1;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var6 = var7.useEffect;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var1;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot8;
                    var0 = var1.incrementId;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = 3;
                var0 = var4[var0];
                var0 = var3.bind(var2)(var0);
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4928, 7571, 7572, 2]);