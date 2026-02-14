// modules/media_viewer/native/components/MediaModalWebView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun70968: for (var _fun70968_ip = 0;;) switch (_fun70968_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var6;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var1);
            var11 = 0;
            var4 = var6[var11];
            var1 = metroImportAll;
            var0 = undefined;
            var7 = var1.bind(var0)(var4);
            var _closure1_slot3 = var7;
            var10 = 1;
            var1 = var6[var10];
            var1 = var5.bind(var0)(var1);
            var4 = var1.ActivityIndicator;
            var _closure1_slot4 = var4;
            var1 = var1.View;
            var _closure1_slot5 = var1;
            var9 = 2;
            var1 = var6[var9];
            var1 = var5.bind(var0)(var1);
            var4 = var1.jsx;
            var _closure1_slot6 = var4;
            var1 = var1.jsxs;
            var _closure1_slot7 = var1;
            var8 = 3;
            var1 = var6[var8];
            var4 = var5.bind(var0)(var1);
            var1 = var4.isIOS;
            var4 = var1.bind(var4)();
            var1 = '';
            if (!var4) {
                _fun70968_ip = 174;
                continue _fun70968
            }
        case 168:
            var1 = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
        case 174:
            var _closure1_slot8 = var1;
            var1 = {};
            var1.UNREADY = var11;
            var4 = 'UNREADY';
            var1[var11] = var4;
            var1.READY = var10;
            var4 = 'READY';
            var1[var10] = var4;
            var1.ERRORED = var9;
            var4 = 'ERRORED';
            var1[var9] = var4;
            var1.UNSTARTED = var8;
            var4 = 'UNSTARTED';
            var1[var8] = var4;
            var4 = 4;
            var1.ENDED = var4;
            var8 = 'ENDED';
            var1[var4] = var8;
            var9 = 5;
            var1.PLAYING = var9;
            var8 = 'PLAYING';
            var1[var9] = var8;
            var9 = 6;
            var1.PAUSED = var9;
            var8 = 'PAUSED';
            var1[var9] = var8;
            var9 = 7;
            var1.BUFFERING = var9;
            var8 = 'BUFFERING';
            var1[var9] = var8;
            var9 = 8;
            var1.VIDEO_CUED = var9;
            var8 = 'VIDEO_CUED';
            var1[var9] = var8;
            var _closure1_slot9 = var1;
            var4 = var6[var4];
            var9 = var5.bind(var0)(var4);
            var8 = var9.createStyles;
            var4 = {};
            var10 = {
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0,
                'position': 'absolute',
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var4.loading = var10;
            var4 = var8.bind(var9)(var4);
            var _closure1_slot10 = var4;
            var4 = {};
            var8 = 'function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}';
            var4.code = var8;
            var _closure1_slot11 = var4;
            var4 = {};
            var8 = 'function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}';
            var4.code = var8;
            var _closure1_slot12 = var4;
            var4 = var7.forwardRef;
            var3 = function(arg0, arg1) { // Environment: var3
                _fun70969: for (var _fun70969_ip = 0;;) switch (_fun70969_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = var5.style;
                        var7 = var5.playerState;
                        var _closure2_slot0 = var7;
                        var13 = var5.onDataReceived;
                        var _closure2_slot1 = var13;
                        var6 = var5.baseURL;
                        var _closure2_slot2 = var6;
                        var20 = var5.injectedJavaScript;
                        var1 = var5.panGestureConfig;
                        var _closure2_slot3 = var1;
                        var3 = {
                            'style': 0,
                            'playerState': 0,
                            'onDataReceived': 0,
                            'baseURL': 0,
                            'injectedJavaScript': 0,
                            'panGestureConfig': 0
                        };
                        var24 = null;
                        var25 = var3;
                        var2 = silentSetPrototypeOf(var25, var24);
                        var8 = 0;
                        var25 = {};
                        var24 = var5;
                        var23 = var3;
                        var14 = copyDataProperties(var25, var24, var23);
                        var2 = _closure1_slot10;
                        var3 = undefined;
                        var11 = var2.bind(var3)();
                        var22 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var10 = 5;
                        var2 = var16[var10];
                        var5 = var22.bind(var3)(var2);
                        var2 = var5.useSharedValue;
                        var19 = 1;
                        var18 = var2.bind(var5)(var19);
                        var _closure2_slot4 = var18;
                        var2 = var16[var10];
                        var5 = var22.bind(var3)(var2);
                        var2 = var5.useSharedValue;
                        var2 = var2.bind(var5)(var8);
                        var _closure2_slot5 = var2;
                        var5 = var16[var10];
                        var12 = var22.bind(var3)(var5);
                        var8 = var12.useAnimatedStyle;
                        var5 = function() {
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.withTiming;
                            var4 = _closure2_slot5;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            var0.opacity = var1;
                            return var0;
                        };
                        var15 = {};
                        var21 = 6;
                        var17 = var16[var21];
                        var17 = var22.bind(var3)(var17);
                        var17 = var17.withTiming;
                        var15.withTiming = var17;
                        var15.webviewOpacity = var2;
                        var5.__closure = var15;
                        var15 = 2179142865986.0;
                        var5.__workletHash = var15;
                        var15 = _closure1_slot11;
                        var5.__initData = var15;
                        var17 = var8.bind(var12)(var5);
                        var5 = var16[var10];
                        var12 = var22.bind(var3)(var5);
                        var8 = var12.useAnimatedStyle;
                        var5 = function() {
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.withTiming;
                            var4 = _closure2_slot4;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            var0.opacity = var1;
                            return var0;
                        };
                        var15 = {};
                        var21 = var16[var21];
                        var21 = var22.bind(var3)(var21);
                        var21 = var21.withTiming;
                        var15.withTiming = var21;
                        var15.loaderOpacity = var18;
                        var5.__closure = var15;
                        var15 = 7752174298017.0;
                        var5.__workletHash = var15;
                        var15 = _closure1_slot12;
                        var5.__initData = var15;
                        var12 = var8.bind(var12)(var5);
                        var5 = _closure1_slot3;
                        var15 = var5.useEffect;
                        var8 = new Array(3);
                        var8[0] = var7;
                        var8[1] = var18;
                        var8[2] = var2;
                        var2 = function() { // Environment: var0
                            _fun70972: for (var _fun70972_ip = 0;;) switch (_fun70972_ip) {
                                case 0:
                                    var3 = _closure2_slot0;
                                    var1 = _closure1_slot9;
                                    var1 = var1.BUFFERING;
                                    var1 = var3 !== var1;
                                    if (!var1) {
                                        _fun70972_ip = 45;
                                        continue _fun70972
                                    }
                                case 27:
                                    var4 = _closure2_slot0;
                                    var3 = _closure1_slot9;
                                    var3 = var3.PLAYING;
                                    var1 = var4 !== var3;
                                case 45:
                                    if (!var1) {
                                        _fun70972_ip = 66;
                                        continue _fun70972
                                    }
                                case 48:
                                    var3 = _closure2_slot0;
                                    var2 = _closure1_slot9;
                                    var2 = var2.ERRORED;
                                    var1 = var3 !== var2;
                                case 66:
                                    if (var1) {
                                        _fun70972_ip = 102;
                                        continue _fun70972
                                    }
                                case 69:
                                    var3 = _closure2_slot4;
                                    var2 = var3.set;
                                    var1 = 0;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure2_slot5;
                                    var1 = var2.set;
                                    var0 = 1;
                                    var0 = var1.bind(var2)(var0);
                                case 102:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var15.bind(var5)(var2, var8);
                        var8 = var5.useCallback;
                        var2 = new Array(2);
                        var2[0] = var13;
                        var2[1] = var1;
                        var1 = function(arg0) { // Environment: var0
                            _fun70973: for (var _fun70973_ip = 0;;) switch (_fun70973_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = global;
                                    var3 = var1.JSON;
                                    var2 = var3.parse;
                                    var1 = var0.nativeEvent;
                                    var1 = var1.data;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = null;
                                    if (!(var2 != var1)) {
                                        _fun70973_ip = 52;
                                        continue _fun70973
                                    }
                                case 38:
                                    var2 = var1.event;
                                    var1 = 'click';
                                    if (!(var1 !== var2)) {
                                        _fun70973_ip = 78;
                                        continue _fun70973
                                    }
                                case 52:
                                    var2 = _closure2_slot1;
                                    var0 = var0.nativeEvent;
                                    var1 = var0.data;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    _fun70973_ip = 119;
                                    continue _fun70973;
                                case 78:
                                    var0 = _closure2_slot3;
                                    var2 = var0.overlayEnabled;
                                    var1 = var2.set;
                                    var3 = var0.overlayEnabled;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    var0 = !var0;
                                    var0 = var1.bind(var2)(var0);
                                case 119:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var18 = var8.bind(var5)(var1, var2);
                        var2 = var5.useCallback;
                        var1 = new Array(1);
                        var1[0] = var6;
                        var0 = function(arg0) { // Environment: var0
                            _fun70974: for (var _fun70974_ip = 0;;) switch (_fun70974_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.url;
                                    var0 = 'about:blank';
                                    var0 = var0 !== var2;
                                    if (!var0) {
                                        _fun70974_ip = 47;
                                        continue _fun70974
                                    }
                                case 21:
                                    var4 = var1.url;
                                    var3 = var4.startsWith;
                                    var2 = _closure2_slot2;
                                    var2 = var3.bind(var4)(var2);
                                    var0 = !var2;
                                case 47:
                                    if (!var0) {
                                        _fun70974_ip = 74;
                                        continue _fun70974
                                    }
                                case 50:
                                    var3 = var1.isTopFrame;
                                    var2 = null;
                                    var2 = var2 == var3;
                                    if (var2) {
                                        _fun70974_ip = 71;
                                        continue _fun70974
                                    }
                                case 65:
                                    var2 = var1.isTopFrame;
                                case 71:
                                    var0 = var2;
                                case 74:
                                    var0 = !var0;
                                    if (var0) {
                                        _fun70974_ip = 123;
                                        continue _fun70974
                                    }
                                case 80:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 7;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.openURL;
                                    var1 = var1.url;
                                    var1 = var2.bind(var3)(var1);
                                    var0 = false;
                                case 123:
                                    return var0;
                            }
                        };
                        var15 = var2.bind(var5)(var0, var1);
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var0.style = var4;
                        var6 = _closure1_slot6;
                        var13 = _closure1_slot1;
                        var4 = var16[var10];
                        var4 = var13.bind(var3)(var4);
                        var5 = var4.View;
                        var4 = {};
                        var8 = new Array(2);
                        var8[0] = var17;
                        var17 = {};
                        var17.flex = var19;
                        var8[1] = var17;
                        var4.style = var8;
                        var8 = 8;
                        var8 = var16[var8];
                        var13 = var13.bind(var3)(var8);
                        var8 = {};
                        var25 = var8;
                        var24 = var14;
                        var14 = copyDataProperties(var25, var24);
                        var19 = _closure1_slot8;
                        var14 = global;
                        var14 = var14.HermesInternal;
                        var17 = var14.concat;
                        var16 = '';
                        var14 = '\n';
                        var16 = var17.bind(var16)(var20, var14, var19);
                        var14 = 'injectedJavaScript';
                        var8[var14] = var16;
                        var16 = false;
                        var14 = 'bounces';
                        var8[var14] = var16;
                        var17 = arg1;
                        var14 = 'ref';
                        var8[var14] = var17;
                        var14 = 'scrollEnabled';
                        var8[var14] = var16;
                        var17 = true;
                        var14 = 'javaScriptEnabled';
                        var8[var14] = var17;
                        var14 = 'onMessage';
                        var8[var14] = var18;
                        var14 = 'allowsInlineMediaPlayback';
                        var8[var14] = var17;
                        var14 = 'mediaPlaybackRequiresUserAction';
                        var8[var14] = var16;
                        var14 = 'onShouldStartLoadWithRequest';
                        var8[var14] = var15;
                        var8 = var6.bind(var3)(var13, var8);
                        var4.children = var8;
                        var5 = var6.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = _closure1_slot9;
                        var5 = var5.PLAYING;
                        var5 = var7 !== var5;
                        if (!var5) {
                            _fun70969_ip = 696;
                            continue _fun70969
                        }
                    case 682:
                        var6 = _closure1_slot9;
                        var6 = var6.PAUSED;
                        var5 = var7 !== var6;
                    case 696:
                        if (!var5) {
                            _fun70969_ip = 783;
                            continue _fun70969
                        }
                    case 699:
                        var8 = _closure1_slot6;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.View;
                        var6 = {};
                        var10 = new Array(2);
                        var10[0] = var12;
                        var11 = var11.loading;
                        var10[1] = var11;
                        var6.style = var10;
                        var10 = _closure1_slot4;
                        var9 = {
                            'color': 'white',
                            'size': 'large'
                        };
                        var9 = var8.bind(var3)(var10, var9);
                        var6.children = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 783:
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var4 = var4.bind(var7)(var3);
            var3 = var7.memo;
            var3 = var3.bind(var7)(var4);
            var4 = 9;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/media_viewer/native/components/MediaModalWebView.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.PlayerState = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 1297, 3719, 4105, 3151, 6004, 2]);