// modules/quests/native/QuestDock/QuestDockHooks.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot7 = var6;
    var6 = var3.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot8 = var6;
    var6 = var3.QUEST_DOCK_EXTERNAL_OFFSET_CLOSED;
    var _closure1_slot9 = var6;
    var6 = var3.QUEST_DOCK_EXTERNAL_OFFSET_COLLAPSED;
    var _closure1_slot10 = var6;
    var6 = var3.QUEST_DOCK_EXTERNAL_OFFSET_EXPANDED;
    var _closure1_slot11 = var6;
    var6 = var3.QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED;
    var _closure1_slot12 = var6;
    var6 = var3.QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot13 = var6;
    var3 = var3.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function QuestDockHooksTsx1(){const{restingQuestDockMode,minExpandedContentHeight,windowDimensions,safeArea}=this.__closure;return{restingQuestDockMode:restingQuestDockMode.get(),minExpandedContentHeight:minExpandedContentHeight.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()};}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function QuestDockHooksTsx2(props,previous){const{cheapWorkletShallowEqual,QuestDockMode,runOnJS,setRestingQuestDockMode,questDockWrapperSpecs,QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED,getQuestDockCollapsedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,activeQuestDockMode,QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED,getQuestDockClosedWidth,QUEST_DOCK_CLOSED_HEIGHT,getQuestDockExpandedHeightLimits,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockExpandedWidth}=this.__closure;var _previous$restingQues;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{restingQuestDockMode:restingQuestDockMode,minExpandedContentHeight:minExpandedContentHeight,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea}=props;switch(restingQuestDockMode){case QuestDockMode.RESET_TO_PREVIOUS:runOnJS(setRestingQuestDockMode)((_previous$restingQues=previous===null||previous===void 0?void 0:previous.restingQuestDockMode)!==null&&_previous$restingQues!==void 0?_previous$restingQues:QuestDockMode.COLLAPSED);return;case QuestDockMode.COLLAPSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED*-1,width:getQuestDockCollapsedWidth(windowWidth,safeArea.left,safeArea.right),height:QUEST_DOCK_COLLAPSED_HEIGHT});activeQuestDockMode.set(QuestDockMode.COLLAPSED);break;case QuestDockMode.CLOSED:case QuestDockMode.SOFT_DISMISSED:questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED*-1,width:getQuestDockClosedWidth(windowWidth,safeArea.left,safeArea.right),height:QUEST_DOCK_CLOSED_HEIGHT});activeQuestDockMode.set(restingQuestDockMode);break;case QuestDockMode.EXPANDED:const minContentHeight=minExpandedContentHeight;const{minHeight:minHeight,maxHeight:maxHeight}=getQuestDockExpandedHeightLimits(windowHeight,safeArea.top,minContentHeight);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(questDockWrapperSpecs.get().height<=QUEST_DOCK_COLLAPSED_HEIGHT){height=maxHeight;}else if(previous!=null&&questDockWrapperSpecs.get().height===getQuestDockExpandedHeightLimits(previous.windowHeight,previous.safeArea.top,minContentHeight).maxHeight){height=maxHeight;}else if(questDockWrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=maxHeight;}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,width:getQuestDockExpandedWidth(windowWidth,safeArea.left,safeArea.right),height:height});activeQuestDockMode.set(QuestDockMode.EXPANDED);break;}}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useQuestDockModeAnimatedReaction, environment: var1
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 5;
        var2 = var9[var0];
        var0 = undefined;
        var2 = var8.bind(var0)(var2);
        var2 = var2.QuestDockGestureContext;
        var2 = var3.bind(var4)(var2);
        var7 = var2.questDockWrapperSpecs;
        var _closure2_slot0 = var7;
        var14 = var2.windowDimensions;
        var _closure2_slot1 = var14;
        var10 = var2.activeQuestDockMode;
        var _closure2_slot2 = var10;
        var15 = var2.minExpandedContentHeight;
        var _closure2_slot3 = var15;
        var3 = var4.useContext;
        var2 = 6;
        var2 = var9[var2];
        var2 = var8.bind(var0)(var2);
        var2 = var2.QuestDockExternalCoordinationContext;
        var2 = var3.bind(var4)(var2);
        var16 = var2.restingQuestDockMode;
        var _closure2_slot4 = var16;
        var11 = var2.setRestingQuestDockMode;
        var _closure2_slot5 = var11;
        var3 = _closure1_slot1;
        var2 = 7;
        var2 = var9[var2];
        var2 = var3.bind(var0)(var2);
        var13 = var2.bind(var0)();
        var _closure2_slot6 = var13;
        var12 = 8;
        var2 = var9[var12];
        var4 = var8.bind(var0)(var2);
        var3 = var4.useAnimatedReaction;
        var2 = function() { // Original name: o, environment: var1
            var0 = {};
            var3 = _closure2_slot4;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.restingQuestDockMode = var2;
            var3 = _closure2_slot3;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.minExpandedContentHeight = var2;
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var2.width;
            var0.windowWidth = var2;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var2.height;
            var0.windowHeight = var2;
            var2 = _closure2_slot6;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.safeArea = var1;
            return var0;
        };
        var6 = {};
        var6.restingQuestDockMode = var16;
        var6.minExpandedContentHeight = var15;
        var6.windowDimensions = var14;
        var6.safeArea = var13;
        var2.__closure = var6;
        var6 = 9502251090521.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot15;
        var2.__initData = var6;
        var1 = function(arg0, arg1) { // Original name: t, environment: var1
            _fun46661: for (var _fun46661_ip = 0;;) switch (_fun46661_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var2);
                    var6 = var7.cheapWorkletShallowEqual;
                    var4 = null;
                    var8 = var4 != var5;
                    var2 = undefined;
                    if (!var8) {
                        _fun46661_ip = 51;
                        continue _fun46661
                    }
                case 48:
                    var2 = var5;
                case 51:
                    var2 = var6.bind(var7)(var1, var2);
                    if (var2) {
                        _fun46661_ip = 897;
                        continue _fun46661
                    }
                case 63:
                    var6 = var1.restingQuestDockMode;
                    var17 = var1.minExpandedContentHeight;
                    var12 = var1.windowWidth;
                    var9 = var1.windowHeight;
                    var8 = var1.safeArea;
                    var1 = _closure1_slot6;
                    var1 = var1.RESET_TO_PREVIOUS;
                    if (!(var1 !== var6)) {
                        _fun46661_ip = 822;
                        continue _fun46661
                    }
                case 110:
                    var1 = _closure1_slot6;
                    var1 = var1.COLLAPSED;
                    if (!(var1 !== var6)) {
                        _fun46661_ip = 662;
                        continue _fun46661
                    }
                case 127:
                    var1 = _closure1_slot6;
                    var1 = var1.CLOSED;
                    if (!(var1 !== var6)) {
                        _fun46661_ip = 509;
                        continue _fun46661
                    }
                case 144:
                    var1 = _closure1_slot6;
                    var1 = var1.SOFT_DISMISSED;
                    if (!(var1 !== var6)) {
                        _fun46661_ip = 509;
                        continue _fun46661
                    }
                case 161:
                    var1 = _closure1_slot6;
                    var1 = var1.EXPANDED;
                    if (!(var1 === var6)) {
                        _fun46661_ip = 897;
                        continue _fun46661
                    }
                case 178:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var14 = 10;
                    var1 = var1[var14];
                    var7 = var2.bind(var0)(var1);
                    var2 = var7.getQuestDockExpandedHeightLimits;
                    var1 = var8.top;
                    var1 = var2.bind(var7)(var9, var1, var17);
                    var2 = var1.minHeight;
                    var11 = var1.maxHeight;
                    var7 = _closure2_slot0;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var7 = var2.height;
                    var2 = _closure1_slot8;
                    var2 = var7 <= var2;
                    if (var2) {
                        _fun46661_ip = 345;
                        continue _fun46661
                    }
                case 260:
                    var7 = var4 != var5;
                    if (!var7) {
                        _fun46661_ip = 342;
                        continue _fun46661
                    }
                case 267:
                    var10 = _closure2_slot0;
                    var9 = var10.get;
                    var9 = var9.bind(var10)();
                    var10 = var9.height;
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var16 = var13.bind(var0)(var9);
                    var15 = var16.getQuestDockExpandedHeightLimits;
                    var13 = var5.windowHeight;
                    var9 = var5.safeArea;
                    var9 = var9.top;
                    var9 = var15.bind(var16)(var13, var9, var17);
                    var9 = var9.maxHeight;
                    var7 = var10 === var9;
                case 342:
                    var2 = var7;
                case 345:
                    if (var2) {
                        _fun46661_ip = 366;
                        continue _fun46661
                    }
                case 348:
                    var7 = _closure2_slot0;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var2 = var2.height;
                case 366:
                    var9 = _closure2_slot0;
                    var7 = var9.set;
                    var2 = {};
                    var10 = var9.get;
                    var19 = var10.bind(var9)();
                    var20 = var2;
                    var10 = copyDataProperties(var20, var19);
                    var13 = 0;
                    var10 = 'x';
                    var2[var10] = var13;
                    var13 = _closure1_slot14;
                    var10 = 'y';
                    var2[var10] = var13;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var14];
                    var15 = var13.bind(var0)(var10);
                    var14 = var15.getQuestDockExpandedWidth;
                    var13 = var8.left;
                    var10 = var8.right;
                    var13 = var14.bind(var15)(var12, var13, var10);
                    var10 = 'width';
                    var2[var10] = var13;
                    var10 = 'height';
                    var2[var10] = var11;
                    var2 = var7.bind(var9)(var2);
                    var7 = _closure2_slot2;
                    var2 = var7.set;
                    var1 = _closure1_slot6;
                    var1 = var1.EXPANDED;
                    var1 = var2.bind(var7)(var1);
                    _fun46661_ip = 897;
                    continue _fun46661;
                case 509:
                    var9 = _closure2_slot0;
                    var7 = var9.set;
                    var2 = {};
                    var10 = var9.get;
                    var19 = var10.bind(var9)();
                    var20 = var2;
                    var10 = copyDataProperties(var20, var19);
                    var11 = 0;
                    var10 = 'x';
                    var2[var10] = var11;
                    var11 = _closure1_slot12;
                    var10 = -1;
                    var11 = var10 * var11;
                    var10 = 'y';
                    var2[var10] = var11;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 10;
                    var10 = var13[var10];
                    var14 = var11.bind(var0)(var10);
                    var13 = var14.getQuestDockClosedWidth;
                    var11 = var8.left;
                    var10 = var8.right;
                    var11 = var13.bind(var14)(var12, var11, var10);
                    var10 = 'width';
                    var2[var10] = var11;
                    var11 = _closure1_slot7;
                    var10 = 'height';
                    var2[var10] = var11;
                    var2 = var7.bind(var9)(var2);
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var6);
                    _fun46661_ip = 897;
                    continue _fun46661;
                case 662:
                    var7 = _closure2_slot0;
                    var6 = var7.set;
                    var2 = {};
                    var9 = var7.get;
                    var19 = var9.bind(var7)();
                    var20 = var2;
                    var9 = copyDataProperties(var20, var19);
                    var10 = 0;
                    var9 = 'x';
                    var2[var9] = var10;
                    var10 = _closure1_slot13;
                    var9 = -1;
                    var10 = var9 * var10;
                    var9 = 'y';
                    var2[var9] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 10;
                    var9 = var11[var9];
                    var11 = var10.bind(var0)(var9);
                    var10 = var11.getQuestDockCollapsedWidth;
                    var9 = var8.left;
                    var8 = var8.right;
                    var9 = var10.bind(var11)(var12, var9, var8);
                    var8 = 'width';
                    var2[var8] = var9;
                    var9 = _closure1_slot8;
                    var8 = 'height';
                    var2[var8] = var9;
                    var2 = var6.bind(var7)(var2);
                    var6 = _closure2_slot2;
                    var2 = var6.set;
                    var1 = _closure1_slot6;
                    var1 = var1.COLLAPSED;
                    var1 = var2.bind(var6)(var1);
                    _fun46661_ip = 897;
                    continue _fun46661;
                case 822:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.runOnJS;
                    var1 = _closure2_slot5;
                    var2 = var2.bind(var6)(var1);
                    var6 = var4 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun46661_ip = 874;
                        continue _fun46661
                    }
                case 868:
                    var1 = var5.restingQuestDockMode;
                case 874:
                    if (!(var4 == var1)) {
                        _fun46661_ip = 888;
                        continue _fun46661
                    }
                case 878:
                    var3 = _closure1_slot6;
                    var1 = var3.COLLAPSED;
                case 888:
                    var1 = var2.bind(var0)(var1);
                    var1 = undefined;
                    return var1;
                case 897:
                    return var0;
            }
        };
        var6 = {};
        var13 = 9;
        var13 = var9[var13];
        var13 = var8.bind(var0)(var13);
        var13 = var13.cheapWorkletShallowEqual;
        var6.cheapWorkletShallowEqual = var13;
        var13 = _closure1_slot6;
        var6.QuestDockMode = var13;
        var12 = var9[var12];
        var12 = var8.bind(var0)(var12);
        var12 = var12.runOnJS;
        var6.runOnJS = var12;
        var6.setRestingQuestDockMode = var11;
        var6.questDockWrapperSpecs = var7;
        var7 = _closure1_slot13;
        var6.QUEST_DOCK_VERTICAL_EDGE_GUTTER_COLLAPSED = var7;
        var7 = 10;
        var11 = var9[var7];
        var11 = var8.bind(var0)(var11);
        var11 = var11.getQuestDockCollapsedWidth;
        var6.getQuestDockCollapsedWidth = var11;
        var11 = _closure1_slot8;
        var6.QUEST_DOCK_COLLAPSED_HEIGHT = var11;
        var6.activeQuestDockMode = var10;
        var10 = _closure1_slot12;
        var6.QUEST_DOCK_VERTICAL_EDGE_GUTTER_CLOSED = var10;
        var10 = var9[var7];
        var10 = var8.bind(var0)(var10);
        var10 = var10.getQuestDockClosedWidth;
        var6.getQuestDockClosedWidth = var10;
        var10 = _closure1_slot7;
        var6.QUEST_DOCK_CLOSED_HEIGHT = var10;
        var10 = var9[var7];
        var10 = var8.bind(var0)(var10);
        var10 = var10.getQuestDockExpandedHeightLimits;
        var6.getQuestDockExpandedHeightLimits = var10;
        var10 = _closure1_slot14;
        var6.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED = var10;
        var7 = var9[var7];
        var7 = var8.bind(var0)(var7);
        var7 = var7.getQuestDockExpandedWidth;
        var6.getQuestDockExpandedWidth = var7;
        var1.__closure = var6;
        var6 = 8147170339175.0;
        var1.__workletHash = var6;
        var5 = _closure1_slot16;
        var1.__initData = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useQuestDockModeAnimatedReaction = var3;
    var3 = function() { // Original name: useQuestDockExternalOffset, environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 11;
        var2 = var4[var2];
        var5 = undefined;
        var6 = var3.bind(var5)(var2);
        var4 = var6.useStateFromStoresArray;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var2 = var1.prevRestingQuestDockMode;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.isVisible;
            var0[1] = var1;
            return var0;
        };
        var4 = var4.bind(var6)(var3, var2);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var5)(var4, var2);
        var2 = 0;
        var4 = var3[var2];
        var _closure2_slot0 = var4;
        var2 = 1;
        var5 = var3[var2];
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun46664: for (var _fun46664_ip = 0;;) switch (_fun46664_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun46664_ip = 14;
                        continue _fun46664
                    }
                case 10:
                    var1 = 0;
                    return var1;
                case 14:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.COLLAPSED;
                    if (!(var1 !== var2)) {
                        _fun46664_ip = 93;
                        continue _fun46664
                    }
                case 35:
                    var1 = _closure1_slot6;
                    var1 = var1.EXPANDED;
                    if (!(var1 !== var2)) {
                        _fun46664_ip = 87;
                        continue _fun46664
                    }
                case 49:
                    var1 = _closure1_slot6;
                    var1 = var1.CLOSED;
                    if (!(var1 !== var2)) {
                        _fun46664_ip = 81;
                        continue _fun46664
                    }
                case 63:
                    var1 = _closure1_slot6;
                    var1 = var1.SOFT_DISMISSED;
                    if (!(var1 !== var2)) {
                        _fun46664_ip = 81;
                        continue _fun46664
                    }
                case 77:
                    var1 = 0;
                    return var1;
                case 81:
                    var1 = _closure1_slot9;
                    return var1;
                case 87:
                    var1 = _closure1_slot11;
                    return var1;
                case 93:
                    var0 = _closure1_slot10;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuestDockExternalOffset = var3;
    var3 = function() { // Original name: useQuestDockDismissalReset, environment: var1
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 6;
        var2 = var7[var0];
        var0 = undefined;
        var2 = var5.bind(var0)(var2);
        var2 = var2.QuestDockExternalCoordinationContext;
        var2 = var3.bind(var4)(var2);
        var6 = var2.setRestingQuestDockMode;
        var _closure2_slot0 = var6;
        var3 = var4.useContext;
        var2 = 5;
        var2 = var7[var2];
        var2 = var5.bind(var0)(var2);
        var2 = var2.QuestDockGestureContext;
        var2 = var3.bind(var4)(var2);
        var5 = var2.activeQuestDockMode;
        var _closure2_slot1 = var5;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var4 = function() { // Original name: maybeResetSoftDismissal, environment: var0
                _fun46667: for (var _fun46667_ip = 0;;) switch (_fun46667_ip) {
                    case 0:
                        var2 = _closure2_slot1;
                        var0 = var2.get;
                        var3 = var0.bind(var2)();
                        var2 = _closure1_slot6;
                        var2 = var2.SOFT_DISMISSED;
                        var2 = var3 !== var2;
                        if (var2) {
                            _fun46667_ip = 79;
                            continue _fun46667
                        }
                    case 36:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 10;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isSoftDismissed;
                        var3 = _closure1_slot5;
                        var3 = var3.questDockSoftDismissedAt;
                        var2 = var4.bind(var5)(var3);
                    case 79:
                        if (var2) {
                            _fun46667_ip = 103;
                            continue _fun46667
                        }
                    case 82:
                        var2 = _closure2_slot0;
                        var0 = _closure1_slot6;
                        var1 = var0.COLLAPSED;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 103:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = undefined;
            var1 = var4.bind(var3)();
            var1 = global;
            var2 = var1.setInterval;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.Millis;
            var5 = var1.MINUTE;
            var1 = 5;
            var1 = var1 * var5;
            var1 = var2.bind(var3)(var4, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearInterval;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useQuestDockDismissalReset = var3;
    var1 = function(arg0) { // Original name: useActionSheetPressHandler, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useTrackQuestContentClickedWithImpression;
        var4 = var2.bind(var3)();
        var _closure2_slot1 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var5 = _closure2_slot1;
            var4 = {};
            var1 = _closure2_slot0;
            var0 = var1.id;
            var4.questId = var0;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 14;
            var8 = var2[var7];
            var0 = undefined;
            var8 = var6.bind(var0)(var8);
            var8 = var8.QuestContent;
            var8 = var8.QUEST_BAR_MOBILE;
            var4.questContent = var8;
            var8 = 15;
            var8 = var2[var8];
            var8 = var6.bind(var0)(var8);
            var8 = var8.QuestContentCTA;
            var8 = var8.OPEN_CONTEXT_MENU;
            var4.questContentCTA = var8;
            var7 = var2[var7];
            var7 = var6.bind(var0)(var7);
            var7 = var7.QuestContent;
            var7 = var7.QUEST_BAR_MOBILE;
            var4.sourceQuestContent = var7;
            var4 = var5.bind(var0)(var4);
            var4 = _closure1_slot1;
            var3 = 16;
            var3 = var2[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = 18;
            var3 = var2[var3];
            var6 = var6.bind(var0)(var3);
            var3 = 17;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var6.bind(var0)(var3, var2);
            var2 = {};
            var2.quest = var1;
            var1 = 'QuestDockContextMenuActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useActionSheetPressHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5213, 5190, 5215, 5216, 5219, 5261, 3679, 5263, 5214, 566, 667, 5264, 5192, 5238, 3237, 5273, 1307, 2]);