// utils/web/ProtocolUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun93081: for (var _fun93081_ip = 0;;) switch (_fun93081_ip) {
        case 0:
            var9 = metroImportDefault;
            var2 = exports;
            var4 = dependencyMap;
            var6 = function(arg0, arg1) { // Original name: launchFirefox, environment: var0
                _fun93082: for (var _fun93082_ip = 0;;) switch (_fun93082_ip) {
                    case 0:
                        var7 = arg0;
                        var3 = var7;
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        var2 = undefined;
                        var5 = undefined;
                        var4 = undefined;
                        var6 = var7.startsWith;
                        var1 = 'discord:';
                        var6 = var6.bind(var7)(var1);
                        var1 = global;
                        if (var6) {
                            _fun93082_ip = 84;
                            continue _fun93082
                        }
                    case 43:
                        var7 = var1.location;
                        var6 = var3;
                        var7.href = var6;
                        var8 = var1.process;
                        var7 = var8.nextTick;
                        var6 = function() { // Environment: var0
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                        return var6;
                    case 84:
                        var6 = var1.document;
                        var7 = var6.body;
                        var5 = var7;
                        var _closure2_slot1 = var7;
                        var6 = null;
                        if (!(var6 != var7)) {
                            _fun93082_ip = 282;
                            continue _fun93082
                        }
                    case 111:
                        var9 = var1.document;
                        var8 = var9.createElement;
                        var7 = 'iframe';
                        var8 = var8.bind(var9)(var7);
                        var4 = var8;
                        var _closure2_slot2 = var8;
                        var7 = var5;
                        var5 = var7.appendChild;
                        var5 = var5.bind(var7)(var8);
                    case 153: // try_start_0
                        var5 = var4;
                        var5 = var5.contentWindow;
                        if (!(var6 != var5)) {
                            _fun93082_ip = 183;
                            continue _fun93082
                        }
                    case 166:
                        var4 = var4.contentWindow;
                        var4 = var4.location;
                        var4.href = var3;
                    case 183:
                        var5 = var1.process;
                        var4 = var5.nextTick;
                        var3 = function() { // Environment: var0
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                    case 207: // try_end0
                        _fun93082_ip = 250;
                        continue _fun93082;
                    case 209: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = var3.name;
                        var3 = 'NS_ERROR_UNKNOWN_PROTOCOL';
                        if (!(var3 === var4)) {
                            _fun93082_ip = 250;
                            continue _fun93082
                        }
                    case 226:
                        var5 = var1.process;
                        var4 = var5.nextTick;
                        var3 = function() { // Environment: var0
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                    case 250:
                        var6 = var1.window;
                        var5 = var6.setTimeout;
                        var4 = function() { // Environment: var0
                            _fun93087: for (var _fun93087_ip = 0;;) switch (_fun93087_ip) {
                                case 0:
                                    var0 = _closure2_slot2;
                                    var3 = null;
                                    var2 = var3 == var0;
                                    var0 = undefined;
                                    var4 = undefined;
                                    if (var2) {
                                        _fun93087_ip = 30;
                                        continue _fun93087
                                    }
                                case 20:
                                    var2 = _closure2_slot2;
                                    var4 = var2.parentElement;
                                case 30:
                                    var5 = var3 != var4;
                                    var2 = null;
                                    if (!var5) {
                                        _fun93087_ip = 42;
                                        continue _fun93087
                                    }
                                case 39:
                                    var2 = var4;
                                case 42:
                                    if (!(var3 !== var2)) {
                                        _fun93087_ip = 65;
                                        continue _fun93087
                                    }
                                case 46:
                                    var3 = _closure2_slot1;
                                    var2 = var3.removeChild;
                                    var1 = _closure2_slot2;
                                    var1 = var2.bind(var3)(var1);
                                case 65:
                                    return var0;
                            }
                        };
                        var3 = 1000;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 282:
                        var2 = var1.process;
                        var1 = var2.nextTick;
                        var0 = function() { // Environment: var0
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var3 = function(arg0, arg1) { // Original name: launchChrome, environment: var0
                var0 = arg1;
                var _closure2_slot0 = var0;
                var5 = function() { // Original name: handleBlur, environment: var1
                    var0 = true;
                    _closure2_slot1 = var0;
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot2 = var5;
                var0 = false;
                var _closure2_slot1 = var0;
                var0 = global;
                var4 = var0.window;
                var3 = var4.addEventListener;
                var2 = 'blur';
                var2 = var3.bind(var4)(var2, var5);
                var3 = var0.location;
                var2 = arg0;
                var3.href = var2;
                var3 = var0.setTimeout;
                var0 = undefined;
                var2 = function() { // Environment: var1
                    var0 = global;
                    var4 = var0.window;
                    var3 = var4.removeEventListener;
                    var2 = _closure2_slot2;
                    var1 = 'blur';
                    var1 = var3.bind(var4)(var1, var2);
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = 1000;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var7 = function(arg0, arg1) { // Original name: launchSteam, environment: var0
                var2 = arg1;
                var0 = undefined;
                var1 = false;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var5 = function(arg0, arg1) { // Original name: launchMobile, environment: var0
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = global;
                var3 = var1.location;
                var2 = arg0;
                var3.href = var2;
                var2 = var1.process;
                var1 = var2.nextTick;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0 = global;
            var10 = var0.Object;
            var8 = var10.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var10)(var2, var0, var1);
            var1 = {};
            var8 = 0;
            var10 = var4[var8];
            var0 = undefined;
            var10 = var9.bind(var0)(var10);
            var10 = var10.os;
            var11 = null;
            var13 = var11 == var10;
            var12 = undefined;
            if (var13) {
                _fun93081_ip = 109;
                continue _fun93081
            }
        case 103:
            var12 = var10.family;
        case 109:
            var10 = 'Android';
            if (!(var10 !== var12)) {
                _fun93081_ip = 260;
                continue _fun93081
            }
        case 122:
            var10 = var4[var8];
            var10 = var9.bind(var0)(var10);
            var10 = var10.os;
            var13 = var11 == var10;
            var12 = undefined;
            if (var13) {
                _fun93081_ip = 152;
                continue _fun93081
            }
        case 146:
            var12 = var10.family;
        case 152:
            var10 = 'iOS';
            if (!(var10 !== var12)) {
                _fun93081_ip = 260;
                continue _fun93081
            }
        case 162:
            var10 = var4[var8];
            var10 = var9.bind(var0)(var10);
            var12 = var10.layout;
            var10 = 'Gecko';
            if (!(var10 !== var12)) {
                _fun93081_ip = 255;
                continue _fun93081
            }
        case 187:
            var10 = var4[var8];
            var10 = var9.bind(var0)(var10);
            var10 = var10.ua;
            if (!(var11 != var10)) {
                _fun93081_ip = 248;
                continue _fun93081
            }
        case 206:
            var8 = var4[var8];
            var8 = var9.bind(var0)(var8);
            var10 = var8.ua;
            var9 = var10.indexOf;
            var8 = 'Valve Steam GameOverlay';
            var9 = var9.bind(var10)(var8);
            var8 = -1;
            if (!(var8 === var9)) {
                _fun93081_ip = 250;
                continue _fun93081
            }
        case 248:
            _fun93081_ip = 253;
            continue _fun93081;
        case 250:
            var3 = var7;
        case 253:
            _fun93081_ip = 258;
            continue _fun93081;
        case 255:
            var3 = var6;
        case 258:
            _fun93081_ip = 263;
            continue _fun93081;
        case 260:
            var3 = var5;
        case 263:
            var1.launch = var3;
            var3 = 1;
            var4 = var4[var3];
            var3 = arg1;
            var5 = var3.bind(var0)(var4);
            var4 = var5.fileFinishedImporting;
            var3 = 'utils/web/ProtocolUtils.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3401, 2]);