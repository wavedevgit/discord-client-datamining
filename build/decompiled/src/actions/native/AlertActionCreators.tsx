// actions/native/AlertActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun35470: for (var _fun35470_ip = 0;;) switch (_fun35470_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.importer;
                var4 = var3.hideActionSheet;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun35470_ip = 25;
                    continue _fun35470
                }
            case 23:
                var4 = true;
            case 25:
                var _closure2_slot0 = var4;
                var3 = var3.isDismissable;
                if (!(var3 === var1)) {
                    _fun35470_ip = 41;
                    continue _fun35470
                }
            case 39:
                var3 = false;
            case 41:
                var _closure2_slot1 = var3;
                var2 = var2.bind(var1)();
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun35471: for (var _fun35471_ip = 0;;) switch (_fun35471_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun35471_ip = 45;
                                continue _fun35471
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 45:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'ALERT_OPEN';
                            var1.type = var5;
                            var5 = arg0;
                            var1.alert = var5;
                            var4 = _closure2_slot1;
                            var1.isDismissable = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.openLazy = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ALERT_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.close = var6;
    var6 = function arg0() {
        _fun35473: for (var _fun35473_ip = 0;;) switch (_fun35473_ip) {
            case 0:
                var7 = arg0;
                var3 = this;
                var5 = var7.hideActionSheet;
                var4 = var7.isDismissable;
                var1 = var7.confirmText;
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun35473_ip = 90;
                    continue _fun35473
                }
            case 32:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 4;
                var8 = var11[var2];
                var8 = var10.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var11[var2];
                var2 = var10.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.BddRzS;
                var1 = var8.bind(var9)(var2);
            case 90:
                var _closure2_slot0 = var1;
                var2 = {
                    'hideActionSheet': 0,
                    'isDismissable': 0,
                    'confirmText': 0
                };
                var13 = null;
                var14 = var2;
                var1 = silentSetPrototypeOf(var14, var13);
                var14 = {};
                var13 = var7;
                var12 = var2;
                var1 = copyDataProperties(var14, var13, var12);
                var _closure2_slot1 = var1;
                var2 = var3.openLazy;
                var1 = {};
                var6 = function() {
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
                            var3 = _closure1_slot3;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var5 = arg0;
                            var6 = var1;
                            var0 = copyDataProperties(var6, var5);
                            var5 = _closure2_slot1;
                            var6 = var1;
                            var4 = copyDataProperties(var6, var5);
                            var4 = _closure2_slot0;
                            var0 = 'confirmText';
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
                var1.importer = var6;
                var1.hideActionSheet = var5;
                var1.isDismissable = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.show = var6;
    var3 = function arg0() {
        var1 = this;
        var _closure2_slot0 = var1;
        var1 = arg0;
        var _closure2_slot1 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure2_slot0;
            var2 = var3.show;
            var1 = {};
            var0 = function() {
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onConfirm = var0;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 4;
            var7 = var10[var6];
            var0 = undefined;
            var7 = var9.bind(var0)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var0)(var6);
            var6 = var6.t;
            var6 = var6["ETE/oC"];
            var6 = var7.bind(var8)(var6);
            var1.cancelText = var6;
            var5 = function() {
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = false;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onCancel = var5;
            var11 = _closure2_slot1;
            var12 = var1;
            var4 = copyDataProperties(var12, var11);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1.confirm = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/AlertActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3278, 806, 1234, 3937, 1307, 2]);