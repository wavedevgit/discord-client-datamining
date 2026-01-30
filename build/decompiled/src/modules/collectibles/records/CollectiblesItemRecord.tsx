// modules/collectibles/records/CollectiblesItemRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun42267: for (var _fun42267_ip = 0;;) switch (_fun42267_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42267_ip = 45;
                    continue _fun42267
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun42267_ip = 54;
                    continue _fun42267
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun42267_ip = 342;
                    continue _fun42267
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42267_ip = 322;
                    continue _fun42267
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42267_ip = 282;
                    continue _fun42267
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42267_ip = 269;
                    continue _fun42267
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun42267_ip = 162;
                    continue _fun42267
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun42267_ip = 178;
                    continue _fun42267
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42267_ip = 248;
                    continue _fun42267
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42267_ip = 248;
                    continue _fun42267
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42267_ip = 233;
                    continue _fun42267
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42267_ip = 246;
                    continue _fun42267
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun42267_ip = 264;
                continue _fun42267;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun42267_ip = 282;
                continue _fun42267;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun42267_ip = 322;
                    continue _fun42267
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun42267_ip = 329;
                    continue _fun42267
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42268: for (var _fun42268_ip = 0;;) switch (_fun42268_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42268_ip = 56;
                                continue _fun42268
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun42268_ip = 67;
                            continue _fun42268;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun42269: for (var _fun42269_ip = 0;;) switch (_fun42269_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42269_ip = 23;
                    continue _fun42269
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42269_ip = 33;
                    continue _fun42269
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun42269_ip = 70;
                    continue _fun42269
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42269_ip = 55;
                    continue _fun42269
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.SKUProductLines;
    var _closure1_slot5 = var6;
    var1 = var1.SKUTypes;
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var5 = var4.bind(var0)(var1);
    var4 = var5.fileFinishedImporting;
    var1 = 'modules/collectibles/records/CollectiblesItemRecord.tsx';
    var1 = var4.bind(var5)(var1);
    var1 = function(arg0) { // Environment: var3
        _fun42270: for (var _fun42270_ip = 0;;) switch (_fun42270_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun42270_ip = 34;
                    continue _fun42270
                }
            case 9:
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun42271: for (var _fun42271_ip = 0;;) switch (_fun42271_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var7 = 4;
                            var2 = var2[var7];
                            var6 = undefined;
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.AVATAR_DECORATION;
                            if (!(var3 === var2)) {
                                _fun42271_ip = 77;
                                continue _fun42271
                            }
                        case 52:
                            var3 = var0.push;
                            var5 = _closure1_slot2;
                            var2 = var5.fromServer;
                            var2 = var2.bind(var5)(var4);
                            var2 = var3.bind(var0)(var2);
                        case 77:
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.PROFILE_EFFECT;
                            if (!(var3 === var2)) {
                                _fun42271_ip = 140;
                                continue _fun42271
                            }
                        case 115:
                            var3 = var0.push;
                            var5 = _closure1_slot4;
                            var2 = var5.fromServer;
                            var2 = var2.bind(var5)(var4);
                            var2 = var3.bind(var0)(var2);
                        case 140:
                            var3 = var4.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.NAMEPLATE;
                            if (!(var3 === var2)) {
                                _fun42271_ip = 203;
                                continue _fun42271
                            }
                        case 178:
                            var2 = var0.push;
                            var3 = _closure1_slot3;
                            var1 = var3.fromServer;
                            var1 = var1.bind(var3)(var4);
                            var1 = var2.bind(var0)(var1);
                        case 203:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var2.bind(var3)(var1, var0);
                _fun42270_ip = 38;
                continue _fun42270;
            case 34:
                var0 = new Array(0);
            case 38:
                return var0;
        }
    };
    var2.createCollectiblesItemsFromServerResponse = var1;
    var1 = function(arg0) { // Original name: transformSKUToCollectiblesItem, environment: var3
        _fun42272: for (var _fun42272_ip = 0;;) switch (_fun42272_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.productLine;
                var1 = _closure1_slot5;
                var1 = var1.COLLECTIBLES;
                if (!(var2 === var1)) {
                    _fun42272_ip = 220;
                    continue _fun42272
                }
            case 29:
                var2 = var0.type;
                var1 = _closure1_slot6;
                var1 = var1.BUNDLE;
                if (!(var2 !== var1)) {
                    _fun42272_ip = 607;
                    continue _fun42272
                }
            case 51:
                var2 = var0.tenantMetadata;
                var6 = null;
                var3 = var6 == var2;
                var4 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun42272_ip = 76;
                    continue _fun42272
                }
            case 70:
                var1 = var2.collectibles;
            case 76:
                var2 = var6 == var1;
                var5 = undefined;
                if (var2) {
                    _fun42272_ip = 90;
                    continue _fun42272
                }
            case 85:
                var5 = var1.item;
            case 90:
                if (!(var6 != var5)) {
                    _fun42272_ip = 220;
                    continue _fun42272
                }
            case 97:
                var2 = var5.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 4;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var2 !== var1)) {
                    _fun42272_ip = 513;
                    continue _fun42272
                }
            case 141:
                var2 = var5.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var2 !== var1)) {
                    _fun42272_ip = 329;
                    continue _fun42272
                }
            case 182:
                var2 = var5.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var2 !== var1)) {
                    _fun42272_ip = 224;
                    continue _fun42272
                }
            case 220:
                var1 = undefined;
                return var1;
            case 224:
                var1 = {};
                var2 = 'single';
                var1.type = var2;
                var4 = _closure1_slot3;
                var2 = {};
                var3 = var0.id;
                var2.skuId = var3;
                var3 = var5.type;
                var2.type = var3;
                var3 = var5.asset;
                var2.asset = var3;
                var3 = var5.labelLocalized;
                if (!(var6 == var3)) {
                    _fun42272_ip = 285;
                    continue _fun42272
                }
            case 280:
                var3 = var5.label;
            case 285:
                var2.label = var3;
                var3 = var5.palette;
                var2.palette = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var1.item = var2;
                return var1;
            case 329:
                var1 = {};
                var2 = 'single';
                var1.type = var2;
                var4 = _closure1_slot4;
                var2 = {};
                var3 = var0.id;
                var2.skuId = var3;
                var3 = var5.type;
                var2.type = var3;
                var3 = var5.titleLocalized;
                if (!(var6 == var3)) {
                    _fun42272_ip = 379;
                    continue _fun42272
                }
            case 374:
                var3 = var5.title;
            case 379:
                var2.title = var3;
                var3 = var5.descriptionLocalized;
                if (!(var6 == var3)) {
                    _fun42272_ip = 398;
                    continue _fun42272
                }
            case 393:
                var3 = var5.description;
            case 398:
                var2.description = var3;
                var3 = var5.thumbnailPreviewSrc;
                var2.thumbnailPreviewSrc = var3;
                var3 = var5.reducedMotionSrc;
                var2.reducedMotionSrc = var3;
                var3 = var5.effects;
                if (!(var6 == var3)) {
                    _fun42272_ip = 438;
                    continue _fun42272
                }
            case 434:
                var3 = new Array(0);
            case 438:
                var2.effects = var3;
                var3 = var5.accessibilityLabelLocalized;
                if (!(var6 == var3)) {
                    _fun42272_ip = 458;
                    continue _fun42272
                }
            case 453:
                var3 = var5.accessibilityLabel;
            case 458:
                var2.accessibilityLabel = var3;
                var3 = var5.animationType;
                var2.animationType = var3;
                var3 = var5.staticFrameSrc;
                var2.staticFrameSrc = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var1.item = var2;
                return var1;
            case 513:
                var1 = {};
                var2 = 'single';
                var1.type = var2;
                var4 = _closure1_slot2;
                var2 = {};
                var3 = var0.id;
                var2.skuId = var3;
                var3 = var5.type;
                var2.type = var3;
                var3 = var5.asset;
                var2.asset = var3;
                var3 = var5.labelLocalized;
                if (!(var6 == var3)) {
                    _fun42272_ip = 574;
                    continue _fun42272
                }
            case 569:
                var3 = var5.label;
            case 574:
                var2.label = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                var1.item = var2;
                return var1;
            case 607:
                var2 = new Array(0);
                var3 = _closure1_slot7;
                var1 = var0.bundledSkus;
                var6 = null;
                if (!(var6 == var1)) {
                    _fun42272_ip = 631;
                    continue _fun42272
                }
            case 627:
                var1 = new Array(0);
            case 631:
                var0 = undefined;
                var5 = var3.bind(var0)(var1);
                var3 = var5.bind(var0)();
                var1 = var3.done;
                var4 = 'single';
                if (var1) {
                    _fun42272_ip = 716;
                    continue _fun42272
                }
            case 654:
                var8 = _closure1_slot9;
                var1 = var3.value;
                var1 = var8.bind(var0)(var1);
                var9 = var6 == var1;
                var8 = undefined;
                if (var9) {
                    _fun42272_ip = 682;
                    continue _fun42272
                }
            case 677:
                var8 = var1.type;
            case 682:
                if (!(var4 === var8)) {
                    _fun42272_ip = 701;
                    continue _fun42272
                }
            case 686:
                var8 = var2.push;
                var1 = var1.item;
                var1 = var8.bind(var2)(var1);
            case 701:
                var8 = var5.bind(var0)();
                var1 = var8.done;
                var3 = var8;
                if (!var1) {
                    _fun42272_ip = 654;
                    continue _fun42272
                }
            case 716:
                var3 = var2.length;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun42272_ip = 744;
                    continue _fun42272
                }
            case 727:
                var1 = {};
                var3 = 'bundle';
                var1.type = var3;
                var1.items = var2;
                return var1;
            case 744:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var2.transformSKUToCollectiblesItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4564, 4566, 4567, 660, 3452, 2]);