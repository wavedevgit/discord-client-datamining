// modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun92992: for (var _fun92992_ip = 0;;) switch (_fun92992_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var6 = arg2;
                var1 = var0.application;
                var3 = null;
                if (!(var3 == var1)) {
                    _fun92992_ip = 61;
                    continue _fun92992
                }
            case 20:
                var7 = _closure1_slot11;
                var4 = var7.findActivity;
                var1 = var0.author;
                var2 = var1.id;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot18;
                    var0 = var0.LISTENING;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var4.bind(var7)(var2, var1);
                return var1;
            case 61:
                var1 = var0.author;
                var4 = var1.id;
                var1 = var0.activity;
                var2 = var3 == var1;
                var8 = undefined;
                if (var2) {
                    _fun92992_ip = 92;
                    continue _fun92992
                }
            case 87:
                var8 = var1.type;
            case 92:
                var2 = _closure1_slot16;
                var2 = var2.JOIN_REQUEST;
                if (!(var8 !== var2)) {
                    _fun92992_ip = 151;
                    continue _fun92992
                }
            case 109:
                var2 = var0.activity;
                var3 = var3 == var2;
                var7 = undefined;
                if (var3) {
                    _fun92992_ip = 129;
                    continue _fun92992
                }
            case 124:
                var7 = var2.type;
            case 129:
                var2 = _closure1_slot16;
                var2 = var2.STREAM_REQUEST;
                var3 = var4;
                if (!(var7 === var2)) {
                    _fun92992_ip = 187;
                    continue _fun92992
                }
            case 146:
                var3 = var6;
                _fun92992_ip = 187;
                continue _fun92992;
            case 151:
                var2 = var6;
                if (!(var4 === var6)) {
                    _fun92992_ip = 184;
                    continue _fun92992
                }
            case 158:
                var4 = var5.isPrivate;
                var4 = var4.bind(var5)();
                var2 = var6;
                if (!var4) {
                    _fun92992_ip = 184;
                    continue _fun92992
                }
            case 174:
                var4 = var5.getRecipientId;
                var2 = var4.bind(var5)();
            case 184:
                var3 = var2;
            case 187:
                var2 = _closure1_slot11;
                var1 = var2.getApplicationActivity;
                var0 = var0.application;
                var0 = var0.id;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SpotifyApplication;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityActionStates;
    var _closure1_slot15 = var6;
    var6 = var3.ActivityActionTypes;
    var _closure1_slot16 = var6;
    var6 = var3.ActivityGamePlatforms;
    var _closure1_slot17 = var6;
    var3 = var3.ActivityTypes;
    var _closure1_slot18 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.isSpotifyParty;
    var _closure1_slot19 = var6;
    var3 = var3.SPOTIFY_PLATFORM_NAME;
    var _closure1_slot20 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/ActivityRichPresenceInviteEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92994: for (var _fun92994_ip = 0;;) switch (_fun92994_ip) {
            case 0:
                var4 = arg0;
                var13 = arg1;
                var _closure2_slot0 = var13;
                var0 = var4.author;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun92994_ip = 234;
                    continue _fun92994
                }
            case 27:
                var0 = var4.activity;
                if (!(var3 != var0)) {
                    _fun92994_ip = 234;
                    continue _fun92994
                }
            case 40:
                if (!(var3 != var13)) {
                    _fun92994_ip = 234;
                    continue _fun92994
                }
            case 47:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var1 = var6[var1];
                var11 = undefined;
                var2 = var2.bind(var11)(var1);
                var1 = var2.getApplicationFromMessage;
                var1 = var1.bind(var2)(var4);
                var2 = var4.application;
                var6 = var3 == var2;
                var9 = undefined;
                if (var6) {
                    _fun92994_ip = 102;
                    continue _fun92994
                }
            case 97:
                var9 = var2.id;
            case 102:
                var6 = var3 != var9;
                var2 = null;
                if (!var6) {
                    _fun92994_ip = 126;
                    continue _fun92994
                }
            case 111:
                var7 = _closure1_slot3;
                var6 = var7.getApplication;
                var2 = var6.bind(var7)(var9);
            case 126:
                var6 = var3 == var2;
                if (!var6) {
                    _fun92994_ip = 137;
                    continue _fun92994
                }
            case 133:
                var6 = var3 != var9;
            case 137:
                if (!var6) {
                    _fun92994_ip = 161;
                    continue _fun92994
                }
            case 140:
                var8 = _closure1_slot3;
                var7 = var8.isFetchingApplication;
                var8 = var7.bind(var8)(var9);
                var7 = false;
                var6 = var7 === var8;
            case 161:
                if (!var6) {
                    _fun92994_ip = 198;
                    continue _fun92994
                }
            case 164:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 14;
                var6 = var8[var6];
                var8 = var7.bind(var11)(var6);
                var7 = var8.fetchApplication;
                var6 = false;
                var6 = var7.bind(var8)(var9, var6);
            case 198:
                if (!(var3 != var2)) {
                    _fun92994_ip = 205;
                    continue _fun92994
                }
            case 202:
                var1 = var2;
            case 205:
                var6 = _closure1_slot7;
                var2 = var6.getId;
                var36 = var2.bind(var6)();
                var2 = _closure1_slot21;
                var27 = var2.bind(var11)(var4, var13, var36);
                if (!(var3 == var1)) {
                    _fun92994_ip = 238;
                    continue _fun92994
                }
            case 234:
                var2 = undefined;
                return var2;
            case 238:
                var2 = var4.activity;
                var7 = var3 == var2;
                var6 = undefined;
                if (var7) {
                    _fun92994_ip = 258;
                    continue _fun92994
                }
            case 253:
                var6 = var2.type;
            case 258:
                var2 = _closure1_slot16;
                var2 = var2.STREAM_REQUEST;
                if (!(var6 !== var2)) {
                    _fun92994_ip = 3544;
                    continue _fun92994
                }
            case 275:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = 18;
                var6 = var2[var6];
                var7 = var7.bind(var11)(var6);
                var6 = var1.id;
                var6 = var7.bind(var11)(var27, var4, var6);
                var18 = !var6;
                var6 = _closure1_slot0;
                var7 = 19;
                var7 = var2[var7];
                var8 = var6.bind(var11)(var7);
                var7 = var8.getIsAskToJoin;
                var9 = var7.bind(var8)(var4);
                var32 = 20;
                var2 = var2[var32];
                var8 = var6.bind(var11)(var2);
                var7 = var8.getHeaderText;
                var6 = var1.name;
                var10 = var4.activity;
                var12 = var3 == var10;
                var2 = undefined;
                if (var12) {
                    _fun92994_ip = 380;
                    continue _fun92994
                }
            case 375:
                var2 = var10.type;
            case 380:
                var20 = var7.bind(var8)(var6, var2, var18);
                if (!(var3 != var27)) {
                    _fun92994_ip = 457;
                    continue _fun92994
                }
            case 391:
                var2 = var27.party;
                if (!(var3 != var2)) {
                    _fun92994_ip = 457;
                    continue _fun92994
                }
            case 401:
                var2 = global;
                var7 = var2.Array;
                var6 = var7.from;
                var10 = _closure1_slot8;
                var8 = var10.getParty;
                var2 = var27.party;
                var2 = var2.id;
                var2 = var8.bind(var10)(var2);
                if (!(var3 == var2)) {
                    _fun92994_ip = 450;
                    continue _fun92994
                }
            case 446:
                var2 = new Array(0);
            case 450:
                var15 = var6.bind(var7)(var2);
                _fun92994_ip = 461;
                continue _fun92994;
            case 457:
                var15 = new Array(0);
            case 461:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 21;
                var7 = var2[var7];
                var8 = var6.bind(var11)(var7);
                var7 = var8.getPartySize;
                var7 = var7.bind(var8)(var27);
                var14 = var7.maxPartySize;
                var7 = 22;
                var2 = var2[var7];
                var6 = var6.bind(var11)(var2);
                var2 = var6.isIOS;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun92994_ip = 567;
                    continue _fun92994
                }
            case 523:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var6 = var6.bind(var11)(var2);
                var2 = var6.isAndroid;
                var2 = var2.bind(var6)();
                var28 = undefined;
                if (!var2) {
                    _fun92994_ip = 577;
                    continue _fun92994
                }
            case 555:
                var2 = _closure1_slot17;
                var28 = var2.ANDROID;
                _fun92994_ip = 577;
                continue _fun92994;
            case 567:
                var2 = _closure1_slot17;
                var28 = var2.IOS;
            case 577:
                var7 = _closure1_slot9;
                var6 = var7.getApplicationActivity;
                var2 = var1.id;
                var6 = var6.bind(var7)(var2);
                if (!(var3 == var6)) {
                    _fun92994_ip = 624;
                    continue _fun92994
                }
            case 601:
                var10 = _closure1_slot12;
                var8 = var10.getApplicationActivity;
                var7 = var1.id;
                var2 = true;
                var6 = var8.bind(var10)(var7, var2);
            case 624:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 23;
                var2 = var8[var2];
                var10 = var7.bind(var11)(var2);
                var2 = var10.getIsInParty;
                var10 = var2.bind(var10)(var6, var27);
                var2 = 24;
                var2 = var8[var2];
                var7 = var7.bind(var11)(var2);
                var2 = var7.getCanSendInvite;
                var46 = var7;
                var45 = var27;
                var44 = var4;
                var43 = var1;
                var42 = var36;
                var12 = var46[var2](var45, var44, var43, var42, var41);
                var2 = global;
                var8 = var2.Set;
                var7 = var3 == var27;
                var21 = var6;
                var6 = undefined;
                if (var7) {
                    _fun92994_ip = 719;
                    continue _fun92994
                }
            case 713:
                var6 = var27.supported_platforms;
            case 719:
                if (!(var3 == var6)) {
                    _fun92994_ip = 727;
                    continue _fun92994
                }
            case 723:
                var6 = new Array(0);
            case 727:
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var46 = var7;
                var45 = var6;
                var6 = new var46[var8](var45, var44);
                var7 = var6 instanceof Object ? var6 : var7;
                var17 = var3 != var28;
                if (!var17) {
                    _fun92994_ip = 767;
                    continue _fun92994
                }
            case 757:
                var6 = var7.has;
                var17 = var6.bind(var7)(var28);
            case 767:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 25;
                var6 = var8[var6];
                var16 = var7.bind(var11)(var6);
                var6 = var16.canLaunchFrame;
                var16 = var6.bind(var16)(var1);
                var6 = 26;
                var6 = var8[var6];
                var19 = var7.bind(var11)(var6);
                var6 = var19.isEmbeddedApp;
                var19 = var6.bind(var19)(var1);
                var6 = 27;
                var6 = var8[var6];
                var8 = var7.bind(var11)(var6);
                var7 = var8.getCanJoin;
                var6 = {};
                var6.presenceActivity = var27;
                var6.currentUserPresenceActivity = var21;
                var6.currentUserId = var36;
                var6.message = var4;
                var6.application = var1;
                var6.isEmbeddedApplication = var19;
                var6.isFrameApplication = var16;
                var6.isGameLaunchable = var17;
                var6 = var7.bind(var8)(var6);
                var19 = var6.canJoin;
                var21 = var6.remoteJoinPlatform;
                var7 = _closure1_slot19;
                var8 = var3 == var27;
                var6 = undefined;
                if (var8) {
                    _fun92994_ip = 929;
                    continue _fun92994
                }
            case 909:
                var8 = var27.party;
                var16 = var3 == var8;
                var6 = undefined;
                if (var16) {
                    _fun92994_ip = 929;
                    continue _fun92994
                }
            case 924:
                var6 = var8.id;
            case 929:
                var16 = var7.bind(var11)(var6);
                if (var16) {
                    _fun92994_ip = 955;
                    continue _fun92994
                }
            case 937:
                var7 = var1.id;
                var6 = _closure1_slot5;
                var6 = var6.id;
                var16 = var7 === var6;
            case 955:
                var6 = var3 == var27;
                var23 = undefined;
                if (var6) {
                    _fun92994_ip = 984;
                    continue _fun92994
                }
            case 964:
                var6 = var27.timestamps;
                var7 = var3 == var6;
                var23 = undefined;
                if (var7) {
                    _fun92994_ip = 984;
                    continue _fun92994
                }
            case 979:
                var23 = var6.start;
            case 984:
                if (!(var3 == var23)) {
                    _fun92994_ip = 1006;
                    continue _fun92994
                }
            case 988:
                var7 = var3 == var27;
                var6 = undefined;
                if (var7) {
                    _fun92994_ip = 1003;
                    continue _fun92994
                }
            case 997:
                var6 = var27.created_at;
            case 1003:
                var23 = var6;
            case 1006:
                var6 = var3 == var27;
                var22 = undefined;
                if (var6) {
                    _fun92994_ip = 1035;
                    continue _fun92994
                }
            case 1015:
                var6 = var27.timestamps;
                var7 = var3 == var6;
                var22 = undefined;
                if (var7) {
                    _fun92994_ip = 1035;
                    continue _fun92994
                }
            case 1030:
                var22 = var6.end;
            case 1035:
                var6 = var3 != var23;
                var26 = '';
                var29 = var26;
                if (!var6) {
                    _fun92994_ip = 1106;
                    continue _fun92994
                }
            case 1049:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 28;
                var6 = var8[var6];
                var8 = var7.bind(var11)(var6);
                var7 = var8.formatActiveTimestamp;
                var6 = {};
                var6.start = var23;
                var6.end = var22;
                var22 = var2.Date;
                var2 = var22.now;
                var2 = var2.bind(var22)();
                var29 = var7.bind(var8)(var6, var2);
            case 1106:
                var2 = var1.icon;
                var2 = var3 != var2;
                var8 = null;
                if (!var2) {
                    _fun92994_ip = 1169;
                    continue _fun92994
                }
            case 1120:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 29;
                var2 = var7[var2];
                var23 = var6.bind(var11)(var2);
                var22 = var23.getAppIconSrc;
                var7 = var1.id;
                var6 = var1.icon;
                var2 = var1.bot;
                var8 = var22.bind(var23)(var7, var6, var2);
            case 1169:
                var2 = var1.name;
                if (var16) {
                    _fun92994_ip = 2495;
                    continue _fun92994
                }
            case 1180:
                if (var18) {
                    _fun92994_ip = 1915;
                    continue _fun92994
                }
            case 1186:
                var6 = var15.map;
                var5 = function(arg0) { // Environment: var5
                    _fun92995: for (var _fun92995_ip = 0;;) switch (_fun92995_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var2 = var3.getUser;
                            var0 = arg0;
                            var6 = var2.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 == var6)) {
                                _fun92995_ip = 67;
                                continue _fun92995
                            }
                        case 27:
                            var3 = _closure1_slot6;
                            var1 = {};
                            var2 = '0005';
                            var1.discriminator = var2;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var9 = var2;
                            var8 = var1;
                            var1 = new var9[var3](var8, var7);
                            var6 = var1 instanceof Object ? var1 : var2;
                        case 67:
                            var1 = global;
                            var2 = var1.String;
                            var3 = var0 == var6;
                            var1 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun92995_ip = 113;
                                continue _fun92995
                            }
                        case 86:
                            var5 = var6.getAvatarURL;
                            var3 = _closure2_slot0;
                            var4 = var3.guild_id;
                            var3 = 64;
                            var0 = var5.bind(var6)(var4, var3);
                        case 113:
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var6 = var6.bind(var15)(var5);
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var32];
                var22 = var7.bind(var11)(var5);
                var7 = var22.getPartyText;
                var5 = {};
                var5.maxPartySize = var14;
                var23 = var15.length;
                var5.partySize = var23;
                var24 = var4.activity;
                var25 = var3 == var24;
                var23 = undefined;
                if (var25) {
                    _fun92994_ip = 1263;
                    continue _fun92994
                }
            case 1258:
                var23 = var24.type;
            case 1263:
                var5.activityActionType = var23;
                var5 = var7.bind(var22)(var5);
                var7 = {};
                var7.canJoin = var19;
                var7.remoteJoinPlatform = var21;
                var7.canSendInvite = var12;
                var7.isInParty = var10;
                var7.message = var4;
                var7.currentUserId = var36;
                var7.application = var1;
                var7.isAskToJoin = var9;
                var9 = var7.canJoin;
                var19 = var7.remoteJoinPlatform;
                var23 = var7.canSendInvite;
                var22 = var7.isInParty;
                var12 = var7.currentUserId;
                var10 = var7.message;
                var30 = var7.application;
                var7 = var7.isAskToJoin;
                if (var9) {
                    _fun92994_ip = 1693;
                    continue _fun92994
                }
            case 1365:
                var9 = {};
                if (var23) {
                    _fun92994_ip = 1603;
                    continue _fun92994
                }
            case 1373:
                if (var22) {
                    _fun92994_ip = 1528;
                    continue _fun92994
                }
            case 1379:
                var9.label = var11;
                var22 = false;
                var9.disabled = var22;
                var23 = _closure1_slot0;
                var31 = _closure1_slot2;
                var22 = 16;
                var24 = var31[var22];
                var24 = var23.bind(var11)(var24);
                var25 = var24.intl;
                if (var7) {
                    _fun92994_ip = 1459;
                    continue _fun92994
                }
            case 1417:
                var24 = var25.string;
                var7 = var31[var22];
                var7 = var23.bind(var11)(var7);
                var7 = var7.t;
                var7 = var7.OAB5TK;
                var7 = var24.bind(var25)(var7);
                var9.footerLabel = var7;
                var7 = var9;
                _fun92994_ip = 1526;
                continue _fun92994;
            case 1459:
                var24 = var25.formatToPlainString;
                var22 = var31[var22];
                var22 = var23.bind(var11)(var22);
                var22 = var22.t;
                var23 = var22.gYVkSW;
                var22 = {};
                var31 = var10.author;
                var31 = var31.globalName;
                var22.username = var31;
                var30 = var30.name;
                var22.appName = var30;
                var22 = var24.bind(var25)(var23, var22);
                var9.footerLabel = var22;
                var7 = var9;
            case 1526:
                _fun92994_ip = 1601;
                continue _fun92994;
            case 1528:
                var25 = _closure1_slot0;
                var30 = _closure1_slot2;
                var22 = 16;
                var23 = var30[var22];
                var23 = var25.bind(var11)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var30[var22];
                var22 = var25.bind(var11)(var22);
                var22 = var22.t;
                var22 = var22.KC26NR;
                var22 = var23.bind(var24)(var22);
                var9.label = var22;
                var22 = true;
                var9.disabled = var22;
                var9.footerLabel = var11;
                var7 = var9;
            case 1601:
                _fun92994_ip = 1691;
                continue _fun92994;
            case 1603:
                var25 = _closure1_slot0;
                var30 = _closure1_slot2;
                var22 = 16;
                var23 = var30[var22];
                var23 = var25.bind(var11)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var30[var22];
                var22 = var25.bind(var11)(var22);
                var22 = var22.t;
                var22 = var22["hC/Zey"];
                var22 = var23.bind(var24)(var22);
                var9.label = var22;
                var10 = var10.author;
                var10 = var10.id;
                var10 = var10 === var12;
                var9.disabled = var10;
                var9.footerLabel = var11;
                var7 = var9;
            case 1691:
                _fun92994_ip = 1808;
                continue _fun92994;
            case 1693:
                var9 = var3 != var19;
                var10 = undefined;
                if (!var9) {
                    _fun92994_ip = 1733;
                    continue _fun92994
                }
            case 1702:
                var12 = _closure1_slot0;
                var22 = _closure1_slot2;
                var9 = 15;
                var9 = var22[var9];
                var12 = var12.bind(var11)(var9);
                var9 = var12.getRemoteJoinFooterLabel;
                var10 = var9.bind(var12)(var19);
            case 1733:
                var9 = {};
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var12 = 16;
                var19 = var24[var12];
                var19 = var23.bind(var11)(var19);
                var22 = var19.intl;
                var19 = var22.string;
                var12 = var24[var12];
                var12 = var23.bind(var11)(var12);
                var12 = var12.t;
                var12 = var12.VJlc0S;
                var12 = var19.bind(var22)(var12);
                var9.label = var12;
                var12 = false;
                var9.disabled = var12;
                var9.footerLabel = var10;
                var7 = var9;
            case 1808:
                var24 = var7.label;
                var9 = var7.disabled;
                var25 = !var9;
                var22 = var7.footerLabel;
                var23 = var3 != var27;
                if (!var23) {
                    _fun92994_ip = 1844;
                    continue _fun92994
                }
            case 1834:
                var7 = var27.application_id;
                var23 = var3 != var7;
            case 1844:
                if (!var23) {
                    _fun92994_ip = 1893;
                    continue _fun92994
                }
            case 1847:
                var12 = _closure1_slot14;
                var10 = var12.getState;
                var9 = var27.application_id;
                var7 = _closure1_slot16;
                var7 = var7.JOIN;
                var9 = var10.bind(var12)(var9, var7);
                var7 = _closure1_slot15;
                var7 = var7.LOADING;
                var23 = var9 === var7;
            case 1893:
                var12 = var6;
                var10 = var5;
                var7 = var29;
                var5 = undefined;
                var19 = var8;
                var6 = var2;
                _fun92994_ip = 3231;
                continue _fun92994;
            case 1915:
                var9 = var1.deepLinkUri;
                var30 = var3 != var9;
                var31 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var32];
                var32 = var31.bind(var11)(var9);
                var31 = var32.getDeadGameInviteText;
                var44 = var1.name;
                var46 = var32;
                var45 = var4;
                var43 = var13;
                var42 = var36;
                var41 = var30;
                var9 = var46[var31](var45, var44, var43, var42, var41, var40);
                if (var30) {
                    _fun92994_ip = 2101;
                    continue _fun92994
                }
            case 1978:
                var30 = var4.activity;
                var31 = var3 == var30;
                var32 = undefined;
                if (var31) {
                    _fun92994_ip = 1998;
                    continue _fun92994
                }
            case 1993:
                var32 = var30.type;
            case 1998:
                var30 = _closure1_slot16;
                var30 = var30.JOIN_REQUEST;
                var31 = undefined;
                if (!(var32 !== var30)) {
                    _fun92994_ip = 2071;
                    continue _fun92994
                }
            case 2014:
                var34 = _closure1_slot0;
                var35 = _closure1_slot2;
                var30 = 16;
                var32 = var35[var30];
                var32 = var34.bind(var11)(var32);
                var33 = var32.intl;
                var32 = var33.string;
                var30 = var35[var30];
                var30 = var34.bind(var11)(var30);
                var30 = var30.t;
                var30 = var30.pwEQoi;
                var31 = var32.bind(var33)(var30);
            case 2071:
                var25 = false;
                var22 = var31;
                var24 = undefined;
                var23 = false;
                var12 = null;
                var10 = var26;
                var7 = var9;
                var5 = undefined;
                var19 = var8;
                var6 = var2;
                _fun92994_ip = 3231;
                continue _fun92994;
            case 2101:
                var32 = _closure1_slot10;
                var31 = var32.getMessages;
                var30 = var13.id;
                var44 = var31.bind(var32)(var30);
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var30 = 31;
                var30 = var32[var30];
                var33 = var31.bind(var11)(var30);
                var32 = var33.isMostRecentDeadEndInvite;
                var45 = var4.id;
                var43 = var1.id;
                var46 = var33;
                var42 = var27;
                var30 = var46[var32](var45, var44, var43, var42, var41);
                var33 = _closure1_slot0;
                var34 = _closure1_slot2;
                if (var30) {
                    _fun92994_ip = 2419;
                    continue _fun92994
                }
            case 2181:
                var30 = 32;
                var30 = var34[var30];
                var31 = var33.bind(var11)(var30);
                var30 = var31.getMessageAuthorWithProcessedColor;
                var31 = var30.bind(var31)(var4);
                var30 = var31.nick;
                var31 = var31.colorString;
                var35 = {};
                var35.username = var30;
                var30 = {};
                var32 = 'bindUserMenu';
                var30.action = var32;
                var32 = var4.author;
                var32 = var32.id;
                var30.userId = var32;
                var30.linkColor = var31;
                var31 = var4.channel_id;
                var30.messageChannelId = var31;
                var31 = true;
                var30.medium = var31;
                var35.usernameOnClick = var30;
                var30 = var1.name;
                var35.applicationName = var30;
                var38 = 16;
                var30 = var34[var38];
                var30 = var33.bind(var11)(var30);
                var32 = var30.intl;
                var31 = var32.formatToParts;
                var30 = var4.author;
                var30 = var30.id;
                if (!(var30 !== var36)) {
                    _fun92994_ip = 2356;
                    continue _fun92994
                }
            case 2324:
                var36 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var38];
                var30 = var36.bind(var11)(var30);
                var30 = var30.t;
                var30 = var30["hL+n2b"];
                _fun92994_ip = 2386;
                continue _fun92994;
            case 2356:
                var37 = _closure1_slot0;
                var36 = _closure1_slot2;
                var36 = var36[var38];
                var36 = var37.bind(var11)(var36);
                var36 = var36.t;
                var30 = var36.Nq4yCj;
            case 2386:
                var5 = var31.bind(var32)(var30, var35);
                var25 = false;
                var24 = undefined;
                var22 = undefined;
                var23 = false;
                var12 = null;
                var10 = var26;
                var7 = var9;
                var19 = var8;
                var6 = var2;
                _fun92994_ip = 3231;
                continue _fun92994;
            case 2419:
                var30 = 16;
                var31 = var34[var30];
                var31 = var33.bind(var11)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var30 = var34[var30];
                var30 = var33.bind(var11)(var30);
                var30 = var30.t;
                var30 = var30["s+J8Dl"];
                var24 = var31.bind(var32)(var30);
                var25 = true;
                var23 = false;
                var22 = undefined;
                var12 = null;
                var10 = var26;
                var7 = var9;
                var5 = undefined;
                var19 = var8;
                var6 = var2;
                _fun92994_ip = 3231;
                continue _fun92994;
            case 2495:
                if (!(var3 != var27)) {
                    _fun92994_ip = 2518;
                    continue _fun92994
                }
            case 2499:
                var2 = var27.details;
                if (!(var3 != var2)) {
                    _fun92994_ip = 2518;
                    continue _fun92994
                }
            case 2509:
                var2 = var27.state;
                if (!(var3 == var2)) {
                    _fun92994_ip = 2525;
                    continue _fun92994
                }
            case 2518:
                var2 = var1.name;
                _fun92994_ip = 2626;
                continue _fun92994;
            case 2525:
                var30 = _closure1_slot0;
                var33 = _closure1_slot2;
                var9 = 16;
                var31 = var33[var9];
                var31 = var30.bind(var11)(var31);
                var32 = var31.intl;
                var31 = var32.formatToPlainString;
                var9 = var33[var9];
                var9 = var30.bind(var11)(var9);
                var9 = var9.t;
                var30 = var9.JCvHtx;
                var9 = {};
                var33 = var27.details;
                var9.track = var33;
                var33 = var27.state;
                var9.artist = var33;
                var32 = var31.bind(var32)(var30, var9);
                var31 = var32.replace;
                var30 = '\n';
                var9 = ' ';
                var2 = var31.bind(var32)(var30, var9);
            case 2626:
                var33 = _closure1_slot0;
                var9 = _closure1_slot2;
                var32 = 16;
                var30 = var9[var32];
                var30 = var33.bind(var11)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var9 = var9[var32];
                var9 = var33.bind(var11)(var9);
                var9 = var9.t;
                var9 = var9.sTo7s3;
                var30 = var30.bind(var31)(var9);
                if (var18) {
                    _fun92994_ip = 3153;
                    continue _fun92994
                }
            case 2689:
                var31 = _closure1_slot1;
                var33 = _closure1_slot2;
                var9 = 30;
                var9 = var33[var9];
                var31 = var31.bind(var11)(var9);
                var9 = var1.id;
                var31 = var31.bind(var11)(var27, var9);
                var33 = var3 != var31;
                var9 = undefined;
                if (!var33) {
                    _fun92994_ip = 2732;
                    continue _fun92994
                }
            case 2729:
                var9 = var31;
            case 2732:
                var36 = var4.author;
                var34 = _closure1_slot4;
                var31 = var34.hasConnectedAccount;
                var31 = var31.bind(var34)();
                var33 = var34.getSyncingWith;
                var38 = var33.bind(var34)();
                var33 = var34.getActivity;
                var35 = var33.bind(var34)();
                var34 = var36.id;
                var37 = _closure1_slot7;
                var33 = var37.getId;
                var33 = var33.bind(var37)();
                var33 = var34 === var33;
                var37 = var3 == var35;
                var34 = undefined;
                if (var37) {
                    _fun92994_ip = 2812;
                    continue _fun92994
                }
            case 2806:
                var34 = var35.party;
            case 2812:
                var34 = var3 != var34;
                if (!var34) {
                    _fun92994_ip = 2863;
                    continue _fun92994
                }
            case 2819:
                var39 = var3 == var27;
                var37 = undefined;
                if (var39) {
                    _fun92994_ip = 2848;
                    continue _fun92994
                }
            case 2828:
                var39 = var27.party;
                var40 = var3 == var39;
                var37 = undefined;
                if (var40) {
                    _fun92994_ip = 2848;
                    continue _fun92994
                }
            case 2843:
                var37 = var39.id;
            case 2848:
                var35 = var35.party;
                var35 = var35.id;
                var34 = var37 === var35;
            case 2863:
                var37 = var3 == var38;
                var35 = undefined;
                if (var37) {
                    _fun92994_ip = 2877;
                    continue _fun92994
                }
            case 2872:
                var35 = var38.userId;
            case 2877:
                var35 = var3 != var35;
                if (!var35) {
                    _fun92994_ip = 2907;
                    continue _fun92994
                }
            case 2884:
                var39 = var3 == var38;
                var37 = undefined;
                if (var39) {
                    _fun92994_ip = 2898;
                    continue _fun92994
                }
            case 2893:
                var37 = var38.userId;
            case 2898:
                var36 = var36.id;
                var35 = var37 === var36;
            case 2907:
                var39 = _closure1_slot0;
                var36 = _closure1_slot2;
                var37 = var36[var32];
                var37 = var39.bind(var11)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var36[var32];
                var36 = var39.bind(var11)(var36);
                var36 = var36.t;
                var36 = var36.VJlc0S;
                var37 = var37.bind(var38)(var36);
                if (var31) {
                    _fun92994_ip = 3028;
                    continue _fun92994
                }
            case 2962:
                var36 = _closure1_slot0;
                var31 = _closure1_slot2;
                var38 = var31[var32];
                var38 = var36.bind(var11)(var38);
                var39 = var38.intl;
                var38 = var39.formatToPlainString;
                var31 = var31[var32];
                var31 = var36.bind(var11)(var31);
                var31 = var31.t;
                var36 = var31.XWSHTb;
                var31 = {};
                var40 = _closure1_slot20;
                var31.platform = var40;
                var36 = var38.bind(var39)(var36, var31);
                _fun92994_ip = 3095;
                continue _fun92994;
            case 3028:
                var31 = var35;
                if (var35) {
                    _fun92994_ip = 3037;
                    continue _fun92994
                }
            case 3034:
                var31 = var34;
            case 3037:
                var36 = var37;
                if (!var31) {
                    _fun92994_ip = 3095;
                    continue _fun92994
                }
            case 3043:
                var39 = _closure1_slot0;
                var31 = _closure1_slot2;
                var37 = var31[var32];
                var37 = var39.bind(var11)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var31 = var31[var32];
                var31 = var39.bind(var11)(var31);
                var31 = var31.t;
                var31 = var31.KC26NR;
                var36 = var37.bind(var38)(var31);
            case 3095:
                var31 = {};
                var31.label = var36;
                if (var33) {
                    _fun92994_ip = 3107;
                    continue _fun92994
                }
            case 3104:
                var33 = var35;
            case 3107:
                if (var33) {
                    _fun92994_ip = 3113;
                    continue _fun92994
                }
            case 3110:
                var33 = var34;
            case 3113:
                var31.disabled = var33;
                var24 = var31.label;
                var31 = var31.disabled;
                var25 = !var31;
                var23 = false;
                var22 = var30;
                var12 = null;
                var10 = var26;
                var7 = var29;
                var5 = undefined;
                var19 = var9;
                var6 = var2;
                _fun92994_ip = 3231;
                continue _fun92994;
            case 3153:
                var31 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = var2[var32];
                var9 = var31.bind(var11)(var9);
                var29 = var9.intl;
                var9 = var29.string;
                var2 = var2[var32];
                var2 = var31.bind(var11)(var2);
                var2 = var2.t;
                var2 = var2["84qx9r"];
                var7 = var9.bind(var29)(var2);
                var6 = var1.name;
                var25 = false;
                var24 = undefined;
                var22 = var30;
                var23 = false;
                var12 = null;
                var10 = var26;
                var5 = undefined;
                var19 = var8;
            case 3231:
                var2 = new Array(0);
                if (!(var3 == var21)) {
                    _fun92994_ip = 3299;
                    continue _fun92994
                }
            case 3239:
                var9 = _closure1_slot0;
                var26 = _closure1_slot2;
                var8 = 33;
                var8 = var26[var8];
                var26 = var9.bind(var11)(var8);
                var9 = var26.getJoinFromSupportedPlatformsIconKeys;
                var8 = {};
                var30 = var3 == var27;
                var29 = undefined;
                if (var30) {
                    _fun92994_ip = 3282;
                    continue _fun92994
                }
            case 3276:
                var29 = var27.supported_platforms;
            case 3282:
                var8.platforms = var29;
                var8.currentPlatform = var28;
                var9 = var9.bind(var26)(var8);
                _fun92994_ip = 3349;
                continue _fun92994;
            case 3299:
                var26 = _closure1_slot0;
                var28 = _closure1_slot2;
                var8 = 33;
                var8 = var28[var8];
                var8 = var26.bind(var11)(var8);
                var8 = var8.ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
                var21 = var8[var21];
                var9 = var2;
                if (!(var3 != var21)) {
                    _fun92994_ip = 3349;
                    continue _fun92994
                }
            case 3336:
                var8 = var2.push;
                var8 = var8.bind(var2)(var21);
                var9 = var2;
            case 3349:
                var2 = var3 != var19;
                var28 = undefined;
                if (!var2) {
                    _fun92994_ip = 3361;
                    continue _fun92994
                }
            case 3358:
                var28 = var19;
            case 3361:
                var8 = _closure1_slot0;
                var26 = _closure1_slot2;
                var2 = 29;
                var2 = var26[var2];
                var21 = var8.bind(var11)(var2);
                var2 = var21.getAppGradientColors;
                var21 = var2.bind(var21)(var28);
                var2 = 34;
                var2 = var26[var2];
                var26 = var8.bind(var11)(var2);
                var8 = var26.getPresenceActivityInviteCoverImageURL;
                var2 = {};
                var28 = var4.id;
                var2.messageId = var28;
                var2.presenceActivity = var27;
                var2.application = var1;
                var8 = var8.bind(var26)(var2);
                var2 = {};
                var2.ctaButtonEnabled = var25;
                var2.ctaButtonText = var24;
                var2.ctaButtonIsLoading = var23;
                var2.footerLabel = var22;
                var2.gradientColors = var21;
                var2.headerText = var20;
                var2.iconSrc = var19;
                var18 = !var18;
                var2.isActive = var18;
                var2.isPlatformSupported = var17;
                var2.isSpotifyParty = var16;
                var16 = 0;
                if (!(!(var14 > var16))) {
                    _fun92994_ip = 3501;
                    continue _fun92994
                }
            case 3496:
                var14 = var15.length;
            case 3501:
                var2.maxPartySize = var14;
                var2.partyMemberAvatarURIs = var12;
                var2.partySizeText = var10;
                var2.platformIconKeys = var9;
                var2.coverImageUrl = var8;
                var2.subtitle = var7;
                var2.title = var6;
                var2.hiddenEmbedMessageContent = var5;
                return var2;
            case 3544:
                var2 = var1.icon;
                var2 = var3 != var2;
                var6 = null;
                if (!var2) {
                    _fun92994_ip = 3607;
                    continue _fun92994
                }
            case 3558:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 29;
                var2 = var7[var2];
                var9 = var5.bind(var11)(var2);
                var8 = var9.getAppIconSrc;
                var7 = var1.id;
                var5 = var1.icon;
                var2 = var1.bot;
                var6 = var8.bind(var9)(var7, var5, var2);
            case 3607:
                var2 = var3 != var6;
                var7 = undefined;
                if (!var2) {
                    _fun92994_ip = 3619;
                    continue _fun92994
                }
            case 3616:
                var7 = var6;
            case 3619:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 29;
                var2 = var12[var2];
                var5 = var8.bind(var11)(var2);
                var2 = var5.getAppGradientColors;
                var7 = var2.bind(var5)(var7);
                var5 = _closure1_slot21;
                var14 = _closure1_slot7;
                var2 = var14.getId;
                var2 = var2.bind(var14)();
                var5 = var5.bind(var11)(var4, var13, var2);
                var10 = _closure1_slot1;
                var0 = 18;
                var0 = var12[var0];
                var2 = var10.bind(var11)(var0);
                var0 = var1.id;
                var5 = var2.bind(var11)(var5, var4, var0);
                var0 = 20;
                var0 = var12[var0];
                var9 = var8.bind(var11)(var0);
                var2 = var9.getRequestToStreamText;
                var0 = var14.getId;
                var0 = var0.bind(var14)();
                var2 = var2.bind(var9)(var4, var13, var0);
                var0 = 35;
                var0 = var12[var0];
                var0 = var10.bind(var11)(var0);
                var9 = var0.bind(var11)(var4);
                var4 = var9.text;
                var0 = {};
                var9 = var9.isDisabled;
                var9 = !var9;
                var0.ctaButtonEnabled = var9;
                var0.ctaButtonText = var4;
                var4 = false;
                var0.ctaButtonIsLoading = var4;
                var0.footerLabel = var3;
                var0.gradientColors = var7;
                var7 = 16;
                var7 = var12[var7];
                var7 = var8.bind(var11)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = 36;
                var7 = var12[var7];
                var7 = var10.bind(var11)(var7);
                var7 = var7.nAyuPp;
                var7 = var8.bind(var9)(var7);
                var0.headerText = var7;
                var0.iconSrc = var6;
                var0.isActive = var5;
                var0.isSpotifyParty = var4;
                var4 = true;
                var0.isPlatformSupported = var4;
                var4 = 0;
                var0.maxPartySize = var4;
                var0.partyMemberAvatarURIs = var3;
                var0.partySizeText = var3;
                var4 = new Array(0);
                var0.platformIconKeys = var4;
                var0.coverImageUrl = var3;
                var0.subtitle = var2;
                var1 = var1.name;
                var0.title = var1;
                return var0;
        }
    };
    var2.createActivityRichPresenceInviteEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3455, 5699, 12135, 1628, 1216, 12136, 5709, 4251, 3611, 5708, 1621, 9925, 660, 5700, 5396, 12137, 1234, 12138, 12139, 12140, 12141, 12142, 478, 12143, 12144, 4672, 4673, 12147, 6914, 11663, 12148, 12149, 6743, 12150, 12151, 12154, 2278, 2]);