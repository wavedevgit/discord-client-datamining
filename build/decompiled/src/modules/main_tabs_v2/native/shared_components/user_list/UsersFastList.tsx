// modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.start;
        var5 = var0.end;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 7;
        var0 = var8[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var0 = var2.useFastestListTableRowPlaceholderStyles;
        var7 = var0.bind(var2)();
        var9 = _closure1_slot4;
        var2 = var9.useState;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 80;
            var2 = var1 * var2;
            var1 = 10;
            var1 = var1 + var2;
            var2 = var1 | 0;
            var1 = '%';
            var1 = var2 + var1;
            var0.width = var1;
            return var0;
        };
        var9 = var2.bind(var9)(var0);
        var2 = _closure1_slot3;
        var0 = 1;
        var2 = var2.bind(var3)(var9, var0);
        var0 = 0;
        var10 = var2[var0];
        var2 = _closure1_slot7;
        var0 = 8;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.start = var6;
        var0.end = var5;
        var8 = _closure1_slot7;
        var6 = _closure1_slot5;
        var5 = {};
        var11 = var7.placeholderUsername;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var5.style = var9;
        var5 = var8.bind(var3)(var6, var5);
        var0.label = var5;
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var7.placeholderAvatar;
        var4.style = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.icon = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    var _closure1_slot6 = var11;
    var14 = var3.USERS_LIST_SECTION_BOTTOM_PADDING;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var7 = var3.jsxs;
    var _closure1_slot8 = var7;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var10 = -1;
    var10 = var10 * var14;
    var9.top = var10;
    var3.sectionHeader = var9;
    var9 = {};
    var10 = 6;
    var14 = var5[var10];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var14;
    var3.stickyHeader = var9;
    var9 = {
        'flex': 1,
        'backgroundColor': null,
        'paddingHorizontal': 16
    };
    var14 = var5[var10];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var14;
    var3.list = var9;
    var9 = {};
    var9.paddingBottom = var11;
    var3.emptySection = var9;
    var9 = {
        'flex': 1,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'justifyContent': 'space-between',
        'paddingTop': null,
        'textTransform': 'none'
    };
    var9.paddingTop = var11;
    var3.section = var9;
    var9 = {};
    var11 = '100%';
    var9.height = var11;
    var3.badgeWrapper = var9;
    var9 = {
        'position': 'absolute',
        'left': null,
        'top': 5
    };
    var11 = var5[var10];
    var11 = var13.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10 = var5[var10];
    var10 = var13.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var10 = var10 / var12;
    var10 = var11 + var10;
    var9.left = var10;
    var3.badge = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function UsersFastListTsx1(){const{disableThemedGradient,scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;if(disableThemedGradient){return false;}const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}";
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        _fun72500: for (var _fun72500_ip = 0;;) switch (_fun72500_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.title;
                var5 = var0.colorOverride;
                var _closure2_slot0 = var5;
                var19 = var0.actionTitle;
                var18 = var0.action;
                var25 = var0.badge;
                var20 = var0.scrollPosValue;
                var _closure2_slot1 = var20;
                var17 = var0.stickyAt;
                var _closure2_slot2 = var17;
                var2 = var0.disableStickySections;
                var9 = var0.disableThemedGradient;
                var _closure2_slot3 = var9;
                var4 = _closure1_slot10;
                var3 = undefined;
                var4 = var4.bind(var3)();
                var _closure2_slot4 = var4;
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var1
                    _fun72501: for (var _fun72501_ip = 0;;) switch (_fun72501_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun72501_ip = 29;
                                continue _fun72501
                            }
                        case 16:
                            var1 = {};
                            var2 = _closure2_slot0;
                            var1.color = var2;
                            var0 = var1;
                        case 29:
                            return var0;
                    }
                };
                var14 = var7.bind(var8)(var5, var6);
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 9;
                var7 = var5[var7];
                var8 = var6.bind(var3)(var7);
                var7 = var8.useClientThemesOverride;
                var10 = var7.bind(var8)();
                var _closure2_slot5 = var10;
                var12 = _closure1_slot4;
                var11 = var12.useMemo;
                var7 = var4.section;
                var8 = new Array(2);
                var8[0] = var7;
                var8[1] = var10;
                var7 = function() { // Environment: var1
                    var0 = _closure2_slot4;
                    var2 = var0.section;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = _closure2_slot5;
                    var0[1] = var1;
                    return var0;
                };
                var8 = var11.bind(var12)(var7, var8);
                var7 = 10;
                var11 = var5[var7];
                var13 = var6.bind(var3)(var11);
                var12 = var13.useDerivedValue;
                var11 = function() {
                    _fun72503: for (var _fun72503_ip = 0;;) switch (_fun72503_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun72503_ip = 66;
                                continue _fun72503
                            }
                        case 10:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var0 = var4 == var0;
                            var2 = undefined;
                            if (var0) {
                                _fun72503_ip = 38;
                                continue _fun72503
                            }
                        case 25:
                            var3 = _closure2_slot1;
                            var0 = var3.get;
                            var2 = var0.bind(var3)();
                        case 38:
                            var0 = var4 != var2;
                            if (!var0) {
                                _fun72503_ip = 53;
                                continue _fun72503
                            }
                        case 45:
                            var3 = _closure2_slot2;
                            var0 = var4 != var3;
                        case 53:
                            if (!var0) {
                                _fun72503_ip = 64;
                                continue _fun72503
                            }
                        case 56:
                            var1 = _closure2_slot2;
                            var0 = var2 >= var1;
                        case 64:
                            return var0;
                        case 66:
                            var0 = false;
                            return var0;
                    }
                };
                var16 = {};
                var16.disableThemedGradient = var9;
                var16.scrollPosValue = var20;
                var16.stickyAt = var17;
                var11.__closure = var16;
                var16 = 5274040210799.0;
                var11.__workletHash = var16;
                var16 = _closure1_slot11;
                var11.__initData = var16;
                var12 = var12.bind(var13)(var11);
                var _closure2_slot6 = var12;
                var11 = var5[var7];
                var16 = var6.bind(var3)(var11);
                var13 = var16.useAnimatedStyle;
                var11 = function() {
                    _fun72504: for (var _fun72504_ip = 0;;) switch (_fun72504_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot6;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = 'transparent';
                            if (!var3) {
                                _fun72504_ip = 40;
                                continue _fun72504
                            }
                        case 25:
                            var2 = _closure2_slot4;
                            var2 = var2.stickyHeader;
                            var1 = var2.backgroundColor;
                        case 40:
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var17 = {};
                var17.isSticky = var12;
                var17.styles = var4;
                var11.__closure = var17;
                var17 = 6340072007400.0;
                var11.__workletHash = var17;
                var17 = _closure1_slot12;
                var11.__initData = var17;
                var17 = var13.bind(var16)(var11);
                var _closure2_slot7 = var17;
                var16 = _closure1_slot4;
                var13 = var16.useMemo;
                var20 = var4.sectionHeader;
                var11 = new Array(3);
                var11[0] = var20;
                var11[1] = var17;
                var11[2] = var10;
                var10 = function() { // Environment: var1
                    var0 = _closure2_slot4;
                    var2 = var0.sectionHeader;
                    var0 = new Array(3);
                    var0[0] = var2;
                    var2 = _closure2_slot7;
                    var0[1] = var2;
                    var1 = _closure2_slot5;
                    var0[2] = var1;
                    return var0;
                };
                var10 = var13.bind(var16)(var10, var11);
                var5 = var5[var7];
                var6 = var6.bind(var3)(var5);
                var5 = var6.useAnimatedStyle;
                var1 = function() {
                    _fun72506: for (var _fun72506_ip = 0;;) switch (_fun72506_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot6;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 0;
                            if (!var2) {
                                _fun72506_ip = 26;
                                continue _fun72506
                            }
                        case 23:
                            var1 = 1;
                        case 26:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.isSticky = var12;
                var1.__closure = var11;
                var11 = 13270974904859.0;
                var1.__workletHash = var11;
                var11 = _closure1_slot13;
                var1.__initData = var11;
                var12 = var5.bind(var6)(var1);
                var11 = null;
                if (!(var11 == var15)) {
                    _fun72500_ip = 478;
                    continue _fun72500
                }
            case 471:
                if (!(var11 != var19)) {
                    _fun72500_ip = 910;
                    continue _fun72500
                }
            case 478:
                var6 = _closure1_slot8;
                var5 = _closure1_slot5;
                var1 = {};
                var1.style = var8;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = 11;
                var8 = var8[var20];
                var8 = var13.bind(var3)(var8);
                var13 = var8.Text;
                var8 = {
                    'maxFontSizeMultiplier': 2,
                    'accessibilityRole': 'header',
                    'variant': 'text-sm/semibold',
                    'color': 'interactive-text-default'
                };
                var8.style = var14;
                var14 = new Array(2);
                var14[0] = var15;
                var16 = var11 != var25;
                var15 = null;
                if (!var16) {
                    _fun72500_ip = 628;
                    continue _fun72500
                }
            case 552:
                var21 = _closure1_slot7;
                var17 = _closure1_slot5;
                var16 = {};
                var22 = var4.badgeWrapper;
                var16.style = var22;
                var24 = _closure1_slot7;
                var23 = _closure1_slot1;
                var26 = _closure1_slot2;
                var22 = 12;
                var22 = var26[var22];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var26 = var4.badge;
                var22.style = var26;
                var22.value = var25;
                var22 = var24.bind(var3)(var23, var22);
                var16.children = var22;
                var15 = var21.bind(var3)(var17, var16);
            case 628:
                var14[1] = var15;
                var8.children = var14;
                var13 = var6.bind(var3)(var13, var8);
                var8 = new Array(2);
                var8[0] = var13;
                var13 = var11 != var19;
                var11 = null;
                if (!var13) {
                    _fun72500_ip = 747;
                    continue _fun72500
                }
            case 659:
                var15 = _closure1_slot7;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 13;
                var13 = var16[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.PressableOpacity;
                var13 = {};
                var13.onPress = var18;
                var18 = _closure1_slot7;
                var16 = var16[var20];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-brand'
                };
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var11 = var15.bind(var3)(var14, var13);
            case 747:
                var8[1] = var11;
                var1.children = var8;
                var8 = var6.bind(var3)(var5, var1);
                var1 = var8;
                if (var2) {
                    _fun72500_ip = 908;
                    continue _fun72500
                }
            case 770:
                var6 = _closure1_slot8;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var5.bind(var3)(var2);
                var5 = var2.View;
                var2 = {};
                var2.style = var10;
                var9 = !var9;
                if (!var9) {
                    _fun72500_ip = 886;
                    continue _fun72500
                }
            case 808:
                var11 = _closure1_slot7;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = var15[var7];
                var7 = var13.bind(var3)(var7);
                var10 = var7.View;
                var7 = {};
                var7.style = var12;
                var14 = _closure1_slot7;
                var12 = 14;
                var12 = var15[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {
                    'absolute': true,
                    'tall': true,
                    'wide': true,
                    'mix': true
                };
                var12 = var14.bind(var3)(var13, var12);
                var7.children = var12;
                var9 = var11.bind(var3)(var10, var7);
            case 886:
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var2.children = var7;
                var1 = var6.bind(var3)(var5, var2);
            case 908:
                return var1;
            case 910:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.emptySection;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun72507: for (var _fun72507_ip = 0;;) switch (_fun72507_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.sections;
                var13 = var0.getItemProps;
                var _closure2_slot0 = var13;
                var25 = var0.getSectionProps;
                var _closure2_slot1 = var25;
                var10 = var0.insetStart;
                var9 = var0.insetEnd;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun72507_ip = 51;
                    continue _fun72507
                }
            case 49:
                var9 = 0;
            case 51:
                var15 = var0.disableBottomSafeZone;
                if (!(var15 === var3)) {
                    _fun72507_ip = 63;
                    continue _fun72507
                }
            case 61:
                var15 = false;
            case 63:
                var17 = var0.disableStickySections;
                if (!(var17 === var3)) {
                    _fun72507_ip = 75;
                    continue _fun72507
                }
            case 73:
                var17 = false;
            case 75:
                var _closure2_slot2 = var17;
                var11 = var0.disableThemedGradient;
                var _closure2_slot3 = var11;
                var23 = var0.disableBackgroundOverlay;
                var _closure2_slot4 = var23;
                var8 = var0.inActionSheet;
                var4 = var0.listHeaderSize;
                var7 = var0.onScroll;
                var6 = var0.onLayout;
                var12 = var0.renderListHeader;
                var21 = var0.listStyleOverride;
                var _closure2_slot5 = var21;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var1 = _closure1_slot10;
                var5 = var1.bind(var3)();
                _closure2_slot6 = var5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 15;
                var1 = var16[var1];
                var1 = var14.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var14 = var1.bottom;
                var1 = 0;
                if (var15) {
                    _fun72507_ip = 203;
                    continue _fun72507
                }
            case 200:
                var1 = var14;
            case 203:
                var9 = var9 + var1;
                var1 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 16;
                var14 = var19[var14];
                var14 = var1.bind(var3)(var14);
                var14 = var14.bind(var3)();
                var15 = 17;
                var15 = var19[var15];
                var15 = var1.bind(var3)(var15);
                var15 = var15.bind(var3)();
                _closure2_slot7 = var15;
                var20 = _closure1_slot0;
                var16 = 9;
                var16 = var19[var16];
                var20 = var20.bind(var3)(var16);
                var16 = var20.useClientThemesOverride;
                var22 = var16.bind(var20)();
                _closure2_slot8 = var22;
                var24 = _closure1_slot4;
                var20 = var24.useCallback;
                var16 = new Array(3);
                var16[0] = var25;
                var16[1] = var17;
                var16[2] = var11;
                var11 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                    _fun72508: for (var _fun72508_ip = 0;;) switch (_fun72508_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = undefined;
                            var0 = arg0;
                            var5 = var1.bind(var3)(var0);
                            var0 = null;
                            var1 = var0 == var5;
                            var2 = undefined;
                            if (var1) {
                                _fun72508_ip = 33;
                                continue _fun72508
                            }
                        case 28:
                            var2 = var5.type;
                        case 33:
                            var1 = 'placeholder';
                            if (!(var1 !== var2)) {
                                _fun72508_ip = 134;
                                continue _fun72508
                            }
                        case 41:
                            var1 = 'section';
                            if (!(var1 !== var2)) {
                                _fun72508_ip = 51;
                                continue _fun72508
                            }
                        case 49:
                            return var0;
                        case 51:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot14;
                            var0 = {};
                            var7 = var5.props;
                            var8 = var0;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure2_slot2;
                            var5 = 'disableStickySections';
                            var0[var5] = var6;
                            var5 = _closure2_slot3;
                            var4 = 'disableThemedGradient';
                            var0[var4] = var5;
                            var5 = arg2;
                            var4 = 'scrollPosValue';
                            var0[var4] = var5;
                            var5 = arg3;
                            var4 = 'stickyAt';
                            var0[var4] = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 134:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot16;
                            var0 = {};
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var11 = var20.bind(var24)(var11, var16);
                var24 = _closure1_slot4;
                var20 = var24.useCallback;
                var16 = new Array(1);
                var16[0] = var13;
                var13 = function(arg0, arg1) { // Environment: var2
                    _fun72509: for (var _fun72509_ip = 0;;) switch (_fun72509_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = undefined;
                            var1 = arg0;
                            var0 = arg1;
                            var4 = var2.bind(var3)(var1, var0);
                            var0 = null;
                            var1 = var0 == var4;
                            var2 = undefined;
                            if (var1) {
                                _fun72509_ip = 37;
                                continue _fun72509
                            }
                        case 32:
                            var2 = var4.type;
                        case 37:
                            var1 = 'user';
                            if (!(var1 !== var2)) {
                                _fun72509_ip = 253;
                                continue _fun72509
                            }
                        case 48:
                            var1 = 'placeholder';
                            if (!(var1 !== var2)) {
                                _fun72509_ip = 220;
                                continue _fun72509
                            }
                        case 59:
                            var1 = 'gdm';
                            if (!(var1 !== var2)) {
                                _fun72509_ip = 171;
                                continue _fun72509
                            }
                        case 69:
                            var1 = 'channel';
                            if (!(var1 !== var2)) {
                                _fun72509_ip = 122;
                                continue _fun72509
                            }
                        case 77:
                            var1 = 'custom';
                            if (!(var1 !== var2)) {
                                _fun72509_ip = 87;
                                continue _fun72509
                            }
                        case 85:
                            return var0;
                        case 87:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot9;
                            var0 = {};
                            var5 = var4.component;
                            var5 = var5.bind(var4)();
                            var0.children = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 122:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 20;
                            var0 = var5[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var6 = var4.props;
                            var7 = var0;
                            var5 = copyDataProperties(var7, var6);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 171:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 19;
                            var0 = var5[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var6 = var4.props;
                            var7 = var0;
                            var5 = copyDataProperties(var7, var6);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 220:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot15;
                            var0 = {};
                            var6 = var4.props;
                            var7 = var0;
                            var5 = copyDataProperties(var7, var6);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 253:
                            var2 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 18;
                            var0 = var5[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var6 = var4.props;
                            var7 = var0;
                            var4 = copyDataProperties(var7, var6);
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var13 = var20.bind(var24)(var13, var16);
                var24 = _closure1_slot4;
                var20 = var24.useCallback;
                var16 = new Array(2);
                var16[0] = var25;
                var16[1] = var15;
                var15 = function(arg0) { // Environment: var2
                    _fun72510: for (var _fun72510_ip = 0;;) switch (_fun72510_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var4 = undefined;
                            var1 = arg0;
                            var2 = var2.bind(var4)(var1);
                            var3 = null;
                            var1 = var3 == var2;
                            if (var1) {
                                _fun72510_ip = 31;
                                continue _fun72510
                            }
                        case 26:
                            var4 = var2.type;
                        case 31:
                            var1 = 'placeholder';
                            if (!(var1 !== var4)) {
                                _fun72510_ip = 99;
                                continue _fun72510
                            }
                        case 39:
                            var1 = 'section';
                            if (!(var1 !== var4)) {
                                _fun72510_ip = 51;
                                continue _fun72510
                            }
                        case 47:
                            var1 = 0;
                            return var1;
                        case 51:
                            var1 = var2.props;
                            var4 = var1.hideTitle;
                            var1 = 0;
                            if (var4) {
                                _fun72510_ip = 97;
                                continue _fun72510
                            }
                        case 67:
                            var2 = var2.props;
                            var2 = var2.title;
                            if (!(var3 != var2)) {
                                _fun72510_ip = 87;
                                continue _fun72510
                            }
                        case 81:
                            var2 = _closure2_slot7;
                            _fun72510_ip = 94;
                            continue _fun72510;
                        case 87:
                            var2 = _closure1_slot6;
                        case 94:
                            var1 = var2;
                        case 97:
                            return var1;
                        case 99:
                            var0 = _closure2_slot7;
                            return var0;
                    }
                };
                var16 = var20.bind(var24)(var15, var16);
                var20 = _closure1_slot4;
                var15 = var20.useMemo;
                var24 = var5.list;
                var5 = new Array(4);
                var5[0] = var24;
                var5[1] = var23;
                var5[2] = var22;
                var5[3] = var21;
                var2 = function() { // Environment: var2
                    _fun72511: for (var _fun72511_ip = 0;;) switch (_fun72511_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var2 = var0.list;
                            var0 = new Array(3);
                            var0[0] = var2;
                            var2 = _closure2_slot4;
                            if (!var2) {
                                _fun72511_ip = 32;
                                continue _fun72511
                            }
                        case 28:
                            var2 = _closure2_slot8;
                        case 32:
                            var0[1] = var2;
                            var1 = _closure2_slot5;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var15 = var15.bind(var20)(var2, var5);
                var2 = 7;
                var2 = var19[var2];
                var2 = var1.bind(var3)(var2);
                var5 = var2.bind(var3)();
                var2 = _closure1_slot7;
                var0 = 21;
                var0 = var19[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.sections = var18;
                var17 = !var17;
                var0.sectionHeaderIsSticky = var17;
                var0.sectionHeaderSize = var16;
                var16 = 'windowSize';
                var0.estimatedListSize = var16;
                var16 = arg1;
                var0.ref = var16;
                var0.style = var15;
                var0.itemSize = var14;
                var0.renderItem = var13;
                var0.renderListHeader = var12;
                var0.renderSectionHeader = var11;
                var0.insetStart = var10;
                var0.insetEnd = var9;
                var9 = 'on-drag';
                var0.keyboardDismissMode = var9;
                var9 = 'always';
                var0.keyboardShouldPersistTaps = var9;
                var0.inActionSheet = var8;
                var0.onScroll = var7;
                var0.onLayout = var6;
                var0.placeholderConfig = var5;
                var5 = 'users-fast-list';
                var0.listId = var5;
                var0.listHeaderSize = var4;
                var4 = true;
                var0.listHeaderAlwaysMounted = var4;
                var5 = 'callbacks';
                var0.scrollReporting = var5;
                var0.wrapChildren = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.UsersFastList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9044, 33, 1297, 671, 9045, 4861, 8857, 3679, 4839, 8589, 4865, 8671, 1568, 7521, 9046, 9047, 9054, 9056, 7524, 2]);