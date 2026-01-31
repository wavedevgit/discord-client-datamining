// modules/forwarding/canForwardMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun72970: for (var _fun72970_ip = 0;;) switch (_fun72970_ip) {
            case 0:
                var4 = arg0;
                var7 = arguments[1];
                var8 = arguments[2];
                var5 = arguments[3];
                var9 = arguments[4];
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun72970_ip = 28;
                    continue _fun72970
                }
            case 21:
                var7 = _closure1_slot5;
            case 28:
                if (!(var8 === var3)) {
                    _fun72970_ip = 39;
                    continue _fun72970
                }
            case 32:
                var8 = _closure1_slot2;
            case 39:
                if (!(var5 === var3)) {
                    _fun72970_ip = 50;
                    continue _fun72970
                }
            case 43:
                var5 = _closure1_slot3;
            case 50:
                if (!(var9 === var3)) {
                    _fun72970_ip = 61;
                    continue _fun72970
                }
            case 54:
                var9 = _closure1_slot4;
            case 61:
                var2 = null;
                if (!(var2 != var4)) {
                    _fun72970_ip = 447;
                    continue _fun72970
                }
            case 70:
                var1 = var4.state;
                var0 = _closure1_slot7;
                var0 = var0.SEND_FAILED;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun72970_ip = 126;
                    continue _fun72970
                }
            case 95:
                var1 = _closure1_slot8;
                var11 = var1.FORWARDABLE;
                var10 = var11.has;
                var1 = var4.type;
                var1 = var10.bind(var11)(var1);
                var1 = !var1;
                var0 = !var1;
            case 126:
                if (!var0) {
                    _fun72970_ip = 139;
                    continue _fun72970
                }
            case 129:
                var1 = var4.poll;
                var0 = var2 == var1;
            case 139:
                if (!var0) {
                    _fun72970_ip = 152;
                    continue _fun72970
                }
            case 142:
                var1 = var4.sharedClientTheme;
                var0 = var2 == var1;
            case 152:
                if (!var0) {
                    _fun72970_ip = 165;
                    continue _fun72970
                }
            case 155:
                var1 = var4.activity;
                var0 = var2 == var1;
            case 165:
                if (!var0) {
                    _fun72970_ip = 177;
                    continue _fun72970
                }
            case 168:
                var1 = var4.call;
                var0 = var2 == var1;
            case 177:
                if (!var0) {
                    _fun72970_ip = 190;
                    continue _fun72970
                }
            case 180:
                var1 = var4.activityInstance;
                var0 = var2 == var1;
            case 190:
                if (!var0) {
                    _fun72970_ip = 240;
                    continue _fun72970
                }
            case 193:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 5;
                var1 = var11[var1];
                var12 = var10.bind(var3)(var1);
                var11 = var12.removeFlag;
                var10 = var4.flags;
                var1 = _closure1_slot10;
                var10 = var11.bind(var12)(var10, var1);
                var1 = 0;
                var0 = var1 === var10;
            case 240:
                if (var0) {
                    _fun72970_ip = 247;
                    continue _fun72970
                }
            case 243:
                var0 = false;
                return var0;
            case 247:
                var1 = var5.getChannel;
                var0 = var4.channel_id;
                var5 = var1.bind(var5)(var0);
                var1 = var7.can;
                var0 = _closure1_slot9;
                var0 = var0.READ_MESSAGE_HISTORY;
                var0 = var1.bind(var7)(var0, var5);
                if (!(var2 != var5)) {
                    _fun72970_ip = 308;
                    continue _fun72970
                }
            case 288:
                if (var0) {
                    _fun72970_ip = 308;
                    continue _fun72970
                }
            case 291:
                var0 = var5.isPrivate;
                var0 = var0.bind(var5)();
                if (var0) {
                    _fun72970_ip = 308;
                    continue _fun72970
                }
            case 304:
                var0 = false;
                return var0;
            case 308:
                var0 = var2 == var5;
                var7 = undefined;
                if (var0) {
                    _fun72970_ip = 322;
                    continue _fun72970
                }
            case 317:
                var7 = var5.guild_id;
            case 322:
                var0 = var2 == var7;
                if (var0) {
                    _fun72970_ip = 377;
                    continue _fun72970
                }
            case 329:
                var1 = var9.getGuild;
                var9 = var1.bind(var9)(var7);
                var10 = var2 == var9;
                var1 = undefined;
                if (var10) {
                    _fun72970_ip = 374;
                    continue _fun72970
                }
            case 348:
                var10 = var9.features;
                var9 = var10.has;
                var6 = _closure1_slot6;
                var6 = var6.FORWARDING_DISABLED;
                var1 = var9.bind(var10)(var6);
            case 374:
                var0 = !var1;
            case 377:
                if (!var0) {
                    _fun72970_ip = 445;
                    continue _fun72970
                }
            case 380:
                var1 = var2 == var7;
                if (var1) {
                    _fun72970_ip = 407;
                    continue _fun72970
                }
            case 387:
                var6 = var8.isChannelOrThreadParentGated;
                var4 = var4.channel_id;
                var4 = var6.bind(var8)(var7, var4);
                var1 = !var4;
            case 407:
                if (!var1) {
                    _fun72970_ip = 442;
                    continue _fun72970
                }
            case 410:
                var4 = var2 == var5;
                var3 = undefined;
                if (var4) {
                    _fun72970_ip = 429;
                    continue _fun72970
                }
            case 419:
                var4 = var5.isModeratorReportChannel;
                var3 = var4.bind(var5)();
            case 429:
                var2 = var2 != var3;
                if (!var2) {
                    _fun72970_ip = 439;
                    continue _fun72970
                }
            case 436:
                var2 = var3;
            case 439:
                var1 = !var2;
            case 442:
                var0 = var1;
            case 445:
                return var0;
            case 447:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot11 = var3;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var7 = var5.bind(var0)(var4);
    var4 = var7.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = var7.MessageFlags;
    var8 = var7.MessageStates;
    var _closure1_slot7 = var8;
    var8 = var7.MessageTypesSets;
    var _closure1_slot8 = var8;
    var7 = var7.Permissions;
    var _closure1_slot9 = var7;
    var8 = var4.CROSSPOSTED;
    var7 = var4.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD;
    var8 = var8 | var7;
    var7 = var4.GUILD_FEED_HIDDEN;
    var8 = var8 | var7;
    var7 = var4.HAS_SNAPSHOT;
    var8 = var8 | var7;
    var7 = var4.HAS_THREAD;
    var8 = var8 | var7;
    var7 = var4.IS_CROSSPOST;
    var8 = var8 | var7;
    var7 = var4.IS_VOICE_MESSAGE;
    var8 = var8 | var7;
    var7 = var4.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING;
    var8 = var8 | var7;
    var7 = var4.SUPPRESS_EMBEDS;
    var8 = var8 | var7;
    var7 = var4.SUPPRESS_NOTIFICATIONS;
    var8 = var8 | var7;
    var7 = var4.URGENT;
    var7 = var8 | var7;
    var4 = var4.IS_COMPONENTS_V2;
    var4 = var7 | var4;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/canForwardMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2.canForwardMessage = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot5;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = _closure1_slot2;
        var1[1] = var5;
        var5 = _closure1_slot3;
        var1[2] = var5;
        var4 = _closure1_slot4;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot11;
            var11 = _closure2_slot0;
            var10 = _closure1_slot5;
            var9 = _closure1_slot2;
            var8 = _closure1_slot3;
            var7 = _closure1_slot4;
            var12 = undefined;
            var0 = var12[var6](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanForwardMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1663, 1372, 1410, 3050, 660, 1384, 566, 2]);