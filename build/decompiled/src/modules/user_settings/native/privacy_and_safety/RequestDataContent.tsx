// modules/user_settings/native/privacy_and_safety/RequestDataContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'Account';
    var3.USERS = var7;
    var7 = 'Messages';
    var3.MESSAGES = var7;
    var7 = 'Servers';
    var3.GUILDS = var7;
    var7 = 'Analytics';
    var3.ANALYTICS = var7;
    var7 = 'Activities';
    var3.ACTIVITIES = var7;
    var7 = 'Ads';
    var3.ADS = var7;
    var7 = 'Zendesk';
    var3.ZENDESK = var7;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 16;
    var9.padding = var10;
    var3.content = var9;
    var9 = {};
    var12 = 8;
    var9.marginBottom = var12;
    var3.header = var9;
    var9 = {};
    var9.marginBottom = var12;
    var3.title = var9;
    var9 = {};
    var9.marginBottom = var11;
    var3.description = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.checkboxContainer = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.button = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var0 = _closure1_slot11;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var0 = 6;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var7 = _closure1_slot4;
        var0 = var7.useState;
        var16 = false;
        var0 = var0.bind(var7)(var16);
        var5 = _closure1_slot3;
        var4 = 2;
        var0 = var5.bind(var3)(var0, var4);
        var2 = 0;
        var8 = var0[var2];
        var1 = 1;
        var0 = var0[var1];
        var _closure2_slot1 = var0;
        var6 = var7.useState;
        var0 = {};
        var17 = _closure1_slot10;
        var15 = var17.USERS;
        var12 = {};
        var10 = var17.USERS;
        var12.value = var10;
        var10 = 7;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["rfe/x8"];
        var18 = var19.bind(var20)(var18);
        var12.label = var18;
        var12.checked = var16;
        var0[var15] = var12;
        var15 = var17.ANALYTICS;
        var12 = {};
        var18 = var17.ANALYTICS;
        var12.value = var18;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["j+d6RN"];
        var18 = var19.bind(var20)(var18);
        var12.label = var18;
        var12.checked = var16;
        var0[var15] = var12;
        var15 = var17.ACTIVITIES;
        var12 = {};
        var18 = var17.ACTIVITIES;
        var12.value = var18;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.KO88BS;
        var18 = var19.bind(var20)(var18);
        var12.label = var18;
        var12.checked = var16;
        var0[var15] = var12;
        var15 = var17.ADS;
        var12 = {};
        var18 = var17.ADS;
        var12.value = var18;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.wb7QJ3;
        var18 = var19.bind(var20)(var18);
        var12.label = var18;
        var12.checked = var16;
        var0[var15] = var12;
        var15 = var17.MESSAGES;
        var12 = {};
        var18 = var17.MESSAGES;
        var12.value = var18;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["0dO1t+"];
        var18 = var19.bind(var20)(var18);
        var12.label = var18;
        var12.checked = var16;
        var0[var15] = var12;
        var15 = var17.GUILDS;
        var12 = {};
        var18 = var17.GUILDS;
        var12.value = var18;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var14[var10];
        var18 = var13.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.JN9c36;
        var18 = var19.bind(var20)(var18);
        var12.label = var18;
        var12.checked = var16;
        var0[var15] = var12;
        var15 = var17.ZENDESK;
        var12 = {};
        var17 = var17.ZENDESK;
        var12.value = var17;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.yaLeEB;
        var17 = var18.bind(var19)(var17);
        var12.label = var17;
        var12.checked = var16;
        var0[var15] = var12;
        var0 = var6.bind(var7)(var0);
        var0 = var5.bind(var3)(var0, var4);
        var2 = var0[var2];
        var _closure2_slot2 = var2;
        var0 = var0[var1];
        var _closure2_slot3 = var0;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.keys;
        var2 = var0.bind(var1)(var2);
        var1 = var2.map;
        var0 = function(arg0, arg1, arg2) { // Environment: var9
            var4 = arg0;
            var6 = arg1;
            var0 = _closure2_slot2;
            var0 = var0[var4];
            var8 = var0.label;
            var7 = var0.checked;
            var3 = _closure1_slot8;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 8;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.TableCheckboxRow;
            var0 = {};
            var0.label = var8;
            var0.checked = var7;
            var _closure3_slot0 = var4;
            var5 = function(arg0) { // Environment: var5
                var0 = arg0;
                var _closure4_slot0 = var0;
                var2 = _closure2_slot3;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    var3 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var3;
                    var1 = copyDataProperties(var6, var5);
                    var2 = _closure3_slot0;
                    var1 = {};
                    var5 = var3[var2];
                    var6 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var4 = _closure4_slot0;
                    var3 = 'checked';
                    var1[var3] = var4;
                    var0[var2] = var1;
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onPress = var5;
            var5 = 0;
            var5 = var5 === var6;
            var0.start = var5;
            var5 = arg2;
            var7 = var5.length;
            var5 = 1;
            var5 = var7 - var5;
            var5 = var6 === var5;
            var0.end = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var15 = var1.bind(var2)(var0);
        var2 = _closure1_slot9;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var11.content;
        var0.style = var4;
        var6 = _closure1_slot5;
        var4 = {};
        var5 = var11.header;
        var4.style = var5;
        var7 = _closure1_slot8;
        var12 = 9;
        var5 = var14[var12];
        var5 = var13.bind(var3)(var5);
        var16 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var17 = var11.title;
        var5.style = var17;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.jxXMEz;
        var17 = var18.bind(var19)(var17);
        var5.children = var17;
        var16 = var7.bind(var3)(var16, var5);
        var5 = new Array(2);
        var5[0] = var16;
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var16 = var12.Text;
        var12 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var17 = var11.description;
        var12.style = var17;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var20 = var17.intl;
        var19 = var20.format;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var17 = var17.t;
        var18 = var17.vtRhDA;
        var17 = {};
        var23 = _closure1_slot1;
        var22 = 10;
        var22 = var14[var22];
        var23 = var23.bind(var3)(var22);
        var22 = var23.getArticleURL;
        var21 = _closure1_slot7;
        var21 = var21.GDPR_PACKAGE_CONTENTS;
        var21 = var22.bind(var23)(var21);
        var17.helpdeskArticle = var21;
        var17 = var19.bind(var20)(var18, var17);
        var12.children = var17;
        var12 = var7.bind(var3)(var16, var12);
        var5[1] = var12;
        var4.children = var5;
        var5 = var2.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var5 = {};
        var11 = var11.checkboxContainer;
        var5.style = var11;
        var11 = 11;
        var11 = var14[var11];
        var11 = var13.bind(var3)(var11);
        var12 = var11.TableRowGroup;
        var11 = {
            'title': '',
            'hasIcons': false
        };
        var11.children = var15;
        var11 = var7.bind(var3)(var12, var11);
        var5.children = var11;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = 12;
        var5 = var14[var5];
        var5 = var13.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {};
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.NYgNg9;
        var10 = var11.bind(var12)(var10);
        var5.text = var10;
        var9 = function() { // Original name: onPress, environment: var9
            _fun81658: for (var _fun81658_ip = 0;;) switch (_fun81658_ip) {
                case 0:
                    var1 = global;
                    var4 = var1.Object;
                    var3 = var4.keys;
                    var2 = _closure2_slot2;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot2;
                        var0 = arg0;
                        var0 = var1[var0];
                        var0 = var0.checked;
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot2;
                        var0 = arg0;
                        var0 = var1[var0];
                        var0 = var0.value;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var4 = var3.length;
                    var2 = 0;
                    if (!(var2 === var4)) {
                        _fun81658_ip = 220;
                        continue _fun81658
                    }
                case 75:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 13;
                    var2 = var11[var2];
                    var10 = undefined;
                    var5 = var4.bind(var10)(var2);
                    var4 = var5.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 7;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.OjbtDm;
                    var7 = var8.bind(var12)(var7);
                    var2.title = var7;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.t;
                    var6 = var6.W1Rw3D;
                    var6 = var7.bind(var8)(var6);
                    var2.body = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun81658_ip = 310;
                    continue _fun81658;
                case 220:
                    var2 = _closure2_slot1;
                    var4 = undefined;
                    var1 = true;
                    var1 = var2.bind(var4)(var1);
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 14;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.requestDataHarvest;
                    var4 = var1.bind(var2)(var3);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var0
                        _fun81661: for (var _fun81661_ip = 0;;) switch (_fun81661_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = null;
                                if (!(var1 != var0)) {
                                    _fun81661_ip = 21;
                                    continue _fun81661
                                }
                            case 9:
                                var0 = var0.body;
                                if (!(var1 == var0)) {
                                    _fun81661_ip = 167;
                                    continue _fun81661
                                }
                            case 21:
                                var1 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 13;
                                var0 = var8[var0];
                                var7 = undefined;
                                var2 = var1.bind(var7)(var0);
                                var1 = var2.show;
                                var0 = {};
                                var6 = _closure1_slot0;
                                var3 = 7;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var9 = var4.intl;
                                var5 = var9.string;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.t;
                                var4 = var4.OjbtDm;
                                var4 = var5.bind(var9)(var4);
                                var0.title = var4;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var5 = var4.intl;
                                var4 = var5.string;
                                var3 = var8[var3];
                                var3 = var6.bind(var7)(var3);
                                var3 = var3.t;
                                var3 = var3["0F5Jyt"];
                                var3 = var4.bind(var5)(var3);
                                var0.body = var3;
                                var0 = var1.bind(var2)(var0);
                                _fun81661_ip = 329;
                                continue _fun81661;
                            case 167:
                                var1 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 13;
                                var0 = var8[var0];
                                var7 = undefined;
                                var2 = var1.bind(var7)(var0);
                                var1 = var2.show;
                                var0 = {};
                                var6 = _closure1_slot0;
                                var3 = 7;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var9 = var4.intl;
                                var5 = var9.string;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.t;
                                var4 = var4.i2iul5;
                                var4 = var5.bind(var9)(var4);
                                var0.title = var4;
                                var4 = var8[var3];
                                var4 = var6.bind(var7)(var4);
                                var5 = var4.intl;
                                var4 = var5.string;
                                var3 = var8[var3];
                                var3 = var6.bind(var7)(var3);
                                var3 = var3.t;
                                var3 = var3["6Nmv4i"];
                                var3 = var4.bind(var5)(var3);
                                var0.body = var3;
                                var0 = var1.bind(var2)(var0);
                                var1 = _closure2_slot0;
                                var0 = var1.pop;
                                var0 = var0.bind(var1)();
                            case 329:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = function(arg0) { // Environment: var0
                        _fun81662: for (var _fun81662_ip = 0;;) switch (_fun81662_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = null;
                                var1 = var3 == var2;
                                var0 = undefined;
                                var4 = undefined;
                                if (var1) {
                                    _fun81662_ip = 21;
                                    continue _fun81662
                                }
                            case 16:
                                var4 = var2.message;
                            case 21:
                                if (var4) {
                                    _fun81662_ip = 55;
                                    continue _fun81662
                                }
                            case 24:
                                var5 = var3 == var2;
                                var1 = undefined;
                                if (var5) {
                                    _fun81662_ip = 52;
                                    continue _fun81662
                                }
                            case 33:
                                var2 = var2.body;
                                var3 = var3 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun81662_ip = 52;
                                    continue _fun81662
                                }
                            case 47:
                                var1 = var2.message;
                            case 52:
                                var4 = var1;
                            case 55:
                                if (var4) {
                                    _fun81662_ip = 116;
                                    continue _fun81662
                                }
                            case 58:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 7;
                                var2 = var6[var1];
                                var2 = var5.bind(var0)(var2);
                                var3 = var2.intl;
                                var2 = var3.string;
                                var1 = var6[var1];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.t;
                                var1 = var1["0F5Jyt"];
                                var4 = var2.bind(var3)(var1);
                            case 116:
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var1 = 13;
                                var1 = var9[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.show;
                                var1 = {};
                                var8 = _closure1_slot0;
                                var5 = 7;
                                var6 = var9[var5];
                                var6 = var8.bind(var0)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5.OjbtDm;
                                var5 = var6.bind(var7)(var5);
                                var1.title = var5;
                                var1.body = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.finally;
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 310:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.onPress = var9;
        var5.loading = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/privacy_and_safety/RequestDataContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 1469, 1234, 8732, 3901, 1675, 5324, 4043, 3962, 10383, 2]);