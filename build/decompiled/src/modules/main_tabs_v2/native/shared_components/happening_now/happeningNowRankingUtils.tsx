// modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot5 = var4;
    var4 = var3.HAPPENING_NOW_CARD_WIDTH_SMALL_WITH_MARGIN;
    var _closure1_slot6 = var4;
    var3 = var3.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun101569: for (var _fun101569_ip = 0;;) switch (_fun101569_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.kind;
                var0 = 'placeholder';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 19:
                var0 = 'voice';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 30:
                var0 = 'activity';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 41:
                var0 = 'guild-event';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 54:
                var0 = 'active-channel';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 67:
                var0 = 'live-guild-stage';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 80:
                var0 = 'embedded-activity';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 93:
                var0 = 'unified-vc';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 103:
                var0 = 'user-returned';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 215;
                    continue _fun101569
                }
            case 113:
                var0 = 'user';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 206;
                    continue _fun101569
                }
            case 121:
                var0 = 'invite';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 197;
                    continue _fun101569
                }
            case 129:
                var0 = 'create-channel';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 197;
                    continue _fun101569
                }
            case 139:
                var0 = 'customize-guild';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 197;
                    continue _fun101569
                }
            case 149:
                var0 = 'student-hub-add-channel';
                if (!(var0 !== var1)) {
                    _fun101569_ip = 197;
                    continue _fun101569
                }
            case 159:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 197:
                var0 = _closure1_slot6;
                return var0;
            case 206:
                var0 = _closure1_slot7;
                return var0;
            case 215:
                var0 = _closure1_slot5;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/happeningNowRankingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.cardSize = var3;
    var3 = {
        'Stage': 7,
        'Voice': 6,
        'Stream': 5,
        'Game': 4,
        'Listening': 3,
        'CustomStatus': 3,
        'User': 2,
        'Base': 1
    };
    var2.HappeningNowWeights = var3;
    var3 = -1000;
    var2.HAPPENING_NOW_OFFLINE_PENALTY = var3;
    var3 = function arg0() {
        var2 = arg0;
        var1 = function arg0() {
            var2 = function arg0() {
                _fun101572: for (var _fun101572_ip = 0;;) switch (_fun101572_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 'voiceState';
                        var0 = var0 in var1;
                        if (!var0) {
                            _fun101572_ip = 117;
                            continue _fun101572
                        }
                    case 14:
                        var2 = var1.voiceState;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun101572_ip = 117;
                            continue _fun101572
                        }
                    case 26:
                        var1 = var1.voiceState;
                        var4 = var1.channelId;
                        if (!(var0 != var4)) {
                            _fun101572_ip = 113;
                            continue _fun101572
                        }
                    case 41:
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.values;
                        var3 = _closure1_slot4;
                        var0 = var3.getVoiceStatesForChannel;
                        var0 = var0.bind(var3)(var4);
                        var3 = var1.bind(var2)(var0);
                        var1 = var3.length;
                        var0 = 0;
                        var0 = var1 > var0;
                        if (!var0) {
                            _fun101572_ip = 111;
                            continue _fun101572
                        }
                    case 91:
                        var2 = var3.every;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.discoverable;
                            var0 = false;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1);
                    case 111:
                        return var0;
                    case 113:
                        var0 = false;
                        return var0;
                    case 117:
                        var0 = false;
                        return var0;
                }
            };
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var _closure2_slot0 = var1;
        var1 = function arg0() {
            var2 = function arg0() {
                _fun101575: for (var _fun101575_ip = 0;;) switch (_fun101575_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = 'voiceState';
                        var0 = var0 in var2;
                        if (!var0) {
                            _fun101575_ip = 177;
                            continue _fun101575
                        }
                    case 19:
                        var3 = var2.voiceState;
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun101575_ip = 177;
                            continue _fun101575
                        }
                    case 34:
                        var2 = var2.voiceState;
                        var5 = var2.channelId;
                        if (!(var0 != var5)) {
                            _fun101575_ip = 173;
                            continue _fun101575
                        }
                    case 52:
                        var4 = _closure1_slot4;
                        var3 = var4.getVoiceStatesForChannel;
                        var4 = var3.bind(var4)(var5);
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun101575_ip = 171;
                            continue _fun101575
                        }
                    case 77:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 4;
                        var3 = var7[var3];
                        var6 = undefined;
                        var3 = var5.bind(var6)(var3);
                        var5 = var3.bind(var6)(var4);
                        var4 = var5.map;
                        var3 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.userId;
                            return var0;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.filter;
                        var5 = _closure1_slot0;
                        var2 = 3;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.isNotNullish;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.some;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot3;
                            var1 = var2.isBlockedOrIgnored;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1);
                    case 171:
                        return var0;
                    case 173:
                        var0 = false;
                        return var0;
                    case 177:
                        var0 = false;
                        return var0;
                }
            };
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var _closure2_slot1 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun101578: for (var _fun101578_ip = 0;;) switch (_fun101578_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3);
                    var0 = !var0;
                    if (!var0) {
                        _fun101578_ip = 35;
                        continue _fun101578
                    }
                case 23:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 35:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.filterHappeningNowCards = var3;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.orderBy;
        var2 = new Array(2);
        var1 = function(arg0) { // Environment: var0
            _fun101580: for (var _fun101580_ip = 0;;) switch (_fun101580_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = arg0;
                    var2 = var3.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = 1;
                    if (!(var2 === var1)) {
                        _fun101580_ip = 30;
                        continue _fun101580
                    }
                case 28:
                    var0 = 0;
                case 30:
                    return var0;
            }
        };
        var2[0] = var1;
        var0 = function(arg0) { // Environment: var0
            var2 = function arg0() {
                _fun101582: for (var _fun101582_ip = 0;;) switch (_fun101582_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 'voiceState';
                        var0 = var0 in var1;
                        if (!var0) {
                            _fun101582_ip = 118;
                            continue _fun101582
                        }
                    case 14:
                        var2 = var1.voiceState;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun101582_ip = 118;
                            continue _fun101582
                        }
                    case 26:
                        var1 = var1.voiceState;
                        var3 = var1.discoverable;
                        var2 = false;
                        if (!(var2 !== var3)) {
                            _fun101582_ip = 114;
                            continue _fun101582
                        }
                    case 44:
                        var5 = var1.channelId;
                        var0 = var0 != var5;
                        if (!var0) {
                            _fun101582_ip = 112;
                            continue _fun101582
                        }
                    case 56:
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.values;
                        var4 = _closure1_slot4;
                        var1 = var4.getVoiceStatesForChannel;
                        var1 = var1.bind(var4)(var5);
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.some;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.discoverable;
                            var0 = false;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1);
                    case 112:
                        return var0;
                    case 114:
                        var0 = true;
                        return var0;
                    case 118:
                        var0 = false;
                        return var0;
                }
            };
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var2[1] = var0;
        var1 = arg0;
        var0 = ['asc', 'asc'];
        var0 = var3.bind(var4)(var1, var2, var0);
        return var0;
    };
    var2.sortHappeningNowCards = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3061, 3482, 10804, 1304, 22, 2]);