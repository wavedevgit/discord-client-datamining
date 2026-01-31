// modules/media_keyboard/native/useUploadDisabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_UPLOAD_COUNT;
    var _closure1_slot5 = var6;
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/useUploadDisabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot4;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun108312: for (var _fun108312_ip = 0;;) switch (_fun108312_ip) {
                case 0:
                    var5 = _closure1_slot4;
                    var2 = var5.getUploads;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = _closure1_slot2;
                    var0 = var0.ChannelMessage;
                    var0 = var2.bind(var5)(var1, var0);
                    var1 = var0.length;
                    var0 = _closure1_slot5;
                    var0 = var1 >= var0;
                    if (var0) {
                        _fun108312_ip = 154;
                        continue _fun108312
                    }
                case 57:
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    var1 = var2 === var1;
                    if (var1) {
                        _fun108312_ip = 151;
                        continue _fun108312
                    }
                case 101:
                    var5 = _closure2_slot0;
                    var2 = var5.isPrivate;
                    var2 = var2.bind(var5)();
                    if (var2) {
                        _fun108312_ip = 148;
                        continue _fun108312
                    }
                case 118:
                    var6 = _closure1_slot3;
                    var5 = var6.can;
                    var4 = _closure1_slot6;
                    var4 = var4.ATTACH_FILES;
                    var3 = _closure2_slot0;
                    var2 = var5.bind(var6)(var4, var3);
                case 148:
                    var1 = !var2;
                case 151:
                    var0 = var1;
                case 154:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3960, 3050, 3959, 660, 566, 5606, 2]);