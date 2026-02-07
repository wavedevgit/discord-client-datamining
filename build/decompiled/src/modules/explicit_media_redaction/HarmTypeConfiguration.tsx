// modules/explicit_media_redaction/HarmTypeConfiguration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var5 = 0;
    var1 = var7[var5];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var12 = var1.MessageAttachmentFlags;
    var11 = var1.MessageEmbedFlags;
    var4 = {};
    var1 = 'explicit';
    var4.EXPLICIT = var1;
    var1 = 'gore';
    var4.GORE = var1;
    var1 = 'self_harm';
    var4.SELF_HARM = var1;
    var3 = {};
    var3.NONE = var5;
    var1 = 'NONE';
    var3[var5] = var1;
    var13 = 1;
    var3.EXPLICIT = var13;
    var1 = 'EXPLICIT';
    var3[var13] = var1;
    var10 = 2;
    var3.GORE = var10;
    var1 = 'GORE';
    var3[var10] = var1;
    var5 = 4;
    var3.SELF_HARM = var5;
    var1 = 'SELF_HARM';
    var3[var5] = var1;
    var5 = 7;
    var3.ALL = var5;
    var1 = 'ALL';
    var3[var5] = var1;
    var1 = {};
    var8 = var4.EXPLICIT;
    var5 = {};
    var14 = var4.EXPLICIT;
    var5.harmType = var14;
    var14 = var7[var13];
    var14 = var6.bind(var0)(var14);
    var14 = var14.ObscureReason;
    var14 = var14.EXPLICIT_CONTENT;
    var5.obscureReason = var14;
    var14 = var12.CONTAINS_EXPLICIT_MEDIA;
    var5.attachmentFlag = var14;
    var14 = var11.CONTAINS_EXPLICIT_MEDIA;
    var5.embedFlag = var14;
    var14 = var7[var10];
    var14 = var6.bind(var0)(var14);
    var14 = var14.ContentScanFlags;
    var14 = var14.EXPLICIT;
    var5.genericMediaFlag = var14;
    var14 = var3.EXPLICIT;
    var5.bitmask = var14;
    var14 = 'obscure_blur_effect_explicit_content_enabled';
    var5.devSettingKey = var14;
    var14 = function arg0() {
        _fun39456: for (var _fun39456_ip = 0;;) switch (_fun39456_ip) {
            case 0:
                var0 = arg0;
                var4 = null;
                var2 = var4 == var0;
                var1 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun39456_ip = 37;
                    continue _fun39456
                }
            case 16:
                var0 = var0.textAndImages;
                var2 = var4 == var0;
                var3 = undefined;
                if (var2) {
                    _fun39456_ip = 37;
                    continue _fun39456
                }
            case 31:
                var3 = var0.explicitContentSettings;
            case 37:
                var0 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 3;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.GUILD;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun39456_ip = 89;
                    continue _fun39456
                }
            case 83:
                var5 = var3.explicitContentGuilds;
            case 89:
                var0[var7] = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.FRIEND_DM;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun39456_ip = 138;
                    continue _fun39456
                }
            case 132:
                var5 = var3.explicitContentFriendDm;
            case 138:
                var0[var7] = var5;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun39456_ip = 187;
                    continue _fun39456
                }
            case 181:
                var1 = var3.explicitContentNonFriendDm;
            case 187:
                var0[var2] = var1;
                return var0;
        }
    };
    var5.getProtoUserSettings = var14;
    var14 = function arg0() {
        _fun39457: for (var _fun39457_ip = 0;;) switch (_fun39457_ip) {
            case 0:
                var8 = arg0;
                var6 = null;
                if (!(var6 == var8)) {
                    _fun39457_ip = 250;
                    continue _fun39457
                }
            case 12:
                var0 = {};
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var5 = var4[var2];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.GUILD;
                var5 = 4;
                var4 = var4[var5];
                var4 = var9.bind(var1)(var4);
                var9 = var4.ExplicitContentSettings;
                var4 = var9.getSetting;
                var9 = var4.bind(var9)();
                var10 = var6 == var9;
                var4 = undefined;
                if (var10) {
                    _fun39457_ip = 94;
                    continue _fun39457
                }
            case 88:
                var4 = var9.explicitContentGuilds;
            case 94:
                var0[var7] = var4;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = var4[var2];
                var7 = var9.bind(var1)(var7);
                var7 = var7.ContentHarmTypeChannel;
                var7 = var7.FRIEND_DM;
                var4 = var4[var5];
                var4 = var9.bind(var1)(var4);
                var9 = var4.ExplicitContentSettings;
                var4 = var9.getSetting;
                var9 = var4.bind(var9)();
                var10 = var6 == var9;
                var4 = undefined;
                if (var10) {
                    _fun39457_ip = 168;
                    continue _fun39457
                }
            case 162:
                var4 = var9.explicitContentFriendDm;
            case 168:
                var0[var7] = var4;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = var3[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ExplicitContentSettings;
                var3 = var4.getSetting;
                var3 = var3.bind(var4)();
                var4 = var6 == var3;
                var1 = undefined;
                if (var4) {
                    _fun39457_ip = 242;
                    continue _fun39457
                }
            case 236:
                var1 = var3.explicitContentNonFriendDm;
            case 242:
                var0[var2] = var1;
                var8 = var0;
            case 250:
                var0 = {};
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var11 = 3;
                var2 = var1[var11];
                var10 = undefined;
                var2 = var3.bind(var10)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.GUILD;
                var4 = 5;
                var1 = var1[var4];
                var5 = var3.bind(var10)(var1);
                var3 = var5.resolveExplicitContentSettingWithDefaults;
                var1 = {};
                var12 = var6 == var8;
                var9 = undefined;
                if (var12) {
                    _fun39457_ip = 351;
                    continue _fun39457
                }
            case 318:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var11];
                var12 = var13.bind(var10)(var12);
                var12 = var12.ContentHarmTypeChannel;
                var12 = var12.GUILD;
                var9 = var8[var12];
            case 351:
                var1.setting = var9;
                var1 = var3.bind(var5)(var1);
                var0[var2] = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var11];
                var2 = var3.bind(var10)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.FRIEND_DM;
                var1 = var1[var4];
                var9 = var3.bind(var10)(var1);
                var3 = var9.resolveExplicitContentSettingWithDefaults;
                var1 = {
                    'setting': null,
                    'isDm': true,
                    'isFriend': true
                };
                var12 = var6 == var8;
                var5 = undefined;
                if (var12) {
                    _fun39457_ip = 466;
                    continue _fun39457
                }
            case 433:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var11];
                var12 = var13.bind(var10)(var12);
                var12 = var12.ContentHarmTypeChannel;
                var12 = var12.FRIEND_DM;
                var5 = var8[var12];
            case 466:
                var1.setting = var5;
                var5 = true;
                var1 = var3.bind(var9)(var1);
                var0[var2] = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var11];
                var2 = var3.bind(var10)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var1 = var1[var4];
                var4 = var3.bind(var10)(var1);
                var3 = var4.resolveExplicitContentSettingWithDefaults;
                var1 = {};
                var9 = var6 == var8;
                var6 = undefined;
                if (var9) {
                    _fun39457_ip = 572;
                    continue _fun39457
                }
            case 539:
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var11];
                var7 = var9.bind(var10)(var7);
                var7 = var7.ContentHarmTypeChannel;
                var7 = var7.NON_FRIEND_DM;
                var6 = var8[var7];
            case 572:
                var1.setting = var6;
                var1.isDm = var5;
                var1 = var3.bind(var4)(var1);
                var0[var2] = var1;
                return var0;
        }
    };
    var5.getUserSettingsWithDefaults = var14;
    var1[var8] = var5;
    var8 = var4.GORE;
    var5 = {};
    var14 = var4.GORE;
    var5.harmType = var14;
    var14 = var7[var13];
    var14 = var6.bind(var0)(var14);
    var14 = var14.ObscureReason;
    var14 = var14.GORE_CONTENT;
    var5.obscureReason = var14;
    var14 = var12.CONTAINS_GORE_CONTENT;
    var5.attachmentFlag = var14;
    var14 = var11.CONTAINS_GORE_CONTENT;
    var5.embedFlag = var14;
    var14 = var7[var10];
    var14 = var6.bind(var0)(var14);
    var14 = var14.ContentScanFlags;
    var14 = var14.GORE;
    var5.genericMediaFlag = var14;
    var14 = var3.GORE;
    var5.bitmask = var14;
    var14 = 'obscure_blur_effect_gore_content_enabled';
    var5.devSettingKey = var14;
    var14 = function arg0() {
        _fun39458: for (var _fun39458_ip = 0;;) switch (_fun39458_ip) {
            case 0:
                var0 = arg0;
                var4 = null;
                var2 = var4 == var0;
                var1 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun39458_ip = 37;
                    continue _fun39458
                }
            case 16:
                var0 = var0.textAndImages;
                var2 = var4 == var0;
                var3 = undefined;
                if (var2) {
                    _fun39458_ip = 37;
                    continue _fun39458
                }
            case 31:
                var3 = var0.goreContentSettings;
            case 37:
                var0 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 3;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.GUILD;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun39458_ip = 89;
                    continue _fun39458
                }
            case 83:
                var5 = var3.goreContentGuilds;
            case 89:
                var0[var7] = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.FRIEND_DM;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun39458_ip = 138;
                    continue _fun39458
                }
            case 132:
                var5 = var3.goreContentFriendDm;
            case 138:
                var0[var7] = var5;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun39458_ip = 187;
                    continue _fun39458
                }
            case 181:
                var1 = var3.goreContentNonFriendDm;
            case 187:
                var0[var2] = var1;
                return var0;
        }
    };
    var5.getProtoUserSettings = var14;
    var14 = function arg0() {
        _fun39459: for (var _fun39459_ip = 0;;) switch (_fun39459_ip) {
            case 0:
                var8 = arg0;
                var6 = null;
                if (!(var6 == var8)) {
                    _fun39459_ip = 250;
                    continue _fun39459
                }
            case 12:
                var0 = {};
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var5 = var4[var2];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.GUILD;
                var5 = 4;
                var4 = var4[var5];
                var4 = var9.bind(var1)(var4);
                var9 = var4.GoreContentSettings;
                var4 = var9.getSetting;
                var9 = var4.bind(var9)();
                var10 = var6 == var9;
                var4 = undefined;
                if (var10) {
                    _fun39459_ip = 94;
                    continue _fun39459
                }
            case 88:
                var4 = var9.goreContentGuilds;
            case 94:
                var0[var7] = var4;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = var4[var2];
                var7 = var9.bind(var1)(var7);
                var7 = var7.ContentHarmTypeChannel;
                var7 = var7.FRIEND_DM;
                var4 = var4[var5];
                var4 = var9.bind(var1)(var4);
                var9 = var4.GoreContentSettings;
                var4 = var9.getSetting;
                var9 = var4.bind(var9)();
                var10 = var6 == var9;
                var4 = undefined;
                if (var10) {
                    _fun39459_ip = 168;
                    continue _fun39459
                }
            case 162:
                var4 = var9.goreContentFriendDm;
            case 168:
                var0[var7] = var4;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = var3[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var4 = var3.GoreContentSettings;
                var3 = var4.getSetting;
                var3 = var3.bind(var4)();
                var4 = var6 == var3;
                var1 = undefined;
                if (var4) {
                    _fun39459_ip = 242;
                    continue _fun39459
                }
            case 236:
                var1 = var3.goreContentNonFriendDm;
            case 242:
                var0[var2] = var1;
                var8 = var0;
            case 250:
                var0 = {};
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var11 = 3;
                var2 = var1[var11];
                var10 = undefined;
                var2 = var3.bind(var10)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.GUILD;
                var4 = 6;
                var1 = var1[var4];
                var5 = var3.bind(var10)(var1);
                var3 = var5.resolveGoreSettingWithDefaults;
                var1 = {};
                var12 = var6 == var8;
                var9 = undefined;
                if (var12) {
                    _fun39459_ip = 351;
                    continue _fun39459
                }
            case 318:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var11];
                var12 = var13.bind(var10)(var12);
                var12 = var12.ContentHarmTypeChannel;
                var12 = var12.GUILD;
                var9 = var8[var12];
            case 351:
                var1.setting = var9;
                var1 = var3.bind(var5)(var1);
                var0[var2] = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var11];
                var2 = var3.bind(var10)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.FRIEND_DM;
                var1 = var1[var4];
                var9 = var3.bind(var10)(var1);
                var3 = var9.resolveGoreSettingWithDefaults;
                var1 = {
                    'setting': null,
                    'isDm': true,
                    'isFriend': true
                };
                var12 = var6 == var8;
                var5 = undefined;
                if (var12) {
                    _fun39459_ip = 466;
                    continue _fun39459
                }
            case 433:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var11];
                var12 = var13.bind(var10)(var12);
                var12 = var12.ContentHarmTypeChannel;
                var12 = var12.FRIEND_DM;
                var5 = var8[var12];
            case 466:
                var1.setting = var5;
                var5 = true;
                var1 = var3.bind(var9)(var1);
                var0[var2] = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var11];
                var2 = var3.bind(var10)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var1 = var1[var4];
                var4 = var3.bind(var10)(var1);
                var3 = var4.resolveGoreSettingWithDefaults;
                var1 = {};
                var9 = var6 == var8;
                var6 = undefined;
                if (var9) {
                    _fun39459_ip = 572;
                    continue _fun39459
                }
            case 539:
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var11];
                var7 = var9.bind(var10)(var7);
                var7 = var7.ContentHarmTypeChannel;
                var7 = var7.NON_FRIEND_DM;
                var6 = var8[var7];
            case 572:
                var1.setting = var6;
                var1.isDm = var5;
                var1 = var3.bind(var4)(var1);
                var0[var2] = var1;
                return var0;
        }
    };
    var5.getUserSettingsWithDefaults = var14;
    var1[var8] = var5;
    var8 = var4.SELF_HARM;
    var5 = {};
    var14 = var4.SELF_HARM;
    var5.harmType = var14;
    var13 = var7[var13];
    var13 = var6.bind(var0)(var13);
    var13 = var13.ObscureReason;
    var13 = var13.SELF_HARM_CONTENT;
    var5.obscureReason = var13;
    var12 = var12.CONTAINS_SELF_HARM_CONTENT;
    var5.attachmentFlag = var12;
    var11 = var11.CONTAINS_SELF_HARM_CONTENT;
    var5.embedFlag = var11;
    var10 = var7[var10];
    var10 = var6.bind(var0)(var10);
    var10 = var10.ContentScanFlags;
    var10 = var10.SELF_HARM;
    var5.genericMediaFlag = var10;
    var10 = var3.SELF_HARM;
    var5.bitmask = var10;
    var10 = 'obscure_blur_effect_self_harm_content_enabled';
    var5.devSettingKey = var10;
    var10 = function arg0() {
        _fun39460: for (var _fun39460_ip = 0;;) switch (_fun39460_ip) {
            case 0:
                var0 = arg0;
                var4 = null;
                var2 = var4 == var0;
                var1 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun39460_ip = 37;
                    continue _fun39460
                }
            case 16:
                var0 = var0.textAndImages;
                var2 = var4 == var0;
                var3 = undefined;
                if (var2) {
                    _fun39460_ip = 37;
                    continue _fun39460
                }
            case 31:
                var3 = var0.selfHarmContentSettings;
            case 37:
                var0 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 3;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.GUILD;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun39460_ip = 89;
                    continue _fun39460
                }
            case 83:
                var5 = var3.selfHarmContentGuilds;
            case 89:
                var0[var7] = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ContentHarmTypeChannel;
                var7 = var5.FRIEND_DM;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun39460_ip = 138;
                    continue _fun39460
                }
            case 132:
                var5 = var3.selfHarmContentFriendDm;
            case 138:
                var0[var7] = var5;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun39460_ip = 187;
                    continue _fun39460
                }
            case 181:
                var1 = var3.selfHarmContentNonFriendDm;
            case 187:
                var0[var2] = var1;
                return var0;
        }
    };
    var5.getProtoUserSettings = var10;
    var9 = function() {
        var0 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 3;
        var1 = var5[var2];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var1 = var1.ContentHarmTypeChannel;
        var7 = var1.GUILD;
        var1 = 7;
        var6 = var5[var1];
        var6 = var4.bind(var3)(var6);
        var6 = var6.ExplicitContentRedaction;
        var6 = var6.UNSET_EXPLICIT_CONTENT_REDACTION;
        var0[var7] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.ContentHarmTypeChannel;
        var7 = var6.FRIEND_DM;
        var6 = var5[var1];
        var6 = var4.bind(var3)(var6);
        var6 = var6.ExplicitContentRedaction;
        var6 = var6.UNSET_EXPLICIT_CONTENT_REDACTION;
        var0[var7] = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.ContentHarmTypeChannel;
        var2 = var2.NON_FRIEND_DM;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.ExplicitContentRedaction;
        var1 = var1.UNSET_EXPLICIT_CONTENT_REDACTION;
        var0[var2] = var1;
        return var0;
    };
    var5.getUserSettingsWithDefaults = var9;
    var1[var8] = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/explicit_media_redaction/HarmTypeConfiguration.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ContentHarmType = var4;
    var2.ContentHarmTypeBitMask = var3;
    var2.CONTENT_SCAN_TYPE_REGISTRY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4274, 3978, 4275, 1348, 4276, 4281, 1311, 2]);