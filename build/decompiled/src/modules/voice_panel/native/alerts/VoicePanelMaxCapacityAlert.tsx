// modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var7 = var1.channelId;
        var _closure2_slot0 = var7;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 3;
        var1 = var11[var1];
        var3 = undefined;
        var6 = var10.bind(var3)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            _fun111574: for (var _fun111574_ip = 0;;) switch (_fun111574_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun111574_ip = 41;
                        continue _fun111574
                    }
                case 35:
                    var1 = var2.userLimit;
                case 41:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun111574_ip = 53;
                        continue _fun111574
                    }
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var13 = var4.bind(var6)(var2, var0, var1);
        var4 = 4;
        var0 = var11[var4];
        var1 = var10.bind(var3)(var0);
        var0 = var1.useDismissModalCallback;
        var6 = var0.bind(var1)();
        var2 = _closure1_slot4;
        var0 = 5;
        var0 = var11[var0];
        var0 = var10.bind(var3)(var0);
        var1 = var0.AlertModal;
        var0 = {};
        var7 = _closure1_slot1;
        var5 = 6;
        var5 = var11[var5];
        var7 = var7.bind(var3)(var5);
        var5 = {};
        var5 = var2.bind(var3)(var7, var5);
        var0.header = var5;
        var7 = 7;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var9 = var5.intl;
        var8 = var9.string;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.hHbsQj;
        var5 = var8.bind(var9)(var5);
        var0.title = var5;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var12 = var5.intl;
        var9 = var12.formatToPlainString;
        var5 = var11[var7];
        var5 = var10.bind(var3)(var5);
        var5 = var5.t;
        var8 = var5["387SQH"];
        var5 = {};
        var5.count = var13;
        var5 = var9.bind(var12)(var8, var5);
        var0.content = var5;
        var4 = var11[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.AlertActionButton;
        var4 = {};
        var8 = 'secondary';
        var4.variant = var8;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["NX+WJN"];
        var7 = var8.bind(var9)(var7);
        var4.text = var7;
        var4.onPress = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.actions = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    var1 = 'voice-panel-max-capacity';
    var2.VOICE_PANEL_MAX_CAPACITY_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 33, 632, 3988, 3988, 14307, 1234, 2]);