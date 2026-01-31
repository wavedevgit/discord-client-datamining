// modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: openAcceptFriendRequestConfirmModal, environment: var1
        var0 = arg0;
        var1 = var0.onConfirm;
        var _closure2_slot0 = var1;
        var0 = var0.onCancel;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 3;
        var1 = var3[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var1);
        var6 = var7.track;
        var1 = _closure1_slot4;
        var5 = var1.OPEN_MODAL;
        var1 = {};
        var8 = _closure1_slot3;
        var1.type = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = 4;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.openLazy;
        var1 = {};
        var4 = function() { // Original name: importer, environment: var4
            var2 = _closure1_slot0;
            var0 = _closure1_slot2;
            var1 = 6;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 5;
            var1 = var0[var1];
            var0 = var0.paths;
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var1 = var1.default;
                var _closure4_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var _closure5_slot0 = var4;
                    var3 = _closure1_slot5;
                    var2 = _closure4_slot0;
                    var1 = {};
                    var6 = var1;
                    var5 = var4;
                    var4 = copyDataProperties(var6, var5);
                    var4 = function() { // Original name: onCancel, environment: var0
                        _fun72090: for (var _fun72090_ip = 0;;) switch (_fun72090_ip) {
                            case 0:
                                var1 = _closure5_slot0;
                                var0 = var1.onClose;
                                var0 = var0.bind(var1)();
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun72090_ip = 40;
                                    continue _fun72090
                                }
                            case 30:
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 40:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 'onCancel';
                    var1[var0] = var4;
                    var4 = _closure2_slot0;
                    var0 = 'onConfirm';
                    var1[var0] = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.importer = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.openAcceptFriendRequestConfirmModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8970, 660, 33, 795, 3895, 8971, 1307, 2]);