// modules/user_settings/native/quests/QuestEmbedPreview.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/quests/QuestEmbedPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83727: for (var _fun83727_ip = 0;;) switch (_fun83727_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.questId;
                var _closure2_slot0 = var7;
                var3 = _closure1_slot3;
                var4 = var3.useMemo;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var2 = var0.setOptions;
                    var1 = {
                        'renderCodedLinks': true,
                        'renderEmbeds': true,
                        'renderComponents': true,
                        'shouldDisableInteractiveComponents': true
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var8 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var4 = undefined;
                var9 = var2.bind(var4)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var9)(var2, var1);
                var _closure2_slot1 = var6;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun83730: for (var _fun83730_ip = 0;;) switch (_fun83730_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = null;
                            var1 = var4 == var0;
                            var0 = null;
                            if (var1) {
                                _fun83730_ip = 286;
                                continue _fun83730
                            }
                        case 21:
                            var1 = _closure2_slot1;
                            var1 = var4 == var1;
                            var0 = null;
                            if (var1) {
                                _fun83730_ip = 286;
                                continue _fun83730
                            }
                        case 37:
                            var3 = _closure1_slot4;
                            var1 = {
                                'id': '1000000000000000000',
                                'type': null,
                                'channel_id': '1000000000000000001',
                                'author': null,
                                'content': '',
                                'timestamp': null,
                                'edited_timestamp': null,
                                'tts': false,
                                'mention_everyone': false
                            };
                            var6 = _closure1_slot6;
                            var6 = var6.DEFAULT;
                            var1.type = var6;
                            var6 = _closure2_slot1;
                            var1.author = var6;
                            var6 = global;
                            var6 = var6.Date;
                            var7 = var6.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var10 = var7;
                            var6 = new var10[var6](var9);
                            var6 = var6 instanceof Object ? var6 : var7;
                            var1.timestamp = var6;
                            var6 = false;
                            var7 = new Array(0);
                            var1.mentions = var7;
                            var7 = new Array(0);
                            var1.mention_roles = var7;
                            var7 = new Array(0);
                            var1.attachments = var7;
                            var7 = new Array(0);
                            var1.embeds = var7;
                            var7 = new Array(0);
                            var1.reactions = var7;
                            var1.pinned = var6;
                            var1.webhook_id = var4;
                            var4 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 7;
                            var6 = var8[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.CodedLinkType;
                            var6 = var6.QUESTS_EMBED;
                            var4.type = var6;
                            var6 = _closure2_slot0;
                            var4.code = var6;
                            var2 = 8;
                            var2 = var8[var2];
                            var5 = var7.bind(var5)(var2);
                            var2 = var5.getQuestUrl;
                            var2 = var2.bind(var5)(var6);
                            var4.url = var2;
                            var2 = new Array(1);
                            var2[0] = var4;
                            var1.codedLinks = var2;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var10 = var2;
                            var9 = var1;
                            var1 = new var10[var3](var9, var8);
                            var0 = var1 instanceof Object ? var1 : var2;
                        case 286:
                            return var0;
                    }
                };
                var7 = var2.bind(var3)(var0, var1);
                var0 = null;
                var1 = var0 == var7;
                if (var1) {
                    _fun83727_ip = 280;
                    continue _fun83727
                }
            case 142:
                var3 = _closure1_slot7;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 9;
                var1 = var9[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var12 = _closure1_slot0;
                var5 = 10;
                var10 = var9[var5];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var9[var5];
                var5 = var12.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["habP/M"];
                var5 = var10.bind(var11)(var5);
                var1.title = var5;
                var5 = 11;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.rowGenerator = var8;
                var5.message = var7;
                var7 = 0;
                var5.horizontalOffset = var7;
                var7 = 'none';
                var5.pointerEvents = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 280:
                return var0;
        }
    };
    var2.QuestEmbedPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3062, 1613, 660, 33, 6480, 566, 3288, 5254, 10681, 1234, 8762, 2]);