// modules/activate_device/native/ActivateDevice.tsx
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
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.ImageBackground;
    var _closure1_slot6 = var6;
    var6 = var3.ActivityIndicator;
    var _closure1_slot7 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var10;
    var3.background = var8;
    var8 = {
        'marginVertical': 0,
        'resizeMode': 'cover'
    };
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_BRAND;
    var8.backgroundColor = var12;
    var3.imageStyle = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.safeArea = var8;
    var8 = {
        'maxWidth': 480,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'padding': 24,
        'marginHorizontal': 24,
        'marginVertical': 36,
        'shadowColor': null,
        'shadowOpacity': 0.2
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.PANEL_BG;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BLACK;
    var8.shadowColor = var10;
    var10 = {
        'width': 0,
        'height': 4
    };
    var8.shadowOffset = var10;
    var8.shadowRadius = var9;
    var3.content = var8;
    var8 = {
        'alignSelf': 'stretch',
        'flexGrow': 0
    };
    var3.scroller = var8;
    var8 = {
        'flexDirection': 'column',
        'gap': 16
    };
    var3.scrollerContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activate_device/native/ActivateDevice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun96253: for (var _fun96253_ip = 0;;) switch (_fun96253_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onClose;
                var7 = var0.prefilledUserCode;
                var0 = _closure1_slot10;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var15 = _closure1_slot4;
                var5 = var15.useState;
                var0 = 'user-code-input';
                var9 = true;
                var2 = {
                    'type': 'user-code-input',
                    'usePrefilledCode': true
                };
                var2 = var5.bind(var15)(var2);
                var16 = _closure1_slot3;
                var14 = 2;
                var2 = var16.bind(var3)(var2, var14);
                var12 = 0;
                var6 = var2[var12];
                var _closure2_slot0 = var6;
                var13 = 1;
                var5 = var2[var13];
                var _closure2_slot1 = var5;
                var10 = var15.useState;
                var2 = null;
                var10 = var10.bind(var15)(var2);
                var10 = var16.bind(var3)(var10, var14);
                var12 = var10[var12];
                var _closure2_slot2 = var12;
                var10 = var10[var13];
                var _closure2_slot3 = var10;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 6;
                var13 = var17[var13];
                var14 = var10.bind(var3)(var13);
                var13 = var14.useActivateDeviceStepTracking;
                var13 = var13.bind(var14)(var6);
                var16 = var15.useCallback;
                var14 = new Array(1);
                var14[0] = var5;
                var13 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = 'user-code-input';
                    var1.type = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = var16.bind(var15)(var13, var14);
                var18 = var15.useCallback;
                var16 = new Array(1);
                var16[0] = var5;
                var14 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = 'success';
                    var1.type = var0;
                    var0 = arg0;
                    var1.userCodeData = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16 = var18.bind(var15)(var14, var16);
                var18 = var15.useCallback;
                var14 = new Array(1);
                var14[0] = var5;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = 'error';
                    var1.type = var0;
                    var0 = arg0;
                    var1.userCodeData = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14 = var18.bind(var15)(var5, var14);
                var5 = 7;
                var5 = var17[var5];
                var10 = var10.bind(var3)(var5);
                var5 = var10.useDeviceCodeAuthorizeCallback;
                var5 = var5.bind(var10)(var13, var14, var16);
                var _closure2_slot4 = var5;
                var14 = var15.useCallback;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function(arg0) { // Environment: var1
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = 'authorization';
                    var1.type = var0;
                    var1.userCodeData = var5;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openOAuth2Modal;
                    var1 = {
                        'clientId': null,
                        'scopes': null,
                        'responseType': 'code',
                        'isTrustedName': true,
                        'isEmbeddedFlow': true,
                        'withBackPressHandler': false
                    };
                    var6 = var5.clientId;
                    var1.clientId = var6;
                    var5 = var5.scopes;
                    var1.scopes = var5;
                    var4 = function arg0() {
                        var3 = _closure2_slot4;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var1.callbackWithoutPost = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var14.bind(var15)(var5, var10);
                var16 = var15.useEffect;
                var14 = new Array(1);
                var14[0] = var6;
                var10 = function() { // Environment: var1
                    _fun96259: for (var _fun96259_ip = 0;;) switch (_fun96259_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = 'userCodeData';
                            var0 = var0 in var2;
                            if (!var0) {
                                _fun96259_ip = 209;
                                continue _fun96259
                            }
                        case 21:
                            var0 = _closure2_slot0;
                            var3 = var0.userCodeData;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var6 = var7[var4];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var6);
                            var6 = var6.ConsoleOAuthApplications;
                            var8 = var6.PLAYSTATION_APPLICATION_ID;
                            var6 = new Array(2);
                            var6[0] = var8;
                            var4 = var7[var4];
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.ConsoleOAuthApplications;
                            var4 = var4.PLAYSTATION_STAGING_APPLICATION_ID;
                            var6[1] = var4;
                            var5 = var6.includes;
                            var4 = var3.clientId;
                            var4 = var5.bind(var6)(var4);
                            if (var4) {
                                _fun96259_ip = 180;
                                continue _fun96259
                            }
                        case 120:
                            var5 = var3.scopes;
                            var4 = var5.some;
                            var3 = function(arg0) { // Environment: var3
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isSocialLayerUmbrellaScope;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            if (!var3) {
                                _fun96259_ip = 209;
                                continue _fun96259
                            }
                        case 149:
                            var4 = _closure2_slot3;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 12;
                            var3 = var6[var3];
                            var3 = var5.bind(var2)(var3);
                            var3 = var4.bind(var2)(var3);
                            _fun96259_ip = 209;
                            continue _fun96259;
                        case 180:
                            var1 = _closure2_slot3;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 10;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 209:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var16.bind(var15)(var10, var14);
                var14 = var15.useEffect;
                var10 = new Array(1);
                var10[0] = var12;
                var1 = function() { // Environment: var1
                    _fun96261: for (var _fun96261_ip = 0;;) switch (_fun96261_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun96261_ip = 53;
                                continue _fun96261
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.preload;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var14.bind(var15)(var1, var10);
                var1 = var6.type;
                if (!(var0 !== var1)) {
                    _fun96253_ip = 525;
                    continue _fun96253
                }
            case 362:
                var0 = 'authorization';
                if (!(var0 !== var1)) {
                    _fun96253_ip = 502;
                    continue _fun96253
                }
            case 373:
                var0 = 'success';
                if (!(var0 !== var1)) {
                    _fun96253_ip = 442;
                    continue _fun96253
                }
            case 381:
                var0 = 'error';
                var10 = null;
                if (!(var0 === var1)) {
                    _fun96253_ip = 592;
                    continue _fun96253
                }
            case 394:
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 16;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ActivateDeviceError;
                var0 = {};
                var0.onRetry = var13;
                var10 = var2.bind(var3)(var1, var0);
                _fun96253_ip = 592;
                continue _fun96253;
            case 442:
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 15;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ActivateDeviceSuccess;
                var0 = {};
                var0.onComplete = var4;
                var13 = var6.userCodeData;
                var0.data = var13;
                var0.successImage = var12;
                var10 = var2.bind(var3)(var1, var0);
                _fun96253_ip = 592;
                continue _fun96253;
            case 502:
                var2 = _closure1_slot9;
                var1 = _closure1_slot7;
                var0 = {};
                var0.animating = var9;
                var10 = var2.bind(var3)(var1, var0);
                _fun96253_ip = 592;
                continue _fun96253;
            case 525:
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 14;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UserCodeInput;
                var0 = {};
                var9 = var6.usePrefilledCode;
                var6 = undefined;
                if (!var9) {
                    _fun96253_ip = 571;
                    continue _fun96253
                }
            case 568:
                var6 = var7;
            case 571:
                var0.prefilledUserCode = var6;
                var0.onUserCodeAccepted = var5;
                var0.onClose = var4;
                var10 = var2.bind(var3)(var1, var0);
            case 592:
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 17;
                var4 = var6[var4];
                var9 = var5.bind(var3)(var4);
                var7 = var9.makeSource;
                var12 = _closure1_slot1;
                var4 = 18;
                var4 = var6[var4];
                var4 = var12.bind(var3)(var4);
                var4 = var7.bind(var9)(var4);
                var0.source = var4;
                var4 = var11.imageStyle;
                var0.imageStyle = var4;
                var7 = var11.background;
                var4 = new Array(1);
                var4[0] = var7;
                var0.style = var4;
                var4 = 19;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {
                    'bottom': true,
                    'top': true
                };
                var6 = var11.safeArea;
                var4.style = var6;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var11.content;
                var6.style = var9;
                var9 = _closure1_slot8;
                var8 = {};
                var12 = false;
                var8.bounces = var12;
                var12 = var11.scroller;
                var8.style = var12;
                var11 = var11.scrollerContent;
                var8.contentContainerStyle = var11;
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var6.children = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ActivateDevice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 12495, 12497, 7775, 5735, 12498, 3297, 12499, 4667, 12500, 12504, 12505, 1417, 12506, 4697, 2]);