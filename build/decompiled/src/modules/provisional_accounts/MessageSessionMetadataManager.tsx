// modules/provisional_accounts/MessageSessionMetadataManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun113313: for (var _fun113313_ip = 0;;) switch (_fun113313_ip) {
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
            case 72: // try_end0
                _fun113313_ip = 76;
                continue _fun113313;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113317: for (var _fun113317_ip = 0;;) switch (_fun113317_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113317_ip = 86;
                        continue _fun113317
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113317_ip = 120;
                    continue _fun113317;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.MESSAGE_CREATE = var3;
                    var2 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.MESSAGE_UPDATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'handleMessageCreate';
        var4.key = var0;
        var0 = function arg0() {
            var2 = this;
            var0 = arg0;
            var1 = var0.message;
            var0 = var2._trackIfSessionMetadataExists;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleMessageUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var0 = arg0;
            var1 = var0.message;
            var0 = var2._trackIfSessionMetadataExists;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_getAuthorizedApplicationIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun113322: for (var _fun113322_ip = 0;;) switch (_fun113322_ip) {
                case 0:
                    var0 = arg0;
                case 3: // try_start_0
                    var0 = var0.authorized_application_ids;
                case 9: // try_end0
                    return var0;
                case 11: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_trackIfSessionMetadataExists';
        var4.key = var6;
        var5 = function arg0() {
            _fun113323: for (var _fun113323_ip = 0;;) switch (_fun113323_ip) {
                case 0:
                    var4 = arg0;
                    var6 = this;
                    var0 = var4.session_metadata;
                    var8 = null;
                    if (!(var8 != var0)) {
                        _fun113323_ip = 132;
                        continue _fun113323
                    }
                case 18:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var1 = var3[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.track;
                    var0 = _closure1_slot7;
                    var1 = var0.MESSAGE_DISPATCH_SESSION_METADATA_FOUND;
                    var0 = {};
                    var7 = var4.id;
                    var0.message_id = var7;
                    var7 = var4.channel_id;
                    var0.channel_id = var7;
                    var7 = var4.author;
                    var8 = var8 == var7;
                    if (var8) {
                        _fun113323_ip = 97;
                        continue _fun113323
                    }
                case 92:
                    var5 = var7.id;
                case 97:
                    var0.author_id = var5;
                    var5 = var6._getAuthorizedApplicationIds;
                    var4 = var4.session_metadata;
                    var4 = var5.bind(var6)(var4);
                    var0.authorized_application_ids = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 132:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/provisional_accounts/MessageSessionMetadataManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 795, 4265, 2]);