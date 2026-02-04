// modules/chat_input/native/guard/ChatInputGuardLurking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var6.bind(var0)(var3);
    var _closure1_slot4 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TextAreaCta;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot8 = var7;
    var3 = var3.JoinGuildSources;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90698: for (var _fun90698_ip = 0;;) switch (_fun90698_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var _closure2_slot0 = var3;
                var0 = var0.isReadonlyAnnouncementsChannel;
                var1 = var3.getGuildId;
                var11 = var1.bind(var3)();
                var _closure2_slot1 = var11;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 6;
                var1 = var4[var1];
                var4 = undefined;
                var9 = var5.bind(var4)(var1);
                var8 = var9.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var1;
                var5 = new Array(1);
                var5[0] = var11;
                var1 = function() { // Environment: var2
                    _fun90699: for (var _fun90699_ip = 0;;) switch (_fun90699_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun90699_ip = 40;
                                continue _fun90699
                            }
                        case 18:
                            var4 = _closure1_slot5;
                            var3 = var4.isLurking;
                            var2 = _closure2_slot1;
                            var1 = var3.bind(var4)(var2);
                        case 40:
                            var0.isLurking = var1;
                            var2 = _closure1_slot5;
                            var1 = var2.getLurkingSource;
                            var1 = var1.bind(var2)();
                            var0.lurkingSource = var1;
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var7, var1, var5);
                var10 = var1.isLurking;
                var1 = var1.lurkingSource;
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getHistory;
                    var2 = var1.bind(var2)();
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var5 = new Array(0);
                var7 = var8.bind(var9)(var7, var5);
                var8 = var9.useCallback;
                var5 = new Array(2);
                var5[0] = var11;
                var3 = var3.id;
                var5[1] = var3;
                var3 = function() { // Environment: var2
                    _fun90701: for (var _fun90701_ip = 0;;) switch (_fun90701_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90701_ip = 118;
                                continue _fun90701
                            }
                        case 13:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 8;
                            var2 = var4[var2];
                            var3 = undefined;
                            var7 = var5.bind(var3)(var2);
                            var6 = var7.trackWithMetadata;
                            var2 = _closure1_slot8;
                            var5 = var2.TEXT_AREA_CTA_CLICKED;
                            var2 = {};
                            var8 = _closure1_slot7;
                            var8 = var8.FOLLOW_ANNOUNCEMENT;
                            var2.cta_type = var8;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = _closure1_slot0;
                            var1 = 9;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.showChannelFollowingActionSheet;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var8.bind(var9)(var3, var5);
                var5 = var9.useCallback;
                var3 = new Array(1);
                var3[0] = var11;
                var2 = function() { // Environment: var2
                    _fun90702: for (var _fun90702_ip = 0;;) switch (_fun90702_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun90702_ip = 283;
                                continue _fun90702
                            }
                        case 16:
                            var2 = _closure1_slot5;
                            var1 = var2.getLurkingSource;
                            var1 = var1.bind(var2)();
                            var5 = var0 == var1;
                            var2 = undefined;
                            var6 = undefined;
                            if (var5) {
                                _fun90702_ip = 49;
                                continue _fun90702
                            }
                        case 44:
                            var6 = var1.type;
                        case 49:
                            var5 = _closure1_slot9;
                            var5 = var5.DIRECTORY_ENTRY;
                            if (!(var6 === var5)) {
                                _fun90702_ip = 153;
                                continue _fun90702
                            }
                        case 63:
                            var6 = _closure1_slot6;
                            var5 = var6.getChannel;
                            var1 = var1.directoryChannelId;
                            var1 = var5.bind(var6)(var1);
                            if (!(var0 != var1)) {
                                _fun90702_ip = 153;
                                continue _fun90702
                            }
                        case 87:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var0 = 10;
                            var0 = var8[var0];
                            var6 = var7.bind(var2)(var0);
                            var5 = var6.setHubProgressActionComplete;
                            var0 = var1.getGuildId;
                            var1 = var0.bind(var1)();
                            var0 = 11;
                            var0 = var8[var0];
                            var0 = var7.bind(var2)(var0);
                            var0 = var0.HubProgressStep;
                            var0 = var0.JOIN_GUILD;
                            var0 = var5.bind(var6)(var1, var0);
                        case 153:
                            var1 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var0 = 12;
                            var0 = var5[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.trackGuildJoinClicked;
                            var3 = _closure2_slot1;
                            var0 = var0.bind(var1)(var3);
                            var1 = _closure1_slot1;
                            var0 = 8;
                            var0 = var5[var0];
                            var8 = var1.bind(var2)(var0);
                            var7 = var8.trackWithMetadata;
                            var0 = _closure1_slot8;
                            var6 = var0.TEXT_AREA_CTA_CLICKED;
                            var0 = {};
                            var9 = _closure1_slot7;
                            var9 = var9.JOIN_GUILD;
                            var0.cta_type = var9;
                            var0 = var7.bind(var8)(var6, var0);
                            var0 = 13;
                            var0 = var5[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.joinGuild;
                            var0 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.CHAT_INPUT_BLOCKER;
                            var0.source = var4;
                            var0 = var1.bind(var2)(var3, var0);
                        case 283:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var9)(var2, var3);
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun90698_ip = 214;
                    continue _fun90698
                }
            case 209:
                var2 = var1.type;
            case 214:
                var1 = _closure1_slot9;
                var1 = var1.DIRECTORY_ENTRY;
                if (!(var2 !== var1)) {
                    _fun90698_ip = 613;
                    continue _fun90698
                }
            case 231:
                var2 = _closure1_slot10;
                var3 = _closure1_slot1;
                var9 = _closure1_slot3;
                var1 = 14;
                var1 = var9[var1];
                var1 = var3.bind(var4)(var1);
                if (var0) {
                    _fun90698_ip = 391;
                    continue _fun90698
                }
            case 261:
                var0 = {};
                var3 = 'button-action';
                var0.type = var3;
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var3 = 15;
                var9 = var13[var3];
                var9 = var12.bind(var4)(var9);
                var14 = var9.intl;
                var11 = var14.string;
                var9 = var13[var3];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.G42YmG;
                var9 = var11.bind(var14)(var9);
                var0.message = var9;
                var9 = var13[var3];
                var9 = var12.bind(var4)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.RLch70;
                var3 = var9.bind(var11)(var3);
                var0.buttonPrimaryText = var3;
                var0.buttonPrimaryOnPress = var5;
                _fun90698_ip = 602;
                continue _fun90698;
            case 391:
                var3 = {};
                var9 = 'button-action';
                var3.type = var9;
                var14 = _closure1_slot0;
                var9 = _closure1_slot3;
                var13 = 15;
                var11 = var9[var13];
                var11 = var14.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var13];
                var9 = var14.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.Hl0Mqh;
                var9 = var11.bind(var12)(var9);
                var3.message = var9;
                var9 = undefined;
                if (!var10) {
                    _fun90698_ip = 519;
                    continue _fun90698
                }
            case 467:
                var15 = _closure1_slot0;
                var11 = _closure1_slot3;
                var12 = var11[var13];
                var12 = var15.bind(var4)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var11 = var11[var13];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.VJlc0S;
                var9 = var12.bind(var14)(var11);
            case 519:
                var3.buttonSecondaryText = var9;
                var9 = undefined;
                if (!var10) {
                    _fun90698_ip = 532;
                    continue _fun90698
                }
            case 529:
                var9 = var5;
            case 532:
                var3.buttonSecondaryOnPress = var9;
                var12 = _closure1_slot0;
                var9 = _closure1_slot3;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["3aOv+h"];
                var9 = var10.bind(var11)(var9);
                var3.buttonPrimaryText = var9;
                var3.buttonPrimaryOnPress = var8;
                var0 = var3;
            case 602:
                var0 = var2.bind(var4)(var1, var0);
                _fun90698_ip = 820;
                continue _fun90698;
            case 613:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var10 = _closure1_slot3;
                var1 = 14;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = 'button-action';
                var1.type = var8;
                var9 = _closure1_slot0;
                var6 = 15;
                var8 = var10[var6];
                var8 = var9.bind(var4)(var8);
                var12 = var8.intl;
                var11 = var12.string;
                var8 = var10[var6];
                var8 = var9.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.G42YmG;
                var8 = var11.bind(var12)(var8);
                var1.message = var8;
                var8 = var10[var6];
                var8 = var9.bind(var4)(var8);
                var12 = var8.intl;
                var11 = var12.string;
                var8 = var10[var6];
                var8 = var9.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.GlKb5i;
                var8 = var11.bind(var12)(var8);
                var1.buttonSecondaryText = var8;
                var1.buttonSecondaryOnPress = var7;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.RLch70;
                var6 = var7.bind(var8)(var6);
                var1.buttonPrimaryText = var6;
                var1.buttonPrimaryOnPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 820:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardLurking.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3092, 1372, 11607, 660, 33, 566, 1220, 4302, 9784, 8346, 1311, 5614, 4679, 11773, 1234, 2]);