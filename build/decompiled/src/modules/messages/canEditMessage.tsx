// modules/messages/canEditMessage.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.MessageFlags;
    var _closure1_slot3 = var6;
    var3 = var3.MessageStates;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/canEditMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun77805: for (var _fun77805_ip = 0;;) switch (_fun77805_ip) {
            case 0:
                var10 = arg0;
                var2 = arg1;
                var7 = null;
                var0 = var7 != var2;
                if (!var0) {
                    _fun77805_ip = 248;
                    continue _fun77805
                }
            case 18:
                var1 = var10.author;
                var1 = var1.id;
                var1 = var1 === var2;
                if (!var1) {
                    _fun77805_ip = 245;
                    continue _fun77805
                }
            case 39:
                var3 = var10.state;
                var2 = _closure1_slot4;
                var2 = var2.SENT;
                var2 = var3 === var2;
                if (!var2) {
                    _fun77805_ip = 242;
                    continue _fun77805
                }
            case 67:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 1;
                var3 = var5[var3];
                var9 = undefined;
                var3 = var4.bind(var9)(var3);
                var3 = var3.bind(var9)(var10);
                var3 = !var3;
                if (!var3) {
                    _fun77805_ip = 239;
                    continue _fun77805
                }
            case 103:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 2;
                var4 = var6[var4];
                var5 = var5.bind(var9)(var4);
                var4 = var5.canEditMessageWithStickers;
                var4 = var4.bind(var5)(var10);
                var5 = !var4;
                var4 = !var5;
                if (var5) {
                    _fun77805_ip = 236;
                    continue _fun77805
                }
            case 143:
                var6 = var10.hasFlag;
                var5 = _closure1_slot3;
                var5 = var5.IS_VOICE_MESSAGE;
                var5 = var6.bind(var10)(var5);
                var5 = !var5;
                if (!var5) {
                    _fun77805_ip = 233;
                    continue _fun77805
                }
            case 170:
                var6 = var10.referralTrialOfferId;
                var6 = var7 == var6;
                if (!var6) {
                    _fun77805_ip = 230;
                    continue _fun77805
                }
            case 183:
                var7 = var10.isPoll;
                var7 = var7.bind(var10)();
                var7 = !var7;
                if (!var7) {
                    _fun77805_ip = 227;
                    continue _fun77805
                }
            case 199:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 3;
                var8 = var12[var8];
                var8 = var11.bind(var9)(var8);
                var8 = var8.bind(var9)(var10);
                var7 = !var8;
            case 227:
                var6 = var7;
            case 230:
                var5 = var6;
            case 233:
                var4 = var5;
            case 236:
                var3 = var4;
            case 239:
                var2 = var3;
            case 242:
                var1 = var2;
            case 245:
                var0 = var1;
            case 248:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 6693, 3971, 4282, 2]);