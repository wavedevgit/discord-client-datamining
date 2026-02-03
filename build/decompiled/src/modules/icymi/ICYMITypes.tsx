// modules/icymi/ICYMITypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var2 = exports;
    var12 = dependencyMap;
    var3 = global;
    var5 = var3.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var1 = 0;
    var4 = var12[var1];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot0 = var5;
    var4 = var4.MessageEmbedTypes;
    var8 = {};
    var8.MESSAGE = var1;
    var5 = 'MESSAGE';
    var8[var1] = var5;
    var10 = 2;
    var8.ACTIVITY = var10;
    var5 = 'ACTIVITY';
    var8[var10] = var5;
    var9 = 3;
    var8.CUSTOM_STATUS = var9;
    var5 = 'CUSTOM_STATUS';
    var8[var9] = var5;
    var6 = 4;
    var8.GENERATED_CANDIDATE = var6;
    var5 = 'GENERATED_CANDIDATE';
    var8[var6] = var5;
    var6 = 5;
    var8.GUILD_EVENT = var6;
    var5 = 'GUILD_EVENT';
    var8[var6] = var5;
    var6 = 6;
    var8.RECOMMENDED_GUILDS = var6;
    var5 = 'RECOMMENDED_GUILDS';
    var8[var6] = var5;
    var _closure1_slot1 = var8;
    var13 = var3.Set;
    var6 = var8.MESSAGE;
    var5 = new Array(3);
    var5[0] = var6;
    var6 = var8.CUSTOM_STATUS;
    var5[1] = var6;
    var6 = var8.GENERATED_CANDIDATE;
    var5[2] = var6;
    var6 = var13.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var13
        }
    });
    var19 = var6;
    var18 = var5;
    var5 = new var19[var13](var18, var17);
    var6 = var5 instanceof Object ? var5 : var6;
    var5 = var3.Set;
    var13 = var4.IMAGE;
    var3 = new Array(2);
    var3[0] = var13;
    var4 = var4.GIFV;
    var3[1] = var4;
    var4 = var5.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var5
        }
    });
    var19 = var4;
    var18 = var3;
    var3 = new var19[var5](var18, var17);
    var5 = var3 instanceof Object ? var3 : var4;
    var4 = {};
    var4.DEFAULT = var1;
    var3 = 'DEFAULT';
    var4[var1] = var3;
    var4.BOOKMARKS = var10;
    var3 = 'BOOKMARKS';
    var4[var10] = var3;
    var3 = {};
    var3.TRENDING_TOPIC = var1;
    var14 = 'TRENDING_TOPIC';
    var3[var1] = var14;
    var10 = 1;
    var3.PRO_TIP = var10;
    var13 = 'PRO_TIP';
    var3[var10] = var13;
    var1 = {};
    var15 = 'POPULAR_MESSAGE';
    var1.POPULAR_MESSAGE = var15;
    var15 = 'IMAGE';
    var1.IMAGE = var15;
    var15 = 'VIDEO';
    var1.VIDEO = var15;
    var15 = 'LINK';
    var1.LINK = var15;
    var15 = 'THREAD';
    var1.THREAD = var15;
    var15 = 'CHANGED_STATUS';
    var1.CHANGED_STATUS = var15;
    var15 = 'INTERESTING';
    var1.INTERESTING = var15;
    var15 = 'ANNOUNCEMENT';
    var1.ANNOUNCEMENT = var15;
    var15 = 'FORUM_POST';
    var1.FORUM_POST = var15;
    var15 = 'FILE';
    var1.FILE = var15;
    var1.TRENDING_TOPIC = var14;
    var1.PRO_TIP = var13;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/icymi/ICYMITypes.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = 15;
    var2.ICYMI_PAGE_SIZE = var10;
    var2.MIN_ITEMS_FOR_NEW_PILL = var9;
    var9 = 50;
    var2.MIN_SCORE_FOR_NEW_PILL = var9;
    var9 = '1312632705086787756';
    var2.GAME_CONTENT_GUILD_ID = var9;
    var2.ICYMIItemTypes = var8;
    var7 = function arg0() {
        _fun54835: for (var _fun54835_ip = 0;;) switch (_fun54835_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.type;
                var2 = _closure1_slot1;
                var2 = var2.MESSAGE;
                if (!(var2 !== var3)) {
                    _fun54835_ip = 139;
                    continue _fun54835
                }
            case 25:
                var2 = _closure1_slot1;
                var2 = var2.ACTIVITY;
                if (!(var2 !== var3)) {
                    _fun54835_ip = 131;
                    continue _fun54835
                }
            case 39:
                var2 = _closure1_slot1;
                var2 = var2.CUSTOM_STATUS;
                if (!(var2 !== var3)) {
                    _fun54835_ip = 123;
                    continue _fun54835
                }
            case 53:
                var2 = _closure1_slot1;
                var2 = var2.GUILD_EVENT;
                if (!(var2 !== var3)) {
                    _fun54835_ip = 115;
                    continue _fun54835
                }
            case 67:
                var2 = _closure1_slot1;
                var2 = var2.RECOMMENDED_GUILDS;
                if (!(var2 !== var3)) {
                    _fun54835_ip = 107;
                    continue _fun54835
                }
            case 81:
                var2 = _closure1_slot1;
                var2 = var2.GENERATED_CANDIDATE;
                if (!(var2 !== var3)) {
                    _fun54835_ip = 99;
                    continue _fun54835
                }
            case 95:
                var2 = undefined;
                return var2;
            case 99:
                var2 = 'generated_candidate';
                return var2;
            case 107:
                var2 = 'recommended_guilds';
                return var2;
            case 115:
                var2 = 'guild_event';
                return var2;
            case 123:
                var2 = 'hotwheels_custom_status';
                return var2;
            case 131:
                var2 = 'hotwheels_gaming_activity';
                return var2;
            case 139:
                var2 = var1.data;
                var3 = var2.channel_type;
                var0 = _closure1_slot0;
                var2 = var0.GUILD_ANNOUNCEMENT;
                var0 = 'announcement';
                if (!(var3 !== var2)) {
                    _fun54835_ip = 216;
                    continue _fun54835
                }
            case 168:
                var1 = var1.data;
                var3 = var1.message_context;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun54835_ip = 196;
                    continue _fun54835
                }
            case 190:
                var1 = var3.external_content_application_id;
            case 196:
                var2 = var2 != var1;
                var1 = 'message';
                if (!var2) {
                    _fun54835_ip = 213;
                    continue _fun54835
                }
            case 207:
                var1 = 'game_message';
            case 213:
                var0 = var1;
            case 216:
                return var0;
        }
    };
    var2.typeToString = var7;
    var2.SUPPORTED_ITEM_TYPES = var6;
    var2.GRAVITY_VALID_EMBED_TYPES = var5;
    var2.GravityICYMIDoubleTapBehavior = var4;
    var2.GeneratedCandidateType = var3;
    var2.ContentType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);