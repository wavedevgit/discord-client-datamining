// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = ['focusHook', 'scrollEventsHandlersHook', 'enableFooterMarginAdjustment', 'overScrollMode', 'keyboardDismissMode', 'showsVerticalScrollIndicator', 'contentContainerStyle', 'refreshing', 'onRefresh', 'progressViewOffset', 'refreshControl', 'preserveScrollMomentum', 'onScroll', 'onScrollBeginDrag', 'onScrollEndDrag', 'lockableScrollableContentOffsetY', 'onContentSizeChange'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.forwardRef;
    var _closure1_slot4 = var8;
    var8 = var7.useContext;
    var _closure1_slot5 = var8;
    var8 = var7.useImperativeHandle;
    var _closure1_slot6 = var8;
    var7 = var7.useMemo;
    var _closure1_slot7 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = {};
    var4 = 'function pnpm_createBottomSheetScrollableComponentTsx1(){const{preserveScrollMomentum,SCROLLABLE_DECELERATION_RATE_MAPPER,animatedScrollableState,showsVerticalScrollIndicator,SCROLLABLE_STATE}=this.__closure;return{...(preserveScrollMomentum?{}:{decelerationRate:SCROLLABLE_DECELERATION_RATE_MAPPER[animatedScrollableState.value]}),showsVerticalScrollIndicator:showsVerticalScrollIndicator?animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED:showsVerticalScrollIndicator};}';
    var3.code = var4;
    var _closure1_slot9 = var3;
    var1 = function(arg0, arg1) { // Original name: createBottomSheetScrollableComponent, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun45337: for (var _fun45337_ip = 0;;) switch (_fun45337_ip) {
                case 0:
                    var4 = arg0;
                    var24 = var4.focusHook;
                    var20 = var4.scrollEventsHandlersHook;
                    var0 = var4.enableFooterMarginAdjustment;
                    var3 = undefined;
                    var22 = var3 !== var0;
                    if (!var22) {
                        _fun45337_ip = 35;
                        continue _fun45337
                    }
                case 32:
                    var22 = var0;
                case 35:
                    var0 = var4.overScrollMode;
                    var17 = 'never';
                    if (!(var3 !== var0)) {
                        _fun45337_ip = 54;
                        continue _fun45337
                    }
                case 51:
                    var17 = var0;
                case 54:
                    var0 = var4.keyboardDismissMode;
                    var16 = 'interactive';
                    if (!(var3 !== var0)) {
                        _fun45337_ip = 71;
                        continue _fun45337
                    }
                case 68:
                    var16 = var0;
                case 71:
                    var0 = var4.showsVerticalScrollIndicator;
                    var26 = var3 === var0;
                    if (var26) {
                        _fun45337_ip = 87;
                        continue _fun45337
                    }
                case 84:
                    var26 = var0;
                case 87:
                    var _closure3_slot0 = var26;
                    var21 = var4.contentContainerStyle;
                    var15 = var4.refreshing;
                    var12 = var4.onRefresh;
                    var14 = var4.progressViewOffset;
                    var7 = var4.refreshControl;
                    var25 = var4.preserveScrollMomentum;
                    var _closure3_slot1 = var25;
                    var19 = var4.onScroll;
                    var32 = var4.onScrollBeginDrag;
                    var31 = var4.onScrollEndDrag;
                    var30 = var4.lockableScrollableContentOffsetY;
                    var0 = var4.onContentSizeChange;
                    var _closure3_slot2 = var0;
                    var2 = _closure1_slot3;
                    var1 = _closure1_slot2;
                    var6 = var2.bind(var3)(var4, var1);
                    var2 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var1 = 3;
                    var1 = var10[var1];
                    var1 = var9.bind(var3)(var1);
                    var1 = var1.BottomSheetDraggableContext;
                    var8 = var2.bind(var3)(var1);
                    var _closure3_slot3 = var8;
                    var2 = 4;
                    var1 = var10[var2];
                    var4 = var9.bind(var3)(var1);
                    var1 = var4.useScrollHandler;
                    var35 = var4;
                    var34 = var20;
                    var33 = var19;
                    var1 = var35[var1](var34, var33, var32, var31, var30, var29);
                    var20 = var1.scrollableRef;
                    var _closure3_slot4 = var20;
                    var23 = var1.scrollableContentOffsetY;
                    var11 = var1.scrollHandler;
                    var1 = var10[var2];
                    var4 = var9.bind(var3)(var1);
                    var1 = var4.useBottomSheetInternal;
                    var1 = var1.bind(var4)();
                    var27 = var1.animatedScrollableState;
                    var _closure3_slot5 = var27;
                    var1 = var1.enableContentPanningGesture;
                    var4 = 5;
                    var4 = var10[var4];
                    var9 = var9.bind(var3)(var4);
                    var4 = var9.useBottomSheetContentSizeSetter;
                    var4 = var4.bind(var9)();
                    var9 = var4.setContentSize;
                    var _closure3_slot6 = var9;
                    if (var8) {
                        _fun45337_ip = 355;
                        continue _fun45337
                    }
                case 344:
                    if (!var1) {
                        _fun45337_ip = 355;
                        continue _fun45337
                    }
                case 347:
                    var1 = "'Scrollable' cannot be used out of the BottomSheet!";
                    throw var1;
                case 355:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var10 = 6;
                    var10 = var4[var10];
                    var19 = var1.bind(var3)(var10);
                    var18 = var19.useAnimatedProps;
                    var13 = function() { // Original name: pnpm_createBottomSheetScrollableComponentTsx1, environment: var5
                        _fun45338: for (var _fun45338_ip = 0;;) switch (_fun45338_ip) {
                            case 0:
                                var0 = global;
                                var4 = var0.Object;
                                var3 = var4.assign;
                                var0 = _closure3_slot1;
                                if (var0) {
                                    _fun45338_ip = 76;
                                    continue _fun45338
                                }
                            case 23:
                                var2 = {};
                                var6 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var6.bind(var0)(var1);
                                var1 = var0.SCROLLABLE_DECELERATION_RATE_MAPPER;
                                var0 = _closure3_slot5;
                                var0 = var0.value;
                                var0 = var1[var0];
                                var2.decelerationRate = var0;
                                _fun45338_ip = 78;
                                continue _fun45338;
                            case 76:
                                var2 = {};
                            case 78:
                                var1 = {};
                                var0 = _closure3_slot0;
                                if (var0) {
                                    _fun45338_ip = 93;
                                    continue _fun45338
                                }
                            case 87:
                                var0 = _closure3_slot0;
                                _fun45338_ip = 143;
                                continue _fun45338;
                            case 93:
                                var5 = _closure3_slot5;
                                var6 = var5.value;
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var5 = 7;
                                var7 = var7[var5];
                                var5 = undefined;
                                var5 = var8.bind(var5)(var7);
                                var5 = var5.SCROLLABLE_STATE;
                                var5 = var5.UNLOCKED;
                                var0 = var6 === var5;
                            case 143:
                                var1.showsVerticalScrollIndicator = var0;
                                var0 = {};
                                var0 = var3.bind(var4)(var0, var2, var1);
                                return var0;
                        }
                    };
                    var10 = {};
                    var10.preserveScrollMomentum = var25;
                    var28 = 7;
                    var29 = var4[var28];
                    var29 = var1.bind(var3)(var29);
                    var29 = var29.SCROLLABLE_DECELERATION_RATE_MAPPER;
                    var10.SCROLLABLE_DECELERATION_RATE_MAPPER = var29;
                    var10.animatedScrollableState = var27;
                    var10.showsVerticalScrollIndicator = var26;
                    var28 = var4[var28];
                    var28 = var1.bind(var3)(var28);
                    var28 = var28.SCROLLABLE_STATE;
                    var10.SCROLLABLE_STATE = var28;
                    var13.__closure = var10;
                    var10 = 1780437272380.0;
                    var13.__workletHash = var10;
                    var10 = _closure1_slot9;
                    var13.__initData = var10;
                    var10 = new Array(3);
                    var10[0] = var27;
                    var10[1] = var26;
                    var10[2] = var25;
                    var18 = var18.bind(var19)(var13, var10);
                    var13 = _closure1_slot7;
                    var10 = new Array(1);
                    var10[0] = var8;
                    var8 = function() { // Environment: var5
                        _fun45339: for (var _fun45339_ip = 0;;) switch (_fun45339_ip) {
                            case 0:
                                var2 = _closure3_slot3;
                                var4 = undefined;
                                var0 = undefined;
                                if (!var2) {
                                    _fun45339_ip = 81;
                                    continue _fun45339
                                }
                            case 14:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var2 = 8;
                                var2 = var5[var2];
                                var2 = var3.bind(var4)(var2);
                                var3 = var2.Gesture;
                                var2 = var3.Native;
                                var3 = var2.bind(var3)();
                                var2 = var3.simultaneousWithExternalGesture;
                                var1 = _closure3_slot3;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.shouldCancelWhenOutside;
                                var1 = false;
                                var0 = var2.bind(var3)(var1);
                            case 81:
                                return var0;
                        }
                    };
                    var19 = var13.bind(var3)(var8, var10);
                    var8 = var4[var2];
                    var13 = var1.bind(var3)(var8);
                    var10 = var13.useStableCallback;
                    var8 = function(arg0, arg1) { // Environment: var5
                        _fun45340: for (var _fun45340_ip = 0;;) switch (_fun45340_ip) {
                            case 0:
                                var3 = arg1;
                                var2 = _closure3_slot6;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var3);
                                var2 = _closure3_slot2;
                                if (!var2) {
                                    _fun45340_ip = 37;
                                    continue _fun45340
                                }
                            case 24:
                                var2 = _closure3_slot2;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1, var3);
                            case 37:
                                return var0;
                        }
                    };
                    var10 = var10.bind(var13)(var8);
                    var8 = var4[var2];
                    var13 = var1.bind(var3)(var8);
                    var8 = var13.useBottomSheetContentContainerStyle;
                    var13 = var8.bind(var13)(var22, var21);
                    var21 = _closure1_slot6;
                    var8 = arg1;
                    var5 = function() { // Environment: var5
                        var0 = _closure3_slot4;
                        var0 = var0.current;
                        return var0;
                    };
                    var5 = var21.bind(var3)(var8, var5);
                    var2 = var4[var2];
                    var22 = var1.bind(var3)(var2);
                    var21 = var22.useScrollableSetter;
                    var33 = _closure2_slot0;
                    var31 = var3 !== var12;
                    var35 = var22;
                    var34 = var20;
                    var32 = var23;
                    var30 = var24;
                    var2 = var35[var21](var34, var33, var32, var31, var30, var29);
                    var2 = _closure1_slot8;
                    var0 = 9;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.ScrollableContainer;
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var0 = {};
                    var0.ref = var20;
                    var0.nativeGesture = var19;
                    var0.animatedProps = var18;
                    var0.overScrollMode = var17;
                    var0.keyboardDismissMode = var16;
                    var0.refreshing = var15;
                    var15 = 16;
                    var0.scrollEventThrottle = var15;
                    var0.progressViewOffset = var14;
                    var0.contentContainerStyle = var13;
                    var0.onRefresh = var12;
                    var0.onScroll = var11;
                    var0.onContentSizeChange = var10;
                    var0.setContentSize = var9;
                    var8 = _closure2_slot1;
                    var0.ScrollableComponent = var8;
                    var0.refreshControl = var7;
                    var0 = var4.bind(var5)(var0, var6);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.createBottomSheetScrollableComponent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 4901, 4894, 5043, 3678, 4890, 4917, 5044]);