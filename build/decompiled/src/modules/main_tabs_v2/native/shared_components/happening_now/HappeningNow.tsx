// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: shouldTrackViewedEvent, environment: var7
        _fun101825: for (var _fun101825_ip = 0;;) switch (_fun101825_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.loading;
                var0 = !var0;
                if (!var0) {
                    _fun101825_ip = 31;
                    continue _fun101825
                }
            case 15:
                var1 = var1.data;
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 31:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var14.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var3 = var6[var12];
    var1 = arg3;
    var8 = var1.bind(var0)(var3);
    var _closure1_slot4 = var8;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.ScrollView;
    var _closure1_slot5 = var3;
    var1 = var1.View;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot7 = var3;
    var3 = var1.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot8 = var3;
    var3 = var1.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot9 = var3;
    var13 = var1.HAPPENING_NOW_PANELS_CONTAINER_PADDING;
    var1 = var1.HappeningNowKindIds;
    var _closure1_slot10 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot11 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot12 = var1;
    var3 = var8.createContext;
    var1 = 6;
    var1 = var6[var1];
    var10 = var5.bind(var0)(var1);
    var4 = var10.createFakeSharedValue;
    var1 = new Array(0);
    var1 = var4.bind(var10)(var1);
    var1 = var3.bind(var8)(var1);
    var _closure1_slot13 = var1;
    var3 = 7;
    var3 = var6[var3];
    var10 = var5.bind(var0)(var3);
    var4 = var10.createStyles;
    var3 = {};
    var11 = {};
    var11.paddingLeft = var13;
    var11.paddingRight = var13;
    var3.containerInner = var11;
    var11 = {};
    var13 = 8;
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var11.paddingHorizontal = var13;
    var11.flex = var12;
    var3.loading = var11;
    var3 = var4.bind(var10)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Gesture;
    var3 = var4.Native;
    var4 = var3.bind(var4)();
    var3 = var4.disallowInterruption;
    var3 = var3.bind(var4)(var9);
    var _closure1_slot15 = var3;
    var4 = var8.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var7
        var3 = _closure1_slot12;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.GestureDetector;
        var0 = {};
        var5 = _closure1_slot15;
        var0.gesture = var5;
        var5 = _closure1_slot5;
        var4 = {};
        var6 = arg1;
        var4.ref = var6;
        var7 = arg0;
        var8 = var4;
        var6 = copyDataProperties(var8, var7);
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var4 = var4.bind(var8)(var3);
    var _closure1_slot16 = var4;
    var3 = 'HappeningNowScrollView';
    var4.displayName = var3;
    var4 = var8.memo;
    var3 = function(arg0) { // Environment: var7
        _fun101827: for (var _fun101827_ip = 0;;) switch (_fun101827_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.cards;
                var23 = var1.listRef;
                var _closure2_slot0 = var23;
                var5 = undefined;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var1 = _closure1_slot14;
                var8 = var1.bind(var5)();
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 14;
                var1 = var14[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.useIsFocused;
                var1 = var1.bind(var2)();
                var _closure2_slot1 = var1;
                var11 = _closure1_slot1;
                var2 = 15;
                var2 = var14[var2];
                var3 = var11.bind(var5)(var2);
                var2 = {};
                var2.withoutUserCards = var5;
                var2.guildId = var5;
                var19 = true;
                var2.showMultipleActivitiesPerChannel = var19;
                var2.isFocused = var1;
                var3 = var3.bind(var5)(var4, var2);
                var2 = _closure1_slot3;
                var13 = 2;
                var2 = var2.bind(var5)(var3, var13);
                var10 = 0;
                var6 = var2[var10];
                var _closure2_slot2 = var6;
                var4 = 1;
                var9 = var2[var4];
                var _closure2_slot3 = var9;
                var3 = 16;
                var2 = var14[var3];
                var12 = var11.bind(var5)(var2);
                var2 = 17;
                var2 = var14[var2];
                var2 = var11.bind(var5)(var2);
                var2 = var2.ACTIVITIES_HAPPENING_NOW;
                var2 = var12.bind(var5)(var2);
                var12 = var2.analyticsLocations;
                var2 = 18;
                var2 = var14[var2];
                var2 = var11.bind(var5)(var2);
                var2 = var2.bind(var5)();
                var24 = var2.width;
                var14 = _closure1_slot4;
                var2 = var14.useRef;
                var15 = var2.bind(var14)(var10);
                var _closure2_slot4 = var15;
                var11 = {};
                var11.data = var6;
                var11.isFocused = var1;
                var11.loading = var9;
                var2 = function(arg0, arg1) { // Original name: useTrackActivityCardsView, environment: var0
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var8 = var3.isFocused;
                    var _closure3_slot2 = var8;
                    var7 = _closure1_slot4;
                    var2 = var7.useRef;
                    var2 = var2.bind(var7)(var3);
                    var _closure3_slot3 = var2;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 10;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var2 = function() { // Environment: var1
                        var0 = {};
                        var1 = 'messages';
                        var0.context = var1;
                        var1 = _closure3_slot3;
                        var3 = var1.current;
                        var3 = var3.data;
                        var3 = var3.length;
                        var0.num_cards = var3;
                        var3 = global;
                        var5 = var3.Math;
                        var4 = var5.min;
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = var1.current;
                        var2 = var2.data;
                        var2 = var2.length;
                        var2 = var4.bind(var5)(var3, var2);
                        var0.max_viewed_card_index = var2;
                        var2 = var1.current;
                        var4 = var2.data;
                        var3 = var4.map;
                        var2 = function(arg0) { // Environment: var2
                            var1 = _closure1_slot10;
                            var0 = arg0;
                            var0 = var0.kind;
                            var0 = var1[var0];
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                        var0.card_types = var2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 11;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.getAffinityProperties;
                        var1 = var1.current;
                        var1 = var1.data;
                        var6 = var2.bind(var3)(var1);
                        var7 = var0;
                        var1 = copyDataProperties(var7, var6);
                        return var0;
                    };
                    var2 = var5.bind(var0)(var2);
                    var _closure3_slot4 = var2;
                    var6 = var7.useEffect;
                    var5 = function() { // Environment: var1
                        var1 = _closure3_slot3;
                        var0 = _closure3_slot0;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5);
                    var6 = var7.useEffect;
                    var5 = new Array(2);
                    var5[0] = var8;
                    var5[1] = var2;
                    var2 = function() { // Environment: var1
                        _fun101832: for (var _fun101832_ip = 0;;) switch (_fun101832_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                var1 = !var1;
                                if (!var1) {
                                    _fun101832_ip = 36;
                                    continue _fun101832
                                }
                            case 13:
                                var4 = _closure1_slot21;
                                var2 = _closure3_slot3;
                                var3 = var2.current;
                                var2 = undefined;
                                var1 = var4.bind(var2)(var3);
                            case 36:
                                if (!var1) {
                                    _fun101832_ip = 93;
                                    continue _fun101832
                                }
                            case 39:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 12;
                                var2 = var4[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.track;
                                var1 = _closure1_slot11;
                                var1 = var1.ACTIVITY_CARDS_VIEWED;
                                var0 = _closure3_slot4;
                                var0 = var0.bind(var4)();
                                var0 = var2.bind(var3)(var1, var0);
                            case 93:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = 13;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var1 = function() { // Environment: var1
                        var0 = function() { // Environment: var0
                            _fun101834: for (var _fun101834_ip = 0;;) switch (_fun101834_ip) {
                                case 0:
                                    var4 = _closure1_slot21;
                                    var0 = _closure3_slot3;
                                    var3 = var0.current;
                                    var0 = undefined;
                                    var3 = var4.bind(var0)(var3);
                                    if (!var3) {
                                        _fun101834_ip = 78;
                                        continue _fun101834
                                    }
                                case 29:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.track;
                                    var2 = _closure1_slot11;
                                    var2 = var2.ACTIVITY_CARDS_VIEWED;
                                    var1 = _closure3_slot4;
                                    var1 = var1.bind(var0)();
                                    var1 = var3.bind(var4)(var2, var1);
                                case 78:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var2.bind(var5)(var11, var15);
                var11 = var14.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var23;
                var1 = function() { // Environment: var0
                    _fun101835: for (var _fun101835_ip = 0;;) switch (_fun101835_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun101835_ip = 58;
                                continue _fun101835
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun101835_ip = 46;
                                continue _fun101835
                            }
                        case 25:
                            var2 = var3.scrollToOffset;
                            var1 = {
                                'offset': 0,
                                'animated': false
                            };
                            var1 = var2.bind(var3)(var1);
                        case 46:
                            var1 = _closure2_slot4;
                            var0 = 0;
                            var1.current = var0;
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var11.bind(var14)(var1, var2);
                var2 = var6.findIndex;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cardSize;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure1_slot9;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var6)(var1);
                var _closure2_slot5 = var1;
                var2 = var1 >= var10;
                var14 = inf;
                if (!var2) {
                    _fun101827_ip = 345;
                    continue _fun101827
                }
            case 337:
                var2 = _closure1_slot8;
                var14 = var2 * var1;
            case 345:
                _closure2_slot6 = var14;
                var15 = _closure1_slot4;
                var11 = var15.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var14;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun101837: for (var _fun101837_ip = 0;;) switch (_fun101837_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = arg0;
                            var3 = var1 + var0;
                            var1 = _closure2_slot6;
                            if (!(!(var3 < var1))) {
                                _fun101837_ip = 53;
                                continue _fun101837
                            }
                        case 21:
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot6;
                            var4 = var3 - var1;
                            var1 = _closure1_slot9;
                            var1 = var4 / var1;
                            var1 = var1 | 0;
                            var1 = var2 + var1;
                            _fun101837_ip = 67;
                            continue _fun101837;
                        case 53:
                            var2 = _closure1_slot8;
                            var2 = var3 / var2;
                            var1 = var2 | 0;
                        case 67:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!(var1 > var2)) {
                                _fun101837_ip = 90;
                                continue _fun101837
                            }
                        case 80:
                            var0 = _closure2_slot4;
                            var0.current = var1;
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var11.bind(var15)(var1, var2);
                var15 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var2 = var15.bind(var5)(var2);
                var11 = var2.bind(var5)(var14, var11);
                var2 = _closure1_slot3;
                var2 = var2.bind(var5)(var11, var13);
                var22 = var2[var10];
                var2 = var2[var4];
                var18 = undefined;
                if (!var2) {
                    _fun101827_ip = 436;
                    continue _fun101827
                }
            case 432:
                var18 = _closure1_slot8;
            case 436:
                var4 = _closure1_slot4;
                var13 = var4.useMemo;
                var11 = new Array(1);
                var11[0] = var6;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 19;
                    var2 = var4[var0];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.filterHappeningNowCards;
                    var2 = _closure2_slot2;
                    var2 = var5.bind(var6)(var2);
                    var0 = var4[var0];
                    var1 = var3.bind(var1)(var0);
                    var0 = var1.sortHappeningNowCards;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var16 = var13.bind(var4)(var2, var11);
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = var11[var1];
                var13 = var2.bind(var5)(var1);
                var1 = var13.useHappeningNowScrollSnapping;
                var17 = var1.bind(var13)(var23);
                var14 = var4.useCallback;
                var13 = new Array(1);
                var13[0] = var9;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = var0.item;
                    var0 = var0.index;
                    var2 = _closure1_slot17;
                    var1 = {};
                    var1.index = var0;
                    var0 = _closure2_slot3;
                    var1.loading = var0;
                    var0 = true;
                    var1.panelVariant = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var3, var1);
                    return var0;
                };
                var15 = var14.bind(var4)(var1, var13);
                var1 = 21;
                var1 = var11[var1];
                var11 = var2.bind(var5)(var1);
                var2 = var11.useSharedValue;
                var1 = new Array(0);
                var11 = var2.bind(var11)(var1);
                _closure2_slot7 = var11;
                var13 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var6 = var0.viewableItems;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateSharedValueArrayIfChanged;
                    var2 = _closure2_slot7;
                    var5 = var6.map;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot18;
                        var0 = arg0;
                        var1 = var0.item;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var5.bind(var6)(var1);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var13 = var13.bind(var4)(var1, var2);
                _closure2_slot8 = var13;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var13;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = _closure2_slot8;
                    var0 = 130;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var14 = var2.bind(var4)(var0, var1);
                var0 = var6.length;
                if (!(var10 === var0)) {
                    _fun101827_ip = 640;
                    continue _fun101827
                }
            case 616:
                if (var9) {
                    _fun101827_ip = 640;
                    continue _fun101827
                }
            case 619:
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var0 = var2.bind(var5)(var1, var0);
                _fun101827_ip = 1020;
                continue _fun101827;
            case 640:
                var4 = _closure1_slot12;
                if (var9) {
                    _fun101827_ip = 932;
                    continue _fun101827
                }
            case 650:
                var1 = _closure1_slot13;
                var2 = var1.Provider;
                var1 = {};
                var1.value = var11;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var3 = var21[var3];
                var3 = var20.bind(var5)(var3);
                var11 = var3.AnalyticsLocationProvider;
                var3 = {};
                var3.value = var12;
                var12 = 24;
                var12 = var21[var12];
                var12 = var20.bind(var5)(var12);
                var13 = var12.FlashList;
                var12 = {};
                var12.ref = var23;
                var12.horizontal = var19;
                var23 = _closure1_slot16;
                var12.renderScrollComponent = var23;
                var23 = {};
                var23.width = var24;
                var24 = _closure1_slot7;
                var23.height = var24;
                var12.estimatedListSize = var23;
                var23 = _closure1_slot8;
                var12.estimatedItemSize = var23;
                var23 = _closure1_slot19;
                var12.overrideItemLayout = var23;
                var23 = 'fast';
                var12.decelerationRate = var23;
                var12.onScroll = var22;
                var12.disableHorizontalListHeightMeasurement = var19;
                var12.snapToInterval = var18;
                var12.snapToOffsets = var17;
                var17 = false;
                var12.showsHorizontalScrollIndicator = var17;
                var17 = 25;
                var18 = var21[var17];
                var18 = var20.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var5)(var17);
                var17 = var17.t;
                var17 = var17["1+boPi"];
                var17 = var18.bind(var19)(var17);
                var12.accessibilityLabel = var17;
                var17 = var8.containerInner;
                var12.contentContainerStyle = var17;
                var12.data = var16;
                var12.renderItem = var15;
                var12.onViewableItemsChanged = var14;
                var14 = _closure1_slot18;
                var12.keyExtractor = var14;
                var14 = _closure1_slot20;
                var12.getItemType = var14;
                var12 = var4.bind(var5)(var13, var12);
                var3.children = var12;
                var3 = var4.bind(var5)(var11, var3);
                var1.children = var3;
                var1 = var4.bind(var5)(var2, var1);
                _fun101827_ip = 1017;
                continue _fun101827;
            case 932:
                var3 = _closure1_slot6;
                var2 = {};
                var8 = var8.loading;
                var2.style = var8;
                var8 = _closure1_slot17;
                var7 = var6.length;
                if (!(!(var7 > var10))) {
                    _fun101827_ip = 977;
                    continue _fun101827
                }
            case 961:
                var7 = {
                    'kind': 'placeholder',
                    'index': 0
                };
                _fun101827_ip = 981;
                continue _fun101827;
            case 977:
                var7 = var6[var10];
            case 981:
                var6 = {
                    'index': 0,
                    'loading': null,
                    'fullwidth': true,
                    'panelVariant': true
                };
                var6.loading = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1017:
                var0 = var1;
            case 1020:
                return var0;
        }
    };
    var3 = var4.bind(var8)(var3);
    var4 = function(arg0, arg1) { // Original name: renderCard, environment: var7
        _fun101843: for (var _fun101843_ip = 0;;) switch (_fun101843_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = var5.kind;
                var0 = 'placeholder';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 1080;
                    continue _fun101843
                }
            case 22:
                var0 = var4.loading;
                if (var0) {
                    _fun101843_ip = 1080;
                    continue _fun101843
                }
            case 34:
                var1 = var5.kind;
                var0 = 'live-guild-stage';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 1021;
                    continue _fun101843
                }
            case 52:
                var0 = 'guild-event';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 962;
                    continue _fun101843
                }
            case 65:
                var0 = 'active-channel';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 903;
                    continue _fun101843
                }
            case 78:
                var0 = 'user';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 844;
                    continue _fun101843
                }
            case 89:
                var0 = 'activity';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 785;
                    continue _fun101843
                }
            case 100:
                var0 = 'voice';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 726;
                    continue _fun101843
                }
            case 111:
                var0 = 'invite';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 661;
                    continue _fun101843
                }
            case 122:
                var0 = 'customize-guild';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 596;
                    continue _fun101843
                }
            case 135:
                var0 = 'create-channel';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 531;
                    continue _fun101843
                }
            case 148:
                var0 = 'student-hub-add-channel';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 466;
                    continue _fun101843
                }
            case 161:
                var0 = 'embedded-activity';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 389;
                    continue _fun101843
                }
            case 174:
                var0 = 'unified-vc';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 312;
                    continue _fun101843
                }
            case 187:
                var0 = 'user-returned';
                if (!(var0 !== var1)) {
                    _fun101843_ip = 235;
                    continue _fun101843
                }
            case 197:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 37;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var5);
                return var0;
            case 235:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 36;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var7 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var7 = copyDataProperties(var9, var8);
                var6 = _closure1_slot18;
                var7 = var6.bind(var2)(var5);
                var6 = 'cardKey';
                var0[var6] = var7;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 312:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 35;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var7 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var7 = copyDataProperties(var9, var8);
                var6 = _closure1_slot18;
                var7 = var6.bind(var2)(var5);
                var6 = 'cardKey';
                var0[var6] = var7;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 389:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 34;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var7 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var7 = copyDataProperties(var9, var8);
                var6 = _closure1_slot18;
                var7 = var6.bind(var2)(var5);
                var6 = 'cardKey';
                var0[var6] = var7;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 466:
                var3 = _closure1_slot12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 33;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.HappeningNowStudentHubAddServer;
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 531:
                var3 = _closure1_slot12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 33;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.HappeningNowCardCreateChannel;
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 596:
                var3 = _closure1_slot12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 33;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.HappeningNowCardCustomizeGuild;
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 661:
                var3 = _closure1_slot12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 33;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.HappeningNowCardInvite;
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 726:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 32;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 785:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 31;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 844:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 30;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 903:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 29;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 962:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 28;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var6 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 1021:
                var3 = _closure1_slot12;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 27;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var0;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var4;
                var5 = copyDataProperties(var9, var8);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 1080:
                var3 = _closure1_slot12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 26;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.HappeningNowCardPlaceholder;
                var0 = {};
                var5 = var4.fullwidth;
                var0.fullWidth = var5;
                var4 = var4.panelVariant;
                var0.panelVariant = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var4 = function(arg0) { // Original name: keyExtractor, environment: var7
        _fun101844: for (var _fun101844_ip = 0;;) switch (_fun101844_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.kind;
                var1 = 'placeholder';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 582;
                    continue _fun101844
                }
            case 19:
                var1 = 'live-guild-stage';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 536;
                    continue _fun101844
                }
            case 32:
                var1 = 'guild-event';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 490;
                    continue _fun101844
                }
            case 45:
                var1 = 'active-channel';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 450;
                    continue _fun101844
                }
            case 58:
                var1 = 'user';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 410;
                    continue _fun101844
                }
            case 69:
                var1 = 'activity';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 410;
                    continue _fun101844
                }
            case 80:
                var1 = 'user-returned';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 410;
                    continue _fun101844
                }
            case 93:
                var1 = 'voice';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 353;
                    continue _fun101844
                }
            case 104:
                var1 = 'invite';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 346;
                    continue _fun101844
                }
            case 115:
                var1 = 'customize-guild';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 346;
                    continue _fun101844
                }
            case 128:
                var1 = 'create-channel';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 346;
                    continue _fun101844
                }
            case 141:
                var1 = 'student-hub-add-channel';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 346;
                    continue _fun101844
                }
            case 154:
                var1 = 'embedded-activity';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 269;
                    continue _fun101844
                }
            case 164:
                var1 = 'unified-vc';
                if (!(var1 !== var2)) {
                    _fun101844_ip = 212;
                    continue _fun101844
                }
            case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 37;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.assertNever;
                var2 = var2.bind(var3)(var0);
                return var1;
            case 212:
                var5 = var0.kind;
                var1 = var0.voiceState;
                var4 = var1.channelId;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun101844_ip = 239;
                    continue _fun101844
                }
            case 234:
                var4 = var0.userId;
            case 239:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 269:
                var6 = var0.kind;
                var1 = var0.voiceState;
                var5 = var1.channelId;
                var1 = null;
                if (!(var1 == var5)) {
                    _fun101844_ip = 296;
                    continue _fun101844
                }
            case 291:
                var5 = var0.userId;
            case 296:
                var1 = var0.activity;
                var7 = var1.applicationId;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = '-';
                var11 = var6;
                var10 = var1;
                var9 = var5;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            case 346:
                var1 = var0.kind;
                return var1;
            case 353:
                var5 = var0.kind;
                var1 = var0.voiceState;
                var4 = var1.channelId;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun101844_ip = 380;
                    continue _fun101844
                }
            case 375:
                var4 = var0.userId;
            case 380:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 410:
                var5 = var0.kind;
                var4 = var0.userId;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 450:
                var5 = var0.kind;
                var4 = var0.channelId;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 490:
                var5 = var0.kind;
                var1 = var0.event;
                var4 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 536:
                var5 = var0.kind;
                var1 = var0.stage;
                var4 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 582:
                var4 = var0.kind;
                var3 = var0.index;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '-';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var4 = function(arg0, arg1) { // Original name: overrideItemLayout, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 19;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.cardSize;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = arg0;
        var1.size = var2;
        return var0;
    };
    var _closure1_slot19 = var4;
    var4 = function(arg0) { // Original name: getItemType, environment: var7
        var0 = arg0;
        var0 = var0.kind;
        return var0;
    };
    var _closure1_slot20 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ViewableHappeningNowCardKeysContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 10794, 660, 33, 5211, 1297, 671, 4917, 7495, 13229, 795, 4056, 1470, 13230, 5684, 5536, 1464, 13237, 13238, 3677, 5256, 22, 5711, 1234, 13239, 13240, 13257, 13259, 13260, 13243, 13255, 13261, 13254, 13242, 13265, 1304, 2]);