// modules/voice_calls/native/components/VoiceCallBlurGrid.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.ImageBackground;
    var _closure1_slot4 = var6;
    var7 = var3.StyleSheet;
    var _closure1_slot5 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var13 = var7.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var11 = 0.5;
    var9 = 'opacity';
    var8[var9] = var11;
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var10 = var9.PRIMARY_600;
    var9 = 'backgroundColor';
    var8[var9] = var10;
    var3.imageBackgroundCover = var8;
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch'
    };
    var3.avatar = var8;
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'flexDirection': 'row'
    };
    var3.avatarRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun69685: for (var _fun69685_ip = 0;;) switch (_fun69685_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.recipients;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun69685_ip = 95;
                    continue _fun69685
                }
            case 26:
                var4 = var3.length;
                var2 = 0;
                if (!(var2 !== var4)) {
                    _fun69685_ip = 95;
                    continue _fun69685
                }
            case 37:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun69686: for (var _fun69686_ip = 0;;) switch (_fun69686_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot8;
                            var0 = var2.getUser;
                            var8 = var0.bind(var2)(var5);
                            var0 = null;
                            var2 = var0 == var8;
                            if (var2) {
                                _fun69686_ip = 85;
                                continue _fun69686
                            }
                        case 30:
                            var4 = _closure1_slot9;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var7 = var8.getAvatarSource;
                            var6 = _closure2_slot0;
                            var6 = var7.bind(var8)(var6);
                            var2.source = var6;
                            var1 = _closure1_slot11;
                            var1 = var1.avatar;
                            var2.style = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2, var5);
                        case 85:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var4 = _closure1_slot9;
                var3 = _closure1_slot3;
                var2 = {};
                var5 = _closure1_slot11;
                var5 = var5.avatarRow;
                var2.style = var5;
                var2.children = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            case 95:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/components/VoiceCallBlurGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.channelId;
        var _closure2_slot0 = var8;
        var11 = var1.guildId;
        var4 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 7;
        var1 = var10[var1];
        var3 = undefined;
        var6 = var4.bind(var3)(var1);
        var5 = var6.useStateFromStoresArray;
        var1 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var8;
        var0 = function() { // Environment: var0
            _fun69688: for (var _fun69688_ip = 0;;) switch (_fun69688_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun69688_ip = 43;
                        continue _fun69688
                    }
                case 30:
                    var0 = var1.isPrivate;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun69688_ip = 49;
                        continue _fun69688
                    }
                case 43:
                    var0 = new Array(0);
                    _fun69688_ip = 71;
                    continue _fun69688;
                case 49:
                    var4 = var1.recipients;
                    var3 = var4.slice;
                    var2 = 0;
                    var1 = 3;
                    var0 = var3.bind(var4)(var2, var1);
                case 71:
                    return var0;
            }
        };
        var5 = var5.bind(var6)(var2, var0, var1);
        var0 = var5.shift;
        var0 = var0.bind(var5)();
        var6 = new Array(2);
        var6[0] = var0;
        var0 = var5.shift;
        var0 = var0.bind(var5)();
        var6[1] = var0;
        var2 = var6.filter;
        var0 = 8;
        var1 = var10[var0];
        var1 = var4.bind(var3)(var1);
        var1 = var1.isNotNullish;
        var12 = var2.bind(var6)(var1);
        var2 = _closure1_slot6;
        var1 = var2.getId;
        var1 = var1.bind(var2)();
        var2 = new Array(2);
        var2[0] = var1;
        var1 = var5.shift;
        var1 = var1.bind(var5)();
        var2[1] = var1;
        var1 = var2.filter;
        var0 = var10[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.isNotNullish;
        var5 = var1.bind(var2)(var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot3;
        var0 = {};
        var9 = _closure1_slot5;
        var4 = var9.absoluteFill;
        var0.style = var4;
        var6 = _closure1_slot9;
        var8 = _closure1_slot12;
        var4 = {};
        var4.recipients = var5;
        var4.guildId = var11;
        var5 = var6.bind(var3)(var8, var4);
        var4 = new Array(4);
        var4[0] = var5;
        var5 = {};
        var5.recipients = var12;
        var5.guildId = var11;
        var5 = var6.bind(var3)(var8, var5);
        var4[1] = var5;
        var8 = _closure1_slot1;
        var5 = 9;
        var5 = var10[var5];
        var8 = var8.bind(var3)(var5);
        var5 = {};
        var10 = 'dark';
        var5.blurTheme = var10;
        var9 = var9.absoluteFill;
        var5.style = var9;
        var5 = var6.bind(var3)(var8, var5);
        var4[2] = var5;
        var5 = {};
        var7 = _closure1_slot11;
        var7 = var7.imageBackgroundCover;
        var5.style = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1216, 1372, 1621, 33, 671, 566, 1304, 4074, 2]);