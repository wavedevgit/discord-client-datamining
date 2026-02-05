// modules/main_app_window/web/AppWindowContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = function arg0() {
        _fun60156: for (var _fun60156_ip = 0;;) switch (_fun60156_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.ownerDocument;
                var5 = var0.defaultView;
                var2 = null;
                if (!(var2 == var5)) {
                    _fun60156_ip = 25;
                    continue _fun60156
                }
            case 21:
                var0 = undefined;
                return var0;
            case 25:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.getWindowId;
                var4 = var3.bind(var4)(var5);
                var3 = _closure1_slot6;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var2 = var2 == var1;
                if (var2) {
                    _fun60156_ip = 88;
                    continue _fun60156
                }
            case 82:
                var0 = var1.windowDispatch;
            case 88:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function() {
        _fun60157: for (var _fun60157_ip = 0;;) switch (_fun60157_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.getCurrentlyInteractingWindowId;
                var4 = var0.bind(var1)();
                var1 = null;
                var3 = var1 == var4;
                var0 = null;
                if (var3) {
                    _fun60157_ip = 75;
                    continue _fun60157
                }
            case 46:
                var3 = _closure1_slot6;
                var2 = var3.get;
                var2 = var2.bind(var3)(var4);
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun60157_ip = 72;
                    continue _fun60157
                }
            case 69:
                var1 = var2;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var7 = global;
    var10 = var7.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var10)(var2, var0, var5);
    var0 = 0;
    var6 = var9[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot2 = var5;
    var5 = 1;
    var6 = var9[var5];
    var5 = arg3;
    var11 = var5.bind(var0)(var6);
    var _closure1_slot3 = var11;
    var5 = 2;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var12 = var5.AppContext;
    var5 = 3;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.ComponentDispatcher;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var17 = var6;
    var5 = new var17[var5](var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var10 = var11.createContext;
    var6 = {};
    var12 = var12.APP;
    var6.appContext = var12;
    var12 = var7.window;
    var6.renderWindow = var12;
    var6.windowDispatch = var5;
    var12 = 5;
    var12 = var9[var12];
    var13 = var8.bind(var0)(var12);
    var12 = var13.getMainWindowId;
    var12 = var12.bind(var13)();
    var6.windowId = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot5 = var6;
    var7 = var7.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var17 = var10;
    var7 = new var17[var7](var16);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot6 = var7;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_app_window/web/AppWindowContext.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.MainWindowDispatch = var5;
    var2.getWindowDispatchForElement = var4;
    var4 = function arg0() {
        _fun60158: for (var _fun60158_ip = 0;;) switch (_fun60158_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var5 = var6.isElement;
                var3 = null;
                var7 = var3 == var1;
                var0 = undefined;
                if (var7) {
                    _fun60158_ip = 51;
                    continue _fun60158
                }
            case 45:
                var0 = var1.target;
            case 51:
                var5 = var5.bind(var6)(var0);
                var0 = null;
                if (!var5) {
                    _fun60158_ip = 88;
                    continue _fun60158
                }
            case 61:
                var2 = _closure1_slot7;
                var1 = var1.target;
                var1 = var2.bind(var4)(var1);
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun60158_ip = 88;
                    continue _fun60158
                }
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var2.getWindowDispatchForEvent = var4;
    var2.getCurrentlyInteractingAppWindowContext = var3;
    var3 = function arg0() {
        var2 = _closure1_slot6;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getAppWindowContextValue = var3;
    var3 = function() {
        _fun60160: for (var _fun60160_ip = 0;;) switch (_fun60160_ip) {
            case 0:
                var1 = _closure1_slot8;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun60160_ip = 28;
                    continue _fun60160
                }
            case 22:
                var0 = var1.appContext;
            case 28:
                return var0;
        }
    };
    var2.getCurrentlyInteractingAppContext = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.appContext;
        var1 = var0.renderWindow;
        var4 = var0.children;
        var0 = function arg0, arg1() {
            var7 = arg0;
            var6 = arg1;
            var _closure3_slot0 = var7;
            var _closure3_slot1 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useState;
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 5;
            var2 = var5[var2];
            var5 = undefined;
            var8 = var8.bind(var5)(var2);
            var2 = var8.getWindowId;
            var2 = var2.bind(var8)(var6);
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot2;
            var0 = 2;
            var2 = var2.bind(var5)(var3, var0);
            var0 = 0;
            var5 = var2[var0];
            var _closure3_slot2 = var5;
            var0 = 1;
            var0 = var2[var0];
            var _closure3_slot3 = var0;
            var3 = var4.useMemo;
            var2 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.ComponentDispatcher;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var4 = var1;
                var0 = new var4[var0](var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var0 = new Array(0);
            var0 = var3.bind(var4)(var2, var0);
            var _closure3_slot4 = var0;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var0;
            var2[3] = var5;
            var0 = function() { // Environment: var1
                var0 = {};
                var2 = _closure3_slot0;
                var0.appContext = var2;
                var2 = _closure3_slot1;
                var0.renderWindow = var2;
                var2 = _closure3_slot4;
                var0.windowDispatch = var2;
                var1 = _closure3_slot2;
                var0.windowId = var1;
                return var0;
            };
            var0 = var3.bind(var4)(var0, var2);
            var _closure3_slot5 = var0;
            var7 = var4.useEffect;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var5;
            var2 = function() { // Environment: var1
                _fun60165: for (var _fun60165_ip = 0;;) switch (_fun60165_ip) {
                    case 0:
                        var2 = _closure3_slot2;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun60165_ip = 19;
                            continue _fun60165
                        }
                    case 15:
                        var1 = undefined;
                        return var1;
                    case 19:
                        var1 = global;
                        var4 = var1.setInterval;
                        var3 = undefined;
                        var2 = function() { // Environment: var0
                            _fun60166: for (var _fun60166_ip = 0;;) switch (_fun60166_ip) {
                                case 0:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.getWindowId;
                                    var2 = _closure3_slot1;
                                    var2 = var3.bind(var4)(var2);
                                    var3 = null;
                                    if (!(var3 != var2)) {
                                        _fun60166_ip = 78;
                                        continue _fun60166
                                    }
                                case 49:
                                    var1 = _closure3_slot3;
                                    var1 = var1.bind(var0)(var2);
                                    var1 = global;
                                    var2 = var1.clearInterval;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var0)(var1);
                                case 78:
                                    return var0;
                            }
                        };
                        var1 = 10;
                        var1 = var4.bind(var3)(var2, var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = global;
                            var2 = var0.clearInterval;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                }
            };
            var2 = var7.bind(var4)(var2, var3);
            var3 = var4.useEffect;
            var2 = new Array(3);
            var2[0] = var0;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() { // Environment: var1
                var5 = _closure1_slot6;
                var4 = var5.set;
                var3 = _closure3_slot2;
                var2 = _closure3_slot5;
                var2 = var4.bind(var5)(var3, var2);
                var4 = function() {
                    var2 = _closure1_slot6;
                    var1 = var2.delete;
                    var0 = _closure3_slot2;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var _closure4_slot0 = var4;
                var3 = _closure3_slot1;
                var2 = var3.addEventListener;
                var1 = 'unload';
                var1 = var2.bind(var3)(var1, var4);
                var0 = function() { // Environment: var0
                    var3 = _closure3_slot1;
                    var2 = var3.removeEventListener;
                    var1 = _closure4_slot0;
                    var0 = 'unload';
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var3 = undefined;
        var5 = var0.bind(var3)(var2, var1);
        var2 = _closure1_slot4;
        var0 = _closure1_slot5;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AppWindowContextProvider = var3;
    var3 = function() {
        var2 = _closure1_slot3;
        var1 = var2.useContext;
        var0 = _closure1_slot5;
        var0 = var1.bind(var2)(var0);
        var0 = var0.appContext;
        return var0;
    };
    var2.useAppContext = var3;
    var1 = function() {
        var2 = _closure1_slot3;
        var1 = var2.useContext;
        var0 = _closure1_slot5;
        var0 = var1.bind(var2)(var0);
        var0 = var0.windowDispatch;
        return var0;
    };
    var2.useWindowDispatch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 1229, 7456, 1610, 7457, 2]);