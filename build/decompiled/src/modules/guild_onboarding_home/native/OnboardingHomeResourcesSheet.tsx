// modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_ICON_SIZE;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 4;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var8 = var1.bind(var3)(var2);
        var2 = _closure1_slot5;
        var5 = _closure1_slot0;
        var0 = 7;
        var0 = var7[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var4 = 8;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.ActionSheetRow;
        var5 = var4.Group;
        var4 = {};
        var7 = var8.map;
        var6 = function(arg0) { // Environment: var6
            _fun104805: for (var _fun104805_ip = 0;;) switch (_fun104805_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getResourceChannelIconURL;
                    var1 = var1.bind(var2)(var0);
                    var6 = null;
                    var2 = var6 != var1;
                    var11 = undefined;
                    if (!var2) {
                        _fun104805_ip = 59;
                        continue _fun104805
                    }
                case 56:
                    var11 = var1;
                case 59:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 8;
                    var1 = var7[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.ActionSheetRow;
                    var1 = {};
                    var7 = var0.title;
                    var1.label = var7;
                    var7 = var6 != var11;
                    var6 = undefined;
                    if (!var7) {
                        _fun104805_ip = 169;
                        continue _fun104805
                    }
                case 109:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 10;
                    var7 = var10[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var10 = {};
                    var12 = _closure1_slot4;
                    var10.width = var12;
                    var10.height = var12;
                    var7.style = var10;
                    var10 = {};
                    var10.uri = var11;
                    var7.source = var10;
                    var6 = var9.bind(var4)(var8, var7);
                case 169:
                    var1.icon = var6;
                    var5 = function() {
                        var0 = _closure3_slot0;
                        var6 = var0.channelId;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var3 = undefined;
                        var5 = var2.bind(var3)(var1);
                        var2 = var5.selectHomeResourceChannel;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var5)(var1, var6);
                        var2 = _closure1_slot1;
                        var1 = 6;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.hideActionSheet;
                        var0 = _closure1_slot3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onPress = var5;
                    var5 = true;
                    var1.arrow = var5;
                    var0 = var0.channelId;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var6 = var7.bind(var8)(var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13630, 4833, 33, 13631, 11611, 3237, 5171, 7694, 1417, 4667, 2]);