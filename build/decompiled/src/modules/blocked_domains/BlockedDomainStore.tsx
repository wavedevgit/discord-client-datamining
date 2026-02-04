// modules/blocked_domains/BlockedDomainStore.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot4;
        var3 = function() {
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'isBlockedDomain';
        var0.key = var2;
        var1 = function arg0() {
            _fun51714: for (var _fun51714_ip = 0;;) switch (_fun51714_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 3;
                    var0 = var0[var6];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.isLibdiscoreInitialized;
                    var2 = var0.bind(var2)();
                    var3 = null;
                    var0 = null;
                    if (!var2) {
                        _fun51714_ip = 73;
                        continue _fun51714
                    }
                case 42:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.isBlockedDomain;
                    var2 = arg0;
                    var0 = var5.bind(var6)(var2);
                case 73:
                    var2 = '';
                    var2 = var2 !== var0;
                    if (!var2) {
                        _fun51714_ip = 88;
                        continue _fun51714
                    }
                case 84:
                    var2 = var3 !== var0;
                case 88:
                    if (!var2) {
                        _fun51714_ip = 141;
                        continue _fun51714
                    }
                case 91:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.LINK_SECURITY_CHECK_BLOCKED;
                    var1 = {};
                    var1.blocked_domain = var0;
                    var1 = var3.bind(var4)(var2, var1);
                case 141:
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/blocked_domains/BlockedDomainStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 1616, 795, 2]);