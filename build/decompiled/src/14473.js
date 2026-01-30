// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var4 = 0;
    var8 = var7[var4];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var9 = var8.useMemo;
    var _closure1_slot2 = var9;
    var8 = var8.useCallback;
    var _closure1_slot3 = var8;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.Linking;
    var _closure1_slot4 = var5;
    var5 = var4.StyleSheet;
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var6 = var3.String;
    var4 = function() { // Environment: var1
        var0 = global;
        var1 = var0.window;
        var1 = var1.ReactNativeWebView;
        var1 = var1.postMessage;
        var _closure2_slot0 = var1;
        var1 = function(arg0, arg1, arg2) { // Original name: patchedPostMessage, environment: var2
            var4 = _closure2_slot0;
            var0 = undefined;
            var3 = arg0;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var2 = function() { // Environment: var2
            var0 = global;
            var2 = var0.String;
            var0 = var0.Object;
            var1 = var0.hasOwnProperty;
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.replace;
            var1 = 'hasOwnProperty';
            var0 = 'postMessage';
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1.toString = var2;
        var0 = var0.window;
        var0 = var0.ReactNativeWebView;
        var0.postMessage = var1;
        var0 = undefined;
        return var0;
    };
    var7 = var6.bind(var0)(var4);
    var3 = var3.HermesInternal;
    var6 = var3.concat;
    var4 = '(';
    var3 = ')();';
    var3 = var6.bind(var4)(var7, var3);
    var _closure1_slot8 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'bottom': 0,
        'justifyContent': 'center',
        'left': 0,
        'position': 'absolute',
        'right': 0,
        'top': 0
    };
    var3.loadingOverlay = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot9 = var3;
    var1 = function(arg0) { // Original name: Hcaptcha, environment: var1
        _fun113009: for (var _fun113009_ip = 0;;) switch (_fun113009_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.onMessage;
                var8 = var1.siteKey;
                var _closure2_slot0 = var8;
                var10 = var1.style;
                var9 = var1.url;
                var5 = var1.languageCode;
                var0 = var1.cancelButtonText;
                var4 = var1.showLoading;
                var0 = var1.loadingIndicatorColor;
                var _closure2_slot1 = var0;
                var3 = var1.backgroundColor;
                var _closure2_slot2 = var3;
                var13 = var1.theme;
                var _closure2_slot3 = var13;
                var11 = var1.rqdata;
                var _closure2_slot4 = var11;
                var15 = var8;
                if (var15) {
                    _fun113009_ip = 102;
                    continue _fun113009
                }
            case 96:
                var15 = 'missing-sitekey';
            case 102:
                var7 = global;
                var1 = var7.HermesInternal;
                var14 = var1.concat;
                var2 = '&host=';
                var1 = '.react-native.hcaptcha.com';
                var2 = var14.bind(var2)(var15, var1);
                var1 = 'https://hcaptcha.com/1/api.js?render=explicit&onload=onloadCallback';
                var2 = var1 + var2;
                var14 = var2;
                if (!var5) {
                    _fun113009_ip = 163;
                    continue _fun113009
                }
            case 149:
                var1 = '&hl=';
                var1 = var1 + var5;
                var14 = var2 + var1;
            case 163:
                var5 = typeof var13;
                var2 = 'object';
                var1 = var14;
                if (!(var2 === var5)) {
                    _fun113009_ip = 187;
                    continue _fun113009
                }
            case 177:
                var2 = '&custom=true';
                var1 = var14 + var2;
            case 187:
                var _closure2_slot5 = var1;
                var2 = var13;
                if (!var13) {
                    _fun113009_ip = 205;
                    continue _fun113009
                }
            case 197:
                var1 = 'string';
                var2 = var1 === var5;
            case 205:
                var1 = var13;
                if (!var2) {
                    _fun113009_ip = 239;
                    continue _fun113009
                }
            case 211:
                var2 = var7.HermesInternal;
                var5 = var2.concat;
                var2 = '"';
                var2 = var5.bind(var2)(var13, var2);
                _closure2_slot3 = var2;
                var1 = var2;
            case 239:
                var2 = var11;
                if (!var2) {
                    _fun113009_ip = 256;
                    continue _fun113009
                }
            case 245:
                var13 = 'string';
                var5 = typeof var11;
                var2 = var13 === var5;
            case 256:
                if (!var2) {
                    _fun113009_ip = 284;
                    continue _fun113009
                }
            case 259:
                var2 = var7.HermesInternal;
                var5 = var2.concat;
                var2 = '"';
                var2 = var5.bind(var2)(var11, var2);
                _closure2_slot4 = var2;
            case 284:
                var5 = _closure1_slot2;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var3;
                var2[2] = var1;
                var3 = undefined;
                var1 = function() { // Environment: var12
                    _fun113010: for (var _fun113010_ip = 0;;) switch (_fun113010_ip) {
                        case 0:
                            var11 = _closure2_slot5;
                            var10 = _closure2_slot0;
                            if (var10) {
                                _fun113010_ip = 18;
                                continue _fun113010
                            }
                        case 14:
                            var10 = '';
                        case 18:
                            var17 = _closure2_slot3;
                            var15 = _closure2_slot4;
                            var13 = _closure2_slot2;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var22 = '<!DOCTYPE html>\n      <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <script src="';
                            var20 = '" async defer></script>\n        <script type="text/javascript">\n          var onloadCallback = function() {\n            try {\n              console.log("challenge onload starting");\n              hcaptcha.render("submit", getRenderConfig("';
                            var18 = '", ';
                            var16 = '));\n              // have loaded by this point; render is sync.\n              console.log("challenge render complete");\n            } catch (e) {\n              console.log("challenge failed to render");\n              window.ReactNativeWebView.postMessage("error");\n            }\n            try {\n              console.log("showing challenge");\n              hcaptcha.execute(getExecuteOpts());\n            } catch (e) {\n              console.log("failed to show challenge");\n              window.ReactNativeWebView.postMessage("error");\n            }\n          };\n          var onDataCallback = function(response) {\n            window.ReactNativeWebView.postMessage(response);\n          };\n          var onCancel = function() {\n            window.ReactNativeWebView.postMessage("cancel");\n          };\n          var onOpen = function() {\n            // NOTE: disabled for simplicity.\n            // window.ReactNativeWebView.postMessage("open");\n            console.log("challenge opened");\n          };\n          var onDataExpiredCallback = function(error) { window.ReactNativeWebView.postMessage("expired"); };\n          var onChalExpiredCallback = function(error) { window.ReactNativeWebView.postMessage("cancel"); };\n          var onDataErrorCallback = function(error) {\n            console.log("challenge error callback fired");\n            window.ReactNativeWebView.postMessage("error");\n          };\n          const getRenderConfig = function(siteKey, theme) {\n            var config = {\n              sitekey: siteKey,\n              size: "invisible",\n              callback: onDataCallback,\n              "close-callback": onCancel,\n              "open-callback": onOpen,\n              "expired-callback": onDataExpiredCallback,\n              "chalexpired-callback": onChalExpiredCallback,\n              "error-callback": onDataErrorCallback\n            };\n            if (theme) {\n              config.theme = theme;\n            }\n            return config;\n          };\n          const getExecuteOpts = function() {\n            var opts;\n            const rqdata = ';
                            var14 = ';\n            if (rqdata) {\n              opts = {"rqdata": rqdata};\n            }\n            return opts;\n          };\n        </script>\n      </head>\n      <body style="background-color: ';
                            var12 = ';">\n        <div id="submit"></div>\n      </body>\n      </html>';
                            var21 = var11;
                            var19 = var10;
                            var0 = var22[var6](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                            return var0;
                    }
                };
                var8 = var5.bind(var3)(var1, var2);
                var2 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var12
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var4 = _closure1_slot9;
                    var5 = var4.loadingOverlay;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.style = var4;
                    var5 = _closure1_slot6;
                    var4 = {};
                    var0 = 'large';
                    var4.size = var0;
                    var0 = _closure2_slot1;
                    var4.color = var0;
                    var0 = undefined;
                    var4 = var3.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var13 = _closure1_slot1;
                var0 = 3;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var13 = ['*'];
                var0.originWhitelist = var13;
                var12 = function(arg0) { // Original name: onShouldStartLoadWithRequest, environment: var12
                    _fun113012: for (var _fun113012_ip = 0;;) switch (_fun113012_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1.url;
                            var3 = var4.slice;
                            var2 = 0;
                            var0 = 24;
                            var2 = var3.bind(var4)(var2, var0);
                            var0 = 'https://www.hcaptcha.com';
                            var0 = var0 !== var2;
                            if (var0) {
                                _fun113012_ip = 62;
                                continue _fun113012
                            }
                        case 37:
                            var3 = _closure1_slot4;
                            var2 = var3.openURL;
                            var1 = var1.url;
                            var1 = var2.bind(var3)(var1);
                            var0 = false;
                        case 62:
                            return var0;
                    }
                };
                var0.onShouldStartLoadWithRequest = var12;
                var12 = 'always';
                var0.mixedContentMode = var12;
                var0.onMessage = var6;
                var6 = true;
                var0.javaScriptEnabled = var6;
                var11 = _closure1_slot8;
                var0.injectedJavaScript = var11;
                var0.automaticallyAdjustContentInsets = var6;
                var6 = new Array(2);
                var11 = {
                    'backgroundColor': 'transparent',
                    'width': '100%'
                };
                var6[0] = var11;
                var6[1] = var10;
                var0.style = var6;
                var6 = {};
                var6.html = var8;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = '';
                var7 = var8.bind(var7)(var9);
                var6.baseUrl = var7;
                var0.source = var6;
                var0.renderLoading = var5;
                var0.startInLoadingState = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5904]);