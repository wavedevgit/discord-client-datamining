// modules/messages/native/renderer/row_data/EphemeralIndication.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot4 = var6;
    var3 = var3.MessageFlags;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/EphemeralIndication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56369: for (var _fun56369_ip = 0;;) switch (_fun56369_ip) {
            case 0:
                var12 = arg0;
                var1 = var12.hasFlag;
                var0 = _closure1_slot5;
                var0 = var0.EPHEMERAL;
                var0 = var1.bind(var12)(var0);
                var5 = undefined;
                if (var0) {
                    _fun56369_ip = 34;
                    continue _fun56369
                }
            case 32:
                return var5;
            case 34:
                var3 = var12.interactionMetadata;
                var0 = null;
                var4 = var0 == var3;
                var1 = undefined;
                if (var4) {
                    _fun56369_ip = 57;
                    continue _fun56369
                }
            case 51:
                var1 = var3.ephemerality_reason;
            case 57:
                if (!(var0 == var1)) {
                    _fun56369_ip = 381;
                    continue _fun56369
                }
            case 64:
                var1 = {};
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 3;
                var4 = var3[var8];
                var4 = var9.bind(var5)(var4);
                var10 = var4.intl;
                var7 = var10.formatToParts;
                var4 = var3[var8];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var6 = var4.uX3ecL;
                var4 = {
                    'count': 1,
                    'countMessages': 1
                };
                var11 = {};
                var13 = 'bindDismissMessage';
                var11.action = var13;
                var11.message = var12;
                var4.handleDelete = var11;
                var4 = var7.bind(var10)(var6, var4);
                var1.content = var4;
                var7 = _closure1_slot1;
                var4 = 4;
                var6 = var3[var4];
                var10 = var7.bind(var5)(var6);
                var7 = var10.getAppsSupportURL;
                var6 = _closure1_slot4;
                var6 = var6.EPHEMERAL_MESSAGES;
                var6 = var7.bind(var10)(var6);
                var1.helpArticleLink = var6;
                var6 = var3[var8];
                var6 = var9.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var3[var8];
                var3 = var9.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.htHOrp;
                var3 = var6.bind(var7)(var3);
                var1.helpButtonAccessibilityLabel = var3;
                var7 = _closure1_slot3;
                var6 = var7.getMessage;
                var3 = var12.id;
                var3 = var6.bind(var7)(var3);
                if (!(var0 != var3)) {
                    _fun56369_ip = 379;
                    continue _fun56369
                }
            case 279:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var4 = var3[var4];
                var7 = var6.bind(var5)(var4);
                var6 = var7.getArticleURL;
                var4 = _closure1_slot4;
                var4 = var4.GUILD_AUTOMOD_BLOCKED_MESSAGE;
                var4 = var6.bind(var7)(var4);
                var1.helpArticleLink = var4;
                var7 = _closure1_slot0;
                var4 = var3[var8];
                var4 = var7.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var3 = var3[var8];
                var3 = var7.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.OiCBhP;
                var3 = var4.bind(var6)(var3);
                var1.helpButtonAccessibilityLabel = var3;
            case 379:
                return var1;
            case 381:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getEphemeralReasonMessage;
                var4 = var12.interactionMetadata;
                var6 = var0 == var4;
                var0 = undefined;
                if (var6) {
                    _fun56369_ip = 428;
                    continue _fun56369
                }
            case 422:
                var0 = var4.ephemerality_reason;
            case 428:
                var10 = var1.bind(var3)(var0);
                var0 = {};
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var3 = var6[var1];
                var3 = var4.bind(var5)(var3);
                var9 = var3.intl;
                var8 = var9.formatToParts;
                var3 = var6[var1];
                var3 = var4.bind(var5)(var3);
                var3 = var3.t;
                var7 = var3.xgCMRQ;
                var3 = {};
                var11 = {};
                var13 = 'bindDismissMessage';
                var11.action = var13;
                var11.message = var12;
                var3.handleDelete = var11;
                var3.reason = var10;
                var3 = var8.bind(var9)(var7, var3);
                var0.content = var3;
                var7 = _closure1_slot1;
                var3 = 4;
                var3 = var6[var3];
                var7 = var7.bind(var5)(var3);
                var3 = var7.getArticleURL;
                var2 = _closure1_slot4;
                var2 = var2.USING_APPS_FAQ;
                var2 = var3.bind(var7)(var2);
                var0.helpArticleLink = var2;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.OIWSJe;
                var1 = var2.bind(var3)(var1);
                var0.helpButtonAccessibilityLabel = var1;
                return var0;
        }
    };
    var2.createEphemeralIndication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6542, 660, 6840, 1234, 1684, 2]);