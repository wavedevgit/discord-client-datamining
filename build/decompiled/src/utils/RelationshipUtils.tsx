// utils/RelationshipUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        var1 = arg0;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 1;
        var2 = var4[var0];
        var0 = undefined;
        var7 = var3.bind(var0)(var2);
        var6 = var7.showNotification;
        var2 = 2;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.getUserAvatarURL;
        var12 = var2.bind(var3)(var1);
        var11 = var1.username;
        var3 = {
            'omitViewTracking': true,
            'omitClickTracking': true,
            'tag': null,
            'onClick': null,
            'isUserAvatar': true
        };
        var1 = var1.id;
        var3.tag = var1;
        var1 = arg2;
        var3.onClick = var1;
        var10 = arg1;
        var9 = {};
        var13 = var7;
        var8 = var3;
        var1 = var13[var6](var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var3 = var3.FriendsSections;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/RelationshipUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var4 = _closure1_slot4;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 3;
        var2 = var6[var1];
        var0 = undefined;
        var2 = var5.bind(var0)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var0)(var1);
        var1 = var1.t;
        var1 = var1["t3+Af3"];
        var3 = var2.bind(var3)(var1);
        var2 = arg0;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.transitionToSection;
            var1 = _closure1_slot3;
            var2 = var1.PENDING;
            var1 = {};
            var5 = true;
            var1.explicit = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = var4.bind(var0)(var2, var3, var1);
        return var0;
    };
    var2.showPendingNotification = var3;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 3;
        var5 = var8[var2];
        var0 = undefined;
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var2 = var8[var2];
        var2 = var7.bind(var0)(var2);
        var2 = var2.t;
        var2 = var2.MYr3Ka;
        var2 = var5.bind(var6)(var2);
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openPrivateChannel;
            var1 = {};
            var4 = _closure2_slot0;
            var4 = var4.id;
            var1.recipientIds = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var2.showAcceptedNotification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 14714, 1417, 1234, 14715, 3946, 2]);