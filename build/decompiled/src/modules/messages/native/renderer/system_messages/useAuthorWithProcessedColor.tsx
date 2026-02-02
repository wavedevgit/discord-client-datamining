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
        _fun55370: for (var _fun55370_ip = 0;;) switch (_fun55370_ip) {
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
                    _fun55370_ip = 89;
                    continue _fun55370
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
        _fun55371: for (var _fun55371_ip = 0;;) switch (_fun55371_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var3 = var5.getUserAuthor;
                var2 = arg0;
                var0 = arg1;
                var0 = var3.bind(var5)(var2, var0);
                var2 = var0.nick;
                var6 = var0.colorString;
                var3 = var0.colorStrings;
                var0 = {};
                var0.nick = var2;
                var2 = null;
                var5 = var2 != var6;
                var2 = undefined;
                if (!var5) {
                    _fun55371_ip = 88;
                    continue _fun55371
                }
            case 79:
                var5 = _closure1_slot2;
                var2 = var5.bind(var4)(var6);
            case 88:
                var0.colorString = var2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.processColorStrings;
                var1 = var1.bind(var2)(var3);
                var0.colorStrings = var1;
                return var0;
        }
    };
    var2.getUserAuthorWithProcessedColor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3944, 6641, 2]);