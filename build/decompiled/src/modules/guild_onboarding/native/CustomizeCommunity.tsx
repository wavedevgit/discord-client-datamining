// modules/guild_onboarding/native/CustomizeCommunity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: EmptyCustomizeCommunity, environment: var1
        _fun77330: for (var _fun77330_ip = 0;;) switch (_fun77330_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.setTab;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot19;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.isThemeDark;
                var9 = _closure1_slot1;
                var0 = 16;
                var0 = var2[var0];
                var0 = var9.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var8 = var4.bind(var5)(var0);
                var0 = 17;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var12
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot1 = var0;
                var2 = _closure1_slot17;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.emptyContainer;
                var0.style = var4;
                var7 = _closure1_slot16;
                var5 = _closure1_slot5;
                var4 = {};
                var11 = var10.emptyContainerImage;
                var4.style = var11;
                var13 = _closure1_slot2;
                if (var8) {
                    _fun77330_ip = 181;
                    continue _fun77330
                }
            case 172:
                var8 = 19;
                var8 = var13[var8];
                _fun77330_ip = 188;
                continue _fun77330;
            case 181:
                var11 = 18;
                var8 = var13[var11];
            case 188:
                var8 = var9.bind(var3)(var8);
                var4.source = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var14 = _closure1_slot16;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 20;
                var7 = var13[var5];
                var7 = var9.bind(var3)(var7);
                var11 = var7.LegacyText;
                var7 = {};
                var8 = var10.emptyContainerHeader;
                var7.style = var8;
                var8 = 21;
                var15 = var13[var8];
                var15 = var9.bind(var3)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var13[var8];
                var15 = var9.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.leKHQz;
                var15 = var16.bind(var17)(var15);
                var7.children = var15;
                var7 = var14.bind(var3)(var11, var7);
                var4[1] = var7;
                var7 = _closure1_slot16;
                var5 = var13[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.LegacyText;
                var5 = {};
                var10 = var10.emptyContainerSubheader;
                var5.style = var10;
                var10 = var13[var8];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8["jH+ktB"];
                var8 = {};
                var12 = function() { // Original name: onBrowseChannels, environment: var12
                    _fun77332: for (var _fun77332_ip = 0;;) switch (_fun77332_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun77332_ip = 37;
                                continue _fun77332
                            }
                        case 13:
                            var2 = _closure2_slot0;
                            var0 = _closure1_slot12;
                            var1 = var0.BROWSE;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onBrowseChannels = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: PromptTitle, environment: var1
        _fun77333: for (var _fun77333_ip = 0;;) switch (_fun77333_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var0 = _closure1_slot19;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var7.titleContainer;
                var0.style = var4;
                var6 = _closure1_slot17;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var12 = 20;
                var4 = var4[var12];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LegacyText;
                var4 = {};
                var7 = var7.prompt;
                var4.style = var7;
                var7 = 'header';
                var4.accessibilityRole = var7;
                var10 = var8.title;
                var7 = new Array(2);
                var7[0] = var10;
                var10 = var8.required;
                var8 = null;
                if (!var10) {
                    _fun77333_ip = 175;
                    continue _fun77333
                }
            case 115:
                var11 = _closure1_slot17;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/bold',
                    'color': 'text-feedback-critical'
                };
                var12 = [' ', '*'];
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 175:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: PromptHelpText, environment: var1
        _fun77334: for (var _fun77334_ip = 0;;) switch (_fun77334_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var9 = var0.prompt;
                var0 = var0.selectedOptionIds;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot19;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 17;
                var0 = var3[var0];
                var7 = var2.bind(var4)(var0);
                var3 = var7.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var3.bind(var7)(var2, var0);
                var0 = null;
                var3 = var0 == var9;
                var2 = undefined;
                if (var3) {
                    _fun77334_ip = 139;
                    continue _fun77334
                }
            case 108:
                var8 = var9.options;
                var3 = var0 == var8;
                var2 = undefined;
                if (var3) {
                    _fun77334_ip = 139;
                    continue _fun77334
                }
            case 122:
                var7 = var8.filter;
                var3 = function(arg0) { // Environment: var6
                    var2 = _closure2_slot1;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var3);
            case 139:
                _closure2_slot2 = var2;
                var11 = _closure1_slot3;
                var8 = var11.useMemo;
                var7 = new Array(1);
                var7[0] = var2;
                var3 = function() { // Environment: var6
                    _fun77337: for (var _fun77337_ip = 0;;) switch (_fun77337_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun77337_ip = 43;
                                continue _fun77337
                            }
                        case 13:
                            var0 = global;
                            var0 = var0.Set;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var6 = var2;
                            var0 = new var6[var0](var5);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _fun77337_ip = 83;
                            continue _fun77337;
                        case 43:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getSelectedRoleIds;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var8 = var8.bind(var11)(var3, var7);
                var11 = _closure1_slot3;
                var7 = var11.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var6
                    _fun77338: for (var _fun77338_ip = 0;;) switch (_fun77338_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun77338_ip = 43;
                                continue _fun77338
                            }
                        case 13:
                            var0 = global;
                            var0 = var0.Set;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var6 = var2;
                            var0 = new var6[var0](var5);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _fun77338_ip = 83;
                            continue _fun77338;
                        case 43:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getSelectedChannelIds;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var7 = var7.bind(var11)(var2, var3);
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 23;
                var2 = var11[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.guild = var10;
                var2.prompt = var9;
                var2.selectedRoleIds = var8;
                var2.selectedChannelIds = var7;
                var6 = function(arg0, arg1) { // Original name: itemHook, environment: var6
                    var4 = _closure1_slot16;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-xs/medium',
                        'color': 'mobile-text-heading-primary'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var2.itemHook = var6;
                var2 = var3.bind(var4)(var2);
                var7 = var2.helpText;
                var6 = var2.helpTextAdditional;
                var2 = '';
                if (!(var2 === var7)) {
                    _fun77334_ip = 287;
                    continue _fun77334
                }
            case 281:
                var0 = null;
                if (!(var2 !== var6)) {
                    _fun77334_ip = 374;
                    continue _fun77334
                }
            case 287:
                var3 = _closure1_slot17;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 20;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var5 = var5.helpText;
                var1.style = var5;
                var5 = new Array(3);
                var5[0] = var7;
                var7 = ' ';
                var5[1] = var7;
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 374:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: ConnectionsPrompt, environment: var1
        _fun77340: for (var _fun77340_ip = 0;;) switch (_fun77340_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot19;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot11;
                    var1 = var2.getConnections;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var2.bind(var3)(var1, var0);
                var2 = var11.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun77340_ip = 384;
                    continue _fun77340
                }
            case 93:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var10.connectionsPromptContainer;
                var1.style = var5;
                var12 = _closure1_slot16;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 20;
                var5 = var17[var7];
                var5 = var16.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var10.connectionsTitle;
                var5.style = var13;
                var13 = 21;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var18 = var14.intl;
                var15 = var18.string;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.eDVMrA;
                var14 = var15.bind(var18)(var14);
                var5.children = var14;
                var8 = var12.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var12 = _closure1_slot16;
                var7 = var17[var7];
                var7 = var16.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.BozOXu;
                var13 = var14.bind(var15)(var13);
                var7.children = var13;
                var7 = var12.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot16;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.connectionsContainer;
                var6.style = var10;
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = _closure1_slot16;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 24;
                    var0 = var6[var0];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var0);
                    var1 = {};
                    var0 = arg0;
                    var1.connection = var0;
                    var0 = _closure2_slot0;
                    var1.guildId = var0;
                    var0 = 25;
                    var0 = var6[var0];
                    var0 = var5.bind(var3)(var0);
                    var0 = var0.CHANNELS_AND_ROLES;
                    var1.location = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 384:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: DropdownOption, environment: var1
        _fun77343: for (var _fun77343_ip = 0;;) switch (_fun77343_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.option;
                var _closure2_slot0 = var8;
                var1 = _closure1_slot19;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var6 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun77344: for (var _fun77344_ip = 0;;) switch (_fun77344_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.emoji;
                            var5 = null;
                            var2 = var5 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77344_ip = 29;
                                continue _fun77344
                            }
                        case 24:
                            var0 = var1.id;
                        case 29:
                            var1 = var5 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun77344_ip = 80;
                                continue _fun77344
                            }
                        case 38:
                            var2 = _closure1_slot7;
                            var1 = var2.getUsableCustomEmojiById;
                            var4 = _closure2_slot0;
                            var4 = var4.emoji;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun77344_ip = 75;
                                continue _fun77344
                            }
                        case 70:
                            var3 = var4.id;
                        case 75:
                            var0 = var1.bind(var2)(var3);
                        case 80:
                            return var0;
                    }
                };
                var18 = var2.bind(var4)(var1, var0);
                var1 = var8.emoji;
                var13 = null;
                var2 = var13 == var1;
                var0 = undefined;
                if (var2) {
                    _fun77343_ip = 100;
                    continue _fun77343
                }
            case 95:
                var0 = var1.id;
            case 100:
                var6 = var13 != var0;
                if (var6) {
                    _fun77343_ip = 131;
                    continue _fun77343
                }
            case 107:
                var1 = var8.emoji;
                var2 = var13 == var1;
                var0 = undefined;
                if (var2) {
                    _fun77343_ip = 127;
                    continue _fun77343
                }
            case 122:
                var0 = var1.name;
            case 127:
                var6 = var13 != var0;
            case 131:
                var2 = _closure1_slot17;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var14.dropdownPill;
                var0.style = var4;
                if (!var6) {
                    _fun77343_ip = 354;
                    continue _fun77343
                }
            case 157:
                var9 = _closure1_slot16;
                var7 = _closure1_slot4;
                var4 = {};
                var10 = var14.emojiContainer;
                var4.style = var10;
                var12 = _closure1_slot16;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 31;
                var10 = var15[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var15 = var14.optionTextEmoji;
                var10.textEmojiStyle = var15;
                var14 = var14.optionImageEmoji;
                var10.fastImageStyle = var14;
                var15 = var13 != var18;
                var14 = undefined;
                if (!var15) {
                    _fun77343_ip = 295;
                    continue _fun77343
                }
            case 234:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var15 = 32;
                var15 = var17[var15];
                var17 = var16.bind(var3)(var15);
                var16 = var17.getEmojiURL;
                var15 = {};
                var19 = var18.id;
                var15.id = var19;
                var18 = var18.animated;
                var15.animated = var18;
                var18 = _closure1_slot14;
                var15.size = var18;
                var14 = var16.bind(var17)(var15);
            case 295:
                var10.src = var14;
                var15 = var8.emoji;
                var16 = var13 == var15;
                var14 = undefined;
                if (var16) {
                    _fun77343_ip = 320;
                    continue _fun77343
                }
            case 315:
                var14 = var15.name;
            case 320:
                var15 = var13 != var14;
                var13 = '';
                if (!var15) {
                    _fun77343_ip = 334;
                    continue _fun77343
                }
            case 331:
                var13 = var14;
            case 334:
                var10.name = var13;
                var10 = var12.bind(var3)(var11, var10);
                var4.children = var10;
                var6 = var9.bind(var3)(var7, var4);
            case 354:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 20;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-md/semibold';
                var5.variant = var9;
                var8 = var8.title;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0) { // Original name: DropdownPrompt, environment: var1
        _fun77345: for (var _fun77345_ip = 0;;) switch (_fun77345_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var _closure2_slot0 = var10;
                var9 = var0.prompt;
                var _closure2_slot1 = var9;
                var0 = _closure1_slot19;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var16 = var9.isNew;
                var _closure2_slot2 = var16;
                var14 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var0 = var4[var0];
                var6 = var14.bind(var3)(var0);
                var2 = var6.useStateFromStoresArray;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var3 = _closure1_slot11;
                    var2 = var3.getOnboardingResponsesForPrompt;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var2.bind(var6)(var1, var0);
                var _closure2_slot3 = var8;
                var1 = var8.map;
                var0 = function(arg0) { // Environment: var13
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot1;
                    var2 = var1.options;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var1.bind(var8)(var0);
                var1 = var2.filter;
                var0 = 33;
                var0 = var4[var0];
                var0 = var14.bind(var3)(var0);
                var0 = var0.isNotNullish;
                var15 = var1.bind(var2)(var0);
                var0 = 34;
                var0 = var4[var0];
                var6 = var14.bind(var3)(var0);
                var2 = var6.useToken;
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var0 = var0.BRAND_500;
                var12 = var2.bind(var6)(var0);
                var _closure2_slot4 = var12;
                var0 = 35;
                var2 = var4[var0];
                var7 = var14.bind(var3)(var2);
                var6 = var7.useAnimatedStyle;
                var2 = function() { // Original name: c, environment: var13
                    _fun77349: for (var _fun77349_ip = 0;;) switch (_fun77349_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = _closure2_slot4;
                            var1 = global;
                            var2 = var1.HermesInternal;
                            var2 = var2.concat;
                            var12 = '';
                            if (var0) {
                                _fun77349_ip = 43;
                                continue _fun77349
                            }
                        case 31:
                            var0 = '00';
                            var9 = var2.bind(var12)(var3, var0);
                            _fun77349_ip = 55;
                            continue _fun77349;
                        case 43:
                            var0 = 'FF';
                            var9 = var2.bind(var12)(var3, var0);
                        case 55:
                            var0 = {};
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var10 = 35;
                            var2 = var15[var10];
                            var13 = undefined;
                            var4 = var14.bind(var13)(var2);
                            var3 = var4.withSequence;
                            var8 = 36;
                            var2 = var15[var8];
                            var7 = var14.bind(var13)(var2);
                            var6 = var7.withTiming;
                            var2 = {};
                            var11 = 1;
                            var2.duration = var11;
                            var11 = var15[var10];
                            var11 = var14.bind(var13)(var11);
                            var17 = var11.Easing;
                            var16 = var17.in;
                            var11 = var15[var10];
                            var11 = var14.bind(var13)(var11);
                            var11 = var11.Easing;
                            var11 = var11.ease;
                            var11 = var16.bind(var17)(var11);
                            var2.easing = var11;
                            var2 = var6.bind(var7)(var9, var2);
                            var6 = var15[var10];
                            var7 = var14.bind(var13)(var6);
                            var6 = var7.withDelay;
                            var8 = var15[var8];
                            var9 = var14.bind(var13)(var8);
                            var8 = var9.withTiming;
                            var11 = _closure2_slot4;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = '00';
                            var5 = var5.bind(var12)(var11, var1);
                            var1 = {};
                            var11 = 300;
                            var1.duration = var11;
                            var11 = var15[var10];
                            var11 = var14.bind(var13)(var11);
                            var12 = var11.Easing;
                            var11 = var12.out;
                            var10 = var15[var10];
                            var10 = var14.bind(var13)(var10);
                            var10 = var10.Easing;
                            var10 = var10.ease;
                            var10 = var11.bind(var12)(var10);
                            var1.easing = var10;
                            var5 = var8.bind(var9)(var5, var1);
                            var1 = 500;
                            var1 = var6.bind(var7)(var1, var5);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.borderColor = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.isNew = var16;
                var11.brandColor = var12;
                var12 = var4[var0];
                var12 = var14.bind(var3)(var12);
                var12 = var12.withSequence;
                var11.withSequence = var12;
                var12 = 36;
                var12 = var4[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.withTiming;
                var11.withTiming = var12;
                var12 = var4[var0];
                var12 = var14.bind(var3)(var12);
                var12 = var12.Easing;
                var11.Easing = var12;
                var12 = var4[var0];
                var12 = var14.bind(var3)(var12);
                var12 = var12.withDelay;
                var11.withDelay = var12;
                var2.__closure = var11;
                var11 = 16609373875235.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot20;
                var2.__initData = var11;
                var6 = var6.bind(var7)(var2);
                var2 = 37;
                var2 = var4[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)(var10);
                var2 = var2.handleSelectOption;
                var _closure2_slot5 = var2;
                var12 = _closure1_slot3;
                var11 = var12.useCallback;
                var7 = new Array(4);
                var7[0] = var10;
                var7[1] = var9;
                var7[2] = var2;
                var2 = var8.length;
                var7[3] = var2;
                var2 = function() { // Environment: var13
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 38;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 40;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 39;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.guildId = var6;
                    var1 = _closure2_slot1;
                    var6 = var1.id;
                    var2.promptId = var6;
                    var6 = function(arg0, arg1) { // Original name: onSelect, environment: var6
                        _fun77351: for (var _fun77351_ip = 0;;) switch (_fun77351_ip) {
                            case 0:
                                var0 = arg1;
                                var1 = !var0;
                                if (!var1) {
                                    _fun77351_ip = 22;
                                    continue _fun77351
                                }
                            case 9:
                                var2 = _closure2_slot1;
                                var1 = var2.required;
                            case 22:
                                if (!var1) {
                                    _fun77351_ip = 44;
                                    continue _fun77351
                                }
                            case 25:
                                var2 = _closure2_slot3;
                                var3 = var2.length;
                                var2 = 1;
                                var1 = var2 === var3;
                            case 44:
                                if (var1) {
                                    _fun77351_ip = 82;
                                    continue _fun77351
                                }
                            case 47:
                                var4 = _closure2_slot5;
                                var3 = _closure2_slot1;
                                var1 = null;
                                var2 = var1 != var0;
                                if (!var2) {
                                    _fun77351_ip = 70;
                                    continue _fun77351
                                }
                            case 67:
                                var2 = var0;
                            case 70:
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var4.bind(var1)(var3, var0, var2);
                            case 82:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.onSelect = var6;
                    var1 = var1.isNew;
                    var1 = !var1;
                    var2.canBeNew = var1;
                    var1 = true;
                    var2.returnToCustomize = var1;
                    var1 = 'DropdownOptions';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var12 = var11.bind(var12)(var2, var7);
                var2 = _closure1_slot17;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var19.promptContainer;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var6 = var9.isNew;
                if (!var6) {
                    _fun77345_ip = 619;
                    continue _fun77345
                }
            case 484:
                var11 = _closure1_slot16;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 41;
                var4 = var20[var14];
                var4 = var18.bind(var3)(var4);
                var7 = var4.TextBadge;
                var4 = {};
                var14 = var20[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.BadgeColors;
                var14 = var14.BRAND;
                var4.color = var14;
                var14 = 21;
                var16 = var20[var14];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var20[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.y2b7CA;
                var14 = var16.bind(var17)(var14);
                var4.text = var14;
                var14 = var19.badge;
                var4.style = var14;
                var14 = var19.badgeText;
                var4.textStyle = var14;
                var6 = var11.bind(var3)(var7, var4);
            case 619:
                var4 = new Array(4);
                var4[0] = var6;
                var11 = _closure1_slot16;
                var7 = _closure1_slot23;
                var6 = {};
                var6.item = var9;
                var6 = var11.bind(var3)(var7, var6);
                var4[1] = var6;
                var11 = _closure1_slot17;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 42;
                var6 = var14[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.PressableHighlight;
                var6 = {};
                var14 = var19.dropdownContainer;
                var6.style = var14;
                var6.onPress = var12;
                var14 = var15.length;
                var12 = 0;
                var14 = var12 === var14;
                if (!var14) {
                    _fun77345_ip = 825;
                    continue _fun77345
                }
            case 711:
                var17 = _closure1_slot16;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var12 = 20;
                var12 = var23[var12];
                var12 = var22.bind(var3)(var12);
                var16 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-muted'
                };
                var18 = var19.emptyDropdownText;
                var12.style = var18;
                var18 = 21;
                var20 = var23[var18];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var23[var18];
                var18 = var22.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.GmSvdA;
                var18 = var20.bind(var21)(var18);
                var12.children = var18;
                var14 = var17.bind(var3)(var16, var12);
            case 825:
                var12 = new Array(3);
                var12[0] = var14;
                var14 = var15.map;
                var13 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot26;
                    var2 = {};
                    var2.option = var0;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var13 = var14.bind(var15)(var13);
                var12[1] = var13;
                var15 = _closure1_slot16;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = var19.dropdownIconContainer;
                var13.style = var16;
                var18 = _closure1_slot16;
                var17 = _closure1_slot5;
                var16 = {};
                var19 = var19.dropdownIcon;
                var16.style = var19;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 43;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var16.source = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[2] = var13;
                var6.children = var12;
                var6 = var11.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot24;
                var5 = {};
                var5.guildId = var10;
                var5.prompt = var9;
                var5.selectedOptionIds = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: MultipleChoicePrompt, environment: var1
        _fun77353: for (var _fun77353_ip = 0;;) switch (_fun77353_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var _closure2_slot0 = var10;
                var9 = var0.prompt;
                var _closure2_slot1 = var9;
                var0 = _closure1_slot19;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var16 = var9.isNew;
                var _closure2_slot2 = var16;
                var15 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var0 = var4[var0];
                var7 = var15.bind(var3)(var0);
                var2 = var7.useStateFromStoresArray;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var3 = _closure1_slot11;
                    var2 = var3.getOnboardingResponsesForPrompt;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var2.bind(var7)(var1, var0);
                var _closure2_slot3 = var8;
                var1 = _closure1_slot1;
                var0 = 37;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)(var10);
                var0 = var0.handleSelectOption;
                var _closure2_slot4 = var0;
                var0 = 34;
                var0 = var4[var0];
                var7 = var15.bind(var3)(var0);
                var2 = var7.useToken;
                var0 = 13;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var0 = var0.BRAND_500;
                var14 = var2.bind(var7)(var0);
                var _closure2_slot5 = var14;
                var0 = 35;
                var2 = var4[var0];
                var11 = var15.bind(var3)(var2);
                var7 = var11.useAnimatedStyle;
                var2 = function() { // Original name: o, environment: var6
                    _fun77355: for (var _fun77355_ip = 0;;) switch (_fun77355_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = _closure2_slot5;
                            var1 = global;
                            var2 = var1.HermesInternal;
                            var2 = var2.concat;
                            var12 = '';
                            if (var0) {
                                _fun77355_ip = 43;
                                continue _fun77355
                            }
                        case 31:
                            var0 = '00';
                            var9 = var2.bind(var12)(var3, var0);
                            _fun77355_ip = 55;
                            continue _fun77355;
                        case 43:
                            var0 = 'FF';
                            var9 = var2.bind(var12)(var3, var0);
                        case 55:
                            var0 = {};
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var10 = 35;
                            var2 = var15[var10];
                            var13 = undefined;
                            var4 = var14.bind(var13)(var2);
                            var3 = var4.withSequence;
                            var8 = 36;
                            var2 = var15[var8];
                            var7 = var14.bind(var13)(var2);
                            var6 = var7.withTiming;
                            var2 = {};
                            var11 = 1;
                            var2.duration = var11;
                            var11 = var15[var10];
                            var11 = var14.bind(var13)(var11);
                            var17 = var11.Easing;
                            var16 = var17.in;
                            var11 = var15[var10];
                            var11 = var14.bind(var13)(var11);
                            var11 = var11.Easing;
                            var11 = var11.ease;
                            var11 = var16.bind(var17)(var11);
                            var2.easing = var11;
                            var2 = var6.bind(var7)(var9, var2);
                            var6 = var15[var10];
                            var7 = var14.bind(var13)(var6);
                            var6 = var7.withDelay;
                            var8 = var15[var8];
                            var9 = var14.bind(var13)(var8);
                            var8 = var9.withTiming;
                            var11 = _closure2_slot5;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = '00';
                            var5 = var5.bind(var12)(var11, var1);
                            var1 = {};
                            var11 = 300;
                            var1.duration = var11;
                            var11 = var15[var10];
                            var11 = var14.bind(var13)(var11);
                            var12 = var11.Easing;
                            var11 = var12.out;
                            var10 = var15[var10];
                            var10 = var14.bind(var13)(var10);
                            var10 = var10.Easing;
                            var10 = var10.ease;
                            var10 = var11.bind(var12)(var10);
                            var1.easing = var10;
                            var5 = var8.bind(var9)(var5, var1);
                            var1 = 500;
                            var1 = var6.bind(var7)(var1, var5);
                            var1 = var3.bind(var4)(var2, var1);
                            var0.borderColor = var1;
                            return var0;
                    }
                };
                var12 = {};
                var12.isNew = var16;
                var12.brandColor = var14;
                var14 = var4[var0];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withSequence;
                var12.withSequence = var14;
                var14 = 36;
                var14 = var4[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withTiming;
                var12.withTiming = var14;
                var14 = var4[var0];
                var14 = var15.bind(var3)(var14);
                var14 = var14.Easing;
                var12.Easing = var14;
                var14 = var4[var0];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withDelay;
                var12.withDelay = var14;
                var2.__closure = var12;
                var12 = 12802766002208.0;
                var2.__workletHash = var12;
                var12 = _closure1_slot21;
                var2.__initData = var12;
                var7 = var7.bind(var11)(var2);
                var2 = _closure1_slot17;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var11 = var13.promptContainer;
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var7;
                var0.style = var4;
                var7 = var9.isNew;
                if (!var7) {
                    _fun77353_ip = 527;
                    continue _fun77353
                }
            case 392:
                var12 = _closure1_slot16;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 41;
                var4 = var18[var14];
                var4 = var17.bind(var3)(var4);
                var11 = var4.TextBadge;
                var4 = {};
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.BadgeColors;
                var14 = var14.BRAND;
                var4.color = var14;
                var14 = 21;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.y2b7CA;
                var14 = var15.bind(var16)(var14);
                var4.text = var14;
                var14 = var13.badge;
                var4.style = var14;
                var13 = var13.badgeText;
                var4.textStyle = var13;
                var7 = var12.bind(var3)(var11, var4);
            case 527:
                var4 = new Array(4);
                var4[0] = var7;
                var12 = _closure1_slot16;
                var11 = _closure1_slot23;
                var7 = {};
                var7.item = var9;
                var7 = var12.bind(var3)(var11, var7);
                var4[1] = var7;
                var11 = var9.options;
                var7 = var11.map;
                var6 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 44;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.guildId = var7;
                    var1.option = var0;
                    var9 = _closure2_slot3;
                    var8 = var9.includes;
                    var7 = var0.id;
                    var7 = var8.bind(var9)(var7);
                    var1.selected = var7;
                    var6 = function(arg0) { // Original name: onSelect, environment: var6
                        _fun77357: for (var _fun77357_ip = 0;;) switch (_fun77357_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure3_slot0;
                                var1 = !var0;
                                if (!var1) {
                                    _fun77357_ip = 29;
                                    continue _fun77357
                                }
                            case 16:
                                var2 = _closure2_slot1;
                                var1 = var2.required;
                            case 29:
                                if (!var1) {
                                    _fun77357_ip = 51;
                                    continue _fun77357
                                }
                            case 32:
                                var2 = _closure2_slot3;
                                var3 = var2.length;
                                var2 = 1;
                                var1 = var2 === var3;
                            case 51:
                                if (var1) {
                                    _fun77357_ip = 86;
                                    continue _fun77357
                                }
                            case 54:
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot1;
                                var1 = null;
                                var1 = var1 != var0;
                                if (!var1) {
                                    _fun77357_ip = 77;
                                    continue _fun77357
                                }
                            case 74:
                                var1 = var0;
                            case 77:
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var4, var1);
                            case 86:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onSelect = var6;
                    var6 = true;
                    var1.suppressMemberCount = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.isNew;
                    var5 = !var5;
                    var1.canBeNew = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6 = var7.bind(var11)(var6);
                var4[2] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot24;
                var5 = {};
                var5.guildId = var10;
                var5.prompt = var9;
                var5.selectedOptionIds = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var18 = 6;
    var3 = var5[var18];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildOnboardingTab;
    var _closure1_slot12 = var6;
    var3 = var3.OnboardingPromptType;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var6 = var3.jsxs;
    var _closure1_slot17 = var6;
    var3 = var3.Fragment;
    var _closure1_slot18 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 13;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.paddingHorizontal = var14;
    var3.container = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.marginTop = var14;
    var3.sheetTitle = var8;
    var8 = {};
    var19 = 'relative';
    var8.position = var19;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var8.marginTop = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var8.padding = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var8.borderRadius = var14;
    var8.borderWidth = var13;
    var13 = 'solid';
    var8.borderStyle = var13;
    var3.promptContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var16 = 'row';
    var15 = 'center';
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var8.marginBottom = var13;
    var3.titleContainer = var8;
    var8 = {};
    var14 = 14;
    var13 = var5[var14];
    var21 = var10.bind(var0)(var13);
    var20 = var11.PRIMARY_SEMIBOLD;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var17 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var13 = 16;
    var23 = var21.bind(var0)(var20, var17, var13);
    var24 = var8;
    var13 = copyDataProperties(var24, var23);
    var3.prompt = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var13;
    var3.required = var8;
    var13 = 'absolute';
    var8 = {
        'position': 'absolute',
        'top': 4294967290,
        'right': 4294967290
    };
    var3.badge = var8;
    var8 = {};
    var17 = 'bold';
    var8.fontWeight = var17;
    var3.badgeText = var8;
    var8 = {};
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var8.borderRadius = var17;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var17;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var8.padding = var17;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_32;
    var8.paddingRight = var17;
    var17 = 48;
    var8.minHeight = var17;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var8.marginBottom = var17;
    var17 = 'flex';
    var8.display = var17;
    var8.flexDirection = var16;
    var20 = 'wrap';
    var8.flexWrap = var20;
    var8.alignItems = var15;
    var8.position = var19;
    var3.dropdownContainer = var8;
    var8 = {};
    var19 = var5[var9];
    var19 = var10.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var8.marginVertical = var19;
    var19 = var5[var9];
    var19 = var10.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var8.marginLeft = var19;
    var3.emptyDropdownText = var8;
    var8 = {};
    var19 = var5[var9];
    var19 = var10.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.sm;
    var8.borderRadius = var19;
    var19 = var5[var9];
    var19 = var10.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var19;
    var8.padding = var18;
    var18 = var5[var9];
    var18 = var10.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var8.marginRight = var18;
    var18 = var5[var9];
    var18 = var10.bind(var0)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_8;
    var8.marginTop = var18;
    var8.display = var17;
    var8.flexDirection = var16;
    var8.alignItems = var15;
    var3.dropdownPill = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.emojiContainer = var8;
    var8 = {};
    var8.position = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var8.right = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var8.top = var13;
    var3.dropdownIconContainer = var8;
    var8 = {
        'height': 32,
        'width': 32
    };
    var3.dropdownIcon = var8;
    var16 = 18;
    var8 = {
        'fontSize': 18,
        'lineHeight': 22,
        'marginRight': 6
    };
    var3.optionTextEmoji = var8;
    var8 = {
        'height': 22,
        'width': 22,
        'marginRight': 6
    };
    var3.optionImageEmoji = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var8.marginTop = var13;
    var3.helpText = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var8.marginTop = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.marginBottom = var13;
    var8.height = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.backgroundColor = var12;
    var3.sectionSeparator = var8;
    var8 = {
        'height': 400,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.emptyContainer = var8;
    var8 = {
        'width': 120,
        'height': 80
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginBottom = var12;
    var3.emptyContainerImage = var8;
    var8 = {};
    var12 = var5[var14];
    var15 = var10.bind(var0)(var12);
    var13 = var11.DISPLAY_SEMIBOLD;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var23 = var15.bind(var0)(var13, var12, var16);
    var24 = var8;
    var12 = copyDataProperties(var24, var23);
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var13 = var12.PX_4;
    var12 = 'marginBottom';
    var8[var12] = var13;
    var3.emptyContainerHeader = var8;
    var8 = {};
    var12 = var5[var14];
    var13 = var10.bind(var0)(var12);
    var12 = var11.DISPLAY_MEDIUM;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var23 = var13.bind(var0)(var12, var11, var14);
    var24 = var8;
    var11 = copyDataProperties(var24, var23);
    var3.emptyContainerSubheader = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.marginTop = var11;
    var3.connectionsContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.marginTop = var11;
    var3.connectionsPromptContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginBottom = var9;
    var3.connectionsTitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = 'function CustomizeCommunityTsx1(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function CustomizeCommunityTsx2(){const{isNew,brandColor,withSequence,withTiming,Easing,withDelay}=this.__closure;const rawBorderColor=isNew?brandColor+"FF":brandColor+"00";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+"00",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = 45;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/CustomizeCommunity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CustomizeCommunity, environment: var1
        _fun77358: for (var _fun77358_ip = 0;;) switch (_fun77358_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.guildId;
                var _closure2_slot0 = var12;
                var8 = var0.setTab;
                var0 = _closure1_slot19;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 26;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var9 = var0.bottom;
                var2 = _closure1_slot0;
                var0 = 17;
                var10 = var7[var0];
                var14 = var2.bind(var4)(var10);
                var13 = var14.useStateFromStores;
                var10 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = var3.hasUnread;
                    var1 = _closure2_slot0;
                    var0 = _closure1_slot15;
                    var0 = var0.GUILD_ONBOARDING_QUESTION;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var11 = var13.bind(var14)(var11, var10);
                var _closure2_slot1 = var11;
                var0 = var7[var0];
                var13 = var2.bind(var4)(var0);
                var10 = var13.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun77360: for (var _fun77360_ip = 0;;) switch (_fun77360_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77360_ip = 41;
                                continue _fun77360
                            }
                        case 35:
                            var0 = var1.latestOnboardingQuestionId;
                        case 41:
                            return var0;
                    }
                };
                var2 = var10.bind(var13)(var2, var0);
                var0 = 27;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.bind(var4)(var12);
                var0 = var3.onboardingPromptsRaw;
                var19 = var3.newOnboardingPrompts;
                var18 = var3.onboardingPromptsWithNewAnswers;
                var26 = var3.newAnswersCount;
                var17 = var3.onboardingPrompts;
                var10 = _closure1_slot3;
                var7 = var10.useEffect;
                var3 = new Array(3);
                var3[0] = var12;
                var3[1] = var11;
                var3[2] = var2;
                var2 = function() { // Environment: var1
                    _fun77361: for (var _fun77361_ip = 0;;) switch (_fun77361_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun77361_ip = 48;
                                continue _fun77361
                            }
                        case 16:
                            var4 = _closure1_slot11;
                            var3 = var4.shouldFetchPrompts;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun77361_ip = 45;
                                continue _fun77361
                            }
                        case 41:
                            var2 = _closure2_slot1;
                        case 45:
                            var1 = var2;
                        case 48:
                            if (!var1) {
                                _fun77361_ip = 91;
                                continue _fun77361
                            }
                        case 51:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchOnboardingPrompts;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 91:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var10)(var2, var3);
                var10 = _closure1_slot3;
                var7 = var10.useEffect;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function() { // Environment: var1
                    _fun77362: for (var _fun77362_ip = 0;;) switch (_fun77362_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun77362_ip = 17;
                                continue _fun77362
                            }
                        case 13:
                            var0 = undefined;
                            return var0;
                        case 17:
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 29;
                                var2 = var4[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var2);
                                var6 = var7.ackGuildFeature;
                                var3 = _closure2_slot0;
                                var2 = _closure1_slot15;
                                var5 = var2.GUILD_ONBOARDING_QUESTION;
                                var8 = _closure1_slot11;
                                var2 = var8.ackIdForGuild;
                                var2 = var2.bind(var8)(var3);
                                var2 = var6.bind(var7)(var3, var5, var2);
                                var2 = _closure1_slot1;
                                var1 = 30;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.updateOnboardingResponses;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                            };
                            return var0;
                    }
                };
                var2 = var7.bind(var10)(var2, var3);
                var7 = _closure1_slot3;
                var3 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function(arg0) { // Environment: var1
                    _fun77364: for (var _fun77364_ip = 0;;) switch (_fun77364_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.type;
                            var2 = _closure1_slot13;
                            var2 = var2.MULTIPLE_CHOICE;
                            if (!(var2 !== var3)) {
                                _fun77364_ip = 85;
                                continue _fun77364
                            }
                        case 25:
                            var2 = _closure1_slot13;
                            var2 = var2.DROPDOWN;
                            if (!(var2 !== var3)) {
                                _fun77364_ip = 43;
                                continue _fun77364
                            }
                        case 39:
                            var2 = undefined;
                            return var2;
                        case 43:
                            var6 = _closure1_slot16;
                            var5 = _closure1_slot27;
                            var4 = {};
                            var2 = _closure2_slot0;
                            var4.guildId = var2;
                            var4.prompt = var0;
                            var3 = var0.id;
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5, var4, var3);
                            return var2;
                        case 85:
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot28;
                            var2 = {};
                            var1 = _closure2_slot0;
                            var2.guildId = var1;
                            var2.prompt = var0;
                            var1 = var0.id;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                    }
                };
                var16 = var3.bind(var7)(var1, var2);
                var0 = var0.length;
                var10 = 0;
                if (!(var10 !== var0)) {
                    _fun77358_ip = 930;
                    continue _fun77358
                }
            case 310:
                var2 = _closure1_slot17;
                var1 = _closure1_slot6;
                var0 = {};
                var3 = var6.container;
                var0.style = var3;
                var3 = {};
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 13;
                var7 = var13[var7];
                var7 = var11.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var7 = var9 + var7;
                var3.paddingBottom = var7;
                var0.contentContainerStyle = var3;
                var3 = var19.length;
                var7 = var3 > var10;
                if (var7) {
                    _fun77358_ip = 396;
                    continue _fun77358
                }
            case 387:
                var3 = var18.length;
                var7 = var3 > var10;
            case 396:
                if (!var7) {
                    _fun77358_ip = 619;
                    continue _fun77358
                }
            case 402:
                var13 = _closure1_slot17;
                var11 = _closure1_slot18;
                var3 = {};
                var20 = _closure1_slot16;
                var22 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 20;
                var14 = var25[var14];
                var14 = var22.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var6.sheetTitle;
                var14.style = var21;
                var21 = 21;
                var23 = var25[var21];
                var23 = var22.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var21 = var25[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.t;
                var22 = var21.iB5Gqe;
                var21 = {};
                var25 = var19.length;
                var25 = var25 + var26;
                var21.count = var25;
                var21 = var23.bind(var24)(var22, var21);
                var14.children = var21;
                var15 = var20.bind(var4)(var15, var14);
                var14 = new Array(4);
                var14[0] = var15;
                var15 = var19.map;
                var15 = var15.bind(var19)(var16);
                var14[1] = var15;
                var15 = var18.map;
                var15 = var15.bind(var18)(var16);
                var14[2] = var15;
                var19 = _closure1_slot16;
                var18 = _closure1_slot4;
                var15 = {};
                var20 = var6.sectionSeparator;
                var15.style = var20;
                var15 = var19.bind(var4)(var18, var15);
                var14[3] = var15;
                var3.children = var14;
                var7 = var13.bind(var4)(var11, var3);
            case 619:
                var3 = new Array(3);
                var3[0] = var7;
                var7 = var17.length;
                var7 = var7 > var10;
                if (!var7) {
                    _fun77358_ip = 890;
                    continue _fun77358
                }
            case 642:
                var13 = _closure1_slot17;
                var11 = _closure1_slot18;
                var10 = {};
                var19 = _closure1_slot16;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var15 = 20;
                var14 = var24[var15];
                var14 = var23.bind(var4)(var14);
                var18 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var6.sheetTitle;
                var14.style = var20;
                var20 = 21;
                var21 = var24[var20];
                var21 = var23.bind(var4)(var21);
                var25 = var21.intl;
                var22 = var25.string;
                var21 = var24[var20];
                var21 = var23.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.BGkaer;
                var21 = var22.bind(var25)(var21);
                var14.children = var21;
                var18 = var19.bind(var4)(var18, var14);
                var14 = new Array(3);
                var14[0] = var18;
                var19 = _closure1_slot16;
                var15 = var24[var15];
                var15 = var23.bind(var4)(var15);
                var18 = var15.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var21 = var24[var20];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.r6Vm8T;
                var20 = var21.bind(var22)(var20);
                var15.children = var20;
                var15 = var19.bind(var4)(var18, var15);
                var14[1] = var15;
                var15 = var17.map;
                var15 = var15.bind(var17)(var16);
                var14[2] = var15;
                var10.children = var14;
                var7 = var13.bind(var4)(var11, var10);
            case 890:
                var3[1] = var7;
                var11 = _closure1_slot16;
                var10 = _closure1_slot25;
                var7 = {};
                var7.guildId = var12;
                var7 = var11.bind(var4)(var10, var7);
                var3[2] = var7;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun77358_ip = 1026;
                continue _fun77358;
            case 930:
                var3 = _closure1_slot16;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = var6.container;
                var1.style = var6;
                var6 = {};
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 13;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var7 = var9 + var7;
                var6.paddingBottom = var7;
                var1.contentContainerStyle = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot22;
                var5 = {};
                var5.setTab = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1026:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4693, 1410, 3901, 3172, 4644, 4540, 660, 1616, 4261, 33, 1297, 671, 4638, 3116, 3205, 566, 9779, 9780, 4832, 1234, 4539, 9781, 9782, 5536, 1568, 9788, 4643, 4531, 4647, 5727, 1417, 1304, 3110, 3677, 4050, 9789, 3237, 9791, 1307, 8233, 4858, 8617, 9792, 2]);