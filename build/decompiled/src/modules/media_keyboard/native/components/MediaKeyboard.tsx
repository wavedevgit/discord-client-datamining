// modules/media_keyboard/native/components/MediaKeyboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.InAppCameraUsedCameraPreviewTypes;
    var _closure1_slot6 = var7;
    var7 = var3.MediaKeyboardTarget;
    var _closure1_slot7 = var7;
    var3 = var3.MediaPickerActionSheetEngagedActions;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var3 = var3.ChatInputComponentViewedTypes;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: MediaKeyboard, environment: var1
        var1 = arg0;
        var8 = var1.channel;
        var _closure2_slot0 = var8;
        var19 = var1.chatInputRef;
        var _closure2_slot1 = var19;
        var10 = var1.onClose;
        var4 = var1.transitionState;
        var13 = _closure1_slot3;
        var3 = var13.useEffect;
        var1 = var8.id;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = var8.guild_id;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot9;
            var2 = var1.CHAT_INPUT_COMPONENT_VIEWED;
            var1 = {};
            var5 = _closure1_slot10;
            var5 = var5.MEDIA_PICKER;
            var1.type = var5;
            var5 = _closure2_slot0;
            var6 = var5.id;
            var1.channel_id = var6;
            var5 = var5.guild_id;
            var1.guild_id = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = var3.bind(var13)(var1, var2);
        var1 = var13.useRef;
        var2 = null;
        var14 = var1.bind(var13)(var2);
        var _closure2_slot2 = var14;
        var12 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 9;
        var5 = var9[var1];
        var3 = undefined;
        var7 = var12.bind(var3)(var5);
        var6 = var7.useSharedValue;
        var5 = -1;
        var16 = var6.bind(var7)(var5);
        var _closure2_slot3 = var16;
        var1 = var9[var1];
        var6 = var12.bind(var3)(var1);
        var5 = var6.useSharedValue;
        var1 = 0;
        var15 = var5.bind(var6)(var1);
        var _closure2_slot4 = var15;
        var1 = 10;
        var1 = var9[var1];
        var6 = var12.bind(var3)(var1);
        var5 = var6.useKeyboardContextForType;
        var1 = 11;
        var1 = var9[var1];
        var1 = var12.bind(var3)(var1);
        var1 = var1.KeyboardTypes;
        var1 = var1.MEDIA;
        var1 = var5.bind(var6)(var1);
        var _closure2_slot5 = var1;
        var5 = 12;
        var5 = var9[var5];
        var7 = var12.bind(var3)(var5);
        var6 = var7.useAppLauncherActionSheet;
        var5 = {};
        var5.chatInputRef = var19;
        var5.channel = var8;
        var5 = var6.bind(var7)(var5);
        var11 = var5.appLauncherActionSheet;
        var5 = _closure1_slot1;
        var6 = 13;
        var6 = var9[var6];
        var7 = var5.bind(var3)(var6);
        var6 = {};
        var6.channel = var8;
        var6.context = var1;
        var6 = var7.bind(var3)(var6);
        var _closure2_slot6 = var6;
        var18 = var13.useMemo;
        var7 = new Array(6);
        var7[0] = var16;
        var7[1] = var8;
        var7[2] = var19;
        var7[3] = var1;
        var7[4] = var14;
        var7[5] = var6;
        var1 = function() { // Environment: var0
            var0 = function() { // Original name: onRestoreKeyboard, environment: var1
                _fun108269: for (var _fun108269_ip = 0;;) switch (_fun108269_ip) {
                    case 0:
                        var0 = _closure2_slot5;
                        var1 = var0.target;
                        var0 = _closure1_slot7;
                        var0 = var0.APP_LAUNCHER;
                        if (!(var1 !== var0)) {
                            _fun108269_ip = 98;
                            continue _fun108269
                        }
                    case 30:
                        var0 = _closure2_slot1;
                        var2 = var0.current;
                        var1 = var2.openCustomKeyboard;
                        var0 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 11;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.MEDIA;
                        var0.type = var4;
                        var3 = _closure2_slot5;
                        var0.context = var3;
                        var0 = var1.bind(var2)(var0);
                    case 98:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot0 = var0;
            var0 = function(arg0, arg1) { // Original name: onSelectFiles, environment: var1
                _fun108270: for (var _fun108270_ip = 0;;) switch (_fun108270_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg1;
                        var1 = _closure2_slot5;
                        var5 = var1.target;
                        var2 = _closure1_slot7;
                        var2 = var2.CHAT;
                        if (!(var5 !== var2)) {
                            _fun108270_ip = 123;
                            continue _fun108270
                        }
                    case 36:
                        var2 = _closure2_slot5;
                        var5 = var2.target;
                        var2 = _closure1_slot7;
                        var2 = var2.COMMAND;
                        if (!(var5 === var2)) {
                            _fun108270_ip = 167;
                            continue _fun108270
                        }
                    case 60:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 14;
                        var5 = var5[var2];
                        var2 = undefined;
                        var9 = var6.bind(var2)(var5);
                        var8 = var9.addAttachmentForCommand;
                        var2 = _closure2_slot0;
                        var14 = var2.id;
                        var13 = _closure2_slot1;
                        var2 = 0;
                        var12 = var4[var2];
                        var11 = _closure2_slot5;
                        var15 = var9;
                        var10 = var3;
                        var2 = var15[var8](var14, var13, var12, var11, var10, var9);
                        _fun108270_ip = 167;
                        continue _fun108270;
                    case 123:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.addImagesFromPicker;
                        var0 = _closure2_slot0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0, var4, var3);
                    case 167:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var0;
            var0 = function(arg0) { // Original name: onAttachFileParams, environment: var1
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = {};
                var3 = _closure2_slot0;
                var0.channel = var3;
                var2 = _closure2_slot6;
                var2 = var2.uploadLimit;
                var0.uploadLimit = var2;
                var2 = function() { // Original name: onDismissKeyboard, environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.dismissKeyboard;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.onDismissKeyboard = var2;
                var2 = _closure3_slot0;
                var0.onRestoreKeyboard = var2;
                var1 = function(arg0) { // Original name: onSelectFiles, environment: var1
                    var3 = _closure3_slot1;
                    var2 = _closure4_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var0.onSelectFiles = var1;
                return var0;
            };
            var _closure3_slot2 = var0;
            var0 = function(arg0) { // Original name: onSelectItem, environment: var1
                _fun108274: for (var _fun108274_ip = 0;;) switch (_fun108274_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.channelId;
                        var5 = var0.item;
                        var4 = var0.isIncluded;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 8;
                        var2 = var2[var0];
                        var0 = undefined;
                        var8 = var3.bind(var0)(var2);
                        var7 = var8.track;
                        var2 = _closure1_slot9;
                        var3 = var2.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                        var2 = {};
                        var9 = _closure1_slot8;
                        var9 = var9.MEDIA_SELECTED;
                        var2.action = var9;
                        var2 = var7.bind(var8)(var3, var2);
                        var3 = _closure2_slot5;
                        var7 = var3.target;
                        var3 = _closure1_slot7;
                        var3 = var3.CHAT;
                        if (!(var7 !== var3)) {
                            _fun108274_ip = 225;
                            continue _fun108274
                        }
                    case 108:
                        var3 = _closure2_slot5;
                        var7 = var3.target;
                        var3 = _closure1_slot7;
                        var3 = var3.COMMAND;
                        if (!(var7 === var3)) {
                            _fun108274_ip = 269;
                            continue _fun108274
                        }
                    case 135:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 14;
                        var7 = var12[var3];
                        var8 = var11.bind(var0)(var7);
                        var7 = var8.mediaNodeToUploadItem;
                        var15 = var7.bind(var8)(var5);
                        var3 = var12[var3];
                        var9 = var11.bind(var0)(var3);
                        var8 = var9.addAttachmentForCommand;
                        var16 = _closure2_slot1;
                        var14 = _closure2_slot5;
                        var2 = 16;
                        var2 = var12[var2];
                        var2 = var11.bind(var0)(var2);
                        var2 = var2.UploadOrigin;
                        var13 = var2.IMAGE_PICKER;
                        var18 = var9;
                        var17 = var6;
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12);
                        _fun108274_ip = 269;
                        continue _fun108274;
                    case 225:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 14;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleSelectKeyboardItem;
                        var14 = false;
                        var18 = var3;
                        var17 = var6;
                        var16 = var5;
                        var15 = var4;
                        var1 = var18[var2](var17, var16, var15, var14, var13);
                    case 269:
                        return var0;
                }
            };
            var _closure3_slot3 = var0;
            var0 = {};
            var2 = function() { // Original name: onAttachPress, environment: var1
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 14;
                var1 = var7[var0];
                var0 = undefined;
                var3 = var6.bind(var0)(var1);
                var2 = var3.handleAttachFile;
                var1 = {};
                var5 = _closure3_slot2;
                var4 = 16;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.UploadOrigin;
                var4 = var4.FILE_ATTACHMENT;
                var8 = var5.bind(var0)(var4);
                var9 = var1;
                var4 = copyDataProperties(var9, var8);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.onAttachPress = var2;
            var2 = function() { // Original name: onPressApps, environment: var1
                _fun108276: for (var _fun108276_ip = 0;;) switch (_fun108276_ip) {
                    case 0:
                        var0 = _closure2_slot1;
                        var3 = var0.current;
                        var2 = var3.openCustomKeyboard;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 11;
                        var4 = var8[var0];
                        var0 = undefined;
                        var4 = var7.bind(var0)(var4);
                        var4 = var4.KeyboardTypes;
                        var4 = var4.APP_LAUNCHER;
                        var1.type = var4;
                        var4 = {};
                        var6 = _closure1_slot11;
                        var6 = var6.HOME;
                        var4.initialRouteName = var6;
                        var6 = 17;
                        var6 = var8[var6];
                        var7 = var7.bind(var0)(var6);
                        var6 = var7.getAppDMApplication;
                        var5 = _closure2_slot0;
                        var6 = var6.bind(var7)(var5);
                        var5 = null;
                        var7 = var5 == var6;
                        var5 = undefined;
                        if (var7) {
                            _fun108276_ip = 121;
                            continue _fun108276
                        }
                    case 116:
                        var5 = var6.name;
                    case 121:
                        var4.initialSearchQuery = var5;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var0.onPressApps = var2;
            var2 = function() { // Original name: onPressGift, environment: var1
                var4 = _closure2_slot1;
                var1 = var4.current;
                var0 = var1.closeCustomKeyboard;
                var0 = var0.bind(var1)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.handleSelectGift;
                var1 = new Array(0);
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            };
            var0.onPressGift = var2;
            var2 = function() { // Original name: onPressThread, environment: var1
                var0 = _closure2_slot1;
                var2 = var0.current;
                var0 = var2.closeCustomKeyboard;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 18;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.navigateToThreadCreation;
                var2 = _closure2_slot0;
                var1 = 'MediaKeyboard';
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var0.onPressThread = var2;
            var2 = function(arg0) { // Original name: onPressCamera, environment: var1
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 14;
                var1 = var7[var0];
                var0 = undefined;
                var3 = var6.bind(var0)(var1);
                var2 = var3.handleCameraDialog;
                var1 = {};
                var5 = _closure3_slot2;
                var4 = 16;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.UploadOrigin;
                var4 = var4.IMAGE_PICKER;
                var8 = var5.bind(var0)(var4);
                var9 = var1;
                var4 = copyDataProperties(var9, var8);
                var5 = arg0;
                var4 = 'previewType';
                var1[var4] = var5;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.onPressCamera = var2;
            var2 = function() { // Original name: onPressHeader, environment: var1
                _fun108280: for (var _fun108280_ip = 0;;) switch (_fun108280_ip) {
                    case 0:
                        var2 = _closure2_slot3;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun108280_ip = 49;
                            continue _fun108280
                        }
                    case 22:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun108280_ip = 74;
                            continue _fun108280
                        }
                    case 37:
                        var1 = var2.collapse;
                        var1 = var1.bind(var2)();
                        _fun108280_ip = 74;
                        continue _fun108280;
                    case 49:
                        var0 = _closure2_slot2;
                        var1 = var0.current;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun108280_ip = 74;
                            continue _fun108280
                        }
                    case 64:
                        var0 = var1.expand;
                        var0 = var0.bind(var1)();
                    case 74:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPressHeader = var2;
            var2 = function() { // Original name: onViewAll, environment: var1
                _fun108281: for (var _fun108281_ip = 0;;) switch (_fun108281_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 14;
                        var1 = var4[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var1);
                        var5 = var6.handleViewAllDialog;
                        var2 = {};
                        var7 = _closure3_slot2;
                        var1 = 16;
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.UploadOrigin;
                        var1 = var1.IMAGE_PICKER;
                        var9 = var7.bind(var0)(var1);
                        var10 = var2;
                        var1 = copyDataProperties(var10, var9);
                        var7 = _closure2_slot6;
                        var8 = var7.draftType;
                        var7 = 'draftType';
                        var2[var7] = var8;
                        var2 = var5.bind(var6)(var2);
                        var2 = 19;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun108281_ip = 153;
                            continue _fun108281
                        }
                    case 128:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun108281_ip = 153;
                            continue _fun108281
                        }
                    case 143:
                        var1 = var2.collapse;
                        var1 = var1.bind(var2)();
                    case 153:
                        return var0;
                }
            };
            var0.onViewAll = var2;
            var2 = function(arg0) { // Original name: onPressItem, environment: var1
                var0 = arg0;
                var4 = var0.channelId;
                var3 = var0.item;
                var0 = var0.isIncluded;
                var2 = _closure3_slot3;
                var1 = {};
                var1.channelId = var4;
                var1.item = var3;
                var1.isIncluded = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onPressItem = var2;
            var2 = function(arg0) { // Original name: onLongPressItem, environment: var1
                _fun108283: for (var _fun108283_ip = 0;;) switch (_fun108283_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.channelId;
                        var _closure4_slot0 = var8;
                        var9 = var0.item;
                        var _closure4_slot1 = var9;
                        var2 = var0.isIncluded;
                        var _closure4_slot2 = var2;
                        var0 = undefined;
                        var _closure4_slot3 = var0;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 14;
                        var3 = var7[var3];
                        var6 = var5.bind(var0)(var3);
                        var3 = var6.mediaNodeToUploadItem;
                        var6 = var3.bind(var6)(var9);
                        var3 = 20;
                        var3 = var7[var3];
                        var3 = var5.bind(var0)(var3);
                        var3 = var3.CloudUpload;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var3
                            }
                        });
                        var13 = var5;
                        var12 = var6;
                        var11 = var8;
                        var3 = new var13[var3](var12, var11, var10);
                        var7 = var3 instanceof Object ? var3 : var5;
                        var6 = undefined;
                        if (!var2) {
                            _fun108283_ip = 154;
                            continue _fun108283
                        }
                    case 122:
                        var9 = _closure1_slot5;
                        var5 = var9.getUpload;
                        var3 = var7.id;
                        var2 = _closure1_slot4;
                        var2 = var2.ChannelMessage;
                        var6 = var5.bind(var9)(var8, var3, var2);
                    case 154:
                        var5 = null;
                        var2 = var5 == var6;
                        var3 = undefined;
                        if (var2) {
                            _fun108283_ip = 172;
                            continue _fun108283
                        }
                    case 165:
                        var3 = function() { // Environment: var4
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.handleSelectKeyboardItem;
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot1;
                            var7 = _closure4_slot2;
                            var6 = false;
                            var10 = var5;
                            var0 = var10[var4](var9, var8, var7, var6, var5);
                            return var0;
                        };
                    case 172:
                        _closure4_slot3 = var3;
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 21;
                        var1 = var9[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var1.channelId = var8;
                        var8 = var5 == var6;
                        var1.disableAddDescription = var8;
                        var8 = var5 == var6;
                        var1.disableSpoiler = var8;
                        if (!(var5 != var6)) {
                            _fun108283_ip = 227;
                            continue _fun108283
                        }
                    case 224:
                        var7 = var6;
                    case 227:
                        var1.upload = var7;
                        var6 = var5 == var6;
                        var5 = undefined;
                        if (!var6) {
                            _fun108283_ip = 248;
                            continue _fun108283
                        }
                    case 241:
                        var5 = function() { // Environment: var4
                            var2 = _closure3_slot3;
                            var1 = {};
                            var3 = _closure4_slot0;
                            var1.channelId = var3;
                            var3 = _closure4_slot1;
                            var1.item = var3;
                            var0 = _closure4_slot2;
                            var1.isIncluded = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                    case 248:
                        var1.onAdd = var5;
                        var4 = function(arg0) { // Original name: onEdit, environment: var4
                            _fun108286: for (var _fun108286_ip = 0;;) switch (_fun108286_ip) {
                                case 0:
                                    var2 = _closure4_slot3;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun108286_ip = 23;
                                        continue _fun108286
                                    }
                                case 13:
                                    var1 = _closure4_slot3;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 23:
                                    var3 = _closure3_slot1;
                                    var2 = new Array(1);
                                    var0 = arg0;
                                    var2[0] = var0;
                                    var4 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 16;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var4.bind(var0)(var1);
                                    var1 = var1.UploadOrigin;
                                    var1 = var1.IMAGE_EDITOR;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var1.onEdit = var4;
                        var1.onRemove = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                }
            };
            var0.onLongPressItem = var2;
            var2 = function() { // Original name: onPollsPress, environment: var1
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var2 = var3[var0];
                var0 = undefined;
                var8 = var4.bind(var0)(var2);
                var7 = var8.track;
                var2 = _closure1_slot9;
                var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                var5 = {};
                var2 = _closure1_slot10;
                var2 = var2.POLLS;
                var5.type = var2;
                var4 = _closure2_slot0;
                var9 = var4.id;
                var5.channel_id = var9;
                var9 = var4.guild_id;
                var5.guild_id = var9;
                var5 = var7.bind(var8)(var6, var5);
                var2 = _closure2_slot1;
                var5 = var2.current;
                var2 = var5.closeCustomKeyboard;
                var2 = var2.bind(var5)();
                var2 = _closure1_slot0;
                var1 = 22;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openCreatePollModal;
                var1 = {};
                var1.channel = var4;
                var4 = _closure3_slot0;
                var1.onCancel = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0.onPollsPress = var2;
            var1 = function() { // Original name: onSend, environment: var1
                _fun108288: for (var _fun108288_ip = 0;;) switch (_fun108288_ip) {
                    case 0:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun108288_ip = 28;
                            continue _fun108288
                        }
                    case 18:
                        var1 = var2.collapse;
                        var1 = var1.bind(var2)();
                    case 28:
                        var0 = _closure2_slot1;
                        var1 = var0.current;
                        var0 = var1.handleSend;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onSend = var1;
            return var0;
        };
        var7 = var18.bind(var13)(var1, var7);
        var _closure2_slot7 = var7;
        var1 = 23;
        var18 = var9[var1];
        var18 = var12.bind(var3)(var18);
        var21 = var18.ChatInputIaMobileExperiment;
        var19 = var21.useConfig;
        var18 = {};
        var20 = 'MediaKeyboard';
        var18.location = var20;
        var18 = var19.bind(var21)(var18);
        var18 = var18.overflowButtonsOrder;
        var _closure2_slot8 = var18;
        var21 = var13.useMemo;
        var19 = new Array(6);
        var19[0] = var7;
        var22 = var6.uploadDisabled;
        var19[1] = var22;
        var22 = var6.canPostPolls;
        var19[2] = var22;
        var22 = var6.canStartThreads;
        var19[3] = var22;
        var22 = var6.isAppLauncherEnabled;
        var19[4] = var22;
        var19[5] = var18;
        var18 = function() { // Environment: var0
            var2 = {};
            var3 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 24;
            var1 = var8[var5];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var9 = var1.intl;
            var4 = var9.string;
            var1 = var8[var5];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.RgIi2B;
            var1 = var4.bind(var9)(var1);
            var3.text = var1;
            var1 = 25;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.PollsIcon;
            var3.IconComponent = var1;
            var9 = _closure2_slot7;
            var4 = var9.onPollsPress;
            var3.onPress = var4;
            var4 = _closure2_slot6;
            var10 = var4.canPostPolls;
            var10 = !var10;
            var3.disabled = var10;
            var2.polls = var3;
            var3 = {};
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10["8Hvr3+"];
            var10 = var11.bind(var12)(var10);
            var3.text = var10;
            var10 = 26;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.AttachmentIcon;
            var3.IconComponent = var10;
            var10 = var9.onAttachPress;
            var3.onPress = var10;
            var10 = var4.uploadDisabled;
            var3.disabled = var10;
            var2.files = var3;
            var3 = {};
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.PHjkRE;
            var10 = var11.bind(var12)(var10);
            var3.text = var10;
            var10 = 27;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.AppsIcon;
            var3.IconComponent = var10;
            var10 = var9.onPressApps;
            var3.onPress = var10;
            var10 = var4.isAppLauncherEnabled;
            var10 = !var10;
            var3.disabled = var10;
            var2.apps = var3;
            var3 = {};
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10["7Xm5QI"];
            var10 = var11.bind(var12)(var10);
            var3.text = var10;
            var10 = 28;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.ThreadPlusIcon;
            var3.IconComponent = var10;
            var10 = var9.onPressThread;
            var3.onPress = var10;
            var10 = var4.canStartThreads;
            var10 = !var10;
            var3.disabled = var10;
            var2.thread = var3;
            var3 = {};
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.Ve9Ge6;
            var10 = var11.bind(var12)(var10);
            var3.text = var10;
            var10 = 29;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.GiftIcon;
            var3.IconComponent = var10;
            var10 = var9.onPressGift;
            var3.onPress = var10;
            var10 = false;
            var3.disabled = var10;
            var2.gift = var3;
            var3 = {};
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var5];
            var10 = var7.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.Zmm6dN;
            var10 = var11.bind(var12)(var10);
            var3.text = var10;
            var10 = 30;
            var10 = var8[var10];
            var10 = var7.bind(var6)(var10);
            var10 = var10.ImageIcon;
            var3.IconComponent = var10;
            var9 = var9.onViewAll;
            var3.onPress = var9;
            var9 = var4.uploadDisabled;
            var3.disabled = var9;
            var2.allphotos = var3;
            var3 = {};
            var9 = var8[var5];
            var9 = var7.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.uje3P9;
            var5 = var9.bind(var10)(var5);
            var3.text = var5;
            var5 = 31;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.CameraIcon;
            var3.IconComponent = var5;
            var5 = function() { // Original name: onPress, environment: var0
                var2 = _closure2_slot7;
                var1 = var2.onPressCamera;
                var0 = _closure1_slot6;
                var0 = var0.TAKE_A_PHOTO_BUTTON;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3.onPress = var5;
            var4 = var4.uploadDisabled;
            var3.disabled = var4;
            var2.camera = var3;
            var _closure3_slot0 = var2;
            var2 = _closure2_slot8;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var1[var0];
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var18 = var21.bind(var13)(var18, var19);
        var _closure2_slot9 = var18;
        var1 = var9[var1];
        var1 = var12.bind(var3)(var1);
        var19 = var1.ChatInputIaMobileExperiment;
        var12 = var19.useConfig;
        var1 = {};
        var1.location = var20;
        var1 = var12.bind(var19)(var1);
        var19 = var1.iaUsesFloatingBarForOverflow;
        var _closure2_slot10 = var19;
        var1 = var13.useRef;
        var1 = var1.bind(var13)(var2);
        var _closure2_slot11 = var1;
        var12 = var13.useCallback;
        var2 = new Array(6);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var8;
        var2[3] = var14;
        var2[4] = var18;
        var2[5] = var19;
        var1 = function(arg0) { // Environment: var0
            _fun108292: for (var _fun108292_ip = 0;;) switch (_fun108292_ip) {
                case 0:
                    var6 = arg0;
                    var0 = _closure2_slot10;
                    var4 = _closure1_slot13;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    if (var0) {
                        _fun108292_ip = 236;
                        continue _fun108292
                    }
                case 31:
                    var0 = 33;
                    var0 = var3[var0];
                    var7 = undefined;
                    var1 = var2.bind(var7)(var0);
                    var0 = {};
                    var13 = var0;
                    var12 = var6;
                    var8 = copyDataProperties(var13, var12);
                    var8 = _closure2_slot6;
                    var10 = var8.title;
                    var9 = 'title';
                    var0[var9] = var10;
                    var10 = var8.subtitle;
                    var9 = 'subtitle';
                    var0[var9] = var10;
                    var10 = _closure2_slot0;
                    var9 = 'channel';
                    var0[var9] = var10;
                    var10 = _closure2_slot9;
                    var9 = 'overflowButtons';
                    var0[var9] = var10;
                    var10 = var8.draftType;
                    var9 = 'draftType';
                    var0[var9] = var10;
                    var9 = _closure2_slot7;
                    var11 = var9.onViewAll;
                    var10 = 'onViewAll';
                    var0[var10] = var11;
                    var11 = function() { // Original name: onBack, environment: var10
                        _fun108293: for (var _fun108293_ip = 0;;) switch (_fun108293_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun108293_ip = 33;
                                    continue _fun108293
                                }
                            case 23:
                                var1 = var2.collapse;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    var10 = 'onBack';
                    var0[var10] = var11;
                    var10 = var9.onPressHeader;
                    var9 = 'onPress';
                    var0[var9] = var10;
                    var10 = var8.uploadLimit;
                    var9 = 'uploadLimit';
                    var0[var9] = var10;
                    var10 = var8.disableWhenReachedLimit;
                    var9 = 'disableWhenReachedLimit';
                    var0[var9] = var10;
                    var9 = var8.includedUploadIds;
                    var8 = 'includedUploadIds';
                    var0[var8] = var9;
                    var0 = var4.bind(var7)(var1, var0);
                    _fun108292_ip = 283;
                    continue _fun108292;
                case 236:
                    var1 = 32;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = var6.animatedIndex;
                    var1.animatedIndex = var6;
                    var5 = _closure2_slot7;
                    var5 = var5.onPressHeader;
                    var1.onPress = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 283:
                    return var0;
            }
        };
        var12 = var12.bind(var13)(var1, var2);
        var2 = var13.useCallback;
        var1 = new Array(7);
        var1[0] = var16;
        var1[1] = var15;
        var1[2] = var7;
        var20 = var8.id;
        var1[3] = var20;
        var1[4] = var6;
        var1[5] = var19;
        var1[6] = var18;
        var0 = function(arg0) { // Environment: var0
            _fun108294: for (var _fun108294_ip = 0;;) switch (_fun108294_ip) {
                case 0:
                    var0 = arg0;
                    var7 = var0.animateOnMount;
                    var3 = undefined;
                    if (!(var7 === var3)) {
                        _fun108294_ip = 17;
                        continue _fun108294
                    }
                case 15:
                    var7 = false;
                case 17:
                    var4 = var0.initialPosition;
                    var2 = _closure1_slot14;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 34;
                    var0 = var10[var0];
                    var1 = var5.bind(var3)(var0);
                    var0 = {};
                    var0.animateOnMount = var7;
                    var9 = _closure2_slot3;
                    var0.animatedIndex = var9;
                    var8 = _closure2_slot4;
                    var0.animatedPosition = var8;
                    var0.initialPosition = var4;
                    var8 = _closure1_slot13;
                    var4 = 35;
                    var4 = var10[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var10 = _closure2_slot11;
                    var4.ref = var10;
                    var4.animatedIndex = var9;
                    var9 = _closure2_slot0;
                    var9 = var9.id;
                    var4.channelId = var9;
                    var9 = _closure2_slot6;
                    var9 = var9.draftType;
                    var4.draftType = var9;
                    var9 = _closure2_slot7;
                    var9 = var9.onSend;
                    var4.onSend = var9;
                    var5 = var8.bind(var3)(var5, var4);
                    var4 = new Array(3);
                    var4[0] = var5;
                    var9 = _closure2_slot10;
                    var8 = null;
                    if (!var9) {
                        _fun108294_ip = 261;
                        continue _fun108294
                    }
                case 180:
                    var11 = _closure1_slot13;
                    var10 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var9 = 36;
                    var9 = var12[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = {};
                    var12 = _closure2_slot6;
                    var13 = var12.canPostPolls;
                    var9.canPostPolls = var13;
                    var13 = function(arg0) { // Original name: onHeightChange, environment: var13
                        _fun108295: for (var _fun108295_ip = 0;;) switch (_fun108295_ip) {
                            case 0:
                                var0 = _closure2_slot11;
                                var3 = var0.current;
                                var0 = null;
                                var1 = var0 == var3;
                                var0 = undefined;
                                if (var1) {
                                    _fun108295_ip = 37;
                                    continue _fun108295
                                }
                            case 23:
                                var2 = var3.setInsetFab;
                                var1 = arg0;
                                var0 = var2.bind(var3)(var1);
                            case 37:
                                return var0;
                        }
                    };
                    var9.onHeightChange = var13;
                    var12 = var12.uploadDisabled;
                    var9.uploadDisabled = var12;
                    var12 = _closure2_slot9;
                    var9.overflowButtons = var12;
                    var8 = var11.bind(var3)(var10, var9);
                case 261:
                    var4[1] = var8;
                    var7 = _closure2_slot10;
                    var5 = null;
                    if (var7) {
                        _fun108294_ip = 312;
                        continue _fun108294
                    }
                case 274:
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 37;
                    var6 = var9[var6];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.NavScrim;
                    var6 = {};
                    var5 = var8.bind(var3)(var7, var6);
                case 312:
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var13 = var2.bind(var13)(var0, var1);
        var2 = _closure1_slot13;
        var0 = 38;
        var0 = var9[var0];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var17 = _closure1_slot12;
        var0.animationConfigs = var17;
        var0.animatedIndex = var16;
        var0.animatedPosition = var15;
        var0.bottomSheetRef = var14;
        var0.accessoriesComponent = var13;
        var0.handleComponent = var12;
        var0.overlayComponent = var11;
        var0.onClose = var10;
        var0.transitionState = var4;
        var4 = 39;
        var4 = var9[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.channel = var8;
        var8 = var6.draftType;
        var4.draftType = var8;
        var8 = var7.onPressCamera;
        var4.onPressCamera = var8;
        var8 = var7.onAttachPress;
        var4.onAttachPress = var8;
        var8 = var7.onPressItem;
        var4.onPressItem = var8;
        var8 = var7.onLongPressItem;
        var4.onLongPressItem = var8;
        var7 = var7.onViewAll;
        var4.onViewAll = var7;
        var7 = var6.includedUploadIds;
        var4.includedUploadIds = var7;
        var7 = var6.uploadDisabled;
        var4.uploadDisabled = var7;
        var7 = var6.uploadLimit;
        var4.uploadLimit = var7;
        var6 = var6.disableWhenReachedLimit;
        var4.disableWhenReachedLimit = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3960, 3959, 1566, 660, 1468, 13811, 33, 795, 3679, 3873, 1567, 13937, 13938, 9364, 3677, 3965, 11602, 9517, 478, 3963, 9362, 13940, 9546, 1234, 9532, 8739, 7735, 11698, 10573, 4814, 9538, 13958, 9534, 13959, 13960, 13961, 5167, 13962, 9541, 2]);