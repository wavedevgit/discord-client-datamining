// modules/messages/isMessageMentioned.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var1 = function arg0() {
        _fun36715: for (var _fun36715_ip = 0;;) switch (_fun36715_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.userId;
                var7 = var0.channelId;
                var8 = var0.mentionEveryone;
                var4 = var0.mentionUsers;
                var3 = var0.mentionRoles;
                var5 = var0.mentionGames;
                var2 = var0.suppressEveryone;
                var9 = undefined;
                if (!(var2 === var9)) {
                    _fun36715_ip = 53;
                    continue _fun36715
                }
            case 51:
                var2 = false;
            case 53:
                var0 = var0.suppressRoles;
                if (!(var0 === var9)) {
                    _fun36715_ip = 65;
                    continue _fun36715
                }
            case 63:
                var0 = false;
            case 65:
                var _closure2_slot0 = var9;
                if (!var8) {
                    _fun36715_ip = 79;
                    continue _fun36715
                }
            case 72:
                if (var2) {
                    _fun36715_ip = 79;
                    continue _fun36715
                }
            case 75:
                var2 = true;
                return var2;
            case 79:
                var2 = var4.includes;
                var2 = var2.bind(var4)(var6);
                if (var2) {
                    _fun36715_ip = 261;
                    continue _fun36715
                }
            case 95:
                var4 = var5.some;
                var2 = function(arg0) { // Environment: var1
                    _fun36716: for (var _fun36716_ip = 0;;) switch (_fun36716_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot0;
                            var0 = var2.getMute;
                            var0 = var0.bind(var2)(var3);
                            var0 = !var0;
                            if (!var0) {
                                _fun36716_ip = 95;
                                continue _fun36716
                            }
                        case 29:
                            var2 = _closure1_slot4;
                            var1 = var2.getLastPlayedDateTime;
                            var1 = var1.bind(var2)(var3);
                            var2 = null;
                            var3 = var2 != var1;
                            var2 = 0;
                            if (!var3) {
                                _fun36716_ip = 60;
                                continue _fun36716
                            }
                        case 57:
                            var2 = var1;
                        case 60:
                            var1 = global;
                            var3 = var1.Date;
                            var1 = var3.now;
                            var3 = var1.bind(var3)();
                            var1 = 5184000000.0;
                            var1 = var3 - var1;
                            var0 = var2 > var1;
                        case 95:
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun36715_ip = 257;
                    continue _fun36715
                }
            case 117:
                if (var0) {
                    _fun36715_ip = 253;
                    continue _fun36715
                }
            case 123:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun36715_ip = 253;
                    continue _fun36715
                }
            case 132:
                var4 = var3.length;
                var0 = 0;
                if (!(var0 !== var4)) {
                    _fun36715_ip = 253;
                    continue _fun36715
                }
            case 143:
                var5 = _closure1_slot1;
                var4 = var5.getChannel;
                var5 = var4.bind(var5)(var7);
                if (!(var2 != var5)) {
                    _fun36715_ip = 249;
                    continue _fun36715
                }
            case 164:
                var4 = var5.getGuildId;
                var5 = var4.bind(var5)();
                if (!(var2 != var5)) {
                    _fun36715_ip = 245;
                    continue _fun36715
                }
            case 178:
                var7 = _closure1_slot3;
                var4 = var7.getGuild;
                var4 = var4.bind(var7)(var5);
                if (!(var2 != var4)) {
                    _fun36715_ip = 241;
                    continue _fun36715
                }
            case 196:
                var4 = _closure1_slot2;
                var0 = var4.getMember;
                var0 = var0.bind(var4)(var5, var6);
                _closure2_slot0 = var0;
                var0 = var2 != var0;
                if (!var0) {
                    _fun36715_ip = 239;
                    continue _fun36715
                }
            case 223:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.roles;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 239:
                return var0;
            case 241:
                var0 = false;
                return var0;
            case 245:
                var0 = false;
                return var0;
            case 249:
                var0 = false;
                return var0;
            case 253:
                var0 = false;
                return var0;
            case 257:
                var0 = true;
                return var0;
            case 261:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isMessageMentioned.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun36718: for (var _fun36718_ip = 0;;) switch (_fun36718_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.message;
                var6 = var0.userId;
                var4 = var0.suppressEveryone;
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun36718_ip = 27;
                    continue _fun36718
                }
            case 25:
                var4 = false;
            case 27:
                var3 = var0.suppressRoles;
                if (!(var3 === var2)) {
                    _fun36718_ip = 39;
                    continue _fun36718
                }
            case 37:
                var3 = false;
            case 39:
                var1 = _closure1_slot5;
                var0 = {};
                var0.userId = var6;
                var6 = var5.channel_id;
                var0.channelId = var6;
                var6 = var5.mentionEveryone;
                var0.mentionEveryone = var6;
                var6 = var5.mentions;
                var0.mentionUsers = var6;
                var6 = var5.mentionRoles;
                var0.mentionRoles = var6;
                var9 = var5.mentionGames;
                var6 = null;
                var7 = var6 == var9;
                var5 = undefined;
                if (var7) {
                    _fun36718_ip = 128;
                    continue _fun36718
                }
            case 111:
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5 = var8.bind(var9)(var7);
            case 128:
                if (!(var6 == var5)) {
                    _fun36718_ip = 136;
                    continue _fun36718
                }
            case 132:
                var5 = new Array(0);
            case 136:
                var0.mentionGames = var5;
                var0.suppressEveryone = var4;
                var0.suppressRoles = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var4;
    var3 = function arg0() {
        _fun36720: for (var _fun36720_ip = 0;;) switch (_fun36720_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.rawMessage;
                var6 = var0.userId;
                var4 = var0.suppressEveryone;
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun36720_ip = 30;
                    continue _fun36720
                }
            case 28:
                var4 = false;
            case 30:
                var3 = var0.suppressRoles;
                if (!(var3 === var2)) {
                    _fun36720_ip = 42;
                    continue _fun36720
                }
            case 40:
                var3 = false;
            case 42:
                var1 = _closure1_slot5;
                var0 = {};
                var0.userId = var6;
                var6 = var5.channel_id;
                var0.channelId = var6;
                var9 = var5.mention_everyone;
                var6 = null;
                var8 = var6 != var9;
                if (!var8) {
                    _fun36720_ip = 82;
                    continue _fun36720
                }
            case 79:
                var8 = var9;
            case 82:
                var0.mentionEveryone = var8;
                var11 = var5.mentions;
                var9 = var6 == var11;
                var8 = undefined;
                if (var9) {
                    _fun36720_ip = 117;
                    continue _fun36720
                }
            case 102:
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var10.bind(var11)(var9);
            case 117:
                if (!(var6 == var8)) {
                    _fun36720_ip = 125;
                    continue _fun36720
                }
            case 121:
                var8 = new Array(0);
            case 125:
                var0.mentionUsers = var8;
                var8 = var5.mention_roles;
                if (!(var6 == var8)) {
                    _fun36720_ip = 144;
                    continue _fun36720
                }
            case 140:
                var8 = new Array(0);
            case 144:
                var0.mentionRoles = var8;
                var9 = var5.mention_games;
                var8 = var6 == var9;
                var5 = undefined;
                if (var8) {
                    _fun36720_ip = 179;
                    continue _fun36720
                }
            case 164:
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5 = var8.bind(var9)(var7);
            case 179:
                if (!(var6 == var5)) {
                    _fun36720_ip = 187;
                    continue _fun36720
                }
            case 183:
                var5 = new Array(0);
            case 187:
                var0.mentionGames = var5;
                var0.suppressEveryone = var4;
                var0.suppressRoles = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.isRawMessageMentioned = var3;
    var2.isMentioned = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3991, 1372, 1681, 1410, 3994, 2]);