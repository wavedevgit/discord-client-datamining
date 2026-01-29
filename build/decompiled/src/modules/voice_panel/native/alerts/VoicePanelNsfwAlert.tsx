// modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildNSFW;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: VoicePanelNsfwAlert, environment: var1
        _fun111962: for (var _fun111962_ip = 0;;) switch (_fun111962_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guildId;
                var _closure2_slot0 = var8;
                var0 = var0.channelId;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 4;
                var2 = var0[var4];
                var3 = undefined;
                var5 = var1.bind(var3)(var2);
                var2 = var5.useDismissModalCallback;
                var2 = var2.bind(var5)();
                var _closure2_slot2 = var2;
                var5 = _closure1_slot3;
                var6 = _closure1_slot4;
                var2 = var6.getGuild;
                var2 = var2.bind(var6)(var8);
                var5 = var5.bind(var3)(var2);
                var2 = _closure1_slot5;
                var9 = 5;
                var0 = var0[var9];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AlertModal;
                var0 = {};
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var15 = 6;
                var10 = var6[var15];
                var10 = var8.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var6[var15];
                var6 = var8.bind(var3)(var6);
                var8 = var6.t;
                if (var5) {
                    _fun111962_ip = 169;
                    continue _fun111962
                }
            case 156:
                var6 = var8.ZmwvDc;
                var6 = var10.bind(var11)(var6);
                _fun111962_ip = 180;
                continue _fun111962;
            case 169:
                var8 = var8.xi46lg;
                var6 = var10.bind(var11)(var8);
            case 180:
                var0.title = var6;
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = var6[var15];
                var8 = var11.bind(var3)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var6 = var6[var15];
                var6 = var11.bind(var3)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun111962_ip = 241;
                    continue _fun111962
                }
            case 228:
                var5 = var6.E4Cd5I;
                var5 = var8.bind(var10)(var5);
                _fun111962_ip = 252;
                continue _fun111962;
            case 241:
                var6 = var6.ZtuRts;
                var5 = var8.bind(var10)(var6);
            case 252:
                var0.content = var5;
                var6 = _closure1_slot6;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = var8[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.AlertActions;
                var4 = {};
                var11 = _closure1_slot5;
                var7 = var8[var9];
                var7 = var14.bind(var3)(var7);
                var13 = var7.AlertActionButton;
                var10 = {};
                var7 = 'primary';
                var10.variant = var7;
                var7 = function() { // Original name: onPress, environment: var12
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.nsfwAgree;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.selectVoiceChannel;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var10.onPress = var7;
                var7 = var8[var15];
                var7 = var14.bind(var3)(var7);
                var17 = var7.intl;
                var16 = var17.string;
                var7 = var8[var15];
                var7 = var14.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.wVq7uo;
                var7 = var16.bind(var17)(var7);
                var10.text = var7;
                var7 = 'confirm';
                var10 = var11.bind(var3)(var13, var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var9 = var8[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.AlertActionButton;
                var9 = {};
                var13 = 'secondary';
                var9.variant = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.nsfwReturnToSafety;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9.onPress = var12;
                var12 = var8[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var8[var15];
                var8 = var14.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["/g10LC"];
                var8 = var12.bind(var13)(var8);
                var9.text = var8;
                var8 = 'add-profile-picture';
                var8 = var11.bind(var3)(var10, var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.actions = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 'voice-panel-nsfw';
    var2.VOICE_PANEL_NSFW_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1416, 1410, 33, 3980, 3980, 1234, 4635, 4189, 2]);