// modules/activities/native/createWebviewHtmlFile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64878: for (var _fun64878_ip = 0;;) switch (_fun64878_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64878_ip = 341;
                            continue _fun64878
                        }
                    case 13:
                        var10 = var1.iFrameUri;
                        var9 = var1.iFrameSandboxAttributes;
                        var8 = var1.referrerPolicy;
                        var7 = var1.insets;
                        var2 = var1.messageForDisallowedNavigationError;
                        var5 = undefined;
                        var6 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 53);
                    case 51:
                        return var5;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64878_ip = 338;
                            continue _fun64878
                        }
                    case 62:
                        var6 = 'discord_activity_data/activity.html';
                        var3 = {};
                        var3.iFrameUri = var10;
                        var3.iFrameSandboxAttributes = var9;
                        var3.referrerPolicy = var8;
                        var3.insets = var7;
                        var3.messageForDisallowedNavigationError = var2;
                        var2 = function(arg0) { // Environment: var2
                            _fun64879: for (var _fun64879_ip = 0;;) switch (_fun64879_ip) {
                                case 0:
                                    var0 = arg0;
                                    var11 = var0.iFrameUri;
                                    var10 = var0.iFrameSandboxAttributes;
                                    var9 = var0.referrerPolicy;
                                    var4 = var0.insets;
                                    var6 = var0.messageForDisallowedNavigationError;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 2;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var1);
                                    var1 = var3.isAndroid;
                                    var1 = var1.bind(var3)();
                                    var8 = '';
                                    var7 = var8;
                                    if (!var1) {
                                        _fun64879_ip = 168;
                                        continue _fun64879
                                    }
                                case 78:
                                    var3 = _closure1_slot5;
                                    var1 = {
                                        'insets': null,
                                        'iframeWindowVarName': 'iframeWindow',
                                        'isIframeLoadedVarName': 'isIframeLoaded'
                                    };
                                    var1.insets = var4;
                                    var5 = var3.bind(var2)(var1);
                                    var1 = _closure1_slot6;
                                    var0 = {
                                        'iframeWindowVarName': 'iframeWindow',
                                        'isIframeLoadedVarName': 'isIframeLoaded'
                                    };
                                    var19 = var1.bind(var2)(var0);
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var3 = var0.concat;
                                    var22 = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        ';
                                    var20 = '\n        ';
                                    var18 = '\n      </script>\n      ';
                                    var21 = var5;
                                    var7 = var22[var3](var21, var20, var19, var18, var17);
                                case 168:
                                    var0 = null;
                                    var0 = var0 != var6;
                                    if (!var0) {
                                        _fun64879_ip = 250;
                                        continue _fun64879
                                    }
                                case 177:
                                    var0 = global;
                                    var1 = var0.HermesInternal;
                                    var5 = var1.concat;
                                    var22 = '\n  ';
                                    var21 = 'iframeWindow';
                                    var20 = ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('";
                                    var18 = "');\n    e.preventDefault();\n  });\n";
                                    var19 = var6;
                                    var3 = var22[var5](var21, var20, var19, var18, var17);
                                    var0 = var0.HermesInternal;
                                    var2 = var0.concat;
                                    var1 = '\n      <script type="text/javascript">\n        var iframe = document.getElementById("activityFrame");\n        var iframeWindow = iframe.contentWindow;\n        ';
                                    var0 = '\n      </script>\n      ';
                                    var8 = var2.bind(var1)(var3, var0);
                                case 250:
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var6 = var0.concat;
                                    var22 = '\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name="viewport"\n      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"\n      />\n  </head>\n  <body>\n      <script type="text/javascript">\n          window.addEventListener(\'message\', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id="activityFrame" width="100%" height="100%" src="';
                                    var20 = '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen sandbox="';
                                    var18 = '" referrerPolicy="';
                                    var16 = '">\n      </iframe>\n      ';
                                    var14 = '\n      ';
                                    var12 = '\n  </body>\n  </html>\n';
                                    var21 = var11;
                                    var19 = var10;
                                    var17 = var9;
                                    var15 = var7;
                                    var13 = var8;
                                    var0 = var22[var6](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                                    return var0;
                            }
                        };
                        var4 = var2.bind(var5)(var3);
                    case 107: // try_start_0
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 2;
                        var2 = var8[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun64878_ip = 201;
                            continue _fun64878
                        }
                    case 143:
                        var2 = _closure1_slot4;
                        var11 = var2.DCDFileManager;
                        var10 = var11.writeFile;
                        var14 = var6;
                        var13 = var4;
                        var15 = 'cache';
                        var12 = 'utf8';
                        var16 = var11;
                        var2 = var16[var10](var15, var14, var13, var12, var11);
                        SaveGenerator(address = 186);
                    case 184:
                        return var2;
                    case 186:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        var8 = var3;
                        var3 = var2;
                        if (!var8) {
                            _fun64878_ip = 291;
                            continue _fun64878
                        }
                    case 198: // try_end0
                        return var2;
                    case 201: // try_start_1
                        var8 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var9 = 3;
                        var2 = var2[var9];
                        var8 = var8.bind(var5)(var2);
                        var2 = null;
                        var8 = var2 == var8;
                        var2 = undefined;
                        if (var8) {
                            _fun64878_ip = 278;
                            continue _fun64878
                        }
                    case 232:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var10 = var8.bind(var5)(var7);
                        var9 = var10.writeFile;
                        var14 = var6;
                        var13 = var4;
                        var15 = 'cache';
                        var12 = 'utf8';
                        var16 = var10;
                        var2 = var16[var9](var15, var14, var13, var12, var11);
                    case 278:
                        SaveGenerator(address = 282);
                    case 280:
                        return var2;
                    case 282:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        var3 = var2;
                        if (var4) {
                            _fun64878_ip = 294;
                            continue _fun64878
                        }
                    case 291: // try_end1
                        return var3;
                    case 294:
                        return var2;
                    case 297: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                        var2 = null;
                        return var2;
                    case 338:
                        return var1;
                    case 341:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        _fun64880: for (var _fun64880_ip = 0;;) switch (_fun64880_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.insets;
                var14 = var1.iframeWindowVarName;
                var13 = var1.isIframeLoadedVarName;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun64880_ip = 37;
                    continue _fun64880
                }
            case 27:
                var0 = {
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0
                };
            case 37:
                var24 = var0.left;
                var22 = var0.right;
                var20 = var0.top;
                var18 = var0.bottom;
                var0 = global;
                var0 = var0.HermesInternal;
                var8 = var0.concat;
                var29 = '\n  ';
                var27 = '.addEventListener("load", () => {\n    var iframeDoc = ';
                var25 = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '";
                var23 = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '";
                var21 = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '";
                var19 = "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '";
                var17 = "px');\n    ";
                var15 = ' = true;\n  });\n';
                var28 = var14;
                var26 = var14;
                var16 = var13;
                var0 = var29[var8](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.iframeWindowVarName;
        var12 = var0.isIframeLoadedVarName;
        var0 = global;
        var0 = var0.HermesInternal;
        var6 = var0.concat;
        var19 = '\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = ';
        var17 = ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    ";
        var15 = ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  ";
        var13 = ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (";
        var11 = ') {\n        updateSafeAreaVars(insets);\n      } else {\n        ';
        var9 = '.addEventListener("load", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n';
        var18 = var8;
        var16 = var8;
        var14 = var8;
        var10 = var8;
        var0 = var19[var6](var18, var17, var16, var15, var14, var13, var12, var11, var10, var9, var8);
        return var0;
    };
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/createWebviewHtmlFile.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot5;
        var1 = {
            'insets': null,
            'iframeWindowVarName': 'iframeWindow',
            'isIframeLoadedVarName': 'isIframeLoaded'
        };
        var2 = arg0;
        var1.insets = var2;
        var2 = undefined;
        var4 = var3.bind(var2)(var1);
        var1 = _closure1_slot6;
        var0 = {
            'iframeWindowVarName': 'iframeWindow',
            'isIframeLoadedVarName': 'isIframeLoaded'
        };
        var6 = var1.bind(var2)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var9 = '\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n';
        var0 = '\n';
        var8 = var4;
        var7 = var0;
        var5 = var0;
        var0 = var9[var2](var8, var7, var6, var5, var4);
        return var0;
    };
    var2.createInjectedJavascriptForIOS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 478, 1269, 1207, 2]);