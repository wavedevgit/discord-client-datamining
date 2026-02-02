// modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var10[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var4 = var3.ExplicitContentFilterTypes;
    var5 = {};
    var6 = var4.DISABLED;
    var3 = var6.valueOf;
    var7 = var3.bind(var6)();
    var3 = 2;
    var6 = var10[var3];
    var6 = var9.bind(var0)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.SHOW;
    var5[var7] = var6;
    var7 = var4.NON_FRIENDS;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var10[var3];
    var6 = var9.bind(var0)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.SHOW;
    var5[var7] = var6;
    var7 = var4.FRIENDS_AND_NON_FRIENDS;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var10[var3];
    var6 = var9.bind(var0)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLOCK;
    var5[var7] = var6;
    var _closure1_slot3 = var5;
    var5 = {};
    var7 = var4.DISABLED;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var10[var3];
    var6 = var9.bind(var0)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.SHOW;
    var5[var7] = var6;
    var7 = var4.NON_FRIENDS;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var10[var3];
    var6 = var9.bind(var0)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLOCK;
    var5[var7] = var6;
    var7 = var4.FRIENDS_AND_NON_FRIENDS;
    var6 = var7.valueOf;
    var7 = var6.bind(var7)();
    var6 = var10[var3];
    var6 = var9.bind(var0)(var6);
    var6 = var6.ExplicitContentRedaction;
    var6 = var6.BLOCK;
    var5[var7] = var6;
    var _closure1_slot4 = var5;
    var7 = {};
    var6 = var4.DISABLED;
    var5 = var6.valueOf;
    var6 = var5.bind(var6)();
    var5 = var10[var3];
    var5 = var9.bind(var0)(var5);
    var5 = var5.ExplicitContentRedaction;
    var5 = var5.BLUR;
    var7[var6] = var5;
    var6 = var4.NON_FRIENDS;
    var5 = var6.valueOf;
    var6 = var5.bind(var6)();
    var5 = var10[var3];
    var5 = var9.bind(var0)(var5);
    var5 = var5.ExplicitContentRedaction;
    var5 = var5.BLUR;
    var7[var6] = var5;
    var6 = var4.FRIENDS_AND_NON_FRIENDS;
    var5 = var6.valueOf;
    var6 = var5.bind(var6)();
    var5 = var10[var3];
    var5 = var9.bind(var0)(var5);
    var5 = var5.ExplicitContentRedaction;
    var5 = var5.BLOCK;
    var7[var6] = var5;
    var _closure1_slot5 = var7;
    var6 = {};
    var8 = var4.DISABLED;
    var5 = var8.valueOf;
    var8 = var5.bind(var8)();
    var5 = var10[var3];
    var5 = var9.bind(var0)(var5);
    var5 = var5.ExplicitContentRedaction;
    var5 = var5.BLUR;
    var6[var8] = var5;
    var8 = var4.NON_FRIENDS;
    var5 = var8.valueOf;
    var8 = var5.bind(var8)();
    var5 = var10[var3];
    var5 = var9.bind(var0)(var5);
    var5 = var5.ExplicitContentRedaction;
    var5 = var5.BLOCK;
    var6[var8] = var5;
    var5 = var4.FRIENDS_AND_NON_FRIENDS;
    var4 = var5.valueOf;
    var4 = var4.bind(var5)();
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var3.ExplicitContentRedaction;
    var3 = var3.BLOCK;
    var6[var4] = var3;
    var _closure1_slot6 = var6;
    var5 = function arg0() {
        _fun39284: for (var _fun39284_ip = 0;;) switch (_fun39284_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.setting;
                var6 = var1.isDm;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun39284_ip = 23;
                    continue _fun39284
                }
            case 21:
                var6 = false;
            case 23:
                var5 = var1.isFriend;
                if (!(var5 === var4)) {
                    _fun39284_ip = 35;
                    continue _fun39284
                }
            case 33:
                var5 = false;
            case 35:
                var3 = null;
                if (!(var3 != var0)) {
                    _fun39284_ip = 83;
                    continue _fun39284
                }
            case 41:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.UNSET_EXPLICIT_CONTENT_REDACTION;
                if (!(var0 === var1)) {
                    _fun39284_ip = 277;
                    continue _fun39284
                }
            case 83:
                var7 = _closure1_slot2;
                var1 = var7.getCurrentUser;
                var1 = var1.bind(var7)();
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 3;
                var7 = var12[var7];
                var9 = var11.bind(var4)(var7);
                var8 = var9.getIsGidgetPawtectEnabled;
                var7 = 'resolveExplicitContentSettingWithDefaults';
                var7 = var8.bind(var9)(var7);
                var8 = 4;
                var8 = var12[var8];
                var10 = var11.bind(var4)(var8);
                var9 = var10.isSettingTeenByDefault;
                var8 = 5;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.SettingsDefaultFeature;
                var8 = var8.SENSITIVE_CONTENT;
                var8 = var9.bind(var10)(var8);
                if (var8) {
                    _fun39284_ip = 254;
                    continue _fun39284
                }
            case 184:
                if (var7) {
                    _fun39284_ip = 254;
                    continue _fun39284
                }
            case 187:
                var7 = var3 == var1;
                var3 = undefined;
                if (var7) {
                    _fun39284_ip = 202;
                    continue _fun39284
                }
            case 196:
                var3 = var1.nsfwAllowed;
            case 202:
                var1 = false;
                if (!(var1 !== var3)) {
                    _fun39284_ip = 231;
                    continue _fun39284
                }
            case 208:
                var3 = _closure1_slot8;
                var1 = {};
                var1.isDm = var6;
                var1.isFriend = var5;
                var1 = var3.bind(var4)(var1);
                _fun39284_ip = 252;
                continue _fun39284;
            case 231:
                var7 = _closure1_slot9;
                var3 = {};
                var3.isDm = var6;
                var3.isFriend = var5;
                var1 = var7.bind(var4)(var3);
            case 252:
                _fun39284_ip = 275;
                continue _fun39284;
            case 254:
                var3 = _closure1_slot10;
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
    var _closure1_slot7 = var5;
    var3 = function arg0() {
        _fun39285: for (var _fun39285_ip = 0;;) switch (_fun39285_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.isDm;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun39285_ip = 17;
                    continue _fun39285
                }
            case 15:
                var2 = false;
            case 17:
                var0 = var0.isFriend;
                if (!(var0 === var4)) {
                    _fun39285_ip = 29;
                    continue _fun39285
                }
            case 27:
                var0 = false;
            case 29:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var2) {
                    _fun39285_ip = 69;
                    continue _fun39285
                }
            case 43:
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.SHOW;
                return var2;
            case 69:
                var2 = 6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.ExplicitContentFilter;
                var2 = var3.getSetting;
                var2 = var2.bind(var3)();
                if (var0) {
                    _fun39285_ip = 110;
                    continue _fun39285
                }
            case 100:
                var0 = _closure1_slot4;
                var0 = var0[var2];
                _fun39285_ip = 118;
                continue _fun39285;
            case 110:
                var1 = _closure1_slot3;
                var0 = var1[var2];
            case 118:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var4 = function arg0() {
        _fun39286: for (var _fun39286_ip = 0;;) switch (_fun39286_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.isDm;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun39286_ip = 17;
                    continue _fun39286
                }
            case 15:
                var2 = false;
            case 17:
                var0 = var0.isFriend;
                if (!(var0 === var4)) {
                    _fun39286_ip = 29;
                    continue _fun39286
                }
            case 27:
                var0 = false;
            case 29:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var2) {
                    _fun39286_ip = 69;
                    continue _fun39286
                }
            case 43:
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.BLUR;
                return var2;
            case 69:
                var2 = 6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.ExplicitContentFilter;
                var2 = var3.getSetting;
                var2 = var2.bind(var3)();
                if (var0) {
                    _fun39286_ip = 110;
                    continue _fun39286
                }
            case 100:
                var0 = _closure1_slot6;
                var0 = var0[var2];
                _fun39286_ip = 118;
                continue _fun39286;
            case 110:
                var1 = _closure1_slot5;
                var0 = var1[var2];
            case 118:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        _fun39287: for (var _fun39287_ip = 0;;) switch (_fun39287_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isDm;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun39287_ip = 17;
                    continue _fun39287
                }
            case 15:
                var1 = false;
            case 17:
                var0 = var0.isFriend;
                if (!(var0 === var3)) {
                    _fun39287_ip = 29;
                    continue _fun39287
                }
            case 27:
                var0 = false;
            case 29:
                if (!var1) {
                    _fun39287_ip = 72;
                    continue _fun39287
                }
            case 32:
                if (var0) {
                    _fun39287_ip = 72;
                    continue _fun39287
                }
            case 35:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ExplicitContentRedaction;
                var0 = var0.BLOCK;
                _fun39287_ip = 107;
                continue _fun39287;
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ExplicitContentRedaction;
                var0 = var1.BLUR;
            case 107:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        _fun39288: for (var _fun39288_ip = 0;;) switch (_fun39288_ip) {
            case 0:
                var5 = arg0;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun39288_ip = 50;
                    continue _fun39288
                }
            case 9:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.ExplicitContentSettings;
                var0 = var1.getSetting;
                var5 = var0.bind(var1)();
            case 50:
                var0 = {};
                var6 = _closure1_slot7;
                var2 = {};
                var8 = var4 == var5;
                var3 = undefined;
                var7 = undefined;
                if (var8) {
                    _fun39288_ip = 78;
                    continue _fun39288
                }
            case 72:
                var7 = var5.explicitContentGuilds;
            case 78:
                var2.setting = var7;
                var2 = var6.bind(var3)(var2);
                var0.explicitContentGuilds = var2;
                var6 = _closure1_slot7;
                var2 = {};
                var8 = var4 == var5;
                var7 = undefined;
                if (var8) {
                    _fun39288_ip = 114;
                    continue _fun39288
                }
            case 108:
                var7 = var5.explicitContentNonFriendDm;
            case 114:
                var2.setting = var7;
                var7 = true;
                var2.isDm = var7;
                var2 = var6.bind(var3)(var2);
                var0.explicitContentNonFriendDm = var2;
                var2 = _closure1_slot7;
                var1 = {
                    'setting': null,
                    'isDm': true,
                    'isFriend': true
                };
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun39288_ip = 169;
                    continue _fun39288
                }
            case 163:
                var4 = var5.explicitContentFriendDm;
            case 169:
                var1.setting = var4;
                var1 = var2.bind(var3)(var1);
                var0.explicitContentFriendDm = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = var7;
    var2.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM = var6;
    var2.resolveExplicitContentSettingWithDefaults = var5;
    var2.resolveSettingWithDefaultsForTeen = var4;
    var2.getExplicitContentSettingOrDefault = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot11;
        var0 = undefined;
        var5 = var2.bind(var0)();
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.ExplicitContentSettings;
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
    var2.updateExplicitContentSetting = var3;
    var1 = function() {
        _fun39290: for (var _fun39290_ip = 0;;) switch (_fun39290_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun39290_ip = 71;
                    continue _fun39290
                }
            case 22:
                var1 = _closure1_slot11;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var2 = var1.explicitContentGuilds;
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 7;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getShouldObscureForSetting;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 71:
                var0 = false;
                return var0;
        }
    };
    var2.shouldRedactMessageMediaForForum = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 1350, 1311, 4241, 4242, 4245, 1348, 4246, 2]);