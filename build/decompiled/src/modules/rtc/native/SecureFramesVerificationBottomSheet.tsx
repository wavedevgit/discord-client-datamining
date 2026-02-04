// modules/rtc/native/SecureFramesVerificationBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var6 = var3.EPOCH_AUTHENTICATOR_CHUNK_SIZE;
    var _closure1_slot5 = var6;
    var6 = var3.EPOCH_AUTHENTICATOR_COLUMNS;
    var _closure1_slot6 = var6;
    var3 = var3.EPOCH_AUTHENTICATOR_LENGTH;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 80,
        'width': 80,
        'borderRadius': 40,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = 'center';
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var12;
    var3.iconContainer = var8;
    var8 = {
        'height': 48,
        'width': 48
    };
    var3.icon = var8;
    var8 = {};
    var12 = 24;
    var8.height = var12;
    var3.share = var8;
    var8 = {};
    var12 = 16;
    var8.padding = var12;
    var3.content = var8;
    var8 = {};
    var8.textAlign = var11;
    var3.subtitle = var8;
    var8 = {
        'backgroundColor': null,
        'borderTopRightRadius': null,
        'borderTopLeftRadius': null,
        'paddingVertical': 10,
        'paddingHorizontal': 16,
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'flexDirection': 'row',
        'marginTop': 24
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderTopRightRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderTopLeftRadius = var11;
    var3.codeHeader = var8;
    var8 = {
        'backgroundColor': null,
        'paddingVertical': 8,
        'paddingHorizontal': 16
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderBottomRightRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderBottomLeftRadius = var9;
    var3.code = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var3.footer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/native/SecureFramesVerificationBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67009: for (var _fun67009_ip = 0;;) switch (_fun67009_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.title;
                var22 = var1.subtitle;
                var11 = var1.footer;
                var6 = var1.epochAuthenticator;
                var1 = var1.onShareClick;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot10;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 6;
                var2 = var20[var2];
                var5 = var19.bind(var3)(var2);
                var4 = var5.useReadableSecureFramesFingerprint;
                var2 = {};
                var2.fingerprintBase64 = var6;
                var6 = _closure1_slot5;
                var2.chunkSize = var6;
                var6 = _closure1_slot7;
                var2.desiredLength = var6;
                var14 = var4.bind(var5)(var2);
                var _closure2_slot1 = var14;
                var4 = _closure1_slot3;
                var5 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun67010: for (var _fun67010_ip = 0;;) switch (_fun67010_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67010_ip = 77;
                                continue _fun67010
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = var3.join;
                            var1 = ' ';
                            var2 = var2.bind(var3)(var1);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var3 = var3.bind(var4)();
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var1)(var2);
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var5.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var13 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot8;
                var10 = 8;
                var0 = var20[var10];
                var0 = var19.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var4 = 9;
                var4 = var20[var4];
                var4 = var19.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var15 = null;
                var4.title = var15;
                var6 = 10;
                var6 = var20[var6];
                var6 = var19.bind(var3)(var6);
                var7 = var6.ActionSheetCloseButton;
                var6 = {};
                var6.onPress = var13;
                var6 = var2.bind(var3)(var7, var6);
                var4.leading = var6;
                var6 = 11;
                var6 = var20[var6];
                var6 = var19.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var13 = var12.share;
                var6.style = var13;
                var6.hitSlop = var10;
                var6.onPress = var9;
                var9 = var15 == var14;
                var6.disabled = var9;
                var9 = 'button';
                var6.accessibilityRole = var9;
                var16 = 12;
                var9 = var20[var16];
                var9 = var19.bind(var3)(var9);
                var13 = var9.intl;
                var10 = var13.string;
                var9 = var20[var16];
                var9 = var19.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.RDE0Sc;
                var9 = var10.bind(var13)(var9);
                var6.accessibilityLabel = var9;
                var13 = 13;
                var9 = var20[var13];
                var9 = var19.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-brand'
                };
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var21 = var17.intl;
                var18 = var21.string;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.RDE0Sc;
                var17 = var18.bind(var21)(var17);
                var9.children = var17;
                var9 = var2.bind(var3)(var10, var9);
                var6.children = var9;
                var6 = var2.bind(var3)(var7, var6);
                var4.trailing = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var12.content;
                var4.style = var7;
                var7 = 14;
                var7 = var20[var7];
                var7 = var19.bind(var3)(var7);
                var9 = var7.Stack;
                var7 = {
                    'spacing': 8,
                    'justify': 'center',
                    'align': 'center',
                    'direction': 'vertical'
                };
                var17 = {};
                var10 = var12.iconContainer;
                var17.style = var10;
                var10 = 15;
                var10 = var20[var10];
                var10 = var19.bind(var3)(var10);
                var21 = var10.LockIcon;
                var18 = {};
                var10 = var12.icon;
                var18.style = var10;
                var10 = _closure1_slot1;
                var24 = 5;
                var24 = var20[var24];
                var24 = var10.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.TEXT_SUBTLE;
                var18.color = var24;
                var18 = var2.bind(var3)(var21, var18);
                var17.children = var18;
                var18 = var2.bind(var3)(var5, var17);
                var17 = new Array(3);
                var17[0] = var18;
                var18 = var20[var13];
                var18 = var19.bind(var3)(var18);
                var21 = var18.Text;
                var18 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var18.children = var23;
                var18 = var2.bind(var3)(var21, var18);
                var17[1] = var18;
                var18 = var20[var13];
                var18 = var19.bind(var3)(var18);
                var21 = var18.Text;
                var18 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var23 = var12.subtitle;
                var18.style = var23;
                var18.children = var22;
                var18 = var2.bind(var3)(var21, var18);
                var17[2] = var18;
                var7.children = var17;
                var9 = var6.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var9 = 16;
                var9 = var20[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.cgBTyO;
                var16 = var17.bind(var18)(var16);
                var9.title = var16;
                var15 = var15 != var14;
                if (!var15) {
                    _fun67009_ip = 844;
                    continue _fun67009
                }
            case 807:
                var18 = _closure1_slot8;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 17;
                var16 = var19[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.chunks = var14;
                var15 = var18.bind(var3)(var17, var16);
            case 844:
                var9.trailing = var15;
                var9.chunks = var14;
                var14 = _closure1_slot6;
                var9.columns = var14;
                var9 = var2.bind(var3)(var10, var9);
                var7[1] = var9;
                var10 = _closure1_slot8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var12 = var12.footer;
                var8.style = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8266, 33, 1297, 671, 8271, 3278, 4931, 5211, 5209, 4902, 1234, 3941, 4080, 4858, 8280, 8283, 2]);