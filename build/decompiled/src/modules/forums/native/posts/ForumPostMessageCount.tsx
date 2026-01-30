// modules/forums/native/posts/ForumPostMessageCount.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun90199: for (var _fun90199_ip = 0;;) switch (_fun90199_ip) {
        case 0:
            var4 = require;
            var14 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var14;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var10 = 0;
            var6 = var5[var10];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var11 = 2;
            var3 = var5[var11];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot4 = var6;
            var3 = var3.jsxs;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var9 = 4;
            var12 = var5[var9];
            var12 = var14.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.ICON_MUTED;
            var8.tintColor = var12;
            var8.marginEnd = var9;
            var12 = 5;
            var13 = var5[var12];
            var15 = var4.bind(var0)(var13);
            var13 = var15.isAndroid;
            var15 = var13.bind(var15)();
            var13 = 0;
            if (!var15) {
                _fun90199_ip = 209;
                continue _fun90199
            }
        case 206:
            var13 = var11;
        case 209:
            var8.marginTop = var13;
            var3.iconRead = var8;
            var8 = {};
            var13 = var5[var9];
            var13 = var14.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.INTERACTIVE_TEXT_DEFAULT;
            var8.tintColor = var13;
            var8.marginEnd = var9;
            var12 = var5[var12];
            var13 = var4.bind(var0)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            var10 = 0;
            if (!var12) {
                _fun90199_ip = 277;
                continue _fun90199
            }
        case 274:
            var10 = var11;
        case 277:
            var8.marginTop = var10;
            var3.iconUnread = var8;
            var8 = {};
            var8.marginStart = var9;
            var3.messageCount = var8;
            var8 = {};
            var8.marginStart = var9;
            var3.messageUnreadCount = var8;
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.container = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot6 = var3;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/forums/native/posts/ForumPostMessageCount.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: ForumPostMessageCount, environment: var1
                _fun90200: for (var _fun90200_ip = 0;;) switch (_fun90200_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.thread;
                        var16 = var0.hasUnreads;
                        var7 = var0.containerStyle;
                        var0 = _closure1_slot6;
                        var3 = undefined;
                        var11 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 6;
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.useMessageCount;
                        var0 = var0.bind(var1)(var2);
                        var10 = var0.messageCountText;
                        var5 = var0.isMaxMessageCount;
                        var8 = var0.messageCount;
                        var13 = var0.unreadCount;
                        var12 = 'text-muted';
                        if (!var16) {
                            _fun90200_ip = 104;
                            continue _fun90200
                        }
                    case 98:
                        var12 = 'text-default';
                    case 104:
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var9 = var11.container;
                        var4 = new Array(2);
                        var4[0] = var9;
                        var4[1] = var7;
                        var0.style = var4;
                        var7 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var14 = 7;
                        var4 = var15[var14];
                        var4 = var7.bind(var3)(var4);
                        var18 = var4.intl;
                        var17 = var18.formatToPlainString;
                        var4 = var15[var14];
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.t;
                        var9 = var4["8M0DrB"];
                        var4 = {};
                        var4.count = var10;
                        var4 = var17.bind(var18)(var9, var4);
                        var0.accessibilityLabel = var4;
                        var9 = _closure1_slot4;
                        var4 = 8;
                        var4 = var15[var4];
                        var4 = var7.bind(var3)(var4);
                        var7 = var4.ChatIcon;
                        var4 = {};
                        var15 = 'xs';
                        var4.size = var15;
                        if (var16) {
                            _fun90200_ip = 247;
                            continue _fun90200
                        }
                    case 239:
                        var15 = var11.iconRead;
                        _fun90200_ip = 253;
                        continue _fun90200;
                    case 247:
                        var15 = var11.iconUnread;
                    case 253:
                        var4.style = var15;
                        var15 = 'icon-muted';
                        if (!var16) {
                            _fun90200_ip = 272;
                            continue _fun90200
                        }
                    case 266:
                        var15 = 'interactive-text-default';
                    case 272:
                        var4.color = var15;
                        var7 = var9.bind(var3)(var7, var4);
                        var4 = new Array(3);
                        var4[0] = var7;
                        var9 = _closure1_slot4;
                        if (var5) {
                            _fun90200_ip = 355;
                            continue _fun90200
                        }
                    case 297:
                        var7 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var5 = 10;
                        var5 = var15[var5];
                        var7 = var7.bind(var3)(var5);
                        var5 = {};
                        var5.count = var8;
                        var8 = 'text-sm/semibold';
                        var5.textVariant = var8;
                        var5.textColor = var12;
                        var8 = false;
                        var5.animate = var8;
                        var5 = var9.bind(var3)(var7, var5);
                        _fun90200_ip = 406;
                        continue _fun90200;
                    case 355:
                        var8 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var7 = 9;
                        var7 = var15[var7];
                        var7 = var8.bind(var3)(var7);
                        var8 = var7.Text;
                        var7 = {};
                        var15 = 'text-sm/semibold';
                        var7.variant = var15;
                        var7.color = var12;
                        var7.children = var10;
                        var5 = var9.bind(var3)(var8, var7);
                    case 406:
                        var4[1] = var5;
                        var5 = null;
                        var5 = var5 != var13;
                        if (!var5) {
                            _fun90200_ip = 561;
                            continue _fun90200
                        }
                    case 422:
                        var8 = _closure1_slot5;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 9;
                        var6 = var9[var6];
                        var6 = var10.bind(var3)(var6);
                        var7 = var6.Text;
                        var6 = {
                            'variant': 'text-sm/semibold',
                            'color': 'text-brand'
                        };
                        var11 = var11.messageUnreadCount;
                        var6.style = var11;
                        var11 = var9[var14];
                        var11 = var10.bind(var3)(var11);
                        var12 = var11.intl;
                        var11 = var12.format;
                        var9 = var9[var14];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.t;
                        var10 = var9.z3PEth;
                        var9 = {};
                        var9.count = var13;
                        var10 = var11.bind(var12)(var10, var9);
                        var9 = ['('];
                        var9[1] = var10;
                        var10 = ')';
                        var9[2] = var10;
                        var6.children = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 561:
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 478, 8863, 1234, 4800, 3901, 9721, 2]);