// modules/channel_prompts/native/PromptPhotoActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.DraftType;
    var _closure1_slot6 = var6;
    var9 = 4;
    var6 = var5[var9];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.MediaKeyboardTarget;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.MessageSendLocation;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.NativePermissionTypes;
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot11 = var7;
    var6 = var6.jsxs;
    var _closure1_slot12 = var6;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 'relative';
    var8.position = var10;
    var10 = 10;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var8.backgroundColor = var12;
    var3.container = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.background = var8;
    var8 = {};
    var12 = 24;
    var8.paddingHorizontal = var12;
    var3.backgroundText = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'top': 0,
        'left': 0
    };
    var3.controls = var8;
    var8 = {
        'borderRadius': null,
        'height': 64,
        'width': 64,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xxl;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var8.backgroundColor = var12;
    var3.mainCTAWrapper = var8;
    var8 = {};
    var12 = 0.6;
    var8.opacity = var12;
    var3.disabled = var8;
    var8 = {
        'width': 36,
        'height': 36,
        'tintColor': '#fff'
    };
    var3.mainCTA = var8;
    var8 = {
        'height': 24,
        'width': 24,
        'tintColor': '#fff'
    };
    var3.icon = var8;
    var8 = {
        'height': 32,
        'width': 32,
        'tintColor': '#fff'
    };
    var3.galleryIcon = var8;
    var8 = {
        'position': 'absolute',
        'padding': 8,
        'borderRadius': null,
        'backgroundColor': 'rgba(0,0,0,0.3)'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xxl;
    var8.borderRadius = var10;
    var3.controlButton = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.bottomBar = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.errorText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_prompts/native/PromptPhotoActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80263: for (var _fun80263_ip = 0;;) switch (_fun80263_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.message;
                var _closure2_slot0 = var1;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var0 = var0.chatInputRef;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot14;
                var3 = undefined;
                var25 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.bottom;
                var27 = 8;
                var22 = var0 + var27;
                var0 = 12;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var14 = var0.width;
                var4 = var0.height;
                var0 = global;
                var2 = var0.Math;
                var1 = var2.floor;
                var0 = 0.85;
                var0 = var0 * var4;
                var13 = var1.bind(var2)(var0);
                var6 = _closure1_slot4;
                var0 = var6.useState;
                var24 = null;
                var0 = var0.bind(var6)(var24);
                var5 = _closure1_slot3;
                var4 = 2;
                var0 = var5.bind(var3)(var0, var4);
                var2 = 0;
                var10 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var9 = var6.useEffect;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var21
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.requestPermission;
                    var1 = _closure1_slot10;
                    var2 = var1.CAMERA;
                    var1 = {};
                    var5 = false;
                    var1.showAuthorizationError = var5;
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure2_slot3;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var9.bind(var6)(var0, var7);
                var0 = var6.useRef;
                var29 = var0.bind(var6)(var24);
                var0 = var6.useState;
                var12 = false;
                var0 = var0.bind(var6)(var12);
                var0 = var5.bind(var3)(var0, var4);
                var23 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var12);
                var0 = var5.bind(var3)(var0, var4);
                var7 = var0[var2];
                var _closure2_slot5 = var7;
                var0 = var0[var1];
                var _closure2_slot6 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var12);
                var0 = var5.bind(var3)(var0, var4);
                var26 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot7 = var0;
                var7 = var6.useState;
                var7 = var7.bind(var6)(var12);
                var7 = var5.bind(var3)(var7, var4);
                var18 = var7[var2];
                var _closure2_slot8 = var18;
                var7 = var7[var1];
                var _closure2_slot9 = var7;
                var11 = var6.useEffect;
                var9 = new Array(1);
                var9[0] = var18;
                var7 = function() { // Environment: var21
                    _fun80266: for (var _fun80266_ip = 0;;) switch (_fun80266_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var4 = undefined;
                            if (var1) {
                                _fun80266_ip = 16;
                                continue _fun80266
                            }
                        case 14:
                            return var4;
                        case 16:
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot9;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 4000;
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var7 = var11.bind(var6)(var7, var9);
                var9 = var6.useCallback;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var21
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var19 = var9.bind(var6)(var0, var7);
                var9 = new Array(0);
                var7 = var9.find;
                var0 = function(arg0) { // Environment: var21
                    _fun80270: for (var _fun80270_ip = 0;;) switch (_fun80270_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = arg0;
                            var2 = var1.position;
                            if (var0) {
                                _fun80270_ip = 28;
                                continue _fun80270
                            }
                        case 18:
                            var0 = 'back';
                            var0 = var0 === var2;
                            _fun80270_ip = 38;
                            continue _fun80270;
                        case 28:
                            var1 = 'front';
                            var0 = var1 === var2;
                        case 38:
                            return var0;
                    }
                };
                var28 = var7.bind(var9)(var0);
                var0 = var6.useState;
                var0 = var0.bind(var6)(var24);
                var0 = var5.bind(var3)(var0, var4);
                var16 = var0[var2];
                var _closure2_slot10 = var16;
                var0 = var0[var1];
                var _closure2_slot11 = var0;
                var2 = _closure1_slot11;
                var9 = _closure1_slot0;
                var0 = 14;
                var0 = var8[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var17 = true;
                var0.startExpanded = var17;
                var4 = var13 + var22;
                var0.startHeight = var4;
                var4 = var13 + var22;
                var0.contentHeight = var4;
                var0.header = var24;
                var6 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var11 = var25.container;
                var7 = new Array(2);
                var7[0] = var11;
                var11 = {};
                var11.width = var14;
                var11.height = var13;
                var7[1] = var11;
                var4.style = var7;
                var7 = {};
                var11 = var25.background;
                var7.style = var11;
                var15 = 15;
                var8 = var8[var15];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'heading-lg/bold',
                    'color': 'always-white'
                };
                var11 = var25.backgroundText;
                var8.style = var11;
                if (!(var12 !== var10)) {
                    _fun80263_ip = 664;
                    continue _fun80263
                }
            case 605:
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var10 = 16;
                var11 = var32[var10];
                var11 = var31.bind(var3)(var11);
                var30 = var11.intl;
                var11 = var30.string;
                var10 = var32[var10];
                var10 = var31.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["6ha5ko"];
                var10 = var11.bind(var30)(var10);
                _fun80263_ip = 724;
                continue _fun80263;
            case 664:
                var30 = _closure1_slot0;
                var33 = _closure1_slot2;
                var11 = 16;
                var31 = var33[var11];
                var31 = var30.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.format;
                var11 = var33[var11];
                var11 = var30.bind(var3)(var11);
                var11 = var11.t;
                var30 = var11.dNBlTw;
                var11 = {};
                var10 = var31.bind(var32)(var30, var11);
            case 724:
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7.children = var8;
                var8 = var2.bind(var3)(var5, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var9 = var24 != var28;
                var8 = null;
                if (!var9) {
                    _fun80263_ip = 869;
                    continue _fun80263
                }
            case 761:
                var11 = _closure1_slot11;
                var10 = _closure1_slot13;
                var9 = {};
                var9.ref = var29;
                var29 = {};
                var29.height = var13;
                var30 = '100%';
                var29.width = var30;
                var9.style = var29;
                var9.device = var28;
                var9.onInitialized = var19;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var19 = 17;
                var19 = var29[var19];
                var28 = var28.bind(var3)(var19);
                var19 = var28.isAndroid;
                var19 = var19.bind(var28)();
                if (var19) {
                    _fun80263_ip = 843;
                    continue _fun80263
                }
            case 840:
                var19 = !var23;
            case 843:
                var9.isActive = var19;
                var9.photo = var17;
                var9.audio = var12;
                var9.video = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 869:
                var7[1] = var8;
                var9 = var24 != var16;
                var8 = null;
                if (!var9) {
                    _fun80263_ip = 963;
                    continue _fun80263
                }
            case 882:
                var11 = _closure1_slot11;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 18;
                var9 = var12[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = {};
                var17 = 'absolute';
                var12.position = var17;
                var12.height = var13;
                var12.width = var14;
                var9.style = var12;
                var12 = {};
                var14 = var16.node;
                var14 = var14.image;
                var14 = var14.uri;
                var12.uri = var14;
                var9.source = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 963:
                var7[2] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot5;
                var8 = {};
                var12 = var25.controls;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var12.height = var13;
                var11[1] = var12;
                var8.style = var11;
                var11 = var24 == var16;
                var12 = null;
                if (!var11) {
                    _fun80263_ip = 1170;
                    continue _fun80263
                }
            case 1017:
                var14 = _closure1_slot11;
                var13 = _closure1_slot0;
                var29 = _closure1_slot2;
                var11 = 19;
                var11 = var29[var11];
                var11 = var13.bind(var3)(var11);
                var13 = var11.PressableOpacity;
                var11 = {};
                var19 = var25.controlButton;
                var17 = new Array(2);
                var17[0] = var19;
                var19 = {};
                var19.bottom = var22;
                var19.left = var27;
                var17[1] = var19;
                var11.style = var17;
                var17 = function() {
                    _fun80271: for (var _fun80271_ip = 0;;) switch (_fun80271_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun80271_ip = 93;
                                continue _fun80271
                            }
                        case 18:
                            var1 = var2.openCustomKeyboard;
                            var0 = {};
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 20;
                            var5 = var5[var3];
                            var3 = undefined;
                            var3 = var7.bind(var3)(var5);
                            var3 = var3.KeyboardTypes;
                            var3 = var3.MEDIA;
                            var0.type = var3;
                            var3 = {};
                            var4 = _closure1_slot8;
                            var4 = var4.CHAT;
                            var3.target = var4;
                            var0.context = var3;
                            var0 = var1.bind(var2)(var0);
                        case 93:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 21;
                            var2 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.createPendingReply;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var2.message = var7;
                            var6 = _closure2_slot1;
                            var2.channel = var6;
                            var6 = true;
                            var2.shouldMention = var6;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure1_slot1;
                            var1 = 22;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var11.onPress = var17;
                var17 = 'Image Gallery';
                var11.accessibilityLabel = var17;
                var17 = 'button';
                var11.accessibilityRole = var17;
                var28 = _closure1_slot1;
                var17 = 23;
                var17 = var29[var17];
                var19 = var28.bind(var3)(var17);
                var17 = {};
                var23 = 24;
                var23 = var29[var23];
                var23 = var28.bind(var3)(var23);
                var17.source = var23;
                var23 = var25.galleryIcon;
                var17.style = var23;
                var17 = var14.bind(var3)(var19, var17);
                var11.children = var17;
                var12 = var14.bind(var3)(var13, var11);
            case 1170:
                var11 = new Array(4);
                var11[0] = var12;
                var13 = var24 == var16;
                var12 = null;
                if (!var13) {
                    _fun80263_ip = 1346;
                    continue _fun80263
                }
            case 1190:
                var17 = _closure1_slot11;
                var14 = _closure1_slot0;
                var30 = _closure1_slot2;
                var13 = 19;
                var13 = var30[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.PressableOpacity;
                var13 = {};
                var23 = var25.controlButton;
                var19 = new Array(2);
                var19[0] = var23;
                var23 = {
                    'top': 8,
                    'right': 8
                };
                var19[1] = var23;
                var13.style = var19;
                var19 = function() {
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onPress = var19;
                var19 = 'Swap Camera';
                var13.accessibilityLabel = var19;
                var19 = 'button';
                var13.accessibilityRole = var19;
                var29 = _closure1_slot1;
                var19 = 23;
                var19 = var30[var19];
                var23 = var29.bind(var3)(var19);
                var19 = {};
                var28 = 25;
                var28 = var30[var28];
                var28 = var29.bind(var3)(var28);
                var19.source = var28;
                var28 = var25.icon;
                var19.style = var28;
                var19 = var17.bind(var3)(var23, var19);
                var13.children = var19;
                var12 = var17.bind(var3)(var14, var13);
            case 1346:
                var11[1] = var12;
                var13 = var24 != var16;
                var12 = null;
                if (!var13) {
                    _fun80263_ip = 1514;
                    continue _fun80263
                }
            case 1362:
                var17 = _closure1_slot11;
                var14 = _closure1_slot0;
                var29 = _closure1_slot2;
                var13 = 19;
                var13 = var29[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.PressableOpacity;
                var13 = {};
                var19 = function() {
                    _fun80274: for (var _fun80274_ip = 0;;) switch (_fun80274_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun80274_ip = 77;
                                continue _fun80274
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.handleSelectKeyboardItem;
                            var3 = _closure2_slot1;
                            var11 = var3.id;
                            var10 = _closure2_slot10;
                            var12 = var7;
                            var9 = true;
                            var8 = true;
                            var3 = var12[var6](var11, var10, var9, var8, var7);
                            var0 = _closure2_slot11;
                            var0 = var0.bind(var1)(var2);
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13.onPress = var19;
                var23 = var25.controlButton;
                var19 = new Array(2);
                var19[0] = var23;
                var23 = {};
                var23.bottom = var22;
                var23.right = var27;
                var19[1] = var23;
                var13.style = var19;
                var19 = 'Retake Photo';
                var13.accessibilityLabel = var19;
                var19 = 'button';
                var13.accessibilityRole = var19;
                var28 = _closure1_slot1;
                var19 = 23;
                var19 = var29[var19];
                var23 = var28.bind(var3)(var19);
                var19 = {};
                var27 = 27;
                var27 = var29[var27];
                var27 = var28.bind(var3)(var27);
                var19.source = var27;
                var27 = var25.icon;
                var19.style = var27;
                var19 = var17.bind(var3)(var23, var19);
                var13.children = var19;
                var12 = var17.bind(var3)(var14, var13);
            case 1514:
                var11[2] = var12;
                var14 = _closure1_slot12;
                var13 = _closure1_slot5;
                var12 = {};
                var19 = var25.bottomBar;
                var17 = new Array(2);
                var17[0] = var19;
                var19 = {};
                var19.bottom = var22;
                var17[1] = var19;
                var12.style = var17;
                var17 = 'box-none';
                var12.pointerEvents = var17;
                var17 = null;
                if (!var18) {
                    _fun80263_ip = 1681;
                    continue _fun80263
                }
            case 1572:
                var19 = _closure1_slot11;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var15 = var29[var15];
                var15 = var28.bind(var3)(var15);
                var18 = var15.Text;
                var15 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-feedback-critical'
                };
                var22 = var25.errorText;
                var15.style = var22;
                var22 = 16;
                var23 = var29[var22];
                var23 = var28.bind(var3)(var23);
                var27 = var23.intl;
                var23 = var27.string;
                var22 = var29[var22];
                var22 = var28.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["z++Kz/"];
                var22 = var23.bind(var27)(var22);
                var15.children = var22;
                var17 = var19.bind(var3)(var18, var15);
            case 1681:
                var15 = new Array(2);
                var15[0] = var17;
                var18 = _closure1_slot11;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 19;
                var17 = var22[var17];
                var17 = var19.bind(var3)(var17);
                var17 = var17.PressableOpacity;
                if (!(var24 == var16)) {
                    _fun80263_ip = 1863;
                    continue _fun80263
                }
            case 1726:
                var16 = {};
                var19 = function() {
                    _fun80277: for (var _fun80277_ip = 0;;) switch (_fun80277_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun80277_ip = 42;
                                continue _fun80277
                            }
                        case 13:
                            var4 = _closure2_slot4;
                            var2 = undefined;
                            var1 = true;
                            var3 = var4.bind(var2)(var1);
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            var0 = _closure2_slot9;
                            var0 = var0.bind(var2)(var1);
                        case 42:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16.onPress = var19;
                var22 = var25.mainCTAWrapper;
                var19 = new Array(2);
                var19[0] = var22;
                var22 = null;
                if (var26) {
                    _fun80263_ip = 1763;
                    continue _fun80263
                }
            case 1758:
                var22 = var25.disabled;
            case 1763:
                var19[1] = var22;
                var16.style = var19;
                var19 = !var26;
                var16.disabled = var19;
                var19 = 'Take Photo';
                var16.accessibilityLabel = var19;
                var19 = 'button';
                var16.accessibilityRole = var19;
                var23 = _closure1_slot11;
                var28 = _closure1_slot1;
                var29 = _closure1_slot2;
                var19 = 23;
                var19 = var29[var19];
                var22 = var28.bind(var3)(var19);
                var19 = {};
                var27 = 34;
                var27 = var29[var27];
                var27 = var28.bind(var3)(var27);
                var19.source = var27;
                var27 = var25.mainCTA;
                var19.style = var27;
                var19 = var23.bind(var3)(var22, var19);
                var16.children = var19;
                _fun80263_ip = 1998;
                continue _fun80263;
            case 1863:
                var19 = {};
                var21 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 28;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.parse;
                    var1 = _closure2_slot1;
                    var4 = '';
                    var7 = var5.bind(var6)(var1, var4);
                    var11 = _closure1_slot7;
                    var9 = var11.getUploads;
                    var6 = var1.id;
                    var4 = _closure1_slot6;
                    var5 = var4.ChannelMessage;
                    var9 = var9.bind(var11)(var6, var5);
                    var _closure3_slot0 = var9;
                    var6 = _closure1_slot0;
                    var5 = 21;
                    var5 = var3[var5];
                    var11 = var6.bind(var0)(var5);
                    var6 = var11.createPendingReply;
                    var5 = {};
                    var12 = _closure2_slot0;
                    var5.message = var12;
                    var5.channel = var1;
                    var12 = true;
                    var5.shouldMention = var12;
                    var5 = var6.bind(var11)(var5);
                    var5 = 29;
                    var5 = var3[var5];
                    var11 = var2.bind(var0)(var5);
                    var6 = var11.clearAll;
                    var5 = var1.id;
                    var4 = var4.ChannelMessage;
                    var4 = var6.bind(var11)(var5, var4);
                    var4 = 30;
                    var4 = var3[var4];
                    var6 = var2.bind(var0)(var4);
                    var5 = var6.sendMessage;
                    var16 = var1.id;
                    var1 = {};
                    var10 = _closure1_slot9;
                    var10 = var10.CHANNEL_PROMPT;
                    var1.location = var10;
                    var1.attachmentsToUpload = var9;
                    var8 = function arg0, arg1, arg2() {
                        _fun80276: for (var _fun80276_ip = 0;;) switch (_fun80276_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 31;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.handleUploadMessageAttachmentsErrors;
                                var3 = {};
                                var2 = arg0;
                                var3.file = var2;
                                var7 = _closure2_slot1;
                                var6 = var7.getGuildId;
                                var6 = var6.bind(var7)();
                                var3.guildId = var6;
                                var6 = new Array(0);
                                var3.analyticsLocations = var6;
                                var6 = arg1;
                                var3.code = var6;
                                var6 = arg2;
                                var3.reason = var6;
                                var3 = var4.bind(var5)(var3);
                                if (!var3) {
                                    _fun80276_ip = 214;
                                    continue _fun80276
                                }
                            case 94:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 29;
                                var3 = var5[var3];
                                var7 = var4.bind(var0)(var3);
                                var6 = var7.setUploads;
                                var3 = {};
                                var2 = _closure2_slot1;
                                var8 = var2.id;
                                var3.channelId = var8;
                                var8 = _closure3_slot0;
                                var3.uploads = var8;
                                var1 = _closure1_slot6;
                                var8 = var1.ChannelMessage;
                                var3.draftType = var8;
                                var8 = true;
                                var3.resetState = var8;
                                var3 = var6.bind(var7)(var3);
                                var3 = 32;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.saveDraft;
                                var3 = var2.id;
                                var2 = var1.ChannelMessage;
                                var1 = '';
                                var1 = var4.bind(var5)(var3, var1, var2);
                            case 214:
                                return var0;
                        }
                    };
                    var1.onAttachmentUploadError = var8;
                    var17 = var6;
                    var15 = var7;
                    var14 = undefined;
                    var13 = var1;
                    var1 = var17[var5](var16, var15, var14, var13, var12);
                    var1 = 22;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var19.onPress = var21;
                var21 = var25.mainCTAWrapper;
                var19.style = var21;
                var21 = !var26;
                var19.disabled = var21;
                var21 = 'Send Photo';
                var19.accessibilityLabel = var21;
                var21 = 'button';
                var19.accessibilityRole = var21;
                var22 = _closure1_slot11;
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var20 = 23;
                var20 = var28[var20];
                var21 = var27.bind(var3)(var20);
                var20 = {};
                var23 = 33;
                var23 = var28[var23];
                var23 = var27.bind(var3)(var23);
                var20.source = var23;
                var27 = var25.mainCTA;
                var23 = new Array(2);
                var23[0] = var27;
                var24 = null;
                if (var26) {
                    _fun80263_ip = 1977;
                    continue _fun80263
                }
            case 1972:
                var24 = var25.disabled;
            case 1977:
                var23[1] = var24;
                var20.style = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19.children = var20;
                var16 = var19;
            case 1998:
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4000, 3999, 1566, 1346, 4013, 33, 1297, 671, 1568, 1464, 4014, 4933, 3942, 1234, 478, 4704, 4904, 1567, 9337, 3279, 4086, 4824, 10217, 9490, 7931, 5639, 7678, 6593, 7679, 6548, 10218, 9665, 2]);