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
    var1 = function(arg0) { // Original name: parseReactionPermissions, environment: var1
        _fun73110: for (var _fun73110_ip = 0;;) switch (_fun73110_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var2 = var0.canChat;
                var6 = var0.renderReactions;
                var11 = var0.canAddNewReactions;
                var1 = var0.isLurking;
                var5 = var0.isGuest;
                var4 = var0.communicationDisabled;
                var8 = var0.isActiveChannelOrUnarchivableThread;
                var3 = var0.isAutomodQuarantined;
                var0 = var7.isPrivate;
                var10 = var0.bind(var7)();
                var0 = var7.isSystemDM;
                var9 = var0.bind(var7)();
                if (var2) {
                    _fun73110_ip = 82;
                    continue _fun73110
                }
            case 79:
                var2 = var10;
            case 82:
                if (!var2) {
                    _fun73110_ip = 88;
                    continue _fun73110
                }
            case 85:
                var2 = var8;
            case 88:
                var0 = {};
                var6 = !var6;
                var0.disableReactionReads = var6;
                var6 = var1;
                if (var1) {
                    _fun73110_ip = 107;
                    continue _fun73110
                }
            case 104:
                var6 = var5;
            case 107:
                if (var6) {
                    _fun73110_ip = 113;
                    continue _fun73110
                }
            case 110:
                var6 = !var2;
            case 113:
                if (var6) {
                    _fun73110_ip = 143;
                    continue _fun73110
                }
            case 116:
                var7 = true;
                var7 = var7 === var11;
                if (var7) {
                    _fun73110_ip = 128;
                    continue _fun73110
                }
            case 125:
                var7 = var10;
            case 128:
                if (!var7) {
                    _fun73110_ip = 134;
                    continue _fun73110
                }
            case 131:
                var7 = !var9;
            case 134:
                if (!var7) {
                    _fun73110_ip = 140;
                    continue _fun73110
                }
            case 137:
                var7 = var8;
            case 140:
                var6 = !var7;
            case 143:
                var0.disableReactionCreates = var6;
                if (var1) {
                    _fun73110_ip = 154;
                    continue _fun73110
                }
            case 151:
                var1 = var5;
            case 154:
                if (var1) {
                    _fun73110_ip = 160;
                    continue _fun73110
                }
            case 157:
                var1 = !var2;
            case 160:
                if (var1) {
                    _fun73110_ip = 169;
                    continue _fun73110
                }
            case 163:
                var2 = true;
                var1 = var2 === var4;
            case 169:
                if (var1) {
                    _fun73110_ip = 178;
                    continue _fun73110
                }
            case 172:
                var2 = true;
                var1 = var2 === var3;
            case 178:
                var0.disableReactionUpdates = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);