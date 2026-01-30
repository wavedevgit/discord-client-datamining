// modules/message_previews/useLatestChannelMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_previews/useLatestChannelMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useLatestChannelMessage, environment: var1
        _fun84608: for (var _fun84608_ip = 0;;) switch (_fun84608_ip) {
            case 0:
                var0 = arg0;
                var2 = arguments[1];
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun84608_ip = 16;
                    continue _fun84608
                }
            case 14:
                var2 = false;
            case 16:
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var2 = var0.guild_id;
                _closure2_slot1 = var2;
                var6 = var0.id;
                _closure2_slot2 = var6;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var7 = var3.bind(var4)(var0);
                var5 = var7.useStateFromStoresArray;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    _fun84609: for (var _fun84609_ip = 0;;) switch (_fun84609_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun84609_ip = 70;
                                continue _fun84609
                            }
                        case 10:
                            var4 = _closure1_slot5;
                            var3 = var4.message;
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2, var0);
                            var0 = new Array(2);
                            var0[0] = var2;
                            var3 = var4.isLatest;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2, var1);
                            var0[1] = var1;
                            _fun84609_ip = 87;
                            continue _fun84609;
                        case 70:
                            var1 = [null];
                            var2 = true;
                            var1[1] = var2;
                            var0 = var1;
                        case 87:
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var3, var0);
                var3 = _closure1_slot3;
                var0 = 2;
                var5 = var3.bind(var4)(var5, var0);
                var0 = 0;
                var0 = var5[var0];
                var3 = 1;
                var5 = var5[var3];
                _closure2_slot3 = var5;
                var3 = _closure1_slot4;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun84610: for (var _fun84610_ip = 0;;) switch (_fun84610_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun84610_ip = 20;
                                continue _fun84610
                            }
                        case 16:
                            var1 = _closure2_slot3;
                        case 20:
                            if (var1) {
                                _fun84610_ip = 63;
                                continue _fun84610
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.addWant;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 10818, 566, 10820, 2]);