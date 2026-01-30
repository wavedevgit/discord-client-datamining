// records/ChannelRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var51 = require;
    var8 = metroImportDefault;
    var10 = metroImportAll;
    var2 = exports;
    var52 = dependencyMap;
    var _closure1_slot0 = var51;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var _closure1_slot3 = var52;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var4
        _fun16013: for (var _fun16013_ip = 0;;) switch (_fun16013_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot37;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun16013_ip = 51;
                    continue _fun16013
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun16013_ip = 92;
                continue _fun16013;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun16013_ip = 71;
                    continue _fun16013
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun16014: for (var _fun16014_ip = 0;;) switch (_fun16014_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun16014_ip = 74;
                continue _fun16014;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot37 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var44 = function(arg0) { // Original name: isGuildVocalChannelType, environment: var4
        _fun16017: for (var _fun16017_ip = 0;;) switch (_fun16017_ip) {
            case 0:
                var3 = arg0;
                var0 = 'SELECTABLE';
                var0 = var0 !== var3;
                if (!var0) {
                    _fun16017_ip = 33;
                    continue _fun16017
                }
            case 16:
                var2 = _closure1_slot19;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 33:
                return var0;
        }
    };
    var _closure1_slot38 = var44;
    var42 = function(arg0) { // Original name: _isPrivate, environment: var4
        var2 = _closure1_slot20;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot39 = var42;
    var41 = function(arg0) { // Original name: _isMultiUserDM, environment: var4
        var2 = _closure1_slot21;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot40 = var41;
    var39 = function(arg0) { // Original name: isVoiceChannel, environment: var4
        var2 = _closure1_slot23;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot41 = var39;
    var35 = function(arg0) { // Original name: _isThread, environment: var4
        var2 = _closure1_slot25;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot42 = var35;
    var34 = function(arg0) { // Original name: isVocalThreadType, environment: var4
        var2 = _closure1_slot26;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot43 = var34;
    var0 = function(arg0) { // Original name: convertPermissionOverwrites, environment: var4
        _fun16023: for (var _fun16023_ip = 0;;) switch (_fun16023_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var _closure2_slot0 = var0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun16023_ip = 32;
                    continue _fun16023
                }
            case 17:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var3 = _closure2_slot0;
                    var2 = var4.id;
                    var1 = {};
                    var0 = var4.id;
                    var1.id = var0;
                    var0 = var4.type;
                    var1.type = var0;
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var5 = 8;
                    var8 = var7[var5];
                    var0 = undefined;
                    var10 = var6.bind(var0)(var8);
                    var9 = var10.deserialize;
                    var8 = var4.allow;
                    var8 = var9.bind(var10)(var8);
                    var1.allow = var8;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.deserialize;
                    var4 = var4.deny;
                    var4 = var5.bind(var6)(var4);
                    var1.deny = var4;
                    var3[var2] = var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 32:
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function(arg0) { // Original name: convertNicks, environment: var4
        _fun16025: for (var _fun16025_ip = 0;;) switch (_fun16025_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun16025_ip = 58;
                    continue _fun16025
                }
            case 9:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = var1.nick;
                    var0[var2] = var1;
                    return var0;
                };
                var0 = {};
                var0 = var2.bind(var3)(var4, var1, var0);
                _fun16025_ip = 60;
                continue _fun16025;
            case 58:
                var0 = {};
            case 60:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0) { // Original name: convertAvailableTags, environment: var4
        _fun16027: for (var _fun16027_ip = 0;;) switch (_fun16027_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun16027_ip = 28;
                    continue _fun16027
                }
            case 9:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun16028: for (var _fun16028_ip = 0;;) switch (_fun16028_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.id;
                            var0.id = var2;
                            var2 = var1.name;
                            var0.name = var2;
                            var4 = var1.emoji_id;
                            var3 = 0;
                            var2 = undefined;
                            if (!(var3 !== var4)) {
                                _fun16028_ip = 43;
                                continue _fun16028
                            }
                        case 37:
                            var2 = var1.emoji_id;
                        case 43:
                            var0.emojiId = var2;
                            var2 = var1.emoji_name;
                            var0.emojiName = var2;
                            var2 = var1.moderated;
                            var0.moderated = var2;
                            var1 = var1.color;
                            var0.color = var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun16027_ip = 32;
                continue _fun16027;
            case 28:
                var0 = new Array(0);
            case 32:
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function(arg0) { // Original name: convertIconEmoji, environment: var4
        _fun16029: for (var _fun16029_ip = 0;;) switch (_fun16029_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 != var2;
                var0 = undefined;
                if (!var1) {
                    _fun16029_ip = 37;
                    continue _fun16029
                }
            case 14:
                var1 = {};
                var3 = var2.id;
                var1.id = var3;
                var2 = var2.name;
                var1.name = var2;
                var0 = var1;
            case 37:
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var22 = function(arg0) { // Original name: getAccessPermissions, environment: var4
        _fun16030: for (var _fun16030_ip = 0;;) switch (_fun16030_ip) {
            case 0:
                var3 = _closure1_slot38;
                var2 = undefined;
                var0 = arg0;
                var0 = var3.bind(var2)(var0);
                if (var0) {
                    _fun16030_ip = 32;
                    continue _fun16030
                }
            case 20:
                var0 = _closure1_slot14;
                var0 = var0.VIEW_CHANNEL;
                _fun16030_ip = 36;
                continue _fun16030;
            case 32:
                var0 = _closure1_slot28;
            case 36:
                return var0;
        }
    };
    var _closure1_slot48 = var22;
    var0 = function(arg0) { // Original name: transformNonUnderscoreProperties, environment: var4
        _fun16031: for (var _fun16031_ip = 0;;) switch (_fun16031_ip) {
            case 0:
                var0 = arg0;
                var1 = 'topic';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 31;
                    continue _fun16031
                }
            case 14:
                var1 = var0.topic;
                var0.topic_ = var1;
                var1 = delete var0.topic;
            case 31:
                var1 = 'position';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 58;
                    continue _fun16031
                }
            case 42:
                var1 = var0.position;
                var0.position_ = var1;
                var1 = delete var0.position;
            case 58:
                var1 = 'permissionOverwrites';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 86;
                    continue _fun16031
                }
            case 69:
                var1 = var0.permissionOverwrites;
                var0.permissionOverwrites_ = var1;
                var1 = delete var0.permissionOverwrites;
            case 86:
                var1 = 'bitrate';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 114;
                    continue _fun16031
                }
            case 97:
                var1 = var0.bitrate;
                var0.bitrate_ = var1;
                var1 = delete var0.bitrate;
            case 114:
                var1 = 'userLimit';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 142;
                    continue _fun16031
                }
            case 125:
                var1 = var0.userLimit;
                var0.userLimit_ = var1;
                var1 = delete var0.userLimit;
            case 142:
                var1 = 'nsfw';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 170;
                    continue _fun16031
                }
            case 153:
                var1 = var0.nsfw;
                var0.nsfw_ = var1;
                var1 = delete var0.nsfw;
            case 170:
                var1 = 'rateLimitPerUser';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 198;
                    continue _fun16031
                }
            case 181:
                var1 = var0.rateLimitPerUser;
                var0.rateLimitPerUser_ = var1;
                var1 = delete var0.rateLimitPerUser;
            case 198:
                var1 = 'flags';
                var1 = var1 in var0;
                if (!var1) {
                    _fun16031_ip = 225;
                    continue _fun16031
                }
            case 209:
                var1 = var0.flags;
                var0.flags_ = var1;
                var1 = delete var0.flags;
            case 225:
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var3 = function(arg0) { // Original name: castChannelRecord, environment: var4
        _fun16032: for (var _fun16032_ip = 0;;) switch (_fun16032_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot35;
                var2 = var3.type;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun16032_ip = 31;
                    continue _fun16032
                }
            case 21:
                var5 = _closure1_slot11;
                var2 = var5.GUILD_TEXT;
            case 31:
                var2 = var4[var2];
                if (!(var1 == var2)) {
                    _fun16032_ip = 43;
                    continue _fun16032
                }
            case 39:
                var2 = _closure1_slot31;
            case 43:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 15;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.dangerouslyCast;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var _closure1_slot50 = var3;
    var1 = function(arg0) { // Original name: createChannelRecord, environment: var4
        _fun16033: for (var _fun16033_ip = 0;;) switch (_fun16033_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot35;
                var0 = var2.type;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun16033_ip = 31;
                    continue _fun16033
                }
            case 21:
                var5 = _closure1_slot11;
                var0 = var5.GUILD_TEXT;
            case 31:
                var0 = var4[var0];
                if (!(var3 == var0)) {
                    _fun16033_ip = 43;
                    continue _fun16033
                }
            case 39:
                var0 = _closure1_slot31;
            case 43:
                var3 = _closure1_slot49;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var1;
                var6 = var2;
                var0 = new var7[var0](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot51 = var1;
    var5 = global;
    var9 = var5.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var52[var0];
    var0 = undefined;
    var6 = var8.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var52[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var52[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var52[var6];
    var7 = var8.bind(var0)(var6);
    var _closure1_slot7 = var7;
    var6 = 4;
    var6 = var52[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var52[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var52[var6];
    var8 = var51.bind(var0)(var6);
    var6 = var8.BITRATE_DEFAULT;
    var _closure1_slot10 = var6;
    var53 = var8.ChannelTypes;
    var _closure1_slot11 = var53;
    var6 = var8.BasicPermissions;
    var _closure1_slot12 = var6;
    var9 = var8.ChannelTypesSets;
    var _closure1_slot13 = var9;
    var8 = var8.Permissions;
    var _closure1_slot14 = var8;
    var9 = 7;
    var9 = var52[var9];
    var9 = var51.bind(var0)(var9);
    var9 = var9.ChannelFlags;
    var _closure1_slot15 = var9;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(10);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[2] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[3] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[4] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[5] = var11;
    var11 = var53.GUILD_FORUM;
    var9[6] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[7] = var11;
    var11 = var53.DM;
    var9[8] = var11;
    var11 = var53.GROUP_DM;
    var9[9] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot16 = var9;
    var12 = var5.Set;
    var11 = var53.DM;
    var9 = new Array(14);
    var9[0] = var11;
    var11 = var53.GROUP_DM;
    var9[1] = var11;
    var11 = var53.GUILD_TEXT;
    var9[2] = var11;
    var11 = var53.GUILD_VOICE;
    var9[3] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[4] = var11;
    var11 = var53.GUILD_CATEGORY;
    var9[5] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[6] = var11;
    var11 = var53.GUILD_STORE;
    var9[7] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[8] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[9] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[10] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[11] = var11;
    var11 = var53.GUILD_FORUM;
    var9[12] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[13] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var49 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(5);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[2] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[3] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[4] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot17 = var9;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(6);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[3] = var11;
    var11 = var53.GUILD_VOICE;
    var9[4] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[5] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var48 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(12);
    var9[0] = var11;
    var11 = var53.GUILD_VOICE;
    var9[1] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[2] = var11;
    var11 = var53.GUILD_CATEGORY;
    var9[3] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[4] = var11;
    var11 = var53.GUILD_STORE;
    var9[5] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[6] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[7] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[8] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[9] = var11;
    var11 = var53.GUILD_FORUM;
    var9[10] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[11] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var47 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot18 = var47;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[3] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var46 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_VOICE;
    var9 = new Array(2);
    var9[0] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var45 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot19 = var45;
    var12 = var5.Set;
    var11 = var53.GUILD_STAGE_VOICE;
    var9 = new Array(1);
    var9[0] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var43 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.DM;
    var9 = new Array(2);
    var9[0] = var11;
    var11 = var53.GROUP_DM;
    var9[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot20 = var9;
    var12 = var5.Set;
    var11 = var53.GROUP_DM;
    var9 = new Array(1);
    var9[0] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot21 = var9;
    var12 = var5.Set;
    var11 = var53.DM;
    var9 = new Array(7);
    var9[0] = var11;
    var11 = var53.GROUP_DM;
    var9[1] = var11;
    var11 = var53.GUILD_TEXT;
    var9[2] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[3] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[4] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[5] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[6] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var40 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot22 = var40;
    var12 = var5.Set;
    var11 = var53.DM;
    var9 = new Array(6);
    var9[0] = var11;
    var11 = var53.GROUP_DM;
    var9[1] = var11;
    var11 = var53.GUILD_VOICE;
    var9[2] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[3] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[4] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[5] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot23 = var9;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(10);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[2] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[3] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[4] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[5] = var11;
    var11 = var53.GUILD_FORUM;
    var9[6] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[7] = var11;
    var11 = var53.DM;
    var9[8] = var11;
    var11 = var53.GROUP_DM;
    var9[9] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot24 = var9;
    var12 = var5.Set;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9 = new Array(3);
    var9[0] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[1] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[2] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var38 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot25 = var38;
    var12 = var5.Set;
    var11 = var53.PUBLIC_THREAD;
    var9 = new Array(2);
    var9[0] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var37 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot26 = var37;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[3] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var36 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.DM;
    var9 = new Array(12);
    var9[0] = var11;
    var11 = var53.GROUP_DM;
    var9[1] = var11;
    var11 = var53.GUILD_TEXT;
    var9[2] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[3] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[4] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[5] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[6] = var11;
    var11 = var53.GUILD_FORUM;
    var9[7] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[8] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[9] = var11;
    var11 = var53.GUILD_VOICE;
    var9[10] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[11] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot27 = var9;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(11);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_STORE;
    var9[2] = var11;
    var11 = var53.GUILD_VOICE;
    var9[3] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[4] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[5] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[6] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[7] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[8] = var11;
    var11 = var53.GUILD_FORUM;
    var9[9] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[10] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var33 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9 = new Array(9);
    var9[0] = var11;
    var11 = var53.GUILD_CATEGORY;
    var9[1] = var11;
    var11 = var53.GUILD_STORE;
    var9[2] = var11;
    var11 = var53.GUILD_TEXT;
    var9[3] = var11;
    var11 = var53.GUILD_VOICE;
    var9[4] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[5] = var11;
    var11 = var53.GUILD_DIRECTORY;
    var9[6] = var11;
    var11 = var53.GUILD_FORUM;
    var9[7] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[8] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var32 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(2);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var31 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[3] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var30 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(6);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[3] = var11;
    var11 = var53.GUILD_VOICE;
    var9[4] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[5] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var29 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9 = new Array(5);
    var9[0] = var11;
    var11 = var53.GUILD_TEXT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[3] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[4] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var28 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(8);
    var9[0] = var11;
    var11 = var53.GUILD_FORUM;
    var9[1] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[2] = var11;
    var11 = var53.ANNOUNCEMENT_THREAD;
    var9[3] = var11;
    var11 = var53.PUBLIC_THREAD;
    var9[4] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[5] = var11;
    var11 = var53.GUILD_VOICE;
    var9[6] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[7] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var27 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.PUBLIC_THREAD;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var53.PRIVATE_THREAD;
    var9[1] = var11;
    var11 = var53.GUILD_VOICE;
    var9[2] = var11;
    var11 = var53.GUILD_STAGE_VOICE;
    var9[3] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var26 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(3);
    var9[0] = var11;
    var11 = var53.GUILD_FORUM;
    var9[1] = var11;
    var11 = var53.GUILD_MEDIA;
    var9[2] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var25 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var53.GUILD_CATEGORY;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[3] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var24 = var9 instanceof Object ? var9 : var11;
    var12 = var5.Set;
    var11 = var53.GUILD_TEXT;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var53.GUILD_ANNOUNCEMENT;
    var9[1] = var11;
    var11 = var53.GUILD_FORUM;
    var9[2] = var11;
    var11 = var53.GUILD_VOICE;
    var9[3] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var59 = var11;
    var58 = var9;
    var9 = new var59[var12](var58, var57);
    var23 = var9 instanceof Object ? var9 : var11;
    var9 = 8;
    var9 = var52[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.combine;
    var9 = var8.CONNECT;
    var8 = var8.VIEW_CHANNEL;
    var8 = var10.bind(var11)(var9, var8);
    var _closure1_slot28 = var8;
    var8 = var6.CONNECT;
    var6 = var6.VIEW_CHANNEL;
    var6 = var8 | var6;
    var _closure1_slot29 = var6;
    var6 = function(arg0) { // Original name: ChannelRecordProperties, environment: var4
        _fun16034: for (var _fun16034_ip = 0;;) switch (_fun16034_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var4 = _closure1_slot8;
                var1 = _closure1_slot52;
                var0 = undefined;
                var1 = var4.bind(var0)(var2, var1);
                var1 = var3.id;
                var2.id = var1;
                var4 = var3.type;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun16034_ip = 57;
                    continue _fun16034
                }
            case 47:
                var5 = _closure1_slot11;
                var4 = var5.GUILD_TEXT;
            case 57:
                var2.type = var4;
                var5 = var3.name;
                var6 = var1 != var5;
                var4 = '';
                if (!var6) {
                    _fun16034_ip = 82;
                    continue _fun16034
                }
            case 79:
                var4 = var5;
            case 82:
                var2.name = var4;
                var3 = var3.guild_id;
                var4 = var1 != var3;
                var1 = null;
                if (!var4) {
                    _fun16034_ip = 105;
                    continue _fun16034
                }
            case 102:
                var1 = var3;
            case 105:
                var2.guild_id = var1;
                return var0;
        }
    };
    var _closure1_slot52 = var6;
    var21 = var7.bind(var0)(var6);
    var7 = var5.Object;
    var6 = var7.freeze;
    var5 = {};
    var5 = var6.bind(var7)(var5);
    var _closure1_slot30 = var5;
    var5 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: ChannelRecordBase, environment: var5
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'permissionOverwrites';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            _fun16037: for (var _fun16037_ip = 0;;) switch (_fun16037_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.permissionOverwrites_;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun16037_ip = 22;
                        continue _fun16037
                    }
                case 15:
                    var0 = _closure1_slot30;
                case 22:
                    return var0;
            }
        };
        var4.get = var0;
        var0 = new Array(54);
        var0[0] = var4;
        var4 = {};
        var6 = 'topic';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16038: for (var _fun16038_ip = 0;;) switch (_fun16038_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.topic_;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = '';
                    if (!var2) {
                        _fun16038_ip = 25;
                        continue _fun16038
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'position';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16039: for (var _fun16039_ip = 0;;) switch (_fun16039_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.position_;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun16039_ip = 23;
                        continue _fun16039
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'bitrate';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16040: for (var _fun16040_ip = 0;;) switch (_fun16040_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.bitrate_;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun16040_ip = 22;
                        continue _fun16040
                    }
                case 15:
                    var0 = _closure1_slot10;
                case 22:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'userLimit';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16041: for (var _fun16041_ip = 0;;) switch (_fun16041_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.userLimit_;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun16041_ip = 23;
                        continue _fun16041
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'nsfw';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16042: for (var _fun16042_ip = 0;;) switch (_fun16042_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.nsfw_;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun16042_ip = 21;
                        continue _fun16042
                    }
                case 18:
                    var0 = var1;
                case 21:
                    return var0;
            }
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'rateLimitPerUser';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16043: for (var _fun16043_ip = 0;;) switch (_fun16043_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.rateLimitPerUser_;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun16043_ip = 23;
                        continue _fun16043
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'flags';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun16044: for (var _fun16044_ip = 0;;) switch (_fun16044_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.flags_;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun16044_ip = 23;
                        continue _fun16044
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'toJS';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = this;
            var3 = var0;
            var1 = copyDataProperties(var3, var2);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'set';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.merge;
            var4 = _closure1_slot49;
            var0 = {};
            var5 = arg1;
            var3 = arg0;
            var0[var3] = var5;
            var3 = undefined;
            var3 = var4.bind(var3)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'merge';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun16047: for (var _fun16047_ip = 0;;) switch (_fun16047_ip) {
                case 0:
                    var9 = arg0;
                    var1 = this;
                    var2 = _closure1_slot49;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var9);
                    var7 = var9;
                    var2 = null;
                    var0 = null;
                    var3 = null;
                    for (var4 in var7)
                        case 37: {
                            var10 = var0;
                            var3 = var10;
                            case 52: var11 = var4;
                            var12 = var9.hasOwnProperty;
                            var12 = var12.bind(var9)(var11);
                            if (!var12) {
                                _fun16047_ip = 81;
                                continue _fun16047
                            }
                            case 69: var14 = var1[var11];
                            var13 = var9[var11];
                            var12 = var14 !== var13;
                            case 81: var0 = var10;
                            if (!var12) {
                                _fun16047_ip = 37;
                                continue _fun16047
                            }
                            case 87: var0 = var10;
                            if (!(var2 == var10)) {
                                _fun16047_ip = 104;
                                continue _fun16047
                            }
                            case 94: var10 = var1.toJS;
                            var0 = var10.bind(var1)();
                            case 104: var10 = var9[var11];
                            var0[var11] = var10;
                            _fun16047_ip = 37;
                            continue _fun16047;
                        }
                case 114:
                    var0 = var1;
                    if (!(var2 != var3)) {
                        _fun16047_ip = 149;
                        continue _fun16047
                    }
                case 121:
                    var1 = var1.constructor;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var16 = var2;
                    var15 = var3;
                    var1 = new var16[var1](var15, var14);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 149:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'computeLurkerPermissionsAllowList';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16048: for (var _fun16048_ip = 0;;) switch (_fun16048_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isGuildStageVoice;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun16048_ip = 42;
                        continue _fun16048
                    }
                case 16:
                    var3 = _closure1_slot9;
                    var2 = var3.isPublic;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    if (var1) {
                        _fun16048_ip = 46;
                        continue _fun16048
                    }
                case 42:
                    var1 = undefined;
                    return var1;
                case 46:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isNSFW';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.nsfw;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'isManaged';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.application_id;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'isPrivate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot39;
            var0 = this;
            var1 = var0.type;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'isGroupDM';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GROUP_DM;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'isMultiUserDM';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot40;
            var0 = this;
            var1 = var0.type;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isDM';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.DM;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'isSystemDM';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'isArchivedThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16056: for (var _fun16056_ip = 0;;) switch (_fun16056_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isThread;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun16056_ip = 45;
                        continue _fun16056
                    }
                case 16:
                    var1 = var1.threadMetadata;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun16056_ip = 39;
                        continue _fun16056
                    }
                case 33:
                    var2 = var1.archived;
                case 39:
                    var1 = true;
                    var0 = var1 === var2;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'isLockedThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16057: for (var _fun16057_ip = 0;;) switch (_fun16057_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isThread;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun16057_ip = 45;
                        continue _fun16057
                    }
                case 16:
                    var1 = var1.threadMetadata;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun16057_ip = 39;
                        continue _fun16057
                    }
                case 33:
                    var2 = var1.locked;
                case 39:
                    var1 = true;
                    var0 = var1 === var2;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isScheduledForDeletion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot15;
            var0 = var0.IS_SCHEDULED_FOR_DELETION;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'isArchivedLockedThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16059: for (var _fun16059_ip = 0;;) switch (_fun16059_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot25;
                    var2 = var3.has;
                    var0 = var1.type;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun16059_ip = 57;
                        continue _fun16059
                    }
                case 28:
                    var2 = var1.threadMetadata;
                    var3 = null;
                    var4 = var3 == var2;
                    var3 = undefined;
                    if (var4) {
                        _fun16059_ip = 51;
                        continue _fun16059
                    }
                case 45:
                    var3 = var2.archived;
                case 51:
                    var2 = true;
                    var0 = var2 === var3;
                case 57:
                    if (!var0) {
                        _fun16059_ip = 89;
                        continue _fun16059
                    }
                case 60:
                    var1 = var1.threadMetadata;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun16059_ip = 83;
                        continue _fun16059
                    }
                case 77:
                    var2 = var1.locked;
                case 83:
                    var1 = true;
                    var0 = var1 === var2;
                case 89:
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'isForumPost';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16060: for (var _fun16060_ip = 0;;) switch (_fun16060_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.type;
                    var0 = _closure1_slot11;
                    var0 = var0.PUBLIC_THREAD;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun16060_ip = 40;
                        continue _fun16060
                    }
                case 28:
                    var4 = var1.parentChannelThreadType;
                    var3 = null;
                    var0 = var3 != var4;
                case 40:
                    if (!var0) {
                        _fun16060_ip = 69;
                        continue _fun16060
                    }
                case 43:
                    var2 = _closure1_slot13;
                    var3 = var2.GUILD_THREADS_ONLY;
                    var2 = var3.has;
                    var1 = var1.parentChannelThreadType;
                    var0 = var2.bind(var3)(var1);
                case 69:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'isRingable';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16061: for (var _fun16061_ip = 0;;) switch (_fun16061_ip) {
                case 0:
                    var2 = this;
                    var0 = _closure1_slot13;
                    var4 = var0.CALLABLE;
                    var3 = var4.has;
                    var0 = var2.type;
                    var0 = var3.bind(var4)(var0);
                    if (var0) {
                        _fun16061_ip = 53;
                        continue _fun16061
                    }
                case 34:
                    var2 = var2.type;
                    var1 = _closure1_slot11;
                    var1 = var1.GUILD_VOICE;
                    var0 = var2 === var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'isCategory';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GUILD_CATEGORY;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'isVocal';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot41;
            var0 = this;
            var1 = var0.type;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'isGuildVocal';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot38;
            var0 = this;
            var1 = var0.type;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'isGuildVocalOrThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16065: for (var _fun16065_ip = 0;;) switch (_fun16065_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isGuildVocal;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun16065_ip = 26;
                        continue _fun16065
                    }
                case 16:
                    var1 = var2.isVocalThread;
                    var0 = var1.bind(var2)();
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'isGuildVoice';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GUILD_VOICE;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'isGuildVoiceOrThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16067: for (var _fun16067_ip = 0;;) switch (_fun16067_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isGuildVoice;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun16067_ip = 26;
                        continue _fun16067
                    }
                case 16:
                    var1 = var2.isVocalThread;
                    var0 = var1.bind(var2)();
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'isGuildStageVoice';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GUILD_STAGE_VOICE;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'isListenModeCapable';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.isGuildStageVoice;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'isThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot42;
            var0 = this;
            var1 = var0.type;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'isAnnouncementThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.ANNOUNCEMENT_THREAD;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'isVocalThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16072: for (var _fun16072_ip = 0;;) switch (_fun16072_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.type;
                    var0 = _closure1_slot11;
                    var0 = var0.PUBLIC_THREAD;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun16072_ip = 47;
                        continue _fun16072
                    }
                case 28:
                    var2 = var2.type;
                    var1 = _closure1_slot11;
                    var1 = var1.PRIVATE_THREAD;
                    var0 = var2 === var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'isActiveThread';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16073: for (var _fun16073_ip = 0;;) switch (_fun16073_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isThread;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun16073_ip = 45;
                        continue _fun16073
                    }
                case 16:
                    var1 = var1.threadMetadata;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun16073_ip = 39;
                        continue _fun16073
                    }
                case 33:
                    var2 = var1.archived;
                case 39:
                    var1 = true;
                    var0 = var1 !== var2;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[36] = var4;
        var4 = {};
        var6 = 'isDirectory';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GUILD_DIRECTORY;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[37] = var4;
        var4 = {};
        var6 = 'isForumLikeChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16075: for (var _fun16075_ip = 0;;) switch (_fun16075_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isForumChannel;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun16075_ip = 26;
                        continue _fun16075
                    }
                case 16:
                    var1 = var2.isMediaChannel;
                    var0 = var1.bind(var2)();
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[38] = var4;
        var4 = {};
        var6 = 'isForumChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GUILD_FORUM;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[39] = var4;
        var4 = {};
        var6 = 'isMediaChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot11;
            var0 = var0.GUILD_MEDIA;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[40] = var4;
        var4 = {};
        var6 = 'isMediaPost';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16078: for (var _fun16078_ip = 0;;) switch (_fun16078_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.type;
                    var0 = _closure1_slot11;
                    var0 = var0.PUBLIC_THREAD;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun16078_ip = 48;
                        continue _fun16078
                    }
                case 28:
                    var2 = var2.parentChannelThreadType;
                    var1 = _closure1_slot11;
                    var1 = var1.GUILD_MEDIA;
                    var0 = var2 === var1;
                case 48:
                    return var0;
            }
        };
        var4.value = var6;
        var0[41] = var4;
        var4 = {};
        var6 = 'isRoleSubscriptionTemplatePreviewChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot15;
            var0 = var0.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[42] = var4;
        var4 = {};
        var6 = 'isOwner';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.ownerId;
            var0 = arg0;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[43] = var4;
        var4 = {};
        var6 = 'isObfuscated';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot15;
            var0 = var0.OBFUSCATED;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[44] = var4;
        var4 = {};
        var6 = 'getGuildId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.guild_id;
            return var0;
        };
        var4.value = var6;
        var0[45] = var4;
        var4 = {};
        var6 = 'getApplicationId';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.application_id;
            return var0;
        };
        var4.value = var6;
        var0[46] = var4;
        var4 = {};
        var6 = 'getDefaultSortOrder';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16084: for (var _fun16084_ip = 0;;) switch (_fun16084_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.defaultSortOrder;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun16084_ip = 52;
                        continue _fun16084
                    }
                case 15:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThreadSortOrder;
                    var0 = var1.LATEST_ACTIVITY;
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[47] = var4;
        var4 = {};
        var6 = 'getDefaultLayout';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16085: for (var _fun16085_ip = 0;;) switch (_fun16085_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isMediaChannel;
                    var1 = var1.bind(var0)();
                    if (var1) {
                        _fun16085_ip = 122;
                        continue _fun16085
                    }
                case 16:
                    var2 = var0.defaultForumLayout;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun16085_ip = 83;
                        continue _fun16085
                    }
                case 28:
                    var2 = var0.defaultForumLayout;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.ForumLayout;
                    var1 = var1.DEFAULT;
                    if (!(var2 !== var1)) {
                        _fun16085_ip = 83;
                        continue _fun16085
                    }
                case 75:
                    var0 = var0.defaultForumLayout;
                    _fun16085_ip = 120;
                    continue _fun16085;
                case 83:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ForumLayout;
                    var0 = var1.LIST;
                case 120:
                    _fun16085_ip = 159;
                    continue _fun16085;
                case 122:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ForumLayout;
                    var0 = var1.GRID;
                case 159:
                    return var0;
            }
        };
        var4.value = var6;
        var0[48] = var4;
        var4 = {};
        var6 = 'getDefaultTagSetting';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun16086: for (var _fun16086_ip = 0;;) switch (_fun16086_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.defaultTagSetting;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun16086_ip = 52;
                        continue _fun16086
                    }
                case 15:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ThreadSearchTagSetting;
                    var0 = var1.MATCH_SOME;
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[49] = var4;
        var4 = {};
        var6 = 'isModeratorReportChannel';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.hasFlag;
            var0 = _closure1_slot15;
            var0 = var0.IS_MODERATOR_REPORT_CHANNEL;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[50] = var4;
        var4 = {};
        var6 = 'accessPermissions';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var2 = _closure1_slot48;
            var0 = this;
            var1 = var0.type;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4.get = var6;
        var0[51] = var4;
        var4 = {};
        var6 = 'hasFlag';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hasFlag;
            var0 = this;
            var1 = var0.flags;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[52] = var4;
        var4 = {};
        var6 = 'isHDStreamSplashed';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            _fun16090: for (var _fun16090_ip = 0;;) switch (_fun16090_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.hdStreamingUntil;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun16090_ip = 82;
                        continue _fun16090
                    }
                case 18:
                    var1 = global;
                    var4 = var1.Date;
                    var5 = var2.hdStreamingUntil;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = var3;
                    var2 = new var6[var4](var5, var4);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1 = var1.Date;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var3;
                    var1 = new var6[var1](var5);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0 = var2 > var1;
                case 82:
                    return var0;
            }
        };
        var4.get = var5;
        var0[53] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var20 = var5.bind(var0)(var21);
    var5 = function(arg0) { // Environment: var4
        var4 = function(arg0) { // Original name: UnknownChannelRecord, environment: var1
            var1 = arg0;
            var5 = this;
            var2 = _closure1_slot8;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var0 = new Array(1);
            var0[0] = var1;
            var0 = var2.bind(var3)(var5, var4, var0);
            var2 = var1.application_id;
            var0.application_id = var2;
            var2 = var1.appliedTags;
            var0.appliedTags = var2;
            var2 = var1.availableTags;
            var0.availableTags = var2;
            var2 = var1.bitrate_;
            var0.bitrate_ = var2;
            var2 = var1.defaultAutoArchiveDuration;
            var0.defaultAutoArchiveDuration = var2;
            var2 = var1.defaultForumLayout;
            var0.defaultForumLayout = var2;
            var2 = var1.defaultReactionEmoji;
            var0.defaultReactionEmoji = var2;
            var2 = var1.defaultSortOrder;
            var0.defaultSortOrder = var2;
            var2 = var1.defaultTagSetting;
            var0.defaultTagSetting = var2;
            var2 = var1.defaultThreadRateLimitPerUser;
            var0.defaultThreadRateLimitPerUser = var2;
            var2 = var1.flags_;
            var0.flags_ = var2;
            var2 = var1.icon;
            var0.icon = var2;
            var2 = var1.iconEmoji;
            var0.iconEmoji = var2;
            var2 = var1.isMessageRequest;
            var0.isMessageRequest = var2;
            var2 = var1.isMessageRequestTimestamp;
            var0.isMessageRequestTimestamp = var2;
            var2 = var1.isSpam;
            var0.isSpam = var2;
            var2 = var1.lastMessageId;
            var0.lastMessageId = var2;
            var2 = var1.lastPinTimestamp;
            var0.lastPinTimestamp = var2;
            var2 = var1.member;
            var0.member = var2;
            var2 = var1.memberCount;
            var0.memberCount = var2;
            var2 = var1.memberIdsPreview;
            var0.memberIdsPreview = var2;
            var2 = var1.memberListId;
            var0.memberListId = var2;
            var2 = var1.messageCount;
            var0.messageCount = var2;
            var2 = var1.nicks;
            var0.nicks = var2;
            var2 = var1.nsfw_;
            var0.nsfw_ = var2;
            var2 = var1.originChannelId;
            var0.originChannelId = var2;
            var2 = var1.ownerId;
            var0.ownerId = var2;
            var2 = var1.parent_id;
            var0.parent_id = var2;
            var2 = var1.parentChannelThreadType;
            var0.parentChannelThreadType = var2;
            var2 = var1.permissionOverwrites_;
            var0.permissionOverwrites_ = var2;
            var2 = var1.position_;
            var0.position_ = var2;
            var2 = var1.rateLimitPerUser_;
            var0.rateLimitPerUser_ = var2;
            var2 = var1.rawRecipients;
            var0.rawRecipients = var2;
            var2 = var1.recipients;
            var0.recipients = var2;
            var2 = var1.recipientFlags;
            var0.recipientFlags = var2;
            var2 = var1.rtcRegion;
            var0.rtcRegion = var2;
            var2 = var1.safetyWarnings;
            var0.safetyWarnings = var2;
            var2 = var1.blockedUserWarningDismissed;
            var0.blockedUserWarningDismissed = var2;
            var2 = var1.template;
            var0.template = var2;
            var2 = var1.themeColor;
            var0.themeColor = var2;
            var2 = var1.threadMetadata;
            var0.threadMetadata = var2;
            var2 = var1.topic_;
            var0.topic_ = var2;
            var2 = var1.userLimit_;
            var0.userLimit_ = var2;
            var2 = var1.version;
            var0.version = var2;
            var2 = var1.videoQualityMode;
            var0.videoQualityMode = var2;
            var2 = var1.linkedLobby;
            var0.linkedLobby = var2;
            var2 = var1.hdStreamingUntil;
            var0.hdStreamingUntil = var2;
            var1 = var1.hdStreamingBuyerId;
            var0.hdStreamingBuyerId = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            _fun16093: for (var _fun16093_ip = 0;;) switch (_fun16093_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var3 = {};
                    var0 = var1.application_id;
                    var3.application_id = var0;
                    var0 = var1.applied_tags;
                    var3.appliedTags = var0;
                    var0 = var1.available_tags;
                    var5 = null;
                    var6 = var5 != var0;
                    var2 = undefined;
                    var0 = undefined;
                    if (!var6) {
                        _fun16093_ip = 67;
                        continue _fun16093
                    }
                case 49:
                    var7 = _closure1_slot46;
                    var6 = var1.available_tags;
                    var0 = var7.bind(var2)(var6);
                case 67:
                    var3.availableTags = var0;
                    var0 = var1.bitrate;
                    var3.bitrate_ = var0;
                    var0 = var1.default_auto_archive_duration;
                    var3.defaultAutoArchiveDuration = var0;
                    var0 = var1.default_forum_layout;
                    var3.defaultForumLayout = var0;
                    var0 = var1.default_reaction_emoji;
                    var6 = var5 != var0;
                    var0 = undefined;
                    if (!var6) {
                        _fun16093_ip = 179;
                        continue _fun16093
                    }
                case 120:
                    var6 = {};
                    var7 = var1.default_reaction_emoji;
                    var9 = var7.emoji_id;
                    var8 = 0;
                    var7 = undefined;
                    if (!(var8 !== var9)) {
                        _fun16093_ip = 154;
                        continue _fun16093
                    }
                case 142:
                    var8 = var1.default_reaction_emoji;
                    var7 = var8.emoji_id;
                case 154:
                    var6.emojiId = var7;
                    var7 = var1.default_reaction_emoji;
                    var7 = var7.emoji_name;
                    var6.emojiName = var7;
                    var0 = var6;
                case 179:
                    var3.defaultReactionEmoji = var0;
                    var0 = var1.default_sort_order;
                    var3.defaultSortOrder = var0;
                    var0 = var1.default_tag_setting;
                    var3.defaultTagSetting = var0;
                    var0 = var1.default_thread_rate_limit_per_user;
                    var3.defaultThreadRateLimitPerUser = var0;
                    var0 = var1.flags;
                    var3.flags_ = var0;
                    if (!(var5 == var4)) {
                        _fun16093_ip = 236;
                        continue _fun16093
                    }
                case 231:
                    var4 = var1.guild_id;
                case 236:
                    var6 = var5 != var4;
                    var0 = null;
                    if (!var6) {
                        _fun16093_ip = 248;
                        continue _fun16093
                    }
                case 245:
                    var0 = var4;
                case 248:
                    var3.guild_id = var0;
                    var0 = var1.icon;
                    var3.icon = var0;
                    var6 = _closure1_slot47;
                    var4 = var1.icon_emoji;
                    var4 = var6.bind(var2)(var4);
                    var3.iconEmoji = var4;
                    var4 = var1.id;
                    var3.id = var4;
                    var4 = var1.is_message_request;
                    var3.isMessageRequest = var4;
                    var4 = var1.is_message_request_timestamp;
                    var3.isMessageRequestTimestamp = var4;
                    var4 = var1.is_spam;
                    var3.isSpam = var4;
                    var4 = var1.last_message_id;
                    var3.lastMessageId = var4;
                    var4 = var1.last_pin_timestamp;
                    var3.lastPinTimestamp = var4;
                    var4 = var1.member;
                    var6 = var5 != var4;
                    var4 = undefined;
                    if (!var6) {
                        _fun16093_ip = 434;
                        continue _fun16093
                    }
                case 363:
                    var6 = {};
                    var7 = var1.member;
                    var7 = var7.flags;
                    var6.flags = var7;
                    var7 = var1.member;
                    var7 = var7.muted;
                    var6.muted = var7;
                    var7 = var1.member;
                    var7 = var7.mute_config;
                    var6.muteConfig = var7;
                    var7 = var1.member;
                    var7 = var7.join_timestamp;
                    var6.joinTimestamp = var7;
                    var4 = var6;
                case 434:
                    var3.member = var4;
                    var4 = var1.member_count;
                    var3.memberCount = var4;
                    var4 = var1.member_ids_preview;
                    var3.memberIdsPreview = var4;
                    var4 = var1.member_list_id;
                    var3.memberListId = var4;
                    var4 = var1.message_count;
                    var3.messageCount = var4;
                    var6 = var1.name;
                    var7 = var5 != var6;
                    var4 = '';
                    if (!var7) {
                        _fun16093_ip = 502;
                        continue _fun16093
                    }
                case 499:
                    var4 = var6;
                case 502:
                    var3.name = var4;
                    var6 = _closure1_slot45;
                    var4 = var1.nicks;
                    var4 = var6.bind(var2)(var4);
                    var3.nicks = var4;
                    var4 = var1.nsfw;
                    var3.nsfw_ = var4;
                    var4 = var1.origin_channel_id;
                    var3.originChannelId = var4;
                    var4 = var1.owner_id;
                    var3.ownerId = var4;
                    var4 = var1.parent_id;
                    var3.parent_id = var4;
                    var3.parentChannelThreadType = var2;
                    var6 = _closure1_slot44;
                    var4 = var1.permission_overwrites;
                    var4 = var6.bind(var2)(var4);
                    var3.permissionOverwrites_ = var4;
                    var4 = var1.position;
                    var3.position_ = var4;
                    var4 = var1.rate_limit_per_user;
                    var3.rateLimitPerUser_ = var4;
                    var4 = var1.recipients;
                    if (!(var5 == var4)) {
                        _fun16093_ip = 632;
                        continue _fun16093
                    }
                case 626:
                    var4 = new Array(0);
                    _fun16093_ip = 638;
                    continue _fun16093;
                case 632:
                    var4 = var1.recipients;
                case 638:
                    var3.rawRecipients = var4;
                    var4 = var1.recipients;
                    if (!(var5 == var4)) {
                        _fun16093_ip = 659;
                        continue _fun16093
                    }
                case 653:
                    var4 = new Array(0);
                    _fun16093_ip = 682;
                    continue _fun16093;
                case 659:
                    var8 = var1.recipients;
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var4 = var7.bind(var8)(var6);
                case 682:
                    var3.recipients = var4;
                    var4 = var1.recipient_flags;
                    var3.recipientFlags = var4;
                    var4 = var1.rtc_region;
                    var3.rtcRegion = var4;
                    var4 = var1.safety_warnings;
                    var3.safetyWarnings = var4;
                    var4 = var1.blocked_user_warning_dismissed;
                    var3.blockedUserWarningDismissed = var4;
                    var4 = var1.template;
                    var3.template = var4;
                    var4 = var1.theme_color;
                    var3.themeColor = var4;
                    var4 = var1.thread_metadata;
                    var6 = var5 != var4;
                    var4 = undefined;
                    if (!var6) {
                        _fun16093_ip = 885;
                        continue _fun16093
                    }
                case 768:
                    var6 = {};
                    var7 = var1.thread_metadata;
                    var7 = var7.archived;
                    var6.archived = var7;
                    var7 = var1.thread_metadata;
                    var7 = var7.auto_archive_duration;
                    var6.autoArchiveDuration = var7;
                    var7 = var1.thread_metadata;
                    var7 = var7.archive_timestamp;
                    var6.archiveTimestamp = var7;
                    var7 = var1.thread_metadata;
                    var7 = var7.create_timestamp;
                    var6.createTimestamp = var7;
                    var7 = var1.thread_metadata;
                    var7 = var7.locked;
                    var6.locked = var7;
                    var7 = var1.thread_metadata;
                    var8 = var7.invitable;
                    var7 = var5 == var8;
                    if (var7) {
                        _fun16093_ip = 877;
                        continue _fun16093
                    }
                case 874:
                    var7 = var8;
                case 877:
                    var6.invitable = var7;
                    var4 = var6;
                case 885:
                    var3.threadMetadata = var4;
                    var4 = var1.topic;
                    var3.topic_ = var4;
                    var4 = var1.total_message_sent;
                    var3.totalMessageSent = var4;
                    var4 = var1.type;
                    if (!(var5 == var4)) {
                        _fun16093_ip = 933;
                        continue _fun16093
                    }
                case 921:
                    var4 = _closure1_slot11;
                    var4 = var4.UNKNOWN;
                    _fun16093_ip = 938;
                    continue _fun16093;
                case 933:
                    var4 = var1.type;
                case 938:
                    var3.type = var4;
                    var4 = var1.user_limit;
                    var3.userLimit_ = var4;
                    var4 = var1.version;
                    var3.version = var4;
                    var4 = var1.video_quality_mode;
                    var3.videoQualityMode = var4;
                    var4 = var1.linked_lobby;
                    var3.linkedLobby = var4;
                    var4 = var1.hd_streaming_until;
                    var3.hdStreamingUntil = var4;
                    var1 = var1.hd_streaming_buyer_id;
                    var3.hdStreamingBuyerId = var1;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 15;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dangerouslyCast;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var19 = var5.bind(var0)(var20);
    var _closure1_slot31 = var19;
    var5 = function(arg0) { // Environment: var4
        var4 = function(arg0) { // Original name: GuildVocalChannelRecord, environment: var1
            _fun16096: for (var _fun16096_ip = 0;;) switch (_fun16096_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var2 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var5, var4);
                    var2 = _closure1_slot36;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var2 = var1.application_id;
                    var0.application_id = var2;
                    var2 = var1.bitrate_;
                    var0.bitrate_ = var2;
                    var2 = var1.flags_;
                    var0.flags_ = var2;
                    var2 = var1.iconEmoji;
                    var0.iconEmoji = var2;
                    var2 = var1.lastMessageId;
                    var0.lastMessageId = var2;
                    var2 = var1.lastPinTimestamp;
                    var0.lastPinTimestamp = var2;
                    var2 = var1.memberListId;
                    var0.memberListId = var2;
                    var2 = var1.nsfw_;
                    var0.nsfw_ = var2;
                    var2 = var1.originChannelId;
                    var0.originChannelId = var2;
                    var2 = var1.parent_id;
                    var0.parent_id = var2;
                    var2 = var1.permissionOverwrites_;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun16096_ip = 181;
                        continue _fun16096
                    }
                case 179:
                    var2 = {};
                case 181:
                    var0.permissionOverwrites_ = var2;
                    var2 = var1.position_;
                    var0.position_ = var2;
                    var2 = var1.rateLimitPerUser_;
                    var0.rateLimitPerUser_ = var2;
                    var2 = var1.rtcRegion;
                    var0.rtcRegion = var2;
                    var2 = var1.themeColor;
                    var0.themeColor = var2;
                    var2 = var1.topic_;
                    var0.topic_ = var2;
                    var2 = var1.userLimit_;
                    var0.userLimit_ = var2;
                    var2 = var1.version;
                    var0.version = var2;
                    var2 = var1.videoQualityMode;
                    var0.videoQualityMode = var2;
                    var2 = var1.hdStreamingUntil;
                    var0.hdStreamingUntil = var2;
                    var1 = var1.hdStreamingBuyerId;
                    var0.hdStreamingBuyerId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            _fun16097: for (var _fun16097_ip = 0;;) switch (_fun16097_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var2 = _closure1_slot50;
                    var1 = {};
                    var0 = var3.application_id;
                    var1.application_id = var0;
                    var0 = var3.bitrate;
                    var1.bitrate_ = var0;
                    var0 = var3.flags;
                    var1.flags_ = var0;
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun16097_ip = 58;
                        continue _fun16097
                    }
                case 53:
                    var5 = var3.guild_id;
                case 58:
                    var7 = var6 != var5;
                    var0 = null;
                    if (!var7) {
                        _fun16097_ip = 70;
                        continue _fun16097
                    }
                case 67:
                    var0 = var5;
                case 70:
                    var1.guild_id = var0;
                    var7 = _closure1_slot47;
                    var5 = var3.icon_emoji;
                    var0 = undefined;
                    var5 = var7.bind(var0)(var5);
                    var1.iconEmoji = var5;
                    var5 = var3.id;
                    var1.id = var5;
                    var5 = var3.last_message_id;
                    var1.lastMessageId = var5;
                    var5 = var3.last_pin_timestamp;
                    var1.lastPinTimestamp = var5;
                    var5 = var3.member_list_id;
                    var1.memberListId = var5;
                    var7 = var3.name;
                    var8 = var6 != var7;
                    var5 = '';
                    if (!var8) {
                        _fun16097_ip = 157;
                        continue _fun16097
                    }
                case 154:
                    var5 = var7;
                case 157:
                    var1.name = var5;
                    var7 = var3.nsfw;
                    var5 = var6 != var7;
                    if (!var5) {
                        _fun16097_ip = 177;
                        continue _fun16097
                    }
                case 174:
                    var5 = var7;
                case 177:
                    var1.nsfw_ = var5;
                    var5 = var3.origin_channel_id;
                    var1.originChannelId = var5;
                    var5 = var3.parent_id;
                    var1.parent_id = var5;
                    var7 = _closure1_slot44;
                    var5 = var3.permission_overwrites;
                    var5 = var7.bind(var0)(var5);
                    var1.permissionOverwrites_ = var5;
                    var5 = var3.position;
                    var1.position_ = var5;
                    var7 = var3.rate_limit_per_user;
                    var8 = var6 != var7;
                    var5 = 0;
                    if (!var8) {
                        _fun16097_ip = 252;
                        continue _fun16097
                    }
                case 249:
                    var5 = var7;
                case 252:
                    var1.rateLimitPerUser_ = var5;
                    var5 = var3.rtc_region;
                    var1.rtcRegion = var5;
                    var5 = var3.theme_color;
                    var1.themeColor = var5;
                    var5 = var3.topic;
                    var1.topic_ = var5;
                    var5 = var3.type;
                    if (!(var6 == var5)) {
                        _fun16097_ip = 311;
                        continue _fun16097
                    }
                case 299:
                    var4 = _closure1_slot11;
                    var4 = var4.GUILD_VOICE;
                    _fun16097_ip = 316;
                    continue _fun16097;
                case 311:
                    var4 = var3.type;
                case 316:
                    var1.type = var4;
                    var4 = var3.user_limit;
                    var1.userLimit_ = var4;
                    var4 = var3.version;
                    var1.version = var4;
                    var4 = var3.video_quality_mode;
                    var1.videoQualityMode = var4;
                    var4 = var3.hd_streaming_until;
                    var1.hdStreamingUntil = var4;
                    var3 = var3.hd_streaming_buyer_id;
                    var1.hdStreamingBuyerId = var3;
                    var0 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var18 = var5.bind(var0)(var20);
    var5 = function(arg0) { // Environment: var4
        var4 = function(arg0) { // Original name: GuildTextualChannelRecord, environment: var1
            _fun16099: for (var _fun16099_ip = 0;;) switch (_fun16099_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var2 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var5, var4);
                    var2 = _closure1_slot36;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var2 = var1.application_id;
                    var0.application_id = var2;
                    var2 = var1.defaultAutoArchiveDuration;
                    var0.defaultAutoArchiveDuration = var2;
                    var2 = var1.defaultThreadRateLimitPerUser;
                    var0.defaultThreadRateLimitPerUser = var2;
                    var2 = var1.flags_;
                    var0.flags_ = var2;
                    var2 = var1.iconEmoji;
                    var0.iconEmoji = var2;
                    var2 = var1.lastMessageId;
                    var0.lastMessageId = var2;
                    var2 = var1.lastPinTimestamp;
                    var0.lastPinTimestamp = var2;
                    var2 = var1.memberListId;
                    var0.memberListId = var2;
                    var2 = var1.nsfw_;
                    var0.nsfw_ = var2;
                    var2 = var1.parent_id;
                    var0.parent_id = var2;
                    var2 = var1.permissionOverwrites_;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun16099_ip = 181;
                        continue _fun16099
                    }
                case 179:
                    var2 = {};
                case 181:
                    var0.permissionOverwrites_ = var2;
                    var2 = var1.position_;
                    var0.position_ = var2;
                    var2 = var1.rateLimitPerUser_;
                    var0.rateLimitPerUser_ = var2;
                    var2 = var1.themeColor;
                    var0.themeColor = var2;
                    var2 = var1.topic_;
                    var0.topic_ = var2;
                    var2 = var1.version;
                    var0.version = var2;
                    var2 = var1.linkedLobby;
                    var0.linkedLobby = var2;
                    var2 = var1.hdStreamingBuyerId;
                    var0.hdStreamingBuyerId = var2;
                    var1 = var1.hdStreamingUntil;
                    var0.hdStreamingUntil = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            _fun16100: for (var _fun16100_ip = 0;;) switch (_fun16100_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var2 = _closure1_slot50;
                    var1 = {};
                    var0 = var3.application_id;
                    var1.application_id = var0;
                    var0 = var3.default_auto_archive_duration;
                    var1.defaultAutoArchiveDuration = var0;
                    var0 = var3.default_thread_rate_limit_per_user;
                    var1.defaultThreadRateLimitPerUser = var0;
                    var0 = var3.flags;
                    var1.flags_ = var0;
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun16100_ip = 69;
                        continue _fun16100
                    }
                case 64:
                    var5 = var3.guild_id;
                case 69:
                    var7 = var6 != var5;
                    var0 = null;
                    if (!var7) {
                        _fun16100_ip = 81;
                        continue _fun16100
                    }
                case 78:
                    var0 = var5;
                case 81:
                    var1.guild_id = var0;
                    var7 = _closure1_slot47;
                    var5 = var3.icon_emoji;
                    var0 = undefined;
                    var5 = var7.bind(var0)(var5);
                    var1.iconEmoji = var5;
                    var5 = var3.id;
                    var1.id = var5;
                    var5 = var3.last_message_id;
                    var1.lastMessageId = var5;
                    var5 = var3.last_pin_timestamp;
                    var1.lastPinTimestamp = var5;
                    var5 = var3.member_list_id;
                    var1.memberListId = var5;
                    var7 = var3.name;
                    var8 = var6 != var7;
                    var5 = '';
                    if (!var8) {
                        _fun16100_ip = 168;
                        continue _fun16100
                    }
                case 165:
                    var5 = var7;
                case 168:
                    var1.name = var5;
                    var7 = var3.nsfw;
                    var5 = var6 != var7;
                    if (!var5) {
                        _fun16100_ip = 188;
                        continue _fun16100
                    }
                case 185:
                    var5 = var7;
                case 188:
                    var1.nsfw_ = var5;
                    var5 = var3.parent_id;
                    var1.parent_id = var5;
                    var7 = _closure1_slot44;
                    var5 = var3.permission_overwrites;
                    var5 = var7.bind(var0)(var5);
                    var1.permissionOverwrites_ = var5;
                    var5 = var3.position;
                    var1.position_ = var5;
                    var7 = var3.rate_limit_per_user;
                    var8 = var6 != var7;
                    var5 = 0;
                    if (!var8) {
                        _fun16100_ip = 252;
                        continue _fun16100
                    }
                case 249:
                    var5 = var7;
                case 252:
                    var1.rateLimitPerUser_ = var5;
                    var5 = var3.theme_color;
                    var1.themeColor = var5;
                    var5 = var3.topic;
                    var1.topic_ = var5;
                    var5 = var3.type;
                    if (!(var6 == var5)) {
                        _fun16100_ip = 300;
                        continue _fun16100
                    }
                case 288:
                    var4 = _closure1_slot11;
                    var4 = var4.GUILD_TEXT;
                    _fun16100_ip = 305;
                    continue _fun16100;
                case 300:
                    var4 = var3.type;
                case 305:
                    var1.type = var4;
                    var4 = var3.linked_lobby;
                    var1.linkedLobby = var4;
                    var4 = var3.hd_streaming_until;
                    var1.hdStreamingUntil = var4;
                    var4 = var3.hd_streaming_buyer_id;
                    var1.hdStreamingBuyerId = var4;
                    var3 = var3.version;
                    var1.version = var3;
                    var0 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var17 = var5.bind(var0)(var20);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildAnnouncementChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var16 = var5.bind(var0)(var17);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildCategoryChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var15 = var5.bind(var0)(var17);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildDirectoryChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var14 = var5.bind(var0)(var17);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildStageVoiceChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var13 = var5.bind(var0)(var18);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildStoreChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var12 = var5.bind(var0)(var17);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildTextChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var11 = var5.bind(var0)(var17);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GuildVoiceChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var10 = var5.bind(var0)(var18);
    var5 = function(arg0) { // Environment: var4
        var4 = function(arg0) { // Original name: ForumChannelRecord, environment: var1
            _fun16116: for (var _fun16116_ip = 0;;) switch (_fun16116_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var2 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var5, var4);
                    var2 = _closure1_slot36;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var2 = var1.availableTags;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun16116_ip = 63;
                        continue _fun16116
                    }
                case 59:
                    var2 = new Array(0);
                case 63:
                    var0.availableTags = var2;
                    var2 = var1.defaultAutoArchiveDuration;
                    var0.defaultAutoArchiveDuration = var2;
                    var2 = var1.defaultForumLayout;
                    var0.defaultForumLayout = var2;
                    var2 = var1.defaultReactionEmoji;
                    var0.defaultReactionEmoji = var2;
                    var2 = var1.defaultSortOrder;
                    var0.defaultSortOrder = var2;
                    var2 = var1.defaultTagSetting;
                    var0.defaultTagSetting = var2;
                    var2 = var1.defaultThreadRateLimitPerUser;
                    var0.defaultThreadRateLimitPerUser = var2;
                    var2 = var1.flags_;
                    var0.flags_ = var2;
                    var2 = var1.iconEmoji;
                    var0.iconEmoji = var2;
                    var2 = var1.lastMessageId;
                    var0.lastMessageId = var2;
                    var2 = var1.lastPinTimestamp;
                    var0.lastPinTimestamp = var2;
                    var2 = var1.memberListId;
                    var0.memberListId = var2;
                    var2 = var1.nsfw_;
                    var0.nsfw_ = var2;
                    var2 = var1.parent_id;
                    var0.parent_id = var2;
                    var2 = var1.permissionOverwrites_;
                    if (!(var3 == var2)) {
                        _fun16116_ip = 237;
                        continue _fun16116
                    }
                case 235:
                    var2 = {};
                case 237:
                    var0.permissionOverwrites_ = var2;
                    var2 = var1.position_;
                    var0.position_ = var2;
                    var2 = var1.rateLimitPerUser_;
                    var0.rateLimitPerUser_ = var2;
                    var2 = var1.template;
                    var0.template = var2;
                    var2 = var1.themeColor;
                    var0.themeColor = var2;
                    var2 = var1.topic_;
                    var0.topic_ = var2;
                    var1 = var1.version;
                    var0.version = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            _fun16117: for (var _fun16117_ip = 0;;) switch (_fun16117_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var3 = {};
                    var0 = var1.available_tags;
                    var5 = null;
                    if (!(var5 == var0)) {
                        _fun16117_ip = 26;
                        continue _fun16117
                    }
                case 20:
                    var0 = new Array(0);
                    _fun16117_ip = 46;
                    continue _fun16117;
                case 26:
                    var7 = _closure1_slot46;
                    var6 = var1.available_tags;
                    var2 = undefined;
                    var0 = var7.bind(var2)(var6);
                case 46:
                    var3.availableTags = var0;
                    var0 = var1.default_auto_archive_duration;
                    var3.defaultAutoArchiveDuration = var0;
                    var0 = var1.default_forum_layout;
                    var3.defaultForumLayout = var0;
                    var0 = var1.default_reaction_emoji;
                    var6 = var5 != var0;
                    var2 = undefined;
                    var0 = undefined;
                    if (!var6) {
                        _fun16117_ip = 149;
                        continue _fun16117
                    }
                case 90:
                    var6 = {};
                    var7 = var1.default_reaction_emoji;
                    var9 = var7.emoji_id;
                    var8 = 0;
                    var7 = undefined;
                    if (!(var8 !== var9)) {
                        _fun16117_ip = 124;
                        continue _fun16117
                    }
                case 112:
                    var8 = var1.default_reaction_emoji;
                    var7 = var8.emoji_id;
                case 124:
                    var6.emojiId = var7;
                    var7 = var1.default_reaction_emoji;
                    var7 = var7.emoji_name;
                    var6.emojiName = var7;
                    var0 = var6;
                case 149:
                    var3.defaultReactionEmoji = var0;
                    var0 = var1.default_sort_order;
                    var3.defaultSortOrder = var0;
                    var0 = var1.default_tag_setting;
                    var3.defaultTagSetting = var0;
                    var0 = var1.default_thread_rate_limit_per_user;
                    var3.defaultThreadRateLimitPerUser = var0;
                    var0 = var1.flags;
                    var3.flags_ = var0;
                    if (!(var5 == var4)) {
                        _fun16117_ip = 206;
                        continue _fun16117
                    }
                case 201:
                    var4 = var1.guild_id;
                case 206:
                    var6 = var5 != var4;
                    var0 = null;
                    if (!var6) {
                        _fun16117_ip = 218;
                        continue _fun16117
                    }
                case 215:
                    var0 = var4;
                case 218:
                    var3.guild_id = var0;
                    var6 = _closure1_slot47;
                    var4 = var1.icon_emoji;
                    var4 = var6.bind(var2)(var4);
                    var3.iconEmoji = var4;
                    var4 = var1.id;
                    var3.id = var4;
                    var4 = var1.last_message_id;
                    var3.lastMessageId = var4;
                    var4 = var1.last_pin_timestamp;
                    var3.lastPinTimestamp = var4;
                    var4 = var1.member_list_id;
                    var3.memberListId = var4;
                    var6 = var1.name;
                    var7 = var5 != var6;
                    var4 = '';
                    if (!var7) {
                        _fun16117_ip = 306;
                        continue _fun16117
                    }
                case 303:
                    var4 = var6;
                case 306:
                    var3.name = var4;
                    var6 = var1.nsfw;
                    var4 = var5 != var6;
                    if (!var4) {
                        _fun16117_ip = 326;
                        continue _fun16117
                    }
                case 323:
                    var4 = var6;
                case 326:
                    var3.nsfw_ = var4;
                    var4 = var1.parent_id;
                    var3.parent_id = var4;
                    var6 = _closure1_slot44;
                    var4 = var1.permission_overwrites;
                    var4 = var6.bind(var2)(var4);
                    var3.permissionOverwrites_ = var4;
                    var4 = var1.position;
                    var3.position_ = var4;
                    var6 = var1.rate_limit_per_user;
                    var7 = var5 != var6;
                    var4 = 0;
                    if (!var7) {
                        _fun16117_ip = 390;
                        continue _fun16117
                    }
                case 387:
                    var4 = var6;
                case 390:
                    var3.rateLimitPerUser_ = var4;
                    var4 = var1.template;
                    var3.template = var4;
                    var4 = var1.theme_color;
                    var3.themeColor = var4;
                    var4 = var1.topic;
                    var3.topic_ = var4;
                    var4 = var1.type;
                    if (!(var5 == var4)) {
                        _fun16117_ip = 449;
                        continue _fun16117
                    }
                case 437:
                    var4 = _closure1_slot11;
                    var4 = var4.GUILD_TEXT;
                    _fun16117_ip = 454;
                    continue _fun16117;
                case 449:
                    var4 = var1.type;
                case 454:
                    var3.type = var4;
                    var1 = var1.version;
                    var3.version = var1;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 15;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dangerouslyCast;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var9 = var5.bind(var0)(var20);
    var5 = function() { // Environment: var4
        var3 = _closure1_slot7;
        var2 = function() { // Original name: IdAsNumberCache, environment: var1
            _fun16119: for (var _fun16119_ip = 0;;) switch (_fun16119_ip) {
                case 0:
                    var4 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun16119_ip = 15;
                        continue _fun16119
                    }
                case 12:
                    var4 = 100;
                case 15:
                    var5 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var0)(var2, var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 16;
                    var1 = var5[var1];
                    var1 = var3.bind(var0)(var1);
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var8 = var3;
                    var7 = var4;
                    var1 = new var8[var1](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.cache = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'getOrCompute';
        var0.key = var4;
        var1 = function(arg0) { // Original name: value, environment: var1
            _fun16120: for (var _fun16120_ip = 0;;) switch (_fun16120_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var1 = var2.cache;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun16120_ip = 66;
                        continue _fun16120
                    }
                case 28:
                    var1 = global;
                    var5 = var1.parseInt;
                    var3 = undefined;
                    var1 = 10;
                    var1 = var5.bind(var3)(var4, var1);
                    var3 = var2.cache;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 66:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var6 = var5.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var59 = var7;
    var6 = new var59[var5](var58);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot32 = var6;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var59 = var6;
    var5 = new var59[var5](var58);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot33 = var5;
    var5 = function(arg0) { // Environment: var4
        var4 = function(arg0) { // Original name: PrivateChannelRecord, environment: var6
            _fun16122: for (var _fun16122_ip = 0;;) switch (_fun16122_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot8;
                    var6 = _closure2_slot0;
                    var7 = undefined;
                    var0 = var0.bind(var7)(var4, var6);
                    var3 = _closure1_slot36;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var0 = var3.bind(var7)(var4, var6, var0);
                    var3 = var1.application_id;
                    var0.application_id = var3;
                    var3 = var1.flags_;
                    var0.flags_ = var3;
                    var3 = var1.icon;
                    var0.icon = var3;
                    var3 = var1.isMessageRequest;
                    var0.isMessageRequest = var3;
                    var3 = var1.isMessageRequestTimestamp;
                    var0.isMessageRequestTimestamp = var3;
                    var3 = var1.isSpam;
                    var0.isSpam = var3;
                    var3 = var1.lastMessageId;
                    var0.lastMessageId = var3;
                    var3 = var1.lastPinTimestamp;
                    var0.lastPinTimestamp = var3;
                    var3 = var1.nicks;
                    var0.nicks = var3;
                    var3 = var1.ownerId;
                    var0.ownerId = var3;
                    var5 = var6.sortRecipients;
                    var4 = var1.rawRecipients;
                    var3 = var0.id;
                    var3 = var5.bind(var6)(var4, var3);
                    var0.rawRecipients = var3;
                    var6 = var1.recipients;
                    var3 = null;
                    if (!(var3 == var6)) {
                        _fun16122_ip = 211;
                        continue _fun16122
                    }
                case 207:
                    var6 = new Array(0);
                case 211:
                    var5 = new Array(0);
                    var9 = 0;
                    var11 = var5;
                    var10 = var6;
                    var4 = arraySpread(var11, var10, var9);
                    var4 = var5.sort;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var2 = 17;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.compare;
                    var2 = var4.bind(var5)(var2);
                    var0.recipients = var2;
                    var2 = var1.recipientFlags;
                    var0.recipientFlags = var2;
                    var2 = var1.safetyWarnings;
                    if (!(var3 == var2)) {
                        _fun16122_ip = 296;
                        continue _fun16122
                    }
                case 292:
                    var2 = new Array(0);
                case 296:
                    var0.safetyWarnings = var2;
                    var1 = var1.blockedUserWarningDismissed;
                    var0.blockedUserWarningDismissed = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot6;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot7;
        var0 = {};
        var1 = 'isSystemDM';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var6
            _fun16123: for (var _fun16123_ip = 0;;) switch (_fun16123_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.rawRecipients;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = var0.type;
                    var0 = _closure1_slot11;
                    var0 = var0.DM;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun16123_ip = 46;
                        continue _fun16123
                    }
                case 40:
                    var2 = null;
                    var0 = var2 != var1;
                case 46:
                    if (!var0) {
                        _fun16123_ip = 61;
                        continue _fun16123
                    }
                case 49:
                    var2 = var1.system;
                    var1 = true;
                    var0 = var1 === var2;
                case 61:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'getRecipientId';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var1 = var0.recipients;
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'addRecipient';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun16125: for (var _fun16125_ip = 0;;) switch (_fun16125_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var6 = this;
                    var0 = arg2;
                    if (!(var5 === var0)) {
                        _fun16125_ip = 18;
                        continue _fun16125
                    }
                case 16:
                    return var6;
                case 18:
                    var4 = var6.set;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 9;
                    var2 = var7[var2];
                    var9 = undefined;
                    var8 = var3.bind(var9)(var2);
                    var7 = var8.uniq;
                    var11 = var6.recipients;
                    var2 = null;
                    if (!(var2 == var11)) {
                        _fun16125_ip = 70;
                        continue _fun16125
                    }
                case 66:
                    var11 = new Array(0);
                case 70:
                    var3 = new Array(1);
                    var12 = 0;
                    var14 = var3;
                    var13 = var11;
                    var11 = arraySpread(var14, var13, var12);
                    var3[var11] = var5;
                    var10 = 1;
                    var10 = var11 + var10;
                    var7 = var7.bind(var8)(var3);
                    var3 = var7.sort;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var0 = 17;
                    var0 = var10[var0];
                    var0 = var8.bind(var9)(var0);
                    var0 = var0.compare;
                    var3 = var3.bind(var7)(var0);
                    var0 = 'recipients';
                    var4 = var4.bind(var6)(var0, var3);
                    var0 = var4;
                    if (!(var2 != var1)) {
                        _fun16125_ip = 192;
                        continue _fun16125
                    }
                case 157:
                    var3 = var4.set;
                    var2 = {};
                    var13 = var4.nicks;
                    var14 = var2;
                    var6 = copyDataProperties(var14, var13);
                    var2[var5] = var1;
                    var1 = 'nicks';
                    var0 = var3.bind(var4)(var1, var2);
                case 192:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'removeRecipient';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var3 = this;
            var2 = var3.set;
            var4 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var1);
            var4 = var5.without;
            var1 = var3.recipients;
            var0 = arg0;
            var1 = var4.bind(var5)(var1, var0);
            var0 = 'recipients';
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var5 = {};
        var0 = 'sortRecipients';
        var5.key = var0;
        var0 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun16127: for (var _fun16127_ip = 0;;) switch (_fun16127_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot32;
                    var2 = var4.getOrCompute;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    var _closure3_slot0 = var1;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun16127_ip = 40;
                        continue _fun16127
                    }
                case 36:
                    var3 = new Array(0);
                case 40:
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var6 = var3;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot33;
                        var1 = var3.getOrCompute;
                        var0 = arg0;
                        var0 = var0.id;
                        var1 = var1.bind(var3)(var0);
                        var2 = var3.getOrCompute;
                        var0 = arg1;
                        var0 = var0.id;
                        var2 = var2.bind(var3)(var0);
                        var0 = _closure3_slot0;
                        var1 = var1 ^ var0;
                        var0 = var2 ^ var0;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(2);
        var0[0] = var5;
        var5 = {};
        var7 = 'fromServer';
        var5.key = var7;
        var6 = function(arg0) { // Original name: value, environment: var6
            _fun16129: for (var _fun16129_ip = 0;;) switch (_fun16129_ip) {
                case 0:
                    var5 = arg0;
                    var4 = _closure2_slot0;
                    var3 = var4.sortRecipients;
                    var2 = var5.recipients;
                    var1 = var5.id;
                    var8 = var3.bind(var4)(var2, var1);
                    var3 = {};
                    var1 = var5.application_id;
                    var3.application_id = var1;
                    var1 = var5.flags;
                    var3.flags_ = var1;
                    var6 = null;
                    var3.guild_id = var6;
                    var1 = var5.icon;
                    var3.icon = var1;
                    var1 = var5.id;
                    var3.id = var1;
                    var1 = var5.is_message_request;
                    var3.isMessageRequest = var1;
                    var1 = var5.is_message_request_timestamp;
                    var3.isMessageRequestTimestamp = var1;
                    var2 = var5.is_spam;
                    var1 = var6 != var2;
                    if (!var1) {
                        _fun16129_ip = 118;
                        continue _fun16129
                    }
                case 115:
                    var1 = var2;
                case 118:
                    var3.isSpam = var1;
                    var1 = var5.last_message_id;
                    var3.lastMessageId = var1;
                    var1 = var5.last_pin_timestamp;
                    var3.lastPinTimestamp = var1;
                    var2 = var5.name;
                    var4 = var6 != var2;
                    var1 = '';
                    if (!var4) {
                        _fun16129_ip = 164;
                        continue _fun16129
                    }
                case 161:
                    var1 = var2;
                case 164:
                    var3.name = var1;
                    var7 = _closure1_slot45;
                    var2 = var5.nicks;
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3.nicks = var2;
                    var2 = var5.owner_id;
                    var3.ownerId = var2;
                    var3.rawRecipients = var8;
                    var7 = var8.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var7.bind(var8)(var2);
                    var3.recipients = var2;
                    var2 = var5.recipient_flags;
                    var3.recipientFlags = var2;
                    var2 = var5.safety_warnings;
                    var3.safetyWarnings = var2;
                    var2 = var5.blocked_user_warning_dismissed;
                    var3.blockedUserWarningDismissed = var2;
                    var2 = var5.type;
                    if (!(var6 == var2)) {
                        _fun16129_ip = 285;
                        continue _fun16129
                    }
                case 273:
                    var2 = _closure1_slot11;
                    var2 = var2.DM;
                    _fun16129_ip = 290;
                    continue _fun16129;
                case 285:
                    var2 = var5.type;
                case 290:
                    var3.type = var2;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 15;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.dangerouslyCast;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var8 = var5.bind(var0)(var20);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: DMChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var7 = var5.bind(var0)(var8);
    var5 = function(arg0) { // Environment: var4
        var2 = function() { // Original name: GroupDMChannelRecord, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot8;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot36;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var6 = var5.bind(var0)(var8);
    var5 = function(arg0) { // Environment: var4
        var4 = function(arg0) { // Original name: ThreadChannelRecord, environment: var1
            _fun16136: for (var _fun16136_ip = 0;;) switch (_fun16136_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var2 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var5, var4);
                    var2 = _closure1_slot36;
                    var0 = new Array(1);
                    var0[0] = var1;
                    var0 = var2.bind(var3)(var5, var4, var0);
                    var2 = var1.appliedTags;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun16136_ip = 63;
                        continue _fun16136
                    }
                case 59:
                    var2 = new Array(0);
                case 63:
                    var0.appliedTags = var2;
                    var2 = var1.bitrate_;
                    var0.bitrate_ = var2;
                    var2 = var1.flags_;
                    var0.flags_ = var2;
                    var2 = var1.lastMessageId;
                    var0.lastMessageId = var2;
                    var2 = var1.lastPinTimestamp;
                    var0.lastPinTimestamp = var2;
                    var2 = var1.member;
                    var0.member = var2;
                    var2 = var1.memberCount;
                    var0.memberCount = var2;
                    var2 = var1.memberIdsPreview;
                    var0.memberIdsPreview = var2;
                    var2 = var1.messageCount;
                    var0.messageCount = var2;
                    var2 = var1.nsfw_;
                    var0.nsfw_ = var2;
                    var2 = var1.ownerId;
                    var0.ownerId = var2;
                    var2 = var1.parent_id;
                    var0.parent_id = var2;
                    var2 = var1.parentChannelThreadType;
                    var0.parentChannelThreadType = var2;
                    var2 = var1.rateLimitPerUser_;
                    var0.rateLimitPerUser_ = var2;
                    var2 = var1.rtcRegion;
                    var0.rtcRegion = var2;
                    var2 = var1.threadMetadata;
                    var0.threadMetadata = var2;
                    var2 = var1.userLimit_;
                    var0.userLimit_ = var2;
                    var1 = var1.videoQualityMode;
                    var0.videoQualityMode = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            _fun16137: for (var _fun16137_ip = 0;;) switch (_fun16137_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var3 = {};
                    var1 = var0.applied_tags;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun16137_ip = 24;
                        continue _fun16137
                    }
                case 20:
                    var1 = new Array(0);
                case 24:
                    var3.appliedTags = var1;
                    var1 = var0.bitrate;
                    var3.bitrate_ = var1;
                    var1 = var0.flags;
                    var3.flags_ = var1;
                    if (!(var4 == var2)) {
                        _fun16137_ip = 59;
                        continue _fun16137
                    }
                case 54:
                    var2 = var0.guild_id;
                case 59:
                    var5 = var4 != var2;
                    var1 = null;
                    if (!var5) {
                        _fun16137_ip = 71;
                        continue _fun16137
                    }
                case 68:
                    var1 = var2;
                case 71:
                    var3.guild_id = var1;
                    var1 = var0.id;
                    var3.id = var1;
                    var1 = var0.last_message_id;
                    var3.lastMessageId = var1;
                    var1 = var0.last_pin_timestamp;
                    var3.lastPinTimestamp = var1;
                    var1 = var0.member;
                    var5 = var4 != var1;
                    var2 = undefined;
                    var1 = undefined;
                    if (!var5) {
                        _fun16137_ip = 194;
                        continue _fun16137
                    }
                case 123:
                    var5 = {};
                    var6 = var0.member;
                    var6 = var6.flags;
                    var5.flags = var6;
                    var6 = var0.member;
                    var6 = var6.muted;
                    var5.muted = var6;
                    var6 = var0.member;
                    var6 = var6.mute_config;
                    var5.muteConfig = var6;
                    var6 = var0.member;
                    var6 = var6.join_timestamp;
                    var5.joinTimestamp = var6;
                    var1 = var5;
                case 194:
                    var3.member = var1;
                    var1 = var0.member_count;
                    var3.memberCount = var1;
                    var1 = var0.member_ids_preview;
                    var3.memberIdsPreview = var1;
                    var1 = var0.message_count;
                    var3.messageCount = var1;
                    var5 = var0.name;
                    var6 = var4 != var5;
                    var1 = '';
                    if (!var6) {
                        _fun16137_ip = 251;
                        continue _fun16137
                    }
                case 248:
                    var1 = var5;
                case 251:
                    var3.name = var1;
                    var5 = var0.nsfw;
                    var1 = var4 != var5;
                    if (!var1) {
                        _fun16137_ip = 271;
                        continue _fun16137
                    }
                case 268:
                    var1 = var5;
                case 271:
                    var3.nsfw_ = var1;
                    var1 = var0.owner_id;
                    var3.ownerId = var1;
                    var1 = var0.parent_id;
                    var3.parent_id = var1;
                    var1 = var0.parentChannelThreadType;
                    var3.parentChannelThreadType = var1;
                    var1 = var0.rate_limit_per_user;
                    var3.rateLimitPerUser_ = var1;
                    var1 = var0.rtc_region;
                    var3.rtcRegion = var1;
                    var1 = var0.thread_metadata;
                    var5 = var4 != var1;
                    var1 = undefined;
                    if (!var5) {
                        _fun16137_ip = 463;
                        continue _fun16137
                    }
                case 346:
                    var5 = {};
                    var6 = var0.thread_metadata;
                    var6 = var6.archived;
                    var5.archived = var6;
                    var6 = var0.thread_metadata;
                    var6 = var6.auto_archive_duration;
                    var5.autoArchiveDuration = var6;
                    var6 = var0.thread_metadata;
                    var6 = var6.archive_timestamp;
                    var5.archiveTimestamp = var6;
                    var6 = var0.thread_metadata;
                    var6 = var6.create_timestamp;
                    var5.createTimestamp = var6;
                    var6 = var0.thread_metadata;
                    var6 = var6.locked;
                    var5.locked = var6;
                    var6 = var0.thread_metadata;
                    var7 = var6.invitable;
                    var6 = var4 == var7;
                    if (var6) {
                        _fun16137_ip = 455;
                        continue _fun16137
                    }
                case 452:
                    var6 = var7;
                case 455:
                    var5.invitable = var6;
                    var1 = var5;
                case 463:
                    var3.threadMetadata = var1;
                    var1 = var0.total_message_sent;
                    var3.totalMessageSent = var1;
                    var1 = var0.type;
                    if (!(var4 == var1)) {
                        _fun16137_ip = 503;
                        continue _fun16137
                    }
                case 488:
                    var1 = _closure1_slot11;
                    var1 = var1.PUBLIC_THREAD;
                    _fun16137_ip = 508;
                    continue _fun16137;
                case 503:
                    var1 = var0.type;
                case 508:
                    var3.type = var1;
                    var1 = var0.user_limit;
                    var3.userLimit_ = var1;
                    var0 = var0.video_quality_mode;
                    var3.videoQualityMode = var0;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 15;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dangerouslyCast;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var5 = var5.bind(var0)(var20);
    var50 = {};
    var55 = var53.DM;
    var54 = var8.fromServer;
    var50[var55] = var54;
    var55 = var53.GROUP_DM;
    var54 = var8.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_TEXT;
    var54 = var17.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_VOICE;
    var54 = var18.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_STAGE_VOICE;
    var54 = var18.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_CATEGORY;
    var54 = var17.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_ANNOUNCEMENT;
    var54 = var17.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_STORE;
    var54 = var17.fromServer;
    var50[var55] = var54;
    var55 = var53.ANNOUNCEMENT_THREAD;
    var54 = var5.fromServer;
    var50[var55] = var54;
    var55 = var53.PUBLIC_THREAD;
    var54 = var5.fromServer;
    var50[var55] = var54;
    var55 = var53.PRIVATE_THREAD;
    var54 = var5.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_DIRECTORY;
    var54 = var17.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_FORUM;
    var54 = var9.fromServer;
    var50[var55] = var54;
    var55 = var53.GUILD_MEDIA;
    var54 = var9.fromServer;
    var50[var55] = var54;
    var _closure1_slot34 = var50;
    var50 = {};
    var54 = var53.DM;
    var50[var54] = var7;
    var54 = var53.GROUP_DM;
    var50[var54] = var6;
    var54 = var53.GUILD_TEXT;
    var50[var54] = var11;
    var54 = var53.GUILD_VOICE;
    var50[var54] = var10;
    var54 = var53.GUILD_STAGE_VOICE;
    var50[var54] = var13;
    var54 = var53.GUILD_CATEGORY;
    var50[var54] = var15;
    var54 = var53.GUILD_ANNOUNCEMENT;
    var50[var54] = var16;
    var54 = var53.GUILD_STORE;
    var50[var54] = var12;
    var54 = var53.ANNOUNCEMENT_THREAD;
    var50[var54] = var5;
    var54 = var53.PUBLIC_THREAD;
    var50[var54] = var5;
    var54 = var53.PRIVATE_THREAD;
    var50[var54] = var5;
    var54 = var53.GUILD_DIRECTORY;
    var50[var54] = var14;
    var54 = var53.GUILD_FORUM;
    var50[var54] = var9;
    var53 = var53.GUILD_MEDIA;
    var50[var53] = var9;
    var _closure1_slot35 = var50;
    var50 = 18;
    var50 = var52[var50];
    var52 = var51.bind(var0)(var50);
    var51 = var52.fileFinishedImporting;
    var50 = 'records/ChannelRecord.tsx';
    var50 = var51.bind(var52)(var50);
    var50 = function(arg0) { // Original name: isGuildSelectableChannelType, environment: var4
        var2 = _closure1_slot16;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isGuildSelectableChannelType = var50;
    var2.ALL_CHANNEL_TYPES = var49;
    var49 = function(arg0) { // Original name: isGuildTextChannelType, environment: var4
        var2 = _closure1_slot17;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isGuildTextChannelType = var49;
    var2.GUILD_WEBHOOK_CHANNEL_TYPES = var48;
    var2.GUILD_CHANNEL_TYPES = var47;
    var47 = function(arg0) { // Original name: isGuildChannelType, environment: var4
        var2 = _closure1_slot18;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isGuildChannelType = var47;
    var2.GUILD_CAN_CONTAIN_THREADS_CHANNEL_TYPES = var46;
    var2.GUILD_VOCAL_CHANNEL_TYPES = var45;
    var2.isGuildVocalChannelType = var44;
    var44 = function(arg0) { // Original name: isGuildVocalChannelOrVocalThreadType, environment: var4
        _fun16141: for (var _fun16141_ip = 0;;) switch (_fun16141_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot38;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun16141_ip = 29;
                    continue _fun16141
                }
            case 20:
                var1 = _closure1_slot43;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.isGuildVocalChannelOrVocalThreadType = var44;
    var2.SILENT_JOIN_LEAVE_CHANNEL_TYPES = var43;
    var2.isPrivate = var42;
    var2.isMultiUserDM = var41;
    var2.TEXT_CHANNEL_TYPES = var40;
    var40 = function(arg0) { // Original name: isTextChannel, environment: var4
        var2 = _closure1_slot22;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isTextChannel = var40;
    var2.isVoiceChannel = var39;
    var39 = function(arg0) { // Original name: isGuildReadableType, environment: var4
        var2 = _closure1_slot24;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isGuildReadableType = var39;
    var2.THREAD_CHANNEL_TYPES = var38;
    var2.VOCAL_THREAD_CHANNEL_TYPES = var37;
    var2.THREADED_CHANNEL_TYPES = var36;
    var2.isThread = var35;
    var2.isVocalThreadType = var34;
    var34 = function(arg0) { // Original name: isReadableType, environment: var4
        var2 = _closure1_slot27;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isReadableType = var34;
    var2.GUILD_NON_CATEGORY_CHANNEL_TYPES = var33;
    var2.EDITABLE_CHANNEL_TYPES = var32;
    var2.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES = var31;
    var2.TOPIC_CHANNEL_TYPES = var30;
    var2.NSFW_CHANNEL_TYPES = var29;
    var2.CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES = var28;
    var2.SLOWMODE_CHANNEL_TYPES = var27;
    var2.EDITABLE_VOICE_SETTINGS_TYPES = var26;
    var2.VOICE_THREAD_PARENT_CHANNEL_TYPES = var25;
    var2.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING = var24;
    var2.GUILD_FAVORITES_CHANNEL_TYPES = var23;
    var2.getAccessPermissions = var22;
    var22 = function(arg0) { // Original name: getBasicAccessPermissions, environment: var4
        _fun16145: for (var _fun16145_ip = 0;;) switch (_fun16145_ip) {
            case 0:
                var3 = _closure1_slot38;
                var2 = undefined;
                var0 = arg0;
                var0 = var3.bind(var2)(var0);
                if (var0) {
                    _fun16145_ip = 32;
                    continue _fun16145
                }
            case 20:
                var0 = _closure1_slot12;
                var0 = var0.VIEW_CHANNEL;
                _fun16145_ip = 36;
                continue _fun16145;
            case 32:
                var0 = _closure1_slot29;
            case 36:
                return var0;
        }
    };
    var2.getBasicAccessPermissions = var22;
    var2.ChannelRecordProperties = var21;
    var2.ChannelRecordBase = var20;
    var2.UnknownChannelRecord = var19;
    var2.GuildVocalChannelRecord = var18;
    var2.GuildTextualChannelRecord = var17;
    var2.GuildAnnouncementChannelRecord = var16;
    var2.GuildCategoryChannelRecord = var15;
    var2.GuildDirectoryChannelRecord = var14;
    var2.GuildStageVoiceChannelRecord = var13;
    var2.GuildStoreChannelRecord = var12;
    var2.GuildTextChannelRecord = var11;
    var2.GuildVoiceChannelRecord = var10;
    var2.ForumChannelRecord = var9;
    var2.PrivateChannelRecord = var8;
    var2.DMChannelRecord = var7;
    var2.GroupDMChannelRecord = var6;
    var2.ThreadChannelRecord = var5;
    var5 = function(arg0, arg1) { // Original name: createChannelRecordFromServer, environment: var4
        _fun16146: for (var _fun16146_ip = 0;;) switch (_fun16146_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot34;
                var2 = var3.type;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun16146_ip = 31;
                    continue _fun16146
                }
            case 21:
                var5 = _closure1_slot11;
                var2 = var5.GUILD_TEXT;
            case 31:
                var2 = var4[var2];
                if (!(var1 == var2)) {
                    _fun16146_ip = 49;
                    continue _fun16146
                }
            case 39:
                var0 = _closure1_slot31;
                var2 = var0.fromServer;
            case 49:
                var1 = undefined;
                var0 = arg1;
                var0 = var2.bind(var1)(var3, var0);
                return var0;
        }
    };
    var2.createChannelRecordFromServer = var5;
    var4 = function(arg0) { // Original name: createChannelRecordFromInvite, environment: var4
        var2 = _closure1_slot51;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.createChannelRecordFromInvite = var4;
    var2.castChannelRecord = var3;
    var2.createChannelRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 7, 6, 1377, 660, 1379, 484, 22, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 21, 2]);