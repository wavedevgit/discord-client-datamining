// modules/message_request/hooks/useMessageRequestTimestampText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun109481: for (var _fun109481_ip = 0;;) switch (_fun109481_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.lastMessageId;
                var1 = var0.message;
                var0 = var0.loaded;
                if (!var0) {
                    _fun109481_ip = 29;
                    continue _fun109481
                }
            case 23:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun109481_ip = 76;
                    continue _fun109481
                }
            case 29:
                var0 = null;
                var2 = var0 != var4;
                if (!var2) {
                    _fun109481_ip = 74;
                    continue _fun109481
                }
            case 38:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.extractTimestamp;
                var0 = var2.bind(var3)(var4);
            case 74:
                _fun109481_ip = 117;
                continue _fun109481;
            case 76:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.extractTimestamp;
                var1 = var1.id;
                var0 = var2.bind(var3)(var1);
            case 117:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/hooks/useMessageRequestTimestampText.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun109482: for (var _fun109482_ip = 0;;) switch (_fun109482_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var3 = undefined;
                var2 = var7.bind(var3)(var0);
                var0 = var2.useMessageRequestPreview;
                var4 = var0.bind(var2)(var4);
                var2 = _closure1_slot4;
                var0 = {};
                var6 = 3;
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var9;
                var5 = function() { // Environment: var5
                    var2 = _closure1_slot3;
                    var1 = var2.lastMessageId;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                var0.lastMessageId = var5;
                var11 = var0;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var4 = var0 == var2;
                var0 = '';
                if (var4) {
                    _fun109482_ip = 161;
                    continue _fun109482
                }
            case 126:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var2 = var1.bind(var3)(var2);
                var1 = var2.calendar;
                var0 = var1.bind(var2)();
            case 161:
                return var0;
        }
    };
    var2.useMessageRequestTimestampText = var3;
    var1 = function arg0() {
        _fun109484: for (var _fun109484_ip = 0;;) switch (_fun109484_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var4 = undefined;
                var2 = var7.bind(var4)(var0);
                var0 = var2.useMessageRequestPreview;
                var3 = var0.bind(var2)(var3);
                var2 = _closure1_slot4;
                var0 = {};
                var6 = 3;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var9;
                var5 = function() { // Environment: var5
                    var2 = _closure1_slot3;
                    var1 = var2.lastMessageId;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                var0.lastMessageId = var5;
                var11 = var0;
                var10 = var3;
                var3 = copyDataProperties(var11, var10);
                var3 = var2.bind(var4)(var0);
                var0 = null;
                var2 = var0 == var3;
                var0 = '';
                if (var2) {
                    _fun109484_ip = 157;
                    continue _fun109484
                }
            case 126:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getTimestampString;
                var0 = var1.bind(var2)(var3);
            case 157:
                return var0;
        }
    };
    var2.useMessageRequestRelativeTimestampText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3908, 21, 14046, 566, 3006, 6449, 2]);