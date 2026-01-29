// modules/share/native/useShareChatInputActions.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/useShareChatInputActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useShareChatInputActions, environment: var1
        var1 = arg0;
        var9 = arg1;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var9;
        var8 = _closure1_slot3;
        var4 = var8.useRef;
        var2 = null;
        var6 = var4.bind(var8)(var2);
        var _closure2_slot2 = var6;
        var5 = var8.useRef;
        var2 = 0;
        var4 = {
            'start': 0,
            'end': 0
        };
        var4 = var5.bind(var8)(var4);
        var _closure2_slot3 = var4;
        var5 = var8.useState;
        var4 = false;
        var7 = var5.bind(var8)(var4);
        var5 = _closure1_slot2;
        var4 = undefined;
        var3 = 2;
        var3 = var5.bind(var4)(var7, var3);
        var5 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot4 = var2;
        var4 = var8.useCallback;
        var3 = function(arg0) { // Environment: var0
            var1 = _closure2_slot3;
            var0 = {};
            var2 = arg0;
            var2 = var2.nativeEvent;
            var3 = var2.selection;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = new Array(0);
        var4 = var4.bind(var8)(var3, var2);
        var7 = var8.useCallback;
        var3 = function() { // Environment: var0
            var2 = _closure2_slot4;
            var0 = undefined;
            var1 = true;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = new Array(0);
        var3 = var7.bind(var8)(var3, var2);
        var10 = var8.useCallback;
        var7 = function() { // Environment: var0
            var2 = _closure2_slot4;
            var0 = undefined;
            var1 = false;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = new Array(0);
        var2 = var10.bind(var8)(var7, var2);
        var10 = var8.useCallback;
        var7 = new Array(1);
        var7[0] = var1;
        var1 = function(arg0) { // Environment: var0
            _fun72811: for (var _fun72811_ip = 0;;) switch (_fun72811_ip) {
                case 0:
                    var0 = arg0;
                    var4 = '';
                    var _closure3_slot0 = var4;
                    var2 = var0.id;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun72811_ip = 33;
                        continue _fun72811
                    }
                case 24:
                    var2 = var0.surrogates;
                    if (!(var1 == var2)) {
                        _fun72811_ip = 101;
                        continue _fun72811
                    }
                case 33:
                    var2 = var0.uniqueName;
                    if (!(var1 != var2)) {
                        _fun72811_ip = 53;
                        continue _fun72811
                    }
                case 43:
                    var2 = var0.uniqueName;
                    if (!(var4 === var2)) {
                        _fun72811_ip = 60;
                        continue _fun72811
                    }
                case 53:
                    var6 = var0.name;
                    _fun72811_ip = 66;
                    continue _fun72811;
                case 60:
                    var6 = var0.uniqueName;
                case 66:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var4 = ':';
                    var2 = ': ';
                    var2 = var5.bind(var4)(var6, var2);
                    _closure3_slot0 = var2;
                    _fun72811_ip = 110;
                    continue _fun72811;
                case 101:
                    var0 = var0.surrogates;
                    _closure3_slot0 = var0;
                case 110:
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var3 = function(arg0) { // Environment: var3
                        var3 = arg0;
                        var4 = var3.slice;
                        var0 = _closure2_slot3;
                        var1 = var0.current;
                        var2 = var1.start;
                        var1 = 0;
                        var2 = var4.bind(var3)(var1, var2);
                        var1 = _closure3_slot0;
                        var1 = var2 + var1;
                        var2 = var3.slice;
                        var0 = var0.current;
                        var0 = var0.end;
                        var0 = var2.bind(var3)(var0);
                        var0 = var1 + var0;
                        return var0;
                    };
                    var3 = var4.bind(var0)(var3);
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    if (!(var1 != var2)) {
                        _fun72811_ip = 154;
                        continue _fun72811
                    }
                case 144:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
                case 154:
                    return var0;
            }
        };
        var10 = var10.bind(var8)(var1, var7);
        var _closure2_slot5 = var10;
        var11 = var8.useCallback;
        var7 = function() { // Environment: var0
            _fun72813: for (var _fun72813_ip = 0;;) switch (_fun72813_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var1 = var0.current;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun72813_ip = 28;
                        continue _fun72813
                    }
                case 18:
                    var0 = var1.focus;
                    var0 = var0.bind(var1)();
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = new Array(0);
        var11 = var11.bind(var8)(var7, var1);
        var _closure2_slot6 = var11;
        var7 = var8.useCallback;
        var1 = new Array(3);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var0 = function() { // Environment: var0
            _fun72814: for (var _fun72814_ip = 0;;) switch (_fun72814_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var1 = var0.current;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun72814_ip = 28;
                        continue _fun72814
                    }
                case 18:
                    var0 = var1.blur;
                    var0 = var0.bind(var1)();
                case 28:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var7 = _closure2_slot5;
                    var1.onPressEmoji = var7;
                    var7 = _closure2_slot6;
                    var1.onClose = var7;
                    var5 = _closure1_slot4;
                    var5 = var5.CHAT;
                    var1.pickerIntention = var5;
                    var5 = false;
                    var1.autoFocus = var5;
                    var1.startExpanded = var5;
                    var5 = _closure2_slot1;
                    var1.channel = var5;
                    var7 = var4 == var5;
                    var5 = undefined;
                    if (var7) {
                        _fun72814_ip = 137;
                        continue _fun72814
                    }
                case 123:
                    var7 = _closure2_slot1;
                    var6 = var7.getGuildId;
                    var5 = var6.bind(var7)();
                case 137:
                    var6 = var4 != var5;
                    var4 = undefined;
                    if (!var6) {
                        _fun72814_ip = 149;
                        continue _fun72814
                    }
                case 146:
                    var4 = var5;
                case 149:
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var7.bind(var8)(var0, var1);
        var0 = {};
        var0.textInputRef = var6;
        var0.isInputFocused = var5;
        var0.handleSelectionChange = var4;
        var0.handleMessageFocus = var3;
        var0.handleMessageBlur = var2;
        var0.handlePressEmoji = var1;
        return var0;
    };
    var2.useShareChatInputActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1616, 6949, 2]);