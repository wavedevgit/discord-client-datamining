// modules/activities/utils/InviteEmbedTextUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0, arg1, arg2() {
        _fun92516: for (var _fun92516_ip = 0;;) switch (_fun92516_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = var4.author;
                var1 = var0.id;
                var0 = arg2;
                if (!(var1 !== var0)) {
                    _fun92516_ip = 138;
                    continue _fun92516
                }
            case 24:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 2;
                var1 = var9[var1];
                var7 = undefined;
                var1 = var8.bind(var7)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var9[var0];
                var0 = var1.bind(var7)(var0);
                var1 = var0["d/qbC0"];
                var0 = {};
                var6 = 4;
                var6 = var9[var6];
                var8 = var8.bind(var7)(var6);
                var7 = var8.getName;
                var6 = var5.guild_id;
                var5 = var5.id;
                var4 = var4.author;
                var4 = var7.bind(var8)(var6, var5, var4);
                var0.username = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun92516_ip = 202;
                continue _fun92516;
            case 138:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1["8B3U5O"];
                var0 = var2.bind(var3)(var1);
            case 202:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun92517: for (var _fun92517_ip = 0;;) switch (_fun92517_ip) {
            case 0:
                var8 = arg0;
                var5 = arg1;
                var6 = arg2;
                var0 = arg4;
                var1 = var8.author;
                var2 = var1.id;
                var1 = arg3;
                if (!(var2 !== var1)) {
                    _fun92517_ip = 163;
                    continue _fun92517
                }
            case 33:
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 2;
                var4 = var9[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var1 = var9[var1];
                var1 = var3.bind(var2)(var1);
                var2 = var1.t;
                if (var0) {
                    _fun92517_ip = 124;
                    continue _fun92517
                }
            case 85:
                var3 = var2.hgcjOn;
                var1 = {};
                var9 = var8.author;
                var9 = var9.globalName;
                var1.username = var9;
                var1.appName = var5;
                var1 = var4.bind(var7)(var3, var1);
                _fun92517_ip = 161;
                continue _fun92517;
            case 124:
                var3 = var2.XE8axA;
                var2 = {};
                var8 = var8.author;
                var8 = var8.globalName;
                var2.username = var8;
                var2.appName = var5;
                var1 = var4.bind(var7)(var3, var2);
            case 161:
                return var1;
            case 163:
                var1 = var6.isPrivate;
                var1 = var1.bind(var6)();
                if (!var1) {
                    _fun92517_ip = 210;
                    continue _fun92517
                }
            case 176:
                var4 = _closure1_slot3;
                var3 = var4.getUser;
                var2 = var6.getRecipientId;
                var2 = var2.bind(var6)();
                var6 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 == var6)) {
                    _fun92517_ip = 308;
                    continue _fun92517
                }
            case 210:
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 2;
                var7 = var9[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var2 = var9[var2];
                var2 = var4.bind(var3)(var2);
                var3 = var2.t;
                if (var0) {
                    _fun92517_ip = 285;
                    continue _fun92517
                }
            case 262:
                var4 = var3.IA6uDV;
                var2 = {};
                var2.appName = var5;
                var2 = var7.bind(var8)(var4, var2);
                _fun92517_ip = 306;
                continue _fun92517;
            case 285:
                var4 = var3["2N1kNS"];
                var3 = {};
                var3.appName = var5;
                var2 = var7.bind(var8)(var4, var3);
            case 306:
                return var2;
            case 308:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 2;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun92517_ip = 388;
                    continue _fun92517
                }
            case 357:
                var2 = var1.gYVkSW;
                var0 = {};
                var7 = var6.globalName;
                var0.username = var7;
                var0.appName = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun92517_ip = 419;
                continue _fun92517;
            case 388:
                var2 = var1.JddpN2;
                var1 = {};
                var6 = var6.globalName;
                var1.username = var6;
                var1.appName = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 419:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ActivityActionTypes;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/InviteEmbedTextUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0, arg1, arg2() {
        _fun92518: for (var _fun92518_ip = 0;;) switch (_fun92518_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = _closure1_slot4;
                var1 = var1.LISTEN;
                if (!(var1 !== var2)) {
                    _fun92518_ip = 343;
                    continue _fun92518
                }
            case 26:
                var1 = _closure1_slot4;
                var1 = var1.WATCH;
                if (!(var1 !== var2)) {
                    _fun92518_ip = 275;
                    continue _fun92518
                }
            case 43:
                var1 = _closure1_slot4;
                var1 = var1.JOIN;
                if (!(var1 !== var2)) {
                    _fun92518_ip = 208;
                    continue _fun92518
                }
            case 60:
                var1 = _closure1_slot4;
                var1 = var1.STREAM_REQUEST;
                if (!(var1 !== var2)) {
                    _fun92518_ip = 145;
                    continue _fun92518
                }
            case 74:
                var1 = _closure1_slot4;
                var1 = var1.JOIN_REQUEST;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.Ckxb6j;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 145:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.intl;
                var2 = var3.string;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.DKHhec;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 208:
                var7 = undefined;
                var2 = arg2;
                var1 = undefined;
                if (var2) {
                    _fun92518_ip = 273;
                    continue _fun92518
                }
            case 218:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var3 = var8[var2];
                var3 = var6.bind(var7)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.pkq6Vq;
                var1 = var3.bind(var5)(var2);
            case 273:
                return var1;
            case 275:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.BBJXVk;
                var1 = {};
                var1.name = var4;
                var1 = var3.bind(var5)(var2, var1);
                return var1;
            case 343:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["/8czH4"];
                var0 = {};
                var0.name = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getHeaderText = var5;
    var2.getRequestToStreamText = var4;
    var2.getAskToJoinText = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun92519: for (var _fun92519_ip = 0;;) switch (_fun92519_ip) {
            case 0:
                var5 = arg0;
                var3 = arg2;
                var2 = arg3;
                var0 = var5.activity;
                var1 = null;
                var1 = var1 == var0;
                var4 = undefined;
                var6 = undefined;
                if (var1) {
                    _fun92519_ip = 33;
                    continue _fun92519
                }
            case 28:
                var6 = var0.type;
            case 33:
                var1 = _closure1_slot4;
                var1 = var1.LISTEN;
                if (!(var1 !== var6)) {
                    _fun92519_ip = 141;
                    continue _fun92519
                }
            case 50:
                var1 = _closure1_slot4;
                var1 = var1.WATCH;
                if (!(var1 !== var6)) {
                    _fun92519_ip = 141;
                    continue _fun92519
                }
            case 64:
                var1 = _closure1_slot4;
                var1 = var1.JOIN;
                if (!(var1 !== var6)) {
                    _fun92519_ip = 141;
                    continue _fun92519
                }
            case 78:
                var1 = _closure1_slot4;
                var1 = var1.STREAM_REQUEST;
                if (!(var1 !== var6)) {
                    _fun92519_ip = 128;
                    continue _fun92519
                }
            case 92:
                var1 = _closure1_slot4;
                var1 = var1.JOIN_REQUEST;
                var7 = _closure1_slot6;
                var11 = arg1;
                var8 = true;
                var13 = undefined;
                var12 = var5;
                var10 = var3;
                var9 = var2;
                var1 = var13[var7](var12, var11, var10, var9, var8, var7);
                return var1;
            case 128:
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)(var5, var3, var2);
                return var1;
            case 141:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 2;
                var1 = var1[var5];
                var1 = var2.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var3 = var0.t;
                var0 = arg4;
                if (var0) {
                    _fun92519_ip = 209;
                    continue _fun92519
                }
            case 199:
                var0 = var3["Ek+51n"];
                _fun92519_ip = 217;
                continue _fun92519;
            case 209:
                var0 = var3.x1UXGR;
            case 217:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getDeadGameInviteText = var3;
    var1 = function arg0() {
        _fun92520: for (var _fun92520_ip = 0;;) switch (_fun92520_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.activityActionType;
                var7 = var0.maxPartySize;
                var8 = var0.partySize;
                var0 = _closure1_slot4;
                var1 = var0.STREAM_REQUEST;
                var0 = '';
                if (!(var2 !== var1)) {
                    _fun92520_ip = 367;
                    continue _fun92520
                }
            case 45:
                var1 = _closure1_slot4;
                var1 = var1.LISTEN;
                if (!(var2 !== var1)) {
                    _fun92520_ip = 214;
                    continue _fun92520
                }
            case 62:
                var1 = 0;
                if (!(!(var7 > var1))) {
                    _fun92520_ip = 137;
                    continue _fun92520
                }
            case 68:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 2;
                var4 = var9[var1];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var1 = var9[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["65JnWC"];
                var1 = {};
                var1.partySize = var8;
                var1 = var4.bind(var5)(var2, var1);
                _fun92520_ip = 209;
                continue _fun92520;
            case 137:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 2;
                var5 = var10[var2];
                var4 = undefined;
                var5 = var9.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var10[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.t;
                var4 = var2.gLu7NU;
                var2 = {};
                var2.partySize = var8;
                var2.maxPartySize = var7;
                var1 = var5.bind(var6)(var4, var2);
            case 209:
                _fun92520_ip = 364;
                continue _fun92520;
            case 214:
                var2 = 0;
                if (!(!(var7 > var2))) {
                    _fun92520_ip = 289;
                    continue _fun92520
                }
            case 220:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 2;
                var5 = var10[var2];
                var4 = undefined;
                var5 = var9.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var10[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.t;
                var4 = var2.UGei0j;
                var2 = {};
                var2.partySize = var8;
                var2 = var5.bind(var6)(var4, var2);
                _fun92520_ip = 361;
                continue _fun92520;
            case 289:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 2;
                var5 = var10[var3];
                var4 = undefined;
                var5 = var9.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var4 = var3.Zogoou;
                var3 = {};
                var3.partySize = var8;
                var3.maxPartySize = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 361:
                var1 = var2;
            case 364:
                var0 = var1;
            case 367:
                return var0;
        }
    };
    var2.getPartyText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 660, 1234, 2276, 3961, 2]);