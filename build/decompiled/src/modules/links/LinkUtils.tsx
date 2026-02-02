// modules/links/LinkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var3 = function arg0() {
        _fun29748: for (var _fun29748_ip = 0;;) switch (_fun29748_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.isPrivate;
                var0 = var0.bind(var4)();
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun29748_ip = 51;
                    continue _fun29748
                }
            case 22:
                var3 = _closure1_slot4;
                var2 = var3.can;
                var1 = _closure1_slot6;
                var1 = var1.VIEW_CHANNEL;
                var0 = var2.bind(var3)(var1, var4);
            case 51:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var11 = var5.ME;
    var _closure1_slot5 = var11;
    var5 = var5.Permissions;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var9 = var5.StaticChannelRoutes;
    var6 = var4.Array;
    var5 = var6.from;
    var9 = var5.bind(var6)(var9);
    var6 = var9.map;
    var5 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.escape;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var9 = var6.bind(var9)(var5);
    var6 = var9.join;
    var5 = '|';
    var13 = var6.bind(var9)(var5);
    var9 = var4.RegExp;
    var5 = var4.HermesInternal;
    var10 = var5.concat;
    var12 = '^/channels/(\\d+|';
    var16 = ')(?:/)?(\\d+|';
    var14 = ')?';
    var18 = var12;
    var17 = var11;
    var15 = var13;
    var17 = var18[var10](var17, var16, var15, var14, var13);
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var18 = var6;
    var5 = new var18[var9](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot7 = var5;
    var9 = var4.RegExp;
    var5 = var4.HermesInternal;
    var10 = var5.concat;
    var16 = ')(?:/)(\\d+|';
    var14 = ')(?:/)(\\d+)';
    var18 = var12;
    var17 = var11;
    var15 = var13;
    var17 = var18[var10](var17, var16, var15, var14, var13);
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var18 = var6;
    var5 = new var18[var9](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot8 = var5;
    var9 = var4.RegExp;
    var5 = var9.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var17 = '^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)';
    var18 = var6;
    var5 = new var18[var9](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot9 = var5;
    var9 = var4.RegExp;
    var5 = var9.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var17 = '^/guild-stages/(\\d+)(?:/)?(\\d+)?';
    var18 = var6;
    var5 = new var18[var9](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot10 = var5;
    var9 = var4.RegExp;
    var5 = var9.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var17 = '^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?';
    var18 = var6;
    var5 = new var18[var9](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot11 = var5;
    var9 = var4.RegExp;
    var5 = var4.HermesInternal;
    var10 = var5.concat;
    var6 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|';
    var5 = ')(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?';
    var17 = var10.bind(var6)(var11, var5);
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var18 = var6;
    var5 = new var18[var9](var17, var16);
    var5 = var5 instanceof Object ? var5 : var6;
    var9 = var4.RegExp;
    var4 = var9.prototype;
    var6 = Object.create(var4, {
        constructor: {
            value: var9
        }
    });
    var17 = '^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)';
    var18 = var6;
    var4 = new var18[var9](var17, var16);
    var4 = var4 instanceof Object ? var4 : var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/links/LinkUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.CHANNEL_OR_MESSAGES_URL_RE = var5;
    var2.MEDIA_POST_URL_RE = var4;
    var4 = function arg0() {
        _fun29750: for (var _fun29750_ip = 0;;) switch (_fun29750_ip) {
            case 0:
                var9 = arg0;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun29750_ip = 248;
                    continue _fun29750
                }
            case 12:
                var3 = var9.match;
                var2 = _closure1_slot8;
                var3 = var3.bind(var9)(var2);
                if (!(var0 != var3)) {
                    _fun29750_ip = 49;
                    continue _fun29750
                }
            case 34:
                var4 = var3.length;
                var2 = 3;
                if (!(!(var4 > var2))) {
                    _fun29750_ip = 214;
                    continue _fun29750
                }
            case 49:
                var5 = var9.match;
                var4 = _closure1_slot9;
                var5 = var5.bind(var9)(var4);
                if (!(var0 != var5)) {
                    _fun29750_ip = 80;
                    continue _fun29750
                }
            case 68:
                var6 = var5.length;
                var4 = 4;
                if (!(!(var6 > var4))) {
                    _fun29750_ip = 168;
                    continue _fun29750
                }
            case 80:
                var7 = var9.match;
                var6 = _closure1_slot7;
                var8 = var7.bind(var9)(var6);
                if (!(var0 != var8)) {
                    _fun29750_ip = 111;
                    continue _fun29750
                }
            case 99:
                var6 = var8.length;
                var7 = 1;
                if (!(!(var6 > var7))) {
                    _fun29750_ip = 130;
                    continue _fun29750
                }
            case 111:
                var6 = var9.match;
                var1 = _closure1_slot10;
                var1 = var6.bind(var9)(var1);
                var1 = null;
                _fun29750_ip = 166;
                continue _fun29750;
            case 130:
                var6 = {};
                var7 = var8[var7];
                var6.guildId = var7;
                var7 = 2;
                var8 = var8[var7];
                var9 = var0 != var8;
                var7 = undefined;
                if (!var9) {
                    _fun29750_ip = 159;
                    continue _fun29750
                }
            case 156:
                var7 = var8;
            case 159:
                var6.channelId = var7;
                var1 = var6;
            case 166:
                return var1;
            case 168:
                var1 = {};
                var6 = 1;
                var6 = var5[var6];
                var1.guildId = var6;
                var6 = 2;
                var6 = var5[var6];
                var1.channelId = var6;
                var6 = 3;
                var6 = var5[var6];
                var1.threadId = var6;
                var4 = var5[var4];
                var1.messageId = var4;
                return var1;
            case 214:
                var1 = {};
                var4 = 1;
                var4 = var3[var4];
                var1.guildId = var4;
                var4 = 2;
                var4 = var3[var4];
                var1.channelId = var4;
                var2 = var3[var2];
                var1.messageId = var2;
                return var1;
            case 248:
                return var0;
        }
    };
    var2.tryParseChannelPath = var4;
    var4 = function arg0() {
        _fun29751: for (var _fun29751_ip = 0;;) switch (_fun29751_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun29751_ip = 92;
                    continue _fun29751
                }
            case 9:
                var2 = var3.match;
                var1 = _closure1_slot11;
                var4 = var2.bind(var3)(var1);
                var2 = var0 != var4;
                var1 = null;
                if (!var2) {
                    _fun29751_ip = 90;
                    continue _fun29751
                }
            case 36:
                var2 = var4.length;
                var3 = 1;
                var2 = var2 > var3;
                var1 = null;
                if (!var2) {
                    _fun29751_ip = 90;
                    continue _fun29751
                }
            case 53:
                var2 = {};
                var3 = var4[var3];
                var2.guildId = var3;
                var3 = 2;
                var3 = var4[var3];
                var2.guildEventId = var3;
                var3 = 3;
                var3 = var4[var3];
                var2.recurrenceId = var3;
                var1 = var2;
            case 90:
                return var1;
            case 92:
                return var0;
        }
    };
    var2.tryParseEventDetailsPath = var4;
    var2.canViewChannel = var3;
    var1 = function arg0() {
        _fun29752: for (var _fun29752_ip = 0;;) switch (_fun29752_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var4 = var0.channelId;
                var2 = _closure1_slot3;
                var0 = var2.getGuild;
                var2 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun29752_ip = 44;
                    continue _fun29752
                }
            case 36:
                var2 = _closure1_slot5;
                if (!(var3 === var2)) {
                    _fun29752_ip = 86;
                    continue _fun29752
                }
            case 44:
                if (!(var0 != var4)) {
                    _fun29752_ip = 82;
                    continue _fun29752
                }
            case 48:
                var3 = _closure1_slot2;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var4);
                var0 = var0 != var3;
                if (!var0) {
                    _fun29752_ip = 80;
                    continue _fun29752
                }
            case 69:
                var2 = _closure1_slot12;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 80:
                return var0;
            case 82:
                var0 = true;
                return var0;
            case 86:
                var0 = false;
                return var0;
        }
    };
    var2.isAccessibleChannelPath = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 3052, 660, 1379, 3287, 2]);