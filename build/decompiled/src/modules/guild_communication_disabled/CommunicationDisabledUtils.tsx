// modules/guild_communication_disabled/CommunicationDisabledUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function arg0() {
        _fun24682: for (var _fun24682_ip = 0;;) switch (_fun24682_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun24682_ip = 73;
                    continue _fun24682
                }
            case 12:
                var1 = global;
                var2 = var1.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var3;
                var5 = var4;
                var2 = new var6[var2](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var0 = var2 > var1;
            case 73:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_communication_disabled/CommunicationDisabledUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isCommunicationDisabled = var3;
    var1 = function arg0() {
        _fun24683: for (var _fun24683_ip = 0;;) switch (_fun24683_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = null;
                var4 = var0 == var3;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun24683_ip = 29;
                    continue _fun24683
                }
            case 23:
                var0 = var3.communicationDisabledUntil;
            case 29:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var2.isMemberCommunicationDisabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);