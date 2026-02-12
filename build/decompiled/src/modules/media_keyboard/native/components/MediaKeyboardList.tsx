// modules/media_keyboard/native/components/MediaKeyboardList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.NativeEventEmitter;
    var3 = var3.NativeModules;
    var _closure1_slot5 = var3;
    var7 = 3;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.NativePermissionStatus;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot10 = var7;
    var15 = var3.PhotoLibraryHelper;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var16 = var7;
    var3 = new var16[var8](var15, var14);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot11 = var3;
    var10 = 8;
    var3 = var5[var10];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 9;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var11;
    var11 = 10;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.HEADER_PADDING_BOTTOM;
    var11 = var11 - var10;
    var9.marginTop = var11;
    var9.paddingTop = var10;
    var3.listContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun70606: for (var _fun70606_ip = 0;;) switch (_fun70606_ip) {
            case 0:
                var0 = arg0;
                var35 = var0.channel;
                var _closure2_slot0 = var35;
                var34 = var0.draftType;
                var _closure2_slot1 = var34;
                var17 = var0.onPressCamera;
                var _closure2_slot2 = var17;
                var32 = var0.onAttachPress;
                var _closure2_slot3 = var32;
                var31 = var0.onPressItem;
                var _closure2_slot4 = var31;
                var30 = var0.onLongPressItem;
                var _closure2_slot5 = var30;
                var24 = var0.onViewAll;
                var _closure2_slot6 = var24;
                var29 = var0.includedUploadIds;
                var _closure2_slot7 = var29;
                var3 = var0.uploadDisabled;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun70606_ip = 98;
                    continue _fun70606
                }
            case 96:
                var3 = false;
            case 98:
                var _closure2_slot8 = var3;
                var28 = var0.uploadLimit;
                var _closure2_slot9 = var28;
                var27 = var0.disableWhenReachedLimit;
                var _closure2_slot10 = var27;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var _closure2_slot25 = var4;
                var _closure2_slot26 = var4;
                var _closure2_slot27 = var4;
                var _closure2_slot28 = var4;
                var2 = _closure1_slot10;
                var13 = _closure1_slot1;
                var41 = _closure1_slot2;
                var12 = 13;
                var0 = var41[var12];
                var1 = var13.bind(var4)(var0);
                var0 = {};
                var0.disabled = var3;
                var0.onViewAll = var24;
                var0 = var2.bind(var4)(var1, var0);
                _closure2_slot11 = var0;
                var22 = _closure1_slot4;
                var0 = var22.useRef;
                var14 = true;
                var0 = var0.bind(var22)(var14);
                _closure2_slot12 = var0;
                var2 = var22.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var8
                    var1 = _closure2_slot12;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.contentOffset;
                    var2 = var0.y;
                    var0 = 100;
                    var0 = var2 < var0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var10 = var2.bind(var22)(var0, var1);
                var0 = var22.useState;
                var1 = null;
                var0 = var0.bind(var22)(var1);
                var5 = _closure1_slot3;
                var21 = 2;
                var0 = var5.bind(var4)(var0, var21);
                var18 = 0;
                var23 = var0[var18];
                _closure2_slot13 = var23;
                var2 = 1;
                var0 = var0[var2];
                _closure2_slot14 = var0;
                var0 = 14;
                var0 = var41[var0];
                var7 = var13.bind(var4)(var0);
                var0 = var7.useAssets;
                var25 = var0.bind(var7)();
                _closure2_slot15 = var25;
                var40 = _closure1_slot0;
                var0 = 15;
                var0 = var41[var0];
                var7 = var40.bind(var4)(var0);
                var0 = var7.useMediaKeyboardItemsPerRow;
                var0 = var0.bind(var7)();
                var9 = var0.itemsPerRow;
                _closure2_slot16 = var9;
                var11 = var0.itemsPageSizeRef;
                _closure2_slot17 = var11;
                var15 = var22.useEffect;
                var7 = function() { // Environment: var8
                    var0 = _closure1_slot5;
                    var1 = var0.NativePermissionManager;
                    var0 = var1.requestPhotoAuthorization;
                    var2 = var0.bind(var1)();
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot14;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var15.bind(var22)(var7, var0);
                var15 = var22.useEffect;
                var7 = new Array(2);
                var7[0] = var23;
                var7[1] = var11;
                var0 = function() { // Environment: var8
                    _fun70610: for (var _fun70610_ip = 0;;) switch (_fun70610_ip) {
                        case 0:
                            var3 = _closure2_slot13;
                            var1 = _closure1_slot9;
                            var1 = var1.AUTHORIZED;
                            if (!(var3 !== var1)) {
                                _fun70610_ip = 48;
                                continue _fun70610
                            }
                        case 26:
                            var3 = _closure2_slot13;
                            var1 = _closure1_slot9;
                            var1 = var1.LIMITED;
                            if (!(var3 !== var1)) {
                                _fun70610_ip = 48;
                                continue _fun70610
                            }
                        case 44:
                            var1 = undefined;
                            return var1;
                        case 48:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.refreshAssets;
                            var3 = {};
                            var6 = _closure2_slot17;
                            var6 = var6.current;
                            var3.batchSize = var6;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure1_slot11;
                            var3 = null;
                            var3 = var3 == var4;
                            if (var3) {
                                _fun70610_ip = 139;
                                continue _fun70610
                            }
                        case 110:
                            var5 = _closure1_slot11;
                            var4 = var5.addListener;
                            var3 = 'photoLibraryChanged';
                            var2 = function() { // Environment: var0
                                _fun70611: for (var _fun70611_ip = 0;;) switch (_fun70611_ip) {
                                    case 0:
                                        var0 = _closure2_slot12;
                                        var0 = var0.current;
                                        if (!var0) {
                                            _fun70611_ip = 67;
                                            continue _fun70611
                                        }
                                    case 15:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.refreshAssets;
                                        var0 = {};
                                        var3 = _closure2_slot17;
                                        var3 = var3.current;
                                        var0.batchSize = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 67:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var5)(var3, var2);
                        case 139:
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                _fun70612: for (var _fun70612_ip = 0;;) switch (_fun70612_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun70612_ip = 27;
                                            continue _fun70612
                                        }
                                    case 13:
                                        var1 = _closure3_slot0;
                                        var0 = var1.remove;
                                        var0 = var0.bind(var1)();
                                    case 27:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var15.bind(var22)(var0, var7);
                var0 = 16;
                var0 = var41[var0];
                var0 = var13.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var7 = var0.top;
                var26 = 17;
                var0 = var41[var26];
                var13 = var13.bind(var4)(var0);
                var0 = {};
                var0.ignoreKeyboard = var14;
                var0 = var13.bind(var4)(var0);
                var37 = var0.height;
                _closure2_slot18 = var37;
                var0 = _closure1_slot8;
                var36 = var37 * var0;
                _closure2_slot19 = var36;
                var0 = 18;
                var0 = var41[var0];
                var0 = var40.bind(var4)(var0);
                var0 = var0.NAV_BAR_HEIGHT_MULTILINE;
                var0 = var37 - var0;
                var33 = var0 - var7;
                _closure2_slot20 = var33;
                var0 = 19;
                var0 = var41[var0];
                var7 = var40.bind(var4)(var0);
                var0 = var7.useBottomSheetInternal;
                var0 = var0.bind(var7)();
                var20 = var0.animatedSnapPoints;
                _closure2_slot21 = var20;
                var13 = var0.animatedIndex;
                var7 = var22.useState;
                var0 = {};
                var0.minimum = var36;
                var0.maximum = var33;
                var0 = var7.bind(var22)(var0);
                var7 = var5.bind(var4)(var0, var21);
                var0 = var7[var18];
                var5 = var0.minimum;
                var0 = var0.maximum;
                var38 = var7[var2];
                _closure2_slot22 = var38;
                var39 = 12;
                var7 = var41[var39];
                var19 = var40.bind(var4)(var7);
                var16 = var19.useAnimatedReaction;
                var15 = function() {
                    var1 = _closure2_slot21;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.animatedSnapPoints = var20;
                var15.__closure = var7;
                var7 = 7279123713809.0;
                var15.__workletHash = var7;
                var7 = _closure1_slot15;
                var15.__initData = var7;
                var7 = function arg0, arg1() {
                    _fun70614: for (var _fun70614_ip = 0;;) switch (_fun70614_ip) {
                        case 0:
                            var7 = arg0;
                            var5 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.cheapWorkletArrayShallowEqual;
                            var6 = null;
                            var8 = var6 != var5;
                            var2 = undefined;
                            if (!var8) {
                                _fun70614_ip = 51;
                                continue _fun70614
                            }
                        case 48:
                            var2 = var5;
                        case 51:
                            var2 = var3.bind(var4)(var7, var2);
                            if (var2) {
                                _fun70614_ip = 168;
                                continue _fun70614
                            }
                        case 60:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot22;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var4 = _closure2_slot18;
                            var3 = 0;
                            var3 = var7[var3];
                            if (!(var6 == var3)) {
                                _fun70614_ip = 117;
                                continue _fun70614
                            }
                        case 113:
                            var3 = _closure2_slot19;
                        case 117:
                            var3 = var4 - var3;
                            var1.minimum = var3;
                            var4 = _closure2_slot18;
                            var8 = var7.length;
                            var3 = 1;
                            var3 = var8 - var3;
                            var3 = var7[var3];
                            if (!(var6 == var3)) {
                                _fun70614_ip = 154;
                                continue _fun70614
                            }
                        case 150:
                            var3 = _closure2_slot20;
                        case 154:
                            var3 = var4 - var3;
                            var1.maximum = var3;
                            var1 = var2.bind(var0)(var1);
                        case 168:
                            return var0;
                    }
                };
                var20 = {};
                var42 = 20;
                var42 = var41[var42];
                var42 = var40.bind(var4)(var42);
                var42 = var42.cheapWorkletArrayShallowEqual;
                var20.cheapWorkletArrayShallowEqual = var42;
                var39 = var41[var39];
                var39 = var40.bind(var4)(var39);
                var39 = var39.runOnJS;
                var20.runOnJS = var39;
                var20.setBottomSheetState = var38;
                var20.windowHeight = var37;
                var20.computedStartHeight = var36;
                var20.maxDynamicContentSize = var33;
                var7.__closure = var20;
                var20 = 4619753074319.0;
                var7.__workletHash = var20;
                var20 = _closure1_slot16;
                var7.__initData = var20;
                var7 = var16.bind(var19)(var15, var7);
                var7 = function arg0() {
                    var13 = arg0;
                    var _closure3_slot0 = var13;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var0 = 11;
                    var0 = var11[var0];
                    var9 = undefined;
                    var0 = var10.bind(var9)(var0);
                    var3 = var0.MediaKeyboardSkipFullImageLoadingExperiment;
                    var2 = var3.useConfig;
                    var0 = {};
                    var4 = 'useIsBottomSheetExpanded';
                    var0.location = var4;
                    var0 = var2.bind(var3)(var0);
                    var2 = var0.enabled;
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var0 = !var2;
                    var4 = var3.bind(var4)(var0);
                    var3 = _closure1_slot3;
                    var0 = 2;
                    var4 = var3.bind(var9)(var4, var0);
                    var0 = 0;
                    var0 = var4[var0];
                    var3 = 1;
                    var7 = var4[var3];
                    var _closure3_slot1 = var7;
                    var8 = 12;
                    var3 = var11[var8];
                    var4 = var10.bind(var9)(var3);
                    var3 = var4.useSharedValue;
                    var2 = !var2;
                    var12 = var3.bind(var4)(var2);
                    var _closure3_slot2 = var12;
                    var2 = var11[var8];
                    var4 = var10.bind(var9)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = {};
                    var6.animatedIndex = var13;
                    var2.__closure = var6;
                    var6 = 8982138292467.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot13;
                    var2.__initData = var6;
                    var1 = function arg0() {
                        _fun70617: for (var _fun70617_ip = 0;;) switch (_fun70617_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = 0.1;
                                var0 = var1 > var0;
                                if (!var0) {
                                    _fun70617_ip = 39;
                                    continue _fun70617
                                }
                            case 20:
                                var2 = _closure3_slot2;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var0 = !var1;
                            case 39:
                                if (!var0) {
                                    _fun70617_ip = 105;
                                    continue _fun70617
                                }
                            case 42:
                                var3 = _closure3_slot2;
                                var1 = var3.set;
                                var2 = true;
                                var1 = var1.bind(var3)(var2);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 12;
                                var3 = var3[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.runOnJS;
                                var0 = _closure3_slot1;
                                var0 = var3.bind(var4)(var0);
                                var0 = var0.bind(var1)(var2);
                            case 105:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.latch = var12;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var8 = var8.runOnJS;
                    var6.runOnJS = var8;
                    var6.setIsExpanded = var7;
                    var1.__closure = var6;
                    var6 = 7990574449734.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot14;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var7 = var7.bind(var4)(var13);
                var13 = _closure1_slot12;
                var19 = var13.bind(var4)();
                var20 = var22.useMemo;
                var15 = var1 == var25;
                var13 = undefined;
                if (var15) {
                    _fun70606_ip = 865;
                    continue _fun70606
                }
            case 854:
                var15 = var25.edges;
                var13 = var15.length;
            case 865:
                var16 = new Array(2);
                var16[0] = var13;
                var13 = false;
                var16[1] = var13;
                var15 = function() { // Environment: var8
                    _fun70618: for (var _fun70618_ip = 0;;) switch (_fun70618_ip) {
                        case 0:
                            var0 = _closure2_slot15;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun70618_ip = 33;
                                continue _fun70618
                            }
                        case 18:
                            var2 = _closure2_slot15;
                            var2 = var2.edges;
                            var0 = var2.length;
                        case 33:
                            var2 = var1 != var0;
                            var1 = 0;
                            if (!var2) {
                                _fun70618_ip = 45;
                                continue _fun70618
                            }
                        case 42:
                            var1 = var0;
                        case 45:
                            var0 = 1;
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var15 = var20.bind(var22)(var15, var16);
                _closure2_slot23 = var15;
                var22 = _closure1_slot4;
                var33 = var22.useMemo;
                var20 = new Array(3);
                var20[0] = var25;
                var20[1] = var13;
                var20[2] = var9;
                var16 = function() { // Environment: var8
                    _fun70619: for (var _fun70619_ip = 0;;) switch (_fun70619_ip) {
                        case 0:
                            var1 = _closure2_slot15;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun70619_ip = 148;
                                continue _fun70619
                            }
                        case 16:
                            var1 = _closure2_slot15;
                            var1 = var3 == var1;
                            var4 = undefined;
                            var7 = undefined;
                            if (var1) {
                                _fun70619_ip = 41;
                                continue _fun70619
                            }
                        case 31:
                            var1 = _closure2_slot15;
                            var7 = var1.edges;
                        case 41:
                            if (!(var3 == var7)) {
                                _fun70619_ip = 49;
                                continue _fun70619
                            }
                        case 45:
                            var7 = new Array(0);
                        case 49:
                            var5 = new Array(0);
                            var2 = var5.push;
                            var1 = {};
                            var6 = 'camera';
                            var1.type = var6;
                            var1 = var2.bind(var5)(var1);
                            var2 = var5.push;
                            var1 = new Array(0);
                            var8 = 0;
                            var10 = var1;
                            var9 = var7;
                            var6 = arraySpread(var10, var9, var8);
                            var10 = var2;
                            var9 = var1;
                            var8 = var5;
                            var1 = apply(var10, var9, var8);
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 21;
                            var1 = var6[var1];
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.chunk;
                            var1 = _closure2_slot16;
                            var1 = var2.bind(var4)(var5, var1);
                            return var1;
                        case 148:
                            var1 = global;
                            var2 = var1.Array;
                            var4 = _closure2_slot16;
                            var1 = 3;
                            var1 = var1 * var4;
                            var4 = undefined;
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.fill;
                            var3 = var1.bind(var2)(var3);
                            var2 = {};
                            var1 = 'camera';
                            var2.type = var1;
                            var1 = 0;
                            var3[var1] = var2;
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 21;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.chunk;
                            var0 = _closure2_slot16;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var16 = var33.bind(var22)(var16, var20);
                _closure2_slot24 = var16;
                var33 = var22.useCallback;
                var20 = new Array(1);
                var20[0] = var17;
                var17 = function() { // Environment: var8
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot7;
                    var1 = var0.CAMERA_BUTTON;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var33 = var33.bind(var22)(var17, var20);
                _closure2_slot25 = var33;
                var20 = var22.useCallback;
                var17 = new Array(1);
                var17[0] = var11;
                var11 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getNextAssetPage;
                    var1 = {};
                    var4 = _closure2_slot17;
                    var4 = var4.current;
                    var1.batchSize = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11 = var20.bind(var22)(var11, var17);
                var20 = var22.useCallback;
                var17 = new Array(14);
                var17[0] = var35;
                var17[1] = var34;
                var17[2] = var33;
                var17[3] = var24;
                var17[4] = var32;
                var17[5] = var9;
                var17[6] = var31;
                var17[7] = var30;
                var17[8] = var16;
                var17[9] = var29;
                var17[10] = var3;
                var17[11] = var28;
                var17[12] = var27;
                var17[13] = var15;
                var15 = function(arg0, arg1) { // Environment: var8
                    var5 = arg1;
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.draftType = var6;
                    var1.rowIndex = var5;
                    var6 = _closure2_slot23;
                    var1.totalNumItems = var6;
                    var6 = _closure2_slot0;
                    var1.channel = var6;
                    var6 = _closure2_slot16;
                    var1.numPerRow = var6;
                    var6 = _closure2_slot24;
                    var6 = var6[var5];
                    var1.items = var6;
                    var6 = _closure2_slot4;
                    var1.onPressItem = var6;
                    var6 = _closure2_slot5;
                    var1.onLongPressItem = var6;
                    var6 = _closure2_slot7;
                    var1.includedUploadIds = var6;
                    var6 = _closure2_slot9;
                    var1.uploadLimit = var6;
                    var6 = _closure2_slot10;
                    var1.disableWhenReachedLimit = var6;
                    var6 = _closure2_slot25;
                    var1.handleCameraPress = var6;
                    var6 = _closure2_slot3;
                    var1.handleAttachPress = var6;
                    var6 = _closure2_slot6;
                    var1.handleViewAllPhotosPress = var6;
                    var6 = _closure2_slot8;
                    var1.disabled = var6;
                    var0 = _closure2_slot24;
                    var7 = var0[var5];
                    var6 = var7.reduce;
                    var0 = var5.toString;
                    var5 = var0.bind(var5)();
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun70623: for (var _fun70623_ip = 0;;) switch (_fun70623_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = arg1;
                                var2 = null;
                                var0 = var5;
                                if (!(var2 != var1)) {
                                    _fun70623_ip = 261;
                                    continue _fun70623
                                }
                            case 18:
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var6 = 22;
                                var3 = var3[var6];
                                var4 = undefined;
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.isMediaCameraNode;
                                var3 = var3.bind(var7)(var1);
                                if (var3) {
                                    _fun70623_ip = 229;
                                    continue _fun70623
                                }
                            case 60:
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.isAttachFilesNode;
                                var3 = var3.bind(var7)(var1);
                                if (var3) {
                                    _fun70623_ip = 198;
                                    continue _fun70623
                                }
                            case 91:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var6];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.isViewAllPhotosNode;
                                var3 = var2.bind(var3)(var1);
                                var2 = global;
                                if (var3) {
                                    _fun70623_ip = 169;
                                    continue _fun70623
                                }
                            case 124:
                                var1 = var1.node;
                                var1 = var1.image;
                                var6 = var1.uri;
                                var1 = var2.HermesInternal;
                                var4 = var1.concat;
                                var3 = '';
                                var1 = '-';
                                var1 = var4.bind(var3)(var5, var1, var6);
                                _fun70623_ip = 196;
                                continue _fun70623;
                            case 169:
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-view-all';
                                var1 = var4.bind(var3)(var5, var2);
                            case 196:
                                _fun70623_ip = 227;
                                continue _fun70623;
                            case 198:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-attach';
                                var1 = var4.bind(var3)(var5, var2);
                            case 227:
                                _fun70623_ip = 258;
                                continue _fun70623;
                            case 229:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-camera';
                                var1 = var4.bind(var3)(var5, var2);
                            case 258:
                                var0 = var1;
                            case 261:
                                return var0;
                        }
                    };
                    var0 = var6.bind(var7)(var0, var5);
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var17 = var20.bind(var22)(var15, var17);
                var20 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var26];
                var15 = var20.bind(var4)(var15);
                var15 = var15.bind(var4)();
                var26 = var15.width;
                _closure2_slot26 = var26;
                var20 = var22.useMemo;
                var15 = new Array(2);
                var15[0] = var26;
                var15[1] = var9;
                var9 = function() { // Environment: var8
                    var6 = _closure2_slot26;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 22;
                    var5 = var4[var0];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var7 = var5.PARENT_PADDING;
                    var5 = var4[var0];
                    var5 = var3.bind(var2)(var5);
                    var8 = var5.CHILD_PADDING;
                    var9 = _closure2_slot16;
                    var5 = 1;
                    var5 = var9 - var5;
                    var5 = var8 * var5;
                    var5 = var7 + var5;
                    var5 = var6 - var5;
                    var1 = _closure2_slot16;
                    var1 = var5 / var1;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.SEPARATOR_SIZE;
                    var0 = var1 + var0;
                    return var0;
                };
                var15 = var20.bind(var22)(var9, var15);
                var20 = var22.useCallback;
                var9 = new Array(2);
                var9[0] = var24;
                var9[1] = var3;
                var3 = function() { // Environment: var8
                    var0 = _closure2_slot11;
                    return var0;
                };
                var9 = var20.bind(var22)(var3, var9);
                if (!var7) {
                    _fun70606_ip = 1168;
                    continue _fun70606
                }
            case 1165:
                var5 = var0;
            case 1168:
                _closure2_slot27 = var5;
                var26 = _closure1_slot4;
                var20 = var26.useMemo;
                var3 = new Array(1);
                var3[0] = var5;
                var0 = function() { // Environment: var8
                    var0 = {};
                    var1 = _closure2_slot27;
                    var0.height = var1;
                    return var0;
                };
                var20 = var20.bind(var26)(var0, var3);
                var0 = _closure1_slot9;
                var0 = var0.LIMITED;
                var22 = var23 === var0;
                var3 = var26.useState;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot6;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var1 = var0.fontScale;
                    var0 = 36;
                    var1 = var0 * var1;
                    var0 = 32;
                    var0 = var0 + var1;
                    return var0;
                };
                var3 = var3.bind(var26)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var3, var21);
                var21 = var0[var18];
                var27 = var0[var2];
                var24 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 23;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.onHeightChange = var27;
                var0 = var24.bind(var4)(var2, var0);
                _closure2_slot28 = var0;
                var24 = var26.useCallback;
                var2 = function() { // Environment: var8
                    var0 = _closure2_slot28;
                    return var0;
                };
                var0 = new Array(0);
                var24 = var24.bind(var26)(var2, var0);
                var2 = _closure1_slot0;
                var0 = 24;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.getMediaEmptyStateComponentOrNull;
                var0 = {};
                var0.photoPermissionStatus = var23;
                var23 = var1 != var25;
                if (!var23) {
                    _fun70606_ip = 1365;
                    continue _fun70606
                }
            case 1350:
                var25 = var25.edges;
                var25 = var25.length;
                var23 = var18 === var25;
            case 1365:
                var0.photosEmpty = var23;
                var23 = function() {
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot7;
                    var1 = var0.TAKE_A_PHOTO_BUTTON;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPressCamera = var23;
                var8 = function() {
                    _fun70630: for (var _fun70630_ip = 0;;) switch (_fun70630_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var2 = var0.NativePermissionManager;
                            var4 = null;
                            var1 = var4 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun70630_ip = 49;
                                continue _fun70630
                            }
                        case 24:
                            var1 = var2.presentLimitedLibraryPicker;
                            var1 = var4 == var1;
                            var0 = undefined;
                            if (var1) {
                                _fun70630_ip = 49;
                                continue _fun70630
                            }
                        case 39:
                            var1 = var2.presentLimitedLibraryPicker;
                            var0 = var1.bind(var2)();
                        case 49:
                            return var0;
                    }
                };
                var0.onPressLimitedPicker = var8;
                var23 = _closure1_slot1;
                var25 = _closure1_slot2;
                var8 = 25;
                var8 = var25[var8];
                var8 = var23.bind(var4)(var8);
                var0.onPressPrivacySettings = var8;
                var0 = var2.bind(var3)(var0);
                if (!(var1 == var0)) {
                    _fun70606_ip = 1721;
                    continue _fun70606
                }
            case 1431:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 26;
                var1 = var1[var8];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var23 = undefined;
                if (!var22) {
                    _fun70606_ip = 1465;
                    continue _fun70606
                }
            case 1462:
                var23 = var24;
            case 1465:
                var1.renderHeader = var23;
                var18 = 0;
                if (!var22) {
                    _fun70606_ip = 1478;
                    continue _fun70606
                }
            case 1475:
                var18 = var21;
            case 1478:
                var1.headerSize = var18;
                var18 = new Array(2);
                var18[0] = var20;
                var19 = var19.listContainer;
                var18[1] = var19;
                var1.style = var18;
                var1.renderItem = var17;
                var17 = var16.length;
                var16 = new Array(1);
                var16[0] = var17;
                var1.sections = var16;
                var1.itemSize = var15;
                var1.inActionSheet = var14;
                var1.preserveScrollMomentum = var14;
                var1.automaticallyAdjustsScrollIndicatorInsets = var13;
                var14 = 'none';
                var1.keyboardDismissMode = var14;
                var1.onEndReached = var11;
                var1.onScroll = var10;
                var10 = 400;
                var1.endReachedThreshold = var10;
                var10 = 'list';
                var1.accessibilityRole = var10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = 27;
                var15 = var10[var14];
                var15 = var11.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var10[var14];
                var14 = var11.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.XONG6A;
                var14 = var15.bind(var16)(var14);
                var1.accessibilityLabel = var14;
                var1.showsVerticalScrollIndicator = var13;
                var10 = var10[var12];
                var10 = var11.bind(var4)(var10);
                var10 = var10.FOOTER_HEIGHT;
                var1.footerSize = var10;
                var1.renderFooter = var9;
                var1.chunkBase = var5;
                var5 = undefined;
                if (var7) {
                    _fun70606_ip = 1710;
                    continue _fun70606
                }
            case 1687:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var4)(var6);
                var5 = var6.MINIMUM_BATCHES_TO_RENDER;
            case 1710:
                var1.batchesToRender = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1721:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1465, 1566, 4908, 4009, 33, 1297, 671, 8772, 8776, 3717, 8783, 8785, 8788, 1568, 1464, 4753, 4909, 5332, 22, 8773, 8790, 8791, 4019, 6549, 1234, 2]);