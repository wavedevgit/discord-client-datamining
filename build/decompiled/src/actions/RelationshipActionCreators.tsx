// actions/RelationshipActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 4;
        var2 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var2 = var4.closeContextMenu;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var1 = 5;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun64552: for (var _fun64552_ip = 0;;) switch (_fun64552_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var9 = arg2;
                var8 = var0.status;
                var1 = var0.body;
                var4 = var1;
                if (!var4) {
                    _fun64552_ip = 30;
                    continue _fun64552
                }
            case 25:
                var4 = var1.code;
            case 30:
                var1 = 429;
                if (!(var1 !== var8)) {
                    _fun64552_ip = 644;
                    continue _fun64552
                }
            case 43:
                var1 = 403;
                if (!(var1 === var8)) {
                    _fun64552_ip = 73;
                    continue _fun64552
                }
            case 53:
                var2 = _closure1_slot7;
                var2 = var2.EMAIL_VERIFICATION_REQUIRED;
                if (!(var4 !== var2)) {
                    _fun64552_ip = 452;
                    continue _fun64552
                }
            case 73:
                var5 = _closure1_slot7;
                var5 = var5.USER_QUARANTINED;
                if (!(var4 !== var5)) {
                    _fun64552_ip = 395;
                    continue _fun64552
                }
            case 93:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var5 = 9;
                var5 = var6[var5];
                var6 = undefined;
                var7 = var7.bind(var6)(var5);
                var5 = var7.isLimitedAccessErrorCode;
                var5 = var5.bind(var7)(var8, var4);
                if (var5) {
                    _fun64552_ip = 839;
                    continue _fun64552
                }
            case 133:
                var5 = _closure1_slot7;
                var5 = var5.RELATIONSHIP_INVALID_NO_CONFIRMATION;
                if (!(var4 !== var5)) {
                    _fun64552_ip = 839;
                    continue _fun64552
                }
            case 150:
                var5 = _closure1_slot10;
                var5 = var5.SHOW_ALWAYS;
                if (!(var3 === var5)) {
                    _fun64552_ip = 839;
                    continue _fun64552
                }
            case 167:
                var5 = null;
                if (!(var5 == var9)) {
                    _fun64552_ip = 230;
                    continue _fun64552
                }
            case 173:
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var5 = 7;
                var7 = var11[var5];
                var7 = var10.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var11[var5];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.paDJBM;
                var8 = var7.bind(var8)(var5);
                _fun64552_ip = 267;
                continue _fun64552;
            case 230:
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var5 = 10;
                var5 = var10[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var7.humanizeAbortCode;
                if (var4) {
                    _fun64552_ip = 261;
                    continue _fun64552
                }
            case 259:
                var4 = 0;
            case 261:
                var8 = var5.bind(var7)(var4, var9);
            case 267:
                var5 = _closure1_slot12;
                var4 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 7;
                var9 = var11[var7];
                var9 = var10.bind(var6)(var9);
                var13 = var9.intl;
                var12 = var13.string;
                var9 = var11[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["6moJ8s"];
                var9 = var12.bind(var13)(var9);
                var4.title = var9;
                var4.body = var8;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.BddRzS;
                var7 = var8.bind(var9)(var7);
                var4.confirmText = var7;
                var4 = var5.bind(var6)(var4);
                _fun64552_ip = 839;
                continue _fun64552;
            case 395:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 4;
                var5 = var6[var4];
                var4 = undefined;
                var7 = var7.bind(var4)(var5);
                var5 = var7.closeContextMenu;
                var5 = var5.bind(var7)();
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)();
                _fun64552_ip = 839;
                continue _fun64552;
            case 452:
                var4 = _closure1_slot12;
                var2 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 7;
                var6 = var9[var5];
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.Gqf33E;
                var6 = var7.bind(var10)(var6);
                var2.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.GHOBdx;
                var6 = var7.bind(var10)(var6);
                var2.body = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.HbTSE6;
                var5 = var6.bind(var7)(var5);
                var2.confirmText = var5;
                var5 = function() {
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openClaimAccountModal;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2.onConfirm = var5;
                var1 = var4.bind(var1)(var2);
                _fun64552_ip = 839;
                continue _fun64552;
            case 644:
                var2 = _closure1_slot10;
                var2 = var2.SHOW_ALWAYS;
                if (!(var3 === var2)) {
                    _fun64552_ip = 839;
                    continue _fun64552
                }
            case 664:
                var3 = _closure1_slot12;
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var4 = 7;
                var5 = var8[var4];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5["3D5eox"];
                var5 = var6.bind(var9)(var5);
                var2.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var1)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.TuJriJ;
                var5 = var6.bind(var9)(var5);
                var2.body = var5;
                var5 = var8[var4];
                var5 = var7.bind(var1)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var1)(var4);
                var4 = var4.t;
                var4 = var4.DppXIx;
                var4 = var5.bind(var6)(var4);
                var2.confirmText = var4;
                var1 = var3.bind(var1)(var2);
            case 839:
                throw var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var8 = 0;
    var1 = var6[var8];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var7 = 1;
    var1 = var6[var7];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.Endpoints;
    var _closure1_slot6 = var3;
    var3 = var1.AbortCodes;
    var _closure1_slot7 = var3;
    var1 = var1.RelationshipTypes;
    var _closure1_slot8 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ClearFriendRequestFilters;
    var _closure1_slot9 = var1;
    var1 = {};
    var1.SHOW_ALWAYS = var8;
    var3 = 'SHOW_ALWAYS';
    var1[var8] = var3;
    var1.SHOW_ONLY_IF_ACTION_NEEDED = var7;
    var3 = 'SHOW_ONLY_IF_ACTION_NEEDED';
    var1[var7] = var3;
    var _closure1_slot10 = var1;
    var3 = {};
    var7 = function arg0() {
        _fun64554: for (var _fun64554_ip = 0;;) switch (_fun64554_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.discordTag;
                var _closure2_slot0 = var3;
                var4 = var1.context;
                var6 = var1.captchaPayload;
                var1 = var1.errorUxConfig;
                var9 = undefined;
                if (!(var1 === var9)) {
                    _fun64554_ip = 51;
                    continue _fun64554
                }
            case 38:
                var2 = _closure1_slot10;
                var1 = var2.SHOW_ALWAYS;
            case 51:
                var _closure2_slot1 = var1;
                var2 = var3.split;
                var1 = '#';
                var3 = var2.bind(var3)(var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var9)(var3, var1);
                var1 = 0;
                var7 = var2[var1];
                var1 = 1;
                var8 = var2[var1];
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 11;
                var1 = var3[var1];
                var1 = var2.bind(var9)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var10 = _closure1_slot6;
                var5 = var10.USER_RELATIONSHIPS;
                var5 = var5.bind(var10)();
                var1.url = var5;
                var5 = {};
                var5.username = var7;
                var7 = global;
                var7 = var7.parseInt;
                var7 = var7.bind(var9)(var8);
                var5.discriminator = var7;
                var12 = var5;
                var11 = var6;
                var6 = copyDataProperties(var12, var11);
                var1.body = var5;
                var1.context = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot13;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var0)(var1, var3, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.sendRequest = var7;
    var7 = function arg0, arg1() {
        _fun64556: for (var _fun64556_ip = 0;;) switch (_fun64556_ip) {
            case 0:
                var2 = arg0;
                var1 = arguments[2];
                var11 = var2.userId;
                var4 = var2.context;
                var9 = var2.type;
                var8 = var2.fromFriendSuggestion;
                var7 = var2.confirmStrangerRequest;
                var6 = var2.captchaPayload;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun64556_ip = 67;
                    continue _fun64556
                }
            case 54:
                var2 = _closure1_slot10;
                var1 = var2.SHOW_ALWAYS;
            case 67:
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot5;
                var1 = var2.getUser;
                var1 = var1.bind(var2)(var11);
                _closure2_slot2 = var1;
                var2 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 11;
                var1 = var10[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.put;
                var1 = {};
                var10 = _closure1_slot6;
                var5 = var10.USER_RELATIONSHIP;
                var5 = var5.bind(var10)(var11);
                var1.url = var5;
                var5 = {};
                var5.type = var9;
                var5.from_friend_suggestion = var8;
                var5.confirm_stranger_request = var7;
                var13 = var5;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var1.body = var5;
                var1.context = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function() { // Environment: var0
                    _fun64557: for (var _fun64557_ip = 0;;) switch (_fun64557_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun64557_ip = 23;
                                continue _fun64557
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var4 = _closure1_slot13;
                    var3 = _closure2_slot1;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 12;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getUserTag;
                    var0 = _closure2_slot2;
                    var0 = var5.bind(var6)(var0);
                    var0 = var4.bind(var1)(var2, var3, var0);
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.reject;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.addRelationship = var7;
    var7 = function arg0() {
        var3 = _closure1_slot11;
        var2 = var3.addRelationship;
        var1 = arg0;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1["3goNa5"];
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.acceptFriendRequest = var7;
    var7 = function arg0, arg1() {
        var4 = _closure1_slot11;
        var3 = var4.removeRelationship;
        var2 = arg0;
        var1 = arg1;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.pLUaxR;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var3.cancelFriendRequest = var7;
    var7 = function arg0, arg1() {
        var4 = _closure1_slot11;
        var3 = var4.removeRelationship;
        var2 = arg0;
        var1 = arg1;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.vGSLa2;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = undefined;
        return var0;
    };
    var3.removeFriend = var7;
    var7 = function arg0, arg1() {
        var3 = _closure1_slot11;
        var2 = var3.addRelationship;
        var1 = {};
        var4 = arg0;
        var1.userId = var4;
        var4 = arg1;
        var1.context = var4;
        var0 = _closure1_slot8;
        var0 = var0.BLOCKED;
        var1.type = var0;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.mU0Vrp;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.blockUser = var7;
    var7 = function arg0, arg1() {
        var4 = _closure1_slot11;
        var3 = var4.removeRelationship;
        var2 = arg0;
        var1 = arg1;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1["9t1au7"];
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var3.unblockUser = var7;
    var7 = function arg0, arg1, arg2() {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot6;
        var5 = var6.USER_RELATIONSHIP;
        var4 = arg0;
        var4 = var5.bind(var6)(var4);
        var1.url = var4;
        var4 = arg1;
        var1.context = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function() { // Environment: var0
            _fun64570: for (var _fun64570_ip = 0;;) switch (_fun64570_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun64570_ip = 23;
                        continue _fun64570
                    }
                case 13:
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 23:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.n6Jo3E;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.removeRelationship = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = var5.USER_RELATIONSHIP;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.nickname = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.updateRelationship = var7;
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var6 = _closure1_slot6;
        var5 = var6.USER_RELATIONSHIPS;
        var5 = var5.bind(var6)();
        var2.url = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'LOAD_RELATIONSHIPS_SUCCESS';
            var0.type = var3;
            var3 = arg0;
            var3 = var3.body;
            var0.relationships = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'LOAD_RELATIONSHIPS_FAILURE';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var3.fetchRelationships = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.confirmClearPendingRelationships = var7;
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot6;
        var4 = var6.USER_RELATIONSHIPS;
        var4 = var4.bind(var6)();
        var1.url = var4;
        var4 = {};
        var5 = _closure1_slot8;
        var5 = var5.PENDING_INCOMING;
        var4.relationship_type = var5;
        var1.query = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'RELATIONSHIP_PENDING_INCOMING_REMOVED';
            var1.type = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.n6Jo3E;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.clearPendingRelationships = var7;
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot6;
        var4 = var6.USER_RELATIONSHIPS;
        var4 = var4.bind(var6)();
        var1.url = var4;
        var4 = {};
        var6 = _closure1_slot8;
        var6 = var6.PENDING_INCOMING;
        var4.relationship_type = var6;
        var1.query = var4;
        var4 = {};
        var6 = _closure1_slot9;
        var7 = var6.SPAM;
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var6.IGNORED;
        var5[1] = var6;
        var4.filters = var5;
        var1.body = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'RELATIONSHIP_PENDING_INCOMING_REMOVED';
            var1.type = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var0 = 13;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.n6Jo3E;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.clearPendingSpamAndIgnored = var7;
    var7 = function arg0, arg1, arg2() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {};
        var5 = _closure1_slot6;
        var4 = var5.IGNORE_USER;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.location = var5;
        var1.context = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var0 = 16;
            var4 = var3[var0];
            var0 = undefined;
            var7 = var2.bind(var0)(var4);
            var6 = var7.showIgnoreSuccessToast;
            var4 = _closure2_slot0;
            var5 = _closure2_slot1;
            var5 = var6.bind(var7)(var4, var5);
            var9 = _closure1_slot0;
            var1 = 13;
            var1 = var3[var1];
            var1 = var9.bind(var0)(var1);
            var6 = var1.AccessibilityAnnouncer;
            var5 = var6.announce;
            var1 = 7;
            var7 = var3[var1];
            var7 = var9.bind(var0)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var3[var1];
            var1 = var9.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.Us93Ca;
            var1 = var7.bind(var8)(var1);
            var1 = var5.bind(var6)(var1);
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'RELATIONSHIP_IGNORE_USER_SUCCESS';
            var1.type = var5;
            var1.userId = var4;
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var1.timestamp = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var0 = 16;
            var2 = var7[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.showFailedToast;
            var2 = var2.bind(var3)();
            var6 = _closure1_slot0;
            var1 = 13;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.n6Jo3E;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.ignoreUser = var7;
    var7 = function arg0, arg1, arg2() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var5 = _closure1_slot6;
        var4 = var5.IGNORE_USER;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.location = var5;
        var1.context = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var0 = 16;
            var2 = var7[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var4 = var5.showUnignoreSuccessToast;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var2 = var4.bind(var5)(var3, var2);
            var6 = _closure1_slot0;
            var1 = 13;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.QlH5w6;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var0 = 16;
            var2 = var7[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.showFailedToast;
            var2 = var2.bind(var3)();
            var6 = _closure1_slot0;
            var1 = 13;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 7;
            var4 = var7[var1];
            var4 = var6.bind(var0)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.t;
            var1 = var1.n6Jo3E;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.unignoreUser = var7;
    var _closure1_slot11 = var3;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/RelationshipActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.RelationshipErrorUXConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1621, 660, 8020, 7432, 4003, 4680, 1234, 8021, 8022, 8023, 507, 3236, 3206, 806, 8024, 5924, 2]);