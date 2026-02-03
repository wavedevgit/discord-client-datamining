// modules/icymi/native/ICYMIMessageRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun104011: for (var _fun104011_ip = 0;;) switch (_fun104011_ip) {
            case 0:
                var2 = arg0;
                var13 = var2.message;
                var _closure2_slot0 = var13;
                var1 = var2.channel;
                var _closure2_slot1 = var1;
                var11 = var2.lineClamp;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun104011_ip = 38;
                    continue _fun104011
                }
            case 35:
                var11 = 3;
            case 38:
                var8 = var2.nested;
                if (!(var8 === var3)) {
                    _fun104011_ip = 50;
                    continue _fun104011
                }
            case 48:
                var8 = false;
            case 50:
                var18 = var2.visible;
                if (!(var18 === var3)) {
                    _fun104011_ip = 62;
                    continue _fun104011
                }
            case 60:
                var18 = false;
            case 62:
                var2 = _closure1_slot18;
                var10 = var2.bind(var3)();
                var7 = _closure1_slot3;
                var6 = var7.useContext;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 14;
                var5 = var4[var5];
                var5 = var2.bind(var3)(var5);
                var5 = var5.ICYMIContext;
                var15 = var6.bind(var7)(var5);
                var5 = 15;
                var5 = var4[var5];
                var7 = var2.bind(var3)(var5);
                var6 = var7.extractMediaSourcesFromMessage;
                var21 = var1.guild_id;
                var1 = 16;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var20 = var1.GRAVITY_VALID_EMBED_TYPES;
                var24 = var7;
                var23 = var13;
                var22 = var13;
                var5 = var24[var6](var23, var22, var21, var20, var19);
                var1 = 17;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot9;
                    var2 = var3.isChannelMuted;
                    var0 = _closure2_slot1;
                    var1 = var0.getGuildId;
                    var1 = var1.bind(var0)();
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var12 = var4.bind(var6)(var2, var1);
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var1 = var13.attachments;
                var1 = var1.length;
                var2 = new Array(3);
                var2[0] = var1;
                var1 = var13.content;
                var2[1] = var1;
                var1 = var13.embeds;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun104013: for (var _fun104013_ip = 0;;) switch (_fun104013_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.embeds;
                            var1 = var0.length;
                            var0 = 1;
                            var1 = var0 !== var1;
                            if (var1) {
                                _fun104013_ip = 49;
                                continue _fun104013
                            }
                        case 28:
                            var0 = _closure2_slot0;
                            var0 = var0.attachments;
                            var3 = var0.length;
                            var0 = 0;
                            var1 = var3 > var0;
                        case 49:
                            var0 = !var1;
                            if (var1) {
                                _fun104013_ip = 127;
                                continue _fun104013
                            }
                        case 55:
                            var1 = _closure2_slot0;
                            var1 = var1.embeds;
                            var4 = 0;
                            var1 = var1[var4];
                            var3 = var1.type;
                            var1 = _closure1_slot13;
                            var1 = var1.GIFV;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun104013_ip = 124;
                                continue _fun104013
                            }
                        case 96:
                            var2 = _closure2_slot0;
                            var3 = var2.embeds;
                            var3 = var3[var4];
                            var3 = var3.url;
                            var2 = var2.content;
                            var1 = var3 === var2;
                        case 124:
                            var0 = var1;
                        case 127:
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var1, var2);
                var2 = var13.attachments;
                var1 = var2.every;
                var0 = function(arg0) { // Environment: var0
                    _fun104014: for (var _fun104014_ip = 0;;) switch (_fun104014_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.content_type;
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun104014_ip = 37;
                                continue _fun104014
                            }
                        case 20:
                            var2 = var3.startsWith;
                            var1 = 'audio/';
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var14 = var1.bind(var2)(var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var10.messagePreview;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = null;
                if (var8) {
                    _fun104011_ip = 339;
                    continue _fun104011
                }
            case 323:
                var8 = {};
                var15 = var15.margin;
                var8.paddingLeft = var15;
                var7 = var8;
            case 339:
                var6[1] = var7;
                var0.style = var6;
                var6 = !var4;
                if (!var6) {
                    _fun104011_ip = 491;
                    continue _fun104011
                }
            case 356:
                var8 = _closure1_slot14;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 18;
                var4 = var15[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.MessageRowPreview;
                var4 = {};
                var4.message = var13;
                var4.muted = var12;
                var4.lineClamp = var11;
                var15 = var5.length;
                var16 = 0;
                var11 = undefined;
                if (!(var16 === var15)) {
                    _fun104011_ip = 464;
                    continue _fun104011
                }
            case 415:
                var15 = var13.attachments;
                var15 = var15.length;
                var15 = var15 > var16;
                var11 = undefined;
                if (!var15) {
                    _fun104011_ip = 464;
                    continue _fun104011
                }
            case 435:
                var15 = var13.embeds;
                var15 = var15.length;
                var11 = undefined;
                if (!(var16 === var15)) {
                    _fun104011_ip = 464;
                    continue _fun104011
                }
            case 452:
                var15 = {};
                var16 = true;
                var15.renderAttachments = var16;
                var11 = var15;
            case 464:
                var4.messageOptions = var11;
                var11 = 'none';
                if (!var14) {
                    _fun104011_ip = 480;
                    continue _fun104011
                }
            case 476:
                var11 = 'auto';
            case 480:
                var4.pointerEvents = var11;
                var6 = var8.bind(var3)(var7, var4);
            case 491:
                var4 = new Array(3);
                var4[0] = var6;
                var6 = var5.length;
                var7 = 0;
                var6 = var6 > var7;
                if (!var6) {
                    _fun104011_ip = 593;
                    continue _fun104011
                }
            case 513:
                var14 = _closure1_slot14;
                var11 = _closure1_slot4;
                var8 = {};
                var15 = var10.media;
                var8.style = var15;
                var17 = _closure1_slot14;
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 19;
                var15 = var19[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.message = var13;
                var15.visible = var18;
                var18 = 'message';
                var15.itemType = var18;
                var15 = var17.bind(var3)(var16, var15);
                var8.children = var15;
                var6 = var14.bind(var3)(var11, var8);
            case 593:
                var4[1] = var6;
                var5 = var5.length;
                var5 = var7 === var5;
                if (!var5) {
                    _fun104011_ip = 624;
                    continue _fun104011
                }
            case 609:
                var6 = var13.embeds;
                var6 = var6.length;
                var5 = var6 > var7;
            case 624:
                if (!var5) {
                    _fun104011_ip = 712;
                    continue _fun104011
                }
            case 627:
                var8 = _closure1_slot14;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.media;
                var6.style = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 18;
                var9 = var14[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.NonMediaEmbedsRowPreview;
                var9 = {};
                var9.message = var13;
                var9.muted = var12;
                var12 = 3;
                var9.lineClamp = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 712:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var0 = function arg0() {
        _fun104015: for (var _fun104015_ip = 0;;) switch (_fun104015_ip) {
            case 0:
                var1 = arg0;
                var22 = var1.message;
                var _closure2_slot0 = var22;
                var21 = var1.channel;
                var20 = var1.guild;
                var _closure2_slot1 = var20;
                var1 = _closure1_slot18;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var6 = _closure1_slot3;
                var5 = var6.useContext;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var18 = 14;
                var1 = var3[var18];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ICYMIContext;
                var19 = var5.bind(var6)(var1);
                var1 = 17;
                var5 = var3[var1];
                var8 = var2.bind(var4)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var0.author;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var31 = var7.bind(var8)(var6, var5);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = var3.getMember;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var0 = _closure2_slot0;
                    var0 = var0.author;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = null;
                var2 = var0 == var1;
                var28 = undefined;
                if (var2) {
                    _fun104015_ip = 180;
                    continue _fun104015
                }
            case 174:
                var28 = var1.colorString;
            case 180:
                if (!(var0 == var28)) {
                    _fun104015_ip = 188;
                    continue _fun104015
                }
            case 184:
                var28 = _closure1_slot12;
            case 188:
                var3 = _closure1_slot3;
                var2 = var3.useContext;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var18];
                var1 = var5.bind(var4)(var1);
                var1 = var1.ICYMIContext;
                var1 = var2.bind(var3)(var1);
                var25 = var1.width;
                var1 = var0 == var31;
                var0 = null;
                if (var1) {
                    _fun104015_ip = 843;
                    continue _fun104015
                }
            case 243:
                var3 = _closure1_slot15;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var9.replyPreview;
                var1.style = var5;
                var7 = _closure1_slot14;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var13 = 20;
                var5 = var14[var13];
                var5 = var15.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var8 = {};
                var10 = 'italic';
                var8.fontStyle = var10;
                var5.style = var8;
                var8 = 21;
                var10 = var14[var8];
                var10 = var15.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var14[var8];
                var8 = var15.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.mPPcez;
                var8 = var10.bind(var11)(var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot15;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var9.replyInner;
                var6.style = var9;
                var11 = _closure1_slot14;
                var10 = _closure1_slot1;
                var12 = 22;
                var9 = var14[var12];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var16 = false;
                var9.animate = var16;
                var16 = var20.id;
                var9.guildId = var16;
                var9.user = var31;
                var12 = var14[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.SMALL;
                var9.size = var12;
                var10 = var11.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot15;
                var11 = _closure1_slot4;
                var10 = {};
                var16 = {};
                var23 = 4;
                var16.gap = var23;
                var23 = var19.inset;
                var26 = var25 - var23;
                var23 = _closure1_slot11;
                var24 = 2;
                var23 = var24 * var23;
                var26 = var26 - var23;
                var23 = _closure1_slot16;
                var23 = var24 * var23;
                var27 = _closure1_slot17;
                var23 = var26 - var23;
                var26 = 30;
                var23 = var23 - var26;
                var23 = var23 - var27;
                var23 = var23 - var24;
                var16.width = var23;
                var10.style = var16;
                var23 = _closure1_slot14;
                var13 = var14[var13];
                var13 = var15.bind(var4)(var13);
                var16 = var13.Text;
                var13 = {
                    'variant': 'text-md/semibold',
                    'style': null,
                    'lineClamp': 1
                };
                var27 = {};
                var27.color = var28;
                var13.style = var27;
                var27 = 23;
                var27 = var14[var27];
                var30 = var15.bind(var4)(var27);
                var29 = var30.getName;
                var28 = var20.id;
                var27 = var21.id;
                var27 = var29.bind(var30)(var28, var27, var31);
                var13.children = var27;
                var16 = var23.bind(var4)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var16 = _closure1_slot14;
                var14 = var14[var18];
                var14 = var15.bind(var4)(var14);
                var14 = var14.ICYMIContext;
                var15 = var14.Provider;
                var14 = {};
                var18 = {};
                var23 = _closure1_slot16;
                var23 = var24 * var23;
                var23 = var25 - var23;
                var25 = _closure1_slot17;
                var23 = var23 - var26;
                var23 = var23 - var25;
                var23 = var23 - var24;
                var18.width = var23;
                var23 = var19.margin;
                var18.margin = var23;
                var19 = var19.inset;
                var18.inset = var19;
                var14.value = var18;
                var19 = _closure1_slot14;
                var18 = _closure1_slot20;
                var17 = {};
                var17.message = var22;
                var17.channel = var21;
                var17.guild = var20;
                var20 = true;
                var17.nested = var20;
                var17 = var19.bind(var4)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 843:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var8 = var4.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ITEM_PADDING;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot12 = var9;
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot14 = var9;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 11;
    var9 = var6[var4];
    var9 = var7.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var _closure1_slot16 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_8;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var7 = var9.createICYMIStyles;
    var4 = function(arg0) { // Environment: var3
        _fun104018: for (var _fun104018_ip = 0;;) switch (_fun104018_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {};
                var8 = 1;
                var1.flex = var8;
                var3 = var2.inset;
                var1.paddingLeft = var3;
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 11;
                var3 = var9[var6];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var1.gap = var3;
                var0.pressable = var1;
                var1 = {};
                var4 = _closure1_slot0;
                var3 = 13;
                var3 = var9[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.isAndroid;
                var4 = var3.bind(var4)();
                var9 = 0;
                var3 = 0;
                if (!var4) {
                    _fun104018_ip = 111;
                    continue _fun104018
                }
            case 105:
                var3 = -2;
            case 111:
                var1.marginTop = var3;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var10 = var3[var6];
                var10 = var4.bind(var5)(var10);
                var10 = var10.radii;
                var10 = var10.md;
                var1.borderRadius = var10;
                var1.gap = var9;
                var0.messagePreview = var1;
                var1 = {};
                var9 = var3[var6];
                var9 = var4.bind(var5)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_8;
                var1.gap = var9;
                var9 = var2.margin;
                var1.marginHorizontal = var9;
                var9 = _closure1_slot16;
                var1.padding = var9;
                var9 = 'hidden';
                var1.overflow = var9;
                var1.borderWidth = var8;
                var8 = var3[var6];
                var8 = var4.bind(var5)(var8);
                var8 = var8.colors;
                var8 = var8.BORDER_SUBTLE;
                var1.borderColor = var8;
                var8 = var3[var6];
                var8 = var4.bind(var5)(var8);
                var8 = var8.radii;
                var8 = var8.lg;
                var1.borderRadius = var8;
                var8 = 132;
                var1.maxHeight = var8;
                var0.replyPreview = var1;
                var1 = {
                    'flexDirection': 'row',
                    'gap': null,
                    'overflow': 'hidden'
                };
                var7 = _closure1_slot17;
                var1.gap = var7;
                var0.replyInner = var1;
                var1 = {};
                var7 = var2.inset;
                var1.paddingLeft = var7;
                var7 = var2.margin;
                var1.paddingBottom = var7;
                var0.afterMessage = var1;
                var1 = {};
                var7 = var2.margin;
                var1.marginRight = var7;
                var0.media = var1;
                var1 = {};
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_8;
                var1.marginTop = var7;
                var7 = var2.margin;
                var1.marginBottom = var7;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.spacing;
                var3 = var3.PX_8;
                var1.gap = var3;
                var3 = var2.margin;
                var1.paddingHorizontal = var3;
                var2 = var2.inset;
                var1.marginLeft = var2;
                var0.footer = var1;
                return var0;
        }
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var3
        _fun104019: for (var _fun104019_ip = 0;;) switch (_fun104019_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.message;
                var _closure2_slot0 = var12;
                var14 = var1.channel;
                var _closure2_slot1 = var14;
                var13 = var1.guild;
                var _closure2_slot2 = var13;
                var19 = var1.visible;
                var6 = var1.messageContext;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot9;
                    var2 = var3.isChannelMuted;
                    var0 = _closure2_slot1;
                    var1 = var0.getGuildId;
                    var1 = var1.bind(var0)();
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var10 = null;
                var2 = var10 == var13;
                var1 = undefined;
                if (var2) {
                    _fun104019_ip = 124;
                    continue _fun104019
                }
            case 119:
                var1 = var13.id;
            case 124:
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var12.author;
                var1 = var1.id;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun104021: for (var _fun104021_ip = 0;;) switch (_fun104021_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var5 = null;
                            var3 = var5 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun104021_ip = 29;
                                continue _fun104021
                            }
                        case 20:
                            var3 = _closure2_slot2;
                            var2 = var3.id;
                        case 29:
                            if (!(var5 != var2)) {
                                _fun104021_ip = 105;
                                continue _fun104021
                            }
                        case 33:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 24;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.requestMembersById;
                            var2 = _closure2_slot2;
                            var5 = var5 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun104021_ip = 84;
                                continue _fun104021
                            }
                        case 75:
                            var5 = _closure2_slot2;
                            var2 = var5.id;
                        case 84:
                            var1 = _closure2_slot0;
                            var1 = var1.author;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                        case 105:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var4 = 25;
                var1 = var1[var4];
                var7 = var2.bind(var3)(var1);
                var5 = var7.useICYMIMessage;
                var2 = var14.id;
                var9 = var10 == var6;
                var1 = undefined;
                if (var9) {
                    _fun104019_ip = 206;
                    continue _fun104019
                }
            case 200:
                var1 = var6.reply_message_id;
            case 206:
                var18 = var5.bind(var7)(var2, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useICYMIMessage;
                var2 = var14.id;
                var7 = var10 == var6;
                var1 = undefined;
                if (var7) {
                    _fun104019_ip = 255;
                    continue _fun104019
                }
            case 249:
                var1 = var6.before_message_id;
            case 255:
                var20 = var4.bind(var5)(var2, var1);
                var1 = _closure1_slot18;
                var9 = var1.bind(var3)();
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var1 = var14.id;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var12;
                var1 = function() { // Environment: var0
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var1 = var4[var3];
                    var0 = undefined;
                    var11 = var5.bind(var0)(var1);
                    var10 = var11.itemInteracted;
                    var8 = _closure2_slot0;
                    var9 = var8.id;
                    var7 = 'message';
                    var6 = 'long_press_channel';
                    var6 = var10.bind(var11)(var9, var7, var6);
                    var3 = var4[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.feedItemActioned;
                    var3 = {};
                    var8 = var8.id;
                    var3.itemId = var8;
                    var3.itemType = var7;
                    var7 = {
                        'actionGestureType': 'long_press',
                        'actionTargetElement': 'item_header',
                        'actionIntentType': 'open',
                        'actionDestinationType': null
                    };
                    var3.actionParameters = var7;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 27;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                var6 = _closure1_slot3;
                var5 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var12;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var4 = var3[var1];
                    var0 = undefined;
                    var11 = var2.bind(var0)(var4);
                    var10 = var11.itemInteracted;
                    var4 = _closure2_slot0;
                    var9 = var4.id;
                    var8 = 'message';
                    var7 = 'long_press_message';
                    var7 = var10.bind(var11)(var9, var8, var7);
                    var1 = var3[var1];
                    var7 = var2.bind(var0)(var1);
                    var2 = var7.feedItemActioned;
                    var1 = {};
                    var9 = var4.id;
                    var1.itemId = var9;
                    var1.itemType = var8;
                    var8 = {
                        'actionGestureType': 'long_press',
                        'actionTargetElement': 'item_body',
                        'actionIntentType': 'open',
                        'actionDestinationType': null
                    };
                    var1.actionParameters = var8;
                    var1 = var2.bind(var7)(var1);
                    var2 = _closure1_slot0;
                    var1 = 28;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showLongPressMessageActionSheet;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.channel = var6;
                    var1.message = var4;
                    var6 = _closure1_slot10;
                    var5 = var6.getUser;
                    var4 = var4.author;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var1.user = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var5.bind(var6)(var1, var2);
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var6 = var14.id;
                var1 = new Array(3);
                var1[0] = var6;
                var6 = var13.id;
                var1[1] = var6;
                var6 = var12.id;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 26;
                    var1 = var5[var4];
                    var0 = undefined;
                    var11 = var6.bind(var0)(var1);
                    var10 = var11.itemInteracted;
                    var1 = _closure2_slot0;
                    var9 = var1.id;
                    var8 = 'message';
                    var7 = 'press_message';
                    var7 = var10.bind(var11)(var9, var8, var7);
                    var4 = var5[var4];
                    var7 = var6.bind(var0)(var4);
                    var6 = var7.feedItemActioned;
                    var4 = {};
                    var9 = var1.id;
                    var4.itemId = var9;
                    var4.itemType = var8;
                    var8 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'item_container',
                        'actionIntentType': 'navigate',
                        'actionDestinationType': 'channel'
                    };
                    var4.actionParameters = var8;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure1_slot0;
                    var3 = 29;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.navigateToPost;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var21 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot15;
                var22 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 30;
                var0 = var16[var0];
                var1 = var22.bind(var3)(var0);
                var0 = {};
                var15 = _closure1_slot0;
                var5 = 21;
                var6 = var16[var5];
                var6 = var15.bind(var3)(var6);
                var11 = var6.intl;
                var6 = var11.string;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.hMFMY9;
                var5 = var6.bind(var11)(var5);
                var0.actionLabel = var5;
                var5 = var12.id;
                var0.id = var5;
                var11 = 'message';
                var0.interactionType = var11;
                var5 = var14.id;
                var0.channelId = var5;
                var5 = 31;
                var5 = var16[var5];
                var23 = var22.bind(var3)(var5);
                var6 = var23.extractTimestamp;
                var5 = var12.id;
                var5 = var6.bind(var23)(var5);
                var0.timestamp = var5;
                var0.onHeaderPress = var21;
                var0.onHeaderLongPress = var4;
                var0.message = var12;
                var4 = true;
                var0.shouldFeatureUser = var4;
                var6 = _closure1_slot15;
                var4 = 32;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.PressableHighlight;
                var4 = {};
                var4.onPress = var21;
                var4.onLongPress = var7;
                var7 = 130;
                var4.unstable_pressDelay = var7;
                var7 = 'button';
                var4.accessibilityRole = var7;
                var7 = 33;
                var21 = var16[var7];
                var22 = var22.bind(var3)(var21);
                var21 = {};
                var21.channel = var14;
                var21 = var22.bind(var3)(var21);
                var4.accessibilityLabel = var21;
                var7 = var16[var7];
                var16 = var15.bind(var3)(var7);
                var15 = var16.getChannelA11yHint;
                var7 = {};
                var7.channel = var14;
                var7.muted = var17;
                var7 = var15.bind(var16)(var7);
                var4.accessibilityHint = var7;
                var7 = var9.pressable;
                var4.style = var7;
                var7 = var10 != var20;
                var15 = null;
                if (!var7) {
                    _fun104019_ip = 724;
                    continue _fun104019
                }
            case 691:
                var17 = _closure1_slot14;
                var16 = _closure1_slot20;
                var7 = {};
                var7.message = var20;
                var7.channel = var14;
                var7.guild = var13;
                var7.visible = var19;
                var15 = var17.bind(var3)(var16, var7);
            case 724:
                var7 = new Array(3);
                var7[0] = var15;
                var17 = _closure1_slot14;
                var16 = _closure1_slot20;
                var15 = {};
                var15.message = var12;
                var15.channel = var14;
                var15.guild = var13;
                var15.visible = var19;
                var15 = var17.bind(var3)(var16, var15);
                var7[1] = var15;
                var15 = var10 != var18;
                var10 = null;
                if (!var15) {
                    _fun104019_ip = 806;
                    continue _fun104019
                }
            case 778:
                var17 = _closure1_slot14;
                var16 = _closure1_slot21;
                var15 = {};
                var15.message = var18;
                var15.channel = var14;
                var15.guild = var13;
                var10 = var17.bind(var3)(var16, var15);
            case 806:
                var7[2] = var10;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot14;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.footer;
                var5.style = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 34;
                var8 = var15[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.message = var12;
                var8.channel = var14;
                var8.guild = var13;
                var13 = 'base';
                var8.backgroundVariant = var13;
                var12 = var12.id;
                var8.id = var12;
                var8.itemType = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIMessageRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun104025: for (var _fun104025_ip = 0;;) switch (_fun104025_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.message;
                var6 = var1.messageContext;
                var5 = var1.visible;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 25;
                var2 = var10[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var2 = var7.useGravityMessage;
                var9 = var2.bind(var7)(var8);
                var _closure2_slot0 = var9;
                var2 = 17;
                var7 = var10[var2];
                var12 = var3.bind(var4)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var3 = _closure2_slot0;
                    var0 = var3.getChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var11.bind(var12)(var8, var7);
                var _closure2_slot1 = var8;
                var7 = var10[var2];
                var13 = var3.bind(var4)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var0
                    _fun104027: for (var _fun104027_ip = 0;;) switch (_fun104027_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun104027_ip = 39;
                                continue _fun104027
                            }
                        case 30:
                            var3 = _closure2_slot1;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var7 = var12.bind(var13)(var11, var7);
                var2 = var10[var2];
                var10 = var3.bind(var4)(var2);
                var3 = var10.useStateFromStores;
                var11 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.isBlockedOrIgnored;
                    var0 = _closure2_slot0;
                    var0 = var0.author;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var10)(var2, var0);
                var3 = null;
                var10 = var3 == var8;
                var0 = null;
                if (var10) {
                    _fun104025_ip = 249;
                    continue _fun104025
                }
            case 197:
                var10 = var3 == var7;
                var0 = null;
                if (var10) {
                    _fun104025_ip = 249;
                    continue _fun104025
                }
            case 206:
                var0 = null;
                if (var2) {
                    _fun104025_ip = 249;
                    continue _fun104025
                }
            case 211:
                var3 = _closure1_slot14;
                var2 = _closure1_slot19;
                var1 = {};
                var1.message = var9;
                var1.channel = var8;
                var1.guild = var7;
                var1.messageContext = var6;
                var1.visible = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 249:
                return var0;
        }
    };
    var2.default = var3;
    var2.MessageRowContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1681, 1410, 3100, 4303, 1621, 13566, 660, 33, 671, 13528, 478, 13529, 8856, 6621, 566, 13572, 13573, 3941, 1234, 5452, 3961, 4679, 8884, 8885, 9110, 9930, 13567, 13569, 21, 4902, 7875, 13575, 2]);