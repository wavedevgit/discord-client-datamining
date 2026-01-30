// modules/notifications/NotificationTextUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun69578: for (var _fun69578_ip = 0;;) switch (_fun69578_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun69578_ip = 45;
                    continue _fun69578
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun69578_ip = 54;
                    continue _fun69578
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun69578_ip = 344;
                    continue _fun69578
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun69578_ip = 322;
                    continue _fun69578
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun69578_ip = 282;
                    continue _fun69578
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun69578_ip = 269;
                    continue _fun69578
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun69578_ip = 162;
                    continue _fun69578
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun69578_ip = 178;
                    continue _fun69578
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun69578_ip = 248;
                    continue _fun69578
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun69578_ip = 248;
                    continue _fun69578
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun69578_ip = 233;
                    continue _fun69578
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun69578_ip = 246;
                    continue _fun69578
                }
            case 233:
                var8 = _closure1_slot30;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun69578_ip = 264;
                continue _fun69578;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun69578_ip = 282;
                continue _fun69578;
            case 269:
                var6 = _closure1_slot30;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun69578_ip = 322;
                    continue _fun69578
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun69578_ip = 329;
                    continue _fun69578
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun69579: for (var _fun69579_ip = 0;;) switch (_fun69579_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun69579_ip = 56;
                                continue _fun69579
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun69579_ip = 67;
                            continue _fun69579;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun69580: for (var _fun69580_ip = 0;;) switch (_fun69580_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun69580_ip = 23;
                    continue _fun69580
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun69580_ip = 33;
                    continue _fun69580
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun69580_ip = 70;
                    continue _fun69580
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun69580_ip = 55;
                    continue _fun69580
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var4 = function(arg0, arg1, arg2) { // Original name: shouldNotifyBase, environment: var1
        _fun69581: for (var _fun69581_ip = 0;;) switch (_fun69581_ip) {
            case 0:
                var2 = arg1;
                var8 = arg2;
                var5 = arguments[3];
                var9 = undefined;
                if (!(var5 === var9)) {
                    _fun69581_ip = 17;
                    continue _fun69581
                }
            case 15:
                var5 = {};
            case 17:
                var1 = var2.hasFlag;
                var0 = _closure1_slot26;
                var0 = var0.SPAMMER;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun69581_ip = 309;
                    continue _fun69581
                }
            case 47:
                var0 = var8.isManaged;
                var0 = var0.bind(var8)();
                if (var0) {
                    _fun69581_ip = 305;
                    continue _fun69581
                }
            case 63:
                var0 = var8.getGuildId;
                var4 = var0.bind(var8)();
                var0 = null;
                var0 = var0 == var4;
                if (var0) {
                    _fun69581_ip = 100;
                    continue _fun69581
                }
            case 82:
                var3 = _closure1_slot4;
                var1 = var3.isLurking;
                var1 = var1.bind(var3)(var4);
                var0 = !var1;
            case 100:
                if (!var0) {
                    _fun69581_ip = 303;
                    continue _fun69581
                }
            case 106:
                var1 = var5.ignoreSameUser;
                var3 = !var1;
                if (!var3) {
                    _fun69581_ip = 135;
                    continue _fun69581
                }
            case 118:
                var4 = var2.id;
                var1 = arg0;
                var1 = var1.id;
                var3 = var4 === var1;
            case 135:
                var1 = !var3;
                if (var3) {
                    _fun69581_ip = 300;
                    continue _fun69581
                }
            case 144:
                var4 = _closure1_slot13;
                var3 = var4.isBlockedOrIgnored;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                if (!var2) {
                    _fun69581_ip = 297;
                    continue _fun69581
                }
            case 173:
                var3 = var5.ignoreStatus;
                var4 = !var3;
                if (!var4) {
                    _fun69581_ip = 213;
                    continue _fun69581
                }
            case 185:
                var7 = _closure1_slot16;
                var3 = var7.getStatus;
                var7 = var3.bind(var7)();
                var3 = _closure1_slot25;
                var3 = var3.DND;
                var4 = var7 === var3;
            case 213:
                var3 = !var4;
                if (var4) {
                    _fun69581_ip = 294;
                    continue _fun69581
                }
            case 219:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 18;
                var4 = var10[var4];
                var4 = var7.bind(var9)(var4);
                var7 = var4.FocusMode;
                var4 = var7.getSetting;
                var4 = var4.bind(var7)();
                var4 = !var4;
                if (!var4) {
                    _fun69581_ip = 291;
                    continue _fun69581
                }
            case 261:
                var5 = var5.ignoreNoMessagesSetting;
                var5 = !var5;
                if (!var5) {
                    _fun69581_ip = 288;
                    continue _fun69581
                }
            case 273:
                var7 = _closure1_slot17;
                var6 = var7.allowNoMessages;
                var5 = var6.bind(var7)(var8);
            case 288:
                var4 = !var5;
            case 291:
                var3 = var4;
            case 294:
                var2 = var3;
            case 297:
                var1 = var2;
            case 300:
                var0 = var1;
            case 303:
                return var0;
            case 305:
                var0 = false;
                return var0;
            case 309:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot31 = var4;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: getInviteEmbedFormatString, environment: var1
        _fun69582: for (var _fun69582_ip = 0;;) switch (_fun69582_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = _closure1_slot21;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var2)) {
                    _fun69582_ip = 73;
                    continue _fun69582
                }
            case 25:
                var1 = _closure1_slot21;
                var1 = var1.GUILD_TEXT;
                if (!(var1 !== var2)) {
                    _fun69582_ip = 73;
                    continue _fun69582
                }
            case 39:
                var1 = _closure1_slot21;
                var1 = var1.GROUP_DM;
                if (!(var1 !== var2)) {
                    _fun69582_ip = 68;
                    continue _fun69582
                }
            case 53:
                var0 = _closure1_slot21;
                var0 = var0.DM;
                var0 = arg3;
                return var0;
            case 68:
                var0 = arg2;
                return var0;
            case 73:
                var0 = arg1;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var8 = var3.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot7 = var8;
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 15;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 16;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.ActivityActionTypes;
    var _closure1_slot20 = var5;
    var5 = var3.ChannelTypes;
    var _closure1_slot21 = var5;
    var5 = var3.MessageFlags;
    var _closure1_slot22 = var5;
    var5 = var3.MessageTypes;
    var _closure1_slot23 = var5;
    var5 = var3.MessageTypesSets;
    var _closure1_slot24 = var5;
    var5 = var3.StatusTypes;
    var _closure1_slot25 = var5;
    var3 = var3.UserFlags;
    var _closure1_slot26 = var3;
    var3 = 17;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.ThreadMemberFlags;
    var _closure1_slot27 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: renderTitle, environment: var1
        _fun69583: for (var _fun69583_ip = 0;;) switch (_fun69583_ip) {
            case 0:
                var10 = arg2;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var3 = var2[var1];
                var9 = undefined;
                var6 = var5.bind(var9)(var3);
                var4 = var6.isolate;
                var3 = arg0;
                var6 = var4.bind(var6)(var3);
                var3 = var2[var1];
                var4 = var5.bind(var9)(var3);
                var3 = var4.isolate;
                var11 = 23;
                var2 = var2[var11];
                var13 = var5.bind(var9)(var2);
                var12 = var13.computeChannelName;
                var17 = _closure1_slot18;
                var16 = _closure1_slot13;
                var18 = arg1;
                var15 = true;
                var19 = var13;
                var2 = var19[var12](var18, var17, var16, var15, var14);
                var5 = var3.bind(var4)(var2);
                var2 = null;
                var2 = var2 != var10;
                var4 = '';
                var3 = var4;
                if (!var2) {
                    _fun69583_ip = 198;
                    continue _fun69583
                }
            case 116:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = var7[var1];
                var2 = var8.bind(var9)(var1);
                var1 = var2.isolate;
                var7 = var7[var11];
                var9 = var8.bind(var9)(var7);
                var8 = var9.computeChannelName;
                var7 = _closure1_slot18;
                var0 = _closure1_slot13;
                var0 = var8.bind(var9)(var10, var7, var0);
                var2 = var1.bind(var2)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = ', ';
                var3 = var1.bind(var0)(var2);
            case 198:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var17 = ' (';
                var14 = ')';
                var19 = var4;
                var18 = var6;
                var16 = var5;
                var15 = var3;
                var0 = var19[var2](var18, var17, var16, var15, var14, var13);
                return var0;
        }
    };
    var _closure1_slot28 = var3;
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notifications/NotificationTextUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.shouldNotifyBase = var4;
    var4 = function(arg0, arg1) { // Original name: shouldNotify, environment: var1
        _fun69584: for (var _fun69584_ip = 0;;) switch (_fun69584_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var0 = arguments[2];
                var11 = arguments[3];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun69584_ip = 20;
                    continue _fun69584
                }
            case 18:
                var0 = true;
            case 20:
                if (!(var11 === var4)) {
                    _fun69584_ip = 26;
                    continue _fun69584
                }
            case 24:
                var11 = false;
            case 26:
                var2 = var6.flags;
                var7 = null;
                if (!(var7 != var2)) {
                    _fun69584_ip = 93;
                    continue _fun69584
                }
            case 37:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 19;
                var3 = var8[var3];
                var8 = var5.bind(var4)(var3);
                var5 = var8.hasFlag;
                var3 = var6.flags;
                var2 = _closure1_slot22;
                var2 = var2.SUPPRESS_NOTIFICATIONS;
                var2 = var5.bind(var8)(var3, var2);
                if (var2) {
                    _fun69584_ip = 1014;
                    continue _fun69584
                }
            case 93:
                var5 = _closure1_slot10;
                var3 = var5.getChannel;
                var10 = var3.bind(var5)(var1);
                var8 = var6.type;
                var3 = _closure1_slot23;
                var5 = var3.THREAD_STARTER_MESSAGE;
                var3 = var10;
                if (!(var8 === var5)) {
                    _fun69584_ip = 161;
                    continue _fun69584
                }
            case 132:
                var9 = _closure1_slot10;
                var8 = var9.getChannel;
                var12 = var7 == var10;
                var5 = undefined;
                if (var12) {
                    _fun69584_ip = 156;
                    continue _fun69584
                }
            case 150:
                var5 = var10.parent_id;
            case 156:
                var3 = var8.bind(var9)(var5);
            case 161:
                var10 = _closure1_slot18;
                var5 = var10.getCurrentUser;
                var5 = var5.bind(var10)();
                var9 = var10.getUser;
                var12 = var6.author;
                var13 = var7 == var12;
                var8 = undefined;
                if (var13) {
                    _fun69584_ip = 200;
                    continue _fun69584
                }
            case 195:
                var8 = var12.id;
            case 200:
                var10 = var9.bind(var10)(var8);
                if (!(var7 != var3)) {
                    _fun69584_ip = 1010;
                    continue _fun69584
                }
            case 212:
                if (!(var7 != var5)) {
                    _fun69584_ip = 1010;
                    continue _fun69584
                }
            case 219:
                if (!(var7 != var10)) {
                    _fun69584_ip = 1010;
                    continue _fun69584
                }
            case 226:
                var9 = var3.type;
                var8 = _closure1_slot21;
                var8 = var8.GROUP_DM;
                if (!(var9 === var8)) {
                    _fun69584_ip = 267;
                    continue _fun69584
                }
            case 245:
                var9 = var6.type;
                var8 = _closure1_slot23;
                var8 = var8.RECIPIENT_REMOVE;
                if (!(var9 !== var8)) {
                    _fun69584_ip = 1006;
                    continue _fun69584
                }
            case 267:
                var9 = _closure1_slot19;
                var8 = var9.areSlayerNotificationsSuppressed;
                var8 = var8.bind(var9)();
                if (!var8) {
                    _fun69584_ip = 324;
                    continue _fun69584
                }
            case 286:
                var9 = var3.type;
                var8 = _closure1_slot21;
                var8 = var8.DM;
                var8 = var9 === var8;
                if (var8) {
                    _fun69584_ip = 318;
                    continue _fun69584
                }
            case 308:
                var9 = var3.linkedLobby;
                var8 = var7 != var9;
            case 318:
                if (var8) {
                    _fun69584_ip = 1002;
                    continue _fun69584
                }
            case 324:
                var9 = _closure1_slot31;
                var8 = {};
                var8.ignoreStatus = var11;
                var11 = _closure1_slot24;
                var13 = var11.SELF_MENTIONABLE_SYSTEM;
                var12 = var13.has;
                var11 = var6.type;
                var11 = var12.bind(var13)(var11);
                var8.ignoreSameUser = var11;
                var18 = undefined;
                var17 = var5;
                var16 = var10;
                var15 = var3;
                var14 = var8;
                var8 = var18[var9](var17, var16, var15, var14, var13);
                if (var8) {
                    _fun69584_ip = 390;
                    continue _fun69584
                }
            case 386:
                var8 = false;
                return var8;
            case 390:
                var9 = _closure1_slot5;
                var8 = var9.isMessageRequest;
                var8 = var8.bind(var9)(var1);
                if (var8) {
                    _fun69584_ip = 998;
                    continue _fun69584
                }
            case 411:
                if (var0) {
                    _fun69584_ip = 484;
                    continue _fun69584
                }
            case 414:
                var9 = _closure1_slot14;
                var8 = var9.getChannelId;
                var10 = _closure1_slot15;
                var0 = var10.getGuildId;
                var0 = var0.bind(var10)();
                var9 = var8.bind(var9)(var0);
                var0 = var3.id;
                if (!(var9 !== var0)) {
                    _fun69584_ip = 480;
                    continue _fun69584
                }
            case 452:
                var8 = _closure1_slot9;
                var0 = var8.getCurrentSidebarChannelId;
                var8 = var0.bind(var8)(var9);
                var0 = var3.id;
                if (!(var8 === var0)) {
                    _fun69584_ip = 484;
                    continue _fun69584
                }
            case 476:
                var0 = false;
                return var0;
            case 480:
                var0 = false;
                return var0;
            case 484:
                var8 = _closure1_slot13;
                var0 = var8.isBlockedOrIgnoredForMessage;
                var0 = var0.bind(var8)(var6);
                if (var0) {
                    _fun69584_ip = 994;
                    continue _fun69584
                }
            case 505:
                var0 = var6.activity_instance;
                if (!(var4 !== var0)) {
                    _fun69584_ip = 553;
                    continue _fun69584
                }
            case 515:
                var0 = var6.interaction;
                if (!(var7 != var0)) {
                    _fun69584_ip = 553;
                    continue _fun69584
                }
            case 525:
                var0 = var6.interaction;
                var0 = var0.user;
                var8 = var0.id;
                var0 = var5.id;
                if (!(var8 !== var0)) {
                    _fun69584_ip = 990;
                    continue _fun69584
                }
            case 553:
                var0 = var6.application_id;
                if (!(var7 != var0)) {
                    _fun69584_ip = 618;
                    continue _fun69584
                }
            case 563:
                var8 = _closure1_slot3;
                var0 = var8.getCurrentEmbeddedActivity;
                var0 = var0.bind(var8)();
                var7 = var7 == var0;
                var8 = undefined;
                if (var7) {
                    _fun69584_ip = 591;
                    continue _fun69584
                }
            case 586:
                var8 = var0.applicationId;
            case 591:
                var7 = var6.application_id;
                if (!(var8 === var7)) {
                    _fun69584_ip = 618;
                    continue _fun69584
                }
            case 601:
                var0 = var0.location;
                var0 = var0.channel_id;
                if (!(var0 !== var1)) {
                    _fun69584_ip = 986;
                    continue _fun69584
                }
            case 618:
                var7 = _closure1_slot8;
                var1 = var7.has;
                var0 = var3.type;
                var0 = var1.bind(var7)(var0);
                if (var0) {
                    _fun69584_ip = 827;
                    continue _fun69584
                }
            case 643:
                var7 = _closure1_slot7;
                var1 = var7.has;
                var0 = var3.type;
                var0 = var1.bind(var7)(var0);
                var0 = !var0;
                if (var0) {
                    _fun69584_ip = 691;
                    continue _fun69584
                }
            case 668:
                var7 = _closure1_slot12;
                var1 = var7.getChannelId;
                var7 = var1.bind(var7)();
                var1 = var3.id;
                var0 = var7 === var1;
            case 691:
                var7 = _closure1_slot17;
                var1 = var7.allowAllMessages;
                var1 = var1.bind(var7)(var3);
                if (!var1) {
                    _fun69584_ip = 714;
                    continue _fun69584
                }
            case 711:
                if (var0) {
                    _fun69584_ip = 823;
                    continue _fun69584
                }
            case 714:
                var7 = _closure1_slot17;
                var1 = var7.isSuppressEveryoneEnabled;
                var0 = var3.getGuildId;
                var0 = var0.bind(var3)();
                var9 = var1.bind(var7)(var0);
                var7 = _closure1_slot17;
                var1 = var7.isSuppressRolesEnabled;
                var0 = var3.getGuildId;
                var0 = var0.bind(var3)();
                var8 = var1.bind(var7)(var0);
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 21;
                var0 = var7[var0];
                var7 = var1.bind(var4)(var0);
                var1 = var7.isRawMessageMentioned;
                var0 = {};
                var0.rawMessage = var6;
                var10 = var5.id;
                var0.userId = var10;
                var0.suppressEveryone = var9;
                var0.suppressRoles = var8;
                var0 = var1.bind(var7)(var0);
                return var0;
            case 823:
                var0 = true;
                return var0;
            case 827:
                var7 = _closure1_slot6;
                var1 = var7.isMuted;
                var0 = var3.id;
                var0 = var1.bind(var7)(var0);
                if (var0) {
                    _fun69584_ip = 982;
                    continue _fun69584
                }
            case 853:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 20;
                var0 = var7[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.computeThreadNotificationSetting;
                var3 = var0.bind(var1)(var3);
                var0 = _closure1_slot27;
                var0 = var0.NO_MESSAGES;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun69584_ip = 980;
                    continue _fun69584
                }
            case 901:
                var1 = _closure1_slot27;
                var1 = var1.ALL_MESSAGES;
                var1 = var3 === var1;
                if (var1) {
                    _fun69584_ip = 977;
                    continue _fun69584
                }
            case 918:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var2 = var7[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.isRawMessageMentioned;
                var2 = {};
                var2.rawMessage = var6;
                var5 = var5.id;
                var2.userId = var5;
                var5 = false;
                var2.suppressEveryone = var5;
                var2.suppressRoles = var5;
                var1 = var3.bind(var4)(var2);
            case 977:
                var0 = var1;
            case 980:
                return var0;
            case 982:
                var0 = false;
                return var0;
            case 986:
                var0 = false;
                return var0;
            case 990:
                var0 = false;
                return var0;
            case 994:
                var0 = false;
                return var0;
            case 998:
                var0 = false;
                return var0;
            case 1002:
                var0 = false;
                return var0;
            case 1006:
                var0 = false;
                return var0;
            case 1010:
                var0 = false;
                return var0;
            case 1014:
                var0 = false;
                return var0;
        }
    };
    var2.shouldNotify = var4;
    var4 = function(arg0, arg1) { // Original name: shouldNotifyForSelectedChannel, environment: var1
        _fun69585: for (var _fun69585_ip = 0;;) switch (_fun69585_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var3 = _closure1_slot14;
                var1 = var3.getChannelId;
                var4 = _closure1_slot15;
                var0 = var4.getGuildId;
                var0 = var0.bind(var4)();
                var0 = var1.bind(var3)(var0);
                if (!(var0 === var2)) {
                    _fun69585_ip = 382;
                    continue _fun69585
                }
            case 45:
                var1 = _closure1_slot10;
                var0 = var1.getChannel;
                var3 = var0.bind(var1)(var2);
                var1 = var8.type;
                var0 = _closure1_slot23;
                var0 = var0.THREAD_STARTER_MESSAGE;
                var9 = var3;
                if (!(var1 === var0)) {
                    _fun69585_ip = 112;
                    continue _fun69585
                }
            case 81:
                var2 = _closure1_slot10;
                var1 = var2.getChannel;
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun69585_ip = 107;
                    continue _fun69585
                }
            case 101:
                var0 = var3.parent_id;
            case 107:
                var9 = var1.bind(var2)(var0);
            case 112:
                var3 = _closure1_slot18;
                var0 = var3.getCurrentUser;
                var4 = var0.bind(var3)();
                var2 = var3.getUser;
                var5 = var8.author;
                var1 = null;
                var6 = var1 == var5;
                var10 = undefined;
                var0 = undefined;
                if (var6) {
                    _fun69585_ip = 155;
                    continue _fun69585
                }
            case 150:
                var0 = var5.id;
            case 155:
                var5 = var2.bind(var3)(var0);
                var0 = var1 != var9;
                if (!var0) {
                    _fun69585_ip = 171;
                    continue _fun69585
                }
            case 167:
                var0 = var1 != var4;
            case 171:
                if (!var0) {
                    _fun69585_ip = 178;
                    continue _fun69585
                }
            case 174:
                var0 = var1 != var5;
            case 178:
                if (!var0) {
                    _fun69585_ip = 380;
                    continue _fun69585
                }
            case 184:
                var1 = var9.isManaged;
                var1 = var1.bind(var9)();
                var1 = !var1;
                if (!var1) {
                    _fun69585_ip = 377;
                    continue _fun69585
                }
            case 203:
                var3 = var5.hasFlag;
                var2 = _closure1_slot26;
                var2 = var2.SPAMMER;
                var2 = var3.bind(var5)(var2);
                var2 = !var2;
                if (!var2) {
                    _fun69585_ip = 374;
                    continue _fun69585
                }
            case 233:
                var6 = _closure1_slot13;
                var3 = var6.isBlockedOrIgnoredForMessage;
                var3 = var3.bind(var6)(var8);
                var3 = !var3;
                if (!var3) {
                    _fun69585_ip = 371;
                    continue _fun69585
                }
            case 254:
                var5 = var5.id;
                var4 = var4.id;
                var4 = var5 !== var4;
                if (!var4) {
                    _fun69585_ip = 368;
                    continue _fun69585
                }
            case 271:
                var6 = _closure1_slot16;
                var5 = var6.getStatus;
                var6 = var5.bind(var6)();
                var5 = _closure1_slot25;
                var5 = var5.DND;
                var5 = var6 !== var5;
                if (!var5) {
                    _fun69585_ip = 365;
                    continue _fun69585
                }
            case 302:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 18;
                var6 = var11[var6];
                var6 = var8.bind(var10)(var6);
                var8 = var6.FocusMode;
                var6 = var8.getSetting;
                var6 = var6.bind(var8)();
                var6 = !var6;
                if (!var6) {
                    _fun69585_ip = 362;
                    continue _fun69585
                }
            case 344:
                var8 = _closure1_slot17;
                var7 = var8.allowNoMessages;
                var7 = var7.bind(var8)(var9);
                var6 = !var7;
            case 362:
                var5 = var6;
            case 365:
                var4 = var5;
            case 368:
                var3 = var4;
            case 371:
                var2 = var3;
            case 374:
                var1 = var2;
            case 377:
                var0 = var1;
            case 380:
                return var0;
            case 382:
                var0 = false;
                return var0;
        }
    };
    var2.shouldNotifyForSelectedChannel = var4;
    var4 = function(arg0, arg1) { // Original name: shouldNotifyForForumThreadCreation, environment: var1
        _fun69586: for (var _fun69586_ip = 0;;) switch (_fun69586_ip) {
            case 0:
                var6 = arg1;
                var3 = arguments[2];
                var9 = arguments[3];
                var8 = undefined;
                if (!(var3 === var8)) {
                    _fun69586_ip = 17;
                    continue _fun69586
                }
            case 15:
                var3 = true;
            case 17:
                if (!(var9 === var8)) {
                    _fun69586_ip = 23;
                    continue _fun69586
                }
            case 21:
                var9 = false;
            case 23:
                var2 = _closure1_slot18;
                var0 = var2.getCurrentUser;
                var7 = var0.bind(var2)();
                var1 = var2.getUser;
                var0 = arg0;
                var0 = var0.ownerId;
                var5 = var1.bind(var2)(var0);
                var1 = null;
                var0 = var1 != var6;
                if (!var0) {
                    _fun69586_ip = 72;
                    continue _fun69586
                }
            case 68:
                var0 = var1 != var7;
            case 72:
                if (!var0) {
                    _fun69586_ip = 79;
                    continue _fun69586
                }
            case 75:
                var0 = var1 != var5;
            case 79:
                if (!var0) {
                    _fun69586_ip = 236;
                    continue _fun69586
                }
            case 85:
                var2 = _closure1_slot31;
                var1 = {};
                var1.ignoreStatus = var9;
                var9 = true;
                var1.ignoreNoMessagesSetting = var9;
                var14 = undefined;
                var13 = var7;
                var12 = var5;
                var11 = var6;
                var10 = var1;
                var2 = var14[var2](var13, var12, var11, var10, var9);
                var1 = !var2;
                var1 = !var1;
                if (!var2) {
                    _fun69586_ip = 233;
                    continue _fun69586
                }
            case 130:
                var8 = _closure1_slot17;
                var7 = var8.isGuildOrCategoryOrChannelMuted;
                var5 = var6.guild_id;
                var2 = var6.id;
                var2 = var7.bind(var8)(var5, var2);
                var2 = !var2;
                if (!var2) {
                    _fun69586_ip = 230;
                    continue _fun69586
                }
            case 162:
                var5 = !var3;
                if (!var5) {
                    _fun69586_ip = 206;
                    continue _fun69586
                }
            case 168:
                var8 = _closure1_slot14;
                var7 = var8.getChannelId;
                var9 = _closure1_slot15;
                var3 = var9.getGuildId;
                var3 = var3.bind(var9)();
                var7 = var7.bind(var8)(var3);
                var3 = var6.id;
                var5 = var7 === var3;
            case 206:
                var3 = !var5;
                if (var5) {
                    _fun69586_ip = 227;
                    continue _fun69586
                }
            case 212:
                var5 = _closure1_slot17;
                var4 = var5.getNewForumThreadsCreated;
                var3 = var4.bind(var5)(var6);
            case 227:
                var2 = var3;
            case 230:
                var1 = var2;
            case 233:
                var0 = var1;
            case 236:
                return var0;
        }
    };
    var2.shouldNotifyForForumThreadCreation = var4;
    var4 = function(arg0, arg1) { // Original name: shouldNotifyVoiceStatus, environment: var1
        _fun69587: for (var _fun69587_ip = 0;;) switch (_fun69587_ip) {
            case 0:
                var2 = _closure1_slot18;
                var0 = var2.getCurrentUser;
                var5 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun69587_ip = 44;
                    continue _fun69587
                }
            case 25:
                var4 = _closure1_slot31;
                var3 = undefined;
                var2 = arg0;
                var1 = arg1;
                var0 = var4.bind(var3)(var5, var2, var1);
            case 44:
                return var0;
        }
    };
    var2.shouldNotifyVoiceStatus = var4;
    var2.renderTitle = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: makeTextChatNotification, environment: var1
        _fun69588: for (var _fun69588_ip = 0;;) switch (_fun69588_ip) {
            case 0:
                var7 = arg0;
                var0 = arg1;
                var10 = arg2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 26;
                var2 = var3[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var5 = var6.getName;
                var2 = var7.getGuildId;
                var4 = var2.bind(var7)();
                var2 = var7.id;
                var14 = var5.bind(var6)(var4, var2, var10);
                var4 = var7.type;
                var2 = _closure1_slot21;
                var2 = var2.GUILD_ANNOUNCEMENT;
                if (!(var2 !== var4)) {
                    _fun69588_ip = 277;
                    continue _fun69588
                }
            case 84:
                var2 = _closure1_slot21;
                var2 = var2.GUILD_TEXT;
                if (!(var2 !== var4)) {
                    _fun69588_ip = 277;
                    continue _fun69588
                }
            case 101:
                var2 = _closure1_slot21;
                var2 = var2.GUILD_VOICE;
                if (!(var2 !== var4)) {
                    _fun69588_ip = 277;
                    continue _fun69588
                }
            case 118:
                var2 = _closure1_slot21;
                var2 = var2.ANNOUNCEMENT_THREAD;
                if (!(var2 !== var4)) {
                    _fun69588_ip = 277;
                    continue _fun69588
                }
            case 135:
                var2 = _closure1_slot21;
                var2 = var2.PUBLIC_THREAD;
                if (!(var2 !== var4)) {
                    _fun69588_ip = 277;
                    continue _fun69588
                }
            case 152:
                var2 = _closure1_slot21;
                var2 = var2.PRIVATE_THREAD;
                if (!(var2 !== var4)) {
                    _fun69588_ip = 277;
                    continue _fun69588
                }
            case 166:
                var2 = _closure1_slot21;
                var2 = var2.GROUP_DM;
                var6 = var14;
                if (!(var2 === var4)) {
                    _fun69588_ip = 440;
                    continue _fun69588
                }
            case 186:
                var2 = var7.isManaged;
                var2 = var2.bind(var7)();
                if (!var2) {
                    _fun69588_ip = 205;
                    continue _fun69588
                }
            case 199:
                var2 = var10.bot;
            case 205:
                if (!var2) {
                    _fun69588_ip = 253;
                    continue _fun69588
                }
            case 208:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 23;
                var4 = var8[var4];
                var9 = var5.bind(var3)(var4);
                var8 = var9.computeChannelName;
                var5 = _closure1_slot18;
                var4 = _closure1_slot13;
                var4 = var8.bind(var9)(var7, var5, var4);
                var2 = var14 === var4;
            case 253:
                var6 = var14;
                if (var2) {
                    _fun69588_ip = 440;
                    continue _fun69588
                }
            case 262:
                var2 = _closure1_slot28;
                var6 = var2.bind(var3)(var14, var7);
                _fun69588_ip = 440;
                continue _fun69588;
            case 277:
                var5 = _closure1_slot10;
                var4 = var5.getChannel;
                var2 = var7.parent_id;
                var5 = var4.bind(var5)(var2);
                var4 = var0.type;
                var2 = _closure1_slot23;
                var2 = var2.THREAD_STARTER_MESSAGE;
                if (!(var4 === var2)) {
                    _fun69588_ip = 322;
                    continue _fun69588
                }
            case 316:
                var2 = null;
                if (!(var2 == var5)) {
                    _fun69588_ip = 409;
                    continue _fun69588
                }
            case 322:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 27;
                var2 = var8[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun69588_ip = 363;
                    continue _fun69588
                }
            case 350:
                var2 = _closure1_slot28;
                var6 = var2.bind(var3)(var14, var7, var5);
                _fun69588_ip = 440;
                continue _fun69588;
            case 363:
                var8 = _closure1_slot11;
                var4 = var8.getGuild;
                var2 = var7.getGuildId;
                var2 = var2.bind(var7)();
                var4 = var4.bind(var8)(var2);
                var2 = null;
                var6 = var14;
                if (!(var2 != var4)) {
                    _fun69588_ip = 440;
                    continue _fun69588
                }
            case 396:
                var2 = _closure1_slot28;
                var6 = var2.bind(var3)(var14, var7, var5);
                _fun69588_ip = 440;
                continue _fun69588;
            case 409:
                var4 = _closure1_slot28;
                var9 = _closure1_slot10;
                var8 = var9.getChannel;
                var2 = var5.parent_id;
                var2 = var8.bind(var9)(var2);
                var6 = var4.bind(var3)(var14, var5, var2);
            case 440:
                var17 = var0.content;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 27;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)(var0);
                if (!var2) {
                    _fun69588_ip = 514;
                    continue _fun69588
                }
            case 473:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 28;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.stringify;
                var17 = var2.bind(var4)(var0, var7);
                var2 = null;
                if (!(var2 != var17)) {
                    _fun69588_ip = 2736;
                    continue _fun69588
                }
            case 514:
                var2 = 'sticker_items';
                var2 = var2 in var0;
                if (var2) {
                    _fun69588_ip = 552;
                    continue _fun69588
                }
            case 525:
                var2 = 'stickerItems';
                var2 = var2 in var0;
                if (var2) {
                    _fun69588_ip = 544;
                    continue _fun69588
                }
            case 536:
                var15 = var0.stickers;
                _fun69588_ip = 550;
                continue _fun69588;
            case 544:
                var15 = var0.stickerItems;
            case 550:
                _fun69588_ip = 558;
                continue _fun69588;
            case 552:
                var15 = var0.sticker_items;
            case 558:
                var2 = new Array(0);
                var4 = 'message_reference';
                var4 = var4 in var0;
                if (var4) {
                    _fun69588_ip = 600;
                    continue _fun69588
                }
            case 573:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 30;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var0);
                _fun69588_ip = 631;
                continue _fun69588;
            case 600:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 30;
                var5 = var9[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.isForwardServerMessage;
                var4 = var5.bind(var8)(var0);
            case 631:
                if (var4) {
                    _fun69588_ip = 2088;
                    continue _fun69588
                }
            case 637:
                var4 = var0.activity;
                var8 = null;
                if (!(var8 != var4)) {
                    _fun69588_ip = 661;
                    continue _fun69588
                }
            case 649:
                var4 = var0.application;
                if (!(var8 == var4)) {
                    _fun69588_ip = 1749;
                    continue _fun69588
                }
            case 661:
                var4 = var0.activity;
                if (!(var8 != var4)) {
                    _fun69588_ip = 699;
                    continue _fun69588
                }
            case 671:
                var4 = var0.activity;
                var5 = var4.type;
                var4 = _closure1_slot20;
                var4 = var4.LISTEN;
                if (!(var5 !== var4)) {
                    _fun69588_ip = 1620;
                    continue _fun69588
                }
            case 699:
                if (!(var8 != var15)) {
                    _fun69588_ip = 717;
                    continue _fun69588
                }
            case 703:
                var4 = var15.length;
                var13 = 0;
                if (!(!(var4 > var13))) {
                    _fun69588_ip = 1538;
                    continue _fun69588
                }
            case 717:
                var5 = var0.type;
                var4 = _closure1_slot23;
                var4 = var4.PREMIUM_REFERRAL;
                if (!(var5 !== var4)) {
                    _fun69588_ip = 1441;
                    continue _fun69588
                }
            case 739:
                var4 = var0.poll;
                if (!(var8 == var4)) {
                    _fun69588_ip = 1353;
                    continue _fun69588
                }
            case 752:
                var5 = var0.type;
                var4 = _closure1_slot23;
                var4 = var4.POLL_RESULT;
                if (!(var5 !== var4)) {
                    _fun69588_ip = 1178;
                    continue _fun69588
                }
            case 774:
                var4 = var0.components;
                if (!(var8 != var4)) {
                    _fun69588_ip = 855;
                    continue _fun69588
                }
            case 784:
                var4 = var0.components;
                var4 = var4.length;
                var5 = 0;
                if (!(var4 > var5)) {
                    _fun69588_ip = 855;
                    continue _fun69588
                }
            case 801:
                var4 = var0.components;
                var4 = var4[var5];
                var5 = var4.type;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 32;
                var4 = var11[var4];
                var4 = var9.bind(var3)(var4);
                var4 = var4.ComponentType;
                var4 = var4.CHECKPOINT_CARD;
                if (!(var5 !== var4)) {
                    _fun69588_ip = 1113;
                    continue _fun69588
                }
            case 855:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 33;
                var4 = var9[var4];
                var11 = var5.bind(var3)(var4);
                var9 = var11.unparseWithMeta;
                var5 = var7.id;
                var4 = true;
                var4 = var9.bind(var11)(var17, var5, var4);
                var16 = var4.content;
                var18 = var4.emoji;
                var9 = var17.length;
                var12 = 0;
                var5 = var16;
                var4 = var18;
                if (!(var12 !== var9)) {
                    _fun69588_ip = 2146;
                    continue _fun69588
                }
            case 926:
                var11 = var7.type;
                var9 = _closure1_slot21;
                var9 = var9.DM;
                var5 = var16;
                var4 = var18;
                if (!(var11 === var9)) {
                    _fun69588_ip = 2146;
                    continue _fun69588
                }
            case 954:
                var9 = var10.bot;
                var5 = var16;
                var4 = var18;
                if (var9) {
                    _fun69588_ip = 2146;
                    continue _fun69588
                }
            case 972:
                var11 = var17.startsWith;
                var9 = '> -# *';
                var9 = var11.bind(var17)(var9);
                var5 = var16;
                var4 = var18;
                if (!var9) {
                    _fun69588_ip = 2146;
                    continue _fun69588
                }
            case 1001:
                var11 = var16.substring;
                var9 = 1;
                var11 = var11.bind(var16)(var12, var9);
                var12 = var16.substring;
                var9 = 4;
                var9 = var12.bind(var16)(var9);
                var17 = var11 + var9;
                var9 = _closure1_slot29;
                var16 = var9.bind(var3)(var18);
                var11 = var16.bind(var3)();
                var9 = var11.done;
                var12 = 2;
                var5 = var17;
                var4 = var18;
                if (var9) {
                    _fun69588_ip = 2146;
                    continue _fun69588
                }
            case 1067:
                var19 = var11.value;
                var9 = var19.position;
                var9 = var9 - var12;
                var19.position = var9;
                var19 = var16.bind(var3)();
                var9 = var19.done;
                var11 = var19;
                var5 = var17;
                var4 = var18;
                if (var9) {
                    _fun69588_ip = 2146;
                    continue _fun69588
                }
            case 1111:
                _fun69588_ip = 1067;
                continue _fun69588;
            case 1113:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 24;
                var11 = var17[var9];
                var11 = var16.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var17[var9];
                var9 = var16.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.HWnMTQ;
                var5 = var11.bind(var12)(var9);
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 1178:
                var12 = var0.embeds;
                var11 = var8 == var12;
                var9 = undefined;
                if (var11) {
                    _fun69588_ip = 1242;
                    continue _fun69588
                }
            case 1193:
                var11 = 0;
                var11 = var12[var11];
                var12 = var8 == var11;
                var9 = undefined;
                if (var12) {
                    _fun69588_ip = 1242;
                    continue _fun69588
                }
            case 1208:
                var16 = var11.fields;
                var11 = var8 == var16;
                var9 = undefined;
                if (var11) {
                    _fun69588_ip = 1242;
                    continue _fun69588
                }
            case 1223:
                var12 = var16.find;
                var11 = function(arg0) { // Environment: var11
                    _fun69589: for (var _fun69589_ip = 0;;) switch (_fun69589_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = 'name';
                            var1 = var1 in var0;
                            if (var1) {
                                _fun69589_ip = 22;
                                continue _fun69589
                            }
                        case 14:
                            var1 = var0.rawName;
                            _fun69589_ip = 27;
                            continue _fun69589;
                        case 22:
                            var1 = var0.name;
                        case 27:
                            var0 = 'poll_question_text';
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var9 = var12.bind(var16)(var11);
            case 1242:
                var8 = var8 != var9;
                var16 = '';
                if (!var8) {
                    _fun69588_ip = 1280;
                    continue _fun69588
                }
            case 1253:
                var8 = 'value';
                var8 = var8 in var9;
                if (var8) {
                    _fun69588_ip = 1272;
                    continue _fun69588
                }
            case 1264:
                var8 = var9.rawValue;
                _fun69588_ip = 1277;
                continue _fun69588;
            case 1272:
                var8 = var9.value;
            case 1277:
                var16 = var8;
            case 1280:
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 24;
                var11 = var17[var8];
                var11 = var9.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var8 = var17[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8["9WrecI"];
                var8 = {};
                var8.question = var16;
                var5 = var11.bind(var12)(var9, var8);
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 1353:
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 24;
                var11 = var16[var8];
                var11 = var9.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.ImizdM;
                var8 = {};
                var16 = var0.poll;
                var16 = var16.question;
                var16 = var16.text;
                var8.question = var16;
                var5 = var11.bind(var12)(var9, var8);
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 1441:
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 24;
                var11 = var18[var8];
                var11 = var9.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var8 = var18[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.lieTqU;
                var8 = {};
                var17 = _closure1_slot1;
                var16 = 31;
                var16 = var18[var16];
                var17 = var17.bind(var3)(var16);
                var16 = var17.getName;
                var16 = var16.bind(var17)(var10);
                var8.username = var16;
                var5 = var11.bind(var12)(var9, var8);
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 1538:
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 24;
                var11 = var16[var8];
                var11 = var9.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.zY4v1B;
                var8 = {};
                var13 = var15[var13];
                var13 = var13.name;
                var8.stickerName = var13;
                var5 = var11.bind(var12)(var9, var8);
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 1620:
                var16 = _closure1_slot32;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 24;
                var12 = var11[var8];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var22 = var12.SaDdmN;
                var12 = var11[var8];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var21 = var12.qsODhp;
                var12 = var11[var8];
                var12 = var9.bind(var3)(var12);
                var12 = var12.t;
                var20 = var12.WeiMTW;
                var24 = undefined;
                var23 = var7;
                var12 = var24[var16](var23, var22, var21, var20, var19);
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var11 = var8.intl;
                var9 = var11.formatToPlainString;
                var8 = {};
                var8.user = var14;
                var5 = var9.bind(var11)(var12, var8);
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 1749:
                var8 = var0.activity;
                var9 = var8.type;
                var8 = _closure1_slot20;
                var8 = var8.JOIN;
                if (!(var9 !== var8)) {
                    _fun69588_ip = 1944;
                    continue _fun69588
                }
            case 1777:
                var8 = var0.activity;
                var11 = var8.type;
                var8 = _closure1_slot20;
                var9 = var8.JOIN_REQUEST;
                var8 = '';
                if (!(var11 === var9)) {
                    _fun69588_ip = 1939;
                    continue _fun69588
                }
            case 1809:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 24;
                var11 = var18[var9];
                var11 = var17.bind(var3)(var11);
                var13 = var11.intl;
                var12 = var13.formatToPlainString;
                var16 = _closure1_slot32;
                var11 = var18[var9];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var22 = var11["/TD0la"];
                var11 = var18[var9];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var21 = var11["/TD0la"];
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var9 = var9.t;
                var20 = var9["/TD0la"];
                var24 = undefined;
                var23 = var7;
                var11 = var24[var16](var23, var22, var21, var20, var19);
                var9 = {};
                var9.user = var14;
                var15 = var0.application;
                var15 = var15.name;
                var9.game = var15;
                var8 = var12.bind(var13)(var11, var9);
            case 1939:
                _fun69588_ip = 2080;
                continue _fun69588;
            case 1944:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 24;
                var11 = var18[var9];
                var11 = var17.bind(var3)(var11);
                var13 = var11.intl;
                var12 = var13.formatToPlainString;
                var16 = _closure1_slot32;
                var11 = var18[var9];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var22 = var11.E8CgCh;
                var11 = var18[var9];
                var11 = var17.bind(var3)(var11);
                var11 = var11.t;
                var21 = var11.c6KHWJ;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var9 = var9.t;
                var20 = var9.Fy7rJN;
                var24 = undefined;
                var23 = var7;
                var11 = var24[var16](var23, var22, var21, var20, var19);
                var9 = {};
                var9.user = var14;
                var14 = var0.application;
                var14 = var14.name;
                var9.game = var14;
                var8 = var12.bind(var13)(var11, var9);
            case 2080:
                var5 = var8;
                var4 = var2;
                _fun69588_ip = 2146;
                continue _fun69588;
            case 2088:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 24;
                var9 = var13[var8];
                var9 = var12.bind(var3)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["9ddYKt"];
                var5 = var9.bind(var11)(var8);
                var4 = var2;
            case 2146:
                var2 = var5.length;
                var11 = 0;
                if (!(var11 === var2)) {
                    _fun69588_ip = 2695;
                    continue _fun69588
                }
            case 2160:
                var2 = var0.embeds;
                if (!(var3 !== var2)) {
                    _fun69588_ip = 2290;
                    continue _fun69588
                }
            case 2170:
                var2 = var0.embeds;
                var2 = var2.length;
                if (!(var2 > var11)) {
                    _fun69588_ip = 2290;
                    continue _fun69588
                }
            case 2185:
                var2 = var0.embeds;
                var8 = var2[var11];
                var2 = 'description';
                var2 = var2 in var8;
                if (var2) {
                    _fun69588_ip = 2214;
                    continue _fun69588
                }
            case 2206:
                var14 = var8.rawDescription;
                _fun69588_ip = 2219;
                continue _fun69588;
            case 2214:
                var14 = var8.description;
            case 2219:
                var2 = 'title';
                var2 = var2 in var8;
                if (var2) {
                    _fun69588_ip = 2238;
                    continue _fun69588
                }
            case 2230:
                var13 = var8.rawTitle;
                _fun69588_ip = 2243;
                continue _fun69588;
            case 2238:
                var13 = var8.title;
            case 2243:
                var9 = null;
                if (!(var9 == var14)) {
                    _fun69588_ip = 2652;
                    continue _fun69588
                }
            case 2252:
                var2 = var13;
                if (!(var9 == var2)) {
                    _fun69588_ip = 2692;
                    continue _fun69588
                }
            case 2262:
                var12 = var8.fields;
                if (!(var9 != var12)) {
                    _fun69588_ip = 2290;
                    continue _fun69588
                }
            case 2272:
                var12 = var8.fields;
                var12 = var12.length;
                if (!(!(var12 > var11))) {
                    _fun69588_ip = 2562;
                    continue _fun69588
                }
            case 2290:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 19;
                var12 = var16[var12];
                var17 = var15.bind(var3)(var12);
                var16 = var17.hasFlag;
                var12 = var0.flags;
                var15 = null;
                var18 = var15 != var12;
                var15 = 0;
                if (!var18) {
                    _fun69588_ip = 2335;
                    continue _fun69588
                }
            case 2332:
                var15 = var12;
            case 2335:
                var12 = _closure1_slot22;
                var12 = var12.IS_VOICE_MESSAGE;
                var12 = var16.bind(var17)(var15, var12);
                if (var12) {
                    _fun69588_ip = 2502;
                    continue _fun69588
                }
            case 2357:
                var12 = var0.attachments;
                var15 = '';
                var2 = var15;
                if (!(var3 !== var12)) {
                    _fun69588_ip = 2692;
                    continue _fun69588
                }
            case 2377:
                var12 = var0.attachments;
                var12 = var12.length;
                var12 = var12 > var11;
                var2 = var15;
                if (!var12) {
                    _fun69588_ip = 2692;
                    continue _fun69588
                }
            case 2401:
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var12 = 25;
                var12 = var19[var12];
                var15 = var15.bind(var3)(var12);
                var12 = var0.attachments;
                var12 = var12[var11];
                var18 = var15.bind(var3)(var12);
                var15 = _closure1_slot0;
                var12 = 24;
                var16 = var19[var12];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.formatToPlainString;
                var12 = var19[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var15 = var12["51OkwL"];
                var12 = {};
                var12.filename = var18;
                var2 = var16.bind(var17)(var15, var12);
                _fun69588_ip = 2692;
                continue _fun69588;
            case 2502:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 24;
                var15 = var18[var12];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var12 = var18[var12];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.slFYgi;
                var2 = var15.bind(var16)(var12);
                _fun69588_ip = 2692;
                continue _fun69588;
            case 2562:
                var8 = var8.fields;
                var8 = var8[var11];
                var11 = 'name';
                var11 = var11 in var8;
                if (var11) {
                    _fun69588_ip = 2591;
                    continue _fun69588
                }
            case 2583:
                var16 = var8.rawName;
                _fun69588_ip = 2596;
                continue _fun69588;
            case 2591:
                var16 = var8.name;
            case 2596:
                var11 = 'value';
                var11 = var11 in var8;
                if (var11) {
                    _fun69588_ip = 2615;
                    continue _fun69588
                }
            case 2607:
                var15 = var8.rawValue;
                _fun69588_ip = 2620;
                continue _fun69588;
            case 2615:
                var15 = var8.value;
            case 2620:
                var8 = global;
                var8 = var8.HermesInternal;
                var12 = var8.concat;
                var11 = '';
                var8 = ' ';
                var2 = var12.bind(var11)(var16, var8, var15);
                _fun69588_ip = 2692;
                continue _fun69588;
            case 2652:
                var8 = var14;
                if (!(var9 != var13)) {
                    _fun69588_ip = 2689;
                    continue _fun69588
                }
            case 2659:
                var9 = global;
                var9 = var9.HermesInternal;
                var12 = var9.concat;
                var11 = '';
                var9 = ' ';
                var8 = var12.bind(var11)(var13, var9, var14);
            case 2689:
                var2 = var8;
            case 2692:
                var5 = var2;
            case 2695:
                var2 = {};
                var9 = var10.getAvatarURL;
                var8 = var7.guild_id;
                var7 = 128;
                var7 = var9.bind(var10)(var8, var7);
                var2.icon = var7;
                var2.title = var6;
                var2.body = var5;
                var2.emoji = var4;
                return var2;
            case 2736:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 29;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var23 = 'NotificationTextUtils';
                var24 = var2;
                var1 = new var24[var3](var23, var22);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.warn;
                var1 = {};
                var1.message = var0;
                var0 = 'SystemMessageUtils.stringify(...) could not convert';
                var0 = var2.bind(var3)(var0, var1);
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var23 = 'failed to stringify system message';
                var24 = var1;
                var0 = new var24[var2](var23, var22);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.makeTextChatNotification = var3;
    var3 = function() { // Original name: allowInAppNotifications, environment: var1
        _fun69590: for (var _fun69590_ip = 0;;) switch (_fun69590_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 18;
                var0 = var4[var0];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var1 = var0.ShowInAppNotifications;
                var0 = var1.getSetting;
                var0 = var0.bind(var1)();
                var1 = 34;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.getFocusModeEnabled;
                var1 = var1.bind(var2)();
                if (!var0) {
                    _fun69590_ip = 69;
                    continue _fun69590
                }
            case 66:
                var0 = !var1;
            case 69:
                return var0;
        }
    };
    var2.allowInAppNotifications = var3;
    var1 = function() { // Original name: useAllowInAppNotifications, environment: var1
        _fun69591: for (var _fun69591_ip = 0;;) switch (_fun69591_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 18;
                var0 = var4[var0];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var1 = var0.ShowInAppNotifications;
                var0 = var1.useSetting;
                var0 = var0.bind(var1)();
                var1 = 34;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.useFocusModeEnabled;
                var1 = var1.bind(var2)();
                if (!var0) {
                    _fun69591_ip = 69;
                    continue _fun69591
                }
            case 66:
                var0 = !var1;
            case 69:
                return var0;
        }
    };
    var2.useAllowInAppNotifications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 3051, 3924, 3052, 1376, 4189, 1372, 1410, 3477, 3059, 1661, 3172, 5618, 4266, 1613, 8681, 660, 1233, 1348, 1384, 8682, 3949, 5551, 4754, 1234, 6760, 3921, 6634, 6650, 3, 4245, 3195, 1636, 5549, 8683, 2]);