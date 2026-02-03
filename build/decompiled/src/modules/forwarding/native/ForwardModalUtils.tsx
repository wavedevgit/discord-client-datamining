// modules/forwarding/native/ForwardModalUtils.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/native/ForwardModalUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'forward-modal';
    var2.FORWARD_MODAL_KEY = var3;
    var3 = function arg0() {
        _fun71081: for (var _fun71081_ip = 0;;) switch (_fun71081_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.message;
                var7 = var1.source;
                var9 = var1.initialSelectedDestinations;
                var0 = undefined;
                if (!(var9 === var0)) {
                    _fun71081_ip = 29;
                    continue _fun71081
                }
            case 25:
                var9 = new Array(0);
            case 29:
                var8 = var1.forwardOptions;
                var2 = var1.customSendHandler;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var6 = var3.bind(var0)(var1);
                var1 = var6.dismissKeyboard;
                var1 = var1.bind(var6)();
                var1 = 3;
                var1 = var5[var1];
                var12 = var3.bind(var0)(var1);
                var11 = var12.trackForwardStart;
                var6 = var10.channel_id;
                var1 = var10.id;
                var1 = var11.bind(var12)(var6, var1, var7);
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getIsWindowLarge;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun71081_ip = 164;
                    continue _fun71081
                }
            case 134:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.isIOS;
                var1 = var3.bind(var5)();
            case 164:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 6;
                var5 = var3[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.pushLazy;
                var11 = _closure1_slot0;
                var4 = 8;
                var4 = var3[var4];
                var11 = var11.bind(var0)(var4);
                var4 = 7;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var11.bind(var0)(var4, var3);
                var3 = {};
                var3.message = var10;
                var3.initialSelectedDestinations = var9;
                var3.forwardOptions = var8;
                var3.source = var7;
                var3.customSendHandler = var2;
                var2 = undefined;
                if (var1) {
                    _fun71081_ip = 268;
                    continue _fun71081
                }
            case 254:
                var1 = {};
                var7 = 'modal';
                var1.presentation = var7;
                var2 = var1;
            case 268:
                var14 = 'forward-modal';
                var17 = var6;
                var16 = var4;
                var15 = var3;
                var13 = var2;
                var1 = var17[var5](var16, var15, var14, var13, var12);
                return var0;
        }
    };
    var2.openForwardModal = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.popWithKey;
        var1 = 'forward-modal';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.closeForwardModal = var3;
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.message;
        var7 = var0.failedDestinations;
        var6 = var0.forwardOptions;
        var3 = _closure1_slot3;
        var2 = var3.lazy;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var0 = _closure1_slot2;
            var1 = 8;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 9;
            var1 = var0[var1];
            var0 = var0.paths;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.openAlert;
        var2 = _closure1_slot4;
        var1 = {};
        var1.message = var8;
        var1.failedDestinations = var7;
        var1.forwardOptions = var6;
        var2 = var2.bind(var0)(var5, var1);
        var1 = 'forward-failed-alert-modal';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.showForwardFailedAlertModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3718, 8892, 7685, 478, 4561, 8893, 1307, 9186, 4029, 2]);