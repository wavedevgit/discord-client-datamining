// modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60476: for (var _fun60476_ip = 0;;) switch (_fun60476_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var0 = var6[var3];
                var5 = undefined;
                var10 = var4.bind(var5)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var9.bind(var10)(var7, var0);
                var3 = var6[var3];
                var7 = var4.bind(var5)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    _fun60478: for (var _fun60478_ip = 0;;) switch (_fun60478_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.get;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun60478_ip = 40;
                                continue _fun60478
                            }
                        case 35:
                            var0 = var1.guild;
                        case 40:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var3);
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var3 = new Array(1);
                var3[0] = var8;
                var1 = function() { // Environment: var1
                    _fun60479: for (var _fun60479_ip = 0;;) switch (_fun60479_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun60479_ip = 53;
                                continue _fun60479
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchVerificationForm;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var3);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun60476_ip = 176;
                    continue _fun60476
                }
            case 133:
                var3 = var1 != var4;
                var1 = null;
                if (!var3) {
                    _fun60476_ip = 173;
                    continue _fun60476
                }
            case 142:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.fromVerificationGateGuild;
                var1 = var2.bind(var3)(var4);
            case 173:
                var0 = var1;
            case 176:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 4701, 566, 7431, 1598, 2]);