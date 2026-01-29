// modules/premium/powerups/native/GuildPowerupsLevelCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: GuildLevelPowerupHeader, environment: var3
        _fun102751: for (var _fun102751_ip = 0;;) switch (_fun102751_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.active;
                var1 = var0.nextActive;
                var12 = var0.position;
                var0 = _closure1_slot12;
                var3 = undefined;
                var10 = var0.bind(var3)();
                if (!var9) {
                    _fun102751_ip = 42;
                    continue _fun102751
                }
            case 36:
                var0 = false;
                if (!(var0 === var1)) {
                    _fun102751_ip = 126;
                    continue _fun102751
                }
            case 42:
                if (!var9) {
                    _fun102751_ip = 51;
                    continue _fun102751
                }
            case 45:
                var0 = false;
                if (!(var0 !== var1)) {
                    _fun102751_ip = 87;
                    continue _fun102751
                }
            case 51:
                var0 = var10.boostContainerInactive;
                var0 = var0.backgroundColor;
                var7 = new Array(2);
                var7[0] = var0;
                var0 = var10.boostContainerInactive;
                var0 = var0.backgroundColor;
                var7[1] = var0;
                _fun102751_ip = 124;
                continue _fun102751;
            case 87:
                var0 = var10.boostContainerActive;
                var1 = var0.backgroundColor;
                var0 = new Array(2);
                var0[0] = var1;
                var1 = var10.boostContainerInactive;
                var1 = var1.backgroundColor;
                var0[1] = var1;
                var7 = var0;
            case 124:
                _fun102751_ip = 163;
                continue _fun102751;
            case 126:
                var0 = var10.boostContainerActive;
                var1 = var0.backgroundColor;
                var0 = new Array(2);
                var0[0] = var1;
                var1 = var10.boostContainerActive;
                var1 = var1.backgroundColor;
                var0[1] = var1;
                var7 = var0;
            case 163:
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.progressContainer;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 8;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var8 = _closure1_slot8;
                var8 = var8.START;
                var4.start = var8;
                var8 = _closure1_slot8;
                var8 = var8.END;
                var4.end = var8;
                var4.colors = var7;
                var8 = var10.progress;
                var7 = new Array(3);
                var7[0] = var8;
                var8 = _closure1_slot5;
                var8 = var8.START;
                var8 = var12 === var8;
                if (!var8) {
                    _fun102751_ip = 278;
                    continue _fun102751
                }
            case 272:
                var8 = var10.progressStart;
            case 278:
                var7[1] = var8;
                var8 = _closure1_slot5;
                var8 = var8.END;
                var8 = var12 === var8;
                if (!var8) {
                    _fun102751_ip = 305;
                    continue _fun102751
                }
            case 299:
                var8 = var10.progressEnd;
            case 305:
                var7[2] = var8;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var12 = var10.boostContainer;
                var8 = new Array(2);
                var8[0] = var12;
                var12 = var10.boostContainerBackground;
                var8[1] = var12;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var12 = var10.boostContainer;
                var8 = new Array(2);
                var8[0] = var12;
                if (!var9) {
                    _fun102751_ip = 408;
                    continue _fun102751
                }
            case 402:
                var9 = var10.boostContainerActive;
            case 408:
                var8[1] = var9;
                var5.style = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 9;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.BoostGemIcon;
                var8 = {};
                var12 = 'xs';
                var8.size = var12;
                var12 = _closure1_slot1;
                var11 = 7;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.colors;
                var11 = var11.WHITE;
                var8.color = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var1 = function(arg0) { // Original name: GuildPowerupLevelBody, environment: var3
        var1 = arg0;
        var2 = var1.isActive;
        var6 = var1.index;
        var _closure2_slot0 = var6;
        var1 = _closure1_slot12;
        var3 = undefined;
        var9 = var1.bind(var3)();
        var _closure2_slot1 = var9;
        var14 = _closure1_slot1;
        var15 = _closure1_slot2;
        var1 = 10;
        var1 = var15[var1];
        var1 = var14.bind(var3)(var1);
        var1 = var1.bind(var3)(var2);
        var11 = var1.textColor;
        var _closure2_slot2 = var11;
        var5 = var1.iconColor;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot3;
        var2 = var4.useMemo;
        var1 = new Array(4);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var11;
        var1[3] = var9;
        var0 = function() { // Environment: var0
            _fun102753: for (var _fun102753_ip = 0;;) switch (_fun102753_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = _closure2_slot0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun102753_ip = 107;
                        continue _fun102753
                    }
                case 24:
                    var3 = var1.tier;
                    var2 = _closure1_slot7;
                    var2 = var2.TIER_3;
                    if (!(var3 !== var2)) {
                        _fun102753_ip = 52;
                        continue _fun102753
                    }
                case 44:
                    var3 = var1.perks;
                    _fun102753_ip = 77;
                    continue _fun102753;
                case 52:
                    var5 = var1.perks;
                    var4 = var5.slice;
                    var2 = 0;
                    var1 = -1;
                    var3 = var4.bind(var5)(var2, var1);
                case 77:
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun102753_ip = 105;
                        continue _fun102753
                    }
                case 86:
                    var2 = var3.map;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var10 = arg0;
                        var7 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var0 = 11;
                        var0 = var11[var0];
                        var4 = undefined;
                        var2 = var7.bind(var4)(var0);
                        var1 = var2.getIconForPerk;
                        var0 = var10.perkIcon;
                        var12 = var1.bind(var2)(var0);
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var9 = _closure2_slot1;
                        var5 = var9.perkRowStyle;
                        var1.style = var5;
                        var8 = _closure1_slot10;
                        var5 = {};
                        var13 = _closure2_slot3;
                        var5.color = var13;
                        var13 = 'sm';
                        var5.size = var13;
                        var8 = var8.bind(var4)(var12, var5);
                        var5 = new Array(2);
                        var5[0] = var8;
                        var8 = _closure1_slot10;
                        var6 = 12;
                        var6 = var11[var6];
                        var6 = var7.bind(var4)(var6);
                        var7 = var6.Text;
                        var6 = {};
                        var11 = _closure2_slot2;
                        var6.color = var11;
                        var9 = var9.perkText;
                        var6.style = var9;
                        var9 = 'text-sm/medium';
                        var6.variant = var9;
                        var9 = var10.getCopy;
                        var9 = var9.bind(var10)();
                        var6.children = var9;
                        var6 = var8.bind(var4)(var7, var6);
                        var5[1] = var6;
                        var1.children = var5;
                        var8 = _closure2_slot0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var7 = var0.concat;
                        var6 = 'perk-';
                        var5 = '-';
                        var0 = arg1;
                        var0 = var7.bind(var6)(var8, var5, var0);
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 105:
                    return var0;
                case 107:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var5 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot11;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.perkRowContainer;
        var0.style = var4;
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot4;
        var5 = {};
        var9 = var9.perkRow;
        var5.style = var9;
        var10 = _closure1_slot10;
        var12 = _closure1_slot0;
        var8 = 12;
        var8 = var15[var8];
        var8 = var12.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {};
        var8.color = var11;
        var11 = 'text-sm/medium';
        var8.variant = var11;
        var11 = 13;
        var11 = var15[var11];
        var11 = var12.bind(var3)(var11);
        var13 = var11.intl;
        var12 = var13.string;
        var11 = 14;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.nIj3LZ;
        var11 = var12.bind(var13)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var0)(var4);
    var7 = var4.LevelCardPosition;
    var _closure1_slot5 = var7;
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.BoostedGuildTiers;
    var _closure1_slot7 = var7;
    var4 = var4.HorizontalGradient;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.TIER_CARDS;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var12 = 6;
    var4 = var6[var12];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9.flex = var10;
    var4.cardContainer = var9;
    var9 = {
        'padding': 0,
        'overflow': 'hidden',
        'flex': 1
    };
    var4.card = var9;
    var9 = {};
    var10 = 7;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var9.marginVertical = var14;
    var14 = 'relative';
    var9.position = var14;
    var4.progressContainer = var9;
    var9 = {};
    var9.height = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var4.progress = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GUILD_BOOSTING_PINK;
    var9.backgroundColor = var12;
    var4.progressFull = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginStart = var12;
    var4.progressStart = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginEnd = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderTopEndRadius = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderBottomEndRadius = var12;
    var4.progressEnd = var9;
    var9 = {
        'backgroundColor': null,
        'width': 28,
        'height': 28,
        'start': null,
        'top': 4294967285
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var12 = var12 - var13;
    var9.start = var12;
    var4.boostContainerBackground = var9;
    var9 = {
        'padding': null,
        'borderRadius': null,
        'position': 'absolute',
        'width': 24,
        'height': 24,
        'top': 4294967287,
        'start': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.padding = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.start = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var4.boostContainer = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GUILD_BOOSTING_PINK;
    var9.backgroundColor = var12;
    var4.boostContainerActive = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var4.boostContainerInactive = var9;
    var9 = {
        'padding': null,
        'paddingTop': 0,
        'flex': 1
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.padding = var12;
    var4.contentContainer = var9;
    var9 = {};
    var12 = 'column';
    var9.flexDirection = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.gap = var12;
    var4.perkRowContainer = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.perkRow = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.perkRowStyle = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginStart = var12;
    var4.perkText = var9;
    var9 = {};
    var12 = 'auto';
    var9.marginTop = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingTop = var10;
    var4.footerContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsLevelCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: GuildPowerupsLevelCard, environment: var3
        _fun102755: for (var _fun102755_ip = 0;;) switch (_fun102755_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var16 = var1.powerup;
                var9 = var1.nextPowerup;
                var18 = var1.index;
                var6 = var1.isScrollingRef;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot12;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 15;
                var1 = var5[var7];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2, var16);
                var7 = var5[var7];
                var7 = var4.bind(var3)(var7);
                var7 = var7.bind(var3)(var2, var9);
                var10 = _closure1_slot0;
                var8 = 16;
                var8 = var5[var8];
                var11 = var10.bind(var3)(var8);
                var10 = var11.useCalculatePowerupCardStatus;
                var8 = false;
                var15 = var10.bind(var11)(var16, var1, var8);
                var10 = var1.type;
                var1 = _closure1_slot6;
                var8 = var1.INACTIVE;
                var19 = var10 !== var8;
                var7 = var7.type;
                var1 = var1.INACTIVE;
                var8 = var7 !== var1;
                var1 = 17;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var5 = var1.bind(var3)(var2, var16);
                var _closure2_slot1 = var5;
                var1 = 0;
                if (!(var1 !== var18)) {
                    _fun102755_ip = 214;
                    continue _fun102755
                }
            case 184:
                var1 = null;
                if (!(var1 != var9)) {
                    _fun102755_ip = 202;
                    continue _fun102755
                }
            case 190:
                var1 = _closure1_slot5;
                var7 = var1.MIDDLE;
                _fun102755_ip = 212;
                continue _fun102755;
            case 202:
                var1 = _closure1_slot5;
                var7 = var1.END;
            case 212:
                _fun102755_ip = 224;
                continue _fun102755;
            case 214:
                var1 = _closure1_slot5;
                var7 = var1.START;
            case 224:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun102756: for (var _fun102756_ip = 0;;) switch (_fun102756_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = var1.current;
                            if (var1) {
                                _fun102756_ip = 25;
                                continue _fun102756
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 18;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var14.cardContainer;
                var0.containerStyle = var5;
                var5 = var14.card;
                var0.style = var5;
                var0.onPress = var4;
                var0.status = var15;
                var6 = _closure1_slot10;
                var5 = _closure1_slot13;
                var4 = {};
                var4.position = var7;
                var4.active = var19;
                var7 = null;
                var9 = var7 != var9;
                var7 = undefined;
                if (!var9) {
                    _fun102755_ip = 346;
                    continue _fun102755
                }
            case 343:
                var7 = var8;
            case 346:
                var4.nextActive = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var14.contentContainer;
                var5.style = var8;
                var10 = _closure1_slot10;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 12;
                var8 = var17[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {};
                var11 = 'heading-lg/semibold';
                var8.variant = var11;
                var11 = var16.title;
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot14;
                var9 = {};
                var9.isActive = var19;
                var9.index = var18;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot4;
                var9 = {};
                var14 = var14.footerContainer;
                var9.style = var14;
                var14 = _closure1_slot10;
                var12 = 19;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.GuildPowerupsCardFooter;
                var12 = {};
                var16 = var16.cost;
                var12.cost = var16;
                var12.status = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.GuildPowerupLevelBody = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6675, 660, 13356, 33, 1297, 671, 4051, 7638, 13357, 13358, 3895, 1234, 1881, 13341, 13359, 13360, 13382, 13367, 2]);