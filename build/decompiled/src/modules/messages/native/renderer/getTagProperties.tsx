// modules/messages/native/renderer/getTagProperties.tsx
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
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTagTypes;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/getTagProperties.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55939: for (var _fun55939_ip = 0;;) switch (_fun55939_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.message;
                var3 = var0.isSystemDM;
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun55939_ip = 22;
                    continue _fun55939
                }
            case 20:
                var3 = false;
            case 22:
                var10 = var0.channel;
                var1 = var0.colors;
                var2 = var8.author;
                var0 = var2.isVerifiedBot;
                var2 = var0.bind(var2)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 2;
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var4 = var6.isPublicSystemMessage;
                var4 = var4.bind(var6)(var8);
                if (var4) {
                    _fun55939_ip = 340;
                    continue _fun55939
                }
            case 88:
                if (var3) {
                    _fun55939_ip = 340;
                    continue _fun55939
                }
            case 94:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.bind(var5)(var8);
                if (var3) {
                    _fun55939_ip = 268;
                    continue _fun55939
                }
            case 125:
                var3 = var8.author;
                var9 = var3.bot;
                var7 = null;
                var4 = undefined;
                var3 = undefined;
                var6 = var2;
                if (!var9) {
                    _fun55939_ip = 409;
                    continue _fun55939
                }
            case 152:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 3;
                var11 = var14[var9];
                var11 = var13.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9["9RNkeF"];
                var11 = var11.bind(var12)(var9);
                var9 = undefined;
                if (!var2) {
                    _fun55939_ip = 252;
                    continue _fun55939
                }
            case 212:
                var14 = _closure1_slot3;
                var13 = var14.resolveAssetSource;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 5;
                var12 = var16[var12];
                var12 = var15.bind(var5)(var12);
                var12 = var13.bind(var14)(var12);
                var9 = var12.uri;
            case 252:
                var3 = var9;
                var7 = var11;
                var4 = undefined;
                var6 = var2;
                _fun55939_ip = 409;
                continue _fun55939;
            case 268:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 3;
                var11 = var14[var9];
                var11 = var13.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.PuJGuM;
                var7 = var11.bind(var12)(var9);
                var9 = _closure1_slot4;
                var4 = var9.BOT_TAG_SERVER_TYPE;
                var3 = undefined;
                var6 = var2;
                _fun55939_ip = 409;
                continue _fun55939;
            case 340:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 3;
                var9 = var13[var2];
                var9 = var12.bind(var5)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var2 = var13[var2];
                var2 = var12.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.lKQ7Wt;
                var7 = var9.bind(var11)(var2);
                var2 = _closure1_slot4;
                var4 = var2.SYSTEM_DM_TAG_SYSTEM_TYPE;
                var6 = true;
                var3 = undefined;
            case 409:
                var2 = null;
                var11 = var2 == var10;
                var9 = undefined;
                if (var11) {
                    _fun55939_ip = 426;
                    continue _fun55939
                }
            case 420:
                var9 = var10.ownerId;
            case 426:
                var8 = var8.author;
                var8 = var8.id;
                var8 = var9 === var8;
                if (!var8) {
                    _fun55939_ip = 448;
                    continue _fun55939
                }
            case 444:
                var8 = var2 != var10;
            case 448:
                if (!var8) {
                    _fun55939_ip = 461;
                    continue _fun55939
                }
            case 451:
                var9 = var10.isForumPost;
                var8 = var9.bind(var10)();
            case 461:
                var2 = null;
                if (!var8) {
                    _fun55939_ip = 521;
                    continue _fun55939
                }
            case 466:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 3;
                var8 = var11[var0];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var0 = var11[var0];
                var0 = var10.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.fyE8sH;
                var2 = var8.bind(var9)(var0);
            case 521:
                var0 = {};
                var0.tagText = var7;
                var0.tagVerified = var6;
                var0.tagTextColor = var5;
                var0.tagBackgroundColor = var5;
                var0.tagType = var4;
                var0.tagIconUrl = var3;
                var0.opTagText = var2;
                var2 = var1.opTagTextColor;
                var0.opTagTextColor = var2;
                var1 = var1.opTagBackgroundColor;
                var0.opTagBackgroundColor = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1346, 6751, 1234, 6753, 6755, 2]);