// modules/threads/ThreadActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot12;
        var5 = var6.CHANNEL;
        var4 = var4.id;
        var4 = var5.bind(var6)(var4);
        var1.url = var4;
        var4 = arg1;
        var1.body = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun53191: for (var _fun53191_ip = 0;;) switch (_fun53191_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 11;
                    var2 = var2[var5];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.dispatch;
                    var2 = {};
                    var7 = 'THREAD_UPDATE';
                    var2.type = var7;
                    var8 = _closure1_slot4;
                    var7 = var0.body;
                    var7 = var8.bind(var3)(var7);
                    var2.channel = var7;
                    var2 = var4.bind(var6)(var2);
                    var6 = _closure2_slot0;
                    var2 = var6.isForumPost;
                    var2 = var2.bind(var6)();
                    if (!var2) {
                        _fun53191_ip = 102;
                        continue _fun53191
                    }
                case 86:
                    var6 = _closure2_slot0;
                    var7 = var6.parent_id;
                    var6 = null;
                    var2 = var6 != var7;
                case 102:
                    if (!var2) {
                        _fun53191_ip = 156;
                        continue _fun53191
                    }
                case 105:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'RESORT_THREADS';
                    var1.type = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.parent_id;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                case 156:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        var6 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'THREAD_MEMBER_LOCAL_UPDATE';
        var1.type = var5;
        var5 = var6.id;
        var1.id = var5;
        var5 = var6.getGuildId;
        var5 = var5.bind(var6)();
        var1.guildId = var5;
        var5 = _closure1_slot5;
        var4 = var5.getId;
        var4 = var4.bind(var5)();
        var1.userId = var4;
        var4 = arg1;
        var1.isJoining = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.createChannelRecordFromServer;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var7 = var5[var1];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PAGE_SIZE;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot12 = var6;
    var6 = var1.AbortCodes;
    var _closure1_slot13 = var6;
    var6 = var1.AnalyticEvents;
    var _closure1_slot14 = var6;
    var1 = var1.Permissions;
    var _closure1_slot15 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ChannelFlags;
    var _closure1_slot16 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        _fun53193: for (var _fun53193_ip = 0;;) switch (_fun53193_ip) {
            case 0:
                var3 = {};
                var0 = true;
                var3.archived = var0;
                var1 = arg1;
                if (!var1) {
                    _fun53193_ip = 21;
                    continue _fun53193
                }
            case 15:
                var3.locked = var0;
            case 21:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var1.archiveThread = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = this;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53196: for (var _fun53196_ip = 0;;) switch (_fun53196_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53196_ip = 98;
                            continue _fun53196
                        }
                    case 7:
                        var2 = _closure2_slot0;
                        var1 = var2.isArchivedThread;
                        var2 = var1.bind(var2)();
                        if (!var2) {
                            _fun53196_ip = 59;
                            continue _fun53196
                        }
                    case 27:
                        var6 = _closure2_slot1;
                        var5 = var6.unarchiveThread;
                        var4 = _closure2_slot0;
                        var1 = false;
                        var1 = var5.bind(var6)(var4, var1);
                        SaveGenerator(address = 53);
                    case 51:
                        return var1;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53196_ip = 95;
                            continue _fun53196
                        }
                    case 59:
                        var5 = _closure1_slot17;
                        var4 = _closure2_slot0;
                        var3 = {};
                        var6 = true;
                        var3.locked = var6;
                        var3.archived = var2;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4, var3);
                        return var2;
                    case 95:
                        return var1;
                    case 98:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.lockThread = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = this;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53199: for (var _fun53199_ip = 0;;) switch (_fun53199_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53199_ip = 98;
                            continue _fun53199
                        }
                    case 7:
                        var2 = _closure2_slot0;
                        var1 = var2.isArchivedThread;
                        var2 = var1.bind(var2)();
                        if (!var2) {
                            _fun53199_ip = 59;
                            continue _fun53199
                        }
                    case 27:
                        var6 = _closure2_slot1;
                        var5 = var6.unarchiveThread;
                        var4 = _closure2_slot0;
                        var1 = true;
                        var1 = var5.bind(var6)(var4, var1);
                        SaveGenerator(address = 53);
                    case 51:
                        return var1;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53199_ip = 95;
                            continue _fun53199
                        }
                    case 59:
                        var5 = _closure1_slot17;
                        var4 = _closure2_slot0;
                        var3 = {};
                        var6 = false;
                        var3.locked = var6;
                        var3.archived = var2;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4, var3);
                        return var2;
                    case 95:
                        return var1;
                    case 98:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.unlockThread = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53202: for (var _fun53202_ip = 0;;) switch (_fun53202_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 6);
                        if (var6) {
                            _fun53202_ip = 849;
                            continue _fun53202
                        }
                    case 10:
                        var10 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var6 = {};
                        var8 = false;
                        var6.archived = var8;
                        var4 = var6;
                        var9 = _closure2_slot0;
                        var7 = var9.isForumPost;
                        var5 = var7.bind(var9)();
                        var7 = _closure2_slot1;
                        if (!var7) {
                            _fun53202_ip = 65;
                            continue _fun53202
                        }
                    case 56:
                        var7 = var4;
                        var7.locked = var8;
                    case 65: // try_start_0
                        var7 = _closure1_slot17;
                        var6 = _closure2_slot0;
                        var4 = var7.bind(var10)(var6, var4);
                        SaveGenerator(address = 86);
                    case 84:
                        return var4;
                    case 86:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun53202_ip = 95;
                            continue _fun53202
                        }
                    case 92: // try_end0
                        return var4;
                    case 95:
                        return var4;
                    case 98: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var1 = var4;
                        var6 = var4.body;
                        var3 = var6;
                        var4 = null;
                        var6 = var4 == var6;
                        var7 = undefined;
                        if (var6) {
                            _fun53202_ip = 127;
                            continue _fun53202
                        }
                    case 122:
                        var7 = var3.code;
                    case 127:
                        var3 = _closure1_slot13;
                        var3 = var3.TOO_MANY_THREADS;
                        if (!(var7 !== var3)) {
                            _fun53202_ip = 664;
                            continue _fun53202
                        }
                    case 147:
                        var3 = var1;
                        var3 = var3.body;
                        var2 = var3;
                        var4 = var4 == var3;
                        var3 = undefined;
                        if (var4) {
                            _fun53202_ip = 172;
                            continue _fun53202
                        }
                    case 167:
                        var3 = var2.code;
                    case 172:
                        var2 = _closure1_slot13;
                        var2 = var2.TOO_MANY_ANNOUNCEMENT_THREADS;
                        if (!(var3 !== var2)) {
                            _fun53202_ip = 523;
                            continue _fun53202
                        }
                    case 189:
                        var2 = var1;
                        var3 = var2.status;
                        var2 = 429;
                        if (!(var2 !== var3)) {
                            _fun53202_ip = 351;
                            continue _fun53202
                        }
                    case 210:
                        var3 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 12;
                        var2 = var12[var2];
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var11 = _closure1_slot0;
                        var7 = 13;
                        var8 = var12[var7];
                        var8 = var11.bind(var10)(var8);
                        var13 = var8.intl;
                        var9 = var13.string;
                        var8 = var12[var7];
                        var8 = var11.bind(var10)(var8);
                        var8 = var8.t;
                        var8 = var8.j2d6Km;
                        var8 = var9.bind(var13)(var8);
                        var2.title = var8;
                        var8 = var12[var7];
                        var8 = var11.bind(var10)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var12[var7];
                        var7 = var11.bind(var10)(var7);
                        var7 = var7.t;
                        var7 = var7.fEptJP;
                        var7 = var8.bind(var9)(var7);
                        var2.body = var7;
                        var2 = var3.bind(var4)(var2);
                        _fun53202_ip = 847;
                        continue _fun53202;
                    case 351:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var7 = var5;
                        var13 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var12 = 13;
                        var9 = var8[var12];
                        var9 = var13.bind(var10)(var9);
                        var11 = var9.intl;
                        var9 = var11.string;
                        var8 = var8[var12];
                        var8 = var13.bind(var10)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun53202_ip = 442;
                            continue _fun53202
                        }
                    case 429:
                        var7 = var8["PeIE/r"];
                        var7 = var9.bind(var11)(var7);
                        _fun53202_ip = 453;
                        continue _fun53202;
                    case 442:
                        var8 = var8.kwyWNX;
                        var7 = var9.bind(var11)(var8);
                    case 453:
                        var2.title = var7;
                        var11 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var8 = var7[var12];
                        var8 = var11.bind(var10)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var7[var12];
                        var7 = var11.bind(var10)(var7);
                        var7 = var7.t;
                        var7 = var7.Whhv4w;
                        var7 = var8.bind(var9)(var7);
                        var2.body = var7;
                        var2 = var3.bind(var4)(var2);
                        _fun53202_ip = 847;
                        continue _fun53202;
                    case 523:
                        var3 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 12;
                        var2 = var12[var2];
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var11 = _closure1_slot0;
                        var7 = 13;
                        var8 = var12[var7];
                        var8 = var11.bind(var10)(var8);
                        var13 = var8.intl;
                        var9 = var13.string;
                        var8 = var12[var7];
                        var8 = var11.bind(var10)(var8);
                        var8 = var8.t;
                        var8 = var8["PeIE/r"];
                        var8 = var9.bind(var13)(var8);
                        var2.title = var8;
                        var8 = var12[var7];
                        var8 = var11.bind(var10)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var12[var7];
                        var7 = var11.bind(var10)(var7);
                        var7 = var7.t;
                        var7 = var7.jDMxz2;
                        var7 = var8.bind(var9)(var7);
                        var2.body = var7;
                        var2 = var3.bind(var4)(var2);
                        _fun53202_ip = 847;
                        continue _fun53202;
                    case 664:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var7 = var5;
                        var13 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var11 = 13;
                        var9 = var8[var11];
                        var9 = var13.bind(var10)(var9);
                        var12 = var9.intl;
                        var9 = var12.string;
                        var8 = var8[var11];
                        var8 = var13.bind(var10)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun53202_ip = 755;
                            continue _fun53202
                        }
                    case 742:
                        var7 = var8["PeIE/r"];
                        var7 = var9.bind(var12)(var7);
                        _fun53202_ip = 766;
                        continue _fun53202;
                    case 755:
                        var8 = var8.kwyWNX;
                        var7 = var9.bind(var12)(var8);
                    case 766:
                        var2.title = var7;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var7 = var6[var11];
                        var7 = var9.bind(var10)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var6[var11];
                        var6 = var9.bind(var10)(var6);
                        var6 = var6.t;
                        if (var5) {
                            _fun53202_ip = 827;
                            continue _fun53202
                        }
                    case 814:
                        var5 = var6.P0wT5S;
                        var5 = var7.bind(var8)(var5);
                        _fun53202_ip = 838;
                        continue _fun53202;
                    case 827:
                        var6 = var6.KGaiEK;
                        var5 = var7.bind(var8)(var6);
                    case 838:
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                    case 847:
                        throw var1;
                    case 849:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.unarchiveThread = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = this;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53205: for (var _fun53205_ip = 0;;) switch (_fun53205_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53205_ip = 154;
                            continue _fun53205
                        }
                    case 10:
                        var5 = _closure1_slot6;
                        var4 = var5.getChannel;
                        var3 = _closure2_slot0;
                        var4 = var4.bind(var5)(var3);
                        var5 = _closure1_slot7;
                        var3 = var5.can;
                        var2 = _closure1_slot15;
                        var2 = var2.MANAGE_THREADS;
                        var3 = var3.bind(var5)(var2, var4);
                        var6 = null;
                        var2 = var6 != var4;
                        if (!var2) {
                            _fun53205_ip = 79;
                            continue _fun53205
                        }
                    case 69:
                        var5 = var4.isArchivedThread;
                        var2 = var5.bind(var4)();
                    case 79:
                        if (!var2) {
                            _fun53205_ip = 115;
                            continue _fun53205
                        }
                    case 82:
                        if (var3) {
                            _fun53205_ip = 112;
                            continue _fun53205
                        }
                    case 85:
                        var5 = var4.threadMetadata;
                        var7 = var6 == var5;
                        var6 = undefined;
                        if (var7) {
                            _fun53205_ip = 106;
                            continue _fun53205
                        }
                    case 100:
                        var6 = var5.locked;
                    case 106:
                        var5 = true;
                        var3 = var5 !== var6;
                    case 112:
                        var2 = var3;
                    case 115:
                        if (!var2) {
                            _fun53205_ip = 146;
                            continue _fun53205
                        }
                    case 118:
                        var3 = _closure2_slot1;
                        var2 = var3.unarchiveThread;
                        var1 = false;
                        var1 = var2.bind(var3)(var4, var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53205_ip = 151;
                            continue _fun53205
                        }
                    case 146:
                        var2 = undefined;
                        return var2;
                    case 151:
                        return var1;
                    case 154:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.unarchiveThreadIfNecessary = var6;
    var6 = function arg0, arg1() {
        var3 = _closure1_slot17;
        var2 = {};
        var0 = arg1;
        var2.invitable = var0;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0, var2);
        return var0;
    };
    var1.setInvitable = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53209: for (var _fun53209_ip = 0;;) switch (_fun53209_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53209_ip = 585;
                            continue _fun53209
                        }
                    case 10:
                        var1 = undefined;
                        var3 = undefined;
                        var7 = undefined;
                        var5 = _closure2_slot0;
                        var4 = var5.isForumPost;
                        var4 = var4.bind(var5)();
                        if (!var4) {
                            _fun53209_ip = 55;
                            continue _fun53209
                        }
                    case 36:
                        var6 = _closure1_slot18;
                        var5 = _closure2_slot0;
                        var4 = true;
                        var4 = var6.bind(var1)(var5, var4);
                    case 55: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.post;
                        var4 = {};
                        var10 = _closure1_slot12;
                        var9 = var10.THREAD_MEMBER;
                        var8 = _closure2_slot0;
                        var8 = var8.id;
                        var8 = var9.bind(var10)(var8);
                        var4.url = var8;
                        var8 = {};
                        var9 = _closure2_slot1;
                        var8.location = var9;
                        var4.query = var8;
                        var8 = false;
                        var4.rejectWithError = var8;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 149);
                    case 147:
                        return var4;
                    case 149:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun53209_ip = 158;
                            continue _fun53209
                        }
                    case 155: // try_end0
                        return var4;
                    case 158:
                        return var4;
                    case 161: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var5 = var4.body;
                        var3 = var5;
                        var4 = null;
                        var4 = var4 == var5;
                        var5 = undefined;
                        if (var4) {
                            _fun53209_ip = 187;
                            continue _fun53209
                        }
                    case 182:
                        var5 = var3.code;
                    case 187:
                        var4 = _closure1_slot13;
                        var4 = var4.TOO_MANY_THREAD_MEMBERS;
                        if (!(var5 !== var4)) {
                            _fun53209_ip = 348;
                            continue _fun53209
                        }
                    case 207:
                        var5 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 12;
                        var4 = var12[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.show;
                        var4 = {};
                        var11 = _closure1_slot0;
                        var8 = 13;
                        var9 = var12[var8];
                        var9 = var11.bind(var1)(var9);
                        var13 = var9.intl;
                        var10 = var13.string;
                        var9 = var12[var8];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.j2d6Km;
                        var9 = var10.bind(var13)(var9);
                        var4.title = var9;
                        var9 = var12[var8];
                        var9 = var11.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.fEptJP;
                        var8 = var9.bind(var10)(var8);
                        var4.body = var8;
                        var4 = var5.bind(var6)(var4);
                        _fun53209_ip = 549;
                        continue _fun53209;
                    case 348:
                        var5 = _closure2_slot0;
                        var4 = var5.isForumPost;
                        var8 = var4.bind(var5)();
                        var7 = var8;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.show;
                        var4 = {};
                        var13 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var12 = 13;
                        var10 = var9[var12];
                        var10 = var13.bind(var1)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var9[var12];
                        var9 = var13.bind(var1)(var9);
                        var9 = var9.t;
                        if (var8) {
                            _fun53209_ip = 455;
                            continue _fun53209
                        }
                    case 440:
                        var8 = var9.gtdVcs;
                        var8 = var10.bind(var11)(var8);
                        _fun53209_ip = 468;
                        continue _fun53209;
                    case 455:
                        var9 = var9.EMYJFi;
                        var8 = var10.bind(var11)(var9);
                    case 468:
                        var4.title = var8;
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var9 = var8[var12];
                        var9 = var11.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var8[var12];
                        var8 = var11.bind(var1)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun53209_ip = 529;
                            continue _fun53209
                        }
                    case 516:
                        var7 = var8.abMwgm;
                        var7 = var9.bind(var10)(var7);
                        _fun53209_ip = 540;
                        continue _fun53209;
                    case 529:
                        var8 = var8.QYyad3;
                        var7 = var9.bind(var10)(var8);
                    case 540:
                        var4.body = var7;
                        var4 = var5.bind(var6)(var4);
                    case 549:
                        var5 = _closure2_slot0;
                        var4 = var5.isForumPost;
                        var4 = var4.bind(var5)();
                        if (!var4) {
                            _fun53209_ip = 582;
                            continue _fun53209
                        }
                    case 566:
                        var4 = _closure1_slot18;
                        var3 = _closure2_slot0;
                        var2 = false;
                        var2 = var4.bind(var1)(var3, var2);
                    case 582:
                        return var1;
                    case 585:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.joinThread = var6;
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53212: for (var _fun53212_ip = 0;;) switch (_fun53212_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53212_ip = 524;
                            continue _fun53212
                        }
                    case 10:
                        var1 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                    case 16: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 10;
                        var3 = var6[var3];
                        var3 = var4.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var4 = var6.post;
                        var3 = {};
                        var11 = _closure1_slot12;
                        var10 = var11.THREAD_MEMBER;
                        var7 = _closure2_slot0;
                        var9 = var7.id;
                        var7 = _closure2_slot1;
                        var7 = var10.bind(var11)(var9, var7);
                        var3.url = var7;
                        var7 = {};
                        var8 = _closure2_slot2;
                        var7.location = var8;
                        var3.query = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var4.bind(var6)(var3);
                        SaveGenerator(address = 118);
                    case 116:
                        return var3;
                    case 118:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53212_ip = 127;
                            continue _fun53212
                        }
                    case 124: // try_end0
                        return var3;
                    case 127:
                        return var3;
                    case 130: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = var3.body;
                        var2 = var4;
                        var3 = null;
                        var4 = var3 == var4;
                        var3 = undefined;
                        if (var4) {
                            _fun53212_ip = 156;
                            continue _fun53212
                        }
                    case 151:
                        var3 = var2.code;
                    case 156:
                        var2 = _closure1_slot13;
                        var2 = var2.TOO_MANY_THREAD_MEMBERS;
                        if (!(var3 !== var2)) {
                            _fun53212_ip = 317;
                            continue _fun53212
                        }
                    case 176:
                        var3 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 12;
                        var2 = var11[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var7 = 13;
                        var8 = var11[var7];
                        var8 = var10.bind(var1)(var8);
                        var12 = var8.intl;
                        var9 = var12.string;
                        var8 = var11[var7];
                        var8 = var10.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.j2d6Km;
                        var8 = var9.bind(var12)(var8);
                        var2.title = var8;
                        var8 = var11[var7];
                        var8 = var10.bind(var1)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.fEptJP;
                        var7 = var8.bind(var9)(var7);
                        var2.body = var7;
                        var2 = var3.bind(var4)(var2);
                        _fun53212_ip = 521;
                        continue _fun53212;
                    case 317:
                        var3 = _closure2_slot0;
                        var2 = var3.isForumPost;
                        var7 = var2.bind(var3)();
                        var5 = var7;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var10 = 13;
                        var9 = var8[var10];
                        var9 = var12.bind(var1)(var9);
                        var11 = var9.intl;
                        var9 = var11.string;
                        var8 = var8[var10];
                        var8 = var12.bind(var1)(var8);
                        var8 = var8.t;
                        if (var7) {
                            _fun53212_ip = 427;
                            continue _fun53212
                        }
                    case 412:
                        var7 = var8.YErysD;
                        var7 = var9.bind(var11)(var7);
                        _fun53212_ip = 440;
                        continue _fun53212;
                    case 427:
                        var8 = var8["0yAqqN"];
                        var7 = var9.bind(var11)(var8);
                    case 440:
                        var2.title = var7;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var7 = var6[var10];
                        var7 = var9.bind(var1)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var6[var10];
                        var6 = var9.bind(var1)(var6);
                        var6 = var6.t;
                        if (var5) {
                            _fun53212_ip = 501;
                            continue _fun53212
                        }
                    case 488:
                        var5 = var6.abMwgm;
                        var5 = var7.bind(var8)(var5);
                        _fun53212_ip = 512;
                        continue _fun53212;
                    case 501:
                        var6 = var6.QYyad3;
                        var5 = var7.bind(var8)(var6);
                    case 512:
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                    case 521:
                        return var1;
                    case 524:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.addMember = var6;
    var6 = function arg0, arg1() {
        _fun53213: for (var _fun53213_ip = 0;;) switch (_fun53213_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.isForumPost;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun53213_ip = 33;
                    continue _fun53213
                }
            case 16:
                var2 = _closure1_slot18;
                var1 = undefined;
                var0 = false;
                var0 = var2.bind(var1)(var3, var0);
            case 33:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.del;
                var0 = {};
                var5 = _closure1_slot12;
                var4 = var5.THREAD_MEMBER;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var0.url = var3;
                var3 = {};
                var4 = arg1;
                var3.location = var4;
                var0.query = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.leaveThread = var6;
    var6 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var6 = _closure1_slot12;
        var5 = var6.THREAD_MEMBER;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.location = var4;
        var0.query = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.removeMember = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var5 = _closure1_slot12;
        var4 = var5.CHANNEL;
        var3 = arg0;
        var3 = var3.id;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.auto_archive_duration = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.setAutoArchiveDuration = var6;
    var6 = function arg0() {
        var4 = arg0;
        var3 = this;
        var1 = var4.flags;
        var0 = _closure1_slot16;
        var0 = var0.PINNED;
        var2 = var1 | var0;
        var1 = var3.updateFlags;
        var0 = var4.isArchivedThread;
        var0 = var0.bind(var4)();
        var0 = var1.bind(var3)(var4, var2, var0);
        var0 = undefined;
        return var0;
    };
    var1.pin = var6;
    var6 = function arg0() {
        var3 = arg0;
        var2 = this;
        var1 = var3.flags;
        var0 = _closure1_slot16;
        var0 = var0.PINNED;
        var0 = ~var0;
        var1 = var1 & var0;
        var0 = var2.updateFlags;
        var0 = var0.bind(var2)(var3, var1);
        var0 = undefined;
        return var0;
    };
    var1.unpin = var6;
    var6 = function arg0, arg1() {
        _fun53218: for (var _fun53218_ip = 0;;) switch (_fun53218_ip) {
            case 0:
                var2 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun53218_ip = 27;
                    continue _fun53218
                }
            case 25:
                var2 = false;
            case 27:
                var _closure2_slot2 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun53220: for (var _fun53220_ip = 0;;) switch (_fun53220_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun53220_ip = 253;
                                    continue _fun53220
                                }
                            case 10:
                                var1 = undefined;
                                var9 = undefined;
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var4 = 11;
                                var3 = var3[var4];
                                var10 = var5.bind(var1)(var3);
                                var8 = var10.dispatch;
                                var3 = {};
                                var6 = 'THREAD_UPDATE';
                                var3.type = var6;
                                var13 = _closure2_slot0;
                                var12 = var13.merge;
                                var11 = {};
                                var7 = _closure2_slot1;
                                var11.flags = var7;
                                var11 = var12.bind(var13)(var11);
                                var3.channel = var11;
                                var3 = var8.bind(var10)(var3);
                                var3 = {};
                                var3.flags = var7;
                                var9 = var3;
                                var3 = _closure2_slot2;
                                if (!var3) {
                                    _fun53220_ip = 116;
                                    continue _fun53220
                                }
                            case 105:
                                var7 = var9;
                                var3 = false;
                                var7.archived = var3;
                            case 116: // try_start_0
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 10;
                                var3 = var8[var3];
                                var3 = var7.bind(var1)(var3);
                                var8 = var3.HTTP;
                                var7 = var8.patch;
                                var3 = {};
                                var12 = _closure1_slot12;
                                var11 = var12.CHANNEL;
                                var10 = _closure2_slot0;
                                var10 = var10.id;
                                var10 = var11.bind(var12)(var10);
                                var3.url = var10;
                                var3.body = var9;
                                var9 = true;
                                var3.rejectWithError = var9;
                                var3 = var7.bind(var8)(var3);
                                SaveGenerator(address = 196);
                            case 194:
                                return var3;
                            case 196:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun53220_ip = 204;
                                    continue _fun53220
                                }
                            case 202: // try_end0
                                _fun53220_ip = 250;
                                continue _fun53220;
                            case 204:
                                return var3;
                            case 207: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var2.type = var6;
                                var5 = _closure2_slot0;
                                var2.channel = var5;
                                var2 = var3.bind(var4)(var2);
                            case 250:
                                return var1;
                            case 253:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.updateFlags = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = this;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53223: for (var _fun53223_ip = 0;;) switch (_fun53223_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53223_ip = 604;
                            continue _fun53223
                        }
                    case 10:
                        var1 = _closure2_slot0;
                        var4 = var1.merge;
                        var2 = {};
                        var8 = var1.flags;
                        var7 = _closure1_slot16;
                        var5 = var7.PINNED;
                        var5 = ~var5;
                        var5 = var8 & var5;
                        var2.flags = var5;
                        var13 = var4.bind(var1)(var2);
                        var5 = _closure2_slot1;
                        var4 = var5.merge;
                        var2 = {};
                        var8 = var5.flags;
                        var7 = var7.PINNED;
                        var7 = var8 | var7;
                        var2.flags = var7;
                        var10 = var4.bind(var5)(var2);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 11;
                        var7 = var2[var8];
                        var5 = undefined;
                        var12 = var4.bind(var5)(var7);
                        var11 = var12.dispatch;
                        var9 = {};
                        var7 = 'THREAD_UPDATE';
                        var9.type = var7;
                        var9.channel = var13;
                        var9 = var11.bind(var12)(var9);
                        var2 = var2[var8];
                        var9 = var4.bind(var5)(var2);
                        var4 = var9.dispatch;
                        var2 = {};
                        var2.type = var7;
                        var2.channel = var10;
                        var2 = var4.bind(var9)(var2);
                        var4 = _closure2_slot2;
                        var2 = var4.unarchiveThreadIfNecessary;
                        var1 = var1.id;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 194);
                    case 192:
                        return var1;
                    case 194:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53223_ip = 601;
                            continue _fun53223
                        }
                    case 203:
                        var9 = _closure2_slot2;
                        var4 = var9.unarchiveThreadIfNecessary;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var2 = var4.bind(var9)(var2);
                        SaveGenerator(address = 231);
                    case 229:
                        return var2;
                    case 231:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53223_ip = 598;
                            continue _fun53223
                        }
                    case 240: // try_start_0
                        var9 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var11 = 10;
                        var4 = var4[var11];
                        var4 = var9.bind(var5)(var4);
                        var10 = var4.HTTP;
                        var9 = var10.patch;
                        var4 = {};
                        var15 = _closure1_slot12;
                        var14 = var15.CHANNEL;
                        var13 = _closure2_slot0;
                        var12 = var13.id;
                        var12 = var14.bind(var15)(var12);
                        var4.url = var12;
                        var12 = {};
                        var14 = var13.flags;
                        var13 = _closure1_slot16;
                        var13 = var13.PINNED;
                        var13 = ~var13;
                        var13 = var14 & var13;
                        var12.flags = var13;
                        var4.body = var12;
                        var12 = true;
                        var4.rejectWithError = var12;
                        var4 = var9.bind(var10)(var4);
                        SaveGenerator(address = 348);
                    case 346:
                        return var4;
                    case 348:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                        if (var9) {
                            _fun53223_ip = 514;
                            continue _fun53223
                        }
                    case 357: // try_start_1 // try_end0
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var11];
                        var9 = var10.bind(var5)(var9);
                        var11 = var9.HTTP;
                        var10 = var11.patch;
                        var9 = {};
                        var16 = _closure1_slot12;
                        var15 = var16.CHANNEL;
                        var14 = _closure2_slot1;
                        var13 = var14.id;
                        var13 = var15.bind(var16)(var13);
                        var9.url = var13;
                        var13 = {};
                        var15 = var14.flags;
                        var14 = _closure1_slot16;
                        var14 = var14.PINNED;
                        var14 = var15 | var14;
                        var13.flags = var14;
                        var9.body = var13;
                        var9.rejectWithError = var12;
                        var9 = var10.bind(var11)(var9);
                        SaveGenerator(address = 457);
                    case 455:
                        return var9;
                    case 457:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun53223_ip = 465;
                            continue _fun53223
                        }
                    case 463: // try_end1
                        _fun53223_ip = 511;
                        continue _fun53223;
                    case 465:
                        return var9;
                    case 468: // catch_target1
                        CatchBlockStart(arg_register = 9);
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var8];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var9.type = var7;
                        var12 = _closure2_slot1;
                        var9.channel = var12;
                        var9 = var10.bind(var11)(var9);
                    case 511:
                        return var5;
                    case 514:
                        return var4;
                    case 517: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var9 = var3[var8];
                        var11 = var4.bind(var5)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var9.type = var7;
                        var12 = _closure2_slot0;
                        var9.channel = var12;
                        var9 = var10.bind(var11)(var9);
                        var3 = var3[var8];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var3.type = var7;
                        var6 = _closure2_slot1;
                        var3.channel = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
                    case 598:
                        return var2;
                    case 601:
                        return var1;
                    case 604:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.replacePin = var6;
    var6 = function arg0, arg1, arg2() {
        _fun53224: for (var _fun53224_ip = 0;;) switch (_fun53224_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var8 = arg2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 14;
                var2 = var6[var0];
                var0 = undefined;
                var9 = var5.bind(var0)(var2);
                var7 = var9.trackWithMetadata;
                var2 = _closure1_slot14;
                var5 = var2.THREAD_CREATION_STARTED;
                var2 = {};
                var2.location = var8;
                var10 = var4.id;
                var2.channel_id = var10;
                var10 = var4.guild_id;
                var2.guild_id = var10;
                var2 = var7.bind(var9)(var5, var2);
                var5 = _closure1_slot1;
                var2 = 15;
                var2 = var6[var2];
                var7 = var5.bind(var0)(var2);
                var6 = var7.changeThreadSettings;
                var5 = var4.id;
                var2 = {};
                var2.parentMessageId = var3;
                var9 = false;
                var2.isPrivate = var9;
                var2.location = var8;
                var2 = var6.bind(var7)(var5, var2);
                var2 = null;
                if (!(var2 == var3)) {
                    _fun53224_ip = 193;
                    continue _fun53224
                }
            case 137:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setActiveCommand;
                var1 = {
                    'channelId': null,
                    'command': null,
                    'section': null
                };
                var4 = var4.id;
                var1.channelId = var4;
                var1 = var2.bind(var3)(var1);
            case 193:
                return var0;
        }
    };
    var1.openThreadCreationForMobile = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = this;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53227: for (var _fun53227_ip = 0;;) switch (_fun53227_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53227_ip = 203;
                            continue _fun53227
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = undefined;
                        var7 = var2.bind(var3)(var1);
                        var6 = var7.trackThreadNotificationSettingsUpdated;
                        var1 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var6.bind(var7)(var1, var2);
                        var6 = _closure1_slot10;
                        var2 = var6.hasJoined;
                        var1 = var1.id;
                        var1 = var2.bind(var6)(var1);
                        if (var1) {
                            _fun53227_ip = 120;
                            continue _fun53227
                        }
                    case 81:
                        var7 = _closure2_slot2;
                        var6 = var7.joinThread;
                        var2 = _closure2_slot0;
                        var1 = 'Change Notification Settings';
                        var1 = var6.bind(var7)(var2, var1);
                        SaveGenerator(address = 111);
                    case 109:
                        return var1;
                    case 111:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (!var2) {
                            _fun53227_ip = 120;
                            continue _fun53227
                        }
                    case 117:
                        return var1;
                    case 120:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.patch;
                        var1 = {};
                        var7 = _closure1_slot12;
                        var6 = var7.THREAD_MEMBER_SETTINGS;
                        var5 = _closure2_slot0;
                        var5 = var5.id;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var4 = _closure2_slot1;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 203:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.setNotificationSettings = var6;
    var6 = function arg0() {
        _fun53228: for (var _fun53228_ip = 0;;) switch (_fun53228_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var10 = var1.channelId;
                var _closure2_slot1 = var10;
                var5 = var1.sortOrder;
                var _closure2_slot2 = var5;
                var11 = var1.tagFilter;
                var _closure2_slot3 = var11;
                var7 = var1.tagSetting;
                var _closure2_slot4 = var7;
                var6 = var1.offset;
                var _closure2_slot5 = var6;
                var2 = _closure1_slot8;
                var1 = var2.isLoading;
                var17 = var2;
                var16 = var10;
                var15 = var5;
                var14 = var11;
                var13 = var7;
                var1 = var17[var1](var16, var15, var14, var13, var12);
                if (var1) {
                    _fun53228_ip = 338;
                    continue _fun53228
                }
            case 101:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var8 = undefined;
                var4 = var2.bind(var8)(var1);
                var2 = var4.dispatch;
                var1 = {};
                var12 = 'LOAD_ARCHIVED_THREADS';
                var1.type = var12;
                var1.channelId = var10;
                var1.sortOrder = var5;
                var1.tagFilter = var11;
                var1.tagSetting = var7;
                var1 = var2.bind(var4)(var1);
                var2 = _closure1_slot0;
                var1 = 10;
                var1 = var3[var1];
                var1 = var2.bind(var8)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {};
                var5 = _closure1_slot12;
                var4 = var5.THREAD_SEARCH;
                var4 = var4.bind(var5)(var10);
                var1.url = var4;
                var5 = {
                    'archived': true,
                    'sort_by': 'last_message_time',
                    'sort_order': 'desc'
                };
                var4 = true;
                var9 = _closure1_slot9;
                var5.limit = var9;
                var10 = var11.size;
                var9 = 0;
                var9 = var10 > var9;
                if (!var9) {
                    _fun53228_ip = 281;
                    continue _fun53228
                }
            case 249:
                var9 = global;
                var10 = var9.Array;
                var9 = var10.from;
                var11 = var9.bind(var10)(var11);
                var10 = var11.join;
                var9 = ',';
                var8 = var10.bind(var11)(var9);
            case 281:
                var5.tag = var8;
                var5.tag_setting = var7;
                var5.offset = var6;
                var1.query = var5;
                var5 = 2;
                var1.retries = var5;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun53229: for (var _fun53229_ip = 0;;) switch (_fun53229_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.body;
                            var7 = var0.threads;
                            var10 = var0.members;
                            var3 = var0.has_more;
                            var11 = var0.first_messages;
                            var9 = var0.most_recent_messages;
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun53229_ip = 255;
                                continue _fun53229
                            }
                        case 49:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var0 = var2[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.dispatch;
                            var0 = {};
                            var12 = 'LOAD_ARCHIVED_THREADS_SUCCESS';
                            var0.type = var12;
                            var13 = _closure2_slot0;
                            var0.guildId = var13;
                            var13 = _closure2_slot1;
                            var0.channelId = var13;
                            var13 = _closure2_slot5;
                            var0.offset = var13;
                            var13 = _closure2_slot2;
                            var0.sortOrder = var13;
                            var13 = _closure2_slot3;
                            var0.tagFilter = var13;
                            var12 = _closure2_slot4;
                            var0.tagSetting = var12;
                            var0.threads = var7;
                            var0.firstMessages = var11;
                            var0.mostRecentMessages = var9;
                            if (!(var6 == var10)) {
                                _fun53229_ip = 167;
                                continue _fun53229
                            }
                        case 163:
                            var10 = new Array(0);
                        case 167:
                            var9 = var10.map;
                            var6 = function(arg0) { // Environment: var5
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 18;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var6 = var9.bind(var10)(var6);
                            var0.members = var6;
                            var6 = var7.map;
                            var5 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var0 = var0.owner;
                                return var0;
                            };
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.filter;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 19;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.isNotNullish;
                            var4 = var5.bind(var6)(var4);
                            var0.owners = var4;
                            var0.hasMore = var3;
                            var0 = var1.bind(var2)(var0);
                            _fun53229_ip = 340;
                            continue _fun53229;
                        case 255:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'LOAD_ARCHIVED_THREADS_FAIL';
                            var0.type = var3;
                            var4 = _closure2_slot1;
                            var0.channelId = var4;
                            var4 = _closure2_slot2;
                            var0.sortOrder = var4;
                            var4 = _closure2_slot3;
                            var0.tagFilter = var4;
                            var3 = _closure2_slot4;
                            var0.tagSetting = var3;
                            var0 = var1.bind(var2)(var0);
                        case 340:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'LOAD_ARCHIVED_THREADS_FAIL';
                    var1.type = var4;
                    var5 = _closure2_slot1;
                    var1.channelId = var5;
                    var5 = _closure2_slot2;
                    var1.sortOrder = var5;
                    var5 = _closure2_slot3;
                    var1.tagFilter = var5;
                    var4 = _closure2_slot4;
                    var1.tagSetting = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
            case 338:
                var0 = undefined;
                return var0;
        }
    };
    var1.loadArchivedThreads = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun53233: for (var _fun53233_ip = 0;;) switch (_fun53233_ip) {
            case 0:
                var2 = arguments[4];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = arg3;
                var _closure2_slot3 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun53233_ip = 74;
                    continue _fun53233
                }
            case 39:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 20;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var3 = var3.ThreadSearchTagSetting;
                var2 = var3.MATCH_SOME;
            case 74:
                var _closure2_slot4 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun53235: for (var _fun53235_ip = 0;;) switch (_fun53235_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun53235_ip = 313;
                                    continue _fun53235
                                }
                            case 10:
                                var2 = _closure2_slot3;
                                var1 = null;
                                var1 = var1 != var2;
                                var5 = undefined;
                                var7 = undefined;
                                if (!var1) {
                                    _fun53235_ip = 86;
                                    continue _fun53235
                                }
                            case 30:
                                var1 = _closure2_slot3;
                                var2 = var1.size;
                                var1 = 0;
                                var1 = var2 > var1;
                                var7 = undefined;
                                if (!var1) {
                                    _fun53235_ip = 86;
                                    continue _fun53235
                                }
                            case 50:
                                var1 = global;
                                var3 = var1.Array;
                                var2 = var3.from;
                                var1 = _closure2_slot3;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.join;
                                var1 = ',';
                                var7 = var2.bind(var3)(var1);
                            case 86:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var1 = var4[var1];
                                var1 = var3.bind(var5)(var1);
                                var4 = var1.HTTP;
                                var3 = var4.get;
                                var1 = {};
                                var10 = _closure1_slot12;
                                var9 = var10.THREAD_SEARCH;
                                var6 = _closure2_slot1;
                                var6 = var9.bind(var10)(var6);
                                var1.url = var6;
                                var6 = {};
                                var9 = _closure2_slot2;
                                var6.name = var9;
                                var6.tag = var7;
                                var7 = _closure2_slot4;
                                var6.tag_setting = var7;
                                var1.query = var6;
                                var6 = false;
                                var1.rejectWithError = var6;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 187);
                            case 185:
                                return var1;
                            case 187:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun53235_ip = 310;
                                    continue _fun53235
                                }
                            case 193:
                                var3 = var1.body;
                                var4 = var3.threads;
                                var9 = var3.members;
                                var7 = var3.first_messages;
                                var6 = var3.most_recent_messages;
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var2 = 11;
                                var2 = var10[var2];
                                var5 = var3.bind(var5)(var2);
                                var3 = var5.dispatch;
                                var2 = {};
                                var10 = 'LOAD_THREADS_SUCCESS';
                                var2.type = var10;
                                var2.threads = var4;
                                var2.members = var9;
                                var8 = _closure2_slot0;
                                var2.guildId = var8;
                                var2.firstMessages = var7;
                                var2.mostRecentMessages = var6;
                                var2 = var3.bind(var5)(var2);
                                var3 = var4.map;
                                var2 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                return var2;
                            case 310:
                                return var1;
                            case 313:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.searchThreads = var6;
    var3 = function arg0, arg1() {
        _fun53237: for (var _fun53237_ip = 0;;) switch (_fun53237_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var4;
                var1 = var4.isThread;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun53237_ip = 219;
                    continue _fun53237
                }
            case 28:
                var2 = _closure1_slot11;
                var1 = var2.isInProgress;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun53237_ip = 219;
                    continue _fun53237
                }
            case 53:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var3 = undefined;
                var8 = var2.bind(var3)(var1);
                var2 = var8.dispatch;
                var1 = {};
                var9 = 'SUMMARIZE_THREAD_START';
                var1.type = var9;
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot0;
                var1 = 10;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var7 = _closure1_slot12;
                var5 = var7.AI_SUMMARIZE_THREAD;
                var4 = var4.id;
                var4 = var5.bind(var7)(var4);
                var1.url = var4;
                var4 = {};
                var5 = null;
                var5 = var5 == var6;
                if (var5) {
                    _fun53237_ip = 164;
                    continue _fun53237
                }
            case 161:
                var5 = var6;
            case 164:
                var4.ephemeral = var5;
                var1.body = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SUMMARIZE_THREAD_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 11;
                    var1 = var8[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var3 = var5.dispatch;
                    var1 = {};
                    var6 = 'SUMMARIZE_THREAD_FAILURE';
                    var1.type = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var1 = var3.bind(var5)(var1);
                    var1 = 12;
                    var1 = var8[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = 13;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.j2d6Km;
                    var5 = var6.bind(var9)(var5);
                    var1.title = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.fEptJP;
                    var4 = var5.bind(var6)(var4);
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 219:
                var0 = undefined;
                return var0;
        }
    };
    var1.summarizeThread = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/ThreadActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1376, 1216, 1372, 3052, 6432, 3054, 6444, 660, 1379, 507, 806, 3964, 1234, 4268, 6445, 6446, 6449, 6450, 1304, 1383, 2]);