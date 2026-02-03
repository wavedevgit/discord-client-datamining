// modules/saved_messages/SavedMessageHelpers.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun75904: for (var _fun75904_ip = 0;;) switch (_fun75904_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75904_ip = 503;
                            continue _fun75904
                        }
                    case 13:
                        var7 = var4.displayToast;
                        var6 = null;
                        var3 = Object.create(var6);
                        var1 = 0;
                        var3.displayToast = var1;
                        var15 = {};
                        var14 = var4;
                        var13 = var3;
                        var5 = copyDataProperties(var15, var14, var13);
                        var3 = undefined;
                        SaveGenerator(address = 49);
                    case 47:
                        return var3;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75904_ip = 500;
                            continue _fun75904
                        }
                    case 58:
                        var10 = _closure1_slot4;
                        var9 = var10.getSavedMessage;
                        var8 = var5.channelId;
                        var2 = var5.messageId;
                        var2 = var9.bind(var10)(var8, var2);
                        if (!(var6 == var2)) {
                            _fun75904_ip = 176;
                            continue _fun75904
                        }
                    case 91:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 4;
                        var2 = var9[var2];
                        var2 = var8.bind(var3)(var2);
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun75904_ip = 176;
                            continue _fun75904
                        }
                    case 118:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 5;
                        var2 = var10[var2];
                        var8 = var8.bind(var3)(var2);
                        var9 = _closure1_slot0;
                        var2 = 6;
                        var2 = var10[var2];
                        var2 = var9.bind(var3)(var2);
                        var2 = var2.EntitlementFeatureNames;
                        var2 = var2.SAVED_MESSAGES;
                        var2 = var8.bind(var3)(var2);
                        _fun75904_ip = 494;
                        continue _fun75904;
                    case 176:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 7;
                        var2 = var9[var2];
                        var8 = var8.bind(var3)(var2);
                        var2 = var8.upsertSavedMessage;
                        var9 = var2.bind(var8)(var5);
                        var8 = var9.catch;
                        var2 = function(arg0) { // Environment: var2
                            _fun75905: for (var _fun75905_ip = 0;;) switch (_fun75905_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = null;
                                    var1 = var0 == var5;
                                    var8 = undefined;
                                    var2 = undefined;
                                    if (var1) {
                                        _fun75905_ip = 35;
                                        continue _fun75905
                                    }
                                case 16:
                                    var1 = var5.body;
                                    var3 = var0 == var1;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun75905_ip = 35;
                                        continue _fun75905
                                    }
                                case 30:
                                    var2 = var1.code;
                                case 35:
                                    var1 = _closure1_slot5;
                                    var1 = var1.TOO_MANY_SAVED_MESSAGES;
                                    if (!(var2 !== var1)) {
                                        _fun75905_ip = 220;
                                        continue _fun75905
                                    }
                                case 55:
                                    var2 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var1 = 13;
                                    var1 = var7[var1];
                                    var3 = var2.bind(var8)(var1);
                                    var2 = var3.open;
                                    var1 = {};
                                    var4 = 'SAVED_MESSAGE_CREATE_ERROR';
                                    var1.key = var4;
                                    var6 = _closure1_slot0;
                                    var4 = 14;
                                    var4 = var7[var4];
                                    var4 = var6.bind(var8)(var4);
                                    var4 = var4.CircleErrorIcon;
                                    var1.IconComponent = var4;
                                    var6 = var0 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun75905_ip = 147;
                                        continue _fun75905
                                    }
                                case 128:
                                    var5 = var5.body;
                                    var6 = var0 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun75905_ip = 147;
                                        continue _fun75905
                                    }
                                case 142:
                                    var4 = var5.message;
                                case 147:
                                    if (!(var0 == var4)) {
                                        _fun75905_ip = 206;
                                        continue _fun75905
                                    }
                                case 151:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 9;
                                    var6 = var10[var5];
                                    var6 = var9.bind(var8)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var5 = var10[var5];
                                    var5 = var9.bind(var8)(var5);
                                    var5 = var5.t;
                                    var5 = var5.R0RpRX;
                                    var4 = var6.bind(var7)(var5);
                                case 206:
                                    var1.content = var4;
                                    var1 = var2.bind(var3)(var1);
                                    _fun75905_ip = 485;
                                    continue _fun75905;
                                case 220:
                                    var2 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var9[var1];
                                    var3 = var2.bind(var8)(var1);
                                    var2 = var3.show;
                                    var1 = {};
                                    var7 = _closure1_slot0;
                                    var4 = 9;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var10 = var5.intl;
                                    var6 = var10.string;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var5 = var5.t;
                                    var5 = var5.mlbiZW;
                                    var5 = var6.bind(var10)(var5);
                                    var1.title = var5;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var11 = var5.intl;
                                    var10 = var11.formatToPlainString;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var5 = var5.t;
                                    var6 = var5["1zVbEG"];
                                    var5 = {};
                                    var12 = _closure1_slot6;
                                    var5.max = var12;
                                    var5 = var10.bind(var11)(var6, var5);
                                    var1.body = var5;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var10 = var5.intl;
                                    var6 = var10.string;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var5 = var5.t;
                                    var5 = var5.BddRzS;
                                    var5 = var6.bind(var10)(var5);
                                    var1.confirmText = var5;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var4.t;
                                    var4 = var4.ZGbTcy;
                                    var4 = var5.bind(var6)(var4);
                                    var1.cancelText = var4;
                                    var4 = function() {
                                        var2 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var1 = 10;
                                        var1 = var0[var1];
                                        var5 = undefined;
                                        var2 = var2.bind(var5)(var1);
                                        var1 = var2.pushLazy;
                                        var4 = _closure1_slot0;
                                        var3 = 12;
                                        var3 = var0[var3];
                                        var4 = var4.bind(var5)(var3);
                                        var3 = 11;
                                        var3 = var0[var3];
                                        var0 = var0.paths;
                                        var0 = var4.bind(var5)(var3, var0);
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var1.onCancel = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 485:
                                    return var0;
                            }
                        };
                        var2 = var8.bind(var9)(var2);
                        SaveGenerator(address = 231);
                    case 229:
                        return var2;
                    case 231:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun75904_ip = 497;
                            continue _fun75904
                        }
                    case 240:
                        if (!(var6 != var2)) {
                            _fun75904_ip = 494;
                            continue _fun75904
                        }
                    case 247:
                        if (!var7) {
                            _fun75904_ip = 494;
                            continue _fun75904
                        }
                    case 253:
                        var7 = var5.dueAt;
                        if (!(var6 == var7)) {
                            _fun75904_ip = 322;
                            continue _fun75904
                        }
                    case 263:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 9;
                        var8 = var11[var7];
                        var8 = var10.bind(var3)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var3)(var7);
                        var7 = var7.t;
                        var7 = var7.DQjes4;
                        var7 = var8.bind(var9)(var7);
                        _fun75904_ip = 379;
                        continue _fun75904;
                    case 322:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 9;
                        var9 = var12[var8];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.i1IsOy;
                        var7 = var9.bind(var10)(var8);
                    case 379:
                        var5 = var5.dueAt;
                        if (!(var6 == var5)) {
                            _fun75904_ip = 417;
                            continue _fun75904
                        }
                    case 389:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 16;
                        var5 = var8[var5];
                        var5 = var6.bind(var3)(var5);
                        var8 = var5.BookmarkIcon;
                        _fun75904_ip = 443;
                        continue _fun75904;
                    case 417:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 15;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var8 = var5.ClockIcon;
                    case 443:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.open;
                        var4 = {};
                        var9 = 'SAVED_MESSAGE_CREATE_SUCCESS';
                        var4.key = var9;
                        var4.IconComponent = var8;
                        var4.content = var7;
                        var4 = var5.bind(var6)(var4);
                    case 494:
                        return var3;
                    case 497:
                        return var2;
                    case 500:
                        return var1;
                    case 503:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun75909: for (var _fun75909_ip = 0;;) switch (_fun75909_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75909_ip = 388;
                            continue _fun75909
                        }
                    case 13:
                        var7 = var4.displayToast;
                        var6 = null;
                        var3 = Object.create(var6);
                        var1 = 0;
                        var3.displayToast = var1;
                        var15 = {};
                        var14 = var4;
                        var13 = var3;
                        var5 = copyDataProperties(var15, var14, var13);
                        var3 = undefined;
                        SaveGenerator(address = 49);
                    case 47:
                        return var3;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75909_ip = 385;
                            continue _fun75909
                        }
                    case 58:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 7;
                        var2 = var9[var2];
                        var8 = var8.bind(var3)(var2);
                        var2 = var8.deleteSavedMessage;
                        var9 = var2.bind(var8)(var5);
                        var8 = var9.catch;
                        var2 = function(arg0) { // Environment: var2
                            _fun75910: for (var _fun75910_ip = 0;;) switch (_fun75910_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var0 = 13;
                                    var0 = var7[var0];
                                    var9 = undefined;
                                    var3 = var1.bind(var9)(var0);
                                    var2 = var3.open;
                                    var1 = {};
                                    var0 = 'SAVED_MESSAGE_REMOVE_ERROR';
                                    var1.key = var0;
                                    var4 = _closure1_slot0;
                                    var0 = 14;
                                    var0 = var7[var0];
                                    var0 = var4.bind(var9)(var0);
                                    var0 = var0.CircleErrorIcon;
                                    var1.IconComponent = var0;
                                    var0 = null;
                                    var7 = var0 == var6;
                                    var4 = undefined;
                                    if (var7) {
                                        _fun75910_ip = 102;
                                        continue _fun75910
                                    }
                                case 83:
                                    var6 = var6.body;
                                    var7 = var0 == var6;
                                    var4 = undefined;
                                    if (var7) {
                                        _fun75910_ip = 102;
                                        continue _fun75910
                                    }
                                case 97:
                                    var4 = var6.message;
                                case 102:
                                    if (!(var0 == var4)) {
                                        _fun75910_ip = 161;
                                        continue _fun75910
                                    }
                                case 106:
                                    var8 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 9;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var5 = var10[var5];
                                    var5 = var8.bind(var9)(var5);
                                    var5 = var5.t;
                                    var5 = var5.R0RpRX;
                                    var4 = var6.bind(var7)(var5);
                                case 161:
                                    var1.content = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var2 = var8.bind(var9)(var2);
                        SaveGenerator(address = 116);
                    case 114:
                        return var2;
                    case 116:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun75909_ip = 382;
                            continue _fun75909
                        }
                    case 125:
                        if (!(var6 != var2)) {
                            _fun75909_ip = 379;
                            continue _fun75909
                        }
                    case 132:
                        if (!var7) {
                            _fun75909_ip = 379;
                            continue _fun75909
                        }
                    case 138:
                        var7 = var5.dueAt;
                        if (!(var6 == var7)) {
                            _fun75909_ip = 207;
                            continue _fun75909
                        }
                    case 148:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 9;
                        var8 = var11[var7];
                        var8 = var10.bind(var3)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var3)(var7);
                        var7 = var7.t;
                        var7 = var7["5KOMiV"];
                        var7 = var8.bind(var9)(var7);
                        _fun75909_ip = 264;
                        continue _fun75909;
                    case 207:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 9;
                        var9 = var12[var8];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.D0tS02;
                        var7 = var9.bind(var10)(var8);
                    case 264:
                        var5 = var5.dueAt;
                        if (!(var6 == var5)) {
                            _fun75909_ip = 302;
                            continue _fun75909
                        }
                    case 274:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 16;
                        var5 = var8[var5];
                        var5 = var6.bind(var3)(var5);
                        var8 = var5.BookmarkIcon;
                        _fun75909_ip = 328;
                        continue _fun75909;
                    case 302:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 15;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var8 = var5.ClockIcon;
                    case 328:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.open;
                        var4 = {};
                        var9 = 'SAVED_MESSAGE_REMOVE_SUCCESS';
                        var4.key = var9;
                        var4.IconComponent = var8;
                        var4.content = var7;
                        var4 = var5.bind(var6)(var4);
                    case 379:
                        return var3;
                    case 382:
                        return var2;
                    case 385:
                        return var1;
                    case 388:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var3.AbortCodes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SAVED_MESSAGES_MAX;
    var _closure1_slot6 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/SavedMessageHelpers.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.addOrUpdateSavedMessage = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.removeSavedMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9620, 660, 9622, 9623, 7613, 7615, 9624, 3994, 1234, 4557, 9625, 1307, 3139, 5386, 3265, 9636, 2]);