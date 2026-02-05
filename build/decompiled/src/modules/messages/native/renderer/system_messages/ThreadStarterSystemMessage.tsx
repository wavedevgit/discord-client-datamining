// modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReferencedMessageState;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypes;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/ThreadStarterSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55905: for (var _fun55905_ip = 0;;) switch (_fun55905_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.message;
                var5 = var0.messageReference;
                var7 = var0.type;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var6 = var1.bind(var3)(var0);
                var0 = _closure1_slot5;
                var0 = var0.THREAD_STARTER_MESSAGE;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var1 = 'cannot call createThreadStarterSystemMessage on a message of type ';
                var1 = var8.bind(var1)(var7);
                var0 = var7 === var0;
                var0 = var6.bind(var3)(var0, var1);
                var1 = _closure1_slot3;
                var0 = var1.getMessageByReference;
                var0 = var0.bind(var1)(var5);
                var5 = var0.state;
                var0 = _closure1_slot4;
                var1 = var0.LOADED;
                var0 = null;
                if (!(var5 !== var1)) {
                    _fun55905_ip = 218;
                    continue _fun55905
                }
            case 124:
                var1 = {};
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 3;
                var7 = var6[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var6[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.OCs36J;
                var5 = var7.bind(var8)(var5);
                var1.content = var5;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var10 = var2.bind(var3)(var4);
                var11 = var1;
                var2 = copyDataProperties(var11, var10);
                var0 = var1;
            case 218:
                return var0;
        }
    };
    var2.createThreadStarterSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4268, 660, 44, 1234, 6698, 2]);