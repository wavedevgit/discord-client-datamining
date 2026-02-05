// modules/routing/transitionToChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0, arg1() {
        _fun35593: for (var _fun35593_ip = 0;;) switch (_fun35593_ip) {
            case 0:
                var5 = arg1;
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun35593_ip = 233;
                    continue _fun35593
                }
            case 32:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 2;
                var3 = var7[var3];
                var4 = undefined;
                var8 = var6.bind(var4)(var3);
                var3 = var8.getGuildIdForGenericRedirect;
                var10 = var3.bind(var8)(var0);
                var8 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var11 = var8.bind(var4)(var3);
                var9 = var11.preload;
                var8 = var0.guild_id;
                var3 = var0.id;
                var3 = var9.bind(var11)(var8, var3);
                var3 = 4;
                var3 = var7[var3];
                var9 = var6.bind(var4)(var3);
                var8 = var9.transitionTo;
                var7 = _closure1_slot4;
                var6 = var7.CHANNEL;
                var3 = var0.id;
                var7 = var6.bind(var7)(var10, var3);
                var6 = {};
                var3 = true;
                var6.openChannel = var3;
                var13 = var6;
                var12 = var5;
                var10 = copyDataProperties(var13, var12);
                var6 = var8.bind(var9)(var7, var6);
                var2 = var2 != var5;
                if (!var2) {
                    _fun35593_ip = 180;
                    continue _fun35593
                }
            case 174:
                var2 = var5.openTextInVoiceIfVoiceChannel;
            case 180:
                if (!var2) {
                    _fun35593_ip = 193;
                    continue _fun35593
                }
            case 183:
                var5 = var0.isGuildVocal;
                var2 = var5.bind(var0)();
            case 193:
                if (!var2) {
                    _fun35593_ip = 233;
                    continue _fun35593
                }
            case 196:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.updateChatOpen;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0, var3);
            case 233:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 6;
        var3 = var5[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var4 = var1.parent_id;
        var3 = null;
        var4 = var3 != var4;
        var3 = 'Thread must have a parent ID.';
        var3 = var6.bind(var0)(var4, var3);
        var4 = _closure1_slot0;
        var3 = 2;
        var3 = var5[var3];
        var6 = var4.bind(var0)(var3);
        var3 = var6.getGuildIdForGenericRedirect;
        var7 = var3.bind(var6)(var1);
        var3 = 4;
        var3 = var5[var3];
        var4 = var4.bind(var0)(var3);
        var3 = var4.transitionTo;
        var6 = _closure1_slot4;
        var5 = var6.CHANNEL;
        var2 = var1.id;
        var1 = arg1;
        var2 = var5.bind(var6)(var7, var2, var1);
        var1 = {};
        var5 = true;
        var1.openChannel = var5;
        var9 = arg2;
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Routes;
    var _closure1_slot4 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/transitionToChannel.tsx';
    var5 = var6.bind(var7)(var5);
    var2.transitionToChannel = var4;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 6;
        var3 = var5[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var4 = var1.parent_id;
        var3 = null;
        var4 = var3 != var4;
        var3 = 'Thread must have a parent ID.';
        var3 = var6.bind(var0)(var4, var3);
        var4 = _closure1_slot0;
        var3 = 2;
        var3 = var5[var3];
        var6 = var4.bind(var0)(var3);
        var3 = var6.getGuildIdForGenericRedirect;
        var6 = var3.bind(var6)(var1);
        var3 = 4;
        var3 = var5[var3];
        var4 = var4.bind(var0)(var3);
        var3 = var4.transitionTo;
        var5 = _closure1_slot4;
        var2 = var5.CHANNEL;
        var1 = var1.id;
        var2 = var2.bind(var5)(var6, var1);
        var1 = {};
        var5 = true;
        var1.openChannel = var5;
        var7 = arg1;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.transitionToThread = var4;
    var2.transitionToThreadMessage = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun35596: for (var _fun35596_ip = 0;;) switch (_fun35596_ip) {
            case 0:
                var4 = arg3;
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 == var3)) {
                    _fun35596_ip = 46;
                    continue _fun35596
                }
            case 29:
                var5 = _closure1_slot5;
                var2 = undefined;
                var1 = arg0;
                var1 = var5.bind(var2)(var1, var4);
                _fun35596_ip = 62;
                continue _fun35596;
            case 46:
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = arg2;
                var0 = var2.bind(var1)(var3, var0, var4);
            case 62:
                var0 = undefined;
                return var0;
        }
    };
    var2.tryTransitionToThreadMessage = var3;
    var3 = function arg0, arg1, arg2() {
        _fun35597: for (var _fun35597_ip = 0;;) switch (_fun35597_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun35597_ip = 127;
                    continue _fun35597
                }
            case 26:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.getGuildIdForGenericRedirect;
                var6 = var2.bind(var6)(var0);
                var2 = 4;
                var2 = var5[var2];
                var3 = var4.bind(var3)(var2);
                var2 = var3.transitionTo;
                var5 = _closure1_slot4;
                var4 = var5.CHANNEL;
                var1 = var0.id;
                var0 = arg1;
                var1 = var4.bind(var5)(var6, var1, var0);
                var0 = {};
                var4 = true;
                var0.openChannel = var4;
                var8 = arg2;
                var9 = var0;
                var4 = copyDataProperties(var9, var8);
                var0 = var2.bind(var3)(var1, var0);
            case 127:
                var0 = undefined;
                return var0;
        }
    };
    var2.transitionToMessage = var3;
    var1 = function arg0, arg1, arg2() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.transitionTo;
        var6 = _closure1_slot4;
        var5 = var6.CHANNEL;
        var2 = arg0;
        var1 = arg1;
        var2 = var5.bind(var6)(var2, var1);
        var1 = {};
        var5 = true;
        var1.openChannel = var5;
        var7 = arg2;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.transitionToStaticChannelRoute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 3944, 3945, 1220, 7900, 44, 2]);