// modules/checkpoint/useCheckpointStepsToRender.tsx
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
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportDefault;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchStates;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CheckpointSteps;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/useCheckpointStepsToRender.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useCheckpointStepsToRender, environment: var1
        _fun87026: for (var _fun87026_ip = 0;;) switch (_fun87026_ip) {
            case 0:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var5 = var6[var2];
                var4 = undefined;
                var10 = var3.bind(var4)(var5);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot2;
                var8 = new Array(1);
                var8[0] = var7;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var9.bind(var10)(var8, var5);
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getFetchState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var3.bind(var6)(var2, var0);
                var0 = _closure1_slot4;
                var2 = var0.WELCOME;
                var0 = new Array(1);
                var0[0] = var2;
                var2 = _closure1_slot3;
                var2 = var2.SUCCESS;
                var2 = var3 !== var2;
                if (var2) {
                    _fun87026_ip = 139;
                    continue _fun87026
                }
            case 127:
                var6 = var5.messages;
                var3 = null;
                var2 = var3 == var6;
            case 139:
                if (var2) {
                    _fun87026_ip = 613;
                    continue _fun87026
                }
            case 145:
                var6 = var0.push;
                var2 = _closure1_slot4;
                var3 = var2.MESSAGES;
                var3 = var6.bind(var0)(var3);
                var6 = var0.push;
                var3 = var2.EMOJIS;
                var3 = var6.bind(var0)(var3);
                var3 = var0.push;
                var2 = var2.VOICE;
                var2 = var3.bind(var0)(var2);
                var3 = var5.guilds;
                var2 = null;
                var6 = var2 == var3;
                var7 = undefined;
                if (var6) {
                    _fun87026_ip = 225;
                    continue _fun87026
                }
            case 214:
                var3 = var3.guilds;
                var7 = var3.length;
            case 225:
                var8 = var2 != var7;
                var3 = 0;
                var6 = 0;
                if (!var8) {
                    _fun87026_ip = 239;
                    continue _fun87026
                }
            case 236:
                var6 = var7;
            case 239:
                if (!(var6 > var3)) {
                    _fun87026_ip = 263;
                    continue _fun87026
                }
            case 243:
                var7 = var0.push;
                var6 = _closure1_slot4;
                var6 = var6.GUILDS;
                var6 = var7.bind(var0)(var6);
            case 263:
                var6 = var5.users;
                var8 = var2 == var6;
                var7 = undefined;
                if (var8) {
                    _fun87026_ip = 283;
                    continue _fun87026
                }
            case 278:
                var7 = var6.length;
            case 283:
                var8 = var2 != var7;
                var6 = 0;
                if (!var8) {
                    _fun87026_ip = 295;
                    continue _fun87026
                }
            case 292:
                var6 = var7;
            case 295:
                var6 = var6 > var3;
                if (!var6) {
                    _fun87026_ip = 312;
                    continue _fun87026
                }
            case 302:
                var7 = var5.sidekick;
                var6 = var2 != var7;
            case 312:
                if (!var6) {
                    _fun87026_ip = 330;
                    continue _fun87026
                }
            case 315:
                var7 = var5.sidekick;
                var7 = var7.user;
                var6 = var2 != var7;
            case 330:
                if (!var6) {
                    _fun87026_ip = 377;
                    continue _fun87026
                }
            case 333:
                var7 = var5.users;
                var9 = var2 == var7;
                var8 = undefined;
                if (var9) {
                    _fun87026_ip = 357;
                    continue _fun87026
                }
            case 348:
                var7 = var7[var3];
                var8 = var7.id;
            case 357:
                var7 = var5.sidekick;
                var7 = var7.user;
                var7 = var7.id;
                var6 = var8 !== var7;
            case 377:
                if (!var6) {
                    _fun87026_ip = 416;
                    continue _fun87026
                }
            case 380:
                var8 = var0.push;
                var6 = _closure1_slot4;
                var7 = var6.FRIENDS_INTRO;
                var7 = var8.bind(var0)(var7);
                var7 = var0.push;
                var6 = var6.FRIENDS_TRANSITION;
                var6 = var7.bind(var0)(var6);
            case 416:
                var6 = var5.sidekick;
                var6 = var2 != var6;
                if (!var6) {
                    _fun87026_ip = 444;
                    continue _fun87026
                }
            case 429:
                var7 = var5.sidekick;
                var7 = var7.user;
                var6 = var2 != var7;
            case 444:
                if (!var6) {
                    _fun87026_ip = 483;
                    continue _fun87026
                }
            case 447:
                var8 = var0.push;
                var6 = _closure1_slot4;
                var7 = var6.FRIENDS_BEST;
                var7 = var8.bind(var0)(var7);
                var7 = var0.push;
                var6 = var6.FRIENDS_LEAVE;
                var6 = var7.bind(var0)(var6);
            case 483:
                var5 = var5.applications;
                var6 = var2 == var5;
                var4 = undefined;
                if (var6) {
                    _fun87026_ip = 509;
                    continue _fun87026
                }
            case 498:
                var5 = var5.applications;
                var4 = var5.length;
            case 509:
                var5 = var2 != var4;
                var2 = 0;
                if (!var5) {
                    _fun87026_ip = 521;
                    continue _fun87026
                }
            case 518:
                var2 = var4;
            case 521:
                if (!(var2 > var3)) {
                    _fun87026_ip = 545;
                    continue _fun87026
                }
            case 525:
                var3 = var0.push;
                var2 = _closure1_slot4;
                var2 = var2.GAMING;
                var2 = var3.bind(var0)(var2);
            case 545:
                var3 = var0.push;
                var1 = _closure1_slot4;
                var2 = var1.QUESTS;
                var2 = var3.bind(var0)(var2);
                var3 = var0.push;
                var2 = var1.END_REWARD;
                var2 = var3.bind(var0)(var2);
                var3 = var0.push;
                var2 = var1.END_CLAIM;
                var2 = var3.bind(var0)(var2);
                var2 = var0.push;
                var1 = var1.END_SUMMARY;
                var1 = var2.bind(var0)(var1);
            case 613:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11134, 9123, 566, 2]);