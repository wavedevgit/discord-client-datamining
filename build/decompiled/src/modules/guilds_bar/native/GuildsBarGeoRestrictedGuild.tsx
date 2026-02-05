// modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var3 = var8.GUILD_ITEM_BADGE_SIZE;
    var12 = var8.GUILD_ITEM_SIZE;
    var8 = 3;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.jsx;
    var _closure1_slot4 = var8;
    var9 = var10.create;
    var8 = {};
    var11 = {};
    var11.width = var12;
    var11.height = var12;
    var8.guildIcon = var11;
    var11 = {
        'borderColor': 'transparent',
        'width': null,
        'height': null,
        'bottom': 4,
        'right': 12
    };
    var11.width = var3;
    var11.height = var3;
    var3 = 4;
    var8.geoRestrictedBadge = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot5 = var8;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = {};
    var8 = 'bottom-right';
    var3.position = var8;
    var7 = var7.bind(var0)(var3);
    var3 = new Array(1);
    var3[0] = var7;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun101194: for (var _fun101194_ip = 0;;) switch (_fun101194_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.restrictedGuild;
                var _closure2_slot0 = var10;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.useGuildsBarAnimatedWrapperStyles;
                var2 = true;
                var11 = var4.bind(var5)(var2, var2);
                var2 = var10.icon;
                var4 = null;
                var2 = var4 != var2;
                var9 = null;
                if (!var2) {
                    _fun101194_ip = 111;
                    continue _fun101194
                }
            case 70:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.getAnimatableSourceWithFallback;
                var5 = false;
                var2 = function(arg0) { // Environment: var1
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var0 = var8[var0];
                    var7 = undefined;
                    var2 = var1.bind(var7)(var0);
                    var1 = var2.getGuildIconSource;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var0.id = var5;
                    var6 = _closure1_slot0;
                    var4 = 7;
                    var5 = var8[var4];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.ImageSizes;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.GuildIconSizes;
                    var4 = var4.LARGE;
                    var4 = var5[var4];
                    var0.size = var4;
                    var3 = var3.icon;
                    var0.icon = var3;
                    var3 = arg0;
                    var0.canAnimate = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var6.bind(var7)(var5, var2);
            case 111:
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var7 = var10.id;
                var2 = new Array(2);
                var2[0] = var7;
                var7 = var10.name;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var1 = function() {
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var0 = 8;
                        var1 = var8[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var4 = 9;
                        var5 = var8[var4];
                        var5 = var7.bind(var0)(var5);
                        var9 = var5.intl;
                        var6 = var9.string;
                        var5 = var8[var4];
                        var5 = var7.bind(var0)(var5);
                        var5 = var5.t;
                        var5 = var5.aCAiGl;
                        var5 = var6.bind(var9)(var5);
                        var1.title = var5;
                        var5 = var8[var4];
                        var5 = var7.bind(var0)(var5);
                        var10 = var5.intl;
                        var9 = var10.format;
                        var5 = var8[var4];
                        var5 = var7.bind(var0)(var5);
                        var5 = var5.t;
                        var6 = var5["4cJV9S"];
                        var5 = {};
                        var11 = _closure2_slot0;
                        var11 = var11.name;
                        var5.serverName = var11;
                        var5 = var9.bind(var10)(var6, var5);
                        var1.body = var5;
                        var5 = var8[var4];
                        var5 = var7.bind(var0)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var0)(var4);
                        var4 = var4.t;
                        var4 = var4.J2TBi3;
                        var4 = var5.bind(var6)(var4);
                        var1.cancelText = var4;
                        var4 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.leaveGuild;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1.onCancel = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onPress = var1;
                    return var0;
                };
                var5 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = var7[var0];
                var1 = var6.bind(var3)(var0);
                var0 = {
                    'selected': false,
                    'unread': false,
                    'circle': true,
                    'styles': null,
                    'label': null,
                    'isDragTarget': false
                };
                var0.styles = var11;
                var11 = var10.name;
                var0.label = var11;
                var0.config = var5;
                var5 = _closure1_slot6;
                var0.cutouts = var5;
                var0.overState = var3;
                var5 = 11;
                var5 = var7[var5];
                var11 = var6.bind(var3)(var5);
                var5 = {};
                var12 = _closure1_slot5;
                var12 = var12.geoRestrictedBadge;
                var5.style = var12;
                var5 = var2.bind(var3)(var11, var5);
                var0.externalChildren = var5;
                var5 = 12;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var7 = var10.id;
                var5.guildId = var7;
                var5 = var2.bind(var3)(var6, var5);
                var0.expandedChildren = var5;
                if (!(var4 == var9)) {
                    _fun101194_ip = 388;
                    continue _fun101194
                }
            case 302:
                var6 = _closure1_slot4;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 7;
                var4 = var11[var7];
                var5 = var5.bind(var3)(var4);
                var4 = {
                    'value': null,
                    'selected': false,
                    'animate': false
                };
                var10 = var10.name;
                var4.value = var10;
                var10 = _closure1_slot0;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.GuildIconSizes;
                var7 = var7.LARGE;
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                _fun101194_ip = 445;
                continue _fun101194;
            case 388:
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 13;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.source = var9;
                var8 = _closure1_slot5;
                var8 = var8.guildIcon;
                var5.style = var8;
                var8 = 0;
                var5.fadeDuration = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 445:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarGeoRestrictedGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13150, 33, 13164, 13161, 1417, 7415, 4002, 1234, 8174, 13199, 13190, 4704, 2]);