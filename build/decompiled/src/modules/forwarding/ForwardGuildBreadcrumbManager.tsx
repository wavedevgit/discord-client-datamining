// modules/forwarding/ForwardGuildBreadcrumbManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun117838: for (var _fun117838_ip = 0;;) switch (_fun117838_ip) {
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
                _fun117838_ip = 76;
                continue _fun117838;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: fetchForwardReferencedGuilds, environment: var1
        _fun117841: for (var _fun117841_ip = 0;;) switch (_fun117841_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.message_reference;
                var2 = null;
                var4 = var2 == var1;
                var0 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun117841_ip = 27;
                    continue _fun117841
                }
            case 22:
                var5 = var1.type;
            case 27:
                var4 = _closure1_slot8;
                var4 = var4.FORWARD;
                if (!(var5 === var4)) {
                    _fun117841_ip = 90;
                    continue _fun117841
                }
            case 44:
                var3 = var3.message_reference;
                var3 = var3.guild_id;
                if (!(var2 != var3)) {
                    _fun117841_ip = 90;
                    continue _fun117841
                }
            case 59:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchBasicGuild;
                var1 = var1.bind(var2)(var3);
            case 90:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageReferenceTypes;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function() { // Original name: ForwardGuildBreadcrumbManager, environment: var0
            _fun117843: for (var _fun117843_ip = 0;;) switch (_fun117843_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117843_ip = 62;
                        continue _fun117843
                    }
                case 49:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun117843_ip = 100;
                    continue _fun117843;
                case 62:
                    var5 = global;
                    var8 = var5.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 100:
                    var0 = var2.bind(var3)(var4, var0);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure1_slot10;
                    var1 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/ForwardGuildBreadcrumbManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 660, 14971, 14573, 4256, 2]);