// modules/activities/utils/transitionToActivity.native.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.setVoiceChatDrawerState;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoiceChatDrawerState;
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/transitionToActivity.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun64154: for (var _fun64154_ip = 0;;) switch (_fun64154_ip) {
            case 0:
                var6 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getEmbeddedActivityLocationChannelId;
                var3 = var2.bind(var3)(var6);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun64154_ip = 373;
                    continue _fun64154
                }
            case 48:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 5;
                var4 = var9[var4];
                var7 = var5.bind(var0)(var4);
                var5 = var7.isModalOpen;
                var8 = _closure1_slot1;
                var4 = 6;
                var4 = var9[var4];
                var4 = var8.bind(var0)(var4);
                var4 = var5.bind(var7)(var4);
                var4 = !var4;
                if (!var4) {
                    _fun64154_ip = 126;
                    continue _fun64154
                }
            case 101:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var5 = var7.bind(var0)(var5);
                var4 = var5.bind(var0)(var3);
            case 126:
                if (!var4) {
                    _fun64154_ip = 154;
                    continue _fun64154
                }
            case 129:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 8;
                var4 = var7[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.bind(var0)(var3);
            case 154:
                var5 = _closure1_slot4;
                var4 = var5.getSelfEmbeddedActivityForLocation;
                var10 = var4.bind(var5)(var6);
                if (!(var2 != var10)) {
                    _fun64154_ip = 373;
                    continue _fun64154
                }
            case 176:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var4.bind(var0)(var2);
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun64154_ip = 250;
                    continue _fun64154
                }
            case 204:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.updateActivityPanelMode;
                var2 = _closure1_slot5;
                var2 = var2.PANEL;
                var2 = var4.bind(var5)(var2);
                _fun64154_ip = 373;
                continue _fun64154;
            case 250:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var7 = var4.bind(var0)(var2);
                var6 = var7.selectParticipant;
                var8 = _closure1_slot0;
                var2 = 10;
                var2 = var5[var2];
                var9 = var8.bind(var0)(var2);
                var8 = var9.getEmbeddedActivityParticipantId;
                var2 = {};
                var11 = var10.applicationId;
                var2.applicationId = var11;
                var10 = var10.compositeInstanceId;
                var2.instanceId = var10;
                var2 = var8.bind(var9)(var2);
                var2 = var6.bind(var7)(var3, var2);
                var2 = 11;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.hideActionSheet;
                var2 = var2.bind(var4)();
                var2 = _closure1_slot3;
                var1 = _closure1_slot6;
                var1 = var1.CLOSED;
                var1 = var2.bind(var0)(var3, var1);
            case 373:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7885, 1371, 7917, 7886, 3081, 3919, 7884, 7959, 7969, 7881, 3953, 3278, 7915, 2]);