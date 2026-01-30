// modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot6 = var7;
    var7 = var3.QUEST_DOCK_CONTENT_BORDER_RADII;
    var _closure1_slot7 = var7;
    var7 = var3.QUEST_DOCK_BORDER_RADII;
    var _closure1_slot8 = var7;
    var12 = var3.QUEST_DOCK_COLLAPSED_HEIGHT;
    var7 = var3.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot9 = var7;
    var3 = var3.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var7 = var3.jsxs;
    var _closure1_slot13 = var7;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'flexDirection': 'row',
        'height': null,
        'overflow': 'hidden',
        'paddingRight': 16,
        'paddingLeft': 8,
        'position': 'absolute',
        'zIndex': 2
    };
    var9.height = var12;
    var3.questDockHeader = var9;
    var9 = {
        'height': 35,
        'marginRight': 4,
        'width': 35
    };
    var3.wreathImage = var9;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.questDockHeaderPrimary = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.logo = var9;
    var9 = {
        'flexGrow': 0,
        'flexShrink': 0
    };
    var3.questDockHeaderSecondary = var9;
    var9 = {
        'justifyContent': 'center',
        'position': 'absolute',
        'bottom': 0,
        'top': 0,
        'right': 0
    };
    var3.questDockHeaderContentCollapsed = var9;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'gap': 8
    };
    var3.questDockHeaderContentExpanded = var9;
    var9 = {
        'alignItems': 'center',
        'display': 'flex',
        'flexDirection': 'row',
        'gap': 4
    };
    var3.questDockHeaderActionDisclosures = var9;
    var9 = {
        'height': 14,
        'width': 14
    };
    var3.questDockHeaderActionDisclosuresIcon = var9;
    var9 = {
        'backgroundColor': null,
        'opacity': 0.2,
        'height': 18,
        'width': 1.5
    };
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var9.backgroundColor = var10;
    var3.questDockHeaderActionSeparator = var9;
    var9 = {};
    var10 = 0.7;
    var9.opacity = var10;
    var3.questDockHeaderTertiaryContent = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function questDockHeaderLayoutAnimation_QuestDockUnenrolledHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: questDockHeaderLayoutAnimation, environment: var0
            var2 = arg0;
            var0 = {};
            var1 = {};
            var3 = var2.currentOriginX;
            var1.originX = var3;
            var3 = var2.currentOriginY;
            var1.originY = var3;
            var3 = var2.currentWidth;
            var1.width = var3;
            var3 = var2.currentHeight;
            var1.height = var3;
            var0.initialValues = var1;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var8 = var7[var3];
            var4 = undefined;
            var10 = var6.bind(var4)(var8);
            var9 = var10.withSpring;
            var8 = var2.targetOriginX;
            var5 = _closure1_slot6;
            var8 = var9.bind(var10)(var8, var5);
            var1.originX = var8;
            var8 = var7[var3];
            var10 = var6.bind(var4)(var8);
            var9 = var10.withSpring;
            var8 = var2.targetOriginY;
            var8 = var9.bind(var10)(var8, var5);
            var1.originY = var8;
            var8 = var7[var3];
            var10 = var6.bind(var4)(var8);
            var9 = var10.withSpring;
            var8 = var2.targetHeight;
            var8 = var9.bind(var10)(var8, var5);
            var1.height = var8;
            var3 = var7[var3];
            var4 = var6.bind(var4)(var3);
            var3 = var4.withSpring;
            var2 = var2.targetWidth;
            var2 = var3.bind(var4)(var2, var5);
            var1.width = var2;
            var0.animations = var1;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = _closure1_slot6;
        var2.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var3;
        var0.__closure = var2;
        var2 = 6787168806966.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot16;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function QuestDockUnenrolledHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function QuestDockUnenrolledHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 'function QuestDockUnenrolledHeaderTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}';
    var3.code = var7;
    var _closure1_slot20 = var3;
    var3 = {};
    var7 = "function QuestDockUnenrolledHeaderTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}";
    var3.code = var7;
    var _closure1_slot21 = var3;
    var3 = {};
    var7 = 'function QuestDockUnenrolledHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,width:questDockWrapperSpecs.get().width};}';
    var3.code = var7;
    var _closure1_slot22 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: QuestDockUnenrolledHeader, environment: var1
        _fun83818: for (var _fun83818_ip = 0;;) switch (_fun83818_ip) {
            case 0:
                var10 = _closure1_slot3;
                var2 = var10.useContext;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var2.bind(var10)(var1);
                var2 = var1.quest;
                var _closure2_slot0 = var2;
                var7 = var10.useContext;
                var4 = _closure1_slot0;
                var1 = 10;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.QuestDockGestureContext;
                var1 = var7.bind(var10)(var1);
                var15 = var1.activeQuestDockMode;
                var _closure2_slot1 = var15;
                var8 = var1.questDockWrapperSpecs;
                var _closure2_slot2 = var8;
                var1 = 11;
                var1 = var6[var1];
                var7 = var4.bind(var3)(var1);
                var1 = var7.useActionSheetPressHandler;
                var20 = var1.bind(var7)(var2);
                var9 = var10.useCallback;
                var7 = new Array(1);
                var7[0] = var2;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 12;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showModal;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.quest = var4;
                    var4 = true;
                    var1.isTargetedDisclosure = var4;
                    var4 = {};
                    var6 = _closure1_slot0;
                    var5 = 13;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.QuestContent;
                    var8 = var8.QUEST_BAR_MOBILE;
                    var4.content = var8;
                    var8 = 14;
                    var8 = var7[var8];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.QuestContentCTA;
                    var8 = var8.CONTEXT_MENU_OPEN_DISCLOSURE;
                    var4.ctaContent = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.QUEST_BAR_MOBILE;
                    var4.sourceQuestContent = var5;
                    var1.trackingCtx = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var21 = var9.bind(var10)(var1, var7);
                var1 = 15;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var5 = var1.bind(var3)();
                var1 = 16;
                var1 = var6[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.isThemeDark;
                var4 = var1.bind(var4)(var5);
                var1 = _closure1_slot11;
                if (var4) {
                    _fun83818_ip = 208;
                    continue _fun83818
                }
            case 200:
                var17 = var1.LIGHT;
                _fun83818_ip = 214;
                continue _fun83818;
            case 208:
                var17 = var1.DARK;
            case 214:
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 17;
                var5 = var14[var4];
                var7 = var1.bind(var3)(var5);
                var6 = var7.useAnimatedStyle;
                var5 = function() { // Original name: _, environment: var0
                    _fun83820: for (var _fun83820_ip = 0;;) switch (_fun83820_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot5;
                            var1 = var1.EXPANDED;
                            if (!(var2 !== var1)) {
                                _fun83820_ip = 41;
                                continue _fun83820
                            }
                        case 35:
                            var1 = _closure1_slot8;
                            _fun83820_ip = 45;
                            continue _fun83820;
                        case 41:
                            var1 = _closure1_slot7;
                        case 45:
                            var0.borderRadius = var1;
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot5;
                            var1 = var1.EXPANDED;
                            if (!(var2 !== var1)) {
                                _fun83820_ip = 96;
                                continue _fun83820
                            }
                        case 76:
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.width;
                            _fun83820_ip = 129;
                            continue _fun83820;
                        case 96:
                            var4 = _closure2_slot2;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var4 = var2.width;
                            var5 = _closure1_slot10;
                            var2 = 2;
                            var2 = var2 * var5;
                            var1 = var4 - var2;
                        case 129:
                            var0.width = var1;
                            var2 = {};
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var9 = 8;
                            var1 = var1[var9];
                            var8 = undefined;
                            var10 = var4.bind(var8)(var1);
                            var5 = var10.withSpring;
                            var4 = _closure2_slot1;
                            var1 = var4.get;
                            var11 = var1.bind(var4)();
                            var1 = _closure1_slot5;
                            var1 = var1.EXPANDED;
                            var4 = 0;
                            if (!(var11 === var1)) {
                                _fun83820_ip = 195;
                                continue _fun83820
                            }
                        case 191:
                            var4 = _closure1_slot10;
                        case 195:
                            var1 = _closure1_slot6;
                            var1 = var5.bind(var10)(var4, var1);
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var5 = var5.bind(var8)(var4);
                            var4 = var5.withSpring;
                            var8 = _closure2_slot1;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = _closure1_slot5;
                            var7 = var7.EXPANDED;
                            var6 = 0;
                            if (!(var8 === var7)) {
                                _fun83820_ip = 275;
                                continue _fun83820
                            }
                        case 271:
                            var6 = _closure1_slot10;
                        case 275:
                            var3 = _closure1_slot6;
                            var3 = var4.bind(var5)(var6, var3);
                            var2.translateY = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.activeQuestDockMode = var15;
                var13 = _closure1_slot5;
                var11.QuestDockMode = var13;
                var10 = _closure1_slot7;
                var11.QUEST_DOCK_CONTENT_BORDER_RADII = var10;
                var9 = _closure1_slot8;
                var11.QUEST_DOCK_BORDER_RADII = var9;
                var11.questDockWrapperSpecs = var8;
                var12 = _closure1_slot10;
                var11.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED = var12;
                var23 = 8;
                var12 = var14[var23];
                var12 = var1.bind(var3)(var12);
                var12 = var12.withSpring;
                var11.withSpring = var12;
                var19 = _closure1_slot6;
                var11.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var19;
                var5.__closure = var11;
                var11 = 10188474525629.0;
                var5.__workletHash = var11;
                var11 = _closure1_slot18;
                var5.__initData = var11;
                var5 = var6.bind(var7)(var5);
                var6 = var14[var4];
                var11 = var1.bind(var3)(var6);
                var7 = var11.useAnimatedStyle;
                var6 = function() { // Original name: c, environment: var0
                    _fun83821: for (var _fun83821_ip = 0;;) switch (_fun83821_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.withSpring;
                            var4 = _closure2_slot1;
                            var3 = var4.get;
                            var7 = var3.bind(var4)();
                            var3 = _closure1_slot5;
                            var3 = var3.EXPANDED;
                            var4 = 1;
                            if (!(var7 === var3)) {
                                _fun83821_ip = 67;
                                continue _fun83821
                            }
                        case 65:
                            var4 = 0;
                        case 67:
                            var3 = _closure1_slot6;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.opacity = var3;
                            var3 = _closure2_slot1;
                            var1 = var3.get;
                            var4 = var1.bind(var3)();
                            var1 = _closure1_slot5;
                            var3 = var1.EXPANDED;
                            var1 = 0;
                            if (!(var4 === var3)) {
                                _fun83821_ip = 124;
                                continue _fun83821
                            }
                        case 110:
                            var3 = _closure1_slot9;
                            var2 = -1;
                            var1 = var2 * var3;
                        case 124:
                            var0.right = var1;
                            return var0;
                    }
                };
                var12 = {};
                var16 = var14[var23];
                var16 = var1.bind(var3)(var16);
                var16 = var16.withSpring;
                var12.withSpring = var16;
                var12.activeQuestDockMode = var15;
                var12.QuestDockMode = var13;
                var12.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var19;
                var18 = _closure1_slot9;
                var12.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED = var18;
                var6.__closure = var12;
                var12 = 16795373856064.0;
                var6.__workletHash = var12;
                var12 = _closure1_slot19;
                var6.__initData = var12;
                var16 = var7.bind(var11)(var6);
                var6 = var14[var4];
                var11 = var1.bind(var3)(var6);
                var7 = var11.useAnimatedStyle;
                var6 = function() { // Original name: l, environment: var0
                    _fun83822: for (var _fun83822_ip = 0;;) switch (_fun83822_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.withSpring;
                            var4 = _closure2_slot1;
                            var1 = var4.get;
                            var8 = var1.bind(var4)();
                            var1 = _closure1_slot5;
                            var4 = var1.EXPANDED;
                            var5 = 0;
                            if (!(var8 === var4)) {
                                _fun83822_ip = 67;
                                continue _fun83822
                            }
                        case 64:
                            var5 = 1;
                        case 67:
                            var4 = _closure1_slot6;
                            var4 = var6.bind(var7)(var5, var4);
                            var0.opacity = var4;
                            var4 = _closure2_slot1;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = _closure1_slot5;
                            var3 = var3.EXPANDED;
                            var1 = 0;
                            if (!(var4 !== var3)) {
                                _fun83822_ip = 114;
                                continue _fun83822
                            }
                        case 110:
                            var1 = _closure1_slot9;
                        case 114:
                            var0.right = var1;
                            return var0;
                    }
                };
                var12 = {};
                var23 = var14[var23];
                var23 = var1.bind(var3)(var23);
                var23 = var23.withSpring;
                var12.withSpring = var23;
                var12.activeQuestDockMode = var15;
                var12.QuestDockMode = var13;
                var12.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var19;
                var12.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED = var18;
                var6.__closure = var12;
                var12 = 11741220477745.0;
                var6.__workletHash = var12;
                var12 = _closure1_slot20;
                var6.__initData = var12;
                var12 = var7.bind(var11)(var6);
                var6 = var14[var4];
                var11 = var1.bind(var3)(var6);
                var7 = var11.useAnimatedProps;
                var6 = function() { // Original name: Q, environment: var0
                    _fun83823: for (var _fun83823_ip = 0;;) switch (_fun83823_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                            var1 = _closure1_slot5;
                            var2 = var1.EXPANDED;
                            var1 = 'none';
                            if (!(var3 === var2)) {
                                _fun83823_ip = 43;
                                continue _fun83823
                            }
                        case 39:
                            var1 = 'auto';
                        case 43:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var18 = {};
                var18.activeQuestDockMode = var15;
                var18.QuestDockMode = var13;
                var6.__closure = var18;
                var18 = 16421998349674.0;
                var6.__workletHash = var18;
                var18 = _closure1_slot21;
                var6.__initData = var18;
                var11 = var7.bind(var11)(var6);
                var4 = var14[var4];
                var6 = var1.bind(var3)(var4);
                var4 = var6.useAnimatedStyle;
                var0 = function() { // Original name: I, environment: var0
                    _fun83824: for (var _fun83824_ip = 0;;) switch (_fun83824_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var2 = _closure1_slot5;
                            var2 = var2.EXPANDED;
                            if (!(var4 !== var2)) {
                                _fun83824_ip = 41;
                                continue _fun83824
                            }
                        case 35:
                            var2 = _closure1_slot8;
                            _fun83824_ip = 45;
                            continue _fun83824;
                        case 41:
                            var2 = _closure1_slot7;
                        case 45:
                            var0.borderRadius = var2;
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.width;
                            var0.width = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.activeQuestDockMode = var15;
                var7.QuestDockMode = var13;
                var7.QUEST_DOCK_CONTENT_BORDER_RADII = var10;
                var7.QUEST_DOCK_BORDER_RADII = var9;
                var7.questDockWrapperSpecs = var8;
                var0.__closure = var7;
                var7 = 10463333318801.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot22;
                var0.__initData = var7;
                var7 = var4.bind(var6)(var0);
                var0 = _closure1_slot15;
                var15 = var0.bind(var3)();
                var0 = 18;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useQuestGameLogotypeAssetUrl;
                var13 = var0.bind(var1)(var2);
                var2 = _closure1_slot13;
                var8 = _closure1_slot1;
                var9 = 19;
                var0 = var14[var9];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var6 = var15.questDockHeader;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot17;
                var0.layout = var6;
                var10 = _closure1_slot12;
                var4 = 20;
                var4 = var14[var4];
                var5 = var8.bind(var3)(var4);
                var4 = {};
                var4.animatedStyle = var7;
                var4.animatedLayout = var6;
                var5 = var10.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var7 = var15.questDockHeaderPrimary;
                var5.style = var7;
                var7 = 21;
                var7 = var14[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var14 = _closure1_slot11;
                var14 = var14.DARK;
                if (!(var17 !== var14)) {
                    _fun83818_ip = 913;
                    continue _fun83818
                }
            case 891:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 23;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                _fun83818_ip = 933;
                continue _fun83818;
            case 913:
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 22;
                var17 = var19[var17];
                var14 = var18.bind(var3)(var17);
            case 933:
                var7.source = var14;
                var14 = 'contain';
                var7.resizeMode = var14;
                var14 = var15.wreathImage;
                var7.style = var14;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var14 = _closure1_slot12;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var8 = 24;
                var8 = var19[var8];
                var10 = var18.bind(var3)(var8);
                var8 = {
                    'assetUrl': null,
                    'height': 36,
                    'maxWidth': 120
                };
                var8.assetUrl = var13;
                var13 = var15.logo;
                var8.style = var13;
                var8 = var14.bind(var3)(var10, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var15.questDockHeaderSecondary;
                var5.style = var8;
                var8 = var19[var9];
                var10 = var18.bind(var3)(var8);
                var8 = {};
                var17 = var15.questDockHeaderContentCollapsed;
                var13 = new Array(2);
                var13[0] = var17;
                var13[1] = var16;
                var8.style = var13;
                var16 = _closure1_slot0;
                var17 = 25;
                var13 = var19[var17];
                var13 = var16.bind(var3)(var13);
                var23 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-active'
                };
                var24 = var15.questDockHeaderTertiaryContent;
                var13.style = var24;
                var25 = 26;
                var24 = var19[var25];
                var24 = var16.bind(var3)(var24);
                var27 = var24.intl;
                var26 = var27.string;
                var24 = var19[var25];
                var24 = var16.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["3mgEQf"];
                var24 = var26.bind(var27)(var24);
                var13.children = var24;
                var13 = var14.bind(var3)(var23, var13);
                var8.children = var13;
                var10 = var14.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var19[var9];
                var10 = var18.bind(var3)(var9);
                var9 = {};
                var9.animatedProps = var11;
                var13 = var15.questDockHeaderContentExpanded;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var9.style = var11;
                var12 = 27;
                var11 = var19[var12];
                var11 = var16.bind(var3)(var11);
                var13 = var11.PressableOpacity;
                var11 = {};
                var11.onPress = var21;
                var21 = 'button';
                var11.accessibilityRole = var21;
                var24 = var15.questDockHeaderActionDisclosures;
                var23 = new Array(2);
                var23[0] = var24;
                var24 = var15.questDockHeaderTertiaryContent;
                var23[1] = var24;
                var11.style = var23;
                var23 = _closure1_slot14;
                var22 = {};
                var17 = var19[var17];
                var17 = var16.bind(var3)(var17);
                var24 = var17.Text;
                var17 = {
                    'color': 'interactive-text-active',
                    'variant': 'text-sm/medium'
                };
                var26 = var19[var25];
                var26 = var16.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var19[var25];
                var25 = var16.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.o6FLcF;
                var25 = var26.bind(var27)(var25);
                var17.children = var25;
                var17 = var14.bind(var3)(var24, var17);
                var24 = new Array(2);
                var24[0] = var17;
                var17 = 28;
                var17 = var19[var17];
                var17 = var16.bind(var3)(var17);
                var26 = var17.CircleQuestionIcon;
                var25 = {};
                var17 = 7;
                var27 = var19[var17];
                var27 = var18.bind(var3)(var27);
                var27 = var27.colors;
                var27 = var27.INTERACTIVE_TEXT_ACTIVE;
                var25.color = var27;
                var27 = var15.questDockHeaderActionDisclosuresIcon;
                var25.style = var27;
                var25 = var14.bind(var3)(var26, var25);
                var24[1] = var25;
                var22.children = var24;
                var22 = var7.bind(var3)(var23, var22);
                var11.children = var22;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(3);
                var11[0] = var13;
                var13 = {};
                var22 = var15.questDockHeaderActionSeparator;
                var13.style = var22;
                var13 = var14.bind(var3)(var6, var13);
                var11[1] = var13;
                var12 = var19[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.PressableOpacity;
                var12 = {};
                var12.accessibilityRole = var21;
                var12.onPress = var20;
                var15 = var15.questDockHeaderTertiaryContent;
                var12.style = var15;
                var15 = 29;
                var15 = var19[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.MoreHorizontalIcon;
                var15 = {};
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.colors;
                var17 = var17.INTERACTIVE_TEXT_ACTIVE;
                var15.color = var17;
                var15 = var14.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var9.children = var11;
                var9 = var7.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5190, 5215, 483, 33, 1297, 671, 4040, 10686, 5216, 5212, 10656, 5192, 5238, 3205, 3165, 3679, 5187, 6419, 10667, 4666, 10691, 10692, 10654, 3901, 1234, 4864, 9509, 8893, 2]);