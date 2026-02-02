// modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingVertical = var9;
    var3.riveContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsGameServerCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102534: for (var _fun102534_ip = 0;;) switch (_fun102534_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot7;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = 7;
                var0 = var5[var8];
                var7 = var11.bind(var4)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var6.bind(var7)(var3, var0);
                var3 = _closure1_slot1;
                var6 = 8;
                var6 = var5[var6];
                var6 = var3.bind(var4)(var6);
                var6 = var6.bind(var4)(var2);
                var7 = 9;
                var7 = var5[var7];
                var7 = var3.bind(var4)(var7);
                var7 = var7.bind(var4)(var2);
                var8 = var5[var8];
                var12 = var11.bind(var4)(var8);
                var11 = var12.useStateFromStores;
                var13 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var13;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var12 = var11.bind(var12)(var8, var1);
                var1 = 10;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var5 = var1.bind(var4)(var2, var7);
                var2 = null;
                var1 = var2 == var0;
                var0 = null;
                if (var1) {
                    _fun102534_ip = 360;
                    continue _fun102534
                }
            case 186:
                var1 = var2 == var7;
                var0 = null;
                if (var1) {
                    _fun102534_ip = 360;
                    continue _fun102534
                }
            case 198:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 11;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var7.title;
                var1.title = var8;
                var8 = var7.description;
                var1.description = var8;
                var7 = var7.cost;
                var1.cost = var7;
                var7 = '+';
                var1.costDecorator = var7;
                var8 = _closure1_slot3;
                var7 = {};
                var10 = var10.riveContainer;
                var7.style = var10;
                var10 = _closure1_slot0;
                var9 = 12;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.GameServerHostingRive;
                var9 = {};
                var11 = 'SM_Auto';
                var9.stateMachine = var11;
                var11 = {};
                var11.reducedMotion = var12;
                var9.dataBinding = var11;
                var9 = var3.bind(var4)(var10, var9);
                var7.children = var9;
                var7 = var3.bind(var4)(var8, var7);
                var1.riveComponent = var7;
                var1.status = var6;
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 360:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 6678, 33, 1297, 671, 566, 13357, 9874, 13322, 13348, 3120, 2]);