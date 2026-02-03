// modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0, arg1() {
        _fun56427: for (var _fun56427_ip = 0;;) switch (_fun56427_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.type;
                var0 = _closure1_slot7;
                var0 = var0.GUILD_CATEGORY;
                if (!(var2 !== var0)) {
                    _fun56427_ip = 64;
                    continue _fun56427
                }
            case 25:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getChannelIconWithGuild;
                var0 = arg1;
                var0 = var2.bind(var3)(var4, var0);
                _fun56427_ip = 86;
                continue _fun56427;
            case 64:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 86:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot7 = var7;
    var4 = var4.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        var3 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var2 = var4.getGuild;
        var2 = var2.bind(var4)(var5);
        var _closure2_slot1 = var2;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var1
            _fun56429: for (var _fun56429_ip = 0;;) switch (_fun56429_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3.type;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 5;
                    var0 = var0[var6];
                    var4 = undefined;
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.SelectOptionType;
                    var0 = var0.USER;
                    if (!(var0 !== var1)) {
                        _fun56429_ip = 723;
                        continue _fun56429
                    }
                case 52:
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var6];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.SelectOptionType;
                    var0 = var0.ROLE;
                    if (!(var0 !== var1)) {
                        _fun56429_ip = 308;
                        continue _fun56429
                    }
                case 88:
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var6];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.SelectOptionType;
                    var0 = var0.CHANNEL;
                    if (!(var0 !== var1)) {
                        _fun56429_ip = 125;
                        continue _fun56429
                    }
                case 121:
                    var0 = null;
                    return var0;
                case 125:
                    var11 = _closure2_slot1;
                    var5 = _closure1_slot3;
                    var1 = var5.getChannel;
                    var0 = var3.value;
                    var10 = var1.bind(var5)(var0);
                    var1 = null;
                    var0 = var3;
                    if (!(var1 != var10)) {
                        _fun56429_ip = 306;
                        continue _fun56429
                    }
                case 163:
                    var1 = {};
                    var15 = var1;
                    var14 = var3;
                    var5 = copyDataProperties(var15, var14);
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 7;
                    var5 = var9[var5];
                    var8 = var6.bind(var4)(var5);
                    var7 = var8.ensureAvatarSource;
                    var5 = _closure1_slot9;
                    var5 = var5.bind(var4)(var10, var11);
                    var5 = var7.bind(var8)(var5);
                    var7 = var5.uri;
                    var5 = 'iconSrc';
                    var1[var5] = var7;
                    var5 = 10;
                    var5 = var9[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.hex2int;
                    var8 = _closure1_slot1;
                    var5 = 11;
                    var5 = var9[var5];
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.unsafe_rawColors;
                    var5 = var5.PRIMARY_330;
                    var6 = var6.bind(var7)(var5);
                    var5 = 4278190080.0;
                    var6 = var5 | var6;
                    var5 = 'iconColor';
                    var1[var5] = var6;
                    var0 = var1;
                case 306:
                    return var0;
                case 308:
                    var7 = _closure2_slot1;
                    var9 = null;
                    var0 = var9 != var7;
                    var6 = null;
                    if (!var0) {
                        _fun56429_ip = 352;
                        continue _fun56429
                    }
                case 326:
                    var8 = _closure1_slot4;
                    var5 = var8.getRole;
                    var1 = var7.id;
                    var0 = var3.value;
                    var6 = var5.bind(var8)(var1, var0);
                case 352:
                    var0 = var3;
                    if (!(var9 != var6)) {
                        _fun56429_ip = 721;
                        continue _fun56429
                    }
                case 362:
                    var0 = var3;
                    if (!(var9 != var7)) {
                        _fun56429_ip = 721;
                        continue _fun56429
                    }
                case 372:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 8;
                    var1 = var1[var8];
                    var5 = var5.bind(var4)(var1);
                    var1 = var5.canGuildUseRoleIcons;
                    var5 = var1.bind(var5)(var7, var6);
                    var1 = null;
                    if (!var5) {
                        _fun56429_ip = 437;
                        continue _fun56429
                    }
                case 409:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.getRoleIconData;
                    var1 = var5.bind(var7)(var6);
                case 437:
                    if (!(var9 != var1)) {
                        _fun56429_ip = 467;
                        continue _fun56429
                    }
                case 441:
                    var7 = var1.customIconSrc;
                    var5 = var1.unicodeEmoji;
                    if (!(var9 == var5)) {
                        _fun56429_ip = 647;
                        continue _fun56429
                    }
                case 460:
                    if (!(var9 == var7)) {
                        _fun56429_ip = 621;
                        continue _fun56429
                    }
                case 467:
                    var1 = {};
                    var15 = var1;
                    var14 = var3;
                    var8 = copyDataProperties(var15, var14);
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 7;
                    var8 = var13[var8];
                    var11 = var10.bind(var4)(var8);
                    var10 = var11.ensureAvatarSource;
                    var12 = _closure1_slot1;
                    var8 = 9;
                    var8 = var13[var8];
                    var8 = var12.bind(var4)(var8);
                    var8 = var10.bind(var11)(var8);
                    var10 = var8.uri;
                    var8 = 'iconSrc';
                    var1[var8] = var10;
                    var8 = var6.colorString;
                    if (!(var9 == var8)) {
                        _fun56429_ip = 556;
                        continue _fun56429
                    }
                case 550:
                    var8 = _closure1_slot8;
                    _fun56429_ip = 593;
                    continue _fun56429;
                case 556:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 10;
                    var9 = var11[var9];
                    var10 = var10.bind(var4)(var9);
                    var9 = var10.hex2int;
                    var6 = var6.colorString;
                    var8 = var9.bind(var10)(var6);
                case 593:
                    var6 = 4278190080.0;
                    var8 = var6 | var8;
                    var6 = 'iconColor';
                    var1[var6] = var8;
                    var0 = var1;
                    _fun56429_ip = 721;
                    continue _fun56429;
                case 621:
                    var1 = {};
                    var15 = var1;
                    var14 = var3;
                    var6 = copyDataProperties(var15, var14);
                    var6 = 'iconSrc';
                    var1[var6] = var7;
                    var0 = var1;
                    _fun56429_ip = 721;
                    continue _fun56429;
                case 647:
                    var1 = {};
                    var15 = var1;
                    var14 = var3;
                    var6 = copyDataProperties(var15, var14);
                    var6 = {};
                    var7 = var5.id;
                    var6.id = var7;
                    var7 = var5.name;
                    var6.name = var7;
                    var7 = var5.animated;
                    var6.animated = var7;
                    var7 = var5.url;
                    var6.src = var7;
                    var5 = var5.surrogates;
                    var6.surrogates = var5;
                    var5 = 'iconEmoji';
                    var1[var5] = var6;
                    var0 = var1;
                case 721:
                    return var0;
                case 723:
                    var7 = _closure2_slot0;
                    var5 = _closure1_slot6;
                    var1 = var5.getUser;
                    var0 = var3.value;
                    var6 = var1.bind(var5)(var0);
                    var1 = null;
                    var0 = var3;
                    if (!(var1 != var6)) {
                        _fun56429_ip = 833;
                        continue _fun56429
                    }
                case 759:
                    var1 = {};
                    var15 = var1;
                    var14 = var3;
                    var3 = copyDataProperties(var15, var14);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.ensureAvatarSource;
                    var5 = var6.getAvatarSource;
                    var2 = false;
                    var2 = var5.bind(var6)(var7, var2);
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.uri;
                    var2 = 'iconSrc';
                    var1[var2] = var3;
                    var0 = var1;
                case 833:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.isNotNullish;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.transformSearchableSelectOptions = var3;
    var2.getChannelIconData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1674, 1410, 1621, 660, 3978, 1304, 1418, 6735, 6831, 668, 671, 6832, 4807, 2]);