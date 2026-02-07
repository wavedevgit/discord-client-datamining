// modules/messages/native/renderer/RowGenerator.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RowType;
    var _closure1_slot6 = var6;
    var6 = var3.SeparatorType;
    var _closure1_slot7 = var6;
    var3 = var3.LoadingType;
    var _closure1_slot8 = var3;
    var3 = {
        'constrainedWidth': 0,
        'animatingStickerMessageId': null,
        'forcedTheme': null,
        'shouldObscureSpoiler': true,
        'shouldDisableInteractiveComponents': true
    };
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var10 = var6.DEFAULT_OPTIONS;
    var11 = var3;
    var6 = copyDataProperties(var11, var10);
    var _closure1_slot9 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var1 = _closure1_slot9;
            var2.options = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setOptions';
        var0.key = var1;
        var1 = function arg0() {
            var2 = this;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 5;
            var3 = var3[var0];
            var0 = undefined;
            var7 = var4.bind(var0)(var3);
            var6 = var7.merge;
            var10 = _closure1_slot9;
            var9 = var2.options;
            var11 = {};
            var8 = arg0;
            var12 = var7;
            var1 = var12[var6](var11, var10, var9, var8, var7);
            var2.options = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'generate';
        var0.key = var5;
        var4 = function arg0() {
            _fun54501: for (var _fun54501_ip = 0;;) switch (_fun54501_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var7 = var4.rowType;
                    var0 = var3.options;
                    var2 = var0.forcedTheme;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun54501_ip = 42;
                        continue _fun54501
                    }
                case 29:
                    var0 = _closure1_slot5;
                    var2 = var0.theme;
                case 42:
                    var1 = _closure1_slot6;
                    var1 = var1.BLOCKED_GROUP;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 318;
                        continue _fun54501
                    }
                case 62:
                    var1 = _closure1_slot6;
                    var1 = var1.IGNORED_GROUP;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 318;
                        continue _fun54501
                    }
                case 79:
                    var1 = _closure1_slot6;
                    var1 = var1.MESSAGE;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 276;
                        continue _fun54501
                    }
                case 96:
                    var1 = _closure1_slot7;
                    var1 = var1.DAY;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 240;
                        continue _fun54501
                    }
                case 113:
                    var1 = _closure1_slot7;
                    var1 = var1.UNREAD;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 240;
                        continue _fun54501
                    }
                case 127:
                    var1 = _closure1_slot7;
                    var1 = var1.SUMMARY;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 240;
                        continue _fun54501
                    }
                case 141:
                    var1 = _closure1_slot8;
                    var1 = var1.LOAD_BEFORE;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 204;
                        continue _fun54501
                    }
                case 155:
                    var1 = _closure1_slot8;
                    var1 = var1.LOAD_AFTER;
                    if (!(var1 !== var7)) {
                        _fun54501_ip = 204;
                        continue _fun54501
                    }
                case 169:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.assertNever;
                    var5 = var5.bind(var6)(var7);
                    return var1;
                case 204:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var1 = var5.generateLoadingRowData;
                    var1 = var1.bind(var5)(var4, var2);
                    return var1;
                case 240:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var1 = var5.generateSeparatorRowData;
                    var1 = var1.bind(var5)(var4, var2);
                    return var1;
                case 276:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 7;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.generateMessageRowData;
                    var1 = var3.options;
                    var1 = var5.bind(var6)(var4, var1, var2);
                    return var1;
                case 318:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var5.bind(var0)(var1);
                    var0 = var1.generateBlockedGroupRowData;
                    var0 = var0.bind(var1)(var4, var2, var3);
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/RowGenerator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3198, 6584, 6585, 22, 6586, 6588, 12163, 12164, 1304, 2]);