// modules/emojis/hooks/useEmojiAndSource.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ExpressionSourceGuildRecord;
    var _closure1_slot7 = var6;
    var6 = var3.EmojiSourceDataTypes;
    var _closure1_slot8 = var6;
    var3 = var3.getEmojiSourceData;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emojis/hooks/useEmojiAndSource.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun74008: for (var _fun74008_ip = 0;;) switch (_fun74008_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.emojiId;
                var _closure2_slot0 = var12;
                var9 = var1.refreshPositionKey;
                var _closure2_slot1 = var9;
                var16 = undefined;
                var _closure2_slot2 = var16;
                var _closure2_slot3 = var16;
                var _closure2_slot4 = var16;
                var _closure2_slot5 = var16;
                var _closure2_slot6 = var16;
                var _closure2_slot7 = var16;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var1 = var3[var1];
                var4 = var2.bind(var16)(var1);
                var3 = var4.useStateFromStoresObject;
                var1 = _closure1_slot6;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot5;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun74009: for (var _fun74009_ip = 0;;) switch (_fun74009_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var4 = _closure1_slot5;
                            var2 = _closure2_slot0;
                            var6 = null;
                            var1 = var6 != var2;
                            var5 = null;
                            if (!var1) {
                                _fun74009_ip = 40;
                                continue _fun74009
                            }
                        case 29:
                            var1 = var3.getCustomEmojiById;
                            var5 = var1.bind(var3)(var2);
                        case 40:
                            var3 = var6 == var5;
                            var2 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun74009_ip = 56;
                                continue _fun74009
                            }
                        case 51:
                            var1 = var5.type;
                        case 56:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 7;
                            var0 = var7[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.EmojiTypes;
                            var0 = var0.GUILD;
                            if (!(var1 !== var0)) {
                                _fun74009_ip = 108;
                                continue _fun74009
                            }
                        case 92:
                            var0 = {
                                'emoji': null,
                                'joinedEmojiSourceGuildRecord': null
                            };
                            _fun74009_ip = 147;
                            continue _fun74009;
                        case 108:
                            var1 = {};
                            var1.emoji = var5;
                            var3 = var4.getGuild;
                            var6 = var6 == var5;
                            var2 = undefined;
                            if (var6) {
                                _fun74009_ip = 134;
                                continue _fun74009
                            }
                        case 129:
                            var2 = var5.guildId;
                        case 134:
                            var2 = var3.bind(var4)(var2);
                            var1.joinedEmojiSourceGuildRecord = var2;
                            var0 = var1;
                        case 147:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var4 = var1.joinedEmojiSourceGuildRecord;
                var2 = var1.emoji;
                var17 = null;
                var3 = var17 != var4;
                var1 = var17 != var4;
                if (!var1) {
                    _fun74008_ip = 166;
                    continue _fun74008
                }
            case 140:
                var7 = var4.features;
                var6 = var7.has;
                var5 = _closure1_slot10;
                var5 = var5.DISCOVERABLE;
                var1 = var6.bind(var7)(var5);
            case 166:
                var10 = !var3;
                if (!var3) {
                    _fun74008_ip = 175;
                    continue _fun74008
                }
            case 172:
                var10 = var1;
            case 175:
                if (!var10) {
                    _fun74008_ip = 182;
                    continue _fun74008
                }
            case 178:
                var10 = var17 != var12;
            case 182:
                _closure2_slot2 = var10;
                var11 = _closure1_slot4;
                var1 = var11.useState;
                var1 = var1.bind(var11)(var10);
                var7 = _closure1_slot3;
                var15 = 2;
                var5 = var7.bind(var16)(var1, var15);
                var6 = 0;
                var1 = var5[var6];
                var13 = 1;
                var5 = var5[var13];
                _closure2_slot3 = var5;
                var5 = var11.useState;
                var5 = var5.bind(var11)(var17);
                var7 = var7.bind(var16)(var5, var15);
                var5 = var7[var6];
                var7 = var7[var13];
                _closure2_slot4 = var7;
                var7 = var17 != var4;
                var11 = var10;
                var14 = null;
                if (!var7) {
                    _fun74008_ip = 285;
                    continue _fun74008
                }
            case 270:
                var10 = _closure1_slot7;
                var7 = var10.createFromGuildRecord;
                var14 = var7.bind(var10)(var4);
            case 285:
                var10 = _closure1_slot4;
                var7 = var10.useState;
                var7 = var7.bind(var10)(var14);
                var14 = _closure1_slot3;
                var8 = var14.bind(var16)(var7, var15);
                var7 = var8[var6];
                var8 = var8[var13];
                _closure2_slot5 = var8;
                var8 = var10.useState;
                var8 = var8.bind(var10)(var17);
                var8 = var14.bind(var16)(var8, var15);
                var6 = var8[var6];
                var8 = var8[var13];
                _closure2_slot6 = var8;
                var8 = var10.useRef;
                var8 = var8.bind(var10)(var9);
                _closure2_slot7 = var8;
                var9 = var10.useEffect;
                var8 = function() { // Environment: var0
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var9 = var10.useEffect;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var11;
                var0 = function() { // Environment: var0
                    _fun74011: for (var _fun74011_ip = 0;;) switch (_fun74011_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var0 = var0.current;
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun74011_ip = 31;
                                continue _fun74011
                            }
                        case 18:
                            var1 = _closure2_slot7;
                            var0 = var1.current;
                            var0 = var0.bind(var1)();
                        case 31:
                            var1 = function() { // Environment: var0
                                var3 = _closure1_slot2;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun74014: for (var _fun74014_ip = 0;;) switch (_fun74014_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun74014_ip = 193;
                                                    continue _fun74014
                                                }
                                            case 10:
                                                var1 = _closure2_slot0;
                                                var5 = null;
                                                var1 = var5 != var1;
                                                var2 = null;
                                                if (!var1) {
                                                    _fun74014_ip = 62;
                                                    continue _fun74014
                                                }
                                            case 28:
                                                var6 = _closure1_slot9;
                                                var4 = _closure2_slot0;
                                                var1 = undefined;
                                                var1 = var6.bind(var1)(var4);
                                                SaveGenerator(address = 50);
                                            case 48:
                                                return var1;
                                            case 50:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                var2 = var1;
                                                if (var4) {
                                                    _fun74014_ip = 190;
                                                    continue _fun74014
                                                }
                                            case 62:
                                                if (!(var5 != var2)) {
                                                    _fun74014_ip = 148;
                                                    continue _fun74014
                                                }
                                            case 66:
                                                var7 = _closure2_slot4;
                                                var4 = var2.type;
                                                var6 = undefined;
                                                var4 = var7.bind(var6)(var4);
                                                var7 = var2.type;
                                                var8 = _closure1_slot8;
                                                var8 = var8.APPLICATION;
                                                if (!(var8 !== var7)) {
                                                    _fun74014_ip = 134;
                                                    continue _fun74014
                                                }
                                            case 104:
                                                var4 = _closure1_slot8;
                                                var4 = var4.GUILD;
                                                if (!(var4 === var7)) {
                                                    _fun74014_ip = 148;
                                                    continue _fun74014
                                                }
                                            case 118:
                                                var7 = _closure2_slot5;
                                                var4 = var2.guild;
                                                var4 = var7.bind(var6)(var4);
                                                _fun74014_ip = 148;
                                                continue _fun74014;
                                            case 134:
                                                var4 = _closure2_slot6;
                                                var2 = var2.application;
                                                var2 = var4.bind(var6)(var2);
                                            case 148:
                                                var6 = _closure2_slot3;
                                                var2 = undefined;
                                                var4 = false;
                                                var4 = var6.bind(var2)(var4);
                                                var4 = _closure2_slot7;
                                                var4 = var4.current;
                                                if (!(var5 != var4)) {
                                                    _fun74014_ip = 187;
                                                    continue _fun74014
                                                }
                                            case 174:
                                                var4 = _closure2_slot7;
                                                var3 = var4.current;
                                                var3 = var3.bind(var4)();
                                            case 187:
                                                return var2;
                                            case 190:
                                                return var1;
                                            case 193:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = _closure2_slot2;
                            if (var3) {
                                _fun74011_ip = 81;
                                continue _fun74011
                            }
                        case 53:
                            var3 = _closure2_slot7;
                            var3 = var3.current;
                            if (!(var4 != var3)) {
                                _fun74011_ip = 85;
                                continue _fun74011
                            }
                        case 66:
                            var3 = _closure2_slot7;
                            var2 = var3.current;
                            var2 = var2.bind(var3)();
                            _fun74011_ip = 85;
                            continue _fun74011;
                        case 81:
                            var1 = var1.bind(var0)();
                        case 85:
                            return var0;
                    }
                };
                var0 = var9.bind(var10)(var0, var8);
                var0 = {};
                var0.expressionSourceGuild = var7;
                var0.expressionSourceApplication = var6;
                var0.sourceType = var5;
                var0.joinedEmojiSourceGuildRecord = var4;
                var0.hasJoinedEmojiSourceGuild = var3;
                var0.emoji = var2;
                var0.isFetching = var1;
                return var0;
        }
    };
    var2.useEmojiAndSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1410, 4702, 7358, 660, 3068, 632, 2]);