// modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiCategoryTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var3.AnalyticsPages;
    var _closure1_slot6 = var7;
    var10 = var3.CATEGORY_ICON_SIZE;
    var11 = var3.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot7 = var11;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpressionPickerViewType;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.Fragment;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var12;
    var9.height = var11;
    var3.list = var9;
    var9 = {};
    var12 = 6;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var12;
    var3.listPlaceholder = var9;
    var9 = {};
    var9.height = var11;
    var9.width = var11;
    var11 = 'center';
    var9.justifyContent = var11;
    var9.alignItems = var11;
    var3.item = var9;
    var9 = {};
    var9.height = var10;
    var9.width = var10;
    var3.keyboardItem = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function EmojiPickerCategoriesTsx1(){const{categoryIndexActive}=this.__closure;return categoryIndexActive.get();}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){const{blockRef,EXPRESSION_FOOTER_HEIGHT,runOnJS,scrollToCategoryIndex}=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){runOnJS(scrollToCategoryIndex)(categoryIndex);}}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function EmojiPickerCategoriesTsx3(){const{inPortalKeyboard,bottomSheetIndex}=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function EmojiPickerCategoriesTsx4(){const{bottomSheetOpen}=this.__closure;return bottomSheetOpen.get();}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'function EmojiPickerCategoriesTsx5(open){const{runOnJS,handleScrollToCategoryIndex}=this.__closure;if(!open){return;}runOnJS(handleScrollToCategoryIndex)();}';
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74339: for (var _fun74339_ip = 0;;) switch (_fun74339_ip) {
            case 0:
                var1 = arg0;
                var22 = var1.bottomSheetRef;
                var _closure2_slot0 = var22;
                var29 = var1.bottomSheetIndex;
                var _closure2_slot1 = var29;
                var14 = var1.categories;
                var _closure2_slot2 = var14;
                var11 = var1.categoryIndexActive;
                var _closure2_slot3 = var11;
                var4 = var1.style;
                var20 = var1.emojiPickerListRef;
                var _closure2_slot4 = var20;
                var12 = var1.onBackspace;
                var5 = var1.portalHostName;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun74339_ip = 84;
                    continue _fun74339
                }
            case 78:
                var5 = 'expression-footer';
            case 84:
                var1 = var1.inPortalKeyboard;
                if (!(var1 === var3)) {
                    _fun74339_ip = 96;
                    continue _fun74339
                }
            case 94:
                var1 = false;
            case 96:
                var _closure2_slot5 = var1;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var2 = _closure1_slot12;
                var13 = var2.bind(var3)();
                _closure2_slot6 = var13;
                var10 = _closure1_slot0;
                var26 = _closure1_slot2;
                var27 = 7;
                var2 = var26[var27];
                var6 = var10.bind(var3)(var2);
                var2 = var6.useSharedValue;
                var19 = var2.bind(var6)(var3);
                _closure2_slot7 = var19;
                var6 = _closure1_slot3;
                var2 = var6.useRef;
                var2 = var2.bind(var6)(var3);
                _closure2_slot8 = var2;
                var2 = var6.useRef;
                var8 = null;
                var21 = var2.bind(var6)(var8);
                _closure2_slot9 = var21;
                var15 = var6.useMemo;
                var7 = new Array(1);
                var7[0] = var14;
                var2 = function() { // Environment: var0
                    _fun74340: for (var _fun74340_ip = 0;;) switch (_fun74340_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = var0.length;
                            var5 = 0;
                            var0 = var5 < var0;
                            if (!var0) {
                                _fun74340_ip = 70;
                                continue _fun74340
                            }
                        case 24:
                            var0 = _closure2_slot2;
                            var2 = var0[var5];
                            var6 = var2.type;
                            var0 = _closure1_slot4;
                            var0 = var0.UNICODE;
                            var1 = var5;
                            if (!(var6 !== var0)) {
                                _fun74340_ip = 96;
                                continue _fun74340
                            }
                        case 54:
                            var5 = var1 + 1;
                            var0 = _closure2_slot2;
                            var0 = var0.length;
                            if (var5 < var0) {
                                _fun74340_ip = 24;
                                continue _fun74340
                            }
                        case 70:
                            var0 = {};
                            var4 = _closure2_slot2;
                            var5 = var4.length;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var0.sections = var4;
                            return var0;
                        case 96:
                            var0 = {};
                            var3 = _closure2_slot2;
                            var4 = var3.length;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var0.sections = var3;
                            var0.firstUnicodeCategory = var2;
                            var0.firstUnicodeCategoryIndex = var1;
                            return var0;
                    }
                };
                var2 = var15.bind(var6)(var2, var7);
                var15 = var2.sections;
                var18 = var2.firstUnicodeCategory;
                var17 = var2.firstUnicodeCategoryIndex;
                var16 = var6.useCallback;
                var7 = function(arg0) { // Environment: var0
                    _fun74341: for (var _fun74341_ip = 0;;) switch (_fun74341_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun74341_ip = 65;
                                continue _fun74341
                            }
                        case 18:
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            if (!(var0 != var2)) {
                                _fun74341_ip = 65;
                                continue _fun74341
                            }
                        case 31:
                            var1 = var2.scrollToLocation;
                            var0 = {
                                'section': 0,
                                'item': null,
                                'animated': false
                            };
                            var3 = arg0;
                            var0.item = var3;
                            var0 = var1.bind(var2)(var0);
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = new Array(0);
                var2 = var16.bind(var6)(var7, var2);
                _closure2_slot10 = var2;
                var7 = var26[var27];
                var24 = var10.bind(var3)(var7);
                var23 = var24.useAnimatedReaction;
                var16 = function() {
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.categoryIndexActive = var11;
                var16.__closure = var7;
                var7 = 2293356797932.0;
                var16.__workletHash = var7;
                var7 = _closure1_slot13;
                var16.__initData = var7;
                var7 = function arg0, arg1() {
                    _fun74343: for (var _fun74343_ip = 0;;) switch (_fun74343_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = arg1;
                            var4 = _closure2_slot7;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun74343_ip = 112;
                                continue _fun74343
                            }
                        case 28:
                            if (!(var2 !== var3)) {
                                _fun74343_ip = 112;
                                continue _fun74343
                            }
                        case 32:
                            if (!(var1 != var4)) {
                                _fun74343_ip = 112;
                                continue _fun74343
                            }
                        case 36:
                            var3 = _closure1_slot7;
                            var5 = var2 * var3;
                            var3 = var4.end;
                            var3 = var5 > var3;
                            if (var3) {
                                _fun74343_ip = 68;
                                continue _fun74343
                            }
                        case 59:
                            var4 = var4.start;
                            var3 = var5 < var4;
                        case 68:
                            if (!var3) {
                                _fun74343_ip = 112;
                                continue _fun74343
                            }
                        case 71:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot10;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var28 = {};
                var28.blockRef = var19;
                var25 = _closure1_slot7;
                var28.EXPRESSION_FOOTER_HEIGHT = var25;
                var30 = var26[var27];
                var30 = var10.bind(var3)(var30);
                var30 = var30.runOnJS;
                var28.runOnJS = var30;
                var28.scrollToCategoryIndex = var2;
                var7.__closure = var28;
                var28 = 7148256102464.0;
                var7.__workletHash = var28;
                var28 = _closure1_slot14;
                var7.__initData = var28;
                var7 = var23.bind(var24)(var16, var7);
                var23 = var6.useCallback;
                var16 = new Array(1);
                var16[0] = var19;
                var7 = function(arg0) { // Environment: var0
                    _fun74344: for (var _fun74344_ip = 0;;) switch (_fun74344_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure2_slot8;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun74344_ip = 92;
                                continue _fun74344
                            }
                        case 21:
                            var2 = _closure2_slot7;
                            var1 = var2.set;
                            var0 = {};
                            var5 = var4.nativeEvent;
                            var5 = var5.contentOffset;
                            var5 = var5.x;
                            var0.start = var5;
                            var4 = var4.nativeEvent;
                            var4 = var4.contentOffset;
                            var4 = var4.x;
                            var3 = _closure2_slot8;
                            var3 = var3.current;
                            var3 = var4 + var3;
                            var0.end = var3;
                            var0 = var1.bind(var2)(var0);
                        case 92:
                            var0 = undefined;
                            return var0;
                    }
                };
                var23 = var23.bind(var6)(var7, var16);
                var7 = var26[var27];
                var24 = var10.bind(var3)(var7);
                var16 = var24.useDerivedValue;
                var7 = function() {
                    _fun74345: for (var _fun74345_ip = 0;;) switch (_fun74345_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            if (var0) {
                                _fun74345_ip = 31;
                                continue _fun74345
                            }
                        case 23:
                            var0 = 0;
                            var0 = var0 === var2;
                            _fun74345_ip = 38;
                            continue _fun74345;
                        case 31:
                            var1 = 1;
                            var0 = var1 === var2;
                        case 38:
                            return var0;
                    }
                };
                var28 = {};
                var28.inPortalKeyboard = var1;
                var28.bottomSheetIndex = var29;
                var7.__closure = var28;
                var28 = 15413192314561.0;
                var7.__workletHash = var28;
                var28 = _closure1_slot15;
                var7.__initData = var28;
                var24 = var16.bind(var24)(var7);
                _closure2_slot11 = var24;
                var7 = var6.useRef;
                var7 = var7.bind(var6)(var3);
                _closure2_slot12 = var7;
                var16 = var6.useCallback;
                var7 = new Array(4);
                var7[0] = var24;
                var7[1] = var22;
                var7[2] = var20;
                var7[3] = var1;
                var1 = function() { // Environment: var0
                    _fun74346: for (var _fun74346_ip = 0;;) switch (_fun74346_ip) {
                        case 0:
                            var4 = arguments[0];
                            var0 = undefined;
                            if (!(var4 === var0)) {
                                _fun74346_ip = 21;
                                continue _fun74346
                            }
                        case 9:
                            var1 = _closure2_slot12;
                            var4 = var1.current;
                        case 21:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var6 = null;
                            var2 = var6 != var2;
                            if (!var2) {
                                _fun74346_ip = 46;
                                continue _fun74346
                            }
                        case 42:
                            var2 = var6 != var4;
                        case 46:
                            if (!var2) {
                                _fun74346_ip = 162;
                                continue _fun74346
                            }
                        case 49:
                            var3 = _closure2_slot11;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun74346_ip = 126;
                                continue _fun74346
                            }
                        case 65:
                            var2 = _closure2_slot5;
                            if (!var2) {
                                _fun74346_ip = 126;
                                continue _fun74346
                            }
                        case 72:
                            var2 = _closure2_slot0;
                            var2 = var6 == var2;
                            var3 = undefined;
                            if (var2) {
                                _fun74346_ip = 101;
                                continue _fun74346
                            }
                        case 85:
                            var5 = _closure2_slot0;
                            var5 = var5.current;
                            var2 = var6 == var5;
                            var3 = var5;
                        case 101:
                            if (var2) {
                                _fun74346_ip = 114;
                                continue _fun74346
                            }
                        case 104:
                            var2 = var3.expandActionSheet;
                            var2 = var2.bind(var3)();
                        case 114:
                            var2 = _closure2_slot12;
                            var2.current = var4;
                            _fun74346_ip = 162;
                            continue _fun74346;
                        case 126:
                            var2 = _closure2_slot12;
                            var2.current = var0;
                            var1 = _closure2_slot4;
                            var3 = var1.current;
                            var2 = var3.scrollToHeaderIndex;
                            var1 = {};
                            var1.index = var4;
                            var1 = var2.bind(var3)(var1);
                        case 162:
                            return var0;
                    }
                };
                var1 = var16.bind(var6)(var1, var7);
                _closure2_slot13 = var1;
                var7 = var26[var27];
                var22 = var10.bind(var3)(var7);
                var20 = var22.useAnimatedReaction;
                var16 = function() {
                    var1 = _closure2_slot11;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.bottomSheetOpen = var24;
                var16.__closure = var7;
                var7 = 13172461706889.0;
                var16.__workletHash = var7;
                var7 = _closure1_slot16;
                var16.__initData = var7;
                var7 = function arg0() {
                    _fun74348: for (var _fun74348_ip = 0;;) switch (_fun74348_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun74348_ip = 52;
                                continue _fun74348
                            }
                        case 6:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot13;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var24 = {};
                var27 = var26[var27];
                var27 = var10.bind(var3)(var27);
                var27 = var27.runOnJS;
                var24.runOnJS = var27;
                var24.handleScrollToCategoryIndex = var1;
                var7.__closure = var24;
                var24 = 13670816929775.0;
                var7.__workletHash = var24;
                var24 = _closure1_slot17;
                var7.__initData = var24;
                var7 = var20.bind(var22)(var16, var7);
                var16 = var6.useCallback;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun74349: for (var _fun74349_ip = 0;;) switch (_fun74349_ip) {
                        case 0:
                            var0 = arg1;
                            var3 = var0.type;
                            var2 = _closure1_slot4;
                            var2 = var2.GUILD;
                            if (!(var3 === var2)) {
                                _fun74349_ip = 126;
                                continue _fun74349
                            }
                        case 25:
                            var5 = var0.guild;
                            var0 = null;
                            if (!(var0 != var5)) {
                                _fun74349_ip = 126;
                                continue _fun74349
                            }
                        case 36:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 8;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var0 = _closure1_slot5;
                            var2 = var0.EXPRESSION_PICKER_CATEGORY_SELECTED;
                            var0 = {};
                            var6 = {};
                            var7 = _closure1_slot6;
                            var7 = var7.EXPRESSION_PICKER;
                            var6.page = var7;
                            var0.location = var6;
                            var6 = _closure1_slot8;
                            var6 = var6.EMOJI;
                            var0.tab = var6;
                            var5 = var5.id;
                            var0.guild_id = var5;
                            var0 = var3.bind(var4)(var2, var0);
                        case 126:
                            var3 = _closure2_slot13;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 9;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.triggerHapticFeedback;
                            var4 = _closure1_slot1;
                            var1 = 10;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var16.bind(var6)(var1, var7);
                _closure2_slot14 = var1;
                var16 = var6.useCallback;
                var7 = new Array(2);
                var7[0] = var1;
                var7[1] = var2;
                var2 = function(arg0, arg1) { // Environment: var0
                    var2 = arg0;
                    var4 = _closure2_slot14;
                    var0 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var0)(var2, var3);
                    var1 = _closure2_slot10;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var16 = var16.bind(var6)(var2, var7);
                var20 = var6.useCallback;
                var7 = new Array(1);
                var7[0] = var19;
                var2 = function(arg0) { // Environment: var0
                    _fun74351: for (var _fun74351_ip = 0;;) switch (_fun74351_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var0 = var0.width;
                            var1.current = var0;
                            var1 = _closure2_slot7;
                            var0 = var1.get;
                            var8 = var0.bind(var1)();
                            var3 = _closure2_slot7;
                            var2 = var3.set;
                            var1 = {};
                            var7 = null;
                            var5 = var7 == var8;
                            var0 = undefined;
                            var9 = undefined;
                            if (var5) {
                                _fun74351_ip = 75;
                                continue _fun74351
                            }
                        case 70:
                            var9 = var8.start;
                        case 75:
                            var10 = var7 != var9;
                            var6 = 0;
                            if (!var10) {
                                _fun74351_ip = 87;
                                continue _fun74351
                            }
                        case 84:
                            var6 = var9;
                        case 87:
                            var1.start = var6;
                            var9 = var7 == var8;
                            var6 = undefined;
                            if (var9) {
                                _fun74351_ip = 105;
                                continue _fun74351
                            }
                        case 100:
                            var6 = var8.start;
                        case 105:
                            var7 = var7 != var6;
                            var5 = 0;
                            if (!var7) {
                                _fun74351_ip = 117;
                                continue _fun74351
                            }
                        case 114:
                            var5 = var6;
                        case 117:
                            var4 = _closure2_slot8;
                            var4 = var4.current;
                            var4 = var5 + var4;
                            var1.end = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var24 = var20.bind(var6)(var2, var7);
                var7 = var6.useCallback;
                var2 = new Array(4);
                var2[0] = var14;
                var2[1] = var11;
                var2[2] = var1;
                var2[3] = var13;
                var1 = function(arg0, arg1) { // Environment: var0
                    var6 = arg1;
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot2;
                    var7 = var5[var6];
                    var0.category = var7;
                    var7 = _closure2_slot3;
                    var0.categoryIndexActive = var7;
                    var0.index = var6;
                    var7 = _closure2_slot14;
                    var0.handlePressCategory = var7;
                    var7 = _closure2_slot6;
                    var7 = var7.listPlaceholder;
                    var0.loadingStyle = var7;
                    var5 = var5[var6];
                    var5 = var5.isNitroLocked;
                    var0.locked = var5;
                    var4 = _closure2_slot6;
                    var4 = var4.item;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var20 = var7.bind(var6)(var1, var2);
                var14 = _closure1_slot1;
                var1 = 12;
                var1 = var26[var1];
                var1 = var14.bind(var3)(var1);
                var22 = var1.bind(var3)();
                var2 = var6.useMemo;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Native;
                    var2 = var0.bind(var1)();
                    var1 = var2.disallowInterruption;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = new Array(0);
                var11 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot9;
                var0 = 14;
                var0 = var26[var0];
                var1 = var14.bind(var3)(var0);
                var0 = {};
                var0.portalHostName = var5;
                var0.style = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot10;
                var4 = {};
                var7 = 13;
                var7 = var26[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.GestureDetector;
                var7 = {};
                var7.gesture = var11;
                var11 = 15;
                var11 = var26[var11];
                var14 = var14.bind(var3)(var11);
                var11 = {
                    'estimatedListSize': 'windowSize',
                    'horizontal': true,
                    'itemSize': null,
                    'keyboardShouldPersistTaps': 'always'
                };
                var11.itemSize = var25;
                var25 = _closure1_slot8;
                var25 = var25.EMOJI;
                var11.listId = var25;
                var11.onLayout = var24;
                var11.onScroll = var23;
                var11.placeholderConfig = var22;
                var11.ref = var21;
                var11.renderItem = var20;
                var20 = 'callbacks';
                var11.scrollReporting = var20;
                var11.sections = var15;
                var15 = false;
                var11.showsHorizontalScrollIndicator = var15;
                var15 = var13.list;
                var11.style = var15;
                var11 = var2.bind(var3)(var14, var11);
                var7.children = var11;
                var10 = var2.bind(var3)(var10, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var11 = var8 != var18;
                var10 = null;
                if (!var11) {
                    _fun74339_ip = 1152;
                    continue _fun74339
                }
            case 1092:
                var15 = _closure1_slot9;
                var14 = _closure1_slot1;
                var20 = _closure1_slot2;
                var11 = 16;
                var11 = var20[var11];
                var14 = var14.bind(var3)(var11);
                var11 = {};
                var11.blockRef = var19;
                var11.category = var18;
                var11.categoryIndex = var17;
                var11.onPress = var16;
                var16 = var13.item;
                var11.style = var16;
                var10 = var15.bind(var3)(var14, var11);
            case 1152:
                var7[1] = var10;
                var10 = var8 != var12;
                var8 = null;
                if (!var10) {
                    _fun74339_ip = 1222;
                    continue _fun74339
                }
            case 1165:
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 17;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var14 = var13.item;
                var9.style = var14;
                var13 = var13.keyboardItem;
                var9.iconStyle = var13;
                var9.onBackspace = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1222:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4744, 660, 1565, 33, 1297, 671, 3722, 795, 3281, 3282, 9371, 9377, 4964, 9378, 7589, 9380, 9381, 2]);