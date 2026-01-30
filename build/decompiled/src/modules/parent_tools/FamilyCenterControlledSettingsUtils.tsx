// modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var6 = function(arg0) { // Original name: isSetAndNotDefault, environment: var1
        _fun81278: for (var _fun81278_ip = 0;;) switch (_fun81278_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun81278_ip = 52;
                    continue _fun81278
                }
            case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.UNSET_EXPLICIT_CONTENT_REDACTION;
                var0 = var2 !== var1;
            case 52:
                return var0;
        }
    };
    var _closure1_slot2 = var6;
    var5 = function(arg0) { // Original name: getGoreContentSettingOrDefault, environment: var1
        _fun81279: for (var _fun81279_ip = 0;;) switch (_fun81279_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var4 = var0.ParentalControlledGoreContent;
                var2 = var4.getControlledSetting;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun81279_ip = 53;
                    continue _fun81279
                }
            case 51:
                var0 = {};
            case 53:
                var4 = var0.goreContentNonFriendDm;
                var2 = var0.goreContentFriendDm;
                var0 = {};
                var5 = _closure1_slot2;
                var5 = var5.bind(var3)(var4);
                if (var5) {
                    _fun81279_ip = 119;
                    continue _fun81279
                }
            case 79:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 2;
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.resolveGoreSettingWithDefaultsForTeen;
                var5 = {};
                var8 = true;
                var5.isDm = var8;
                var4 = var6.bind(var7)(var5);
            case 119:
                var0.goreContentNonFriendDm = var4;
                var4 = _closure1_slot2;
                var4 = var4.bind(var3)(var2);
                if (var4) {
                    _fun81279_ip = 181;
                    continue _fun81279
                }
            case 136:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.resolveGoreSettingWithDefaultsForTeen;
                var4 = {
                    'isDm': true,
                    'isFriend': true
                };
                var2 = var5.bind(var6)(var4);
            case 181:
                var0.goreContentFriendDm = var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.BLUR;
                var0.goreContentGuilds = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function(arg0) { // Original name: resolveExplicitContentSettingWithDefaultsForTeen, environment: var1
        _fun81280: for (var _fun81280_ip = 0;;) switch (_fun81280_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.teenId;
                var0 = var1.setting;
                var1 = var1.isFriend;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun81280_ip = 29;
                    continue _fun81280
                }
            case 27:
                var1 = false;
            case 29:
                var3 = _closure1_slot2;
                var3 = var3.bind(var5)(var0);
                if (var3) {
                    _fun81280_ip = 128;
                    continue _fun81280
                }
            case 44:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 1;
                var3 = var7[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.ParentalControlledLegacyExplicitContent;
                var3 = var4.getControlledSetting;
                var3 = var3.bind(var4)(var6);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                if (var1) {
                    _fun81280_ip = 116;
                    continue _fun81280
                }
            case 104:
                var1 = var2.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM;
                var1 = var1[var3];
                _fun81280_ip = 126;
                continue _fun81280;
            case 116:
                var2 = var2.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM;
                var1 = var2[var3];
            case 126:
                return var1;
            case 128:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function(arg0) { // Original name: getExplicitContentSettingOrDefault, environment: var1
        _fun81281: for (var _fun81281_ip = 0;;) switch (_fun81281_ip) {
            case 0:
                var7 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.ParentalControlledExplicitContent;
                var0 = var2.getControlledSetting;
                var6 = var0.bind(var2)(var7);
                var0 = {};
                var4 = _closure1_slot4;
                var2 = {};
                var2.teenId = var7;
                var5 = null;
                var9 = var5 == var6;
                var8 = undefined;
                if (var9) {
                    _fun81281_ip = 75;
                    continue _fun81281
                }
            case 69:
                var8 = var6.explicitContentNonFriendDm;
            case 75:
                var2.setting = var8;
                var2 = var4.bind(var3)(var2);
                var0.explicitContentNonFriendDm = var2;
                var4 = _closure1_slot4;
                var2 = {};
                var2.teenId = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun81281_ip = 116;
                    continue _fun81281
                }
            case 110:
                var5 = var6.explicitContentFriendDm;
            case 116:
                var2.setting = var5;
                var5 = true;
                var2.isFriend = var5;
                var2 = var4.bind(var3)(var2);
                var0.explicitContentFriendDm = var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.BLUR;
                var0.explicitContentGuilds = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = 4;
    var7 = var7[var0];
    var0 = undefined;
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.isSetAndNotDefault = var6;
    var2.getGoreContentSettingOrDefault = var5;
    var5 = function(arg0, arg1) { // Environment: var1
        var4 = arg0;
        var2 = _closure1_slot3;
        var0 = undefined;
        var6 = var2.bind(var0)(var4);
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.ParentalControlledGoreContent;
        var2 = var3.updateControlledSetting;
        var1 = {};
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var6 = arg1;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.updateGoreContentSetting = var5;
    var2.resolveExplicitContentSettingWithDefaultsForTeen = var4;
    var2.getExplicitContentSettingOrDefault = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        var4 = arg0;
        var2 = _closure1_slot5;
        var0 = undefined;
        var6 = var2.bind(var0)(var4);
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.ParentalControlledExplicitContent;
        var2 = var3.updateControlledSetting;
        var1 = {};
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var6 = arg1;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.updateExplicitContentSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1311, 10332, 4244, 4237, 2]);