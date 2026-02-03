// modules/chat_input/native/useChatBottomManagerUIStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun62920: for (var _fun62920_ip = 0;;) switch (_fun62920_ip) {
            case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var3 = var2[var0];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.Storage;
                var2 = var3.get;
                var1 = _closure1_slot2;
                var1 = var2.bind(var3)(var1, var0);
                var2 = null;
                var2 = var2 != var1;
                if (!var2) {
                    _fun62920_ip = 57;
                    continue _fun62920
                }
            case 54:
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 'chatInputContainerHeight';
    var _closure1_slot2 = var0;
    var0 = 1;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.chatInputContainerHeight = var2;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.showingAutoComplete = var2;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var4 = var2;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.showJumpToPresentButtonChannelId = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/useChatBottomManagerUIStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0, arg1() {
        _fun62922: for (var _fun62922_ip = 0;;) switch (_fun62922_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var2 = 'number';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun62922_ip = 72;
                    continue _fun62922
                }
            case 27:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var3);
                var3 = var2.Storage;
                var2 = var3.set;
                var1 = _closure1_slot2;
                var1 = var2.bind(var3)(var1, var4);
            case 72:
                var2 = _closure1_slot3;
                var1 = var2.setState;
                var0 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.Map;
                    var0 = arg0;
                    var5 = var0.chatInputContainerHeight;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var3 = var1.set;
                    var2 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var1)(var2, var0);
                    var0 = {};
                    var0.chatInputContainerHeight = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.updateChatInputContainerHeight = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = var2.setState;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.Map;
            var0 = arg0;
            var5 = var0.showingAutoComplete;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var6 = var1;
            var0 = new var6[var2](var5, var4);
            var1 = var0 instanceof Object ? var0 : var1;
            var3 = var1.set;
            var2 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var3.bind(var1)(var2, var0);
            var0 = {};
            var0.showingAutoComplete = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.updateShowingAutoComplete = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = var2.setState;
        var0 = function(arg0) { // Environment: var0
            _fun62927: for (var _fun62927_ip = 0;;) switch (_fun62927_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Map;
                    var0 = arg0;
                    var7 = var0.showJumpToPresentButtonChannelId;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var3 = var1.set;
                    var2 = _closure2_slot1;
                    var5 = _closure2_slot2;
                    var0 = undefined;
                    if (!var5) {
                        _fun62927_ip = 62;
                        continue _fun62927
                    }
                case 58:
                    var0 = _closure2_slot0;
                case 62:
                    var0 = var3.bind(var1)(var2, var0);
                    var0 = {};
                    var0.showJumpToPresentButtonChannelId = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.updateShouldShowJumpToPresentButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun62929: for (var _fun62929_ip = 0;;) switch (_fun62929_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.chatInputContainerHeight;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun62929_ip = 45;
                        continue _fun62929
                    }
                case 32:
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var0 = var2.bind(var1)();
                case 45:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useChatInputContainerHeight = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun62931: for (var _fun62931_ip = 0;;) switch (_fun62931_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.showingAutoComplete;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun62931_ip = 38;
                        continue _fun62931
                    }
                case 35:
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useChatShowingAutoComplete = var3;
    var1 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun62933: for (var _fun62933_ip = 0;;) switch (_fun62933_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var0 = var2[var0];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var0);
                    var0 = var3.getHighestActiveScreenIndex;
                    var5 = var0.bind(var3)();
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun62933_ip = 74;
                        continue _fun62933
                    }
                case 41:
                    var0 = arg0;
                    var4 = var0.chatInputContainerHeight;
                    var0 = var4.get;
                    var0 = var0.bind(var4)(var5);
                    if (!(var3 == var0)) {
                        _fun62933_ip = 72;
                        continue _fun62933
                    }
                case 64:
                    var3 = _closure1_slot4;
                    var0 = var3.bind(var2)();
                case 72:
                    _fun62933_ip = 82;
                    continue _fun62933;
                case 74:
                    var1 = _closure1_slot4;
                    var0 = var1.bind(var2)();
                case 82:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useBestActiveChatInputContainerHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [587, 629, 3718, 2]);