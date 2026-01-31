// modules/fastest_list/FastestListChildren.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var8 = global;
    var9 = var8.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var9 = var10.create;
    var3 = {};
    var11 = {
        'position': 'absolute',
        'opacity': 0,
        'height': 0,
        'top': 0
    };
    var3.portal = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var9 = new Array(0);
    var3.items = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var3.keys = var8;
    var3.keyIndex = var7;
    var _closure1_slot7 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun60991: for (var _fun60991_ip = 0;;) switch (_fun60991_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.estimatedListSize;
                var _closure2_slot0 = var2;
                var18 = var0.horizontal;
                var3 = undefined;
                if (!(var18 === var3)) {
                    _fun60991_ip = 29;
                    continue _fun60991
                }
            case 27:
                var18 = false;
            case 29:
                var _closure2_slot1 = var18;
                var17 = var0.listFooterAlwaysMounted;
                var _closure2_slot2 = var17;
                var16 = var0.listHeaderAlwaysMounted;
                var _closure2_slot3 = var16;
                var15 = var0.placeholdersForceEnabled;
                if (!(var15 === var3)) {
                    _fun60991_ip = 65;
                    continue _fun60991
                }
            case 63:
                var15 = false;
            case 65:
                var _closure2_slot4 = var15;
                var4 = var0.marginEnd;
                var _closure2_slot5 = var4;
                var8 = var0.marginStart;
                var _closure2_slot6 = var8;
                var9 = var0.sectionsVersioned;
                var _closure2_slot7 = var9;
                var14 = var0.renderItem;
                var _closure2_slot8 = var14;
                var13 = var0.renderListFooter;
                var _closure2_slot9 = var13;
                var12 = var0.renderListHeader;
                var _closure2_slot10 = var12;
                var11 = var0.renderSectionFooter;
                var _closure2_slot11 = var11;
                var10 = var0.renderSectionHeader;
                var _closure2_slot12 = var10;
                var2 = var0.wrapChildren;
                if (!(var2 === var3)) {
                    _fun60991_ip = 161;
                    continue _fun60991
                }
            case 159:
                var2 = false;
            case 161:
                var _closure2_slot13 = var2;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var4;
                var4 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var1 = var0.portal;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var3 = _closure2_slot6;
                    var1.left = var3;
                    var2 = _closure2_slot5;
                    var1.right = var2;
                    var0[1] = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var4, var5);
                var6 = var7.useState;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.estimatedListSize = var4;
                    var3 = _closure2_slot7;
                    var0.sectionsVersioned = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var6.bind(var7)(var4);
                var6 = _closure1_slot2;
                var4 = 2;
                var6 = var6.bind(var3)(var8, var4);
                var4 = 0;
                var8 = var6[var4];
                _closure2_slot14 = var8;
                var4 = 1;
                var4 = var6[var4];
                _closure2_slot15 = var4;
                var20 = var7.useImperativeHandle;
                var19 = arg1;
                var6 = function() { // Environment: var1
                    var0 = {};
                    var1 = function(arg0) { // Original name: setVisibleItems, environment: var1
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var2 = _closure2_slot15;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            _fun60996: for (var _fun60996_ip = 0;;) switch (_fun60996_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = 5;
                                    var1 = var3[var1];
                                    var4 = undefined;
                                    var3 = var2.bind(var4)(var1);
                                    var2 = _closure4_slot0;
                                    var2 = var3.bind(var4)(var0, var2);
                                    if (var2) {
                                        _fun60996_ip = 48;
                                        continue _fun60996
                                    }
                                case 44:
                                    var0 = _closure4_slot0;
                                case 48:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.setVisibleItems = var1;
                    return var0;
                };
                var4 = new Array(0);
                var4 = var20.bind(var7)(var19, var6, var4);
                var6 = var7.useRef;
                var4 = _closure1_slot7;
                var4 = var6.bind(var7)(var4);
                _closure2_slot16 = var4;
                var6 = var7.useMemo;
                var4 = new Array(12);
                var4[0] = var18;
                var4[1] = var17;
                var4[2] = var16;
                var4[3] = var15;
                var4[4] = var14;
                var4[5] = var13;
                var4[6] = var12;
                var4[7] = var11;
                var4[8] = var10;
                var4[9] = var9;
                var4[10] = var8;
                var4[11] = var2;
                var2 = function() { // Environment: var1
                    _fun60997: for (var _fun60997_ip = 0;;) switch (_fun60997_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var28 = var2.keysAreUniform;
                            var27 = var2.listId;
                            var46 = var2.itemKeys;
                            var45 = var2.itemSizes;
                            var44 = var2.itemSizeIsUniform;
                            var1 = var2.listFooterKey;
                            var29 = var2.listFooterSize;
                            var5 = var2.listHeaderKey;
                            var34 = var2.listHeaderSize;
                            var3 = var2.sectionsId;
                            var30 = var2.sections;
                            var26 = var2.sectionFooterKeys;
                            var25 = var2.sectionFooterSizeIsUniform;
                            var24 = var2.sectionFooterSizes;
                            var23 = var2.sectionHeaderKeys;
                            var22 = var2.sectionHeaderSizeIsUniform;
                            var21 = var2.sectionHeaderSizes;
                            var20 = function(arg0, arg1) { // Original name: fastestListChildJSX, environment: var2
                                _fun60998: for (var _fun60998_ip = 0;;) switch (_fun60998_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var7 = arg1;
                                        var1 = _closure2_slot13;
                                        if (var1) {
                                            _fun60998_ip = 75;
                                            continue _fun60998
                                        }
                                    case 19:
                                        var2 = _closure1_slot3;
                                        var1 = var2.isValidElement;
                                        var1 = var1.bind(var2)(var4);
                                        if (var1) {
                                            _fun60998_ip = 73;
                                            continue _fun60998
                                        }
                                    case 37:
                                        var1 = global;
                                        var3 = var1.Error;
                                        var1 = var3.prototype;
                                        var2 = Object.create(var1, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var11 = 'Must return a single child element.';
                                        var12 = var2;
                                        var1 = new var12[var3](var11, var10);
                                        var1 = var1 instanceof Object ? var1 : var2;
                                        throw var1;
                                    case 73:
                                        return var4;
                                    case 75:
                                        var3 = _closure1_slot5;
                                        var2 = _closure1_slot4;
                                        var1 = {};
                                        var5 = {};
                                        var9 = _closure2_slot1;
                                        var0 = undefined;
                                        var8 = undefined;
                                        if (!var9) {
                                            _fun60998_ip = 101;
                                            continue _fun60998
                                        }
                                    case 98:
                                        var8 = var7;
                                    case 101:
                                        var5.width = var8;
                                        var8 = _closure2_slot1;
                                        var6 = undefined;
                                        if (var8) {
                                            _fun60998_ip = 117;
                                            continue _fun60998
                                        }
                                    case 114:
                                        var6 = var7;
                                    case 117:
                                        var5.height = var6;
                                        var6 = 'hidden';
                                        var5.overflow = var6;
                                        var1.style = var5;
                                        var5 = false;
                                        var1.collapsable = var5;
                                        var1.children = var4;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var2 = _closure2_slot14;
                            var2 = var2.sectionsId;
                            if (!(var3 === var2)) {
                                _fun60997_ip = 1839;
                                continue _fun60997
                            }
                        case 133:
                            var2 = _closure2_slot16;
                            var2 = var2.current;
                            var2 = var2.keyIndex;
                            var19 = global;
                            var6 = var19.Map;
                            var3 = _closure2_slot16;
                            var3 = var3.current;
                            var68 = var3.keys;
                            var4 = var6.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var69 = var4;
                            var3 = new var69[var6](var68, var67);
                            var36 = var3 instanceof Object ? var3 : var4;
                            var3 = var19.Map;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var69 = var4;
                            var3 = new var69[var3](var68);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var4 = new Array(0);
                            var35 = new Array(0);
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var6 = 6;
                            var6 = var8[var6];
                            var17 = undefined;
                            var7 = var7.bind(var17)(var6);
                            var6 = _closure2_slot14;
                            var6 = var7.bind(var17)(var27, var6, var30);
                            var16 = var6.sectionStart;
                            var15 = var6.sectionEnd;
                            var9 = var6.itemStart;
                            var8 = var6.itemEnd;
                            var47 = var16 <= var15;
                            var14 = 7;
                            var13 = '';
                            var12 = '-';
                            var11 = null;
                            var43 = 's';
                            var42 = '-i';
                            var10 = 0;
                            var6 = 1;
                            var41 = var16;
                            var40 = undefined;
                            var39 = undefined;
                            var38 = undefined;
                            var37 = undefined;
                            var33 = undefined;
                            var32 = undefined;
                            var31 = undefined;
                            var7 = undefined;
                            if (!var47) {
                                _fun60997_ip = 737;
                                continue _fun60997
                            }
                        case 341:
                            var52 = _closure2_slot4;
                            var51 = var37;
                            var50 = var33;
                            var49 = var32;
                            var48 = var31;
                            var47 = var7;
                            if (var52) {
                                _fun60997_ip = 712;
                                continue _fun60997
                            }
                        case 366:
                            var54 = 0;
                            if (!(var41 === var16)) {
                                _fun60997_ip = 375;
                                continue _fun60997
                            }
                        case 372:
                            var54 = var9;
                        case 375:
                            var53 = var8;
                            if (!(var41 !== var15)) {
                                _fun60997_ip = 390;
                                continue _fun60997
                            }
                        case 382:
                            var52 = var30[var41];
                            var53 = var52 - var6;
                        case 390:
                            var52 = var54;
                            var40 = var52;
                            var51 = var37;
                            var50 = var33;
                            var49 = var32;
                            var48 = var31;
                            var47 = var7;
                            var38 = var40;
                            var39 = var53;
                            if (!(var38 <= var39)) {
                                _fun60997_ip = 712;
                                continue _fun60997
                            }
                        case 424:
                            var55 = _closure2_slot8;
                            var60 = var55.bind(var17)(var41, var52);
                            var55 = var52;
                            if (var44) {
                                _fun60997_ip = 456;
                                continue _fun60997
                            }
                        case 440:
                            var56 = var45[var41];
                            var56 = var56.sizes;
                            var59 = var56[var55];
                            _fun60997_ip = 470;
                            continue _fun60997;
                        case 456:
                            var56 = var45[var10];
                            var56 = var56.sizes;
                            var59 = var56[var10];
                        case 470:
                            if (var28) {
                                _fun60997_ip = 488;
                                continue _fun60997
                            }
                        case 473:
                            var56 = var46[var41];
                            var56 = var56.keys;
                            var58 = var56[var55];
                            _fun60997_ip = 501;
                            continue _fun60997;
                        case 488:
                            var56 = var46[var10];
                            var56 = var56.keys;
                            var58 = var56[var10];
                        case 501:
                            var57 = var58;
                            if (!(var13 === var58)) {
                                _fun60997_ip = 526;
                                continue _fun60997
                            }
                        case 508:
                            var56 = var19.HermesInternal;
                            var56 = var56.concat;
                            var57 = var56.bind(var43)(var41, var42, var55);
                        case 526:
                            var56 = var19.HermesInternal;
                            var56 = var56.concat;
                            var57 = var56.bind(var13)(var27, var12, var57);
                            var56 = var36.get;
                            var56 = var56.bind(var36)(var57);
                            if (!(var11 == var56)) {
                                _fun60997_ip = 586;
                                continue _fun60997
                            }
                        case 558:
                            var62 = var35.push;
                            var61 = {};
                            var61.keyId = var57;
                            var61.item = var60;
                            var61.itemSize = var59;
                            var61 = var62.bind(var35)(var61);
                            _fun60997_ip = 678;
                            continue _fun60997;
                        case 586:
                            var61 = var3.set;
                            var61 = var61.bind(var3)(var57, var56);
                            var61 = var36.delete;
                            var61 = var61.bind(var36)(var57);
                            var62 = var4.push;
                            var65 = _closure1_slot5;
                            var63 = _closure1_slot0;
                            var61 = _closure1_slot1;
                            var61 = var61[var14];
                            var64 = var63.bind(var17)(var61);
                            var63 = {};
                            var63.portalId = var57;
                            var61 = var20.bind(var17)(var60, var59);
                            var63.children = var61;
                            var61 = var19.HermesInternal;
                            var61 = var61.concat;
                            var61 = var61.bind(var13)(var56);
                            var61 = var65.bind(var17)(var64, var63, var61);
                            var61 = var62.bind(var4)(var61);
                        case 678:
                            var52 = var55 + 1;
                            var40 = var54;
                            var39 = var53;
                            var51 = var60;
                            var50 = var59;
                            var49 = var58;
                            var48 = var57;
                            var47 = var56;
                            var38 = var52;
                            if (var38 <= var53) {
                                _fun60997_ip = 424;
                                continue _fun60997
                            }
                        case 712:
                            var41 = var41 + 1;
                            var37 = var51;
                            var33 = var50;
                            var32 = var49;
                            var31 = var48;
                            var7 = var47;
                            if (var41 <= var15) {
                                _fun60997_ip = 341;
                                continue _fun60997
                            }
                        case 737:
                            var7 = var35.length;
                            var7 = var10 < var7;
                            var33 = 'key-';
                            var32 = var2;
                            var31 = 0;
                            var2 = var32;
                            if (!var7) {
                                _fun60997_ip = 1042;
                                continue _fun60997
                            }
                        case 766:
                            var7 = var35[var31];
                            var44 = var7.keyId;
                            var43 = var7.item;
                            var7 = var7.itemSize;
                            var37 = var36.size;
                            if (!(!(var37 > var10))) {
                                _fun60997_ip = 893;
                                continue _fun60997
                            }
                        case 796:
                            var38 = parseFloat(var32);
                            var37 = var38 + 1;
                            var45 = var33 + var38;
                            var38 = var3.set;
                            var38 = var38.bind(var3)(var44, var45);
                            var39 = var4.push;
                            var42 = _closure1_slot5;
                            var40 = _closure1_slot0;
                            var38 = _closure1_slot1;
                            var38 = var38[var14];
                            var41 = var40.bind(var17)(var38);
                            var40 = {};
                            var40.portalId = var44;
                            var38 = var20.bind(var17)(var43, var7);
                            var40.children = var38;
                            var38 = var19.HermesInternal;
                            var38 = var38.concat;
                            var38 = var38.bind(var13)(var45);
                            var38 = var42.bind(var17)(var41, var40, var38);
                            var38 = var39.bind(var4)(var38);
                            _fun60997_ip = 1021;
                            continue _fun60997;
                        case 893:
                            var38 = var36.keys;
                            var39 = var38.bind(var36)();
                            var38 = var39.next;
                            var38 = var38.bind(var39)();
                            var39 = var38.value;
                            var38 = var36.get;
                            var42 = var38.bind(var36)(var39);
                            var38 = var3.set;
                            var38 = var38.bind(var3)(var44, var42);
                            var38 = var36.delete;
                            var38 = var38.bind(var36)(var39);
                            var38 = var4.push;
                            var41 = _closure1_slot5;
                            var40 = _closure1_slot0;
                            var39 = _closure1_slot1;
                            var39 = var39[var14];
                            var40 = var40.bind(var17)(var39);
                            var39 = {};
                            var39.portalId = var44;
                            var7 = var20.bind(var17)(var43, var7);
                            var39.children = var7;
                            var7 = var19.HermesInternal;
                            var7 = var7.concat;
                            var7 = var7.bind(var13)(var42);
                            var7 = var41.bind(var17)(var40, var39, var7);
                            var7 = var38.bind(var4)(var7);
                            var37 = var32;
                        case 1021:
                            var31 = var31 + 1;
                            var7 = var35.length;
                            var32 = var37;
                            var2 = var32;
                            if (var31 < var7) {
                                _fun60997_ip = 766;
                                continue _fun60997
                            }
                        case 1042:
                            var7 = _closure2_slot10;
                            if (!(var11 != var7)) {
                                _fun60997_ip = 1211;
                                continue _fun60997
                            }
                        case 1053:
                            if (!(var34 > var10)) {
                                _fun60997_ip = 1211;
                                continue _fun60997
                            }
                        case 1060:
                            var7 = _closure2_slot3;
                            if (var7) {
                                _fun60997_ip = 1117;
                                continue _fun60997
                            }
                        case 1067:
                            var31 = _closure2_slot4;
                            var7 = false;
                            if (var31) {
                                _fun60997_ip = 1114;
                                continue _fun60997
                            }
                        case 1076:
                            var7 = false;
                            if (!(var10 === var9)) {
                                _fun60997_ip = 1114;
                                continue _fun60997
                            }
                        case 1082:
                            var31 = var16 - var6;
                            var7 = true;
                            if (!(var31 >= var10)) {
                                _fun60997_ip = 1114;
                                continue _fun60997
                            }
                        case 1092:
                            var33 = var30[var31];
                            var33 = var33 > var10;
                            var7 = false;
                            if (var33) {
                                _fun60997_ip = 1114;
                                continue _fun60997
                            }
                        case 1105:
                            var31 = var31 - 1;
                            var7 = true;
                            if (var31 >= var10) {
                                _fun60997_ip = 1092;
                                continue _fun60997
                            }
                        case 1114:
                            if (!var7) {
                                _fun60997_ip = 1211;
                                continue _fun60997
                            }
                        case 1117:
                            var32 = 'lh';
                            if (!(var13 !== var5)) {
                                _fun60997_ip = 1130;
                                continue _fun60997
                            }
                        case 1127:
                            var32 = var5;
                        case 1130:
                            var7 = var4.push;
                            var31 = _closure1_slot5;
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var14];
                            var9 = var9.bind(var17)(var5);
                            var5 = {};
                            var33 = var19.HermesInternal;
                            var33 = var33.concat;
                            var33 = var33.bind(var13)(var27, var12, var32);
                            var5.portalId = var33;
                            var33 = _closure2_slot10;
                            var33 = var33.bind(var17)();
                            var33 = var20.bind(var17)(var33, var34);
                            var5.children = var33;
                            var5 = var31.bind(var17)(var9, var5, var32);
                            var5 = var7.bind(var4)(var5);
                        case 1211:
                            var5 = _closure2_slot9;
                            if (!(var11 != var5)) {
                                _fun60997_ip = 1421;
                                continue _fun60997
                            }
                        case 1222:
                            if (!(var29 > var10)) {
                                _fun60997_ip = 1421;
                                continue _fun60997
                            }
                        case 1229:
                            var5 = _closure2_slot2;
                            if (var5) {
                                _fun60997_ip = 1327;
                                continue _fun60997
                            }
                        case 1236:
                            var7 = _closure2_slot4;
                            var5 = false;
                            if (var7) {
                                _fun60997_ip = 1324;
                                continue _fun60997
                            }
                        case 1245:
                            var32 = var19.Math;
                            var31 = var32.max;
                            var7 = var30[var15];
                            var7 = var7 - var6;
                            var7 = var31.bind(var32)(var7, var10);
                            var5 = false;
                            if (!(var8 === var7)) {
                                _fun60997_ip = 1324;
                                continue _fun60997
                            }
                        case 1276:
                            var8 = var15 + var6;
                            var6 = var30.length;
                            var6 = var8 < var6;
                            var5 = true;
                            if (!var6) {
                                _fun60997_ip = 1324;
                                continue _fun60997
                            }
                        case 1294:
                            var6 = var30[var8];
                            var6 = var6 > var10;
                            var5 = false;
                            if (var6) {
                                _fun60997_ip = 1324;
                                continue _fun60997
                            }
                        case 1307:
                            var8 = var8 + 1;
                            var6 = var30.length;
                            var6 = var8 < var6;
                            var5 = true;
                            if (var6) {
                                _fun60997_ip = 1294;
                                continue _fun60997
                            }
                        case 1324:
                            if (!var5) {
                                _fun60997_ip = 1421;
                                continue _fun60997
                            }
                        case 1327:
                            var5 = 'lf';
                            if (!(var13 !== var1)) {
                                _fun60997_ip = 1340;
                                continue _fun60997
                            }
                        case 1337:
                            var5 = var1;
                        case 1340:
                            var1 = var19.HermesInternal;
                            var1 = var1.concat;
                            var8 = var1.bind(var13)(var27, var12, var5);
                            var5 = var4.push;
                            var7 = _closure1_slot5;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var14];
                            var6 = var6.bind(var17)(var1);
                            var1 = {};
                            var1.portalId = var8;
                            var9 = _closure2_slot9;
                            var9 = var9.bind(var17)();
                            var9 = var20.bind(var17)(var9, var29);
                            var1.children = var9;
                            var1 = var7.bind(var17)(var6, var1, var8);
                            var1 = var5.bind(var4)(var1);
                        case 1421:
                            var29 = var16 <= var15;
                            var9 = 'sh';
                            var8 = 'sf';
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var1 = undefined;
                            if (!var29) {
                                _fun60997_ip = 1822;
                                continue _fun60997
                            }
                        case 1447:
                            var31 = _closure2_slot4;
                            var30 = var6;
                            var29 = var1;
                            if (var31) {
                                _fun60997_ip = 1806;
                                continue _fun60997
                            }
                        case 1463:
                            if (var25) {
                                _fun60997_ip = 1472;
                                continue _fun60997
                            }
                        case 1466:
                            var34 = var24[var16];
                            _fun60997_ip = 1476;
                            continue _fun60997;
                        case 1472:
                            var34 = var24[var10];
                        case 1476:
                            var33 = var6;
                            if (!(var34 > var10)) {
                                _fun60997_ip = 1621;
                                continue _fun60997
                            }
                        case 1486:
                            var31 = _closure2_slot11;
                            var33 = var6;
                            if (!(var11 != var31)) {
                                _fun60997_ip = 1621;
                                continue _fun60997
                            }
                        case 1500:
                            if (var28) {
                                _fun60997_ip = 1509;
                                continue _fun60997
                            }
                        case 1503:
                            var31 = var26[var16];
                            _fun60997_ip = 1513;
                            continue _fun60997;
                        case 1509:
                            var31 = var26[var10];
                        case 1513:
                            var35 = var31;
                            if (!(var13 === var31)) {
                                _fun60997_ip = 1536;
                                continue _fun60997
                            }
                        case 1520:
                            var32 = var19.HermesInternal;
                            var32 = var32.concat;
                            var35 = var32.bind(var8)(var16);
                        case 1536:
                            var32 = var19.HermesInternal;
                            var32 = var32.concat;
                            var38 = var32.bind(var13)(var27, var12, var35);
                            var35 = var4.push;
                            var37 = _closure1_slot5;
                            var36 = _closure1_slot0;
                            var32 = _closure1_slot1;
                            var32 = var32[var14];
                            var36 = var36.bind(var17)(var32);
                            var32 = {};
                            var32.portalId = var38;
                            var39 = _closure2_slot11;
                            var39 = var39.bind(var17)(var16);
                            var39 = var20.bind(var17)(var39, var34);
                            var32.children = var39;
                            var32 = var37.bind(var17)(var36, var32, var38);
                            var32 = var35.bind(var4)(var32);
                            var33 = var31;
                        case 1621:
                            if (var22) {
                                _fun60997_ip = 1630;
                                continue _fun60997
                            }
                        case 1624:
                            var32 = var21[var16];
                            _fun60997_ip = 1634;
                            continue _fun60997;
                        case 1630:
                            var32 = var21[var10];
                        case 1634:
                            var7 = var34;
                            var30 = var33;
                            var29 = var1;
                            var5 = var32;
                            if (!(var5 > var10)) {
                                _fun60997_ip = 1806;
                                continue _fun60997
                            }
                        case 1653:
                            var31 = _closure2_slot12;
                            var7 = var34;
                            var30 = var33;
                            var5 = var32;
                            var29 = var1;
                            if (!(var11 != var31)) {
                                _fun60997_ip = 1806;
                                continue _fun60997
                            }
                        case 1676:
                            if (var28) {
                                _fun60997_ip = 1685;
                                continue _fun60997
                            }
                        case 1679:
                            var31 = var23[var16];
                            _fun60997_ip = 1689;
                            continue _fun60997;
                        case 1685:
                            var31 = var23[var10];
                        case 1689:
                            var36 = var31;
                            if (!(var13 === var31)) {
                                _fun60997_ip = 1712;
                                continue _fun60997
                            }
                        case 1696:
                            var35 = var19.HermesInternal;
                            var35 = var35.concat;
                            var36 = var35.bind(var9)(var16);
                        case 1712:
                            var35 = var19.HermesInternal;
                            var35 = var35.concat;
                            var39 = var35.bind(var13)(var27, var12, var36);
                            var36 = var4.push;
                            var38 = _closure1_slot5;
                            var37 = _closure1_slot0;
                            var35 = _closure1_slot1;
                            var35 = var35[var14];
                            var37 = var37.bind(var17)(var35);
                            var35 = {};
                            var35.portalId = var39;
                            var40 = _closure2_slot12;
                            var40 = var40.bind(var17)(var16);
                            var40 = var20.bind(var17)(var40, var32);
                            var35.children = var40;
                            var35 = var38.bind(var17)(var37, var35, var39);
                            var35 = var36.bind(var4)(var35);
                            var7 = var34;
                            var30 = var33;
                            var5 = var32;
                            var29 = var31;
                        case 1806:
                            var16 = var16 + 1;
                            var6 = var30;
                            var1 = var29;
                            if (var16 <= var15) {
                                _fun60997_ip = 1447;
                                continue _fun60997
                            }
                        case 1822:
                            var1 = {};
                            var1.items = var4;
                            var1.keys = var3;
                            var1.keyIndex = var2;
                            return var1;
                        case 1839:
                            var0 = _closure2_slot16;
                            var0 = var0.current;
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var2, var4);
                _closure2_slot17 = var4;
                var6 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var4;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot16;
                    var0 = _closure2_slot17;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = 'none';
                var0.pointerEvents = var6;
                var0.style = var5;
                var4 = var4.items;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/FastestListChildren.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 7537, 628, 7538, 7539, 2]);