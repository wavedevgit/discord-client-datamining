// modules/application_commands/native/ApplicationCommandBuiltIns.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.BuiltInSectionId;
    var3 = {
        'id': '-15',
        'untranslatedName': 'leave',
        'displayName': 'leave'
    };
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandType;
    var7 = var7.CHAT;
    var3.type = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandInputType;
    var7 = var7.BUILT_IN;
    var3.inputType = var7;
    var6 = var6.BUILT_IN;
    var3.applicationId = var6;
    var7 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["26C4oi"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6 = 'untranslatedDescription';
    Object.defineProperty(var3, var6, {
        get: var7,
        set: var0,
        enumerable: true
    });
    var7 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["26C4oi"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6 = 'displayDescription';
    Object.defineProperty(var3, var6, {
        get: var7,
        set: var0,
        enumerable: true
    });
    var6 = function arg0() {
        _fun61435: for (var _fun61435_ip = 0;;) switch (_fun61435_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun61435_ip = 27;
                    continue _fun61435
                }
            case 17:
                var1 = var2.isGroupDM;
                var0 = var1.bind(var2)();
            case 27:
                return var0;
        }
    };
    var3.predicate = var6;
    var1 = function arg0, arg1() {
        _fun61436: for (var _fun61436_ip = 0;;) switch (_fun61436_ip) {
            case 0:
                var0 = arg1;
                var4 = var0.channel;
                var _closure2_slot0 = var4;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun61436_ip = 453;
                    continue _fun61436
                }
            case 23:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 6;
                var2 = var0[var2];
                var8 = undefined;
                var9 = var1.bind(var8)(var2);
                var7 = var9.computeChannelName;
                var6 = _closure1_slot4;
                var2 = _closure1_slot3;
                var11 = var7.bind(var9)(var4, var6, var2);
                var9 = 5;
                var2 = var0[var9];
                var2 = var1.bind(var8)(var2);
                var10 = var2.intl;
                var7 = var10.formatToPlainString;
                var2 = var0[var9];
                var2 = var1.bind(var8)(var2);
                var2 = var2.t;
                var6 = var2.hJ5Ap4;
                var2 = {};
                var2.name = var11;
                var2 = var7.bind(var10)(var6, var2);
                var6 = var0[var9];
                var6 = var1.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.format;
                var0 = var0[var9];
                var0 = var1.bind(var8)(var0);
                var0 = var0.t;
                var1 = var0.SSIVOu;
                var0 = {};
                var0.name = var11;
                var6 = var6.bind(var7)(var1, var0);
                var0 = var4.isManaged;
                var0 = var0.bind(var4)();
                var7 = var2;
                if (!var0) {
                    _fun61436_ip = 300;
                    continue _fun61436
                }
            case 190:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var9];
                var1 = var2.bind(var8)(var1);
                var12 = var1.intl;
                var10 = var12.formatToPlainString;
                var1 = var0[var9];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var4 = var1.hVGjEW;
                var1 = {};
                var1.name = var11;
                var7 = var10.bind(var12)(var4, var1);
                var4 = var0[var9];
                var4 = var2.bind(var8)(var4);
                var10 = var4.intl;
                var4 = var10.format;
                var0 = var0[var9];
                var0 = var2.bind(var8)(var0);
                var0 = var0.t;
                var2 = var0.IK1Qvs;
                var0 = {};
                var0.name = var11;
                var6 = var4.bind(var10)(var2, var0);
            case 300:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var2 = var1.bind(var8)(var0);
                var1 = var2.show;
                var0 = {};
                var0.title = var7;
                var0.body = var6;
                var7 = _closure1_slot0;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5["26C4oi"];
                var5 = var6.bind(var10)(var5);
                var0.confirmText = var5;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4["ETE/oC"];
                var4 = var5.bind(var6)(var4);
                var0.cancelText = var4;
                var3 = function() {
                    _fun61437: for (var _fun61437_ip = 0;;) switch (_fun61437_ip) {
                        case 0: // try_start_0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.closePrivateChannel;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 48: // try_end0
                            _fun61437_ip = 154;
                            continue _fun61437;
                        case 50: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 9;
                            var1 = var8[var1];
                            var7 = undefined;
                            var3 = var2.bind(var7)(var1);
                            var2 = var3.sendBotMessage;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var6 = _closure1_slot0;
                            var0 = 5;
                            var4 = var8[var0];
                            var4 = var6.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var0 = var8[var0];
                            var0 = var6.bind(var7)(var0);
                            var0 = var0.t;
                            var0 = var0["YOsuT/"];
                            var0 = var4.bind(var5)(var0);
                            var0 = var2.bind(var3)(var1, var0);
                        case 154:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onConfirm = var3;
                var0 = var1.bind(var2)(var0);
            case 453:
                var0 = undefined;
                return var0;
        }
    };
    var3.execute = var1;
    var1 = new Array(1);
    var1[0] = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandBuiltIns.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3100, 1621, 4545, 1645, 4547, 1234, 4792, 4003, 3945, 6526, 2]);