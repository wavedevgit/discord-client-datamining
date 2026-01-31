// modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot4 = var6;
    var3 = var3.Routes;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginVertical = var9;
    var9 = 8;
    var8.marginHorizontal = var9;
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var9;
    var3.badge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildMemberDashChannelRow, environment: var1
        _fun102179: for (var _fun102179_ip = 0;;) switch (_fun102179_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guild;
                var14 = var1.selected;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)();
                var10 = var2.id;
                var _closure2_slot0 = var10;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var6 = var4.bind(var3)(var1);
                var4 = var6.useSubmittedGuildJoinRequestTotal;
                var1 = {};
                var1.guildId = var10;
                var1 = var4.bind(var6)(var1);
                var4 = null;
                var7 = var4 != var1;
                var6 = 0;
                var8 = 0;
                if (!var7) {
                    _fun102179_ip = 95;
                    continue _fun102179
                }
            case 92:
                var8 = var1;
            case 95:
                var11 = var2.features;
                var7 = var11.has;
                var1 = _closure1_slot4;
                var1 = var1.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var1 = var7.bind(var11)(var1);
                _closure2_slot1 = var1;
                var7 = _closure1_slot3;
                var11 = var7.useEffect;
                var12 = var2.features;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var10;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun102180: for (var _fun102180_ip = 0;;) switch (_fun102180_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun102180_ip = 88;
                                continue _fun102180
                            }
                        case 10:
                            var1 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 8;
                            var0 = var6[var0];
                            var5 = undefined;
                            var2 = var1.bind(var5)(var0);
                            var1 = var2.fetchGuildJoinRequests;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var4 = _closure1_slot0;
                            var3 = 9;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.SUBMITTED;
                            var0.status = var3;
                            var0 = var1.bind(var2)(var0);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var11.bind(var7)(var1, var2);
                var2 = var7.useCallback;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.transitionTo;
                    var6 = _closure1_slot5;
                    var5 = var6.CHANNEL;
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.MEMBER_SAFETY;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var2.bind(var7)(var0, var1);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 11;
                var0 = var0[var7];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ChannelModes;
                if (var14) {
                    _fun102179_ip = 232;
                    continue _fun102179
                }
            case 224:
                var11 = var0.DEFAULT;
                _fun102179_ip = 238;
                continue _fun102179;
            case 232:
                var11 = var0.SELECTED;
            case 238:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = var13[var7];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var10;
                var10 = var9.container;
                var0.style = var10;
                var10 = true;
                var0.accessible = var10;
                var12 = _closure1_slot0;
                var15 = 12;
                var10 = var13[var15];
                var10 = var12.bind(var3)(var10);
                var17 = var10.intl;
                var16 = var17.string;
                var10 = var13[var15];
                var10 = var12.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["9Oq93m"];
                var10 = var16.bind(var17)(var10);
                var0.accessibilityLabel = var10;
                var10 = {};
                var10.selected = var14;
                var0.accessibilityState = var10;
                var0.mode = var11;
                var10 = var13[var7];
                var10 = var12.bind(var3)(var10);
                var14 = var10.BaseChannelName;
                var10 = {};
                var16 = var13[var15];
                var16 = var12.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var13[var15];
                var15 = var12.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["9Oq93m"];
                var15 = var16.bind(var17)(var15);
                var10.name = var15;
                var10.mode = var11;
                var10 = var2.bind(var3)(var14, var10);
                var0.name = var10;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var10 = var7.BaseChannelIcon;
                var7 = {};
                var7.mode = var11;
                var11 = 13;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.GroupIcon;
                var7.IconComponent = var11;
                var7 = var2.bind(var3)(var10, var7);
                var0.icon = var7;
                var6 = var8 > var6;
                var4 = null;
                if (!var6) {
                    _fun102179_ip = 538;
                    continue _fun102179
                }
            case 492:
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 14;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var9.badge;
                var5.style = var9;
                var5.value = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 538:
                var0.channelInfo = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1379, 8747, 33, 1297, 671, 13285, 7381, 3175, 1220, 11648, 1234, 4816, 8589, 2]);