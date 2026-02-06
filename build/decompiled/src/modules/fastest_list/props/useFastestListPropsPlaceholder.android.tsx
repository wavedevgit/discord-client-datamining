// modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun61207: for (var _fun61207_ip = 0;;) switch (_fun61207_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 == var2;
                var6 = undefined;
                var9 = undefined;
                if (var0) {
                    _fun61207_ip = 21;
                    continue _fun61207
                }
            case 16:
                var9 = var2.type;
            case 21:
                var0 = {};
                var0.borderRadius = var6;
                var0.borderTopLeftRadius = var6;
                var0.borderTopRightRadius = var6;
                var0.borderBottomLeftRadius = var6;
                var0.borderBottomRightRadius = var6;
                var0.divider = var6;
                var0.dividerColorRgba = var6;
                var0.dividerPaddingLeft = var6;
                var0.dividerPaddingRight = var6;
                var0.placeholderShape = var6;
                var0.placeholderShapeColorRgba = var6;
                var0.placeholderShapeCount = var6;
                var0.placeholderShapeGap = var6;
                var0.placeholderShapePaddingHorizontal = var6;
                var0.placeholderShapePaddingVertical = var6;
                var0.placeholderFeedBackgroundColorRgba = var6;
                var0.placeholderFeedColorRgba = var6;
                var0.placeholderFeedLabelPadding = var6;
                var0.placeholderFeedLabelPaddingInnerRatio = var6;
                var0.placeholderFeedLabelSize = var6;
                var0.placeholderFeedLabelSecondarySize = var6;
                var0.placeholderFeedPadding = var6;
                var0.placeholderFeedShape = var6;
                var0.placeholderFeedShapeSize = var6;
                var1 = var9;
                if (!(var3 == var1)) {
                    _fun61207_ip = 184;
                    continue _fun61207
                }
            case 149:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.FastestListPropsPlaceholderType;
                var1 = var4.NONE;
            case 184:
                var0.placeholderType = var1;
                var0.width = var6;
                var0.height = var6;
                var0.verticalAlignment = var6;
                var0.horizontalAlignment = var6;
                if (!(var3 != var2)) {
                    _fun61207_ip = 1113;
                    continue _fun61207
                }
            case 216:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var5 = var5[var1];
                var5 = var7.bind(var6)(var5);
                var5 = var5.FastestListPropsPlaceholderType;
                var5 = var5.NONE;
                if (!(var5 !== var9)) {
                    _fun61207_ip = 1111;
                    continue _fun61207
                }
            case 258:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var1];
                var5 = var7.bind(var6)(var5);
                var5 = var5.FastestListPropsPlaceholderType;
                var5 = var5.SHAPE;
                if (!(var5 !== var9)) {
                    _fun61207_ip = 859;
                    continue _fun61207
                }
            case 294:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var1];
                var5 = var7.bind(var6)(var5);
                var5 = var5.FastestListPropsPlaceholderType;
                var5 = var5.FEED_ITEM;
                if (!(var5 !== var9)) {
                    _fun61207_ip = 379;
                    continue _fun61207
                }
            case 327:
                var5 = global;
                var8 = var5.Error;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var5 = 'Invalid placeholder type: ';
                var12 = var7.bind(var5)(var9);
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var13 = var7;
                var5 = new var13[var8](var12, var11);
                var5 = var5 instanceof Object ? var5 : var7;
                throw var5;
            case 379:
                var8 = var2.borderRadius;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 396;
                    continue _fun61207
                }
            case 393:
                var7 = var8;
            case 396:
                var0.borderRadius = var7;
                var8 = var2.borderTopLeftRadius;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 420;
                    continue _fun61207
                }
            case 417:
                var7 = var8;
            case 420:
                var0.borderTopLeftRadius = var7;
                var8 = var2.borderTopRightRadius;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 444;
                    continue _fun61207
                }
            case 441:
                var7 = var8;
            case 444:
                var0.borderTopRightRadius = var7;
                var8 = var2.borderBottomLeftRadius;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 468;
                    continue _fun61207
                }
            case 465:
                var7 = var8;
            case 468:
                var0.borderBottomLeftRadius = var7;
                var8 = var2.borderBottomRightRadius;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 492;
                    continue _fun61207
                }
            case 489:
                var7 = var8;
            case 492:
                var0.borderBottomRightRadius = var7;
                var8 = var2.divider;
                var7 = var3 != var8;
                if (!var7) {
                    _fun61207_ip = 514;
                    continue _fun61207
                }
            case 511:
                var7 = var8;
            case 514:
                var0.divider = var7;
                var7 = var2.dividerColorHex;
                var8 = var3 != var7;
                var7 = undefined;
                if (!var8) {
                    _fun61207_ip = 572;
                    continue _fun61207
                }
            case 535:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 2;
                var8 = var10[var8];
                var10 = var9.bind(var6)(var8);
                var9 = var10.hexToRgbaString;
                var8 = var2.dividerColorHex;
                var7 = var9.bind(var10)(var8);
            case 572:
                var0.dividerColorRgba = var7;
                var8 = var2.dividerPaddingLeft;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 596;
                    continue _fun61207
                }
            case 593:
                var7 = var8;
            case 596:
                var0.dividerPaddingLeft = var7;
                var8 = var2.dividerPaddingRight;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 620;
                    continue _fun61207
                }
            case 617:
                var7 = var8;
            case 620:
                var0.dividerPaddingRight = var7;
                var7 = var2.backgroundColorHex;
                var8 = var3 != var7;
                var7 = undefined;
                if (!var8) {
                    _fun61207_ip = 678;
                    continue _fun61207
                }
            case 641:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 2;
                var8 = var10[var8];
                var10 = var9.bind(var6)(var8);
                var9 = var10.hexToRgbaString;
                var8 = var2.backgroundColorHex;
                var7 = var9.bind(var10)(var8);
            case 678:
                var0.placeholderFeedBackgroundColorRgba = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 2;
                var7 = var9[var7];
                var9 = var8.bind(var6)(var7);
                var8 = var9.hexToRgbaString;
                var7 = var2.colorHex;
                var7 = var8.bind(var9)(var7);
                var0.placeholderFeedColorRgba = var7;
                var7 = var2.labelSize;
                var0.placeholderFeedLabelSize = var7;
                var8 = var2.labelSecondarySize;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 757;
                    continue _fun61207
                }
            case 754:
                var7 = var8;
            case 757:
                var0.placeholderFeedLabelSecondarySize = var7;
                var7 = var2.labelPadding;
                var0.placeholderFeedLabelPadding = var7;
                var8 = var2.labelPaddingInnerRatio;
                var9 = var3 != var8;
                var7 = 0.4;
                if (!var9) {
                    _fun61207_ip = 801;
                    continue _fun61207
                }
            case 798:
                var7 = var8;
            case 801:
                var0.placeholderFeedLabelPaddingInnerRatio = var7;
                var7 = var2.padding;
                var8 = var3 != var7;
                var5 = 0;
                if (!var8) {
                    _fun61207_ip = 824;
                    continue _fun61207
                }
            case 821:
                var5 = var7;
            case 824:
                var0.placeholderFeedPadding = var5;
                var5 = var2.shape;
                var0.placeholderFeedShape = var5;
                var5 = var2.shapeSize;
                var0.placeholderFeedShapeSize = var5;
                _fun61207_ip = 1111;
                continue _fun61207;
            case 859:
                var8 = var2.borderRadius;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 876;
                    continue _fun61207
                }
            case 873:
                var7 = var8;
            case 876:
                var0.borderRadius = var7;
                var7 = var2.shape;
                var0.placeholderShape = var7;
                var8 = var2.spaceGap;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 912;
                    continue _fun61207
                }
            case 909:
                var7 = var8;
            case 912:
                var0.placeholderShapeGap = var7;
                var8 = var2.paddingHorizontal;
                var9 = var3 != var8;
                var7 = 0;
                if (!var9) {
                    _fun61207_ip = 935;
                    continue _fun61207
                }
            case 932:
                var7 = var8;
            case 935:
                var0.placeholderShapePaddingHorizontal = var7;
                var7 = var2.paddingVertical;
                var8 = var3 != var7;
                var5 = 0;
                if (!var8) {
                    _fun61207_ip = 959;
                    continue _fun61207
                }
            case 956:
                var5 = var7;
            case 959:
                var0.placeholderShapePaddingVertical = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var7 = var5.bind(var6)(var4);
                var6 = var7.hexToRgbaString;
                var5 = var2.colorHex;
                var4 = var2.opacity;
                var4 = var6.bind(var7)(var5, var4);
                var0.placeholderShapeColorRgba = var4;
                var4 = var2.shapeCount;
                var5 = var3 != var4;
                if (!var5) {
                    _fun61207_ip = 1030;
                    continue _fun61207
                }
            case 1027:
                var1 = var4;
            case 1030:
                var0.placeholderShapeCount = var1;
                var1 = var2.width;
                var0.width = var1;
                var1 = var2.height;
                var0.height = var1;
                var5 = var2.verticalAlignment;
                var6 = var3 != var5;
                var1 = 'center';
                var4 = var1;
                if (!var6) {
                    _fun61207_ip = 1081;
                    continue _fun61207
                }
            case 1078:
                var4 = var5;
            case 1081:
                var0.verticalAlignment = var4;
                var2 = var2.horizonalAlignment;
                var3 = var3 != var2;
                if (!var3) {
                    _fun61207_ip = 1105;
                    continue _fun61207
                }
            case 1102:
                var1 = var2;
            case 1105:
                var0.horizontalAlignment = var1;
            case 1111:
                return var0;
            case 1113:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = {};
    var7 = 1;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.FastestListPropsPlaceholderType;
    var7 = var7.NONE;
    var6.type = var7;
    var3.sectionItem = var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun61208: for (var _fun61208_ip = 0;;) switch (_fun61208_ip) {
            case 0:
                var4 = arguments[0];
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun61208_ip = 18;
                    continue _fun61208
                }
            case 11:
                var4 = _closure1_slot3;
            case 18:
                var _closure2_slot0 = var4;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var4 = var1.listFooter;
                    var2 = undefined;
                    var4 = var3.bind(var2)(var4);
                    var0.listFooter = var4;
                    var4 = var1.listHeader;
                    var4 = var3.bind(var2)(var4);
                    var0.listHeader = var4;
                    var4 = var1.sectionFooter;
                    var4 = var3.bind(var2)(var4);
                    var0.sectionFooter = var4;
                    var4 = var1.sectionHeader;
                    var4 = var3.bind(var2)(var4);
                    var0.sectionHeader = var4;
                    var4 = var1.sectionItem;
                    var4 = var3.bind(var2)(var4);
                    var0.sectionItem = var4;
                    var4 = var1.sectionItemAtFront;
                    var4 = var3.bind(var2)(var4);
                    var0.sectionItemAtFront = var4;
                    var4 = var1.sectionItemAtRear;
                    var4 = var3.bind(var2)(var4);
                    var0.sectionItemAtRear = var4;
                    var1 = var1.sectionItemSingleton;
                    var1 = var3.bind(var2)(var1);
                    var0.sectionItemSingleton = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7596, 3242, 2]);