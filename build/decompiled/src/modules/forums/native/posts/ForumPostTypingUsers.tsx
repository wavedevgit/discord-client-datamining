// modules/forums/native/posts/ForumPostTypingUsers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var11 = 0;
    var7 = var5[var11];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var3.container = var10;
    var10 = {};
    var10.marginEnd = var11;
    var3.lastTypingUser = var10;
    var10 = {
        'marginEnd': 4294967288,
        'borderWidth': 2
    };
    var11 = 4;
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10.borderRadius = var13;
    var3.typingUser = var10;
    var10 = {
        'backgroundColor': null,
        'paddingVertical': null,
        'paddingLeft': 4,
        'borderRadius': null,
        'marginStart': 4294967288,
        'borderWidth': 4,
        'marginEnd': 8,
        'marginTop': 4294967295,
        'marginBottom': 4294967295
    };
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var13;
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10.paddingVertical = var13;
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var3.dots = var10;
    var10 = {};
    var10.flexShrink = var12;
    var3.typingText = var10;
    var10 = {};
    var12 = var5[var11];
    var12 = var6.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var10.color = var12;
    var3.borderColor = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CARD_PRIMARY_PRESSED_BG;
    var10.color = var11;
    var3.borderColorPressed = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var8 = 'function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}';
    var3.code = var8;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/ForumPostTypingUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89079: for (var _fun89079_ip = 0;;) switch (_fun89079_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.thread;
                var9 = var0.typingUserIds;
                var0 = var0.hasUnreads;
                var4 = undefined;
                var _closure2_slot6 = var4;
                var2 = _closure1_slot6;
                var10 = var2.bind(var4)();
                var _closure2_slot0 = var10;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 6;
                var7 = var2[var7];
                var8 = var3.bind(var4)(var7);
                var7 = var8.useFacepileUsers;
                var12 = var7.bind(var8)(var1, var9);
                var _closure2_slot1 = var12;
                var8 = _closure1_slot1;
                var7 = 7;
                var7 = var2[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var11 = var1.id;
                var7.channelId = var11;
                var11 = var1.getGuildId;
                var11 = var11.bind(var1)();
                var7.guildId = var11;
                var7.typingUserIds = var9;
                var9 = var8.bind(var4)(var7);
                var7 = var10.borderColor;
                var13 = var7.color;
                var _closure2_slot2 = var13;
                var7 = var10.borderColorPressed;
                var14 = var7.color;
                var _closure2_slot3 = var14;
                var7 = 8;
                var7 = var2[var7];
                var8 = var3.bind(var4)(var7);
                var7 = var8.useForumPostContainerPressedIn;
                var15 = var7.bind(var8)();
                var _closure2_slot4 = var15;
                var7 = 9;
                var2 = var2[var7];
                var8 = var3.bind(var4)(var2);
                var3 = var8.useAnimatedStyle;
                var2 = function() {
                    _fun89080: for (var _fun89080_ip = 0;;) switch (_fun89080_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot4;
                            var1 = var1.value;
                            if (var1) {
                                _fun89080_ip = 23;
                                continue _fun89080
                            }
                        case 17:
                            var1 = _closure2_slot2;
                            _fun89080_ip = 27;
                            continue _fun89080;
                        case 23:
                            var1 = _closure2_slot3;
                        case 27:
                            var0.borderColor = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.forumPostPressedIn = var15;
                var11.borderColorPressed = var14;
                var11.borderColor = var13;
                var2.__closure = var11;
                var11 = 6320844933544.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot7;
                var2.__initData = var11;
                var15 = var3.bind(var8)(var2);
                var _closure2_slot5 = var15;
                var11 = 'text-muted';
                if (!var0) {
                    _fun89079_ip = 287;
                    continue _fun89079
                }
            case 281:
                var11 = 'text-default';
            case 287:
                var0 = var1.getGuildId;
                var0 = var0.bind(var1)();
                _closure2_slot6 = var0;
                var3 = null;
                var1 = var3 == var0;
                var0 = null;
                if (var1) {
                    _fun89079_ip = 522;
                    continue _fun89079
                }
            case 315:
                var2 = var12.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun89079_ip = 522;
                    continue _fun89079
                }
            case 331:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = var10.container;
                var1.style = var8;
                var8 = var12.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun89081: for (var _fun89081_ip = 0;;) switch (_fun89081_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot4;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.View;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var6 = var5.typingUser;
                            var5 = new Array(3);
                            var5[0] = var6;
                            var6 = _closure2_slot5;
                            var5[1] = var6;
                            var6 = _closure2_slot1;
                            var7 = var6.length;
                            var6 = 1;
                            var7 = var7 - var6;
                            var6 = arg1;
                            var6 = var6 === var7;
                            if (!var6) {
                                _fun89081_ip = 104;
                                continue _fun89081
                            }
                        case 94:
                            var7 = _closure2_slot0;
                            var6 = var7.lastTypingUser;
                        case 104:
                            var5[2] = var6;
                            var1.style = var5;
                            var7 = _closure1_slot4;
                            var6 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var8 = 10;
                            var5 = var10[var8];
                            var6 = var6.bind(var3)(var5);
                            var5 = {};
                            var12 = var0.getAvatarSource;
                            var11 = _closure2_slot6;
                            var11 = var12.bind(var0)(var11);
                            var5.source = var11;
                            var9 = _closure1_slot0;
                            var8 = var10[var8];
                            var8 = var9.bind(var3)(var8);
                            var8 = var8.AvatarSizes;
                            var8 = var8.SIZE_16;
                            var5.size = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var1.children = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var12)(var5);
                var5 = new Array(3);
                var5[0] = var8;
                var8 = _closure1_slot4;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = var12[var7];
                var7 = var13.bind(var4)(var7);
                var13 = var7.View;
                var7 = {};
                var16 = var10.dots;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var7.style = var14;
                var14 = _closure1_slot8;
                var7.children = var14;
                var7 = var8.bind(var4)(var13, var7);
                var5[1] = var7;
                var7 = _closure1_slot0;
                var6 = 11;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var12 = 'text-sm/semibold';
                var6.variant = var12;
                var6.color = var11;
                var10 = var10.typingText;
                var6.style = var10;
                var10 = 1;
                var6.lineClamp = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 522:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5823, 7729, 11496, 11497, 3717, 5512, 3938, 2]);