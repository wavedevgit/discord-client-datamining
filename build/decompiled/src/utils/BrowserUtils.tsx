// utils/BrowserUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29226: for (var _fun29226_ip = 0;;) switch (_fun29226_ip) {
        case 0:
            var14 = metroImportDefault;
            var2 = exports;
            var10 = dependencyMap;
            var8 = function() {
                var0 = _closure1_slot0;
                return var0;
            };
            var _closure1_slot5 = var8;
            var7 = function() {
                var0 = _closure1_slot1;
                return var0;
            };
            var _closure1_slot6 = var7;
            var6 = function() {
                var0 = _closure1_slot2;
                return var0;
            };
            var _closure1_slot7 = var6;
            var5 = function() {
                var0 = _closure1_slot3;
                return var0;
            };
            var _closure1_slot8 = var5;
            var4 = function() {
                var0 = _closure1_slot4;
                return var0;
            };
            var _closure1_slot9 = var4;
            var3 = function() {
                _fun29232: for (var _fun29232_ip = 0;;) switch (_fun29232_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun29232_ip = 23;
                            continue _fun29232
                        }
                    case 9:
                        var0 = global;
                        var0 = var0.navigator;
                        var1 = var0.userAgent;
                    case 23:
                        var0 = var1.toLowerCase;
                        var4 = var0.bind(var1)();
                        var1 = var4.indexOf;
                        var0 = 'safari';
                        var0 = var1.bind(var4)(var0);
                        var2 = -1;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun29232_ip = 85;
                            continue _fun29232
                        }
                    case 63:
                        var3 = var4.indexOf;
                        var1 = 'chrome';
                        var1 = var3.bind(var4)(var1);
                        var1 = var2 !== var1;
                        var0 = !var1;
                    case 85:
                        if (!var0) {
                            _fun29232_ip = 109;
                            continue _fun29232
                        }
                    case 88:
                        var3 = var4.indexOf;
                        var1 = 'version/';
                        var1 = var3.bind(var4)(var1);
                        var0 = var2 !== var1;
                    case 109:
                        return var0;
                }
            };
            var _closure1_slot10 = var3;
            var13 = global;
            var12 = var13.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var0 = true;
            var9.value = var0;
            var0 = '__esModule';
            var0 = var11.bind(var12)(var2, var0, var9);
            var11 = 0;
            var9 = var10[var11];
            var0 = undefined;
            var9 = var14.bind(var0)(var9);
            var9 = var9.name;
            var12 = null;
            var16 = var12 != var9;
            var15 = 'unknown';
            if (!var16) {
                _fun29226_ip = 131;
                continue _fun29226
            }
        case 128:
            var15 = var9;
        case 131:
            var9 = var15.toLowerCase;
            var16 = var9.bind(var15)();
            var9 = var16.toLowerCase;
            var18 = var9.bind(var16)();
            var9 = -1;
            var17 = 'chrome';
            var15 = var9;
            if (!(var17 === var18)) {
                _fun29226_ip = 212;
                continue _fun29226
            }
        case 168:
            var19 = var13.parseInt;
            var17 = var10[var11];
            var17 = var14.bind(var0)(var17);
            var17 = var17.version;
            var20 = var12 != var17;
            var18 = '';
            if (!var20) {
                _fun29226_ip = 203;
                continue _fun29226
            }
        case 200:
            var18 = var17;
        case 203:
            var17 = 10;
            var15 = var19.bind(var0)(var18, var17);
        case 212:
            var _closure1_slot0 = var15;
            var15 = var16.toLowerCase;
            var18 = var15.bind(var16)();
            var17 = 'electron';
            var15 = var9;
            if (!(var17 === var18)) {
                _fun29226_ip = 281;
                continue _fun29226
            }
        case 237:
            var19 = var13.parseInt;
            var17 = var10[var11];
            var17 = var14.bind(var0)(var17);
            var17 = var17.version;
            var20 = var12 != var17;
            var18 = '';
            if (!var20) {
                _fun29226_ip = 272;
                continue _fun29226
            }
        case 269:
            var18 = var17;
        case 272:
            var17 = 10;
            var15 = var19.bind(var0)(var18, var17);
        case 281:
            var _closure1_slot1 = var15;
            var15 = var16.toLowerCase;
            var18 = var15.bind(var16)();
            var17 = 'firefox';
            var15 = var9;
            if (!(var17 === var18)) {
                _fun29226_ip = 352;
                continue _fun29226
            }
        case 308:
            var19 = var13.parseInt;
            var17 = var10[var11];
            var17 = var14.bind(var0)(var17);
            var17 = var17.version;
            var20 = var12 != var17;
            var18 = '';
            if (!var20) {
                _fun29226_ip = 343;
                continue _fun29226
            }
        case 340:
            var18 = var17;
        case 343:
            var17 = 10;
            var15 = var19.bind(var0)(var18, var17);
        case 352:
            var _closure1_slot2 = var15;
            var15 = var16.toLowerCase;
            var18 = var15.bind(var16)();
            var17 = 'edge';
            var15 = var9;
            if (!(var17 === var18)) {
                _fun29226_ip = 423;
                continue _fun29226
            }
        case 379:
            var19 = var13.parseInt;
            var17 = var10[var11];
            var17 = var14.bind(var0)(var17);
            var17 = var17.version;
            var20 = var12 != var17;
            var18 = '';
            if (!var20) {
                _fun29226_ip = 414;
                continue _fun29226
            }
        case 411:
            var18 = var17;
        case 414:
            var17 = 10;
            var15 = var19.bind(var0)(var18, var17);
        case 423:
            var _closure1_slot3 = var15;
            var15 = var16.toLowerCase;
            var16 = var15.bind(var16)();
            var15 = 'safari';
            if (!(var15 === var16)) {
                _fun29226_ip = 491;
                continue _fun29226
            }
        case 447:
            var13 = var13.parseInt;
            var11 = var10[var11];
            var11 = var14.bind(var0)(var11);
            var11 = var11.version;
            var14 = var12 != var11;
            var12 = '';
            if (!var14) {
                _fun29226_ip = 482;
                continue _fun29226
            }
        case 479:
            var12 = var11;
        case 482:
            var11 = 10;
            var9 = var13.bind(var0)(var12, var11);
        case 491:
            var _closure1_slot4 = var9;
            var9 = 1;
            var10 = var10[var9];
            var9 = arg1;
            var11 = var9.bind(var0)(var10);
            var10 = var11.fileFinishedImporting;
            var9 = 'utils/BrowserUtils.tsx';
            var9 = var10.bind(var11)(var9);
            var2.getChromeVersion = var8;
            var2.getElectronVersion = var7;
            var2.getFirefoxVersion = var6;
            var2.getEdgeVersion = var5;
            var2.getSafariVersion = var4;
            var4 = function() {
                _fun29233: for (var _fun29233_ip = 0;;) switch (_fun29233_ip) {
                    case 0:
                        var0 = _closure1_slot5;
                        var2 = undefined;
                        var0 = var0.bind(var2)();
                        var4 = -1;
                        var0 = var4 !== var0;
                        if (var0) {
                            _fun29233_ip = 38;
                            continue _fun29233
                        }
                    case 26:
                        var3 = _closure1_slot6;
                        var3 = var3.bind(var2)();
                        var0 = var4 !== var3;
                    case 38:
                        if (var0) {
                            _fun29233_ip = 53;
                            continue _fun29233
                        }
                    case 41:
                        var3 = _closure1_slot7;
                        var3 = var3.bind(var2)();
                        var0 = var4 !== var3;
                    case 53:
                        if (var0) {
                            _fun29233_ip = 68;
                            continue _fun29233
                        }
                    case 56:
                        var3 = _closure1_slot8;
                        var3 = var3.bind(var2)();
                        var0 = var4 !== var3;
                    case 68:
                        if (var0) {
                            _fun29233_ip = 86;
                            continue _fun29233
                        }
                    case 71:
                        var1 = _closure1_slot9;
                        var2 = var1.bind(var2)();
                        var1 = 14;
                        var0 = var2 >= var1;
                    case 86:
                        return var0;
                }
            };
            var2.canUseWebp = var4;
            var2.isSafari = var3;
            var3 = function() {
                _fun29234: for (var _fun29234_ip = 0;;) switch (_fun29234_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun29234_ip = 23;
                            continue _fun29234
                        }
                    case 9:
                        var0 = global;
                        var0 = var0.navigator;
                        var1 = var0.userAgent;
                    case 23:
                        var0 = var1.toLowerCase;
                        var2 = var0.bind(var1)();
                        var1 = var2.indexOf;
                        var0 = 'firefox';
                        var1 = var1.bind(var2)(var0);
                        var0 = -1;
                        var0 = var0 !== var1;
                        return var0;
                }
            };
            var2.isFirefox = var3;
            var1 = function() {
                _fun29235: for (var _fun29235_ip = 0;;) switch (_fun29235_ip) {
                    case 0:
                        var0 = global;
                        var0 = var0.window;
                        var0 = var0.navigator;
                        var4 = var0.mediaCapabilities;
                        var2 = null;
                        var5 = var2 == var4;
                        var3 = undefined;
                        var1 = undefined;
                        if (var5) {
                            _fun29235_ip = 39;
                            continue _fun29235
                        }
                    case 33:
                        var1 = var4.decodingInfo;
                    case 39:
                        var1 = var2 != var1;
                        var2 = _closure1_slot10;
                        var0 = var0.userAgent;
                        var0 = var2.bind(var3)(var0);
                        if (!var0) {
                            _fun29235_ip = 67;
                            continue _fun29235
                        }
                    case 64:
                        var0 = var1;
                    case 67:
                        return var0;
                }
            };
            var2.supportsHEVCAlpha = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3443, 2]);