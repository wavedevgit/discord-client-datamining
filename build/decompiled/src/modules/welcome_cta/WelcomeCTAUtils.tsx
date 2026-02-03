// modules/welcome_cta/WelcomeCTAUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WELCOME_STICKERS;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/welcome_cta/WelcomeCTAUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun55665: for (var _fun55665_ip = 0;;) switch (_fun55665_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var5 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun55665_ip = 34;
                    continue _fun55665
                }
            case 29:
                var4 = var2.id;
            case 34:
                var1 = var1 != var4;
                var2 = 0;
                if (!var1) {
                    _fun55665_ip = 74;
                    continue _fun55665
                }
            case 43:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.extractTimestamp;
                var2 = var1.bind(var3)(var4);
            case 74:
                var1 = _closure1_slot3;
                var0 = var1.length;
                var0 = var2 % var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.pickHelloSticker = var3;
    var3 = function(arg0) { // Environment: var1
        _fun55666: for (var _fun55666_ip = 0;;) switch (_fun55666_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var4 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun55666_ip = 34;
                    continue _fun55666
                }
            case 29:
                var5 = var2.id;
            case 34:
                var1 = var1 != var5;
                var2 = 0;
                if (!var1) {
                    _fun55666_ip = 74;
                    continue _fun55666
                }
            case 43:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.extractTimestamp;
                var2 = var1.bind(var3)(var5);
            case 74:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var4 = var3.bind(var4)(var1);
                var3 = var4.extractTimestamp;
                var1 = arg0;
                var1 = var3.bind(var4)(var1);
                var2 = var2 + var1;
                var1 = _closure1_slot3;
                var0 = var1.length;
                var0 = var2 % var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.pickWelcomeSticker = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun55667: for (var _fun55667_ip = 0;;) switch (_fun55667_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var7 = arg2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var4 = var3[var1];
                var0 = undefined;
                var10 = var2.bind(var0)(var4);
                var9 = var10.sendGreetMessage;
                var4 = var8.id;
                var1 = var3[var1];
                var12 = var2.bind(var0)(var1);
                var11 = var12.getSendMessageOptionsForReply;
                var1 = {};
                var1.channel = var8;
                var1.message = var6;
                var8 = true;
                var1.shouldMention = var8;
                var1.showMentionToggle = var8;
                var1 = var11.bind(var12)(var1);
                var1 = var9.bind(var10)(var4, var7, var1);
                var1 = 5;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.WELCOME_CTA_CLICKED;
                var1 = {};
                var1.is_reply = var8;
                var1.sticker_id = var7;
                var6 = var6.author;
                var6 = var6.id;
                var1.target_user = var6;
                var6 = _closure1_slot2;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun55667_ip = 180;
                    continue _fun55667
                }
            case 175:
                var5 = var6.id;
            case 180:
                var1.sender = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.handleWelcomeCtaClicked = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 6703, 660, 21, 6526, 795, 2]);