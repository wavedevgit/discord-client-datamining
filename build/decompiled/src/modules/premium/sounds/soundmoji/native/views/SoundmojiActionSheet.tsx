// modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun89127: for (var _fun89127_ip = 0;;) switch (_fun89127_ip) {
        case 0:
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
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot5 = var6;
            var3 = var3.jsxs;
            var _closure1_slot6 = var3;
            var3 = 3;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var9 = 4;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_24;
            var8.padding = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var8.gap = var11;
            var3.container = var8;
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.soundmojiContainer = var8;
            var8 = {
                'width': 32,
                'height': 32,
                'fontSize': null,
                'lineHeight': 36
            };
            var12 = 32;
            var11 = 5;
            var11 = var5[var11];
            var13 = var4.bind(var0)(var11);
            var11 = var13.isIOS;
            var13 = var11.bind(var13)();
            var11 = undefined;
            if (!var13) {
                _fun89127_ip = 270;
                continue _fun89127
            }
        case 267:
            var11 = var12;
        case 270:
            var8.fontSize = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var8.marginEnd = var11;
            var3.emoji = var8;
            var8 = {
                'gap': null,
                'display': 'flex',
                'flex': 1
            };
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_4;
            var8.gap = var9;
            var3.textContainer = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot7 = var3;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: SoundmojiActionSheet, environment: var1
                _fun89128: for (var _fun89128_ip = 0;;) switch (_fun89128_ip) {
                    case 0:
                        var1 = arg0;
                        var8 = var1.guildId;
                        var _closure2_slot0 = var8;
                        var7 = var1.channelId;
                        var _closure2_slot1 = var7;
                        var6 = var1.messageId;
                        var _closure2_slot2 = var6;
                        var5 = var1.soundId;
                        var _closure2_slot3 = var5;
                        var1 = _closure1_slot7;
                        var4 = undefined;
                        var13 = var1.bind(var4)();
                        var3 = _closure1_slot3;
                        var2 = var3.useMemo;
                        var1 = new Array(4);
                        var1[0] = var8;
                        var1[1] = var7;
                        var1[2] = var6;
                        var1[3] = var5;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.getSoundmojiFromMessage;
                            var11 = _closure2_slot0;
                            var10 = _closure2_slot1;
                            var9 = _closure2_slot2;
                            var8 = _closure2_slot3;
                            var7 = new Array(0);
                            var12 = var6;
                            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var16 = var2.bind(var3)(var0, var1);
                        var14 = null;
                        var1 = var14 == var16;
                        var0 = null;
                        if (var1) {
                            _fun89128_ip = 525;
                            continue _fun89128
                        }
                    case 111:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.BottomSheet;
                        var1 = {};
                        var5 = true;
                        var1.startExpanded = var5;
                        var5 = var13.container;
                        var1.bodyStyles = var5;
                        var7 = _closure1_slot6;
                        var6 = _closure1_slot4;
                        var5 = {};
                        var8 = var13.soundmojiContainer;
                        var5.style = var8;
                        var8 = var16.emojiId;
                        var9 = var14 != var8;
                        if (var9) {
                            _fun89128_ip = 203;
                            continue _fun89128
                        }
                    case 193:
                        var8 = var16.emojiName;
                        var9 = var14 != var8;
                    case 203:
                        if (!var9) {
                            _fun89128_ip = 310;
                            continue _fun89128
                        }
                    case 206:
                        var11 = _closure1_slot5;
                        var17 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var8 = 8;
                        var8 = var18[var8];
                        var10 = var17.bind(var4)(var8);
                        var8 = {};
                        var15 = var13.emoji;
                        var8.fastImageStyle = var15;
                        var15 = var13.emoji;
                        var8.textEmojiStyle = var15;
                        var15 = 9;
                        var15 = var18[var15];
                        var17 = var17.bind(var4)(var15);
                        var15 = 32;
                        var15 = var17.bind(var4)(var16, var15);
                        var8.src = var15;
                        var15 = var16.emojiName;
                        var17 = var14 != var15;
                        var14 = '';
                        if (!var17) {
                            _fun89128_ip = 300;
                            continue _fun89128
                        }
                    case 297:
                        var14 = var15;
                    case 300:
                        var8.name = var14;
                        var9 = var11.bind(var4)(var10, var8);
                    case 310:
                        var8 = new Array(2);
                        var8[0] = var9;
                        var11 = _closure1_slot6;
                        var10 = _closure1_slot4;
                        var9 = {};
                        var13 = var13.textContainer;
                        var9.style = var13;
                        var15 = _closure1_slot5;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var13 = 10;
                        var12 = var20[var13];
                        var12 = var19.bind(var4)(var12);
                        var14 = var12.Text;
                        var12 = {};
                        var17 = 'text-sm/bold';
                        var12.variant = var17;
                        var16 = var16.name;
                        var12.children = var16;
                        var14 = var15.bind(var4)(var14, var12);
                        var12 = new Array(2);
                        var12[0] = var14;
                        var13 = var20[var13];
                        var13 = var19.bind(var4)(var13);
                        var14 = var13.Text;
                        var13 = {};
                        var16 = 'text-sm/normal';
                        var13.variant = var16;
                        var16 = 11;
                        var17 = var20[var16];
                        var17 = var19.bind(var4)(var17);
                        var18 = var17.intl;
                        var17 = var18.string;
                        var16 = var20[var16];
                        var16 = var19.bind(var4)(var16);
                        var16 = var16.t;
                        var16 = var16.Tj5Nwi;
                        var16 = var17.bind(var18)(var16);
                        var13.children = var16;
                        var13 = var15.bind(var4)(var14, var13);
                        var12[1] = var13;
                        var9.children = var12;
                        var9 = var11.bind(var4)(var10, var9);
                        var8[1] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 525:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 478, 4751, 4887, 5727, 8512, 4832, 1234, 2]);