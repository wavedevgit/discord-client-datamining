// modules/messages/native/MessageGameIconActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun79350: for (var _fun79350_ip = 0;;) switch (_fun79350_ip) {
        case 0:
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
            var3 = 2;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.HelpdeskArticles;
            var _closure1_slot5 = var3;
            var9 = 4;
            var3 = var5[var9];
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
            var8 = {
                'paddingHorizontal': 24,
                'paddingTop': 8
            };
            var11 = 6;
            var11 = var5[var11];
            var13 = var4.bind(var0)(var11);
            var11 = var13.isAndroid;
            var13 = var11.bind(var13)();
            var11 = 0;
            if (!var13) {
                _fun79350_ip = 226;
                continue _fun79350
            }
        case 223:
            var11 = 16;
        case 226:
            var8.paddingBottom = var11;
            var3.contentWrapper = var8;
            var8 = {};
            var8.paddingTop = var10;
            var3.content = var8;
            var10 = 'row';
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.gameContainer = var8;
            var8 = {
                'flexDirection': 'column',
                'justifyContent': 'flex-start',
                'flex': 1
            };
            var3.gameDescriptionWrapper = var8;
            var8 = {
                'marginLeft': 4294967288,
                'marginRight': 8
            };
            var3.gameWrapper = var8;
            var8 = {
                'width': 56,
                'height': 56,
                'marginRight': 8
            };
            var11 = 7;
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.radii;
            var11 = var11.sm;
            var8.borderRadius = var11;
            var3.gameIcon = var8;
            var8 = {};
            var8.flexDirection = var10;
            var3.gameDescriptionWrapperOuter = var8;
            var8 = {};
            var8.marginBottom = var9;
            var3.timestamp = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot8 = var3;
            var3 = 15;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/messages/native/MessageGameIconActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun79351: for (var _fun79351_ip = 0;;) switch (_fun79351_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.applicationId;
                        var _closure2_slot0 = var2;
                        var16 = var1.messageTimestamp;
                        var1 = _closure1_slot8;
                        var4 = undefined;
                        var17 = var1.bind(var4)();
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var1 = var3[var1];
                        var3 = var2.bind(var4)(var1);
                        var2 = var3.useStateFromStores;
                        var5 = _closure1_slot4;
                        var1 = new Array(1);
                        var1[0] = var5;
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot4;
                            var1 = var2.getApplication;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var23 = var2.bind(var3)(var1, var0);
                        var13 = null;
                        var1 = var13 == var23;
                        var0 = null;
                        if (var1) {
                            _fun79351_ip = 622;
                            continue _fun79351
                        }
                    case 97:
                        var3 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var1 = 9;
                        var1 = var12[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.BottomSheet;
                        var1 = {};
                        var11 = true;
                        var1.startExpanded = var11;
                        var6 = _closure1_slot3;
                        var5 = {};
                        var7 = var17.contentWrapper;
                        var5.style = var7;
                        var8 = _closure1_slot7;
                        var7 = {};
                        var9 = var17.gameDescriptionWrapperOuter;
                        var7.style = var9;
                        var10 = _closure1_slot1;
                        var9 = 10;
                        var9 = var12[var9];
                        var10 = var10.bind(var4)(var9);
                        var9 = {};
                        var12 = var17.gameIcon;
                        var9.style = var12;
                        var12 = 'contain';
                        var9.resizeMode = var12;
                        var12 = {};
                        var15 = var13 == var23;
                        var14 = undefined;
                        if (var15) {
                            _fun79351_ip = 229;
                            continue _fun79351
                        }
                    case 215:
                        var18 = var23.getIconURL;
                        var15 = 56;
                        var14 = var18.bind(var23)(var15);
                    case 229:
                        var15 = var13 != var14;
                        var13 = '';
                        if (!var15) {
                            _fun79351_ip = 243;
                            continue _fun79351
                        }
                    case 240:
                        var13 = var14;
                    case 243:
                        var12.uri = var13;
                        var9.source = var12;
                        var9.disableColor = var11;
                        var10 = var3.bind(var4)(var10, var9);
                        var9 = new Array(2);
                        var9[0] = var10;
                        var12 = _closure1_slot7;
                        var11 = _closure1_slot3;
                        var10 = {};
                        var13 = var17.gameDescriptionWrapper;
                        var10.style = var13;
                        var15 = _closure1_slot6;
                        var18 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var13 = 11;
                        var13 = var24[var13];
                        var13 = var18.bind(var4)(var13);
                        var14 = var13.Text;
                        var13 = {
                            'style': null,
                            'variant': 'text-xs/medium',
                            'color': 'text-muted'
                        };
                        var17 = var17.timestamp;
                        var13.style = var17;
                        var13.children = var16;
                        var14 = var15.bind(var4)(var14, var13);
                        var13 = new Array(2);
                        var13[0] = var14;
                        var14 = 12;
                        var14 = var24[var14];
                        var14 = var18.bind(var4)(var14);
                        var15 = var14.TextWithIOSLinkWorkaround;
                        var14 = {};
                        var16 = 'text-sm/medium';
                        var14.variant = var16;
                        var17 = 13;
                        var16 = var24[var17];
                        var16 = var18.bind(var4)(var16);
                        var22 = var16.intl;
                        var20 = var22.format;
                        var16 = var24[var17];
                        var16 = var18.bind(var4)(var16);
                        var16 = var16.t;
                        var19 = var16.J3s8JP;
                        var16 = {};
                        var23 = var23.name;
                        var16.applicationName = var23;
                        var19 = var20.bind(var22)(var19, var16);
                        var16 = new Array(3);
                        var16[0] = var19;
                        var19 = ' ';
                        var16[1] = var19;
                        var19 = var24[var17];
                        var19 = var18.bind(var4)(var19);
                        var20 = var19.intl;
                        var19 = var20.format;
                        var17 = var24[var17];
                        var17 = var18.bind(var4)(var17);
                        var17 = var17.t;
                        var18 = var17.BPDKoA;
                        var17 = {};
                        var23 = _closure1_slot1;
                        var22 = 14;
                        var22 = var24[var22];
                        var23 = var23.bind(var4)(var22);
                        var22 = var23.getArticleURL;
                        var21 = _closure1_slot5;
                        var21 = var21.SOCIAL_LAYER_CONNECTIONS;
                        var21 = var22.bind(var23)(var21);
                        var17.helpdeskArticle = var21;
                        var17 = var19.bind(var20)(var18, var17);
                        var16[2] = var17;
                        var14.children = var16;
                        var14 = var12.bind(var4)(var15, var14);
                        var13[1] = var14;
                        var10.children = var13;
                        var10 = var12.bind(var4)(var11, var10);
                        var9[1] = var10;
                        var7.children = var9;
                        var7 = var8.bind(var4)(var6, var7);
                        var5.children = var7;
                        var5 = var3.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 622:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3456, 660, 33, 1297, 478, 671, 566, 4934, 4087, 3943, 5337, 1234, 1684, 2]);