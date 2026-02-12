// modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiCategoryTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IMAGE_SIZE;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PADDING_VERTICAL;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var7 = var3.Fragment;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var7 = var8.create;
    var3 = {};
    var10 = {
        'position': 'absolute',
        'left': 0,
        'right': 0
    };
    var3.containerPortals = var10;
    var10 = {};
    var10.flex = var11;
    var3.container = var10;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 8;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var9 = var7.bind(var8)(var3);
    var3 = 9;
    var7 = var5[var3];
    var8 = var4.bind(var0)(var7);
    var7 = var8.createBottomSheetScrollableComponent;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SCROLLABLE_TYPE;
    var3 = var3.SCROLLVIEW;
    var3 = var7.bind(var8)(var3, var9);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.isMetaQuest;
    var3 = var3.bind(var7)();
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function EmojiPickerListComponentAndroidTsx1(){const{bottomSheetIndex}=this.__closure;return bottomSheetIndex.get();}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function EmojiPickerListComponentAndroidTsx2(index){const{inPortalKeyboard,IS_META_QUEST,runOnJS,scrollingEnabled}=this.__closure;if(!inPortalKeyboard||index<0||IS_META_QUEST){return;}if(index===0){runOnJS(scrollingEnabled)(false);}else if(index===1){runOnJS(scrollingEnabled)(true);}}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var9 = var0.analyticsLocations;
        var21 = var0.bottomSheetIndex;
        var _closure2_slot0 = var21;
        var14 = var0.categoryIndexActive;
        var _closure2_slot1 = var14;
        var7 = var0.data;
        var _closure2_slot2 = var7;
        var2 = var0.animateEmoji;
        var _closure2_slot3 = var2;
        var10 = var0.guildId;
        var _closure2_slot4 = var10;
        var26 = var0.inPortalKeyboard;
        var _closure2_slot5 = var26;
        var13 = var0.paddingTop;
        var12 = var0.paddingBottom;
        var16 = var0.onPressEmoji;
        var _closure2_slot6 = var16;
        var19 = var0.onLongPressEmoji;
        var _closure2_slot7 = var19;
        var4 = var0.onShowNitroUpsell;
        var _closure2_slot8 = var4;
        var8 = var0.useTier0UpsellContent;
        var6 = _closure1_slot8;
        var24 = _closure1_slot0;
        var25 = _closure1_slot2;
        var3 = 11;
        var5 = var25[var3];
        var3 = undefined;
        var5 = var24.bind(var3)(var5);
        var11 = var5.PremiumSearchUpsell;
        var5 = {};
        var5.guildId = var10;
        var5.analyticsLocations = var9;
        var5.useTier0UpsellContent = var8;
        var5 = var6.bind(var3)(var11, var5);
        var _closure2_slot9 = var5;
        var5 = _closure1_slot3;
        var15 = var5.useRef;
        var11 = null;
        var11 = var15.bind(var5)(var11);
        var _closure2_slot10 = var11;
        var18 = var5.useEffect;
        var17 = new Array(2);
        var17[0] = var11;
        var17[1] = var7;
        var15 = function() { // Environment: var1
            _fun73970: for (var _fun73970_ip = 0;;) switch (_fun73970_ip) {
                case 0:
                    var0 = _closure2_slot10;
                    var3 = var0.current;
                    var1 = null;
                    var1 = var1 != var3;
                    if (!var1) {
                        _fun73970_ip = 31;
                        continue _fun73970
                    }
                case 21:
                    var2 = _closure2_slot2;
                    var1 = var2.hasGuildData;
                case 31:
                    if (!var1) {
                        _fun73970_ip = 81;
                        continue _fun73970
                    }
                case 34:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.Commands;
                    var1 = var2.refreshEmojis;
                    var0 = var0.current;
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var15 = var18.bind(var5)(var15, var17);
        var18 = var5.useCallback;
        var17 = function(arg0) { // Environment: var1
            _fun73971: for (var _fun73971_ip = 0;;) switch (_fun73971_ip) {
                case 0:
                    var0 = _closure2_slot10;
                    var2 = var0.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun73971_ip = 69;
                        continue _fun73971
                    }
                case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.Commands;
                    var2 = var3.scrollingEnabled;
                    var1 = var0.current;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var15 = new Array(0);
        var22 = var18.bind(var5)(var17, var15);
        var _closure2_slot11 = var22;
        var23 = 7;
        var15 = var25[var23];
        var20 = var24.bind(var3)(var15);
        var18 = var20.useAnimatedReaction;
        var17 = function() {
            var1 = _closure2_slot0;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var15 = {};
        var15.bottomSheetIndex = var21;
        var17.__closure = var15;
        var15 = 10656486632396.0;
        var17.__workletHash = var15;
        var15 = _closure1_slot14;
        var17.__initData = var15;
        var15 = function arg0() {
            _fun73973: for (var _fun73973_ip = 0;;) switch (_fun73973_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot5;
                    var1 = !var1;
                    if (var1) {
                        _fun73973_ip = 22;
                        continue _fun73973
                    }
                case 16:
                    var3 = 0;
                    var1 = var2 < var3;
                case 22:
                    if (var1) {
                        _fun73973_ip = 32;
                        continue _fun73973
                    }
                case 25:
                    var1 = _closure1_slot13;
                case 32:
                    if (var1) {
                        _fun73973_ip = 142;
                        continue _fun73973
                    }
                case 35:
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun73973_ip = 96;
                        continue _fun73973
                    }
                case 41:
                    var1 = 1;
                    if (!(var1 === var2)) {
                        _fun73973_ip = 142;
                        continue _fun73973
                    }
                case 48:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot11;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    _fun73973_ip = 142;
                    continue _fun73973;
                case 96:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.runOnJS;
                    var0 = _closure2_slot11;
                    var1 = var1.bind(var3)(var0);
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 142:
                    var0 = undefined;
                    return var0;
            }
        };
        var21 = {};
        var21.inPortalKeyboard = var26;
        var26 = _closure1_slot13;
        var21.IS_META_QUEST = var26;
        var23 = var25[var23];
        var23 = var24.bind(var3)(var23);
        var23 = var23.runOnJS;
        var21.runOnJS = var23;
        var21.scrollingEnabled = var22;
        var15.__closure = var21;
        var21 = 2460528828147.0;
        var15.__workletHash = var21;
        var21 = _closure1_slot15;
        var15.__initData = var21;
        var15 = var18.bind(var20)(var17, var15);
        var18 = var5.useCallback;
        var17 = new Array(1);
        var17[0] = var10;
        var15 = function(arg0) { // Environment: var1
            _fun73974: for (var _fun73974_ip = 0;;) switch (_fun73974_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.emojiId;
                    var2 = var0.emojiName;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun73974_ip = 59;
                        continue _fun73974
                    }
                case 21:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.getByName;
                    var0 = var0.bind(var1)(var2);
                    _fun73974_ip = 95;
                    continue _fun73974;
                case 59:
                    var4 = _closure1_slot4;
                    var2 = var4.getDisambiguatedEmojiContext;
                    var1 = _closure2_slot4;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getById;
                    var0 = var1.bind(var2)(var3);
                case 95:
                    return var0;
            }
        };
        var15 = var18.bind(var5)(var15, var17);
        var _closure2_slot12 = var15;
        var18 = var5.useCallback;
        var17 = new Array(2);
        var17[0] = var16;
        var17[1] = var15;
        var16 = function(arg0) { // Environment: var1
            _fun73975: for (var _fun73975_ip = 0;;) switch (_fun73975_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.nativeEvent;
                    var2 = _closure2_slot12;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun73975_ip = 38;
                        continue _fun73975
                    }
                case 29:
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)(var2);
                case 38:
                    return var0;
            }
        };
        var17 = var18.bind(var5)(var16, var17);
        var18 = var5.useCallback;
        var16 = new Array(2);
        var16[0] = var19;
        var16[1] = var15;
        var15 = function(arg0) { // Environment: var1
            _fun73976: for (var _fun73976_ip = 0;;) switch (_fun73976_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.nativeEvent;
                    var2 = _closure2_slot12;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun73976_ip = 38;
                        continue _fun73976
                    }
                case 29:
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var0)(var2);
                case 38:
                    return var0;
            }
        };
        var16 = var18.bind(var5)(var15, var16);
        var18 = var5.useCallback;
        var15 = new Array(1);
        var15[0] = var14;
        var14 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.nativeEvent;
            var2 = _closure2_slot1;
            var1 = var2.set;
            var0 = var0.index;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var15 = var18.bind(var5)(var14, var15);
        var18 = var5.useCallback;
        var14 = new Array(1);
        var14[0] = var4;
        var4 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.nativeEvent;
            var2 = _closure2_slot8;
            var1 = var0.showNitroUpsell;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var14 = var18.bind(var5)(var4, var14);
        var19 = var5.useImperativeHandle;
        var18 = arg1;
        var4 = function() { // Environment: var1
            var0 = {};
            var2 = function arg0() {
                _fun73980: for (var _fun73980_ip = 0;;) switch (_fun73980_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.index;
                        var4 = var0.animated;
                        var0 = undefined;
                        if (!(var4 === var0)) {
                            _fun73980_ip = 22;
                            continue _fun73980
                        }
                    case 20:
                        var4 = true;
                    case 22:
                        var1 = _closure2_slot10;
                        var3 = var1.current;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun73980_ip = 87;
                            continue _fun73980
                        }
                    case 40:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var2 = var3.bind(var0)(var2);
                        var3 = var2.Commands;
                        var2 = var3.scrollToHeaderIndex;
                        var1 = var1.current;
                        var1 = var2.bind(var3)(var1, var5, var4);
                    case 87:
                        return var0;
                }
            };
            var0.scrollToHeaderIndex = var2;
            var2 = function() {
                var0 = undefined;
                return var0;
            };
            var0.forceUpdate = var2;
            var1 = function() {
                var0 = undefined;
                return var0;
            };
            var0.onStickyHeaderRendered = var1;
            return var0;
        };
        var4 = var19.bind(var5)(var18, var4);
        var18 = var5.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            var0 = {
                'animateEmoji': null,
                'scrollFastOptimizationEnabled': true,
                'scrollFastVelocity': 8000,
                'disableAnimationsOnScroll': true
            };
            var1 = _closure2_slot3;
            var0.animateEmoji = var1;
            return var0;
        };
        var18 = var18.bind(var5)(var2, var4);
        var4 = _closure1_slot12;
        var2 = {};
        var2.config = var18;
        var2.emojiData = var7;
        var18 = _closure1_slot7;
        var2.emojiMargin = var18;
        var18 = _closure1_slot6;
        var2.emojiSize = var18;
        var2.onPressEmoji = var17;
        var2.onLongPressEmoji = var16;
        var2.onStickyHeaderRender = var15;
        var2.onShowNitroUpsell = var14;
        var2.paddingTop = var13;
        var2.paddingBottom = var12;
        var2.useTier0UpsellContent = var8;
        var2.ref = var11;
        var11 = _closure1_slot11;
        var11 = var11.container;
        var2.style = var11;
        var6 = var6.bind(var3)(var4, var2);
        var4 = var5.useMemo;
        var2 = new Array(4);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var7 = var7.hasSearchUpsell;
        var2[3] = var7;
        var1 = function() { // Environment: var1
            _fun73984: for (var _fun73984_ip = 0;;) switch (_fun73984_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var1 = var0.hasSearchUpsell;
                    var0 = null;
                    if (!var1) {
                        _fun73984_ip = 78;
                        continue _fun73984
                    }
                case 18:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.PREMIUM_UPSELL;
                    var1.portalId = var6;
                    var5 = _closure2_slot9;
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 78:
                    return var0;
            }
        };
        var5 = var4.bind(var5)(var1, var2);
        var2 = _closure1_slot10;
        var1 = _closure1_slot9;
        var0 = {};
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/EmojiPickerListComponent.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4710, 4714, 9296, 1565, 33, 3717, 9328, 4909, 4112, 9319, 3106, 7904, 2]);