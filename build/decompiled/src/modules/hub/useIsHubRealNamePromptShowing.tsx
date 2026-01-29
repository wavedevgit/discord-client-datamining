// modules/hub/useIsHubRealNamePromptShowing.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var3 = var3.GuildFeatures;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildPrompts;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/useIsHubRealNamePromptShowing.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useIsHubRealNamePromptShowing, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 7;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot6;
        var3 = new Array(4);
        var3[0] = var1;
        var1 = _closure1_slot4;
        var3[1] = var1;
        var1 = _closure1_slot7;
        var3[2] = var1;
        var1 = _closure1_slot5;
        var3[3] = var1;
        var1 = function() { // Environment: var0
            _fun91489: for (var _fun91489_ip = 0;;) switch (_fun91489_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var5 = var0 == var2;
                    var4 = undefined;
                    if (var5) {
                        _fun91489_ip = 61;
                        continue _fun91489
                    }
                case 35:
                    var7 = var2.features;
                    var6 = var7.has;
                    var5 = _closure1_slot8;
                    var5 = var5.HUB;
                    var4 = var6.bind(var7)(var5);
                case 61:
                    var5 = true;
                    if (!(var5 === var4)) {
                        _fun91489_ip = 181;
                        continue _fun91489
                    }
                case 67:
                    var8 = _closure1_slot4;
                    var7 = var8.hasViewedPrompt;
                    var4 = _closure1_slot9;
                    var6 = var4.REAL_NAME_PROMPT;
                    var4 = var2.id;
                    var4 = var7.bind(var8)(var6, var4);
                    if (!(var5 !== var4)) {
                        _fun91489_ip = 179;
                        continue _fun91489
                    }
                case 104:
                    var5 = _closure1_slot7;
                    var4 = var5.getCurrentUser;
                    var6 = var4.bind(var5)();
                    if (!(var0 != var6)) {
                        _fun91489_ip = 177;
                        continue _fun91489
                    }
                case 121:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = var2.id;
                    var7 = var0 == var6;
                    var2 = undefined;
                    if (var7) {
                        _fun91489_ip = 150;
                        continue _fun91489
                    }
                case 145:
                    var2 = var6.id;
                case 150:
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun91489_ip = 171;
                        continue _fun91489
                    }
                case 165:
                    var1 = var2.nick;
                case 171:
                    var1 = var0 == var1;
                    return var1;
                case 177:
                    return var0;
                case 179:
                    return var0;
                case 181:
                    return var0;
            }
        };
        var1 = var4.bind(var6)(var3, var1);
        var _closure2_slot1 = var1;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var5;
        var0 = function() { // Environment: var0
            _fun91490: for (var _fun91490_ip = 0;;) switch (_fun91490_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun91490_ip = 24;
                        continue _fun91490
                    }
                case 16:
                    var2 = _closure2_slot1;
                    var1 = var3 != var2;
                case 24:
                    if (!var1) {
                        _fun91490_ip = 85;
                        continue _fun91490
                    }
                case 27:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun91490_ip = 85;
                        continue _fun91490
                    }
                case 34:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.viewPrompt;
                    var1 = _closure1_slot9;
                    var1 = var1.REAL_NAME_PROMPT;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0, var2);
        var0 = true;
        var0 = var0 === var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11836, 1672, 1410, 1613, 660, 11837, 566, 11838, 2]);