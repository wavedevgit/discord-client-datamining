// modules/messages/parseReactionPermissions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/messages/parseReactionPermissions.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun73468: for (var _fun73468_ip = 0;;) switch (_fun73468_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var2 = var0.canChat;
                var5 = var0.renderReactions;
                var10 = var0.canAddNewReactions;
                var1 = var0.isLurking;
                var4 = var0.communicationDisabled;
                var7 = var0.isActiveChannelOrUnarchivableThread;
                var3 = var0.isAutomodQuarantined;
                var0 = var6.isPrivate;
                var9 = var0.bind(var6)();
                var0 = var6.isSystemDM;
                var8 = var0.bind(var6)();
                if (var2) {
                    _fun73468_ip = 76;
                    continue _fun73468
                }
            case 73:
                var2 = var9;
            case 76:
                if (!var2) {
                    _fun73468_ip = 82;
                    continue _fun73468
                }
            case 79:
                var2 = var7;
            case 82:
                var0 = {};
                var5 = !var5;
                var0.disableReactionReads = var5;
                var5 = var1;
                if (var1) {
                    _fun73468_ip = 101;
                    continue _fun73468
                }
            case 98:
                var5 = !var2;
            case 101:
                if (var5) {
                    _fun73468_ip = 131;
                    continue _fun73468
                }
            case 104:
                var6 = true;
                var6 = var6 === var10;
                if (var6) {
                    _fun73468_ip = 116;
                    continue _fun73468
                }
            case 113:
                var6 = var9;
            case 116:
                if (!var6) {
                    _fun73468_ip = 122;
                    continue _fun73468
                }
            case 119:
                var6 = !var8;
            case 122:
                if (!var6) {
                    _fun73468_ip = 128;
                    continue _fun73468
                }
            case 125:
                var6 = var7;
            case 128:
                var5 = !var6;
            case 131:
                var0.disableReactionCreates = var5;
                if (var1) {
                    _fun73468_ip = 142;
                    continue _fun73468
                }
            case 139:
                var1 = !var2;
            case 142:
                if (var1) {
                    _fun73468_ip = 151;
                    continue _fun73468
                }
            case 145:
                var2 = true;
                var1 = var2 === var4;
            case 151:
                if (var1) {
                    _fun73468_ip = 160;
                    continue _fun73468
                }
            case 154:
                var2 = true;
                var1 = var2 === var3;
            case 160:
                var0.disableReactionUpdates = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);