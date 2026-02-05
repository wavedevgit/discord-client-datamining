// modules/forums/ForumUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1() {
        _fun53656: for (var _fun53656_ip = 0;;) switch (_fun53656_ip) {
            case 0:
                var2 = arg0;
                var3 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun53656_ip = 30;
                    continue _fun53656
                }
            case 12:
                var1 = _closure1_slot4;
                var0 = new Array(1);
                var0[0] = var1;
                var3 = var0;
            case 30:
                var1 = var3;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var3 = var1().value;
                var1 = var0;
                var1 = var1 === var4;
                var4 = undefined;
                if (var1) {
                    _fun53656_ip = 55;
                    continue _fun53656
                }
            case 52:
                var4 = var3;
            case 55:
                if (var1) {
                    _fun53656_ip = 61;
                    continue _fun53656
                }
            case 58:
                var0.return();
            case 61:
                var0 = {};
                var1 = var2.isArchivedThread;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if (!var1) {
                    _fun53656_ip = 106;
                    continue _fun53656
                }
            case 79:
                var7 = var4.isNewForumThread;
                var6 = var2.id;
                var5 = var2.parent_id;
                var3 = arg1;
                var1 = var7.bind(var4)(var6, var5, var3);
            case 106:
                var0.isNew = var1;
                var1 = var2.isArchivedThread;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if (!var1) {
                    _fun53656_ip = 143;
                    continue _fun53656
                }
            case 127:
                var3 = var4.isForumPostUnread;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
            case 143:
                var0.hasUnreads = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ForumTimestampFormats;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot6 = var4;
    var4 = function() {
        var0 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2.nFt9ck;
        var0.minutes = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2.jzCewe;
        var0.hours = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var2 = var2.t;
        var2 = var2.U4I0sw;
        var0.days = var2;
        var2 = var6[var1];
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["nBNJ/L"];
        var1 = var2.bind(var3)(var1);
        var0.month = var1;
        return var0;
    };
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getForumPostReadStates = var3;
    var3 = function arg0() {
        _fun53658: for (var _fun53658_ip = 0;;) switch (_fun53658_ip) {
            case 0:
                var1 = arguments[1];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun53658_ip = 43;
                    continue _fun53658
                }
            case 9:
                var3 = _closure1_slot2;
                var0 = new Array(3);
                var0[0] = var3;
                var3 = _closure1_slot3;
                var0[1] = var3;
                var2 = _closure1_slot4;
                var0[2] = var2;
                var1 = var0;
            case 43:
                var4 = var1;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var3 = var4().value;
                var1 = var0;
                var1 = var1 === var6;
                var2 = undefined;
                if (var1) {
                    _fun53658_ip = 68;
                    continue _fun53658
                }
            case 65:
                var2 = var3;
            case 68:
                var3 = undefined;
                if (var1) {
                    _fun53658_ip = 98;
                    continue _fun53658
                }
            case 73:
                var7 = var4().value;
                var5 = var0;
                var5 = var5 === var6;
                var3 = undefined;
                var1 = var5;
                if (var5) {
                    _fun53658_ip = 98;
                    continue _fun53658
                }
            case 92:
                var3 = var7;
                var1 = var5;
            case 98:
                var7 = undefined;
                if (var1) {
                    _fun53658_ip = 128;
                    continue _fun53658
                }
            case 103:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var7 = undefined;
                var1 = var4;
                if (var4) {
                    _fun53658_ip = 128;
                    continue _fun53658
                }
            case 122:
                var7 = var5;
                var1 = var4;
            case 128:
                if (var1) {
                    _fun53658_ip = 134;
                    continue _fun53658
                }
            case 131:
                var0.return();
            case 134:
                var1 = var2.getChannel;
                var0 = arg0;
                var5 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun53658_ip = 201;
                    continue _fun53658
                }
            case 153:
                var2 = var3.getGuild;
                var1 = var5.guild_id;
                var4 = var2.bind(var3)(var1);
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun53658_ip = 199;
                    continue _fun53658
                }
            case 177:
                var3 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = var3.bind(var6)(var5, var4, var2);
            case 199:
                return var1;
            case 201:
                return var0;
        }
    };
    var2.getForumPostReadStatesById = var3;
    var3 = function arg0, arg1() {
        _fun53659: for (var _fun53659_ip = 0;;) switch (_fun53659_ip) {
            case 0:
                var1 = _closure1_slot5;
                var2 = var1.POSTED_DURATION_AGO;
                var1 = arg1;
                if (!(var1 === var2)) {
                    _fun53659_ip = 61;
                    continue _fun53659
                }
            case 20:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ThreadSortOrder;
                var2 = var1.CREATION_DATE;
                var1 = arg0;
                if (!(var1 !== var2)) {
                    _fun53659_ip = 65;
                    continue _fun53659
                }
            case 61:
                var1 = undefined;
                return var1;
            case 65:
                var0 = _closure1_slot7;
                return var0;
        }
    };
    var2.getForumTimestampFormatter = var3;
    var3 = function arg0, arg1() {
        _fun53660: for (var _fun53660_ip = 0;;) switch (_fun53660_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var2 = var1().value;
                var1 = var0;
                var3 = undefined;
                var1 = var1 === var3;
                if (var1) {
                    _fun53660_ip = 28;
                    continue _fun53660
                }
            case 25:
                var3 = var2;
            case 28:
                if (var1) {
                    _fun53660_ip = 34;
                    continue _fun53660
                }
            case 31:
                var0.return();
            case 34:
                var0 = var3.hasTrackedUnread;
                var0 = var0.bind(var3)(var4);
                var1 = var3.hasOpenedThread;
                var2 = var1.bind(var3)(var4);
                var1 = var3.getTrackedAckMessageId;
                var3 = var1.bind(var3)(var4);
                var1 = null;
                var1 = var1 != var3;
                if (!var0) {
                    _fun53660_ip = 79;
                    continue _fun53660
                }
            case 76:
                var0 = var2;
            case 79:
                if (!var0) {
                    _fun53660_ip = 85;
                    continue _fun53660
                }
            case 82:
                var0 = var1;
            case 85:
                return var0;
        }
    };
    var2.canDisplayPostUnreadMessageCount = var3;
    var1 = function arg0() {
        _fun53661: for (var _fun53661_ip = 0;;) switch (_fun53661_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var1 = arg0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if (var2) {
                    _fun53661_ip = 52;
                    continue _fun53661
                }
            case 31:
                var2 = var3.hasFlag;
                var0 = _closure1_slot6;
                var0 = var0.PINNED;
                var1 = var2.bind(var3)(var0);
            case 52:
                var0 = true;
                var0 = var0 === var1;
                return var0;
        }
    };
    var2.isForumPostPinned = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 3947, 6498, 1379, 1234, 1381, 2]);