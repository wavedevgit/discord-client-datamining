// modules/stage_channels/StageChannelParticipants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        _fun50477: for (var _fun50477_ip = 0;;) switch (_fun50477_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.speaker;
                var3 = var1.role;
                var11 = var1.user;
                var10 = var1.userNick;
                var8 = var1.connectedOn;
                var2 = var1.voiceState;
                var4 = var1.type;
                var7 = '\x01';
                var6 = var7;
                if (!var0) {
                    _fun50477_ip = 61;
                    continue _fun50477
                }
            case 55:
                var6 = '\x00';
            case 61:
                var0 = _closure1_slot16;
                var0 = var0.STREAM;
                var5 = var7;
                if (!(var4 === var0)) {
                    _fun50477_ip = 87;
                    continue _fun50477
                }
            case 81:
                var5 = '\x00';
            case 87:
                var9 = var2.selfMute;
                var0 = '\x00';
                var4 = var0;
                if (!var9) {
                    _fun50477_ip = 108;
                    continue _fun50477
                }
            case 105:
                var4 = var7;
            case 108:
                var2 = var2.selfVideo;
                if (!var2) {
                    _fun50477_ip = 120;
                    continue _fun50477
                }
            case 117:
                var7 = var0;
            case 120:
                var2 = null;
                var12 = var2 == var3;
                var9 = undefined;
                var0 = undefined;
                if (var12) {
                    _fun50477_ip = 138;
                    continue _fun50477
                }
            case 133:
                var0 = var3.position;
            case 138:
                var2 = var2 != var0;
                var12 = 999;
                if (!var2) {
                    _fun50477_ip = 154;
                    continue _fun50477
                }
            case 151:
                var12 = var0;
            case 154:
                var0 = global;
                var2 = var0.HermesInternal;
                var2 = var2.concat;
                var3 = '';
                var14 = var2.bind(var3)(var12);
                var13 = var14.padStart;
                var12 = 3;
                var2 = '0';
                var17 = var13.bind(var14)(var12, var2);
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 12;
                var1 = var13[var1];
                var1 = var12.bind(var9)(var1);
                var15 = var1.bind(var9)(var10, var11);
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var22 = var3;
                var21 = var6;
                var20 = var5;
                var19 = var4;
                var18 = var7;
                var16 = var8;
                var0 = var22[var0](var21, var20, var19, var18, var17, var16, var15, var14);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun50478: for (var _fun50478_ip = 0;;) switch (_fun50478_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var0 = var0.voiceState;
                var4 = var0.requestToSpeakTimestamp;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun50478_ip = 73;
                    continue _fun50478
                }
            case 26:
                var0 = global;
                var3 = var0.Date;
                var2 = var3.parse;
                var4 = var2.bind(var3)(var4);
                var3 = var1.id;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = '';
                var0 = var2.bind(var0)(var4, var3);
                _fun50478_ip = 78;
                continue _fun50478;
            case 73:
                var0 = var1.id;
            case 78:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = function arg0() {
        _fun50479: for (var _fun50479_ip = 0;;) switch (_fun50479_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 13;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.RequestToSpeakStates;
                var0 = var0.REQUESTED_TO_SPEAK;
                var0 = var2 === var0;
                if (var0) {
                    _fun50479_ip = 80;
                    continue _fun50479
                }
            case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                var0 = var2 === var1;
            case 80:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var0 = function arg0() {
        _fun50480: for (var _fun50480_ip = 0;;) switch (_fun50480_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.speaker;
                var5 = var0.role;
                var8 = var0.rtsState;
                var4 = var0.blocked;
                var3 = var0.ignored;
                var2 = var0.isFriend;
                var0 = new Array(0);
                var7 = _closure1_slot19;
                var10 = undefined;
                var7 = var7.bind(var10)(var8);
                if (!var7) {
                    _fun50480_ip = 80;
                    continue _fun50480
                }
            case 60:
                var9 = var0.push;
                var7 = _closure1_slot15;
                var7 = var7.ALL_REQUESTED_TO_SPEAK;
                var7 = var9.bind(var0)(var7);
            case 80:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 13;
                var7 = var11[var7];
                var7 = var9.bind(var10)(var7);
                var7 = var7.RequestToSpeakStates;
                var7 = var7.REQUESTED_TO_SPEAK;
                if (!(var8 === var7)) {
                    _fun50480_ip = 136;
                    continue _fun50480
                }
            case 116:
                var8 = var0.push;
                var7 = _closure1_slot15;
                var7 = var7.REQUESTED_TO_SPEAK_ONLY;
                var7 = var8.bind(var0)(var7);
            case 136:
                if (var6) {
                    _fun50480_ip = 204;
                    continue _fun50480
                }
            case 139:
                var6 = null;
                if (!(var6 == var5)) {
                    _fun50480_ip = 167;
                    continue _fun50480
                }
            case 145:
                var7 = var0.push;
                var6 = _closure1_slot15;
                var6 = var6.NO_ROLE;
                var6 = var7.bind(var0)(var6);
                _fun50480_ip = 182;
                continue _fun50480;
            case 167:
                var6 = var0.push;
                var5 = var5.id;
                var5 = var6.bind(var0)(var5);
            case 182:
                var6 = var0.push;
                var5 = _closure1_slot15;
                var5 = var5.AUDIENCE;
                var5 = var6.bind(var0)(var5);
                _fun50480_ip = 224;
                continue _fun50480;
            case 204:
                var6 = var0.push;
                var5 = _closure1_slot15;
                var5 = var5.SPEAKER;
                var5 = var6.bind(var0)(var5);
            case 224:
                if (var4) {
                    _fun50480_ip = 252;
                    continue _fun50480
                }
            case 227:
                if (!var3) {
                    _fun50480_ip = 272;
                    continue _fun50480
                }
            case 230:
                var4 = var0.push;
                var3 = _closure1_slot15;
                var3 = var3.IGNORED;
                var3 = var4.bind(var0)(var3);
                _fun50480_ip = 272;
                continue _fun50480;
            case 252:
                var4 = var0.push;
                var3 = _closure1_slot15;
                var3 = var3.BLOCKED;
                var3 = var4.bind(var0)(var3);
            case 272:
                if (!var2) {
                    _fun50480_ip = 295;
                    continue _fun50480
                }
            case 275:
                var2 = var0.push;
                var1 = _closure1_slot15;
                var1 = var1.FRIEND;
                var1 = var2.bind(var0)(var1);
            case 295:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.getComparator;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var4 = {};
    var3 = 'SPEAKER';
    var4.SPEAKER = var3;
    var3 = 'AUDIENCE';
    var4.AUDIENCE = var3;
    var3 = 'NO_ROLE';
    var4.NO_ROLE = var3;
    var3 = 'ALL_REQUESTED_TO_SPEAK';
    var4.ALL_REQUESTED_TO_SPEAK = var3;
    var3 = 'REQUESTED_TO_SPEAK_ONLY';
    var4.REQUESTED_TO_SPEAK_ONLY = var3;
    var3 = 'BLOCKED';
    var4.BLOCKED = var3;
    var3 = 'IGNORED';
    var4.IGNORED = var3;
    var3 = 'FRIEND';
    var4.FRIEND = var3;
    var3 = 'SELECTED';
    var4.SELECTED = var3;
    var3 = 'MEDIA';
    var4.MEDIA = var3;
    var _closure1_slot15 = var4;
    var3 = {};
    var6 = 'VOICE';
    var3.VOICE = var6;
    var6 = 'STREAM';
    var3.STREAM = var6;
    var _closure1_slot16 = var3;
    var5 = function() { // Environment: var5
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun50482: for (var _fun50482_ip = 0;;) switch (_fun50482_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var5 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2, var3);
                    var3 = {};
                    var2.participants = var3;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 14;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var10 = var7.SecondaryIndexMap;
                    var12 = _closure1_slot20;
                    var11 = _closure1_slot17;
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var10
                        }
                    });
                    var13 = var8;
                    var7 = new var13[var10](var12, var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2._participantsIndex = var7;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var7 = var3.SecondaryIndexMap;
                    var11 = _closure1_slot18;
                    var3 = var7.prototype;
                    var5 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var12 = function() { // Environment: var3
                        var0 = new Array(0);
                        return var0;
                    };
                    var13 = var5;
                    var3 = new var13[var7](var12, var11, var10);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var2._requestToSpeakIndex = var3;
                    var2.channelId = var4;
                    var3 = _closure1_slot6;
                    var1 = var3.getChannel;
                    var4 = var1.bind(var3)(var4);
                    var1 = null;
                    var3 = var1 == var4;
                    var1 = undefined;
                    if (var3) {
                        _fun50482_ip = 189;
                        continue _fun50482
                    }
                case 179:
                    var3 = var4.getGuildId;
                    var1 = var3.bind(var4)();
                case 189:
                    var2.guildId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_getParticipantsForUser';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun50484: for (var _fun50484_ip = 0;;) switch (_fun50484_ip) {
                case 0:
                    var4 = arg0;
                    var9 = arg1;
                    var1 = this;
                    var0 = new Array(0);
                    var6 = _closure1_slot11;
                    var5 = var6.getVoiceStateForChannel;
                    var3 = var1.channelId;
                    var8 = var5.bind(var6)(var3, var4);
                    var5 = null;
                    if (!(var5 != var8)) {
                        _fun50484_ip = 756;
                        continue _fun50484
                    }
                case 46:
                    var6 = _closure1_slot10;
                    var3 = var6.getUser;
                    var3 = var3.bind(var6)(var4);
                    if (!(var5 != var3)) {
                        _fun50484_ip = 698;
                        continue _fun50484
                    }
                case 68:
                    var6 = var5 != var9;
                    var7 = null;
                    if (!var6) {
                        _fun50484_ip = 83;
                        continue _fun50484
                    }
                case 77:
                    var6 = 0;
                    var7 = var9[var6];
                case 83:
                    var6 = var1.guildId;
                    var9 = var5 != var6;
                    var6 = null;
                    if (!var9) {
                        _fun50484_ip = 118;
                        continue _fun50484
                    }
                case 97:
                    var11 = _closure1_slot8;
                    var10 = var11.getMember;
                    var9 = var1.guildId;
                    var6 = var10.bind(var11)(var9, var4);
                case 118:
                    var10 = var5 == var6;
                    var9 = undefined;
                    var11 = undefined;
                    if (var10) {
                        _fun50484_ip = 135;
                        continue _fun50484
                    }
                case 129:
                    var11 = var6.nick;
                case 135:
                    if (!(var5 == var11)) {
                        _fun50484_ip = 182;
                        continue _fun50484
                    }
                case 139:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var10 = 15;
                    var10 = var13[var10];
                    var14 = var12.bind(var9)(var10);
                    var13 = var14.getName;
                    var12 = var1.guildId;
                    var10 = var1.channelId;
                    var11 = var13.bind(var14)(var12, var10, var3);
                case 182:
                    var14 = {};
                    var14.user = var3;
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 15;
                    var10 = var12[var10];
                    var16 = var13.bind(var9)(var10);
                    var15 = var16.getName;
                    var13 = var1.guildId;
                    var10 = var1.channelId;
                    var10 = var15.bind(var16)(var13, var10, var3);
                    var14.userNick = var10;
                    var14.nick = var11;
                    var10 = _closure1_slot12;
                    var10 = var10.bind(var9)(var8, var11);
                    var14.comparator = var10;
                    var14.voiceState = var8;
                    var11 = _closure1_slot0;
                    var10 = 16;
                    var10 = var12[var10];
                    var12 = var11.bind(var9)(var10);
                    var11 = var12.getHighestHoistedRole;
                    var10 = var1.guildId;
                    var10 = var11.bind(var12)(var10, var4);
                    var14.role = var10;
                    var12 = _closure1_slot13;
                    var11 = var12.isSpeaker;
                    var10 = var1.channelId;
                    var10 = var11.bind(var12)(var4, var10);
                    var14.speaker = var10;
                    var14.member = var6;
                    var11 = _closure1_slot9;
                    var10 = var11.isBlocked;
                    var6 = var3.id;
                    var6 = var10.bind(var11)(var6);
                    var14.blocked = var6;
                    var10 = var11.isIgnored;
                    var6 = var3.id;
                    var6 = var10.bind(var11)(var6);
                    var14.ignored = var6;
                    var10 = var11.isFriend;
                    var6 = var3.id;
                    var6 = var10.bind(var11)(var6);
                    var14.isFriend = var6;
                    var10 = var5 == var7;
                    var6 = undefined;
                    if (var10) {
                        _fun50484_ip = 412;
                        continue _fun50484
                    }
                case 406:
                    var6 = var7.connectedOn;
                case 412:
                    if (!(var5 == var6)) {
                        _fun50484_ip = 433;
                        continue _fun50484
                    }
                case 416:
                    var7 = global;
                    var10 = var7.Date;
                    var7 = var10.now;
                    var6 = var7.bind(var10)();
                case 433:
                    var14.connectedOn = var6;
                    var6 = {};
                    var19 = var6;
                    var18 = var14;
                    var7 = copyDataProperties(var19, var18);
                    var7 = _closure1_slot16;
                    var7 = var7.VOICE;
                    var12 = 'type';
                    var6[var12] = var7;
                    var3 = var3.id;
                    var13 = 'id';
                    var6[var13] = var3;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 13;
                    var3 = var3[var10];
                    var7 = var7.bind(var9)(var3);
                    var3 = var7.getAudienceRequestToSpeakState;
                    var3 = var3.bind(var7)(var8);
                    var7 = 'rtsState';
                    var6[var7] = var3;
                    var3 = var0.push;
                    var3 = var3.bind(var0)(var6);
                    var8 = _closure1_slot5;
                    var6 = var8.getStreamForUser;
                    var3 = var1.guildId;
                    var15 = var6.bind(var8)(var4, var3);
                    if (!(var5 == var15)) {
                        _fun50484_ip = 579;
                        continue _fun50484
                    }
                case 558:
                    var8 = _closure1_slot5;
                    var6 = var8.getActiveStreamForUser;
                    var3 = var1.guildId;
                    var15 = var6.bind(var8)(var4, var3);
                case 579:
                    if (!(var5 != var15)) {
                        _fun50484_ip = 696;
                        continue _fun50484
                    }
                case 583:
                    var6 = var15.channelId;
                    var3 = var1.channelId;
                    if (!(var6 === var3)) {
                        _fun50484_ip = 696;
                        continue _fun50484
                    }
                case 597:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 17;
                    var6 = var3[var6];
                    var11 = var8.bind(var9)(var6);
                    var6 = var11.encodeStreamKey;
                    var11 = var6.bind(var11)(var15);
                    var6 = {};
                    var19 = var6;
                    var18 = var14;
                    var14 = copyDataProperties(var19, var18);
                    var6[var13] = var11;
                    var11 = _closure1_slot16;
                    var11 = var11.STREAM;
                    var6[var12] = var11;
                    var3 = var3[var10];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.RequestToSpeakStates;
                    var3 = var3.NONE;
                    var6[var7] = var3;
                    var3 = var0.push;
                    var3 = var3.bind(var0)(var6);
                case 696:
                    return var0;
                case 698:
                    var3 = var1.guildId;
                    var3 = var5 != var3;
                    if (!var3) {
                        _fun50484_ip = 730;
                        continue _fun50484
                    }
                case 710:
                    var7 = _closure1_slot14;
                    var6 = var7.isPublic;
                    var5 = var1.channelId;
                    var3 = var6.bind(var7)(var5);
                case 730:
                    if (!var3) {
                        _fun50484_ip = 754;
                        continue _fun50484
                    }
                case 733:
                    var3 = _closure1_slot7;
                    var2 = var3.requestMember;
                    var1 = var1.guildId;
                    var1 = var2.bind(var3)(var1, var4);
                case 754:
                    return var0;
                case 756:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateParticipant';
        var0.key = var5;
        var5 = function arg0() {
            _fun50485: for (var _fun50485_ip = 0;;) switch (_fun50485_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var3;
                    var0 = var1.participants;
                    var7 = var0[var3];
                    var0 = var1._getParticipantsForUser;
                    var2 = var0.bind(var1)(var3, var7);
                    var5 = null;
                    var0 = var5 != var7;
                    if (var0) {
                        _fun50485_ip = 58;
                        continue _fun50485
                    }
                case 47:
                    var8 = var2.length;
                    var6 = 0;
                    var0 = var6 !== var8;
                case 58:
                    if (!var0) {
                        _fun50485_ip = 107;
                        continue _fun50485
                    }
                case 61:
                    if (!(var5 != var7)) {
                        _fun50485_ip = 80;
                        continue _fun50485
                    }
                case 65:
                    var6 = var7.forEach;
                    var5 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var1 = _closure3_slot0;
                        var4 = var1._participantsIndex;
                        var3 = var4.delete;
                        var2 = var0.id;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1._requestToSpeakIndex;
                        var1 = var2.delete;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5);
                case 80:
                    var5 = var2.forEach;
                    var4 = function(arg0) { // Environment: var4
                        _fun50487: for (var _fun50487_ip = 0;;) switch (_fun50487_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var4 = var1._participantsIndex;
                                var2 = var4.set;
                                var1 = var3.id;
                                var1 = var2.bind(var4)(var1, var3);
                                var2 = var3.id;
                                var1 = _closure3_slot1;
                                if (!(var2 === var1)) {
                                    _fun50487_ip = 68;
                                    continue _fun50487
                                }
                            case 45:
                                var4 = _closure1_slot19;
                                var2 = var3.rtsState;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var2);
                                if (var1) {
                                    _fun50487_ip = 94;
                                    continue _fun50487
                                }
                            case 68:
                                var1 = _closure3_slot0;
                                var4 = var1._requestToSpeakIndex;
                                var2 = var4.delete;
                                var1 = _closure3_slot1;
                                var1 = var2.bind(var4)(var1);
                                _fun50487_ip = 119;
                                continue _fun50487;
                            case 94:
                                var1 = _closure3_slot0;
                                var2 = var1._requestToSpeakIndex;
                                var1 = var2.set;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var2)(var0, var3);
                            case 119:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var5.bind(var2)(var4);
                    var1 = var1.participants;
                    var1[var3] = var2;
                    var0 = true;
                case 107:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'rebuild';
        var0.key = var5;
        var5 = function() {
            _fun50488: for (var _fun50488_ip = 0;;) switch (_fun50488_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot6;
                    var2 = var4.getChannel;
                    var1 = var3.channelId;
                    var1 = var2.bind(var4)(var1);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun50488_ip = 179;
                        continue _fun50488
                    }
                case 40:
                    var2 = var1.isGuildStageVoice;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun50488_ip = 179;
                        continue _fun50488
                    }
                case 56:
                    var2 = global;
                    var4 = var2.Set;
                    var5 = var2.Object;
                    var2 = var5.keys;
                    var7 = _closure1_slot11;
                    var6 = var7.getVoiceStatesForChannel;
                    var1 = var1.id;
                    var1 = var6.bind(var7)(var1);
                    var8 = var2.bind(var5)(var1);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var2;
                    var1 = new var9[var4](var8, var7);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var4 = var3._participantsIndex;
                    var1 = var4.clear;
                    var1 = var1.bind(var4)();
                    var4 = var3._requestToSpeakIndex;
                    var1 = var4.clear;
                    var1 = var1.bind(var4)();
                    var1 = {};
                    var3.participants = var1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.updateParticipant;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = true;
                    return var0;
                case 179:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'version';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._participantsIndex;
            var0 = var0.version;
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0._participantsIndex;
            var1 = var2.size;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'toArray';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0._participantsIndex;
            var2 = var3.values;
            var1 = arg0;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getParticipant';
        var0.key = var5;
        var5 = function arg0() {
            _fun50493: for (var _fun50493_ip = 0;;) switch (_fun50493_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._participantsIndex;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun50493_ip = 34;
                        continue _fun50493
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'requestToSpeakVersion';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._requestToSpeakIndex;
            var0 = var0.version;
            return var0;
        };
        var0.get = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getRequestToSpeakParticipants';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var3 = var0._requestToSpeakIndex;
            var2 = var3.values;
            var1 = undefined;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var6 = 18;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/StageChannelParticipants.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.StageChannelParticipantNamedIndex = var4;
    var2.StageChannelParticipantTypes = var3;
    var2.isRequestedToSpeakAll = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3714, 1372, 5663, 1681, 3100, 1621, 3521, 3526, 4246, 1377, 3954, 4238, 3087, 3961, 5665, 3505, 2]);