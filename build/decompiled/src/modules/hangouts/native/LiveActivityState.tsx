// modules/hangouts/native/LiveActivityState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: fallbackAvatar, environment: var1
        _fun114154: for (var _fun114154_ip = 0;;) switch (_fun114154_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var5 = var6.parseInteger;
                var1 = var2.discriminator;
                var3 = 0;
                var1 = var5.bind(var6)(var1, var3);
                if (!(!(var1 > var3))) {
                    _fun114154_ip = 141;
                    continue _fun114154
                }
            case 52:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 15;
                var3 = var7[var3];
                var3 = var5.bind(var4)(var3);
                var2 = var2.id;
                var5 = var3.bind(var4)(var2);
                var3 = var5.shiftRight;
                var2 = 22;
                var5 = var3.bind(var5)(var2);
                var3 = var5.mod;
                var6 = _closure1_slot0;
                var2 = 14;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DEFAULT_AVATAR_COUNT;
                var3 = var3.bind(var5)(var2);
                var2 = var3.toJSNumber;
                var2 = var2.bind(var3)();
                _fun114154_ip = 171;
                continue _fun114154;
            case 141:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 14;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.LEGACY_DEFAULT_AVATAR_COUNT;
                var2 = var1 % var0;
            case 171:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'default_avatar_';
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: preloadAssetsForUser, environment: var1
        _fun114155: for (var _fun114155_ip = 0;;) switch (_fun114155_ip) {
            case 0:
                var0 = arg0;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun114155_ip = 187;
                    continue _fun114155
                }
            case 12:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var5 = undefined;
                var9 = var3.bind(var5)(var2);
                var8 = var9.getUserAvatarURL;
                var7 = {};
                var2 = var0.id;
                var7.id = var2;
                var2 = var0.avatar;
                var7.avatar = var2;
                var2 = var0.discriminator;
                var7.discriminator = var2;
                var12 = false;
                var11 = 32;
                var10 = 'png';
                var14 = var9;
                var13 = var7;
                var3 = var14[var8](var13, var12, var11, var10, var9);
                var6 = 'number';
                var2 = typeof var3;
                if (!(var6 !== var2)) {
                    _fun114155_ip = 187;
                    continue _fun114155
                }
            case 106:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.preloadAsset;
                var0 = var0.avatar;
                var4 = var4 != var0;
                var6 = 'missing';
                if (!var4) {
                    _fun114155_ip = 152;
                    continue _fun114155
                }
            case 149:
                var6 = var0;
            case 152:
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var4 = '';
                var0 = '.png';
                var0 = var5.bind(var4)(var6, var0);
                var0 = var1.bind(var2)(var3, var0);
            case 187:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0, arg1) { // Original name: getVoiceStateForUser, environment: var1
        _fun114156: for (var _fun114156_ip = 0;;) switch (_fun114156_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot12;
                var2 = var5.getVoiceStateForChannel;
                var1 = var4.id;
                var5 = var2.bind(var5)(var7, var1);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun114156_ip = 223;
                    continue _fun114156
                }
            case 45:
                var6 = _closure1_slot3;
                var1 = var6.getEmbeddedActivitiesForChannel;
                var7 = var1.bind(var6)(var7);
                var6 = var7.find;
                var1 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var2 = var0.userIds;
                    var1 = var2.has;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var1);
                var7 = _closure1_slot9;
                var6 = var7.findActivity;
                var4 = var4.id;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot14;
                    var0 = var0.CUSTOM_STATUS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var3 = var6.bind(var7)(var4, var3);
                var4 = var2 == var3;
                var6 = undefined;
                if (var4) {
                    _fun114156_ip = 119;
                    continue _fun114156
                }
            case 114:
                var6 = var3.type;
            case 119:
                var0 = _closure1_slot14;
                var4 = var0.LISTENING;
                var3 = var5.selfStream;
                var0 = 'screenshare';
                if (var3) {
                    _fun114156_ip = 221;
                    continue _fun114156
                }
            case 142:
                var2 = var2 != var1;
                var1 = 'activity';
                if (var2) {
                    _fun114156_ip = 218;
                    continue _fun114156
                }
            case 153:
                var3 = var5.selfVideo;
                var2 = 'video';
                if (var3) {
                    _fun114156_ip = 215;
                    continue _fun114156
                }
            case 166:
                var3 = 'music';
                if (!(var6 !== var4)) {
                    _fun114156_ip = 212;
                    continue _fun114156
                }
            case 176:
                var6 = var5.selfDeaf;
                var4 = 'deafened';
                if (var6) {
                    _fun114156_ip = 209;
                    continue _fun114156
                }
            case 189:
                var6 = var5.selfMute;
                var5 = 'default';
                if (!var6) {
                    _fun114156_ip = 206;
                    continue _fun114156
                }
            case 202:
                var5 = 'muted';
            case 206:
                var4 = var5;
            case 209:
                var3 = var4;
            case 212:
                var2 = var3;
            case 215:
                var1 = var2;
            case 218:
                var0 = var1;
            case 221:
                return var0;
            case 223:
                var0 = 'default';
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: flattenAndConcatMessage, environment: var1
        _fun114159: for (var _fun114159_ip = 0;;) switch (_fun114159_ip) {
            case 0:
                var4 = arg0;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun114159_ip = 46;
                    continue _fun114159
                }
            case 24:
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '';
                var0 = var1.bind(var0)(var4);
                _fun114159_ip = 71;
                continue _fun114159;
            case 46:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun114160: for (var _fun114160_ip = 0;;) switch (_fun114160_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var0 = global;
                            var1 = var0.Array;
                            var0 = var1.isArray;
                            var0 = var0.bind(var1)(var4);
                            if (var0) {
                                _fun114160_ip = 33;
                                continue _fun114160
                            }
                        case 27:
                            var0 = var2 + var4;
                            _fun114160_ip = 51;
                            continue _fun114160;
                        case 33:
                            var3 = _closure1_slot19;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var4);
                            var0 = var2 + var1;
                        case 51:
                            return var0;
                    }
                };
                var1 = '';
                var0 = var3.bind(var4)(var2, var1);
            case 71:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot15 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hangouts/native/LiveActivityState.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 30;
    var2.MAX_MEMBERS = var3;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: generateLiveActivityState, environment: var1
        _fun114161: for (var _fun114161_ip = 0;;) switch (_fun114161_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var1 = arg3;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var7;
                var3 = _closure1_slot6;
                var0 = var3.getChannel;
                var14 = var0.bind(var3)(var7);
                var3 = _closure1_slot8;
                var0 = var3.getGuild;
                var3 = var0.bind(var3)(var8);
                var5 = _closure1_slot11;
                var0 = var5.getCurrentUser;
                var11 = var0.bind(var5)();
                var _closure2_slot2 = var11;
                var0 = null;
                if (!(var0 != var14)) {
                    _fun114161_ip = 1035;
                    continue _fun114161
                }
            case 76:
                if (!(var0 != var3)) {
                    _fun114161_ip = 1035;
                    continue _fun114161
                }
            case 83:
                if (!(var0 != var11)) {
                    _fun114161_ip = 1035;
                    continue _fun114161
                }
            case 90:
                var6 = var14.type;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var12 = 17;
                var5 = var5[var12];
                var9 = undefined;
                var5 = var10.bind(var9)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.GUILD_VOICE;
                if (!(var6 === var5)) {
                    _fun114161_ip = 1035;
                    continue _fun114161
                }
            case 136:
                var5 = var0 != var1;
                var10 = null;
                if (!var5) {
                    _fun114161_ip = 164;
                    continue _fun114161
                }
            case 145:
                var13 = _closure1_slot6;
                var6 = var13.getChannel;
                var5 = var1.channel_id;
                var10 = var6.bind(var13)(var5);
            case 164:
                var5 = var0 != var1;
                var6 = null;
                if (!var5) {
                    _fun114161_ip = 208;
                    continue _fun114161
                }
            case 173:
                var15 = _closure1_slot11;
                var13 = var15.getUser;
                var16 = var1.author;
                var17 = var0 == var16;
                var5 = undefined;
                if (var17) {
                    _fun114161_ip = 203;
                    continue _fun114161
                }
            case 198:
                var5 = var16.id;
            case 203:
                var6 = var13.bind(var15)(var5);
            case 208:
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 14;
                var5 = var15[var5];
                var15 = var13.bind(var9)(var5);
                var13 = var15.getGuildIconURL;
                var5 = {};
                var16 = var3.id;
                var5.id = var16;
                var16 = var3.icon;
                var5.icon = var16;
                var16 = 32;
                var5.size = var16;
                var17 = var13.bind(var15)(var5);
                var5 = var0 != var17;
                if (!var5) {
                    _fun114161_ip = 281;
                    continue _fun114161
                }
            case 273:
                var13 = '';
                var5 = var13 !== var17;
            case 281:
                if (!var5) {
                    _fun114161_ip = 381;
                    continue _fun114161
                }
            case 284:
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 16;
                var5 = var15[var5];
                var16 = var13.bind(var9)(var5);
                var15 = var16.preloadAsset;
                var13 = var17.replace;
                var5 = '.webp';
                var19 = '.png';
                var13 = var13.bind(var17)(var5, var19);
                var5 = var3.icon;
                var17 = var0 != var5;
                var18 = 'missing';
                if (!var17) {
                    _fun114161_ip = 352;
                    continue _fun114161
                }
            case 349:
                var18 = var5;
            case 352:
                var5 = global;
                var5 = var5.HermesInternal;
                var17 = var5.concat;
                var5 = '';
                var5 = var17.bind(var5)(var18, var19);
                var5 = var15.bind(var16)(var13, var5);
            case 381:
                var5 = _closure1_slot17;
                var5 = var5.bind(var9)(var11);
                var11 = _closure1_slot7;
                var5 = var11.getMembers;
                var13 = var5.bind(var11)(var8);
                var11 = var13.map;
                var5 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot11;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var0.userId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var11.bind(var13)(var5);
                var11 = var15.length;
                var5 = 30;
                if (!(var11 <= var5)) {
                    _fun114161_ip = 448;
                    continue _fun114161
                }
            case 434:
                var11 = var15.forEach;
                var5 = _closure1_slot17;
                var5 = var11.bind(var15)(var5);
            case 448:
                var5 = new Array(0);
                var _closure2_slot3 = var5;
                var13 = _closure1_slot13;
                var11 = var13.getVoiceStatesForChannel;
                var16 = var11.bind(var13)(var14);
                var13 = var16.forEach;
                var11 = function(arg0) { // Environment: var2
                    _fun114163: for (var _fun114163_ip = 0;;) switch (_fun114163_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.user;
                            var2 = _closure1_slot17;
                            var1 = var0.user;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var3 = _closure2_slot3;
                            var2 = var3.push;
                            var1 = {};
                            var7 = var5.id;
                            var1.id = var7;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 18;
                            var7 = var9[var7];
                            var10 = var8.bind(var0)(var7);
                            var9 = var10.getName;
                            var8 = _closure2_slot0;
                            var7 = _closure2_slot1;
                            var7 = var9.bind(var10)(var8, var7, var5);
                            var1.name = var7;
                            var7 = var5.avatar;
                            var8 = null;
                            var8 = var8 != var7;
                            var10 = 'missing';
                            if (!var8) {
                                _fun114163_ip = 117;
                                continue _fun114163
                            }
                        case 114:
                            var10 = var7;
                        case 117:
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = '.png';
                            var7 = var9.bind(var8)(var10, var7);
                            var1.avatar = var7;
                            var9 = _closure1_slot10;
                            var8 = var9.isSpeaking;
                            var7 = var5.id;
                            var7 = var8.bind(var9)(var7);
                            var1.speaking = var7;
                            var7 = _closure1_slot18;
                            var6 = _closure2_slot1;
                            var6 = var7.bind(var0)(var6, var5);
                            var1.voiceStatus = var6;
                            var4 = _closure1_slot16;
                            var4 = var4.bind(var0)(var5);
                            var1.fallbackAvatar = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var11 = var13.bind(var16)(var11);
                var13 = var15.filter;
                var11 = function(arg0) { // Environment: var2
                    _fun114164: for (var _fun114164_ip = 0;;) switch (_fun114164_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun114164_ip = 21;
                                continue _fun114164
                            }
                        case 12:
                            var1 = var2.bot;
                            var0 = !var1;
                        case 21:
                            if (!var0) {
                                _fun114164_ip = 69;
                                continue _fun114164
                            }
                        case 24:
                            var5 = _closure1_slot9;
                            var4 = var5.getStatus;
                            var3 = var2.id;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = _closure1_slot15;
                            var1 = var1.ONLINE;
                            var0 = var2 === var1;
                        case 69:
                            return var0;
                    }
                };
                var15 = var13.bind(var15)(var11);
                var13 = var15.map;
                var11 = function(arg0) { // Environment: var2
                    _fun114165: for (var _fun114165_ip = 0;;) switch (_fun114165_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = {};
                            var1 = var3.id;
                            var0.id = var1;
                            var1 = var3.avatar;
                            var2 = null;
                            var2 = var2 != var1;
                            var5 = 'missing';
                            if (!var2) {
                                _fun114165_ip = 36;
                                continue _fun114165
                            }
                        case 33:
                            var5 = var1;
                        case 36:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var2 = '';
                            var1 = '.png';
                            var1 = var4.bind(var2)(var5, var1);
                            var0.avatar = var1;
                            var2 = _closure1_slot16;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0.fallbackAvatar = var1;
                            return var0;
                    }
                };
                var15 = var13.bind(var15)(var11);
                var13 = var15.filter;
                var11 = function(arg0) { // Environment: var2
                    _fun114166: for (var _fun114166_ip = 0;;) switch (_fun114166_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.id;
                            var0 = _closure2_slot2;
                            var1 = null;
                            var0 = var1 == var0;
                            var3 = undefined;
                            if (var0) {
                                _fun114166_ip = 35;
                                continue _fun114166
                            }
                        case 26:
                            var0 = _closure2_slot2;
                            var3 = var0.id;
                        case 35:
                            var0 = false;
                            if (!(var6 !== var3)) {
                                _fun114166_ip = 87;
                                continue _fun114166
                            }
                        case 41:
                            var5 = _closure1_slot12;
                            var4 = var5.getVoiceState;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3, var6);
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun114166_ip = 84;
                                continue _fun114166
                            }
                        case 71:
                            var3 = var3.channelId;
                            var2 = _closure2_slot1;
                            var1 = var3 === var2;
                        case 84:
                            var0 = var1;
                        case 87:
                            var0 = !var0;
                            return var0;
                    }
                };
                var13 = var13.bind(var15)(var11);
                var11 = var13.sort;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun114167: for (var _fun114167_ip = 0;;) switch (_fun114167_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getUserAffinity;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var3 = null;
                            var1 = var3 == var0;
                            var5 = undefined;
                            if (var1) {
                                _fun114167_ip = 43;
                                continue _fun114167
                            }
                        case 37:
                            var5 = var0.communicationProbability;
                        case 43:
                            var6 = var3 != var5;
                            var0 = 0;
                            if (!var6) {
                                _fun114167_ip = 55;
                                continue _fun114167
                            }
                        case 52:
                            var0 = var5;
                        case 55:
                            var6 = _closure1_slot5;
                            var5 = var6.getUserAffinity;
                            var4 = arg1;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var5 = var3 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun114167_ip = 93;
                                continue _fun114167
                            }
                        case 87:
                            var2 = var4.communicationProbability;
                        case 93:
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun114167_ip = 105;
                                continue _fun114167
                            }
                        case 102:
                            var1 = var2;
                        case 105:
                            var0 = var1 - var0;
                            return var0;
                    }
                };
                var11 = var11.bind(var13)(var2);
                var13 = var0 != var1;
                if (!var13) {
                    _fun114161_ip = 568;
                    continue _fun114161
                }
            case 564:
                var13 = var0 != var10;
            case 568:
                var2 = null;
                if (!var13) {
                    _fun114161_ip = 642;
                    continue _fun114161
                }
            case 573:
                var13 = _closure1_slot19;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 19;
                var15 = var17[var15];
                var16 = var16.bind(var9)(var15);
                var15 = var16.getWidgetMessageRules;
                var17 = var15.bind(var16)();
                var16 = var1.content;
                var15 = {};
                var1 = true;
                var15.noStyleAndInteraction = var1;
                var18 = var10.id;
                var15.channelId = var18;
                var1 = var17.bind(var9)(var16, var1, var15);
                var2 = var13.bind(var9)(var1);
            case 642:
                var1 = {};
                var1.guildId = var8;
                var1.channelId = var7;
                var13 = var14.name;
                var1.voiceName = var13;
                var3 = var3.icon;
                var13 = var0 != var3;
                var16 = 'missing';
                if (!var13) {
                    _fun114161_ip = 683;
                    continue _fun114161
                }
            case 680:
                var16 = var3;
            case 683:
                var3 = global;
                var3 = var3.HermesInternal;
                var15 = var3.concat;
                var13 = '';
                var3 = '.png';
                var3 = var15.bind(var13)(var16, var3);
                var1.guildIcon = var3;
                var13 = _closure1_slot4;
                var3 = var13.getChannelStatus;
                var13 = var3.bind(var13)(var14);
                var14 = var0 != var13;
                var3 = null;
                if (!var14) {
                    _fun114161_ip = 744;
                    continue _fun114161
                }
            case 741:
                var3 = var13;
            case 744:
                var1.status = var3;
                var1.voiceUsers = var5;
                var3 = arg2;
                var1.selfInVoice = var3;
                var14 = var11.slice;
                var3 = 0;
                var13 = 2;
                var14 = var14.bind(var11)(var3, var13);
                var1.availableUsers = var14;
                var14 = var11.length;
                var14 = var14 > var13;
                if (!var14) {
                    _fun114161_ip = 807;
                    continue _fun114161
                }
            case 798:
                var11 = var11.length;
                var3 = var11 - var13;
            case 807:
                var1.availableOverflow = var3;
                var11 = var5.length;
                var3 = 1;
                var11 = var11 > var3;
                var3 = 'Hangout in';
                if (var11) {
                    _fun114161_ip = 865;
                    continue _fun114161
                }
            case 835:
                var11 = var5.length;
                var5 = 4;
                var11 = var11 > var5;
                var5 = "Solo vibin' in";
                if (!var11) {
                    _fun114161_ip = 862;
                    continue _fun114161
                }
            case 856:
                var5 = "It's stacked in";
            case 862:
                var3 = var5;
            case 865:
                var1.voiceDescriptor = var3;
                var3 = 'Join hangout';
                var1.joinCTAText = var3;
                var3 = 'Invite friends';
                var1.shareCTAText = var3;
                var3 = var0 == var10;
                var11 = undefined;
                if (var3) {
                    _fun114161_ip = 912;
                    continue _fun114161
                }
            case 907:
                var11 = var10.type;
            case 912:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var5.bind(var9)(var3);
                var3 = var3.ChannelTypes;
                var5 = var3.GUILD_TEXT;
                var3 = null;
                if (!(var11 === var5)) {
                    _fun114161_ip = 973;
                    continue _fun114161
                }
            case 947:
                var11 = var0 == var10;
                var5 = undefined;
                if (var11) {
                    _fun114161_ip = 961;
                    continue _fun114161
                }
            case 956:
                var5 = var10.name;
            case 961:
                var10 = var0 != var5;
                var3 = null;
                if (!var10) {
                    _fun114161_ip = 973;
                    continue _fun114161
                }
            case 970:
                var3 = var5;
            case 973:
                var1.messageChannelName = var3;
                var5 = var0 != var6;
                var3 = null;
                if (!var5) {
                    _fun114161_ip = 1022;
                    continue _fun114161
                }
            case 989:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 18;
                var4 = var10[var4];
                var5 = var5.bind(var9)(var4);
                var4 = var5.getName;
                var3 = var4.bind(var5)(var8, var7, var6);
            case 1022:
                var1.messageAuthorName = var3;
                var1.message = var2;
                return var1;
            case 1035:
                return var0;
        }
    };
    var2.generateLiveActivityState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 4527, 6933, 1372, 1672, 1410, 3567, 3903, 1613, 3480, 3483, 660, 483, 1604, 1417, 24, 14581, 790, 3915, 3892, 2]);