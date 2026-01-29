// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51966: for (var _fun51966_ip = 0;;) switch (_fun51966_ip) {
        case 0:
            var12 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var10 = dependencyMap;
            var11 = this;
            var _closure1_slot0 = var12;
            var _closure1_slot1 = var9;
            var _closure1_slot2 = var10;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var3);
            var6 = 0;
            var3 = var10[var6];
            var0 = undefined;
            var3 = var12.bind(var0)(var3);
            var5 = var3.forwardRef;
            var7 = var3.useCallback;
            var _closure1_slot3 = var7;
            var7 = var3.useEffect;
            var _closure1_slot4 = var7;
            var7 = var3.useImperativeHandle;
            var _closure1_slot5 = var7;
            var7 = var3.useMemo;
            var _closure1_slot6 = var7;
            var3 = var3.useRef;
            var _closure1_slot7 = var3;
            var3 = var10[var6];
            var3 = var9.bind(var0)(var3);
            var3 = 1;
            var3 = var10[var3];
            var3 = var12.bind(var0)(var3);
            var7 = var3.Image;
            var8 = var3.View;
            var _closure1_slot8 = var8;
            var3 = var3.NativeModules;
            var _closure1_slot9 = var3;
            var8 = 2;
            var8 = var10[var8];
            var8 = var12.bind(var0)(var8);
            var12 = var8.jsx;
            var _closure1_slot10 = var12;
            var8 = var8.jsxs;
            var _closure1_slot11 = var8;
            var8 = var11;
            if (!var8) {
                _fun51966_ip = 214;
                continue _fun51966
            }
        case 208:
            var8 = var11.__rest;
        case 214:
            if (var8) {
                _fun51966_ip = 222;
                continue _fun51966
            }
        case 217:
            var8 = function(arg0, arg1) { // Environment: var4
                _fun51967: for (var _fun51967_ip = 0;;) switch (_fun51967_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = {};
                        var8 = var7;
                        var5 = 0;
                        var4 = global;
                        for (var1 in var8)
                            case 23: {
                                case 32: var11 = var1;
                                var10 = var4.Object;
                                var10 = var10.prototype;
                                var12 = var10.hasOwnProperty;
                                var10 = var12.call;
                                var10 = var10.bind(var12)(var7, var11);
                                if (!var10) {
                                    _fun51967_ip = 81;
                                    continue _fun51967
                                }
                                case 66: var12 = var6.indexOf;
                                var12 = var12.bind(var6)(var11);
                                var10 = var12 < var5;
                                case 81: if (!var10) {
                                    _fun51967_ip = 23;
                                    continue _fun51967
                                }
                                case 84: var10 = var7[var11];
                                var0[var11] = var10;
                                _fun51967_ip = 23;
                                continue _fun51967;
                            }
                    case 94:
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun51967_ip = 242;
                            continue _fun51967
                        }
                    case 103:
                        var1 = var4.Object;
                        var1 = var1.getOwnPropertySymbols;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun51967_ip = 242;
                            continue _fun51967
                        }
                    case 126:
                        var2 = var4.Object;
                        var1 = var2.getOwnPropertySymbols;
                        var3 = var1.bind(var2)(var7);
                        var1 = var3.length;
                        var1 = var5 < var1;
                        var2 = 0;
                        if (!var1) {
                            _fun51967_ip = 242;
                            continue _fun51967
                        }
                    case 157:
                        var8 = var6.indexOf;
                        var1 = var3[var2];
                        var1 = var8.bind(var6)(var1);
                        var1 = var1 < var5;
                        if (!var1) {
                            _fun51967_ip = 211;
                            continue _fun51967
                        }
                    case 179:
                        var8 = var4.Object;
                        var8 = var8.prototype;
                        var10 = var8.propertyIsEnumerable;
                        var9 = var10.call;
                        var8 = var3[var2];
                        var1 = var9.bind(var10)(var7, var8);
                    case 211:
                        if (!var1) {
                            _fun51967_ip = 230;
                            continue _fun51967
                        }
                    case 214:
                        var8 = var3[var2];
                        var1 = var3[var2];
                        var1 = var7[var1];
                        var0[var8] = var1;
                    case 230:
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if (var2 < var1) {
                            _fun51967_ip = 157;
                            continue _fun51967
                        }
                    case 242:
                        return var0;
                }
            };
        case 222:
            var _closure1_slot12 = var8;
            var8 = 3;
            var8 = var10[var8];
            var9 = var9.bind(var0)(var8);
            var8 = {};
            var10 = ['goBack', 'goForward', 'reload', 'stopLoading', 'injectJavaScript', 'requestFocus', 'postMessage', 'clearFormData', 'clearCache', 'clearHistory', 'loadUrl'];
            var8.supportedCommands = var10;
            var8 = var9.bind(var0)(var8);
            var _closure1_slot13 = var8;
            var7 = var7.resolveAssetSource;
            var _closure1_slot14 = var7;
            var _closure1_slot15 = var6;
            var4 = function(arg0, arg1) { // Environment: var4
                _fun51968: for (var _fun51968_ip = 0;;) switch (_fun51968_ip) {
                    case 0:
                        var8 = arg0;
                        var0 = var8.overScrollMode;
                        var25 = 'always';
                        var3 = undefined;
                        if (!(var3 !== var0)) {
                            _fun51968_ip = 24;
                            continue _fun51968
                        }
                    case 21:
                        var25 = var0;
                    case 24:
                        var0 = var8.javaScriptEnabled;
                        var24 = var3 === var0;
                        if (var24) {
                            _fun51968_ip = 40;
                            continue _fun51968
                        }
                    case 37:
                        var24 = var0;
                    case 40:
                        var0 = var8.thirdPartyCookiesEnabled;
                        var23 = var3 === var0;
                        if (var23) {
                            _fun51968_ip = 56;
                            continue _fun51968
                        }
                    case 53:
                        var23 = var0;
                    case 56:
                        var0 = var8.scalesPageToFit;
                        var22 = var3 === var0;
                        if (var22) {
                            _fun51968_ip = 72;
                            continue _fun51968
                        }
                    case 69:
                        var22 = var0;
                    case 72:
                        var0 = var8.allowsFullscreenVideo;
                        var21 = var3 !== var0;
                        if (!var21) {
                            _fun51968_ip = 88;
                            continue _fun51968
                        }
                    case 85:
                        var21 = var0;
                    case 88:
                        var0 = var8.allowFileAccess;
                        var20 = var3 !== var0;
                        if (!var20) {
                            _fun51968_ip = 104;
                            continue _fun51968
                        }
                    case 101:
                        var20 = var0;
                    case 104:
                        var0 = var8.saveFormDataDisabled;
                        var19 = var3 !== var0;
                        if (!var19) {
                            _fun51968_ip = 120;
                            continue _fun51968
                        }
                    case 117:
                        var19 = var0;
                    case 120:
                        var0 = var8.cacheEnabled;
                        var18 = var3 === var0;
                        if (var18) {
                            _fun51968_ip = 136;
                            continue _fun51968
                        }
                    case 133:
                        var18 = var0;
                    case 136:
                        var0 = var8.androidHardwareAccelerationDisabled;
                        var17 = var3 !== var0;
                        if (!var17) {
                            _fun51968_ip = 152;
                            continue _fun51968
                        }
                    case 149:
                        var17 = var0;
                    case 152:
                        var0 = var8.androidLayerType;
                        var16 = 'none';
                        if (!(var3 !== var0)) {
                            _fun51968_ip = 169;
                            continue _fun51968
                        }
                    case 166:
                        var16 = var0;
                    case 169:
                        var31 = var8.originWhitelist;
                        if (!(var3 === var31)) {
                            _fun51968_ip = 208;
                            continue _fun51968
                        }
                    case 179:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 4;
                        var0 = var2[var0];
                        var0 = var1.bind(var3)(var0);
                        var31 = var0.defaultOriginWhitelist;
                    case 208:
                        var0 = var8.setSupportMultipleWindows;
                        var15 = var3 === var0;
                        if (var15) {
                            _fun51968_ip = 224;
                            continue _fun51968
                        }
                    case 221:
                        var15 = var0;
                    case 224:
                        var0 = var8.setBuiltInZoomControls;
                        var14 = var3 === var0;
                        if (var14) {
                            _fun51968_ip = 240;
                            continue _fun51968
                        }
                    case 237:
                        var14 = var0;
                    case 240:
                        var0 = var8.setDisplayZoomControls;
                        var13 = var3 !== var0;
                        if (!var13) {
                            _fun51968_ip = 256;
                            continue _fun51968
                        }
                    case 253:
                        var13 = var0;
                    case 256:
                        var0 = var8.nestedScrollEnabled;
                        var12 = var3 !== var0;
                        if (!var12) {
                            _fun51968_ip = 272;
                            continue _fun51968
                        }
                    case 269:
                        var12 = var0;
                    case 272:
                        var32 = var8.startInLoadingState;
                        var40 = var8.messagingWithWebViewKeyEnabled;
                        var44 = var8.onNavigationStateChange;
                        var34 = var8.onLoadStart;
                        var42 = var8.onError;
                        var43 = var8.onLoad;
                        var36 = var8.onLoadEnd;
                        var35 = var8.onLoadProgress;
                        var41 = var8.onHttpError;
                        var33 = var8.onRenderProcessGone;
                        var38 = var8.onMessage;
                        var4 = var8.renderLoading;
                        var39 = var8.renderError;
                        var9 = var8.style;
                        var6 = var8.containerStyle;
                        var28 = var8.source;
                        var1 = var8.nativeConfig;
                        var30 = var8.onShouldStartLoadWithRequest;
                        var7 = _closure1_slot12;
                        var2 = ['overScrollMode', 'javaScriptEnabled', 'thirdPartyCookiesEnabled', 'scalesPageToFit', 'allowsFullscreenVideo', 'allowFileAccess', 'saveFormDataDisabled', 'cacheEnabled', 'androidHardwareAccelerationDisabled', 'androidLayerType', 'originWhitelist', 'setSupportMultipleWindows', 'setBuiltInZoomControls', 'setDisplayZoomControls', 'nestedScrollEnabled', 'startInLoadingState', 'messagingWithWebViewKeyEnabled', 'onNavigationStateChange', 'onLoadStart', 'onError', 'onLoad', 'onLoadEnd', 'onLoadProgress', 'onHttpError', 'onRenderProcessGone', 'onMessage', 'renderLoading', 'renderError', 'style', 'containerStyle', 'source', 'nativeConfig', 'onShouldStartLoadWithRequest'];
                        var11 = var7.bind(var3)(var8, var2);
                        var7 = _closure1_slot7;
                        var10 = 'WebViewMessageHandler';
                        var8 = var10.concat;
                        var26 = _closure1_slot15;
                        var2 = 1;
                        var2 = var26 + var2;
                        _closure1_slot15 = var2;
                        var2 = var8.bind(var10)(var2);
                        var2 = var7.bind(var3)(var2);
                        var37 = var2.current;
                        var _closure2_slot0 = var37;
                        var2 = null;
                        var27 = var7.bind(var3)(var2);
                        var _closure2_slot1 = var27;
                        var10 = _closure1_slot3;
                        var8 = function(arg0, arg1, arg2) { // Environment: var5
                            _fun51969: for (var _fun51969_ip = 0;;) switch (_fun51969_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = arg2;
                                    if (var2) {
                                        _fun51969_ip = 50;
                                        continue _fun51969
                                    }
                                case 9:
                                    if (!var3) {
                                        _fun51969_ip = 75;
                                        continue _fun51969
                                    }
                                case 12:
                                    var5 = _closure1_slot13;
                                    var4 = var5.loadUrl;
                                    var0 = _closure2_slot1;
                                    var1 = var0.current;
                                    var0 = arg1;
                                    var0 = var4.bind(var5)(var1, var0);
                                    _fun51969_ip = 75;
                                    continue _fun51969;
                                case 50:
                                    var0 = _closure1_slot9;
                                    var1 = var0.RNCWebView;
                                    var0 = var1.onShouldStartLoadWithRequestCallback;
                                    var0 = var0.bind(var1)(var3, var2);
                                case 75:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = new Array(0);
                        var29 = var10.bind(var3)(var8, var7);
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var10 = 4;
                        var7 = var7[var10];
                        var26 = var8.bind(var3)(var7);
                        var8 = var26.useWebWiewLogic;
                        var7 = {};
                        var7.onNavigationStateChange = var44;
                        var7.onLoad = var43;
                        var7.onError = var42;
                        var7.onHttpErrorProp = var41;
                        var7.onLoadEnd = var36;
                        var7.onLoadProgress = var35;
                        var7.onLoadStart = var34;
                        var7.onRenderProcessGoneProp = var33;
                        var7.onMessageProp = var38;
                        var7.startInLoadingState = var32;
                        var7.originWhitelist = var31;
                        var7.onShouldStartLoadWithRequestProp = var30;
                        var7.onShouldStartLoadWithRequestCallback = var29;
                        var26 = var8.bind(var26)(var7);
                        var33 = var26.onLoadingStart;
                        var29 = var26.onShouldStartLoadWithRequest;
                        var _closure2_slot2 = var29;
                        var30 = var26.onMessage;
                        var _closure2_slot3 = var30;
                        var43 = var26.viewState;
                        var8 = var26.setViewState;
                        var _closure2_slot4 = var8;
                        var7 = var26.lastErrorEvent;
                        var32 = var26.onHttpError;
                        var36 = var26.onLoadingError;
                        var35 = var26.onLoadingFinish;
                        var34 = var26.onLoadingProgress;
                        var31 = var26.onRenderProcessGone;
                        var42 = _closure1_slot5;
                        var41 = new Array(2);
                        var41[0] = var8;
                        var41[1] = var27;
                        var26 = arg1;
                        var8 = function() { // Environment: var5
                            var0 = {};
                            var2 = function() { // Original name: goForward, environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.goForward;
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.goForward = var2;
                            var2 = function() { // Original name: goBack, environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.goBack;
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.goBack = var2;
                            var2 = function() { // Original name: reload, environment: var1
                                var3 = _closure2_slot4;
                                var0 = undefined;
                                var2 = 'LOADING';
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot13;
                                var2 = var3.reload;
                                var1 = _closure2_slot1;
                                var1 = var1.current;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.reload = var2;
                            var2 = function() { // Original name: stopLoading, environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.stopLoading;
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.stopLoading = var2;
                            var2 = function(arg0) { // Original name: postMessage, environment: var1
                                var3 = _closure1_slot13;
                                var2 = var3.postMessage;
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.postMessage = var2;
                            var2 = function(arg0) { // Original name: injectJavaScript, environment: var1
                                var3 = _closure1_slot13;
                                var2 = var3.injectJavaScript;
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.injectJavaScript = var2;
                            var2 = function() { // Original name: requestFocus, environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.requestFocus;
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.requestFocus = var2;
                            var2 = function() { // Original name: clearFormData, environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.clearFormData;
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.clearFormData = var2;
                            var2 = function(arg0) { // Original name: clearCache, environment: var1
                                var3 = _closure1_slot13;
                                var2 = var3.clearCache;
                                var0 = _closure2_slot1;
                                var1 = var0.current;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.clearCache = var2;
                            var1 = function() { // Original name: clearHistory, environment: var1
                                var2 = _closure1_slot13;
                                var1 = var2.clearHistory;
                                var0 = _closure2_slot1;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.clearHistory = var1;
                            return var0;
                        };
                        var8 = var42.bind(var3)(var26, var8, var41);
                        var41 = _closure1_slot6;
                        var26 = new Array(2);
                        var26[0] = var30;
                        var26[1] = var29;
                        var8 = function() { // Environment: var5
                            var0 = {};
                            var2 = _closure2_slot2;
                            var0.onShouldStartLoadWithRequest = var2;
                            var1 = _closure2_slot3;
                            var0.onMessage = var1;
                            return var0;
                        };
                        var41 = var41.bind(var3)(var8, var26);
                        var _closure2_slot5 = var41;
                        var26 = _closure1_slot4;
                        var8 = new Array(2);
                        var8[0] = var37;
                        var8[1] = var41;
                        var5 = function() { // Environment: var5
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.registerCallableModule;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var5 = var26.bind(var3)(var5, var8);
                        var5 = 'LOADING';
                        if (!(var5 !== var43)) {
                            _fun51968_ip = 902;
                            continue _fun51968
                        }
                    case 756:
                        var5 = 'ERROR';
                        if (!(var5 !== var43)) {
                            _fun51968_ip = 815;
                            continue _fun51968
                        }
                    case 764:
                        var8 = 'IDLE';
                        var5 = null;
                        if (!(var8 !== var43)) {
                            _fun51968_ip = 932;
                            continue _fun51968
                        }
                    case 777:
                        var8 = global;
                        var41 = var8.console;
                        var26 = var41.error;
                        var42 = 'RNCWebView invalid state encountered: ';
                        var8 = var42.concat;
                        var8 = var8.bind(var42)(var43);
                        var8 = var26.bind(var41)(var8);
                        var5 = null;
                        _fun51968_ip = 932;
                        continue _fun51968;
                    case 815:
                        var26 = _closure1_slot1;
                        var41 = _closure1_slot2;
                        var8 = 6;
                        var8 = var41[var8];
                        var41 = var26.bind(var3)(var8);
                        var26 = var2 != var7;
                        var8 = 'lastErrorEvent expected to be non-null';
                        var8 = var41.bind(var3)(var26, var8);
                        if (var39) {
                            _fun51968_ip = 877;
                            continue _fun51968
                        }
                    case 854:
                        var26 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var8 = var26.bind(var3)(var8);
                        var39 = var8.defaultRenderError;
                    case 877:
                        var26 = var7.domain;
                        var8 = var7.code;
                        var7 = var7.description;
                        var5 = var39.bind(var3)(var26, var8, var7);
                        _fun51968_ip = 932;
                        continue _fun51968;
                    case 902:
                        if (var4) {
                            _fun51968_ip = 928;
                            continue _fun51968
                        }
                    case 905:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var10];
                        var7 = var8.bind(var3)(var7);
                        var4 = var7.defaultRenderLoading;
                    case 928:
                        var5 = var4.bind(var3)();
                    case 932:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 7;
                        var10 = var8[var4];
                        var10 = var7.bind(var3)(var10);
                        var10 = var10.container;
                        var26 = new Array(3);
                        var26[0] = var10;
                        var10 = var8[var4];
                        var10 = var7.bind(var3)(var10);
                        var10 = var10.webView;
                        var26[1] = var10;
                        var26[2] = var9;
                        var4 = var8[var4];
                        var4 = var7.bind(var3)(var4);
                        var7 = var4.container;
                        var4 = new Array(2);
                        var4[0] = var7;
                        var4[1] = var6;
                        var7 = 'number';
                        var6 = typeof var28;
                        var6 = var7 !== var6;
                        if (!var6) {
                            _fun51968_ip = 1031;
                            continue _fun51968
                        }
                    case 1028:
                        var6 = var28;
                    case 1031:
                        if (!var6) {
                            _fun51968_ip = 1042;
                            continue _fun51968
                        }
                    case 1034:
                        var7 = 'method';
                        var6 = var7 in var28;
                    case 1042:
                        if (!var6) {
                            _fun51968_ip = 1147;
                            continue _fun51968
                        }
                    case 1045:
                        var7 = var28.method;
                        var6 = 'POST';
                        if (!(var6 === var7)) {
                            _fun51968_ip = 1070;
                            continue _fun51968
                        }
                    case 1061:
                        var6 = var28.headers;
                        if (var6) {
                            _fun51968_ip = 1123;
                            continue _fun51968
                        }
                    case 1070:
                        var7 = var28.method;
                        var6 = 'GET';
                        var6 = var6 === var7;
                        if (!var6) {
                            _fun51968_ip = 1094;
                            continue _fun51968
                        }
                    case 1089:
                        var6 = var28.body;
                    case 1094:
                        if (!var6) {
                            _fun51968_ip = 1147;
                            continue _fun51968
                        }
                    case 1097:
                        var6 = global;
                        var8 = var6.console;
                        var7 = var8.warn;
                        var6 = 'WebView: `source.body` is not supported when using GET.';
                        var6 = var7.bind(var8)(var6);
                        _fun51968_ip = 1147;
                        continue _fun51968;
                    case 1123:
                        var6 = global;
                        var8 = var6.console;
                        var7 = var8.warn;
                        var6 = 'WebView: `source.headers` is not supported when using POST.';
                        var6 = var7.bind(var8)(var6);
                    case 1147:
                        var6 = var2 == var1;
                        var7 = undefined;
                        if (var6) {
                            _fun51968_ip = 1162;
                            continue _fun51968
                        }
                    case 1156:
                        var7 = var1.component;
                    case 1162:
                        if (var7) {
                            _fun51968_ip = 1185;
                            continue _fun51968
                        }
                    case 1165:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 8;
                        var6 = var9[var6];
                        var7 = var8.bind(var3)(var6);
                    case 1185:
                        var6 = _closure1_slot10;
                        var8 = global;
                        var10 = var8.Object;
                        var9 = var10.assign;
                        var8 = {};
                        var39 = 'function';
                        var38 = typeof var38;
                        var38 = var39 === var38;
                        if (var38) {
                            _fun51968_ip = 1231;
                            continue _fun51968
                        }
                    case 1218:
                        var39 = var2 != var40;
                        if (!var39) {
                            _fun51968_ip = 1228;
                            continue _fun51968
                        }
                    case 1225:
                        var39 = var40;
                    case 1228:
                        var38 = var39;
                    case 1231:
                        var8.messagingEnabled = var38;
                        var8.messagingModuleName = var37;
                        var8.onLoadingError = var36;
                        var8.onLoadingFinish = var35;
                        var8.onLoadingProgress = var34;
                        var8.onLoadingStart = var33;
                        var8.onHttpError = var32;
                        var8.onRenderProcessGone = var31;
                        var8.onMessage = var30;
                        var8.onShouldStartLoadWithRequest = var29;
                        var8.ref = var27;
                        var27 = _closure1_slot14;
                        var27 = var27.bind(var3)(var28);
                        var8.source = var27;
                        var8.style = var26;
                        var8.overScrollMode = var25;
                        var8.javaScriptEnabled = var24;
                        var8.thirdPartyCookiesEnabled = var23;
                        var8.scalesPageToFit = var22;
                        var8.allowsFullscreenVideo = var21;
                        var8.allowFileAccess = var20;
                        var8.saveFormDataDisabled = var19;
                        var8.cacheEnabled = var18;
                        var8.androidHardwareAccelerationDisabled = var17;
                        var8.androidLayerType = var16;
                        var8.setSupportMultipleWindows = var15;
                        var8.setBuiltInZoomControls = var14;
                        var8.setDisplayZoomControls = var13;
                        var8.nestedScrollEnabled = var12;
                        var12 = var2 == var1;
                        var2 = undefined;
                        if (var12) {
                            _fun51968_ip = 1390;
                            continue _fun51968
                        }
                    case 1385:
                        var2 = var1.props;
                    case 1390:
                        var48 = {};
                        var49 = var10;
                        var47 = var11;
                        var46 = var8;
                        var45 = var2;
                        var2 = var49[var9](var48, var47, var46, var45, var44);
                        var1 = 'webViewKey';
                        var6 = var6.bind(var3)(var7, var2, var1);
                        var2 = _closure1_slot11;
                        var1 = _closure1_slot8;
                        var0 = {};
                        var0.style = var4;
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var5 = var5.bind(var0)(var4);
            var4 = var3.RNCWebView;
            var3 = var4.isFileUploadSupported;
            var6 = var3.bind(var4)();
            var4 = var1.Object;
            var3 = var4.assign;
            var1 = {};
            var1.isFileUploadSupported = var6;
            var1 = var3.bind(var4)(var5, var1);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 116, 5903, 63, 44, 5905, 5906]);