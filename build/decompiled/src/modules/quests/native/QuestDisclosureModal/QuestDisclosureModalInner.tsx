// modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx
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
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot5 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var13;
    var9 = 4;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var8.padding = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.gap = var14;
    var14 = 480;
    var8.maxWidth = var14;
    var3.container = var8;
    var8 = {
        'alignSelf': 'center',
        'marginBottom': null,
        'width': 248,
        'height': 121
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var8.marginBottom = var14;
    var3.image = var8;
    var8 = {};
    var14 = 'auto';
    var8.marginTop = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var8.paddingHorizontal = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var8.marginBottom = var14;
    var3.closeButton = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var14;
    var8.borderWidth = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.borderColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = '#000';
    var8.shadowColor = var13;
    var13 = {
        'width': 0,
        'height': 2
    };
    var8.shadowOffset = var13;
    var13 = 0.1;
    var8.shadowOpacity = var13;
    var8.shadowRadius = var9;
    var8.elevation = var12;
    var3.targetList = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'nowrap',
        'alignItems': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingLeft = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.gap = var12;
    var3.targetItem = var8;
    var8 = {};
    var8.borderBottomWidth = var11;
    var3.lastTargetItem = var8;
    var8 = {
        'flex': 1,
        'paddingVertical': null,
        'borderBottomWidth': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingVertical = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderBottomColor = var9;
    var3.disclosureText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: QuestDisclosureModalInner, environment: var1
        _fun83622: for (var _fun83622_ip = 0;;) switch (_fun83622_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.isTargetedDisclosure;
                var21 = var0.gamePublisher;
                var20 = var0.gameTitle;
                var18 = var0.isVideoQuest;
                var10 = var0.onClose;
                var19 = var0.cosponsorName;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var _closure2_slot0 = var8;
                var0 = {};
                var11 = _closure1_slot6;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 5;
                var1 = var17[var1];
                var1 = var16.bind(var3)(var1);
                var2 = var1.GlobeEarthIcon;
                var1 = {};
                var4 = 'xs';
                var1.size = var4;
                var1 = var11.bind(var3)(var2, var1);
                var0.icon = var1;
                var15 = 6;
                var1 = var17[var15];
                var1 = var16.bind(var3)(var1);
                var7 = var1.intl;
                var2 = var7.string;
                var1 = var17[var15];
                var1 = var16.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.xQSdPv;
                var1 = var2.bind(var7)(var1);
                var0.text = var1;
                var14 = new Array(3);
                var14[0] = var0;
                var0 = {};
                var1 = 7;
                var1 = var17[var1];
                var1 = var16.bind(var3)(var1);
                var2 = var1.UserIcon;
                var1 = {};
                var1.size = var4;
                var1 = var11.bind(var3)(var2, var1);
                var0.icon = var1;
                var1 = var17[var15];
                var1 = var16.bind(var3)(var1);
                var7 = var1.intl;
                var2 = var7.string;
                var1 = var17[var15];
                var1 = var16.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.mYt7hQ;
                var1 = var2.bind(var7)(var1);
                var0.text = var1;
                var14[1] = var0;
                var0 = {};
                var1 = 8;
                var1 = var17[var1];
                var1 = var16.bind(var3)(var1);
                var2 = var1.GameControllerIcon;
                var1 = {};
                var1.size = var4;
                var1 = var11.bind(var3)(var2, var1);
                var0.icon = var1;
                var1 = var17[var15];
                var1 = var16.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var17[var15];
                var1 = var16.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.XAsWxQ;
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var14[2] = var0;
                var _closure2_slot1 = var14;
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var7 = _closure1_slot3;
                var4 = {};
                var13 = _closure1_slot1;
                var9 = 9;
                var9 = var17[var9];
                var9 = var13.bind(var3)(var9);
                var4.source = var9;
                var9 = var8.image;
                var4.style = var9;
                var7 = var11.bind(var3)(var7, var4);
                var4 = new Array(5);
                var4[0] = var7;
                var7 = 10;
                var7 = var17[var7];
                var7 = var16.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {
                    'variant': 'text-md/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = 11;
                var13 = var17[var13];
                var17 = var16.bind(var3)(var13);
                var16 = var17.getDisclosureText;
                var13 = {};
                var13.gamePublisher = var21;
                var13.gameTitle = var20;
                var13.isTargetedDisclosure = var6;
                var13.cosponsorName = var19;
                var13.isVideoQuest = var18;
                var13 = var16.bind(var17)(var13);
                var7.children = var13;
                var7 = var11.bind(var3)(var9, var7);
                var4[1] = var7;
                if (!var6) {
                    _fun83622_ip = 591;
                    continue _fun83622
                }
            case 522:
                var11 = _closure1_slot6;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 12;
                var7 = var13[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.Stack;
                var7 = {};
                var13 = var8.targetList;
                var7.style = var13;
                var13 = var14.map;
                var12 = function(arg0, arg1) { // Environment: var12
                    _fun83623: for (var _fun83623_ip = 0;;) switch (_fun83623_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var6 = var0.icon;
                            var11 = var0.text;
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var8 = _closure2_slot0;
                            var5 = var8.targetItem;
                            var1.style = var5;
                            var5 = new Array(2);
                            var5[0] = var6;
                            var7 = _closure1_slot6;
                            var6 = {};
                            var9 = var8.disclosureText;
                            var8 = new Array(2);
                            var8[0] = var9;
                            var9 = _closure2_slot1;
                            var12 = var9.length;
                            var9 = 1;
                            var9 = var12 - var9;
                            var9 = var4 === var9;
                            if (!var9) {
                                _fun83623_ip = 107;
                                continue _fun83623
                            }
                        case 97:
                            var10 = _closure2_slot0;
                            var9 = var10.lastTargetItem;
                        case 107:
                            var8[1] = var9;
                            var6.style = var8;
                            var10 = _closure1_slot6;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var8 = var8[var0];
                            var0 = undefined;
                            var8 = var9.bind(var0)(var8);
                            var9 = var8.Text;
                            var8 = {};
                            var12 = 'text-md/semibold';
                            var8.variant = var12;
                            var8.children = var11;
                            var8 = var10.bind(var0)(var9, var8);
                            var6.children = var8;
                            var6 = var7.bind(var0)(var2, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                    }
                };
                var12 = var13.bind(var14)(var12);
                var7.children = var12;
                var6 = var11.bind(var3)(var9, var7);
            case 591:
                var4[2] = var6;
                var7 = _closure1_slot6;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 13;
                var6 = var11[var6];
                var6 = var14.bind(var3)(var6);
                var9 = var6.TextWithIOSLinkWorkaround;
                var6 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var17 = var12.intl;
                var16 = var17.format;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.tzq9Wa;
                var12 = {};
                var19 = _closure1_slot1;
                var18 = 14;
                var18 = var11[var18];
                var20 = var19.bind(var3)(var18);
                var19 = var20.getArticleURL;
                var18 = _closure1_slot5;
                var18 = var18.QUESTS_PRIVACY_CONTROLS;
                var18 = var19.bind(var20)(var18);
                var12.privacySettingsUrl = var18;
                var12 = var16.bind(var17)(var13, var12);
                var6.children = var12;
                var6 = var7.bind(var3)(var9, var6);
                var4[3] = var6;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.closeButton;
                var5.style = var8;
                var8 = 15;
                var8 = var11[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {
                    'variant': 'primary',
                    'grow': true,
                    'size': 'lg'
                };
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.cpT0Cq;
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 660, 33, 1297, 671, 5404, 1234, 9996, 5289, 10661, 3900, 5252, 4039, 5294, 1675, 4043, 2]);