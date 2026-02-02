// modules/guild_tag/native/VoiceGuildTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun102093: for (var _fun102093_ip = 0;;) switch (_fun102093_ip) {
        case 0:
            var4 = require;
            var14 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var9 = 0;
            var6 = var5[var9];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var12 = 1;
            var3 = var5[var12];
            var3 = var4.bind(var0)(var3);
            var6 = var3.View;
            var _closure1_slot2 = var6;
            var3 = var3.Text;
            var _closure1_slot3 = var3;
            var11 = 2;
            var3 = var5[var11];
            var3 = var14.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.GuildTagBadgeSize;
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot6 = var6;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var10 = 'center';
            var8.textAlignVertical = var10;
            var10 = 6;
            var13 = var5[var10];
            var15 = var4.bind(var0)(var13);
            var13 = var15.isAndroid;
            var15 = var13.bind(var15)();
            var13 = 10;
            if (!var15) {
                _fun102093_ip = 229;
                continue _fun102093
            }
        case 226:
            var13 = 14;
        case 229:
            var8.height = var13;
            var3.gapContainer = var8;
            var8 = {
                'alignItems': 'center',
                'justifyContent': 'center',
                'flexDirection': 'row',
                'backgroundColor': null,
                'borderRadius': 4,
                'paddingHorizontal': 4,
                'paddingVertical': null,
                'height': 16
            };
            var13 = 7;
            var13 = var5[var13];
            var13 = var14.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_MOD_STRONG;
            var8.backgroundColor = var13;
            var13 = var5[var10];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isAndroid;
            var13 = var13.bind(var14)();
            var9 = 0;
            if (!var13) {
                _fun102093_ip = 308;
                continue _fun102093
            }
        case 305:
            var9 = var12;
        case 308:
            var8.paddingVertical = var9;
            var9 = 16;
            var3.tagContainer = var8;
            var8 = {};
            var8.marginLeft = var11;
            var10 = var5[var10];
            var11 = var4.bind(var0)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            if (!var10) {
                _fun102093_ip = 354;
                continue _fun102093
            }
        case 351:
            var9 = 13;
        case 354:
            var8.lineHeight = var9;
            var3.tag = var8;
            var8 = {
                'width': 4,
                'height': 4
            };
            var3.spacer = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot8 = var3;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/guild_tag/native/VoiceGuildTag.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun102094: for (var _fun102094_ip = 0;;) switch (_fun102094_ip) {
                    case 0:
                        var1 = arg0;
                        var6 = var1.primaryGuild;
                        var8 = var1.userId;
                        var _closure2_slot0 = var8;
                        var21 = var1.badgeSize;
                        var4 = undefined;
                        if (!(var21 === var4)) {
                            _fun102094_ip = 45;
                            continue _fun102094
                        }
                    case 32:
                        var2 = _closure1_slot5;
                        var21 = var2.SIZE_12;
                    case 45:
                        var19 = var1.textVariant;
                        if (!(var19 === var4)) {
                            _fun102094_ip = 61;
                            continue _fun102094
                        }
                    case 55:
                        var19 = 'text-xs/semibold';
                    case 61:
                        var18 = var1.textColor;
                        if (!(var18 === var4)) {
                            _fun102094_ip = 77;
                            continue _fun102094
                        }
                    case 71:
                        var18 = 'text-default';
                    case 77:
                        var17 = var1.textStyle;
                        var11 = var1.containerStyles;
                        var1 = _closure1_slot8;
                        var16 = var1.bind(var4)();
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 8;
                        var1 = var3[var1];
                        var7 = var2.bind(var4)(var1);
                        var3 = var7.useStateFromStores;
                        var1 = _closure1_slot4;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = new Array(1);
                        var1[0] = var8;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot4;
                            var1 = var2.getUser;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var3.bind(var7)(var2, var0, var1);
                        var0 = null;
                        var3 = var0 == var2;
                        var1 = undefined;
                        if (var3) {
                            _fun102094_ip = 176;
                            continue _fun102094
                        }
                    case 170:
                        var1 = var2.primaryGuild;
                    case 176:
                        if (!(var0 != var1)) {
                            _fun102094_ip = 183;
                            continue _fun102094
                        }
                    case 180:
                        var6 = var1;
                    case 183:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 9;
                        var2 = var2[var1];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.getUserPrimaryGuild;
                        var2 = var2.bind(var3)(var6);
                        var15 = var2.tag;
                        var6 = var2.badge;
                        var3 = var2.guildId;
                        if (!(var0 != var3)) {
                            _fun102094_ip = 524;
                            continue _fun102094
                        }
                    case 237:
                        if (!(var0 != var15)) {
                            _fun102094_ip = 524;
                            continue _fun102094
                        }
                    case 244:
                        var14 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var1 = var20[var1];
                        var2 = var14.bind(var4)(var1);
                        var1 = var2.getGuildTagBadgeUrl;
                        var23 = var1.bind(var2)(var3, var6, var21);
                        var3 = _closure1_slot7;
                        var2 = _closure1_slot3;
                        var1 = {};
                        var7 = _closure1_slot6;
                        var9 = _closure1_slot2;
                        var5 = {};
                        var6 = var16.spacer;
                        var5.style = var6;
                        var6 = var7.bind(var4)(var9, var5);
                        var5 = new Array(2);
                        var5[0] = var6;
                        var6 = {};
                        var8 = {};
                        var12 = var16.gapContainer;
                        var10 = new Array(2);
                        var10[0] = var12;
                        var10[1] = var11;
                        var8.style = var10;
                        var10 = {};
                        var11 = {};
                        var12 = var16.tagContainer;
                        var11.style = var12;
                        var12 = 10;
                        var12 = var20[var12];
                        var12 = var14.bind(var4)(var12);
                        var13 = var12.GuildTagBadge;
                        var12 = {};
                        var22 = {};
                        var22.uri = var23;
                        var12.source = var22;
                        var12.size = var21;
                        var13 = var7.bind(var4)(var13, var12);
                        var12 = new Array(2);
                        var12[0] = var13;
                        var13 = 11;
                        var13 = var20[var13];
                        var13 = var14.bind(var4)(var13);
                        var14 = var13.Text;
                        var13 = {};
                        var13.variant = var19;
                        var13.color = var18;
                        var18 = var16.tag;
                        var16 = new Array(2);
                        var16[0] = var18;
                        var16[1] = var17;
                        var13.style = var16;
                        var13.children = var15;
                        var13 = var7.bind(var4)(var14, var13);
                        var12[1] = var13;
                        var11.children = var12;
                        var11 = var3.bind(var4)(var9, var11);
                        var10.children = var11;
                        var10 = var7.bind(var4)(var2, var10);
                        var8.children = var10;
                        var8 = var7.bind(var4)(var9, var8);
                        var6.children = var8;
                        var6 = var7.bind(var4)(var2, var6);
                        var5[1] = var6;
                        var1.children = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    case 524:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 6603, 33, 1297, 478, 671, 566, 6773, 7340, 3902, 2]);