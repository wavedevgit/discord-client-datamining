// modules/chat/useTypingUsersIds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/useTypingUsersIds.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useTypingUserIds, environment: var1
        _fun90177: for (var _fun90177_ip = 0;;) switch (_fun90177_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var6;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun90177_ip = 32;
                    continue _fun90177
                }
            case 18:
                var1 = global;
                var1 = var1.Number;
                var5 = var1.MAX_SAFE_INTEGER;
            case 32:
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 3;
                var2 = var7[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStoresArray;
                var7 = _closure1_slot4;
                var2 = new Array(3);
                var2[0] = var7;
                var7 = _closure1_slot3;
                var2[1] = var7;
                var1 = _closure1_slot2;
                var2[2] = var1;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun90178: for (var _fun90178_ip = 0;;) switch (_fun90178_ip) {
                        case 0:
                            var1 = _closure1_slot4;
                            var0 = var1.getCurrentUser;
                            var0 = var0.bind(var1)();
                            var8 = null;
                            var1 = var8 == var0;
                            var7 = undefined;
                            if (var1) {
                                _fun90178_ip = 32;
                                continue _fun90178
                            }
                        case 27:
                            var7 = var0.id;
                        case 32:
                            var2 = _closure1_slot3;
                            var1 = var2.getTypingUsers;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            var4 = var1;
                            for (var1 in var4)
                                case 69: {
                                    case 78: var12 = var1;
                                    var11 = var0.length;
                                    var10 = _closure2_slot1;
                                    if (!(!(var11 >= var10))) {
                                        _fun90178_ip = 162;
                                        continue _fun90178
                                    }
                                    case 94: var11 = _closure1_slot4;
                                    var10 = var11.getUser;
                                    var10 = var10.bind(var11)(var12);
                                    if (var8 == var10) {
                                        _fun90178_ip = 69;
                                        continue _fun90178
                                    }
                                    case 113: var11 = var10.id;
                                    if (var11 === var7) {
                                        _fun90178_ip = 69;
                                        continue _fun90178
                                    }
                                    case 122: var13 = _closure1_slot2;
                                    var12 = var13.isBlockedOrIgnored;
                                    var11 = var10.id;
                                    var11 = var12.bind(var13)(var11);
                                    if (var11) {
                                        _fun90178_ip = 69;
                                        continue _fun90178
                                    }
                                    case 145: var11 = var0.push;
                                    var10 = var10.id;
                                    var10 = var11.bind(var0)(var10);
                                    _fun90178_ip = 69;
                                    continue _fun90178;
                                }
                        case 162:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.useTypingUserIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3059, 11655, 1613, 566, 2]);