// modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiCategoryTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CATEGORY_ICON_RIPPLE_CONFIG;
    var _closure1_slot6 = var7;
    var12 = var3.CATEGORY_ICON_SIZE;
    var10 = var3.NODE_SIZE;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9.height = var10;
    var9.width = var10;
    var10 = var10 / var13;
    var9.borderRadius = var10;
    var3.itemInner = var9;
    var9 = {};
    var10 = 6;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.ICON_TRANSPARENT;
    var9.backgroundColor = var14;
    var3.fadedItem = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var14;
    var3.activeItem = var9;
    var9 = {};
    var9.height = var12;
    var9.width = var12;
    var12 = var12 / var13;
    var9.borderRadius = var12;
    var3.guildItem = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var12;
    var3.guildItemPlaceholder = var9;
    var9 = {
        'width': 12,
        'height': 12,
        'position': 'absolute',
        'bottom': 0,
        'end': 0,
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var3.lockContainer = var9;
    var9 = {
        'width': 7.5,
        'height': 7.5
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var9.tintColor = var10;
    var3.lock = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function EmojiPickerCategoriesItemTsx1(){const{withTiming,categoryIndexActive,index,timingStandard,styleColorActive,styleColorTransparent}=this.__closure;return{opacity:withTiming(categoryIndexActive.get()===index?1:0.5,timingStandard),backgroundColor:categoryIndexActive.get()===index?styleColorActive:styleColorTransparent};}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74355: for (var _fun74355_ip = 0;;) switch (_fun74355_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.category;
                var _closure2_slot0 = var17;
                var19 = var1.categoryIndexActive;
                var _closure2_slot1 = var19;
                var13 = var1.handlePressCategory;
                var _closure2_slot2 = var13;
                var11 = var1.index;
                var _closure2_slot3 = var11;
                var15 = var1.loadingStyle;
                var8 = var1.locked;
                var5 = var1.style;
                var1 = _closure1_slot9;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var1 = var14.activeItem;
                var18 = var1.backgroundColor;
                var _closure2_slot4 = var18;
                var1 = var14.fadedItem;
                var16 = var1.backgroundColor;
                var _closure2_slot5 = var16;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 7;
                var2 = var6[var7];
                var9 = var1.bind(var3)(var2);
                var4 = var9.useAnimatedStyle;
                var2 = function() {
                    _fun74356: for (var _fun74356_ip = 0;;) switch (_fun74356_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var7 = undefined;
                            var5 = var3.bind(var7)(var2);
                            var4 = var5.withTiming;
                            var6 = _closure2_slot1;
                            var3 = var6.get;
                            var8 = var3.bind(var6)();
                            var6 = _closure2_slot3;
                            var3 = 0.5;
                            if (!(var8 === var6)) {
                                _fun74356_ip = 69;
                                continue _fun74356
                            }
                        case 66:
                            var3 = 1;
                        case 69:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 9;
                            var1 = var8[var1];
                            var1 = var6.bind(var7)(var1);
                            var1 = var1.timingStandard;
                            var1 = var4.bind(var5)(var3, var1);
                            var0.opacity = var1;
                            var3 = _closure2_slot1;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = _closure2_slot3;
                            if (!(var3 !== var1)) {
                                _fun74356_ip = 132;
                                continue _fun74356
                            }
                        case 126:
                            var1 = _closure2_slot5;
                            _fun74356_ip = 136;
                            continue _fun74356;
                        case 132:
                            var1 = _closure2_slot4;
                        case 136:
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var10 = {};
                var20 = 8;
                var20 = var6[var20];
                var20 = var1.bind(var3)(var20);
                var20 = var20.withTiming;
                var10.withTiming = var20;
                var10.categoryIndexActive = var19;
                var10.index = var11;
                var19 = 9;
                var19 = var6[var19];
                var19 = var1.bind(var3)(var19);
                var19 = var19.timingStandard;
                var10.timingStandard = var19;
                var10.styleColorActive = var18;
                var10.styleColorTransparent = var16;
                var2.__closure = var10;
                var10 = 3335518235623.0;
                var2.__workletHash = var10;
                var10 = _closure1_slot10;
                var2.__initData = var10;
                var9 = var4.bind(var9)(var2);
                var10 = _closure1_slot3;
                var4 = var10.useCallback;
                var2 = new Array(3);
                var2[0] = var13;
                var2[1] = var11;
                var2[2] = var17;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var4.bind(var10)(var0, var2);
                var2 = _closure1_slot7;
                var0 = 10;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = _closure1_slot6;
                var0.androidRippleConfig = var6;
                var0.style = var5;
                var0.onPress = var4;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var5 = var17.type;
                var4 = _closure1_slot5;
                var4 = var4.GUILD;
                if (!(var5 !== var4)) {
                    _fun74355_ip = 356;
                    continue _fun74355
                }
            case 349:
                var4 = var17.name;
                _fun74355_ip = 366;
                continue _fun74355;
            case 356:
                var5 = var17.guild;
                var4 = var5.name;
            case 366:
                var0.accessibilityLabel = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var10 = var14.itemInner;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var9;
                var4.style = var7;
                var9 = var17.type;
                var7 = _closure1_slot5;
                var7 = var7.GUILD;
                if (!(var9 !== var7)) {
                    _fun74355_ip = 482;
                    continue _fun74355
                }
            case 439:
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 12;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var11 = var17.id;
                var7.id = var11;
                var9 = var10.bind(var3)(var9, var7);
                _fun74355_ip = 567;
                continue _fun74355;
            case 482:
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 11;
                var7 = var16[var13];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var17 = var17.guild;
                var7.guild = var17;
                var7.loadingStyle = var15;
                var15 = _closure1_slot0;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.GuildIconSizes;
                var13 = var13.XSMALL;
                var7.size = var13;
                var13 = var14.guildItem;
                var7.style = var13;
                var9 = var11.bind(var3)(var10, var7);
            case 567:
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun74355_ip = 652;
                    continue _fun74355
                }
            case 578:
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = var14.lockContainer;
                var9.style = var13;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 13;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.LockIcon;
                var12 = {};
                var14 = var14.lock;
                var12.style = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 652:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/categories/EmojiPickerCategoriesItem.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4744, 660, 33, 1297, 671, 3722, 4098, 4884, 4905, 7420, 9372, 4861, 2]);