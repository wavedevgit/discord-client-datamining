// modules/premium/premium_group/PremiumGroupUtils.native.tsx
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
    var6 = var3.getPremiumGroupProductName;
    var _closure1_slot4 = var6;
    var3 = var3.HELP_CENTER_LINK;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/premium_group/PremiumGroupUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun55986: for (var _fun55986_ip = 0;;) switch (_fun55986_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.sender;
                var1 = var0.channel;
                var0 = var0.isSender;
                var4 = _closure1_slot4;
                var7 = undefined;
                var13 = var4.bind(var7)();
                if (var0) {
                    _fun55986_ip = 254;
                    continue _fun55986
                }
            case 39:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 2;
                var0 = var10[var0];
                var4 = var8.bind(var7)(var0);
                var0 = var4.nameFromUser;
                var9 = var0.bind(var4)(var3);
                var0 = {};
                var6 = 3;
                var4 = var10[var6];
                var4 = var8.bind(var7)(var4);
                var15 = var4.intl;
                var14 = var15.format;
                var5 = _closure1_slot1;
                var4 = 4;
                var11 = var10[var4];
                var11 = var5.bind(var7)(var11);
                var12 = var11["51Kv/4"];
                var11 = {};
                var11.senderName = var9;
                var11.premiumGroupProductName = var13;
                var16 = _closure1_slot5;
                var11.helpCenterLink = var16;
                var11 = var14.bind(var15)(var12, var11);
                var0.message = var11;
                var11 = var10[var6];
                var11 = var8.bind(var7)(var11);
                var14 = var11.intl;
                var12 = var14.string;
                var11 = var10[var4];
                var11 = var5.bind(var7)(var11);
                var11 = var11.ssge1y;
                var11 = var12.bind(var14)(var11);
                var0.header = var11;
                var6 = var10[var6];
                var6 = var8.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.formatToPlainString;
                var4 = var10[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.tej76V;
                var4 = {};
                var4.senderName = var9;
                var4.premiumGroupProductName = var13;
                var4 = var6.bind(var8)(var5, var4);
                var0.body = var4;
                return var0;
            case 254:
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun55987: for (var _fun55987_ip = 0;;) switch (_fun55987_ip) {
                        case 0:
                            var2 = arg1;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun55987_ip = 110;
                                continue _fun55987
                            }
                        case 18:
                            var3 = var2.recipients;
                            var2 = var0 == var3;
                            var5 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun55987_ip = 50;
                                continue _fun55987
                            }
                        case 35:
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var1 = var0.id;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var4 = var2.bind(var3)(var1);
                        case 50:
                            var3 = _closure1_slot3;
                            var1 = var3.getUser;
                            var4 = var1.bind(var3)(var4);
                            var3 = var0 == var4;
                            var1 = null;
                            if (var3) {
                                _fun55987_ip = 108;
                                continue _fun55987
                            }
                        case 77:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 2;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.nameFromUser;
                            var1 = var2.bind(var3)(var4);
                        case 108:
                            return var1;
                        case 110:
                            return var0;
                    }
                };
                var6 = var0.bind(var7)(var3, var1);
                var0 = null;
                var1 = var0 == var6;
                if (var1) {
                    _fun55986_ip = 466;
                    continue _fun55986
                }
            case 279:
                var1 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var3 = var8[var4];
                var3 = var5.bind(var7)(var3);
                var12 = var3.intl;
                var11 = var12.format;
                var3 = _closure1_slot1;
                var2 = 4;
                var9 = var8[var2];
                var9 = var3.bind(var7)(var9);
                var10 = var9.MkcFjx;
                var9 = {};
                var9.receiverName = var6;
                var9.premiumGroupProductName = var13;
                var9 = var11.bind(var12)(var10, var9);
                var1.message = var9;
                var9 = var8[var4];
                var9 = var5.bind(var7)(var9);
                var12 = var9.intl;
                var11 = var12.formatToPlainString;
                var9 = var8[var2];
                var9 = var3.bind(var7)(var9);
                var10 = var9["5uwv8J"];
                var9 = {};
                var9.premiumGroupProductName = var13;
                var9 = var11.bind(var12)(var10, var9);
                var1.header = var9;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var7)(var2);
                var3 = var2["AmE0B/"];
                var2 = {};
                var2.receiverName = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1.body = var2;
                var0 = var1;
            case 466:
                return var0;
        }
    };
    var2.getPremiumGroupInviteEmbedText = var3;
    var3 = function() { // Environment: var1
        var0 = false;
        return var0;
    };
    var2.useIsEligibleForPremiumGroupPurchase = var3;
    var3 = function() { // Environment: var1
        var0 = false;
        return var0;
    };
    var2.useIsEligibleForPremiumGroupMarketingMaterials = var3;
    var1 = function() { // Environment: var1
        var0 = false;
        return var0;
    };
    var2.useIsEligibleForPremiumGroupNitroTabMarketingMaterials = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 3124, 3236, 1234, 2436, 2]);