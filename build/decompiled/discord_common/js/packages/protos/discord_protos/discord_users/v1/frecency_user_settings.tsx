// ../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var18 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var19 = dependencyMap;
    var _closure1_slot0 = var18;
    var _closure1_slot1 = var19;
    var0 = function arg0, arg1, arg2() {
        _fun15080: for (var _fun15080_ip = 0;;) switch (_fun15080_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot23;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun15080_ip = 51;
                    continue _fun15080
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun15080_ip = 92;
                continue _fun15080;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun15080_ip = 71;
                    continue _fun15080
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun15081: for (var _fun15081_ip = 0;;) switch (_fun15081_ip) {
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
                _fun15081_ip = 74;
                continue _fun15081;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var5 = 0;
    var1 = var19[var5];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var4 = 1;
    var1 = var19[var4];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var3 = 2;
    var1 = var19[var3];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var19[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var19[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var19[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var16 = {};
    var16.NONE = var5;
    var1 = 'NONE';
    var16[var5] = var1;
    var16.IMAGE = var4;
    var1 = 'IMAGE';
    var16[var4] = var1;
    var16.VIDEO = var3;
    var1 = 'VIDEO';
    var16[var3] = var1;
    var _closure1_slot8 = var16;
    var1 = 7;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'versions',
                'kind': 'message'
            };
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Versions;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(13);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'favorite_gifs',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot9;
                return var0;
            };
            var0.T = var7;
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'favorite_stickers',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot11;
                return var0;
            };
            var0.T = var7;
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'sticker_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot12;
                return var0;
            };
            var0.T = var7;
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'favorite_emojis',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot13;
                return var0;
            };
            var0.T = var7;
            var5[4] = var0;
            var0 = {
                'no': 6,
                'name': 'emoji_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot14;
                return var0;
            };
            var0.T = var7;
            var5[5] = var0;
            var0 = {
                'no': 7,
                'name': 'application_command_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot15;
                return var0;
            };
            var0.T = var7;
            var5[6] = var0;
            var0 = {
                'no': 8,
                'name': 'favorite_soundboard_sounds',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot17;
                return var0;
            };
            var0.T = var7;
            var5[7] = var0;
            var0 = {
                'no': 9,
                'name': 'application_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot20;
                return var0;
            };
            var0.T = var7;
            var5[8] = var0;
            var0 = {
                'no': 10,
                'name': 'heard_sound_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot18;
                return var0;
            };
            var0.T = var7;
            var5[9] = var0;
            var0 = {
                'no': 11,
                'name': 'played_sound_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot19;
                return var0;
            };
            var0.T = var7;
            var5[10] = var0;
            var0 = {
                'no': 12,
                'name': 'guild_and_channel_frecency',
                'kind': 'message'
            };
            var7 = function() {
                var0 = _closure1_slot21;
                return var0;
            };
            var0.T = var7;
            var5[11] = var0;
            var0 = {
                'no': 13,
                'name': 'emoji_reaction_frecency',
                'kind': 'message'
            };
            var6 = function() {
                var0 = _closure1_slot14;
                return var0;
            };
            var0.T = var6;
            var5[12] = var0;
            var0 = ['discord_protos.discord_users.v1.FrecencyUserSettings'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15099: for (var _fun15099_ip = 0;;) switch (_fun15099_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15099_ip = 110;
                        continue _fun15099
                    }
                case 80:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 110:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15100: for (var _fun15100_ip = 0;;) switch (_fun15100_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun15100_ip = 27;
                        continue _fun15100
                    }
                case 18:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 27:
                    var3 = var19.pos;
                    var2 = arg1;
                    var17 = var3 + var2;
                    var2 = var19.pos;
                    var2 = var2 < var17;
                    var16 = undefined;
                    var14 = 7;
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = 6;
                    var9 = 2;
                    var8 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15100_ip = 989;
                        continue _fun15100
                    }
                case 85:
                    var2 = var19.tag;
                    var6 = var2.bind(var19)();
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var16)(var6, var9);
                    var7 = var2[var8];
                    var6 = var2[var5];
                    SwitchImm(value_reg = 7, jump_table_address = 1071, default_jump_address = 874, unsigned_min_value = 1, unsigned_max_value = 13) // Switch table: [802, 746, 690, 634, 578, 522, 466, 410, 354, 298, 242, 186, 130];
                case 130:
                    var22 = _closure1_slot14;
                    var21 = var22.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.emojiReactionFrecency;
                    var31 = var22;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var21](var30, var29, var28, var27, var26);
                    var0.emojiReactionFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 186:
                    var24 = _closure1_slot21;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.guildAndChannelFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.guildAndChannelFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 242:
                    var24 = _closure1_slot19;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.playedSoundFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.playedSoundFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 298:
                    var24 = _closure1_slot18;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.heardSoundFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.heardSoundFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 354:
                    var24 = _closure1_slot20;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.applicationFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.applicationFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 410:
                    var24 = _closure1_slot17;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.favoriteSoundboardSounds;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.favoriteSoundboardSounds = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 466:
                    var24 = _closure1_slot15;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.applicationCommandFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.applicationCommandFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 522:
                    var24 = _closure1_slot14;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.emojiFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.emojiFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 578:
                    var24 = _closure1_slot13;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.favoriteEmojis;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.favoriteEmojis = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 634:
                    var24 = _closure1_slot12;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.stickerFrecency;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.stickerFrecency = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 690:
                    var24 = _closure1_slot11;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.favoriteStickers;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.favoriteStickers = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 746:
                    var24 = _closure1_slot9;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.favoriteGifs;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.favoriteGifs = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 802:
                    var22 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var10];
                    var2 = var22.bind(var16)(var2);
                    var24 = var2.Versions;
                    var23 = var24.internalBinaryRead;
                    var2 = var19.uint32;
                    var29 = var2.bind(var19)();
                    var27 = var0.versions;
                    var31 = var24;
                    var30 = var19;
                    var28 = var18;
                    var2 = var31[var23](var30, var29, var28, var27, var26);
                    var0.versions = var2;
                    var21 = var4;
                    var20 = var3;
                    _fun15100_ip = 971;
                    continue _fun15100;
                case 874:
                    var22 = var18.readUnknownField;
                    if (!(var11 !== var22)) {
                        _fun15100_ip = 991;
                        continue _fun15100
                    }
                case 884:
                    var2 = var19.skip;
                    var2 = var2.bind(var19)(var6);
                    var21 = var22;
                    var20 = var2;
                    if (!(var12 !== var22)) {
                        _fun15100_ip = 971;
                        continue _fun15100
                    }
                case 905:
                    var24 = var22;
                    if (!(var13 === var22)) {
                        _fun15100_ip = 941;
                        continue _fun15100
                    }
                case 912:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var14];
                    var23 = var25.bind(var16)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 941:
                    var30 = var1.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var7;
                    var27 = var6;
                    var26 = var2;
                    var23 = var31[var24](var30, var29, var28, var27, var26, var25);
                    var21 = var22;
                    var20 = var2;
                case 971:
                    var2 = var19.pos;
                    var4 = var21;
                    var3 = var20;
                    if (var2 < var17) {
                        _fun15100_ip = 85;
                        continue _fun15100
                    }
                case 989:
                    return var0;
                case 991:
                    var0 = global;
                    var2 = var0.globalThis;
                    var2 = var2.Error;
                    var26 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var7;
                    var28 = var6;
                    var30 = var31[var4](var30, var29, var28, var27, var26, var25);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var31 = var1;
                    var0 = new var31[var2](var30, var29);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15101: for (var _fun15101_ip = 0;;) switch (_fun15101_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.versions;
                    if (!var2) {
                        _fun15101_ip = 124;
                        continue _fun15101
                    }
                case 18:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 6;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.Versions;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.versions;
                    var8 = var0.tag;
                    var2 = 7;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 1;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 124:
                    var2 = var4.favoriteGifs;
                    if (!var2) {
                        _fun15101_ip = 225;
                        continue _fun15101
                    }
                case 133:
                    var6 = _closure1_slot9;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.favoriteGifs;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 225:
                    var2 = var4.favoriteStickers;
                    if (!var2) {
                        _fun15101_ip = 326;
                        continue _fun15101
                    }
                case 234:
                    var6 = _closure1_slot11;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.favoriteStickers;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 3;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 326:
                    var2 = var4.stickerFrecency;
                    if (!var2) {
                        _fun15101_ip = 427;
                        continue _fun15101
                    }
                case 335:
                    var6 = _closure1_slot12;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.stickerFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 4;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 427:
                    var2 = var4.favoriteEmojis;
                    if (!var2) {
                        _fun15101_ip = 528;
                        continue _fun15101
                    }
                case 436:
                    var6 = _closure1_slot13;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.favoriteEmojis;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 5;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 528:
                    var2 = var4.emojiFrecency;
                    if (!var2) {
                        _fun15101_ip = 629;
                        continue _fun15101
                    }
                case 537:
                    var6 = _closure1_slot14;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.emojiFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 6;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 629:
                    var2 = var4.applicationCommandFrecency;
                    if (!var2) {
                        _fun15101_ip = 727;
                        continue _fun15101
                    }
                case 638:
                    var6 = _closure1_slot15;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.applicationCommandFrecency;
                    var8 = var0.tag;
                    var10 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 7;
                    var9 = var2[var7];
                    var2 = undefined;
                    var2 = var10.bind(var2)(var9);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var7 = var8.bind(var0)(var7, var2);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 727:
                    var2 = var4.favoriteSoundboardSounds;
                    if (!var2) {
                        _fun15101_ip = 828;
                        continue _fun15101
                    }
                case 736:
                    var6 = _closure1_slot17;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.favoriteSoundboardSounds;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 8;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 828:
                    var2 = var4.applicationFrecency;
                    if (!var2) {
                        _fun15101_ip = 929;
                        continue _fun15101
                    }
                case 837:
                    var6 = _closure1_slot20;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.applicationFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 9;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 929:
                    var2 = var4.heardSoundFrecency;
                    if (!var2) {
                        _fun15101_ip = 1030;
                        continue _fun15101
                    }
                case 938:
                    var6 = _closure1_slot18;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.heardSoundFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 10;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1030:
                    var2 = var4.playedSoundFrecency;
                    if (!var2) {
                        _fun15101_ip = 1131;
                        continue _fun15101
                    }
                case 1039:
                    var6 = _closure1_slot19;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.playedSoundFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 11;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1131:
                    var2 = var4.guildAndChannelFrecency;
                    if (!var2) {
                        _fun15101_ip = 1232;
                        continue _fun15101
                    }
                case 1140:
                    var6 = _closure1_slot21;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.guildAndChannelFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 12;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1232:
                    var2 = var4.emojiReactionFrecency;
                    if (!var2) {
                        _fun15101_ip = 1333;
                        continue _fun15101
                    }
                case 1241:
                    var6 = _closure1_slot14;
                    var5 = var6.internalBinaryWrite;
                    var3 = var4.emojiReactionFrecency;
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var7 = var7[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var7);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 13;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1333:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15101_ip = 1407;
                        continue _fun15101
                    }
                case 1345:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15101_ip = 1389;
                        continue _fun15101
                    }
                case 1352:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 1389:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 1407:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var15 = var3 instanceof Object ? var3 : var4;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'gifs',
                'kind': 'map',
                'K': 9
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot10;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'hide_tooltip',
                'kind': 'scalar',
                'T': 8
            };
            var5[1] = var0;
            var0 = ['discord_protos.discord_users.v1.FavoriteGIFs'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15105: for (var _fun15105_ip = 0;;) switch (_fun15105_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.gifs = var1;
                    var10 = false;
                    var0.hideTooltip = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15105_ip = 122;
                        continue _fun15105
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15106: for (var _fun15106_ip = 0;;) switch (_fun15106_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15106_ip = 27;
                        continue _fun15106
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15106_ip = 375;
                        continue _fun15106
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var4];
                    var24 = var1[var5];
                    if (!(var5 !== var25)) {
                        _fun15106_ip = 332;
                        continue _fun15106
                    }
                case 116:
                    if (!(var6 !== var25)) {
                        _fun15106_ip = 308;
                        continue _fun15106
                    }
                case 123:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15106_ip = 228;
                        continue _fun15106
                    }
                case 133:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15106_ip = 357;
                        continue _fun15106
                    }
                case 157:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15106_ip = 193;
                        continue _fun15106
                    }
                case 164:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 193:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15106_ip = 357;
                    continue _fun15106;
                case 228:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 308:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.hideTooltip = var1;
                    var18 = var3;
                    var17 = var2;
                    _fun15106_ip = 357;
                    continue _fun15106;
                case 332:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.gifs;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 357:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15106_ip = 82;
                        continue _fun15106
                    }
                case 375:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15107: for (var _fun15107_ip = 0;;) switch (_fun15107_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15107_ip = 199;
                        continue _fun15107
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15107_ip = 166;
                        continue _fun15107
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15107_ip = 137;
                        continue _fun15107
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot10;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15107_ip = 178;
                    continue _fun15107;
                case 166:
                    var2 = var12.string;
                    var6 = var2.bind(var12)();
                    var13 = var4;
                case 178:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15107_ip = 61;
                        continue _fun15107
                    }
                case 199:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '';
                    if (!var6) {
                        _fun15107_ip = 215;
                        continue _fun15107
                    }
                case 212:
                    var2 = var5;
                case 215:
                    if (!(var4 == var3)) {
                        _fun15107_ip = 232;
                        continue _fun15107
                    }
                case 219:
                    var4 = _closure1_slot10;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 232:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15108: for (var _fun15108_ip = 0;;) switch (_fun15108_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.gifs;
                    var9 = var3.bind(var5)(var1);
                    var1 = var9.length;
                    var8 = 0;
                    var7 = var8 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var10 = 2;
                    if (!var7) {
                        _fun15108_ip = 259;
                        continue _fun15108
                    }
                case 64:
                    var13 = var9[var8];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.string;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var10, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot10;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.gifs;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var8 = var8 + 1;
                    var7 = var9.length;
                    if (var8 < var7) {
                        _fun15108_ip = 64;
                        continue _fun15108
                    }
                case 259:
                    var8 = var4.hideTooltip;
                    var7 = false;
                    if (!(var7 !== var8)) {
                        _fun15108_ip = 327;
                        continue _fun15108
                    }
                case 271:
                    var9 = var0.tag;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var6];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.WireType;
                    var8 = var8.Varint;
                    var10 = var9.bind(var0)(var10, var8);
                    var9 = var10.bool;
                    var8 = var4.hideTooltip;
                    var8 = var9.bind(var10)(var8);
                case 327:
                    var2 = var2.writeUnknownFields;
                    if (!(var7 !== var2)) {
                        _fun15108_ip = 386;
                        continue _fun15108
                    }
                case 337:
                    if (!(var5 == var2)) {
                        _fun15108_ip = 370;
                        continue _fun15108
                    }
                case 341:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 370:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 386:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var14 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot9 = var14;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'format',
                'kind': 'enum'
            };
            var5 = function() {
                var1 = _closure1_slot8;
                var0 = ['discord_protos.discord_users.v1.GIFType'];
                var0[1] = var1;
                return var0;
            };
            var0.T = var5;
            var5 = new Array(5);
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'src',
                'kind': 'scalar',
                'T': 9
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'width',
                'kind': 'scalar',
                'T': 13
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'height',
                'kind': 'scalar',
                'T': 13
            };
            var5[3] = var0;
            var0 = {
                'no': 5,
                'name': 'order',
                'kind': 'scalar',
                'T': 13
            };
            var5[4] = var0;
            var0 = ['discord_protos.discord_users.v1.FavoriteGIF'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15112: for (var _fun15112_ip = 0;;) switch (_fun15112_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'format': 0,
                        'src': '',
                        'width': 0,
                        'height': 0,
                        'order': 0
                    };
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15112_ip = 122;
                        continue _fun15112
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 122:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15113: for (var _fun15113_ip = 0;;) switch (_fun15113_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var17 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15113_ip = 27;
                        continue _fun15113
                    }
                case 18:
                    var1 = var17.create;
                    var0 = var1.bind(var17)();
                case 27:
                    var2 = var19.pos;
                    var1 = arg1;
                    var16 = var2 + var1;
                    var1 = var19.pos;
                    var1 = var1 < var16;
                    var15 = undefined;
                    var13 = 7;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 5;
                    var8 = 4;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = 0;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15113_ip = 473;
                        continue _fun15113
                    }
                case 91:
                    var1 = var19.tag;
                    var20 = var1.bind(var19)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var15)(var20, var6);
                    var28 = var1[var4];
                    var27 = var1[var5];
                    if (!(var5 !== var28)) {
                        _fun15113_ip = 433;
                        continue _fun15113
                    }
                case 125:
                    if (!(var6 !== var28)) {
                        _fun15113_ip = 410;
                        continue _fun15113
                    }
                case 132:
                    if (!(var7 !== var28)) {
                        _fun15113_ip = 386;
                        continue _fun15113
                    }
                case 139:
                    if (!(var8 !== var28)) {
                        _fun15113_ip = 362;
                        continue _fun15113
                    }
                case 146:
                    if (!(var9 !== var28)) {
                        _fun15113_ip = 338;
                        continue _fun15113
                    }
                case 153:
                    var22 = var18.readUnknownField;
                    if (!(var10 !== var22)) {
                        _fun15113_ip = 258;
                        continue _fun15113
                    }
                case 163:
                    var1 = var19.skip;
                    var1 = var1.bind(var19)(var27);
                    var21 = var22;
                    var20 = var1;
                    if (!(var11 !== var22)) {
                        _fun15113_ip = 455;
                        continue _fun15113
                    }
                case 187:
                    var24 = var22;
                    if (!(var12 === var22)) {
                        _fun15113_ip = 223;
                        continue _fun15113
                    }
                case 194:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var13];
                    var23 = var25.bind(var15)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 223:
                    var33 = var17.typeName;
                    var34 = undefined;
                    var32 = var0;
                    var31 = var28;
                    var30 = var27;
                    var29 = var1;
                    var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                    var21 = var22;
                    var20 = var1;
                    _fun15113_ip = 455;
                    continue _fun15113;
                case 258:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var29 = var17.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var34 = 'Unknown field ';
                    var32 = ' (wire type ';
                    var30 = ') for ';
                    var33 = var28;
                    var31 = var27;
                    var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var34 = var22;
                    var1 = new var34[var23](var33, var32);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 338:
                    var1 = var19.uint32;
                    var1 = var1.bind(var19)();
                    var0.order = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun15113_ip = 455;
                    continue _fun15113;
                case 362:
                    var1 = var19.uint32;
                    var1 = var1.bind(var19)();
                    var0.height = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun15113_ip = 455;
                    continue _fun15113;
                case 386:
                    var1 = var19.uint32;
                    var1 = var1.bind(var19)();
                    var0.width = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun15113_ip = 455;
                    continue _fun15113;
                case 410:
                    var1 = var19.string;
                    var1 = var1.bind(var19)();
                    var0.src = var1;
                    var21 = var3;
                    var20 = var2;
                    _fun15113_ip = 455;
                    continue _fun15113;
                case 433:
                    var1 = var19.int32;
                    var1 = var1.bind(var19)();
                    var0.format = var1;
                    var21 = var3;
                    var20 = var2;
                case 455:
                    var1 = var19.pos;
                    var3 = var21;
                    var2 = var20;
                    if (var1 < var16) {
                        _fun15113_ip = 91;
                        continue _fun15113
                    }
                case 473:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15114: for (var _fun15114_ip = 0;;) switch (_fun15114_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.format;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun15114_ip = 83;
                        continue _fun15114
                    }
                case 17:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.format;
                    var1 = var3.bind(var5)(var1);
                case 83:
                    var3 = var4.src;
                    var1 = '';
                    if (!(var1 !== var3)) {
                        _fun15114_ip = 163;
                        continue _fun15114
                    }
                case 97:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 2;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.string;
                    var1 = var4.src;
                    var1 = var3.bind(var5)(var1);
                case 163:
                    var1 = var4.width;
                    if (!(var2 !== var1)) {
                        _fun15114_ip = 238;
                        continue _fun15114
                    }
                case 172:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 3;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.uint32;
                    var1 = var4.width;
                    var1 = var3.bind(var5)(var1);
                case 238:
                    var1 = var4.height;
                    if (!(var2 !== var1)) {
                        _fun15114_ip = 313;
                        continue _fun15114
                    }
                case 247:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 4;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.uint32;
                    var1 = var4.height;
                    var1 = var3.bind(var5)(var1);
                case 313:
                    var1 = var4.order;
                    if (!(var2 !== var1)) {
                        _fun15114_ip = 390;
                        continue _fun15114
                    }
                case 323:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 5;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.uint32;
                    var1 = var4.order;
                    var1 = var2.bind(var3)(var1);
                case 390:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15114_ip = 467;
                        continue _fun15114
                    }
                case 405:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15114_ip = 449;
                        continue _fun15114
                    }
                case 412:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 449:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 467:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var13 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot10 = var13;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'sticker_ids',
                'kind': 'scalar',
                'repeat': 1,
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.FavoriteStickers'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15117: for (var _fun15117_ip = 0;;) switch (_fun15117_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.stickerIds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15117_ip = 119;
                        continue _fun15117
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15118: for (var _fun15118_ip = 0;;) switch (_fun15118_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15118_ip = 27;
                        continue _fun15118
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 7;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15118_ip = 498;
                        continue _fun15118
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun15118_ip = 309;
                        continue _fun15118
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun15118_ip = 229;
                        continue _fun15118
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun15118_ip = 477;
                        continue _fun15118
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun15118_ip = 191;
                        continue _fun15118
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun15118_ip = 477;
                    continue _fun15118;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun15118_ip = 387;
                        continue _fun15118
                    }
                case 341:
                    var22 = var0.stickerIds;
                    var21 = var22.push;
                    var1 = var17.fixed64;
                    var23 = var1.bind(var17)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun15118_ip = 477;
                    continue _fun15118;
                case 387:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun15118_ip = 477;
                        continue _fun15118
                    }
                case 424:
                    var23 = var0.stickerIds;
                    var22 = var23.push;
                    var1 = var17.fixed64;
                    var24 = var1.bind(var17)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun15118_ip = 424;
                        continue _fun15118
                    }
                case 477:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun15118_ip = 84;
                        continue _fun15118
                    }
                case 498:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15119: for (var _fun15119_ip = 0;;) switch (_fun15119_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.stickerIds;
                    var1 = var1.length;
                    if (!var1) {
                        _fun15119_ip = 151;
                        continue _fun15119
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.stickerIds;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun15119_ip = 142;
                        continue _fun15119
                    }
                case 103:
                    var3 = var0.fixed64;
                    var1 = var4.stickerIds;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.stickerIds;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun15119_ip = 103;
                        continue _fun15119
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15119_ip = 228;
                        continue _fun15119
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15119_ip = 210;
                        continue _fun15119
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var12 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot11 = var12;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'stickers',
                'kind': 'map',
                'K': 6
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.StickerFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15123: for (var _fun15123_ip = 0;;) switch (_fun15123_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.stickers = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15123_ip = 117;
                        continue _fun15123
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15124: for (var _fun15124_ip = 0;;) switch (_fun15124_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15124_ip = 27;
                        continue _fun15124
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15124_ip = 341;
                        continue _fun15124
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15124_ip = 298;
                        continue _fun15124
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15124_ip = 218;
                        continue _fun15124
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15124_ip = 323;
                        continue _fun15124
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15124_ip = 186;
                        continue _fun15124
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15124_ip = 323;
                    continue _fun15124;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.stickers;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15124_ip = 82;
                        continue _fun15124
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15125: for (var _fun15125_ip = 0;;) switch (_fun15125_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15125_ip = 209;
                        continue _fun15125
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15125_ip = 166;
                        continue _fun15125
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15125_ip = 137;
                        continue _fun15125
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15125_ip = 188;
                    continue _fun15125;
                case 166:
                    var2 = var12.fixed64;
                    var14 = var2.bind(var12)();
                    var2 = var14.toString;
                    var6 = var2.bind(var14)();
                    var13 = var4;
                case 188:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15125_ip = 61;
                        continue _fun15125
                    }
                case 209:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '0';
                    if (!var6) {
                        _fun15125_ip = 227;
                        continue _fun15125
                    }
                case 224:
                    var2 = var5;
                case 227:
                    if (!(var4 == var3)) {
                        _fun15125_ip = 244;
                        continue _fun15125
                    }
                case 231:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 244:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15126: for (var _fun15126_ip = 0;;) switch (_fun15126_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.stickers;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15126_ip = 260;
                        continue _fun15126
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.Bit64;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.fixed64;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.stickers;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15126_ip = 64;
                        continue _fun15126
                    }
                case 260:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15126_ip = 321;
                        continue _fun15126
                    }
                case 272:
                    if (!(var5 == var2)) {
                        _fun15126_ip = 305;
                        continue _fun15126
                    }
                case 276:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 305:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 321:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var11 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot12 = var11;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'emojis',
                'kind': 'scalar',
                'repeat': 2,
                'T': 9
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.FavoriteEmojis'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15129: for (var _fun15129_ip = 0;;) switch (_fun15129_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.emojis = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15129_ip = 119;
                        continue _fun15129
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15130: for (var _fun15130_ip = 0;;) switch (_fun15130_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15130_ip = 27;
                        continue _fun15130
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15130_ip = 347;
                        continue _fun15130
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15130_ip = 298;
                        continue _fun15130
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15130_ip = 218;
                        continue _fun15130
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15130_ip = 329;
                        continue _fun15130
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15130_ip = 186;
                        continue _fun15130
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15130_ip = 329;
                    continue _fun15130;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var20 = var0.emojis;
                    var19 = var20.push;
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var1 = var19.bind(var20)(var1);
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15130_ip = 82;
                        continue _fun15130
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15131: for (var _fun15131_ip = 0;;) switch (_fun15131_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.emojis;
                    var1 = var1.length;
                    var7 = 0;
                    var2 = var7 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    if (!var2) {
                        _fun15131_ip = 114;
                        continue _fun15131
                    }
                case 37:
                    var8 = var0.tag;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var9.bind(var3)(var2);
                    var2 = var2.WireType;
                    var2 = var2.LengthDelimited;
                    var9 = var8.bind(var0)(var5, var2);
                    var8 = var9.string;
                    var2 = var4.emojis;
                    var2 = var2[var7];
                    var2 = var8.bind(var9)(var2);
                    var7 = var7 + 1;
                    var2 = var4.emojis;
                    var2 = var2.length;
                    if (var7 < var2) {
                        _fun15131_ip = 37;
                        continue _fun15131
                    }
                case 114:
                    var2 = arg2;
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15131_ip = 178;
                        continue _fun15131
                    }
                case 129:
                    if (!(var5 == var2)) {
                        _fun15131_ip = 162;
                        continue _fun15131
                    }
                case 133:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 162:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 178:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var10 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot13 = var10;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'emojis',
                'kind': 'map',
                'K': 9
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.EmojiFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15135: for (var _fun15135_ip = 0;;) switch (_fun15135_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.emojis = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15135_ip = 117;
                        continue _fun15135
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15136: for (var _fun15136_ip = 0;;) switch (_fun15136_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15136_ip = 27;
                        continue _fun15136
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15136_ip = 341;
                        continue _fun15136
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15136_ip = 298;
                        continue _fun15136
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15136_ip = 218;
                        continue _fun15136
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15136_ip = 323;
                        continue _fun15136
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15136_ip = 186;
                        continue _fun15136
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15136_ip = 323;
                    continue _fun15136;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.emojis;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15136_ip = 82;
                        continue _fun15136
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15137: for (var _fun15137_ip = 0;;) switch (_fun15137_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15137_ip = 199;
                        continue _fun15137
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15137_ip = 166;
                        continue _fun15137
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15137_ip = 137;
                        continue _fun15137
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15137_ip = 178;
                    continue _fun15137;
                case 166:
                    var2 = var12.string;
                    var6 = var2.bind(var12)();
                    var13 = var4;
                case 178:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15137_ip = 61;
                        continue _fun15137
                    }
                case 199:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '';
                    if (!var6) {
                        _fun15137_ip = 215;
                        continue _fun15137
                    }
                case 212:
                    var2 = var5;
                case 215:
                    if (!(var4 == var3)) {
                        _fun15137_ip = 232;
                        continue _fun15137
                    }
                case 219:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 232:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15138: for (var _fun15138_ip = 0;;) switch (_fun15138_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.emojis;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15138_ip = 259;
                        continue _fun15138
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.string;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.emojis;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15138_ip = 64;
                        continue _fun15138
                    }
                case 259:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15138_ip = 320;
                        continue _fun15138
                    }
                case 271:
                    if (!(var5 == var2)) {
                        _fun15138_ip = 304;
                        continue _fun15138
                    }
                case 275:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 304:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 320:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var9 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot14 = var9;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'application_commands',
                'kind': 'map',
                'K': 9
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.ApplicationCommandFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15142: for (var _fun15142_ip = 0;;) switch (_fun15142_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.applicationCommands = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15142_ip = 117;
                        continue _fun15142
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15143: for (var _fun15143_ip = 0;;) switch (_fun15143_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15143_ip = 27;
                        continue _fun15143
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15143_ip = 341;
                        continue _fun15143
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15143_ip = 298;
                        continue _fun15143
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15143_ip = 218;
                        continue _fun15143
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15143_ip = 323;
                        continue _fun15143
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15143_ip = 186;
                        continue _fun15143
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15143_ip = 323;
                    continue _fun15143;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.applicationCommands;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15143_ip = 82;
                        continue _fun15143
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15144: for (var _fun15144_ip = 0;;) switch (_fun15144_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15144_ip = 199;
                        continue _fun15144
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15144_ip = 166;
                        continue _fun15144
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15144_ip = 137;
                        continue _fun15144
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15144_ip = 178;
                    continue _fun15144;
                case 166:
                    var2 = var12.string;
                    var6 = var2.bind(var12)();
                    var13 = var4;
                case 178:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15144_ip = 61;
                        continue _fun15144
                    }
                case 199:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '';
                    if (!var6) {
                        _fun15144_ip = 215;
                        continue _fun15144
                    }
                case 212:
                    var2 = var5;
                case 215:
                    if (!(var4 == var3)) {
                        _fun15144_ip = 232;
                        continue _fun15144
                    }
                case 219:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 232:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15145: for (var _fun15145_ip = 0;;) switch (_fun15145_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.applicationCommands;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15145_ip = 259;
                        continue _fun15145
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.string;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.applicationCommands;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15145_ip = 64;
                        continue _fun15145
                    }
                case 259:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15145_ip = 320;
                        continue _fun15145
                    }
                case 271:
                    if (!(var5 == var2)) {
                        _fun15145_ip = 304;
                        continue _fun15145
                    }
                case 275:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 304:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 320:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var8 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot15 = var8;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var5 = new Array(4);
            var0 = {
                'no': 1,
                'name': 'total_uses',
                'kind': 'scalar',
                'T': 13
            };
            var5[0] = var0;
            var0 = {
                'no': 2,
                'name': 'recent_uses',
                'kind': 'scalar',
                'repeat': 1,
                'T': 4
            };
            var5[1] = var0;
            var0 = {
                'no': 3,
                'name': 'frecency',
                'kind': 'scalar',
                'T': 5
            };
            var5[2] = var0;
            var0 = {
                'no': 4,
                'name': 'score',
                'kind': 'scalar',
                'T': 5
            };
            var5[3] = var0;
            var0 = ['discord_protos.discord_users.v1.FrecencyItem'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15148: for (var _fun15148_ip = 0;;) switch (_fun15148_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {
                        'totalUses': 0,
                        'recentUses': null,
                        'frecency': 0,
                        'score': 0
                    };
                    var1 = new Array(0);
                    var0.recentUses = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15148_ip = 128;
                        continue _fun15148
                    }
                case 98:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 128:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15149: for (var _fun15149_ip = 0;;) switch (_fun15149_ip) {
                case 0:
                    var19 = arg0;
                    var18 = arg2;
                    var0 = arg3;
                    var17 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15149_ip = 27;
                        continue _fun15149
                    }
                case 18:
                    var1 = var17.create;
                    var0 = var1.bind(var17)();
                case 27:
                    var2 = var19.pos;
                    var1 = arg1;
                    var16 = var2 + var1;
                    var1 = var19.pos;
                    var1 = var1 < var16;
                    var15 = undefined;
                    var13 = 7;
                    var12 = true;
                    var11 = false;
                    var10 = 'throw';
                    var9 = 4;
                    var8 = 3;
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15149_ip = 612;
                        continue _fun15149
                    }
                case 90:
                    var1 = var19.tag;
                    var20 = var1.bind(var19)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var15)(var20, var7);
                    var29 = var1[var5];
                    var23 = var1[var6];
                    if (!(var6 !== var29)) {
                        _fun15149_ip = 566;
                        continue _fun15149
                    }
                case 124:
                    if (!(var7 !== var29)) {
                        _fun15149_ip = 396;
                        continue _fun15149
                    }
                case 131:
                    if (!(var8 !== var29)) {
                        _fun15149_ip = 366;
                        continue _fun15149
                    }
                case 138:
                    if (!(var9 !== var29)) {
                        _fun15149_ip = 336;
                        continue _fun15149
                    }
                case 145:
                    var24 = var18.readUnknownField;
                    if (!(var10 !== var24)) {
                        _fun15149_ip = 256;
                        continue _fun15149
                    }
                case 155:
                    var1 = var19.skip;
                    var1 = var1.bind(var19)(var23);
                    var22 = var4;
                    var21 = var24;
                    var20 = var1;
                    if (!(var11 !== var24)) {
                        _fun15149_ip = 591;
                        continue _fun15149
                    }
                case 182:
                    var26 = var24;
                    if (!(var12 === var24)) {
                        _fun15149_ip = 218;
                        continue _fun15149
                    }
                case 189:
                    var27 = _closure1_slot0;
                    var25 = _closure1_slot1;
                    var25 = var25[var13];
                    var25 = var27.bind(var15)(var25);
                    var25 = var25.UnknownFieldHandler;
                    var26 = var25.onRead;
                case 218:
                    var34 = var17.typeName;
                    var35 = undefined;
                    var33 = var0;
                    var32 = var29;
                    var31 = var23;
                    var30 = var1;
                    var25 = var35[var26](var34, var33, var32, var31, var30, var29);
                    var22 = var4;
                    var21 = var24;
                    var20 = var1;
                    _fun15149_ip = 591;
                    continue _fun15149;
                case 256:
                    var1 = global;
                    var24 = var1.globalThis;
                    var25 = var24.Error;
                    var30 = var17.typeName;
                    var1 = var1.HermesInternal;
                    var27 = var1.concat;
                    var35 = 'Unknown field ';
                    var33 = ' (wire type ';
                    var31 = ') for ';
                    var34 = var29;
                    var32 = var23;
                    var34 = var35[var27](var34, var33, var32, var31, var30, var29);
                    var24 = var25.prototype;
                    var24 = Object.create(var24, {
                        constructor: {
                            value: var25
                        }
                    });
                    var35 = var24;
                    var1 = new var35[var25](var34, var33);
                    var1 = var1 instanceof Object ? var1 : var24;
                    throw var1;
                case 336:
                    var1 = var19.int32;
                    var1 = var1.bind(var19)();
                    var0.score = var1;
                    var22 = var4;
                    var21 = var3;
                    var20 = var2;
                    _fun15149_ip = 591;
                    continue _fun15149;
                case 366:
                    var1 = var19.int32;
                    var1 = var1.bind(var19)();
                    var0.frecency = var1;
                    var22 = var4;
                    var21 = var3;
                    var20 = var2;
                    _fun15149_ip = 591;
                    continue _fun15149;
                case 396:
                    var24 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var24.bind(var15)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var23 !== var1)) {
                        _fun15149_ip = 474;
                        continue _fun15149
                    }
                case 428:
                    var24 = var0.recentUses;
                    var23 = var24.push;
                    var1 = var19.uint64;
                    var25 = var1.bind(var19)();
                    var1 = var25.toString;
                    var1 = var1.bind(var25)();
                    var1 = var23.bind(var24)(var1);
                    var22 = var4;
                    var21 = var3;
                    var20 = var2;
                    _fun15149_ip = 591;
                    continue _fun15149;
                case 474:
                    var1 = var19.int32;
                    var23 = var1.bind(var19)();
                    var1 = var19.pos;
                    var23 = var23 + var1;
                    var1 = var19.pos;
                    var21 = var3;
                    var20 = var2;
                    var22 = var23;
                    if (!(var1 < var22)) {
                        _fun15149_ip = 591;
                        continue _fun15149
                    }
                case 511:
                    var25 = var0.recentUses;
                    var24 = var25.push;
                    var1 = var19.uint64;
                    var26 = var1.bind(var19)();
                    var1 = var26.toString;
                    var1 = var1.bind(var26)();
                    var1 = var24.bind(var25)(var1);
                    var1 = var19.pos;
                    var22 = var23;
                    var21 = var3;
                    var20 = var2;
                    if (var1 < var23) {
                        _fun15149_ip = 511;
                        continue _fun15149
                    }
                case 564:
                    _fun15149_ip = 591;
                    continue _fun15149;
                case 566:
                    var1 = var19.uint32;
                    var1 = var1.bind(var19)();
                    var0.totalUses = var1;
                    var22 = var4;
                    var21 = var3;
                    var20 = var2;
                case 591:
                    var1 = var19.pos;
                    var4 = var22;
                    var3 = var21;
                    var2 = var20;
                    if (var1 < var16) {
                        _fun15149_ip = 90;
                        continue _fun15149
                    }
                case 612:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15150: for (var _fun15150_ip = 0;;) switch (_fun15150_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.totalUses;
                    var2 = 0;
                    if (!(var2 !== var1)) {
                        _fun15150_ip = 85;
                        continue _fun15150
                    }
                case 18:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 1;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.uint32;
                    var1 = var4.totalUses;
                    var1 = var3.bind(var5)(var1);
                case 85:
                    var1 = var4.recentUses;
                    var1 = var1.length;
                    if (!var1) {
                        _fun15150_ip = 230;
                        continue _fun15150
                    }
                case 102:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = 2;
                    var3 = var5.bind(var0)(var1, var3);
                    var1 = var3.fork;
                    var1 = var1.bind(var3)();
                    var1 = var4.recentUses;
                    var1 = var1.length;
                    var1 = var2 < var1;
                    var3 = 0;
                    if (!var1) {
                        _fun15150_ip = 221;
                        continue _fun15150
                    }
                case 182:
                    var5 = var0.uint64;
                    var1 = var4.recentUses;
                    var1 = var1[var3];
                    var1 = var5.bind(var0)(var1);
                    var3 = var3 + 1;
                    var1 = var4.recentUses;
                    var1 = var1.length;
                    if (var3 < var1) {
                        _fun15150_ip = 182;
                        continue _fun15150
                    }
                case 221:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 230:
                    var1 = var4.frecency;
                    if (!(var2 !== var1)) {
                        _fun15150_ip = 307;
                        continue _fun15150
                    }
                case 240:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var1 = var1.WireType;
                    var3 = var1.Varint;
                    var1 = 3;
                    var5 = var5.bind(var0)(var1, var3);
                    var3 = var5.int32;
                    var1 = var4.frecency;
                    var1 = var3.bind(var5)(var1);
                case 307:
                    var1 = var4.score;
                    if (!(var2 !== var1)) {
                        _fun15150_ip = 384;
                        continue _fun15150
                    }
                case 317:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 4;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.score;
                    var1 = var2.bind(var3)(var1);
                case 384:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15150_ip = 461;
                        continue _fun15150
                    }
                case 399:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15150_ip = 443;
                        continue _fun15150
                    }
                case 406:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 443:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 461:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var7 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot16 = var7;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'sound_ids',
                'kind': 'scalar',
                'repeat': 1,
                'T': 6
            };
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.FavoriteSoundboardSounds'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15153: for (var _fun15153_ip = 0;;) switch (_fun15153_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = new Array(0);
                    var0.soundIds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15153_ip = 119;
                        continue _fun15153
                    }
                case 89:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 119:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15154: for (var _fun15154_ip = 0;;) switch (_fun15154_ip) {
                case 0:
                    var17 = arg0;
                    var16 = arg2;
                    var0 = arg3;
                    var15 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15154_ip = 27;
                        continue _fun15154
                    }
                case 18:
                    var1 = var15.create;
                    var0 = var1.bind(var15)();
                case 27:
                    var2 = var17.pos;
                    var1 = arg1;
                    var14 = var2 + var1;
                    var1 = var17.pos;
                    var1 = var1 < var14;
                    var13 = undefined;
                    var11 = 7;
                    var10 = true;
                    var9 = false;
                    var8 = 'throw';
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15154_ip = 498;
                        continue _fun15154
                    }
                case 84:
                    var1 = var17.tag;
                    var18 = var1.bind(var17)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var13)(var18, var7);
                    var27 = var1[var6];
                    var21 = var1[var5];
                    if (!(var5 !== var27)) {
                        _fun15154_ip = 309;
                        continue _fun15154
                    }
                case 118:
                    var22 = var16.readUnknownField;
                    if (!(var8 !== var22)) {
                        _fun15154_ip = 229;
                        continue _fun15154
                    }
                case 128:
                    var1 = var17.skip;
                    var1 = var1.bind(var17)(var21);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    if (!(var9 !== var22)) {
                        _fun15154_ip = 477;
                        continue _fun15154
                    }
                case 155:
                    var24 = var22;
                    if (!(var10 === var22)) {
                        _fun15154_ip = 191;
                        continue _fun15154
                    }
                case 162:
                    var25 = _closure1_slot0;
                    var23 = _closure1_slot1;
                    var23 = var23[var11];
                    var23 = var25.bind(var13)(var23);
                    var23 = var23.UnknownFieldHandler;
                    var24 = var23.onRead;
                case 191:
                    var32 = var15.typeName;
                    var33 = undefined;
                    var31 = var0;
                    var30 = var27;
                    var29 = var21;
                    var28 = var1;
                    var23 = var33[var24](var32, var31, var30, var29, var28, var27);
                    var20 = var4;
                    var19 = var22;
                    var18 = var1;
                    _fun15154_ip = 477;
                    continue _fun15154;
                case 229:
                    var1 = global;
                    var22 = var1.globalThis;
                    var23 = var22.Error;
                    var28 = var15.typeName;
                    var1 = var1.HermesInternal;
                    var25 = var1.concat;
                    var33 = 'Unknown field ';
                    var31 = ' (wire type ';
                    var29 = ') for ';
                    var32 = var27;
                    var30 = var21;
                    var32 = var33[var25](var32, var31, var30, var29, var28, var27);
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {
                        constructor: {
                            value: var23
                        }
                    });
                    var33 = var22;
                    var1 = new var33[var23](var32, var31);
                    var1 = var1 instanceof Object ? var1 : var22;
                    throw var1;
                case 309:
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var22.bind(var13)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var21 !== var1)) {
                        _fun15154_ip = 387;
                        continue _fun15154
                    }
                case 341:
                    var22 = var0.soundIds;
                    var21 = var22.push;
                    var1 = var17.fixed64;
                    var23 = var1.bind(var17)();
                    var1 = var23.toString;
                    var1 = var1.bind(var23)();
                    var1 = var21.bind(var22)(var1);
                    var20 = var4;
                    var19 = var3;
                    var18 = var2;
                    _fun15154_ip = 477;
                    continue _fun15154;
                case 387:
                    var1 = var17.int32;
                    var21 = var1.bind(var17)();
                    var1 = var17.pos;
                    var21 = var21 + var1;
                    var1 = var17.pos;
                    var19 = var3;
                    var18 = var2;
                    var20 = var21;
                    if (!(var1 < var20)) {
                        _fun15154_ip = 477;
                        continue _fun15154
                    }
                case 424:
                    var23 = var0.soundIds;
                    var22 = var23.push;
                    var1 = var17.fixed64;
                    var24 = var1.bind(var17)();
                    var1 = var24.toString;
                    var1 = var1.bind(var24)();
                    var1 = var22.bind(var23)(var1);
                    var1 = var17.pos;
                    var20 = var21;
                    var19 = var3;
                    var18 = var2;
                    if (var1 < var21) {
                        _fun15154_ip = 424;
                        continue _fun15154
                    }
                case 477:
                    var1 = var17.pos;
                    var4 = var20;
                    var3 = var19;
                    var2 = var18;
                    if (var1 < var14) {
                        _fun15154_ip = 84;
                        continue _fun15154
                    }
                case 498:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15155: for (var _fun15155_ip = 0;;) switch (_fun15155_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.soundIds;
                    var1 = var1.length;
                    if (!var1) {
                        _fun15155_ip = 151;
                        continue _fun15155
                    }
                case 23:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var2 = var3.bind(var0)(var1, var2);
                    var1 = var2.fork;
                    var1 = var1.bind(var2)();
                    var1 = var4.soundIds;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun15155_ip = 142;
                        continue _fun15155
                    }
                case 103:
                    var3 = var0.fixed64;
                    var1 = var4.soundIds;
                    var1 = var1[var2];
                    var1 = var3.bind(var0)(var1);
                    var2 = var2 + 1;
                    var1 = var4.soundIds;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun15155_ip = 103;
                        continue _fun15155
                    }
                case 142:
                    var1 = var0.join;
                    var1 = var1.bind(var0)();
                case 151:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15155_ip = 228;
                        continue _fun15155
                    }
                case 166:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15155_ip = 210;
                        continue _fun15155
                    }
                case 173:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 210:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 228:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var6 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot17 = var6;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'heard_sounds',
                'kind': 'map',
                'K': 9
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.HeardSoundFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15159: for (var _fun15159_ip = 0;;) switch (_fun15159_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.heardSounds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15159_ip = 117;
                        continue _fun15159
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15160: for (var _fun15160_ip = 0;;) switch (_fun15160_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15160_ip = 27;
                        continue _fun15160
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15160_ip = 341;
                        continue _fun15160
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15160_ip = 298;
                        continue _fun15160
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15160_ip = 218;
                        continue _fun15160
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15160_ip = 323;
                        continue _fun15160
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15160_ip = 186;
                        continue _fun15160
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15160_ip = 323;
                    continue _fun15160;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.heardSounds;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15160_ip = 82;
                        continue _fun15160
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15161: for (var _fun15161_ip = 0;;) switch (_fun15161_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15161_ip = 199;
                        continue _fun15161
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15161_ip = 166;
                        continue _fun15161
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15161_ip = 137;
                        continue _fun15161
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15161_ip = 178;
                    continue _fun15161;
                case 166:
                    var2 = var12.string;
                    var6 = var2.bind(var12)();
                    var13 = var4;
                case 178:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15161_ip = 61;
                        continue _fun15161
                    }
                case 199:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '';
                    if (!var6) {
                        _fun15161_ip = 215;
                        continue _fun15161
                    }
                case 212:
                    var2 = var5;
                case 215:
                    if (!(var4 == var3)) {
                        _fun15161_ip = 232;
                        continue _fun15161
                    }
                case 219:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 232:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15162: for (var _fun15162_ip = 0;;) switch (_fun15162_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.heardSounds;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15162_ip = 259;
                        continue _fun15162
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.string;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.heardSounds;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15162_ip = 64;
                        continue _fun15162
                    }
                case 259:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15162_ip = 320;
                        continue _fun15162
                    }
                case 271:
                    if (!(var5 == var2)) {
                        _fun15162_ip = 304;
                        continue _fun15162
                    }
                case 275:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 304:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 320:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var5 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot18 = var5;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'played_sounds',
                'kind': 'map',
                'K': 9
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.PlayedSoundFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15166: for (var _fun15166_ip = 0;;) switch (_fun15166_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.playedSounds = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15166_ip = 117;
                        continue _fun15166
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15167: for (var _fun15167_ip = 0;;) switch (_fun15167_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15167_ip = 27;
                        continue _fun15167
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15167_ip = 341;
                        continue _fun15167
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15167_ip = 298;
                        continue _fun15167
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15167_ip = 218;
                        continue _fun15167
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15167_ip = 323;
                        continue _fun15167
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15167_ip = 186;
                        continue _fun15167
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15167_ip = 323;
                    continue _fun15167;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.playedSounds;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15167_ip = 82;
                        continue _fun15167
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15168: for (var _fun15168_ip = 0;;) switch (_fun15168_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15168_ip = 199;
                        continue _fun15168
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15168_ip = 166;
                        continue _fun15168
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15168_ip = 137;
                        continue _fun15168
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15168_ip = 178;
                    continue _fun15168;
                case 166:
                    var2 = var12.string;
                    var6 = var2.bind(var12)();
                    var13 = var4;
                case 178:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15168_ip = 61;
                        continue _fun15168
                    }
                case 199:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '';
                    if (!var6) {
                        _fun15168_ip = 215;
                        continue _fun15168
                    }
                case 212:
                    var2 = var5;
                case 215:
                    if (!(var4 == var3)) {
                        _fun15168_ip = 232;
                        continue _fun15168
                    }
                case 219:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 232:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15169: for (var _fun15169_ip = 0;;) switch (_fun15169_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.playedSounds;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15169_ip = 259;
                        continue _fun15169
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.string;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.playedSounds;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15169_ip = 64;
                        continue _fun15169
                    }
                case 259:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15169_ip = 320;
                        continue _fun15169
                    }
                case 271:
                    if (!(var5 == var2)) {
                        _fun15169_ip = 304;
                        continue _fun15169
                    }
                case 275:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 304:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 320:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var24 = var4;
    var3 = new var24[var3](var23);
    var4 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot19 = var4;
    var3 = var19[var1];
    var3 = var18.bind(var0)(var3);
    var20 = var3.MessageType;
    var3 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'applications',
                'kind': 'map',
                'K': 9
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.ApplicationFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15173: for (var _fun15173_ip = 0;;) switch (_fun15173_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.applications = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15173_ip = 117;
                        continue _fun15173
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15174: for (var _fun15174_ip = 0;;) switch (_fun15174_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15174_ip = 27;
                        continue _fun15174
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15174_ip = 341;
                        continue _fun15174
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15174_ip = 298;
                        continue _fun15174
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15174_ip = 218;
                        continue _fun15174
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15174_ip = 323;
                        continue _fun15174
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15174_ip = 186;
                        continue _fun15174
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15174_ip = 323;
                    continue _fun15174;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.applications;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15174_ip = 82;
                        continue _fun15174
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15175: for (var _fun15175_ip = 0;;) switch (_fun15175_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15175_ip = 199;
                        continue _fun15175
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15175_ip = 166;
                        continue _fun15175
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15175_ip = 137;
                        continue _fun15175
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15175_ip = 178;
                    continue _fun15175;
                case 166:
                    var2 = var12.string;
                    var6 = var2.bind(var12)();
                    var13 = var4;
                case 178:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15175_ip = 61;
                        continue _fun15175
                    }
                case 199:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '';
                    if (!var6) {
                        _fun15175_ip = 215;
                        continue _fun15175
                    }
                case 212:
                    var2 = var5;
                case 215:
                    if (!(var4 == var3)) {
                        _fun15175_ip = 232;
                        continue _fun15175
                    }
                case 219:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 232:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15176: for (var _fun15176_ip = 0;;) switch (_fun15176_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.applications;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15176_ip = 259;
                        continue _fun15176
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.string;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.applications;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15176_ip = 64;
                        continue _fun15176
                    }
                case 259:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15176_ip = 320;
                        continue _fun15176
                    }
                case 271:
                    if (!(var5 == var2)) {
                        _fun15176_ip = 304;
                        continue _fun15176
                    }
                case 275:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 304:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 320:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var20);
    var20 = var3.prototype;
    var20 = Object.create(var20, {
        constructor: {
            value: var3
        }
    });
    var24 = var20;
    var3 = new var24[var3](var23);
    var3 = var3 instanceof Object ? var3 : var20;
    var _closure1_slot20 = var3;
    var1 = var19[var1];
    var1 = var18.bind(var0)(var1);
    var20 = var1.MessageType;
    var1 = function(arg0) { // Environment: var17
        var3 = function() {
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot22;
            var0 = {
                'no': 1,
                'name': 'guild_and_channels',
                'kind': 'map',
                'K': 6
            };
            var5 = {};
            var6 = 'message';
            var5.kind = var6;
            var6 = function() {
                var0 = _closure1_slot16;
                return var0;
            };
            var5.T = var6;
            var0.V = var5;
            var5 = new Array(1);
            var5[0] = var0;
            var0 = ['discord_protos.discord_users.v1.GuildAndChannelFrecency'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun15180: for (var _fun15180_ip = 0;;) switch (_fun15180_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.guildAndChannels = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 7;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15180_ip = 117;
                        continue _fun15180
                    }
                case 87:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 117:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun15181: for (var _fun15181_ip = 0;;) switch (_fun15181_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15181_ip = 27;
                        continue _fun15181
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 7;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15181_ip = 341;
                        continue _fun15181
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15181_ip = 298;
                        continue _fun15181
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15181_ip = 218;
                        continue _fun15181
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15181_ip = 323;
                        continue _fun15181
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15181_ip = 186;
                        continue _fun15181
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15181_ip = 323;
                    continue _fun15181;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var19 = var14.binaryReadMap1;
                    var1 = var0.guildAndChannels;
                    var1 = var19.bind(var14)(var1, var16, var15);
                    var18 = var3;
                    var17 = var2;
                case 323:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15181_ip = 82;
                        continue _fun15181
                    }
                case 341:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'binaryReadMap1';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun15182: for (var _fun15182_ip = 0;;) switch (_fun15182_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = var12.uint32;
                    var1 = var0.bind(var12)();
                    var0 = var12.pos;
                    var10 = var0 + var1;
                    var0 = var12.pos;
                    var2 = var0 < var10;
                    var0 = undefined;
                    var9 = 2;
                    var8 = 1;
                    var7 = 0;
                    var6 = undefined;
                    var4 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun15182_ip = 209;
                        continue _fun15182
                    }
                case 61:
                    var2 = var12.tag;
                    var13 = var2.bind(var12)();
                    var2 = _closure1_slot2;
                    var13 = var2.bind(var0)(var13, var9);
                    var2 = var13[var7];
                    var13 = var13[var8];
                    if (!(var8 !== var2)) {
                        _fun15182_ip = 166;
                        continue _fun15182
                    }
                case 92:
                    if (!(var9 !== var2)) {
                        _fun15182_ip = 137;
                        continue _fun15182
                    }
                case 96:
                    var2 = global;
                    var2 = var2.globalThis;
                    var14 = var2.Error;
                    var2 = var14.prototype;
                    var13 = Object.create(var2, {
                        constructor: {
                            value: var14
                        }
                    });
                    var17 = 'unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels';
                    var18 = var13;
                    var2 = new var18[var14](var17, var16);
                    var2 = var2 instanceof Object ? var2 : var13;
                    throw var2;
                case 137:
                    var14 = _closure1_slot16;
                    var13 = var14.internalBinaryRead;
                    var2 = var12.uint32;
                    var2 = var2.bind(var12)();
                    var13 = var13.bind(var14)(var12, var2, var11);
                    _fun15182_ip = 188;
                    continue _fun15182;
                case 166:
                    var2 = var12.fixed64;
                    var14 = var2.bind(var12)();
                    var2 = var14.toString;
                    var6 = var2.bind(var14)();
                    var13 = var4;
                case 188:
                    var2 = var12.pos;
                    var4 = var13;
                    var5 = var6;
                    var3 = var4;
                    if (var2 < var10) {
                        _fun15182_ip = 61;
                        continue _fun15182
                    }
                case 209:
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = '0';
                    if (!var6) {
                        _fun15182_ip = 227;
                        continue _fun15182
                    }
                case 224:
                    var2 = var5;
                case 227:
                    if (!(var4 == var3)) {
                        _fun15182_ip = 244;
                        continue _fun15182
                    }
                case 231:
                    var4 = _closure1_slot16;
                    var1 = var4.create;
                    var3 = var1.bind(var4)();
                case 244:
                    var1 = arg0;
                    var1[var2] = var3;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun15183: for (var _fun15183_ip = 0;;) switch (_fun15183_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = arg2;
                    var1 = global;
                    var5 = var1.Object;
                    var3 = var5.keys;
                    var1 = var4.guildAndChannels;
                    var10 = var3.bind(var5)(var1);
                    var1 = var10.length;
                    var9 = 0;
                    var7 = var9 < var1;
                    var6 = 7;
                    var3 = undefined;
                    var5 = 1;
                    var8 = 2;
                    if (!var7) {
                        _fun15183_ip = 260;
                        continue _fun15183
                    }
                case 64:
                    var13 = var10[var9];
                    var14 = var0.tag;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.LengthDelimited;
                    var14 = var14.bind(var0)(var5, var11);
                    var11 = var14.fork;
                    var15 = var11.bind(var14)();
                    var14 = var15.tag;
                    var11 = var7[var6];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.WireType;
                    var11 = var11.Bit64;
                    var14 = var14.bind(var15)(var5, var11);
                    var11 = var14.fixed64;
                    var11 = var11.bind(var14)(var13);
                    var11 = var0.tag;
                    var7 = var7[var6];
                    var7 = var12.bind(var3)(var7);
                    var7 = var7.WireType;
                    var7 = var7.LengthDelimited;
                    var11 = var11.bind(var0)(var8, var7);
                    var7 = var11.fork;
                    var7 = var7.bind(var11)();
                    var12 = _closure1_slot16;
                    var11 = var12.internalBinaryWrite;
                    var7 = var4.guildAndChannels;
                    var7 = var7[var13];
                    var7 = var11.bind(var12)(var7, var0, var2);
                    var7 = var0.join;
                    var11 = var7.bind(var0)();
                    var7 = var11.join;
                    var7 = var7.bind(var11)();
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun15183_ip = 64;
                        continue _fun15183
                    }
                case 260:
                    var2 = var2.writeUnknownFields;
                    var7 = false;
                    if (!(var7 !== var2)) {
                        _fun15183_ip = 321;
                        continue _fun15183
                    }
                case 272:
                    if (!(var5 == var2)) {
                        _fun15183_ip = 305;
                        continue _fun15183
                    }
                case 276:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.UnknownFieldHandler;
                    var2 = var1.onWrite;
                case 305:
                    var1 = this;
                    var1 = var1.typeName;
                    var1 = var2.bind(var3)(var1, var4, var0);
                case 321:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var20);
    var20 = var1.prototype;
    var20 = Object.create(var20, {
        constructor: {
            value: var1
        }
    });
    var24 = var20;
    var1 = new var24[var1](var23);
    var1 = var1 instanceof Object ? var1 : var20;
    var _closure1_slot21 = var1;
    var17 = 8;
    var17 = var19[var17];
    var19 = var18.bind(var0)(var17);
    var18 = var19.fileFinishedImporting;
    var17 = '../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx';
    var17 = var18.bind(var19)(var17);
    var2.GIFType = var16;
    var2.FrecencyUserSettings = var15;
    var2.FavoriteGIFs = var14;
    var2.FavoriteGIF = var13;
    var2.FavoriteStickers = var12;
    var2.StickerFrecency = var11;
    var2.FavoriteEmojis = var10;
    var2.EmojiFrecency = var9;
    var2.ApplicationCommandFrecency = var8;
    var2.FrecencyItem = var7;
    var2.FavoriteSoundboardSounds = var6;
    var2.HeardSoundFrecency = var5;
    var2.PlayedSoundFrecency = var4;
    var2.ApplicationFrecency = var3;
    var2.GuildAndChannelFrecency = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1312, 1313, 2]);