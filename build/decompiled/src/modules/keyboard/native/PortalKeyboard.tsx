// modules/keyboard/native/PortalKeyboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 'empty';
    var3.EMPTY = var4;
    var4 = 'request_open';
    var3.REQUEST_OPEN = var4;
    var4 = 'opening';
    var3.OPENING = var4;
    var4 = 'open';
    var3.OPEN = var4;
    var4 = 'request_close';
    var3.REQUEST_CLOSE = var4;
    var4 = 'closing';
    var3.CLOSING = var4;
    var4 = 'closed';
    var3.CLOSED = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PortalKeyboardState = var3;
    var3 = 'default';
    var2.PORTAL_HOST_NAME_DEFAULT = var3;
    var3 = 'modal';
    var2.PORTAL_HOST_NAME_MODAL = var3;
    var3 = function(arg0) { // Original name: PortalKeyboard, environment: var1
        _fun35098: for (var _fun35098_ip = 0;;) switch (_fun35098_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsModalOpen;
                var1 = var1.bind(var2)();
                var2 = 'default';
                var5 = var2;
                if (!var1) {
                    _fun35098_ip = 93;
                    continue _fun35098
                }
            case 53:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.isIOS;
                var1 = var1.bind(var6)();
                var5 = var2;
                if (!var1) {
                    _fun35098_ip = 93;
                    continue _fun35098
                }
            case 89:
                var5 = 'modal';
            case 93:
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 4;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Portal;
                var0 = {};
                var0.hostName = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PortalKeyboard = var3;
    var1 = function(arg0) { // Original name: PortalKeyboardHost, environment: var1
        _fun35099: for (var _fun35099_ip = 0;;) switch (_fun35099_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.name;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun35099_ip = 18;
                    continue _fun35099
                }
            case 14:
                var4 = 'default';
            case 18:
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PortalHost;
                var0 = {};
                var0.name = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PortalKeyboardHost = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3872, 478, 3880, 2]);