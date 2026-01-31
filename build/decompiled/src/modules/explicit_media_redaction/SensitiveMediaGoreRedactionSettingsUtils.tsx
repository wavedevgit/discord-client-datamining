// modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var8[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var8[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot4 = var3;
    var5 = function(arg0) { // Original name: resolveGoreSettingWithDefaults, environment: var1
        _fun39336: for (var _fun39336_ip = 0;;) switch (_fun39336_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.setting;
                var6 = var1.isDm;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun39336_ip = 23;
                    continue _fun39336
                }
            case 21:
                var6 = false;
            case 23:
                var5 = var1.isFriend;
                if (!(var5 === var4)) {
                    _fun39336_ip = 35;
                    continue _fun39336
                }
            case 33:
                var5 = false;
            case 35:
                var3 = null;
                if (!(var3 != var0)) {
                    _fun39336_ip = 83;
                    continue _fun39336
                }
            case 41:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.UNSET_EXPLICIT_CONTENT_REDACTION;
                if (!(var0 === var1)) {
                    _fun39336_ip = 277;
                    continue _fun39336
                }
            case 83:
                var7 = _closure1_slot3;
                var1 = var7.getCurrentUser;
                var1 = var1.bind(var7)();
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 4;
                var7 = var12[var7];
                var9 = var11.bind(var4)(var7);
                var8 = var9.getIsGidgetPawtectEnabled;
                var7 = 'resolveExplicitContentSettingWithDefaults';
                var7 = var8.bind(var9)(var7);
                var8 = 5;
                var8 = var12[var8];
                var10 = var11.bind(var4)(var8);
                var9 = var10.isSettingTeenByDefault;
                var8 = 6;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.SettingsDefaultFeature;
                var8 = var8.SENSITIVE_CONTENT;
                var8 = var9.bind(var10)(var8);
                if (var8) {
                    _fun39336_ip = 254;
                    continue _fun39336
                }
            case 184:
                if (var7) {
                    _fun39336_ip = 254;
                    continue _fun39336
                }
            case 187:
                var7 = var3 == var1;
                var3 = undefined;
                if (var7) {
                    _fun39336_ip = 202;
                    continue _fun39336
                }
            case 196:
                var3 = var1.nsfwAllowed;
            case 202:
                var1 = false;
                if (!(var1 !== var3)) {
                    _fun39336_ip = 231;
                    continue _fun39336
                }
            case 208:
                var3 = _closure1_slot7;
                var1 = {};
                var1.isDm = var6;
                var1.isFriend = var5;
                var1 = var3.bind(var4)(var1);
                _fun39336_ip = 252;
                continue _fun39336;
            case 231:
                var7 = _closure1_slot8;
                var3 = {};
                var3.isDm = var6;
                var3.isFriend = var5;
                var1 = var7.bind(var4)(var3);
            case 252:
                _fun39336_ip = 275;
                continue _fun39336;
            case 254:
                var3 = _closure1_slot6;
                var2 = {};
                var2.isDm = var6;
                var2.isFriend = var5;
                var1 = var3.bind(var4)(var2);
            case 275:
                return var1;
            case 277:
                return var0;
        }
    };
    var _closure1_slot5 = var5;
    var3 = function(arg0) { // Original name: resultDefaultSettingsForSensitiveContentDefaultsMixed, environment: var1
        _fun39337: for (var _fun39337_ip = 0;;) switch (_fun39337_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isDm;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun39337_ip = 17;
                    continue _fun39337
                }
            case 15:
                var1 = false;
            case 17:
                var0 = var0.isFriend;
                if (!(var0 === var3)) {
                    _fun39337_ip = 29;
                    continue _fun39337
                }
            case 27:
                var0 = false;
            case 29:
                if (!var1) {
                    _fun39337_ip = 72;
                    continue _fun39337
                }
            case 32:
                if (var0) {
                    _fun39337_ip = 72;
                    continue _fun39337
                }
            case 35:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ExplicitContentRedaction;
                var0 = var0.BLOCK;
                _fun39337_ip = 107;
                continue _fun39337;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                var0 = var1.BLUR;
            case 107:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = function(arg0) { // Original name: resolveGoreSettingWithDefaultsForAdult, environment: var1
        _fun39338: for (var _fun39338_ip = 0;;) switch (_fun39338_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isDm;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun39338_ip = 17;
                    continue _fun39338
                }
            case 15:
                var0 = false;
            case 17:
                var1 = var1.isFriend;
                if (!(var1 === var3)) {
                    _fun39338_ip = 29;
                    continue _fun39338
                }
            case 27:
                var1 = false;
            case 29:
                if (!var0) {
                    _fun39338_ip = 35;
                    continue _fun39338
                }
            case 32:
                if (var1) {
                    _fun39338_ip = 83;
                    continue _fun39338
                }
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                if (var0) {
                    _fun39338_ip = 75;
                    continue _fun39338
                }
            case 67:
                var0 = var1.SHOW;
                _fun39338_ip = 81;
                continue _fun39338;
            case 75:
                var0 = var1.BLOCK;
            case 81:
                _fun39338_ip = 118;
                continue _fun39338;
            case 83:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                var0 = var1.SHOW;
            case 118:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var4 = function(arg0) { // Original name: resolveGoreSettingWithDefaultsForTeen, environment: var1
        _fun39339: for (var _fun39339_ip = 0;;) switch (_fun39339_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isDm;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun39339_ip = 17;
                    continue _fun39339
                }
            case 15:
                var0 = false;
            case 17:
                var1 = var1.isFriend;
                if (!(var1 === var3)) {
                    _fun39339_ip = 29;
                    continue _fun39339
                }
            case 27:
                var1 = false;
            case 29:
                if (!var0) {
                    _fun39339_ip = 35;
                    continue _fun39339
                }
            case 32:
                if (var1) {
                    _fun39339_ip = 83;
                    continue _fun39339
                }
            case 35:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                if (var0) {
                    _fun39339_ip = 75;
                    continue _fun39339
                }
            case 67:
                var0 = var1.BLUR;
                _fun39339_ip = 81;
                continue _fun39339;
            case 75:
                var0 = var1.BLOCK;
            case 81:
                _fun39339_ip = 118;
                continue _fun39339;
            case 83:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                var0 = var1.BLUR;
            case 118:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function(arg0) { // Original name: getGoreContentSettingOrDefault, environment: var1
        _fun39340: for (var _fun39340_ip = 0;;) switch (_fun39340_ip) {
            case 0:
                var5 = arg0;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun39340_ip = 50;
                    continue _fun39340
                }
            case 9:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.GoreContentSettings;
                var0 = var1.getSetting;
                var5 = var0.bind(var1)();
            case 50:
                var0 = {};
                var6 = _closure1_slot5;
                var2 = {};
                var8 = var4 == var5;
                var3 = undefined;
                var7 = undefined;
                if (var8) {
                    _fun39340_ip = 78;
                    continue _fun39340
                }
            case 72:
                var7 = var5.goreContentGuilds;
            case 78:
                var2.setting = var7;
                var2 = var6.bind(var3)(var2);
                var0.goreContentGuilds = var2;
                var6 = _closure1_slot5;
                var2 = {};
                var8 = var4 == var5;
                var7 = undefined;
                if (var8) {
                    _fun39340_ip = 114;
                    continue _fun39340
                }
            case 108:
                var7 = var5.goreContentNonFriendDm;
            case 114:
                var2.setting = var7;
                var7 = true;
                var2.isDm = var7;
                var2 = var6.bind(var3)(var2);
                var0.goreContentNonFriendDm = var2;
                var2 = _closure1_slot5;
                var1 = {
                    'setting': null,
                    'isDm': true,
                    'isFriend': true
                };
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun39340_ip = 169;
                    continue _fun39340
                }
            case 163:
                var4 = var5.goreContentFriendDm;
            case 169:
                var1.setting = var4;
                var1 = var2.bind(var3)(var1);
                var0.goreContentFriendDm = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.resolveGoreSettingWithDefaults = var5;
    var2.resolveGoreSettingWithDefaultsForTeen = var4;
    var2.getGoreContentSettingOrDefault = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot9;
        var0 = undefined;
        var5 = var2.bind(var0)();
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 7;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.GoreContentSettings;
        var2 = var3.updateSetting;
        var1 = {};
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var5 = arg0;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGoreContentSetting = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.EXPLICIT_MEDIA_REDACTION;
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSensitiveContentFilterHelpArticle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 660, 1311, 4239, 4240, 4243, 1348, 2]);