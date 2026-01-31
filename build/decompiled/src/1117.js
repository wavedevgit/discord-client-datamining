// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var4 = require;
            var2 = exports;
            var3 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var5);
            var0 = 0;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.Platform;
            var3 = 'app:///index.android.bundle';
            var2.ANDROID_DEFAULT_BUNDLE_NAME = var3;
            var3 = 'app:///main.jsbundle';
            var2.IOS_DEFAULT_BUNDLE_NAME = var3;
            var1 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.rewriteFramesIntegration;
                var0 = {};
                var3 = function arg0() {
                    _fun12255: for (var _fun12255_ip = 0;;) switch (_fun12255_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.platform;
                            var1 = 'java';
                            if (!(var1 !== var2)) {
                                _fun12255_ip = 468;
                                continue _fun12255
                            }
                        case 20:
                            var2 = var0.platform;
                            var1 = 'cocoa';
                            if (!(var1 !== var2)) {
                                _fun12255_ip = 468;
                                continue _fun12255
                            }
                        case 39:
                            var1 = var0.filename;
                            if (var1) {
                                _fun12255_ip = 50;
                                continue _fun12255
                            }
                        case 48:
                            return var0;
                        case 50:
                            var1 = delete var0.abs_path;
                            var3 = var0.filename;
                            var2 = var3.replace;
                            var1 = /^file:\\/\\ //;
                            var5 = '';
                            var3 = var2.bind(var3)(var1, var5);
                            var2 = var3.replace;
                            var1 = /^address at /;
                            var3 = var2.bind(var3)(var1, var5);
                            var2 = var3.replace;
                            var1 = /^.*\\/ [ ^ .] + (\.app | CodePush | .*( ? = \\/))/; var1 = var2.bind(var3)(var1, var5); var0.filename = var1; var2 = var0.filename; var1 = '[native code]';
                                    if (!(var1 !== var2)) {
                                        _fun12255_ip = 466;
                                        continue _fun12255
                                    }
                                    case 165 :
                                    var2 = var0.filename; var1 = 'native';
                                    if (!(var1 !== var2)) {
                                        _fun12255_ip = 466;
                                        continue _fun12255
                                    }
                                    case 182:
                                    var6 = _closure1_slot0; var2 = _closure1_slot1; var4 = 2; var2 = var2[var4]; var3 = undefined; var6 = var6.bind(var3)(var2); var2 = var6.isHermesEnabled; var2 = var2.bind(var6)();
                                    if (!var2) {
                                        _fun12255_ip = 233;
                                        continue _fun12255
                                    }
                                    case 220:
                                    var7 = var0.lineno; var6 = 1; var2 = var6 === var7;
                                    case 233:
                                    if (!var2) {
                                        _fun12255_ip = 246;
                                        continue _fun12255
                                    }
                                    case 236:
                                    var6 = var0.colno; var2 = var3 !== var6;
                                    case 246:
                                    if (!var2) {
                                        _fun12255_ip = 268;
                                        continue _fun12255
                                    }
                                    case 249:
                                    var6 = var0.colno; var2 = 1; var2 = var6 + var2; var0.colno = var2;
                                    case 268:
                                    var6 = _closure1_slot0; var2 = _closure1_slot1; var2 = var2[var4]; var6 = var6.bind(var3)(var2); var2 = var6.isExpo; var2 = var2.bind(var6)();
                                    if (var2) {
                                        _fun12255_ip = 452;
                                        continue _fun12255
                                    }
                                    case 301:
                                    var2 = _closure1_slot0; var1 = _closure1_slot1; var1 = var1[var4]; var2 = var2.bind(var3)(var1); var1 = var2.isExpo; var1 = var1.bind(var2)(); var2 = var0.filename; var1 = '/InternalBytecode.js';
                                    if (!(var1 === var2)) {
                                        _fun12255_ip = 352;
                                        continue _fun12255
                                    }
                                    case 344:
                                    var1 = false; var0.in_app = var1;
                                    case 352:
                                    var2 = var0.filename; var1 = var2.indexOf; var4 = '/'; var2 = var1.bind(var2)(var4); var1 = 0;
                                    if (!(var1 !== var2)) {
                                        _fun12255_ip = 413;
                                        continue _fun12255
                                    }
                                    case 379:
                                    var3 = var0.filename; var1 = global; var1 = var1.HermesInternal; var2 = var1.concat; var1 = 'app://'; var1 = var2.bind(var5)(var1, var4, var3); _fun12255_ip = 444;
                                    continue _fun12255;
                                    case 413:
                                    var4 = var0.filename; var2 = global; var2 = var2.HermesInternal; var3 = var2.concat; var2 = 'app://'; var1 = var3.bind(var5)(var2, var4);
                                    case 444:
                                    var0.filename = var1;
                                    return var0;
                                    case 452:
                                    var1 = 'app:///index.android.bundle'; var0.filename = var1;
                                    return var0;
                                    case 466:
                                    return var0;
                                    case 468:
                                    return var0;
                                }
                            };
                            var0.iteratee = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    };
                    var2.createReactNativeRewriteFrames = var1;
                    return var0;
                })(undefined, undefined, undefined, undefined, undefined, undefined, [27, 817, 999]);