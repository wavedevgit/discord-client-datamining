// components_native/warnings/GatedContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'padding': 20,
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'textAlign': 'center'
    };
    var9 = 'center';
    var10 = 3;
    var11 = var5[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var0)(var11);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.container = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.title = var8;
    var8 = {
        'width': 300,
        'height': 200,
        'resizeMode': 'contain'
    };
    var3.emptyImage = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.emptyTitle = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var8 = {
        'marginBottom': 8,
        'marginHorizontal': 4,
        'alignItems': 'center',
        'flexGrow': 0
    };
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/warnings/GatedContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91305: for (var _fun91305_ip = 0;;) switch (_fun91305_ip) {
            case 0:
                var2 = arg0;
                var22 = var2.title;
                var20 = var2.description;
                var15 = var2.agreement;
                var17 = var2.agreementButtonVariant;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun91305_ip = 39;
                    continue _fun91305
                }
            case 35:
                var17 = 'primary';
            case 39:
                var12 = var2.disagreement;
                var13 = var2.disagreementButtonVariant;
                if (!(var13 === var3)) {
                    _fun91305_ip = 61;
                    continue _fun91305
                }
            case 57:
                var13 = 'secondary';
            case 61:
                var10 = var2.onAgree;
                var _closure2_slot0 = var10;
                var1 = var2.onDisagree;
                var _closure2_slot1 = var1;
                var7 = var2.modalType;
                var _closure2_slot2 = var7;
                var6 = var2.channelId;
                var _closure2_slot3 = var6;
                var5 = var2.guildId;
                var _closure2_slot4 = var5;
                var2 = _closure1_slot5;
                var21 = var2.bind(var3)();
                var4 = _closure1_slot2;
                var11 = var4.useEffect;
                var9 = new Array(3);
                var9[0] = var7;
                var9[1] = var6;
                var9[2] = var5;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.trackNsfwSpaceWarningModalViewed;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var2 = var11.bind(var4)(var2, var9);
                var9 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var1;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() { // Environment: var0
                    _fun91307: for (var _fun91307_ip = 0;;) switch (_fun91307_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 4;
                            var4 = var3[var1];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var4);
                            var6 = var7.trackNsfwSpaceWarningModalClicked;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.NsfwSpaceWarningModalCta;
                            var11 = var1.NSFW_CHANNEL_DISAGREE_CTA;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var8 = _closure2_slot4;
                            var12 = var7;
                            var2 = var12[var6](var11, var10, var9, var8, var7);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun91307_ip = 92;
                                continue _fun91307
                            }
                        case 84:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 92:
                            return var0;
                    }
                };
                var11 = var9.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(4);
                var1[0] = var10;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun91308: for (var _fun91308_ip = 0;;) switch (_fun91308_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 4;
                            var4 = var3[var1];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var4);
                            var6 = var7.trackNsfwSpaceWarningModalClicked;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.NsfwSpaceWarningModalCta;
                            var11 = var1.NSFW_CHANNEL_AGREE_CTA;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var8 = _closure2_slot4;
                            var12 = var7;
                            var2 = var12[var6](var11, var10, var9, var8, var7);
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun91308_ip = 92;
                                continue _fun91308
                            }
                        case 84:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)();
                        case 92:
                            return var0;
                    }
                };
                var16 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 5;
                var0 = var7[var4];
                var0 = var6.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var5 = 16;
                var0.spacing = var5;
                var5 = var21.container;
                var0.style = var5;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var9 = 'center';
                var4.align = var9;
                var19 = _closure1_slot3;
                var14 = 6;
                var9 = var7[var14];
                var9 = var6.bind(var3)(var9);
                var18 = var9.Text;
                var9 = {
                    'variant': 'heading-xxl/bold',
                    'maxFontSizeMultiplier': 2
                };
                var23 = var21.title;
                var9.style = var23;
                var9.children = var22;
                var18 = var19.bind(var3)(var18, var9);
                var9 = new Array(2);
                var9[0] = var18;
                var14 = var7[var14];
                var14 = var6.bind(var3)(var14);
                var18 = var14.Text;
                var14 = {
                    'color': 'text-muted',
                    'variant': 'text-md/medium',
                    'style': null,
                    'maxFontSizeMultiplier': 2
                };
                var21 = var21.description;
                var14.style = var21;
                var14.children = var20;
                var14 = var19.bind(var3)(var18, var14);
                var9[1] = var14;
                var4.children = var9;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 7;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ButtonGroup;
                var5 = {};
                var7 = null;
                var9 = var7 != var15;
                if (!var9) {
                    _fun91305_ip = 474;
                    continue _fun91305
                }
            case 470:
                var9 = var7 != var10;
            case 474:
                if (!var9) {
                    _fun91305_ip = 527;
                    continue _fun91305
                }
            case 477:
                var14 = _closure1_slot3;
                var10 = _closure1_slot0;
                var18 = _closure1_slot1;
                var7 = 8;
                var7 = var18[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Button;
                var7 = {};
                var7.variant = var17;
                var7.onPress = var16;
                var7.text = var15;
                var9 = var14.bind(var3)(var10, var7);
            case 527:
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot3;
                var9 = _closure1_slot0;
                var14 = _closure1_slot1;
                var8 = 8;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var8.variant = var13;
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4556, 4081, 3943, 6467, 4085, 2]);