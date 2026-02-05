// modules/contact_sync/native/components/ContactSyncNameInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var13 = 0;
    var3 = var5[var13];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var3.flex = var9;
    var6.flex = var3;
    var14 = 16;
    var3 = {
        'flex': 1,
        'padding': 16,
        'paddingBottom': 0
    };
    var6.content = var3;
    var10 = 8;
    var3 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var6.title = var3;
    var3 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'marginBottom': 16
    };
    var6.subtitle = var3;
    var9 = {
        'width': '100%',
        'marginTop': 8,
        'marginBottom': 12,
        'padding': 12
    };
    var3 = 12;
    var11 = 5;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var15;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9.borderRadius = var15;
    var6.input = var9;
    var9 = {};
    var9.lineHeight = var14;
    var6.formSubtitle = var9;
    var9 = {};
    var9.flexGrow = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingTop = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9.paddingBottom = var11;
    var6.button = var9;
    var9 = {};
    var9.marginTop = var10;
    var6.error = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/ContactSyncNameInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81220: for (var _fun81220_ip = 0;;) switch (_fun81220_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.loading;
                var8 = var0.error;
                var4 = var0.initialName;
                var13 = var0.prefilledFromContactBook;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun81220_ip = 36;
                    continue _fun81220
                }
            case 34:
                var13 = false;
            case 36:
                var1 = var0.onNext;
                var _closure2_slot0 = var1;
                var0 = var0.onRemoveName;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var4 = var1.bind(var2)(var4);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var16 = var2[var1];
                _closure2_slot2 = var16;
                var1 = 1;
                var25 = var2[var1];
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var21 = true;
                var1.includeKeyboardHeight = var21;
                var1 = var2.bind(var3)(var1);
                var11 = var1.insets;
                var6 = null;
                var7 = var6 != var0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var19 = 7;
                var1 = var0[var19];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var19];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                if (var7) {
                    _fun81220_ip = 221;
                    continue _fun81220
                }
            case 208:
                var4 = var0.PDTjLN;
                var17 = var1.bind(var2)(var4);
                _fun81220_ip = 232;
                continue _fun81220;
            case 221:
                var0 = var0.i4jeWR;
                var17 = var1.bind(var2)(var0);
            case 232:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var10 = var9.content;
                var4 = new Array(2);
                var4[0] = var10;
                var10 = {};
                var11 = var11.bottom;
                var10.paddingBottom = var11;
                var4[1] = var10;
                var0.style = var4;
                var4 = {};
                var10 = var9.flex;
                var4.style = var10;
                var18 = _closure1_slot6;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 8;
                var10 = var10[var12];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var9.title;
                var10.style = var20;
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var23 = var20[var19];
                var23 = var22.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var20 = var20[var19];
                var20 = var22.bind(var3)(var20);
                var22 = var20.t;
                if (var7) {
                    _fun81220_ip = 399;
                    continue _fun81220
                }
            case 384:
                var20 = var22["sO+NI5"];
                var20 = var23.bind(var24)(var20);
                _fun81220_ip = 412;
                continue _fun81220;
            case 399:
                var22 = var22["/OywGQ"];
                var20 = var23.bind(var24)(var22);
            case 412:
                var10.children = var20;
                var11 = var18.bind(var3)(var11, var10);
                var10 = new Array(5);
                var10[0] = var11;
                var20 = _closure1_slot6;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var12];
                var11 = var18.bind(var3)(var11);
                var18 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var22 = var9.subtitle;
                var11.style = var22;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var24 = var22[var19];
                var24 = var23.bind(var3)(var24);
                var26 = var24.intl;
                var24 = var26.string;
                var22 = var22[var19];
                var22 = var23.bind(var3)(var22);
                var23 = var22.t;
                if (var7) {
                    _fun81220_ip = 541;
                    continue _fun81220
                }
            case 526:
                var22 = var23.xI496M;
                var22 = var24.bind(var26)(var22);
                _fun81220_ip = 554;
                continue _fun81220;
            case 541:
                var23 = var23["xCHh/t"];
                var22 = var24.bind(var26)(var23);
            case 554:
                var11.children = var22;
                var11 = var20.bind(var3)(var18, var11);
                var10[1] = var11;
                var20 = _closure1_slot6;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var11 = var24[var12];
                var11 = var23.bind(var3)(var11);
                var18 = var11.Text;
                var11 = {
                    'variant': 'eyebrow',
                    'color': 'interactive-text-default'
                };
                var22 = var24[var19];
                var22 = var23.bind(var3)(var22);
                var27 = var22.intl;
                var26 = var27.string;
                var22 = var24[var19];
                var22 = var23.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["42/D2U"];
                var22 = var26.bind(var27)(var22);
                var11.children = var22;
                var11 = var20.bind(var3)(var18, var11);
                var10[2] = var11;
                var18 = _closure1_slot1;
                var22 = 9;
                var11 = var24[var22];
                var18 = var18.bind(var3)(var11);
                var11 = {
                    'value': null,
                    'onChangeText': null,
                    'style': null,
                    'autoFocus': true,
                    'showBorder': false,
                    'showTopContainer': false
                };
                var11.value = var16;
                var11.onChangeText = var25;
                var25 = var9.input;
                var11.style = var25;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.ClearButtonVisibility;
                var22 = var22.WITH_CONTENT;
                var11.clearButtonVisibility = var22;
                var11.autoCorrect = var21;
                var21 = 'name';
                var11.autoComplete = var21;
                var11.textContentType = var21;
                var11 = var20.bind(var3)(var18, var11);
                var10[3] = var11;
                var11 = null;
                if (!var13) {
                    _fun81220_ip = 890;
                    continue _fun81220
                }
            case 782:
                var18 = _closure1_slot6;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = var20[var12];
                var12 = var23.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var21 = var9.formSubtitle;
                var12.style = var21;
                var21 = var20[var19];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var19];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.bCQt9K;
                var20 = var21.bind(var22)(var20);
                var12.children = var20;
                var11 = var18.bind(var3)(var13, var12);
            case 890:
                var10[4] = var11;
                var4.children = var10;
                var10 = var2.bind(var3)(var1, var4);
                var4 = new Array(4);
                var4[0] = var10;
                var13 = _closure1_slot6;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 10;
                var10 = var10[var12];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {};
                var18 = 'primary';
                var10.variant = var18;
                var18 = 'lg';
                if (!var7) {
                    _fun81220_ip = 963;
                    continue _fun81220
                }
            case 959:
                var18 = 'md';
            case 963:
                var10.size = var18;
                var10.text = var17;
                var17 = function() {
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onPress = var17;
                var10.loading = var15;
                var15 = '';
                var15 = var15 === var16;
                var10.disabled = var15;
                var10 = var13.bind(var3)(var11, var10);
                var4[1] = var10;
                var6 = null;
                if (!var7) {
                    _fun81220_ip = 1151;
                    continue _fun81220
                }
            case 1017:
                var11 = _closure1_slot6;
                var10 = _closure1_slot5;
                var7 = {};
                var13 = var9.button;
                var7.style = var13;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = var15[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {
                    'variant': 'secondary',
                    'size': 'md'
                };
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["91RssO"];
                var15 = var16.bind(var17)(var15);
                var12.text = var15;
                var14 = function() {
                    _fun81222: for (var _fun81222_ip = 0;;) switch (_fun81222_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun81222_ip = 28;
                                continue _fun81222
                            }
                        case 20:
                            var1 = _closure2_slot1;
                            var0 = var1.bind(var2)();
                        case 28:
                            return var0;
                    }
                };
                var12.onPress = var14;
                var12 = var11.bind(var3)(var13, var12);
                var7.children = var12;
                var6 = var11.bind(var3)(var10, var7);
            case 1151:
                var4[2] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 11;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var9.error;
                var5.style = var9;
                var5.error = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 4895, 1234, 3941, 5411, 4084, 10349, 2]);