// modules/guild_sidebar/SectionFooterHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1, arg2() {
        _fun102716: for (var _fun102716_ip = 0;;) switch (_fun102716_ip) {
            case 0:
                var6 = arg0;
                var7 = arg2;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 4;
                var0 = var0[var9];
                var8 = undefined;
                var0 = var1.bind(var8)(var0);
                var0 = var0.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var7 !== var0)) {
                    _fun102716_ip = 66;
                    continue _fun102716
                }
            case 41:
                var1 = var6.getSections;
                var0 = false;
                var0 = var1.bind(var6)(var0);
                var1 = var0[var7];
                var0 = 0;
                var0 = var0 === var1;
                _fun102716_ip = 147;
                continue _fun102716;
            case 66:
                var1 = var6.getGuildActionSection;
                var2 = var1.bind(var6)();
                var1 = var2.getRows;
                var3 = var1.bind(var2)();
                var2 = var3.length;
                var1 = 1;
                var1 = var1 === var2;
                if (!var1) {
                    _fun102716_ip = 121;
                    continue _fun102716
                }
            case 101:
                var2 = 0;
                var3 = var3[var2];
                var2 = _closure1_slot4;
                var2 = var2.GUILD_PREMIUM_PROGRESS_BAR;
                var1 = var3 === var2;
            case 121:
                if (var1) {
                    _fun102716_ip = 144;
                    continue _fun102716
                }
            case 124:
                var2 = var6.getGuildActionSection;
                var3 = var2.bind(var6)();
                var2 = var3.isEmpty;
                var1 = var2.bind(var3)();
            case 144:
                var0 = var1;
            case 147:
                var0 = !var0;
                if (!var0) {
                    _fun102716_ip = 294;
                    continue _fun102716
                }
            case 156:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var9];
                var1 = var2.bind(var8)(var1);
                var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
                var1 = var7 === var1;
                if (var1) {
                    _fun102716_ip = 291;
                    continue _fun102716
                }
            case 186:
                var2 = arg1;
                var3 = !var2;
                var2 = !var3;
                if (var3) {
                    _fun102716_ip = 288;
                    continue _fun102716
                }
            case 198:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var9];
                var3 = var5.bind(var8)(var3);
                var3 = var3.SECTION_INDEX_FAVORITES;
                var3 = var7 === var3;
                if (var3) {
                    _fun102716_ip = 285;
                    continue _fun102716
                }
            case 228:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var4 = var4.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                var4 = var7 !== var4;
                if (!var4) {
                    _fun102716_ip = 282;
                    continue _fun102716
                }
            case 258:
                var5 = var6.recentsSectionNumber;
                var5 = var7 === var5;
                if (var5) {
                    _fun102716_ip = 279;
                    continue _fun102716
                }
            case 271:
                var6 = var6.voiceChannelsSectionNumber;
                var5 = false;
            case 279:
                var4 = var5;
            case 282:
                var3 = var4;
            case 285:
                var2 = var3;
            case 288:
                var1 = var2;
            case 291:
                var0 = var1;
            case 294:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun102717: for (var _fun102717_ip = 0;;) switch (_fun102717_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 4;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var4.bind(var5)(var0);
                var0 = var0.SECTION_INDEX_GUILD_ACTIONS;
                var0 = var2 === var0;
                if (var0) {
                    _fun102717_ip = 71;
                    continue _fun102717
                }
            case 44:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.SECTION_INDEX_FAVORITES;
                var0 = var2 === var4;
            case 71:
                if (var0) {
                    _fun102717_ip = 101;
                    continue _fun102717
                }
            case 74:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                var0 = var2 === var3;
            case 101:
                if (var0) {
                    _fun102717_ip = 114;
                    continue _fun102717
                }
            case 104:
                var3 = var1.recentsSectionNumber;
                var0 = var2 === var3;
            case 114:
                if (var0) {
                    _fun102717_ip = 127;
                    continue _fun102717
                }
            case 117:
                var1 = var1.voiceChannelsSectionNumber;
                var0 = var2 === var1;
            case 127:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function arg0() {
        _fun102718: for (var _fun102718_ip = 0;;) switch (_fun102718_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.category;
                var3 = var1.voiceStates;
                var _closure2_slot0 = var3;
                var3 = var1.selectedChannelId;
                var _closure2_slot1 = var3;
                var1 = var1.selectedVoiceChannelId;
                var _closure2_slot2 = var1;
                var4 = _closure1_slot2;
                var3 = var4.isCollapsed;
                var1 = var2.record;
                var1 = var1.id;
                var3 = var3.bind(var4)(var1);
                var1 = true;
                if (!(var1 === var3)) {
                    _fun102718_ip = 105;
                    continue _fun102718
                }
            case 76:
                var1 = var2.getChannelRecords;
                var2 = var1.bind(var2)();
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun102719: for (var _fun102719_ip = 0;;) switch (_fun102719_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot3;
                            var1 = var2.can;
                            var0 = _closure1_slot5;
                            var0 = var0.VIEW_CHANNEL;
                            var0 = var1.bind(var2)(var0, var3);
                            if (var0) {
                                _fun102719_ip = 39;
                                continue _fun102719
                            }
                        case 35:
                            var0 = false;
                            return var0;
                        case 39:
                            var1 = _closure2_slot0;
                            var0 = var3.id;
                            var1 = var1[var0];
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun102719_ip = 65;
                                continue _fun102719
                            }
                        case 61:
                            var1 = new Array(0);
                        case 65:
                            var4 = var3.id;
                            var0 = _closure2_slot2;
                            var0 = var4 !== var0;
                            if (!var0) {
                                _fun102719_ip = 94;
                                continue _fun102719
                            }
                        case 81:
                            var3 = var3.id;
                            var2 = _closure2_slot1;
                            var0 = var3 !== var2;
                        case 94:
                            if (!var0) {
                                _fun102719_ip = 108;
                                continue _fun102719
                            }
                        case 97:
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 108:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun102718_ip = 109;
                continue _fun102718;
            case 105:
                var0 = new Array(0);
            case 109:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/SectionFooterHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1, arg2() {
        var4 = arg0;
        var3 = arg2;
        var0 = {};
        var6 = _closure1_slot6;
        var2 = undefined;
        var5 = arg1;
        var5 = var6.bind(var2)(var4, var5, var3);
        var0.hasDivider = var5;
        var1 = _closure1_slot7;
        var1 = var1.bind(var2)(var4, var3);
        var0.canHaveVoiceSummary = var1;
        return var0;
    };
    var2.getSectionFooterConfig = var4;
    var2.getSectionFooterActiveVoiceChannels = var3;
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.category;
        var0 = var1.voiceStates;
        var4 = var1.selectedChannelId;
        var3 = var1.selectedVoiceChannelId;
        var2 = _closure1_slot8;
        var1 = {};
        var1.category = var5;
        var1.selectedChannelId = var4;
        var1.selectedVoiceChannelId = var3;
        var1.voiceStates = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.length;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var2.isSectionFooterWithActiveVoiceChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4533, 3052, 4544, 660, 4535, 2]);