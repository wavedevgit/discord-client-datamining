// modules/chat/native/ChatViewPopups.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: ChatViewPopups, environment: var3
        var1 = arg0;
        var5 = var1.channelId;
        var6 = var1.guildId;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var2 = false;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 1;
        var2 = var8[var2];
        var7 = undefined;
        var2 = var3.bind(var7)(var2);
        var4 = var2.bind(var7)(var6);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot0;
        var2 = 2;
        var2 = var8[var2];
        var3 = var3.bind(var7)(var2);
        var2 = var3.useShowWelcomeModal;
        var5 = var2.bind(var3)(var6, var5);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun91721: for (var _fun91721_ip = 0;;) switch (_fun91721_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    if (var1) {
                        _fun91721_ip = 179;
                        continue _fun91721
                    }
                case 20:
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun91721_ip = 109;
                        continue _fun91721
                    }
                case 27:
                    var1 = _closure2_slot3;
                    if (!var1) {
                        _fun91721_ip = 179;
                        continue _fun91721
                    }
                case 37:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openWelcomeActionSheet;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = function() { // Original name: onHide, environment: var4
                        var1 = _closure2_slot1;
                        var0 = false;
                        var1.current = var0;
                        return var0;
                    };
                    var1.onHide = var5;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    var1 = true;
                    var2.current = var1;
                    _fun91721_ip = 179;
                    continue _fun91721;
                case 109:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.open;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var4 = function() { // Original name: onHide, environment: var4
                        var1 = _closure2_slot1;
                        var0 = false;
                        var1.current = var0;
                        return var0;
                    };
                    var1.onHide = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot1;
                    var0 = true;
                    var1.current = var0;
                case 179:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = null;
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var3 = var4.memo;
    var3 = var3.bind(var4)(var1);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatViewPopups.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ChatViewPopups = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11857, 11861, 11867, 2]);