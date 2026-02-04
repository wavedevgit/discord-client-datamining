// modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var1 = function arg0() {
        var4 = arg0;
        var10 = var4.channelId;
        var _closure2_slot0 = var10;
        var13 = var4.warningId;
        var _closure2_slot1 = var13;
        var3 = var4.warningType;
        var _closure2_slot2 = var3;
        var11 = var4.senderId;
        var _closure2_slot3 = var11;
        var1 = var4.analyticsBlockContext;
        var _closure2_slot4 = var1;
        var5 = var4.analyticsBlockAndReportContext;
        var _closure2_slot5 = var5;
        var2 = var4.analyticsCancelContext;
        var _closure2_slot6 = var2;
        var9 = var4.onClose;
        var12 = var4.onDismiss;
        var _closure2_slot7 = var12;
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var6 = new Array(4);
        var6[0] = var10;
        var6[1] = var13;
        var6[2] = var11;
        var6[3] = var3;
        var3 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.trackCtaEvent;
            var1 = {};
            var5 = _closure2_slot0;
            var1.channelId = var5;
            var5 = _closure2_slot1;
            var1.warningId = var5;
            var5 = _closure2_slot3;
            var1.senderId = var5;
            var4 = _closure2_slot2;
            var1.warningType = var4;
            var4 = arg0;
            var1.cta = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var8 = var7.bind(var8)(var3, var6);
        var _closure2_slot8 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot8;
            var1 = _closure2_slot6;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var7 = var6.bind(var7)(var2, var3);
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var2 = new Array(3);
        var2[0] = var12;
        var2[1] = var8;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            _fun72585: for (var _fun72585_ip = 0;;) switch (_fun72585_ip) {
                case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun72585_ip = 23;
                        continue _fun72585
                    }
                case 13:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 23:
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var12;
        var1[1] = var8;
        var1[2] = var5;
        var0 = function() { // Environment: var0
            _fun72586: for (var _fun72586_ip = 0;;) switch (_fun72586_ip) {
                case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun72586_ip = 23;
                        continue _fun72586
                    }
                case 13:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 23:
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var5 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot4;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 3;
        var0 = var8[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.userId = var11;
        var0.channelId = var10;
        var0.onClose = var9;
        var0.onCancel = var7;
        var0.onBlock = var6;
        var0.onBlockAndReport = var5;
        var5 = 'primary';
        var0.blockButtonVariant = var5;
        var7 = _closure1_slot0;
        var4 = 4;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["5NhTvu"];
        var4 = var5.bind(var6)(var4);
        var0.description = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.InappropriateConversationBlockAndReportAlert = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9058, 9074, 1234, 2]);