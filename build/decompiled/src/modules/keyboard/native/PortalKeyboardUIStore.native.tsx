// modules/keyboard/native/PortalKeyboardUIStore.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function() { // Original name: closePortalKeyboard, environment: var1
        var3 = _closure1_slot2;
        var2 = var3.setState;
        var1 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 1;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var4 = var4.PortalKeyboardState;
        var4 = var4.CLOSED;
        var1.state = var4;
        var4 = null;
        var1.keyboard = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var5 = var4.createZustandStore;
    var4 = function() { // Environment: var1
        var0 = {};
        var1 = null;
        var0.keyboard = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.PortalKeyboardState;
        var1 = var1.EMPTY;
        var0.state = var1;
        var1 = new Array(0);
        var0.renderers = var1;
        return var0;
    };
    var5 = var5.bind(var0)(var4);
    var _closure1_slot2 = var5;
    var4 = {};
    var8 = var5.getField;
    var4.getField = var8;
    var5 = var5.useField;
    var4.useField = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/keyboard/native/PortalKeyboardUIStore.native.tsx';
    var5 = var6.bind(var7)(var5);
    var2.PortalKeyboardUIStore = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: openPortalKeyboard, environment: var1
        _fun35056: for (var _fun35056_ip = 0;;) switch (_fun35056_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var1 = _closure1_slot2;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var5 = var0.state;
                var3 = var0.keyboard;
                var2 = null;
                var6 = var2 == var3;
                var0 = undefined;
                var1 = undefined;
                if (var6) {
                    _fun35056_ip = 52;
                    continue _fun35056
                }
            case 47:
                var1 = var3.type;
            case 52:
                var1 = var1 === var9;
                if (!var1) {
                    _fun35056_ip = 77;
                    continue _fun35056
                }
            case 59:
                var6 = var2 == var3;
                var2 = undefined;
                if (var6) {
                    _fun35056_ip = 73;
                    continue _fun35056
                }
            case 68:
                var2 = var3.channelId;
            case 73:
                var1 = var2 === var8;
            case 77:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 1;
                var2 = var2[var6];
                var2 = var3.bind(var0)(var2);
                var2 = var2.PortalKeyboardState;
                var2 = var2.REQUEST_OPEN;
                var2 = var5 === var2;
                if (var2) {
                    _fun35056_ip = 149;
                    continue _fun35056
                }
            case 116:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var7.bind(var0)(var3);
                var3 = var3.PortalKeyboardState;
                var3 = var3.OPENING;
                var2 = var5 === var3;
            case 149:
                if (var2) {
                    _fun35056_ip = 185;
                    continue _fun35056
                }
            case 152:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var7.bind(var0)(var3);
                var3 = var3.PortalKeyboardState;
                var3 = var3.OPEN;
                var2 = var5 === var3;
            case 185:
                if (!var1) {
                    _fun35056_ip = 191;
                    continue _fun35056
                }
            case 188:
                var1 = var2;
            case 191:
                if (var1) {
                    _fun35056_ip = 293;
                    continue _fun35056
                }
            case 194:
                var3 = _closure1_slot2;
                var2 = var3.setState;
                var1 = {};
                var7 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var10 = 2;
                var10 = var4[var10];
                var11 = var5.bind(var0)(var10);
                var10 = var11.v4;
                var10 = var10.bind(var11)();
                var7.id = var10;
                var7.type = var9;
                var7.channelId = var8;
                var8 = arg2;
                var7.chatInputRef = var8;
                var1.keyboard = var7;
                var4 = var4[var6];
                var4 = var5.bind(var0)(var4);
                var4 = var4.PortalKeyboardState;
                var4 = var4.REQUEST_OPEN;
                var1.state = var4;
                var1 = var2.bind(var3)(var1);
            case 293:
                return var0;
        }
    };
    var2.openPortalKeyboard = var4;
    var4 = function(arg0) { // Original name: registerPortalKeyboardRenderer, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot2;
        var2 = var3.setState;
        var1 = function(arg0) { // Environment: var0
            _fun35058: for (var _fun35058_ip = 0;;) switch (_fun35058_ip) {
                case 0:
                    var2 = arg0;
                    var4 = var2.renderers;
                    var1 = var4.includes;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var4)(var0);
                    var0 = var2;
                    if (var1) {
                        _fun35058_ip = 77;
                        continue _fun35058
                    }
                case 32:
                    var1 = {};
                    var7 = var2.renderers;
                    var2 = new Array(1);
                    var6 = 0;
                    var8 = var2;
                    var4 = arraySpread(var8, var7, var6);
                    var3 = _closure2_slot0;
                    var2[var4] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var1.renderers = var2;
                    var0 = var1;
                case 77:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var1 = arg0;
                var3 = var1.renderers;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.renderers = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        return var0;
    };
    var2.registerPortalKeyboardRenderer = var4;
    var4 = function(arg0) { // Original name: handlePortalKeyboardOpen, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot2;
        var1 = var2.setState;
        var0 = function(arg0) { // Environment: var0
            _fun35063: for (var _fun35063_ip = 0;;) switch (_fun35063_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4.keyboard;
                    var1 = null;
                    var0 = var4;
                    if (!(var1 != var2)) {
                        _fun35063_ip = 123;
                        continue _fun35063
                    }
                case 18:
                    var1 = var4.keyboard;
                    var2 = var1.handlerId;
                    var1 = _closure2_slot0;
                    var0 = var4;
                    if (!(var2 !== var1)) {
                        _fun35063_ip = 123;
                        continue _fun35063
                    }
                case 44:
                    var1 = {};
                    var2 = {};
                    var5 = var4.keyboard;
                    var6 = var2;
                    var4 = copyDataProperties(var6, var5);
                    var4 = _closure2_slot0;
                    var3 = 'handlerId';
                    var2[var3] = var4;
                    var1.keyboard = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.PortalKeyboardState;
                    var2 = var2.OPEN;
                    var1.state = var2;
                    var0 = var1;
                case 123:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.handlePortalKeyboardOpen = var4;
    var2.closePortalKeyboard = var3;
    var3 = function() { // Original name: closePortalKeyboardIfUnhandled, environment: var1
        _fun35064: for (var _fun35064_ip = 0;;) switch (_fun35064_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var4 = var1.keyboard;
                var5 = var1.state;
                var3 = null;
                var1 = var3 == var4;
                if (!var1) {
                    _fun35064_ip = 75;
                    continue _fun35064
                }
            case 37:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.PortalKeyboardState;
                var2 = var2.CLOSED;
                var1 = var5 === var2;
            case 75:
                if (var1) {
                    _fun35064_ip = 107;
                    continue _fun35064
                }
            case 78:
                var5 = var3 == var4;
                var1 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun35064_ip = 95;
                    continue _fun35064
                }
            case 89:
                var2 = var4.handlerId;
            case 95:
                if (!(var3 == var2)) {
                    _fun35064_ip = 107;
                    continue _fun35064
                }
            case 99:
                var0 = _closure1_slot3;
                var0 = var0.bind(var1)();
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var2.closePortalKeyboardIfUnhandled = var3;
    var1 = function() { // Original name: closePortalKeyboardRequest, environment: var1
        _fun35065: for (var _fun35065_ip = 0;;) switch (_fun35065_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getField;
                var0 = 'state';
                var3 = var1.bind(var2)(var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var1 = var0[var6];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.PortalKeyboardState;
                var1 = var1.CLOSED;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun35065_ip = 96;
                    continue _fun35065
                }
            case 63:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.PortalKeyboardState;
                var2 = var2.REQUEST_CLOSE;
                var1 = var3 !== var2;
            case 96:
                if (!var1) {
                    _fun35065_ip = 149;
                    continue _fun35065
                }
            case 99:
                var3 = _closure1_slot2;
                var2 = var3.setState;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var5.bind(var0)(var4);
                var4 = var4.PortalKeyboardState;
                var4 = var4.REQUEST_CLOSE;
                var1.state = var4;
                var1 = var2.bind(var3)(var1);
            case 149:
                return var0;
        }
    };
    var2.closePortalKeyboardRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3875, 3877, 491, 2]);