// modules/polls/PollsInteractionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = {};
    var _closure1_slot3 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createWithEqualityFn;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = {};
        var0.pollsByChannelId = var2;
        var2 = {};
        var0.pollsByMessageId = var2;
        var1 = function arg0, arg1, arg2() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var0 = arg2;
            var _closure3_slot2 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 1;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun56072: for (var _fun56072_ip = 0;;) switch (_fun56072_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure3_slot2;
                            var1 = var4.pollsByChannelId;
                            var0 = _closure3_slot0;
                            var6 = var1[var0];
                            var0 = null;
                            var5 = var0 == var6;
                            var1 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun56072_ip = 45;
                                continue _fun56072
                            }
                        case 37:
                            var5 = _closure3_slot1;
                            var0 = var6[var5];
                        case 45:
                            var3 = var3.bind(var1)(var0);
                            var0 = {};
                            var1 = {};
                            var8 = var4.pollsByChannelId;
                            var9 = var1;
                            var5 = copyDataProperties(var9, var8);
                            var6 = _closure3_slot0;
                            var5 = {};
                            var7 = var4.pollsByChannelId;
                            var8 = var7[var6];
                            var9 = var5;
                            var7 = copyDataProperties(var9, var8);
                            var2 = _closure3_slot1;
                            var5[var2] = var3;
                            var1[var6] = var5;
                            var0.pollsByChannelId = var1;
                            var1 = {};
                            var8 = var4.pollsByMessageId;
                            var9 = var1;
                            var4 = copyDataProperties(var9, var8);
                            var1[var2] = var3;
                            var0.pollsByMessageId = var1;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.updatePollState = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/PollsInteractionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot4;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var _closure3_slot1 = var0;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun56075: for (var _fun56075_ip = 0;;) switch (_fun56075_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1.pollsByMessageId;
                        var1 = var1[var2];
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun56075_ip = 34;
                            continue _fun56075
                        }
                    case 26:
                        var0 = _closure3_slot1;
                        var0[var2] = var1;
                    case 34:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useMessagePollInteractions = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot4;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var0 = function(arg0) { // Environment: var0
            _fun56077: for (var _fun56077_ip = 0;;) switch (_fun56077_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.pollsByChannelId;
                    var0 = _closure2_slot0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun56077_ip = 33;
                        continue _fun56077
                    }
                case 26:
                    var0 = _closure1_slot3;
                case 33:
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useChannelPollInteractions = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                _fun56080: for (var _fun56080_ip = 0;;) switch (_fun56080_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.pollsByChannelId;
                        var4 = var0.pollsByMessageId;
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var1 = _closure2_slot0;
                        var6 = var3[var1];
                        var1 = null;
                        if (!(var1 == var6)) {
                            _fun56080_ip = 47;
                            continue _fun56080
                        }
                    case 40:
                        var6 = _closure1_slot3;
                    case 47:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 3;
                        var1 = var8[var1];
                        var5 = var5.bind(var7)(var1);
                        var1 = var5.keys;
                        var5 = var1.bind(var5)(var6);
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var4 = copyDataProperties(var10, var9);
                        _closure4_slot0 = var1;
                        var4 = var5.forEach;
                        var2 = function(arg0) { // Environment: var2
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = delete var1[var0];
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        var2 = {};
                        var10 = var2;
                        var9 = var3;
                        var3 = copyDataProperties(var10, var9);
                        var0 = _closure2_slot0;
                        var0 = delete var2[var0];
                        var0 = {};
                        var0.pollsByChannelId = var2;
                        var0.pollsByMessageId = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearChannelPollState = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                _fun56084: for (var _fun56084_ip = 0;;) switch (_fun56084_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.pollsByChannelId;
                        var2 = var0.pollsByMessageId;
                        var4 = {};
                        var0 = _closure2_slot0;
                        var0 = var5[var0];
                        var1 = null;
                        if (!(var1 == var0)) {
                            _fun56084_ip = 36;
                            continue _fun56084
                        }
                    case 34:
                        var0 = {};
                    case 36:
                        var7 = var4;
                        var6 = var0;
                        var0 = copyDataProperties(var7, var6);
                        var0 = _closure2_slot1;
                        var1 = delete var4[var0];
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var2 = copyDataProperties(var7, var6);
                        var0 = delete var1[var0];
                        var0 = {};
                        var2 = {};
                        var7 = var2;
                        var6 = var5;
                        var5 = copyDataProperties(var7, var6);
                        var3 = _closure2_slot0;
                        var2[var3] = var4;
                        var0.pollsByChannelId = var2;
                        var0.pollsByMessageId = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearPollState = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = _closure1_slot4;
        var0 = var1.getState;
        var4 = var0.bind(var1)();
        var3 = var4.updatePollState;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.updatePollState = var3;
    var1 = function arg0, arg1() {
        _fun56086: for (var _fun56086_ip = 0;;) switch (_fun56086_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var1 = var0.pollsByChannelId;
                var0 = arg0;
                var2 = var1[var0];
                var0 = null;
                var1 = var0 == var2;
                var0 = undefined;
                if (var1) {
                    _fun56086_ip = 48;
                    continue _fun56086
                }
            case 41:
                var1 = arg1;
                var0 = var2[var1];
            case 48:
                return var0;
        }
    };
    var2.getPollState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [797, 802, 628, 21, 2]);