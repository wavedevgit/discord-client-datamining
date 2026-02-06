// modules/search/native/components/list/SearchList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun105489: for (var _fun105489_ip = 0;;) switch (_fun105489_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var4 = _closure1_slot7;
                var4 = var4.DM;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 811;
                    continue _fun105489
                }
            case 30:
                var4 = _closure1_slot7;
                var4 = var4.GUILD_CHANNEL_MEMBER;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 756;
                    continue _fun105489
                }
            case 47:
                var4 = _closure1_slot7;
                var4 = var4.SEARCH_HISTORY_ITEM;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 729;
                    continue _fun105489
                }
            case 64:
                var4 = _closure1_slot7;
                var4 = var4.MEDIA_GRID;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 685;
                    continue _fun105489
                }
            case 81:
                var4 = _closure1_slot7;
                var4 = var4.MEDIA;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 622;
                    continue _fun105489
                }
            case 98:
                var4 = _closure1_slot7;
                var4 = var4.MEDIA_PLACEHOLDER;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 615;
                    continue _fun105489
                }
            case 115:
                var4 = _closure1_slot7;
                var4 = var4.FILE_OR_LINK_PLACEHOLDER;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 615;
                    continue _fun105489
                }
            case 132:
                var4 = _closure1_slot7;
                var4 = var4.MESSAGE_PLACEHOLDER;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 615;
                    continue _fun105489
                }
            case 149:
                var4 = _closure1_slot7;
                var4 = var4.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 615;
                    continue _fun105489
                }
            case 166:
                var4 = _closure1_slot7;
                var4 = var4.GROUP_DM;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 565;
                    continue _fun105489
                }
            case 183:
                var4 = _closure1_slot7;
                var4 = var4.GUILD_TEXT_CHANNEL;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 526;
                    continue _fun105489
                }
            case 200:
                var4 = _closure1_slot7;
                var4 = var4.GUILD_VOICE_CHANNEL;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 526;
                    continue _fun105489
                }
            case 217:
                var4 = _closure1_slot7;
                var4 = var4.MESSAGE;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 487;
                    continue _fun105489
                }
            case 234:
                var4 = _closure1_slot7;
                var4 = var4.LINK;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 426;
                    continue _fun105489
                }
            case 251:
                var4 = _closure1_slot7;
                var4 = var4.FILE;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 365;
                    continue _fun105489
                }
            case 265:
                var4 = _closure1_slot7;
                var4 = var4.GENERIC;
                if (!(var4 !== var3)) {
                    _fun105489_ip = 331;
                    continue _fun105489
                }
            case 279:
                var2 = _closure1_slot7;
                var2 = var2.SECTION;
                if (!(var2 !== var3)) {
                    _fun105489_ip = 297;
                    continue _fun105489
                }
            case 293:
                var2 = undefined;
                return var2;
            case 297:
                var2 = var0.props;
                var4 = var2.title;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var2 = var3.bind(var2)(var4);
                return var2;
            case 331:
                var2 = var0.props;
                var4 = var2.text;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var2 = var3.bind(var2)(var4);
                return var2;
            case 365:
                var2 = var0.props;
                var2 = var2.data;
                var6 = var2.messageId;
                var2 = var0.props;
                var2 = var2.data;
                var5 = var2.fileIndex;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '-';
                var2 = var4.bind(var3)(var6, var2, var5);
                return var2;
            case 426:
                var2 = var0.props;
                var2 = var2.data;
                var6 = var2.messageId;
                var2 = var0.props;
                var2 = var2.data;
                var5 = var2.linkIndex;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '-';
                var2 = var4.bind(var3)(var6, var2, var5);
                return var2;
            case 487:
                var2 = var0.props;
                var2 = var2.message;
                var4 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var2 = var3.bind(var2)(var4);
                return var2;
            case 526:
                var2 = var0.props;
                var2 = var2.channel;
                var4 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var2 = var3.bind(var2)(var4);
                return var2;
            case 565:
                var6 = var0.section;
                var2 = var0.props;
                var2 = var2.channel;
                var5 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '-';
                var2 = var4.bind(var3)(var6, var2, var5);
                return var2;
            case 615:
                var2 = var0.key;
                return var2;
            case 622:
                var2 = var0.props;
                var2 = var2.media;
                var6 = var2.messageId;
                var2 = var0.props;
                var2 = var2.media;
                var5 = var2.mediaIndex;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '-';
                var2 = var4.bind(var3)(var6, var2, var5);
                return var2;
            case 685:
                var2 = var0.props;
                var4 = var2.media;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = var0.messageId;
                    var3 = var0.mediaIndex;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = '-';
                    var0 = var2.bind(var1)(var4, var0, var3);
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.join;
                var2 = '-';
                var2 = var3.bind(var4)(var2);
                return var2;
            case 729:
                var2 = var0.props;
                var3 = var2.searchHistoryItem;
                var2 = function arg0() {
                    _fun105490: for (var _fun105490_ip = 0;;) switch (_fun105490_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var3 = _closure1_slot6;
                            var3 = var3.TEXT;
                            if (!(var3 !== var2)) {
                                _fun105490_ip = 143;
                                continue _fun105490
                            }
                        case 25:
                            var3 = _closure1_slot6;
                            var3 = var3.GROUP_DM;
                            if (!(var3 !== var2)) {
                                _fun105490_ip = 114;
                                continue _fun105490
                            }
                        case 39:
                            var3 = _closure1_slot6;
                            var3 = var3.GUILD_TEXT_CHANNEL;
                            if (!(var3 !== var2)) {
                                _fun105490_ip = 114;
                                continue _fun105490
                            }
                        case 53:
                            var3 = _closure1_slot6;
                            var3 = var3.GUILD_VOICE_CHANNEL;
                            if (!(var3 !== var2)) {
                                _fun105490_ip = 114;
                                continue _fun105490
                            }
                        case 67:
                            var1 = _closure1_slot6;
                            var1 = var1.DM;
                            if (!(var1 !== var2)) {
                                _fun105490_ip = 85;
                                continue _fun105490
                            }
                        case 81:
                            var1 = undefined;
                            return var1;
                        case 85:
                            var3 = var0.userId;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = '';
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        case 114:
                            var3 = var0.channelId;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = '';
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        case 143:
                            var4 = var0.text;
                            var2 = var0.tags;
                            var0 = null;
                            var0 = var0 == var2;
                            var3 = undefined;
                            if (var0) {
                                _fun105490_ip = 200;
                                continue _fun105490
                            }
                        case 165:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.text;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.join;
                            var0 = ' ';
                            var3 = var1.bind(var2)(var0);
                        case 200:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = ' ';
                            var0 = var2.bind(var1)(var4, var0, var3);
                            return var0;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            case 756:
                var1 = var0.props;
                var1 = var1.user;
                var5 = var1.id;
                var1 = var0.props;
                var4 = var1.guildId;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 811:
                var11 = var0.section;
                var1 = var0.props;
                var1 = var1.user;
                var9 = var1.id;
                var0 = var0.props;
                var7 = var0.guildId;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var12 = '';
                var0 = '-';
                var10 = var0;
                var8 = var0;
                var0 = var12[var2](var11, var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var4 = var2.type;
        var1 = _closure1_slot11;
        var0 = undefined;
        var3 = var1.bind(var0)(var2);
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.type;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun105495: for (var _fun105495_ip = 0;;) switch (_fun105495_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.item;
                var2 = var4.type;
                var1 = _closure1_slot7;
                var1 = var1.DM;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 1047;
                    continue _fun105495
                }
            case 33:
                var1 = _closure1_slot7;
                var1 = var1.GROUP_DM;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 999;
                    continue _fun105495
                }
            case 50:
                var1 = _closure1_slot7;
                var1 = var1.SEARCH_HISTORY_ITEM;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 951;
                    continue _fun105495
                }
            case 67:
                var1 = _closure1_slot7;
                var1 = var1.MEDIA;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 903;
                    continue _fun105495
                }
            case 84:
                var1 = _closure1_slot7;
                var1 = var1.MEDIA_PLACEHOLDER;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 855;
                    continue _fun105495
                }
            case 101:
                var1 = _closure1_slot7;
                var1 = var1.FILE_OR_LINK_PLACEHOLDER;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 807;
                    continue _fun105495
                }
            case 118:
                var1 = _closure1_slot7;
                var1 = var1.MEDIA_GRID;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 759;
                    continue _fun105495
                }
            case 135:
                var1 = _closure1_slot7;
                var1 = var1.GUILD_TEXT_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 711;
                    continue _fun105495
                }
            case 152:
                var1 = _closure1_slot7;
                var1 = var1.GUILD_VOICE_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 663;
                    continue _fun105495
                }
            case 169:
                var1 = _closure1_slot7;
                var1 = var1.MESSAGE;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 615;
                    continue _fun105495
                }
            case 186:
                var1 = _closure1_slot7;
                var1 = var1.MESSAGE_PLACEHOLDER;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 579;
                    continue _fun105495
                }
            case 203:
                var1 = _closure1_slot7;
                var1 = var1.LINK;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 531;
                    continue _fun105495
                }
            case 220:
                var1 = _closure1_slot7;
                var1 = var1.FILE;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 483;
                    continue _fun105495
                }
            case 237:
                var1 = _closure1_slot7;
                var1 = var1.GUILD_CHANNEL_MEMBER;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 435;
                    continue _fun105495
                }
            case 254:
                var1 = _closure1_slot7;
                var1 = var1.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 399;
                    continue _fun105495
                }
            case 271:
                var1 = _closure1_slot7;
                var1 = var1.GENERIC;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 351;
                    continue _fun105495
                }
            case 285:
                var1 = _closure1_slot7;
                var1 = var1.SECTION;
                if (!(var1 !== var2)) {
                    _fun105495_ip = 303;
                    continue _fun105495
                }
            case 299:
                var1 = null;
                return var1;
            case 303:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 351:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 399:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 435:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 483:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 531:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 579:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 615:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 663:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 711:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 759:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 807:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 855:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 903:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 951:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 999:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = var4.props;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 1047:
                var3 = _closure1_slot8;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var7 = var4.props;
                var8 = var0;
                var4 = copyDataProperties(var8, var7);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SearchHistoryItemTypes;
    var _closure1_slot6 = var7;
    var3 = var3.SearchListItemTypes;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105496: for (var _fun105496_ip = 0;;) switch (_fun105496_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.contentContainerStyle;
                var17 = var0.data;
                var13 = var0.onEndReached;
                var9 = var0.ItemSeparatorComponent;
                var11 = var0.ListHeaderComponent;
                var10 = var0.ListFooterComponent;
                var18 = var0.estimatedItemSize;
                var8 = var0.numColumns;
                var1 = _closure1_slot3;
                var0 = var1.useRef;
                var4 = null;
                var19 = var0.bind(var1)(var4);
                var0 = _closure1_slot10;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 22;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var16 = var0.bottom;
                var0 = var4 == var8;
                var1 = 0.5;
                var15 = var1;
                if (var0) {
                    _fun105496_ip = 177;
                    continue _fun105496
                }
            case 128:
                var0 = 1;
                var15 = var1;
                if (!(var0 !== var8)) {
                    _fun105496_ip = 177;
                    continue _fun105496
                }
            case 138:
                var15 = 0.8;
                var0 = 2;
                if (!(var0 !== var8)) {
                    _fun105496_ip = 177;
                    continue _fun105496
                }
            case 155:
                var0 = 3;
                var0 = var8 >= var0;
                var15 = undefined;
                if (!var0) {
                    _fun105496_ip = 177;
                    continue _fun105496
                }
            case 167:
                var15 = 0.99;
            case 177:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var6 = var17.length;
                var5 = 0;
                var5 = var5 === var6;
                if (!var5) {
                    _fun105496_ip = 214;
                    continue _fun105496
                }
            case 210:
                var5 = var4 == var10;
            case 214:
                if (!var5) {
                    _fun105496_ip = 221;
                    continue _fun105496
                }
            case 217:
                var5 = var4 == var11;
            case 221:
                if (!var5) {
                    _fun105496_ip = 345;
                    continue _fun105496
                }
            case 224:
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var4 = {};
                var20 = _closure1_slot5;
                var20 = var20.absoluteFill;
                var4.style = var20;
                var22 = _closure1_slot8;
                var21 = _closure1_slot1;
                var27 = _closure1_slot2;
                var20 = 23;
                var20 = var27[var20];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var26 = _closure1_slot0;
                var23 = 24;
                var24 = var27[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var27[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.V6nAfF;
                var23 = var24.bind(var25)(var23);
                var20.text = var23;
                var20 = var22.bind(var3)(var21, var20);
                var4.children = var20;
                var5 = var7.bind(var3)(var6, var4);
            case 345:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var20 = _closure1_slot2;
                var5 = 25;
                var5 = var20[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.AnimatedFlashList;
                var5 = {
                    'ref': null,
                    'keyboardDismissMode': 'on-drag',
                    'keyboardShouldPersistTaps': 'handled'
                };
                var5.ref = var19;
                var5.estimatedItemSize = var18;
                var5.data = var17;
                var17 = _closure1_slot14;
                var5.renderItem = var17;
                var5.onEndReachedThreshold = var15;
                var5.onEndReached = var13;
                var13 = true;
                var5.scrollsToTop = var13;
                var13 = {};
                var15 = 16;
                var15 = var15 + var16;
                var13.paddingBottom = var15;
                var29 = var13;
                var28 = var14;
                var14 = copyDataProperties(var29, var28);
                var5.contentContainerStyle = var13;
                var13 = _closure1_slot12;
                var5.keyExtractor = var13;
                var12 = _closure1_slot13;
                var5.getItemType = var12;
                var5.ListHeaderComponent = var11;
                var5.ListFooterComponent = var10;
                var5.ItemSeparatorComponent = var9;
                var5.numColumns = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/SearchList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8941, 33, 1297, 13756, 13758, 13759, 13776, 13752, 13780, 13782, 13775, 13760, 13783, 13787, 13788, 13791, 13794, 13795, 13796, 13797, 1568, 13741, 1234, 5761, 2]);