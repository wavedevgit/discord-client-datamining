// modules/messages/useShowConvoStarterInDM.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RelationshipTypes;
    var _closure1_slot6 = var6;
    var3 = var3.UserFlags;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/useShowConvoStarterInDM.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 25;
    var2.MAX_MESSAGES_ALLOWED_FOR_GREETING = var3;
    var1 = function arg0() {
        _fun89682: for (var _fun89682_ip = 0;;) switch (_fun89682_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var1 = var6.isDM;
                var7 = var1.bind(var6)();
                if (!var7) {
                    _fun89682_ip = 35;
                    continue _fun89682
                }
            case 22:
                var1 = var6.isSystemDM;
                var1 = var1.bind(var6)();
                var7 = !var1;
            case 35:
                if (!var7) {
                    _fun89682_ip = 65;
                    continue _fun89682
                }
            case 38:
                var3 = var6.rawRecipients;
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.bot;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var7 = !var1;
            case 65:
                var _closure2_slot1 = var7;
                var5 = null;
                if (!var7) {
                    _fun89682_ip = 84;
                    continue _fun89682
                }
            case 74:
                var1 = var6.getRecipientId;
                var5 = var1.bind(var6)();
            case 84:
                var _closure2_slot2 = var5;
                var4 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 5;
                var2 = var9[var2];
                var3 = undefined;
                var10 = var4.bind(var3)(var2);
                var8 = var10.useStrangerDangerWarning;
                var2 = var6.id;
                var8 = var8.bind(var10)(var2);
                var _closure2_slot3 = var8;
                var2 = 6;
                var2 = var9[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.useStateFromStores;
                var9 = _closure1_slot3;
                var2 = new Array(4);
                var2[0] = var9;
                var9 = _closure1_slot2;
                var2[1] = var9;
                var9 = _closure1_slot4;
                var2[2] = var9;
                var1 = _closure1_slot5;
                var2[3] = var1;
                var1 = new Array(4);
                var1[0] = var8;
                var1[1] = var7;
                var6 = var6.id;
                var1[2] = var6;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun89684: for (var _fun89684_ip = 0;;) switch (_fun89684_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun89684_ip = 274;
                                continue _fun89684
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun89684_ip = 27;
                                continue _fun89684
                            }
                        case 23:
                            var2 = false;
                            return var2;
                        case 27:
                            var5 = _closure1_slot2;
                            var4 = var5.isMessageRequest;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun89684_ip = 270;
                                continue _fun89684
                            }
                        case 60:
                            var3 = _closure2_slot2;
                            if (!(var0 != var3)) {
                                _fun89684_ip = 104;
                                continue _fun89684
                            }
                        case 68:
                            var5 = _closure1_slot4;
                            var4 = var5.getRelationshipType;
                            var3 = _closure2_slot2;
                            var4 = var4.bind(var5)(var3);
                            var3 = _closure1_slot6;
                            var3 = var3.BLOCKED;
                            if (!(var4 !== var3)) {
                                _fun89684_ip = 266;
                                continue _fun89684
                            }
                        case 104:
                            var3 = _closure2_slot2;
                            if (!(var0 != var3)) {
                                _fun89684_ip = 159;
                                continue _fun89684
                            }
                        case 112:
                            var5 = _closure1_slot5;
                            var4 = var5.getUser;
                            var3 = _closure2_slot2;
                            var4 = var4.bind(var5)(var3);
                            if (!(var0 != var4)) {
                                _fun89684_ip = 159;
                                continue _fun89684
                            }
                        case 135:
                            var3 = var4.hasFlag;
                            var0 = _closure1_slot7;
                            var0 = var0.PROVISIONAL_ACCOUNT;
                            var0 = var3.bind(var4)(var0);
                            if (var0) {
                                _fun89684_ip = 262;
                                continue _fun89684
                            }
                        case 159:
                            var4 = _closure1_slot3;
                            var3 = var4.getMessages;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var3 = var3.bind(var4)(var0);
                            var0 = var3.ready;
                            if (!var0) {
                                _fun89684_ip = 201;
                                continue _fun89684
                            }
                        case 192:
                            var4 = var3.hasMoreBefore;
                            var0 = !var4;
                        case 201:
                            if (!var0) {
                                _fun89684_ip = 213;
                                continue _fun89684
                            }
                        case 204:
                            var4 = var3.hasMoreAfter;
                            var0 = !var4;
                        case 213:
                            if (!var0) {
                                _fun89684_ip = 228;
                                continue _fun89684
                            }
                        case 216:
                            var4 = var3.length;
                            var3 = 25;
                            var0 = var4 < var3;
                        case 228:
                            if (!var0) {
                                _fun89684_ip = 260;
                                continue _fun89684
                            }
                        case 231:
                            var3 = _closure1_slot3;
                            var2 = var3.hasCurrentUserSentMessage;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 260:
                            return var0;
                        case 262:
                            var0 = false;
                            return var0;
                        case 266:
                            var0 = false;
                            return var0;
                        case 270:
                            var0 = false;
                            return var0;
                        case 274:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.useShowConvoStarterInDM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3964, 4249, 3100, 1621, 660, 9814, 566, 2]);