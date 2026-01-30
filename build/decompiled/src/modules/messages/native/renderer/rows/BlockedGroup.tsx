// modules/messages/native/renderer/rows/BlockedGroup.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.RowType;
    var _closure1_slot3 = var6;
    var3 = var3.SeparatorAction;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UNSAFE_Colors;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.memoize;
    var3 = function(arg0) { // Environment: var1
        _fun53822: for (var _fun53822_ip = 0;;) switch (_fun53822_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var3);
                var9 = '#DBE0E4';
                if (!var0) {
                    _fun53822_ip = 79;
                    continue _fun53822
                }
            case 48:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.unsafe_rawColors;
                var9 = var0.PRIMARY_700;
            case 79:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var3);
                var8 = '#FAFAFA';
                if (!var0) {
                    _fun53822_ip = 147;
                    continue _fun53822
                }
            case 116:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.unsafe_rawColors;
                var8 = var0.PRIMARY_630;
            case 147:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun53822_ip = 190;
                    continue _fun53822
                }
            case 178:
                var0 = _closure1_slot5;
                var3 = var0.GREY1;
                _fun53822_ip = 259;
                continue _fun53822;
            case 190:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var6 = var2.bind(var4)(var0);
                var5 = var6.hexWithOpacity;
                var2 = _closure1_slot1;
                var0 = 4;
                var0 = var7[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.unsafe_rawColors;
                var2 = var0.PRIMARY_300;
                var0 = 0.6;
                var3 = var5.bind(var6)(var2, var0);
            case 259:
                var0 = {};
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var6 = var5[var1];
                var7 = var2.bind(var4)(var6);
                var6 = var7.processColorOrThrow;
                var6 = var6.bind(var7)(var9);
                var0.borderColor = var6;
                var6 = var5[var1];
                var7 = var2.bind(var4)(var6);
                var6 = var7.processColorOrThrow;
                var6 = var6.bind(var7)(var8);
                var0.backgroundColor = var6;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.processColorOrThrow;
                var1 = var1.bind(var2)(var3);
                var0.color = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/rows/BlockedGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: generateBlockedGroupRowData, environment: var1
        _fun53823: for (var _fun53823_ip = 0;;) switch (_fun53823_ip) {
            case 0:
                var0 = arg0;
                var2 = arg2;
                var _closure2_slot0 = var2;
                var4 = var0.changeType;
                var7 = var0.message;
                var9 = var0.content;
                var3 = var0.text;
                var2 = var0.revealed;
                var6 = var0.context;
                var0 = {};
                var11 = _closure1_slot6;
                var10 = undefined;
                var5 = arg1;
                var12 = var11.bind(var10)(var5);
                var13 = var0;
                var5 = copyDataProperties(var13, var12);
                var5 = _closure1_slot3;
                var10 = var5.BLOCKED_GROUP;
                var5 = 'type';
                var0[var5] = var10;
                var5 = var9.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.generate;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var9)(var1);
                var1 = 'content';
                var0[var1] = var5;
                var5 = {};
                var1 = {};
                var8 = _closure1_slot4;
                var8 = var8.TOGGLE_BLOCKED_MESSAGES;
                var1.type = var8;
                var8 = null;
                if (!(var8 == var6)) {
                    _fun53823_ip = 142;
                    continue _fun53823
                }
            case 137:
                var6 = var7.id;
            case 142:
                var1.context = var6;
                var5.action = var1;
                var1 = 'button';
                var0[var1] = var5;
                var1 = 'changeType';
                var0[var1] = var4;
                var1 = 'text';
                var0[var1] = var3;
                var1 = 'revealed';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.generateBlockedGroupRowData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6478, 483, 22, 3165, 671, 3199, 6481, 2]);