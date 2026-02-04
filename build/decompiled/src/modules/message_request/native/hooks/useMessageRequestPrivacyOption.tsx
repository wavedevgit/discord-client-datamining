// modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        _fun96494: for (var _fun96494_ip = 0;;) switch (_fun96494_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var8 = var2.id;
                var _closure2_slot0 = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 2;
                var5 = var11[var4];
                var3 = undefined;
                var5 = var10.bind(var3)(var5);
                var6 = var5.MessageRequestRestrictedGuildIds;
                var5 = var6.useSetting;
                var6 = var5.bind(var6)();
                var5 = var6.includes;
                var7 = var5.bind(var6)(var8);
                var4 = var11[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.RestrictedGuildIds;
                var4 = var5.useSetting;
                var5 = var4.bind(var5)();
                var4 = var5.includes;
                var2 = var2.id;
                var4 = var4.bind(var5)(var2);
                var6 = _closure1_slot3;
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function(arg0) { // Environment: var1
                    _fun96495: for (var _fun96495_ip = 0;;) switch (_fun96495_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getSanitizedMessageRequestRestrictedGuilds;
                            var5 = var2.bind(var3)();
                            var2 = arg0;
                            if (var2) {
                                _fun96495_ip = 60;
                                continue _fun96495
                            }
                        case 41:
                            var3 = var5.add;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var5)(var2);
                            _fun96495_ip = 77;
                            continue _fun96495;
                        case 60:
                            var3 = var5.delete;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var5)(var2);
                        case 77:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 2;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.MessageRequestRestrictedGuildIds;
                            var2 = var3.updateSetting;
                            var1 = global;
                            var4 = var1.Array;
                            var1 = var4.from;
                            var1 = var1.bind(var4)(var5);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot4;
                var0 = 4;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.ActionSheetSwitchRow;
                var0 = {};
                var6 = 5;
                var8 = var11[var6];
                var8 = var10.bind(var3)(var8);
                var12 = var8.intl;
                var9 = var12.string;
                var8 = var11[var6];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["7UgSGP"];
                var8 = var9.bind(var12)(var8);
                var0.label = var8;
                var8 = var11[var6];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.INRaYb;
                var6 = var8.bind(var9)(var6);
                var0.subLabel = var6;
                var6 = !var4;
                if (!var6) {
                    _fun96494_ip = 277;
                    continue _fun96494
                }
            case 274:
                var6 = !var7;
            case 277:
                var0.value = var6;
                var0.onValueChange = var5;
                var0.disabled = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96496: for (var _fun96496_ip = 0;;) switch (_fun96496_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guild;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.bind(var4)();
                var0 = null;
                if (var2) {
                    _fun96496_ip = 62;
                    continue _fun96496
                }
            case 42:
                var3 = _closure1_slot4;
                var2 = _closure1_slot5;
                var1 = {};
                var1.guild = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 62:
                return var0;
        }
    };
    var2.useMessageRequestPrivacyOption = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1348, 7228, 7735, 1234, 11770, 2]);