// modules/polls/useVoteReactors.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_NUM_REACTION_USERS;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/useVoteReactors.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76353: for (var _fun76353_ip = 0;;) switch (_fun76353_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.channelId;
                var _closure2_slot0 = var10;
                var8 = var1.messageId;
                var _closure2_slot1 = var8;
                var2 = var1.reaction;
                var _closure2_slot2 = var2;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 2;
                var4 = var9[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot3;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = new Array(3);
                var4[0] = var10;
                var4[1] = var8;
                var8 = var2.emoji;
                var4[2] = var8;
                var8 = _closure1_slot1;
                var1 = 4;
                var1 = var9[var1];
                var11 = var8.bind(var3)(var1);
                var13 = function() { // Environment: var0
                    _fun76354: for (var _fun76354_ip = 0;;) switch (_fun76354_ip) {
                        case 0:
                            var7 = _closure1_slot3;
                            var6 = var7.getReactions;
                            var5 = _closure2_slot0;
                            var12 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var11 = var1.emoji;
                            var10 = _closure1_slot4;
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var8.bind(var0)(var1);
                            var1 = var1.ReactionTypes;
                            var9 = var1.VOTE;
                            var14 = var7;
                            var13 = var5;
                            var5 = var14[var6](var13, var12, var11, var10, var9, var8);
                            var1 = global;
                            var2 = var1.Array;
                            var1 = var2.from;
                            var3 = null;
                            var4 = var3 == var5;
                            if (var4) {
                                _fun76354_ip = 113;
                                continue _fun76354
                            }
                        case 104:
                            var4 = var5.values;
                            var0 = var4.bind(var5)();
                        case 113:
                            if (!(var3 == var0)) {
                                _fun76354_ip = 121;
                                continue _fun76354
                            }
                        case 117:
                            var0 = new Array(0);
                        case 121:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var15 = var7;
                var14 = var5;
                var12 = var4;
                var1 = var15[var6](var14, var13, var12, var11, var10);
                var0 = {};
                var0.reactors = var1;
                var4 = var2.count_details;
                var2 = null;
                var5 = var2 == var4;
                if (var5) {
                    _fun76353_ip = 161;
                    continue _fun76353
                }
            case 155:
                var3 = var4.vote;
            case 161:
                var4 = var2 != var3;
                var2 = 0;
                if (!var4) {
                    _fun76353_ip = 173;
                    continue _fun76353
                }
            case 170:
                var2 = var3;
            case 173:
                var1 = var1.length;
                var1 = var2 > var1;
                var0.hasMore = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6576, 660, 566, 6578, 644, 2]);