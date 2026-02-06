// modules/app_launcher/native/AppLauncherNativeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.APP_LAUNCHER_BUILT_IN_SECTION_ICON;
    var _closure1_slot7 = var6;
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BuiltInSectionId;
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/AppLauncherNativeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun107355: for (var _fun107355_ip = 0;;) switch (_fun107355_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.location;
                var9 = var1.application;
                var4 = var1.navigation;
                var8 = var1.context;
                var6 = var1.sectionName;
                var7 = var1.installOnDemand;
                var14 = var1.query;
                var13 = var1.searchResultsPosition;
                var2 = var1.navigates;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun107355_ip = 62;
                    continue _fun107355
                }
            case 60:
                var2 = true;
            case 62:
                var5 = var1.entrypoint;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var3 = 6;
                var3 = var11[var3];
                var12 = var10.bind(var0)(var3);
                var11 = var12.trackWithMetadata;
                var3 = _closure1_slot9;
                var10 = var3.APPLICATION_COMMAND_SECTION_SELECTED;
                var3 = {};
                var3.location = var15;
                var16 = var9.id;
                var15 = _closure1_slot10;
                var15 = var15.BUILT_IN;
                if (!(var16 !== var15)) {
                    _fun107355_ip = 166;
                    continue _fun107355
                }
            case 132:
                var16 = _closure1_slot0;
                var17 = _closure1_slot3;
                var15 = 7;
                var15 = var17[var15];
                var15 = var16.bind(var0)(var15);
                var15 = var15.ApplicationCommandTriggerSections;
                var15 = var15.APP;
                _fun107355_ip = 198;
                continue _fun107355;
            case 166:
                var17 = _closure1_slot0;
                var18 = _closure1_slot3;
                var16 = 7;
                var16 = var18[var16];
                var16 = var17.bind(var0)(var16);
                var16 = var16.ApplicationCommandTriggerSections;
                var15 = var16.BUILT_IN;
            case 198:
                var3.section = var15;
                var16 = var9.id;
                var15 = null;
                var17 = var15 != var16;
                if (!var17) {
                    _fun107355_ip = 219;
                    continue _fun107355
                }
            case 216:
                var15 = var16;
            case 219:
                var3.application_id = var15;
                var3.section_name = var6;
                var3.query = var14;
                var3.search_results_position = var13;
                var3.source = var5;
                var3 = var11.bind(var12)(var10, var3);
                if (!var2) {
                    _fun107355_ip = 299;
                    continue _fun107355
                }
            case 252:
                var3 = var4.navigate;
                var1 = _closure1_slot8;
                var2 = var1.APPLICATION_VIEW;
                var1 = {};
                var1.application = var9;
                var1.context = var8;
                var1.installOnDemand = var7;
                var1.sectionName = var6;
                var1.entrypoint = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 299:
                return var0;
        }
    };
    var2.handleApplicationSelected = var3;
    var3 = function arg0() {
        _fun107356: for (var _fun107356_ip = 0;;) switch (_fun107356_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.location;
                var4 = var0.navigation;
                var13 = var0.context;
                var12 = var0.sectionName;
                var11 = var0.sectionOverallPosition;
                var10 = var0.applications;
                var9 = var0.sectionItemType;
                var8 = var0.commands;
                var7 = var0.sectionDescriptors;
                var6 = var0.title;
                var5 = var0.promotedApplicationIds;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var0 = 6;
                var2 = var19[var0];
                var0 = undefined;
                var16 = var18.bind(var0)(var2);
                var15 = var16.trackWithMetadata;
                var2 = _closure1_slot9;
                var3 = var2.APP_LAUNCHER_SECTION_VIEW_MORE;
                var2 = {};
                var2.section_name = var12;
                var17 = 8;
                var17 = var19[var17];
                var17 = var18.bind(var0)(var17);
                var17 = var17.SectionItemType;
                var17 = var17.APPS;
                if (!(var9 !== var17)) {
                    _fun107356_ip = 149;
                    continue _fun107356
                }
            case 142:
                var17 = var8.length;
                _fun107356_ip = 154;
                continue _fun107356;
            case 149:
                var17 = var10.length;
            case 154:
                var2.num = var17;
                var2 = var15.bind(var16)(var3, var2);
                var3 = var4.navigate;
                var1 = _closure1_slot8;
                var2 = var1.APP_LIST_VIEW;
                var1 = {};
                var1.analyticsLocation = var14;
                var1.context = var13;
                var1.sectionName = var12;
                var1.sectionOverallPosition = var11;
                var1.applications = var10;
                var1.sectionItemType = var9;
                var1.commands = var8;
                var1.sectionDescriptors = var7;
                var1.title = var6;
                var1.promotedApplicationIds = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.handleViewAllSelected = var3;
    var3 = function arg0() {
        _fun107357: for (var _fun107357_ip = 0;;) switch (_fun107357_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.location;
                var8 = var0.context;
                var14 = var0.command;
                var _closure2_slot0 = var14;
                var9 = var0.section;
                var10 = var0.sectionDescriptors;
                var19 = var0.query;
                var4 = var0.navigation;
                var7 = var0.installOnDemand;
                var6 = var0.sectionName;
                var18 = var0.searchResultsPosition;
                var5 = var0.entrypoint;
                var11 = var0.onCommandExecuted;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var20 = 9;
                var3 = var16[var20];
                var0 = undefined;
                var17 = var15.bind(var0)(var3);
                var13 = var17.trackCommandSelected;
                var3 = {};
                var3.command = var14;
                var3.location = var12;
                var20 = var16[var20];
                var21 = var15.bind(var0)(var20);
                var20 = var21.getCommandTriggerSection;
                var20 = var20.bind(var21)(var9);
                var3.triggerSection = var20;
                var20 = var19.length;
                var3.queryLength = var20;
                var3.sectionName = var6;
                var3.query = var19;
                var3.searchResultsPosition = var18;
                var3.source = var5;
                var3 = var13.bind(var17)(var3);
                var13 = var14.type;
                var3 = 10;
                var3 = var16[var3];
                var3 = var15.bind(var0)(var3);
                var3 = var3.ApplicationCommandType;
                var3 = var3.PRIMARY_ENTRY_POINT;
                if (!(var13 !== var3)) {
                    _fun107357_ip = 382;
                    continue _fun107357
                }
            case 215:
                var15 = var9.id;
                var3 = _closure1_slot10;
                var3 = var3.FRECENCY;
                var13 = var9;
                if (!(var15 === var3)) {
                    _fun107357_ip = 266;
                    continue _fun107357
                }
            case 237:
                var3 = var10.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.applicationId;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var10)(var2);
                var3 = null;
                var13 = var9;
                if (!(var3 != var2)) {
                    _fun107357_ip = 266;
                    continue _fun107357
                }
            case 263:
                var13 = var2;
            case 266:
                var3 = var8.type;
                var2 = 'channel';
                if (!(var2 === var3)) {
                    _fun107357_ip = 380;
                    continue _fun107357
                }
            case 279:
                var3 = _closure1_slot2;
                var10 = _closure1_slot3;
                var2 = 11;
                var2 = var10[var2];
                var10 = var3.bind(var0)(var2);
                var3 = var10.setAppLauncherActiveCommand;
                var2 = var8.channel;
                var2 = var2.id;
                var2 = var3.bind(var10)(var2, var14);
                var10 = var4.navigate;
                var2 = _closure1_slot8;
                var3 = var2.COMMAND_VIEW;
                var2 = {};
                var2.command = var14;
                var2.section = var13;
                var2.context = var8;
                var2.installOnDemand = var7;
                var2.sectionName = var6;
                var2.analyticsLocation = var12;
                var2.onCommandExecuted = var11;
                var2 = var10.bind(var4)(var3, var2);
                _fun107357_ip = 434;
                continue _fun107357;
            case 380:
                return var0;
            case 382:
                var3 = var4.navigate;
                var1 = _closure1_slot8;
                var2 = var1.APPLICATION_VIEW;
                var1 = {};
                var9 = var9.application;
                var1.application = var9;
                var1.context = var8;
                var1.installOnDemand = var7;
                var1.sectionName = var6;
                var1.entrypoint = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 434:
                return var0;
        }
    };
    var2.handleApplicationCommandSelected = var3;
    var3 = function(arg0) { // Environment: var1
        _fun107359: for (var _fun107359_ip = 0;;) switch (_fun107359_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.option;
                var _closure2_slot0 = var5;
                var9 = var0.prefilledValues;
                var8 = var0.guildId;
                var7 = var0.roles;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var0 = null;
                var3 = var0 == var9;
                var1 = undefined;
                if (var3) {
                    _fun107359_ip = 66;
                    continue _fun107359
                }
            case 49:
                var6 = var9.find;
                var3 = function(arg0) { // Environment: var2
                    _fun107360: for (var _fun107360_ip = 0;;) switch (_fun107360_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.name;
                            var0 = _closure2_slot0;
                            var0 = var0.name;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun107360_ip = 45;
                                continue _fun107360
                            }
                        case 27:
                            var2 = var2.type;
                            var1 = _closure2_slot0;
                            var1 = var1.type;
                            var0 = var2 === var1;
                        case 45:
                            return var0;
                    }
                };
                var1 = var6.bind(var9)(var3);
            case 66:
                _closure2_slot1 = var1;
                var9 = var5.type;
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var11 = 10;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.BOOLEAN;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 1056;
                    continue _fun107359
                }
            case 117:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.STRING;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 897;
                    continue _fun107359
                }
            case 153:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.INTEGER;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 897;
                    continue _fun107359
                }
            case 189:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.NUMBER;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 897;
                    continue _fun107359
                }
            case 225:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.CHANNEL;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 790;
                    continue _fun107359
                }
            case 261:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.USER;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 680;
                    continue _fun107359
                }
            case 297:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.ROLE;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 591;
                    continue _fun107359
                }
            case 333:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.ApplicationCommandOptionType;
                var6 = var6.MENTIONABLE;
                if (!(var6 !== var9)) {
                    _fun107359_ip = 390;
                    continue _fun107359
                }
            case 366:
                var6 = new Array(1);
                var9 = {
                    'type': 'text',
                    'text': ''
                };
                var6[0] = var9;
                return var6;
            case 390:
                if (!(var0 != var1)) {
                    _fun107359_ip = 471;
                    continue _fun107359
                }
            case 394:
                var6 = var1.value;
                if (!(var6 !== var8)) {
                    _fun107359_ip = 567;
                    continue _fun107359
                }
            case 406:
                var6 = var1.value;
                var8 = 'string';
                var6 = typeof var6;
                if (!(var8 === var6)) {
                    _fun107359_ip = 434;
                    continue _fun107359
                }
            case 422:
                var6 = var1.value;
                var6 = var6 in var7;
                if (var6) {
                    _fun107359_ip = 537;
                    continue _fun107359
                }
            case 434:
                var10 = _closure1_slot6;
                var9 = var10.getUser;
                var6 = global;
                var11 = var6.String;
                var8 = var1.value;
                var8 = var11.bind(var4)(var8);
                var8 = var9.bind(var10)(var8);
                if (!(var0 == var8)) {
                    _fun107359_ip = 495;
                    continue _fun107359
                }
            case 471:
                var8 = new Array(1);
                var9 = {
                    'type': 'text',
                    'text': ''
                };
                var8[0] = var9;
                return var8;
            case 495:
                var8 = {};
                var9 = 'userMention';
                var8.type = var9;
                var9 = var6.String;
                var6 = var1.value;
                var6 = var9.bind(var4)(var6);
                var8.userId = var6;
                var6 = new Array(1);
                var6[0] = var8;
                return var6;
            case 537:
                var8 = {};
                var6 = 'roleMention';
                var8.type = var6;
                var6 = var1.value;
                var8.roleId = var6;
                var6 = new Array(1);
                var6[0] = var8;
                return var6;
            case 567:
                var6 = new Array(1);
                var8 = {
                    'type': 'textMention',
                    'text': '@everyone'
                };
                var6[0] = var8;
                return var6;
            case 591:
                if (!(var0 != var1)) {
                    _fun107359_ip = 623;
                    continue _fun107359
                }
            case 595:
                var6 = var1.value;
                var8 = 'string';
                var6 = typeof var6;
                if (!(var8 === var6)) {
                    _fun107359_ip = 623;
                    continue _fun107359
                }
            case 611:
                var6 = var1.value;
                var6 = var6 in var7;
                if (var6) {
                    _fun107359_ip = 647;
                    continue _fun107359
                }
            case 623:
                var6 = new Array(1);
                var7 = {
                    'type': 'text',
                    'text': ''
                };
                var6[0] = var7;
                _fun107359_ip = 678;
                continue _fun107359;
            case 647:
                var8 = {};
                var7 = 'roleMention';
                var8.type = var7;
                var7 = var1.value;
                var8.roleId = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var6 = var7;
            case 678:
                return var6;
            case 680:
                if (!(var0 != var1)) {
                    _fun107359_ip = 721;
                    continue _fun107359
                }
            case 684:
                var9 = _closure1_slot6;
                var8 = var9.getUser;
                var7 = global;
                var10 = var7.String;
                var6 = var1.value;
                var6 = var10.bind(var4)(var6);
                var6 = var8.bind(var9)(var6);
                if (!(var0 == var6)) {
                    _fun107359_ip = 745;
                    continue _fun107359
                }
            case 721:
                var6 = new Array(1);
                var8 = {
                    'type': 'text',
                    'text': ''
                };
                var6[0] = var8;
                _fun107359_ip = 788;
                continue _fun107359;
            case 745:
                var8 = {};
                var9 = 'userMention';
                var8.type = var9;
                var9 = var7.String;
                var7 = var1.value;
                var7 = var9.bind(var4)(var7);
                var8.userId = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var6 = var7;
            case 788:
                return var6;
            case 790:
                if (!(var0 != var1)) {
                    _fun107359_ip = 830;
                    continue _fun107359
                }
            case 794:
                var8 = _closure1_slot5;
                var7 = var8.getChannel;
                var6 = global;
                var9 = var6.String;
                var3 = var1.value;
                var3 = var9.bind(var4)(var3);
                var3 = var7.bind(var8)(var3);
                if (!(var0 == var3)) {
                    _fun107359_ip = 854;
                    continue _fun107359
                }
            case 830:
                var3 = new Array(1);
                var7 = {
                    'type': 'text',
                    'text': ''
                };
                var3[0] = var7;
                _fun107359_ip = 895;
                continue _fun107359;
            case 854:
                var7 = {};
                var8 = 'channelMention';
                var7.type = var8;
                var8 = var6.String;
                var6 = var1.value;
                var6 = var8.bind(var4)(var6);
                var7.channelId = var6;
                var6 = new Array(1);
                var6[0] = var7;
                var3 = var6;
            case 895:
                return var3;
            case 897:
                if (!(var0 != var1)) {
                    _fun107359_ip = 938;
                    continue _fun107359
                }
            case 901:
                var3 = var5.choices;
                if (!(var0 != var3)) {
                    _fun107359_ip = 1014;
                    continue _fun107359
                }
            case 911:
                var7 = var5.choices;
                var6 = var7.some;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot1;
                    var0 = var0.value;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun107359_ip = 962;
                    continue _fun107359
                }
            case 938:
                var3 = new Array(1);
                var6 = {
                    'type': 'text',
                    'text': ''
                };
                var3[0] = var6;
                return var3;
            case 962:
                var3 = {};
                var6 = 'text';
                var3.type = var6;
                var6 = var5.choices;
                var5 = var6.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot1;
                    var0 = var0.value;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var2 = var2.displayName;
                var3.text = var2;
                var2 = new Array(1);
                var2[0] = var3;
                return var2;
            case 1014:
                var3 = {};
                var2 = 'text';
                var3.type = var2;
                var2 = global;
                var5 = var2.String;
                var2 = var1.value;
                var2 = var5.bind(var4)(var2);
                var3.text = var2;
                var2 = new Array(1);
                var2[0] = var3;
                return var2;
            case 1056:
                if (!(var0 == var1)) {
                    _fun107359_ip = 1084;
                    continue _fun107359
                }
            case 1060:
                var0 = new Array(1);
                var2 = {
                    'type': 'text',
                    'text': 'false'
                };
                var0[0] = var2;
                _fun107359_ip = 1138;
                continue _fun107359;
            case 1084:
                var2 = {};
                var3 = 'text';
                var2.type = var3;
                var5 = global;
                var3 = var5.String;
                var5 = var5.Boolean;
                var1 = var1.value;
                var1 = var5.bind(var4)(var1);
                var1 = var3.bind(var4)(var1);
                var2.text = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 1138:
                return var0;
        }
    };
    var2.getInitialOptionValues = var3;
    var3 = function(arg0) { // Environment: var1
        _fun107363: for (var _fun107363_ip = 0;;) switch (_fun107363_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun107363_ip = 139;
                    continue _fun107363
                }
            case 12:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 13;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.isRealApplication;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 14;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                if (var1) {
                    _fun107363_ip = 88;
                    continue _fun107363
                }
            case 71:
                var1 = var3.makeSource;
                var0 = _closure1_slot7;
                var0 = var1.bind(var3)(var0);
                _fun107363_ip = 137;
                continue _fun107363;
            case 88:
                var2 = var3.getApplicationIconSource;
                var1 = {};
                var5 = var4.id;
                var1.id = var5;
                var5 = var4.icon;
                var1.icon = var5;
                var4 = var4.bot;
                var1.bot = var4;
                var4 = false;
                var1.botIconFirst = var4;
                var0 = var2.bind(var3)(var1);
            case 137:
                _fun107363_ip = 164;
                continue _fun107363;
            case 139:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 164:
                return var0;
        }
    };
    var2.getAppLauncherIconSource = var3;
    var3 = function arg0, arg1() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 15;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.useAppLauncherContext;
        var3 = var3.bind(var4)();
        var5 = var3.entrypoint;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = arg1;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun107365: for (var _fun107365_ip = 0;;) switch (_fun107365_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun107365_ip = 78;
                        continue _fun107365
                    }
                case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.trackWithMetadata;
                    var0 = _closure1_slot9;
                    var1 = var0.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED;
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.type = var5;
                    var4 = _closure2_slot1;
                    var0.source = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useLogAppLauncherEmptyStateView = var3;
    var1 = function arg0() {
        _fun107366: for (var _fun107366_ip = 0;;) switch (_fun107366_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.applicationId;
                var14 = var0.context;
                var8 = var0.sectionName;
                var _closure2_slot0 = var8;
                var2 = var0.onActivityItemSelected;
                var _closure2_slot1 = var2;
                var2 = var0.location;
                var _closure2_slot2 = var2;
                var7 = var0.entrypoint;
                var _closure2_slot3 = var7;
                var9 = var0.launchingComponentId;
                var6 = var0.fetchesApplication;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun107366_ip = 74;
                    continue _fun107366
                }
            case 72:
                var6 = true;
            case 74:
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 16;
                var0 = var11[var0];
                var2 = var10.bind(var4)(var0);
                var0 = var2.useAnalyticsContext;
                var12 = var0.bind(var2)();
                var0 = 17;
                var2 = var11[var0];
                var15 = var10.bind(var4)(var2);
                var3 = var15.useActivityAction;
                var2 = {};
                var2.context = var14;
                var2.applicationId = var5;
                var2.fetchesApplication = var6;
                var2 = var3.bind(var15)(var2);
                _closure2_slot4 = var2;
                var2 = 18;
                var2 = var11[var2];
                var3 = var10.bind(var4)(var2);
                var2 = var3.useGetOrFetchApplication;
                var15 = var2.bind(var3)(var5, var6);
                var2 = 15;
                var2 = var11[var2];
                var3 = var10.bind(var4)(var2);
                var2 = var3.useAppLauncherContext;
                var2 = var2.bind(var3)();
                var5 = var2.entrypointParams;
                var0 = var11[var0];
                var3 = var10.bind(var4)(var0);
                var2 = var3.useOnActivityItemSelected;
                var0 = {};
                var0.application = var15;
                var0.context = var14;
                var14 = _closure1_slot1;
                var13 = 19;
                var13 = var11[var13];
                var13 = var14.bind(var4)(var13);
                var0.embeddedActivitiesManager = var13;
                var12 = var12.location;
                var0.locationObject = var12;
                var12 = function arg0() {
                    _fun107367: for (var _fun107367_ip = 0;;) switch (_fun107367_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.applicationId;
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun107367_ip = 38;
                                continue _fun107367
                            }
                        case 21:
                            var2 = _closure2_slot1;
                            var1 = {};
                            var1.applicationId = var6;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 38:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot9;
                            var2 = var1.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED;
                            var1 = {};
                            var7 = _closure2_slot2;
                            var1.location = var7;
                            var1.application_id = var6;
                            var6 = _closure2_slot0;
                            var1.section_name = var6;
                            var6 = _closure2_slot4;
                            var1.action = var6;
                            var5 = _closure2_slot3;
                            var1.source = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.onActivityItemSelectedProp = var12;
                var0.launchingComponentId = var9;
                var9 = 7;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.CommandOrigin;
                var9 = var9.APPLICATION_LAUNCHER;
                var0.commandOrigin = var9;
                var0.sectionName = var8;
                var0.source = var7;
                var0.fetchesApplication = var6;
                var6 = null;
                var8 = var6 == var5;
                var7 = undefined;
                if (var8) {
                    _fun107366_ip = 342;
                    continue _fun107366
                }
            case 336:
                var7 = var5.customId;
            case 342:
                var0.customId = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun107366_ip = 362;
                    continue _fun107366
                }
            case 356:
                var4 = var5.referrerId;
            case 362:
                var0.referrerId = var4;
                var0 = var2.bind(var3)(var0);
                _closure2_slot5 = var0;
                var0 = {};
                var1 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 20;
                    var2 = var5[var1];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.handleActivityItemSelected = var1;
                return var0;
        }
    };
    var2.useHandleActivityItemSelected = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1621, 1468, 660, 4546, 4303, 4548, 13886, 4545, 1645, 6506, 1606, 4674, 1417, 7760, 8070, 13890, 6909, 7970, 3281, 2]);