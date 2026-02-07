// stores/EditMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun54823: for (var _fun54823_ip = 0;;) switch (_fun54823_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun54823_ip = 74;
                continue _fun54823;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun54827: for (var _fun54827_ip = 0;;) switch (_fun54827_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54827_ip = 69;
                        continue _fun54827
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54827_ip = 105;
                    continue _fun54827;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'isEditing';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54829: for (var _fun54829_ip = 0;;) switch (_fun54829_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun54829_ip = 30;
                        continue _fun54829
                    }
                case 25:
                    var1 = var0.messageId;
                case 30:
                    var0 = arg1;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isEditingAny';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot9;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getEditingTextValue';
        var4.key = var6;
        var6 = function arg0() {
            _fun54831: for (var _fun54831_ip = 0;;) switch (_fun54831_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun54831_ip = 31;
                        continue _fun54831
                    }
                case 25:
                    var0 = var1.textValue;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getEditingRichValue';
        var4.key = var6;
        var6 = function arg0() {
            _fun54832: for (var _fun54832_ip = 0;;) switch (_fun54832_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun54832_ip = 31;
                        continue _fun54832
                    }
                case 25:
                    var0 = var1.richValue;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getEditingMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun54833: for (var _fun54833_ip = 0;;) switch (_fun54833_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun54833_ip = 30;
                        continue _fun54833
                    }
                case 25:
                    var0 = var1.messageId;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getEditingMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun54834: for (var _fun54834_ip = 0;;) switch (_fun54834_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure1_slot9;
                    var1 = var0[var4];
                    var5 = null;
                    var3 = var5 != var1;
                    var0 = null;
                    if (!var3) {
                        _fun54834_ip = 60;
                        continue _fun54834
                    }
                case 25:
                    var3 = var1.messageId;
                    var3 = var5 != var3;
                    var0 = null;
                    if (!var3) {
                        _fun54834_ip = 60;
                        continue _fun54834
                    }
                case 39:
                    var3 = _closure1_slot8;
                    var2 = var3.getMessage;
                    var1 = var1.messageId;
                    var0 = var2.bind(var3)(var4, var1);
                case 60:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getEditActionSource';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'EditMessageStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun54836: for (var _fun54836_ip = 0;;) switch (_fun54836_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var7 = var0.messageId;
                var6 = var0.content;
                var2 = var0.source;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 6;
                var4 = var11[var0];
                var0 = undefined;
                var4 = var8.bind(var0)(var4);
                var5 = var4.UseLegacyChatInput;
                var4 = var5.getSetting;
                var10 = var4.bind(var5)();
                var5 = _closure1_slot1;
                var4 = 7;
                var4 = var11[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.unparse;
                var9 = var4.bind(var5)(var6, var3);
                var5 = _closure1_slot9;
                var4 = {};
                var4.channelId = var3;
                var4.messageId = var7;
                var4.textValue = var9;
                var7 = 8;
                var7 = var11[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.toRichValue;
                if (!var10) {
                    _fun54836_ip = 135;
                    continue _fun54836
                }
            case 132:
                var6 = var9;
            case 135:
                var6 = var7.bind(var8)(var6);
                var4.richValue = var6;
                var5[var3] = var4;
                var1 = _closure1_slot10;
                var1[var3] = var2;
                return var0;
        }
    };
    var1.MESSAGE_START_EDIT = var8;
    var8 = function arg0() {
        _fun54837: for (var _fun54837_ip = 0;;) switch (_fun54837_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var5 = var0.textValue;
                var4 = var0.richValue;
                var1 = _closure1_slot9;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun54837_ip = 79;
                    continue _fun54837
                }
            case 37:
                var1 = _closure1_slot9;
                var0 = {};
                var7 = var0;
                var6 = var3;
                var3 = copyDataProperties(var7, var6);
                var3 = 'textValue';
                var0[var3] = var5;
                var3 = 'richValue';
                var0[var3] = var4;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE_EDIT = var8;
    var8 = function arg0() {
        _fun54838: for (var _fun54838_ip = 0;;) switch (_fun54838_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun54838_ip = 49;
                    continue _fun54838
                }
            case 14:
                var2 = _closure1_slot9;
                var2 = var2[var1];
                if (!(var3 != var2)) {
                    _fun54838_ip = 49;
                    continue _fun54838
                }
            case 29:
                var2 = _closure1_slot9;
                var2 = delete var2[var1];
                var0 = _closure1_slot10;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
            case 49:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_END_EDIT = var8;
    var3 = function arg0() {
        _fun54839: for (var _fun54839_ip = 0;;) switch (_fun54839_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var4 = var0.id;
                var0 = _closure1_slot9;
                var5 = var0[var2];
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun54839_ip = 42;
                    continue _fun54839
                }
            case 37:
                var3 = var5.messageId;
            case 42:
                if (!(var3 === var4)) {
                    _fun54839_ip = 62;
                    continue _fun54839
                }
            case 46:
                var3 = _closure1_slot9;
                var3 = delete var3[var2];
                var1 = _closure1_slot10;
                var1 = delete var1[var2];
            case 62:
                return var0;
        }
    };
    var1.MESSAGE_DELETE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/EditMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4251, 1348, 5639, 6601, 566, 806, 2]);