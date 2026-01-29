// modules/forwarding/canForwardMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: _canForwardMessage, environment: var1
        _fun72894: for (var _fun72894_ip = 0;;) switch (_fun72894_ip) {
            case 0:
                var8 = arg0;
                var1 = var8.state;
                var0 = _closure1_slot7;
                var0 = var0.SEND_FAILED;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun72894_ip = 201;
                    continue _fun72894
                }
            case 31:
                var1 = _closure1_slot8;
                var3 = var1.FORWARDABLE;
                var2 = var3.has;
                var1 = var8.type;
                var1 = var2.bind(var3)(var1);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun72894_ip = 198;
                    continue _fun72894
                }
            case 68:
                var2 = var8.poll;
                var9 = null;
                var2 = var9 == var2;
                if (!var2) {
                    _fun72894_ip = 195;
                    continue _fun72894
                }
            case 83:
                var3 = var8.sharedClientTheme;
                var3 = var9 == var3;
                if (!var3) {
                    _fun72894_ip = 192;
                    continue _fun72894
                }
            case 96:
                var4 = var8.activity;
                var4 = var9 == var4;
                if (!var4) {
                    _fun72894_ip = 189;
                    continue _fun72894
                }
            case 109:
                var5 = var8.call;
                var5 = var9 == var5;
                if (!var5) {
                    _fun72894_ip = 186;
                    continue _fun72894
                }
            case 121:
                var6 = var8.activityInstance;
                var6 = var9 == var6;
                if (!var6) {
                    _fun72894_ip = 183;
                    continue _fun72894
                }
            case 134:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var9 = 5;
                var10 = var10[var9];
                var9 = undefined;
                var10 = var11.bind(var9)(var10);
                var9 = var10.removeFlag;
                var8 = var8.flags;
                var7 = _closure1_slot9;
                var8 = var9.bind(var10)(var8, var7);
                var7 = 0;
                var6 = var7 === var8;
            case 183:
                var5 = var6;
            case 186:
                var4 = var5;
            case 189:
                var3 = var4;
            case 192:
                var2 = var3;
            case 195:
                var1 = var2;
            case 198:
                var0 = var1;
            case 201:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var6 = var4.bind(var0)(var3);
    var3 = var6.GuildFeatures;
    var _closure1_slot6 = var3;
    var3 = var6.MessageFlags;
    var7 = var6.MessageStates;
    var _closure1_slot7 = var7;
    var6 = var6.MessageTypesSets;
    var _closure1_slot8 = var6;
    var7 = var3.CROSSPOSTED;
    var6 = var3.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD;
    var7 = var7 | var6;
    var6 = var3.GUILD_FEED_HIDDEN;
    var7 = var7 | var6;
    var6 = var3.HAS_SNAPSHOT;
    var7 = var7 | var6;
    var6 = var3.HAS_THREAD;
    var7 = var7 | var6;
    var6 = var3.IS_CROSSPOST;
    var7 = var7 | var6;
    var6 = var3.IS_VOICE_MESSAGE;
    var7 = var7 | var6;
    var6 = var3.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING;
    var7 = var7 | var6;
    var6 = var3.SUPPRESS_EMBEDS;
    var7 = var7 | var6;
    var6 = var3.SUPPRESS_NOTIFICATIONS;
    var7 = var7 | var6;
    var6 = var3.URGENT;
    var6 = var7 | var6;
    var3 = var3.IS_COMPONENTS_V2;
    var3 = var6 | var3;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/canForwardMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: canForwardMessage, environment: var1
        _fun72895: for (var _fun72895_ip = 0;;) switch (_fun72895_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot10;
                var4 = undefined;
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun72895_ip = 24;
                    continue _fun72895
                }
            case 20:
                var0 = false;
                return var0;
            case 24:
                var5 = _closure1_slot4;
                var3 = var5.getChannel;
                var0 = var1.channel_id;
                var3 = var3.bind(var5)(var0);
                var0 = null;
                var5 = var0 == var3;
                var4 = undefined;
                if (var5) {
                    _fun72895_ip = 59;
                    continue _fun72895
                }
            case 54:
                var4 = var3.guild_id;
            case 59:
                var0 = var0 == var4;
                if (var0) {
                    _fun72895_ip = 90;
                    continue _fun72895
                }
            case 66:
                var3 = _closure1_slot3;
                var2 = var3.isChannelOrThreadParentGated;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var4, var1);
                var0 = !var1;
            case 90:
                return var0;
        }
    };
    var2.canForwardMessage = var3;
    var1 = function(arg0) { // Original name: useCanForwardMessage, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var3);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(3);
        var3[0] = var2;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = _closure1_slot4;
        var3[2] = var2;
        var2 = function() { // Environment: var0
            _fun72897: for (var _fun72897_ip = 0;;) switch (_fun72897_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun72897_ip = 212;
                        continue _fun72897
                    }
                case 16:
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var2)(var0);
                    var1 = var3 == var0;
                    var8 = undefined;
                    if (var1) {
                        _fun72897_ip = 56;
                        continue _fun72897
                    }
                case 51:
                    var8 = var0.guild_id;
                case 56:
                    if (!(var3 != var8)) {
                        _fun72897_ip = 112;
                        continue _fun72897
                    }
                case 60:
                    var1 = _closure1_slot5;
                    var0 = var1.getGuild;
                    var1 = var0.bind(var1)(var8);
                    var6 = var3 == var1;
                    var0 = undefined;
                    if (var6) {
                        _fun72897_ip = 109;
                        continue _fun72897
                    }
                case 83:
                    var7 = var1.features;
                    var6 = var7.has;
                    var1 = _closure1_slot6;
                    var1 = var1.FORWARDING_DISABLED;
                    var0 = var6.bind(var7)(var1);
                case 109:
                    if (var0) {
                        _fun72897_ip = 208;
                        continue _fun72897
                    }
                case 112:
                    var0 = var3 != var8;
                    if (!var0) {
                        _fun72897_ip = 144;
                        continue _fun72897
                    }
                case 119:
                    var7 = _closure1_slot3;
                    var6 = var7.isChannelOrThreadParentGated;
                    var1 = _closure2_slot0;
                    var1 = var1.channel_id;
                    var0 = var6.bind(var7)(var8, var1);
                case 144:
                    var1 = _closure2_slot0;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun72897_ip = 200;
                        continue _fun72897
                    }
                case 155:
                    var6 = _closure1_slot4;
                    var5 = var6.getChannel;
                    var4 = _closure2_slot0;
                    var4 = var4.channel_id;
                    var4 = var5.bind(var6)(var4);
                    var3 = var3 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun72897_ip = 197;
                        continue _fun72897
                    }
                case 187:
                    var3 = var4.isModeratorReportChannel;
                    var2 = var3.bind(var4)();
                case 197:
                    var1 = var2;
                case 200:
                    if (var0) {
                        _fun72897_ip = 206;
                        continue _fun72897
                    }
                case 203:
                    var0 = var1;
                case 206:
                    return var0;
                case 208:
                    var0 = true;
                    return var0;
                case 212:
                    var0 = true;
                    return var0;
            }
        };
        var5 = var5.bind(var6)(var3, var2);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun72898: for (var _fun72898_ip = 0;;) switch (_fun72898_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var0 = !var0;
                    if (!var0) {
                        _fun72898_ip = 23;
                        continue _fun72898
                    }
                case 13:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var0 = var2 != var3;
                case 23:
                    if (!var0) {
                        _fun72898_ip = 44;
                        continue _fun72898
                    }
                case 26:
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 44:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCanForwardMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1663, 1372, 1410, 660, 1384, 566, 2]);