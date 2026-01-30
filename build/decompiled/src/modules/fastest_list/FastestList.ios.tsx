// modules/fastest_list/FastestList.ios.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getBatchesToRender, environment: var1
        _fun60995: for (var _fun60995_ip = 0;;) switch (_fun60995_ip) {
            case 0:
                var1 = arg0;
                var0 = 'nominal';
                if (!(var0 !== var1)) {
                    _fun60995_ip = 43;
                    continue _fun60995
                }
            case 13:
                var0 = 'half';
                if (!(var0 !== var1)) {
                    _fun60995_ip = 38;
                    continue _fun60995
                }
            case 21:
                var0 = 'full';
                if (!(var0 !== var1)) {
                    _fun60995_ip = 33;
                    continue _fun60995
                }
            case 29:
                var0 = undefined;
                return var0;
            case 33:
                var0 = 16;
                return var0;
            case 38:
                var0 = 14;
                return var0;
            case 43:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun60996: for (var _fun60996_ip = 0;;) switch (_fun60996_ip) {
            case 0:
                var13 = arg0;
                var39 = var13.accessibilityLabel;
                var1 = var13.enabled;
                var32 = var13.estimatedListSize;
                var30 = var13.horizontal;
                var3 = undefined;
                if (!(var30 === var3)) {
                    _fun60996_ip = 35;
                    continue _fun60996
                }
            case 33:
                var30 = false;
            case 35:
                var _closure2_slot0 = var30;
                var29 = var13.inActionSheet;
                var28 = var13.insetStart;
                var27 = var13.insetEnd;
                var26 = var13.itemSize;
                var25 = var13.keyboardDismissMode;
                var23 = var13.keyboardShouldPersistTaps;
                var1 = var13.keyExtractor;
                var _closure2_slot1 = var1;
                var33 = var13.listFooterSize;
                var6 = var13.listFooterAlwaysMounted;
                if (!(var6 === var3)) {
                    _fun60996_ip = 103;
                    continue _fun60996
                }
            case 101:
                var6 = false;
            case 103:
                var31 = var13.listHeaderSize;
                var5 = var13.listHeaderAlwaysMounted;
                if (!(var5 === var3)) {
                    _fun60996_ip = 121;
                    continue _fun60996
                }
            case 119:
                var5 = false;
            case 121:
                var15 = var13.onLayout;
                var37 = var13.renderAhead;
                if (!(var37 === var3)) {
                    _fun60996_ip = 143;
                    continue _fun60996
                }
            case 137:
                var37 = 'nominal';
            case 143:
                var20 = var13.renderItem;
                var19 = var13.renderListFooter;
                var18 = var13.renderListHeader;
                var17 = var13.renderSectionHeader;
                var16 = var13.renderSectionFooter;
                var14 = var13.scrollEventThrottle;
                var41 = var13.scrollIndicatorInsetEnd;
                var _closure2_slot2 = var41;
                var40 = var13.scrollIndicatorInsetStart;
                var _closure2_slot3 = var40;
                var10 = var13.sectionHeaderSize;
                var35 = var13.sectionHeaderIsSticky;
                if (!(var35 === var3)) {
                    _fun60996_ip = 217;
                    continue _fun60996
                }
            case 215:
                var35 = true;
            case 217:
                var9 = var13.sectionFooterSize;
                var11 = var13.sections;
                var8 = var13.showsHorizontalScrollIndicator;
                var7 = var13.showsVerticalScrollIndicator;
                var4 = var13.style;
                var12 = {
                    'accessibilityLabel': 0,
                    'enabled': 0,
                    'estimatedListSize': 0,
                    'horizontal': 0,
                    'inActionSheet': 0,
                    'insetStart': 0,
                    'insetEnd': 0,
                    'itemSize': 0,
                    'keyboardDismissMode': 0,
                    'keyboardShouldPersistTaps': 0,
                    'keyExtractor': 0,
                    'listFooterSize': 0,
                    'listFooterAlwaysMounted': 0,
                    'listHeaderSize': 0,
                    'listHeaderAlwaysMounted': 0,
                    'onLayout': 0,
                    'renderAhead': 0,
                    'renderItem': 0,
                    'renderListFooter': 0,
                    'renderListHeader': 0,
                    'renderSectionHeader': 0,
                    'renderSectionFooter': 0,
                    'scrollEventThrottle': 0,
                    'scrollIndicatorInsetEnd': 0,
                    'scrollIndicatorInsetStart': 0,
                    'sectionHeaderSize': 0,
                    'sectionHeaderIsSticky': 0,
                    'sectionFooterSize': 0,
                    'sections': 0,
                    'showsHorizontalScrollIndicator': 0,
                    'showsVerticalScrollIndicator': 0,
                    'style': 0
                };
                var38 = null;
                var45 = var12;
                var44 = null;
                var2 = silentSetPrototypeOf(var45, var44);
                var45 = {};
                var44 = var13;
                var43 = var12;
                var13 = copyDataProperties(var45, var44, var43);
                var12 = _closure1_slot1;
                var34 = _closure1_slot2;
                var2 = 2;
                var2 = var34[var2];
                var2 = var12.bind(var3)(var2);
                var2 = var2.bind(var3)(var13, var30);
                var24 = var2.onScroll;
                var22 = var2.onScrollBeginDrag;
                var21 = var2.onScrollEndDrag;
                var2 = 3;
                var2 = var34[var2];
                var12 = var12.bind(var3)(var2);
                var2 = {};
                var2.estimatedListSize = var32;
                var2.horizontal = var30;
                var34 = var12.bind(var3)(var2);
                var12 = _closure1_slot3;
                var32 = var12.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun60997: for (var _fun60997_ip = 0;;) switch (_fun60997_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = arg1;
                            var7 = arg2;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 4;
                            var0 = var0[var4];
                            var5 = undefined;
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.FastListItemTypes;
                            var0 = var0.ITEM;
                            if (!(var2 !== var0)) {
                                _fun60997_ip = 253;
                                continue _fun60997
                            }
                        case 53:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.FastListItemTypes;
                            var0 = var0.SECTION;
                            if (!(var2 !== var0)) {
                                _fun60997_ip = 187;
                                continue _fun60997
                            }
                        case 86:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.FastListItemTypes;
                            var1 = var0.SECTION_FOOTER;
                            var0 = undefined;
                            if (!(var2 === var1)) {
                                _fun60997_ip = 185;
                                continue _fun60997
                            }
                        case 121:
                            var4 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun60997_ip = 182;
                                continue _fun60997
                            }
                        case 139:
                            var8 = _closure2_slot1;
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 5;
                            var2 = var9[var2];
                            var2 = var4.bind(var5)(var2);
                            var4 = var2.SECTION_FOOTER;
                            var2 = -1;
                            var1 = var8.bind(var5)(var4, var6, var2);
                        case 182:
                            var0 = var1;
                        case 185:
                            _fun60997_ip = 251;
                            continue _fun60997;
                        case 187:
                            var4 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun60997_ip = 248;
                                continue _fun60997
                            }
                        case 205:
                            var8 = _closure2_slot1;
                            var4 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 5;
                            var2 = var9[var2];
                            var2 = var4.bind(var5)(var2);
                            var4 = var2.SECTION_HEADER;
                            var2 = -1;
                            var1 = var8.bind(var5)(var4, var6, var2);
                        case 248:
                            var0 = var1;
                        case 251:
                            _fun60997_ip = 327;
                            continue _fun60997;
                        case 253:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var8 = var2 == var1;
                            var1 = undefined;
                            if (var8) {
                                _fun60997_ip = 324;
                                continue _fun60997
                            }
                        case 271:
                            var4 = _closure2_slot1;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var3 = 5;
                            var3 = var9[var3];
                            var3 = var8.bind(var5)(var3);
                            var3 = var3.ITEM;
                            var8 = var2 != var7;
                            var2 = -1;
                            if (!var8) {
                                _fun60997_ip = 317;
                                continue _fun60997
                            }
                        case 314:
                            var2 = var7;
                        case 317:
                            var1 = var4.bind(var5)(var3, var6, var2);
                        case 324:
                            var0 = var1;
                        case 327:
                            return var0;
                    }
                };
                var32 = var32.bind(var12)(var1, var2);
                var2 = var12.useMemo;
                var1 = new Array(3);
                var1[0] = var30;
                var1[1] = var41;
                var1[2] = var40;
                var0 = function() { // Environment: var0
                    _fun60998: for (var _fun60998_ip = 0;;) switch (_fun60998_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun60998_ip = 26;
                                continue _fun60998
                            }
                        case 13:
                            var0 = _closure2_slot2;
                            var1 = var1 == var0;
                            var0 = undefined;
                            if (var1) {
                                _fun60998_ip = 74;
                                continue _fun60998
                            }
                        case 26:
                            var1 = _closure2_slot0;
                            var2 = {};
                            var4 = _closure2_slot3;
                            if (var1) {
                                _fun60998_ip = 56;
                                continue _fun60998
                            }
                        case 39:
                            var2.top = var4;
                            var1 = _closure2_slot2;
                            var2.bottom = var1;
                            var1 = var2;
                            _fun60998_ip = 71;
                            continue _fun60998;
                        case 56:
                            var2.left = var4;
                            var3 = _closure2_slot2;
                            var2.right = var3;
                            var1 = var2;
                        case 71:
                            var0 = var1;
                        case 74:
                            return var0;
                    }
                };
                var12 = var2.bind(var12)(var0, var1);
                var1 = var13.scrollReporting;
                var0 = 'animatedCallbacks';
                if (!(var0 !== var1)) {
                    _fun60996_ip = 457;
                    continue _fun60996
                }
            case 435:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                _fun60996_ip = 483;
                continue _fun60996;
            case 457:
                var1 = _closure1_slot0;
                var40 = _closure1_slot2;
                var0 = 4;
                var0 = var40[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.AnimatedFastList;
            case 483:
                var1 = _closure1_slot4;
                var0 = {};
                var0.accessibilityLabel = var39;
                var38 = var38 == var12;
                var0.automaticallyAdjustsScrollIndicatorInsets = var38;
                var36 = _closure1_slot5;
                var36 = var36.bind(var3)(var37);
                var0.batchesToRender = var36;
                var0.chunkBase = var34;
                var34 = 'disabled';
                if (!var35) {
                    _fun60996_ip = 532;
                    continue _fun60996
                }
            case 528:
                var34 = 'default';
            case 532:
                var0.stickySectionsVariant = var34;
                var0.footerSize = var33;
                var0.getRecyclerKey = var32;
                var0.headerSize = var31;
                var0.horizontal = var30;
                var0.inActionSheet = var29;
                var0.insetStart = var28;
                var0.insetEnd = var27;
                var0.itemSize = var26;
                var0.keyboardDismissMode = var25;
                var0.keyboardShouldPersistTaps = var23;
                var0.onLayout = var15;
                var25 = var13.scrollReporting;
                var15 = 'animatedScrollPosition';
                var23 = undefined;
                if (!(var15 !== var25)) {
                    _fun60996_ip = 613;
                    continue _fun60996
                }
            case 610:
                var23 = var24;
            case 613:
                var0.onScroll = var23;
                var0.onScrollBeginDrag = var22;
                var0.onScrollEndDrag = var21;
                var21 = true;
                var0.optimizeListItemRender = var21;
                var21 = arg1;
                var0.ref = var21;
                var0.renderItem = var20;
                var0.renderFooter = var19;
                var0.renderHeader = var18;
                var0.renderSection = var17;
                var0.renderSectionFooter = var16;
                var0.scrollEventThrottle = var14;
                var0.scrollIndicatorInsets = var12;
                var14 = var13.scrollReporting;
                var12 = undefined;
                if (!(var15 === var14)) {
                    _fun60996_ip = 695;
                    continue _fun60996
                }
            case 689:
                var12 = var13.scrollPosition;
            case 695:
                var0.scrollPosValue = var12;
                var0.sections = var11;
                var0.sectionSize = var10;
                var0.sectionFooterSize = var9;
                var0.showsHorizontalScrollIndicator = var8;
                var0.showsVerticalScrollIndicator = var7;
                if (var5) {
                    _fun60996_ip = 731;
                    continue _fun60996
                }
            case 728:
                var5 = var6;
            case 731:
                var0.stickyHeaderFooter = var5;
                var0.style = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/FastestList.ios.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 7536, 7530, 6417, 7534, 2]);