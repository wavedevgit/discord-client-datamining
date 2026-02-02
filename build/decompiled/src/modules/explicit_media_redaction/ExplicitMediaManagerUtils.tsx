// modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0() {
        _fun39358: for (var _fun39358_ip = 0;;) switch (_fun39358_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.attachments;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun39358_ip = 35;
                    continue _fun39358
                }
            case 18:
                var1 = var2.attachments;
                var4 = var1.length;
                var1 = 0;
                var0 = var4 > var1;
            case 35:
                if (var0) {
                    _fun39358_ip = 71;
                    continue _fun39358
                }
            case 38:
                var1 = var2.embeds;
                var1 = var3 != var1;
                if (!var1) {
                    _fun39358_ip = 68;
                    continue _fun39358
                }
            case 51:
                var4 = var2.embeds;
                var5 = var4.length;
                var4 = 0;
                var1 = var5 > var4;
            case 68:
                var0 = var1;
            case 71:
                if (var0) {
                    _fun39358_ip = 107;
                    continue _fun39358
                }
            case 74:
                var1 = var2.components;
                var1 = var3 != var1;
                if (!var1) {
                    _fun39358_ip = 104;
                    continue _fun39358
                }
            case 87:
                var2 = var2.components;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
            case 104:
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun39359: for (var _fun39359_ip = 0;;) switch (_fun39359_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun39359_ip = 93;
                    continue _fun39359
                }
            case 9:
                var0 = 'messageSnapshots';
                var0 = var0 in var1;
                if (var0) {
                    _fun39359_ip = 28;
                    continue _fun39359
                }
            case 20:
                var5 = var1.message_snapshots;
                _fun39359_ip = 34;
                continue _fun39359;
            case 28:
                var5 = var1.messageSnapshots;
            case 34:
                var0 = _closure1_slot0;
                var2 = undefined;
                var0 = var0.bind(var2)(var1);
                if (var0) {
                    _fun39359_ip = 91;
                    continue _fun39359
                }
            case 51:
                var1 = var3 != var5;
                if (!var1) {
                    _fun39359_ip = 88;
                    continue _fun39359
                }
            case 58:
                var3 = var3 == var5;
                var2 = undefined;
                if (var3) {
                    _fun39359_ip = 85;
                    continue _fun39359
                }
            case 67:
                var4 = var5.some;
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var0 = arg0;
                    var1 = var0.message;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var4.bind(var5)(var3);
            case 85:
                var1 = var2;
            case 88:
                var0 = var1;
            case 91:
                return var0;
            case 93:
                var0 = false;
                return var0;
        }
    };
    var2.hasAttachmentsEmbedsComponentsOrSnapshots = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);