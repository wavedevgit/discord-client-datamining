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
    var7 = 'function MediaKeyboardListTsx1(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function MediaKeyboardListTsx2(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun75793: for (var _fun75793_ip = 0;;) switch (_fun75793_ip) {
            case 0:
                var1 = arg0;
                var32 = var1.channel;
                var _closure2_slot0 = var32;
                var31 = var1.draftType;
                var _closure2_slot1 = var31;
                var14 = var1.onPressCamera;
                var _closure2_slot2 = var14;
                var29 = var1.onAttachPress;
                var _closure2_slot3 = var29;
                var28 = var1.onPressItem;
                var _closure2_slot4 = var28;
                var27 = var1.onLongPressItem;
                var _closure2_slot5 = var27;
                var18 = var1.onViewAll;
                var _closure2_slot6 = var18;
                var26 = var1.includedUploadIds;
                var _closure2_slot7 = var26;
                var0 = var1.uploadDisabled;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun75793_ip = 98;
                    continue _fun75793
                }
            case 96:
                var0 = false;
            case 98:
                var _closure2_slot8 = var0;
                var25 = var1.uploadLimit;
                var _closure2_slot9 = var25;
                var19 = var1.disableWhenReachedLimit;
                var _closure2_slot10 = var19;
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
                var24 = _closure1_slot4;
                var1 = var24.useRef;
                var11 = true;
                var1 = var1.bind(var24)(var11);
                _closure2_slot11 = var1;
                var3 = var24.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var20
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
                var8 = var3.bind(var24)(var1, var2);
                var2 = var24.useState;
                var1 = null;
                var2 = var2.bind(var24)(var1);
                var5 = _closure1_slot3;
                var21 = 2;
                var3 = var5.bind(var4)(var2, var21);
                var15 = 0;
                var22 = var3[var15];
                _closure2_slot12 = var22;
                var2 = 1;
                var3 = var3[var2];
                _closure2_slot13 = var3;
                var13 = _closure1_slot1;
                var38 = _closure1_slot2;
                var3 = 11;
                var3 = var38[var3];
                var6 = var13.bind(var4)(var3);
                var3 = var6.useAssets;
                var23 = var3.bind(var6)();
                _closure2_slot14 = var23;
                var37 = _closure1_slot0;
                var3 = 12;
                var3 = var38[var3];
                var6 = var37.bind(var4)(var3);
                var3 = var6.useMediaKeyboardItemsPerRow;
                var3 = var3.bind(var6)();
                var6 = var3.itemsPerRow;
                _closure2_slot15 = var6;
                var10 = var3.itemsPageSizeRef;
                _closure2_slot16 = var10;
                var12 = var24.useEffect;
                var7 = function() { // Environment: var20
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
                var3 = new Array(0);
                var3 = var12.bind(var24)(var7, var3);
                var12 = var24.useEffect;
                var7 = new Array(2);
                var7[0] = var22;
                var7[1] = var10;
                var3 = function() { // Environment: var20
                    _fun75797: for (var _fun75797_ip = 0;;) switch (_fun75797_ip) {
                        case 0:
                            var3 = _closure2_slot12;
                            var1 = _closure1_slot9;
                            var1 = var1.AUTHORIZED;
                            if (!(var3 !== var1)) {
                                _fun75797_ip = 48;
                                continue _fun75797
                            }
                        case 26:
                            var3 = _closure2_slot12;
                            var1 = _closure1_slot9;
                            var1 = var1.LIMITED;
                            if (!(var3 !== var1)) {
                                _fun75797_ip = 48;
                                continue _fun75797
                            }
                        case 44:
                            var1 = undefined;
                            return var1;
                        case 48:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
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
                                _fun75797_ip = 139;
                                continue _fun75797
                            }
                        case 110:
                            var5 = _closure1_slot11;
                            var4 = var5.addListener;
                            var3 = 'photoLibraryChanged';
                            var2 = function() { // Environment: var0
                                _fun75798: for (var _fun75798_ip = 0;;) switch (_fun75798_ip) {
                                    case 0:
                                        var0 = _closure2_slot11;
                                        var0 = var0.current;
                                        if (!var0) {
                                            _fun75798_ip = 67;
                                            continue _fun75798
                                        }
                                    case 15:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 11;
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
                                _fun75799: for (var _fun75799_ip = 0;;) switch (_fun75799_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun75799_ip = 27;
                                            continue _fun75799
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
                var3 = var12.bind(var24)(var3, var7);
                var3 = 13;
                var3 = var38[var3];
                var3 = var13.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var7 = var3.top;
                var12 = 14;
                var3 = var38[var12];
                var13 = var13.bind(var4)(var3);
                var3 = {};
                var3.ignoreKeyboard = var11;
                var3 = var13.bind(var4)(var3);
                var34 = var3.height;
                _closure2_slot17 = var34;
                var3 = _closure1_slot8;
                var33 = var34 * var3;
                _closure2_slot18 = var33;
                var3 = 15;
                var3 = var38[var3];
                var3 = var37.bind(var4)(var3);
                var3 = var3.NAV_BAR_HEIGHT_MULTILINE;
                var3 = var34 - var3;
                var30 = var3 - var7;
                _closure2_slot19 = var30;
                var3 = 16;
                var3 = var38[var3];
                var7 = var37.bind(var4)(var3);
                var3 = var7.useBottomSheetInternal;
                var3 = var3.bind(var7)();
                var17 = var3.animatedSnapPoints;
                _closure2_slot20 = var17;
                var7 = var24.useState;
                var3 = {};
                var3.minimum = var33;
                var3.maximum = var30;
                var3 = var7.bind(var24)(var3);
                var3 = var5.bind(var4)(var3, var21);
                var5 = var3[var15];
                var5 = var5.maximum;
                _closure2_slot21 = var5;
                var35 = var3[var2];
                _closure2_slot22 = var35;
                var36 = 17;
                var3 = var38[var36];
                var16 = var37.bind(var4)(var3);
                var13 = var16.useAnimatedReaction;
                var7 = function() {
                    var1 = _closure2_slot20;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = {};
                var3.animatedSnapPoints = var17;
                var7.__closure = var3;
                var3 = 11265068281555.0;
                var7.__workletHash = var3;
                var3 = _closure1_slot13;
                var7.__initData = var3;
                var3 = function arg0, arg1() {
                    _fun75801: for (var _fun75801_ip = 0;;) switch (_fun75801_ip) {
                        case 0:
                            var7 = arg0;
                            var5 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 18;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.cheapWorkletArrayShallowEqual;
                            var6 = null;
                            var8 = var6 != var5;
                            var2 = undefined;
                            if (!var8) {
                                _fun75801_ip = 51;
                                continue _fun75801
                            }
                        case 48:
                            var2 = var5;
                        case 51:
                            var2 = var3.bind(var4)(var7, var2);
                            if (var2) {
                                _fun75801_ip = 168;
                                continue _fun75801
                            }
                        case 60:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot22;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var4 = _closure2_slot17;
                            var3 = 0;
                            var3 = var7[var3];
                            if (!(var6 == var3)) {
                                _fun75801_ip = 117;
                                continue _fun75801
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
                                _fun75801_ip = 154;
                                continue _fun75801
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
                var17 = {};
                var39 = 18;
                var39 = var38[var39];
                var39 = var37.bind(var4)(var39);
                var39 = var39.cheapWorkletArrayShallowEqual;
                var17.cheapWorkletArrayShallowEqual = var39;
                var36 = var38[var36];
                var36 = var37.bind(var4)(var36);
                var36 = var36.runOnJS;
                var17.runOnJS = var36;
                var17.setBottomSheetState = var35;
                var17.windowHeight = var34;
                var17.computedStartHeight = var33;
                var17.maxDynamicContentSize = var30;
                var3.__closure = var17;
                var17 = 911665206857.0;
                var3.__workletHash = var17;
                var17 = _closure1_slot14;
                var3.__initData = var17;
                var3 = var13.bind(var16)(var7, var3);
                var3 = _closure1_slot12;
                var16 = var3.bind(var4)();
                var17 = var24.useMemo;
                var7 = var1 == var23;
                var3 = undefined;
                if (var7) {
                    _fun75793_ip = 804;
                    continue _fun75793
                }
            case 793:
                var7 = var23.edges;
                var3 = var7.length;
            case 804:
                var13 = new Array(2);
                var13[0] = var3;
                var7 = false;
                var13[1] = var7;
                var3 = function() { // Environment: var20
                    _fun75802: for (var _fun75802_ip = 0;;) switch (_fun75802_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun75802_ip = 33;
                                continue _fun75802
                            }
                        case 18:
                            var2 = _closure2_slot14;
                            var2 = var2.edges;
                            var0 = var2.length;
                        case 33:
                            var2 = var1 != var0;
                            var1 = 0;
                            if (!var2) {
                                _fun75802_ip = 45;
                                continue _fun75802
                            }
                        case 42:
                            var1 = var0;
                        case 45:
                            var0 = 1;
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var3 = var17.bind(var24)(var3, var13);
                _closure2_slot23 = var3;
                var24 = _closure1_slot4;
                var30 = var24.useMemo;
                var17 = new Array(3);
                var17[0] = var23;
                var17[1] = var7;
                var17[2] = var6;
                var13 = function() { // Environment: var20
                    _fun75803: for (var _fun75803_ip = 0;;) switch (_fun75803_ip) {
                        case 0:
                            var1 = _closure2_slot14;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun75803_ip = 148;
                                continue _fun75803
                            }
                        case 16:
                            var1 = _closure2_slot14;
                            var1 = var3 == var1;
                            var4 = undefined;
                            var7 = undefined;
                            if (var1) {
                                _fun75803_ip = 41;
                                continue _fun75803
                            }
                        case 31:
                            var1 = _closure2_slot14;
                            var7 = var1.edges;
                        case 41:
                            if (!(var3 == var7)) {
                                _fun75803_ip = 49;
                                continue _fun75803
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
                            var1 = 19;
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
                            var1 = 19;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.chunk;
                            var0 = _closure2_slot15;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var13 = var30.bind(var24)(var13, var17);
                _closure2_slot24 = var13;
                var30 = var24.useCallback;
                var17 = new Array(1);
                var17[0] = var14;
                var14 = function() { // Environment: var20
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot7;
                    var1 = var0.CAMERA_BUTTON;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var30 = var30.bind(var24)(var14, var17);
                _closure2_slot25 = var30;
                var17 = var24.useCallback;
                var14 = new Array(1);
                var14[0] = var10;
                var10 = function() { // Environment: var20
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
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
                var10 = var17.bind(var24)(var10, var14);
                var17 = var24.useCallback;
                var14 = new Array(14);
                var14[0] = var32;
                var14[1] = var31;
                var14[2] = var30;
                var14[3] = var18;
                var14[4] = var29;
                var14[5] = var6;
                var14[6] = var28;
                var14[7] = var27;
                var14[8] = var13;
                var14[9] = var26;
                var14[10] = var0;
                var14[11] = var25;
                var14[12] = var19;
                var14[13] = var3;
                var3 = function(arg0, arg1) { // Environment: var20
                    var5 = arg1;
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
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
                    var6 = _closure2_slot15;
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
                        _fun75807: for (var _fun75807_ip = 0;;) switch (_fun75807_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = arg1;
                                var2 = null;
                                var0 = var5;
                                if (!(var2 != var1)) {
                                    _fun75807_ip = 261;
                                    continue _fun75807
                                }
                            case 18:
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var6 = 20;
                                var3 = var3[var6];
                                var4 = undefined;
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.isMediaCameraNode;
                                var3 = var3.bind(var7)(var1);
                                if (var3) {
                                    _fun75807_ip = 229;
                                    continue _fun75807
                                }
                            case 60:
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.isAttachFilesNode;
                                var3 = var3.bind(var7)(var1);
                                if (var3) {
                                    _fun75807_ip = 198;
                                    continue _fun75807
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
                                    _fun75807_ip = 169;
                                    continue _fun75807
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
                                _fun75807_ip = 196;
                                continue _fun75807;
                            case 169:
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-view-all';
                                var1 = var4.bind(var3)(var5, var2);
                            case 196:
                                _fun75807_ip = 227;
                                continue _fun75807;
                            case 198:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var4 = var2.concat;
                                var3 = '';
                                var2 = '-attach';
                                var1 = var4.bind(var3)(var5, var2);
                            case 227:
                                _fun75807_ip = 258;
                                continue _fun75807;
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
                var14 = var17.bind(var24)(var3, var14);
                var17 = _closure1_slot1;
                var3 = _closure1_slot2;
                var12 = var3[var12];
                var12 = var17.bind(var4)(var12);
                var12 = var12.bind(var4)();
                var19 = var12.width;
                _closure2_slot26 = var19;
                var17 = var24.useMemo;
                var12 = new Array(2);
                var12[0] = var19;
                var12[1] = var6;
                var6 = function() { // Environment: var20
                    var6 = _closure2_slot26;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 20;
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
                var12 = var17.bind(var24)(var6, var12);
                var17 = var24.useCallback;
                var6 = new Array(2);
                var6[0] = var18;
                var6[1] = var0;
                var0 = function() { // Environment: var20
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 21;
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
                var6 = var17.bind(var24)(var0, var6);
                var18 = var24.useMemo;
                var17 = new Array(1);
                var17[0] = var5;
                var0 = function() { // Environment: var20
                    var0 = {};
                    var1 = _closure2_slot21;
                    var0.height = var1;
                    return var0;
                };
                var17 = var18.bind(var24)(var0, var17);
                var0 = _closure1_slot9;
                var0 = var0.LIMITED;
                var19 = var22 === var0;
                var18 = var24.useState;
                var0 = function() { // Environment: var20
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
                var18 = var18.bind(var24)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var18, var21);
                var18 = var0[var15];
                var0 = var0[var2];
                _closure2_slot27 = var0;
                var21 = var24.useCallback;
                var2 = function() { // Environment: var20
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 22;
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
                var21 = var21.bind(var24)(var2, var0);
                var2 = _closure1_slot0;
                var0 = 23;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.getMediaEmptyStateComponentOrNull;
                var0 = {};
                var0.photoPermissionStatus = var22;
                var22 = var1 != var23;
                if (!var22) {
                    _fun75793_ip = 1253;
                    continue _fun75793
                }
            case 1238:
                var23 = var23.edges;
                var23 = var23.length;
                var22 = var15 === var23;
            case 1253:
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
                var20 = function() {
                    _fun75814: for (var _fun75814_ip = 0;;) switch (_fun75814_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var2 = var0.NativePermissionManager;
                            var4 = null;
                            var1 = var4 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun75814_ip = 49;
                                continue _fun75814
                            }
                        case 24:
                            var1 = var2.presentLimitedLibraryPicker;
                            var1 = var4 == var1;
                            var0 = undefined;
                            if (var1) {
                                _fun75814_ip = 49;
                                continue _fun75814
                            }
                        case 39:
                            var1 = var2.presentLimitedLibraryPicker;
                            var0 = var1.bind(var2)();
                        case 49:
                            return var0;
                    }
                };
                var0.onPressLimitedPicker = var20;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var20 = 24;
                var20 = var23[var20];
                var20 = var22.bind(var4)(var20);
                var0.onPressPrivacySettings = var20;
                var0 = var2.bind(var3)(var0);
                if (!(var1 == var0)) {
                    _fun75793_ip = 1579;
                    continue _fun75793
                }
            case 1319:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var20 = _closure1_slot2;
                var1 = 25;
                var1 = var20[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var20 = undefined;
                if (!var19) {
                    _fun75793_ip = 1353;
                    continue _fun75793
                }
            case 1350:
                var20 = var21;
            case 1353:
                var1.renderHeader = var20;
                var15 = 0;
                if (!var19) {
                    _fun75793_ip = 1366;
                    continue _fun75793
                }
            case 1363:
                var15 = var18;
            case 1366:
                var1.headerSize = var15;
                var15 = new Array(2);
                var15[0] = var17;
                var16 = var16.listContainer;
                var15[1] = var16;
                var1.style = var15;
                var1.renderItem = var14;
                var14 = var13.length;
                var13 = new Array(1);
                var13[0] = var14;
                var1.sections = var13;
                var1.itemSize = var12;
                var1.inActionSheet = var11;
                var1.preserveScrollMomentum = var11;
                var1.automaticallyAdjustsScrollIndicatorInsets = var7;
                var11 = 'none';
                var1.keyboardDismissMode = var11;
                var1.onEndReached = var10;
                var1.onScroll = var8;
                var8 = 400;
                var1.endReachedThreshold = var8;
                var8 = 'list';
                var1.accessibilityRole = var8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 26;
                var11 = var9[var10];
                var11 = var8.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var9[var10];
                var10 = var8.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.XONG6A;
                var10 = var11.bind(var12)(var10);
                var1.accessibilityLabel = var10;
                var1.showsVerticalScrollIndicator = var7;
                var7 = 21;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.FOOTER_HEIGHT;
                var1.footerSize = var7;
                var1.renderFooter = var6;
                var1.chunkBase = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1579:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1465, 1566, 4932, 4014, 33, 1297, 671, 9591, 9598, 9601, 1568, 1464, 4703, 4933, 3720, 5302, 22, 9592, 9603, 9605, 9606, 4024, 6456, 1234, 2]);