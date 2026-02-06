// modules/media_viewer/native/components/MediaModalWebView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun70742: for (var _fun70742_ip = 0;;) switch (_fun70742_ip) {
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
            var12 = 0;
            var4 = var6[var12];
            var1 = metroImportAll;
            var0 = undefined;
            var8 = var1.bind(var0)(var4);
            var _closure1_slot3 = var8;
            var11 = 1;
            var1 = var6[var11];
            var1 = var5.bind(var0)(var1);
            var4 = var1.ActivityIndicator;
            var _closure1_slot4 = var4;
            var10 = var1.StyleSheet;
            var1 = var1.View;
            var _closure1_slot5 = var1;
            var9 = 2;
            var1 = var6[var9];
            var1 = var5.bind(var0)(var1);
            var4 = var1.jsx;
            var _closure1_slot6 = var4;
            var1 = var1.jsxs;
            var _closure1_slot7 = var1;
            var7 = 3;
            var1 = var6[var7];
            var4 = var5.bind(var0)(var1);
            var1 = var4.isIOS;
            var4 = var1.bind(var4)();
            var1 = '';
            if (!var4) {
                _fun70742_ip = 180;
                continue _fun70742
            }
        case 174:
            var1 = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
        case 180:
            var _closure1_slot8 = var1;
            var1 = {};
            var1.UNREADY = var12;
            var4 = 'UNREADY';
            var1[var12] = var4;
            var1.READY = var11;
            var4 = 'READY';
            var1[var11] = var4;
            var1.ERRORED = var9;
            var4 = 'ERRORED';
            var1[var9] = var4;
            var1.UNSTARTED = var7;
            var4 = 'UNSTARTED';
            var1[var7] = var4;
            var7 = 4;
            var1.ENDED = var7;
            var4 = 'ENDED';
            var1[var7] = var4;
            var7 = 5;
            var1.PLAYING = var7;
            var4 = 'PLAYING';
            var1[var7] = var4;
            var7 = 6;
            var1.PAUSED = var7;
            var4 = 'PAUSED';
            var1[var7] = var4;
            var7 = 7;
            var1.BUFFERING = var7;
            var4 = 'BUFFERING';
            var1[var7] = var4;
            var4 = 8;
            var1.VIDEO_CUED = var4;
            var7 = 'VIDEO_CUED';
            var1[var4] = var7;
            var _closure1_slot9 = var1;
            var9 = var10.create;
            var7 = {};
            var11 = {
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0,
                'position': 'absolute',
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var7.loading = var11;
            var7 = var9.bind(var10)(var7);
            var _closure1_slot10 = var7;
            var7 = {};
            var9 = 'function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}';
            var7.code = var9;
            var _closure1_slot11 = var7;
            var7 = {};
            var9 = 'function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}';
            var7.code = var9;
            var _closure1_slot12 = var7;
            var7 = var8.forwardRef;
            var3 = function(arg0, arg1) { // Environment: var3
                _fun70743: for (var _fun70743_ip = 0;;) switch (_fun70743_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = var5.style;
                        var7 = var5.playerState;
                        var _closure2_slot0 = var7;
                        var12 = var5.onDataReceived;
                        var _closure2_slot1 = var12;
                        var6 = var5.baseURL;
                        var _closure2_slot2 = var6;
                        var19 = var5.injectedJavaScript;
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
                        var23 = null;
                        var24 = var3;
                        var2 = silentSetPrototypeOf(var24, var23);
                        var8 = 0;
                        var24 = {};
                        var23 = var5;
                        var22 = var3;
                        var13 = copyDataProperties(var24, var23, var22);
                        var21 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var10 = 4;
                        var2 = var15[var10];
                        var3 = undefined;
                        var5 = var21.bind(var3)(var2);
                        var2 = var5.useSharedValue;
                        var18 = 1;
                        var17 = var2.bind(var5)(var18);
                        var _closure2_slot4 = var17;
                        var2 = var15[var10];
                        var5 = var21.bind(var3)(var2);
                        var2 = var5.useSharedValue;
                        var2 = var2.bind(var5)(var8);
                        var _closure2_slot5 = var2;
                        var5 = var15[var10];
                        var11 = var21.bind(var3)(var5);
                        var8 = var11.useAnimatedStyle;
                        var5 = function() {
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
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
                        var14 = {};
                        var20 = 5;
                        var16 = var15[var20];
                        var16 = var21.bind(var3)(var16);
                        var16 = var16.withTiming;
                        var14.withTiming = var16;
                        var14.webviewOpacity = var2;
                        var5.__closure = var14;
                        var14 = 2179142865986.0;
                        var5.__workletHash = var14;
                        var14 = _closure1_slot11;
                        var5.__initData = var14;
                        var16 = var8.bind(var11)(var5);
                        var5 = var15[var10];
                        var11 = var21.bind(var3)(var5);
                        var8 = var11.useAnimatedStyle;
                        var5 = function() {
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
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
                        var14 = {};
                        var20 = var15[var20];
                        var20 = var21.bind(var3)(var20);
                        var20 = var20.withTiming;
                        var14.withTiming = var20;
                        var14.loaderOpacity = var17;
                        var5.__closure = var14;
                        var14 = 7752174298017.0;
                        var5.__workletHash = var14;
                        var14 = _closure1_slot12;
                        var5.__initData = var14;
                        var11 = var8.bind(var11)(var5);
                        var5 = _closure1_slot3;
                        var14 = var5.useEffect;
                        var8 = new Array(3);
                        var8[0] = var7;
                        var8[1] = var17;
                        var8[2] = var2;
                        var2 = function() { // Environment: var0
                            _fun70746: for (var _fun70746_ip = 0;;) switch (_fun70746_ip) {
                                case 0:
                                    var3 = _closure2_slot0;
                                    var1 = _closure1_slot9;
                                    var1 = var1.BUFFERING;
                                    var1 = var3 !== var1;
                                    if (!var1) {
                                        _fun70746_ip = 45;
                                        continue _fun70746
                                    }
                                case 27:
                                    var4 = _closure2_slot0;
                                    var3 = _closure1_slot9;
                                    var3 = var3.PLAYING;
                                    var1 = var4 !== var3;
                                case 45:
                                    if (!var1) {
                                        _fun70746_ip = 66;
                                        continue _fun70746
                                    }
                                case 48:
                                    var3 = _closure2_slot0;
                                    var2 = _closure1_slot9;
                                    var2 = var2.ERRORED;
                                    var1 = var3 !== var2;
                                case 66:
                                    if (var1) {
                                        _fun70746_ip = 102;
                                        continue _fun70746
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
                        var2 = var14.bind(var5)(var2, var8);
                        var8 = var5.useCallback;
                        var2 = new Array(2);
                        var2[0] = var12;
                        var2[1] = var1;
                        var1 = function(arg0) { // Environment: var0
                            _fun70747: for (var _fun70747_ip = 0;;) switch (_fun70747_ip) {
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
                                        _fun70747_ip = 53;
                                        continue _fun70747
                                    }
                                case 39:
                                    var2 = var1.event;
                                    var1 = 'click';
                                    if (!(var1 !== var2)) {
                                        _fun70747_ip = 80;
                                        continue _fun70747
                                    }
                                case 53:
                                    var2 = _closure2_slot1;
                                    var0 = var0.nativeEvent;
                                    var1 = var0.data;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    _fun70747_ip = 121;
                                    continue _fun70747;
                                case 80:
                                    var0 = _closure2_slot3;
                                    var2 = var0.overlayEnabled;
                                    var1 = var2.set;
                                    var3 = var0.overlayEnabled;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    var0 = !var0;
                                    var0 = var1.bind(var2)(var0);
                                case 121:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var17 = var8.bind(var5)(var1, var2);
                        var2 = var5.useCallback;
                        var1 = new Array(1);
                        var1[0] = var6;
                        var0 = function(arg0) { // Environment: var0
                            _fun70748: for (var _fun70748_ip = 0;;) switch (_fun70748_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.url;
                                    var0 = 'about:blank';
                                    var0 = var0 !== var2;
                                    if (!var0) {
                                        _fun70748_ip = 47;
                                        continue _fun70748
                                    }
                                case 21:
                                    var4 = var1.url;
                                    var3 = var4.startsWith;
                                    var2 = _closure2_slot2;
                                    var2 = var3.bind(var4)(var2);
                                    var0 = !var2;
                                case 47:
                                    if (!var0) {
                                        _fun70748_ip = 74;
                                        continue _fun70748
                                    }
                                case 50:
                                    var3 = var1.isTopFrame;
                                    var2 = null;
                                    var2 = var2 == var3;
                                    if (var2) {
                                        _fun70748_ip = 71;
                                        continue _fun70748
                                    }
                                case 65:
                                    var2 = var1.isTopFrame;
                                case 71:
                                    var0 = var2;
                                case 74:
                                    var0 = !var0;
                                    if (var0) {
                                        _fun70748_ip = 123;
                                        continue _fun70748
                                    }
                                case 80:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 6;
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
                        var14 = var2.bind(var5)(var0, var1);
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var0.style = var4;
                        var6 = _closure1_slot6;
                        var12 = _closure1_slot1;
                        var4 = var15[var10];
                        var4 = var12.bind(var3)(var4);
                        var5 = var4.View;
                        var4 = {};
                        var8 = new Array(2);
                        var8[0] = var16;
                        var16 = {};
                        var16.flex = var18;
                        var8[1] = var16;
                        var4.style = var8;
                        var8 = 7;
                        var8 = var15[var8];
                        var12 = var12.bind(var3)(var8);
                        var8 = {};
                        var24 = var8;
                        var23 = var13;
                        var13 = copyDataProperties(var24, var23);
                        var18 = _closure1_slot8;
                        var13 = global;
                        var13 = var13.HermesInternal;
                        var16 = var13.concat;
                        var15 = '';
                        var13 = '\n';
                        var15 = var16.bind(var15)(var19, var13, var18);
                        var13 = 'injectedJavaScript';
                        var8[var13] = var15;
                        var15 = false;
                        var13 = 'bounces';
                        var8[var13] = var15;
                        var16 = arg1;
                        var13 = 'ref';
                        var8[var13] = var16;
                        var13 = 'scrollEnabled';
                        var8[var13] = var15;
                        var16 = true;
                        var13 = 'javaScriptEnabled';
                        var8[var13] = var16;
                        var13 = 'onMessage';
                        var8[var13] = var17;
                        var13 = 'allowsInlineMediaPlayback';
                        var8[var13] = var16;
                        var13 = 'mediaPlaybackRequiresUserAction';
                        var8[var13] = var15;
                        var13 = 'onShouldStartLoadWithRequest';
                        var8[var13] = var14;
                        var8 = var6.bind(var3)(var12, var8);
                        var4.children = var8;
                        var5 = var6.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = _closure1_slot9;
                        var5 = var5.PLAYING;
                        var5 = var7 !== var5;
                        if (!var5) {
                            _fun70743_ip = 688;
                            continue _fun70743
                        }
                    case 674:
                        var6 = _closure1_slot9;
                        var6 = var6.PAUSED;
                        var5 = var7 !== var6;
                    case 688:
                        if (!var5) {
                            _fun70743_ip = 779;
                            continue _fun70743
                        }
                    case 691:
                        var8 = _closure1_slot6;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.View;
                        var6 = {};
                        var10 = new Array(2);
                        var10[0] = var11;
                        var11 = _closure1_slot10;
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
                    case 779:
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var7 = var7.bind(var8)(var3);
            var3 = var8.memo;
            var3 = var3.bind(var8)(var7);
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/media_viewer/native/components/MediaModalWebView.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.PlayerState = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 3722, 4098, 3146, 5951, 2]);