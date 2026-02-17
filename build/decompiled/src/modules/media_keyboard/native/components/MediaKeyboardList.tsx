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
        _fun76064: for (var _fun76064_ip = 0;;) switch (_fun76064_ip) {
            case 0:
                var0 = arg0;
                var34 = var0.channel;
                var _closure2_slot0 = var34;
                var33 = var0.draftType;
                var _closure2_slot1 = var33;
                var16 = var0.onPressCamera;
                var _closure2_slot2 = var16;
                var31 = var0.onAttachPress;
                var _closure2_slot3 = var31;
                var30 = var0.onPressItem;
                var _closure2_slot4 = var30;
                var29 = var0.onLongPressItem;
                var _closure2_slot5 = var29;
                var23 = var0.onViewAll;
                var _closure2_slot6 = var23;
                var28 = var0.includedUploadIds;
                var _closure2_slot7 = var28;
                var3 = var0.uploadDisabled;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun76064_ip = 98;
                    continue _fun76064
                }
            case 96:
                var3 = false;
            case 98:
                var _closure2_slot8 = var3;
                var27 = var0.uploadLimit;
                var _closure2_slot9 = var27;
                var26 = var0.disableWhenReachedLimit;
                var _closure2_slot10 = var26;
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
                var21 = _closure1_slot4;
                var0 = var21.useRef;
                var13 = true;
                var0 = var0.bind(var21)(var13);
                _closure2_slot11 = var0;
                var2 = var21.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var8
                    var1 = _closure2_slot11;
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
                var11 = var2.bind(var21)(var0, var1);
                var0 = var21.useState;
                var1 = null;
                var0 = var0.bind(var21)(var1);
                var5 = _closure1_slot3;
                var20 = 2;
                var0 = var5.bind(var4)(var0, var20);
                var17 = 0;
                var22 = var0[var17];
                _closure2_slot12 = var22;
                var2 = 1;
                var0 = var0[var2];
                _closure2_slot13 = var0;
                var10 = _closure1_slot1;
                var40 = _closure1_slot2;
                var0 = 13;
                var0 = var40[var0];
                var7 = var10.bind(var4)(var0);
                var0 = var7.useAssets;
                var24 = var0.bind(var7)();
                _closure2_slot14 = var24;
                var39 = _closure1_slot0;
                var0 = 14;
                var0 = var40[var0];
                var7 = var39.bind(var4)(var0);
                var0 = var7.useMediaKeyboardItemsPerRow;
                var0 = var0.bind(var7)();
                var9 = var0.itemsPerRow;
                _closure2_slot15 = var9;
                var12 = var0.itemsPageSizeRef;
                _closure2_slot16 = var12;
                var14 = var21.useEffect;
                var7 = function() { // Environment: var8
                    var0 = _closure1_slot5;
                    var1 = var0.NativePermissionManager;
                    var0 = var1.requestPhotoAuthorization;
                    var2 = var0.bind(var1)();
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot13;
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
                var0 = var14.bind(var21)(var7, var0);
                var14 = var21.useEffect;
                var7 = new Array(2);
                var7[0] = var22;
                var7[1] = var12;
                var0 = function() { // Environment: var8
                    _fun76068: for (var _fun76068_ip = 0;;) switch (_fun76068_ip) {
                        case 0:
                            var3 = _closure2_slot12;
                            var1 = _closure1_slot9;
                            var1 = var1.AUTHORIZED;
                            if (!(var3 !== var1)) {
                                _fun76068_ip = 48;
                                continue _fun76068
                            }
                        case 26:
                            var3 = _closure2_slot12;
                            var1 = _closure1_slot9;
                            var1 = var1.LIMITED;
                            if (!(var3 !== var1)) {
                                _fun76068_ip = 48;
                                continue _fun76068
                            }
                        case 44:
                            var1 = undefined;
                            return var1;
                        case 48:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.refreshAssets;
                            var3 = {};
                            var6 = _closure2_slot16;
                            var6 = var6.current;
                            var3.batchSize = var6;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure1_slot11;
                            var3 = null;
                            var3 = var3 == var4;
                            if (var3) {
                                _fun76068_ip = 139;
                                continue _fun76068
                            }
                        case 110:
                            var5 = _closure1_slot11;
                            var4 = var5.addListener;
                            var3 = 'photoLibraryChanged';
                            var2 = function() { // Environment: var0
                                _fun76069: for (var _fun76069_ip = 0;;) switch (_fun76069_ip) {
                                    case 0:
                                        var0 = _closure2_slot11;
                                        var0 = var0.current;
                                        if (!var0) {
                                            _fun76069_ip = 67;
                                            continue _fun76069
                                        }
                                    case 15:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 13;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.refreshAssets;
                                        var0 = {};
                                        var3 = _closure2_slot16;
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
                                _fun76070: for (var _fun76070_ip = 0;;) switch (_fun76070_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun76070_ip = 27;
                                            continue _fun76070
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
                var0 = var14.bind(var21)(var0, var7);
                var0 = 15;
                var0 = var40[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var7 = var0.top;
                var25 = 16;
                var0 = var40[var25];
                var10 = var10.bind(var4)(var0);
                var0 = {};
                var0.ignoreKeyboard = var13;
                var0 = var10.bind(var4)(var0);
                var36 = var0.height;
                _closure2_slot17 = var36;
                var0 = _closure1_slot8;
                var35 = var36 * var0;
                _closure2_slot18 = var35;
                var0 = 17;
                var0 = var40[var0];
                var0 = var39.bind(var4)(var0);
                var0 = var0.NAV_BAR_HEIGHT_MULTILINE;
                var0 = var36 - var0;
                var32 = var0 - var7;
                _closure2_slot19 = var32;
                var0 = 18;
                var0 = var40[var0];
                var7 = var39.bind(var4)(var0);
                var0 = var7.useBottomSheetInternal;
                var0 = var0.bind(var7)();
                var19 = var0.animatedSnapPoints;
                _closure2_slot20 = var19;
                var10 = var0.animatedIndex;
                var7 = var21.useState;
                var0 = {};
                var0.minimum = var35;
                var0.maximum = var32;
                var0 = var7.bind(var21)(var0);
                var7 = var5.bind(var4)(var0, var20);
                var0 = var7[var17];
                var5 = var0.minimum;
                var0 = var0.maximum;
                var37 = var7[var2];
                _closure2_slot21 = var37;
                var38 = 12;
                var7 = var40[var38];
                var18 = var39.bind(var4)(var7);
                var15 = var18.useAnimatedReaction;
                var14 = function() {
                    var1 = _closure2_slot20;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.animatedSnapPoints = var19;
                var14.__closure = var7;
                var7 = 7279123713809.0;
                var14.__workletHash = var7;
                var7 = _closure1_slot15;
                var14.__initData = var7;
                var7 = function arg0, arg1() {
                    _fun76072: for (var _fun76072_ip = 0;;) switch (_fun76072_ip) {
                        case 0:
                            var7 = arg0;
                            var5 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.cheapWorkletArrayShallowEqual;
                            var6 = null;
                            var8 = var6 != var5;
                            var2 = undefined;
                            if (!var8) {
                                _fun76072_ip = 51;
                                continue _fun76072
                            }
                        case 48:
                            var2 = var5;
                        case 51:
                            var2 = var3.bind(var4)(var7, var2);
                            if (var2) {
                                _fun76072_ip = 168;
                                continue _fun76072
                            }
                        case 60:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot21;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var4 = _closure2_slot17;
                            var3 = 0;
                            var3 = var7[var3];
                            if (!(var6 == var3)) {
                                _fun76072_ip = 117;
                                continue _fun76072
                            }
                        case 113:
                            var3 = _closure2_slot18;
                        case 117:
                            var3 = var4 - var3;
                            var1.minimum = var3;
                            var4 = _closure2_slot17;
                            var8 = var7.length;
                            var3 = 1;
                            var3 = var8 - var3;
                            var3 = var7[var3];
                            if (!(var6 == var3)) {
                                _fun76072_ip = 154;
                                continue _fun76072
                            }
                        case 150:
                            var3 = _closure2_slot19;
                        case 154:
                            var3 = var4 - var3;
                            var1.maximum = var3;
                            var1 = var2.bind(var0)(var1);
                        case 168:
                            return var0;
                    }
                };
                var19 = {};
                var41 = 19;
                var41 = var40[var41];
                var41 = var39.bind(var4)(var41);
                var41 = var41.cheapWorkletArrayShallowEqual;
                var19.cheapWorkletArrayShallowEqual = var41;
                var38 = var40[var38];
                var38 = var39.bind(var4)(var38);
                var38 = var38.runOnJS;
                var19.runOnJS = var38;
                var19.setBottomSheetState = var37;
                var19.windowHeight = var36;
                var19.computedStartHeight = var35;
                var19.maxDynamicContentSize = var32;
                var7.__closure = var19;
                var19 = 4619753074319.0;
                var7.__workletHash = var19;
                var19 = _closure1_slot16;
                var7.__initData = var19;
                var7 = var15.bind(var18)(var14, var7);
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
                        _fun76075: for (var _fun76075_ip = 0;;) switch (_fun76075_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = 0.1;
                                var0 = var1 > var0;
                                if (!var0) {
                                    _fun76075_ip = 39;
                                    continue _fun76075
                                }
                            case 20:
                                var2 = _closure3_slot2;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var0 = !var1;
                            case 39:
                                if (!var0) {
                                    _fun76075_ip = 105;
                                    continue _fun76075
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
                var7 = var7.bind(var4)(var10);
                var10 = _closure1_slot12;
                var18 = var10.bind(var4)();
                var19 = var21.useMemo;
                var14 = var1 == var24;
                var10 = undefined;
                if (var14) {
                    _fun76064_ip = 824;
                    continue _fun76064
                }
            case 813:
                var14 = var24.edges;
                var10 = var14.length;
            case 824:
                var15 = new Array(2);
                var15[0] = var10;
                var10 = false;
                var15[1] = var10;
                var14 = function() { // Environment: var8
                    _fun76076: for (var _fun76076_ip = 0;;) switch (_fun76076_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun76076_ip = 33;
                                continue _fun76076
                            }
                        case 18:
                            var2 = _closure2_slot14;
                            var2 = var2.edges;
                            var0 = var2.length;
                        case 33:
                            var2 = var1 != var0;
                            var1 = 0;
                            if (!var2) {
                                _fun76076_ip = 45;
                                continue _fun76076
                            }
                        case 42:
                            var1 = var0;
                        case 45:
                            var0 = 1;
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var14 = var19.bind(var21)(var14, var15);
                _closure2_slot22 = var14;
                var21 = _closure1_slot4;
                var32 = var21.useMemo;
                var19 = new Array(3);
                var19[0] = var24;
                var19[1] = var10;
                var19[2] = var9;
                var15 = function() { // Environment: var8
                    _fun76077: for (var _fun76077_ip = 0;;) switch (_fun76077_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun76077_ip = 148;
                                continue _fun76077
                            }
                        case 16:
                            var1 = _closure2_slot14;
                            var1 = var3 == var1;
                            var4 = undefined;
                            var7 = undefined;
                            if (var1) {
                                _fun76077_ip = 41;
                                continue _fun76077
                            }
                        case 31:
                            var1 = _closure2_slot14;
                            var7 = var1.edges;
                        case 41:
                            if (!(var3 == var7)) {
                                _fun76077_ip = 49;
                                continue _fun76077
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
                            var1 = 20;
                            var1 = var6[var1];
                            var4 = var2.bind(var4)(var1);
                            var2 = var4.chunk;
                            var1 = _closure2_slot15;
                            var1 = var2.bind(var4)(var5, var1);
                            return var1;
                        case 148:
                            var1 = global;
                            var2 = var1.Array;
                            var4 = _closure2_slot15;
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
                            var1 = 20;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.chunk;
                            var0 = _closure2_slot15;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var15 = var32.bind(var21)(var15, var19);
                _closure2_slot23 = var15;
                var32 = var21.useCallback;
                var19 = new Array(1);
                var19[0] = var16;
                var16 = function() { // Environment: var8
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot7;
                    var1 = var0.CAMERA_BUTTON;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var32 = var32.bind(var21)(var16, var19);
                _closure2_slot24 = var32;
                var19 = var21.useCallback;
                var16 = new Array(1);
                var16[0] = var12;
                var12 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getNextAssetPage;
                    var1 = {};
                    var4 = _closure2_slot16;
                    var4 = var4.current;
                    var1.batchSize = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = var19.bind(var21)(var12, var16);
                var19 = var21.useCallback;
                var16 = new Array(14);
                var16[0] = var34;
                var16[1] = var33;
                var16[2] = var32;
                var16[3] = var23;
                var16[4] = var31;
                var16[5] = var9;
                var16[6] = var30;
                var16[7] = var29;
                var16[8] = var15;
                var16[9] = var28;
                var16[10] = var3;
                var16[11] = var27;
                var16[12] = var26;
                var16[13] = var14;
                var14 = function(arg0, arg1) { // Environment: var8
                    var5 = arg1;
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.draftType = var6;
                    var1.rowIndex = var5;
                    var6 = _closure2_slot22;
                    var1.totalNumItems = var6;
                    var6 = _closure2_slot0;
                    var1.channel = var6;
                    var6 = _closure2_slot15;
                    var1.numPerRow = var6;
                    var6 = _closure2_slot23;
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
                    var6 = _closure2_slot24;
                    var1.handleCameraPress = var6;
                    var6 = _closure2_slot3;
                    var1.handleAttachPress = var6;
                    var6 = _closure2_slot6;
                    var1.handleViewAllPhotosPress = var6;
                    var6 = _closure2_slot8;
                    var1.disabled = var6;
                    var0 = _closure2_slot23;
                    var7 = var0[var5];
                    var6 = var7.reduce;
                    var0 = var5.toString;
                    var5 = var0.bind(var5)();
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun76081: for (var _fun76081_ip = 0;;) switch (_fun76081_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = arg1;
                                var2 = null;
                                var0 = var5;
                                if (!(var2 != var1)) {
                                    _fun76081_ip = 261;
                                    continue _fun76081
                                }
                            case 18:
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var6 = 21;
                                var3 = var3[var6];
                                var4 = undefined;
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.isMediaCameraNode;
                                var3 = var3.bind(var7)(var1);
                                if (var3) {
                                    _fun76081_ip = 229;
                                    continue _fun76081
                                }
                            case 60:
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.isAttachFilesNode;
                                var3 = var3.bind(var7)(var1);
                                if (var3) {
                                    _fun76081_ip = 198;
                                    continue _fun76081
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
                                    _fun76081_ip = 169;
                                    continue _fun76081
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
                                _fun76081_ip = 196;
                                continue _fun76081;
                            case 169:
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-view-all';
                                var1 = var4.bind(var3)(var5, var2);
                            case 196:
                                _fun76081_ip = 227;
                                continue _fun76081;
                            case 198:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-attach';
                                var1 = var4.bind(var3)(var5, var2);
                            case 227:
                                _fun76081_ip = 258;
                                continue _fun76081;
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
                var16 = var19.bind(var21)(var14, var16);
                var19 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var25];
                var14 = var19.bind(var4)(var14);
                var14 = var14.bind(var4)();
                var25 = var14.width;
                _closure2_slot25 = var25;
                var19 = var21.useMemo;
                var14 = new Array(2);
                var14[0] = var25;
                var14[1] = var9;
                var9 = function() { // Environment: var8
                    var6 = _closure2_slot25;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 21;
                    var5 = var4[var0];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var7 = var5.PARENT_PADDING;
                    var5 = var4[var0];
                    var5 = var3.bind(var2)(var5);
                    var8 = var5.CHILD_PADDING;
                    var9 = _closure2_slot15;
                    var5 = 1;
                    var5 = var9 - var5;
                    var5 = var8 * var5;
                    var5 = var7 + var5;
                    var5 = var6 - var5;
                    var1 = _closure2_slot15;
                    var1 = var5 / var1;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.SEPARATOR_SIZE;
                    var0 = var1 + var0;
                    return var0;
                };
                var14 = var19.bind(var21)(var9, var14);
                var19 = var21.useCallback;
                var9 = new Array(2);
                var9[0] = var23;
                var9[1] = var3;
                var3 = function() { // Environment: var8
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot8;
                    var0.disabled = var5;
                    var4 = _closure2_slot6;
                    var0.onViewAll = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9 = var19.bind(var21)(var3, var9);
                if (!var7) {
                    _fun76064_ip = 1127;
                    continue _fun76064
                }
            case 1124:
                var5 = var0;
            case 1127:
                _closure2_slot26 = var5;
                var23 = _closure1_slot4;
                var19 = var23.useMemo;
                var3 = new Array(1);
                var3[0] = var5;
                var0 = function() { // Environment: var8
                    var0 = {};
                    var1 = _closure2_slot26;
                    var0.height = var1;
                    return var0;
                };
                var19 = var19.bind(var23)(var0, var3);
                var0 = _closure1_slot9;
                var0 = var0.LIMITED;
                var21 = var22 === var0;
                var3 = var23.useState;
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
                var3 = var3.bind(var23)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var3, var20);
                var20 = var0[var17];
                var0 = var0[var2];
                _closure2_slot27 = var0;
                var3 = var23.useCallback;
                var2 = function() { // Environment: var8
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot27;
                    var0.onHeightChange = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0 = new Array(0);
                var23 = var3.bind(var23)(var2, var0);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 24;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.getMediaEmptyStateComponentOrNull;
                var0 = {};
                var0.photoPermissionStatus = var22;
                var22 = var1 != var24;
                if (!var22) {
                    _fun76064_ip = 1291;
                    continue _fun76064
                }
            case 1276:
                var24 = var24.edges;
                var24 = var24.length;
                var22 = var17 === var24;
            case 1291:
                var0.photosEmpty = var22;
                var22 = function() {
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot7;
                    var1 = var0.TAKE_A_PHOTO_BUTTON;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPressCamera = var22;
                var8 = function() {
                    _fun76088: for (var _fun76088_ip = 0;;) switch (_fun76088_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var2 = var0.NativePermissionManager;
                            var4 = null;
                            var1 = var4 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun76088_ip = 49;
                                continue _fun76088
                            }
                        case 24:
                            var1 = var2.presentLimitedLibraryPicker;
                            var1 = var4 == var1;
                            var0 = undefined;
                            if (var1) {
                                _fun76088_ip = 49;
                                continue _fun76088
                            }
                        case 39:
                            var1 = var2.presentLimitedLibraryPicker;
                            var0 = var1.bind(var2)();
                        case 49:
                            return var0;
                    }
                };
                var0.onPressLimitedPicker = var8;
                var22 = _closure1_slot1;
                var24 = _closure1_slot2;
                var8 = 25;
                var8 = var24[var8];
                var8 = var22.bind(var4)(var8);
                var0.onPressPrivacySettings = var8;
                var0 = var2.bind(var3)(var0);
                if (!(var1 == var0)) {
                    _fun76064_ip = 1650;
                    continue _fun76064
                }
            case 1357:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 26;
                var1 = var1[var8];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var22 = undefined;
                if (!var21) {
                    _fun76064_ip = 1391;
                    continue _fun76064
                }
            case 1388:
                var22 = var23;
            case 1391:
                var1.renderHeader = var22;
                var17 = 0;
                if (!var21) {
                    _fun76064_ip = 1404;
                    continue _fun76064
                }
            case 1401:
                var17 = var20;
            case 1404:
                var1.headerSize = var17;
                var17 = new Array(2);
                var17[0] = var19;
                var18 = var18.listContainer;
                var17[1] = var18;
                var1.style = var17;
                var1.renderItem = var16;
                var16 = var15.length;
                var15 = new Array(1);
                var15[0] = var16;
                var1.sections = var15;
                var1.itemSize = var14;
                var1.inActionSheet = var13;
                var1.preserveScrollMomentum = var13;
                var1.automaticallyAdjustsScrollIndicatorInsets = var10;
                var13 = 'none';
                var1.keyboardDismissMode = var13;
                var1.onEndReached = var12;
                var1.onScroll = var11;
                var11 = 400;
                var1.endReachedThreshold = var11;
                var11 = 'list';
                var1.accessibilityRole = var11;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = 27;
                var14 = var12[var13];
                var14 = var11.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var11.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.XONG6A;
                var13 = var14.bind(var15)(var13);
                var1.accessibilityLabel = var13;
                var1.showsVerticalScrollIndicator = var10;
                var10 = 22;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.FOOTER_HEIGHT;
                var1.footerSize = var10;
                var1.renderFooter = var9;
                var1.chunkBase = var5;
                var5 = undefined;
                if (var7) {
                    _fun76064_ip = 1639;
                    continue _fun76064
                }
            case 1616:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var4)(var6);
                var5 = var6.MINIMUM_BATCHES_TO_RENDER;
            case 1639:
                var1.batchesToRender = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1650:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1465, 1566, 4941, 4011, 33, 1297, 671, 9626, 9629, 3719, 9635, 9638, 1568, 1464, 4710, 4942, 5365, 22, 9627, 9640, 9642, 9643, 4021, 6534, 1235, 2]);