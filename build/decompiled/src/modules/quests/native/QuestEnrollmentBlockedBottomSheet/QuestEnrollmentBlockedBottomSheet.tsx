// modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun84628: for (var _fun84628_ip = 0;;) switch (_fun84628_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.questEnrollmentBlockedUntil;
                var0 = _closure1_slot6;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var0 = null;
                var2 = var1;
                if (!(var0 == var2)) {
                    _fun84628_ip = 79;
                    continue _fun84628
                }
            case 51:
                var5 = global;
                var5 = var5.Date;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var29 = var6;
                var5 = new var29[var5](var28);
                var2 = var5 instanceof Object ? var5 : var6;
            case 79:
                var2 = var3.bind(var4)(var2);
                var5 = var2.hours;
                var7 = var2.minutes;
                var3 = var2.seconds;
                var15 = global;
                var2 = var15.String;
                var8 = var2.bind(var4)(var5);
                var2 = var8.padStart;
                var6 = 2;
                var5 = '0';
                var20 = var2.bind(var8)(var6, var5);
                var2 = var15.String;
                var7 = var2.bind(var4)(var7);
                var2 = var7.padStart;
                var19 = var2.bind(var7)(var6, var5);
                var2 = var15.String;
                var3 = var2.bind(var4)(var3);
                var2 = var3.padStart;
                var18 = var2.bind(var3)(var6, var5);
                var1 = var0 == var1;
                var0 = null;
                if (var1) {
                    _fun84628_ip = 539;
                    continue _fun84628
                }
            case 194:
                var3 = _closure1_slot5;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 10;
                var1 = var16[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {
                    'header': null,
                    'footer': null,
                    'startExpanded': true
                };
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var10.heading;
                var5.style = var8;
                var17 = _closure1_slot5;
                var8 = 11;
                var11 = var16[var8];
                var11 = var12.bind(var4)(var11);
                var14 = var11.Text;
                var13 = {};
                var11 = 'heading-xl/bold';
                var13.variant = var11;
                var11 = 12;
                var21 = var16[var11];
                var21 = var12.bind(var4)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var16[var11];
                var21 = var12.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["XEHDT/"];
                var21 = var22.bind(var23)(var21);
                var13.children = var21;
                var13 = var17.bind(var4)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var4)(var6, var5);
                var1.header = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var10 = var10.container;
                var5.style = var10;
                var10 = _closure1_slot5;
                var8 = var16[var8];
                var8 = var12.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {};
                var13 = 'text-md/normal';
                var8.variant = var13;
                var13 = var16[var11];
                var13 = var12.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.formatToPlainString;
                var11 = var16[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.t;
                var12 = var11["+5XVH+"];
                var11 = {};
                var15 = var15.HermesInternal;
                var17 = var15.concat;
                var29 = '';
                var15 = ':';
                var28 = var20;
                var27 = var15;
                var26 = var19;
                var25 = var15;
                var24 = var18;
                var15 = var29[var17](var28, var27, var26, var25, var24, var23);
                var11.countdownString = var15;
                var11 = var13.bind(var14)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 539:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.gap = var11;
    var3.heading = var8;
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_32;
    var8.paddingBottom = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84629: for (var _fun84629_ip = 0;;) switch (_fun84629_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.questId;
                var _closure2_slot0 = var1;
                var1 = var0.questEnrollmentBlockedUntil;
                var _closure2_slot1 = var1;
                var7 = var0.questContentPosition;
                var6 = var0.sourceQuestContent;
                var _closure2_slot2 = var6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var8 = var2.bind(var4)(var0);
                var3 = var8.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot4;
                    var1 = var2.getQuest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var3.bind(var8)(var2, var0);
                var0 = null;
                var2 = var0 == var8;
                if (var2) {
                    _fun84629_ip = 205;
                    continue _fun84629
                }
            case 105:
                var3 = _closure1_slot5;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.QuestContentImpressionTrackerNative;
                var1 = {};
                var11 = true;
                var1.overrideVisibility = var11;
                var1.questOrQuests = var8;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.QuestContent;
                var8 = var8.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET;
                var1.questContent = var8;
                var1.questContentPosition = var7;
                var1.sourceQuestContent = var6;
                var5 = function() {
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.questId = var4;
                    var4 = _closure2_slot1;
                    var1.questEnrollmentBlockedUntil = var4;
                    var0 = _closure2_slot2;
                    var1.sourceQuestContent = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 205:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5278, 33, 1297, 671, 566, 10125, 5282, 7131, 4933, 3942, 1234, 2]);