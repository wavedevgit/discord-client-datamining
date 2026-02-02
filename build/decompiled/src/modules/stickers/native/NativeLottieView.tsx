// modules/stickers/native/NativeLottieView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun55493: for (var _fun55493_ip = 0;;) switch (_fun55493_ip) {
        case 0:
            var5 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var9 = 0;
            var1 = var6[var9];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var7 = var1.useEffect;
            var _closure1_slot0 = var7;
            var1 = var1.useRef;
            var _closure1_slot1 = var1;
            var1 = var6[var9];
            var1 = var4.bind(var0)(var1);
            var _closure1_slot2 = var1;
            var8 = 1;
            var1 = var6[var8];
            var1 = var5.bind(var0)(var1);
            var10 = var1.requireNativeComponent;
            var7 = 2;
            var1 = var6[var7];
            var1 = var5.bind(var0)(var1);
            var1 = var1.jsx;
            var _closure1_slot3 = var1;
            var1 = 3;
            var1 = var6[var1];
            var11 = var5.bind(var0)(var1);
            var1 = var11.isAndroid;
            var1 = var1.bind(var11)();
            if (var1) {
                _fun55493_ip = 167;
                continue _fun55493
            }
        case 154:
            var1 = 'NativeLottieNode';
            var1 = var10.bind(var0)(var1);
            _fun55493_ip = 179;
            continue _fun55493;
        case 167:
            var10 = 4;
            var10 = var6[var10];
            var1 = var4.bind(var0)(var10);
        case 179:
            var _closure1_slot4 = var1;
            var1 = 5;
            var1 = var6[var1];
            var4 = var4.bind(var0)(var1);
            var1 = {};
            var10 = ['setup'];
            var1.supportedCommands = var10;
            var1 = var4.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = {};
            var1.LOOP = var9;
            var4 = 'LOOP';
            var1[var9] = var4;
            var1.STILL = var8;
            var4 = 'STILL';
            var1[var8] = var4;
            var1.ONCE = var7;
            var4 = 'ONCE';
            var1[var7] = var4;
            var _closure1_slot6 = var1;
            var4 = 6;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/stickers/native/NativeLottieView.tsx';
            var4 = var5.bind(var6)(var4);
            var3 = function arg0() {
                _fun55494: for (var _fun55494_ip = 0;;) switch (_fun55494_ip) {
                    case 0:
                        var0 = arg0;
                        var12 = var0.asset;
                        var11 = var0.url;
                        var7 = var0.width;
                        var6 = var0.height;
                        var5 = var0.opacity;
                        var3 = undefined;
                        if (!(var5 === var3)) {
                            _fun55494_ip = 40;
                            continue _fun55494
                        }
                    case 37:
                        var5 = 1;
                    case 40:
                        var9 = var0.renderMode;
                        if (!(var9 === var3)) {
                            _fun55494_ip = 63;
                            continue _fun55494
                        }
                    case 50:
                        var2 = _closure1_slot6;
                        var9 = var2.LOOP;
                    case 63:
                        var _closure2_slot0 = var9;
                        var10 = var0.animating;
                        if (!(var10 === var3)) {
                            _fun55494_ip = 79;
                            continue _fun55494
                        }
                    case 77:
                        var10 = true;
                    case 79:
                        var2 = var0.accessibilityLabel;
                        var _closure2_slot1 = var3;
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var13 = _closure1_slot2;
                        var8 = var13.useRef;
                        var4 = null;
                        var4 = var8.bind(var13)(var4);
                        _closure2_slot1 = var4;
                        var8 = {};
                        var8.asset = var12;
                        var8.url = var11;
                        var8.width = var7;
                        var8.height = var6;
                        var8.animating = var10;
                        var8.accessibilityLabel = var2;
                        _closure2_slot2 = var8;
                        var2 = _closure1_slot1;
                        var2 = var2.bind(var3)(var8);
                        _closure2_slot3 = var2;
                        var8 = _closure1_slot0;
                        var2 = function() { // Environment: var1
                            var1 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var8.bind(var3)(var2);
                        var2 = new Array(1);
                        var2[0] = var9;
                        var1 = function() { // Environment: var1
                            _fun55496: for (var _fun55496_ip = 0;;) switch (_fun55496_ip) {
                                case 0:
                                    var1 = _closure2_slot3;
                                    var1 = var1.current;
                                    var7 = var1.asset;
                                    var6 = var1.url;
                                    var5 = var1.width;
                                    var4 = var1.height;
                                    var3 = var1.animating;
                                    var2 = var1.accessibilityLabel;
                                    var1 = {};
                                    var1.asset = var7;
                                    var1.url = var6;
                                    var1.width = var5;
                                    var1.height = var4;
                                    var4 = _closure2_slot0;
                                    var1.renderMode = var4;
                                    var1.animating = var3;
                                    var1.accessibilityLabel = var2;
                                    var9 = var1.asset;
                                    var8 = var1.url;
                                    var7 = var1.width;
                                    var6 = var1.height;
                                    var5 = var1.renderMode;
                                    var4 = var1.animating;
                                    var3 = var1.accessibilityLabel;
                                    var1 = '';
                                    var1 = var1 !== var8;
                                    if (!var1) {
                                        _fun55496_ip = 136;
                                        continue _fun55496
                                    }
                                case 130:
                                    var2 = 0;
                                    var1 = var2 !== var7;
                                case 136:
                                    if (!var1) {
                                        _fun55496_ip = 145;
                                        continue _fun55496
                                    }
                                case 139:
                                    var2 = 0;
                                    var1 = var2 !== var6;
                                case 145:
                                    if (!var1) {
                                        _fun55496_ip = 198;
                                        continue _fun55496
                                    }
                                case 148:
                                    var2 = _closure1_slot5;
                                    var1 = var2.setup;
                                    var0 = _closure2_slot1;
                                    var17 = var0.current;
                                    var18 = var2;
                                    var16 = var9;
                                    var15 = var8;
                                    var14 = var7;
                                    var13 = var6;
                                    var12 = var5;
                                    var11 = var4;
                                    var10 = var3;
                                    var0 = var18[var1](var17, var16, var15, var14, var13, var12, var11, var10, var9);
                                case 198:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var8.bind(var3)(var1, var2);
                        var2 = _closure1_slot3;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var0.ref = var4;
                        var4 = {};
                        var4.width = var7;
                        var4.height = var6;
                        var4.opacity = var5;
                        var0.style = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var3;
            var2.NativeLottieRenderMode = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 6665, 116, 2]);