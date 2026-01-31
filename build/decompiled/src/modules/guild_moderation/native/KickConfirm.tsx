// modules/guild_moderation/native/KickConfirm.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot5 = var7;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.jsxs;
    var _closure1_slot11 = var7;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var3.container = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingBottom = var12;
    var12 = 'center';
    var9.alignItems = var12;
    var3.iconLabelBlock = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var13 = var12.PX_96;
    var12 = 1.25;
    var12 = var12 * var13;
    var9.height = var12;
    var3.iconStyles = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.marginBottom = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_CRITICAL;
    var9.color = var12;
    var3.redText = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginVertical = var12;
    var3.blurb = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginBottom = var10;
    var3.errorText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: KickConfirm, environment: var1
        _fun79116: for (var _fun79116_ip = 0;;) switch (_fun79116_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var1 = var0.userId;
                var _closure2_slot1 = var1;
                var0 = var0.onKick;
                var _closure2_slot2 = var0;
                var1 = _closure1_slot13;
                var4 = undefined;
                var15 = var1.bind(var4)();
                var3 = _closure1_slot4;
                var1 = var3.useRef;
                var9 = null;
                var5 = var1.bind(var3)(var9);
                var1 = var3.useRef;
                var26 = var1.bind(var3)(var9);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var6 = var2.bind(var4)(var1);
                var1 = {};
                var8 = true;
                var1.includeKeyboardHeight = var8;
                var1 = var6.bind(var4)(var1);
                var6 = var1.insets;
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.insets = var6;
                var10 = {};
                var10.ref = var26;
                var8 = {};
                var11 = 'toBottom';
                var8.type = var11;
                var10.offset = var8;
                var8 = new Array(1);
                var8[0] = var10;
                var1.inputs = var8;
                var1.scrollViewRef = var5;
                var1 = var2.bind(var4)(var1);
                var2 = _closure1_slot0;
                var1 = 10;
                var8 = var7[var1];
                var12 = var2.bind(var4)(var8);
                var11 = var12.useStateFromStores;
                var8 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var8;
                var8 = function() { // Environment: var24
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var28 = var11.bind(var12)(var10, var8);
                var _closure2_slot3 = var28;
                var1 = var7[var1];
                var8 = var2.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var24
                    var2 = _closure1_slot9;
                    var1 = var2.getUser;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var7.bind(var8)(var2, var1);
                var _closure2_slot4 = var19;
                var2 = var3.useRef;
                var1 = '';
                var1 = var2.bind(var3)(var1);
                var _closure2_slot5 = var1;
                var2 = var3.useState;
                var1 = function() { // Environment: var24
                    var0 = {
                        'kicking': false,
                        'kickError': false
                    };
                    return var0;
                };
                var7 = var2.bind(var3)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var4)(var7, var1);
                var1 = 0;
                var11 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot6 = var1;
                var2 = var3.useCallback;
                var1 = new Array(3);
                var1[0] = var28;
                var1[1] = var0;
                var1[2] = var19;
                var0 = function() { // Environment: var24
                    _fun79120: for (var _fun79120_ip = 0;;) switch (_fun79120_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var6 = null;
                            var1 = var6 != var1;
                            if (!var1) {
                                _fun79120_ip = 24;
                                continue _fun79120
                            }
                        case 16:
                            var2 = _closure2_slot4;
                            var1 = var6 != var2;
                        case 24:
                            if (!var1) {
                                _fun79120_ip = 178;
                                continue _fun79120
                            }
                        case 30:
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var1 = {
                                'kicking': true,
                                'kickError': false
                            };
                            var1 = var3.bind(var2)(var1);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var1 = var4[var1];
                            var5 = var3.bind(var2)(var1);
                            var4 = var5.kickUser;
                            var1 = _closure2_slot3;
                            var1 = var6 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun79120_ip = 106;
                                continue _fun79120
                            }
                        case 97:
                            var1 = _closure2_slot3;
                            var3 = var1.id;
                        case 106:
                            var1 = _closure2_slot4;
                            var1 = var6 == var1;
                            var2 = undefined;
                            if (var1) {
                                _fun79120_ip = 128;
                                continue _fun79120
                            }
                        case 119:
                            var1 = _closure2_slot4;
                            var2 = var1.id;
                        case 128:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var2 = var4.bind(var5)(var3, var2, var1);
                            var1 = var2.then;
                            var0 = _closure2_slot2;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.catch;
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot6;
                                var0 = undefined;
                                var1 = {
                                    'kicking': false,
                                    'kickError': true
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 178:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var2.bind(var3)(var0, var1);
                var1 = var9 != var19;
                var0 = null;
                if (!var1) {
                    _fun79116_ip = 1331;
                    continue _fun79116
                }
            case 381:
                var1 = var9 != var28;
                var0 = null;
                if (!var1) {
                    _fun79116_ip = 1331;
                    continue _fun79116
                }
            case 393:
                var3 = _closure1_slot10;
                var2 = _closure1_slot7;
                var1 = {};
                var7 = var15.container;
                var1.style = var7;
                var1.ref = var5;
                var5 = {};
                var23 = _closure1_slot1;
                var22 = _closure1_slot2;
                var17 = 7;
                var7 = var22[var17];
                var7 = var23.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_24;
                var5.paddingHorizontal = var7;
                var6 = var6.bottom;
                var5.paddingBottom = var6;
                var1.contentContainerStyle = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot12;
                var5 = {};
                var14 = _closure1_slot6;
                var8 = {};
                var10 = var15.iconLabelBlock;
                var8.style = var10;
                var12 = _closure1_slot5;
                var10 = {};
                var13 = var15.iconStyles;
                var10.style = var13;
                var13 = 12;
                var13 = var22[var13];
                var13 = var23.bind(var4)(var13);
                var10.source = var13;
                var13 = 'contain';
                var10.resizeMode = var13;
                var10 = var3.bind(var4)(var12, var10);
                var12 = new Array(3);
                var12[0] = var10;
                var25 = _closure1_slot0;
                var10 = 13;
                var13 = var22[var10];
                var13 = var25.bind(var4)(var13);
                var27 = var13.Text;
                var16 = {};
                var13 = var15.redText;
                var16.style = var13;
                var13 = 'text-md/semibold';
                var16.variant = var13;
                var13 = 14;
                var20 = var22[var13];
                var20 = var25.bind(var4)(var20);
                var32 = var20.intl;
                var31 = var32.formatToPlainString;
                var20 = var22[var13];
                var20 = var25.bind(var4)(var20);
                var20 = var20.t;
                var30 = var20["1Ie87p"];
                var29 = {};
                var20 = 15;
                var33 = var22[var20];
                var34 = var23.bind(var4)(var33);
                var33 = var34.getName;
                var33 = var33.bind(var34)(var19);
                var29.user = var33;
                var29 = var31.bind(var32)(var30, var29);
                var16.children = var29;
                var16 = var3.bind(var4)(var27, var16);
                var12[1] = var16;
                var16 = var22[var10];
                var16 = var25.bind(var4)(var16);
                var27 = var16.Text;
                var16 = {
                    'variant': 'text-lg/bold',
                    'color': 'text-feedback-warning'
                };
                var28 = var28.name;
                var16.children = var28;
                var16 = var3.bind(var4)(var27, var16);
                var12[2] = var16;
                var8.children = var12;
                var12 = var7.bind(var4)(var14, var8);
                var8 = new Array(5);
                var8[0] = var12;
                var12 = var22[var10];
                var12 = var25.bind(var4)(var12);
                var16 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'heading-md/normal',
                    'color': 'text-feedback-warning'
                };
                var27 = var15.blurb;
                var12.style = var27;
                var27 = var22[var13];
                var27 = var25.bind(var4)(var27);
                var30 = var27.intl;
                var29 = var30.format;
                var27 = var22[var13];
                var27 = var25.bind(var4)(var27);
                var27 = var27.t;
                var28 = var27["/yH0UT"];
                var27 = {};
                var31 = var22[var20];
                var32 = var23.bind(var4)(var31);
                var31 = var32.getName;
                var31 = var31.bind(var32)(var19);
                var27.user = var31;
                var27 = var29.bind(var30)(var28, var27);
                var12.children = var27;
                var12 = var3.bind(var4)(var16, var12);
                var8[1] = var12;
                var12 = 16;
                var12 = var22[var12];
                var12 = var25.bind(var4)(var12);
                var16 = var12.TextArea;
                var12 = {};
                var12.ref = var26;
                var26 = {};
                var27 = var22[var17];
                var27 = var23.bind(var4)(var27);
                var27 = var27.spacing;
                var27 = var27.PX_16;
                var26.marginBottom = var27;
                var12.containerStyle = var26;
                var26 = var22[var13];
                var26 = var25.bind(var4)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var22[var13];
                var26 = var25.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26["+2QEPt"];
                var26 = var27.bind(var28)(var26);
                var12.label = var26;
                var26 = 512;
                var12.maxLength = var26;
                var24 = function(arg0) { // Original name: onChange, environment: var24
                    var1 = _closure2_slot5;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var12.onChange = var24;
                var12 = var3.bind(var4)(var16, var12);
                var8[2] = var12;
                var12 = {};
                var16 = {};
                var17 = var22[var17];
                var17 = var23.bind(var4)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_16;
                var16.marginBottom = var17;
                var12.style = var16;
                var16 = 17;
                var16 = var22[var16];
                var16 = var25.bind(var4)(var16);
                var17 = var16.Button;
                var16 = {};
                var23 = 'destructive';
                var16.variant = var23;
                var23 = var22[var13];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var13];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["3glT6Z"];
                var22 = var23.bind(var24)(var22);
                var16.text = var22;
                var16.onPress = var21;
                var21 = var11.kicking;
                var16.disabled = var21;
                var16 = var3.bind(var4)(var17, var16);
                var12.children = var16;
                var12 = var3.bind(var4)(var14, var12);
                var8[3] = var12;
                var11 = var11.kickError;
                var9 = null;
                if (!var11) {
                    _fun79116_ip = 1307;
                    continue _fun79116
                }
            case 1168:
                var12 = _closure1_slot10;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = var17[var10];
                var10 = var14.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'input-text-error-default'
                };
                var15 = var15.errorText;
                var10.style = var15;
                var15 = var17[var13];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var17[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.t;
                var14 = var13.UktD5J;
                var13 = {};
                var18 = _closure1_slot1;
                var17 = var17[var20];
                var18 = var18.bind(var4)(var17);
                var17 = var18.getName;
                var17 = var17.bind(var18)(var19);
                var13.user = var17;
                var13 = var15.bind(var16)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 1307:
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1331:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_moderation/native/KickConfirm.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 1613, 33, 1297, 671, 4856, 9559, 566, 4642, 10021, 3900, 1234, 3195, 5350, 4043, 2]);