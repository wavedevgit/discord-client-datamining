// modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.processColor;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55587: for (var _fun55587_ip = 0;;) switch (_fun55587_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var5 = undefined;
                var3 = var1.bind(var5)(var0);
                var1 = var3.getMessageAuthor;
                var0 = arg0;
                var0 = var1.bind(var3)(var0);
                var3 = var0.nick;
                var7 = var0.colorString;
                var4 = var0.colorStrings;
                var1 = var0.guildId;
                var0 = {};
                var0.nick = var3;
                var3 = null;
                var6 = var3 != var7;
                var3 = undefined;
                if (!var6) {
                    _fun55587_ip = 89;
                    continue _fun55587
                }
            case 80:
                var6 = _closure1_slot2;
                var3 = var6.bind(var5)(var7);
            case 89:
                var0.colorString = var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.processColorStrings;
                var2 = var2.bind(var3)(var4);
                var0.colorStrings = var2;
                var0.guildId = var1;
                return var0;
        }
    };
    var2.getMessageAuthorWithProcessedColor = var3;
    var1 = function arg0, arg1() {
        _fun55588: for (var _fun55588_ip = 0;;) switch (_fun55588_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var3 = var4.getUserAuthor;
                var1 = arg0;
                var0 = arg1;
                var0 = var3.bind(var4)(var1, var0);
                var3 = var0.nick;
                var7 = var0.colorString;
                var4 = var0.colorStrings;
                var1 = var0.guildId;
                var0 = {};
                var0.nick = var3;
                var3 = null;
                var6 = var3 != var7;
                var3 = undefined;
                if (!var6) {
                    _fun55588_ip = 93;
                    continue _fun55588
                }
            case 84:
                var6 = _closure1_slot2;
                var3 = var6.bind(var5)(var7);
            case 93:
                var0.colorString = var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.processColorStrings;
                var2 = var2.bind(var3)(var4);
                var0.colorStrings = var2;
                var0.guildId = var1;
                return var0;
        }
    };
    var2.getUserAuthorWithProcessedColor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3983, 6701, 2]);