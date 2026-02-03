// modules/people/hooks/useFriendRequestActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/people/hooks/useFriendRequestActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.userId;
        var _closure2_slot0 = var6;
        var11 = var0.applicationId;
        var _closure2_slot1 = var11;
        var10 = var0.isGameRelationship;
        var _closure2_slot2 = var10;
        var9 = var0.location;
        var _closure2_slot3 = var9;
        var7 = var0.onConfirm;
        var _closure2_slot4 = var7;
        var8 = var0.onCancel;
        var _closure2_slot5 = var8;
        var5 = _closure1_slot2;
        var3 = var5.useCallback;
        var1 = new Array(4);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var1[3] = var6;
        var0 = function() { // Environment: var2
            _fun91984: for (var _fun91984_ip = 0;;) switch (_fun91984_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.cancelFriendRequest;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.userId = var5;
                    var6 = _closure2_slot2;
                    var5 = null;
                    if (!var6) {
                        _fun91984_ip = 57;
                        continue _fun91984
                    }
                case 53:
                    var5 = _closure2_slot1;
                case 57:
                    var1.applicationId = var5;
                    var4 = _closure2_slot3;
                    var1.location = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var3.bind(var5)(var0, var1);
        var0 = {};
        var4 = var5.useCallback;
        var3 = new Array(6);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var3[5] = var6;
        var2 = function() { // Environment: var2
            _fun91985: for (var _fun91985_ip = 0;;) switch (_fun91985_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.maybeConfirmFriendRequestAccept;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.userId = var5;
                    var6 = _closure2_slot2;
                    var5 = null;
                    if (!var6) {
                        _fun91985_ip = 57;
                        continue _fun91985
                    }
                case 53:
                    var5 = _closure2_slot1;
                case 57:
                    var1.applicationId = var5;
                    var5 = _closure2_slot3;
                    var1.location = var5;
                    var5 = _closure2_slot4;
                    var1.onConfirm = var5;
                    var4 = _closure2_slot5;
                    var1.onCancel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var0.acceptFriendRequest = var2;
        var0.cancelFriendRequest = var1;
        return var0;
    };
    var2.useFriendRequestActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9000, 2]);