// modules/user_settings/ParentalControlledUserSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var13;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var13[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var3 = var3.ExplicitContentFilterTypes;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var3 = var3.AllFriendSourceFlags;
    var _closure1_slot3 = var3;
    var11 = 2;
    var3 = var13[var11];
    var10 = var12.bind(var0)(var3);
    var9 = var10.defineParentalControlledSetting;
    var4 = 3;
    var3 = var13[var4];
    var3 = var12.bind(var0)(var3);
    var21 = var3.explicitContentFromProto;
    var3 = var13[var4];
    var3 = var12.bind(var0)(var3);
    var20 = var3.explicitContentToProto;
    var6 = {};
    var3 = 4;
    var5 = var13[var3];
    var5 = var15.bind(var0)(var5);
    var6.comparator = var5;
    var14 = 'textAndImages';
    var22 = 'explicitContentSettings';
    var24 = var10;
    var23 = var14;
    var19 = var6;
    var10 = var24[var9](var23, var22, var21, var20, var19, var18);
    var5 = var13[var11];
    var9 = var12.bind(var0)(var5);
    var8 = var9.defineParentalControlledSetting;
    var22 = 'explicitContentFilter';
    var21 = function(arg0) { // Environment: var1
        _fun82264: for (var _fun82264_ip = 0;;) switch (_fun82264_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun82264_ip = 19;
                    continue _fun82264
                }
            case 14:
                var0 = var2.value;
            case 19:
                if (!(var1 == var0)) {
                    _fun82264_ip = 36;
                    continue _fun82264
                }
            case 23:
                var1 = _closure1_slot2;
                var0 = var1.NON_FRIENDS;
            case 36:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.UInt32Value;
        var1 = var2.create;
        var0 = {};
        var3 = arg0;
        var0.value = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var24 = var9;
    var23 = var14;
    var9 = var24[var8](var23, var22, var21, var20, var19);
    var5 = var13[var11];
    var8 = var12.bind(var0)(var5);
    var7 = var8.defineParentalControlledSetting;
    var5 = var13[var4];
    var5 = var12.bind(var0)(var5);
    var21 = var5.goreContentFromProto;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var20 = var4.goreContentToProto;
    var4 = {};
    var3 = var13[var3];
    var3 = var15.bind(var0)(var3);
    var4.comparator = var3;
    var22 = 'goreContentSettings';
    var24 = var8;
    var23 = var14;
    var19 = var4;
    var8 = var24[var7](var23, var22, var21, var20, var19, var18);
    var3 = var13[var11];
    var7 = var12.bind(var0)(var3);
    var6 = var7.defineParentalControlledSetting;
    var17 = 'privacy';
    var22 = 'defaultMessageRequestRestricted';
    var21 = function(arg0) { // Environment: var1
        _fun82266: for (var _fun82266_ip = 0;;) switch (_fun82266_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun82266_ip = 19;
                    continue _fun82266
                }
            case 14:
                var0 = var1.value;
            case 19:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.BoolValue;
        var1 = var2.create;
        var0 = {};
        var3 = arg0;
        var0.value = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var24 = var7;
    var23 = var17;
    var7 = var24[var6](var23, var22, var21, var20, var19);
    var3 = var13[var11];
    var14 = var12.bind(var0)(var3);
    var6 = var14.defineParentalControlledSetting;
    var22 = 'defaultGuildsRestricted';
    var21 = function(arg0) { // Environment: var1
        _fun82268: for (var _fun82268_ip = 0;;) switch (_fun82268_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun82268_ip = 15;
                    continue _fun82268
                }
            case 12:
                var0 = var1;
            case 15:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var0 = arg0;
        return var0;
    };
    var24 = var14;
    var23 = var17;
    var6 = var24[var6](var23, var22, var21, var20, var19);
    var3 = var13[var11];
    var15 = var12.bind(var0)(var3);
    var14 = var15.defineParentalControlledSetting;
    var22 = 'defaultGuildsRestrictedV2';
    var21 = function(arg0) { // Environment: var1
        _fun82270: for (var _fun82270_ip = 0;;) switch (_fun82270_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun82270_ip = 19;
                    continue _fun82270
                }
            case 14:
                var0 = var1.value;
            case 19:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.BoolValue;
        var1 = var2.create;
        var0 = {};
        var3 = arg0;
        var0.value = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var24 = var15;
    var23 = var17;
    var5 = var24[var14](var23, var22, var21, var20, var19);
    var3 = var13[var11];
    var16 = var12.bind(var0)(var3);
    var15 = var16.defineParentalControlledSetting;
    var22 = 'friendSourceFlags';
    var21 = function(arg0) { // Environment: var1
        _fun82272: for (var _fun82272_ip = 0;;) switch (_fun82272_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun82272_ip = 19;
                    continue _fun82272
                }
            case 14:
                var0 = var2.value;
            case 19:
                if (!(var1 == var0)) {
                    _fun82272_ip = 30;
                    continue _fun82272
                }
            case 23:
                var0 = _closure1_slot3;
            case 30:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.UInt32Value;
        var1 = var2.create;
        var0 = {};
        var3 = arg0;
        var0.value = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var24 = var16;
    var23 = var17;
    var4 = var24[var15](var23, var22, var21, var20, var19);
    var3 = var13[var11];
    var18 = var12.bind(var0)(var3);
    var16 = var18.defineParentalControlledSetting;
    var22 = 'dropsOptedOut';
    var21 = function(arg0) { // Environment: var1
        _fun82274: for (var _fun82274_ip = 0;;) switch (_fun82274_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun82274_ip = 19;
                    continue _fun82274
                }
            case 14:
                var1 = var2.value;
            case 19:
                var0 = var0 != var1;
                if (!var0) {
                    _fun82274_ip = 29;
                    continue _fun82274
                }
            case 26:
                var0 = var1;
            case 29:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.BoolValue;
        var1 = var2.create;
        var0 = {};
        var3 = arg0;
        var0.value = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var24 = var18;
    var23 = var17;
    var3 = var24[var16](var23, var22, var21, var20, var19);
    var11 = var13[var11];
    var16 = var12.bind(var0)(var11);
    var15 = var16.defineParentalControlledSetting;
    var22 = 'quests3PDataOptedOut';
    var21 = function(arg0) { // Environment: var1
        _fun82276: for (var _fun82276_ip = 0;;) switch (_fun82276_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun82276_ip = 19;
                    continue _fun82276
                }
            case 14:
                var1 = var2.value;
            case 19:
                var0 = var0 != var1;
                if (!var0) {
                    _fun82276_ip = 29;
                    continue _fun82276
                }
            case 26:
                var0 = var1;
            case 29:
                return var0;
        }
    };
    var20 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.BoolValue;
        var1 = var2.create;
        var0 = {};
        var3 = arg0;
        var0.value = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var24 = var16;
    var23 = var17;
    var1 = var24[var15](var23, var22, var21, var20, var19);
    var11 = 6;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/user_settings/ParentalControlledUserSettings.tsx';
    var11 = var12.bind(var13)(var11);
    var2.ParentalControlledExplicitContent = var10;
    var2.ParentalControlledLegacyExplicitContent = var9;
    var2.ParentalControlledGoreContent = var8;
    var2.ParentalControlledDefaultMessageRequestRestricted = var7;
    var2.ParentalControlledDefaultGuildsRestricted = var6;
    var2.ParentalControlledDefaultGuildsRestrictedV2 = var5;
    var2.ParentalControlledFriendSourceFlags = var4;
    var2.ParentalControlledDropsOptedOut = var3;
    var2.ParentalControlledQuests3PDataOptedOut = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1350, 660, 10494, 1348, 628, 1342, 2]);